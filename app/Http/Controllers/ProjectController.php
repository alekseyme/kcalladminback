<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Project;
use App\ClientProject;
use App\OperProject;
use App\User;
use DB;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = Project::orderBy('name', 'ASC')->get();
        return response($projects, 200);
    }

    public function userprojects(Request $request)
    {   
        if (auth()->user()->role === 0) {
            $projects = Project::orderBy('name', 'ASC')->get();
            return response($projects, 200);
        }

        $projects = auth()->user()->projects()->orderBy('name', 'ASC')->get();
        return response($projects, 200);
    }
    
    public function editrow(Request $request, $id)
    {
        $row = DB::table('_base_'.$request->project)->where('id', $id);

        $updateData = $request->except(['project']);

        $row->update($updateData);

        return response()->json([
            'message'=>'Запись успешно обновлена',
            'row'=>$row->first()
        ]);
    }

    public function search(Request $request)
    {   
        $activeproject = $request->project;
        $per_page = $request->per_page;

        $query = DB::table('_base_'.$activeproject);

        $uniquestatus = DB::table('_base_'.$activeproject)->select('status')->distinct()->pluck('status');

        if ($request->filled('from')) {
            $query->where('time', '>=', $request->from.' 00:00:00');
        }

        if ($request->filled('to')) {
            $query->where('time', '<=', $request->to.' 23:59:59');
        }

        if ($request->filled('phone')) {
            $query->where('number', 'LIKE', '%'.$request->phone.'%');
        }

        if ($request->filled('operator')) {
            $query->where('operator', 'LIKE', '%'.$request->operator.'%');
        }

        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        $project = $query->orderBy('id', 'DESC')->paginate($per_page ? $per_page : 20);

        return response()->json([
            'paginate' => $project,
            'statuses' => $uniquestatus,
        ]);
    }

    public function export(Request $request)
    {   
        $activeproject = $request->project;

        $query = DB::table('_base_'.$activeproject);

        if ($request->filled('from')) {
            $query->where('time', '>=', $request->from.' 00:00:00');
        }

        if ($request->filled('to')) {
            $query->where('time', '<=', $request->to.' 23:59:59');
        }

        if ($request->filled('phone')) {
            $query->where('number', 'LIKE', '%'.$request->phone.'%');
        }

        if ($request->filled('operator')) {
            $query->where('operator', 'LIKE', '%'.$request->operator.'%');
        }

        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        $project = $query->select($request->fields)->orderBy('id', 'DESC')->get();

        return response($project, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $project = Project::create([
            'name' => $request->name,
            'tablename' => $request->tablename,
            'changes' => $request->changes,
            'table_header' => $request->table_header,
            'table_row' => $request->table_row,
            'client_available' => $request->client_available,
            'oper_available' => $request->oper_available,
        ]);

        if ($request->oper_available)
        {
            $oper_project = OperProject::create([
                'id' => $project->id,
                'name' => $request->name,
                'type' => 0,
                'scriptlink' => $request->scriptlink,
            ]);
        }

        if ($request->client_available)
        {
            $client_project = ClientProject::create([
                'id' => $project->id,
                'name' => $request->name,
                'tablename' => $request->tablename,
                'table_header_client' => $request->table_header_client,
                'table_row_client' => $request->table_row_client,
            ]);
        }

        if($request->input('users'))
        {
            $project->users()->attach($request->input('users'));
        }

        return response()->json([
            'status' => 200,
            'project' => $project,
            'message'=>'Проект успешно создан'
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $project = Project::with('users')->find($id);
        $oa = $project->oper_available;
        $ca = $project->client_available;

        if ($oa)
        {
            $oper_project = OperProject::find($id);
            $project = collect($project)->merge(collect($oper_project));
        }

        if ($ca)
        {
            $client_project = ClientProject::find($id);
            $project = collect($project)->merge(collect($client_project));
        }

        return $project;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $is_available_client = $request->input('client_available');
        $is_available_oper = $request->input('oper_available');
        
        #region admin project update
        $project = Project::find($id);

        $project->name = $request->input('name');
        $project->tablename = $request->input('tablename');
        $project->changes = $request->input('changes');
        $project->table_header = $request->input('table_header');
        $project->table_row = $request->input('table_row');
        $project->client_available = $request->input('client_available');
        $project->oper_available = $request->input('oper_available');

        $project->update();

        $project->users()->detach();
        if($request->input('users'))
        {
            $project->users()->attach($request->input('users'));
        }
        #endregion admin project update

        #region oper project update
        if ($is_available_oper) {
            $oper_project = OperProject::find($id);

            if (!$oper_project) {
                $oper_project = OperProject::create([
                    'id' => $project->id,
                    'name' => $request->name,
                    'type' => 0,
                    'scriptlink' => $request->scriptlink,
                ]);
            }
            else {
                $oper_project->name = $request->input('name');
                $oper_project->type = 0;
                $oper_project->scriptlink = $request->input('scriptlink');
    
                $oper_project->update();
            } 
        }
        else {
            $oper_project = ClientProject::find($id);
            if ($oper_project) {
                $oper_project->users()->detach();
                $oper_project->delete();
            }            
        }
        #endregion oper project update

        #region client project update
        if ($is_available_client) {
            $client_project = ClientProject::find($id);

            if (!$client_project) {
                $client_project = ClientProject::create([
                    'id' => $project->id,
                    'name' => $request->name,
                    'tablename' => $request->tablename,
                    'table_header_client' => $request->table_header_client,
                    'table_row_client' => $request->table_row_client,
                ]);
            }
            else {
                $client_project->name = $request->input('name');
                $client_project->tablename = $request->input('tablename');
                $client_project->table_header_client = $request->input('table_header_client');
                $client_project->table_row_client = $request->input('table_row_client');
    
                $client_project->update();
            }           
        }
        else {
            $client_project = ClientProject::find($id);
            if ($client_project) {
                $client_project->users()->detach();
                $client_project->delete();
            }            
        }
        #endregion client project update

        return response()->json([
            'status' => 200,
            'project' => $project,
            'message'=>'Проект успешно обновлён'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {   
        $project = Project::find($id);
        $project->users()->detach();
        $project->delete();

        if ($project->oper_available) {
            $oper_project = OperProject::find($id);
            $oper_project->users()->detach();
            $oper_project->delete();
        }

        if ($project->client_available) {
            $client_project = ClientProject::find($id);
            $client_project->users()->detach();
            $client_project->delete();
        }

        return response()->json([
            'message'=>'Проект успешно удалён'
        ]);
    }
}

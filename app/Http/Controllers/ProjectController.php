<?php

namespace App\Http\Controllers;

use App\Exports\ProjectsExport;
use Maatwebsite\Excel\Facades\Excel;

use Illuminate\Http\Request;
use App\Project;
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
        if (auth()->user()->isadmin) {
            $projects = Project::orderBy('name', 'ASC')->get();
            return response($projects, 200);
        }

        $projects = Project::whereHas('users', function ($query) {
            $query->where('user_id', auth()->user()->id);
        })->orderBy('name', 'ASC')->get();
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
            $query->where('number', $request->phone);
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
            $query->where('number', $request->phone);
        }

        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        $project = $query->orderBy('id', 'DESC')->get();

        return response($project, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
            'base_header' => $request->base_header,
            'base_row' => $request->base_row,
        ]);

        if($request->input('users'))
        {
            $project->users()->attach($request->input('users'));
        }

        return response()->json([
            'status' => 200,
            'name' => $project->name,
            'tablename' => $project->tablename,
            'changes' => $project->changes,
            'message'=>'Проект успешно создан'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $project = Project::find($id);
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
        $project = Project::find($id);

        $project->name = $request->input('name');
        $project->tablename = $request->input('tablename');
        $project->changes = $request->input('changes');
        $project->base_header = $request->input('base_header');
        $project->base_row = $request->input('base_row');

        $project->update();

        $project->users()->detach();
        if($request->input('users'))
        {
            $project->users()->attach($request->input('users'));
        }

        return response()->json([
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

        return response()->json([
            'message'=>'Проект успешно удалён'
        ]);
    }
}

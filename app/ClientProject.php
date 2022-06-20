<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class ClientProject extends Model
{
    protected $connection = 'mysql_client';
    protected $table = 'projects';

    protected $fillable = [
        'id', 'name', 'tablename', 'changes', 'table_header_client', 'table_row_client',
    ];

    protected $hidden = [
        'id', 'name', 'tablename', 'created_at', 'updated_at'
    ];

    public function users()
    {
        return $this->belongsToMany(User::class, 'project_user', 'project_id', 'user_id');
    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class OperProject extends Model
{
    protected $connection = 'mysql_oper';
    protected $table = 'projects';

    protected $fillable = [
        'id', 'name', 'type', 'scriptlink'
    ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];

    public function users()
    {
        return $this->belongsToMany(User::class, 'project_user', 'project_id', 'user_id');
    }
}

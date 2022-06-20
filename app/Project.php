<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Project extends Model
{
    protected $fillable = [
        'name', 'tablename', 'changes', 'table_header', 'table_row', 'client_available', 'oper_available'
    ];

    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}

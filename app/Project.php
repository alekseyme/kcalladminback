<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Project extends Model
{
    protected $fillable = [
        'name', 'tablename', 'changes', 'base_header', 'base_row'
    ];

    protected $with = ['users'];
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}

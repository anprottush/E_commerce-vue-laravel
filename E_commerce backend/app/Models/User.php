<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use MongoDB\Laravel\Auth\User as Authenticatable;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;
    // protected $table = 'users';
    // protected $primaryKey = 'id';
    protected $fillable = [
        'name',
        'email',
        'password',
        'phone',
        'address',
        'usertype',
    ];

    protected $hidden = [
        'password',

    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

}

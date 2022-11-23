<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;
use Spatie\SchemalessAttributes\SchemalessAttributes;
use Venturecraft\Revisionable\RevisionableTrait;
use Spatie\SchemalessAttributes\SchemalessAttributesTrait;


class User extends Authenticatable
{
    use HasFactory;
    use Notifiable;
    use RevisionableTrait;
    use HasRoles;
    use SchemalessAttributesTrait;

    protected $schemalessAttributes = [
        'settings'
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'username',
        'email',
        'phone',
        'password',
        'address',
        'city',
        'state',
        'zip'
    ];


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'settings' => SchemalessAttributes::class
    ];

    public function scopeWithSettings(): Builder
    {
        return $this->settings->modelScope();
    }

    public function getIsAdminAttribute()
    {
        return $this->hasRole('superadmin') || $this->hasRole('admin');
    }

    public function getIsSuperAdminAttribute()
    {
        return $this->hasRole('superadmin');
    }

}

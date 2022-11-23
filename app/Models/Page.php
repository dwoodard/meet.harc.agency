<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Page extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $guarded = [];

}

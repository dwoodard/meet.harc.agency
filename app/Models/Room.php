<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;


    // once a room is done, should it be deleted or just marked as inactive?
    // typically room should be deleted once it is done and no longer needed
    // a good reason to keep it is if you want to keep the chat history
    // when a room is deleted, all the messages in the room should be deleted as well
    // it would be a good idea to keep a record of the messages in a separate table
    // so that you can keep the chat history
    // so maybe instead of keeping the room, you can keep the messages
    // and when a room is deleted, the messages are deleted as well

    // 

    // table name
    protected $table = 'rooms';

    // fillable fields
    protected $fillable = [
        'uid',
        'name',
        'description',
        'owner_id',
    ];

    // hidden fields
    protected $hidden = [
        'created_at',
        'updated_at',
    ];
 
    // relationships
    public function owner()
    {
        return $this->belongsTo(User::class, 'owner_id');
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'room_users', 'room_id', 'user_id');
    }

     

}

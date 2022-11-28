<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RoomTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function admin_can_view_all_rooms()
    {
        // create a user
        $user = User::factory()->create();
        $user->assignRole('admin');

        // login as the user
        $this->actingAs($user);
        
        // get all rooms
        $response = $this->get('/rooms');

        // assert status code
        $response->assertStatus(200);
        
        // is user logged in as admin?
        $this->assertAuthenticatedAs($user);
    }

    /**
     * @test 
     * a user can only view rooms that they created
     */
    public function user_can_only_view_rooms_they_created()
    {
        // create a user
        $user = User::factory()->create();
        $user->assignRole('user');
        $this->actingAs($user);

        // get all rooms
        $response = $this->get('/rooms');

        // assert status code
        $response->assertStatus(403);
    }
         
}

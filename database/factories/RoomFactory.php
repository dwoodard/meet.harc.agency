<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class RoomFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $user = \App\Models\User::inRandomOrder()->first();
        
        return [
            // uid - unique id of 5 characters all lowercase
            'uid' => strtolower(Str::random(5)),
            // name is referring to the room name and not the user name
            'name' => $this->faker->words(3, true),
            // description of the room
            'description' => $this->faker->sentence(),
            // owner id - the user who created the room
            'owner_id' => $user->id,
            //soft delete percentage of 20%
            'deleted_at' => fn() => $this->faker->boolean(20) ? now() : null,    
        ];
    }
}

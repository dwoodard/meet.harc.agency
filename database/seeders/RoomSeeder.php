<?php

namespace Database\Seeders;


use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class RoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // generate 10 rooms
        \App\Models\Room::factory()->count(20)->create();
    }
}

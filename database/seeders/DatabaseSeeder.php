<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Admin PCR',
            'email' => 'admin@pcr.ac.id',
            'role' => 'admin',
        ]);

        User::factory()->create([
            'name' => 'Ahmad Syauqi, M.Kom',
            'email' => 'dosen@pcr.ac.id',
            'role' => 'dosen',
            'nip' => '1029384756',
        ]);
    }
}

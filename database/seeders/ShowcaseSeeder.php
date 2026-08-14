<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Course;
use App\Models\Product;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class ShowcaseSeeder extends Seeder
{
    /**
     * Data secukupnya untuk menguji area dosen selama halaman login
     * masih dikerjakan anggota lain.
     */
    public function run(): void
    {
        $dosen = User::updateOrCreate(
            ['email' => 'dosen@polibatam.ac.id'],
            [
                'name' => 'Dr. Rina Kurniawati',
                'password' => Hash::make('password'),
                'role' => 'dosen',
                'nip' => '198504122010012001',
            ],
        );

        $dosenLain = User::updateOrCreate(
            ['email' => 'budi@polibatam.ac.id'],
            [
                'name' => 'Budi Santoso, M.Kom.',
                'password' => Hash::make('password'),
                'role' => 'dosen',
                'nip' => '199003152015041002',
            ],
        );

        User::updateOrCreate(
            ['email' => 'admin@polibatam.ac.id'],
            [
                'name' => 'Admin Prodi',
                'password' => Hash::make('password'),
                'role' => 'admin',
            ],
        );

        $categories = collect([
            ['name' => 'Web Application', 'icon' => 'globe'],
            ['name' => 'Mobile Application', 'icon' => 'smartphone'],
            ['name' => 'IoT & Hardware', 'icon' => 'cpu'],
            ['name' => 'Data & AI', 'icon' => 'brain'],
            ['name' => 'Game', 'icon' => 'gamepad'],
        ])->map(fn (array $c) => Category::updateOrCreate(
            ['slug' => Str::slug($c['name'])],
            ['name' => $c['name'], 'icon' => $c['icon']],
        ));

        $courses = collect([
            ['name' => 'Project Based Learning', 'code' => 'PBL'],
            ['name' => 'Proyek Akhir', 'code' => 'PA'],
            ['name' => 'Teknologi Informasi Cerdas', 'code' => 'TIC'],
            ['name' => 'Deep Learning', 'code' => 'DL'],
        ])->map(fn (array $c) => Course::updateOrCreate(
            ['name' => $c['name']],
            ['code' => $c['code']],
        ));

        $tags = collect(['Laravel', 'React', 'Flutter', 'Python', 'Arduino', 'MySQL', 'TensorFlow'])
            ->map(fn (string $name) => Tag::updateOrCreate(
                ['slug' => Str::slug($name)],
                ['name' => $name],
            ));

        $samples = [
            [
                'title' => 'NutriChain MBG',
                'status' => 'published',
                'category' => 'Web Application',
                'course' => 'Project Based Learning',
                'tags' => ['Laravel', 'MySQL'],
                'students' => [
                    ['name' => 'Andi Pratama', 'nim' => '3312301001', 'role' => 'Manager Project'],
                    ['name' => 'Sari Melati', 'nim' => '3312301002', 'role' => 'Development Team'],
                ],
                'pembimbing_kedua' => true,
            ],
            [
                'title' => 'SmartFarm Monitoring',
                'status' => 'published',
                'category' => 'IoT & Hardware',
                'course' => 'Proyek Akhir',
                'tags' => ['Arduino', 'Python'],
                'students' => [
                    ['name' => 'Reza Fahlevi', 'nim' => '3312301010', 'role' => 'Manager Project'],
                ],
                'pembimbing_kedua' => false,
            ],
            [
                'title' => 'Klasifikasi Penyakit Daun Cabai',
                'status' => 'draft',
                'category' => 'Data & AI',
                'course' => 'Deep Learning',
                'tags' => ['Python', 'TensorFlow'],
                'students' => [
                    ['name' => 'Nadia Putri', 'nim' => '3312301021', 'role' => 'Development Team'],
                ],
                'pembimbing_kedua' => false,
            ],
            [
                'title' => 'Sistem Antrean Poliklinik',
                'status' => 'archived',
                'category' => 'Mobile Application',
                'course' => 'Project Based Learning',
                'tags' => ['Flutter'],
                'students' => [
                    ['name' => 'Yoga Saputra', 'nim' => '3312301033', 'role' => 'Manager Project'],
                ],
                'pembimbing_kedua' => false,
            ],
        ];

        foreach ($samples as $sample) {
            $product = Product::updateOrCreate(
                ['slug' => Str::slug($sample['title'])],
                [
                    'title' => $sample['title'],
                    'description' => 'Deskripsi contoh untuk '.$sample['title'].'. Produk ini dibuat oleh seeder sebagai data uji area dosen.',
                    'category_id' => $categories->firstWhere('name', $sample['category'])->id,
                    'course_id' => $courses->firstWhere('name', $sample['course'])->id,
                    'academic_year' => '2025/2026',
                    'semester' => 'ganjil',
                    'demo_link' => 'https://example.com/demo',
                    'video_link' => 'https://youtube.com/watch?v=example',
                    'status' => $sample['status'],
                    'created_by' => $dosen->id,
                    'published_at' => $sample['status'] === 'published' ? now() : null,
                ],
            );

            $pembimbing = [$dosen->id];
            if ($sample['pembimbing_kedua']) {
                $pembimbing[] = $dosenLain->id;
            }
            $product->dosen()->sync($pembimbing);

            $product->tags()->sync(
                $tags->whereIn('name', $sample['tags'])->pluck('id')->all(),
            );

            $product->students()->delete();
            $product->students()->createMany($sample['students']);
        }
    }
}

<?php

use App\Http\Controllers\Dosen\ProductController;
use App\Http\Controllers\Dosen\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'appName' => config('app.name'),
    ]);
});

/*
 * Area dosen. Middleware `auth` sengaja tetap dipasang meskipun halaman
 * login masih dikerjakan anggota lain — begitu login jadi, bagian ini
 * langsung tersambung tanpa perlu diubah.
 */
Route::middleware(['auth', 'dosen'])
    ->prefix('dosen')
    ->name('dosen.')
    ->group(function () {
        Route::redirect('/', '/dosen/produk')->name('dashboard');

        Route::resource('produk', ProductController::class)
            ->parameters(['produk' => 'product'])
            ->names('products')
            ->except(['show']);

        Route::get('profil', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::put('profil', [ProfileController::class, 'update'])->name('profile.update');
        Route::put('profil/password', [ProfileController::class, 'updatePassword'])
            ->name('profile.password');

        Route::post('logout', [ProfileController::class, 'logout'])->name('logout');
    });

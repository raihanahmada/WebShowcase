<?php

use App\Http\Controllers\Dosen\ProductController as DosenProductController;
use App\Http\Controllers\Dosen\ProfileController;
use App\Http\Controllers\Guest\HomeController;
use App\Http\Controllers\Guest\ProductController;
use Illuminate\Support\Facades\Route;

Route::name('guest.')->group(function () {
    Route::get('/', [HomeController::class, 'index'])->name('home');
    Route::get('/produk/{product}', [ProductController::class, 'show'])->name('products.show');
});

require __DIR__.'/auth.php';

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

        Route::resource('produk', DosenProductController::class)
            ->parameters(['produk' => 'product'])
            ->names('products')
            ->except(['show']);

        Route::get('profil', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::put('profil', [ProfileController::class, 'update'])->name('profile.update');
        Route::put('profil/password', [ProfileController::class, 'updatePassword'])
            ->name('profile.password');

        Route::post('logout', [ProfileController::class, 'logout'])->name('logout');
    });

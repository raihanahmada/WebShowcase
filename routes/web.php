<?php

use App\Http\Controllers\Guest\HomeController;
use App\Http\Controllers\Guest\ProductController;
use Illuminate\Support\Facades\Route;

Route::name('guest.')->group(function () {
    Route::get('/', [HomeController::class, 'index'])->name('home');
    Route::get('/produk/{product}', [ProductController::class, 'show'])->name('products.show');
});

require __DIR__.'/auth.php';

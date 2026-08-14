<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    public function show(string $product)
    {
        return view('guest.show');
    }
}

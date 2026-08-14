@extends('layouts.guest')

@section('title', 'Masuk - ARSIP KARYA')

@section('content')
<header class="w-full border-b border-primary max-w-[1440px] px-margin-mobile md:px-margin-desktop py-6 flex justify-between items-center mx-auto">
    <a class="flex items-center gap-2 text-primary hover:text-on-surface-variant transition-colors group" href="{{ route('guest.home') }}">
        <span class="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
        <span class="font-label-mono text-label-mono">Kembali ke katalog</span>
    </a>
    <div class="font-metadata-caps text-metadata-caps text-on-surface-variant">
        AKSES TERBATAS
    </div>
</header>

<main class="flex-grow w-full max-w-[480px] mx-auto px-margin-mobile md:px-margin-desktop py-margin-desktop flex flex-col justify-center">
    <div class="border border-primary bg-surface-container-lowest p-plaque-padding flex flex-col gap-8 relative">
        <div class="absolute top-0 left-0 bg-primary text-on-primary font-metadata-caps text-metadata-caps px-3 py-1 rounded-br-lg torn-tab">LOGIN</div>

        <div class="flex flex-col gap-2 mt-4 text-center">
            <h1 class="font-headline-lg text-headline-lg text-primary">Masuk Dosen/Admin</h1>
            <p class="font-body-sm text-body-sm text-on-surface-variant">Khusus untuk dosen &amp; admin pengelola arsip karya.</p>
        </div>

        @session('status')
            <div class="border border-tertiary-container bg-tertiary-fixed/20 text-on-tertiary-container px-4 py-3 font-label-mono text-label-mono">
                {{ session('status') }}
            </div>
        @endsession

        <form method="POST" action="{{ route('login.store') }}" class="flex flex-col gap-6">
            @csrf

            <div class="flex flex-col gap-2">
                <label for="email" class="font-metadata-caps text-metadata-caps text-on-surface-variant">EMAIL</label>
                <input id="email" name="email" type="email" value="{{ old('email') }}" required autofocus
                    class="w-full bg-transparent border-0 border-b-2 border-primary focus:ring-0 focus:border-primary font-body-main text-body-main px-1 py-2 rounded-none">
                @error('email')
                    <span class="font-label-mono text-label-mono text-error">{{ $message }}</span>
                @enderror
            </div>

            <div class="flex flex-col gap-2">
                <label for="password" class="font-metadata-caps text-metadata-caps text-on-surface-variant">PASSWORD</label>
                <input id="password" name="password" type="password" required
                    class="w-full bg-transparent border-0 border-b-2 border-primary focus:ring-0 focus:border-primary font-body-main text-body-main px-1 py-2 rounded-none">
                @error('password')
                    <span class="font-label-mono text-label-mono text-error">{{ $message }}</span>
                @enderror
            </div>

            <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" name="remember" class="rounded border-primary text-primary focus:ring-primary">
                <span class="font-label-mono text-label-mono text-on-surface-variant">Ingat saya</span>
            </label>

            <button type="submit" class="bg-primary text-on-primary font-label-mono text-label-mono px-6 py-3 rounded uppercase tracking-wider hover:bg-primary-container transition-colors">
                Masuk
            </button>
        </form>
    </div>
</main>

@include('partials.guest.footer')
@endsection

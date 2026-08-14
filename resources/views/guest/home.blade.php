@extends('layouts.guest')

@section('title', 'ARSIP KARYA - Politeknik Caltex Riau')

@section('content')
@include('partials.guest.header')

<main class="grow w-full max-w-300 mx-auto px-margin-mobile md:px-margin-desktop py-margin-desktop flex flex-col gap-12">
    {{-- Search Section --}}
    <section class="relative flex flex-col gap-8 w-full mb-4 overflow-hidden">
        <div class="absolute -top-10 -left-16 w-72 h-72 bg-secondary-container/25 rounded-full blob -z-10"></div>
        <div class="absolute -top-20 right-0 w-80 h-80 bg-tertiary-fixed/40 rounded-full blob -z-10"></div>

        <div class="w-full flex flex-col items-center text-center gap-6 mx-auto animate-fade-up">
            <div class="flex items-center gap-2 px-4 py-1.5 rounded-full border border-outline-variant bg-surface-container-lowest shadow-sm">
                <span class="material-symbols-outlined text-secondary-container text-body-sm">rocket_launch</span>
                <span class="font-metadata-caps text-metadata-caps text-on-surface-variant">Karya Inovatif &amp; Berdampak</span>
            </div>
            <h2 class="font-headline-xl text-headline-xl md:text-headline-xl text-primary font-bold tracking-tight">
                Project <span class="relative inline-block">Showcase<span class="absolute left-0 -bottom-1 w-full h-2.5 bg-secondary-container/50 -z-10 rounded-full"></span></span>
            </h2>
            <p class="font-body-main text-body-main text-on-surface-variant leading-relaxed max-w-3xl">
                Galeri portofolio produk unggulan hasil mahasiswa D4 Teknik Informatika Politeknik Caltex Riau.
            </p>
        </div>

        <div class="w-full aspect-video bg-surface-container-high border-2 border-primary rounded-2xl flex items-center justify-center group cursor-pointer relative overflow-hidden shadow-xl hover:shadow-2xl transition-shadow animate-fade-up delay-2">
            <div class="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary-container/10 group-hover:opacity-80 transition-opacity"></div>
            <div class="flex flex-col items-center gap-4 z-10">
                <div class="relative flex items-center justify-center">
                    <span class="absolute w-16 h-16 rounded-full bg-primary/20 animate-ping-slow"></span>
                    <div class="relative w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center bg-surface shadow-lg group-hover:scale-110 transition-transform">
                        <span class="material-symbols-outlined text-primary text-4xl">play_arrow</span>
                    </div>
                </div>
                <span class="font-metadata-caps text-metadata-caps tracking-widest uppercase">Lihat Showreel PBL</span>
            </div>
            <div class="absolute bottom-4 right-4 font-label-mono text-[10px] opacity-50 uppercase">Ref: PCR-PBL-2024</div>
        </div>
    </section>

    <section class="flex flex-col gap-6 w-full animate-fade-up delay-1">
        <div class="flex flex-col md:flex-row gap-4 w-full">
            <div class="grow relative rounded-full border-2 border-primary bg-surface-container-lowest flex items-center px-5 py-3 focus-within:shadow-lg transition-shadow">
                <span class="material-symbols-outlined text-outline mr-3">search</span>
                <input class="w-full bg-transparent border-none outline-none font-body-main text-body-main placeholder-outline focus:ring-0 p-0" placeholder="Cari judul, mentor, atau teknologi..." type="text">
            </div>
            <div class="relative rounded-full border-2 border-primary bg-surface-container-lowest flex items-center px-5 py-3 min-w-50 cursor-pointer hover:shadow-lg transition-shadow">
                <span class="font-metadata-caps text-metadata-caps grow">Tahun Ajaran</span>
                <span class="material-symbols-outlined text-outline">expand_more</span>
            </div>
        </div>

        {{-- Category Tabs (Filters) --}}
        <div class="flex flex-wrap gap-3">
            <button class="font-metadata-caps text-metadata-caps bg-primary text-on-primary px-4 py-2 rounded-full shadow-sm">SEMUA</button>
            <button class="font-metadata-caps text-metadata-caps text-on-surface-variant border border-outline-variant px-4 py-2 rounded-full hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all">WEB</button>
            <button class="font-metadata-caps text-metadata-caps text-on-surface-variant border border-outline-variant px-4 py-2 rounded-full hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all">MOBILE</button>
            <button class="font-metadata-caps text-metadata-caps text-on-surface-variant border border-outline-variant px-4 py-2 rounded-full hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all">IOT &amp; HARDWARE</button>
            <button class="font-metadata-caps text-metadata-caps text-on-surface-variant border border-outline-variant px-4 py-2 rounded-full hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all">AI/ML</button>
            <button class="font-metadata-caps text-metadata-caps text-on-surface-variant border border-outline-variant px-4 py-2 rounded-full hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all">GAME DEVELOPMENT</button>
            <button class="font-metadata-caps text-metadata-caps text-on-surface-variant border border-outline-variant px-4 py-2 rounded-full hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all">LAINNYA</button>
        </div>
    </section>

    {{-- Project List (Plaque Rows) --}}
    <section class="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-up delay-3">
        <div class="col-span-full flex flex-col items-center justify-center gap-4 border-2 border-dashed border-outline-variant rounded-2xl py-24 text-center bg-surface-container-lowest/60 hover:border-primary/40 transition-colors">
            <div class="flex items-center justify-center w-16 h-16 rounded-full bg-secondary-container/15">
                <span class="material-symbols-outlined text-4xl text-secondary">inventory_2</span>
            </div>
            <p class="font-metadata-caps text-metadata-caps text-on-surface-variant uppercase tracking-widest">Arsip belum berisi karya</p>
            <p class="font-body-main text-body-sm text-on-surface-variant max-w-sm">Produk yang sudah dipublikasikan oleh dosen akan tampil di sini.</p>
        </div>
    </section>
</main>

@include('partials.guest.footer')
@endsection

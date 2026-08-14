@extends('layouts.guest')

@section('title', 'ARSIP KARYA - Project Detail')

@section('content')
<header class="w-full border-b-2 border-primary bg-surface/90 backdrop-blur max-w-360 px-margin-mobile md:px-margin-desktop py-6 flex justify-between items-center sticky top-0 z-10 mx-auto shadow-sm">
    <a class="flex items-center gap-2 text-primary hover:text-on-surface-variant transition-colors group" href="{{ route('guest.home') }}">
        <span class="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
        <span class="font-label-mono text-label-mono">Kembali ke katalog</span>
    </a>
    <div class="font-metadata-caps text-metadata-caps text-on-surface-variant border border-outline-variant px-3 py-1 rounded-full">
        ID KARYA: <span class="font-bold text-primary">No. 014</span>
    </div>
</header>

<main class="w-full max-w-300 grow mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-margin-desktop flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
    {{-- Left Column: Poster Canvas --}}
    <div class="w-full lg:w-[45%] sticky top-32 border border-primary rounded-2xl p-2 bg-surface-container-low shadow-xl animate-fade-up">
        <div class="w-full aspect-3/4 relative overflow-hidden rounded-xl border border-outline-variant bg-surface-variant">
            <img alt="Poster proyek Ecozyme Mobile Application" class="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdph-gS3D82uCXIdRJ4XYEfEKRwZQqPwMqjlnCvlNpaeolLWIKyNWXvyzdWKHw1XnkX7PevHFXKYonmAR6H3prkzxVrsAzZ8MFoeaJpdIQ86HYaR0P3YbBPb5yfnVjrxs3m5n1yT5vjE0mkZugKM7p9iaH81lhsFWrrgsLZPdLI0seytP-cO6-mnlbgE6d5lOICnel8DBZp0cFEKwfzKtbGFou7XY2RBcQ2_3GgQNsrpOQ1m0YIl5ZJPAMbDHwMXBazPU">
        </div>
        <div class="mt-4 flex justify-between items-center font-metadata-caps text-metadata-caps text-on-surface-variant px-2 pb-2 border-b border-outline-variant border-dashed">
            <span>DOKUMEN VISUAL</span>
            <span>ARSIP KARYA / PCR</span>
        </div>
    </div>

    {{-- Right Column: Project Ledger --}}
    <div class="w-full lg:w-[55%] flex flex-col gap-10 animate-fade-up delay-1">
        <div class="flex flex-wrap gap-3">
            <span class="border border-primary px-3 py-1.5 rounded-full font-metadata-caps text-metadata-caps text-primary tracking-widest bg-surface-container">MOBILE</span>
            <span class="border border-outline px-3 py-1.5 rounded-full font-metadata-caps text-metadata-caps text-on-surface-variant tracking-widest">2025/2026 (Ganjil)</span>
        </div>

        <div class="flex flex-col gap-6 pb-10 border-b border-outline-variant">
            <h1 class="font-headline-xl text-headline-xl text-primary leading-tight">Ecozyme Mobile Application</h1>
            <p class="font-body-main text-body-main text-on-surface-variant max-w-prose">
                Aplikasi mobile berbasis Android/iOS yang dirancang untuk mendukung edukasi, pemantauan, dan kolaborasi dalam pembuatan serta penggunaan eco-enzyme. Sistem ini mendigitalisasi proses pencatatan resep, fermentasi, dan panen yang sebelumnya dilakukan secara manual, memastikan kualitas hasil panen sesuai standar lingkungan.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 pb-10 border-b border-outline-variant">
            <div class="flex flex-col gap-4">
                <h3 class="flex items-center gap-2 font-metadata-caps text-metadata-caps text-on-surface-variant pb-2">
                    <span class="w-6 h-0.5 bg-secondary-container rounded-full"></span>
                    TIM MAHASISWA
                </h3>
                <ul class="font-label-mono text-label-mono text-primary flex flex-col gap-3">
                    <li class="flex flex-col border-l-2 border-outline-variant pl-3 hover:border-secondary-container transition-colors"><span class="text-on-surface-variant text-[10px]">4342411061</span>Ivander Justine Savero</li>
                    <li class="flex flex-col border-l-2 border-outline-variant pl-3 hover:border-secondary-container transition-colors"><span class="text-on-surface-variant text-[10px]">4342411062</span>Siti Aminah Zahra</li>
                    <li class="flex flex-col border-l-2 border-outline-variant pl-3 hover:border-secondary-container transition-colors"><span class="text-on-surface-variant text-[10px]">4342411063</span>Budi Santoso W.</li>
                    <li class="flex flex-col border-l-2 border-outline-variant pl-3 hover:border-secondary-container transition-colors"><span class="text-on-surface-variant text-[10px]">4342411064</span>Rina Melati</li>
                </ul>
            </div>
            <div class="flex flex-col gap-4">
                <h3 class="flex items-center gap-2 font-metadata-caps text-metadata-caps text-on-surface-variant pb-2">
                    <span class="w-6 h-0.5 bg-tertiary-container rounded-full"></span>
                    DOSEN PEMBIMBING
                </h3>
                <div class="font-label-mono text-label-mono text-primary flex flex-col gap-1 border-l-2 border-outline-variant pl-3">
                    <span>Ahmad Syauqi, M.Kom</span>
                    <span class="text-on-surface-variant text-xs mt-1">NIDN: 1029384756</span>
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-4 pb-10 border-b border-outline-variant border-dashed">
            <h3 class="font-metadata-caps text-metadata-caps text-on-surface-variant">TEKNOLOGI TERKAIT</h3>
            <div class="flex flex-wrap gap-2">
                <span class="border border-tertiary-container px-3 py-1.5 rounded-full font-label-mono text-label-mono text-tertiary-container bg-tertiary-fixed/20 hover:bg-tertiary-fixed/40 transition-colors">Flutter</span>
                <span class="border border-tertiary-container px-3 py-1.5 rounded-full font-label-mono text-label-mono text-tertiary-container bg-tertiary-fixed/20 hover:bg-tertiary-fixed/40 transition-colors">Firebase</span>
                <span class="border border-tertiary-container px-3 py-1.5 rounded-full font-label-mono text-label-mono text-tertiary-container bg-tertiary-fixed/20 hover:bg-tertiary-fixed/40 transition-colors">Google Maps API</span>
                <span class="border border-tertiary-container px-3 py-1.5 rounded-full font-label-mono text-label-mono text-tertiary-container bg-tertiary-fixed/20 hover:bg-tertiary-fixed/40 transition-colors">SQLite</span>
            </div>
        </div>

        <div class="flex flex-wrap gap-4 pt-4">
            <a href="#" class="bg-secondary-container hover:bg-secondary-fixed-dim text-on-secondary-container font-label-mono text-label-mono px-6 py-3 rounded-full flex items-center gap-2 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <span class="material-symbols-outlined text-sm">open_in_new</span>
                Lihat Demo
            </a>
            <a href="#" class="bg-transparent hover:bg-surface-container-high text-primary font-label-mono text-label-mono px-6 py-3 rounded-full border-2 border-primary flex items-center gap-2 hover:-translate-y-0.5 transition-all">
                <span class="material-symbols-outlined text-sm">play_circle</span>
                Video Demo
            </a>
        </div>
    </div>
</main>

@include('partials.guest.footer')
@endsection

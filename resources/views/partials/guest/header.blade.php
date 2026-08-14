<header class="bg-surface/90 backdrop-blur border-b-2 border-primary shadow-sm flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-360 mx-auto z-50 sticky top-0">
    <a href="{{ route('guest.home') }}" class="flex items-center gap-4 group">
        <span class="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-on-primary font-headline-lg text-lg group-hover:rotate-6 transition-transform">A</span>
        <div class="flex items-center gap-4">
            <h1 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary">ARSIP KARYA</h1>
            <span class="hidden lg:block font-label-mono text-label-mono text-on-surface-variant border-l border-outline pl-4">Katalog produk prodi Teknik Informatika<br>Politeknik Caltex Riau</span>
        </div>
    </a>
    <nav class="hidden md:flex gap-8 items-center">
        <a class="relative font-label-mono text-label-mono text-on-tertiary-container pb-1 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:bg-on-tertiary-container" href="{{ route('guest.home') }}">BERANDA</a>
        <a class="relative font-label-mono text-label-mono text-on-surface-variant hover:text-primary pb-1 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all" href="#">DOSEN</a>
        <a class="relative font-label-mono text-label-mono text-on-surface-variant hover:text-primary pb-1 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all" href="#">RISET</a>
    </nav>

    @guest
        <a href="{{ route('login') }}" class="bg-primary text-on-primary font-label-mono text-label-mono px-6 py-2.5 rounded-full uppercase tracking-wider hover:bg-primary-container hover:shadow-lg hover:-translate-y-0.5 transition-all">
            Masuk Dosen/Admin
        </a>
    @else
        <div class="flex items-center gap-4">
            <span class="hidden md:inline font-label-mono text-label-mono text-on-surface-variant">
                {{ auth()->user()->name }} · {{ ucfirst(auth()->user()->role) }}
            </span>
            <form method="POST" action="{{ route('logout') }}">
                @csrf
                <button type="submit" class="border-2 border-primary text-primary font-label-mono text-label-mono px-6 py-2.5 rounded-full uppercase tracking-wider hover:bg-surface-container-high hover:-translate-y-0.5 transition-all bg-transparent">
                    Keluar
                </button>
            </form>
        </div>
    @endguest
</header>

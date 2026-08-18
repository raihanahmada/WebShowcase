import { Link, usePage } from '@inertiajs/react';
import Avatar from '@/Components/Avatar';
import Logo from '@/Components/Logo';

export default function GuestLayout({ children }) {
    const { props, url } = usePage();
    const user = props.auth?.user;
    const isHome = url === '/' || url.startsWith('/?');

    const goToProduk = (e) => {
        if (isHome) {
            e.preventDefault();
            document.getElementById('produk')?.scrollIntoView({ behavior: 'smooth' });
        }
        // Kalau bukan di halaman beranda, biarkan link jalan normal ke "/#produk"
        // supaya browser reload halaman lalu lompat ke bagian produk.
    };

    return (
        <div className="relative min-h-screen font-sans text-neutral-900 selection:bg-pcr-200 selection:text-pcr-900">

            {/* --- BACKGROUND MELINGKAR ALA PMB PCR --- */}
            <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#eaf4fc]">
                {/* Gelombang/Lingkaran Kanan Atas */}
                <div className="absolute -right-[15%] -top-[20%] h-[1200px] w-[1200px] rounded-full bg-white/60 sm:-right-[5%] sm:-top-[10%] sm:h-[1500px] sm:w-[1500px]"></div>

                {/* Gelombang/Lingkaran Kiri Bawah */}
                <div className="absolute -bottom-[30%] -left-[20%] h-[1000px] w-[1000px] rounded-full bg-white/70 sm:-bottom-[40%] sm:-left-[10%] sm:h-[1400px] sm:w-[1400px]"></div>

                {/* Aksen Lingkaran Biru Lebih Tua (Opsional untuk kedalaman) */}
                <div className="absolute left-[10%] top-[20%] h-[600px] w-[600px] rounded-full bg-[#dbeafe]/40 blur-3xl"></div>
                <div className="absolute bottom-[10%] right-[10%] h-[500px] w-[500px] rounded-full bg-[#dbeafe]/50 blur-3xl"></div>
            </div>
            {/* ---------------------------------------- */}

            {/* Konten Utama (z-10 agar berada di atas background) */}
            <div className="relative z-10 flex min-h-screen flex-col">
                {/* Header (Dibuat lebih transparan agar background tembus) */}
                <header className="sticky top-0 z-50 border-b border-white/40 bg-white/40 py-2 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.02)] transition-all">
                    <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-2 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                        <Link href="/" className="group flex items-center gap-3 transition-opacity hover:opacity-80">
                            <Logo />
                            <span className="hidden border-l border-neutral-400/50 pl-3 text-sm font-medium text-neutral-600 lg:block">
                                Katalog Produk TI
                            </span>
                        </Link>

                        <nav className="flex items-center gap-4 sm:gap-6">
                            <Link
                                href="/"
                                className="text-sm font-medium text-neutral-600 transition-colors hover:text-pcr-700"
                            >
                                Beranda
                            </Link>

                            <a
                                href="/#produk"
                                onClick={goToProduk}
                                className="text-sm font-medium text-neutral-600 transition-colors hover:text-pcr-700"
                            >
                                Produk
                            </a>

                            {user ? (
                                <Link
                                    href={user.role === 'dosen' ? '/dosen/produk' : '/'}
                                    className="group flex items-center gap-2.5 rounded-full border border-white/60 bg-white/80 px-3 py-1.5 transition-all hover:bg-white hover:shadow-sm"
                                >
                                    <Avatar user={user} size={28} className="rounded-full shadow-sm" />
                                    <span className="text-sm font-semibold text-neutral-700 group-hover:text-pcr-800">
                                        {user.name}
                                    </span>
                                </Link>
                            ) : (
                                <Link
                                    href="/login"
                                    className="inline-flex items-center gap-2 rounded-full bg-[#0086ff] px-5 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}
                                >
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                    </svg>
                                    Masuk
                                </Link>
                            )}
                        </nav>
                    </div>
                </header>

                <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
                    {children}
                </main>

                <footer className="mt-auto border-t border-white/50 bg-white/30 backdrop-blur-sm">
                    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
                        <div >
                            <Logo height={24} />
                        </div>
                        <p className="text-center text-sm font-medium text-neutral-500 sm:text-right">
                            © {new Date().getFullYear()} Arsip Karya. <br className="sm:hidden" />
                            <span className="hidden sm:inline"> — </span>
                            Jurusan Teknik Informatika Politeknik Caltex Riau.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

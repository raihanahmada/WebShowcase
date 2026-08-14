import { Link, usePage } from '@inertiajs/react';
import Avatar from '@/Components/Avatar';
import Logo from '@/Components/Logo';

export default function GuestLayout({ children }) {
    const user = usePage().props.auth?.user;

    return (
        <div className="flex min-h-screen flex-col bg-neutral-50">
            <header className="border-b border-neutral-200 bg-white">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                    <Link href="/" className="flex items-center gap-3">
                        <Logo height={28} />
                        <span className="hidden border-l border-neutral-200 pl-3 text-sm text-neutral-500 lg:block">
                            Katalog produk prodi Teknik Informatika
                        </span>
                    </Link>

                    <nav className="flex items-center gap-4">
                        <Link href="/" className="text-sm font-medium text-pcr-700 hover:text-pcr-800">
                            Beranda
                        </Link>

                        {user ? (
                            <Link
                                href={user.role === 'dosen' ? '/dosen/produk' : '/'}
                                className="flex items-center gap-2 rounded-lg px-2 py-1 hover:bg-pcr-50"
                            >
                                <Avatar user={user} size={32} />
                                <span className="text-sm font-medium text-pcr-800">{user.name}</span>
                            </Link>
                        ) : (
                            <Link
                                href="/login"
                                className="rounded-lg bg-pcr-600 px-4 py-2 text-sm font-medium text-white hover:bg-pcr-700"
                            >
                                Masuk Dosen/Admin
                            </Link>
                        )}
                    </nav>
                </div>
            </header>

            <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 sm:py-10">{children}</main>

            <footer className="border-t border-neutral-200 bg-white py-8">
                <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 text-center sm:px-6">
                    <Logo height={20} />
                    <p className="text-xs text-neutral-500">
                        © {new Date().getFullYear()} Arsip Karya — Jurusan Teknik Informatika Politeknik Caltex Riau.
                    </p>
                </div>
            </footer>
        </div>
    );
}

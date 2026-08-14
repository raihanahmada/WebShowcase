import { Head, Link, usePage } from '@inertiajs/react';
import Logo from '@/Components/Logo';

export default function Welcome({ appName }) {
    const user = usePage().props.auth?.user;

    return (
        <>
            <Head title="Welcome" />

            <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-neutral-50 p-6">
                <Logo height={28} />

                <div className="max-w-md text-center">
                    <h1 className="text-3xl font-semibold text-pcr-800">{appName}</h1>
                    <p className="mt-3 text-neutral-600">
                        Laravel + Inertia + React siap dipakai.
                    </p>
                </div>

                {/* Hanya tampil kalau sudah login. Tanpa penjagaan ini tombolnya
                    berujung 404, karena middleware auth mengalihkan tamu ke
                    /login yang belum dibuat. Begitu halaman login jadi, tombol
                    untuk tamu bisa ditambahkan dan diarahkan ke sana. */}
                {user && (
                    <Link
                        href="/dosen/produk"
                        className="rounded-lg bg-pcr-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-pcr-700"
                    >
                        Masuk ke beranda dosen
                    </Link>
                )}
            </div>
        </>
    );
}

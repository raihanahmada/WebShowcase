import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import Logo from '@/Components/Logo';

export default function DosenLayout({ title, subtitle, action, children }) {
    const { auth, flash } = usePage().props;
    const [notice, setNotice] = useState(null);

    useEffect(() => {
        const message = flash?.success ?? flash?.error;

        if (!message) {
            return;
        }

        setNotice({ type: flash?.success ? 'success' : 'error', message });
        const timer = setTimeout(() => setNotice(null), 5000);

        return () => clearTimeout(timer);
    }, [flash]);

    return (
        <div className="min-h-screen bg-neutral-100">
            <header className="border-b-4 border-pcr-600 bg-white">
                <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                    <Link href="/dosen/produk" aria-label="Beranda dosen" className="self-start">
                        <Logo />
                    </Link>

                    <div className="sm:text-right">
                        <p className="text-sm font-semibold text-pcr-800">
                            {auth?.user?.name ?? 'Belum login'}
                        </p>
                        <p className="text-xs text-neutral-500">
                            {auth?.user?.nip ? `NIP ${auth.user.nip}` : 'Dosen'}
                        </p>
                    </div>
                </div>
            </header>

            <div className="bg-pcr-600">
                <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
                    <p className="text-sm font-medium text-pcr-100">Showcase Produk Prodi</p>
                </div>
            </div>

            {notice && (
                <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6">
                    <div
                        className={`rounded-lg border px-4 py-3 text-sm ${
                            notice.type === 'success'
                                ? 'border-pcr-200 bg-pcr-50 text-pcr-800'
                                : 'border-pcrred-200 bg-pcrred-50 text-pcrred-800'
                        }`}
                    >
                        {notice.message}
                    </div>
                </div>
            )}

            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div>
                        <h1 className="text-xl font-semibold text-pcr-800 sm:text-2xl">{title}</h1>
                        {subtitle && <p className="mt-1 text-sm text-neutral-600">{subtitle}</p>}
                    </div>
                    {action}
                </div>

                {children}
            </main>
        </div>
    );
}

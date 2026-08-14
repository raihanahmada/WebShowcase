import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

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
            <header className="border-b border-neutral-200 bg-white">
                <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
                    <Link href="/dosen/produk" className="flex items-center gap-2">
                        <span className="grid size-8 place-items-center rounded-lg bg-neutral-900 text-sm font-bold text-white">
                            S
                        </span>
                        <span className="font-semibold text-neutral-900">Showcase Prodi</span>
                    </Link>

                    <div className="text-right">
                        <p className="text-sm font-medium text-neutral-900">
                            {auth?.user?.name ?? 'Belum login'}
                        </p>
                        <p className="text-xs text-neutral-500">
                            {auth?.user?.nip ? `NIP ${auth.user.nip}` : 'Dosen'}
                        </p>
                    </div>
                </div>
            </header>

            {notice && (
                <div className="mx-auto max-w-6xl px-6 pt-4">
                    <div
                        className={`rounded-lg border px-4 py-3 text-sm ${
                            notice.type === 'success'
                                ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                                : 'border-red-200 bg-red-50 text-red-800'
                        }`}
                    >
                        {notice.message}
                    </div>
                </div>
            )}

            <main className="mx-auto max-w-6xl px-6 py-8">
                <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-semibold text-neutral-900">{title}</h1>
                        {subtitle && <p className="mt-1 text-sm text-neutral-600">{subtitle}</p>}
                    </div>
                    {action}
                </div>

                {children}
            </main>
        </div>
    );
}

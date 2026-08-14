import { Head } from '@inertiajs/react';
import Logo from '@/Components/Logo';

export default function Welcome({ appName }) {
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
            </div>
        </>
    );
}

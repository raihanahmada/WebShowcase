import { Head } from '@inertiajs/react';

export default function Welcome({ appName }) {
    return (
        <>
            <Head title="Welcome" />

            <div className="flex min-h-screen items-center justify-center bg-neutral-50 p-6">
                <div className="max-w-md text-center">
                    <h1 className="text-3xl font-semibold text-neutral-900">
                        {appName}
                    </h1>
                    <p className="mt-3 text-neutral-600">
                        Laravel + Inertia + React siap dipakai.
                    </p>
                </div>
            </div>
        </>
    );
}

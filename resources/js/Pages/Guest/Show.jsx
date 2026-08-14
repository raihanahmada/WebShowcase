import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Show({ product }) {
    return (
        <GuestLayout>
            <Head title={product.title} />

            <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-pcr-700 hover:text-pcr-800">
                ← Kembali ke katalog
            </Link>

            <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
                <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
                    <div className="aspect-3/4 bg-neutral-100">
                        {product.poster_url ? (
                            <img src={product.poster_url} alt={product.title} className="size-full object-cover" />
                        ) : (
                            <div className="grid size-full place-items-center text-sm text-neutral-400">
                                Tanpa poster
                            </div>
                        )}
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="flex flex-wrap gap-2">
                        {product.category && (
                            <span className="rounded-full bg-pcr-100 px-3 py-1 text-xs font-medium text-pcr-800">
                                {product.category}
                            </span>
                        )}
                        <span className="rounded-full border border-neutral-300 px-3 py-1 text-xs font-medium text-neutral-600">
                            {product.academic_year} ({product.semester === 'ganjil' ? 'Ganjil' : 'Genap'})
                        </span>
                        {product.course && (
                            <span className="rounded-full border border-neutral-300 px-3 py-1 text-xs font-medium text-neutral-600">
                                {product.course}
                            </span>
                        )}
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold text-pcr-800 sm:text-3xl">{product.title}</h1>
                        <p className="mt-3 whitespace-pre-line text-neutral-600">{product.description}</p>
                    </div>

                    <div className="grid gap-6 border-t border-neutral-200 pt-6 sm:grid-cols-2">
                        <div>
                            <h2 className="mb-3 text-xs font-semibold tracking-wide text-neutral-500 uppercase">
                                Tim mahasiswa
                            </h2>
                            {product.students.length === 0 ? (
                                <p className="text-sm text-neutral-500">Belum ada anggota tercatat.</p>
                            ) : (
                                <ul className="space-y-2 text-sm">
                                    {product.students.map((student, index) => (
                                        <li key={index} className="border-l-2 border-neutral-200 pl-3">
                                            <div className="font-medium text-neutral-800">{student.name}</div>
                                            <div className="text-xs text-neutral-500">
                                                {[student.nim, student.role].filter(Boolean).join(' · ')}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div>
                            <h2 className="mb-3 text-xs font-semibold tracking-wide text-neutral-500 uppercase">
                                Dosen pembimbing
                            </h2>
                            {product.dosen.length === 0 ? (
                                <p className="text-sm text-neutral-500">Belum ada pembimbing tercatat.</p>
                            ) : (
                                <ul className="space-y-2 text-sm">
                                    {product.dosen.map((d, index) => (
                                        <li key={index} className="border-l-2 border-neutral-200 pl-3">
                                            <div className="font-medium text-neutral-800">{d.name}</div>
                                            {d.nip && <div className="text-xs text-neutral-500">NIP: {d.nip}</div>}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    {product.tags.length > 0 && (
                        <div className="border-t border-neutral-200 pt-6">
                            <h2 className="mb-3 text-xs font-semibold tracking-wide text-neutral-500 uppercase">
                                Teknologi terkait
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {product.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-pcr-200 bg-pcr-50 px-3 py-1.5 text-sm font-medium text-pcr-700"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {(product.demo_link || product.video_link || product.github_link) && (
                        <div className="flex flex-wrap gap-3 border-t border-neutral-200 pt-6">
                            {product.demo_link && (
                                <a
                                    href={product.demo_link}
                                    target="_blank"
                                    rel="noopener"
                                    className="rounded-lg bg-pcr-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-pcr-700"
                                >
                                    Lihat Demo
                                </a>
                            )}
                            {product.video_link && (
                                <a
                                    href={product.video_link}
                                    target="_blank"
                                    rel="noopener"
                                    className="rounded-lg border border-pcr-300 px-5 py-2.5 text-sm font-medium text-pcr-700 hover:bg-pcr-50"
                                >
                                    Video Demo
                                </a>
                            )}
                            {product.github_link && (
                                <a
                                    href={product.github_link}
                                    target="_blank"
                                    rel="noopener"
                                    className="rounded-lg border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
                                >
                                    Repositori
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </GuestLayout>
    );
}

import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Home({ products, categories, academicYears, filters }) {
    const [search, setSearch] = useState(filters.search ?? '');

    const applyFilters = (overrides = {}) => {
        router.get(
            '/',
            {
                search,
                category: filters.category ?? '',
                academic_year: filters.academic_year ?? '',
                ...overrides,
            },
            { preserveState: true, replace: true },
        );
    };

    const noResults = filters.search || filters.category || filters.academic_year;

    return (
        <GuestLayout>
            <Head title="Katalog Produk" />

            <section className="mb-10 text-center">
                <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-medium text-neutral-600">
                    🚀 Karya Inovatif &amp; Berdampak
                </span>
                <h1 className="text-3xl font-bold text-pcr-800 sm:text-4xl">Project Showcase</h1>
                <p className="mx-auto mt-3 max-w-2xl text-neutral-600">
                    Galeri portofolio produk unggulan hasil mahasiswa D4 Teknik Informatika Politeknik Caltex Riau.
                </p>
            </section>

            <section className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <form
                    className="flex flex-1 gap-2"
                    onSubmit={(e) => {
                        e.preventDefault();
                        applyFilters();
                    }}
                >
                    <input
                        type="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Cari judul atau deskripsi…"
                        className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-pcr-600 focus:ring-1 focus:ring-pcr-600"
                    />
                    <button
                        type="submit"
                        className="shrink-0 rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
                    >
                        Cari
                    </button>
                </form>

                <select
                    value={filters.academic_year ?? ''}
                    onChange={(e) => applyFilters({ academic_year: e.target.value })}
                    className="rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-pcr-600 focus:ring-1 focus:ring-pcr-600"
                >
                    <option value="">Semua Tahun</option>
                    {academicYears.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </section>

            <div className="mb-8 -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
                <button
                    onClick={() => applyFilters({ category: '' })}
                    className={`shrink-0 rounded-lg border px-3 py-2 text-sm font-medium transition ${
                        !filters.category
                            ? 'border-pcr-600 bg-pcr-600 text-white'
                            : 'border-neutral-300 bg-white text-neutral-700 hover:bg-pcr-50'
                    }`}
                >
                    Semua
                </button>
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => applyFilters({ category: category.slug })}
                        className={`shrink-0 rounded-lg border px-3 py-2 text-sm font-medium transition ${
                            filters.category === category.slug
                                ? 'border-pcr-600 bg-pcr-600 text-white'
                                : 'border-neutral-300 bg-white text-neutral-700 hover:bg-pcr-50'
                        }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {products.data.length === 0 ? (
                <div className="rounded-xl border border-dashed border-neutral-300 bg-white px-6 py-16 text-center">
                    <p className="font-medium text-neutral-800">
                        {noResults ? 'Tidak ada karya yang cocok' : 'Arsip belum berisi karya'}
                    </p>
                    <p className="mt-1 text-sm text-neutral-500">
                        {noResults
                            ? 'Coba ubah kata kunci atau filter pencarian.'
                            : 'Produk yang sudah dipublikasikan oleh dosen akan tampil di sini.'}
                    </p>
                </div>
            ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {products.data.map((product) => (
                        <Link
                            key={product.id}
                            href={`/produk/${product.slug}`}
                            className="flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition hover:shadow-lg"
                        >
                            <div className="aspect-video bg-neutral-100">
                                {product.poster_url ? (
                                    <img
                                        src={product.poster_url}
                                        alt={product.title}
                                        className="size-full object-cover"
                                    />
                                ) : (
                                    <div className="grid size-full place-items-center text-sm text-neutral-400">
                                        Tanpa poster
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-1 flex-col p-4">
                                <div className="mb-2 flex items-center gap-2">
                                    {product.category && (
                                        <span className="rounded-full bg-pcr-100 px-2 py-0.5 text-xs font-medium text-pcr-800">
                                            {product.category}
                                        </span>
                                    )}
                                    <span className="text-xs text-neutral-500">{product.academic_year}</span>
                                </div>
                                <h3 className="font-semibold text-pcr-800">{product.title}</h3>
                                {product.students.length > 0 && (
                                    <p className="mt-auto pt-3 text-xs text-neutral-500">
                                        Team: {product.students.slice(0, 2).join(', ')}
                                        {product.students.length > 2 ? ', ...' : ''}
                                    </p>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            )}

            {products.last_page > 1 && (
                <div className="mt-8 flex flex-wrap justify-center gap-1">
                    {products.links.map((link, index) => (
                        <button
                            key={index}
                            disabled={!link.url}
                            onClick={() => link.url && router.get(link.url, {}, { preserveState: true })}
                            className={`min-w-10 rounded-lg border px-3 py-2 text-sm ${
                                link.active
                                    ? 'border-pcr-600 bg-pcr-600 text-white'
                                    : 'border-neutral-300 bg-white text-neutral-700 hover:bg-pcr-50'
                            } disabled:cursor-default disabled:opacity-40`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ))}
                </div>
            )}
        </GuestLayout>
    );
}

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
            { preserveState: true, replace: true }
        );
    };

    const noResults = filters.search || filters.category || filters.academic_year;

    return (
        <GuestLayout>
            <Head title="Katalog Produk" />

            {/* Hero Section */}
            <section className="mb-12 mt-6 flex flex-col gap-10 md:flex-row md:items-center md:justify-between lg:mb-20">
                {/* Kolom Kiri: Teks & Informasi */}
                <div className="flex-1 space-y-6">
                    <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-semibold tracking-wide text-neutral-600 shadow-sm">
                        🚀 Karya Inovatif & Berdampak
                    </span>

                    <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
                        Project Showcase <br />
                        <span className="text-pcr-600 relative inline-block">
                            Teknik Informatika
                            {/* Garis bawah dekoratif (opsional, mirip gambar referensi) */}
                            <span className="absolute -bottom-2 left-0 h-1.5 w-full bg-yellow-400/80 rounded-full"></span>
                        </span>
                    </h1>

                    <p className="max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                        Selamat datang di Galeri Portofolio produk unggulan hasil karya mahasiswa
                        Program Studi D4 Teknik Informatika Politeknik Caltex Riau. Kami menghadirkan inovasi teknologi yang berdampak. 🎯
                    </p>

                    {/* Tombol Aksi (Opsional, jika diperlukan) */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                         <a
                            href="#katalog"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('katalog')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="rounded-lg bg-pcr-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-pcr-700 hover:shadow-lg"
                        >
                            Jelajahi Karya
                        </a>
                        <a
                            href="https://ti.pcr.ac.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-700 shadow-sm transition-all hover:bg-neutral-50 hover:text-pcr-700"
                        >
                            Tentang Prodi
                        </a>
                    </div>
                </div>

                {/* Kolom Kanan: Video Embed dengan Dekorasi Frame */}
                <div className="flex-1 w-full max-w-lg md:max-w-xl shrink-0">
                    <div className="relative aspect-video w-full rounded-2xl bg-neutral-200 shadow-2xl">
                         {/* Aksen Background Kotak (Mirip seperti shadow biru/kuning di referensi) */}
                         <div className="absolute -right-4 -bottom-4 -z-10 h-full w-full rounded-2xl bg-yellow-400"></div>
                         <div className="absolute -left-4 -top-4 -z-10 h-full w-full rounded-2xl bg-pcr-400 opacity-60"></div>

                        {/* Iframe YouTube */}
                        <iframe
                            className="absolute top-0 left-0 h-full w-full rounded-2xl border-none object-cover"
                            src="https://www.youtube.com/embed/D4HdqnHSQ0o?autoplay=0&rel=0&modestbranding=1"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

             {/*
               Tambahkan id="katalog" pada bagian yang membungkus form pencarian
               agar tombol "Jelajahi Karya" bisa scroll otomatis ke sini.
             */}
             <div id="katalog" className="pt-8">
                 {/* Search & Filter Section Anda taruh di sini */}
                 <section className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                     {/* ... Form pencarian yang tadi diperbarui ... */}
                 </section>
                 {/* ... Kategoris dan Grid Produk ... */}
             </div>

            {/* Search & Filter Section */}
            <section className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <form
                    className="relative flex flex-1 items-center w-full"
                    onSubmit={(e) => {
                        e.preventDefault();
                        applyFilters();
                    }}
                >
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <svg className="h-5 w-5 text-neutral-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <input
                        type="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Cari judul atau deskripsi produk..."
                        className="w-full rounded-xl border border-neutral-300 bg-white py-3 pl-11 pr-20 text-sm text-neutral-800 outline-none transition-all focus:border-pcr-600 focus:ring-2 focus:ring-pcr-600/20 shadow-sm"
                    />
                    <button
                        type="submit"
                        className="absolute right-2 shrink-0 rounded-lg bg-pcr-600 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-pcr-700 focus:ring-2 focus:ring-pcr-600/50"
                    >
                        Cari
                    </button>
                </form>

                <div className="relative shrink-0">
                    <select
                        value={filters.academic_year ?? ''}
                        onChange={(e) => applyFilters({ academic_year: e.target.value })}
                        className="w-full appearance-none rounded-xl border border-neutral-300 bg-white py-3 pl-4 pr-10 text-sm font-medium text-neutral-700 outline-none transition-all focus:border-pcr-600 focus:ring-2 focus:ring-pcr-600/20 shadow-sm sm:w-auto hover:bg-neutral-50"
                    >
                        <option value="">Semua Tahun Ajaran</option>
                        {academicYears.map((year) => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg className="h-4 w-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <div className="mb-8 flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                <button
                    onClick={() => applyFilters({ category: '' })}
                    className={`shrink-0 rounded-full border px-5 py-2 text-sm font-semibold transition-all ${
                        !filters.category
                            ? 'border-pcr-600 bg-pcr-600 text-white shadow-md'
                            : 'border-neutral-200 bg-white text-neutral-600 hover:border-pcr-300 hover:bg-pcr-50 hover:text-pcr-700'
                    }`}
                >
                    Semua
                </button>
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => applyFilters({ category: category.slug })}
                        className={`shrink-0 rounded-full border px-5 py-2 text-sm font-semibold transition-all ${
                            filters.category === category.slug
                                ? 'border-pcr-600 bg-pcr-600 text-white shadow-md'
                                : 'border-neutral-200 bg-white text-neutral-600 hover:border-pcr-300 hover:bg-pcr-50 hover:text-pcr-700'
                        }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {/* Content / Grid */}
            {products.data.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-white px-6 py-20 text-center shadow-sm">
                    <div className="mb-4 rounded-full bg-neutral-100 p-4 text-neutral-400">
                        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-800">
                        {noResults ? 'Tidak ada karya yang cocok' : 'Belum ada karya'}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-500 max-w-sm">
                        {noResults
                            ? 'Coba gunakan kata kunci lain atau hapus filter untuk melihat karya lainnya.'
                            : 'Produk yang sudah dipublikasikan oleh dosen akan tampil di sini.'}
                    </p>
                    {noResults && (
                        <button
                            onClick={() => { setSearch(''); applyFilters({ search: '', category: '', academic_year: '' }); }}
                            className="mt-6 font-medium text-pcr-600 hover:text-pcr-700 underline underline-offset-4"
                        >
                            Hapus semua filter
                        </button>
                    )}
                </div>
            ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {products.data.map((product) => (
                        <Link
                            key={product.id}
                            href={`/produk/${product.slug}`}
                            className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-pcr-300"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                                {product.poster_url ? (
                                    <img
                                        src={product.poster_url}
                                        alt={product.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="grid h-full w-full place-items-center text-sm font-medium text-neutral-400">
                                        <div className="flex flex-col items-center gap-2">
                                            <svg className="h-8 w-8 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                            </svg>
                                            <span>Tanpa poster</span>
                                        </div>
                                    </div>
                                )}
                                {/* Overlay Gradient untuk mempertegas area gambar */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </div>

                            <div className="flex flex-1 flex-col p-5">
                                <div className="mb-3 flex items-center justify-between gap-2">
                                    {product.category && (
                                        <span className="rounded-full bg-pcr-50 border border-pcr-100 px-2.5 py-1 text-xs font-semibold text-pcr-700">
                                            {product.category}
                                        </span>
                                    )}
                                    <span className="flex items-center gap-1 text-xs font-medium text-neutral-400">
                                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {product.academic_year}
                                    </span>
                                </div>
                                <h3 className="mb-2 font-bold leading-snug text-neutral-800 transition-colors group-hover:text-pcr-700 line-clamp-2">
                                    {product.title}
                                </h3>
                                {product.students.length > 0 && (
                                    <div className="mt-auto pt-4 flex items-center gap-2 border-t border-neutral-100">
                                        <div className="flex -space-x-2">
                                            {/* Dummy avatar circles based on students count (Max 3) */}
                                            {product.students.slice(0, 3).map((_, i) => (
                                                <div key={i} className={`h-6 w-6 rounded-full border-2 border-white bg-neutral-200 flex items-center justify-center text-[10px] font-bold text-neutral-500`}>
                                                    {product.students[i].charAt(0)}
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-xs font-medium text-neutral-500 line-clamp-1">
                                            {product.students.slice(0, 2).join(', ')}
                                            {product.students.length > 2 ? ` & ${product.students.length - 2} lainnya` : ''}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            )}

            {/* Pagination */}
            {products.last_page > 1 && (
                <div className="mt-12 flex flex-wrap justify-center gap-2">
                    {products.links.map((link, index) => (
                        <button
                            key={index}
                            disabled={!link.url}
                            onClick={() => link.url && router.get(link.url, {}, { preserveState: true })}
                            className={`flex min-w-[2.5rem] items-center justify-center rounded-lg border px-3 py-2 text-sm font-medium transition-all ${
                                link.active
                                    ? 'border-pcr-600 bg-pcr-600 text-white shadow-md'
                                    : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:bg-neutral-50'
                            } disabled:cursor-not-allowed disabled:bg-neutral-50 disabled:text-neutral-400 disabled:opacity-60 disabled:hover:border-neutral-200`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ))}
                </div>
            )}
        </GuestLayout>
    );
}

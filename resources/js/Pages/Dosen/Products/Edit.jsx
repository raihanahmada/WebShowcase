import { Head, Link, useForm } from '@inertiajs/react';
import ProductForm from '@/Components/ProductForm';
import DosenLayout from '@/Layouts/DosenLayout';

export default function Edit({ product, options }) {
    const form = useForm({
        title: product.title,
        description: product.description,
        category_id: product.category_id ?? '',
        course_id: product.course_id ?? '',
        academic_year: product.academic_year,
        semester: product.semester,
        status: product.status,
        poster: null,
        remove_poster: false,
        demo_link: product.demo_link ?? '',
        video_link: product.video_link ?? '',
        github_link: product.github_link ?? '',
        students: product.students ?? [],
        tags: product.tags ?? [],
        dosen_ids: product.dosen_ids ?? [],
    });

    // Upload file butuh multipart, sedangkan multipart tidak bisa dikirim
    // lewat PUT. Jadi dikirim sebagai POST dengan method spoofing Laravel.
    // `transform` pada adapter React mengembalikan undefined, jadi tidak bisa
    // dirangkai langsung dengan .post() seperti di Vue.
    const submit = (status) => {
        form.transform((data) => ({ ...data, status, _method: 'put' }));
        form.post(`/dosen/produk/${product.slug}`, { forceFormData: true });
    };

    return (
        <DosenLayout
            title="Edit produk"
            subtitle={product.title}
            action={
                <Link
                    href="/dosen/produk"
                    className="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
                >
                    Batal
                </Link>
            }
        >
            <Head title={`Edit — ${product.title}`} />

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    submit(form.data.status);
                }}
            >
                <ProductForm
                    data={form.data}
                    setData={form.setData}
                    errors={form.errors}
                    options={options}
                    existingPosterUrl={product.poster_url}
                />

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                    <button
                        type="button"
                        disabled={form.processing}
                        onClick={() => submit('archived')}
                        className="rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm font-medium text-neutral-600 hover:bg-neutral-50 disabled:opacity-50"
                    >
                        Arsipkan
                    </button>

                    <div className="flex flex-wrap gap-3">
                        <button
                            type="button"
                            disabled={form.processing}
                            onClick={() => submit('draft')}
                            className="rounded-lg border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50 disabled:opacity-50"
                        >
                            Simpan sebagai draft
                        </button>
                        <button
                            type="button"
                            disabled={form.processing}
                            onClick={() => submit('published')}
                            className="rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-700 disabled:opacity-50"
                        >
                            {form.processing ? 'Menyimpan…' : 'Simpan & publikasikan'}
                        </button>
                    </div>
                </div>
            </form>
        </DosenLayout>
    );
}

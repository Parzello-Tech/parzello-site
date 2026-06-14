import { About, Apps, Blog, Gallery, Home, Newsletter, Person, Social, Work, Team } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
    firstName: "Parzello",
    lastName: "Tech",
    name: "Parzello Tech",
    role: "Startup & Digital Agency",
    avatar: "/images/parzello.png",
    email: "parzello.dev@gmail.com",
    location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
    display: true,
    title: <>Subscribe to {person.name} Newsletter</>,
    description: <>Dapatkan update terbaru seputar inovasi digital dan solusi teknologi dari kami.</>,
};

const social: Social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: "Instagram",
        icon: "instagram",
        link: "https://www.instagram.com/parzello.tech",
    },
    {
        name: "GitHub",
        icon: "github",
        link: "https://github.com/Parzello-Tech",
    },
    {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/company/parzello-tech/",
    },
    {
        name: "Email",
        icon: "email",
        link: `mailto:${person.email}`,
    },
];

const home: Home = {
    path: "/",
    image: "/images/og/home.jpg",
    label: "Home",
    title: "Parzello Tech | Digital Solutions for Your Business Growth",
    description: "Parzello Tech adalah startup sekaligus digital agency yang berfokus pada pengembangan aplikasi dan solusi digital yang intuitif, efisien, dan relevan untuk kehidupan modern.",
    headline: <>Digital Solutions for Your Business Growth</>,
    featured: {
        display: true,
        title: (
            <Row gap="12" vertical="center">
                <strong className="ml-4">Parzello Tech</strong> <Line background="brand-alpha-strong" vert height="20" />
                <Text marginRight="4" onBackground="brand-medium">
                    Latest Project
                </Text>
            </Row>
        ),
        href: "/work/e-konsul-digital-consultation-platform",
    },
    subline: (
        <>
            <b>Powerful Apps. For Everyone.</b><br/>
            Technology should be accessible. Simple apps that empower your everyday life.
        </>
    ),
};

const about: About = {
    path: "/about",
    label: "About",
    title: `About – Parzello Tech`,
    description: "Parzello Tech membangun aplikasi mobile dan sistem bisnis untuk UMKM hingga perusahaan — dari POS ritel sampai ERP terintegrasi.",
    tableOfContent: {
        display: true,
        subItems: false,
    },
    avatar: {
        display: true,
    },
    calendar: {
        display: false,
        link: "",
    },
    intro: {
        display: true,
        title: "Introduction",
        description: <>
            <b>Parzello Tech membangun aplikasi mobile dan sistem bisnis untuk UMKM hingga perusahaan — dari POS ritel sampai ERP terintegrasi.</b>
            <br/><br/>
            Sebagai <b>Product Studio & Digital Agency</b> (berdiri sejak 2024 di Kota Langsa), kami tidak hanya membangun untuk klien — kami merancang, menguji, dan merilis produk kami sendiri. ZelloPOS adalah bukti nyata bahwa solusi teknologi yang kami kirimkan telah teruji keandalannya di lapangan, menggabungkan kecepatan inovasi produk mandiri dengan profesionalisme pengerjaan proyek enterprise.
        </>,
    },
    work: {
        display: true, // set to false to hide this section
        title: "Projects & Experience",
        experiences: [
            {
                company: "ZelloPOS",
                timeframe: "2026",
                role: "In-house Digital Product",
                achievements: [
                    <><b>Masalah:</b> UMKM ritel sering kehilangan penjualan saat internet terputus dan kesulitan melacak inventaris stok secara manual.</>,
                    <><b>Solusi:</b> ZelloPOS menyediakan mode transaksi offline penuh agar operasional kasir tetap berjalan tanpa koneksi, dikombinasikan dengan sinkronisasi inventaris real-time terotomatisasi untuk meminimalkan selisih stok.</>
                ],
                images: [],
            },
            {
                company: "ERP PT Semadam",
                timeframe: "2026",
                role: "Enterprise Software Solution",
                achievements: [
                    <><b>Masalah:</b> Proses pencatatan logistik kelapa sawit dan pembukuan arus kas yang terfragmentasi menghambat efisiensi operasional.</>,
                    <><b>Solusi:</b> Membangun sistem ERP kustom berbasis web terintegrasi yang menyatukan logistik gudang, pencatatan produksi harian, pembukuan keuangan otomatis, serta dasbor analitik real-time.</>
                ],
                images: [],
            },
        ],
    },
    studies: {
        display: true, // set to false to hide this section
        title: "Mission & Values",
        institutions: [
            {
                name: "Visi Kami",
                description: <>Menjadi penyedia solusi digital terpercaya yang menggabungkan inovasi desain dan keunggulan rekayasa teknologi untuk membantu transformasi bisnis di era digital.</>,
            },
            {
                name: "Nilai Utama",
                description: <>Fokus pada pengalaman pengguna (user experience), keandalan sistem, penulisan kode yang bersih dan terstruktur (clean code), serta komunikasi transparan dengan mitra.</>,
            },
        ],
    },
    technical: {
        display: true, // set to false to hide this section
        title: "Technical Skills",
        skills: [
            {
                title: "Mobile App Development",
                description: <>Merancang dan mengembangkan aplikasi mobile lintas platform (Android, iOS, tablet) dengan performa tinggi dan antarmuka ergonomis.</>,
                tags: [
                    { name: "Flutter", icon: "flutter" },
                    { name: "Dart", icon: "flutter" },
                ],
            },
            {
                title: "Web & Backend Engineering",
                description: <>Membangun website modern, sistem logistik, RESTful API, dan arsitektur database cloud/serverless yang andal dan aman.</>,
                tags: [
                    { name: "Next.js", icon: "nextjs" },
                    { name: "JavaScript", icon: "javascript" },
                    { name: "PHP", icon: "php" },
                    { name: "Python", icon: "python" },
                    { name: "Firebase", icon: "firebase" },
                    { name: "Supabase", icon: "supabase" },
                    { name: "SQLite", icon: "sqlite" },
                ],
            },
            {
                title: "UI/UX & Multimedia Design",
                description: <>Menerjemahkan kebutuhan bisnis menjadi wireframe fungsional, prototipe interaktif di Figma, serta aset multimedia 3D/visual.</>,
                tags: [
                    { name: "Figma", icon: "figma" },
                    { name: "Photoshop", icon: "photoshop" },
                    { name: "Premiere Pro", icon: "premiere" },
                    { name: "Blender", icon: "blender" },
                    { name: "Canva", icon: "canva" },
                ],
            },
        ],
    },
};

const blog: Blog = {
    path: "/blog",
    label: "Blog",
    title: "Parzello Tech Blog",
    description: `Read what ${person.name} has been up to recently`,
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
};

const work: Work = {
    path: "/work",
    label: "Work",
    title: `Projects – ${person.name}`,
    description: `Design and dev projects by ${person.name}`,
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
};

const apps: Apps = {
    path: "/apps",
    label: "Apps",
    title: `Apps – ${person.name}`,
    description: `Aplikasi dan produk digital yang dibangun dan dirilis oleh ${person.name}`,
    // Create new app entries by adding a new .mdx file to app/apps/items
    // All items will be listed on the /apps route
};

const gallery: Gallery = {
    path: "/gallery",
    label: "Gallery",
    title: `Photo gallery – ${person.name}`,
    description: `A photo collection by ${person.name}`,
    // Images by https://lorant.one
    // These are placeholder images, replace with your own
    images: [
        {
            src: "/images/blog/otomatisasi-tanpa-batas-panduan-cepat-mengenal-n8n/cover.webp",
            alt: "image",
            orientation: "horizontal",
        },
    ],
};

const team: Team = {
    display: true,
    title: "Meet Our Team",
    description: "Meet the talented individuals behind Parzello Tech.",
    members: [
        {
            name: "Muhammad Kholis",
            role: "Founder & Lead Developer",
            avatar: "/images/team/muhammad_kholis2.jpg",
            description: "Flutter & Web Developer yang passionate dalam membangun aplikasi modern. Mahasiswa Teknik Informatika PNL dengan fokus pada software development dan teknologi kreatif.",
            profileLink: "https://portfolio-mkholis.vercel.app/",
        },
    ],
};

export { person, social, newsletter, home, about, blog, work, apps, gallery, team };

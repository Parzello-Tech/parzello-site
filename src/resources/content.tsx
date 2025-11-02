import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
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
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>My weekly newsletter about creativity and engineering</>,
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
    title: "Parzello Tech - Technology should be accessible ",
    description: "Parzello is a digital agency focused on Web & Mobile Development, delivering innovative digital solutions for businesses and communities.",
    headline: <>Digital Solutions for Your Business Growth </>,
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
            <b>Parzello</b> is a digital agency specializing in modern, scalable, and user-friendly applications.
        </>
    ),
};

const about: About = {
    path: "/about",
    label: "About",
    title: `About – Parzello Tech`,
    description: `Pelajari lebih lanjut tentang Parzello Tech, tim pengembang berbasis di Indonesia yang berfokus pada pengembangan web dan mobile.`,
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
        description: <>Parzello Tech adalah kolaborasi antara startup dan digital agency yang berfokus pada pengembangan aplikasi web dan mobile. Kami menghadirkan solusi digital inovatif dengan mengutamakan efisiensi, tampilan modern, serta pengalaman pengguna yang menyenangkan.</>,
    },
    work: {
        display: false, // set to false to hide this section
        title: "Projects & Experience",
        experiences: [
            {
                company: "Ticzy App",
                timeframe: "2025 - Present",
                role: "Core Product Development",
                achievements: [<>Mengembangkan Ticzy, aplikasi manajemen produktivitas harian dengan fitur To-Do List, Finance Tracker, Scheduler, dan Daily Journal.</>, <>Menerapkan sistem sinkronisasi antara penyimpanan lokal (Hive/SQLite) dan cloud (Firebase Firestore) dengan autentikasi Google.</>],
                images: [
                    {
                        src: "/images/projects/ticzy/cover-01.jpg",
                        alt: "Ticzy App Interface",
                        width: 16,
                        height: 9,
                    },
                ],
            },
            {
                company: "Centrepoint App",
                timeframe: "2023 - 2024",
                role: "Fullstack Developer",
                achievements: [<>Membangun aplikasi berbasis Flutter dan Firebase untuk manajemen kegiatan organisasi POLICY (Polytechnic Linux Community).</>, <>Menerapkan sistem absensi dan manajemen acara berbasis Google Sign-In dan Firestore Database.</>],
                images: [],
            },
        ],
    },
    studies: {
        display: true, // set to false to hide this section
        title: "Background",
        institutions: [
            {
                name: "Politeknik Negeri Lhokseumawe",
                description: <>Tim inti Parzello Tech berasal dari mahasiswa dan alumni jurusan Teknologi Informasi dan Komputer, dengan fokus di bidang pengembangan aplikasi dan sistem informasi.</>,
            },
            {
                name: "Independent Projects & Research",
                description: <>Anggota tim aktif mengembangkan berbagai proyek independen untuk memperdalam kemampuan di Flutter, Next.js, dan sistem berbasis Firebase.</>,
            },
        ],
    },
    technical: {
        display: true, // set to false to hide this section
        title: "Technical Skills",
        skills: [
            {
                title: "Flutter & Firebase",
                description: <>Mengembangkan aplikasi lintas platform dengan Flutter, serta integrasi cloud menggunakan Firebase Authentication, Firestore, dan Storage.</>,
                tags: [
                    {
                        name: "Flutter",
                        icon: "flutter",
                    },
                    {
                        name: "Firebase",
                        icon: "firebase",
                    },
                ],
                /*    images: [
                    {
                        src: "/images/projects/ticzy/cover-02.jpg",
                        alt: "Flutter Project Image",
                        width: 16,
                        height: 9,
                    },
                ], */
            },
            {
                title: "Next.js & Supabase",
                description: <>Membangun website dan dashboard modern menggunakan Next.js, Once UI, dan Supabase sebagai backend-as-a-service.</>,
                tags: [
                    {
                        name: "Next.js",
                        icon: "nextjs",
                    },
                    {
                        name: "Supabase",
                        icon: "supabase",
                    },
                    {
                        name: "TypeScript",
                        icon: "typescript",
                    },
                ],
                /*   images: [
                    {
                        src: "/images/projects/web/cover-03.jpg",
                        alt: "Next.js Project Image",
                        width: 16,
                        height: 9,
                    },
                ], */
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

export { person, social, newsletter, home, about, blog, work, gallery };

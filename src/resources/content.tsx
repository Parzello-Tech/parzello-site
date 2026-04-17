import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work, Team } from "@/types";
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
    description: `Menjadi pemimpin dalam inovasi digital yang menciptakan solusi teknologi berdampak positif, praktis, dan scalable untuk masyarakat dan industri.`,
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
            Parzello Tech adalah startup sekaligus digital agency yang berfokus pada pengembangan aplikasi dan solusi digital yang intuitif, efisien, dan relevan untuk kehidupan modern. Kami menggabungkan semangat inovasi yang fleksibel dengan ketepatan serta keandalan layanan profesional untuk menghadirkan solusi teknologi yang berdampak positif, praktis, dan skalabel bagi masyarakat dan industri.
        </>,
    },
    work: {
        display: true, // set to false to hide this section
        title: "Projects & Experience",
        experiences: [
            {
                company: "Ticzy App",
                timeframe: "2025 - Present",
                role: "Product Management & Core Dev",
                achievements: [
                    <>Mengembangkan aplikasi manajemen produktivitas harian dengan fitur To-Do List, Finance Tracker, dan Daily Journal.</>,
                    <>Mengintegrasikan sistem sinkronisasi cloud menggunakan Supabase dan penyimpanan lokal SQLite.</>
                ],
                images: [],
            },
            {
                company: "Pentest Mobile",
                timeframe: "2025 - 2026",
                role: "Mobile Developer (Diskominsa Aceh)",
                achievements: [
                    <>Membangun aplikasi monitoring hasil penetration testing untuk kebutuhan keamanan siber pemerintah Aceh.</>,
                    <>Fokus pada visualisasi data temuan celah keamanan secara real-time dan manajemen laporan.</>
                ],
                images: [],
            },
            {
                company: "E-Konsul",
                timeframe: "2024 - 2025",
                role: "Lead Fullstack Developer",
                achievements: [
                    <>Platform konsultasi digital yang menghubungkan mahasiswa dan dosen di Politeknik Negeri Lhokseumawe.</>,
                    <>Dilengkapi fitur chat real-time via Firebase dan sistem penjadwalan bimbingan yang efisien.</>
                ],
                images: [],
            },
            {
                company: "Centrepoint",
                timeframe: "2024",
                role: "Mobile Developer (UKM POLICY)",
                achievements: [
                    <>Digitalisasi sistem absensi dan manajemen organisasi UKM POLICY berbasis QR Code dan Geofencing.</>,
                    <>Meningkatkan transparansi dan kedisiplinan anggota melalui sistem pencatatan otomatis.</>
                ],
                images: [],
            },
        ],
    },
    studies: {
        display: true, // set to false to hide this section
        title: "Team Background",
        institutions: [
            {
                name: "Politeknik Negeri Lhokseumawe",
                description: <>D3 Teknik Informatika (2022 - Sekarang). IPK: 3.53 / 4.00. Aktif dalam organisasi teknologi kampus (UKM POLICY).</>,
            },
            {
                name: "SMK Negeri 2 Kota Langsa",
                description: <>Rekayasa Perangkat Lunak (2019 - 2022). Fokus pada dasar-dasar pemrograman web dan mobile development.</>,
            },
        ],
    },
    technical: {
        display: true, // set to false to hide this section
        title: "Technical Skills",
        skills: [
            {
                title: "Programming & Frameworks",
                description: <>Mahir dalam pengembangan mobile dan web menggunakan teknologi modern untuk aplikasi yang cepat dan responsif.</>,
                tags: [
                    { name: "Flutter", icon: "flutter" },
                    { name: "Dart", icon: "flutter" },
                    { name: "Next.js", icon: "nextjs" },
                    { name: "PHP", icon: "php" },
                    { name: "Python", icon: "python" },
                    { name: "JavaScript", icon: "javascript" },
                ],
            },
            {
                title: "Design & Multimedia",
                description: <>Memiliki minat kuat dalam teknologi kreatif dan desain visual untuk menciptakan antarmuka yang indah.</>,
                tags: [
                    { name: "Figma", icon: "figma" },
                    { name: "Photoshop", icon: "photoshop" },
                    { name: "Premiere Pro", icon: "premiere" },
                    { name: "Blender", icon: "blender" },
                    { name: "Canva", icon: "canva" },
                ],
            },
            {
                title: "Backend & Database",
                description: <>Berpengalaman dalam mengelola data menggunakan solusi cloud dan penyimpanan lokal.</>,
                tags: [
                    { name: "Firebase", icon: "firebase" },
                    { name: "Supabase", icon: "supabase" },
                    { name: "SQLite", icon: "sqlite" },
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

export { person, social, newsletter, home, about, blog, work, gallery, team };

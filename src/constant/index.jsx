import { Plus } from 'lucide-react';
import { ScrollText } from 'lucide-react';
import { FilePenLine } from 'lucide-react';
import { ChartColumnDecreasing } from 'lucide-react';
import { HandCoins } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
  {
    label: "Start",
    href: "#",
    onClick: (navigate) => navigate("/hitung-modal"), // Navigasi ke halaman Hitung Modal
  },
];



export const features = [
  {
    icon:  <Plus />,
    text: "Tambah Transaksi",
    description:
      "Catat setiap pengeluaran Anda dengan cepat dan mudah. Pilih kategori, masukkan jumlah, dan tentukan tanggal transaksi.",
  },
  {
    icon: <ScrollText />,
    text: "Lihat Daftar Transaksi",
    description:
      "Pantau semua pengeluaran Anda secara real-time. Daftar ini dirancang agar mudah diakses dan difilter berdasarkan tanggal atau kategori.",
  },
  {
    icon: <FilePenLine />,
    text: "Edit & Hapus Transaksi",
    description:
      "Perbaiki kesalahan pencatatan atau hapus transaksi yang tidak relevan dengan hanya beberapa klik.",
  },
  {
    icon:<ChartColumnDecreasing />,
    text: "Statistik Pengeluaran",
    description:
      "Dapatkan ringkasan pengeluaran berdasarkan tanggal atau kategori dalam tampilan grafik interaktif.",
  },
  {
    icon: <HandCoins />,
    text: "Laporan Keuangan",
    description:
      "Buat laporan keuangan sederhana yang bisa Anda simpan atau cetak untuk analisis lebih mendalam.",
  },
  
];

export const FAQ = [
  {
    question: "Bagaimana cara mencatat pengeluaran baru?",
    answer:
      "Anda cukup masuk ke halaman 'Tambah Transaksi', masukkan detail seperti nama transaksi, kategori, nominal, dan tanggal, lalu tekan tombol 'Simpan'.",
  },
  {
    question: "Apakah data pengeluaran saya aman?",
    answer:
      "Kami menggunakan enkripsi tingkat tinggi untuk melindungi data Anda. Semua informasi disimpan secara aman dan tidak dibagikan kepada pihak ketiga tanpa izin Anda.",
  },
  {
    question: "Bisakah saya mengedit atau menghapus transaksi yang sudah tercatat?",
    answer:
      "Tentu saja! Anda bisa mengedit atau menghapus transaksi melalui halaman 'Lihat Daftar Transaksi'. Cukup pilih transaksi yang ingin Anda ubah atau hapus.",
  },
  {
    question: "Apakah aplikasi ini tersedia secara gratis?",
    answer:
      "Ya, aplikasi ini gratis untuk digunakan dengan fitur dasar. Namun, Anda bisa meng-upgrade ke versi premium untuk mendapatkan fitur tambahan seperti laporan detail dan grafik lanjutan.",
  },
  {
    question: "Bagaimana cara melihat laporan pengeluaran saya?",
    answer:
      "Anda dapat mengakses laporan pengeluaran dari halaman 'Statistik Pengeluaran' atau dengan menekan tombol 'Laporan Keuangan'. Laporan tersedia dalam format harian, mingguan, atau bulanan.",
  },
  {
    question: "Apakah aplikasi ini tersedia untuk perangkat Android dan iOS?",
    answer:
      "Ya, aplikasi ini tersedia untuk kedua platform. Anda bisa mengunduhnya di Google Play Store atau Apple App Store.",
  },
  
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "" },
  { href: "#", text: "Muhammad Ridho Adriano" },
  { href: "#", text: "" },
  { href: "#", text: "Sistem Informasi" },
  { href: "#", text: "" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];

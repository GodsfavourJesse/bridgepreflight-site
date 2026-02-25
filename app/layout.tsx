// app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "BridgePreflight — Deployment Risk Intelligence",
    description:
        "BridgePreflight is a Deployment Risk Intelligence Platform for Node.js teams. Prevent high-risk releases before production.",
        icons: {
            icon: "/favicon.png",
            shortcut: "/favicon.png",
            apple: "/favicon.png"
        }
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={poppins.variable}>
            <body className="min-h-screen bg-white text-neutral-900 antialiased font-sans">
                <Navbar />

                <main>{children}</main>
                
                <Footer />
            </body>
        </html>
    );
}

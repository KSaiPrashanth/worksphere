import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "@/assets/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Footer";
import AuthWrapper from "@/components/AuthWrapper";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "WorkSphere: Effortless Meeting and Workspace Booking",
  description:
    "Easily book meeting rooms and workspaces with WorkSphere. Enjoy real-time availability, flexible scheduling, and seamless collaboration—all in one platform.",
  openGraph: {
    title: "WorkSphere: Effortless Meeting and Workspace Booking",
    description:
      "Easily book meeting rooms and workspaces with WorkSphere. Enjoy real-time availability, flexible scheduling, and seamless collaboration—all in one platform.",
    url: "https://bookworksphere.vercel.app",
    type: "website",
    images: [
      {
        url: "https://bookworksphere.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "WorkSphere",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WorkSphere: Effortless Meeting and Workspace Booking",
    description:
      "Easily book meeting rooms and workspaces with WorkSphere. Enjoy real-time availability, flexible scheduling, and seamless collaboration—all in one platform.",
    image: "https://bookworksphere.vercel.app/images/og-image.png",
  },
};

export default async function RootLayout({ children }) {
  return (
    <AuthWrapper>
      <html lang="en">
        <head>
          <link
            rel="icon"
            type="image/png"
            href="/favicon-96x96.png"
            sizes="96x96"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="/favicon.svg"
          />
          <link
            rel="shortcut icon"
            href="/favicon.ico"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="WorkSphere"
          />
          <link
            rel="manifest"
            href="/site.webmanifest"
          />
        </head>
        <body className={inter.className}>
          <Header />
          <main className="min-h-screen mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </AuthWrapper>
  );
}

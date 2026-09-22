import "./globals.css";
import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";
import { Background } from "./components/common/LightRays";
import FloatingContactButtons from "./components/common/FloatingContactButtons";
export const metadata = {
  title: "Muhammad Saad Zeb — Frontend Developer Portfolio",
  description:
    "Frontend Developer with 2+ years of experience building responsive, high-performance websites and web applications using React.js, Next.js, and TypeScript.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Background />
        <Header />
        {children}
        <FloatingContactButtons />

        <Footer />
      </body>
    </html>
  );
}

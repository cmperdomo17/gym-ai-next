import NavBar from "@/components/navbar/navbar";
import "./globals.css";
import { onest } from "../components/ui/fonts";
import Footer from "@/components/footer/footer";

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={onest.className}>
        <div className="flex flex-col items-center justify-center h-[100dvh] text-gray-200">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

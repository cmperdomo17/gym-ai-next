import NavBar from "@/components/navbar/navbar";
import "./globals.css";
import { onest } from "../components/ui/fonts";
import Footer from "@/components/footer/footer";
import { ThemeProvider } from "@/components/ui/theme-provider";

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={onest.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col items-center justify-center h-[100dvh] text-gray-200">
            <NavBar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

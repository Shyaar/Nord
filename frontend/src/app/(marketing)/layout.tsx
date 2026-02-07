import { Navbar } from "@/components/Landing_Page/Navbar";
import { Footer } from "@/components/Landing_Page/Footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

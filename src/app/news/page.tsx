import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import News from "@/components/sections/News";

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <News />
      </main>

      <Footer />
    </div>
  );
}

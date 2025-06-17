import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Course from "@/components/sections/Courses";

export default function CoursesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Course />
      </main>

      <Footer />
    </div>
  );
}

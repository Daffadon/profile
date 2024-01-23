import Footer from "@/components/appbar/Footer";
import About from "@/features/main/About";
import Biography from "@/features/main/Biography";
import Education from "@/features/main/Education";
import Experience from "@/features/main/Experience";
import Licenses from "@/features/main/Licenses";
import Project from "@/features/main/Project";
import TechStack from "@/features/main/TechStack";

export default function Home() {
  return (
    <div className="grid place-items-center">
      <div className="w-7/12 cursor-default">
        <div className="mt-8"></div>
        <Biography />
        <div className="mt-3"></div>
        <About />

        <div className="mt-3"></div>
        <Experience />

        <div className="mt-3"></div>
        <Education />

        <div className="mt-3"></div>
        <TechStack />

        <div className="mt-3"></div>
        <Project />

        <div className="mt-3"></div>
        <Licenses />

        <div className="mb-3"></div>
        <Footer />
      </div>
    </div>
  );
}

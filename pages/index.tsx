import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";

const Home = () => (
  <div>
    <Header />
    <Hero />
    <Main />
    <Testimonial />
    <CTA />
    <footer className="bg-blue-500 text-white text-center py-4">
      © 2024 Digital Printing. All Rights Reserved.
    </footer>
  </div>
);

export default Home;

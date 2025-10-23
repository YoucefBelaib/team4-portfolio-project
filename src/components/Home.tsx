import Hero from "./homepage/Hero";
import TeamMembers from "./homepage/TeamMembers";
import Services from "./homepage/Services";
import Contact from "./homepage/Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <main className="container mx-auto flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:gap-20">
          <Hero />
          <TeamMembers />
          <Services />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;

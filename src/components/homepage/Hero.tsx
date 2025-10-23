const Hero = () => {
  return (
    <section className="@container">
      <div
        className="relative flex min-h-[480px] flex-col items-start justify-end overflow-hidden rounded-xl bg-cover bg-center p-8 md:p-12"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url('/heroImage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="z-10 flex max-w-2xl flex-col gap-4 text-left">
          <h1 className="text-4xl font-black text-white sm:text-5xl md:text-6xl">
            Crafting Digital Experiences
          </h1>
          <p className="text-base text-gray-200 sm:text-lg">
            We are a team of passionate developers dedicated to building
            innovative and user-centric web and desktop applications. Our mission is to
            transform ideas into reality through clean, efficient, and scalable
            code.
          </p>
        </div>
        <button className="mt-6 flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-bold text-white transition-colors hover:bg-primary/90">
          Explore Our Work
        </button>
      </div>
    </section>
  );
};

export default Hero;

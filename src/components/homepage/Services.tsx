const Services = () => {
  return (
    <section>
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Our Services
        </h2>
        <p className="mt-2 max-w-2xl text-base text-gray-600 dark:text-gray-400">
          What we do best to help you succeed.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800/50">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <svg
              fill="currentColor"
              height="28"
              viewBox="0 0 256 256"
              width="28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Web/Desktop Development
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Building responsive and interactive Web/Desktop applications.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800/50">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <svg
              fill="currentColor"
              height="28"
              viewBox="0 0 256 256"
              width="28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM136,75.31,152.69,92,68,176.69,51.31,160ZM48,208V179.31L76.69,208Zm48-3.31L79.32,188,164,103.31,180.69,120Zm96-96L147.32,64l24-24L216,84.69Z"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              UI/UX Design
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Creating intuitive and visually appealing user interfaces.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800/50">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <svg
              fill="currentColor"
              height="28"
              viewBox="0 0 256 256"
              width="28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Backend Development
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Developing robust and scalable server-side solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

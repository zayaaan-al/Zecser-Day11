export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-primary via-indigo-600 to-purple-700 text-white">

      {/* background glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">

        <span className="inline-block mb-6 px-4 py-1 text-sm bg-white/20 backdrop-blur rounded-full">
          🚀 #1 Job Portal Platform
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Find Your <span className="text-yellow-300">Dream Job</span> Faster
        </h1>

        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
          Discover thousands of opportunities from top companies.
          Your next big career move starts right here.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <button className="border border-white/70 backdrop-blur px-8 py-3 rounded-xl hover:bg-amber-200 hover:text-primary transition duration-300">
            Browse Jobs
          </button>

          <button className="border border-white/70 backdrop-blur px-8 py-3 rounded-xl hover:bg-amber-200 hover:text-primary transition duration-300">
            Post a Job
          </button>

        </div>

        {/* stats */}
        <div className="grid grid-cols-3 gap-6 mt-16 max-w-xl mx-auto text-sm md:text-base">
          <div>
            <p className="text-2xl font-bold">10K+</p>
            <p className="text-white/80">Jobs</p>
          </div>
          <div>
            <p className="text-2xl font-bold">5K+</p>
            <p className="text-white/80">Companies</p>
          </div>
          <div>
            <p className="text-2xl font-bold">20K+</p>
            <p className="text-white/80">Candidates</p>
          </div>
        </div>

      </div>
    </section>
  );
}
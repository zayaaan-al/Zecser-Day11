export default function CTA() {
  return (
    <section className="relative py-24 bg-linear-to-r from-secondary to-slate-900 text-white overflow-hidden">

      <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto text-center px-6">

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Level Up Your Career?
        </h2>

        <p className="text-white/80 mb-10 text-lg">
          Join thousands of professionals who already found their dream job.
        </p>

        <button className="bg-accent px-10 py-4 rounded-xl font-semibold hover:scale-105 hover:shadow-xl transition duration-300">
          Get Started Now
        </button>

      </div>
    </section>
  );
}
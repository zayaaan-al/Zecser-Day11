const features = [
  {
    title: "Smart Search",
    desc: "Advanced filters help you find the perfect role in seconds.",
    icon: "🔍",
  },
  {
    title: "Verified Companies",
    desc: "Apply confidently to trusted and top-rated employers.",
    icon: "🏢",
  },
  {
    title: "One-Click Apply",
    desc: "Save time with our lightning fast application process.",
    icon: "⚡",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Job Seekers Love Us
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Everything you need to land your next opportunity faster and smarter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <div
              key={i}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
export function Intro() {
  const categories = [
    "All",
    "Photo Verification",
    "Facility Management",
    "Compliance",
    "Training",
    "Cost Reduction",
  ];

  return (
    <>
      {/* Top bar */}
      <div className="w-full bg-white border-b border-gray-100 py-3 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-extrabold text-navy">FotoFinish</span>
        </div>
        <a
          href="https://fotofinish.com"
          className="text-sm font-medium text-navy hover:underline flex items-center gap-1"
        >
          &#8592; Back to FotoFinish.com
        </a>
      </div>

      {/* Hero band */}
      <section className="w-full bg-navy py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            The FotoFinish Blog
          </h1>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto" style={{ color: "#75BEE9" }}>
            Insights on facility management, cleaning accountability, and multi-site operations for operations managers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full sm:w-80 px-4 py-3 rounded-lg border-0 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
              style={{ color: "#555555" }}
              readOnly
            />
            <a
              href="https://app.fotofinish.com/subscription"
              className="inline-block px-6 py-3 rounded-lg font-bold text-navy-dark text-sm whitespace-nowrap transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#FBF49B", color: "#1A2B3C" }}
            >
              Start Free Trial &#8594;
            </a>
          </div>
        </div>
      </section>

      {/* Category filter pills */}
      <div className="w-full bg-cloud border-b border-gray-200 px-4 py-4">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                cat === "All"
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-navy border-navy hover:bg-navy hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

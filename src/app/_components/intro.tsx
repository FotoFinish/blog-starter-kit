export function Intro() {
  return (
    <>
      {/* Top bar */}
      <div className="w-full bg-white border-b border-gray-100 py-3 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-extrabold" style={{ color: "#003F73" }}>FotoFinish</span>
        </div>
        <a
          href="https://fotofinish.com"
          className="text-sm font-medium hover:underline flex items-center gap-1"
          style={{ color: "#003F73" }}
        >
          &#8592; Back to FotoFinish.com
        </a>
      </div>

      {/* Hero band */}
      <section className="w-full py-16 px-4" style={{ backgroundColor: "#003F73" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            The FotoFinish Blog
          </h1>
          <p className="text-lg mb-4 max-w-2xl mx-auto" style={{ color: "#75BEE9" }}>
            Insights on facility management, cleaning accountability, and multi-site operations for operations managers.
          </p>
          <a
            href="https://app.fotofinish.com/subscription"
            className="inline-block px-6 py-3 rounded-lg font-bold text-sm whitespace-nowrap transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#FBF49B", color: "#1A2B3C" }}
          >
            Start Free Trial &#8594;
          </a>
        </div>
      </section>
    </>
  );
}

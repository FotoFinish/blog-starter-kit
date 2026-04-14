import { Intro } from "@/app/_components/intro";
import { BlogFeed } from "@/app/_components/blog-feed";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Intro />
      <BlogFeed posts={allPosts} />

      {/* Bottom CTA section */}
      <section className="w-full py-20 px-6 text-center" style={{ backgroundColor: "#003F73" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Stop Guessing. Start Verifying.
          </h2>
          <p className="text-lg mb-8" style={{ color: "#75BEE9" }}>
            Join 6,000+ sites using FotoFinish to verify cleaning standards every shift.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.fotofinish.com/subscription"
              className="inline-block px-8 py-4 rounded-lg font-bold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#FBF49B", color: "#1A2B3C" }}
            >
              Start Your Free 10-Day Trial &#8594;
            </a>
            <a
              href="https://fotofinish.com/contact.html"
              className="inline-block px-8 py-4 rounded-lg font-bold text-sm border-2 border-white text-white transition-colors hover:bg-white hover:text-navy"
              style={{ color: "white" }}
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

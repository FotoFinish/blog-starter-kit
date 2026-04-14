"use client";

import { useState, useMemo } from "react";
import { Post } from "@/interfaces/post";
import { HeroPost } from "./hero-post";
import { MoreStories } from "./more-stories";
import Container from "./container";

const CATEGORIES = [
  "All",
  "Photo Verification",
  "Facility Management",
  "Compliance",
  "Training",
  "Cost Reduction",
];

type Props = {
  posts: Post[];
};

export function BlogFeed({ posts }: Props) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return posts.filter((p) => {
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [posts, search, activeCategory]);

  const heroPost = filtered[0];
  const morePosts = filtered.slice(1);

  return (
    <>
      {/* Search + category bar */}
      <div
        className="w-full border-b px-4 py-4"
        style={{ backgroundColor: "#F2F5F9", borderColor: "#e2e8f0" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-3 items-center justify-between">
          {/* Search input */}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles..."
            className="w-full sm:w-72 px-4 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2"
            style={{
              borderColor: "#cbd5e1",
              color: "#555555",
              backgroundColor: "#ffffff",
            }}
          />
          {/* Category pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors"
                style={
                  activeCategory === cat
                    ? {
                        backgroundColor: "#003F73",
                        color: "#ffffff",
                        borderColor: "#003F73",
                      }
                    : {
                        backgroundColor: "#ffffff",
                        color: "#003F73",
                        borderColor: "#003F73",
                      }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts */}
      <Container>
        <div className="pt-10">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-2xl font-bold mb-2" style={{ color: "#003F73" }}>
                No articles found
              </p>
              <p className="text-sm" style={{ color: "#555555" }}>
                Try a different search term or category.
              </p>
              <button
                onClick={() => { setSearch(""); setActiveCategory("All"); }}
                className="mt-6 px-6 py-2 rounded-lg font-semibold text-sm text-white transition-opacity hover:opacity-80"
                style={{ backgroundColor: "#003F73" }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <>
              <HeroPost
                title={heroPost.title}
                coverImage={heroPost.coverImage}
                date={heroPost.date}
                author={heroPost.author}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
                category={heroPost.category}
              />
              {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </>
          )}
        </div>
      </Container>
    </>
  );
}

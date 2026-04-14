import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  category?: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  category,
}: Props) {
  return (
    <section className="mb-16">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        {/* Cover image */}
        <div className="w-full" style={{ maxHeight: "520px", overflow: "hidden" }}>
          <CoverImage title={title} src={coverImage} slug={slug} />
        </div>
        {/* Content */}
        <div className="p-8">
          {/* Category badge */}
          <div className="mb-4">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-white"
              style={{ backgroundColor: "#003F73" }}
            >
              {category || "Insights"}
            </span>
          </div>
          <h2 className="mb-4 font-extrabold leading-tight" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#003F73" }}>
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h2>
          <p className="text-base leading-relaxed mb-6" style={{ color: "#555555" }}>
            {excerpt}
          </p>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <Avatar name={author.name} picture={author.picture} />
              <span className="text-sm" style={{ color: "#555555" }}>
                <DateFormatter dateString={date} />
              </span>
            </div>
            <Link
              href={`/posts/${slug}`}
              className="inline-block px-5 py-2 rounded-lg text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#003F73" }}
            >
              Read Article &#8594;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

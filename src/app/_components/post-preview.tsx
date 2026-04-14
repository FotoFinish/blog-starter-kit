import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
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

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  category,
}: Props) {
  return (
    <Link href={`/posts/${slug}`} className="block group cursor-pointer">
      <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm transition-shadow hover:shadow-md h-full flex flex-col">
        {/* Cover image - aspect ratio 16/9 */}
        <div className="w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          {/* Category badge */}
          <div className="mb-3">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-white"
              style={{ backgroundColor: "#003F73" }}
            >
              {category || "Insights"}
            </span>
          </div>
          {/* Title */}
          <h3
            className="font-bold mb-2 leading-snug line-clamp-2"
            style={{ fontSize: "1.1rem", color: "#003F73" }}
          >
            {title}
          </h3>
          {/* Date */}
          <div className="text-xs mb-3" style={{ color: "#555555" }}>
            <DateFormatter dateString={date} />
          </div>
          {/* Excerpt */}
          <p
            className="text-sm leading-relaxed line-clamp-2 mb-4 flex-1"
            style={{ color: "#555555", fontSize: "0.875rem" }}
          >
            {excerpt}
          </p>
          {/* Author */}
          <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
            <Avatar name={author.name} picture={author.picture} />
          </div>
        </div>
      </div>
    </Link>
  );
}

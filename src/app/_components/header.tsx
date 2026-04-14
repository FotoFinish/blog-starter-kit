import Link from "next/link";

const Header = () => {
  return (
    <header
      className="w-full bg-white border-b border-gray-200 flex items-center justify-between px-6"
      style={{ height: "64px" }}
    >
      <Link
        href="/"
        className="text-sm font-semibold text-navy hover:underline flex items-center gap-1"
        style={{ color: "#003F73" }}
      >
        &#8592; FotoFinish Blog
      </Link>
      <a
        href="https://app.fotofinish.com/subscription"
        className="inline-block px-5 py-2 rounded-lg text-sm font-bold transition-opacity hover:opacity-90"
        style={{ backgroundColor: "#FBF49B", color: "#1A2B3C" }}
      >
        Start Free Trial &#8594;
      </a>
    </header>
  );
};

export default Header;

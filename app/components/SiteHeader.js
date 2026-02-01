import Link from "next/link";
export default function SiteHeader() {
  const navLinks = [
      {
        href: "https://nextjs.org/",
        text: "NextJS Docs"
      },
      {
        href: "https://tailwindcss.com",
        text: "TailWind",
      },
      {
        href: "https://sd-web-2.vercel.app",
        text: "Course Site"
      },
    ];
  return (
    <header className="flex gap-4 justify-between py-4 px-8">
      <div>
        <Link href="/">Site Logo</Link>
      </div>
      {/*TODO: Add Icon */}
      <nav>
        <ul className="flex gap-4">
          <HeaderNavLink ></HeaderNavLink>        
        </ul>
      </nav>
    </header>
  );
}
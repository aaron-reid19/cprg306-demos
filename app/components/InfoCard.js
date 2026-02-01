import Link from "next/link";

export default function InfoCard({name,description, href, linkText}) {
  return (
    <div>
      <article>
        <h3>{name}</h3>
        <p>{description}</p>
        <Link href={href}>{linkText}</Link>
      </article>
    </div>
  );
}

import Link from "next/link";
export default function NotFound() {
  return <main className="not-found"><p className="section-kicker">404 / NOT FOUND</p><h1>Project not found.</h1><Link className="button button-dark" href="/#projects">Back to projects</Link></main>;
}

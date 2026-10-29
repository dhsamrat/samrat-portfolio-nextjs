
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  ExternalLink,
} from "lucide-react";
import { notFound } from "next/navigation";

const projects = {
  "bazar-dor": {
    name: "Bazar Dor",
    image: "/bazar-dor.png",
    category: "Market price tracking platform",
    year: "2026",
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Better Auth",
      "MongoDB",
    ],
    summary:
      "A Bengali-focused product browsing experience designed around everyday market prices. The interface helps users explore products and understand price changes in a familiar local context.",
    role: "Frontend and full-stack practice project",
    live: "https://a7-bazar-dor-alpha.vercel.app",
    repo: "https://github.com/dhsamrat/a7-bazar-dor",
    challenges: [
      "Building a consistent responsive layout for Bengali content.",
      "Connecting UI components to product and category APIs.",
      "Working through authentication setup and deployment configuration.",
    ],
    improvements: [
      "Add reliable market and price-history visualizations.",
      "Improve loading, empty, and error states.",
      "Add tests and improve accessibility.",
    ],
  },

  "fit-log": {
    name: "Fit Log",
    image: "/fit-log.png",
    category: "Workout tracking application",
    year: "2026",
    stack: [
      "Next.js",
      "React",
      "REST API",
      "Tailwind CSS",
    ],
    summary:
      "A workout discovery and planning application featuring exercise details, muscle groups, equipment, difficulty, duration, and daily plan interactions.",
    role: "Frontend development and API integration practice",
    live: "https://fit-log-omega-ten.vercel.app",
    repo: "https://github.com/dhsamrat/fit-log",
    challenges: [
      "Handling API loading and fetch errors.",
      "Keeping the daily plan UI in sync with user actions.",
      "Designing clear workout detail pages.",
    ],
    improvements: [
      "Add persistent workout plans and user profiles.",
      "Add filters and search.",
      "Improve validation, tests, and error recovery.",
    ],
  },

  devstack: {
    name: "Build Your Ideal Development Stack",
    image: "/dev-stack.png",
    category: "Developer learning portal",
    year: "2026",
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
    ],
    summary:
      "A learning-focused website for exploring development tools and technologies.",
    role: "Frontend development practice",
    live: "https://samrat-devstack.netlify.app/",
    repo: "https://github.com/dhsamrat/B14-A05-DevStack",
    challenges: [
      "Building reusable UI components.",
      "Creating a responsive layout.",
      "Organizing project data and sections.",
    ],
    improvements: [
      "Improve accessibility.",
      "Add more interactive features.",
      "Improve responsive behavior.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects[slug];

  return {
    title: project
      ? `${project.name} | Samrat Portfolio`
      : "Project | Samrat Portfolio",
  };
}

export default async function ProjectDetails({ params }) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) notFound();

  return (
    <main className="detail-page">
      <header className="nav-wrap">
        <nav className="nav container">
          <Link href="/" className="brand">
            DH samrat<span>.</span>
          </Link>

          <Link href="/#projects" className="back-link">
            <ArrowLeft size={16} />
            All projects
          </Link>
        </nav>
      </header>

      <section className="detail-hero container">
        <p className="section-kicker">
          PROJECT CASE STUDY / {project.year}
        </p>

        <p className="project-type">{project.category}</p>

        <h1>
          {project.name}<span>.</span>
        </h1>

        <p className="detail-summary">{project.summary}</p>

        <div className="tag-row detail-tags">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className={`detail-art ${slug}`}>
          <div className="detail-art-inner">
            <span className="detail-art-label">
              SELECTED PROJECT
            </span>

            <div className="detail-big-type">
              {project.name}
            </div>

            <div className="detail-art-footer">
              DESIGN · DEVELOPMENT · LEARNING
            </div>
          </div>

          {project.image && (
            <div className="detail-image-wrap">
              <img
                src={project.image}
                alt={`${project.name} homepage screenshot`}
                className="detail-project-image"
              />
            </div>
          )}
        </div>
      </section>

      <section className="container detail-content">
        <div className="detail-main">
          <div className="detail-block">
            <p className="section-kicker">01 / OVERVIEW</p>
            <h2>About the project</h2>
            <p>{project.summary}</p>
            <p>
              <strong>My role:</strong> {project.role}.
            </p>
          </div>

          <div className="detail-block">
            <p className="section-kicker">02 / CHALLENGES</p>
            <h2>What I worked through</h2>
            <ul>
              {project.challenges.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="detail-block">
            <p className="section-kicker">03 / NEXT STEPS</p>
            <h2>What I’d improve next</h2>
            <ul>
              {project.improvements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="detail-sidebar">
          <div className="sidebar-card">
            <p className="section-kicker">TECH STACK</p>

            <div className="sidebar-tags">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="sidebar-divider" />

            <p className="section-kicker">PROJECT LINKS</p>

            <a
              className="sidebar-link"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live website
              <ExternalLink size={16} />
            </a>

            <a
              className="sidebar-link"
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Client repository
              <Github size={16} />
            </a>

            <Link
              className="button button-dark sidebar-button"
              href="/#contact"
            >
              Discuss a project
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </aside>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <Link href="/" className="brand">
            DH samrat<span>.</span>
          </Link>

          <Link href="/#projects">More projects ↑</Link>
        </div>
      </footer>
    </main>
  );
}

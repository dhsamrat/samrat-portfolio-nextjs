import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUpRight,
  Download,
  Code2,
} from "lucide-react";
import Contact from "@/app/components/Contact";



const projects = [
  {
    number: "01",
    slug: "bazar-dor",
    name: "Bazar Dor",
    image: "/bazar-dor.png",
    color: "peach",
    type: "Market Price Platform",
    description:
      "A Bengali-focused platform for exploring everyday product prices.",
    stack: ["Next.js", "React", "Tailwind CSS"],
    live: "https://a7-bazar-dor-alpha.vercel.app",
    repo: "https://github.com/dhsamrat/a7-bazar-dor",
  },
  {
    number: "02",
    slug: "fit-log",
    name: "Fit Log",
    image: "/fit-log.png",
    color: "mint",
    type: "Workout Tracking App",
    description:
      "A workout tracking application with exercise details and API integration.",
    stack: ["Next.js", "React", "REST API"],
    live: "https://fit-log-omega-ten.vercel.app",
    repo: "https://github.com/dhsamrat/fit-log",
  },
  {
    number: "03",
    slug: "devstack",
    name: "Build Your Ideal Development Stack",
    image: "/dev-stack.png",
    color: "lavender",
    type: "Developer Learning Portal",
    description:
      "A learning-focused website for exploring development tools and technologies.",
    stack: ["Next.js", "React", "Tailwind CSS"],
    live: "https://samrat-devstack.netlify.app/",
    repo: "https://github.com/dhsamrat/B14-A05-DevStack",
  },
];





// const projects = [



  
//   {
//     slug: "bazar-dor",
//     name: "Bazar Dor",
//     type: "Market price tracking platform",
//     description:
//       "A Bengali-focused web app concept for browsing everyday products and tracking market prices and price changes.",
//     stack: ["Next.js", "React", "Tailwind CSS", "Better Auth"],
//     number: "01",
//     color: "peach",
//     repo: "https://github.com/dhsamrat/a7-bazar-dor",
//     live: "https://a7-bazar-dor-alpha.vercel.app",
//   },
//   {
//     slug: "fit-log",
//     name: "Fit Log",
//     type: "Workout tracking application",
//     description:
//       "A workout app for exploring exercises, viewing workout instructions and managing a daily plan.",
//     stack: ["Next.js", "React", "API Integration"],
//     number: "02",
//     color: "mint",
//     repo: "https://github.com/dhsamrat/fit-log",
//     live: "https://fit-log-omega-ten.vercel.app",
//   },
//   {
//     slug: "devstack",
//     name: "Build Your Ideal Development Stack",
//     type: "Learning portal",
//     description:
//       "A development resource portal that helps developers explore and compare tools and technologies for their ideal development stack.",
//     stack: ["Next.js", "React", "Tailwind CSS"],
//     number: "03",
//     color: "lavender",
//     repo: "https://github.com/dhsamrat/B14-A05-DevStack",
//     live: "https://samrat-devstack.netlify.app/",
//   },
// ];

const skills = [
  {
    group: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    group: "Backend & Data",
    items: [
      "Node.js fundamentals",
      "REST APIs",
      "CRUD",
      "MongoDB basics",
    ],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "VS Code", "Vercel"],
  },
];

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <header className="nav-wrap">
        <nav className="nav container">
          <a href="#home" className="brand">
            DH Samrat<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Journey</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
          </div>

          <a href="#contact" className="nav-cta">
            Let’s talk <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      {/* Ticker:*/}
      <div className="ticker">
        <div>
          BUILD • LEARN • CREATE • IMPROVE • BUILD • LEARN • CREATE •
          IMPROVE •
        </div>
      </div>

      {/* Hero */}
      <section id="home" className="hero container">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            OPEN TO LEARNING & OPPORTUNITIES
          </div>

          <p className="hello">Hello, I’m</p>

          <h1>
            Delowar Hossain
            <br />
            <span>Samrat.</span>
          </h1>

          <h2>Full Stack Web Developer</h2>

          <p className="hero-text">
            I’m a Computer Science student who enjoys turning ideas into
            useful, accessible, and responsive web experiences.
          </p>

          <div className="hero-actions">
            <a className="button button-dark" href="/resume.jpg" download>
              Download Resume <Download size={17} />
            </a>

            <a className="button button-light" href="#projects">
              Explore my work <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="social-row">
            <a
              href="https://github.com/dhsamrat"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} /> LinkedIn
            </a>

             <a
    href="https://x.com/DHSamRat17"
    target="_blank"
    rel="noreferrer"
  >
    <Twitter size={18} /> Twitter
  </a>

            <a href="mailto:delowarhossainsamrat@gmail.com">
              <Mail size={18} /> Email
            </a>
          </div>
        </div>

        <div className="hero-art">
          <div className="art-blob"></div>

          <div className="photo-card">
            
<div className="photo-placeholder">
  <img
    src="images/samrat.jpg"
    alt="Delowar Hossain Samrat"
    className="profile-photo"
  />
</div>


            {/* <div className="photo-caption">
              <span className="caption-line"></span>
              <div>
                <strong>Curious mind.</strong>
                <small>Builder in progress.</small>
              </div>
            </div> */}
          </div>

          {/* <div className="floating-card float-code">
            <Code2 size={18} />
            <span>
              Building with
              <br />
              <b>React & Next.js</b>
            </span>
          </div> */}

          {/* <div className="floating-card float-location">
            📍 Chattogram, Bangladesh
          </div> */}

          {/* <span className="art-star star-one">✳</span>
          <span className="art-star star-two">✳</span> */}
        </div>
      </section>

      {/* About */}
      <section id="about" className="section container about-grid">
        <div>
          <p className="section-kicker">01 / A LITTLE ABOUT ME</p>
          <h2 className="section-title">
            Learning by building.
            <br />
            <span>Growing every day.</span>
          </h2>
        </div>

        <div className="about-content">
          <p>
            I’m Delowar Hossain Samrat, a CSE student at International Islamic
            University Chittagong (IIUC), Bangladesh, working toward becoming
            a skilled Full Stack Web Developer.
          </p>

          <p>
            My web development journey started with the fundamentals of HTML,
            CSS and JavaScript, and has grown into building interfaces with
            React and Next.js. I enjoy learning how the frontend connects with
            APIs, authentication, and databases to create complete products.
          </p>

          <p>
            Outside coding, I enjoy playing football, reading books, and
            writing short stories. I believe consistency, curiosity, and
            learning from mistakes are essential to becoming a better
            developer.
          </p>

          <div className="mini-stats">
            <div>
              <strong>03+</strong>
              <span>Projects showcased</span>
            </div>
            <div>
              <strong>Always</strong>
              <span>Learning & improving</span>
            </div>
            <div>
              <strong>CSE</strong>
              <span>Academic background</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <p className="section-kicker">02 / MY TOOLKIT</p>

          <div className="section-heading-row">
            <h2 className="section-title">
              Tools I use to
              <br />
              <span>bring ideas to life.</span>
            </h2>

            <p className="muted">
              A growing toolkit shaped by practice, projects, and curiosity.
            </p>
          </div>

          <div className="skill-grid">
            {skills.map((group) => (
              <div className="skill-card" key={group.group}>
                <div className="skill-icon">
                  <Code2 size={21} />
                </div>

                <h3>{group.group}</h3>

                <div className="skill-pills">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section id="experience" className="section container">
        <p className="section-kicker">03 / MY JOURNEY</p>
        <h2 className="section-title">The journey so far.</h2>

        <div className="timeline">
          <div className="timeline-item">
            <span className="timeline-dot"></span>

            <div className="timeline-date">CURRENT FOCUS</div>

            <div className="timeline-main">
              <h3>Full Stack Web Development</h3>
              <p className="muted">
                Independent learning & project-based practice
              </p>
              <p>
                Practicing responsive UI development, reusable React
                components, Next.js routing, API integration, authentication
                concepts, and deployment workflows.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <span className="timeline-dot"></span>

            <div className="timeline-date">EDUCATION</div>

            <div className="timeline-main">
              <h3>B.Sc. in Computer Science & Engineering</h3>
              <p className="muted">
                International Islamic University Chittagong (IIUC)
              </p>
              <p>
                Building a foundation in computer science while developing
                practical web application skills.
              </p>
            </div>
          </div>
        </div>
      </section>

     
{/* Projects */}
<section id="projects" className="section projects-section">
  <div className="container">
    <p className="section-kicker">04 / SELECTED WORK</p>

    <div className="section-heading-row">
      <h2 className="section-title">
        Things I’ve <span>built.</span>
      </h2>

      <p className="muted">
        Small steps, real practice, and a lot of learning along the way.
      </p>
    </div>

    <div className="project-grid">
      {projects.map((project) => (
        <article className="project-card" key={project.slug}>
          <Link
            href={`/projects/${project.slug}`}
            className={`project-art ${project.color}`}
          >
            <span className="project-number">
              {project.number} / CASE STUDY
            </span>

            {/* Actual project homepage screenshot */}
            <div className="project-image-wrap">
              <img
                src={project.image}
                alt={`${project.name} homepage preview`}
                className="project-screenshot"
              />
            </div>

            <span className="project-arrow">
              <ArrowUpRight size={21} />
            </span>
          </Link>

          <div className="project-info">
            <p className="project-type">{project.type}</p>
            <h3>{project.name}</h3>

            <p className="project-desc">{project.description}</p>

            <div className="tag-row">
              {project.stack.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="project-actions">
              {project.live && (
                <a
                  className="text-link"
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Website <ArrowUpRight size={16} />
                </a>
              )}

              {project.repo && (
                <a
                  className="text-link"
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <ArrowUpRight size={16} />
                </a>
              )}

              <Link
                className="text-link"
                href={`/projects/${project.slug}`}
              >
                View Details <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>


      {/* Education */}
      <section
        id="education"
        className="section container education-section"
      >
        <p className="section-kicker">05 / EDUCATION</p>
        <h2 className="section-title">Where I’m learning.</h2>

        <div className="education-card">
          <div className="education-mark">IIUC</div>

          <div>
            <p className="project-type">UNDERGRADUATE STUDIES</p>
            <h3>B.Sc. in Computer Science & Engineering</h3>
            <p>International Islamic University Chittagong (IIUC)</p>
            <p className="muted">
              Chattogram, Bangladesh · Currently studying
            </p>
          </div>

          <span className="education-badge">CSE</span>
        </div>
      </section>

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <a href="#home" className="brand">
            DH samrat<span>.</span>
          </a>

          <p>Designed with curiosity · Built with Next.js</p>

          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
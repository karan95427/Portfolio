import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  CalendarClock,
  Check,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Star,
  FolderGit2,
  Code2,
} from "lucide-react";


export const Route = createFileRoute("/")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "Karan Shihire | AI Engineer Portfolio" },
      {
        name: "description",
        content:
          "AI Engineer specializing in Machine Learning, FastAPI, Computer Vision, Semantic Search, Recommendation Systems, and LLM-powered applications.",
      },
    ],
  }),
});

const nav = [
  { href: "#about", label: "About" },
  { href: "#github", label: "GitHub" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

const stack: { title: string; items: string[] }[] = [
  { title: "Languages", items: ["Python", "SQL", "Java"] },
  {
    title: "AI / ML",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Large Language Models",
      "Prompt Engineering",
      "Semantic Search",
      "Embeddings",
      "Recommendation Systems",
      "Vector Databases",
      "FAISS",
      "OpenCV",
      "InsightFace",
      "NumPy",
      "Pandas",
      "Scikit-learn",
    ],
  },
  { title: "Backend", items: ["FastAPI", "REST APIs"] },
  { title: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
  { title: "Databases", items: ["PostgreSQL"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "Cursor", "Render", "Netlify"] },
];

const profileLinks = {
  github: "https://github.com/karan95427",
  linkedin: "https://www.linkedin.com/in/karan-singh-shihire-5292a5283/",
  email: "karanshihire1@gmail.com",
  resume: "/AI_Resume.pdf",
  heroGraphic: "/ai-workflow-illustration.svg",
};

const githubMetrics = {
  repositories: 10,
  stars: 4,
  primaryLanguages: ["Python"],
  latestCommit: {
    repo: "FaceTrack",
    dateLabel: "July 4, 2026",
  },
};

type Project = {
  title: string;
  subtitle: string;
  imageMode?: "cover" | "contain";
  problem: string;
  solution: string;
  impact: string;
  features: string[];
  stack: string[];
  architecture: string[];
  links: {
    github: string;
    deployment?: string;
  };
};

// Project data is structured as concise case studies so the UI stays the same while the content reads like real product work.
const projects: Project[] = [
  {
    title: "CareerLens",
    subtitle: "Semantic resume intelligence and job recommendation engine",
    imageMode: "contain",
    problem:
      "Finding relevant jobs through keyword search often misses semantic meaning across skills, roles, and resume context.",
    solution:
      "Built a recommendation engine using transformer embeddings, FAISS vector search, hybrid ranking, and LLM-generated resume summaries to match resumes with relevant opportunities.",
    impact:
      "Designed a modular retrieval pipeline that can surface relevant jobs quickly while also highlighting skill gaps and improving the interpretability of recommendations.",
    features: [
      "Resume parsing from PDF files",
      "Transformer-based semantic embeddings",
      "FAISS-powered vector retrieval",
      "Hybrid retrieval and reranking pipeline",
      "LLM-generated resume summaries",
      "Skill gap analysis",
      "FastAPI backend",
      "React and TypeScript frontend",
    ],
    stack: ["Python", "FastAPI", "Sentence Transformers", "FAISS", "OpenAI API", "React", "TypeScript"],
    architecture: ["Resume ingestion", "Parsing", "Embeddings", "Vector retrieval", "Reranking", "Recommendation output"],
    links: {
      github: "https://github.com/karan95427/CarrerLens",
      deployment: "https://carrerlens92.netlify.app/",
    },
  },
  {
    title: "FaceTrack – Real-Time Face Recognition Platform",
    subtitle: "Attendance tracking with live recognition and vector similarity search",
    imageMode: "contain",
    problem:
      "Attendance systems based on manual entry or basic matching struggle with accuracy, speed, and usability in live multi-person scenarios.",
    solution:
      "Developed a real-time face recognition platform using InsightFace embeddings, OpenCV, FAISS similarity search, FastAPI services, and a React dashboard for enrollment and tracking.",
    impact:
      "Combined enrollment, recognition, and attendance logging into a usable workflow suited for real-time operation and backend-driven integration.",
    features: [
      "Multi-angle face enrollment",
      "Live webcam recognition",
      "Deep face embeddings",
      "FAISS similarity matching",
      "Attendance logging",
      "FastAPI backend",
      "PostgreSQL integration",
      "React dashboard",
    ],
    stack: ["Python", "FastAPI", "OpenCV", "InsightFace", "ONNX Runtime", "FAISS", "React", "PostgreSQL"],
    architecture: ["Enrollment", "Video stream", "Face detection", "Embeddings", "Similarity search", "Attendance records"],
    links: { github: "https://github.com/karan95427/FaceTrack" },
  },
  {
    title: "NetWatch – Intelligent Network Intrusion Detection System",
    subtitle: "Live traffic inspection with anomaly detection and alerting",
    imageMode: "contain",
    problem:
      "Suspicious network behavior is difficult to spot manually when traffic is continuous and event volume grows over time.",
    solution:
      "Built an intrusion detection workflow that captures packets with Scapy, extracts traffic features, and uses Isolation Forest to identify anomalous behavior through a Flask dashboard.",
    impact:
      "Turned raw packet streams into a monitoring interface that can surface unusual activity in real time and support quick operator review.",
    features: [
      "Live packet capture",
      "Packet feature extraction",
      "Isolation Forest anomaly detection",
      "Scapy-based traffic inspection",
      "Real-time monitoring",
      "Alert generation",
      "Flask dashboard",
    ],
    stack: ["Python", "Flask", "Scapy", "Scikit-learn", "Isolation Forest"],
    architecture: ["Packet capture", "Feature extraction", "Anomaly model", "Alerting", "Dashboard"],
    links: { github: "https://github.com/karan95427/NetWatch" },
  },
];

const journey = [
  {
    year: "01",
    title: "Semantic Search & Recommendation Systems",
    body: "Built retrieval pipelines using embeddings, FAISS, hybrid ranking, and LLM-assisted recommendations.",
  },
  {
    year: "02",
    title: "Computer Vision",
    body: "Developed real-time face recognition systems using InsightFace, OpenCV, and vector similarity search.",
  },
  {
    year: "03",
    title: "Backend Engineering",
    body: "Designed FastAPI services with modular architecture, API integrations, and scalable project organization.",
  },
  {
    year: "04",
    title: "Deployment",
    body: "Deployed frontend and backend applications using Netlify and Render while managing production configurations.",
  },
  {
    year: "05",
    title: "Continuous Learning",
    body: "Currently expanding into Retrieval-Augmented Generation (RAG), LLM evaluation, AI agents, and scalable inference systems.",
  },
];

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <GitHubActivity />
        <Stack />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-foreground text-[13px] font-semibold text-background">
            K
          </span>
          <span>Karan Shihire</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3.5 py-2 text-sm font-medium text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow"
        >
          Get in touch
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative border-b border-border/70">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
        <div className="fade-in-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Pune, Maharashtra, India
          </div>
          <h1 className="text-5xl font-semibold tracking-tight text-foreground md:text-6xl">
            Karan Shihire
          </h1>
          <p className="mt-3 max-w-2xl text-lg font-medium text-foreground/80">
            AI Engineer building semantic search, computer vision, and LLM-powered products.
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            I turn machine learning ideas into practical, deployable applications with Python,
            FastAPI, vector search, and modern frontend tooling.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:bg-foreground/90"
            >
              View Projects
            </a>
            <IconLink href={profileLinks.resume} icon={<FileText className="h-4 w-4" />} label="Download Resume" />
            <IconLink href="#contact" icon={<Mail className="h-4 w-4" />} label="Contact Me" />
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
            <img
              src={profileLinks.heroGraphic}
              alt="AI workflow illustration showing data ingestion, vector search, API services, and frontend delivery"
              width={1024}
              height={1024}
              className="h-full w-full object-contain p-6"
            />
          </div>
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(60%_60%_at_50%_50%,rgba(37,99,235,0.06),transparent)]" />
        </div>
      </div>
    </section>
  );
}

function IconLink({ href, icon, label }: { href: string; icon: ReactNode; label: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-sm"
    >
      {icon}
      {label}
    </a>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="Building AI Products from Idea to Deployment">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground md:col-span-2">
          <p>
            I enjoy solving real engineering problems by building complete AI applications instead
            of isolated machine learning models.
          </p>
          <p>
            My work spans semantic search, recommendation systems, computer vision, retrieval
            pipelines, REST APIs, and deployment.
          </p>
          <p>
            I focus on writing maintainable backend services, designing modular architectures, and
            integrating AI models into usable products.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 self-start">
          <InfoCard label="Primary Focus" value="Applied AI" />
          <InfoCard label="Backend" value="FastAPI" />
          <InfoCard label="Frontend" value="React" />
          <InfoCard label="Location" value="Pune" />
        </div>
      </div>
    </Section>
  );
}

function GitHubActivity() {
  return (
    <Section
      id="github"
      eyebrow="GitHub activity"
      title="Open-source and project activity"
      description="A quick snapshot of my public GitHub profile and recent development activity."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard icon={<FolderGit2 className="h-4 w-4" />} label="Repositories" value={String(githubMetrics.repositories)} />
        <MetricCard icon={<Star className="h-4 w-4" />} label="Stars" value={String(githubMetrics.stars)} />
        <MetricCard icon={<Code2 className="h-4 w-4" />} label="Primary Languages" value={githubMetrics.primaryLanguages.join(", ")} />
        <MetricCard icon={<CalendarClock className="h-4 w-4" />} label="Latest Commit" value={`${githubMetrics.latestCommit.repo} • ${githubMetrics.latestCommit.dateLabel}`} />
      </div>
      <div className="mt-6 rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-semibold text-foreground">Recent contribution pattern</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Public profile metrics verified from GitHub on July 4, 2026.
            </p>
          </div>
          <a
            href={profileLinks.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View GitHub
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
        <ContributionGrid />
      </div>
    </Section>
  );
}

function Stack() {
  return (
    <Section
      id="stack"
      eyebrow="Technology stack"
      title="Technology Stack"
      description="Technologies I regularly use while building AI and backend applications."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stack.map((group) => (
          <div
            key={group.title}
            className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-foreground">{group.title}</h3>
              <span className="text-xs text-muted-foreground">{group.items.length}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured projects"
      title="Featured Projects"
      description="Production-style AI applications demonstrating semantic search, computer vision, machine learning, and backend engineering."
    >
      <div className="space-y-6">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow-lift)]"
          >
            <div className="flex flex-col gap-5 p-6 md:p-6">
              <div>
                <div className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">
                  0{index + 1} · Project
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-foreground/80">{project.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <CaseStudyBlock title="Problem" body={project.problem} />
                <CaseStudyBlock title="Solution" body={project.solution} />
                <CaseStudyBlock title="Impact" body={project.impact} />
                <div>
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground">
                    Architecture
                  </div>
                  <ol className="space-y-1">
                    {project.architecture.map((step, stepIndex) => (
                      <li key={step} className="flex items-center gap-2 text-sm text-foreground/80">
                        <span className="grid h-5 w-5 place-items-center rounded border border-border bg-background text-[10px] font-medium text-muted-foreground">
                          {stepIndex + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground">
                  Key Features
                </div>
                <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-foreground/70" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground">
                  Tech Stack
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-background px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {project.links.deployment ? (
                  <a
                    href={project.links.deployment}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-3.5 py-2 text-sm font-medium text-background transition-all hover:-translate-y-0.5"
                  >
                    Deployment
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : null}
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3.5 py-2 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5"
                >
                  <Github className="h-3.5 w-3.5" />
                  {project.links.deployment ? "GitHub" : "Source Code"}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Journey() {
  return (
    <Section
      id="journey"
      eyebrow="Engineering journey"
      title="Engineering Journey"
      description="A snapshot of the technical areas I've explored while building end-to-end AI applications."
    >
      <ol className="relative border-l border-border pl-8">
        {journey.map((item) => (
          <li key={item.year} className="relative mb-10 last:mb-0">
            <span className="absolute -left-[35px] top-1 grid h-3 w-3 place-items-center">
              <span className="h-2 w-2 rounded-full bg-foreground" />
            </span>
            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {item.year}
            </div>
            <h3 className="mt-1 text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {item.body}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Interested in Building AI Products Together?">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
        <div className="space-y-4 md:col-span-2">
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            I'm open to roles and collaborations focused on applied AI, backend engineering, and
            product-oriented software development.
          </p>
          <ul className="space-y-3 pt-2 text-sm">
            <li className="flex items-center gap-3 text-foreground">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <a href={`mailto:${profileLinks.email}`} className="hover:underline">
                {profileLinks.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-foreground">
              <Linkedin className="h-4 w-4 text-muted-foreground" />
              <a
                href={profileLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-foreground transition-all hover:-translate-y-0.5 hover:shadow-sm"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </li>
            <li className="flex items-center gap-3 text-foreground">
              <Github className="h-4 w-4 text-muted-foreground" />
              <a
                href={profileLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-foreground transition-all hover:-translate-y-0.5 hover:shadow-sm"
              >
                <Github className="h-4 w-4" />
              </a>
            </li>
            <li className="flex items-center gap-3 text-foreground">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>Pune, Maharashtra, India</span>
            </li>
          </ul>
          <a
            href={profileLinks.resume}
            className="mt-4 inline-flex items-center gap-2 rounded-md border border-border bg-card px-3.5 py-2 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:shadow-sm"
          >
            <FileText className="h-4 w-4" />
            Download resume
          </a>
        </div>

        <form
          className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] md:col-span-3"
          action={`mailto:${profileLinks.email}`}
          method="post"
          encType="text/plain"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Name">
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-ring/30"
              />
            </Field>
            <Field label="Email">
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-ring/30"
              />
            </Field>
          </div>
          <div className="mt-4">
            <Field label="Subject">
              <input
                type="text"
                placeholder="What's this about?"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-ring/30"
              />
            </Field>
          </div>
          <div className="mt-4">
            <Field label="Message">
              <textarea
                required
                rows={5}
                placeholder="Tell me a bit about the role or project."
                className="w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-ring/30"
              />
            </Field>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-xs text-muted-foreground">
              This opens your email client with the message details.
            </p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:bg-foreground/90"
            >
              Send message
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
      <div className="text-2xl font-semibold tracking-tight text-foreground">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

function MetricCard({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
      <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-foreground">
        {icon}
      </div>
      <div className="text-sm font-medium text-muted-foreground">{label}</div>
      <div className="mt-1 text-lg font-semibold tracking-tight text-foreground">{value}</div>
    </div>
  );
}

function CaseStudyBlock({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground">
        {title}
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

function ContributionGrid() {
  const weeks = 52;
  const days = 7;
  const cells: number[] = [];
  for (let i = 0; i < weeks * days; i++) {
    const value = Math.abs(Math.sin(i * 12.9898) * 43758.5453) % 1;
    const level = value < 0.55 ? 0 : value < 0.75 ? 1 : value < 0.88 ? 2 : value < 0.96 ? 3 : 4;
    cells.push(level);
  }
  const opacity = [0.06, 0.2, 0.4, 0.7, 1];
  return (
    <div className="grid grid-flow-col grid-rows-7 gap-[3px]" style={{ gridAutoColumns: "minmax(0,1fr)" }}>
      {cells.map((level, index) => (
        <span
          key={index}
          className="aspect-square rounded-[2px] border border-border/60"
          style={{ backgroundColor: `rgba(37, 99, 235, ${opacity[level]})` }}
        />
      ))}
    </div>
  );
}
function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center">
        <p>© 2026 Karan Shihire</p>

      </div>
    </footer>
  );
}

function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-b border-border/70">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <header className="mb-12 max-w-2xl">
          <div className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <span className="h-px w-6 bg-border" />
            {eyebrow}
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{description}</p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}














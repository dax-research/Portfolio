import {
  ArticleCard,
  LinkButton,
  PageFrame,
  ProjectCard,
  SectionHeading,
} from "@/components/site-shell";
import {
  education,
  featuredProjects,
  profileLinks,
  researchInterests,
  skills,
  writingArticles,
} from "@/data/portfolio";

export default function Home() {
  return (
    <PageFrame>
      <main className="mx-auto w-full max-w-6xl px-6 pb-20 md:px-8">
        <section className="grid gap-10 border-b border-[var(--line)] py-16 md:grid-cols-[1.35fr_0.65fr] md:items-end md:py-20">
          <div>
            <p className="mono mb-5 text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
              AI/ML engineer · researcher · systems builder
            </p>
            <h1 className="max-w-4xl text-5xl font-medium tracking-[-0.08em] text-[var(--ink)] md:text-[6rem] md:leading-[0.9]">
              Dax Patel
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
              I build practical AI systems and explore the research layer behind them — from data quality and model reliability to RAG, intelligent tooling, and applied ML.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="/projects">View work</LinkButton>
              <LinkButton href={profileLinks.email} secondary>
                Contact
              </LinkButton>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-4">
                <p className="mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Focus</p>
                <p className="mt-3 text-base text-[var(--ink)]">Data quality</p>
              </div>
              <div className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-4">
                <p className="mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Systems</p>
                <p className="mt-3 text-base text-[var(--ink)]">RAG & search</p>
              </div>
              <div className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-4">
                <p className="mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Applied</p>
                <p className="mt-3 text-base text-[var(--ink)]">Fraud analytics</p>
              </div>
            </div>
          </div>

          <div className="editorial-grid border border-[var(--line)] bg-[rgba(255,255,255,0.3)] p-6">
            <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Now</p>
            <p className="mt-4 text-2xl font-medium tracking-[-0.05em] text-[var(--ink)]">
              Building intelligent systems around data, retrieval, and research workflows.
            </p>
            <div className="mt-6 space-y-3 border-t border-[var(--line)] pt-4 text-sm text-[var(--muted)]">
              <div className="flex items-center justify-between gap-4">
                <span>Location</span>
                <span className="text-[var(--ink)]">Nadiad, India</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span>Focus</span>
                <span className="text-[var(--ink)]">AI/ML · NLP · RAG</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <SectionHeading
            eyebrow="Selected work"
            title="Systems with technical depth and research intent."
            description="Three works define the portfolio focus: dataset quality tooling, research assistance, and applied fraud detection."
          />
          <div className="space-y-5">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                category={project.category}
                status={project.status}
                shortDescription={project.shortDescription}
                tech={project.tech}
                href={`/projects/${project.slug}`}
                index={index + 1}
              />
            ))}
          </div>
        </section>

        <section className="border-t border-[var(--line)] py-20">
          <SectionHeading
            eyebrow="Research"
            title="Interests grounded in systems and experimentation."
            description="The work sits between applied ML, intelligent retrieval, and research tooling for knowledge work."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {researchInterests.map((interest) => (
              <div key={interest} className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-5">
                <p className="mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Topic</p>
                <p className="mt-3 text-lg leading-7 text-[var(--ink)]">{interest}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-[var(--line)] py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Writing"
              title="Notes on AI, systems, and the data behind them."
            />
            <LinkButton href="/writing" secondary>
              View all writing
            </LinkButton>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {writingArticles.slice(0, 3).map((article) => (
              <ArticleCard key={article.title} article={article} />
            ))}
          </div>
        </section>

        <section className="border-t border-[var(--line)] py-20">
          <SectionHeading
            eyebrow="Skills"
            title="Engineering approach shaped by practical implementation."
            description="I work across model development, data inspection, experimentation, and system design."
          />
          <div className="grid gap-8 md:grid-cols-3">
            <div className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-6">
              <p className="mono mb-4 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Languages</p>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((item) => (
                  <span key={item} className="border border-[var(--line)] px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-6">
              <p className="mono mb-4 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">AI / ML</p>
              <div className="flex flex-wrap gap-2">
                {skills.ml.map((item) => (
                  <span key={item} className="border border-[var(--line)] px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-6">
              <p className="mono mb-4 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Tools</p>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((item) => (
                  <span key={item} className="border border-[var(--line)] px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--line)] py-20">
          <SectionHeading
            eyebrow="About"
            title="Educated in engineering, driven by research and applied systems."
            description="I am a Computer Engineering student focused on AI and machine learning, with interest in how research ideas become working tools and production-minded models."
          />
          <div className="grid gap-10 md:grid-cols-[1fr_0.9fr]">
            <div className="space-y-5 text-base leading-8 text-[var(--muted)]">
              <p>
                I am a Computer Engineering student at Dharmsinh Desai University with a strong interest in artificial intelligence, machine learning, and the systems that make intelligent workflows useful in the real world.
              </p>
              <p>
                My work is currently centered on data quality, research agents, retrieval systems, and machine learning workflows that bridge conceptual research with practical engineering.
              </p>
              <p>
                I enjoy building projects that connect technical depth with clear problem framing, and I value collaboration, experimentation, and iterative learning.
              </p>
            </div>
            <div className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-6">
              <p className="mono mb-5 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Education</p>
              <div className="space-y-5">
                {education.map((item) => (
                  <div key={item.period} className="border-t border-[var(--line)] pt-4 first:border-t-0 first:pt-0">
                    <p className="mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">{item.period}</p>
                    <h3 className="mt-2 text-xl font-medium tracking-[-0.04em] text-[var(--ink)]">{item.title}</h3>
                    <p className="mt-2 text-sm text-[var(--muted)]">{item.institution}</p>
                    <p className="mt-1 text-sm text-[var(--ink)]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--line)] py-20">
          <SectionHeading
            eyebrow="Contact"
            title="Open to AI/ML, research, and systems collaborations."
            description="I am available for internships, research discussions, engineering work, and project conversations."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <a href={profileLinks.email} className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-5">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Email</p>
              <p className="mt-3 text-base text-[var(--ink)]">dax1214b@gmail.com</p>
            </a>
            <a href={profileLinks.github} target="_blank" rel="noreferrer" className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-5">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">GitHub</p>
              <p className="mt-3 text-base text-[var(--ink)]">github.com/dax-research</p>
            </a>
            <a href={profileLinks.linkedin} target="_blank" rel="noreferrer" className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-5">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">LinkedIn</p>
              <p className="mt-3 text-base text-[var(--ink)]">linkedin.com/in/dax-patel</p>
            </a>
            <a href={profileLinks.medium} target="_blank" rel="noreferrer" className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-5">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Medium</p>
              <p className="mt-3 text-base text-[var(--ink)]">@dax1214b</p>
            </a>
          </div>
        </section>
      </main>
    </PageFrame>
  );
}

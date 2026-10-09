import { PageFrame, PageIntro, SectionHeading } from "@/components/site-shell";
import { education, experience } from "@/data/portfolio";

export default function AboutPage() {
  return (
    <PageFrame>
      <PageIntro
        eyebrow="About"
        title="Engineer, researcher, and systems-minded learner."
        description="I am building a career around AI systems, applied models, and intellectually rigorous engineering work."
      />
      <main className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 text-base leading-8 text-[var(--muted)]">
            <p>
              I am a Computer Engineering student at Dharmsinh Desai University with a deep interest in artificial intelligence and machine learning. My work is fueled by curiosity about how intelligent systems can be designed, evaluated, and turned into dependable real-world tools.
            </p>
            <p>
              I enjoy building systems that are grounded in data, reason carefully, and reflect strong engineering decisions. That interest has naturally led me toward research-specific areas like NLP, retrieval, evaluation, and large language model workflows.
            </p>
            <p>
              I value experimentation, technical clarity, and working across problem framing, implementation, and reflection. My ambition is to keep creating toward the intersection of practical engineering and research depth.
            </p>
          </div>

          <div className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-6">
            <p className="mono mb-5 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Background</p>
            <div className="space-y-5">
              {experience.map((item) => (
                <div
                  key={`${item.period}-${item.role}-${item.organization}`}
                  className="border-t border-[var(--line)] pt-4 first:border-t-0 first:pt-0"
                >
                  <p className="mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">{item.period}</p>
                  <h3 className="mt-2 text-xl font-medium tracking-[-0.04em] text-[var(--ink)]">{item.role}</h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">{item.organization}</p>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-[var(--line)] pt-12">
          <SectionHeading
            eyebrow="Education"
            title="Academic foundation."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {education.map((item) => (
              <div key={item.period} className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-6">
                <p className="mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">{item.period}</p>
                <h3 className="mt-3 text-xl font-medium tracking-[-0.04em] text-[var(--ink)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{item.institution}</p>
                <p className="mt-2 text-sm text-[var(--ink)]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </PageFrame>
  );
}

import { PageFrame, PageIntro, SectionHeading } from "@/components/site-shell";
import { researchInterests } from "@/data/portfolio";

export default function ResearchPage() {
  return (
    <PageFrame>
      <PageIntro
        eyebrow="Research"
        title="Exploring the research layer behind modern AI systems."
        description="My research interests sit at the intersection of language models, retrieval, evaluation, and practical systems design."
      />
      <main id="main-content" tabIndex={-1} className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8">
        <SectionHeading
          eyebrow="Focus areas"
          title="Current lines of investigation."
          description="These are active interests and experiments, not all of them are complete systems or published results."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {researchInterests.map((interest) => (
            <div key={interest} className="border border-[var(--line)] bg-[rgba(255,255,255,0.2)] p-6">
              <p className="mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Area</p>
              <p className="mt-3 text-xl leading-8 text-[var(--ink)]">{interest}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-[var(--line)] pt-12">
          <SectionHeading
            eyebrow="Research posture"
            title="Systematic, hands-on, and evidence-driven."
          />
          <div className="max-w-3xl space-y-5 text-base leading-8 text-[var(--muted)]">
            <p>
              I am especially interested in how models behave when connected to real data, retrieval workflows, and domain-specific constraints. That includes data quality, evaluation methodology, and the design of intelligent tools that can assist with research work.
            </p>
            <p>
              I value experiments that connect academic ideas to concrete workflows: parsing research literature, exploring retrieval pipelines, understanding hallucination risk, and building systems that remain explainable and useful.
            </p>
          </div>
        </div>
      </main>
    </PageFrame>
  );
}

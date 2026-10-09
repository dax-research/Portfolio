import { LinkButton, PageFrame, PageIntro, ProjectCard, SectionHeading } from "@/components/site-shell";
import { featuredProjects } from "@/data/portfolio";

export default function ProjectsPage() {
  return (
    <PageFrame>
      <PageIntro
        eyebrow="Projects"
        title="Selected systems, experiments, and applied AI work."
        description="A curated portfolio of current projects focused on data quality, research tooling, and applied machine learning systems."
      />
      <main className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <SectionHeading
            eyebrow="Portfolio"
            title="Work that reflects how I think about AI systems."
          />
          <LinkButton href="/contact" secondary>
            Collaborate
          </LinkButton>
        </div>

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
      </main>
    </PageFrame>
  );
}

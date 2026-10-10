import { LinkButton, PageFrame, PageIntro, SectionHeading } from "@/components/site-shell";
import { ProjectCard } from "@/components/motion/project-card";
import { featuredProjects } from "@/data/portfolio";
import { RouteTransition } from "@/components/route-transition";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Explore Dax Patel’s work in dataset quality tooling, early-stage research software, and transaction fraud detection.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <PageFrame>
      <RouteTransition routeKey="projects">
        <PageIntro
        eyebrow="Projects"
        title="Selected systems, experiments, and applied AI work."
        description="A curated portfolio of current projects focused on data quality, research tooling, and applied machine learning systems."
      />
      <main id="main-content" tabIndex={-1} className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8">
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
              projectSlug={project.slug}
            />
          ))}
        </div>
        </main>
      </RouteTransition>
    </PageFrame>
  );
}

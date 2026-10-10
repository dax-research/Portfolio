import { ProjectDetailPage } from "@/components/project-detail-page";
import { createPageMetadata } from "@/lib/site-metadata";
import { getProjectBySlug } from "@/data/portfolio";

const project = getProjectBySlug("mlcheck");

export const metadata = createPageMetadata({
  title: project.title,
  description: project.description,
  path: `/projects/${project.slug}`,
});

export default function MlCheckPage() {
  return <ProjectDetailPage project={project} />;
}

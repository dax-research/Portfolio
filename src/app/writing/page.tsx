import { ArticleCard, PageFrame, PageIntro, SectionHeading } from "@/components/site-shell";
import { writingArticles } from "@/data/portfolio";
import { RouteTransition } from "@/components/route-transition";

export default function WritingPage() {
  return (
    <PageFrame>
      <RouteTransition routeKey="writing">
        <PageIntro
        eyebrow="Writing"
        title="Notes, ideas, and technical commentary."
        description="Public writing focused on AI systems, ML fundamentals, and the practical role of data in model performance."
      />
      <main id="main-content" tabIndex={-1} className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8">
        <SectionHeading
          eyebrow="Published work"
          title="Selected articles from my Medium writing."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {writingArticles.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
        </div>
        </main>
      </RouteTransition>
    </PageFrame>
  );
}

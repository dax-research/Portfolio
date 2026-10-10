import { ViewTransition, type ReactNode } from "react";

export function RouteTransition({
  routeKey,
  children,
}: {
  routeKey: string;
  children: ReactNode;
}) {
  return (
    <ViewTransition
      key={routeKey}
      name="portfolio-route-content"
      share="cinematic-share"
      default="none"
    >
      <div className="route-content">{children}</div>
    </ViewTransition>
  );
}

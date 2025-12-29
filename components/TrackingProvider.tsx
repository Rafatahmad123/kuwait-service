"use client";

import { Suspense, useEffect } from "react";
import type { ReactNode } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import { trackVisit } from "@/lib/analytics";

type TrackingProviderProps = {
  children: ReactNode;
};

const TrackingProviderInner = ({ children }: TrackingProviderProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;

    const search = searchParams?.toString();
    const path = search ? `${pathname}?${search}` : pathname;
    const userAgent = typeof navigator !== "undefined" ? navigator.userAgent : undefined;
    const referrer = typeof document !== "undefined" ? document.referrer : undefined;
    const locale = typeof document !== "undefined" ? document.documentElement.lang : undefined;

    void trackVisit({
      path,
      userAgent,
      referrer,
      locale,
    });
  }, [pathname, searchParams?.toString()]);

  return <>{children}</>;
};

const TrackingProvider = ({ children }: TrackingProviderProps) => {
  return (
    <Suspense fallback={null}>
      <TrackingProviderInner>{children}</TrackingProviderInner>
    </Suspense>
  );
};

export default TrackingProvider;

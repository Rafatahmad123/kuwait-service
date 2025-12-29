"use client";

import { forwardRef } from "react";
import type { AnchorHTMLAttributes } from "react";

import { trackLead } from "@/lib/analytics";

export type LeadTrackedLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  channel: "phone" | "whatsapp";
  source: string;
  metadata?: Record<string, unknown> | null;
};

const LeadTrackedLink = forwardRef<HTMLAnchorElement, LeadTrackedLinkProps>(
  ({ channel, source, metadata, onClick, href, target, rel, ...rest }, ref) => {
    const handleClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (onClick) {
        onClick(event);
      }

      if (event.defaultPrevented) {
        return;
      }

      event.preventDefault();

      try {
        await trackLead({ channel, source, href, metadata: metadata ?? null });
      } finally {
        const finalTarget = target ?? "_self";
        if (finalTarget === "_blank") {
          const features = rel && /noopener|noreferrer/.test(rel) ? "noopener,noreferrer" : undefined;
          window.open(href, finalTarget, features);
        } else {
          window.location.href = href;
        }
      }
    };

    return <a ref={ref} href={href} onClick={handleClick} target={target} rel={rel} {...rest} />;
  }
);

LeadTrackedLink.displayName = "LeadTrackedLink";

export default LeadTrackedLink;

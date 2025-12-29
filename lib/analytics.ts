import { getSupabaseClient } from "@/lib/supabase";

type VisitPayload = {
  path: string;
  userAgent?: string | null;
  referrer?: string | null;
  locale?: string | null;
};

type LeadPayload = {
  channel: "phone" | "whatsapp";
  source: string;
  href?: string | null;
  metadata?: Record<string, unknown> | null;
};

export const trackVisit = async ({ path, userAgent, referrer, locale }: VisitPayload) => {
  const supabase = getSupabaseClient();

  try {
    const { error } = await supabase.from("site_visits").insert({
      path,
      page_path: path,
      user_agent: userAgent ?? null,
      referrer: referrer ?? null,
      locale: locale ?? null,
    });

    if (error) {
      throw error;
    }
  } catch (error) {
    // Silently swallow analytics failures to avoid impacting UX.
  }
};

export const trackLead = async ({ channel, source, href, metadata }: LeadPayload) => {
  const supabase = getSupabaseClient();

  try {
    const { error } = await supabase.from("leads_tracking").insert({
      channel,
      source,
      href: href ?? null,
      user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
      metadata: metadata ?? null,
    });

    if (error) {
      throw error;
    }
  } catch (error) {
    // Ignore tracking failures so CTAs continue to work seamlessly.
  }
};

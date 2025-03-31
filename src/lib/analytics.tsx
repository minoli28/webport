"use client";

import * as React from "react";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY="phc_NYHleQdHG0O7wIRChi82EhKu81ljiY3RJPHN8BZJwp3", {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: "always",
  });
}

export interface AnalyticsProps {
  children: React.ReactNode;
}

export function Analytics({ children }: AnalyticsProps) {
  return (
    <PostHogProvider client={posthog}>
        {children}
    </PostHogProvider>
  );
}
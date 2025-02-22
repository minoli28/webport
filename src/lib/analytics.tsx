"use client";

import * as React from "react";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
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
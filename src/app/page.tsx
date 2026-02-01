import { PhysicsBackground } from "@/components/game/PhysicsBackground";
import { Profile } from "@/components/Profile";
import { Experience } from "@/components/Experience";
import { Recommendations } from "@/components/Recommendations";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { FadeIn } from "@/components/ui/fade-in";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-gray-50 to-gray-200 dark:from-zinc-900 dark:to-black text-foreground">
      {/* Background - Fixed */}
      <PhysicsBackground />

      {/* Content - Scrollable */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Left Column: Profile & Sticky Info */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="lg:sticky lg:top-8 space-y-6">
              <FadeIn delay={0.1}>
                <Profile />
              </FadeIn>
              <FadeIn delay={0.2}>
                <Skills />
              </FadeIn>
            </div>
          </div>

          {/* Right Column: Experience & Recommendations */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-8">
            <FadeIn delay={0.3}>
              <Education />
            </FadeIn>

            <FadeIn delay={0.3}>
              <Experience />
            </FadeIn>

            <FadeIn delay={0.4}>
              <Recommendations />
            </FadeIn>

            <FadeIn delay={0.5} className="text-center pt-8 pb-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Portfolio. Built with Next.js & Matter.js.
              </p>
            </FadeIn>
          </div>

        </div>
      </div>
    </main>
  );
}

import { HeroBackground } from "@/components/HeroBackground";
import { GITHUB_URL } from "@/constants/common";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Link } from "@workspace/ui/components/link";
import {
  Database,
  FormInput,
  PackageIcon,
  ShieldCheck,
  SwatchBook,
  Zap
} from "lucide-react";
import { Logo } from "../../components/Logo";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <HeroBackground />
        <div className="relative px-4 py-40 mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-6xl font-bold tracking-tight mb-6">
              Build Production Apps
              <div className="text-primary">Faster Than Ever</div>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              A modern Next.js boilerplate with opinionated project structure, 
              React Aria components, TanStack Query, and everything you need to 
              start building immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link variant="default" size="xl" href="/docs/ui/introduction">
                Get Started
              </Link>
              <Link
                variant="outline"
                size="xl"
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-neutral-100 dark:bg-neutral-900">
        <div className="relative z-10 px-4 py-20 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Production-ready boilerplate with best-in-class tools and patterns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<PackageIcon strokeWidth={1.5} />}
              title="Monorepo Structure"
              description="Scalable monorepo setup with pnpm workspaces and Turborepo for managing multiple apps"
            />

            <FeatureCard
              title="React Aria Components"
              description="Accessibility-first components built with React Aria instead of Radix UI for better UX"
              icon={<SwatchBook strokeWidth={1.5} />}
            />

            <FeatureCard
              title="TanStack Query"
              description="Powerful async state management with caching, background updates, and error handling"
              icon={<Database strokeWidth={1.5} />}
            />

            <FeatureCard
              title="Form Management"
              description="React Hook Form + Zod validation for performant forms with TypeScript integration"
              icon={<FormInput strokeWidth={1.5} />}
            />

            <FeatureCard
              title="Production Ready"
              description="Opinionated patterns and examples that scale from small to large applications"
              icon={<ShieldCheck strokeWidth={1.5} />}
            />

            <FeatureCard
              icon={<Zap strokeWidth={1.5} />}
              title="Fast Development"
              description="Get started immediately with pre-configured tools and comprehensive examples"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background-secondary/50 py-12">
        <div className="px-4 mx-auto max-w-7xl text-center">
          <div className="flex justify-center mb-6">
            <Logo />
          </div>
          <p className="text-muted-foreground mb-4">
            Built with ❤️ using Next.js, React Aria, TanStack Query, and modern web
            standards.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="p-1.5 bg-transparent">
      <CardHeader className="bg-linear-to-b from-background to-background-secondary p-4 rounded-[8px]">
        <div className="w-12 h-12 bg-background-tertiary/90 rounded-lg flex items-center justify-center mb-5">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

import { HeroBackground } from "@/components/HeroBackground";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Link } from "@workspace/ui/components/link";
import {
  Code,
  Keyboard,
  PackageIcon,
  Rocket,
  ShieldCheck,
  SwatchBook,
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
            <h1 className="text-6xl font-bold tracking-tight mb-6 text-muted-foreground">
              Build Beautiful UIs
              <div className="text-foreground">Faster Than Ever</div>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Sophon is a modern, accessible, and fully customizable UI library
              for React. Built with React Aria Components and Tailwind CSS for
              exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link variant="default" size="xl" href="/docs/ui/introduction">
                Get Started
              </Link>
              <Link
                variant="outline"
                size="xl"
                href="https://github.com"
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
              Comprehensive set of accessible components designed for modern web
              applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Keyboard strokeWidth={1.5} />}
              title="Accessible Components"
              description="Built with React Aria Components for exceptional accessibility and keyboard navigation"
            />

            <FeatureCard
              title="Customizable Design"
              description="Fully customizable with CSS variables and Tailwind CSS for consistent theming"
              icon={<SwatchBook strokeWidth={1.5} />}
            />

            <FeatureCard
              title="Performance First"
              description="Optimized for performance with tree-shaking and minimal bundle size"
              icon={<Rocket strokeWidth={1.5} />}
            />

            <FeatureCard
              title="TypeScript Ready"
              description="Full TypeScript support with excellent IntelliSense and type safety"
              icon={<Code strokeWidth={1.5} />}
            />

            <FeatureCard
              title="Production Ready"
              description="Battle-tested components used in production applications"
              icon={<ShieldCheck strokeWidth={1.5} />}
            />

            <FeatureCard
              icon={<PackageIcon strokeWidth={1.5} />}
              title="Open Source"
              description="Free and open source with an active community and regular updates"
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
            Built with ❤️ by the Sophon team
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

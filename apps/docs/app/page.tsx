import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Link } from "@workspace/ui/components/link";
import { Logo } from "../components/Logo";
import { HeroBackground } from "@/components/HeroBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <HeroBackground />
        <div className="relative px-4 py-40 mx-auto max-w-7xl">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Logo className="text-lg" />
            </div>
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
      <section className="bg-background">
        <div className="relative z-10 px-4 py-20 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive set of accessible components designed for modern web
              applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group transition-all duration-300 bg-transparent hover:bg-background-secondary hover:border-accent-foreground">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </div>
                <CardTitle>Accessible Components</CardTitle>
                <CardDescription>
                  Built with React Aria Components for exceptional accessibility
                  and keyboard navigation
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group transition-all duration-300 bg-transparent hover:bg-background-secondary hover:border-accent-foreground">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4z"
                    />
                  </svg>
                </div>
                <CardTitle>Customizable Design</CardTitle>
                <CardDescription>
                  Fully customizable with CSS variables and Tailwind CSS for
                  consistent theming
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group transition-all duration-300 bg-transparent hover:bg-background-secondary hover:border-accent-foreground">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <CardTitle>Performance First</CardTitle>
                <CardDescription>
                  Optimized for performance with tree-shaking and minimal bundle
                  size
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group transition-all duration-300 bg-transparent hover:bg-background-secondary hover:border-accent-foreground">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <CardTitle>TypeScript Ready</CardTitle>
                <CardDescription>
                  Full TypeScript support with excellent IntelliSense and type
                  safety
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group transition-all duration-300 bg-transparent hover:bg-background-secondary hover:border-accent-foreground">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <CardTitle>Production Ready</CardTitle>
                <CardDescription>
                  Battle-tested components used in production applications
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group transition-all duration-300 bg-transparent hover:bg-background-secondary hover:border-accent-foreground">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                    />
                  </svg>
                </div>
                <CardTitle>Open Source</CardTitle>
                <CardDescription>
                  Free and open source with an active community and regular
                  updates
                </CardDescription>
              </CardHeader>
            </Card>
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

import { Button } from "@/components/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg px-6 py-16">
      <div className="mx-auto flex max-w-2xl flex-col gap-10">
        <div className="flex flex-col gap-1.5">
          <h1 className="text-2xl font-semibold">Buttons</h1>
          <p className="text-sm text-muted">
            Key-shaped: hovering sinks the face 1px, pressing sinks it 3px.
          </p>
        </div>

        <section className="flex flex-col gap-3">
          <h2 className="text-xs font-medium tracking-widest text-muted uppercase">
            Primary
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button>Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xs font-medium tracking-widest text-muted uppercase">
            Secondary
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="secondary" size="sm">
              Small
            </Button>
            <Button variant="secondary">Medium</Button>
            <Button variant="secondary" size="lg">
              Large
            </Button>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xs font-medium tracking-widest text-muted uppercase">
            Disabled
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button disabled>Primary</Button>
            <Button variant="secondary" disabled>
              Secondary
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}

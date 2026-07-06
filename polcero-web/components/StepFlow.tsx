interface Step {
  number: string;
  title: string;
  description: string;
}

interface StepFlowProps {
  steps: Step[];
}

export function StepFlow({ steps }: StepFlowProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {steps.map((step, i) => (
        <div key={i} data-animate data-animate-delay={String((i + 1) * 100)} className="nl-card p-6 relative">
          <div className="w-10 h-10 rounded-xl bg-[rgba(var(--primary),0.1)] border border-[rgba(var(--primary),0.2)]
            flex items-center justify-center mb-4">
            <span className="text-sm font-black text-[rgb(var(--primary))] font-display">{step.number}</span>
          </div>
          {i < steps.length - 1 && (
            <div className="hidden lg:block absolute top-11 -right-2 w-4 h-px"
              style={{ background: "var(--nl-border)" }} />
          )}
          <h3 className="font-bold text-sm mb-2 font-display" style={{ color: "var(--text-strong)" }}>
            {step.title}
          </h3>
          <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}

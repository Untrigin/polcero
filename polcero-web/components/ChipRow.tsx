interface ChipRowProps {
  chips: string[];
  className?: string;
}

export function ChipRow({ chips, className = "" }: ChipRowProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {chips.map((chip) => (
        <span key={chip} className="nl-chip">
          {chip}
        </span>
      ))}
    </div>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative grid h-9 w-9 place-items-center">
        <span className="absolute inset-0 rotate-45 rounded-[3px] bg-primary" />
        <span className="relative text-[0.7rem] font-bold tracking-tight text-primary-foreground">
          WF
        </span>
      </span>
      <span className="text-[1.65rem] font-semibold leading-none tracking-tight text-foreground">
        wefatherm
      </span>
    </span>
  );
}

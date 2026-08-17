const ITEMS = ["ingest", "chunk", "embed", "retrieve", "generate"];

export function PipelineTracker() {
  return (
    <div className="flex items-center justify-center py-10">
      {ITEMS.map((item, i) => (
        <div key={item} className="flex items-center">
          {i > 0 && (
            <div className="w-[16px] h-px bg-border mx-2 shrink-0" />
          )}
          <span
            className={`w-[5px] h-[5px] rounded-full shrink-0 ${
              item === "generate" ? "bg-warm" : "bg-cool"
            }`}
          />
        </div>
      ))}
    </div>
  );
}

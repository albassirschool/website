import { Button } from "@/components/shared/Button";
import { cn } from "@/lib/utils";

interface DocumentCardProps {
  title: string;
  description: string;
  downloadUrl: string;
  buttonText: string;
  className?: string;
  icon?: React.ReactNode;
}

export function DocumentCard({
  title,
  description,
  downloadUrl,
  buttonText,
  className,
  icon,
}: DocumentCardProps) {
  return (
    <div
      className={cn(
        "bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow",
        className
      )}
    >
      <div className="flex items-start gap-4">
        {icon && <div className="flex-shrink-0 text-blue-500">{icon}</div>}
        <div className="flex-grow">
          <h3 className="text-xl font-semibold mb-3 text-black">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <a href={downloadUrl} download className="inline-block">
            <Button variant="primary">
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                {buttonText}
              </span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

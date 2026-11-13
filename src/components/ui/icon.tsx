export type IconName =
  | "arrow-right"
  | "bank"
  | "building"
  | "camera"
  | "check"
  | "close"
  | "fire"
  | "home"
  | "key"
  | "menu"
  | "network"
  | "shield"
  | "store"
  | "tools"
  | "warehouse";

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className = "h-5 w-5" }: IconProps) {
  const commonProps = {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "arrow-right":
      return (
        <svg {...commonProps}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    case "bank":
      return (
        <svg {...commonProps}>
          <path d="M3 10h18M5 10v7m4-7v7m6-7v7m4-7v7M3 20h18M12 3l9 4H3l9-4Z" />
        </svg>
      );
    case "building":
      return (
        <svg {...commonProps}>
          <path d="M4 21V4h11v17M15 9h5v12M8 8h3m-3 4h3m-3 4h3m7-3h2m-2 4h2M2 21h20" />
        </svg>
      );
    case "camera":
      return (
        <svg {...commonProps}>
          <path d="M14.5 8.5 19 6v12l-4.5-2.5M3 7h11v10H3z" />
        </svg>
      );
    case "check":
      return (
        <svg {...commonProps}>
          <path d="m5 12 4 4L19 6" />
        </svg>
      );
    case "close":
      return (
        <svg {...commonProps}>
          <path d="m6 6 12 12M18 6 6 18" />
        </svg>
      );
    case "fire":
      return (
        <svg {...commonProps}>
          <path d="M12 22c4 0 7-2.8 7-6.7 0-3.1-1.8-5.5-4.5-8.3.1 2.1-.8 3.4-1.7 4.2.2-3.8-2.2-7-5.4-9.2.2 3.5-2.4 5.6-2.4 9.5C5 19.2 8 22 12 22Z" />
          <path d="M9.5 17.2c0 1.7 1.1 2.8 2.5 2.8s2.5-1.1 2.5-2.8c0-1.3-.8-2.4-2.1-3.7 0 1-.4 1.6-1 2-.1-1.5-.9-2.7-2-3.5.1 2.2-1.4 3.3-1.4 5.2Z" />
        </svg>
      );
    case "home":
      return (
        <svg {...commonProps}>
          <path d="m3 11 9-8 9 8M5 10v10h14V10M9 20v-6h6v6" />
        </svg>
      );
    case "key":
      return (
        <svg {...commonProps}>
          <circle cx="8" cy="15" r="4" />
          <path d="m11 12 9-9m-4 4 2 2m-5 1 2 2" />
        </svg>
      );
    case "menu":
      return (
        <svg {...commonProps}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "network":
      return (
        <svg {...commonProps}>
          <rect x="9" y="3" width="6" height="5" rx="1" />
          <rect x="3" y="16" width="6" height="5" rx="1" />
          <rect x="15" y="16" width="6" height="5" rx="1" />
          <path d="M12 8v4M6 16v-4h12v4" />
        </svg>
      );
    case "shield":
      return (
        <svg {...commonProps}>
          <path d="M12 3 5 6v5c0 4.6 2.9 8.5 7 10 4.1-1.5 7-5.4 7-10V6l-7-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "store":
      return (
        <svg {...commonProps}>
          <path d="M4 10v10h16V10M3 4h18l-1 6a3 3 0 0 1-5 1 3 3 0 0 1-6 0 3 3 0 0 1-5-1L3 4ZM8 20v-5h8v5" />
        </svg>
      );
    case "tools":
      return (
        <svg {...commonProps}>
          <path d="M14 6a4 4 0 0 0-5-4l2.2 2.2-3 3L6 5a4 4 0 0 0 4 5L20 20l2-2-10-10" />
          <path d="m5 19 5-5M3 21l2-2" />
        </svg>
      );
    case "warehouse":
      return (
        <svg {...commonProps}>
          <path d="M3 21V8l9-5 9 5v13M7 21v-8h10v8M7 16h10M7 19h10" />
        </svg>
      );
  }
}

type IconProps = {
  size?: number;
  stroke?: string;
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
};

function Svg({
  size = 18,
  stroke = "currentColor",
  strokeWidth = 2,
  className,
  style,
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {children}
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Svg strokeWidth={2.4} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </Svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <Svg strokeWidth={1.8} {...props}>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </Svg>
  );
}

export function GiftIcon(props: IconProps) {
  return (
    <Svg strokeWidth={1.8} {...props}>
      <path d="M20 12v10H4V12" />
      <path d="M2 7h20v5H2Z" />
      <path d="M12 22V7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7Z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7Z" />
    </Svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <Svg strokeWidth={2.2} {...props}>
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </Svg>
  );
}

export function PlusIcon({ className = "k-plus", ...props }: IconProps) {
  return (
    <Svg size={22} stroke="#2A6168" strokeWidth={2.2} className={className} {...props}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </Svg>
  );
}

/** Ícone genérico a partir de um path (ou vários, separados por " M"). */
export function PathIcon({ d, ...props }: IconProps & { d: string }) {
  return (
    <Svg strokeWidth={1.8} {...props}>
      <path d={d} />
    </Svg>
  );
}

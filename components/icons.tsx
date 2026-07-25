/** Thin-line icon set used across the site (stroke = currentColor). */

type IconProps = { size?: number; className?: string };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function ToothIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M7.5 3C5 3 3.5 5 3.5 7.5c0 2 .8 3.2 1.4 5 .5 1.5.7 3.6 1 5.5.2 1.3.6 3 1.8 3 1.7 0 1-4.5 2.5-6.5.4-.6 1.2-.6 1.6 0 1.5 2 .8 6.5 2.5 6.5 1.2 0 1.6-1.7 1.8-3 .3-1.9.5-4 1-5.5.6-1.8 1.4-3 1.4-5C18.5 5 17 3 14.5 3c-1.2 0-1.8.7-2.5.7S8.7 3 7.5 3Z" />
    </svg>
  );
}

export function CapsulesIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="2" y="8" width="12" height="6" rx="3" transform="rotate(-25 8 11)" />
      <path d="m6.2 8.4 5.4 3.6" />
      <rect x="11" y="11" width="11" height="6" rx="3" transform="rotate(20 16.5 14)" />
      <path d="m13.4 15.6 5-1.8" />
    </svg>
  );
}

export function KitIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="3" y="7" width="18" height="13" rx="2.5" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M12 11v5M9.5 13.5h5" />
    </svg>
  );
}

export function AmbulanceIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M2 8a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v9H3a1 1 0 0 1-1-1V8Z" />
      <path d="M14 10h3.2a1 1 0 0 1 .8.4l2.6 3.3a1 1 0 0 1 .2.6V16a1 1 0 0 1-1 1h-1.8M8 9.5v4M6 11.5h4" />
      <circle cx="7" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </svg>
  );
}

export function MicroscopeIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M9 3.5 12.5 7l-4 4L5 7.5l4-4ZM7 10.5 5.5 12M4 20h16M7 20c-1.5-1-2.5-2.7-2.5-4.5M12.5 7c3.5 1 6 3.8 6 7.5 0 2.4-1.2 4.3-3 5.5" />
      <path d="M10 20h7" />
    </svg>
  );
}

export function GradCapIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="m12 4 10 4.5L12 13 2 8.5 12 4ZM6 10.5V15c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5M22 8.5V14" />
    </svg>
  );
}

export function PersonIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5.5 20c.8-3.3 3.4-5 6.5-5s5.7 1.7 6.5 5" />
    </svg>
  );
}

export function MedalIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="10" r="5.5" />
      <path d="m9.5 14.5-2 6 4.5-2.5 4.5 2.5-2-6M12 7.5l.9 1.8 2 .3-1.4 1.4.3 2-1.8-1-1.8 1 .3-2-1.4-1.4 2-.3.9-1.8Z" />
    </svg>
  );
}

export function MoneyIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="2.5" y="6" width="19" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.8" />
      <path d="M6 9.5v.01M18 14.5v.01" />
    </svg>
  );
}

export function HeadsetIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4 13v-2a8 8 0 1 1 16 0v2" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M20 19a4 4 0 0 1-4 3h-2" />
    </svg>
  );
}

export function ClockIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function ArrowUpRightIcon({ size = 14, className }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={2}>
      <path d="M6 18 18 6M8.5 6H18v9.5" />
    </svg>
  );
}

export function PhoneIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={1.8}>
      <path d="M21 16.5v2.6a1.9 1.9 0 0 1-2.07 1.9 18.8 18.8 0 0 1-8.2-2.92 18.5 18.5 0 0 1-5.7-5.7A18.8 18.8 0 0 1 2.1 4.17 1.9 1.9 0 0 1 4 2.1h2.6a1.9 1.9 0 0 1 1.9 1.63c.12.92.34 1.81.66 2.67a1.9 1.9 0 0 1-.43 2L7.5 9.63a15.2 15.2 0 0 0 5.7 5.7l1.23-1.23a1.9 1.9 0 0 1 2-.43c.86.32 1.75.54 2.67.66A1.9 1.9 0 0 1 21 16.5Z" />
    </svg>
  );
}

export function PinIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={1.8}>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function MailIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={1.8}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function PlaneIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={1.8}>
      <path d="M21.5 2.5 13 11m8.5-8.5-6 19-3.5-8.5m9.5-10.5-19 6 8.5 3.5" />
    </svg>
  );
}

export const serviceIcons: Record<string, (p: IconProps) => React.ReactNode> = {
  tooth: ToothIcon,
  capsules: CapsulesIcon,
  kit: KitIcon,
  ambulance: AmbulanceIcon,
  microscope: MicroscopeIcon,
  medal: MedalIcon,
  person: PersonIcon,
  gradcap: GradCapIcon,
  money: MoneyIcon,
};

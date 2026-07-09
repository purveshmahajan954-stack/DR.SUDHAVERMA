interface LuxuryLogoProps {
  size?: number;
  /** 'light' = cream/gold for dark backgrounds, 'dark' = espresso/gold for light backgrounds */
  variant?: 'light' | 'dark';
}

export function LuxuryLogo({ size = 52, variant = 'dark' }: LuxuryLogoProps) {
  const bg = variant === 'light' ? '#FBF8F3' : '#3E2C23';
  const ring = '#C9A96A';
  const text = variant === 'light' ? '#3E2C23' : '#C9A96A';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Dr Sudha Verma logo"
    >
      {/* Outer circle fill */}
      <circle cx="50" cy="50" r="48" fill={bg} />

      {/* Outer gold ring */}
      <circle cx="50" cy="50" r="48" stroke={ring} strokeWidth="1.2" fill="none" />

      {/* Inner gold ring */}
      <circle cx="50" cy="50" r="41" stroke={ring} strokeWidth="0.7" fill="none" strokeDasharray="2.5 2.5" />

      {/* Top decorative diamond */}
      <polygon points="50,6 52.2,8.2 50,10.4 47.8,8.2" fill={ring} />
      {/* Bottom decorative diamond */}
      <polygon points="50,89.6 52.2,91.8 50,94 47.8,91.8" fill={ring} />
      {/* Left decorative diamond */}
      <polygon points="6,50 8.2,47.8 10.4,50 8.2,52.2" fill={ring} />
      {/* Right decorative diamond */}
      <polygon points="89.6,50 91.8,47.8 94,50 91.8,52.2" fill={ring} />

      {/* Thin horizontal divider lines */}
      <line x1="20" y1="63" x2="38" y2="63" stroke={ring} strokeWidth="0.6" />
      <line x1="62" y1="63" x2="80" y2="63" stroke={ring} strokeWidth="0.6" />

      {/* "SV" monogram */}
      <text
        x="50"
        y="60"
        textAnchor="middle"
        fontFamily="Georgia, 'Playfair Display', serif"
        fontSize="30"
        fontWeight="400"
        letterSpacing="1"
        fill={text}
      >
        SV
      </text>

      {/* Bottom label */}
      <text
        x="50"
        y="74"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="6.5"
        letterSpacing="2.5"
        fill={ring}
        opacity="0.85"
      >
        DR · SUDHA
      </text>
    </svg>
  );
}

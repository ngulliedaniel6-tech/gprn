import React from 'react';

interface EmblemProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const NationalFlag: React.FC<{ className?: string; aspect?: string }> = ({
  className = "w-28 h-18 shadow-md rounded border border-sky-400/30 overflow-hidden",
}) => {
  return (
    <div className={`relative bg-[#0284c7] ${className}`}>
      {/* Sky Blue Field */}
      <svg
        viewBox="0 0 300 180"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Sky blue background */}
        <rect width="300" height="180" fill="#0284c7" />

        {/* Covenant Rainbow Arch spanning across */}
        {/* Red Band */}
        <path
          d="M -20 180 Q 150 10 320 80"
          fill="none"
          stroke="#dc2626"
          strokeWidth="14"
        />
        {/* Yellow/Gold Band */}
        <path
          d="M -20 192 Q 150 22 320 92"
          fill="none"
          stroke="#fbbf24"
          strokeWidth="14"
        />
        {/* Green Band */}
        <path
          d="M -20 204 Q 150 34 320 104"
          fill="none"
          stroke="#16a34a"
          strokeWidth="14"
        />

        {/* Canton: 6-pointed White Star of Bethlehem */}
        <g transform="translate(48, 42)">
          {/* Subtle star glow */}
          <circle cx="0" cy="0" r="18" fill="#ffffff" fillOpacity="0.25" />
          <polygon
            points="0,-22 6,-6 22,0 6,6 0,22 -6,6 -22,0 -6,-6"
            fill="#ffffff"
          />
          <polygon
            points="0,-16 4.5,-4.5 16,0 4.5,4.5 0,16 -4.5,4.5 -16,0 -4.5,-4.5"
            fill="#f8fafc"
            transform="rotate(45)"
          />
        </g>
      </svg>
    </div>
  );
};

export const NationalEmblem: React.FC<EmblemProps> = ({
  className = "",
  size = "md",
  showText = true,
}) => {
  const sizeMap = {
    sm: "w-12 h-12",
    md: "w-20 h-20",
    lg: "w-32 h-32",
    xl: "w-44 h-44",
  };

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      <div className={`relative ${sizeMap[size]}`}>
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-lg"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Ring */}
          <circle
            cx="100"
            cy="100"
            r="94"
            fill="#091410"
            stroke="#d97706"
            strokeWidth="3.5"
          />
          <circle
            cx="100"
            cy="100"
            r="87"
            fill="none"
            stroke="#991b1b"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />

          {/* Sky Blue Inner Field */}
          <circle cx="100" cy="100" r="82" fill="#0c4a6e" />

          {/* Rainbow in background of seal */}
          <path
            d="M 28 140 A 74 74 0 0 1 172 140"
            fill="none"
            stroke="#dc2626"
            strokeWidth="7"
          />
          <path
            d="M 33 140 A 69 69 0 0 1 167 140"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="6"
          />
          <path
            d="M 38 140 A 64 64 0 0 1 162 140"
            fill="none"
            stroke="#16a34a"
            strokeWidth="6"
          />

          {/* Crossed Naga Spears & Dao */}
          {/* Spear Left to Right */}
          <line
            x1="38"
            y1="162"
            x2="162"
            y2="38"
            stroke="#78350f"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <polygon points="162,38 152,48 168,44" fill="#cbd5e1" stroke="#334155" strokeWidth="1" />
          {/* Red dyed goat hair on spear shaft */}
          <circle cx="146" cy="54" r="5" fill="#dc2626" />

          {/* Spear Right to Left */}
          <line
            x1="162"
            y1="162"
            x2="38"
            y2="38"
            stroke="#78350f"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <polygon points="38,38 48,48 32,44" fill="#cbd5e1" stroke="#334155" strokeWidth="1" />
          <circle cx="54" cy="54" r="5" fill="#dc2626" />

          {/* Mithun Head (Centerpiece) */}
          <g transform="translate(100, 105)">
            {/* Horns */}
            <path
              d="M -30 -16 C -48 -35 -40 -50 -18 -44 C -32 -32 -22 -20 -15 -14"
              fill="#1e293b"
              stroke="#cbd5e1"
              strokeWidth="1.5"
            />
            <path
              d="M 30 -16 C 48 -35 40 -50 18 -44 C 32 -32 22 -20 15 -14"
              fill="#1e293b"
              stroke="#cbd5e1"
              strokeWidth="1.5"
            />

            {/* Head Face */}
            <polygon
              points="0,-24 -24,-12 -18,18 0,30 18,18 24,-12"
              fill="#0f172a"
              stroke="#d97706"
              strokeWidth="1.5"
            />
            {/* Snout */}
            <ellipse cx="0" cy="18" rx="10" ry="6" fill="#334155" />
            <circle cx="-4" cy="17" r="1.5" fill="#0f172a" />
            <circle cx="4" cy="17" r="1.5" fill="#0f172a" />
            {/* Eyes */}
            <ellipse cx="-10" cy="-2" rx="3" ry="2" fill="#fbbf24" />
            <ellipse cx="10" cy="-2" rx="3" ry="2" fill="#fbbf24" />

            {/* White Star of Bethlehem above forehead */}
            <g transform="translate(0, -28)">
              <polygon
                points="0,-12 3.5,-3.5 12,0 3.5,3.5 0,12 -3.5,3.5 -12,0 -3.5,-3.5"
                fill="#ffffff"
              />
            </g>
          </g>

          {/* Open Holy Bible at Bottom */}
          <g transform="translate(100, 150)">
            <rect
              x="-36"
              y="-10"
              width="72"
              height="20"
              rx="3"
              fill="#fef08a"
              stroke="#78350f"
              strokeWidth="1.5"
            />
            <line x1="0" y1="-10" x2="0" y2="10" stroke="#78350f" strokeWidth="1.5" />
            <text
              x="0"
              y="3"
              fill="#78350f"
              fontSize="6"
              fontWeight="900"
              textAnchor="middle"
              letterSpacing="0.5"
              fontFamily="Cinzel, serif"
            >
              HOLY BIBLE
            </text>
          </g>

          {/* Twin Hornbill Feathers at top crest */}
          <g transform="translate(100, 32)">
            {/* Left Feather */}
            <path
              d="M -10 18 Q -16 -4 0 -22 Q -4 0 -2 18 Z"
              fill="#f8fafc"
              stroke="#0f172a"
              strokeWidth="0.8"
            />
            <rect x="-10" y="-8" width="8" height="7" fill="#0f172a" />
            {/* Right Feather */}
            <path
              d="M 10 18 Q 16 -4 0 -22 Q 4 0 2 18 Z"
              fill="#f8fafc"
              stroke="#0f172a"
              strokeWidth="0.8"
            />
            <rect x="2" y="-8" width="8" height="7" fill="#0f172a" />
          </g>

          {/* Circular Motto Text */}
          <path
            id="textPathUpper"
            d="M 24 100 A 76 76 0 0 1 176 100"
            fill="none"
          />
          <text fontSize="7" fill="#fef08a" fontWeight="bold" letterSpacing="2">
            <textPath href="#textPathUpper" startOffset="50%" textAnchor="middle">
              PEOPLE'S REPUBLIC OF NAGALAND
            </textPath>
          </text>
        </svg>
      </div>

      {showText && (
        <div className="mt-2 text-center">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-bold font-heading">
            Nagaland For Christ
          </div>
          <div className="text-[10px] text-emerald-300/80 uppercase tracking-wider">
            GPRN / NSCN
          </div>
        </div>
      )}
    </div>
  );
};

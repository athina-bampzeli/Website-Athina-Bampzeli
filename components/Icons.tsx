// components/Icons.tsx

export const ResearchGateIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
  >
    

    <text
      x="16"
      y="30"
      textAnchor="middle"
      fontSize="30"
      fontWeight="300"
      fill="black"
      fontFamily="Arial, sans-serif"
    >
      R
    </text>

    <text
      x="26"
      y="18"
      fontSize="20"
      fontWeight="300"
      fill="black"
      fontFamily="Arial, sans-serif"
    >
      G
    </text>
  </svg>
);

export const ScopusIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    className="text-black"
  >
    
    <text
      x="20"
      y="30"
      textAnchor="middle"
      fontSize="30"
      fontWeight="300"
      fill="black"
      fontFamily="Arial, sans-serif"
    >
      SC
    </text>
  </svg>
);
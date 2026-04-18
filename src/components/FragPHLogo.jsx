const FragPHLogo = ({ className = '', title = 'FragPH logo' }) => {
  return (
    <svg
      viewBox="0 0 680 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
    >
      <title>{title}</title>

      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path strokeWidth="5" d="M46 138L62 74h28l16 64H46Z" />
        <path strokeWidth="5" d="M66 74V56h20v18" />
        <path strokeWidth="5" d="M58 88h36" />
        <path strokeWidth="5" d="M53 106h46" />
        <path strokeWidth="5" d="M70 86v52M82 86v52" />
      </g>

      <g fill="currentColor" opacity="0.7">
        <circle cx="34" cy="48" r="4" />
        <circle cx="24" cy="70" r="3" />
        <circle cx="108" cy="38" r="3.5" />
        <circle cx="126" cy="54" r="2.8" />
        <circle cx="140" cy="78" r="2.4" />
      </g>

      <text
        x="124"
        y="141"
        fill="currentColor"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="106"
        letterSpacing="4"
      >
        FRAG
      </text>
      <text
        x="505"
        y="141"
        fill="currentColor"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="57"
        letterSpacing="3"
      >
        PH
      </text>
    </svg>
  );
};

export default FragPHLogo;

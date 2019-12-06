import React from 'react'

const SvgLoading = props => (
  <svg
    style={{
      margin: 'auto',
      background: '0 0',
    }}
    width={134}
    height={134}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    display="block"
    {...props}
  >
    <circle
      cx={50}
      cy={50}
      r={24}
      strokeWidth={8}
      stroke="#db284e"
      strokeDasharray="37.69911184307752 37.69911184307752"
      fill="none"
      strokeLinecap="round"
      transform="rotate(342.952 50 50)"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="0.6134969325153374s"
        keyTimes="0;1"
        values="0 50 50;360 50 50"
      />
    </circle>
  </svg>
)

export default SvgLoading

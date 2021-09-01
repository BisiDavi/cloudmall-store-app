import React from "react";
import SvgWrapper from "@utils/SvgWrapper";

export default function StoreSvg() {
  const svg = ` <svg
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.36 5L15.96 8H2.04L2.64 5H15.36ZM17 0H1V2H17V0ZM17 3H1L0 8V10H1V16H11V10H15V16H17V10H18V8L17 3ZM3 14V10H9V14H3Z"
          fill="#8F8F8F"
        />
      </svg>`;

  return <SvgWrapper svg={svg} width="18px" />;
}

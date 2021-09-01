import React from "react";
import { SvgXml } from "react-native-svg";

export default function SvgWrapper({ svg, width }: SvgWrapperProps) {
  return <SvgXml xml={svg} width={width} />;
}

interface SvgWrapperProps {
  width: string;
  svg: string | null;
}

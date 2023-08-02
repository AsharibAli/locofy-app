import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type VariantContainedSizeLargeType = {
  button?: string;

  /** Style props */
  variantContainedSizeLargePosition?: Property.Position;
  variantContainedSizeLargeBoxSizing?: Property.BoxSizing;
  buttonFontSize?: Property.FontSize;
  buttonLineHeight?: Property.LineHeight;
  buttonColor?: Property.Color;
  buttonDisplay?: Property.Display;
};

const VariantContainedSizeLarge: NextPage<VariantContainedSizeLargeType> = ({
  button,
  variantContainedSizeLargePosition,
  variantContainedSizeLargeBoxSizing,
  buttonFontSize,
  buttonLineHeight,
  buttonColor,
  buttonDisplay,
}) => {
  const variantContainedSizeLargeStyle: CSS.Properties = useMemo(() => {
    return {
      position: variantContainedSizeLargePosition,
      boxSizing: variantContainedSizeLargeBoxSizing,
    };
  }, [variantContainedSizeLargePosition, variantContainedSizeLargeBoxSizing]);

  const buttonStyle: CSS.Properties = useMemo(() => {
    return {
      fontSize: buttonFontSize,
      lineHeight: buttonLineHeight,
      color: buttonColor,
      display: buttonDisplay,
    };
  }, [buttonFontSize, buttonLineHeight, buttonColor, buttonDisplay]);

  return (
    <div
      className="relative overflow-hidden flex flex-col py-2 px-[22px] items-start justify-start text-left text-mini text-text-primary font-components-button-large"
      style={variantContainedSizeLargeStyle}
    >
      <div
        className="relative tracking-[0.46px] leading-[26px] uppercase font-medium"
        style={buttonStyle}
      >
        {button}
      </div>
    </div>
  );
};

export default VariantContainedSizeLarge;

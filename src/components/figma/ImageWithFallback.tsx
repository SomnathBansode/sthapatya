"use client";

import React, { useState } from "react";

type ImageWithFallbackProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string;
};

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackSrc = "/placeholder.png", // you can create this in /public if you like
  ...rest
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      {...rest}
      src={imgSrc as string}
      alt={alt ?? ""}
      onError={() => {
        if (imgSrc !== fallbackSrc) {
          setImgSrc(fallbackSrc);
        }
      }}
    />
  );
};

export default ImageWithFallback;

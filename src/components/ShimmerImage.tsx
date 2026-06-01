"use client";

import Image from "next/image";
import type { ImageProps } from "next/image";
import { useState } from "react";

/**
 * Drop-in replacement for next/image that shows an animated
 * shimmer skeleton while the image loads, then hides it.
 */
export default function ShimmerImage({
  className,
  onLoad,
  ...props
}: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  // Strip any existing "shimmer" token so we control it via state
  const base = (className || "")
    .replace(/\bshimmer\b\s*/g, "")
    .trim();

  return (
    <Image
      {...props}
      className={`${loaded ? "" : "shimmer "}${base}`}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
    />
  );
}

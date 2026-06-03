"use client";

import React, { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function AnimatedCounter({ value, suffix = "", prefix = "", className }: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (isInView && !hasTriggered) {
      setHasTriggered(true);
    }
  }, [isInView, hasTriggered]);

  return (
    <div ref={ref} className={cn("inline-flex", className)}>
      {hasTriggered ? (
        <CountUp end={value} duration={2.5} prefix={prefix} suffix={suffix} useEasing={true} separator="," />
      ) : (
        <span>{prefix}0{suffix}</span>
      )}
    </div>
  );
}

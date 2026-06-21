"use client";

import React, { useRef } from "react";
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
  const hasTriggered = useInView(ref, { once: true, margin: "-100px" });

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

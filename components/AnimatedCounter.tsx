"use client";
import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ end }: { end: number }) => {
  return (
    <div className="w-full">
      <CountUp end={end} decimals={2} prefix="$" />
    </div>
  );
};

export default AnimatedCounter;

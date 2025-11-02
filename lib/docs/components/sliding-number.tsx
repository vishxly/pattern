"use client";
import { useEffect, useState } from "react";
import { SlidingNumber } from "../ui/sliding-number";

export const SlidingNumberDemo = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = date.getHours() >= 12 ? "PM" : "AM";

  return (
    <div className="w-full h-full flex items-center justify-center  p-12 rounded-xl">
      <div className="flex items-center justify-center space-x-1">
        <div className="flex items-baseline space-x-1">
          <SlidingNumber
            value={hours}
            padStart={true}
            size="4xl"
            font="mono"
            className="text-white drop-shadow-lg"
            animation="smooth"
          />

          <span className="text-4xl text-neutral-500 dark:text-neutral-400 font-mono animate-pulse">
            :
          </span>

          <SlidingNumber
            value={minutes}
            padStart={true}
            size="4xl"
            font="mono"
            className="text-white drop-shadow-lg"
            animation="smooth"
          />

          <span className="text-4xl  text-neutral-500 dark:text-neutral-400 font-mono animate-pulse">
            :
          </span>

          <SlidingNumber
            value={seconds}
            padStart={true}
            size="4xl"
            font="mono"
            className="text-white drop-shadow-lg"
            animation="smooth"
          />

          <div className="ml-4 text-2xl text-neutral-500 dark:text-neutral-400 font-mono">
            {ampm}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidingNumberDemo;

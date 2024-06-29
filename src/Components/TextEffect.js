"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
 
export default function DemoTextDistorted() {
 
  return (
    <>
      <div className="relative h-[220px] w-full overflow-hidden">
        <div className="mb-1 inline-block text-sm sm:hidden">
          might doesn't work on mobile
        </div>
        <div className="flex h-full overflow-y-scroll text-2xl">
          Evangelion 3.0+1.0 Thrice Upon a Time (2021) - IMDb - Evangelion 3.0+1.0 Thrice
          Upon a Time: Directed by Hideaki Anno, Kazuya Tsurumaki, Mahiro Maeda. With
          Megumi Ogata, Megumi Hayashibara, Yûko Miyamura, Maaya Sakamoto. Shinji Ikari is
          still adrift after losing his will to live, but the place he arrives at teaches
          him what it means to hope. Finally, the Instrumentality Project is set in motion
          and Wille make one last grueling stand to prevent the Final Impact. The fate of
          the whole world lies in the hands of fourteen-year-old Shinji Ikari and Misato
          Katsuragi, now burdened with the "truths" of the world. Nevertheless, in this
          moment of ultimate despair, this is the first time that humans have ever
          attempted to wrest their own fates from God's hands. This is the concluding
          chapter of the Rebuild of Evangelion tetralogy.
        </div>
        <div
          className="glassmorphism-effect pointer-events-none absolute left-1/2 top-1/2 z-10 flex h-full w-full -translate-x-1/2 -translate-y-1/2 transform backdrop-blur-0 will-change-transform"
          style={{
            filter: "url(#distord-text)",
          }}
        />
        <svg>
          <defs>
            <filter id="distord-text">
              <motion.feTurbulence
                animate={{
                  baseFrequency: [0.001, 0.02],
                }}
                transition={{
                  ease: "linear",
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                type="fractalNoise"
                numOctaves="1"
                result="warp"
              />
              <feDisplacementMap
                xChannelSelector="R"
                yChannelSelector="G"
                scale="30"
                in="SourceGraphic"
                in2="warp"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
}
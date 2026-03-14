import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Error() {
 const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center w-full  justify-center bg-base-100">
      {/* Content */}
      <div className="flex  md:flex-row items-center justify-between gap-60 flex-col-reverse px-6">
        {/* Animation */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-60"
        >
          <svg viewBox="0 0 500 400" className="w-[500px]">
            {/* Cord */}
            <motion.path
              d="M40 200 C120 120, 200 260, 300 200"
              stroke="#0E0620"
              strokeWidth="3"
              fill="none"
              animate={{ pathLength: [0.9, 1, 0.9] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Stars */}
            {[...Array(12)].map((_, i) => (
              <motion.circle
                key={i}
                cx={Math.random() * 480}
                cy={Math.random() * 360}
                r="3"
                fill="#0E0620"
                animate={{ scale: [1, 1.6, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}

            {/* Astronaut */}
            <motion.g
              animate={{
                y: [-10, 10, -10],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Helmet */}
              <circle
                cx="300"
                cy="160"
                r="35"
                fill="white"
                stroke="#0E0620"
                strokeWidth="3"
              />

              {/* Glass */}
              <ellipse
                cx="300"
                cy="160"
                rx="22"
                ry="16"
                fill="#dbeafe"
                stroke="#0E0620"
                strokeWidth="2"
              />

              {/* Body */}
              <ellipse
                cx="300"
                cy="220"
                rx="30"
                ry="40"
                fill="white"
                stroke="#0E0620"
                strokeWidth="3"
              />

              {/* Arms */}
              <line
                x1="270"
                y1="210"
                x2="245"
                y2="230"
                stroke="#0E0620"
                strokeWidth="3"
              />

              <line
                x1="330"
                y1="210"
                x2="355"
                y2="230"
                stroke="#0E0620"
                strokeWidth="3"
              />

              {/* Legs */}
              <line
                x1="290"
                y1="255"
                x2="280"
                y2="285"
                stroke="#0E0620"
                strokeWidth="3"
              />

              <line
                x1="310"
                y1="255"
                x2="320"
                y2="285"
                stroke="#0E0620"
                strokeWidth="3"
              />
            </motion.g>
          </svg>
        </motion.div>

        {/* Text */}
        <div className="max-w-md">
          <h1 className="text-8xl font-bold">404</h1>

          <h2 className="text-2xl font-bold mt-3">UH OH! You're lost.</h2>

          <p className="py-4">
            The page you are looking for does not exist. But you can click the
            button below to go back to the homepage.
          </p>

          <button  onClick={()=>navigate("/login")}  className="btn cursor-pointer btn-primary">HOME</button>
        </div>
      </div>
    </div>
  );
}

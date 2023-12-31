import { useState } from "react";
import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import Countdown from "react-countdown";

export default function App() {
  const [newYearMessage, setNewYearMessage] = useState(["Good Bye", "2023!"]);

  const particlesInitialization = async (engine) => {
    await loadFireworksPreset(engine);
  };

  const timeLeft = () => {
    let newYearDate = new Date("January 1, 2024 00:00:00").getTime();
    let nowDate = new Date().getTime();
    let remainingTime = newYearDate - nowDate;
    return remainingTime;
  };

  return (
    <>
      <Particles
        init={particlesInitialization}
        options={{ preset: "fireworks" }}
      />
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white text-4xl font-bold z-50">
          <Typewriter
            words={newYearMessage}
            loop={false}
            cursorStyle={"|"}
            cursor
            delaySpeed={1.5}
          />
        </span>
        <div className="z-50 text-white text-bold text-2xl">
          <Countdown
            date={Date.now() + timeLeft()}
            onComplete={() => setNewYearMessage(["Happy New Year 2024!"])}
          />
        </div>
      </div>
    </>
  );
}

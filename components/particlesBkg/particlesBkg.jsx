/** @format */

import { useEffect } from "react";
import { tsParticles } from "tsparticles";
import { preset } from "./preset";

export default function ParticlesBkg() {
  useEffect(() => {
    tsParticles.load("tsparticles", preset);
  }, []);

  return <div id="tsparticles"></div>;
}

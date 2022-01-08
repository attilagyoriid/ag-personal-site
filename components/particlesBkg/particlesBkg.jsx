/** @format */

import { useEffect, useState } from "react";
import Particles from "react-tsparticles";

import classes from "./particlesBkg.module.scss";

export default function ParticlesBkg({ presetName, elementId }) {
  const particlesBkgSyle = {
    position: "absolute",
    opacity: "0.3",
    top: "0",
    left: "0",
    height: "100%",
    width: "100%",
    padding: "0",
    margin: "0",
    zIndex: "-50",
  };

  const [preset, setPreset] = useState(null);

  const getPreset = async (presetNameToLoad) => {
    const presetImport = await import("./preset");
    return presetImport.presets[presetNameToLoad];
  };

  useEffect(async () => {
    const presetName1 = await getPreset(presetName);
    setPreset(presetName1);
  }, [elementId]);
  return (
    <div className={classes["particles-wrapper"]}>
      <Particles id={elementId} options={preset} style={particlesBkgSyle} />
    </div>
  );
}

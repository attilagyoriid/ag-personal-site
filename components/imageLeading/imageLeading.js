/** @format */

import { Parallax } from "react-parallax";

export default function ImageLeading({ imgUrl }) {
  const inlineSyle = {
    height: 600,
  };
  return (
    <div>
      <Parallax bgImage={imgUrl} strength={200}>
        <div style={{ ...inlineSyle }}></div>
      </Parallax>
    </div>
  );
}

import React, { useEffect, useState } from "react";

const BlurUp = (props) => {
  const [source, setSource] = useState(props.imgSmall);

  useEffect(() => {
    const img = new Image();
    img.src = props.imgLarge;
    img.onload = () => {
      setSource(props.imgLarge);
    };
  }, [props.imgLarge]);

  return (
    <>
      <img
        className={`blur-up ${props.className}`}
        src={source}
        style={
          source === props.imgLarge
            ? { transition: "filter 0.5s" }
            : { transition: "filter 0.5s", filter: "blur(5px)" }
        }
        alt={props.altText}
      />
    </>
  );
};

export default BlurUp;

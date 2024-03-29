import React from "react";
import Image from "next/image";

const Logo = () => (
  <>
    <Image src="/logo.png" alt="microdose logo" width="30" height="30" />

    <span style={{ marginLeft: ".4em", fontWeight: 800 }}>Microdose Wiki</span>
  </>
);

export default Logo;

import React from "react";
import Image from "next/image";
import Badge from "./badge";

const Logo = () => (
  <>
    <Image src="/logo.png" alt="microdose logo" width="30" height="30" />
    <span style={{ marginLeft: ".4em", marginRight: ".4em", fontWeight: 800 }}>
      wakeupwakeupwakeup
    </span>
    {/* <Badge text="Beta" /> */}
  </>
);

export default Logo;

import React from "react";

export default function ReactFullpageSection({children, className}: React.PropsWithChildren<{className?: string}>) {
  return <div className={`section ${className || ""}`}>{children}</div>;
}

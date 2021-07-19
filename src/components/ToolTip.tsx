import React, { useEffect, useRef, useState } from "react";

function getCenter(element: Element) {
  if (element) {
    const { left, top, width, height } = element.getBoundingClientRect();
    return { x: left + width / 2, y: top + height / 2 };
  }
}

type TootlTipProps = {
  title: string;
  children?: React.ReactNode;
};

export function ToolTip({ title, children }: TootlTipProps) {
  const tipRef = useRef<null | HTMLDivElement>(null);
  const [tip, setTip] = useState<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!tip) {
      setTip(tipRef.current);
    } else {
      window?.addEventListener("mouseover", (event) => {
        tip.style.display = "block";
      });
      window?.addEventListener("mousemove", (event) => {
        const { clientX, clientY } = event;
        //event.preventDefault();

        //console.log(event);
        // var center = getCenter(tip as HTMLElement);
        // if (center) {
        //   const angle = Math.atan2(clientY - center.y, clientX - center.x);
        //   //tip.style.transform = `rotate(${angle}rad)`;
        // }

        const left = `${clientX + 15}px`;
        const top = `${clientY}px`;
        tip.style.left = left;
        tip.style.top = top;
      });
      window?.addEventListener("mouseout", (event) => {
        //tip.style.display = "none";
      });
    }
  }, [tip]);

  return (
    <div className="tooltip" ref={tipRef}>
      <h3 className="tooltip__header">{title}</h3>
      <div className="tooltip__content">{children}</div>
    </div>
  );
}

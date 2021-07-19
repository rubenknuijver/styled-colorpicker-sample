import React, { useEffect, useRef, useState } from "react";
import { ToolTip } from "./components/ToolTip";
import SampleContainer from "./components/SampleContainer";
import RGBPicker, { RGBValues } from "./components/RGBPicker";
import "./styles.scss";

const data = {
  title: "Martch 2021",
  meanRate: { description: "Engagement rate", value: 76 },
  items: [
    { description: "Posts", value: 3 },
    { description: "Interactions", value: 1086 },
    { description: "Impressions", value: 103584 },
    { description: "Reach", value: 389 }
  ]
};

const nf = new Intl.NumberFormat(undefined, {});

export default function App() {
  const rootRef = useRef<null | HTMLDivElement>(null);
  const [state, setState] = useState<RGBValues>({
    r: 41,
    g: 110,
    b: 180,
    a: 1
  });
  const [elm, setElm] = useState<null | HTMLDivElement>(null);

  useEffect(() => {
    const element = rootRef.current;
    if (element) {
      setElm(element);
    }
  }, []);

  const createUpdater = (
    propertyName: string,
    fn: (rgb: RGBValues) => void
  ) => {
    return (evt: React.ChangeEvent<HTMLInputElement>) => {
      const value = evt.target.value;
      setState({
        ...state,
        [propertyName]: +value
      });

      fn(state);
    };
  };

  const setColor = (color: RGBValues) => {
    setState(color);
    if (elm)
      elm.style.setProperty(
        "--primary-color",
        `rgb(${state.r},${state.g},${state.b})`
      );
  };

  return (
    <div ref={rootRef}>
      <SampleContainer>
        <ToolTip title={data.title}>
          <ul className="tooltip__list">
            <li className="item bold-item head">
              <span className="left">{data.meanRate.description}</span>
              <span className="right">{data.meanRate.value} %</span>
            </li>
            {data.items &&
              data.items.map((d, i) => (
                <li className="item" key={i}>
                  <span className="left">{d.description}</span>
                  <span className="right">{nf.format(d.value)}</span>
                </li>
              ))}
          </ul>
        </ToolTip>
        <RGBPicker color={state} onChange={setColor} />
      </SampleContainer>
    </div>
  );
}

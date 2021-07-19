import React, { useState } from "react";

export type RGBValues = { r: number; g: number; b: number; a: number };
export type RGBPickerProps = {
  color: RGBValues;
  onChange?: (color: RGBValues) => void;
};
const RGBPicker = (
  props: RGBPickerProps = {
    color: {
      r: 41,
      g: 110,
      b: 180,
      a: 1
    }
  }
) => {
  const [state, setState] = useState<RGBValues>(props.color);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: +value
    });

    props.onChange?.call(null, state);
  };

  return (
    <div className="color-selector">
      <span className="color-selector__header">Color Mixer</span>
      <label htmlFor="color_r">
        <span>R</span>
        <input
          id="color_r"
          type="range"
          min="0"
          max="255"
          name="r"
          value={state.r}
          onChange={handleChange}
          step="1"
        />
        <div>{state.r}</div>
      </label>
      <label htmlFor="color_g">
        <span>G</span>
        <input
          id="color_g"
          type="range"
          min="0"
          max="255"
          name="g"
          value={state.g}
          onChange={handleChange}
          step="1"
        />
        <div>{state.g}</div>
      </label>
      <label htmlFor="color_b">
        <span>B</span>
        <input
          id="color_b"
          type="range"
          min="0"
          max="255"
          name="b"
          value={state.b}
          onChange={handleChange}
          step="1"
        />
        <div>{state.b}</div>
      </label>
    </div>
  );
};

export default RGBPicker;

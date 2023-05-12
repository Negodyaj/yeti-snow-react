import React from 'react';
import Select, { StylesConfig } from "react-select";

export const CartPage = () => {
  const options = [
    { value: 1, label: "Delivery company" },
    { value: 2, label: "Post" },
  ];

  const colorStyles: StylesConfig = {
    control: (styles, state: any) => ({
      ...styles,
      borderRadius: 0,
      border: state.isFocused ? "1px solid #ff8b67" : "1px solid #cccccc",
      boxShadow: state.isFocused ? "0px 0px 2px #ff400029" : "none",
      "&:hover": {
        border: "1px solid #ff8b67",
        boxShadow: "0px 0px 2px #ff400029",
      },
    }),
    clearIndicator: (styles) => ({
      ...styles,
      color: "#FF3F00",
      "&:hover": {
        color: "#d73600",
      },
    }),
    option: (styles, { isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? "#FF3F00"
          : isFocused
          ? "#ff400029"
          : undefined,
        color: isDisabled ? "#ccc" : isSelected ? "white" : "black",
        cursor: isDisabled ? "not-allowed" : "default",

        ":active": {
          ...styles[":active"],
          backgroundColor: !isDisabled
            ? isSelected
              ? "#FF3F00"
              : "#ff400059"
            : undefined,
        },
      };
    },
    placeholder: (styles) => ({ ...styles, color: '#ff40009c' }),
  };

  return (
    <>
      <div>CartPage</div>
      <div className="select-wrapper">
        <Select
          options={options}
          styles={colorStyles}
          isClearable
          placeholder="Choose an option"
        />
      </div>
    </>
  )
}

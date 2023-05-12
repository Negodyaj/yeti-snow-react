import React from "react";
import Select, { StylesConfig } from "react-select";

interface CustomSelectProps {
  options: {
    value: number;
    label: string;
  }[];
  placeholder: string;
}

export const CustomSelect = (props: CustomSelectProps) => {
  const { options, placeholder } = props;
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
    placeholder: (styles) => ({ ...styles, color: "#ff40009c" }),
  };

  return (
    <Select
      options={options}
      styles={colorStyles}
      isClearable
      placeholder={placeholder}
    />
  );
};

import React, { ChangeEvent } from "react";
// import './button.css';

interface InputProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;

  onInputChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  
  value?:string | number
  id:string
}

/**
 * Primary UI component for user interaction
 */
export const InputField = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  value,
  onInputChange,
  id,
  ...props
}: InputProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 my-2">
        <p className="text-sm font-semibold text-[#797F99]">{label}</p>
          <input id={id}  value={value}  onChange={onInputChange}  placeholder={label} className="border rounded-[5px] p-1 border-slate-500 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
      </div>
    </>
  );
};

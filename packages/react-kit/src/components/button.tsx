import { type HTMLAttributes } from "react";

type ButtonProps = HTMLAttributes<HTMLButtonElement>;

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={`py-2.5 px-5 font-medium focus:outline-none rounded-lg border  focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 ${className || ""}`}
    />
  );
}

"use client";

import { type InputHTMLAttributes, useId, useMemo } from "react";

export type TextFiledProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  label?: string;
};

export function TextFiled({ className, ...props }: TextFiledProps) {
  const _id = useId();
  const id = useMemo(() => props.id ?? _id, [props.id, _id]);

  return (
    <div className={className}>
      <label className="block mb-2 text-sm font-medium text-white" htmlFor={id}>
        {props.label}
      </label>
      <input
        {...props}
        className="placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 bg-gray-700 border-green-500"
        id={id}
        type="text"
      />
    </div>
  );
}

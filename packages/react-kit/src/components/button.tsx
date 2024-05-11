import { type HTMLAttributes } from 'react';

type ButtonProps = HTMLAttributes<HTMLButtonElement>;

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={`transition-colors hover:bg-slate-300 hover:text-slate-700 rounded-md px-3 py-2 bg-slate-500 text-slate-50 font-bold ${className || ''}`}
    />
  );
}

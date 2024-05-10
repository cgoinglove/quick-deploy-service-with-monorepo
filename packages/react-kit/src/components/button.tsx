import { type HTMLAttributes } from 'react';

type ButtonProps = HTMLAttributes<HTMLButtonElement>;

export function Button({className , ...props}: ButtonProps) {

  return <button  type='button' {...props} className={`ui-transition-colors hover:ui-bg-slate-300 hover:ui-text-slate-700 ui-rounded-md ui-px-3 ui-py-2 ui-bg-slate-500 ui-text-slate-50 ui-font-bold ${className||''}`}/>;
}

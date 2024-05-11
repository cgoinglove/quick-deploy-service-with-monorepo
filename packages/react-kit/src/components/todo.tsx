'use client';
import Icon from '@mdi/react';
import { mdiCheckBold } from '@mdi/js';
import { type MouseEventHandler } from 'react';

export type TodoProps = {
  complete?: boolean;
  content: string;
  createdAt?: string;
  onClick: MouseEventHandler<HTMLDivElement>;
};

const TSS_WRAP = `transition-colors rounded-md w-full px-3 py-2  flex justify-center items-center gap-1`;

export function Todo({ complete, content, onClick }: TodoProps) {
  return (
    <div
      className={`${complete ? 'bg-lime-500 text-white' : 'bg-slate-400 text-slate-100 cursor-pointer hover:opacity-90'} ${TSS_WRAP}`}
      onClick={onClick}
    >
      <div className="w-6 pr-1">
        {complete ? <Icon path={mdiCheckBold} size={1} /> : null}
      </div>
      <span className="text-xl font-bold">{content}</span>
    </div>
  );
}

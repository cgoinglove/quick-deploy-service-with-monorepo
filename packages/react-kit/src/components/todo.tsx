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

const TSS_WRAP = `ui-transition-colors ui-rounded-md ui-bg-slate-400 ui-w-full ui-px-3 ui-py-2 ui-text-slate-100 ui-flex ui-justify-center ui-items-center ui-gap-1`;

export function Todo({ complete, content, onClick }: TodoProps) {
  return (
    <div
      className={`${TSS_WRAP} ${complete ? 'ui-bg-lime-500 ui-text-white' : 'ui-cursor-pointer hover:ui-opacity-90'}`}
      onClick={onClick}
    >
      <div className="ui-w-6 ui-pr-1">
        {complete ? <Icon path={mdiCheckBold} size={1} /> : null}
      </div>
      <span className="ui-text-xl ui-font-bold">{content}</span>
    </div>
  );
}

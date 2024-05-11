"use client";
import Icon from "@mdi/react";
import { mdiCheckBold, mdiDelete } from "@mdi/js";
import { type MouseEventHandler } from "react";

export type TodoProps = {
  complete?: boolean;
  content: string;
  createdAt?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onDeleteClick?: MouseEventHandler<HTMLDivElement>;
};

const TSS_WRAP = `transition-colors rounded-md w-full px-3 py-2  flex  items-center gap-1`;

export function Todo({ complete, content, onClick, onDeleteClick }: TodoProps) {
  return (
    <div
      className={`${complete ? "bg-lime-500 text-white" : "bg-gray-700 text-white cursor-pointer hover:opacity-90"} ${TSS_WRAP}`}
      onClick={onClick}
    >
      <div className="w-8 h-8 pr-1 flex items-center">
        {complete ? <Icon path={mdiCheckBold} size={1} /> : null}
      </div>
      <span className="text-xl font-bold">{content}</span>

      <div
        className={`w-8 ml-auto h-8 pr-1 flex items-center ${onDeleteClick ? "cursor-pointer" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          onDeleteClick?.(e);
        }}
      >
        {onDeleteClick ? <Icon path={mdiDelete} size={1} /> : null}
      </div>
    </div>
  );
}

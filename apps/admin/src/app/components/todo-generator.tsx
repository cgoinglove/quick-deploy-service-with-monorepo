"use client";

import { Button } from "@repo/react-kit/button";
import { TextFiled } from "@repo/react-kit/text-filed";
import { KeyboardEvent, useState } from "react";

type Props = {
  saveTodo: (content: string) => void;
};

export default function TodoGenerator({ saveTodo }: Props) {
  const [value, setValue] = useState("");

  const save = () => {
    if (!value.trim()) return;
    saveTodo(value);
    setValue("");
  };
  const onEnter = (e: KeyboardEvent) => {
    if (e.key !== "Enter" || !value.trim()) return;

    e.preventDefault();
    save();
  };
  return (
    <div className="flex gap-2 items-end">
      <TextFiled
        className="w-[240px]"
        label="Todo"
        onInput={(e) => setValue(e.currentTarget.value)}
        onKeyDown={onEnter}
        value={value}
      />
      <Button className="h-10" onClick={save}>
        SAVE
      </Button>
    </div>
  );
}

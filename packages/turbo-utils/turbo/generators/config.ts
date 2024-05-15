import type { PlopTypes } from "@turbo/gen";
import { createReactComponent } from "./gen-config/react-component.generator";
import { createEntity } from "./gen-config/entity.generator";

// Learn more https://plopjs.com/

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.addHelper("eq", (v1: string, v2: string) => v1 === v2);
  plop.addHelper("not", (v1: string, v2: string) => v1 !== v2);

  plop.setGenerator("react-component", createReactComponent(plop));
  plop.setGenerator("service-entity", createEntity(plop));
}

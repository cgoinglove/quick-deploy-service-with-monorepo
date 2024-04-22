import type { PlopTypes } from '@turbo/gen';

import { createReactComponent } from './gen-config/react-component.generator';

// Learn more https://plopjs.com/

export type Generator = (
  plop: PlopTypes.NodePlopAPI,
) => PlopTypes.PlopGeneratorConfig;

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.addHelper('eq', (v1, v2) => v1 === v2);
  plop.addHelper('not', (v1, v2) => v1 != v2);

  plop.setGenerator('react-component', createReactComponent(plop));
}

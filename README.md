# Quick Deploy Service with monorepo

<p align="center">
  <a href="https://turbo.build">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/4060187/196936123-f6e1db90-784d-4174-b774-92502b718836.png">
      <img src="https://user-images.githubusercontent.com/4060187/196936104-5797972c-ab10-4834-bd61-0d1e5f442c9c.png" height="128">
    </picture>
    <h1 align="center">Turbo</h1>
  </a>
</p>

이 저장소는 TurboRepo를 사용하여 여러 애플리케이션 및 공유 패키지를 관리하는 모노레포 구조로 구성되어 있습니다. 이 프로젝트는 효율적인 관리와 확장성을 보장하기 위해 현대적인 웹 개발 관행 및 도구를 활용합니다.
주 목적은 프론트엔드 개발자들이 서버에 더 쉽게 접근할 수 있도록, 서비스 계층에서 서비스를 주입받아 Next.js에서 사용할 수 있게 하는 것을 주목적으로 합니다.

- **효율적인 모듈 관리**: 여러 애플리케이션에서 공통으로 사용되는 모듈을 중앙에서 관리하여 코드 중복을 최소화하고 유지보수를 용이하게 합니다.

- **일관성 있는 코드 작성**: Plop을 사용하여 service 계층이나 React 컴포넌트를 생성함으로써, 일관된 컨벤션과 템플릿을 제공하여 코드의 일관성을 유지하고 개발 속도를 높입니다.
  <br/>

## Next.js Service Layout Dependency Inject

```tsx
import { inject, TodoService } from "@repo/service";

export const revalidate = 10;

export default async function Page() {
  const todoService = inject(TodoService);

  const list = await todoService.findAll();

  return (
    <main className={TSS_LAYOUT}>
      <h1 className={TSS_TITLE}>Todo Read Only App</h1>
      <div className={TSS_TODO_WRAP}>
        {list.map((todo) => (
          <Todo {...todo} key={todo.id} />
        ))}
      </div>
    </main>
  );
}
```

`Next.js` 는 전통적인 **백엔드 프레임워크**와 다르게 **프론트엔드 개발자들이** 접근하기 용이하게 설계된 플랫폼 입니다.

이는 주로 React 애플리케이션에 서버 사이드 **렌더링(SSR)** 또는 **정적 사이트 생성(SSG)** 을 통합하여 개발의 복잡성을 줄이는 데 중점을 둡니다.

그럼에도 불구하고, `Next.js` 애플리케이션 내에 **직접 서비스 계층을 구현하는 경우는 상대적으로 드물다고** 볼 수 있습니다.

이러한 배경에서, 우리는 [`@repo/service`](https://github.com/cgoinglove/web-core-turborepo/tree/main/packages/service) 패키지를 별도로 **분리하여 관리함**으로써 **서비스 계층을 모듈화**하고 재사용성을 높였습니다.

이 구조는 **Next.js에서도 서비스 계층을 외부에서 주입받아 사용하는 방식**을 가능하게 하며, 이는 특히 데이터베이스와의 상호 작용을 주로 하는 서비스 로직을 분리할 필요가 있을 때 유용합니다.

이 **패턴**은 Next.js의 범용성을 확장하며, 백엔드 중심의 프레임워크(예: Spring Boot)와 달리 **프론트엔드 개발자도 백엔드 로직을 쉽게 통합**할 수 있게 도와줍니다.

결국, 이는 모노레포 내에서 각각의 서비스가 독립적으로 유지될 수 있도록 하면서도, 필요에 따라 서로 간의 의존성을 관리할 수 있는 유연성을 제공합니다.

<br/>

## Workspace

### `/apps/*`

실제로 배포되는 애플리케이션들이 위치하며, `workspace/service` 패키지에 있는 서비스계층을 사용하여 Next.js 기반의 `admin`과 `web`, 문서화 사이트 `docs`가 포함됩니다.

- **web** : [ Main Web 서비스로 Todo 를 조회 합니다.](https://github.com/cgoinglove/web-core-turborepo/tree/main/apps/admin)
- **admin** : [ Backoffice 서비스. Todo 를 관리 합니다.](https://github.com/cgoinglove/web-core-turborepo/tree/main/apps/web)

<br/>

### `/packages/*`

여러 애플리케이션에서 공유되거나 사용되는 종속성 모듈들이 위치합니다. 예를 들어, `react-kit`은 재사용 가능한 React 컴포넌트,훅 라이브러리를 제공하고, `shared`는 유틸리티 함수들을 제공 합니다.

- **service** : [ TypeORM을 기반으로 DI(Dependency Injection) 패턴을 활용하여 서비스 계층을 구현합니다.](https://github.com/cgoinglove/web-core-turborepo/tree/main/packages/service)

- **turbo-utils** : [ Plop을 기반으로 서비스 계층에 도메인 서비스 생성, 리액트 컴포넌트 생성, 워크스페이스 생성 등 템플릿 기반 제네레이터들이 있습니다.](https://github.com/cgoinglove/web-core-turborepo/tree/main/packages/turbo-utils)

- **react-kit** : [ 모노레포 내 다양한 React 애플리케이션에서 사용되는 재사용 가능한 React 컴포넌트,Hook 라이브러리입니다.](https://github.com/cgoinglove/web-core-turborepo/tree/main/packages/react-kit)

- **shared** : [모든 애플리케이션 및 패키지에서 사용할 수 있는 일반 유틸리티 및 도우미 함수를 포함합니다.](https://github.com/cgoinglove/web-core-turborepo/tree/main/packages/shared)

- **load-global-env** : [ 글로벌 환경 설정을 로드하는 패키지입니다.](https://github.com/cgoinglove/web-core-turborepo/tree/main/packages/load-global-env)

- **config-eslint config-tailwind config-typescript** : 모노레포 내 다양한 패키지 및 앱에서 사용되는 ESLint,Tailwind CSS,TypeScript 구성을 포함합니다.

<br/>

## 시작하기

#### Clone

```bash
   git clone https://github.com/cgoinglove/web-core-turborepo
```

#### Install

```bash
   # corepack pnpm
   pnpm i
```

#### Scripts

- **Workspace Common** : `lint` `test` `test:watch` `start` `type-check` `dev` `bulid`

```bash
   # packages/service 사용하기 위해
   # packages/load-global-env Database 환경변수 입력 필요

   pnpm test
   # or
   turbo test

   # scripts filter
   pnpm -F shared test
   turbo -F service test
```

- **Plop Generator** : `turbo gen`

```bash
   turbo gen
   # or
   turbo gen react-component
```

- **Clean** : `pnpm -w clean`

```bash
   # root
   pnpm clean
   # or
   pnpm -w clean
```

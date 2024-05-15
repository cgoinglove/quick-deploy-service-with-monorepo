## Admin

이 패키지는 Todo 항목을 관리하기 위한 Admin 애플리케이션으로, `Next14` 를 사용하여 서비스됩니다. 스타일 관리는 `Tailwind CSS`를 통해 이루어지며, 모노레포 구조 내에서 `@repo/service` 패키지를 활용하여 DI 기반의 TypeORM 서비스 계층을 주입받아 사용합니다.

- 각각 **다른 서버(admin,web)** 에서 **하나의 서비스계층(@repo/service)** 의 원하는 서비스를 **주입받는 패턴**에 이의를 두었습니다
- 이 구조는 **복수의 서비스**가 필요한 대규모 애플리케이션에서도 **유연하게 서비스를 재사용**할 수 있게 합니다.

<br/>

## API 라우트 구현

Next.js의 기능을 활용하여 서버 사이드 렌더링과 함께 API 라우트를 구현합니다. 예를 들어, Todo 항목을 조회하는 API는 다음과 같습니다:

```typescript
/** /app/api/todo/route.ts */

import { inject, TodoService } from "@repo/service";

const todoService = inject(TodoService);

export async function GET() {
  const list = await todoService.findAll();
  return Response.json(list);
}
```

## 시작하기

개발 서버를 시작하려면 다음 명령어를 실행하세요:

````bash
yarn dev


## 시작하기

먼저 개발 서버를 실행하세요:

```bash
pnpm dev
````

브라우저에서 http://localhost:3001을 열어 결과를 확인하세요.

### 더 알아보기

Next.js에 대해 더 알아보고 싶다면 다음 자료를 확인하세요:

- [Next.js Documentation](https://nextjs.org/docs) - Next.js의 기능과 API에 대해 알아보세요.
- [Learn Next.js](https://nextjs.org/learn/foundations/about-nextjs) - 인터랙티브한 Next.js 튜토리얼입니다.

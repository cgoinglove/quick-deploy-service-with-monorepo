# @repo/load-global-env

이 패키지는 모노레포의 워크스페이스에서 공유하는 환경 변수를 관리,로드 합니다.
`dotenv`와 `dotenv-expand`를 사용하여 다양한 환경(.env) 파일에서 설정을 읽고 확장합니다.

## 기능

- `.env` 파일로부터 환경 변수를 로드합니다.
- 환경별(`.env.local`, `.env.production` 등) 설정 파일을 지원합니다.
- 설정 값 확장을 위한 `dotenv-expand` 통합.

## 설치 및 사용방법

이 패키지는 모노레포 내에 위치하며, 모노레포의 다른 패키지에서 참조되어 사용됩니다. 설치가 필요한 경우, 모노레포 루트에서 다음 명령을 실행하세요:

```bash
pnpm -F admin install @repo/load-global-env
```

```typescript
// project의 bootstrap 하는 영역에서
import "@repo/load-global-env";
```

## Test

테스트를 실행하려면 다음 명령어를 사용하세요

```bash

pnpm -F load-global-env test

pnpm -F load-global-env test:watch
```

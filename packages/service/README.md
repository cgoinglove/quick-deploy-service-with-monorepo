# @repo/service

`@repo/service` 패키지는 TypeORM을 기반으로 한 서비스 계층을 제공합니다. 이 패키지는 의존성 주입(Dependency Injection) 패턴을 활용하여 데이터베이스 연결과 비즈니스 로직의 관리를 용이하게 합니다.

## 주요 특징

- **TypeORM 통합**: MySQL 등의 데이터베이스와의 상호작용을 관리하기 위해 TypeORM을 사용합니다.
- **Reflect-metadata**: 메타데이터를 사용하여 런타임 시 클래스의 메타데이터를 읽고 쓰는 기능을 제공합니다.
- **유연한 의존성 주입**: 클래스와 서비스를 연결하기 위한 커스텀 의존성 주입 시스템을 구현합니다.
- **프록시 기반 초기화**: 데이터베이스 연결이 필요한 서비스 메소드 호출 전에 데이터베이스 연결을 보장하는 프록시 메커니즘을 사용합니다.

## 기능

### 의존성 주입

`inject` 함수는 클래스에 대한 인스턴스 생성을 처리하며, 필요한 의존성을 자동으로 주입합니다. 이는 서비스 계층에서 다른 서비스 또는 리포지토리를 손쉽게 사용할 수 있게 해줍니다.

### 데이터베이스 연결 보장

서비스 메소드가 호출될 때, 데이터베이스 연결이 초기화되지 않았다면, 연결을 초기화하고 요청된 작업을 수행합니다. 이는 프록시를 통해 자동으로 처리됩니다.

## 사용 방법

### 서비스 등록

서비스 또는 리포지토리 클래스에 `@InjectAble` 데코레이터를 사용하여 클래스를 의존성 주입 컨테이너에 등록할 수 있습니다.

```typescript
@InjectAble
class TodoService {
  constructor(private todoRepository: TodoRepository) {}
}
```

### 의존성 주입

`inject` 함수를 사용하여 등록된 클래스의 인스턴스를 요청할 수 있습니다.

```typescript
const todoService = inject(TodoService);
```

### Test

```bash
turbo -F service test
```

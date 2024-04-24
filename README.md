프로젝트 개요: WebCore
이 저장소는 PNPM과 TurboRepo를 사용하여 여러 Next.js 애플리케이션 및 공유 패키지를 관리하는 모노레포 구조로 구성되어 있습니다. 이 프로젝트는 효율적인 관리와 확장성을 보장하기 위해 현대적인 웹 개발 관행 및 도구를 활용합니다.

구조
모노레포에는 여러 Next.js 애플리케이션과 공유 유틸리티 패키지가 포함되어 있습니다. 각 패키지와 애플리케이션은 독립적으로 배포 가능하도록 설계되었지만, 공통 의존성은 루트 레벨에서 관리됩니다.

앱
docs: Next.js로 구축된 문서화 사이트, 프로젝트 문서와 사용 예제를 제공합니다.
web: 사용자의 진입점이 되는 주요 웹 애플리케이션 인터페이스, Next.js로 구축됩니다.
패키지
config-eslint: 모노레포 내 다양한 패키지 및 앱에서 사용되는 ESLint 구성을 포함합니다.
config-tailwind: 프로젝트 전체의 스타일링을 위한 Tailwind CSS 구성입니다.
config-typescript: React 라이브러리와 Next.js 애플리케이션을 포함한 다양한 환경에 맞춘 TypeScript 구성을 제공합니다.
database-service: 중앙집중식 서비스 레이어 기능을 제공하며, Next.js 애플리케이션에 의존성으로 포함되어 데이터베이스 상호작용을 처리합니다.
react-kit: 모노레포 내 다양한 Next.js 애플리케이션에서 사용되는 재사용 가능한 React 컴포넌트 라이브러리입니다.
shared: 모든 애플리케이션 및 패키지에서 사용할 수 있는 일반 유틸리티 및 도우미 함수를 포함합니다.
도구
Turbo: 애플리케이션 및 패키지의 효율적인 빌드 및 캐싱을 위해 사용됩니다.
Plop: react-kit 및 service 계층 내에서 코드 템플릿을 생성하는 데 사용되어 일관성을 유지하고 개발 속도를 높입니다.
시작하기
이 모노레포로 작업을 시작하기 위한 단계는 다음과 같습니다:

저장소 클론:
bash
Copy code
git clone https://your-repository-url.git
의존성 설치:
bash
Copy code
pnpm install
애플리케이션 또는 패키지 디렉토리로 이동:
bash
Copy code
cd apps/web
개발 서버 시작:
bash
Copy code
pnpm run dev
이 명령은 web 애플리케이션의 개발 서버를 시작하며, http://localhost:3000/을 통해 접근할 수 있습니다.

문서
각 패키지나 애플리케이션에 대한 자세한 정보는 해당 디렉토리 내에 위치한 README.md 파일을 참조하세요. 각 README는 해당 패키지나 애플리케이션에 관련된 구체적인 세부 사항을 제공합니다.

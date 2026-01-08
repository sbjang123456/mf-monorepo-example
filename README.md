# MF Monorepo Example

Turborepo + Vite + Module Federation을 활용한 마이크로 프론트엔드 모노레포 예제입니다.

## 🏗 아키텍처

```
mf-monorepo-example/
├── apps/
│   ├── host/                 # 부모 애플리케이션 (포트 3000)
│   ├── remote-products/      # 상품 관리 모듈 (포트 3001)
│   └── remote-users/         # 사용자 관리 모듈 (포트 3002)
├── packages/
│   ├── ui/                   # 공유 UI 컴포넌트
│   └── shared/               # 공유 유틸리티 및 타입
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

## 🛠 기술 스택

- **Build System**: Turborepo 2.x
- **Bundler**: Vite 6.x
- **Framework**: React 19
- **Routing**: React Router 7.x
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.x
- **Module Federation**: @originjs/vite-plugin-federation
- **Package Manager**: pnpm 9.x

## 📁 FSD 아키텍처

각 애플리케이션은 Feature-Sliced Design(FSD) 아키텍처를 따릅니다:

```
src/
├── app/        # 앱 설정, 라우터, 전역 스타일
├── pages/      # 페이지 컴포넌트
├── widgets/    # 독립적인 UI 블록
├── features/   # 비즈니스 로직 및 기능
├── entities/   # 도메인 엔티티
└── shared/     # 공유 유틸리티
```

## 🚀 시작하기

### 의존성 설치

```bash
pnpm install
```

### 개발 서버 실행

모든 앱을 동시에 실행:

```bash
pnpm dev
```

또는 개별적으로 실행:

```bash
# Host 앱만 실행
pnpm dev:host

# Products Remote 앱만 실행
pnpm dev:products

# Users Remote 앱만 실행
pnpm dev:users
```

### 빌드

```bash
pnpm build
```

## 🌐 접속 URL

개발 서버 실행 후:

- **Host App**: http://localhost:3000
- **Remote Products**: http://localhost:3001 (독립 실행)
- **Remote Users**: http://localhost:3002 (독립 실행)

## 📦 Module Federation

Host 앱에서 Remote 앱들을 동적으로 로드합니다:

```typescript
// Host의 vite.config.ts
federation({
  name: 'host',
  remotes: {
    remoteProducts: 'http://localhost:3001/assets/remoteEntry.js',
    remoteUsers: 'http://localhost:3002/assets/remoteEntry.js',
  },
  shared: ['react', 'react-dom', 'react-router-dom'],
})
```

## 📝 스크립트

| 명령어 | 설명 |
|--------|------|
| `pnpm dev` | 모든 앱 개발 서버 실행 |
| `pnpm build` | 모든 앱 빌드 |
| `pnpm lint` | 린트 검사 |
| `pnpm clean` | 빌드 결과물 정리 |

## 🎨 공유 패키지

### @repo/ui

공유 UI 컴포넌트:
- `Button` - 버튼 컴포넌트
- `Card` - 카드 컴포넌트
- `Layout` - 레이아웃 컴포넌트
- `Container` - 컨테이너 컴포넌트
- `LoadingSpinner` - 로딩 스피너
- `ErrorBoundary` - 에러 바운더리

### @repo/shared

공유 유틸리티:
- `cn()` - 클래스명 조합 유틸리티
- `formatDate()` - 날짜 포맷팅
- `getRelativeTime()` - 상대 시간
- 공통 타입 정의 (User, Product, etc.)
- 상수 정의

## 📋 요구사항

- Node.js 20+
- pnpm 9+


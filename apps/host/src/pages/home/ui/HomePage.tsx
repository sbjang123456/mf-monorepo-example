import { Link } from "react-router-dom";
import { Card, Button } from "@repo/ui";

export const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          마이크로 프론트엔드
          <span className="block text-indigo-600 mt-2">모노레포 예제</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Turborepo + Vite + Module Federation을 활용한 현대적인 마이크로
          프론트엔드 아키텍처 예제입니다.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link to="/products">
            <Button variant="primary" size="lg">
              상품 보기
            </Button>
          </Link>
          <Link to="/users">
            <Button variant="outline" size="lg">
              사용자 관리
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card className="hover:scale-105 transition-transform duration-300">
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Module Federation
            </h3>
            <p className="text-gray-600">
              독립적으로 배포 가능한 마이크로 프론트엔드를 Module Federation으로
              연결합니다.
            </p>
          </div>
        </Card>

        <Card className="hover:scale-105 transition-transform duration-300">
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              FSD 아키텍처
            </h3>
            <p className="text-gray-600">
              Feature-Sliced Design으로 확장 가능하고 유지보수하기 쉬운 코드
              구조를 제공합니다.
            </p>
          </div>
        </Card>

        <Card className="hover:scale-105 transition-transform duration-300">
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-pink-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Turborepo
            </h3>
            <p className="text-gray-600">
              고성능 빌드 시스템으로 모노레포 환경에서 효율적인 개발
              워크플로우를 구현합니다.
            </p>
          </div>
        </Card>
      </div>

      {/* Architecture Info */}
      <Card title="아키텍처 구성">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">애플리케이션</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                <strong>Host (포트 3000)</strong> - 메인 애플리케이션
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <strong>Products (포트 3001)</strong> - 상품 관리 모듈
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <strong>Users (포트 3002)</strong> - 사용자 관리 모듈
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">공유 패키지</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <strong>@repo/ui</strong> - 공유 UI 컴포넌트
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                <strong>@repo/shared</strong> - 공유 유틸리티 및 타입
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </>
  );
};

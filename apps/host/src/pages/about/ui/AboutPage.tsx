import { Link } from 'react-router-dom';
import { Card, Button } from '@repo/ui';

export const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        프로젝트 소개
      </h1>

      <Card className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">기술 스택</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'React 19', color: 'bg-blue-100 text-blue-700' },
            { name: 'TypeScript', color: 'bg-indigo-100 text-indigo-700' },
            { name: 'Vite 6', color: 'bg-purple-100 text-purple-700' },
            { name: 'Turborepo', color: 'bg-pink-100 text-pink-700' },
            { name: 'React Router 7', color: 'bg-green-100 text-green-700' },
            { name: 'Module Federation', color: 'bg-orange-100 text-orange-700' },
            { name: 'Tailwind CSS', color: 'bg-cyan-100 text-cyan-700' },
            { name: 'pnpm', color: 'bg-yellow-100 text-yellow-700' },
          ].map((tech) => (
            <span
              key={tech.name}
              className={`${tech.color} px-4 py-2 rounded-lg text-center font-medium`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </Card>

      <Card className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">FSD 아키텍처</h2>
        <p className="text-gray-600 mb-4">
          Feature-Sliced Design(FSD)은 프론트엔드 애플리케이션을 위한 아키텍처 방법론으로,
          코드를 기능 단위로 분리하여 유지보수성과 확장성을 높입니다.
        </p>
        <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
          <pre className="text-gray-700">{`src/
├── app/        # 앱 설정, 라우터, 스타일
├── pages/      # 페이지 컴포넌트
├── widgets/    # 독립적인 UI 블록
├── features/   # 비즈니스 로직
├── entities/   # 도메인 엔티티
└── shared/     # 공유 유틸리티`}</pre>
        </div>
      </Card>

      <Card>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">마이크로 프론트엔드</h2>
        <p className="text-gray-600 mb-4">
          Module Federation을 사용하여 독립적인 팀이 각자의 마이크로 프론트엔드를 
          개발하고 배포할 수 있습니다. 각 앱은 독립적으로 개발되지만, 
          런타임에 하나의 애플리케이션으로 통합됩니다.
        </p>
        <div className="flex gap-4">
          <Link to="/">
            <Button variant="primary">홈으로</Button>
          </Link>
          <Link to="/products">
            <Button variant="outline">상품 보기</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

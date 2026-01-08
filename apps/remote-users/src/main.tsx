import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Link,
  useLocation,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { UsersApp } from "@app/UsersApp";
import { Container } from "@repo/ui";
import "@app/styles/index.css";

// 독립 실행 시 사용되는 헤더
const StandaloneHeader = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  const navLinkClass = (path: string) =>
    `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
      isActive(path)
        ? "bg-white text-orange-600 shadow-sm"
        : "text-gray-700 hover:bg-white/50 hover:text-orange-600"
    }`;

  return (
    <header className="mb-8">
      <nav className="flex items-center justify-between bg-white/70 backdrop-blur-lg rounded-2xl px-6 py-4 shadow-lg">
        <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
          👥 Users App
        </span>
        <div className="flex items-center gap-2">
          <Link to="/users" className={navLinkClass("/users")}>
            사용자 목록
          </Link>
          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
            독립 실행 모드 (3002)
          </span>
        </div>
      </nav>
    </header>
  );
};

// 독립 실행 시 사용되는 진입점
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-100 py-12">
        <Container>
          <StandaloneHeader />
          <Routes>
            {/* /users/* 경로로 UsersApp 라우팅 (호스트와 동일한 경로 구조) */}
            <Route path="/users/*" element={<UsersApp />} />
            {/* 루트 접근 시 /users로 리다이렉트 */}
            <Route path="/" element={<Navigate to="/users" replace />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

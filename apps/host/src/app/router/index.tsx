import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { HomePage } from "@pages/home";
import { AboutPage } from "@pages/about";
import { LoadingSpinner } from "@repo/ui";
import { PageLayout } from "@widgets/page-layout";

// Lazy load remote modules
const RemoteProducts = lazy(() => import("remoteProducts/ProductsApp"));
const RemoteUsers = lazy(() => import("remoteUsers/UsersApp"));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <LoadingSpinner size="lg" />
  </div>
);

export const AppRouter = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/products/*"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <RemoteProducts />
            </Suspense>
          }
        />
        <Route
          path="/users/*"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <RemoteUsers />
            </Suspense>
          }
        />
      </Routes>
    </PageLayout>
  );
};

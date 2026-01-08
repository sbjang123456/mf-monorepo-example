import { Routes, Route } from 'react-router-dom';
import { ProductListPage } from '@pages/product-list';
import { ProductDetailPage } from '@pages/product-detail';

export const ProductsApp = () => {
  return (
    <Routes>
      <Route index element={<ProductListPage />} />
      <Route path=":id" element={<ProductDetailPage />} />
    </Routes>
  );
};

export default ProductsApp;


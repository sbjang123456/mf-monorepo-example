import { Routes, Route } from 'react-router-dom';
import { UserListPage } from '@pages/user-list';
import { UserDetailPage } from '@pages/user-detail';

export const UsersApp = () => {
  return (
    <Routes>
      <Route index element={<UserListPage />} />
      <Route path=":id" element={<UserDetailPage />} />
    </Routes>
  );
};

export default UsersApp;


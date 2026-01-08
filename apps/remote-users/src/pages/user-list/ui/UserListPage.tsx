import { useNavigate } from 'react-router-dom';
import { Card, Button } from '@repo/ui';
import { User, getRelativeTime } from '@repo/shared';

// Mock data
const mockUsers: User[] = [
  {
    id: '1',
    name: '김철수',
    email: 'cheolsu.kim@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    role: 'admin',
    createdAt: '2024-01-01T09:00:00Z',
  },
  {
    id: '2',
    name: '이영희',
    email: 'younghee.lee@example.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    role: 'user',
    createdAt: '2024-01-05T14:30:00Z',
  },
  {
    id: '3',
    name: '박민수',
    email: 'minsu.park@example.com',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    role: 'user',
    createdAt: '2024-01-10T11:15:00Z',
  },
  {
    id: '4',
    name: '정수진',
    email: 'sujin.jung@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    role: 'admin',
    createdAt: '2024-01-12T16:45:00Z',
  },
  {
    id: '5',
    name: '최동현',
    email: 'donghyun.choi@example.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    role: 'user',
    createdAt: '2024-01-15T08:20:00Z',
  },
  {
    id: '6',
    name: '강지은',
    email: 'jieun.kang@example.com',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    role: 'guest',
    createdAt: '2024-01-18T13:00:00Z',
  },
];

const getRoleBadgeStyle = (role: User['role']) => {
  switch (role) {
    case 'admin':
      return 'bg-purple-100 text-purple-700';
    case 'user':
      return 'bg-blue-100 text-blue-700';
    case 'guest':
      return 'bg-gray-100 text-gray-700';
  }
};

const getRoleLabel = (role: User['role']) => {
  switch (role) {
    case 'admin':
      return '관리자';
    case 'user':
      return '사용자';
    case 'guest':
      return '게스트';
  }
};

export const UserListPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">사용자 목록</h1>
          <p className="text-gray-600 mt-2">총 {mockUsers.length}명의 사용자</p>
        </div>
        <Button variant="primary">+ 사용자 추가</Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">
              {mockUsers.filter(u => u.role === 'admin').length}
            </div>
            <div className="text-purple-100">관리자</div>
          </div>
        </Card>
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">
              {mockUsers.filter(u => u.role === 'user').length}
            </div>
            <div className="text-blue-100">일반 사용자</div>
          </div>
        </Card>
        <Card className="bg-gradient-to-br from-gray-500 to-gray-600 text-white">
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">
              {mockUsers.filter(u => u.role === 'guest').length}
            </div>
            <div className="text-gray-100">게스트</div>
          </div>
        </Card>
      </div>

      {/* User List */}
      <Card>
        <div className="divide-y divide-gray-100">
          {mockUsers.map((user) => (
            <div
              key={user.id}
              onClick={() => navigate(`/users/${user.id}`)}
              className="flex items-center gap-4 p-4 hover:bg-gray-50 cursor-pointer transition-colors rounded-lg -mx-2 first:mt-0"
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100"
              />
              <div className="flex-grow">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-gray-900">{user.name}</h3>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getRoleBadgeStyle(user.role)}`}>
                    {getRoleLabel(user.role)}
                  </span>
                </div>
                <p className="text-gray-500 text-sm">{user.email}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-sm">가입일</p>
                <p className="text-gray-600 text-sm">{getRelativeTime(user.createdAt)}</p>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};


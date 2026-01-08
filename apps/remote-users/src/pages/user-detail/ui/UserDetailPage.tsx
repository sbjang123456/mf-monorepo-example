import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button } from '@repo/ui';
import { User, formatDate } from '@repo/shared';

// Mock data
const mockUsers: User[] = [
  {
    id: '1',
    name: '김철수',
    email: 'cheolsu.kim@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
    role: 'admin',
    createdAt: '2024-01-01T09:00:00Z',
  },
  {
    id: '2',
    name: '이영희',
    email: 'younghee.lee@example.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
    role: 'user',
    createdAt: '2024-01-05T14:30:00Z',
  },
  {
    id: '3',
    name: '박민수',
    email: 'minsu.park@example.com',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300',
    role: 'user',
    createdAt: '2024-01-10T11:15:00Z',
  },
  {
    id: '4',
    name: '정수진',
    email: 'sujin.jung@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300',
    role: 'admin',
    createdAt: '2024-01-12T16:45:00Z',
  },
  {
    id: '5',
    name: '최동현',
    email: 'donghyun.choi@example.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
    role: 'user',
    createdAt: '2024-01-15T08:20:00Z',
  },
  {
    id: '6',
    name: '강지은',
    email: 'jieun.kang@example.com',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300',
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

export const UserDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const user = mockUsers.find((u) => u.id === id);

  if (!user) {
    return (
      <Card className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">사용자를 찾을 수 없습니다</h2>
        <Button onClick={() => navigate('/users')}>
          사용자 목록으로
        </Button>
      </Card>
    );
  }

  return (
    <div>
      <Button 
        variant="outline" 
        onClick={() => navigate('/users')}
        className="mb-6"
      >
        ← 목록으로
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <Card className="lg:col-span-1">
          <div className="text-center">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-32 h-32 rounded-full object-cover mx-auto mb-4 ring-4 ring-gray-100"
            />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{user.name}</h1>
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getRoleBadgeStyle(user.role)}`}>
              {getRoleLabel(user.role)}
            </span>
          </div>
        </Card>

        {/* Details Card */}
        <Card className="lg:col-span-2" title="사용자 정보">
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-500">이메일</label>
              <p className="text-lg text-gray-900 mt-1">{user.email}</p>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-500">권한</label>
              <p className="text-lg text-gray-900 mt-1">{getRoleLabel(user.role)}</p>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-500">가입일</label>
              <p className="text-lg text-gray-900 mt-1">{formatDate(user.createdAt, 'long')}</p>
            </div>

            <div className="pt-4 border-t flex gap-4">
              <Button variant="primary">프로필 수정</Button>
              <Button variant="outline">비밀번호 변경</Button>
              {user.role !== 'admin' && (
                <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                  계정 삭제
                </Button>
              )}
            </div>
          </div>
        </Card>

        {/* Activity Card */}
        <Card className="lg:col-span-3" title="최근 활동">
          <div className="space-y-4">
            {[
              { action: '로그인', time: '2분 전', icon: '🔑' },
              { action: '프로필 사진 변경', time: '1시간 전', icon: '📷' },
              { action: '설정 변경', time: '3시간 전', icon: '⚙️' },
              { action: '로그인', time: '1일 전', icon: '🔑' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <span className="text-2xl">{activity.icon}</span>
                <div className="flex-grow">
                  <p className="font-medium text-gray-900">{activity.action}</p>
                </div>
                <span className="text-gray-500 text-sm">{activity.time}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};


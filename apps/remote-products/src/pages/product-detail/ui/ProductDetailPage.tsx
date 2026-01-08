import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button } from '@repo/ui';
import { Product } from '@repo/shared';

// Mock data (동일한 데이터)
const mockProducts: Product[] = [
  {
    id: '1',
    name: '프리미엄 노트북',
    description: '최신 M3 칩을 탑재한 고성능 노트북입니다. 18시간 배터리 수명과 레티나 디스플레이를 갖추고 있습니다.',
    price: 2499000,
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800',
    category: '전자기기',
    inStock: true,
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    name: '무선 이어폰',
    description: '노이즈 캔슬링 기능을 갖춘 프리미엄 이어폰입니다. 공간 오디오와 적응형 EQ를 지원합니다.',
    price: 329000,
    imageUrl: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800',
    category: '전자기기',
    inStock: true,
    createdAt: '2024-01-10',
  },
  {
    id: '3',
    name: '스마트 워치',
    description: '건강 모니터링과 피트니스 트래킹이 가능한 스마트 워치입니다. 심전도, 혈중 산소 측정을 지원합니다.',
    price: 449000,
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
    category: '웨어러블',
    inStock: false,
    createdAt: '2024-01-08',
  },
  {
    id: '4',
    name: '기계식 키보드',
    description: 'RGB 백라이트와 커스텀 스위치를 지원하는 기계식 키보드입니다. 핫스왑과 PBT 키캡을 제공합니다.',
    price: 189000,
    imageUrl: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800',
    category: '주변기기',
    inStock: true,
    createdAt: '2024-01-05',
  },
  {
    id: '5',
    name: '4K 모니터',
    description: '32인치 4K UHD 전문가용 모니터입니다. 99% DCI-P3 색영역과 HDR1000을 지원합니다.',
    price: 799000,
    imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800',
    category: '전자기기',
    inStock: true,
    createdAt: '2024-01-03',
  },
  {
    id: '6',
    name: '게이밍 마우스',
    description: '25,000 DPI 센서와 프로그래머블 버튼을 갖춘 게이밍 마우스입니다. 무선 충전을 지원합니다.',
    price: 129000,
    imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800',
    category: '주변기기',
    inStock: true,
    createdAt: '2024-01-01',
  },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  }).format(price);
};

export const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const product = mockProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <Card className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">상품을 찾을 수 없습니다</h2>
        <Button onClick={() => navigate('/products')}>
          상품 목록으로
        </Button>
      </Card>
    );
  }

  return (
    <div>
      <Button 
        variant="outline" 
        onClick={() => navigate('/products')}
        className="mb-6"
      >
        ← 목록으로
      </Button>

      <Card className="overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
            {!product.inStock && (
              <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg font-medium">
                품절
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium w-fit mb-4">
              {product.category}
            </span>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            
            <p className="text-gray-600 text-lg mb-6 flex-grow">
              {product.description}
            </p>

            <div className="border-t pt-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-bold text-indigo-600">
                  {formatPrice(product.price)}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  product.inStock 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {product.inStock ? '재고 있음' : '품절'}
                </span>
              </div>

              <div className="flex gap-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="flex-1"
                  disabled={!product.inStock}
                >
                  {product.inStock ? '장바구니 담기' : '품절'}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  disabled={!product.inStock}
                >
                  바로 구매
                </Button>
              </div>

              <p className="text-gray-500 text-sm mt-4">
                등록일: {new Date(product.createdAt).toLocaleDateString('ko-KR')}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};


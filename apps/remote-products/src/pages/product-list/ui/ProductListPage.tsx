import { useNavigate } from "react-router-dom";
import { Card, Button } from "@repo/ui";
import { Product } from "@repo/shared";

// Mock data
const mockProducts: Product[] = [
  {
    id: "1",
    name: "프리미엄 노트북",
    description: "최신 M3 칩을 탑재한 고성능 노트북입니다.",
    price: 2499000,
    imageUrl:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
    category: "전자기기",
    inStock: true,
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    name: "무선 이어폰",
    description: "노이즈 캔슬링 기능을 갖춘 프리미엄 이어폰입니다.",
    price: 329000,
    imageUrl:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
    category: "전자기기",
    inStock: true,
    createdAt: "2024-01-10",
  },
  {
    id: "3",
    name: "스마트 워치",
    description: "건강 모니터링과 피트니스 트래킹이 가능한 스마트 워치입니다.",
    price: 449000,
    imageUrl:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    category: "웨어러블",
    inStock: false,
    createdAt: "2024-01-08",
  },
  {
    id: "4",
    name: "기계식 키보드",
    description: "RGB 백라이트와 커스텀 스위치를 지원하는 기계식 키보드입니다.",
    price: 189000,
    imageUrl:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400",
    category: "주변기기",
    inStock: true,
    createdAt: "2024-01-05",
  },
  {
    id: "5",
    name: "4K 모니터",
    description: "32인치 4K UHD 전문가용 모니터입니다.",
    price: 799000,
    imageUrl:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
    category: "전자기기",
    inStock: true,
    createdAt: "2024-01-03",
  },
  {
    id: "6",
    name: "게이밍 마우스",
    description:
      "25,000 DPI 센서와 프로그래머블 버튼을 갖춘 게이밍 마우스입니다.",
    price: 129000,
    imageUrl:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
    category: "주변기기",
    inStock: true,
    createdAt: "2024-01-01",
  },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  }).format(price);
};

export const ProductListPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">상품 목록</h1>
        <p className="text-gray-600 mt-2">총 {mockProducts.length}개의 상품</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProducts.map((product) => (
          <Card
            key={product.id}
            className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div onClick={() => navigate(`/products/${product.id}`)}>
              <div className="relative">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                {!product.inStock && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                    품절
                  </div>
                )}
                <div className="absolute top-2 left-2 bg-indigo-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                  {product.category}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-indigo-600">
                  {formatPrice(product.price)}
                </span>
                <Button variant="primary" size="sm" disabled={!product.inStock}>
                  {product.inStock ? "구매하기" : "품절"}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

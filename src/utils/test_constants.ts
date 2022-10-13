import curationImg1 from 'assets/images/we-like_our-picks_img_1.png';
import curationImg2 from 'assets/images/we-like_our-picks_img_2.png';
import curationImg3 from 'assets/images/we-like_our-picks_img_3.png';
import curationImg4 from 'assets/images/we-like_our-picks_img_4.png';
import todayTumbnail1 from 'assets/images/today_thumbnail_1.png';

export const BANNER: { [key: string]: string }[] = [
  {
    id: 'DeUY6EWzDsEGARD5XcQg_',
    path: '/today',
    url: 'src/assets/images/home_banner_img_1.png',
    name: '이미지01',
  },
  {
    id: '5SAetnxye-2lVNMIV35Ey',
    path: '/',
    url: 'src/assets/images/home_banner_img_2.png',
    name: '이미지02',
  },
  {
    id: 'LnPOwcAxXCN-gREvCvFKW',
    path: '/',
    url: 'src/assets/images/home_banner_img_3.png',
    name: '이미지03',
  },
  {
    id: 'KnPOwcAxXCN-gREvCvFNW',
    path: '/',
    url: 'src/assets/images/home_banner_img_4.png',
    name: '이미지04',
  },
];

export const TODAY_ITEMS: { [key: string]: string | number | {}[] }[] = [
  {
    id: 1,
    brand: 'meelabs',
    productName: '픽스 손목 보호대',
    price: 3500,
    productImage: [{ imageName: 'src/assets/images/today_thumbnail_1.png' }],
    discount: 10, // 데이터 확인 필요
  },
  {
    id: 2,
    brand: 'CHIRO CARE',
    productName: '커브 넥',
    price: 8500,
    productImage: [{ imageName: 'src/assets/images/today_thumbnail_2.png' }],
    discount: 12, // 데이터 확인 필요
  },
];

export const OUR_PICKS: any = [
  {
    id: 1,
    contents: [
      {
        id: 1,
        title: '9월 5째주 pick - meeLabs 손목 서포터',
        curationImg: curationImg1,
        content:
          '오랜 컴퓨터 사용 때문인지 얼마 전부터 손목과 팔꿈치 안쪽에 묵직한 통증이 느껴지기 시작했다. 하루 이틀이면 금세 사라질 줄 알았던 이 통증이 몇 주나 지속되자 후기가 증명하는 이 상품을 직접 써보고 너무 만족한 솔직한 후기.',
      },
      {
        id: 2,
        title: '9월 5째주 pick - meeLabs 손목 서포터',
        curationImg: curationImg2,
        content:
          '편안한 일상을 위한 생활건강 브랜드인 미랩스에서 출시한 손목 서포터는 타 사이트에도 100개가 넘는 리뷰와 5.0 만점의 사용자 총 평점으로 인해 사용하기 전부터 기대감을 안겨준 제품이기도 했다. 사이즈는 m과 l사이즈로 선택을 할 수 있었고, 왼손용과 오른손용 보호대 중에서 고를 수 있기 때문에 보호가 필요한 손의 위치, 사이즈에 따라 선택이 가능했다.',
      },
      {
        id: 3,
        title: '9월 5째주 pick - meeLabs 손목 서포터',
        curationImg: curationImg3,
        content:
          '미랩스의 손목서포터에는 손목의 단단한 지지와 고정을 위한 지지대 2개가 삽입되어 있었다. 하난 약간 부드러운 소재의 지지대였고, 또다른 하나는 단단한 소재의 지지대로 손목을 위아래로 부드럽게 감싸 줄 수 있었다, 손의 구조에 따라서 달리 삽입된 지지대이기 때문에 보다 착용감이나 사용감이 훌륭했다. 또한 착용감이나 손목 둘레에 따라서 벨크로의 강도를 조절할 수 있었는데',
      },
      {
        id: 4,
        title: '9월 5째주 pick - meeLabs 손목 서포터',
        curationImg: curationImg4,
        content:
          '이렇게 벨크로로 다시 한 번 감싸게 되면 또다른 지지대 역할을 해줄 수 있기 때문에 손목에 부담을 주는 자세를 취하지 않도록 단단히 잡아 줄 수 있었다. 많이 조이지도 않아서 답답한 느낌이 적은 편이였고, 심하게 두꺼운 편은 아닌지라 일상생활을 하는데에도 큰 문제가 없었다. 평소 손목에 통증을 느끼고 계셨던 분들, 혹은 손목을 많이 사용하는 일을 하시는 분들께 추천!',
      },
    ],
  },
];

export const ITEMS: any = [
  {
    brand: {
      brandName: 'meelabs',
      id: 0,
    },
    category: {
      categoryName: null,
      id: 0,
    },
    content: '픽스 손목 보호대',
    id: 0,
    originalPrice: 3500,
    price: 3150,
    productImage: [
      {
        imageName: todayTumbnail1,
      },
    ],
    productName: '픽스 손목 보호대',
    productStatus: 'NEW',
    purchaseCount: 0,
    quantity: 0,
    wishListCount: 55,
  },
  {
    brand: {
      brandName: 'Lukta',
      id: 0,
    },
    category: {
      categoryName: null,
      id: 0,
    },
    content: '픽스 손목 보호대',
    id: 59,
    originalPrice: 7000,
    price: 6460,
    productImage: [
      {
        imageName: todayTumbnail1,
      },
    ],
    productName: '프리미엄 디퓨저 [미야우 에디션]',
    productStatus: 'NEW',
    purchaseCount: 0,
    quantity: 0,
    wishListCount: 55,
  },
  {
    brand: {
      brandName: 'Lukta',
      id: 0,
    },
    category: {
      categoryName: null,
      id: 0,
    },
    content: '픽스 손목 보호대',
    id: 61,
    originalPrice: 7000,
    price: 6050,
    productImage: [
      {
        imageName: todayTumbnail1,
      },
    ],
    productName: '프리미엄 디퓨저 [도베르만 에디션]',
    productStatus: 'NEW',
    purchaseCount: 0,
    quantity: 0,
    wishListCount: 55,
  },
  {
    brand: {
      brandName: 'Around ann',
      id: 0,
    },
    category: {
      categoryName: null,
      id: 0,
    },
    content: '픽스 손목 보호대',
    id: 52,
    originalPrice: 7000,
    price: 3800,
    productImage: [
      {
        imageName: todayTumbnail1,
      },
    ],
    productName: 'Bowling bag_yellow',
    productStatus: 'NEW',
    purchaseCount: 0,
    quantity: 0,
    wishListCount: 55,
  },
  {
    brand: {
      brandName: 'Around ann',
      id: 0,
    },
    category: {
      categoryName: null,
      id: 0,
    },
    content: '픽스 손목 보호대',
    id: 53,
    originalPrice: 7000,
    price: 3610,
    productImage: [
      {
        imageName: todayTumbnail1,
      },
    ],
    productName: 'Bowling bag_green',
    productStatus: 'NEW',
    purchaseCount: 0,
    quantity: 0,
    wishListCount: 55,
  },
  {
    brand: {
      brandName: 'Dr.esthe',
      id: 0,
    },
    category: {
      categoryName: null,
      id: 0,
    },
    content: '리얼 에센셜 고트 밀크 필 프로그램 (1주)',
    id: 69,
    originalPrice: 7000,
    price: 1282,
    productImage: [
      {
        imageName: todayTumbnail1,
      },
    ],
    productName: '리얼 에센셜 고트 밀크 필 프로그램 (1주)',
    productStatus: 'NEW',
    purchaseCount: 0,
    quantity: 0,
    wishListCount: 55,
  },
  {
    brand: {
      brandName: 'Dr.esthe',
      id: 0,
    },
    category: {
      categoryName: null,
      id: 0,
    },
    content: '리얼 에센셜 고트 밀크 필 프로그램 (1주)',
    id: 72,
    originalPrice: 7000,
    price: 3130,
    productImage: [
      {
        imageName: todayTumbnail1,
      },
    ],
    productName: '리얼 에센셜 AC 컨트롤 프로그램',
    productStatus: 'NEW',
    purchaseCount: 0,
    quantity: 0,
    wishListCount: 55,
  },
];

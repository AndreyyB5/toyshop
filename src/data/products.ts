export interface ProductSize {
  label: string;
  price: number;
}

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  category: string;
  description: string;
  badge?: "new" | "hit" | "sale";
  sizes?: ProductSize[];
  colors?: ProductColor[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Плюшевый медведь",
    price: 24.99,
    images: [
      "https://images.unsplash.com/photo-1533859583213-c4e11b597ee0?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559715541-5daf8a0296d0?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1562040506-a9b32cb51b94?w=600&h=600&fit=crop",
    ],
    category: "Мягкие игрушки",
    badge: "hit",
    description:
      "Большой плюшевый медведь из мягкого гипоаллергенного материала. Идеальный друг для сна и игр. Подходит для детей от 1 года.",
    sizes: [
      { label: "15 см", price: 14.99 },
      { label: "25 см", price: 24.99 },
      { label: "40 см", price: 39.99 },
    ],
    colors: [
      { name: "Коричневый", hex: "#8B6914" },
      { name: "Бежевый", hex: "#D4B896" },
      { name: "Серый", hex: "#9CA3AF" },
    ],
  },
  {
    id: 2,
    name: "Конструктор Замок",
    price: 39.99,
    images: [
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=600&h=600&fit=crop",
    ],
    category: "Конструкторы",
    badge: "new",
    description:
      "Набор из 250 деталей для постройки средневекового замка. Развивает мелкую моторику и пространственное мышление. Для детей от 6 лет.",
    sizes: [
      { label: "120 дет.", price: 24.99 },
      { label: "250 дет.", price: 39.99 },
      { label: "500 дет.", price: 64.99 },
    ],
  },
  {
    id: 3,
    name: "Монополия Детская",
    price: 19.99,
    images: [
      "https://images.unsplash.com/photo-1703925153100-43afda8b6506?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?w=600&h=600&fit=crop",
    ],
    category: "Настольные игры",
    badge: "sale",
    description:
      "Упрощённая версия классической игры для самых маленьких. Яркие карточки и простые правила. Для 2-4 игроков от 5 лет.",
  },
  {
    id: 4,
    name: "Кукла Анна",
    price: 29.99,
    images: [
      "https://images.unsplash.com/photo-1730647338786-404f7ac0c936?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1613682988402-a12a3e219432?w=600&h=600&fit=crop",
    ],
    category: "Куклы",
    description:
      "Кукла с набором сменной одежды и аксессуаров. Волосы можно расчёсывать и заплетать. Высота 35 см.",
    sizes: [
      { label: "25 см", price: 19.99 },
      { label: "35 см", price: 29.99 },
      { label: "45 см", price: 42.99 },
    ],
    colors: [
      { name: "Блондинка", hex: "#F5DEB3" },
      { name: "Брюнетка", hex: "#5C4033" },
      { name: "Рыжая", hex: "#CC5500" },
    ],
  },
  {
    id: 5,
    name: "Плюшевый зайчик",
    price: 18.99,
    images: [
      "https://images.unsplash.com/photo-1588641915965-b357de51c339?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1585155770913-5f0a1d677a37?w=600&h=600&fit=crop",
    ],
    category: "Мягкие игрушки",
    description:
      "Милый зайчик с длинными ушками из велюра. Можно стирать в машинке. Отличный подарок для малышей.",
    sizes: [
      { label: "15 см", price: 12.99 },
      { label: "25 см", price: 18.99 },
      { label: "35 см", price: 28.99 },
    ],
    colors: [
      { name: "Белый", hex: "#F8F8F8" },
      { name: "Розовый", hex: "#F9A8D4" },
      { name: "Голубой", hex: "#93C5FD" },
    ],
  },
  {
    id: 6,
    name: "Конструктор Робот",
    price: 34.99,
    images: [
      "https://images.unsplash.com/photo-1546776230-bb86256870ce?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=600&h=600&fit=crop",
    ],
    category: "Конструкторы",
    badge: "hit",
    description:
      "Собери своего робота из 180 деталей. Подвижные руки и ноги, светящиеся глаза. Для юных инженеров от 7 лет.",
    sizes: [
      { label: "180 дет.", price: 34.99 },
      { label: "350 дет.", price: 54.99 },
    ],
    colors: [
      { name: "Красный", hex: "#EF4444" },
      { name: "Синий", hex: "#3B82F6" },
      { name: "Зелёный", hex: "#22C55E" },
    ],
  },
  {
    id: 7,
    name: "Шахматы деревянные",
    price: 27.99,
    images: [
      "https://images.unsplash.com/photo-1560273164-22bdd7fb6ef4?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&h=600&fit=crop",
    ],
    category: "Настольные игры",
    description:
      "Классические шахматы из натурального дерева. Складная доска служит коробкой для фигур. Размер доски 30x30 см.",
    sizes: [
      { label: "20×20 см", price: 19.99 },
      { label: "30×30 см", price: 27.99 },
      { label: "40×40 см", price: 39.99 },
    ],
  },
  {
    id: 8,
    name: "Кукла Мария",
    price: 32.99,
    images: [
      "https://images.unsplash.com/photo-1552899167-d0b2887ca549?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop",
    ],
    category: "Куклы",
    badge: "new",
    description:
      "Интерактивная кукла, которая умеет говорить 20 фраз. В комплекте коляска и набор посуды. Для детей от 3 лет.",
    sizes: [
      { label: "30 см", price: 32.99 },
      { label: "45 см", price: 44.99 },
    ],
  },
];

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Плюшевый медведь",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1533859583213-c4e11b597ee0?w=600&h=600&fit=crop",
    category: "Мягкие игрушки",
    description:
      "Большой плюшевый медведь из мягкого гипоаллергенного материала. Идеальный друг для сна и игр. Подходит для детей от 1 года.",
  },
  {
    id: 2,
    name: "Конструктор Замок",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&h=600&fit=crop",
    category: "Конструкторы",
    description:
      "Набор из 250 деталей для постройки средневекового замка. Развивает мелкую моторику и пространственное мышление. Для детей от 6 лет.",
  },
  {
    id: 3,
    name: "Монополия Детская",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1703925153100-43afda8b6506?w=600&h=600&fit=crop",
    category: "Настольные игры",
    description:
      "Упрощённая версия классической игры для самых маленьких. Яркие карточки и простые правила. Для 2-4 игроков от 5 лет.",
  },
  {
    id: 4,
    name: "Кукла Анна",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1730647338786-404f7ac0c936?w=600&h=600&fit=crop",
    category: "Куклы",
    description:
      "Кукла с набором сменной одежды и аксессуаров. Волосы можно расчёсывать и заплетать. Высота 35 см.",
  },
  {
    id: 5,
    name: "Плюшевый зайчик",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1588641915965-b357de51c339?w=600&h=600&fit=crop",
    category: "Мягкие игрушки",
    description:
      "Милый зайчик с длинными ушками из велюра. Можно стирать в машинке. Отличный подарок для малышей.",
  },
  {
    id: 6,
    name: "Конструктор Робот",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1546776230-bb86256870ce?w=600&h=600&fit=crop",
    category: "Конструкторы",
    description:
      "Собери своего робота из 180 деталей. Подвижные руки и ноги, светящиеся глаза. Для юных инженеров от 7 лет.",
  },
  {
    id: 7,
    name: "Шахматы деревянные",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1560273164-22bdd7fb6ef4?w=600&h=600&fit=crop",
    category: "Настольные игры",
    description:
      "Классические шахматы из натурального дерева. Складная доска служит коробкой для фигур. Размер доски 30x30 см.",
  },
  {
    id: 8,
    name: "Кукла Мария",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1552899167-d0b2887ca549?w=600&h=600&fit=crop",
    category: "Куклы",
    description:
      "Интерактивная кукла, которая умеет говорить 20 фраз. В комплекте коляска и набор посуды. Для детей от 3 лет.",
  },
];

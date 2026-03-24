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
    image: "https://placehold.co/400x400/EEE/333?text=Toy+1",
    category: "Мягкие игрушки",
    description:
      "Большой плюшевый медведь из мягкого гипоаллергенного материала. Идеальный друг для сна и игр. Подходит для детей от 1 года.",
  },
  {
    id: 2,
    name: "Конструктор Замок",
    price: 39.99,
    image: "https://placehold.co/400x400/EEE/333?text=Toy+2",
    category: "Конструкторы",
    description:
      "Набор из 250 деталей для постройки средневекового замка. Развивает мелкую моторику и пространственное мышление. Для детей от 6 лет.",
  },
  {
    id: 3,
    name: "Монополия Детская",
    price: 19.99,
    image: "https://placehold.co/400x400/EEE/333?text=Toy+3",
    category: "Настольные игры",
    description:
      "Упрощённая версия классической игры для самых маленьких. Яркие карточки и простые правила. Для 2-4 игроков от 5 лет.",
  },
  {
    id: 4,
    name: "Кукла Анна",
    price: 29.99,
    image: "https://placehold.co/400x400/EEE/333?text=Toy+4",
    category: "Куклы",
    description:
      "Кукла с набором сменной одежды и аксессуаров. Волосы можно расчёсывать и заплетать. Высота 35 см.",
  },
  {
    id: 5,
    name: "Плюшевый зайчик",
    price: 18.99,
    image: "https://placehold.co/400x400/EEE/333?text=Toy+5",
    category: "Мягкие игрушки",
    description:
      "Милый зайчик с длинными ушками из велюра. Можно стирать в машинке. Отличный подарок для малышей.",
  },
  {
    id: 6,
    name: "Конструктор Робот",
    price: 34.99,
    image: "https://placehold.co/400x400/EEE/333?text=Toy+6",
    category: "Конструкторы",
    description:
      "Собери своего робота из 180 деталей. Подвижные руки и ноги, светящиеся глаза. Для юных инженеров от 7 лет.",
  },
  {
    id: 7,
    name: "Шахматы деревянные",
    price: 27.99,
    image: "https://placehold.co/400x400/EEE/333?text=Toy+7",
    category: "Настольные игры",
    description:
      "Классические шахматы из натурального дерева. Складная доска служит коробкой для фигур. Размер доски 30x30 см.",
  },
  {
    id: 8,
    name: "Кукла Мария",
    price: 32.99,
    image: "https://placehold.co/400x400/EEE/333?text=Toy+8",
    category: "Куклы",
    description:
      "Интерактивная кукла, которая умеет говорить 20 фраз. В комплекте коляска и набор посуды. Для детей от 3 лет.",
  },
];

interface IPoint {
  id: number;
  name: string;
  coordinates: number[];
}

export const points: IPoint[] = [
  {
    id: 1,
    name: "Место дуэли М.Ю. Лермонтова",
    coordinates: [44.059616, 43.076408],
  },
  {
    id: 2,
    name: "Эолова арфа",
    coordinates: [44.040643, 43.088178],
  },
  {
    id: 3,
    name: "Парк Победы",
    coordinates: [44.037987, 43.009987],
  },
  {
    id: 4,
    name: "Провал",
    coordinates: [44.045591, 43.098956],
  },
  {
    id: 5,
    name: "Цветник",
    coordinates: [44.036355, 43.078627],
  },
  {
    id: 6,
    name: "Китайская беседка",
    coordinates: [44.036, 43.082907],
  },
  {
    id: 7,
    name: "Машук",
    coordinates: [44.050686, 43.087625],
  },
  {
    id: 8,
    name: "Успенский Второафонский монастырь",
    coordinates: [44.089726, 43.011413],
  },
];

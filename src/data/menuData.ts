export interface CurryItem {
  id: number
  name: string
  description: string
  ingredients: string[]
  isVegan: boolean
  isVegetarian: boolean
  spiceLevel: 1 | 2 | 3
}

export const curries: CurryItem[] = [
  {
    id: 1,
    name: 'Chana Masala',
    description: 'Kichererbsen in würziger Tomaten-Zwiebel-Sauce',
    ingredients: ['Kichererbsen', 'Tomaten', 'Zwiebeln', 'Ingwer', 'Knoblauch', 'Garam Masala'],
    isVegan: true,
    isVegetarian: true,
    spiceLevel: 2,
  },
  {
    id: 2,
    name: 'Aloo Gobi',
    description: 'Kartoffeln und Blumenkohl in einer milden Currysauce',
    ingredients: ['Kartoffeln', 'Blumenkohl', 'Kreuzkümmel', 'Kurkuma', 'Ingwer'],
    isVegan: true,
    isVegetarian: true,
    spiceLevel: 1,
  },
  {
    id: 3,
    name: 'Dal Tadka',
    description: 'Gelbe Linsen mit Knoblauch und Gewürzen',
    ingredients: ['Gelbe Linsen', 'Knoblauch', 'Ghee', 'Kreuzkümmel', 'Koriander'],
    isVegan: false, // contains ghee
    isVegetarian: true,
    spiceLevel: 2,
  },
  {
    id: 4,
    name: 'Baingan Bharta',
    description: 'Geräucherte Auberginen mit Erbsen und Tomaten',
    ingredients: ['Auberginen', 'Erbsen', 'Tomaten', 'Zwiebeln', 'Knoblauch'],
    isVegan: true,
    isVegetarian: true,
    spiceLevel: 3,
  },
  {
    id: 5,
    name: 'Palak Paneer',
    description: 'Frischer Spinat mit hausgemachtem Paneer-Käse',
    ingredients: ['Spinat', 'Paneer', 'Ingwer', 'Knoblauch', 'Garam Masala'],
    isVegan: false,
    isVegetarian: true,
    spiceLevel: 2,
  },
]
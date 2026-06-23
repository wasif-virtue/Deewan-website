export interface NewsItem {
  id: number
  date: string
  title: string
  content: string
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    date: '20. Juni 2026',
    title: 'Summer Holidays 2026',
    content: 'The Wiener Deewan will be closed from 3.8. to 23.8.2026 for summer holidays. Enjoy your summer!',
  },
  {
    id: 2,
    date: '1. September 2025',
    title: 'VEG ONLY – All Curries are now vegetarian/vegan',
    content: 'As of September 2025, all 5 curries are vegetarian and also vegan. Enjoy a wider plant-based selection!',
  },
  {
    id: 3,
    date: '30. April 2025',
    title: '20 Years Wiener Deewan!',
    content: 'We celebrate 20 years of pay‑as‑you‑wish and great food. Thank you for your support!',
  },
]
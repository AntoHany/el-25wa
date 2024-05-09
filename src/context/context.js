import { createContext } from "react";

export const logoText = createContext("الأخوة");

export const  navLinks = createContext([
  {id: 1, go:'/', name: 'الرئيسية'},
  {id: 2, go:'/work', name: 'اعمالنا'},
  {id: 3, go:'/team', name: 'فريق العمل'},
  {id: 4, go:'/contact', name: 'تواصل معنا'},
])

export let ImageData = [
  {
    id: 0,
    type: 'kitchen',
    url: 'kitchen.jpg'
  },
  {
    id: 1,
    type: 'kitchen',
    url: 'kitchen-2.jpg'
  },
  {
    id: 2,
    type: 'kitchen',
    url: 'kitchen-3.jpg'
  },
  {
    id: 3,
    type: 'kitchen',
    url: 'kitchen-4.jpg'
  },
]
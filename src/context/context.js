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
    mode: 'slider',
    type: 'kitchen',
    url: 'kitchen.jpg',
    title: 'kitchen'
  },
  {
    id: 1,
    mode: 'slider',
    type: 'kitchen',
    url: 'kitchen-2.jpg',
    title: 'kitchen'
  },
  {
    id: 2,
    mode: 'slider',
    type: 'kitchen',
    url: 'kitchen-3.jpg',
    title: 'kitchen'
  },
  {
    id: 3,
    mode: 'slider',
    type: 'kitchen',
    url: 'kitchen-4.jpg',
    title: 'kitchen'
  },
]
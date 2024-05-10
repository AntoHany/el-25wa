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
  {
    id: 4,
    type: 'door',
    url: 'door.jpg',
    title: 'door'
  },
  {
    id: 5,
    type: 'door',
    url: 'door(2).jpg',
    title: 'door'
  },
  {
    id: 6,
    type: 'door',
    url: 'door(3).jpg',
    title: 'door'
  },
  {
    id: 7,
    type: 'door',
    url: 'door(4).jpg',
    title: 'door'
  },
  {
    id: 8,
    type: 'door',
    url: 'door(5).jpg',
    title: 'door'
  },
  {
    id: 9,
    type: 'window',
    url: 'window.jpg',
    title: 'window'
  },
  {
    id: 10,
    type: 'window',
    url: 'window(2).jpg',
    title: 'window'
  },
  {
    id: 11,
    type: 'window',
    url: 'window(3).jpg',
    title: 'window'
  },
  {
    id: 12,
    type: 'window',
    url: 'window(4).jpg',
    title: 'window'
  },
  {
    id: 13,
    type: 'window',
    url: 'window(5).jpg',
    title: 'window'
  },
]
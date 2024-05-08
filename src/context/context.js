import { createContext } from "react";

export const logoText = createContext("الأخوة");

export const  navLinks = createContext([
  {id: 1, go:'/', name: 'الرئيسية'},
  {id: 2, go:'/work', name: 'اعمالنا'},
  {id: 3, go:'/team', name: 'فريق العمل'},
  {id: 4, go:'/contact', name: 'تواصل معنا'},
])
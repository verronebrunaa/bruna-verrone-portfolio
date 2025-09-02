import { AboutData } from "@/types/about";

export const aboutData: AboutData = {
  title: "Sobre Mim",
  description: `Sou uma pessoa curiosa, amo ler, aprender coisas novas e compartilhar experiências. Para além do trabalho, gosto de viajar, explorar novas culturas e me conectar com pessoas. Amo ir a shows, ouvir música e cozinhar. As vezes faço freelas para o `,
  freelanceLink: {
    url: "https://www.instagram.com/vivendodeshows/",
    text: "@vivendodeshows"
  },
  images: [
    { src: "/images/about/foto1.jpg", alt: "Descrição da sua foto pessoal 1" },
    { src: "/images/about/foto2.jpg", alt: "Descrição da sua foto pessoal 2" },
    { src: "/images/about/foto3.jpg", alt: "Descrição da sua foto pessoal 3" },
    { src: "/images/about/foto4.jpg", alt: "Descrição da sua foto pessoal 4" }
  ]
};
import expressoSvg from '../assets/coffees/Expresso.svg'
import expressoAmericano from '../assets/coffees/Americano.svg'
import expressoCremoso from '../assets/coffees/ExpressoCremoso.svg'
import expressoGelado from '../assets/coffees/CafeGelado.svg'
import cafeComLeite from '../assets/coffees/CafecomLeite.svg'
import latte from '../assets/coffees/Latte.svg'
import capuccino from '../assets/coffees/Capuccino.svg'
import macchiato from '../assets/coffees/Macchiato.svg'
import chocolateQuente from '../assets/coffees/ChocolateQuente.svg'
import cubano from '../assets/coffees/Cubano.svg'
import havaino from '../assets/coffees/Havaiano.svg'
import arabe from '../assets/coffees/Arabe.svg'
import irlandes from '../assets/coffees/Irlandes.svg'

export const coffees = [
  { 
    name : "Expresso Tradicional",
    description : "O tradicional café feito com água quente e grãos moídos",
    price : 9.90,
    tags : ["Tradicional"],
    image : expressoSvg,
    id:1
  },
  { 
    name : "Expresso Americano",
    description : "Expresso diluído, menos intenso que o tradicional",
    price : 9.90,
    tags : ["Tradicional"],
    image : expressoAmericano,
    id:2
  },
  { 
    name : "Expresso Cremoso",
    description : "Café expresso tradicional com espuma cremosa",
    price : 9.90,
    tags : ["Tradicional"],
    image : expressoCremoso,
    id:3
  },
  { 
    name : "expressoGelado",
    description : "Bebida preparada com café expresso e cubos de gelo",
    price : 9.90,
    tags : ["Tradicional","Gelado"],
    image : expressoGelado,
    id:4
  },
  { 
    name : "Café com Leite",
    description : "Meio a meio de expresso tradicional com leite vaporizado",
    price : 9.90,
    tags : ["Tradicional","Com leite"],
    image : cafeComLeite,
    id:5
  },
  { 
    name : "Latte",
    description : "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price : 9.90,
    tags : ["Tradicional","Com leite"],
    image : latte,
    id:6
  },
  { 
    name : "Capuccino",
    description : "Bebida com canela feita de doses iguais de café, leite e espuma",
    price : 9.90,
    tags : ["Tradicional","Com leite"],
    image : capuccino,
    id:7
  },
  { 
    name : "Macchiato",
    description : "Café expresso misturado com um pouco de leite quente e espuma",
    price : 9.90,
    tags : ["Tradicional","Com leite"],
    image : macchiato,
    id:8
  },
  { 
    name : "Chocolate Quente",
    description : "Bebida feita com chocolate dissolvido no leite quente e café",
    price : 9.90,
    tags : ["Tradicional"],
    image : chocolateQuente,
    id:9
  },
  { 
    name : "Cubano",
    description : "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price : 9.90,
    tags : ["especial","alcoólico","gelado"],
    image : cubano,
    id:10
  },
  { 
    name : "Havaiano",
    description : "Bebida adocicada preparada com café e leite de coco",
    price : 9.90,
    tags : ["especial"],
    image : havaino,
    id:11
  },
  { 
    name : "Árabe",
    description : "Bebida preparada com grãos de café árabe e especiarias",
    price : 9.90,
    tags : ["especial"],
    image : arabe,
    id:12
  },
  { 
    name : "Irlandês",
    description : "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price : 9.90,
    tags : ["especial","alcoólico"],
    image : irlandes,
    id:13
  }
]
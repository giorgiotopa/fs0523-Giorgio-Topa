export interface iProduct {
 line:string
 products: [
  {
  brand:string,
  category:string,
  description:string,
  discountPercentage:number,
  id:number,
  images:[],
  price:number,
  rating:number,
  stock:number,
  thumbnail:string,
  title:string
}
]
  skip:number
  total:number
}

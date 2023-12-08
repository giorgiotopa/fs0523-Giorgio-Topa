import { expand } from "rxjs"

export interface iWeather{
  weather:[
    {
      id:number
      main:string
      description:string
      icon:string
    }
  ]
}

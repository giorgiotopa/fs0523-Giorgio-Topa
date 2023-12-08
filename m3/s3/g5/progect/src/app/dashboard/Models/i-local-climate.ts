export interface iLocalClimate {
city:{id: number, name:string, coord: {}, country: string, population:number}
cnt:number
cod:string
list:[
  {
    clouds:{all:number}
    dt:number
    dt_txt:string
    main:{temp:number, feels_like:number, temp_min:number, temp_max:number, pressure:number}
    pop:number
    sys:{pod:string}
    visibility:number
    weather:[{id:number, main:string, description:string, icon:string}]
    win:{speed:number, deg:number, gust:number}
 }
]
message:number
}

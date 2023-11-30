import { iSmartphone } from "./iSmartphone";

export class Smartphone implements iSmartphone{
  constructor(
    public marca: string,
    public prezzo: number,
    public active: boolean|string,
    public id?: string,
  ){}
}

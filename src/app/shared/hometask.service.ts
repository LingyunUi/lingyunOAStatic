import { Injectable } from '@angular/core';

@Injectable()
export class HometaskService {

  private hometasks:Hometask[] = [
    new Hometask(1,'范小余',18),
    new Hometask(1,'宝玉',12),
    new Hometask(1,'我曹',11),
    new Hometask(1,'小星星',111),
    new Hometask(2,'石大牛',91)
  ];


  constructor(){};

  getHometask(): Hometask[] {
    return this.hometasks;

  }

}


export class Hometask {

  constructor(
    public id:number,
    public name:string,
    public age:number
  ){

  }
}

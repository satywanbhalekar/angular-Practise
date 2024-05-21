import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  getStudents(){
    return [
      {name:"sam",age:21},
    {name:"sataym",age:22},
    {name:"sam",age:21},
    {name:"sataym",age:22},
    {name:"sam",age:21},
    {name:"sataym",age:22},
    {name:"sam",age:21},
    {name:"sataym",age:22},]
  }



}

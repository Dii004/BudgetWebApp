import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import { People } from './models/people';
import { Category, Transaktion } from './models/transaktion';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(){

    var  peoples: People [] =  [ 
      {id:1,  degree:  "Ing.", firstname: "Zuzana", lastname: "Záhorská", degreedr: "Phd.", adress: "Šamorín Gazdovský rad 38, 931 01" , mailingadress: "Šamorín Záhradnícka 72, 931 01",img: "https://media-exp1.licdn.com/dms/image/D4E03AQFWwBqs0CkA4A/profile-displayphoto-shrink_800_800/0/1667816374788?e=1674086400&v=beta&t=mjxid0X3zAZnuSb-RQt2qLGYgjCBwWkXae4m3_SVLU0"},
      {id:2,  degree:  "Ing.", firstname: "Mikuláš", lastname: "Záhorský", degreedr: "", adress: "Šamorín Gazdovský rad 38, 931 01" , mailingadress: "Šamorín Záhradnícka 72, 931 01",img: "https://media-exp1.licdn.com/dms/image/D4E03AQFWwBqs0CkA4A/profile-displayphoto-shrink_800_800/0/1667816374788?e=1674086400&v=beta&t=mjxid0X3zAZnuSb-RQt2qLGYgjCBwWkXae4m3_SVLU0"}];

    let ownerList: Owner [] = [{name: "Tesco", iban: "SK125000000000000170648489890", category: Category.Food, isDebet: true}];

    var transaktions: Transaktion [] = [
      { id: 1, amount: 10, location: "Potraviny kaufland", contact: "0908855555", category: ownerList[0].category, isDebet: ownerList[0].isDebet,


  }];
 
    return {peoples: peoples, transaktions: transaktions};
}}
export interface Owner {
  name: string;
  iban: string;
  category: Category;
  isDebet: boolean;
}




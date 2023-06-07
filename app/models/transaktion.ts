
export interface Transaktion{
         id?:number,
         amount:number,
         location:string,
         contact:string,
         category: Category,
         isDebet: boolean,
      
        
}

export enum Category {
    None = 0,
    Food,
    Drogery,
    Pharmacy,
    Bar,
    Energy,
    Clothes,
    Education,
    Payout1bank,
    Payout2bank,
    Payout1cash,
    Payout2cash,
}
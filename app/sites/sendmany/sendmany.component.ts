import { Component, OnInit,Input } from '@angular/core';
import { Sendmany } from '../../models/sendmany';
import { Category, Transaktion } from '../../models/transaktion';
import { TransaktionService } from 'src/app/servises/transaktion.service';
@Component({
  selector: 'app-sendmany',
  templateUrl: './sendmany.component.html',
  styleUrls: ['./sendmany.component.css']
})
export class SendmanyComponent implements OnInit {
  totalBudget: number = 0;

  transaktion: Transaktion = {
    id: null,
    amount:null,
    location:'',
    contact:'',
    category:Category.None,
    isDebet: true,

  };
  transaktions: Transaktion[] = [];
  


  constructor(private policyService: TransaktionService) { }

  ngOnInit(): void {
  }



submitForm(){
  alert('Úspešná akcia, poslali ste peniaze!')
  this.policyService.createTransaktion(this.transaktion).subscribe((response) => console.log(response));
  this.transaktions.push(this.transaktion);
  this.getTransaktion();
this.add();
}

private getTransaktion() {
  this.policyService.getTransaktions().subscribe((data : any[])=>{
    console.log(data);
    this.transaktions = data;
})}

add(){
  this.totalBudget -= this.transaktion.amount;
}
 
}

import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { Category, Transaktion } from '../../models/transaktion';
import { TransaktionService } from 'src/app/servises/transaktion.service';
import {NgForm} from '@Angular/forms';



@Component({
  selector: 'app-transaktion',
  templateUrl: './transaktion.component.html',
  styleUrls: ['./transaktion.component.css']
})
export class TransaktionComponent implements OnInit {
  @Input() transaktionInfos: Transaktion [] = [];
  @Output() newPilotEvent:EventEmitter<Transaktion> = new EventEmitter<Transaktion>();
  Category = Category
id: number = 0;
  public amount: number = 0;
  totalBudget: number = 0;
  transaktion:Transaktion = {
    id: this.id,
    amount:null,
    location:'',
    contact:'',
    category: Category.None,
    isDebet: true,
  };
  transaktions: Transaktion[];
  
  constructor(private policyService:TransaktionService) { }

  ngOnInit(): void {
this.getTransaktions();
this.add();
  }
 
  onSubmit(){
    this.newPilotEvent.emit(this.transaktion);
  }


  add(){
    this.totalBudget += this.transaktion.amount;
  }


  private getTransaktions() {
    this.policyService.getTransaktions().subscribe((transaktions)=>{
      console.log(transaktions);
      this.transaktions = transaktions;
  })}

  addTransakcion() {
    console.log(this.transaktion)
    this.policyService.createTransaktion(this.transaktion).subscribe(response => {
      console.log(response);
      this.totalBudget += this.transaktion.amount;
      
      this.getTransaktions();

    });
  }
  removeTransakcion() {
    const data = {
    amount: this.transaktion.amount,
    id: this.transaktion.id,
    location: this.transaktion.location,
    contact:this.transaktion.contact,
    category: this.transaktion.category,
   
    };
    this.policyService.createTransaktion(this.transaktion).subscribe(response => {
      console.log(response);
      this.totalBudget -= this.transaktion.amount;
      this.getTransaktions();
    });
  }


}

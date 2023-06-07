import { Component, OnInit } from '@angular/core';
import { Transaktion } from 'src/app/models/transaktion';
import { TransaktionService } from 'src/app/servises/transaktion.service';

@Component({
  selector: 'app-displayedsendmany',
  templateUrl: './displayedsendmany.component.html',
  styleUrls: ['./displayedsendmany.component.css']
})
export class DisplayedsendmanyComponent implements OnInit {
transaktion: Transaktion [] = []
  constructor(private transaktionservice:TransaktionService) { }

  onSubmits(transaktion: Transaktion){
  this.transaktionservice.createTransaktion(transaktion).subscribe
     ((transaktion) => this.transaktion = transaktion);
}
  ngOnInit(): void {
  }

}

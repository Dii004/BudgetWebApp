import { Component, OnInit , Input} from '@angular/core';
import { Transaktion } from '../../models/transaktion';
import { PeopleService } from '../../servises/people.service';
import {NgForm} from '@Angular/forms';


@Component({
  selector: 'app-detailtransaktion',
  templateUrl: './detailtransaktion.component.html',
  styleUrls: ['./detailtransaktion.component.css']
})
export class DetailtransaktionComponent implements OnInit {
  _one: Transaktion | null = null;

  loadedPost: Transaktion [] = [];

  constructor(private policyService:PeopleService) { }

  ngOnInit(): void {
  }
  onSubmits(form: Transaktion) {
    this._one = form;
    this.policyService.getPeople().subscribe((data : any[])=>{
      console.log(data);
      this.loadedPost = data;
  })}
}

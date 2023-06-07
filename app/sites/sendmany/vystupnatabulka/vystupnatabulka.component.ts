import { Component, OnInit,Input } from '@angular/core';
import { Transaktion } from 'src/app/models/transaktion';

@Component({
  selector: 'app-vystupnatabulka',
  templateUrl: './vystupnatabulka.component.html',
  styleUrls: ['./vystupnatabulka.component.css']
})
export class VystupnatabulkaComponent implements OnInit {
  @Input() transaktion: Transaktion [] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

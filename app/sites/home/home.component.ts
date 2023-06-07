import { Component, OnInit } from '@angular/core';
import { People } from '../../models/people';
import { PeopleService } from '../../servises/people.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  
  peoples: People[] = [];
  
  constructor(private policyService: PeopleService) {  
     }

  ngOnInit() {
    this.policyService.getPeople().subscribe((peoples)=>{
      this.peoples = peoples;
  })
  }



  /*public deletePolicy(policyId){
    this.policyService.deletePolicy(policyId).subscribe((ret)=>{
          console.log("Údaje sa vymazali: ", ret);
    })
}
*/

}

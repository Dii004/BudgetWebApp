import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { People } from '../../models/people';
import { PeopleService } from '../../servises/people.service';
import { Router } from '@angular/router';
import { read } from '@popperjs/core';
import { Observable } from 'rxjs';
import { DatabaseService } from '../../servises/database.service';



@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  

  People = {
    id: null,
    degree:'',
    firstname:'',
    lastname:'',
    degreedr:'',
    adress:'',
    mailingadress:'',
    img: 'https://media-exp1.licdn.com/dms/image/D4E03AQFWwBqs0CkA4A/profile-displayphoto-shrink_800_800/0/1667816374788?e=1674086400&v=beta&t=mjxid0X3zAZnuSb-RQt2qLGYgjCBwWkXae4m3_SVLU0',
    amount:null,
    location:'',
    contact:'',
    categoryFood:false,
    categoryDrogery:false,
    categoryPharmacy:false,
    categoryBar:false,
    categoryEnergy:false,
    categoryClothes:false,
    categoryEducation:false,
  };
  edit = true;
  peoples: People [];
  constructor(private policyService: PeopleService,private DatabaseServise:DatabaseService, private http:HttpClient,  private router:Router) { }

  ngOnInit(): void {
 
    this.getPeople()
  }

 



  private getPeople() {
    this.policyService.getPeople().subscribe((data : any[])=>{
      console.log(data);
      this.peoples = data;
  })}

  setPeopleEdit(people: People) {
    this.People.degree = people.degree;
    this.People.id = people.id;
    this.People.firstname = people.firstname;
    this.People.lastname = people.lastname;
    this.People.degreedr = people.degreedr;
    this.People.adress = people.adress;
    this.People.mailingadress = people.mailingadress;
    this.People.img = people.img;
    this.edit = false;
  }

  resetValues() {
    this.People.degree = "";
    this.People.id = null;
    this.People.firstname = "";
    this.People.lastname = "";
    this.People.degreedr = "";
    this.People.adress = "";
    this.People.mailingadress = "";
    this.People.img = "";
    this.edit = true;
  }

  updatePeople(){
    this.policyService.editPeople(this.People).subscribe(response => console.log(response));
    this.getPeople()
    this.resetValues()
  }


}  




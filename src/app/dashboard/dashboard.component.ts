import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import {AbstractControl,FormArray,FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import {Search} from '../../Search';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[SearchService] 
})

/* Set the width of the side navigation to 250px */

export class DashboardComponent implements OnInit {

  form = new FormGroup({
    search:new FormControl
  });

  search= this.form.get('search').value;
  searches:Search[];
  results = [];
  constructor(private searchService: SearchService,public fb:FormBuilder) { 

    this.form=this.fb.group({
      search:''

    })

    

    
  }

  ngOnInit() {
  }

  loadResult(){
    console.log("load result initialized");
    var list = this.searchService.getResult();
    this.results.push(list);
    //var show = console.log(window.$log = ("Results from list : " +this.results));
    //alert (show);
  }

  postSearch($event){
    event.preventDefault();

    console.log("Hapo sawa");

    var searchword={
         search:this.form.get('search').value
     }
    //  console.log(searchword)
    var myResult =  this.searchService.postSearch(searchword)
         .subscribe(search =>{
           this.search='';


         });
  
  
    }
   
  
    
      
   }

 



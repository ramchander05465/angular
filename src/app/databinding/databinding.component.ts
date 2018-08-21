import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  componentTitle:string="Learing data bidnig"
  isDisable:boolean=false;
  propertyText="this is testing property data binding"

  constructor() {
    
   }

  ngOnInit() {
    setTimeout(() => {
      this.isDisable = true
    }, 4000)
  }

  getComponentDetails(){
    return 'going to implement string interpolation'
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  componentTitle:string="Learing data bidnig"
  isDisable:boolean=true;
  propertyText="this is testing property data binding"
  serverCreated = "Not yet"

  constructor() {
    
   }

  ngOnInit() {
    setTimeout(() => {
      this.isDisable = false
    }, 4000)
  }

  getComponentDetails(){
    return 'going to implement string interpolation'
  }

  clickHandler(){
    this.serverCreated="Server has created"
  }

}

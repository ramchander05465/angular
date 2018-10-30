import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers=[];
  title = 'angularPOC';

  addServer  = () => {
    this.servers.push('server')
  }

  onRemoveServer = (id: number) => {
    const position = id+1;
    this.servers.splice(position, 1)
  }
}

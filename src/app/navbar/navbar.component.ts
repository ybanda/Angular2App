import {Component} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import { environment } from './../../environments/environment';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls: ['../../assets/stylesheets/bootstrap.css']
})
export class NavBarComponent{
    backgroundColor = environment.backgroundHeaderColor;
constructor(private router: Router){

}
isRouteActive(route){
    return this.router.isActive(route, true);
}
}
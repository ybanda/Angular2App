import {Component} from '@angular/core'
import {Router,RouterModule} from '@angular/router';

@Component({
    selector:'nav-bar',
    templateUrl:'./navbar.component.html',
    styleUrls:['../../assets/stylesheets/bootstrap.css']
})
export class NavBarComponent{
constructor(private router:Router){

}
isRouteActive(route){
    return this.router.isActive(route,true);
}
}
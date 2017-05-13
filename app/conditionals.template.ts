import { Component, Input, Output, Renderer } from '@angular/core';
import {CourseService} from './courseModule/course.service';
import {SummaryPipe} from './summary.pipe';
@Component({
    selector:'conditional',
    templateUrl:'app/html/conditionals.template.html'
    ,styleUrls:['styles/styles.css'],
    providers:[CourseService]
})
export class ConditionalStatementComponent {
       courses=[];
       
       viewMode='map';
       data ={id:1,name:"Angular 2 with Type Script", versionNo:2003,rating:1.5555,cost:99.999,date:new Date()}
       post={
           title:"Angular  Tutorial for Begineers",
           body:`The State Department on Monday removed from its website an article about the history and lavish furnishings of President Trump’s privately owned Florida resort club Mar-a-Lago, following questions about whether the federal government improperly promoted Trump’s moneymaking enterprises
           Sen. Ron Wyden (D-Ore.) pointed to the travelogue-style blog piece Monday, asking in a Twitter message why the State Department would spend “taxpayer $$ promoting the president’s private country club.”
           The State Department issued a statement Monday apologizing for “any misperception.The intention of the article was to inform the public about where the president has been hosting world leaders,” the statement said.
           It was not clear whether the item had been vetted for legal or ethical concerns.`,
           name:null,
           id:1
          }
       initializeData($event){
           console.info(" Start of initializeData"+$event);
           this.courses = new CourseService().getCourses();
           this.post.name="Yashwanth";
           console.info(" End   of initializeData"+$event);
           
       }
       ViewModes(){
           this.viewMode='map';
           console.debug(this.viewMode);
    }
}
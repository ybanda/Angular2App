import {Component,Input,Output,Renderer} from '@angular/core';
import {TwitterService} from './twitter.service'
@Component({

    selector:'twitter',
    templateUrl:'app/html/twitter.template.html',
    styles:[],
    providers:[TwitterService]

})
export class TwitterComponent{

inputData={
    names:["Yashwanth","Harish","Venkat","Sunanda"],
    accountName:["yreddybanda","hreddybanda","vreddybanda","sreddybanda"],
    tagLine:["There is only one tage line for Yashwanth",
    "There is only one tage line for Harish",
    "There is only one tage line for Venkat",
    "There is only one tage line for Sunanda",]
}

}
import {} from 'jasmine';
import { TwitterComponent } from './twitter.component';
import { TwitterService } from './twitter.service';

describe('TwitterComponent',() =>{

    //Arrange
    let component :TwitterComponent;
        beforeEach(()=>{
            //Setup 
            component = new TwitterComponent(new TwitterService());
        
        });
        afterEach(()=>{//Tear Down
        });
        beforeAll(()=>{//
        });
        
    it('should increment total likes when upvote',()=>{

        
        //Act
       // component.onLikeClick(12);

        //Assert
      //  expect(component.change).toBe(12);
    })});
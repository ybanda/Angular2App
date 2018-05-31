import { compute } from './compute';

describe('contact',function(){
    it('should return 0 if it is negative',()=>{

        const result =compute(-1);
        expect(result).toBe(0);
    })
})
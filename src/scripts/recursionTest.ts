import { recursions } from "../lib/utils/recursions/recursion";

describe('Recursion', async function(){

    it('recursion', async function(){
        // let number = 5;
        console.log(await recursions.factorial(5));
    })
})
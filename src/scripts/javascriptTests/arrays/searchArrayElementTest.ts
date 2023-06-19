import { SearchArrayElement } from "../../../lib/arrayUtils/searchEleUtils";
import { expect } from "chai";

describe('Array-Delete', async function(){
    let arr:number[] = [];
    let arrayUtils:SearchArrayElement;
    this.beforeAll(async function(){
        console.log();
        arrayUtils= new SearchArrayElement();

        for(let i=0; i<10; i++){
            arr.push(i);
        }

        console.log(`original array ${arr}`);
        console.log();
    })

    it('should search an element from Array.', async function(){
        console.log();
       
        expect(arr[1]).not.equal(2);
    })

});
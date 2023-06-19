import { mergeArrays } from "../../../lib/arrayUtils/mergeArrays";
import { expect } from "chai";

describe('Array-Delete', async function(){
    let arr1:number[] = [];
    let arr2:number[]= [];
    this.beforeAll(async function(){
        console.log();
       
        for(let i=0; i<10; i++){
            arr1.push(i);
        }
        for(let i=20; i<30; i++){
            arr2.push(i);
        }
        console.log(`original array1 ${arr1}`);
        console.log();
        console.log(`original array2 ${arr2}`);
        console.log();
    })

    it('should search an element from Array.', async function(){
        console.log();
       console.log(await mergeArrays.mergeArrays(arr1,arr2));
        expect(arr1[1]).not.equal(2);
    })

});
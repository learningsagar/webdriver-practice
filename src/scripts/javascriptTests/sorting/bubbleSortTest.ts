import { expect } from "chai";
import { listeners } from "process";
import { bubbleSort } from "../../../lib/arrayUtils/sorting/bubbleSort";

describe('Bubble-Sort', async function(){
    let arr:number[] = [40,30,12,25];
    this.beforeAll(async function(){
        console.log();
    
        console.log(`original array ${arr}`);
        console.log();
    })

    it('bubble sort.', async function(){
        console.log();
        console.log(bubbleSort.bubbleSort(arr));
        // expect(arr[deletePosition]).not.equal(initElement);
    })

});
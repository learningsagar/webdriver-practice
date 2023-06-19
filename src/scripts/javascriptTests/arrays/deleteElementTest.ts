import { DeleteEleUtils } from "../../../lib/arrayUtils/deleteEleUtils";
import { expect } from "chai";

describe('Array-Delete', async function(){
    let arr:number[] = [];
    let arrayUtils:DeleteEleUtils;
    this.beforeAll(async function(){
        console.log();
        arrayUtils= new DeleteEleUtils();

        for(let i=0; i<10; i++){
            arr.push(i);
        }

        console.log(`original array ${arr}`);
        console.log();
    })

    it('should delete an element fromspecified position.', async function(){
        console.log();
        const deletePosition = 2;
        const initElement = arr[deletePosition];
        console.log(`before deleting arr[${deletePosition}] : ${initElement}`);
        arr = await arrayUtils.deleteElementAtPosition(arr,deletePosition);
        console.log(`after deleting arr[${deletePosition}] : ${arr[deletePosition]}`);
        console.log(`updated array ${arr}`);
        expect(arr[deletePosition]).not.equal(initElement);
    })

});
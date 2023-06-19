import { assert, expect } from "chai";
import { ArrayInsertUtils } from '../../../lib/arrayUtils/insertEleUtils';

describe('ArrayTests', async function(){
    let arr:number[]=[];
    let arrayUtils:ArrayInsertUtils;

    this.beforeAll(async function(){
        arrayUtils = new ArrayInsertUtils();

        for(let i=0; i<10; i++){
            arr.push(i);
        }

        console.log(`original array ${arr}`);
        console.log();
    });

    it('Array- insert new Element at specified Position using js inbuilt method splice', async function(){
        const newElement= 500;
        const position = 2;
        let res:number[] = await arrayUtils.insertElementUsingInbuiltFun(arr,position,newElement)

        console.log(`after insertion = ${res}`);
        console.log(`newly positioned element  res[${position}] = ${res[position]}`);

        expect(res[position]).equal(newElement);
        console.log();
    })
 
    it('Array- insert new Element at specified Position using same array', async function(){
        console.log();
        console.log();
        const newElement= 50;
        const position = 4;

        let res:number[] = await arrayUtils.insertEleAtPositionInArray(arr,position,newElement)

       
        console.log(`after insertion = ${res}`);
        console.log(`newly positioned element  res[${position}] = ${res[position]}`);

        expect(res[position]).equal(newElement);
        console.log();
        
    })

    it('Array- insert new Element at specified Position using temp array', async function(){
        const newElement= 100;
        const position = 8;

        let res:number[] = await arrayUtils.insertElementAtPositionWithTempArray(arr,position,newElement)

        console.log(`after insertion = ${res}`);
        console.log(`newly positioned element  res[${position}] = ${res[position]}`);

        expect(res[position]).equal(newElement);
        console.log();
    })

   

})
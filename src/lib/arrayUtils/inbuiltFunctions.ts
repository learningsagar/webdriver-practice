

class ArrayInbuildFunctions{

 public async getIndexOfElement(arr:number[], element:number):Promise<number>{
    return arr.indexOf(element);
 }

 public async insertElement(arr:number[],insertPosition:number,newElement:number):Promise<number[]>{
   arr.splice(insertPosition,0, newElement)
   return arr;
 }

 public async getReversedArray(arr:number[]):Promise<number[]>{
   return arr.reverse();
 }


 public async mergeArrays(array1:number[], array2:number[]):Promise<number[]>{
   return [...array1, ...array2];
 }



}

export const arrayInBuiltFunctions = new ArrayInbuildFunctions();


export class ArrayInsertUtils{
    constructor(){

    }


    public async insertElementUsingInbuiltFun(array:number[],
        insertPosition:number,newElement:number):Promise<number[]>{
        array.splice(insertPosition,0,newElement)
        return array;
    }

    public async insertEleAtPositionInArray(array:number[],
        insertPosition:number,newElement:number):Promise<number[]>{

        for(let i=array.length;i>=0;i--){
            if(i>=insertPosition){
                array[i+1] = array[i];

                if(i === insertPosition){
                    array[i]= newElement;
                }
            }
        }
        return array;
    }


    public async insertElementAtPositionWithTempArray(array:number[],
        insertPosition:number,newElement:number): Promise<number[]>{
            let tempArray:number[]=[];

            for(let i=0;i<array.length;i++){
                if (i=== insertPosition){
                    tempArray[i]=newElement;
                }else{
                    tempArray[i]=array[i];
                }
            }    
            return tempArray;
    }



}
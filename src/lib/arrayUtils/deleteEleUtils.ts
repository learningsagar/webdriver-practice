
export class DeleteEleUtils{


    public async deleteElementAtPosition(arr:number[], deletPosition:number):Promise<number[]>{
        for(let i=deletPosition;i<=arr.length-1;i++){
            arr[i] = arr[i+1];
        }
        arr.length = arr.length-1
        
        return arr;

    }
}
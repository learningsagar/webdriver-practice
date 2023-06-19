

class MergeArrays{

    public async mergeArrays(arr1:number[], arr2:number[]):Promise<number[]>{
        let result:number[] = [];
        for(let i=0;i<=arr1.length;i++){
            result[i] =arr1[i];
        }

        for(let j=0;j<arr2.length;j++){
            result[arr1.length+j]= arr2[j];
        }
        return result;
    }

}

export const mergeArrays = new MergeArrays();
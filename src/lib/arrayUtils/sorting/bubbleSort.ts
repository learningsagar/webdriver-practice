
class BubbleSort{
    public async bubbleSort(arr:number[]):Promise<number[]>{
        for(let i=0; i<arr.length;i++){
            for(let j=0; j<arr.length;j++){
                if(arr[j] > arr[j+1]){
                    console.log(`${arr[j]} : ${arr[j+1]} `)
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }

        return arr;
    }
}

export const bubbleSort = new BubbleSort();
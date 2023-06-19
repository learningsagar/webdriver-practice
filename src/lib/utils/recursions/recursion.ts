

class Recursions{

    public async factorial(n:number): Promise<number>{
        if(n==0){
            return 1;
        }
        return n * await this.factorial(n-1);
    }
}

export const recursions= new Recursions()
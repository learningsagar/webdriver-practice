
export class ErrorHandling{
    public async parse(birthday: string): Promise<Date> {
        let date;
        date = new Date(birthday)
        if (!this.isValid(date)) {
            throw new RangeError(
            'Enter a date in the form YYYY/MM/DD'
            );
        }
        // try{
        //     date = new Date(birthday)
        // }catch(e){
        //     if (!this.isValid(date)) {
        //         throw new RangeError('Enter a date in the form YYYY/MM/DD')
        //       }
        // }
        return date
      }

    public ask(birthDate:string):string {
        return birthDate; 
    }


    public async isValid(date: Date) {
        return Object.prototype.toString.call(date) === '[object Date]'
            && !Number.isNaN(date.getTime())
    }
}

export const errorHandling = new ErrorHandling();
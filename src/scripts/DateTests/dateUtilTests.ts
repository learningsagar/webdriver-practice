


describe('Date Util Tests', async function(){
    it('demonstrate date methods'){
        let date = new Date();
        console.log(`date.getTime: ${date.getTime()}`);
        console.log(`date.toISOString(): ${date.toISOString()}`);
        console.log(`date.getTimezoneOffset() : ${date.getTimezoneOffset()}`);
        console.log(`date.toUTCString() : ${date.toUTCString()}`);
        console.log(`date.toString(): ${date.toString()}`);
        console.log(`date.toLocaleString('en-US', {timeZone: 'Asia/Kolkata'}): ${date.toLocaleString('en-US', {timeZone: 'Asia/Kolkata'})}`);

    }
}
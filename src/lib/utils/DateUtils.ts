
class DateUtils{
    public getCurrentTimestamp(): number {
        const currentTimestamp = new Date().getTime();
        return currentTimestamp;
      }
}
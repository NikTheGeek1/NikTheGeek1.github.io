
class DateUtils {
    public static dateToString(date: Date): string {
        const res = date.toISOString().slice(0,10).replace(/-/g,"");
        const day = res.slice(6);
        const month = res.slice(4, 6);
        const year = res.slice(0, 4);
        return `${day}/${month}/${year}`;
    }
}

export default DateUtils;
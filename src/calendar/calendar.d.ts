export declare class CalendarModule {
    currentYear: number;

    currentMonth: number;

    currentDate: number;

    currentDay: number;

    displayYear: number;

    displayMonth: number;

    dateArray: Array<dateObj>;

    weekArray;

    lastSelect: number;

    weekHead: string[];

    today();

    back();

    forward();

    createMonth(year: number, month: number);

    daySelect(day: any, i: any, j: any);

    constructor();

}

interface dateObj {
    year: number,
    month: number,
    date: number,//几号
    isThisMonth: boolean,//是否为当前选择的月份
    isToday?: boolean,
    isSelect?: boolean,
}
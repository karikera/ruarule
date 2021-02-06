


const FIRST = "가".charCodeAt(0);
const LAST = "힣".charCodeAt(0);


const INITIAL_COUNT = 19;
const MEDIAL_COUNT = 21;
const FINAL_COUNT = 28;

export function subject(text:string):string
{
    const chr = text.charCodeAt(text.length-1);
    const final = (chr - FIRST) % FINAL_COUNT;
    return final === 0 ? '는' : '은';
}

export function topic(text:string):string
{
    const chr = text.charCodeAt(text.length-1);
    const final = (chr - FIRST) % FINAL_COUNT;
    return final === 0 ? '가' : '이';
}


export function neun(text:string):string
{
    const chr = text.charCodeAt(text.length-1);
    const final = (chr - FIRST) % FINAL_COUNT;
    return final === 0 ? '를' : '을';
}


export function toTimeText(remaining:number):string
{
    remaining = Math.round(remaining);

    if (remaining <= 60)
    {
        return remaining + '초';
    }
    if (remaining < 2*60)
    {
        const min = remaining / 60 | 0;
        const sec = remaining % 60;
        if (sec === 0) return min+'분';
        return min+'분 '+sec+'초';
    }
    if (remaining <= 60*60)
    {
        const min = remaining / 60 | 0;
        return min+'분';
    }
    if (remaining < 2*60*60)
    {
        remaining = remaining / 60 | 0;
        const hours = remaining / 60 | 0;
        const min = remaining % 60;
        if (min === 0) return min+'시간';
        return hours+'시간 '+min+'분';
    }
    if (remaining <= 24*60*60)
    {
        remaining = remaining / (60*60) | 0;
        return remaining+'시간';
    }
    if (remaining < 2*24*60*60)
    {
        remaining = remaining / (60*60) | 0;
        const day = remaining / 24 | 0;
        const hours = remaining % 24;
        if (hours === 0) return day+'일';
        return day+'일 '+hours+'시간';
    }
    const day = remaining / (24*60*60) | 0;
    return day+'일';
}

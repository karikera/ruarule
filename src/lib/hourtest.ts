
const HOUR_TEST_DURATION = 60*60*1000;

const hourTest:(()=>void)[] = [];

export function setHourTest(fn:()=>void):void
{
    hourTest.push(fn);
}

setInterval(async()=>{
    for (const test of hourTest)
    {
        test();
    }
}, HOUR_TEST_DURATION);

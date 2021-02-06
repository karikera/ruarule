
export class Averager
{   
    private readonly samples:number[] = [];
    private total:number = 0;
    private i:number = 0;

    constructor(public readonly count:number)
    {
    }

    put(sample:number):void
    {
        const oldsample = this.samples[this.i];
        if (oldsample) this.total -= oldsample;
        this.total += sample;
        this.samples[this.i] = sample;
        
        this.i = (this.i + 1) % this.count;
    }

    get():number
    {
        return this.total / this.samples.length;
    }
}

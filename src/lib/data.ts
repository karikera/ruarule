
export class LimitedArray<T>
{
    private readonly array:T[] = [];
    private offset:number = 0;

    constructor(private readonly max:number)
    {
    }

    push(value:T):void
    {
        if (this.array.length >= this.max)
        {
            this.array[this.offset++] = value;
            if (this.offset >= this.max)
            {
                this.offset = 0;
            }
        }
        this.array.push(value);
    }

    *values():IterableIterator<T>
    {
        for (let i=this.offset;i<this.max;i++)
        {
            yield this.array[i];
        }
        for (let i=0;i<this.offset;i++)
        {
            yield this.array[i];
        }
    }
}
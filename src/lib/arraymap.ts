
export class ArrayMap<Key, T> extends Map<Key, T[]>
{
    push(key:Key, ...items:T[]):number
    {
        const arr = this.get(key);
        if (arr)
        {
            return arr.push(...items);
        }
        else
        {
            this.set(key, items);
            return items.length;
        }
    }

    pop(key:Key):T|undefined
    {
        const arr = this.get(key);
        if (!arr) return undefined;
        const res = arr.pop();
        if (arr.length === 0) this.delete(key);
        return res;
    }

}
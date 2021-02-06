
export function arraydiff<T>(oldlist:T[], newlist:T[], listener:{added:(item:T)=>void, deleted:(item:T)=>void})
{
    const newset = new Set(newlist);
    for (const olditem of oldlist)
    {
        if (!newset.delete(olditem))
        {
            listener.deleted(olditem);
        }
    }
    for (const newitem of newset)
    {
        listener.added(newitem);
    }
}

import { NativePointer, netevent, PacketId } from "bdsx";

// class User
// {
//     constructor(public readonly name:LogInInfo)
//     {
//     }

//     public startTime:number = Date.now();
//     public time:number = 0;
// }

// class ChatManager extends Event<(name:string, message:string)=>void>
// {
//     /**
//      * -1 = unlimited
//      */
//     public lengthLimit:number = 200;

//     public millisecondsPerCharacters:number = 1000 / 50;
    
//     /**
//      * cost = max(millisecondsPerCharacters * characterCount, minimumCost)
//      * rule: (milliseconds)
//      */
//     public minimumCost:number = 300;

//     private readonly users = new Map<string, ChatUser>();

//     private _getUser(name:string):ChatUser
//     {
//         let user = this.users.get(name);
//         if (user) return user;
//         user = new ChatUser(name);
//         this.users.set(name, user);
//         return user;
//     }

//     private checkCost(user:ChatUser, cost:number):number
//     {
//         const now = Date.now();
//         const spend = now - user.startTime;
//         user.startTime = now;
//         user.time = Math.min(user.time + spend, this.lengthLimit * this.millisecondsPerCharacters);
        
//         if (user.time < cost)
//         {
//             cost = user.time;
//             user.time = 0;
//             return cost;
//         }
//         user.time -= cost;
//         return cost;
//     }

//     private readonly chatlistener = (ptr:NativePointer, ni:string, packetId:PacketId)=>{
//         ptr.move(0x30);
//         const name = ptr.readCxxString();
//         let message = ptr.readCxxString();

//         let cost = (message.length + name.length) * this.millisecondsPerCharacters;
//         if (cost < this.minimumCost) cost = this.minimumCost;

//         this.checkCost(, cost);
//         if (this.lengthLimit !== -1)
//         {
//             if (message.length > this.lengthLimit)
//             {
//                 ptr.move(-0x20);
//                 message = message.substr(0, this.lengthLimit);
//                 ptr.writeCxxString(message);
//             }
//         }
        

//         this.fire(name, message);
//     };

//     constructor()
//     {
//         super();

//         netevent.before(PacketId.Text).on(this.chatlistener);
//     }
// }

// export = new ChatManager;

"use strict";

import Event from "krevent";
import fs = require("fs");
import path = require("path");
export class JsonWatcher<T> {
    private asyncwork:Promise<void> = Promise.resolve();
    private savedTime = 0;
    private mtime = 0;
    public readonly onUpdate = new Event();
    private datastr = '';
    private readonly watcher:fs.FSWatcher;
    public data:T;


    constructor(public readonly filepath:string, public readonly defaultData:T) {
        const filename = path.basename(filepath);
        this.watcher = fs.watch(path.dirname(filepath), (event, who) => {
            if (who !== filename)
                return;
            this.load();
        });
        this.data = defaultData;
        this.load();
    }
    close():void {
        this.watcher.close();
    }
    load():void {
        if (Date.now() <= this.savedTime)
            return;
        this.asyncwork = this.asyncwork
            .then(async()=>{
            try {
                const stat = await fs.promises.stat(this.filepath);
                if (this.mtime === stat.mtimeMs) return;
                this.mtime = stat.mtimeMs;
                const content = await fs.promises.readFile(this.filepath, 'utf-8');
                if (this.datastr === content) return;
                this.datastr = content;
                try {
                    const newdata = JSON.parse(content);
                    this.onUpdate.fire(newdata, this.data);
                    this.data = newdata;
                }
                catch (err) {
                    console.error(err);
                }
            }
            catch (err) {
                if (err.code === 'ENOENT')
                {
                    if (this.mtime !== 0) {
                        this.mtime = 0;
                        this.data = this.defaultData;
                        this.datastr = '';
                        this.onUpdate.fire(this.data, this.data);
                    }
                }
                this.save();
            }
        });
    }
    save():void {
        this.asyncwork = this.asyncwork.then(() => {
            this.savedTime = Date.now() + 500;
            const content = JSON.stringify(this.data, null, 4);
            return fs.promises.writeFile(this.filepath, content);
        }).catch(err => console.error(err));
    }
}
exports.JsonWatcher = JsonWatcher;
//# sourceMappingURL=index.js.map
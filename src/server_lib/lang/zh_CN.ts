
import { freeze } from './freeze';
import { LangId } from './langid';
const lang_data = {
id: "zh_CN" as LangId,
commands:{},
item:{}
};
freeze(lang_data);
export = lang_data;

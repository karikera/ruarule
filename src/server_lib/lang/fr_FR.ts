
import { freeze } from './freeze';
import { LangId } from './langid';
const lang_data = {
id: "fr_FR" as LangId,
commands:{},
item:{}
};
freeze(lang_data);
export = lang_data;

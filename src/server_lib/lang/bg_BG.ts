
import { freeze } from './freeze';
import { LangId } from './langid';
const lang_data = {
id: "bg_BG" as LangId,
commands:{
    "ability_description": "Задава способност на играч.",
    "ability_noability": "Няма налична способност, наречена „%1$s“",
    "ability_granted": "Предоставена ви е способността „%1$s“",
    "ability_revoked": "Отнета ви е способността „%1$s“",
    "ability_success": "Способността е актуализирана",
    "achievement_alreadyHave": "Играчът %1$s вече има постижението %2$s",
    "achievement_description": "Дава или премахва постижение на играч.",
    "achievement_dontHave": "Играчът %1$s няма постижението %2$s",
    "achievement_give_success_all": "Всички постижения са успешно предоставени на %1$s",
    "achievement_give_success_one": "Атрибут %2$s е успешно предоставен на %1$s",
    "achievement_statTooLow": "Играчът %1$s няма атрибута %2$s",
    "achievement_take_success_all": "Всички постижения са успешно отнети от %1$s",
    "achievement_take_success_one": "Атрибутът %1$s е успешно отнет от %2$s",
    "achievement_unknownAchievement": "Неизвестно постижение или статистика „%1$s“",
    "agent_attack_success": "Успешна атака на агента",
    "agent_attack_failed": "Агентът не успя да атакува",
    "agent_collect_success": "Успешно събиране от агента",
    "agent_collect_failed": "Агентът не успя да извърши събиране",
    "agent_createagent_success": "Агентът е създаден",
    "agent_createagent_failed": "Неуспешно създаване на агент",
    "agent_destroy_success": "Агентът разруши блок",
    "agent_destroy_failed": "Неуспешно разрушаване от агента",
    "agent_detect_success": "Успешно откриване от агента",
    "agent_detect_failed": "Агентът не успя да открие",
    "agent_detectredstone_success": "Успешно действие detectredstone на агента",
    "agent_detectredstone_failed": "Неуспешно действие detectredstone на агента",
    "agent_drop_success": "Успешно пускане от агента",
    "agent_drop_failed": "Агентът не успя да извърши пускане",
    "agent_dropall_success": "Успешно действие dropall на агента",
    "agent_dropall_failed": "Неуспешно действие dropall на агента",
    "agent_getitemcount_success": "Успешно действие getitemcount на агента",
    "agent_getitemcount_failed": "Неуспешно действие getitemcount на агента",
    "agent_getitemspace_success": "Успешно действие getitemspace на агента",
    "agent_getitemspace_failed": "Неуспешно действие getitemspace на агента",
    "agent_getitemdetail_success": "Успешно действие getitemdetail на агента",
    "agent_getitemdetail_failed": "Неуспешно действие getitemdetail на агента",
    "agent_getposition_success": "Успешно действие getposition на агента",
    "agent_getposition_failed": "Неуспешно действие getposition на агента",
    "agent_inspect_success": "Успешно инспектиране на агента",
    "agent_inspect_failed": "Агентът не успя да инспектира",
    "agent_inspectdata_success": "Успешно инспектирани данни от агента",
    "agent_inspectdata_failed": "Неуспешно инспектирани данни от агента",
    "agent_move_success": "Успешно преместване на агента",
    "agent_move_failed": "Неуспешно преместване на агент",
    "agent_outofrange": "Командата не може да се изпълни, агентът е извън обхват",
    "agent_place_success": "Успешно поставяне на агент",
    "agent_place_failed": "Неуспешно поставяне на агент",
    "agent_setitem_success": "Агентът успешно постави предмет",
    "agent_setitem_failed": "Агентът не успя да постави предмет",
    "agent_turn_success": "Успешно завъртане на агента",
    "agent_turn_failed": "Неуспешно завъртане на агент",
    "agent_till_success": "Успешно накланяне на агента",
    "agent_till_failed": "Агентът не успя да се наклони",
    "agent_tpagent_description": "Телепортиране на агента.",
    "agent_tpagent_success": "Агентът е телепортиран",
    "agent_tpagent_failed": "Агентът не успя да се телепортира",
    "agent_transfer_success": "Успешно прехвърляне на агента",
    "agent_transfer_failed": "Агентът не успя да се прехвърли",
    "always_day": "Цикъл ден/нощ: %1$s",
    "always_day_locked": "Цикълът ден/нощ е заключен",
    "always_day_unlocked": "Цикълът ден/нощ е отключен",
    "ban_description": "Добавя играч в списъка с бановете.",
    "autocomplete_a": "всички играчи",
    "autocomplete_c": "моят Agent",
    "autocomplete_e": "всички обекти",
    "autocomplete_p": "най-близък играч",
    "autocomplete_r": "произволен играч",
    "autocomplete_s": "мен",
    "autocomplete_v": "всички Agent",
    "ban_failed": "Неуспешен бан на играч %1$s",
    "ban_success": "Играч %1$s е баннат",
    "banip_description": "Добавя IP адрес в списъка с бановете.",
    "banip_invalid": "Въвели сте невалиден IP адрес или това е играч, който не е онлайн",
    "banip_success": "IP адресът %1$s е баннат",
    "banip_success_players": "Баннат е IP адрес %1$s, принадлежащ на %2$s",
    "banlist_ips": "Общо има %1$d баннати IP адреса:",
    "banlist_players": "Общо има %1$d баннати играчи:",
    "blockdata_description": "Променя информационния етикет на блока.",
    "blockdata_placeFailed": "Не можете да поставяте блокове тук",
    "blockdata_destroyFailed": "Не можете да копаете тук",
    "blockdata_failed": "Етикетът за данните не е променен: %1$s",
    "blockdata_notValid": "Целевият блок не е блок, съдържащ данни",
    "blockdata_outOfWorld": "Не може да се променя блок извън света",
    "blockdata_success": "Данните за блока са актуализирани на: %1$s",
    "blockdata_tagError": "Неуспешен анализ на етикета за данните: %1$s",
    "bossbar_add_success": "Създадена е персонализирана лента на бос [%1$s]",
    "bossbar_add_failure_invalid": "Невалиден ИД на лента на бос. ИД трябва да са във формата контейнер за име:ИД или ИД (по подразбиране е контейнер за име на minecraft).",
    "bossbar_add_failure_exists": "Вече съществува лента на бос с ИД „%1$s“",
    "bossbar_description": "Създава и променя лентите на босовете",
    "bossbar_get_max": "Персонализираната лента на бос [%1$s] има максимум %2$d",
    "bossbar_get_players": "Персонализираната лента на бос [%1$s] има %2$s играчи, които са онлайн в момента: %3$s",
    "bossbar_get_players_none": "Персонализираната лента на бос [%1$s] няма играчи, които са онлайн в момента",
    "bossbar_get_players_one": "Персонализираната лента на бос [%1$s] има 1 играч, който в момента е онлайн: %2$s",
    "bossbar_get_value": "Персонализираната лента на бос [%1$s] е със стойност %2$d",
    "bossbar_get_visible_true": "Персонализираната лента на бос [%1$s] се показва в момента",
    "bossbar_get_visible_false": "Персонализираната лента на бос [%1$s] е скрита към момента",
    "bossbar_list": "Има %1$s активни персонализирани ленти на бос: %2$s",
    "bossbar_list_none": "Няма активни персонализирани ленти на бос",
    "bossbar_list_one": "Има 1 активна персонализирана лента на бос: %1$s",
    "bossbar_notFound": "Не съществува лента на бос с ИД „%1$s“",
    "bossbar_remove": "Премахната е персонализирана лента на бос [%1$s]",
    "change_setting_description": "Променя настройка в специализирания сървър, докато той се изпълнява.",
    "change_setting_success": "Настройката %1$s е променена",
    "chunkinfo_compiled": "Отрязъкът е компилиран.",
    "chunkinfo_data": "Първите 64 върха са: %1$s",
    "chunkinfo_empty": "Отрязъкът е празен.",
    "chunkinfo_hasLayers": "Отрязъкът има слоеве: %1$s",
    "chunkinfo_hasNoRenderableLayers": "Отрязъкът няма подлежащи на рендиране слоеве.",
    "chunkinfo_isEmpty": "Отрязъкът има празни слоеве: %1$s",
    "chunkinfo_location": "Местоположение на отрязъка: (%1$d, %2$d, %3$d)",
    "chunkinfo_noChunk": "Не е намерен отрязък на позиция за отрязък %1$d, %2$d, %3$d",
    "chunkinfo_notCompiled": "Отрязъкът не е компилиран.",
    "chunkinfo_notEmpty": "Отрязъкът не е празен.",
    "chunkinfo_vertices": "Буферът на слой %1$s съдържа %2$d върха",
    "classroommode_description": "Опит за стартиране и свързване с „Режим на класна стая“.",
    "classroommode_success": "Опит за стартиране и свързване с „Режим на класна стая“...",
    "clear_description": "Премахва предмети от инвентара на играча.",
    "clear_failure": "Неуспешно изчистване на инвентара от %1$s",
    "clear_failure_no_items": "Неуспешно изчистване на инвентара от %1$s, няма предмети за премахване",
    "clear_success": "Инвентарът е изчистен от %1$s, премахване на %2$d предмета",
    "clear_tagError": "Неуспешен анализ на етикета за данните: %1$s",
    "clear_testing": "%1$s има %2$d предмета, които отговарят на критериите",
    "clearfixedinv_description": "Премахва всички фиксирани слотове в инвентара.",
    "clearfixedinv_success": "Фиксираният инвентар е изчистен",
    "clone_description": "Клонира блокове от един регион в друг.",
    "clone_failed": "Няма клонирани блокове",
    "clone_filtered_error": "Филтрираната употреба изисква указване на филтър за блокове",
    "clone_noOverlap": "Източникът и дестинацията не могат да се припокриват",
    "clone_outOfWorld": "Не може да се осъществи достъп до блокове извън света",
    "clone_success": "Клонирани са %1$d блока",
    "clone_tooManyBlocks": "Твърде много блокове в указаната зона (%1$d > %2$d)",
    "closechat_description": "Затваря прозореца за чат на локалния играч, ако е отворен.",
    "closechat_success": "Чатът е затворен",
    "closechat_failure": "Чатът не беше отворен",
    "closewebsocket_description": "Затваря връзка websocket, ако има такава.",
    "code_description": "Стартира Code Builder.",
    "code_success": "Code Builder е стартиран.",
    "compare_failed": "Източникът и дестинацията не са еднакви",
    "compare_outOfWorld": "Не може да се осъществи достъп до блокове извън света",
    "compare_success": "Сравнени са %1$d блока",
    "compare_tooManyBlocks": "Твърде много блокове в указаната зона (%1$d > %2$d)",
    "corruptworld_description": "Поврежда света, зареден на сървъра.",
    "corruptworld_success": "Успешно повреждане на света",
    "daylock_description": "Заключва и отключва цикъла ден/нощ.",
    "debug_description": "Започва или спира сесия за отстраняване на грешки.",
    "debug_notStarted": "Не можем да спрем профилирането, когато още не сме го стартирали!",
    "debug_start": "Стартирано е профилиране за отстраняване на грешки",
    "debug_stop": "Профилирането за отстраняване на грешки е спряно след %.2f секунди (%1$d тика)",
    "defaultgamemode_description": "Задава режима на игра по подразбиране.",
    "defaultgamemode_success": "Режимът на игра по подразбиране за света сега е %1$s",
    "deop_description": "Отменя състояние на оператор от играч.",
    "deop_failed": "Операторските права не могат да бъдат премахнати (нивото на разрешения е твърде високо): %s",
    "deop_success": "Премахнати права на оператор: %s",
    "deop_message": "Отнети са ви правата на оператор",
    "difficulty_description": "Задава ниво на трудност.",
    "difficulty_usage": "/difficulty <нова трудност>",
    "difficulty_success": "Задаване на сложност на играта на %1$s",
    "downfall_success": "Валежите са включени",
    "effect_description": "Добавяне или премахване на ефекти на състоянието.",
    "effect_failure_notActive": "Неуспешно премахване на %1$s от играч %2$s, тъй като той няма ефекта",
    "effect_failure_notActive_all": "Неуспешно премахване на ефекти от играч %1$s, тъй като той няма ефекти",
    "effect_failure_notAMob": "%1$ не може да има ефекти",
    "effect_notFound": "Не съществува ефект на моб с ИД %s",
    "effect_success": "Предоставен ефект %1$s * %2$d на %3$s за %4$d секунди",
    "effect_success_removed": "Отнет е ефект %1$s от %2$s",
    "effect_success_removed_all": "Отнети са всички ефекти от %1$s",
    "enchant_cantCombine": "%1$s не може да се комбинира с %2$s",
    "enchant_invalidLevel": "%1$s не поддържа ниво %2$d",
    "enchant_cantEnchant": "Избраният магичен ефект не може да се добави към целевия предмет: %1$s",
    "enchant_description": "Добавя магичен ефект към избран от играча предмет.",
    "enchant_noItem": "Целта не съдържа предмет: %1$s",
    "enchant_notFound": "Не съществува магичен ефект с ИД %1$d",
    "enchant_success": "Омагьосването е успешно за %1$s",
    "entitydata_description": "Променя етикета за данни на обект.",
    "entitydata_failed": "Етикетът за данните не е променен: %1$s",
    "entitydata_noPlayers": "%1$s е играч и не може да се променя",
    "entitydata_success": "Данните за обекта са актуализирани на: %1$s",
    "entitydata_tagError": "Неуспешен анализ на етикета за данните: %1$s",
    "execute_allInvocationsFailed": "Всички призовавания са неуспешни: „%1$s“",
    "execute_failed": "Неуспешно изпълнение на „%1$s“ като %2$s",
    "execute_description": "Изпълнява команда от името на един или няколко обекта.",
    "fill_description": "Запълва всички или части от регион с определен блок.",
    "fill_failed": "Не са запълнени блокове",
    "fill_outOfWorld": "Не може да се поставят блокове извън света",
    "fill_success": "Запълнени са %1$d блока",
    "fill_tagError": "Неуспешен анализ на етикета за данните: %1$s",
    "fill_tooManyBlocks": "Твърде много блокове в указаната зона (%1$d > %2$d)",
    "fill_replace_auxvalue_invalid": "Невалидна стойност на данни за замяна на блок %1$s",
    "function_description": "Изпълнява команди, намиращи се в съответния файл с функции.",
    "function_functionNameNotFound": "Функцията %1$s не е намерена.",
    "function_invalidCharacters": "Функцията със заглавие „%s“ е невалидна, символът „%s“ не е позволен в имена на функции.",
    "function_noEngineVersionSpecified": "Функцията %s не може да се изпълни. Трябва да определите min_engine_version в manifest.json на пакета с поведения.",
    "function_success": "Успешно изпълнени %1$d въведени функции.",
    "gamemode_description": "Задава режима на игра на даден играч.",
    "gamemode_success_other": "Режимът на игра на %2$s е зададен на %1$s",
    "gamemode_success_self": "Задаване на собствения режим на игра на %1$s",
    "gamemode_fail_invalid": "Режимът на игра „%1$s“ е невалиден",
    "gamerule_description": "Задава или подава заявка за стойност на правило за игра.",
    "gamerule_type_invalid": "Невалиден тип е използван за правило за игра „%1$s“",
    "gamerule_type_nocheatsenabled": "Правило на игра „%1$s“ може да се използва само ако са разрешени чийтовете в този свят.",
    "gamerule_nopermission": "Само собствениците на сървъра могат да променят „%1$s“",
    "gamerule_norule": "Няма налично правило за игра „%1$s“",
    "gamerule_success": "Правилото за игра „%1$s“ е актуализирано на %2$s",
    "generic_async_initiated": "Стартирана е команда „%1$s“ (асинхронна стъпка %2$d)",
    "generic_boolean_invalid": "„%1$s“ не е нито true, нито false",
    "generic_chunk_notFound": "Указаният отрязък не е намерен",
    "generic_componentError": "Анализирането на списъка с компоненти е неуспешно",
    "generic_dimension_notFound": "Указаното измерение не е намерено",
    "generic_disabled": "Чийтовете не са разрешени на това ниво.",
    "generic_disabled_templateLocked": "Настройките в момента са заключени. Отключете опциите за шаблон на свят от менюто с настройки на играта, за да ги промените.",
    "generic_double_tooBig": "Въведеното от вас число (%.2f) е твърде голямо, трябва да е най-много %.2f",
    "generic_double_tooSmall": "Въведеното от вас число (%.2f) е твърде малко, трябва да е най-малко %.2f",
    "generic_duplicateType": "Дублиране на аргументи за тип",
    "generic_duplicateSelectorArgument": "Дублиране на %s аргументи за селектор",
    "generic_encryption_badkey": "Въведен е неправилен публичен ключ. Очаква се 120-байтов ключ след форматиране PEM.",
    "generic_encryption_badsalt": "Въведена е неправилна случайна стойност. Очаква се 16-байтова стойност преди кодиране base64.",
    "generic_encryption_required": "Изисква се шифрована сесия",
    "generic_entity_invalidType": "Типът обект „%1$s“ е невалиден",
    "generic_entity_invalidUuid": "Предоставеният UUID на обекта е с невалиден формат",
    "generic_entity_notFound": "Обектът не може да бъде намерен",
    "generic_exception": "Възникна неизвестна грешка при опит за изпълнение на тази команда",
    "generic_invalidAgentType": "Аргумент за тип е приложен на селектор само за Agent",
    "generic_invalidcontext": "Невалиден контекст е предоставен за даден тип команда",
    "generic_invalidDevice": "Командата, която въведохте, %s, не се поддържа на това устройство",
    "generic_invalidPlayerType": "Аргумент за тип е приложен на селектор само за играч",
    "generic_invalidType": "Неизвестен аргумент за тип",
    "generic_levelError": "Максималното ниво трябва да е по-голямо от минималното ниво",
    "generic_malformed_body": "Тялото липсва или е повредено",
    "generic_malformed_type": "Невалиден тип заявка",
    "generic_notimplemented": "Не е приложено",
    "generic_num_invalid": "„%1$s“ не е валиден номер",
    "generic_num_tooBig": "Въведеното от вас число (%1$d) е твърде голямо, трябва да е най-много %2$d",
    "generic_num_tooSmall": "Въведеното от вас число (%1$d) е твърде малко, трябва да е най-малко %2$d",
    "generic_parameter_invalid": "„%1$s“ не е валиден параметър",
    "generic_permission_selector": "<недостатъчни разрешения за разширяване на селектора>",
    "generic_player_notFound": "Този играч не може да бъде намерен",
    "generic_protocol_mismatch": "Предоставената версия на протокола не съвпада с версията на протокола на Minecraft",
    "generic_radiusError": "Минималният радиус на селектора трябва да е по-малък от максималния",
    "generic_radiusNegative": "Радиусът не може да бъде отрицателен",
    "generic_rotationError": "Завъртането е извън обхват",
    "generic_running": "Командата вече се изпълнява",
    "generic_step_failed": "Неуспешна стъпка от команда",
    "generic_syntax": "Грешка със синтаксиса: Неочакван \"%2$s\": at \"%1$s>>%2$s<<%3$s\"",
    "generic_noTargetMatch": "Няма цели, съвпадащи със селектора",
    "generic_targetNotPlayer": "Селекторът трябва да е тип играч",
    "generic_tooManyNames": "Твърде много аргументи за имена на цел",
    "generic_tooManyTargets": "Твърде много цели съвпадат със селектора",
    "generic_too_many_requests": "Заявени са твърде много команди, изчакайте завършването на една от тях",
    "generic_unknown": "Неизвестна команда: %s. Проверете дали командата съществува и дали имате разрешение да я използвате.",
    "generic_usage": "Употреба: %1$s",
    "generic_usage_noparam": "Употреба:",
    "generic_version_mismatch": "Заявената версия не съществува за тази команда",
    "generic_version_missing": "Извиквания на команди, които не са от чат, трябва да указват версията на командата",
    "getchunkdata_description": "Извежда пиксели за определен отрязък.",
    "getchunkdata_success": "Данните за отрязъка са получени",
    "getchunks_description": "Извежда списък със заредените отрязъци.",
    "getchunks_success": "Списъкът с отрязъци е получен",
    "getlocalplayername_description": "Връща локалното име на играча.",
    "getspawnpoint_description": "Извежда позицията на появяване на указан(и) играч(и).",
    "gettopsolidblock_description": "Извежда позицията на най-горния не-въздушен блок под зададената позиция",
    "gettopsolidblock_notfound": "Няма солидни блокове под зададената позиция",
    "give_block_notFound": "Не съществува блок с име %1$d",
    "give_description": "Дава предмет на играч.",
    "give_item_invalid": "Невалиден синтаксис на командата: %s не съществува с тази стойност на данните",
    "give_item_notFound": "Не съществува предмет с име %1$d",
    "give_map_invalidData": "Предоставени са невалидни данни от картата",
    "give_map_featureNotFound": "Изследователска карта не може да бъде създадена. Функцията не е намерена в това измерение",
    "give_success": "Предоставен ефект %1$s * %2$d на %3$s",
    "give_successRecipient": "Получихте %1$s * в %2$d броя",
    "give_tagError": "Неуспешен анализ на етикета за данните: %1$s",
    "help_description": "Предоставя помощ/списък с команди.",
    "help_footer": "Съвет: Използвайте клавиша <tab>, докато въвеждате команда, за автоматично довършване на командата или аргументите й",
    "help_header": "--- Показване на страница за помощ %1$d от %2$d (/help <страница>) ---",
    "help_command_aliases": "%s (също %s):",
    "immutableworld_description": "Указва неизменното състояние на света.",
    "immutableworld_info": "immutableworld = %s",
    "kick_description": "Изхвърля играч от сървъра.",
    "kick_description_edu": "Премахва играч от играта.",
    "kick_not_found": "Не е открит играч %1$s",
    "kick_not_yourself": "Не може да премахнете себе си от играта",
    "kick_success": "Изхвърлихте %1$s от играта",
    "kick_success_reason": "Изхвърлихте %1$s от играта: „%2$s“",
    "kick_success_reasonedu": "%1$s е премахнат от играта: „%2$s“",
    "kick_no_host": "Домакинът не може да бъде изхвърлен от играта.",
    "kick_no_teacher": "Преподавателите не може да бъдат премахнати от играта.",
    "kill_successful_edu": "Премахнато %1$s",
    "kill_successful": "Убихте %1$s",
    "kill_description_edu": "Премахва обекти (играчи, мобове и т.н.).",
    "kill_description": "Убива обекти (играчи, мобове и т.н.).",
    "list_description": "Изброява в списък играчите в сървъра.",
    "locate_description": "Показва координатите за най-близката структура от даден тип.",
    "locate_fail_noplayer": "Командата може да се използва само от валиден играч",
    "locate_fail_nostructurefound": "Не е открита валидна структура в това измерение",
    "locate_success": "%1$s най-близо е при блок %2$s, (y?), %3$s",
    "togglecontentlog_toggle": "Разрешава/забранява командата за регистрационния файл за съдържание",
    "togglecontentlog_enabled": "Регистрационният файл за съдържание е разрешен",
    "togglecontentlog_disabled": "Регистрационният файл за съдържание е забранен",
    "me_description": "Показва съобщение за вас.",
    "message_display_incoming": "%1$s ви пошепна: %2$s",
    "message_display_outgoing": "Пошепнахте на %1$s: %2$s",
    "message_sameTarget": "Не можете да изпратите лично съобщение до себе си!",
    "mixer_description": "Контрол на интерактивността на Mixer",
    "mixer_error_unknown": "Възникна неизвестна грешка с Mixer.",
    "mixer_error_notoken": "Необходимо е да сте влезли с акаунт в Microsoft, за да разрешите интерактивността на Mixer.",
    "mixer_error_notsupported": "Устройството, което използвате, не поддържа интерактивността на Mixer.",
    "mixer_interactive_error": "Възникна грешка с Mixer: %1$s",
    "mixer_scene_failed": "Не съществува сцена с име %1$s. Уверете се, че сте въвели името на сцената правилно.",
    "mixer_scene_success": "Сцената е променена на: %1$s",
    "mixer_start_success": "Стартиране на интерактивност на Mixer: %1$s",
    "mixer_start_fail_invalidCode": "Не е намерен проект с ИД „%1$s“. Уверете се, че ИД или кодът за споделяне са правилни.",
    "mixer_stop_success": "Интерактивността на Mixer е спряна.",
    "mixer_stop_fail": "Няма сесия на интерактивност за спиране.",
    "mixer_status_notinitialized": "Интерактивността не е инициализирана.",
    "mixer_status_enabled": "Интерактивността е разрешена.",
    "mixer_status_initializing": "Интерактивността се инициализира.",
    "mixer_status_pending": "Интерактивността е в процес на изчакване.",
    "mixer_status_disabled": "Интерактивността е забранена.",
    "mixer_activatedbutton": "%1$s активира %2$s.",
    "mobevent_description": "Контролира какви събития на мобове имат право да управляват.",
    "mobevent_eventsEnabledSetToTrue": "Събитията с мобове вече са активирани. Индивидуалните събития, зададени като грешни, няма да се изпълнят.",
    "mobevent_eventsEnabledSetToFalse": "Събитията с мобове вече са деактивирани. Индивидуалните събития няма да се изпълнят.",
    "mobevent_eventsEnabledIsTrue": "Събитията с мобове са активирани. Индивидуалните събития, зададени като грешни, няма да се изпълнят.",
    "mobevent_eventsEnabledIsFalse": "Събитията с мобове са деактивирани. Индивидуалните събития няма да се изпълнят.",
    "mobevent_eventSetToTrue": "Събитието с моб %s (ид: %s) е зададено да е вярно.",
    "mobevent_eventSetToTrueButEventsDisabled": "Събитието с моб %s (ид: %s) е зададено да е вярно, но индивидуалните събития няма да се изпълнят.",
    "mobevent_eventSetToFalse": "Събитието с моб %s (ид: %s) е зададено да е грешно.",
    "mobevent_eventIsTrue": "Събитието с моб %s (ид: %s) е зададено да е вярно.",
    "mobevent_eventIsTrueButEventsDisabled": "Събитието с моб %s (ид: %s) е зададено да е вярно, но събитията с мобове са деактивирани.",
    "mobevent_eventIsFalse": "Събитието с моб %s (ид: %s) е зададено да е грешно.",
    "op_description": "Предоставя статут на оператор на даден играч.",
    "op_failed": "Неуспешно предоставяне на права на оператор (вече има права на оператор или по-високо ниво): %s",
    "op_success": "Дадени права на оператор: %s",
    "op_message": "Получихте права на оператор",
    "origin_commandblock": "Команден блок",
    "origin_external": "Външен",
    "origin_devconsole": "DevConsole",
    "origin_script": "Script Engine",
    "origin_server": "Сървър",
    "origin_teacher": "Преподавател",
    "ops_description": "Зарежда отново разрешенията за права на оператор и ги прилага.",
    "ops_reloaded": "Правата на оператор са заредени отново от файл.",
    "ops_set_success": "Успешно задаване на ниво оператор за играч %s.",
    "permissions_description": "Зарежда отново разрешенията и ги прилага.",
    "permissions_reloaded": "Разрешенията са заредени отново от файл.",
    "permissions_set_failed": "Неуспешно задаване на ниво на разрешение %s за играч %s.",
    "permissions_set_success": "Успешно задаване на ниво на разрешение %s за играч %s.",
    "permissions_save_failed": "Неуспешно записване на ниво на разрешение %s за играч %s.",
    "permissions_save_success": "Успешно записване на ниво на разрешение %s за играч %s.",
    "spawnParticleEmitter_description": "Създава излъчвател на частици",
    "particle_description": "Създава частици.",
    "particle_notFound": "Неизвестно име на ефект (%1$s)",
    "particle_success": "Изпълнение на ефект %1$s %2$d пъти",
    "players_list": "Има %1$d/%2$d играчи онлайн:",
    "players_list_names": "%s",
    "playsound_description": "Издава звук.",
    "playsound_playerTooFar": "Играчът %1$s е твърде далече, за да чуе звука",
    "playsound_success": "Изпълнен е звук „%1$s“ за %2$s",
    "position_description": "Включва/изключва координати за играч.",
    "publish_failed": "Неуспешно хостване на локална игра",
    "publish_started": "Локалната игра е хоствана на порт %1$s",
    "querytarget_description": "Получава информация за трансформация, име и ИД за целевия обект или обекти.",
    "querytarget_success": "Данни за целта: %1$s",
    "reload_description": "Зарежда повторно всички файлове с функции от всички пакети с поведения.",
    "reload_success": "Съществуващите файлове с функции са заредени повторно. Рестартирайте Minecraft, за да заредите повторно НОВИ функции.",
    "replaceitem_description": "Заменя предмети в инвентарите.",
    "replaceitem_failed": "Неуспешно заменяне на слот %s %d с %d * %s",
    "replaceitem_keepFailed": "Вече има елемент, заемащ %s слот %d.",
    "replaceitem_noContainer": "Блокът на %s не е контейнер",
    "replaceitem_badSlotNumber": "Неуспешно заместване на слот %d, необходима е стойност между %d и %d.",
    "replaceitem_success": "Слот %s %d е заменен с %d * %s",
    "replaceitem_success_entity": "Заменен е %s слот %d от %s с %d * %s",
    "replaceitem_tagError": "Неуспешен анализ на етикета за данните: %1$s",
    "save_description": "Контрол или проверка на това как играта записва данни на диска.",
    "save_disabled": "Автоматичното записване на светове е изключено",
    "save_enabled": "Автоматичното записване на светове е включено",
    "save_failed": "Неуспешно записване: %1$s",
    "save_start": "Записване...",
    "save_success": "Светът е записан",
    "save_all_error": "Възникна грешка при опит за поставяне на съхранението на нивото на пауза.",
    "save_all_success": "Данните са записани. Сега файловете са готови за копиране.",
    "save_off_alreadyOff": "Записването вече е изключено.",
    "save_on_alreadyOn": "Записването вече е включено.",
    "save_on_notDone": "Предишен запис не е завършен.",
    "save_on_description": "Разрешава автоматичните записвания на сървъра.",
    "save_on_success": "Промените по нивото са възобновени.",
    "save_state_description": "Проверява дали предишен цялостен запис е завършен и изброява включените в процеса файлове.",
    "say_description": "Изпраща съобщение в чата до други играчи.",
    "scoreboard_description": "Проследява и показва резултати за различни цели.",
    "scoreboard_allMatchesFailed": "Всички съвпадения са неуспешни",
    "scoreboard_noMultiWildcard": "Разрешен е само един потребител с нестандартно състояние",
    "scoreboard_objectiveNotFound": "Не е открита цел с името „%1$s“",
    "scoreboard_objectiveReadOnly": "Целта „%1$s“ е само за четене и не може да бъде задавана",
    "scoreboard_objectives_add_alreadyExists": "Вече съществува цел с името „%1$s“",
    "scoreboard_objectives_add_displayTooLong": "Показваното име „%1$s“ е прекалено дълго за цел. Може да бъде най-много %2$d символа",
    "scoreboard_objectives_add_success": "Успешно е добавена нова цел „%1$s“",
    "scoreboard_objectives_add_tooLong": "Името „%1$s“ е прекалено дълго за цел. Може да бъде най-много %2$d символа",
    "scoreboard_objectives_add_wrongType": "Невалиден тип критерий за цел „%1$s“",
    "scoreboard_objectives_add_needName": "Целта се нуждае от име.",
    "scoreboard_objectives_description": "Промяна на целите на таблото с резултати.",
    "scoreboard_objectives_list_count": "Показване на %1$d цел(и) на таблото с резултати:",
    "scoreboard_objectives_list_empty": "Няма цели на таблото с резултати",
    "scoreboard_objectives_list_entry": "- %1$s: показва се като „%2$s“ и е от тип „%3$s“",
    "scoreboard_objectives_remove_success": "Целта „%1$s“ е премахната успешно",
    "scoreboard_objectives_setdisplay_invalidSlot": "Не съществува слот за показване „%1$s“",
    "scoreboard_objectives_setdisplay_successCleared": "Слотът за показване на цел „%1$s“ е изчистен",
    "scoreboard_objectives_setdisplay_successSet": "Задаване на показвана цел в слот „%1$s“ на „%2$s“",
    "scoreboard_players_add_success": "Добавено %1$d към [%2$s] за %3$s (вече %4$d)",
    "scoreboard_players_add_multiple_success": "Добавено %1$d към [%2$s] за %3$d играчи",
    "scoreboard_players_nameNotFound": "Трябва да бъде зададено име на играча.",
    "scoreboard_players_enable_noTrigger": "Целта %1$s не е активатор",
    "scoreboard_players_enable_success": "Активаторът %1$s е разрешен за %2$s",
    "scoreboard_players_list_count": "Показване на %1$d проследявани играчи на таблото с резултати:",
    "scoreboard_players_list_empty": "Няма проследявани играчи на таблото с резултати",
    "scoreboard_players_list_player_count": "Показване на %1$d проследявана(ни) цел(и) за %2$s:",
    "scoreboard_players_list_player_empty": "Играчът %1$s няма записани резултати",
    "scoreboard_players_list_player_entry": "- %2$s: %1$d (%3$s)",
    "scoreboard_players_operation_invalidOperation": "Невалидна операция %1$s",
    "scoreboard_players_operation_notFound": "Не е открит резултат %1$s за %2$s",
    "scoreboard_players_operation_success": "Актуализирано [%1$s] за %2$d играчи",
    "scoreboard_players_offlinePlayerName": "Играч офлайн",
    "scoreboard_players_random_invalidRange": "Минимално %1$d не е по-малко от максимално %2$d",
    "scoreboard_players_remove_success": "Премахнато %1$d от [%2$s] за %3$s (вече %4$d)",
    "scoreboard_players_remove_multiple_success": "Премахнато %1$d от [%2$s] за %3$d играчи",
    "scoreboard_players_reset_success": "Нулиране на резултатите на играч %1$s",
    "scoreboard_players_resetscore_success": "Нулиране на резултат %1$s на играч %2$s",
    "scoreboard_players_set_success": "Зададено [%1$s] за %2$s на %3$d",
    "scoreboard_players_set_multiple_success": "Зададено [%1$s] за %2$d играчи на %3$d",
    "scoreboard_players_set_tagError": "Неуспешен анализ на dataTag, причина: %1$s",
    "scoreboard_players_set_tagMismatch": "dataTag няма съвпадение за %1$s",
    "scoreboard_players_score_notFound": "Не е открит резултат %1$s за %2$s",
    "scoreboard_players_test_failed": "Резултатът %1$d НЕ е в обхвата от %2$d до %3$d",
    "scoreboard_players_test_success": "Резултатът %1$d е в обхвата от %2$d до %3$d",
    "scoreboard_teamNotFound": "Не е открит отбор с името „%1$s“",
    "scoreboard_teams_add_alreadyExists": "Вече съществува отбор с името „%1$s“",
    "scoreboard_teams_add_displayTooLong": "Показваното име „%1$s“ е твърде дълго за отбор, трябва да е дълго най-много %2$d знака",
    "scoreboard_teams_add_success": "Успешно е добавен нов отбор „%1$s“",
    "scoreboard_teams_add_tooLong": "Името „%1$s“ е твърде дълго за отбор, трябва да е дълго най-много %2$d знака",
    "scoreboard_teams_empty_alreadyEmpty": "Отборът %1$s вече е празен, не може да се премахват несъществуващи играчи",
    "scoreboard_teams_empty_success": "Успешно премахване на %1$d играч(и) от отбор %2$s",
    "scoreboard_teams_join_failure": "Неуспешно добавяне на %1$d играч(и) в отбор %2$s: %3$s",
    "scoreboard_teams_join_success": "Успешно добавяне на %1$d играч(и) в отбор %2$s: %3$s",
    "scoreboard_teams_leave_failure": "Неуспешно премахване на %1$d играч(и) от отборите им: %2$s",
    "scoreboard_teams_leave_noTeam": "Не сте в отбор",
    "scoreboard_teams_leave_success": "Успешно премахване на %1$d играч(и) от отборите им: %2$s",
    "scoreboard_teams_list_count": "Показване на %1$d отбора на таблото с резултати:",
    "scoreboard_teams_list_empty": "Няма отбори, регистрирани на таблото с резултати",
    "scoreboard_teams_list_entry": "- %1$s: „%2$s“ има %3$d играчи",
    "scoreboard_teams_list_player_count": "Показване на %1$d играч(и) в отбор %2$s:",
    "scoreboard_teams_list_player_empty": "Отбор %1$s няма играчи",
    "scoreboard_teams_list_player_entry": "- %2$s: %1$d (%3$s)",
    "scoreboard_teams_option_noValue": "Валидни стойности за опцията %1$s са: %2$s",
    "scoreboard_teams_option_success": "Задаване на опция %1$s за отбор %2$s на %3$s",
    "scoreboard_teams_remove_success": "Отбор %1$s е премахнат",
    "seed_success": "Семе: %1$s",
    "setblock_description": "Променя един блок в друг блок.",
    "setblock_failed": "Неуспешно поставяне на блок",
    "setblock_noChange": "Блокът не може да бъде поставен",
    "setblock_notFound": "Не съществува блок с ИД/име %1$s",
    "setblock_outOfWorld": "Не може да се поставя блок извън света",
    "setblock_success": "Блокът е поставен",
    "setblock_tagError": "Неуспешен анализ на етикета за данните: %1$s",
    "setidletimeout_success": "Времето на изчакване в готовност е успешно зададено на %1$d минути.",
    "setfixedinvslots_description": "Задава броя фиксирани слотове на инвентара за сървъра.",
    "setfixedinvslots_success": "Броят фиксирани слотове на инвентара е зададен на %1$d",
    "setfixedinvslot_description": "Задава фиксиран слот за указан предмет.",
    "setfixedinvslot_success": "Фиксиран слот на инвентара %1$d е зададен на %2$s",
    "globalpause_description": "Задава или поставя на пауза на състоянието на играта за всички играчи.",
    "globalpause_success": "Задаване или поставяне на състоянието на пауза",
    "setmaxplayers_description": "Задайте максимален брой играчи за тази сесия.",
    "setmaxplayers_success": "Задаване на максималния брой играчи на %1$d.",
    "setmaxplayers_success_upperbound": "(Обвързан с максималния брой разрешени връзки)",
    "setmaxplayers_success_lowerbound": "(Обвързан с настоящия брой играчи)",
    "setworldspawn_description": "Задава точката на появяване в света.",
    "setworldspawn_success": "Задаване на точката на появяване в света на (%1$d, %2$d, %3$d)",
    "setworldspawn_wrongDimension": "Точката на появяване на света не може да бъде зададена в това измерение",
    "spawnpoint_success_single": "Задаване на точката на появяване на %1$s на (%2$d, %3$d, %4$d)",
    "spawnpoint_description": "Задава точката на появяване за даден играч.",
    "spawnpoint_success_multiple_specific": "Задаване на точката на появяване за %1$s на (%2$d, %3$d, %4$d)",
    "spawnpoint_success_multiple_generic": "Задаване на точката на появяване за %1$s",
    "spawnpoint_wrongDimension": "Точката на появяване не може да бъде зададена в това измерение",
    "spreadplayers_description": "Телепортира обекти до произволни местоположения.",
    "spreadplayers_failure_players": "Неуспешно разпределяне на %1$s играчи по %2$s,%3$s (твърде много играчи за указаното място – пробвайте да разпределите най-много %4$s)",
    "spreadplayers_failure_teams": "Неуспешно разпределяне на %1$s отбора по %2$s,%3$s (твърде много играчи за указаното място – пробвайте да разпределите най-много %4$s)",
    "spreadplayers_info_players": "(Средното разстояние между играчите е на %1$s блока след %2$s итерации)",
    "spreadplayers_info_teams": "(Средното разстояние между отборите е на %1$s блока след %2$s итерации)",
    "spreadplayers_spreading_players": "Разпределяне на %2$s блока на %1$s играчи по %3$s,%4$s (най-малко на %5$s блока разстояние)",
    "spreadplayers_spreading_teams": "Разпределяне на %1$s отбора на %2$s блока разстояние по %3$s,%4$s (най-малко на %5$s блока разстояние)",
    "spreadplayers_success_players": "Успешно разпределяне на %1$s играчи по %2$s,%3$s",
    "spreadplayers_success_teams": "Успешно разпределяне на %1$s отбора по %2$s,%3$s",
    "stats_cleared": "Атрибутите от %1$s са изчистени",
    "stats_failed": "Невалидни параметри",
    "stats_noCompatibleBlock": "Блокът на %1$d, %2$d, %3$d не може да проследява атрибути",
    "stats_success": "Съхраняване на атрибутите на %1$s в %2$s на %3$s",
    "stop_description": "Спира сървъра.",
    "stop_start": "Спиране на сървъра",
    "stopsound_description": "Спира звук.",
    "stopsound_success": "Спрян звук %s за %s",
    "stopsound_success_all": "Всички звуци за %s са спрени",
    "summon_description": "Призовава обект.",
    "summon_failed": "Неуспешно призоваване на обект",
    "summon_outOfWorld": "Не е възможно призоваването на обект извън света",
    "summon_success": "Обектът е призован успешно",
    "summon_tagError": "Неуспешен анализ на етикета за данните: %1$s",
    "tag_description": "Управлява тагове, запазени в обекти.",
    "tag_add_failed": "Целта вече има този таг или има прекалено много тагове",
    "tag_add_success_single": "Добавен таг '%1$s' към %2$s",
    "tag_add_success_multiple": "Добавен таг '%1$s' към %2$d обекта",
    "tag_list_single_empty": "%s няма тагове",
    "tag_list_single_success": "%1$s има %2$d тага: %3$s",
    "tag_list_multiple_empty": "Няма тагове на обектите %d",
    "tag_list_multiple_success": "Обектите %1$d имат общо %2$d тага: %3$s",
    "tag_remove_failed": "Целта няма този таг",
    "tag_remove_success_single": "Премахнат таг '%1$s' от %2$s",
    "tag_remove_success_multiple": "Премахнат таг '%1$s' от %2$d обекта",
    "tell_description": "Изпраща лично съобщение до един или повече играчи.",
    "tellraw_description": "Изпраща JSON съобщение до играчи.",
    "tellraw_jsonException": "Невалиден json: %1$s",
    "tellraw_jsonStringException": "Невалидни данни за низ json.",
    "tellraw_error_noData": "Няма предоставени данни.",
    "tellraw_error_notArray": "Обектът Rawtext трябва да съдържа масив. Пример: \"rawtext\":[{..}]",
    "tellraw_error_textNotString": "текстовото поле в rawtext трябва да съдържа низ. Пример: \"rawtext\":[{\"text\": \"text to display\"}]",
    "tellraw_error_translateNotString": "полето за превод в rawtext трябва да съдържа езиков ключ. Пример: \"rawtext\":[{\"translate\": \"gui.ok\"}]",
    "tellraw_error_withNotArrayOrRawText": "с поле в rawtext трябва да съдържа масив или друг обект на rawtext. Пример 1: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\": [ \"value1\", \"value2\" ]}]  Пример 2: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\":{\"rawtext\":[{\"text\": \"value1\"}, {\"text\": \"value2\"}]}}]",
    "tellraw_error_itemIsNotObject": "стойността Json в масива на rawtext не е обект. Пример: \"rawtext\": [{ \"text\" : \"my text\" }]",
    "educlientinfo_description": "Получаване на клиентския ИД и състоянието на хоста. Предназначено за CM.",
    "testfor_description": "Преброява обекти (играчи, мобове, предмети и т.н.), отговарящи на конкретни условия.",
    "testfor_failure": "%1$s не съвпадна с изискваната структура на данните",
    "testfor_success": "Открито е %1$s",
    "testfor_tagError": "Неуспешен анализ на етикета за данните: %1$s",
    "testforblock_description": "Тества дали определен блок е на определено местоположение.",
    "testforblock_failed_data": "Блокът на %1$d,%2$d,%3$d не съвпадна с очакваното състояние на блока.",
    "testforblock_failed_nbt": "Блокът на %1$d,%2$d,%3$d нямаше необходимите NBT ключове.",
    "testforblock_failed_tile": "Блокът на %1$d,%2$d,%3$d е %4$s (очакваше се: %5$s).",
    "testforblock_failed_tileEntity": "Блокът на %1$d,%2$d,%3$d не е обект на плочка и не може да поддържа съпоставяне на етикети.",
    "testforblock_outOfWorld": "Не може да се тества блок извън света",
    "testforblock_success": "Блокът на %1$d,%2$d,%3$d е открит успешно.",
    "testforblocks_description": "Тества дали блоковете в два региона съвпадат.",
    "tickingarea_description": "Добавяне, премахване или изброяване на зони с активни тикове.",
    "tickingarea_inuse": "Използват се %1$d/%2$d зони с активни тикове.",
    "tickingarea_noneExist_currentDimension": "Не съществуват зони с активни тикове в настоящото измерение.",
    "tickingarea_add_bounds_success": "Добавена е зона с активни тикове от %1$d до %2$d.",
    "tickingarea_add_circle_success": "Добавена е зона с активни тикове, центрирана на %1$d с радиус от %2$d отрязъка.",
    "tickingarea_add_failure": "Достигнат е максималният брой зони с активни тикове (%1$d). Не могат да бъдат добавени повече зони с активни тикове.",
    "tickingarea_add_conflictingname": "Зона с активни тикове с името %1$s вече съществува.",
    "tickingarea_add_chunkfailure": "Зоната с активни тикове съдържа повече от %1$d отрязъка, зоната с активни тикове е прекалено голяма и не може да бъде създадена.",
    "tickingarea_add_radiusfailure": "Радиусът не може да бъде по-голям от %1$d, зоната с активни тикове е твърде голяма и не може да бъде създадена.",
    "tickingarea_remove_success": "Извършено е премахване на зона/зони с активни тикове",
    "tickingarea_remove_failure": "Не съществуват зони с активни тикове, съдържащи позиция на блок %1$d в настоящото измерение.",
    "tickingarea_remove_byname_failure": "Не съществуват зони с активни тикове с името %1$s в настоящото измерение.",
    "tickingarea_remove_all_success": "Извършено е премахване на зона/зони с активни тикове",
    "tickingarea_remove_all_failure": "Не съществуват зони с активни тикове в настоящото измерение.",
    "tickingarea_list_chunks": "отрязъци",
    "tickingarea_list_circle_radius": "Радиус",
    "tickingarea_list_success_currentDimension": "Списък на всички зони с активни тикове в настоящото измерение",
    "tickingarea_list_success_allDimensions": "Списък на всички зони с активни тикове във всички измерения",
    "tickingarea_list_failure_allDimensions": "Няма зони с активни тикове в нито едно от измеренията.",
    "tickingarea_list_to": "към",
    "tickingarea_list_type_circle": "Кръг",
    "time_added": "Добавени са %1$d към часа",
    "time_description": "Променя или изпраща заявка за игровия час в света.",
    "time_disabled": "„Винаги е ден“ е разрешено в това ниво.",
    "time_query_day": "Денят е %d",
    "time_query_daytime": "Часът от деня е %d",
    "time_query_gametime": "Часът в играта е %d",
    "time_set": "Задаване на часа на %1$d",
    "time_stop": "Час %1$s",
    "title_description": "Контролира заглавията на екрана.",
    "title_success": "Командата за заглавие е изпълнена успешно",
    "titleraw_description": "Управлява заглавия на екрана с JSON съобщения.",
    "toggledownfall_description": "Превключва времето.",
    "tp_description": "Телепортира обекти (играчи, мобове и т.н.).",
    "tp_notSameDimension": "Телепортирането е неуспешно, тъй като играчите не са в едно и също измерение",
    "tp_outOfWorld": "Не може да се телепортират обекти извън света",
    "tp_permission": "Нямате разрешение да използвате тази команда с наклонена черта.",
    "tp_safeTeleportFail": "Неуспешно телепортиране на %1$s в %2$s, тъй като в зоната е имало блокове.",
    "tp_far": "Неуспешно телепортиране на %1$s в незаредената област на %2$s",
    "tp_success": "Извършено е телепортиране на %1$s в %2$s",
    "tp_successVictim": "Телепортирани сте в %1$s",
    "tp_success_coordinates": "Извършено е телепортиране на %1$s на %2$s, %3$s, %4$s",
    "transferserver_description": "Прехвърля играч в друг сървър.",
    "transferserver_successful": "Прехвърлен играч",
    "transferserver_invalid_port": "Невалиден порт (0-65535)",
    "trigger_description": "Задава активатор за активиране.",
    "trigger_disabled": "Активаторът %1$s не е разрешен",
    "trigger_invalidMode": "Невалиден режим на активатор %1$s",
    "trigger_invalidObjective": "Невалидно име на активатор %1$s",
    "trigger_invalidPlayer": "Само играчи могат да използват командата /trigger",
    "trigger_success": "Активаторът %1$s е променен с %2$s %3$s",
    "unban_failed": "Неуспешно премахване на бана на играч %1$s",
    "unban_success": "Премахнат е банът на играч %1$s",
    "unbanip_invalid": "Въвели сте невалиден IP адрес",
    "unbanip_success": "Премахнат е банът на IP адрес %1$s",
    "validategamelighting_description": "Валидиране на осветлението в играта за определен регион",
    "validategamelighting_checkRegionTooBig": "Регионът за проверка на осветлението е твърде голям! (%1$d > %2$d)",
    "validategamelighting_outOfWorld": "Не може да се провери осветление извън света",
    "weather_clear": "Промяна на ясно време",
    "weather_description": "Задава времето.",
    "weather_disabled": "„Цикъл на времето“ не е разрешено в това ниво.",
    "weather_query": "Състоянието на времето е: %s",
    "weather_query_clear": "ясно",
    "weather_query_rain": "дъжд",
    "weather_query_thunder": "гръмотевици",
    "weather_rain": "Промяна на дъждовно време",
    "weather_thunder": "Промяна на буреносно време",
    "whitelist_add_failed": "Неуспешно добавяне на %1$s в списъка с разрешени",
    "whitelist_add_success": "Успешно добавяне на %1$s в списъка с разрешени",
    "whitelist_description": "Управлява списъка с разрешени на сървъра.",
    "whitelist_disabled": "Списъкът с разрешени е изключен",
    "whitelist_enabled": "Списъкът с разрешени е включен",
    "whitelist_list": "Има %1$d (от %2$d показвани) играчи в списъка с разрешени:",
    "whitelist_reloaded": "Списъкът с разрешени е зареден отново от файл.",
    "whitelist_remove_failed": "Неуспешно премахване на %1$s от списъка с разрешени",
    "whitelist_remove_success": "Успешно премахване на %1$s от списъка с разрешени",
    "world_age_description": "Променя или подава заявка за възрастта на света (време от създаването).",
    "world_age_added": "%1$d: добавено към възрастта на света",
    "world_age_query": "Възрастта на света е %d",
    "world_age_set": "Задаване на възрастта на света на %1$d",
    "worldborder_center_success": "Задаване на центъра на границата на света на %1$s,%2$s",
    "worldborder_damage_amount_success": "Задаване на щетите от границата на света на %1$s на блок (от %2$s на блок)",
    "worldborder_damage_buffer_success": "Задаване на щетите от границата на света на %1$s блока (от %2$s блока)",
    "worldborder_get_success": "В момента границата на света е с ширина %1$s блока",
    "worldborder_set_success": "Задаване на ширината на границата на света на %1$s блока (от %2$s блока)",
    "worldborder_setSlowly_grow_success": "Разрастване на ширината на границата на света до %1$s блока (от %2$s блока) в рамките на %3$s секунди",
    "worldborder_setSlowly_shrink_success": "Свиване на ширината на границата на света до %1$s блока (от %2$s блока) в рамките на %3$s секунди",
    "worldborder_warning_distance_success": "Задаване на предупреждението за границата на света на %1$s блока разстояние (от %2$s блока)",
    "worldborder_warning_time_success": "Задаване на предупреждението за границата света на %1$s секунди разстояние (от %2$s секунди)",
    "worldbuilder_description": "Превключване на състоянието на повикващия в „Създател на светове“.",
    "worldbuilder_success": "Състоянието в „Създател на светове“ е актуализирано на %1$s",
    "wsserver_description": "Извършва опит за свързване към сървър websocket на предоставения URL адрес.",
    "wsserver_invalid_url": "Предоставеният URL адрес на сървър е невалиден",
    "wsserver_request_existing": "В момента се изпълнява друга заявка за свързване",
    "wsserver_request_failed": "Неуспешно свързване към сървър: %1$s",
    "wsserver_success": "Установена е връзка към сървър: %1$s",
    "xp_description": "Добавя или премахва опит на играч.",
    "xp_failure_widthdrawXp": "Не можете да дадете отрицателни точки опит на играч",
    "xp_success": "Дадохте %1$d точки опит на %2$s",
    "xp_success_levels": "Дадохте %1$d нива на %2$s",
    "xp_success_negative_levels": "Отнехте %1$d нива от %2$s"
},
item:{
    "air": [
        "Въздух"
    ],
    "apple": [
        "Ябълка"
    ],
    "golden_apple": [
        "Златна ябълка"
    ],
    "appleenchanted": [
        "Омагьосана ябълка"
    ],
    "armor_stand": [
        "Стойка за броня"
    ],
    "arrow": [
        "Стрела"
    ],
    "tipped_arrow": [
        "Специална стрела"
    ],
    "banner": [
        "Черен банер",
        "Черен банер",
        "Червен банер",
        "Зелен банер",
        "Кафяв банер",
        "Син банер",
        "Лилав банер",
        "Цианов банер",
        "Светлосив банер",
        "Сив банер",
        "Розов банер",
        "Лимоненозелен банер",
        "Жълт банер",
        "Светлосин банер",
        "Банер в магента",
        "Оранжев банер",
        "Бял банер"
    ],
    "bed": [
        "Легло",
        "Бяло легло",
        "Оранжево легло",
        "Легло с цвят магента",
        "Светлосиньо легло",
        "Жълто легло",
        "Лимоненозелено легло",
        "Розово легло",
        "Сиво легло",
        "Светлосиво легло",
        "Цианово легло",
        "Лилаво легло",
        "Синьо легло",
        "Кафяво легло",
        "Зелено легло",
        "Червено легло",
        "Черно легло"
    ],
    "bell": [
        "Камбана"
    ],
    "steak": [
        "Стек"
    ],
    "beef": [
        "Сурово говеждо"
    ],
    "beetroot": [
        "Цвекло"
    ],
    "beetroot_soup": [
        "Супа от цвекло"
    ],
    "blaze_powder": [
        "Огнен прах"
    ],
    "blaze_rod": [
        "Пръчка на пламък"
    ],
    "boat": [
        "Дъбова лодка",
        "Дъбова лодка",
        "Смърчова лодка",
        "Брезова лодка",
        "Лодка от дърво от джунглата",
        "Акациева лодка",
        "Лодка от тъмен дъб"
    ],
    "bone": [
        "Кост"
    ],
    "book": [
        "Книга"
    ],
    "chainmail_boots": [
        "Ботуши от метални брънки"
    ],
    "leather_boots": [
        "Кожени ботуши"
    ],
    "diamond_boots": [
        "Диамантени ботуши"
    ],
    "golden_boots": [
        "Златни ботуши"
    ],
    "iron_boots": [
        "Железни ботуши"
    ],
    "bow": [
        "Лък"
    ],
    "bowl": [
        "Купа"
    ],
    "bread": [
        "Хляб"
    ],
    "brewing_stand": [
        "Станция за отвари"
    ],
    "brick": [
        "Тухла"
    ],
    "bucket": [
        "Кофа"
    ],
    "bucketLava": [
        "Кофа за лава"
    ],
    "bucketWater": [
        "Кофа за вода"
    ],
    "bucketFish": [
        "Кофа с риба треска"
    ],
    "bucketSalmon": [
        "Кофа със сьомга"
    ],
    "bucketTropical": [
        "Кофа с тропическа риба"
    ],
    "bucketPuffer": [
        "Кофа с риба балон"
    ],
    "bucketCustomFish": [
        "Кофа с"
    ],
    "tropicalColorWhite": [
        "Бял"
    ],
    "tropicalColorOrange": [
        "Оранжев"
    ],
    "tropicalColorMagenta": [
        "Магента"
    ],
    "tropicalColorSky": [
        "Небесносин"
    ],
    "tropicalColorYellow": [
        "Жълт"
    ],
    "tropicalColorLime": [
        "Лимоненозелен"
    ],
    "tropicalColorRose": [
        "Роза"
    ],
    "tropicalColorGray": [
        "Сив"
    ],
    "tropicalColorSilver": [
        "Сребърен"
    ],
    "tropicalColorTeal": [
        "Синьозелен"
    ],
    "tropicalColorPlum": [
        "Тъмновиолетов"
    ],
    "tropicalColorBlue": [
        "Син"
    ],
    "tropicalColorBrown": [
        "Кафяв"
    ],
    "tropicalColorGreen": [
        "Зелен"
    ],
    "tropicalColorRed": [
        "Червен"
    ],
    "tropicalBodyKobSingle": [
        "%1$s Kob"
    ],
    "tropicalBodySunstreakSingle": [
        "%1$s SunStreak"
    ],
    "tropicalBodySnooperSingle": [
        "%1$s Snooper"
    ],
    "tropicalBodyDasherSingle": [
        "%1$s Dasher"
    ],
    "tropicalBodyBrinelySingle": [
        "%1$s Brinely"
    ],
    "tropicalBodySpottySingle": [
        "%1$s Spotty"
    ],
    "tropicalBodyFlopperSingle": [
        "%1$s Flopper"
    ],
    "tropicalBodyStripeySingle": [
        "%1$s Stripey"
    ],
    "tropicalBodyGlitterSingle": [
        "%1$s Glitter"
    ],
    "tropicalBodyBlockfishSingle": [
        "%1$s Blockfish"
    ],
    "tropicalBodyBettySingle": [
        "%1$s Betty"
    ],
    "tropicalBodyClayfishSingle": [
        "%1$s Clayfish"
    ],
    "tropicalBodyKobMulti": [
        "%1$s – %2$s Kob"
    ],
    "tropicalBodySunstreakMulti": [
        "%1$s – %2$s SunStreak"
    ],
    "tropicalBodySnooperMulti": [
        "%1$s – %2$s Snooper"
    ],
    "tropicalBodyDasherMulti": [
        "%1$s – %2$s Dasher"
    ],
    "tropicalBodyBrinelyMulti": [
        "%1$s – %2$s Brinely"
    ],
    "tropicalBodySpottyMulti": [
        "%1$s – %2$s Spotty"
    ],
    "tropicalBodyFlopperMulti": [
        "%1$s – %2$s Flopper"
    ],
    "tropicalBodyStripeyMulti": [
        "%1$s – %2$s Stripey"
    ],
    "tropicalBodyGlitterMulti": [
        "%1$s – %2$s Glitter"
    ],
    "tropicalBodyBlockfishMulti": [
        "%1$s – %2$s Blockfish"
    ],
    "tropicalBodyBettyMulti": [
        "%1$s – %2$s Betty"
    ],
    "tropicalBodyClayfishMulti": [
        "%1$s – %2$s Clayfish"
    ],
    "tropicalSchoolAnemone": [
        "Актиния"
    ],
    "tropicalSchoolBlackTang": [
        "Черна бодлоперка"
    ],
    "tropicalSchoolBlueDory": [
        "Синя Dory"
    ],
    "tropicalSchoolButterflyFish": [
        "Риба пеперуда"
    ],
    "tropicalSchoolCichlid": [
        "Цихлида"
    ],
    "tropicalSchoolClownfish": [
        "Риба клоун"
    ],
    "tropicalSchoolCottonCandyBetta": [
        "Пъстроцветна риба Бета"
    ],
    "tropicalSchoolDottyback": [
        "Риба на точки"
    ],
    "tropicalSchoolEmperorRedSnapper": [
        "Императорски луциан"
    ],
    "tropicalSchoolGoatfish": [
        "Барбуня"
    ],
    "tropicalSchoolMoorishIdol": [
        "Мавритански идол"
    ],
    "tropicalSchoolOrnateButterfly": [
        "Украсена бодлоперка"
    ],
    "tropicalSchoolParrotfish": [
        "Риба папагал"
    ],
    "tropicalSchoolQueenAngelFish": [
        "Кралска риба ангел"
    ],
    "tropicalSchoolRedCichlid": [
        "Червена цихлида"
    ],
    "tropicalSchoolRedLippedBlenny": [
        "Червеноуста бодлоперка"
    ],
    "tropicalSchoolRedSnapper": [
        "Червен берикс"
    ],
    "tropicalSchoolThreadfin": [
        "Сива бодлоперка"
    ],
    "tropicalSchoolTomatoClown": [
        "Доматен клоун"
    ],
    "tropicalSchoolTriggerfish": [
        "Балистида"
    ],
    "tropicalSchoolYellowTang": [
        "Жълта зебразома"
    ],
    "tropicalSchoolYellowtailParrot": [
        "Жълтоопашата риба папагал"
    ],
    "cake": [
        "Торта"
    ],
    "camera": [
        "Камера"
    ],
    "golden_carrot": [
        "Златен морков"
    ],
    "carrotOnAStick": [
        "Морков на пръчка"
    ],
    "warped_fungus_on_a_stick": [
        "Изкривена гъба на пръчка"
    ],
    "carrot": [
        "Морков"
    ],
    "cauldron": [
        "Казан"
    ],
    "coal": [
        "Въглища",
        null,
        "Дървени въглища"
    ],
    "chainmail_chestplate": [
        "Нагръдник от метални брънки"
    ],
    "leather_chestplate": [
        "Кожена туника"
    ],
    "diamond_chestplate": [
        "Диамантен нагръдник"
    ],
    "golden_chestplate": [
        "Златен нагръдник"
    ],
    "iron_chestplate": [
        "Железен нагръдник"
    ],
    "chorus_fruit": [
        "Припевен плод"
    ],
    "chorus_fruit_popped": [
        "Пукан припевен плод"
    ],
    "cooked_beef": [
        "Готвено говеждо"
    ],
    "cooked_chicken": [
        "Готвено пилешко"
    ],
    "cooked_porkchop": [
        "Готвени свински котлети"
    ],
    "chicken": [
        "Сурово пилешко"
    ],
    "clay_ball": [
        "Глина"
    ],
    "clock": [
        "Часовник"
    ],
    "comparator": [
        "Компаратор от червен камък"
    ],
    "compass": [
        "Компас"
    ],
    "lodestonecompass": [
        "Компас от магнетит"
    ],
    "cookie": [
        "Бисквитка"
    ],
    "crossbow": [
        "Арбалет"
    ],
    "diamond": [
        "Диамант"
    ],
    "repeater": [
        "Репитер от червен камък"
    ],
    "acacia_door": [
        "Акациева врата"
    ],
    "birch_door": [
        "Брезова врата"
    ],
    "dark_oak_door": [
        "Врата от тъмен дъб"
    ],
    "iron_door": [
        "Желязна врата"
    ],
    "jungle_door": [
        "Врата от дърво от джунглата"
    ],
    "wooden_door": [
        "Дъбова врата"
    ],
    "spruce_door": [
        "Смърчова врата"
    ],
    "crimson_door": [
        "Пурпурна врата"
    ],
    "warped_door": [
        "Разкривена врата"
    ],
    "dragon_breath": [
        "Драконов огън"
    ],
    "dye": [
        "Торбичка с мастило",
        "Торбичка с мастило",
        "Червена боя",
        "Зелена боя",
        "Какаови зърна",
        "Лазурит",
        "Лилава боя",
        "Цианова боя",
        "Светлосива боя",
        "Сива боя",
        "Розова боя",
        "Лимоненозелена боя",
        "Жълта боя",
        "Светлосиня боя",
        "Боя в цвят магента",
        "Оранжева боя",
        "Костно бяло",
        "Черна боя",
        "Кафява боя",
        "Синя боя",
        "Бяла боя"
    ],
    "egg": [
        "Яйце"
    ],
    "elytra": [
        "Елитри"
    ],
    "emerald": [
        "Смарагд"
    ],
    "emptyMap": [
        "Празна карта"
    ],
    "emptyLocatorMap": [
        "Празна локаторна карта"
    ],
    "emptyPotion": [
        "Бутилка за вода"
    ],
    "enchanted_book": [
        "Омагьосана книга"
    ],
    "end_crystal": [
        "Кристал от Края"
    ],
    "end_rod": [
        "Пръчка от Края"
    ],
    "ender_eye": [
        "Око на Края"
    ],
    "ender_pearl": [
        "Перла от пагубник"
    ],
    "experience_bottle": [
        "Омагьосана бутилка"
    ],
    "feather": [
        "Перо"
    ],
    "fermented_spider_eye": [
        "Ферментирало паешко око"
    ],
    "fireball": [
        "Огнен заряд"
    ],
    "fireworks": [
        "Ракетен фойерверк"
    ],
    "fireworksCharge": [
        "Звездовиден фойерверк"
    ],
    "clownfish": [
        "Тропическа риба"
    ],
    "cooked_fish": [
        "Готвена треска"
    ],
    "fish": [
        "Сурова треска"
    ],
    "pufferfish": [
        "Риба балон"
    ],
    "cooked_salmon": [
        "Готвена сьомга"
    ],
    "salmon": [
        "Сурова сьомга"
    ],
    "fishing_rod": [
        "Въдица"
    ],
    "flint": [
        "Кремък"
    ],
    "flint_and_steel": [
        "Огниво"
    ],
    "flower_pot": [
        "Саксия"
    ],
    "frame": [
        "Рамка за предмет"
    ],
    "ghast_tear": [
        "Сълза на огнен призрак"
    ],
    "glass_bottle": [
        "Стъклена бутилка"
    ],
    "gold_nugget": [
        "Златна буца"
    ],
    "iron_nugget": [
        "Желязна буца"
    ],
    "diamond_axe": [
        "Диамантена брадва"
    ],
    "golden_axe": [
        "Златна брадва"
    ],
    "iron_axe": [
        "Желязна брадва"
    ],
    "stone_axe": [
        "Каменна брадва"
    ],
    "wooden_axe": [
        "Дървена брадва"
    ],
    "chainmail_helmet": [
        "Шлем от метални брънки"
    ],
    "leather_helmet": [
        "Кожено кепе"
    ],
    "diamond_helmet": [
        "Диамантен шлем"
    ],
    "golden_helmet": [
        "Златен шлем"
    ],
    "iron_helmet": [
        "Железен шлем"
    ],
    "diamond_hoe": [
        "Диамантена мотика"
    ],
    "golden_hoe": [
        "Златна мотика"
    ],
    "iron_hoe": [
        "Желязна мотика"
    ],
    "stone_hoe": [
        "Каменна мотика"
    ],
    "wooden_hoe": [
        "Дървена мотика"
    ],
    "honey_bottle": [
        "Бутилка за мед"
    ],
    "honeycomb": [
        "Медна пита"
    ],
    "horsearmordiamond": [
        "Диамантена конска броня"
    ],
    "horsearmorgold": [
        "Златна конска броня"
    ],
    "horsearmoriron": [
        "Желязна конска броня"
    ],
    "horsearmorleather": [
        "Кожена конска броня"
    ],
    "gold_ingot": [
        "Златно кюлче"
    ],
    "iron_ingot": [
        "Железен слитък"
    ],
    "netherite_ingot": [
        "Слитък нетерит"
    ],
    "netherite_scrap": [
        "Нетеритов скрап"
    ],
    "netherite_sword": [
        "Нетеритов меч"
    ],
    "netherite_pickaxe": [
        "Нетеритова кирка"
    ],
    "netherite_axe": [
        "Нетеритова брадва"
    ],
    "netherite_shovel": [
        "Нетеритова лопата"
    ],
    "netherite_hoe": [
        "Нетеритова мотика"
    ],
    "netherite_boots": [
        "Нетеритови ботуши"
    ],
    "netherite_leggings": [
        "Нетеритови панталони"
    ],
    "netherite_chestplate": [
        "Нетеритов нагръдник"
    ],
    "netherite_helmet": [
        "Нетеритов шлем"
    ],
    "lead": [
        "Повод"
    ],
    "leather": [
        "Кожа"
    ],
    "leaves": [
        "Листа",
        "Дъбови листа",
        "Смърчови листа",
        "Брезови листа",
        "Листа на дърво от джунглата",
        "Акациеви листа",
        "Листа на тъмен дъб"
    ],
    "chainmail_leggings": [
        "Панталони от метални брънки"
    ],
    "leather_leggings": [
        "Кожени панталони"
    ],
    "diamond_leggings": [
        "Диамантени панталони"
    ],
    "golden_leggings": [
        "Златни панталони"
    ],
    "iron_leggings": [
        "Железни панталони"
    ],
    "nautilus_shell": [
        "Черупка на наутилус"
    ],
    "heart_of_the_sea": [
        "Сърцето на морето"
    ],
    "magma_cream": [
        "Магмена смола"
    ],
    "map": [
        "Карта"
    ],
    "melon": [
        "Диня"
    ],
    "milk": [
        "Мляко"
    ],
    "minecart": [
        "Вагонетка"
    ],
    "chest_minecart": [
        "Вагонетка със сандък"
    ],
    "command_block_minecart": [
        "Вагонетка с команден блок"
    ],
    "minecartFurnace": [
        "Вагонетка с пещ"
    ],
    "hopper_minecart": [
        "Вагонетка с фуния"
    ],
    "tnt_minecart": [
        "Вагонетка с TNT"
    ],
    "trident": [
        "Тризъбец"
    ],
    "mushroom_stew": [
        "Гъбена яхния"
    ],
    "muttoncooked": [
        "Готвено козешко"
    ],
    "muttonraw": [
        "Сурово козешко"
    ],
    "name_tag": [
        "Етикет с име"
    ],
    "netherbrick": [
        "Пъклена тухла"
    ],
    "quartz": [
        "Пъклен кварц"
    ],
    "nether_wart": [
        "Пъклен полип"
    ],
    "netherStar": [
        "Пъклена звезда"
    ],
    "painting": [
        "Картина"
    ],
    "paper": [
        "Хартия"
    ],
    "diamond_pickaxe": [
        "Диамантена кирка"
    ],
    "golden_pickaxe": [
        "Златна кирка"
    ],
    "iron_pickaxe": [
        "Желязна кирка"
    ],
    "stone_pickaxe": [
        "Каменна кирка"
    ],
    "wooden_pickaxe": [
        "Дървена кирка"
    ],
    "porkchop_cooked": [
        "Готвени свински котлети"
    ],
    "porkchop": [
        "Сурови свински котлети"
    ],
    "portfolio": [
        "Портфолио"
    ],
    "potato": [
        "Картоф"
    ],
    "baked_potato": [
        "Печен картоф"
    ],
    "poisonous_potato": [
        "Отровен картоф"
    ],
    "potion": [
        "Отвара"
    ],
    "prismarine_crystals": [
        "Призмаринови кристали"
    ],
    "prismarine_shard": [
        "Призмаринов къс"
    ],
    "pumpkin_pie": [
        "Тиквен пай"
    ],
    "cooked_rabbit": [
        "Готвено заешко"
    ],
    "rabbit_foot": [
        "Заешка лапа"
    ],
    "rabbit_hide": [
        "Заешка кожа"
    ],
    "rabbit": [
        "Сурово заешко"
    ],
    "rabbit_stew": [
        "Заешка яхния"
    ],
    "record": [
        "Музикален диск"
    ],
    "redstone": [
        "Червен камък"
    ],
    "reeds": [
        "Захарна тръстика"
    ],
    "kelp": [
        "Келп"
    ],
    "dried_kelp": [
        "Изсушен келп"
    ],
    "rotten_flesh": [
        "Гнила плът"
    ],
    "ruby": [
        "Рубин"
    ],
    "saddle": [
        "Седло"
    ],
    "wheat_seeds": [
        "Семена"
    ],
    "beetroot_seeds": [
        "Семена от цвекло"
    ],
    "melon_seeds": [
        "Динени семки"
    ],
    "pumpkin_seeds": [
        "Тиквени семки"
    ],
    "shears": [
        "Ножици за стригане"
    ],
    "diamond_shovel": [
        "Диамантена лопата"
    ],
    "golden_shovel": [
        "Златна лопата"
    ],
    "iron_shovel": [
        "Желязна лопата"
    ],
    "stone_shovel": [
        "Каменна лопата"
    ],
    "wooden_shovel": [
        "Дървена лопата"
    ],
    "sign": [
        "Знак от дъб"
    ],
    "spruce_sign": [
        "Знак от смърч"
    ],
    "birch_sign": [
        "Знак от бреза"
    ],
    "jungle_sign": [
        "Знак от дърво от джунглата"
    ],
    "acacia_sign": [
        "Знак от акация"
    ],
    "darkoak_sign": [
        "Знак от тъмен дъб"
    ],
    "crimson_sign": [
        "Пурпурен знак"
    ],
    "warped_sign": [
        "Разкривен знак"
    ],
    "skull": [
        "Череп на скелет",
        "Череп на скелет",
        "Череп на чезнещ скелет",
        "Глава на зомби",
        "Глава",
        "Глава на крийпър",
        "Глава на дракон"
    ],
    "slime_ball": [
        "Топка слуз"
    ],
    "snowball": [
        "Снежна топка"
    ],
    "speckled_melon": [
        "Позлатена диня"
    ],
    "spider_eye": [
        "Паешко око"
    ],
    "stick": [
        "Пръчка"
    ],
    "string": [
        "Нишка"
    ],
    "sugar": [
        "Захар"
    ],
    "gunpowder": [
        "Барут"
    ],
    "diamond_sword": [
        "Диамантен меч"
    ],
    "golden_sword": [
        "Златен меч"
    ],
    "iron_sword": [
        "Железен меч"
    ],
    "stone_sword": [
        "Каменен меч"
    ],
    "wooden_sword": [
        "Дървен меч"
    ],
    "wheat": [
        "Пшеница"
    ],
    "writable_book": [
        "Книга и перо"
    ],
    "written_book": [
        "Написана книга"
    ],
    "glowstone_dust": [
        "Прах от светлинен камък"
    ],
    "shield": [
        "Щит"
    ],
    "shulker_shell": [
        "Черупка на потайник"
    ],
    "totem": [
        "Тотем на безсмъртието"
    ],
    "turtle_helmet": [
        "Черупка на костенурка"
    ],
    "turtle_shell_piece": [
        "Щитовидна люспа"
    ],
    "phantom_membrane": [
        "Мембрана на фантом"
    ],
    "sweet_berries": [
        "Сладки горски плодове"
    ],
    "suspicious_stew": [
        "Подозрителна яхния"
    ],
    "banner_pattern": [
        "Модел на банер"
    ],
    "acaciaFence": [
        "Акациева ограда"
    ],
    "acacia_fence_gate": [
        "Акациева порта на ограда"
    ],
    "activator_rail": [
        "Релсов активатор"
    ],
    "allow": [
        "Разрешаване"
    ],
    "deny": [
        "Отхвърляне"
    ],
    "border_block": [
        "Граница"
    ],
    "anvil": [
        "Наковалня",
        "Наковалня",
        null,
        null,
        null,
        "Леко повредена наковалня",
        null,
        null,
        null,
        "Сериозно повредена наковалня"
    ],
    "barrier": [
        "Бариера"
    ],
    "beacon": [
        "Маяк"
    ],
    "beehive": [
        "Кошер"
    ],
    "bee_nest": [
        "Пчелно гнездо"
    ],
    "target": [
        "Цел"
    ],
    "bedrock": [
        "Материнска скала"
    ],
    "conduit": [
        "Проводник"
    ],
    "invisibleBedrock": [
        "Невидима материнска скала"
    ],
    "birchFence": [
        "Брезова ограда"
    ],
    "birch_fence_gate": [
        "Брезова порта на ограда"
    ],
    "blast_furnace": [
        "Доменна пещ"
    ],
    "bone_block": [
        "Костен блок"
    ],
    "coal_block": [
        "Блок въглища"
    ],
    "diamond_block": [
        "Блок диамант"
    ],
    "emerald_block": [
        "Блок смарагд"
    ],
    "gold_block": [
        "Блок злато"
    ],
    "iron_block": [
        "Блок желязо"
    ],
    "lapis_block": [
        "Блок лазурит"
    ],
    "redstone_block": [
        "Блок червен камък"
    ],
    "bookshelf": [
        "Лавица за книги"
    ],
    "brick_block": [
        "Тухлен блок"
    ],
    "brown_mushroom": [
        "Кафява гъба"
    ],
    "wooden_button": [
        "Бутон от дъб"
    ],
    "acacia_button": [
        "Бутон от акация"
    ],
    "birch_button": [
        "Бутон от бреза"
    ],
    "dark_oak_button": [
        "Бутон от тъмен дъб"
    ],
    "jungle_button": [
        "Бутон от дърво от джунглата"
    ],
    "spruce_button": [
        "Бутон от смърч"
    ],
    "stone_button": [
        "Бутон от камък"
    ],
    "cactus": [
        "Кактус"
    ],
    "dried_kelp_block": [
        "Блок от изсушен келп"
    ],
    "carved_pumpkin": [
        "Издълбана тиква"
    ],
    "chest": [
        "Сандък"
    ],
    "ender_chest": [
        "Сандък на Края"
    ],
    "jigsaw": [
        "Пъзелен блок"
    ],
    "honey_block": [
        "Меден блок"
    ],
    "honeycomb_block": [
        "Блок на медена пита"
    ],
    "lodestone": [
        "Магнетит"
    ],
    "nether_sprouts": [
        "Пъклени кълнове"
    ],
    "crimson_stem": [
        "Пурпурно стъбло"
    ],
    "warped_stem": [
        "Изкливено стъбло"
    ],
    "stripped_crimson_stem": [
        "Оголено пурпурно стъбло"
    ],
    "stripped_warped_stem": [
        "Оголено изкривено стъбло"
    ],
    "crimson_hyphae": [
        "Пурпурни хифи"
    ],
    "warped_hyphae": [
        "Изкривени хифи"
    ],
    "stripped_crimson_hyphae": [
        "Оголени пурпурни хифи"
    ],
    "stripped_warped_hyphae": [
        "Оголени изкривени хифи"
    ],
    "crimson_planks": [
        "Пурпурни дъски"
    ],
    "warped_planks": [
        "Разкривени дъски"
    ],
    "crimson_trapdoor": [
        "Пурпурна подова врата"
    ],
    "warped_trapdoor": [
        "Разкривена подова врата"
    ],
    "crimson_standing_sign": [
        "Пурпурен знак"
    ],
    "warped_standing_sign": [
        "Разкривен знак"
    ],
    "crimson_wall_sign": [
        "Пурпурен знак"
    ],
    "warped_wall_sign": [
        "Разкривен знак"
    ],
    "crimson_stairs": [
        "Пурпурни стълби"
    ],
    "warped_stairs": [
        "Разкривено стълбище"
    ],
    "crimson_fence": [
        "Пурпурна ограда"
    ],
    "warped_fence": [
        "Разкривена ограда"
    ],
    "crimson_fence_gate": [
        "Пурпурна порта на ограда"
    ],
    "warped_fence_gate": [
        "Разкривена порта на ограда"
    ],
    "crimson_button": [
        "Пурпурен бутон"
    ],
    "warped_button": [
        "Разкривен бутон"
    ],
    "crimson_pressure_plate": [
        "Пурпурна активираща плоча"
    ],
    "warped_pressure_plate": [
        "Разкривена активираща плоча"
    ],
    "crimson_slab": [
        "Пурпурна плоча"
    ],
    "warped_slab": [
        "Разкривена плоча"
    ],
    "crimson_double_slab": [
        "Пурпурна плоча"
    ],
    "warped_double_slab": [
        "Разкривена плоча"
    ],
    "shroomlight": [
        "Халюциногенна светлина"
    ],
    "crimson_nylium": [
        "Пурпурен нилиум"
    ],
    "warped_nylium": [
        "Разкривен нилиум"
    ],
    "basalt": [
        "Базалт"
    ],
    "polished_basalt": [
        "Полиран базалт"
    ],
    "blackstone": [
        "Черен камък"
    ],
    "polished_blackstone_bricks": [
        "Тухли от полиран черен камък"
    ],
    "cracked_polished_blackstone_bricks": [
        "Напукани тухли от полиран черен камък"
    ],
    "polished_blackstone_brick_stairs": [
        "Тухлени стълби от полиран черен камък"
    ],
    "blackstone_stairs": [
        "Стълби от черен камък"
    ],
    "blackstone_wall": [
        "Стена от черен камък"
    ],
    "polished_blackstone_brick_wall": [
        "Тухлена стена от полиран черен камък"
    ],
    "chiseled_polished_blackstone": [
        "Дялан полиран черен камък"
    ],
    "gilded_blackstone": [
        "Позлатен черен камък"
    ],
    "blackstone_slab": [
        "Плоча от черен камък"
    ],
    "polished_blackstone_brick_slab": [
        "Тухлена плоча от полиран черен камък"
    ],
    "chain": [
        "Верига"
    ],
    "soul_soil": [
        "Земя на черните души"
    ],
    "soul_fire": [
        "Горящи души"
    ],
    "polished_blackstone": [
        "Полиран черен камък"
    ],
    "polished_blackstone_stairs": [
        "Стълби от полиран черен камък"
    ],
    "polished_blackstone_slab": [
        "Плоча от полиран черен камък"
    ],
    "polished_blackstone_pressure_plate": [
        "Активираща плоча от полиран черен камък"
    ],
    "polished_blackstone_button": [
        "Бутон от полиран черен камък"
    ],
    "polished_blackstone_wall": [
        "Стена от полиран черен камък"
    ],
    "soul_campfire": [
        "Лагерен огън на душите"
    ],
    "chiseled_nether_bricks": [
        "Дялани пъклени тухли"
    ],
    "cracked_nether_bricks": [
        "Напукани пъклени тухли"
    ],
    "quartz_bricks": [
        "Кварцови тухли"
    ],
    "trapped_chest": [
        "Сандък с капан"
    ],
    "shulkerBoxWhite": [
        "Бяла кутия на потайник"
    ],
    "shulkerBoxOrange": [
        "Оранжева кутия на потайник"
    ],
    "shulkerBoxMagenta": [
        "Кутия на потайник с цвят магента"
    ],
    "shulkerBoxLightBlue": [
        "Светлосиня кутия на потайник"
    ],
    "shulkerBoxYellow": [
        "Жълта кутия на потайник"
    ],
    "shulkerBoxLime": [
        "Лимоненозелена кутия на потайник"
    ],
    "shulkerBoxPink": [
        "Розова кутия на потайник"
    ],
    "shulkerBoxGray": [
        "Сива кутия на потайник"
    ],
    "shulkerBoxSilver": [
        "Светлосива кутия на потайник"
    ],
    "shulkerBoxCyan": [
        "Цианова кутия на потайник"
    ],
    "shulkerBoxPurple": [
        "Лилава кутия на потайник"
    ],
    "shulkerBoxBlue": [
        "Синя кутия на потайник"
    ],
    "shulkerBoxBrown": [
        "Кафява кутия на потайник"
    ],
    "shulkerBoxGreen": [
        "Зелена кутия на потайник"
    ],
    "shulkerBoxRed": [
        "Червена кутия на потайник"
    ],
    "shulkerBoxBlack": [
        "Черна кутия на потайник"
    ],
    "shulkerBox": [
        "Кутия на потайник"
    ],
    "chorus_flower": [
        "Припевче"
    ],
    "chorus_plant": [
        "Припевен храст"
    ],
    "stained_glass": [
        "Бяло стъкло",
        "Бяло стъкло",
        "Оранжево стъкло",
        "Стъкло в цвят магента",
        "Светлосиньо стъкло",
        "Жълто стъкло",
        "Лимоненозелено стъкло",
        "Розово стъкло",
        "Сиво стъкло",
        "Светлосиво стъкло",
        "Цианово стъкло",
        "Лилаво стъкло",
        "Синьо стъкло",
        "Кафяво стъкло",
        "Зелено стъкло",
        "Червено стъкло",
        "Черно стъкло"
    ],
    "stained_glass_pane": [
        "Бял стъклен панел",
        "Бял стъклен панел",
        "Оранжев стъклен панел",
        "Стъклен панел в цвят магента",
        "Светлосин стъклен панел",
        "Жълт стъклен панел",
        "Лимоненозелен стъклен панел",
        "Розов стъклен панел",
        "Сив стъклен панел",
        "Светлосив стъклен панел",
        "Цианов стъклен панел",
        "Лилав стъклен панел",
        "Син стъклен панел",
        "Кафяв стъклен панел",
        "Зелен стъклен панел",
        "Червен стъклен панел",
        "Черен стъклен панел"
    ],
    "clay": [
        "Глинен блок"
    ],
    "hardened_clay": [
        "Втвърдена глина"
    ],
    "stained_hardened_clay": [
        "Втвърдена глина",
        "Бяла глина",
        "Оранжева глина",
        "Глина с цвят магента",
        "Светлосиня глина",
        "Жълта глина",
        "Лимоненозелена глина",
        "Розова глина",
        "Сива глина",
        "Светлосива глина",
        "Цианова глина",
        "Лилава глина",
        "Синя глина",
        "Кафява глина",
        "Зелена глина",
        "Червена глина",
        "Черна глина"
    ],
    "structure_block": [
        "Структурен блок"
    ],
    "structure_void": [
        "Структурна празнина"
    ],
    "wool": [
        "Вълна",
        "Бяла вълна",
        "Оранжева вълна",
        "Вълна в цвят магента",
        "Светлосиня вълна",
        "Жълта вълна",
        "Лимоненозелена вълна",
        "Розова вълна",
        "Сива вълна",
        "Светлосива вълна",
        "Цианова вълна",
        "Лилава вълна",
        "Синя вълна",
        "Кафява вълна",
        "Зелена вълна",
        "Червена вълна",
        "Черна вълна"
    ],
    "cobblestone_wall": [
        "Стена от калдъръм",
        "Стена от калдъръм",
        "Стена от мъхест калдъръм",
        "Стена от гранит",
        "Стена от диорит",
        "Стена от андезит",
        "Стена от пясъчник",
        "Тухлена стена",
        "Стена от каменна тухла",
        "Стена с тухли от мъхест камък",
        "Тухлена стена от камък от Края",
        "Стена от пъклена тухла",
        "Стена от призмарин",
        "Стена от червен пясъчник",
        "Стена от червена пъклена тухла"
    ],
    "cocoa": [
        "Какао"
    ],
    "command_block": [
        "Команден блок"
    ],
    "composter": [
        "Компостер"
    ],
    "light_block": [
        "Лек блок"
    ],
    "repeating_command_block": [
        "Команден блок с репитерна функция"
    ],
    "chain_command_block": [
        "Команден блок в режим „Верига“"
    ],
    "darkOakFence": [
        "Ограда от тъмен дъб"
    ],
    "dark_oak_fence_gate": [
        "Порта на ограда от тъмен дъб"
    ],
    "daylight_detector": [
        "Сензор за дневна светлина"
    ],
    "deadbush": [
        "Изсушен храст"
    ],
    "detector_rail": [
        "Релсов детектор"
    ],
    "dirt": [
        "Пръст",
        "Пръст",
        "Груба пръст"
    ],
    "podzol": [
        "Подзолиста пръст"
    ],
    "purpur_block": [
        "Парпуров блок",
        "Парпуров блок",
        "Дялан парпур",
        "Парпурова колона"
    ],
    "dispenser": [
        "Диспенсер"
    ],
    "doorWood": [
        "Дървена врата"
    ],
    "double_plant": [
        "Растение",
        "Слънчоглед",
        "Люляк",
        "Двойно висока трева",
        "Едра папрат",
        "Розов храст",
        "Божур"
    ],
    "dragon_egg": [
        "Драконово яйце"
    ],
    "dropper": [
        "Капков диспенсер"
    ],
    "enchanting_table": [
        "Магьосническа станция"
    ],
    "enderChest": [
        "Сандък на Края"
    ],
    "end_portal_frame": [
        "Портал към Края"
    ],
    "farmland": [
        "Разорана земя"
    ],
    "fletching_table": [
        "Маса за стрели"
    ],
    "fence": [
        "Дъбова ограда"
    ],
    "fence_gate": [
        "Дъбова порта на ограда"
    ],
    "iron_bars": [
        "Желязна решетка"
    ],
    "fire": [
        "Огън"
    ],
    "yellow_flower": [
        "Цвете",
        "Жълтурче"
    ],
    "red_flower": [
        "Цвете",
        "Мак",
        "Синя орхидея",
        "Лук",
        "Лазурна метличина",
        "Червено лале",
        "Оранжево лале",
        "Бяло лале",
        "Розово лале",
        "Маргаритка",
        "Метличина",
        "Момина сълза"
    ],
    "wither_rose": [
        "Чезнеща роза"
    ],
    "furnace": [
        "Пещ"
    ],
    "glass": [
        "Стъкло"
    ],
    "golden_rail": [
        "Електрическа релса"
    ],
    "grass": [
        "Тревен блок"
    ],
    "grass_path": [
        "Тревиста пътека"
    ],
    "gravel": [
        "Чакъл"
    ],
    "hay_block": [
        "Бала сено"
    ],
    "netherrack": [
        "Пъкленит"
    ],
    "soul_sand": [
        "Пясък на душите"
    ],
    "hopper": [
        "Фуния"
    ],
    "ice": [
        "Лед"
    ],
    "packed_ice": [
        "Солиден лед"
    ],
    "blue_ice": [
        "Син лед"
    ],
    "iron_trapdoor": [
        "Желязна подова врата"
    ],
    "jukebox": [
        "Джубокс"
    ],
    "jungleFence": [
        "Ограда от дърво от джунглата"
    ],
    "jungle_fence_gate": [
        "Порта на ограда от дърво от джунглата"
    ],
    "ladder": [
        "Стълба"
    ],
    "flowing_lava": [
        "Лава"
    ],
    "leaves2": [
        "Акациеви листа",
        "Акациеви листа",
        "Листа на тъмен дъб"
    ],
    "lever": [
        "Лост"
    ],
    "glowstone": [
        "Светлинен камък"
    ],
    "lit_pumpkin": [
        "Тиквен фенер"
    ],
    "lockedchest": [
        "Заключен сандък"
    ],
    "log2": [
        "Дънер от акация",
        "Дънер от акация",
        "Дънер от тъмен дъб"
    ],
    "log": [
        "Дънер",
        "Дънер от дъб",
        "Дънер от смърч",
        "Дънер от бреза",
        "Дънер от джунглата"
    ],
    "magma": [
        "Магмен блок"
    ],
    "melon_block": [
        "Диня"
    ],
    "mob_spawner": [
        "Призовател на чудовища"
    ],
    "monster_egg": [
        "Заразен камък",
        "Заразен камък",
        "Заразен калдъръм",
        "Заразена каменна тухла",
        "Заразена тухла от мъхест камък",
        "Заразена тухла от ивичест камък",
        "Заразена тухла от дялан камък"
    ],
    "mushroom": [
        "Гъба"
    ],
    "noteblock": [
        "Блок с бележки"
    ],
    "mycelium": [
        "Фунгинит"
    ],
    "nether_brick": [
        "Пъклен тухлен блок"
    ],
    "red_nether_brick": [
        "Червена пъклена тухла"
    ],
    "nether_brick_fence": [
        "Ограда от пъклени тухли"
    ],
    "quartz_ore": [
        "Пъклена кварцова руда"
    ],
    "netherreactor": [
        "Пъклено реакторно ядро"
    ],
    "nether_wart_block": [
        "Блок пъклен полип"
    ],
    "warped_wart_block": [
        "Разкривен блок полип"
    ],
    "unlit_redstone_torch": [
        "Факел от червен камък"
    ],
    "redstone_torch": [
        "Факел от червен камък"
    ],
    "soul_torch": [
        "Факел на душите"
    ],
    "obsidian": [
        "Обсидиан"
    ],
    "coal_ore": [
        "Руда с въглища"
    ],
    "diamond_ore": [
        "Руда с диаманти"
    ],
    "emerald_ore": [
        "Руда със смарагди"
    ],
    "gold_ore": [
        "Златна руда"
    ],
    "iron_ore": [
        "Желязна руда"
    ],
    "lapis_ore": [
        "Руда с лазурит"
    ],
    "redstone_ore": [
        "Руда с червен камък"
    ],
    "oreRuby": [
        "Руда с рубини"
    ],
    "observer": [
        "Сензор"
    ],
    "piston": [
        "Бутало"
    ],
    "sticky_piston": [
        "Лепкаво бутало"
    ],
    "portal": [
        "Портал"
    ],
    "potatoes": [
        "Картофи"
    ],
    "stone_pressure_plate": [
        "Каменна активираща плоча"
    ],
    "wooden_pressure_plate": [
        "Активираща плоча от дъб"
    ],
    "acacia_pressure_plate": [
        "Активираща плоча от акация"
    ],
    "birch_pressure_plate": [
        "Активираща плоча от бреза"
    ],
    "dark_oak_pressure_plate": [
        "Активираща плоча от тъмен дъб"
    ],
    "jungle_pressure_plate": [
        "Активираща плоча от дърво от джунглата"
    ],
    "spruce_pressure_plate": [
        "Активираща плоча от смърч"
    ],
    "prismarine": [
        "Призмарин",
        "Призмарин",
        "Призмаринови тухли",
        "Тъмен призмарин"
    ],
    "pumpkin": [
        "Тиква"
    ],
    "pumpkin_stem": [
        "Стебло на тиква"
    ],
    "quartz_block": [
        "Блок кварц",
        "Блок кварц",
        "Блок дялан кварц",
        "Блок вертикален кварц",
        "Блок от гладък кварц"
    ],
    "rail": [
        "Релса"
    ],
    "red_mushroom": [
        "Червена гъба"
    ],
    "crimson_fungus": [
        "Пурпурна гъба"
    ],
    "warped_fungus": [
        "Разкривена гъбка"
    ],
    "red_mushroom_block": [
        "Блок от червени гъби"
    ],
    "red_sandstone": [
        "Червен пясъчник",
        "Червен пясъчник",
        "Дялан червен пясъчник",
        "Сечен червен пясъчник",
        "Гладък червен пясъчник"
    ],
    "redstone_wire": [
        "Прах от червен камък"
    ],
    "redstone_lamp": [
        "Лампа от червен камък"
    ],
    "sand": [
        "Пясък",
        "Пясък",
        "Червен пясък"
    ],
    "sandstone": [
        "Пясъчник",
        "Пясъчник",
        "Дялан пясъчник",
        "Сечен пясъчник",
        "Гладък пясъчник"
    ],
    "sapling": [
        "Дъбова фиданка",
        "Дъбова фиданка",
        "Смърчова фиданка",
        "Брезова фиданка",
        "Фиданка на дърво от джунглата",
        "Акациева фиданка",
        "Фиданка на тъмен дъб"
    ],
    "seaLantern": [
        "Морски фенер"
    ],
    "standing_sign": [
        "Знак"
    ],
    "spruce_standing_sign": [
        "Знак от смърч"
    ],
    "birch_standing_sign": [
        "Знак от бреза"
    ],
    "jungle_standing_sign": [
        "Знак от дърво от джунглата"
    ],
    "acacia_standing_sign": [
        "Знак от акация"
    ],
    "darkoak_standing_sign": [
        "Знак от тъмен дъб"
    ],
    "slime": [
        "Блок слуз"
    ],
    "snow": [
        "Сняг"
    ],
    "sponge": [
        "Сюнгер",
        "Сюнгер",
        "Мокър сюнгер"
    ],
    "spruceFence": [
        "Смърчова ограда"
    ],
    "spruce_fence_gate": [
        "Смърчова порта на ограда"
    ],
    "brick_stairs": [
        "Тухлени стълби"
    ],
    "nether_brick_stairs": [
        "Стълби от пъклени тухли"
    ],
    "quartz_stairs": [
        "Кварцови стълби"
    ],
    "smooth_quartz_stairs": [
        "Стълби от гладък кварц"
    ],
    "red_sandstone_stairs": [
        "Стълби от червен пясъчник"
    ],
    "sandstone_stairs": [
        "Стълби от пясъчник"
    ],
    "stone_stairs": [
        "Калдъръмени стълби"
    ],
    "normal_stone_stairs": [
        "Стълби от камък"
    ],
    "stone_brick_stairs": [
        "Стълби от каменни тухли"
    ],
    "oak_stairs": [
        "Дъбови стълби"
    ],
    "acacia_stairs": [
        "Акациеви стълби"
    ],
    "birch_stairs": [
        "Брезови стълби"
    ],
    "dark_oak_stairs": [
        "Стълби от тъмен дъб"
    ],
    "jungle_stairs": [
        "Стълби от дърво от джунглата"
    ],
    "spruce_stairs": [
        "Смърчови стълби"
    ],
    "purpur_stairs": [
        "Парпурови стълби"
    ],
    "prismarine_stairs": [
        "Стълби от призмарин"
    ],
    "dark_prismarine_stairs": [
        "Стълби от тъмен призмарин"
    ],
    "prismarine_bricks_stairs": [
        "Тухлени стълби от призмарин"
    ],
    "granite_stairs": [
        "Стълби от гранит"
    ],
    "diorite_stairs": [
        "Стълби от диорит"
    ],
    "andesite_stairs": [
        "Стълби от андезит"
    ],
    "polished_granite_stairs": [
        "Стълби от полиран гранит"
    ],
    "polished_diorite_stairs": [
        "Стълби от полиран диорит"
    ],
    "polished_andesite_stairs": [
        "Стълби от полиран андезит"
    ],
    "mossy_stone_brick_stairs": [
        "Стълби от тухла от мъхест камък"
    ],
    "smooth_red_sandstone_stairs": [
        "Стълби от гладък червен пясъчник"
    ],
    "smooth_sandstone_stairs": [
        "Стълби от гладък пясъчник"
    ],
    "end_brick_stairs": [
        "Тухлени стълби от камък от Края"
    ],
    "mossy_cobblestone_stairs": [
        "Стълби от мъхест калдъръм"
    ],
    "red_nether_brick_stairs": [
        "Стълби от червена пъклена тухла"
    ],
    "smooth_stone": [
        "Гладък камък"
    ],
    "standing_banner": [
        "Банер",
        "Черен банер",
        "Червен банер",
        "Зелен банер",
        "Кафяв банер",
        "Син банер",
        "Лилав банер",
        "Цианов банер",
        "Светлосив банер",
        "Сив банер",
        "Розов банер",
        "Лимоненозелен банер",
        "Жълт банер",
        "Светлосин банер",
        "Банер в магента",
        "Оранжев банер",
        "Банер"
    ],
    "stone": [
        "Камък",
        "Камък",
        "Гранит",
        "Полиран гранит",
        "Диорит",
        "Полиран диорит",
        "Андезит",
        "Полиран андезит"
    ],
    "cobblestone": [
        "Калдъръм"
    ],
    "stonebrick": [
        "Каменни тухли",
        "Каменни тухли",
        "Тухли от мъхест камък",
        "Тухли от дялан камък"
    ],
    "stonecutter": [
        "Каменоломен блок"
    ],
    "stonecutter_block": [
        "Каменоломен блок"
    ],
    "mossy_cobblestone": [
        "Мъхест калдъръм"
    ],
    "double_stone_slab": [
        "Каменна плоча",
        "Каменна плоча",
        "Плоча от пясъчник",
        "Дървена плоча",
        "Калдъръмена плоча",
        "Тухлена плоча",
        "Плоча от каменни тухли",
        "Кварцова плоча",
        "Плоча от пъклени тухли"
    ],
    "stone_slab": [
        "Каменна плоча",
        "Плоча от гладък камък",
        "Плоча от пясъчник",
        "Дървена плоча",
        "Калдъръмена плоча",
        "Тухлена плоча",
        "Плоча от каменни тухли",
        "Кварцова плоча",
        "Плоча от пъклени тухли"
    ],
    "double_stone_slab2": [
        "Плоча от червен пясъчник",
        "Плоча от червен пясъчник"
    ],
    "stone_slab2": [
        "Плоча от червен пясъчник",
        "Плоча от червен пясъчник",
        "Парпурова плоча",
        "Плоча от призмарин",
        "Плоча от призмаринови тухли",
        "Плоча от тъмен призмарин",
        "Плоча от мъхест калдъръм",
        "Плоча от гладък пясъчник",
        "Плоча от червена пъклена тухла"
    ],
    "stone_slab3": [
        "Тухлена плоча от камък от Края",
        "Тухлена плоча от камък от Края",
        "Плоча от гладък червен пясъчник",
        "Плоча от полиран андезит",
        "Плоча от андезит",
        "Плоча от диорит",
        "Плоча от полиран диорит",
        "Гранитна плоча",
        "Плоча от полиран гранит"
    ],
    "stone_slab4": [
        "Плоча от тухла от мъхест камък",
        "Плоча от тухла от мъхест камък",
        "Плоча от гладък кварц",
        "Каменна плоча",
        "Плоча от сечен пясъчник",
        "Плоча от сечен червен пясъчник"
    ],
    "coral_block": [
        "Блок от тръбовиден корал",
        "Блок от тръбовиден корал",
        "Блок от мозъковиден корал",
        "Блок от мехурест корал",
        "Блок от огнен корал",
        "Блок от рогов корал",
        "Блок от мъртъв тръбовиден корал",
        "Блок от мъртъв мозъковиден корал",
        "Блок от мъртъв мехурест корал",
        "Блок от мъртъв огнен корал",
        "Блок от мъртъв рогов корал"
    ],
    "tallgrass": [
        "Трева",
        "Трева",
        "Папрат"
    ],
    "seagrass": [
        "Морска трева",
        "Морска трева"
    ],
    "sea_pickle": [
        "Морска краставица"
    ],
    "turtle_egg": [
        "Яйце на морска костенурка"
    ],
    "coral": [
        "Тръбовиден корал",
        "Тръбовиден корал",
        "Мозъковиден корал",
        "Мехурест корал",
        "Огнен корал",
        "Рогов корал",
        "Мъртъв тръбовиден корал",
        "Мъртъв мозъковиден корал",
        "Мъртъв мехурест корал",
        "Мъртъв огнен корал",
        "Мъртъв рогов корал"
    ],
    "coral_fan": [
        "Ветрило от тръбовиден корал",
        "Ветрило от тръбовиден корал",
        "Ветрило от мозъковиден корал",
        "Ветрило от мехурест корал",
        "Ветрило от огнен корал",
        "Ветрило от рогов корал"
    ],
    "coral_fan_dead": [
        "Ветрило от мъртъв тръбовиден корал",
        "Ветрило от мъртъв тръбовиден корал",
        "Ветрило от мъртъв мозъковиден корал",
        "Ветрило от мъртъв мехурест корал",
        "Ветрило от мъртъв огнен корал",
        "Ветрило от мъртъв рогов корал"
    ],
    "glass_pane": [
        "Стъклен панел"
    ],
    "tnt": [
        "TNT"
    ],
    "snow_layer": [
        "Сняг от горен слой"
    ],
    "torch": [
        "Факел"
    ],
    "trapdoor": [
        "Подова врата от дъб"
    ],
    "acacia_trapdoor": [
        "Подова врата от акация"
    ],
    "birch_trapdoor": [
        "Подова врата от бреза"
    ],
    "dark_oak_trapdoor": [
        "Подова врата от тъмен дъб"
    ],
    "jungle_trapdoor": [
        "Подова врата от дърво от джунглата"
    ],
    "spruce_trapdoor": [
        "Подова врата от смърч"
    ],
    "tripWire": [
        "Жица на капан"
    ],
    "tripwire_hook": [
        "Жлеб на жица на капан"
    ],
    "vine": [
        "Лози"
    ],
    "weeping_vines": [
        "Плачещи лози"
    ],
    "twisting_vines": [
        "Извиващи се лози"
    ],
    "flowing_water": [
        "Вода"
    ],
    "water": [
        "Вода"
    ],
    "waterlily": [
        "Лист на водна лилия"
    ],
    "web": [
        "Паяжина"
    ],
    "heavy_weighted_pressure_plate": [
        "Активираща плоча с тежест (тежка)"
    ],
    "light_weighted_pressure_plate": [
        "Активираща плоча с тежест (лека)"
    ],
    "end_stone": [
        "Камък от Края"
    ],
    "end_bricks": [
        "Тухли от камък от Края"
    ],
    "planks": [
        "Дървени дъски",
        "Дъбови дъски",
        "Смърчови дъски",
        "Брезови дъски",
        "Дъски от дърво от джунглата",
        "Акациеви дъски",
        "Дъски от тъмен дъб"
    ],
    "wooden_slab": [
        "Дървена плоскост",
        "Дъбова плоскост",
        "Смърчова плоскост",
        "Брезова плоскост",
        "Плоскост от дърво от джунглата",
        "Акациева плоскост",
        "Плоскост от тъмен дъб"
    ],
    "carpet": [
        "Килим",
        "Черен килим",
        "Червен килим",
        "Зелен килим",
        "Кафяв килим",
        "Син килим",
        "Лилав килим",
        "Цианов килим",
        "Светлосив килим",
        "Сив килим",
        "Розов килим",
        "Лимоненозелен килим",
        "Жълт килим",
        "Светлосин килим",
        "Килим в цвят магента",
        "Оранжев килим",
        "Бял килим"
    ],
    "crafting_table": [
        "Занаятчийска маса"
    ],
    "white_glazed_terracotta": [
        "Бяла емайлирана глина",
        "Бяла емайлирана глина"
    ],
    "orange_glazed_terracotta": [
        "Оранжева емайлирана глина",
        "Оранжева емайлирана глина"
    ],
    "magenta_glazed_terracotta": [
        "Емайлирана глина с цвят магента",
        "Емайлирана глина с цвят магента"
    ],
    "light_blue_glazed_terracotta": [
        "Светлосиня емайлирана глина",
        "Светлосиня емайлирана глина"
    ],
    "yellow_glazed_terracotta": [
        "Жълта емайлирана глина",
        "Жълта емайлирана глина"
    ],
    "lime_glazed_terracotta": [
        "Лимоненозелена емайлирана глина",
        "Лимоненозелена емайлирана глина"
    ],
    "pink_glazed_terracotta": [
        "Розова емайлирана глина",
        "Розова емайлирана глина"
    ],
    "gray_glazed_terracotta": [
        "Сива емайлирана глина",
        "Сива емайлирана глина"
    ],
    "silver_glazed_terracotta": [
        "Светлосива емайлирана глина",
        "Светлосива емайлирана глина"
    ],
    "cyan_glazed_terracotta": [
        "Цианова емайлирана глина",
        "Цианова емайлирана глина"
    ],
    "purple_glazed_terracotta": [
        "Лилава емайлирана глина",
        "Лилава емайлирана глина"
    ],
    "blue_glazed_terracotta": [
        "Синя емайлирана глина",
        "Синя емайлирана глина"
    ],
    "brown_glazed_terracotta": [
        "Кафява емайлирана глина",
        "Кафява емайлирана глина"
    ],
    "green_glazed_terracotta": [
        "Зелена емайлирана глина",
        "Зелена емайлирана глина"
    ],
    "red_glazed_terracotta": [
        "Червена емайлирана глина",
        "Червена емайлирана глина"
    ],
    "black_glazed_terracotta": [
        "Черна емайлирана глина",
        "Черна емайлирана глина"
    ],
    "concrete": [
        "Бял бетон",
        "Бял бетон",
        "Оранжев бетон",
        "Бетон с цвят магента",
        "Светлосин бетон",
        "Жълт бетон",
        "Лимоненозелен бетон",
        "Розов бетон",
        "Сив бетон",
        "Светлосив бетон",
        "Цианов бетон",
        "Лилав бетон",
        "Син бетон",
        "Кафяв бетон",
        "Зелен бетон",
        "Червен бетон",
        "Черен бетон"
    ],
    "glazedTerracottaWhite": [
        "Бяла емайлирана глина"
    ],
    "glazedTerracottaOrange": [
        "Оранжева емайлирана глина"
    ],
    "glazedTerracottaMagenta": [
        "Емайлирана глина с цвят магента"
    ],
    "glazedTerracottaLightBlue": [
        "Светлосиня емайлирана глина"
    ],
    "glazedTerracottaYellow": [
        "Жълта емайлирана глина"
    ],
    "glazedTerracottaLime": [
        "Лимоненозелена емайлирана глина"
    ],
    "glazedTerracottaPink": [
        "Розова емайлирана глина"
    ],
    "glazedTerracottaGray": [
        "Сива емайлирана глина"
    ],
    "glazedTerracottaSilver": [
        "Светлосива емайлирана глина"
    ],
    "glazedTerracottaCyan": [
        "Цианова емайлирана глина"
    ],
    "glazedTerracottaPurple": [
        "Лилава емайлирана глина"
    ],
    "glazedTerracottaBlue": [
        "Синя емайлирана глина"
    ],
    "glazedTerracottaBrown": [
        "Кафява емайлирана глина"
    ],
    "glazedTerracottaGreen": [
        "Зелена емайлирана глина"
    ],
    "glazedTerracottaRed": [
        "Червена емайлирана глина"
    ],
    "glazedTerracottaBlack": [
        "Черна емайлирана глина"
    ],
    "concretePowder": [
        "Бял цимент",
        "Бял цимент",
        "Оранжев цимент",
        "Цимент с цвят магента",
        "Светлосин цимент",
        "Жълт цимент",
        "Лимоненозелен цимент",
        "Розов цимент",
        "Сив цимент",
        "Светлосив цимент",
        "Цианов цимент",
        "Лилав цимент",
        "Син цимент",
        "Кафяв цимент",
        "Зелен цимент",
        "Червен цимент",
        "Черен цимент"
    ],
    "stripped_spruce_log": [
        "Гол дънер от смърч"
    ],
    "stripped_dark_oak_log": [
        "Гол дънер от тъмен дъб"
    ],
    "stripped_birch_log": [
        "Гол дънер от бреза"
    ],
    "stripped_jungle_log": [
        "Гол дънер от джунглата"
    ],
    "stripped_oak_log": [
        "Гол дънер от дъб"
    ],
    "stripped_acacia_log": [
        "Гол дънер от акация"
    ],
    "bamboo": [
        "Бамбук"
    ],
    "scaffolding": [
        "Скеле"
    ],
    "grindstone": [
        "Точилен камък"
    ],
    "cartography_table": [
        "Картографска маса"
    ],
    "lantern": [
        "Фенер"
    ],
    "soul_lantern": [
        "Фенер на душите"
    ],
    "smoker": [
        "Опушвална"
    ],
    "smithing_table": [
        "Ковашка маса"
    ],
    "barrel": [
        "Бъчва"
    ],
    "campfire": [
        "Лагерен огън"
    ],
    "loom": [
        "Тъкачен стан"
    ],
    "lectern": [
        "Катедра"
    ],
    "sweet_berry_bush": [
        "Храст от сладки горски плодове"
    ],
    "wood": [
        "Дъбово дърво",
        "Дъбово дърво",
        "Смърчово дърво",
        "Брезово дърво",
        "Дърво от джунглата",
        "Акациево дърво",
        "Тъмно дъбово дърво",
        null,
        null,
        "Голо дъбово дърво",
        "Голо смърчово дърво",
        "Голо брезово дърво",
        "Голо дърво от джунглата",
        "Голо акациево дърво",
        "Голо тъмно дъбово дърво"
    ],
    "netherite_block": [
        "Блок от нетерит"
    ],
    "ancient_debris": [
        "Древни останки"
    ],
    "nether_gold_ore": [
        "Златна руда от пъкъла"
    ],
    "respawn_anchor": [
        "Котва за повторно появяване"
    ],
    "crying_obsidian": [
        "Плачещ обсидиан"
    ]
}
};
freeze(lang_data);
export = lang_data;

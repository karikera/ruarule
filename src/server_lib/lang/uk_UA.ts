
import { freeze } from './freeze';
import { LangId } from './langid';
const lang_data = {
id: "uk_UA" as LangId,
commands:{
    "ability_description": "Установлює вміння гравця.",
    "ability_noability": "Уміння під назвою \"%1$s\" недоступне",
    "ability_granted": "Вам надано вміння \"%1$s\"",
    "ability_revoked": "У вас забрано вміння \"%1$s\"",
    "ability_success": "Уміння оновлено",
    "achievement_alreadyHave": "Гравець %1$s уже має досягнення %2$s",
    "achievement_description": "Надає гравцю досягнення або відбирає його.",
    "achievement_dontHave": "Гравець %1$s не має досягнення %2$s",
    "achievement_give_success_all": "Гравцеві %1$s надано всі досягнення",
    "achievement_give_success_one": "Гравцеві %1$s надано статистику %2$s",
    "achievement_statTooLow": "Гравець %1$s не має статистики %2$s",
    "achievement_take_success_all": "Забрано всі досягнення у гравця %1$s",
    "achievement_take_success_one": "Забрано статистику %1$s у гравця %2$s",
    "achievement_unknownAchievement": "Невідоме досягнення або статистика \"%1$s\"",
    "agent_attack_success": "Agent: attack виконано успішно",
    "agent_attack_failed": "Agent: attack не виконано",
    "agent_collect_success": "Agent: collect виконано успішно",
    "agent_collect_failed": "Agent: collect не виконано",
    "agent_createagent_success": "Agent створено",
    "agent_createagent_failed": "Agent: не вдається створити",
    "agent_destroy_success": "Agent: destroy виконано успішно для блока",
    "agent_destroy_failed": "Agent: destroy не виконано",
    "agent_detect_success": "Agent: detect виконано успішно",
    "agent_detect_failed": "Agent: detect не виконано",
    "agent_detectredstone_success": "Agent: detectredstone виконано успішно",
    "agent_detectredstone_failed": "Agent: detectredstone не виконано",
    "agent_drop_success": "Agent: drop виконано успішно",
    "agent_drop_failed": "Agent: drop не виконано",
    "agent_dropall_success": "Agent: dropall виконано успішно",
    "agent_dropall_failed": "Agent: dropall не виконано",
    "agent_getitemcount_success": "Agent: getitemcount виконано успішно",
    "agent_getitemcount_failed": "Agent: getitemcount не виконано",
    "agent_getitemspace_success": "Agent: getitemspace виконано успішно",
    "agent_getitemspace_failed": "Agent: getitemspace не виконано",
    "agent_getitemdetail_success": "Agent: getitemdetail виконано успішно",
    "agent_getitemdetail_failed": "Agent: getitemdetail не виконано",
    "agent_getposition_success": "Позицію агента отримано",
    "agent_getposition_failed": "Не вдалось отримати позицію агента",
    "agent_inspect_success": "Agent: inspect виконано успішно",
    "agent_inspect_failed": "Agent: inspect не виконано",
    "agent_inspectdata_success": "Agent: inspect data виконано успішно",
    "agent_inspectdata_failed": "Agent: inspect data не виконано",
    "agent_move_success": "Agent: move виконано успішно",
    "agent_move_failed": "Agent: move не виконано",
    "agent_outofrange": "Не вдається видати команду, Agent поза зоною досяжності",
    "agent_place_success": "Agent: place виконано успішно",
    "agent_place_failed": "Agent: place не виконано",
    "agent_setitem_success": "Агент установив елемент",
    "agent_setitem_failed": "Агенту не вдалося встановити елемент",
    "agent_turn_success": "Agent: turn виконано успішно",
    "agent_turn_failed": "Agent: turn не виконано",
    "agent_till_success": "Agent: till виконано успішно",
    "agent_till_failed": "Agent: till не виконано",
    "agent_tpagent_description": "Agent: телепортація.",
    "agent_tpagent_success": "Agent: teleport виконано успішно",
    "agent_tpagent_failed": "Agent: teleport не виконано",
    "agent_transfer_success": "Agent: transfer виконано успішно",
    "agent_transfer_failed": "Agent: transfer не виконано",
    "always_day": "Цикл дня та ночі %1$s",
    "always_day_locked": "Цикл дня та ночі заблоковано",
    "always_day_unlocked": "Цикл дня та ночі розблоковано",
    "ban_description": "Додає гравця в бан.",
    "autocomplete_a": "усі гравці",
    "autocomplete_c": "мій Agent",
    "autocomplete_e": "усі сутності",
    "autocomplete_p": "найближчий гравець",
    "autocomplete_r": "випадковий гравець",
    "autocomplete_s": "ви",
    "autocomplete_v": "усі Agent",
    "ban_failed": "Не вдалося забанити гравця %1$s",
    "ban_success": "Гравця %1$s забанено",
    "banip_description": "Додає IP-адресу в бан.",
    "banip_invalid": "Ви ввели неправильну IP-адресу або дані гравця, який зараз не в онлайні",
    "banip_success": "IP-адресу %1$s забанено",
    "banip_success_players": "IP-адресу %1$s, яка належить %2$s, забанено",
    "banlist_ips": "Усі забанені IP-адреси (%1$d):",
    "banlist_players": "Усі забанені гравці (%1$d):",
    "blockdata_description": "Змінює тег даних для блока.",
    "blockdata_placeFailed": "Тут не можна ставити блоки",
    "blockdata_destroyFailed": "Тут не можна копати",
    "blockdata_failed": "Тег даних не змінився: %1$s",
    "blockdata_notValid": "Цільовий блок не є блоком-сховищем даних",
    "blockdata_outOfWorld": "Не можна змінити блок за межами світу",
    "blockdata_success": "Дані блока оновлено до: %1$s",
    "blockdata_tagError": "Не вдалося розпізнати тег даних: %1$s",
    "bossbar_add_success": "Створено власну смугу здоров’я босів [%1$s]",
    "bossbar_add_failure_invalid": "Недійсний ідентифікатор смуги здоров’я босів. Ідентифікатори потрібно надавати у форматі namespace:id або id (стандарт для простору імен Minecraft).",
    "bossbar_add_failure_exists": "Смуга здоров’я босів з ідентифікатором \"%1$s\" уже наявна",
    "bossbar_description": "Створює та модифікує смуги здоров’я босів",
    "bossbar_get_max": "Власна смуга здоров’я босів [%1$s] має максимум %2$d",
    "bossbar_get_players": "Власну смугу здоров’я босів [%1$s] використовують кілька (%2$s) гравців у грі: %3$s",
    "bossbar_get_players_none": "Власну смугу здоров’я босів [%1$s] не використовує жодний гравець у грі",
    "bossbar_get_players_one": "Власну смугу здоров’я босів [%1$s] використовує 1 гравець у грі: %2$s",
    "bossbar_get_value": "Власна смуга здоров’я босів [%1$s] має значення %2$d",
    "bossbar_get_visible_true": "Власна смуга здоров’я босів [%1$s] зараз відображається",
    "bossbar_get_visible_false": "Власна смуга здоров’я босів [%1$s] зараз прихована",
    "bossbar_list": "Активно кілька (%1$s) власних смуг здоров’я босів: %2$s",
    "bossbar_list_none": "Немає активних власних смуг здоров’я босів",
    "bossbar_list_one": "Активна 1 власна смуга здоров’я босів: %1$s",
    "bossbar_notFound": "Немає смуг здоров’я босів з ідентифікатором \"%1$s\"",
    "bossbar_remove": "Вилучено власну смугу здоров’я босів [%1$s]",
    "change_setting_description": "Змінює параметр на виділеному сервері, коли він працює.",
    "change_setting_success": "Параметр %1$s змінено",
    "chunkinfo_compiled": "Чанк скомпільовано.",
    "chunkinfo_data": "Перші 64 вершини: %1$s",
    "chunkinfo_empty": "Чанк пустий.",
    "chunkinfo_hasLayers": "Чанк має шари: %1$s",
    "chunkinfo_hasNoRenderableLayers": "Чанк не має шарів для рендерингу.",
    "chunkinfo_isEmpty": "Чанк має пусті шари: %1$s",
    "chunkinfo_location": "Координати чанка: (%1$d, %2$d, %3$d)",
    "chunkinfo_noChunk": "За координатами %1$d, %2$d, %3$d чанка не знайдено",
    "chunkinfo_notCompiled": "Чанк не скомпільовано.",
    "chunkinfo_notEmpty": "Чанк не пустий.",
    "chunkinfo_vertices": "Буфер шару %1$s містить %2$d вершин",
    "classroommode_description": "Спроба запустити режим класу та підключитися до нього.",
    "classroommode_success": "Спроба запустити режим класу…",
    "clear_description": "Повністю очищує інвентар гравця.",
    "clear_failure": "Не вдалося очистити інвентар від %1$s",
    "clear_failure_no_items": "Не вдалося очистити інвентар від %1$s, нема що викидати",
    "clear_success": "Інвентар очищено від %1$s, викинуто %2$d предметів",
    "clear_tagError": "Не вдалося розпізнати тег даних: %1$s",
    "clear_testing": "%1$s має %2$d предметів, які відповідають умовам",
    "clearfixedinv_description": "Видаляє всі слоти фіксованого інвентаря.",
    "clearfixedinv_success": "Фіксований інвентар очищено",
    "clone_description": "Клонує блоки з одного регіону до іншого.",
    "clone_failed": "Блоки не клоновано",
    "clone_filtered_error": "Щоб використати фільтр, потрібно вказати блок фільтра",
    "clone_noOverlap": "Джерело й місце призначення не можуть накладатися",
    "clone_outOfWorld": "Не можна дістатися блоків за межами світу",
    "clone_success": "Клоновано %1$d блоків",
    "clone_tooManyBlocks": "Забагато блоків у вказаній області (%1$d > %2$d)",
    "closechat_description": "Закриває вікно чату локального гравця, якщо воно відкрите.",
    "closechat_success": "Чат закрито",
    "closechat_failure": "Чат не було відкрито",
    "closewebsocket_description": "Закриває наявне підключення WebSocket.",
    "code_description": "Запускає конструктор коду.",
    "code_success": "Конструктор коду запущено.",
    "compare_failed": "Джерело й місце призначення не однакові",
    "compare_outOfWorld": "Не можна дістатися блоків за межами світу",
    "compare_success": "Порівняно %1$d блоків",
    "compare_tooManyBlocks": "Забагато блоків у вказаній області (%1$d > %2$d)",
    "corruptworld_description": "Пошкоджує світ, завантажений на сервер.",
    "corruptworld_success": "Світ успішно пошкоджено.",
    "daylock_description": "Блокує й розблоковує цикл дня та ночі.",
    "debug_description": "Запускає або зупиняє сеанс налагодження.",
    "debug_notStarted": "Не можна зупинити профілювання, яке ще навіть не почалося!",
    "debug_start": "Профілювання налагодження розпочато",
    "debug_stop": "Профілювання налагодження зупинено через %.2f с (%1$d циклів)",
    "defaultgamemode_description": "Установлює стандартний режим гри.",
    "defaultgamemode_success": "Поточний стандартний ігровий режим світу: %1$s",
    "deop_description": "Забирає в гравця стан оператора.",
    "deop_failed": "Не вдалося позбавити статусу оператора (рівень дозволів завеликий): %s",
    "deop_success": "Позбавлено статусу оператора: %s",
    "deop_message": "Вас позбавлено статусу оператора",
    "difficulty_description": "Установлює рівень складності.",
    "difficulty_usage": "/difficulty <нова складність>",
    "difficulty_success": "Установлено складність гри: %1$s",
    "downfall_success": "Погоду змінено",
    "effect_description": "Додайте або видаліть ефекти стану.",
    "effect_failure_notActive": "Не вдалося забрати %1$s у %2$s, оскільки у гравця немає такого ефекту",
    "effect_failure_notActive_all": "Не вдалося забрати жодного ефекту в %1$s, оскільки у гравця їх немає",
    "effect_failure_notAMob": "%1$s не може мати ефектів",
    "effect_notFound": "Немає ефекту моба з ідентифікатором %s",
    "effect_success": "Ефект %1$s * %2$d надано %3$s на %4$d c",
    "effect_success_removed": "Забрано ефект %1$s у %2$s",
    "effect_success_removed_all": "Забрано всі ефекти у %1$s",
    "enchant_cantCombine": "%1$s не можна поєднати з %2$s",
    "enchant_invalidLevel": "%1$s не підтримує рівень %2$d",
    "enchant_cantEnchant": "Вибране зачарування не можна додати до цільового предмета: %1$s",
    "enchant_description": "Додає зачарування до вибраного гравцем предмета.",
    "enchant_noItem": "Зачарування спрямовано не на предмет: %1$s",
    "enchant_notFound": "Немає зачарування з ідентифікатором %1$d",
    "enchant_success": "Зачарування виконано для %1$s",
    "entitydata_description": "Змінює тег даних для сутності.",
    "entitydata_failed": "Тег даних не змінився: %1$s",
    "entitydata_noPlayers": "%1$s – це гравець, ви не можете його змінити",
    "entitydata_success": "Дані сутності оновлено до: %1$s",
    "entitydata_tagError": "Не вдалося розпізнати тег даних: %1$s",
    "execute_allInvocationsFailed": "Жодне із заклять не вдалося: \"%1$s\"",
    "execute_failed": "Не вдалося виконати \"%1$s\" як %2$s",
    "execute_description": "Виконує команду від імені однієї чи кількох сутностей.",
    "fill_description": "Повністю заповнює регіон певним блоком.",
    "fill_failed": "Блоки не заповнено",
    "fill_outOfWorld": "Не можна розмістити блоки за межами світу",
    "fill_success": "Заповнено %1$d блоків",
    "fill_tagError": "Не вдалося розпізнати тег даних: %1$s",
    "fill_tooManyBlocks": "Забагато блоків у вказаній області (%1$d > %2$d)",
    "fill_replace_auxvalue_invalid": "Неприпустиме значення даних заміни для блока %1$s",
    "function_description": "Виконує команди, знайдені у відповідному файлі функцій.",
    "function_functionNameNotFound": "Функцію %1$s не знайдено.",
    "function_invalidCharacters": "Функція під назвою '%s' недійсна, символ '%s' неприпустимий у назві функцій.",
    "function_noEngineVersionSpecified": "Неможливо виконати функцію %s. Укажіть min_engine_version у manifest.json пакета поведінки.",
    "function_success": "Успішно виконано входження функції (%1$d).",
    "gamemode_description": "Установлює режим гри для гравця.",
    "gamemode_success_other": "Установлено режим %1$s для гри %2$s",
    "gamemode_success_self": "Установлено режим %1$s для власної гри",
    "gamemode_fail_invalid": "Режим гри \"%1$s\" неприпустимий",
    "gamerule_description": "Визначає або запитує значення правила гри.",
    "gamerule_type_invalid": "Використано неприпустимий тип для правила гри \"%1$s\"",
    "gamerule_type_nocheatsenabled": "Правило гри '%1$s' можна використовувати, лише якщо в цьому світі ввімкнуто чіти.",
    "gamerule_nopermission": "Змінити \"%1$s\" можуть лише власники сервера",
    "gamerule_norule": "Правило гри під назвою \"%1$s\" недоступне",
    "gamerule_success": "Правило гри %1$s оновлено до %2$s",
    "generic_async_initiated": "Запущено команду \"%1$s\" (асинхронний крок %2$d)",
    "generic_boolean_invalid": "\"%1$s\" не має значення true або false",
    "generic_chunk_notFound": "Указаний чанк не знайдено",
    "generic_componentError": "Не вдалося розпізнати список компонентів",
    "generic_dimension_notFound": "Указаний вимір не знайдено",
    "generic_disabled": "На цьому рівні шахрайство не активовано.",
    "generic_disabled_templateLocked": "Параметри наразі заблоковано. Щоб змінити їх, розблокуйте параметри шаблону світу в параметрах гри.",
    "generic_double_tooBig": "Ви ввели завелике число (%.2f), воно не може перевищувати %.2f",
    "generic_double_tooSmall": "Ви ввели замале число (%.2f), воно не може бути меншим за %.2f",
    "generic_duplicateType": "Ідентичні аргументи типу",
    "generic_duplicateSelectorArgument": "Ідентичні аргументи селектора %s",
    "generic_encryption_badkey": "Надано неправильний відкритий ключ. Після форматування PEM очікувався ключ на 120 байт.",
    "generic_encryption_badsalt": "Надано неправильну сіль. Перед кодуванням Base 64 очікувалося 16 байт.",
    "generic_encryption_required": "Потрібен зашифрований сеанс",
    "generic_entity_invalidType": "Тип сутності \"%1$s\" неприпустимий",
    "generic_entity_invalidUuid": "Введено UUID сутності в неправильному форматі",
    "generic_entity_notFound": "Не вдається знайти цю сутність",
    "generic_exception": "Під час спроби виконати цю команду сталася невідома помилка",
    "generic_invalidAgentType": "Аргумент типу застосовано тільки до селектора Agent",
    "generic_invalidcontext": "Надано неприпустимий контекст для певного типу команди",
    "generic_invalidDevice": "Команда яку ви ввели, %s, не підтримується на цьому пристрої",
    "generic_invalidPlayerType": "Аргумент типу застосовано тільки до селектора гравця",
    "generic_invalidType": "Невідомий аргумент типу",
    "generic_levelError": "Максимальний рівень має бути більшим за мінімальний",
    "generic_malformed_body": "Тіло відсутнє або деформоване",
    "generic_malformed_type": "Неприпустимий тип запиту",
    "generic_notimplemented": "Не виконано",
    "generic_num_invalid": "\"%1$s\" є неприпустимим числом",
    "generic_num_tooBig": "Ви ввели завелике число (%1$d), воно не може перевищувати %2$d",
    "generic_num_tooSmall": "Ви ввели замале число (%1$d), воно не може бути меншим за %2$d",
    "generic_parameter_invalid": "\"%1$s\" є неприпустимим параметром",
    "generic_permission_selector": "<недостатньо дозволів для розширення селектора>",
    "generic_player_notFound": "Не вдається знайти цього гравця",
    "generic_protocol_mismatch": "Указана версія протоколу не збігається з версією протоколу Minecraft",
    "generic_radiusError": "Мінімальний радіус селектора має бути меншим за максимальний",
    "generic_radiusNegative": "Радіус не може бути від’ємним",
    "generic_rotationError": "Обертання поза діапазоном",
    "generic_running": "Команда вже виконується",
    "generic_step_failed": "Помилка кроку команди",
    "generic_syntax": "Синтаксична помилка: Неочікуване значення \"%2$s\": у \"%1$s>>%2$s<<%3$s\"",
    "generic_noTargetMatch": "Не знайдено цілей, які відповідали б селектору",
    "generic_targetNotPlayer": "Селектор має бути типу одного гравця",
    "generic_tooManyNames": "Забагато аргументів імені цілі",
    "generic_tooManyTargets": "Забагато цілей відповідають селектору",
    "generic_too_many_requests": "Запитано забагато команд, зачекайте виконання принаймні однієї",
    "generic_unknown": "Невідома команда: %s. Перевірте, чи така команда існує та чи є у вас дозвіл на її використання.",
    "generic_usage": "Використання: %1$s",
    "generic_usage_noparam": "Використання:",
    "generic_version_mismatch": "Запитана версія для цієї команди не існує",
    "generic_version_missing": "Виклики команди, надані не через чат, мають указувати версію команди",
    "getchunkdata_description": "Отримує пікселі для певного чанку.",
    "getchunkdata_success": "Отримано дані чанку",
    "getchunks_description": "Отримує список завантажених чанків.",
    "getchunks_success": "Отримано список чанків",
    "getlocalplayername_description": "Повертає локальне ім’я гравця.",
    "getspawnpoint_description": "Отримує місце призову вказаних гравців.",
    "gettopsolidblock_description": "Отримує позицію верхнього неповітряного блока під указаною позицією",
    "gettopsolidblock_notfound": "Під указаною позицією немає твердих блоків",
    "give_block_notFound": "Блока з іменем %1$d не існує",
    "give_description": "Дає предмет гравцю.",
    "give_item_invalid": "Неприпустимий синтаксис команди: %s з таким значенням не існує",
    "give_item_notFound": "Предмета з іменем %1$d не існує",
    "give_map_invalidData": "Надано неприпустимі дані карти",
    "give_map_featureNotFound": "Не вдалося створити карту розвідки. У цьому вимірі функцію не знайдено",
    "give_success": "Ефект %1$s * %2$d надано %3$s",
    "give_successRecipient": "Вам надано %1$s * %2$d",
    "give_tagError": "Не вдалося розпізнати тег даних: %1$s",
    "help_description": "Відкриває довідку чи список команд.",
    "help_footer": "Підказка. Вводячи команду, натисніть клавішу Tab, щоб команда або її аргументи заповнились автоматично",
    "help_header": "--- Відображення сторінки довідки %1$d з %2$d (/help <сторінка>) ---",
    "help_command_aliases": "%s (також %s):",
    "immutableworld_description": "Установлює незмінний стан світу.",
    "immutableworld_info": "immutableworld = %s",
    "kick_description": "Викидає гравця із сервера.",
    "kick_description_edu": "Прибирає гравця з гри.",
    "kick_not_found": "Не вдалося знайти гравця %1$s",
    "kick_not_yourself": "Неможливо видалити себе з гри",
    "kick_success": "%1$s викинуто з гри",
    "kick_success_reason": "%1$s викинуто з гри: \"%2$s\"",
    "kick_success_reasonedu": "%1$s вилучено з гри: \"%2$s\"",
    "kick_no_host": "Хоста не можна викинути з гри.",
    "kick_no_teacher": "Учителів не можна видалити з гри.",
    "kill_successful_edu": "Видалено %1$s",
    "kill_successful": "%1$s вбито",
    "kill_description_edu": "Видалені сутності (гравців, мобів тощо).",
    "kill_description": "Викидає сутності (гравців, мобів тощо).",
    "list_description": "Показує список гравців на сервері.",
    "locate_description": "Показує координати найближчої конструкції певного типу.",
    "locate_fail_noplayer": "Цю команду може використовувати лише відповідний гравець",
    "locate_fail_nostructurefound": "У цьому вимірі не знайдено відповідної конструкції",
    "locate_success": "Найближча функція %1$s на блоці %2$s, (y?), %3$s",
    "togglecontentlog_toggle": "Команда ввімкнення або вимкнення журналу вмісту",
    "togglecontentlog_enabled": "Журнал вмісту ввімкнуто",
    "togglecontentlog_disabled": "Журнал вмісту вимкнуто",
    "me_description": "Відображає повідомлення про вас.",
    "message_display_incoming": "%1$s шепоче вам: %2$s",
    "message_display_outgoing": "Ви шепочете %1$s: %2$s",
    "message_sameTarget": "Не можна надіслати особисте повідомлення самому собі!",
    "mixer_description": "Керування взаємодією з Міксером",
    "mixer_error_unknown": "Сталася невідома помилка з Міксером.",
    "mixer_error_notoken": "Щоб увімкнути інтерактивну службу Mixer, увійдіть під своїм обліковим записом Microsoft.",
    "mixer_error_notsupported": "Пристрій, який ви використовуєте, не підтримує взаємодію з Міксером.",
    "mixer_interactive_error": "Сталася помилка з Міксером: %1$s",
    "mixer_scene_failed": "Кадру під назвою %1$s не існує. Перевірте, чи правильно ви ввели назву кадру.",
    "mixer_scene_success": "Кадр змінено на: %1$s",
    "mixer_start_success": "Починається взаємодія з Міксером: %1$s",
    "mixer_start_fail_invalidCode": "Не вдалося знайти проект з ідентифікатором \"%1$s\". Перевірте ідентифікатор і код поширення.",
    "mixer_stop_success": "Зупиняється взаємодія з Міксером.",
    "mixer_stop_fail": "Немає сеансів взаємодії, які можна припинити.",
    "mixer_status_notinitialized": "Взаємодію не ініціалізовано.",
    "mixer_status_enabled": "Взаємодію ввімкнуто.",
    "mixer_status_initializing": "Триває ініціалізація взаємодії.",
    "mixer_status_pending": "Очікується взаємодія.",
    "mixer_status_disabled": "Взаємодію вимкнуто.",
    "mixer_activatedbutton": "%1$s активує %2$s.",
    "mobevent_description": "Контролює, які події мобів можна запускати.",
    "mobevent_eventsEnabledSetToTrue": "Події мобів тепер увімкнуто. Окремі події, для яких встановлено значення false, не запускатимуться.",
    "mobevent_eventsEnabledSetToFalse": "Події мобів тепер вимкнуто. Окремі події не запускатимуться.",
    "mobevent_eventsEnabledIsTrue": "Події мобів увімкнуто. Окремі події, для яких встановлено значення false, не запускатимуться.",
    "mobevent_eventsEnabledIsFalse": "Події мобів вимкнуто. Окремі події не запускатимуться.",
    "mobevent_eventSetToTrue": "Для події мобів %s (id: %s) встановлено значення true.",
    "mobevent_eventSetToTrueButEventsDisabled": "Для події мобів %s (id: %s) встановлено значення true, проте події мобів вимкнуто.",
    "mobevent_eventSetToFalse": "Для події мобів %s (id: %s) встановлено значення false.",
    "mobevent_eventIsTrue": "Для події мобів %s (id: %s) встановлено значення true.",
    "mobevent_eventIsTrueButEventsDisabled": "Для події мобів %s (id: %s) встановлено значення true, проте події мобів вимкнуто.",
    "mobevent_eventIsFalse": "Для події мобів %s (id: %s) встановлено значення false.",
    "op_description": "Надає гравцю стан оператора.",
    "op_failed": "Не вдалося надати статус оператора (уже оператор або має вищий статус): %s",
    "op_success": "Надано статус оператора: %s",
    "op_message": "Вам надано статус оператора",
    "origin_commandblock": "Командний блок",
    "origin_external": "Зовнішні",
    "origin_devconsole": "DevConsole",
    "origin_script": "Обробник сценаріїв",
    "origin_server": "Серверні",
    "origin_teacher": "Учительські",
    "ops_description": "Перезавантажує та застосовує дозволи оператора.",
    "ops_reloaded": "Операторів перезавантажено з файлу.",
    "ops_set_success": "Для гравця %s установлено рівень оператора.",
    "permissions_description": "Перезавантажує та застосовує дозволи.",
    "permissions_reloaded": "Дозволи перезавантажено з файлу.",
    "permissions_set_failed": "Не вдалось установити рівень дозволів %s для гравця %s.",
    "permissions_set_success": "Установлено рівень дозволів %s для гравця %s.",
    "permissions_save_failed": "Не вдалося зберегти рівень дозволів %s для гравця %s.",
    "permissions_save_success": "Збережено рівень дозволів %s для гравця %s.",
    "spawnParticleEmitter_description": "Створює емітер часток",
    "particle_description": "Створює частинки.",
    "particle_notFound": "Невідоме ім’я ефекту (%1$s)",
    "particle_success": "Відтворення ефекту %1$s %2$d разів",
    "players_list": "Гравці онлайн %1$d/%2$d:",
    "players_list_names": "%s",
    "playsound_description": "Відтворює звук.",
    "playsound_playerTooFar": "Гравець %1$s надто далеко, щоб почути звук",
    "playsound_success": "Відтворено звук \"%1$s\" для %2$s",
    "position_description": "Вмикає та вимикає координати для гравця.",
    "publish_failed": "Не вдається захостити локальну гру",
    "publish_started": "Локальну гру захощено на порту %1$s",
    "querytarget_description": "Отримує ім’я, ідентифікатор і відомості про перетворення заданих цільових сутностей.",
    "querytarget_success": "Цільові дані: %1$s",
    "reload_description": "Перезавантажує всі файли функцій із попередніх пакетів поведінки.",
    "reload_success": "Наявні файли функцій перезавантажено. Перезапустіть Minecraft, щоб перезавантажити НОВІ функції.",
    "replaceitem_description": "Замінює предмети в інвентарях.",
    "replaceitem_failed": "Не вдалося замінити слот %s (%d) на %d * %s",
    "replaceitem_keepFailed": "У слоті %s %d уже міститься предмет.",
    "replaceitem_noContainer": "Блок у точці %s не є контейнером",
    "replaceitem_badSlotNumber": "Не вдалося замінити слот %d, має бути значення від %d до %d.",
    "replaceitem_success": "Слот %s (%d) замінено на %d * %s",
    "replaceitem_success_entity": "Слот %s (%d) із %s замінено на %d * %s",
    "replaceitem_tagError": "Не вдалося розпізнати тег даних: %1$s",
    "save_description": "Перевіряйте, як гра зберігає дані на диск.",
    "save_disabled": "Автоматичне збереження світу вимкнуто",
    "save_enabled": "Автоматичне збереження світу ввімкнуто",
    "save_failed": "Не вдалося зберегти: %1$s",
    "save_start": "Збереження…",
    "save_success": "Світ збережено",
    "save_all_error": "Під час спроби зупинити зберігання рівня сталася помилка.",
    "save_all_success": "Дані збережено. Тепер файли готові до копіювання.",
    "save_off_alreadyOff": "Збереження вже вимкнуто.",
    "save_on_alreadyOn": "Збереження вже ввімкнуто.",
    "save_on_notDone": "Попереднього разу збереження не було завершено.",
    "save_on_description": "Вмикає автоматичне збереження сервера.",
    "save_on_success": "Зміни для рівня відновлено.",
    "save_state_description": "Перевіряє, чи попередня операція \"Зберегти все\" була завершена, і наводить список файлів.",
    "say_description": "Надсилає повідомлення в чат іншим гравцям.",
    "scoreboard_description": "Відслідковує та відображає рахунок для різних цілей.",
    "scoreboard_allMatchesFailed": "Помилка всіх зіставлень",
    "scoreboard_noMultiWildcard": "Дозволяється лише один символ узагальнення для користувача",
    "scoreboard_objectiveNotFound": "За іменем \"%1$s\" не знайдено жодної цілі",
    "scoreboard_objectiveReadOnly": "Ціль \"%1$s\" призначено лише для читання, тому її не можна встановити",
    "scoreboard_objectives_add_alreadyExists": "Ціль з іменем \"%1$s\" уже існує",
    "scoreboard_objectives_add_displayTooLong": "Коротке ім’я \"%1$s\" задовге для об’єкта, його довжина не може перевищувати %2$d знаків",
    "scoreboard_objectives_add_success": "Додано новий об’єкт \"%1$s\"",
    "scoreboard_objectives_add_tooLong": "Ім’я \"%1$s\" задовге для об’єкта, його довжина не може перевищувати %2$d знаків",
    "scoreboard_objectives_add_wrongType": "Неприпустимий тип критерію об’єкта \"%1$s\"",
    "scoreboard_objectives_add_needName": "Укажіть ім’я цілі.",
    "scoreboard_objectives_description": "Змінити цілі в таблиці результатів.",
    "scoreboard_objectives_list_count": "На табло показано %1$d цілей:",
    "scoreboard_objectives_list_empty": "На табло немає цілей",
    "scoreboard_objectives_list_entry": "- %1$s: коротке ім’я – \"%2$s\", тип – \"%3$s\"",
    "scoreboard_objectives_remove_success": "Видалено ціль \"%1$s\"",
    "scoreboard_objectives_setdisplay_invalidSlot": "Немає такого слоту для відображення \"%1$s\"",
    "scoreboard_objectives_setdisplay_successCleared": "Очищено слот для відображення цілі \"%1$s\"",
    "scoreboard_objectives_setdisplay_successSet": "Установити для відображеної цілі в слоті \"%1$s\" значення \"%2$s\"",
    "scoreboard_players_add_success": "Додано %1$d очк. до цілі [%2$s] для гравця %3$s (тепер %4$d)",
    "scoreboard_players_add_multiple_success": "Додано %1$d очк. до цілі [%2$s] для %3$d сутн.",
    "scoreboard_players_nameNotFound": "Укажіть ім’я гравця.",
    "scoreboard_players_enable_noTrigger": "Ціль %1$s не є тригером",
    "scoreboard_players_enable_success": "Увімкнуто тригер %1$s для %2$s",
    "scoreboard_players_list_count": "На табло показано %1$d відстежуваних гравців:",
    "scoreboard_players_list_empty": "На табло немає відстежуваних гравців",
    "scoreboard_players_list_player_count": "Показано %1$d відстежуваних цілей для %2$s:",
    "scoreboard_players_list_player_empty": "Для гравця %1$s немає записаних очок",
    "scoreboard_players_list_player_entry": "- %2$s: %1$d (%3$s)",
    "scoreboard_players_operation_invalidOperation": "Неприпустима операція %1$s",
    "scoreboard_players_operation_notFound": "Очки %1$s для %2$s не знайдено",
    "scoreboard_players_operation_success": "Оновлено ціль [%1$s] для %2$d сутн.",
    "scoreboard_players_offlinePlayerName": "Гравець офлайн",
    "scoreboard_players_random_invalidRange": "Мінімум (%1$d) не менше максимуму (%2$d)",
    "scoreboard_players_remove_success": "Видалено %1$d очк. з цілі [%2$s] для гравця %3$s (тепер %4$d)",
    "scoreboard_players_remove_multiple_success": "Видалено %1$d очк. з цілі [%2$s] для %3$d сутн.",
    "scoreboard_players_reset_success": "Скинуто очки гравця %1$s",
    "scoreboard_players_resetscore_success": "Скинуто очки %1$s гравця %2$s",
    "scoreboard_players_set_success": "Задано ціль [%1$s] для гравця %2$s: %3$d",
    "scoreboard_players_set_multiple_success": "Задано ціль [%1$s] для %2$d сутн.: %3$d",
    "scoreboard_players_set_tagError": "Не вдалося розпізнати тег даних, причина: %1$s",
    "scoreboard_players_set_tagMismatch": "Тег даних не підходить для %1$s",
    "scoreboard_players_score_notFound": "Очки \"%1$s\" для гравця \"%2$s\" не знайдено",
    "scoreboard_players_test_failed": "Очки %1$d ПОЗА діапазоном від %2$d до %3$d",
    "scoreboard_players_test_success": "Очки %1$d у діапазоні від %2$d до %3$d",
    "scoreboard_teamNotFound": "За іменем \"%1$s\" не знайдено жодної команди",
    "scoreboard_teams_add_alreadyExists": "Команда з іменем \"%1$s\" уже існує",
    "scoreboard_teams_add_displayTooLong": "Коротке ім’я \"%1$s\" задовге для команди, його довжина не може перевищувати %2$d знаків",
    "scoreboard_teams_add_success": "Додано нову команду \"%1$s\"",
    "scoreboard_teams_add_tooLong": "Ім’я \"%1$s\" задовге для команди, його довжина не може перевищувати %2$d знаків",
    "scoreboard_teams_empty_alreadyEmpty": "Команда %1$s уже пуста, не можна видалити неіснуючих гравців",
    "scoreboard_teams_empty_success": "Видалено всіх %1$d гравців із команди %2$s",
    "scoreboard_teams_join_failure": "Не вдалося додати %1$d гравців до команди %2$s: %3$s",
    "scoreboard_teams_join_success": "Додано %1$d гравців до команди %2$s: %3$s",
    "scoreboard_teams_leave_failure": "Не вдалося видалити %1$d гравців із їхніх команд: %2$s",
    "scoreboard_teams_leave_noTeam": "Ви не належите до команди",
    "scoreboard_teams_leave_success": "%1$d гравців видалено з їхніх команд: %2$s",
    "scoreboard_teams_list_count": "На табло показано %1$d команд:",
    "scoreboard_teams_list_empty": "На табло не відображаються команди",
    "scoreboard_teams_list_entry": "- %1$s: команда \"%2$s\" має %3$d гравців",
    "scoreboard_teams_list_player_count": "Показано %1$d гравців у команді %2$s:",
    "scoreboard_teams_list_player_empty": "У команді %1$s немає гравців",
    "scoreboard_teams_list_player_entry": "- %2$s: %1$d (%3$s)",
    "scoreboard_teams_option_noValue": "Припустимі значення для параметра %1$s: %2$s",
    "scoreboard_teams_option_success": "Для параметра %1$s команди %2$s установлено значення %3$s",
    "scoreboard_teams_remove_success": "Команду %1$s видалено",
    "seed_success": "Сід: %1$s",
    "setblock_description": "Змінює один блок на інший.",
    "setblock_failed": "Не вдається розмістити блок",
    "setblock_noChange": "Не вдалося розмістити блок",
    "setblock_notFound": "Блока з ідентифікатором/іменем %1$d не існує",
    "setblock_outOfWorld": "Не можна розмістити блок за межами світу",
    "setblock_success": "Блок розміщено",
    "setblock_tagError": "Не вдалося розпізнати тег даних: %1$s",
    "setidletimeout_success": "Час очікування встановлено на %1$d хв.",
    "setfixedinvslots_description": "Установлює кількість фіксованих слотів інвентарю для сервера.",
    "setfixedinvslots_success": "Кількість фіксованих слотів інвентаря встановлено на %1$d",
    "setfixedinvslot_description": "Установлює фіксований слот для певного предмета.",
    "setfixedinvslot_success": "Для фіксованого слоту інвентаря %1$d установлено %2$s",
    "globalpause_description": "Зчитує або встановлює стан паузи для всіх гравців у світі.",
    "globalpause_success": "Поставлено на паузу",
    "setmaxplayers_description": "Установлює максимальну кількість гравців на цей ігровий сеанс.",
    "setmaxplayers_success": "Установити макс. гравців: %1$d.",
    "setmaxplayers_success_upperbound": "(Залежить від максимальної дозволеної кількості підключень)",
    "setmaxplayers_success_lowerbound": "(Залежить від поточної кількості гравців)",
    "setworldspawn_description": "Установлює місце призову світу.",
    "setworldspawn_success": "Задано координати місця призову світу (%1$d, %2$d, %3$d)",
    "setworldspawn_wrongDimension": "Місце призову світу не можна задати в цьому вимірі",
    "spawnpoint_success_single": "Задано координати місця призову %1$s (%2$d, %3$d, %4$d)",
    "spawnpoint_description": "Установлює місце призову гравця.",
    "spawnpoint_success_multiple_specific": "Для %1$s задано координати місця призову (%2$d, %3$d, %4$d)",
    "spawnpoint_success_multiple_generic": "Установлено місце призову для %1$s",
    "spawnpoint_wrongDimension": "Місце призову не можна задати в цьому вимірі",
    "spreadplayers_description": "Телепортує сутності до випадкових місць.",
    "spreadplayers_failure_players": "Не вдалося розсіяти %1$s гравців по %2$s,%3$s (забагато гравців для цієї території: спробуйте розсіяти не більше %4$s)",
    "spreadplayers_failure_teams": "Не вдалося розсіяти %1$s команди по %2$s,%3$s (забагато гравців для цієї території: спробуйте розсіяти не більше %4$s)",
    "spreadplayers_info_players": "(Середня відстань між гравцями становить %1$s блоків після %2$s ітерацій)",
    "spreadplayers_info_teams": "(Середня відстань між командами становить %1$s блоків після %2$s ітерацій)",
    "spreadplayers_spreading_players": "Розсіювання %1$s гравців по %2$s блоках %3$s,%4$s (мін. кількість блоків між ними: %5$s)",
    "spreadplayers_spreading_teams": "Розсіювання %1$s команд по %2$s блоках %3$s,%4$s (мін. кількість блоків між ними: %5$s)",
    "spreadplayers_success_players": "%1$s гравців успішно розсіяно по території %2$s,%3$s",
    "spreadplayers_success_teams": "%1$s команд успішно розсіяно по території %2$s,%3$s",
    "stats_cleared": "Статистику %1$s очищено",
    "stats_failed": "Неприпустимі параметри",
    "stats_noCompatibleBlock": "Блок за координатами %1$d, %2$d, %3$d не може відстежувати статистику",
    "stats_success": "Збереження статистики %1$s у %2$s на %3$s",
    "stop_description": "Зупиняє сервер.",
    "stop_start": "Зупинка сервера",
    "stopsound_description": "Зупиняє звук.",
    "stopsound_success": "Зупинено звук %s на %s",
    "stopsound_success_all": "Зупинено усі звуки на %s",
    "summon_description": "Викликає сутність.",
    "summon_failed": "Не вдається викликати об’єкт",
    "summon_outOfWorld": "Неможливо викликати об’єкт з-за меж світу",
    "summon_success": "Об’єкт успішно викликано",
    "summon_tagError": "Не вдалося розпізнати тег даних: %1$s",
    "tag_description": "Керує тегами, які зберігаються в сутностях.",
    "tag_add_failed": "Цільовий об’єкт уже має один або забагато тегів",
    "tag_add_success_single": "Додано тег '%1$s' до %2$s",
    "tag_add_success_multiple": "Додано тег '%1$s' до сутностей (%2$d)",
    "tag_list_single_empty": "%s не має тегів",
    "tag_list_single_success": "%1$s має теги (%2$d): %3$s",
    "tag_list_multiple_empty": "Сутності (%d) не мають тегів",
    "tag_list_multiple_success": "Сутності (%1$d) мають теги (усього %2$d): %3$s",
    "tag_remove_failed": "Цільовий об’єкт не має цього тегу",
    "tag_remove_success_single": "Видалено тег '%1$s' з %2$s",
    "tag_remove_success_multiple": "Видалено тег '%1$s' із сутностей (%2$d)",
    "tell_description": "Надсилає особисте повідомлення одному чи кільком гравцям.",
    "tellraw_description": "Надсилає JSON-повідомлення іншим гравцям.",
    "tellraw_jsonException": "Неприпустимий формат JSON: %1$s",
    "tellraw_jsonStringException": "Неприпустимі дані рядка у форматі JSON.",
    "tellraw_error_noData": "Дані не надано.",
    "tellraw_error_notArray": "Об’єкт rawtext має містити масив. Приклад: \"rawtext\":[{..}]",
    "tellraw_error_textNotString": "текстове поле в об’єкті rawtext має містити рядок. Приклад: \"rawtext\":[{\"text\": \"text to display\"}]",
    "tellraw_error_translateNotString": "поле перекладу в об’єкті rawtext має містити код мови: \"rawtext\":[{\"translate\": \"gui.ok\"}]",
    "tellraw_error_withNotArrayOrRawText": "поле rawtext має містити масив або інший об’єкт rawtext. Приклад 1: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\": [ \"value1\", \"value2\" ]}]  Приклад 2: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\":{\"rawtext\":[{\"text\": \"value1\"}, {\"text\": \"value2\"}]}}]",
    "tellraw_error_itemIsNotObject": "Значення Json у масиві rawtext не було об’єктом. Приклад: \"rawtext\": [{ \"text\" : \"my text\" }]",
    "educlientinfo_description": "Отримайте ідентифікатор клієнта та статус хоста. Призначено для CM.",
    "testfor_description": "Лічить сутності (гравців, мобів, предмети тощо), які відповідають заданим умовам.",
    "testfor_failure": "%1$s не відповідає необхідній структурі даних",
    "testfor_success": "Знайдено %1$s",
    "testfor_tagError": "Не вдалося розпізнати тег даних: %1$s",
    "testforblock_description": "Перевіряє наявність певного блока в указаному розташуванні.",
    "testforblock_failed_data": "Стан блока %1$d,%2$d,%3$d відрізняється від очікуваного.",
    "testforblock_failed_nbt": "Блок за координатами %1$d,%2$d,%3$d не мав необхідних ключів NBT.",
    "testforblock_failed_tile": "Блок за координатами %1$d,%2$d,%3$d є %4$s (очікувалося: %5$s).",
    "testforblock_failed_tileEntity": "Блок за координатами %1$d,%2$d,%3$d не є блоковою сутністю й не підтримує узгодження тегів.",
    "testforblock_outOfWorld": "Неможливо виконати перевірку для блока за межами світу",
    "testforblock_success": "Знайдено блок за координатами %1$d,%2$d,%3$d.",
    "testforblocks_description": "Перевіряє збіг блоків у двох регіонах.",
    "tickingarea_description": "Додайте або видаліть зациклені області чи створіть їх список.",
    "tickingarea_inuse": "Використовується %1$d/%2$d зациклених областей.",
    "tickingarea_noneExist_currentDimension": "У поточному вимірі немає зациклених областей.",
    "tickingarea_add_bounds_success": "Додано зациклену область із %1$d по %2$d.",
    "tickingarea_add_circle_success": "Додано зациклену область із центром у %1$d і радіусом у %2$d чанків.",
    "tickingarea_add_failure": "Уже досягнуто максимальної кількості зациклених областей (%1$d). Не можна додати інші зациклені області.",
    "tickingarea_add_conflictingname": "Зациклена область з іменем %1$s уже існує.",
    "tickingarea_add_chunkfailure": "Зациклена область містить більше %1$d чанків, зациклена область завелика, тому її не можна створити.",
    "tickingarea_add_radiusfailure": "Радіус не може перевищувати %1$d, зациклена область завелика, тому її не можна створити.",
    "tickingarea_remove_success": "Зациклені області видалено",
    "tickingarea_remove_failure": "У поточному вимірі немає зациклених областей із положенням блока %1$d.",
    "tickingarea_remove_byname_failure": "У поточному вимірі з іменем %1$s немає зациклених областей.",
    "tickingarea_remove_all_success": "Зациклені області видалено",
    "tickingarea_remove_all_failure": "У поточному вимірі немає зациклених областей.",
    "tickingarea_list_chunks": "чанки",
    "tickingarea_list_circle_radius": "Радіус",
    "tickingarea_list_success_currentDimension": "Список усіх зациклених областей у поточному вимірі",
    "tickingarea_list_success_allDimensions": "Список усіх зациклених областей в усіх вимірах",
    "tickingarea_list_failure_allDimensions": "Зациклених областей немає в жодному вимірі.",
    "tickingarea_list_to": "по",
    "tickingarea_list_type_circle": "Коло",
    "time_added": "До часу додано %1$d",
    "time_description": "Змінює або запитує ігровий час світу.",
    "time_disabled": "На цьому рівні ввімкнуто \"Завжди день\".",
    "time_query_day": "День: %d",
    "time_query_daytime": "Денний час: %d",
    "time_query_gametime": "Ігровий час: %d",
    "time_set": "Установлено час: %1$d",
    "time_stop": "Час: %1$s",
    "title_description": "Керує заголовками екранів.",
    "title_success": "Команду заголовка успішно виконано",
    "titleraw_description": "Керує заголовками екрана з повідомленнями JSON.",
    "toggledownfall_description": "Переключає погоду.",
    "tp_description": "Телепортує сутності (гравців, мобів тощо).",
    "tp_notSameDimension": "Неможливо виконати телепортацію, оскільки гравці перебувають у різних вимірах",
    "tp_outOfWorld": "Не можна телепортувати сутності за межі світу",
    "tp_permission": "У вас немає дозволу на використання цієї консольної команди.",
    "tp_safeTeleportFail": "Не вдалося телепортувати %1$s до %2$s, тому що в області були блоки.",
    "tp_far": "Не вдалося телепортувати %1$s до незавантаженої області в %2$s",
    "tp_success": "%1$s телепортовано до %2$s",
    "tp_successVictim": "Вас телепортовано до %1$s",
    "tp_success_coordinates": "%1$s телепортовано до %2$s, %3$s, %4$s",
    "transferserver_description": "Переносить гравця на інший сервер.",
    "transferserver_successful": "Гравця перенесено",
    "transferserver_invalid_port": "Недійсний порт (0–65535)",
    "trigger_description": "Установлює тригер для активації.",
    "trigger_disabled": "Тригер %1$s не ввімкнуто",
    "trigger_invalidMode": "Неправильний режим тригера %1$s",
    "trigger_invalidObjective": "Неправильне ім’я тригера %1$s",
    "trigger_invalidPlayer": "Команду /trigger можуть використовувати лише гравці",
    "trigger_success": "Тригер %1$s змінено на %2$s %3$s",
    "unban_failed": "Не вдалося розбанити гравця %1$s",
    "unban_success": "Гравця %1$s розбанено",
    "unbanip_invalid": "Ви ввели неправильну IP-адресу",
    "unbanip_success": "IP-адресу %1$s розбанено",
    "validategamelighting_description": "Перевірити освітлення гри для вказаного регіону",
    "validategamelighting_checkRegionTooBig": "Завеликий регіон, у якому потрібно перевірити освітлення! (%1$d > %2$d)",
    "validategamelighting_outOfWorld": "Не можна перевірити освітлення за межами світу",
    "weather_clear": "Зміна на ясну погоду",
    "weather_description": "Установлює погоду.",
    "weather_disabled": "Погодній цикл не ввімкнуто на цьому рівні.",
    "weather_query": "Стан погоди: %s",
    "weather_query_clear": "ясно",
    "weather_query_rain": "дощ",
    "weather_query_thunder": "грім",
    "weather_rain": "Зміна на дощ",
    "weather_thunder": "Зміна на грозу",
    "whitelist_add_failed": "Не вдалося додати %1$s до білого списку",
    "whitelist_add_success": "%1$s додано до білого списку",
    "whitelist_description": "Керує білим списком сервера.",
    "whitelist_disabled": "Білий список вимкнуто",
    "whitelist_enabled": "Білий список увімкнуто",
    "whitelist_list": "У білому списку %1$d гравців (з %2$d бачених):",
    "whitelist_reloaded": "Білий список перезавантажено з файлу.",
    "whitelist_remove_failed": "Не вдалося видалити %1$s з білого списку",
    "whitelist_remove_success": "%1$s видалено з білого списку",
    "world_age_description": "Змінює або запитує вік світу (час від створення).",
    "world_age_added": "До віку світу додано %1$d",
    "world_age_query": "Вік світу: %d",
    "world_age_set": "Установлено вік світу: %1$d",
    "worldborder_center_success": "Для центру кордону світу задано координати %1$s,%2$s",
    "worldborder_damage_amount_success": "Для кордону світу встановлено розмір ушкодження %1$s на блок (раніше: %2$s на блок)",
    "worldborder_damage_buffer_success": "Для кордону світу встановлено буфер ушкодження %1$s блоків (раніше: %2$s блоків)",
    "worldborder_get_success": "Поточна ширина кордону світу: %1$s блоків",
    "worldborder_set_success": "Для кордону світу встановлено ширину %1$s блоків (раніше: %2$s блоків)",
    "worldborder_setSlowly_grow_success": "Розширення кордону світу до %1$s блоків (раніше: %2$s блоків) за %3$s с",
    "worldborder_setSlowly_shrink_success": "Звуження кордону світу до %1$s блоків (раніше: %2$s блоків) за %3$s с",
    "worldborder_warning_distance_success": "Для кордону світу встановлено попередження на відстані %1$s блоків (раніше: %2$s блоків)",
    "worldborder_warning_time_success": "Для кордону світу встановлено попередження за %1$s с (раніше: %2$s с)",
    "worldbuilder_description": "Переключення стану відвідувача \"Творець світу\".",
    "worldbuilder_success": "Стан \"Творець світу\" оновлено до %1$s",
    "wsserver_description": "Виконує спробу підключитися до сервера WebSocket за вказаною URL-адресою.",
    "wsserver_invalid_url": "Указана URL-адреса сервера неправильна",
    "wsserver_request_existing": "Зараз виконується ще один запит на підключення",
    "wsserver_request_failed": "Не вдалося підключитися до сервера: %1$s",
    "wsserver_success": "Установлено підключення до сервера: %1$s",
    "xp_description": "Додає або забирає досвід гравця.",
    "xp_failure_widthdrawXp": "Не вдається забрати в гравця одиниці досвіду",
    "xp_success": "Надано %1$d од. досвіду гравцеві %2$s",
    "xp_success_levels": "Надано %1$d рівнів гравцеві %2$s",
    "xp_success_negative_levels": "Забрано %1$d рівнів у гравця %2$s"
},
item:{
    "air": [
        "Повітря"
    ],
    "apple": [
        "Яблуко"
    ],
    "golden_apple": [
        "Золоте яблучко"
    ],
    "appleenchanted": [
        "Зачароване яблуко"
    ],
    "armor_stand": [
        "Стійка для обладунку"
    ],
    "arrow": [
        "Стріла"
    ],
    "tipped_arrow": [
        "Зачарована стріла"
    ],
    "banner": [
        "Чорний стяг",
        "Чорний стяг",
        "Червоний стяг",
        "Зелений стяг",
        "Коричневий стяг",
        "Синій стяг",
        "Фіолетовий стяг",
        "Бірюзовий стяг",
        "Світло-сірий стяг",
        "Сірий стяг",
        "Рожевий стяг",
        "Салатовий стяг",
        "Жовтий стяг",
        "Блакитний стяг",
        "Малиновий стяг",
        "Помаранчевий стяг",
        "Білий стяг"
    ],
    "bed": [
        "Ліжко",
        "Біле ліжко",
        "Помаранчеве ліжко",
        "Малинове ліжко",
        "Блакитне ліжко",
        "Жовте ліжко",
        "Салатове ліжко",
        "Рожеве ліжко",
        "Сіре ліжко",
        "Світло-сіре ліжко",
        "Бірюзове ліжко",
        "Фіолетове ліжко",
        "Синє ліжко",
        "Коричневе ліжко",
        "Зелене ліжко",
        "Червоне ліжко",
        "Чорне ліжко"
    ],
    "bell": [
        "Дзвін"
    ],
    "steak": [
        "Стейк"
    ],
    "beef": [
        "Сира яловичина"
    ],
    "beetroot": [
        "Буряк"
    ],
    "beetroot_soup": [
        "Борщ"
    ],
    "blaze_powder": [
        "Вогняний порошок"
    ],
    "blaze_rod": [
        "Вогняний прут"
    ],
    "boat": [
        "Човен із дуба",
        "Човен із дуба",
        "Човен із хвойного дерева",
        "Човен із берези",
        "Човен із тропічного дерева",
        "Човен з акації",
        "Човен із темного дуба"
    ],
    "bone": [
        "Кістка"
    ],
    "book": [
        "Книга"
    ],
    "chainmail_boots": [
        "Кольчужні чоботи"
    ],
    "leather_boots": [
        "Шкіряні чоботи"
    ],
    "diamond_boots": [
        "Алмазні чоботи"
    ],
    "golden_boots": [
        "Золоті чоботи"
    ],
    "iron_boots": [
        "Залізні чоботи"
    ],
    "bow": [
        "Лук"
    ],
    "bowl": [
        "Миска"
    ],
    "bread": [
        "Хліб"
    ],
    "brewing_stand": [
        "Варильна стійка"
    ],
    "brick": [
        "Цегла"
    ],
    "bucket": [
        "Відро"
    ],
    "bucketLava": [
        "Відро лави"
    ],
    "bucketWater": [
        "Відро води"
    ],
    "bucketFish": [
        "Відерце тріски"
    ],
    "bucketSalmon": [
        "Відерце лосося"
    ],
    "bucketTropical": [
        "Відерце тропічної риби"
    ],
    "bucketPuffer": [
        "Відерце скелезуба"
    ],
    "bucketCustomFish": [
        "Відерце риби"
    ],
    "tropicalColorWhite": [
        "Білий"
    ],
    "tropicalColorOrange": [
        "Помаранчевий"
    ],
    "tropicalColorMagenta": [
        "Малиновий"
    ],
    "tropicalColorSky": [
        "Небесно-блакитний"
    ],
    "tropicalColorYellow": [
        "Жовтий"
    ],
    "tropicalColorLime": [
        "Салатовий"
    ],
    "tropicalColorRose": [
        "Рожевий"
    ],
    "tropicalColorGray": [
        "Сірий"
    ],
    "tropicalColorSilver": [
        "Сріблястий"
    ],
    "tropicalColorTeal": [
        "Синьо-зелений"
    ],
    "tropicalColorPlum": [
        "Сливовий"
    ],
    "tropicalColorBlue": [
        "Синій"
    ],
    "tropicalColorBrown": [
        "Коричневий"
    ],
    "tropicalColorGreen": [
        "Зелений"
    ],
    "tropicalColorRed": [
        "Червоний"
    ],
    "tropicalBodyKobSingle": [
        "Коб (%1$s)"
    ],
    "tropicalBodySunstreakSingle": [
        "Пустельний кіт (%1$s)"
    ],
    "tropicalBodySnooperSingle": [
        "Нишпорка (%1$s)"
    ],
    "tropicalBodyDasherSingle": [
        "Бігун (%1$s)"
    ],
    "tropicalBodyBrinelySingle": [
        "Солонько (%1$s)"
    ],
    "tropicalBodySpottySingle": [
        "Плямистий (%1$s)"
    ],
    "tropicalBodyFlopperSingle": [
        "Симулянт (%1$s)"
    ],
    "tropicalBodyStripeySingle": [
        "Смугастик (%1$s)"
    ],
    "tropicalBodyGlitterSingle": [
        "Блискунчик %1$s"
    ],
    "tropicalBodyBlockfishSingle": [
        "Блок-риба (%1$s)"
    ],
    "tropicalBodyBettySingle": [
        "Бетті (%1$s)"
    ],
    "tropicalBodyClayfishSingle": [
        "Глинориба (%1$s)"
    ],
    "tropicalBodyKobMulti": [
        "Коб (%1$s-%2$s)"
    ],
    "tropicalBodySunstreakMulti": [
        "Пустельний кіт (%1$s-%2$s)"
    ],
    "tropicalBodySnooperMulti": [
        "Нишпорка (%1$s-%2$s)"
    ],
    "tropicalBodyDasherMulti": [
        "Бігун (%1$s-%2$s)"
    ],
    "tropicalBodyBrinelyMulti": [
        "Солонько (%1$s-%2$s)"
    ],
    "tropicalBodySpottyMulti": [
        "Плямистий (%1$s-%2$s)"
    ],
    "tropicalBodyFlopperMulti": [
        "Симулянт (%1$s-%2$s)"
    ],
    "tropicalBodyStripeyMulti": [
        "Смугастик (%1$s-%2$s)"
    ],
    "tropicalBodyGlitterMulti": [
        "Блискунчик (%1$s-%2$s)"
    ],
    "tropicalBodyBlockfishMulti": [
        "Блок-риба (%1$s-%2$s)"
    ],
    "tropicalBodyBettyMulti": [
        "Бетті (%1$s-%2$s)"
    ],
    "tropicalBodyClayfishMulti": [
        "Глинориба (%1$s-%2$s)"
    ],
    "tropicalSchoolAnemone": [
        "Актинія"
    ],
    "tropicalSchoolBlackTang": [
        "Чорна зебрасома"
    ],
    "tropicalSchoolBlueDory": [
        "Синя дорі"
    ],
    "tropicalSchoolButterflyFish": [
        "Риба-метелик"
    ],
    "tropicalSchoolCichlid": [
        "Хроміс"
    ],
    "tropicalSchoolClownfish": [
        "Риба-клоун"
    ],
    "tropicalSchoolCottonCandyBetta": [
        "Різнокольорова риба-півень"
    ],
    "tropicalSchoolDottyback": [
        "Хибнохроміс"
    ],
    "tropicalSchoolEmperorRedSnapper": [
        "Трисмуговий люціан"
    ],
    "tropicalSchoolGoatfish": [
        "Султанка"
    ],
    "tropicalSchoolMoorishIdol": [
        "Рогатий занкл"
    ],
    "tropicalSchoolOrnateButterfly": [
        "Прикрашена риба-метелик"
    ],
    "tropicalSchoolParrotfish": [
        "Риба-папуга"
    ],
    "tropicalSchoolQueenAngelFish": [
        "Королівський янгол"
    ],
    "tropicalSchoolRedCichlid": [
        "Хроміс червоний"
    ],
    "tropicalSchoolRedLippedBlenny": [
        "Атлантична трамболіта"
    ],
    "tropicalSchoolRedSnapper": [
        "Червоний люціан"
    ],
    "tropicalSchoolThreadfin": [
        "Пальцепер"
    ],
    "tropicalSchoolTomatoClown": [
        "Томатна риба-клоун"
    ],
    "tropicalSchoolTriggerfish": [
        "Спиноріг"
    ],
    "tropicalSchoolYellowTang": [
        "Жовта зебрасома"
    ],
    "tropicalSchoolYellowtailParrot": [
        "Жовтохвостий папуга"
    ],
    "cake": [
        "Торт"
    ],
    "camera": [
        "Камера"
    ],
    "golden_carrot": [
        "Золота морквина"
    ],
    "carrotOnAStick": [
        "Морква на паличці"
    ],
    "warped_fungus_on_a_stick": [
        "Викривлений гриб на паличці"
    ],
    "carrot": [
        "Морква"
    ],
    "cauldron": [
        "Казан"
    ],
    "coal": [
        "Вугілля",
        null,
        "Деревне вугілля"
    ],
    "chainmail_chestplate": [
        "Кольчужний нагрудник"
    ],
    "leather_chestplate": [
        "Шкіряна туніка"
    ],
    "diamond_chestplate": [
        "Алмазний нагрудник"
    ],
    "golden_chestplate": [
        "Золотий нагрудник"
    ],
    "iron_chestplate": [
        "Залізний нагрудник"
    ],
    "chorus_fruit": [
        "Фрукт хоруса"
    ],
    "chorus_fruit_popped": [
        "Спечений фрукт хоруса"
    ],
    "cooked_beef": [
        "Приготована яловичина"
    ],
    "cooked_chicken": [
        "Приготована курка"
    ],
    "cooked_porkchop": [
        "Приготована свинина"
    ],
    "chicken": [
        "Сира курка"
    ],
    "clay_ball": [
        "Глина"
    ],
    "clock": [
        "Годинник"
    ],
    "comparator": [
        "Компаратор на редстоуні"
    ],
    "compass": [
        "Компас"
    ],
    "lodestonecompass": [
        "Магнітний компас"
    ],
    "cookie": [
        "Печиво"
    ],
    "crossbow": [
        "Арбалет"
    ],
    "diamond": [
        "Алмаз"
    ],
    "repeater": [
        "Повторювач на редстоуні"
    ],
    "acacia_door": [
        "Двері з акації"
    ],
    "birch_door": [
        "Двері з берези"
    ],
    "dark_oak_door": [
        "Двері з темного дуба"
    ],
    "iron_door": [
        "Залізні двері"
    ],
    "jungle_door": [
        "Двері з тропічного дерева"
    ],
    "wooden_door": [
        "Двері з дуба"
    ],
    "spruce_door": [
        "Двері з хвойного дерева"
    ],
    "crimson_door": [
        "Багряні двері"
    ],
    "warped_door": [
        "Викривлені двері"
    ],
    "dragon_breath": [
        "Подих дракона"
    ],
    "dye": [
        "Чорнильний мішечок",
        "Чорнильний мішечок",
        "Червоний барвник",
        "Зелений барвник",
        "Какао-боби",
        "Лазурит",
        "Фіолетовий барвник",
        "Бірюзовий барвник",
        "Світло-сірий барвник",
        "Сірий барвник",
        "Рожевий барвник",
        "Салатовий барвник",
        "Жовтий барвник",
        "Блакитний барвник",
        "Малиновий барвник",
        "Помаранчевий барвник",
        "Кісткове борошно",
        "Чорний барвник",
        "Коричневий барвник",
        "Синій барвник",
        "Білий барвник"
    ],
    "egg": [
        "Яйце"
    ],
    "elytra": [
        "Надкрилля"
    ],
    "emerald": [
        "Смарагд"
    ],
    "emptyMap": [
        "Пуста карта"
    ],
    "emptyLocatorMap": [
        "Пуста карта шукача"
    ],
    "emptyPotion": [
        "Пляшка з водою"
    ],
    "enchanted_book": [
        "Книга чарів"
    ],
    "end_crystal": [
        "Кристал Енду"
    ],
    "end_rod": [
        "Стержень Енду"
    ],
    "ender_eye": [
        "Око Ендеру"
    ],
    "ender_pearl": [
        "Перлина Ендеру"
    ],
    "experience_bottle": [
        "Зілля досвіду"
    ],
    "feather": [
        "Перо"
    ],
    "fermented_spider_eye": [
        "Квашене око павука"
    ],
    "fireball": [
        "Заряд полум’я"
    ],
    "fireworks": [
        "Феєрверк"
    ],
    "fireworksCharge": [
        "Іскра феєрверка"
    ],
    "clownfish": [
        "Тропічна риба"
    ],
    "cooked_fish": [
        "Приготована тріска"
    ],
    "fish": [
        "Сира тріска"
    ],
    "pufferfish": [
        "Скелезуб"
    ],
    "cooked_salmon": [
        "Приготований лосось"
    ],
    "salmon": [
        "Сирий лосось"
    ],
    "fishing_rod": [
        "Вудка"
    ],
    "flint": [
        "Кремінь"
    ],
    "flint_and_steel": [
        "Кресало"
    ],
    "flower_pot": [
        "Вазонок"
    ],
    "frame": [
        "Рама"
    ],
    "ghast_tear": [
        "Сльоза ґаста"
    ],
    "glass_bottle": [
        "Скляна пляшка"
    ],
    "gold_nugget": [
        "Золотий самородок"
    ],
    "iron_nugget": [
        "Залізний самородок"
    ],
    "diamond_axe": [
        "Алмазна сокира"
    ],
    "golden_axe": [
        "Золота сокира"
    ],
    "iron_axe": [
        "Залізна сокира"
    ],
    "stone_axe": [
        "Кам’яна сокира"
    ],
    "wooden_axe": [
        "Дерев’яна сокира"
    ],
    "chainmail_helmet": [
        "Кольчужний шолом"
    ],
    "leather_helmet": [
        "Шкіряна шапка"
    ],
    "diamond_helmet": [
        "Алмазний шолом"
    ],
    "golden_helmet": [
        "Золотий шолом"
    ],
    "iron_helmet": [
        "Залізний шолом"
    ],
    "diamond_hoe": [
        "Алмазна мотика"
    ],
    "golden_hoe": [
        "Золота мотика"
    ],
    "iron_hoe": [
        "Залізна мотика"
    ],
    "stone_hoe": [
        "Кам’яна мотика"
    ],
    "wooden_hoe": [
        "Дерев’яна мотика"
    ],
    "honey_bottle": [
        "Пляшка з медом"
    ],
    "honeycomb": [
        "Соти"
    ],
    "horsearmordiamond": [
        "Алмазна кінська збруя"
    ],
    "horsearmorgold": [
        "Золота кінська збруя"
    ],
    "horsearmoriron": [
        "Залізна кінська збруя"
    ],
    "horsearmorleather": [
        "Шкіряна кінська збруя"
    ],
    "gold_ingot": [
        "Золотий злиток"
    ],
    "iron_ingot": [
        "Залізний злиток"
    ],
    "netherite_ingot": [
        "Злиток незериту"
    ],
    "netherite_scrap": [
        "Незеритовий лом"
    ],
    "netherite_sword": [
        "Незеритовий меч"
    ],
    "netherite_pickaxe": [
        "Незеритове кайло"
    ],
    "netherite_axe": [
        "Незеритова сокира"
    ],
    "netherite_shovel": [
        "Незеритова лопата"
    ],
    "netherite_hoe": [
        "Незеритова мотика"
    ],
    "netherite_boots": [
        "Незеритові черевики"
    ],
    "netherite_leggings": [
        "Незеритові поножі"
    ],
    "netherite_chestplate": [
        "Незеритовий нагрудник"
    ],
    "netherite_helmet": [
        "Незеритовий шолом"
    ],
    "lead": [
        "Поводок"
    ],
    "leather": [
        "Шкіра"
    ],
    "leaves": [
        "Листя",
        "Листя дуба",
        "Листя хвойного дерева",
        "Листя берези",
        "Листя тропічного дерева",
        "Листя акації",
        "Листя темного дуба"
    ],
    "chainmail_leggings": [
        "Кольчужні поножі"
    ],
    "leather_leggings": [
        "Шкіряні штани"
    ],
    "diamond_leggings": [
        "Алмазні поножі"
    ],
    "golden_leggings": [
        "Золоті поножі"
    ],
    "iron_leggings": [
        "Залізні поножі"
    ],
    "nautilus_shell": [
        "Мушля наутилуса"
    ],
    "heart_of_the_sea": [
        "Серце моря"
    ],
    "magma_cream": [
        "Магмовий крем"
    ],
    "map": [
        "Карта"
    ],
    "melon": [
        "Кавун"
    ],
    "milk": [
        "Молоко"
    ],
    "minecart": [
        "Вагонетка"
    ],
    "chest_minecart": [
        "Вагонетка зі скринею"
    ],
    "command_block_minecart": [
        "Вагонетка з командним блоком"
    ],
    "minecartFurnace": [
        "Вагонетка з піччю"
    ],
    "hopper_minecart": [
        "Вагонетка з воронкою"
    ],
    "tnt_minecart": [
        "Вагонетка з вибухівкою"
    ],
    "trident": [
        "Тризуб"
    ],
    "mushroom_stew": [
        "Грибна підлива"
    ],
    "muttoncooked": [
        "Приготована баранина"
    ],
    "muttonraw": [
        "Сира баранина"
    ],
    "name_tag": [
        "Ярлик"
    ],
    "netherbrick": [
        "Незерська цегла"
    ],
    "quartz": [
        "Незерський кварц"
    ],
    "nether_wart": [
        "Незерський наріст"
    ],
    "netherStar": [
        "Незерська зірка"
    ],
    "painting": [
        "Картина"
    ],
    "paper": [
        "Папір"
    ],
    "diamond_pickaxe": [
        "Алмазне кайло"
    ],
    "golden_pickaxe": [
        "Золоте кайло"
    ],
    "iron_pickaxe": [
        "Залізне кайло"
    ],
    "stone_pickaxe": [
        "Кам’яне кайло"
    ],
    "wooden_pickaxe": [
        "Дерев’яне кайло"
    ],
    "porkchop_cooked": [
        "Приготована свинина"
    ],
    "porkchop": [
        "Сира свинина"
    ],
    "portfolio": [
        "Портфоліо"
    ],
    "potato": [
        "Картопля"
    ],
    "baked_potato": [
        "Печена картопля"
    ],
    "poisonous_potato": [
        "Отруйна картопля"
    ],
    "potion": [
        "Зілля"
    ],
    "prismarine_crystals": [
        "Призмаринові кристали"
    ],
    "prismarine_shard": [
        "Призмариновий осколок"
    ],
    "pumpkin_pie": [
        "Гарбузовий пиріг"
    ],
    "cooked_rabbit": [
        "Приготований кролик"
    ],
    "rabbit_foot": [
        "Кроляча лапка"
    ],
    "rabbit_hide": [
        "Шкурка кролика"
    ],
    "rabbit": [
        "Сирий кролик"
    ],
    "rabbit_stew": [
        "Тушкований кролик"
    ],
    "record": [
        "Музичний диск"
    ],
    "redstone": [
        "Редстоун"
    ],
    "reeds": [
        "Цукрова тростина"
    ],
    "kelp": [
        "Водорості"
    ],
    "dried_kelp": [
        "Сушені водорості"
    ],
    "rotten_flesh": [
        "Гнила плоть"
    ],
    "ruby": [
        "Рубін"
    ],
    "saddle": [
        "Сідло"
    ],
    "wheat_seeds": [
        "Насіння"
    ],
    "beetroot_seeds": [
        "Насіння буряка"
    ],
    "melon_seeds": [
        "Насіння кавуна"
    ],
    "pumpkin_seeds": [
        "Насіння гарбуза"
    ],
    "shears": [
        "Ножиці"
    ],
    "diamond_shovel": [
        "Алмазна лопата"
    ],
    "golden_shovel": [
        "Золота лопата"
    ],
    "iron_shovel": [
        "Залізна лопата"
    ],
    "stone_shovel": [
        "Кам’яна лопата"
    ],
    "wooden_shovel": [
        "Дерев’яна лопата"
    ],
    "sign": [
        "Табличка з дуба"
    ],
    "spruce_sign": [
        "Табличка з хвойного дерева"
    ],
    "birch_sign": [
        "Табличка з берези"
    ],
    "jungle_sign": [
        "Табличка з тропічного дерева"
    ],
    "acacia_sign": [
        "Табличка з акації"
    ],
    "darkoak_sign": [
        "Табличка з темного дуба"
    ],
    "crimson_sign": [
        "Багряна табличка"
    ],
    "warped_sign": [
        "Викривлена табличка"
    ],
    "skull": [
        "Череп скелета",
        "Череп скелета",
        "Череп візер-скелета",
        "Голова зомбі",
        "Голова",
        "Голова кріпера",
        "Голова дракона"
    ],
    "slime_ball": [
        "Слиз"
    ],
    "snowball": [
        "Сніжка"
    ],
    "speckled_melon": [
        "Блискучий кавун"
    ],
    "spider_eye": [
        "Око павука"
    ],
    "stick": [
        "Палиця"
    ],
    "string": [
        "Нитка"
    ],
    "sugar": [
        "Цукор"
    ],
    "gunpowder": [
        "Порох"
    ],
    "diamond_sword": [
        "Алмазний меч"
    ],
    "golden_sword": [
        "Золотий меч"
    ],
    "iron_sword": [
        "Залізний меч"
    ],
    "stone_sword": [
        "Кам’яний меч"
    ],
    "wooden_sword": [
        "Дерев’яний меч"
    ],
    "wheat": [
        "Пшениця"
    ],
    "writable_book": [
        "Книга й перо"
    ],
    "written_book": [
        "Написана книга"
    ],
    "glowstone_dust": [
        "Пил світлокаменю"
    ],
    "shield": [
        "Щит"
    ],
    "shulker_shell": [
        "Панцир шалкера"
    ],
    "totem": [
        "Тотем безсмертя"
    ],
    "turtle_helmet": [
        "Панцир черепахи"
    ],
    "turtle_shell_piece": [
        "Скат"
    ],
    "phantom_membrane": [
        "Мембрана фантома"
    ],
    "sweet_berries": [
        "Солодкі ягоди"
    ],
    "suspicious_stew": [
        "Підозріла мішанина"
    ],
    "banner_pattern": [
        "Візерунок стяга"
    ],
    "acaciaFence": [
        "Паркан з акації"
    ],
    "acacia_fence_gate": [
        "Хвіртка з акації"
    ],
    "activator_rail": [
        "Колія-активатор"
    ],
    "allow": [
        "Дозволити"
    ],
    "deny": [
        "Відмовити"
    ],
    "border_block": [
        "Кордон"
    ],
    "anvil": [
        "Ковадло",
        "Ковадло",
        null,
        null,
        null,
        "Трохи пошкоджене ковадло",
        null,
        null,
        null,
        "Сильно пошкоджене ковадло"
    ],
    "barrier": [
        "Бар’єр"
    ],
    "beacon": [
        "Маяк"
    ],
    "beehive": [
        "Вулик"
    ],
    "bee_nest": [
        "Бджолине гніздо"
    ],
    "target": [
        "Мішень"
    ],
    "bedrock": [
        "Корінна порода"
    ],
    "conduit": [
        "Провідник"
    ],
    "invisibleBedrock": [
        "Невидима корінна порода"
    ],
    "birchFence": [
        "Паркан із берези"
    ],
    "birch_fence_gate": [
        "Хвіртка з берези"
    ],
    "blast_furnace": [
        "Плавильна піч"
    ],
    "bone_block": [
        "Блок кістки"
    ],
    "coal_block": [
        "Блок вугілля"
    ],
    "diamond_block": [
        "Блок алмазу"
    ],
    "emerald_block": [
        "Блок смарагду"
    ],
    "gold_block": [
        "Блок золота"
    ],
    "iron_block": [
        "Блок заліза"
    ],
    "lapis_block": [
        "Блок лазуриту"
    ],
    "redstone_block": [
        "Блок редстоуну"
    ],
    "bookshelf": [
        "Книжкова полиця"
    ],
    "brick_block": [
        "Блок цегли"
    ],
    "brown_mushroom": [
        "Коричневий гриб"
    ],
    "wooden_button": [
        "Дубова кнопка"
    ],
    "acacia_button": [
        "Акацієва кнопка"
    ],
    "birch_button": [
        "Березова кнопка"
    ],
    "dark_oak_button": [
        "Темно-дубова кнопка"
    ],
    "jungle_button": [
        "Джунглева кнопка"
    ],
    "spruce_button": [
        "Хвойна кнопка"
    ],
    "stone_button": [
        "Кам’яна кнопка"
    ],
    "cactus": [
        "Кактус"
    ],
    "dried_kelp_block": [
        "Блок сушених водоростей"
    ],
    "carved_pumpkin": [
        "Вирізаний гарбуз"
    ],
    "chest": [
        "Скриня"
    ],
    "ender_chest": [
        "Скриня Ендеру"
    ],
    "jigsaw": [
        "Блок-пазл"
    ],
    "honey_block": [
        "Блок меду"
    ],
    "honeycomb_block": [
        "Блок сот"
    ],
    "lodestone": [
        "Магніт"
    ],
    "nether_sprouts": [
        "Незерські паростки"
    ],
    "crimson_stem": [
        "Багряне стебло"
    ],
    "warped_stem": [
        "Викривлене стебло"
    ],
    "stripped_crimson_stem": [
        "Обідране багряне стебло"
    ],
    "stripped_warped_stem": [
        "Обідране викривлене стебло"
    ],
    "crimson_hyphae": [
        "Багряна гіфа"
    ],
    "warped_hyphae": [
        "Викривлена гіфа"
    ],
    "stripped_crimson_hyphae": [
        "Обідрана багряна гіфа"
    ],
    "stripped_warped_hyphae": [
        "Обідрана викривлена гіфа"
    ],
    "crimson_planks": [
        "Багряні дошки"
    ],
    "warped_planks": [
        "Викривлені дошки"
    ],
    "crimson_trapdoor": [
        "Багряний люк"
    ],
    "warped_trapdoor": [
        "Викривлений люк"
    ],
    "crimson_standing_sign": [
        "Багряна табличка"
    ],
    "warped_standing_sign": [
        "Викривлена табличка"
    ],
    "crimson_wall_sign": [
        "Багряна табличка"
    ],
    "warped_wall_sign": [
        "Викривлена табличка"
    ],
    "crimson_stairs": [
        "Багряні сходи"
    ],
    "warped_stairs": [
        "Викривлені сходи"
    ],
    "crimson_fence": [
        "Багряний паркан"
    ],
    "warped_fence": [
        "Викривлений паркан"
    ],
    "crimson_fence_gate": [
        "Багряна хвіртка"
    ],
    "warped_fence_gate": [
        "Викривлена хвіртка"
    ],
    "crimson_button": [
        "Багряна кнопка"
    ],
    "warped_button": [
        "Викривлена кнопка"
    ],
    "crimson_pressure_plate": [
        "Багряна притискна пластина"
    ],
    "warped_pressure_plate": [
        "Викривлена притискна пластина"
    ],
    "crimson_slab": [
        "Багряна плита"
    ],
    "warped_slab": [
        "Викривлена плита"
    ],
    "crimson_double_slab": [
        "Багряна плита"
    ],
    "warped_double_slab": [
        "Викривлена плита"
    ],
    "shroomlight": [
        "Грибосвітло"
    ],
    "crimson_nylium": [
        "Багряний нілій"
    ],
    "warped_nylium": [
        "Викривлений нілій"
    ],
    "basalt": [
        "Базальт"
    ],
    "polished_basalt": [
        "Полірований базальт"
    ],
    "blackstone": [
        "Чорний камінь"
    ],
    "polished_blackstone_bricks": [
        "Цегла з полірованого чорного каменю"
    ],
    "cracked_polished_blackstone_bricks": [
        "Цегла з потрісканого чорного каменю"
    ],
    "polished_blackstone_brick_stairs": [
        "Сходи з цегли з полірованого чорного каменю"
    ],
    "blackstone_stairs": [
        "Сходи з чорного каменю"
    ],
    "blackstone_wall": [
        "Стіна з чорного каменю"
    ],
    "polished_blackstone_brick_wall": [
        "Стіна з цегли з полірованого чорного каменю"
    ],
    "chiseled_polished_blackstone": [
        "Висічений полірований чорний камінь"
    ],
    "gilded_blackstone": [
        "Позолочений чорний камінь"
    ],
    "blackstone_slab": [
        "Плита з чорного каменю"
    ],
    "polished_blackstone_brick_slab": [
        "Плита з цегли з полірованого чорного каменю"
    ],
    "chain": [
        "Ланцюг"
    ],
    "soul_soil": [
        "Земля душ"
    ],
    "soul_fire": [
        "Вогонь душ"
    ],
    "polished_blackstone": [
        "Полірований чорний камінь"
    ],
    "polished_blackstone_stairs": [
        "Сходи з полірованого чорного каменю"
    ],
    "polished_blackstone_slab": [
        "Плита з полірованого чорного каменю"
    ],
    "polished_blackstone_pressure_plate": [
        "Притискна пластина з полірованого чорного каменю"
    ],
    "polished_blackstone_button": [
        "Кнопка з полірованого чорного каменю"
    ],
    "polished_blackstone_wall": [
        "Стіна з полірованого чорного каменю"
    ],
    "soul_campfire": [
        "Багаття душ"
    ],
    "chiseled_nether_bricks": [
        "Висічена незерська цегла"
    ],
    "cracked_nether_bricks": [
        "Потріскана незерська цегла"
    ],
    "quartz_bricks": [
        "Кварцова цегла"
    ],
    "trapped_chest": [
        "Скриня-пастка"
    ],
    "shulkerBoxWhite": [
        "Білий ящик шалкера"
    ],
    "shulkerBoxOrange": [
        "Помаранчевий ящик шалкера"
    ],
    "shulkerBoxMagenta": [
        "Малиновий ящик шалкера"
    ],
    "shulkerBoxLightBlue": [
        "Блакитний ящик шалкера"
    ],
    "shulkerBoxYellow": [
        "Жовтий ящик шалкера"
    ],
    "shulkerBoxLime": [
        "Салатовий ящик шалкера"
    ],
    "shulkerBoxPink": [
        "Рожевий ящик шалкера"
    ],
    "shulkerBoxGray": [
        "Сірий ящик шалкера"
    ],
    "shulkerBoxSilver": [
        "Світло-сірий ящик шалкера"
    ],
    "shulkerBoxCyan": [
        "Бірюзовий ящик шалкера"
    ],
    "shulkerBoxPurple": [
        "Фіолетовий ящик шалкера"
    ],
    "shulkerBoxBlue": [
        "Синій ящик шалкера"
    ],
    "shulkerBoxBrown": [
        "Коричневий ящик шалкера"
    ],
    "shulkerBoxGreen": [
        "Зелений ящик шалкера"
    ],
    "shulkerBoxRed": [
        "Червоний ящик шалкера"
    ],
    "shulkerBoxBlack": [
        "Чорний ящик шалкера"
    ],
    "shulkerBox": [
        "Ящик шалкера"
    ],
    "chorus_flower": [
        "Квітка хоруса"
    ],
    "chorus_plant": [
        "Хорус"
    ],
    "stained_glass": [
        "Біле скло",
        "Біле скло",
        "Помаранчеве скло",
        "Малинове скло",
        "Блакитне скло",
        "Жовте скло",
        "Салатове скло",
        "Рожеве скло",
        "Сіре скло",
        "Світло-сіре скло",
        "Бірюзове скло",
        "Фіолетове скло",
        "Синє скло",
        "Коричневе скло",
        "Зелене скло",
        "Червоне скло",
        "Чорне скло"
    ],
    "stained_glass_pane": [
        "Біля скляна панель",
        "Біля скляна панель",
        "Помаранчева скляна панель",
        "Малинова скляна панель",
        "Блакитна скляна панель",
        "Жовта скляна панель",
        "Салатова скляна панель",
        "Рожева скляна панель",
        "Сіра скляна панель",
        "Світло-сіра скляна панель",
        "Бірюзова скляна панель",
        "Фіолетова скляна панель",
        "Синя скляна панель",
        "Коричнева скляна панель",
        "Зелена скляна панель",
        "Червона скляна панель",
        "Чорна скляна панель"
    ],
    "clay": [
        "Блок глини"
    ],
    "hardened_clay": [
        "Кераміка"
    ],
    "stained_hardened_clay": [
        "Кераміка",
        "Біла кераміка",
        "Помаранчева кераміка",
        "Малинова кераміка",
        "Блакитна кераміка",
        "Жовта кераміка",
        "Салатова кераміка",
        "Рожева кераміка",
        "Сіра кераміка",
        "Світло-сіра кераміка",
        "Бірюзова кераміка",
        "Фіолетова кераміка",
        "Синя кераміка",
        "Коричнева кераміка",
        "Зелена кераміка",
        "Червона кераміка",
        "Чорна кераміка"
    ],
    "structure_block": [
        "Структурний блок"
    ],
    "structure_void": [
        "Структурна пустота"
    ],
    "wool": [
        "Вовна",
        "Біла вовна",
        "Помаранчева вовна",
        "Малинова вовна",
        "Блакитна вовна",
        "Жовта вовна",
        "Салатова вовна",
        "Рожева вовна",
        "Сіра вовна",
        "Світло-сіра вовна",
        "Бірюзова вовна",
        "Фіолетова вовна",
        "Синя вовна",
        "Коричнева вовна",
        "Зелена вовна",
        "Червона вовна",
        "Чорна вовна"
    ],
    "cobblestone_wall": [
        "Стіна з кругляку",
        "Стіна з кругляку",
        "Стіна з моховитого кругляку",
        "Стіна з граніту",
        "Стіна з діориту",
        "Стіна з андезиту",
        "Стіна з піщанику",
        "Стіна з цегли",
        "Стіна з кам’яної цегли",
        "Стіна з моховитої кам’яної цегли",
        "Стіна з кам’яної цегли Енду",
        "Стіна з незерської цегли",
        "Стіна з призмарину",
        "Стіна з червоного піщанику",
        "Стіна з червоної незерської цегли"
    ],
    "cocoa": [
        "Какао"
    ],
    "command_block": [
        "Командний блок"
    ],
    "composter": [
        "Компостер"
    ],
    "light_block": [
        "Світловий блок"
    ],
    "repeating_command_block": [
        "Циклічний командний блок"
    ],
    "chain_command_block": [
        "Ланцюговий командний блок"
    ],
    "darkOakFence": [
        "Паркан із темного дуба"
    ],
    "dark_oak_fence_gate": [
        "Хвіртка з темного дуба"
    ],
    "daylight_detector": [
        "Сенсор денного світла"
    ],
    "deadbush": [
        "Мертвий кущ"
    ],
    "detector_rail": [
        "Колія-детектор"
    ],
    "dirt": [
        "Земля",
        "Земля",
        "Кам’яниста земля"
    ],
    "podzol": [
        "Підзол"
    ],
    "purpur_block": [
        "Блок пурпуру",
        "Блок пурпуру",
        "Висічений пурпур",
        "Колона з пурпуру"
    ],
    "dispenser": [
        "Розподілювач"
    ],
    "doorWood": [
        "Дерев’яні двері"
    ],
    "double_plant": [
        "Рослина",
        "Соняшник",
        "Бузок",
        "Висока трава",
        "Велика папороть",
        "Трояндовий кущ",
        "Півонія"
    ],
    "dragon_egg": [
        "Яйце дракона"
    ],
    "dropper": [
        "Виштовхувач"
    ],
    "enchanting_table": [
        "Стіл зачарування"
    ],
    "enderChest": [
        "Скриня Ендеру"
    ],
    "end_portal_frame": [
        "Портал в Енд"
    ],
    "farmland": [
        "Ґрунт"
    ],
    "fletching_table": [
        "Стіл лучника"
    ],
    "fence": [
        "Паркан із дуба"
    ],
    "fence_gate": [
        "Хвіртка з дуба"
    ],
    "iron_bars": [
        "Залізні ґрати"
    ],
    "fire": [
        "Вогонь"
    ],
    "yellow_flower": [
        "Квітка",
        "Кульбаба"
    ],
    "red_flower": [
        "Квітка",
        "Мак",
        "Синя орхідея",
        "Трибулька",
        "Волошка блакитна",
        "Червоний тюльпан",
        "Помаранчевий тюльпан",
        "Білий тюльпан",
        "Рожевий тюльпан",
        "Ромашка",
        "Волошка",
        "Конвалія"
    ],
    "wither_rose": [
        "Троянда візера"
    ],
    "furnace": [
        "Піч"
    ],
    "glass": [
        "Скло"
    ],
    "golden_rail": [
        "Електрична колія"
    ],
    "grass": [
        "Блок із травою"
    ],
    "grass_path": [
        "Стежка"
    ],
    "gravel": [
        "Гравій"
    ],
    "hay_block": [
        "Копиця сіна"
    ],
    "netherrack": [
        "Незеррак"
    ],
    "soul_sand": [
        "Пісок душ"
    ],
    "hopper": [
        "Воронка"
    ],
    "ice": [
        "Лід"
    ],
    "packed_ice": [
        "Спресований лід"
    ],
    "blue_ice": [
        "Синій лід"
    ],
    "iron_trapdoor": [
        "Залізний люк"
    ],
    "jukebox": [
        "Музичний автомат"
    ],
    "jungleFence": [
        "Паркан із тропічного дерева"
    ],
    "jungle_fence_gate": [
        "Хвіртка з тропічного дерева"
    ],
    "ladder": [
        "Драбина"
    ],
    "flowing_lava": [
        "Лава"
    ],
    "leaves2": [
        "Листя акації",
        "Листя акації",
        "Листя темного дуба"
    ],
    "lever": [
        "Важіль"
    ],
    "glowstone": [
        "Світлокамінь"
    ],
    "lit_pumpkin": [
        "Гарбузовий ліхтар"
    ],
    "lockedchest": [
        "Зачинена скриня"
    ],
    "log2": [
        "Колода з акації",
        "Колода з акації",
        "Колода з темного дуба"
    ],
    "log": [
        "Колода",
        "Колода з дуба",
        "Колода з хвойного дерева",
        "Колода з берези",
        "Колода з тропічного дерева"
    ],
    "magma": [
        "Блок магми"
    ],
    "melon_block": [
        "Кавун"
    ],
    "mob_spawner": [
        "Розсадник монстрів"
    ],
    "monster_egg": [
        "Заражений камінь",
        "Заражений камінь",
        "Заражений кругляк",
        "Заражена кам’яна цегла",
        "Заражена моховита кам’яна цегла",
        "Заражена потріскана кам’яна цегла",
        "Заражена висічена кам’яна цегла"
    ],
    "mushroom": [
        "Гриб"
    ],
    "noteblock": [
        "Нотний блок"
    ],
    "mycelium": [
        "Грибниця"
    ],
    "nether_brick": [
        "Блок незерської цегли"
    ],
    "red_nether_brick": [
        "Червона незерська цегла"
    ],
    "nether_brick_fence": [
        "Паркан із незерської цегли"
    ],
    "quartz_ore": [
        "Незерська кварцева руда"
    ],
    "netherreactor": [
        "Ядро незерського реактора"
    ],
    "nether_wart_block": [
        "Блок незерського наросту"
    ],
    "warped_wart_block": [
        "Блок викривленого наросту"
    ],
    "unlit_redstone_torch": [
        "Факел із редстоуну"
    ],
    "redstone_torch": [
        "Факел із редстоуну"
    ],
    "soul_torch": [
        "Факел душ"
    ],
    "obsidian": [
        "Обсидіан"
    ],
    "coal_ore": [
        "Вугільна руда"
    ],
    "diamond_ore": [
        "Алмазна руда"
    ],
    "emerald_ore": [
        "Смарагдова руда"
    ],
    "gold_ore": [
        "Золота руда"
    ],
    "iron_ore": [
        "Залізна руда"
    ],
    "lapis_ore": [
        "Лазуритова руда"
    ],
    "redstone_ore": [
        "Руда редстоуну"
    ],
    "oreRuby": [
        "Рубінова руда"
    ],
    "observer": [
        "Спостерігач"
    ],
    "piston": [
        "Поршень"
    ],
    "sticky_piston": [
        "Липкий поршень"
    ],
    "portal": [
        "Портал"
    ],
    "potatoes": [
        "Картопля"
    ],
    "stone_pressure_plate": [
        "Кам’яна притискна пластина"
    ],
    "wooden_pressure_plate": [
        "Дубова притискна пластина"
    ],
    "acacia_pressure_plate": [
        "Акацієва притискна пластина"
    ],
    "birch_pressure_plate": [
        "Березова притискна пластина"
    ],
    "dark_oak_pressure_plate": [
        "Темно-дубова притискна пластина"
    ],
    "jungle_pressure_plate": [
        "Джунглева притискна пластина"
    ],
    "spruce_pressure_plate": [
        "Хвойна притискна пластина"
    ],
    "prismarine": [
        "Призмарин",
        "Призмарин",
        "Призмаринова цегла",
        "Темний призмарин"
    ],
    "pumpkin": [
        "Гарбуз"
    ],
    "pumpkin_stem": [
        "Стебло гарбуза"
    ],
    "quartz_block": [
        "Блок кварцу",
        "Блок кварцу",
        "Висічений кварцевий блок",
        "Стовпчастий кварцевий блок",
        "Гладкий кварцевий блок"
    ],
    "rail": [
        "Колія"
    ],
    "red_mushroom": [
        "Червоний гриб"
    ],
    "crimson_fungus": [
        "Багряний грибок"
    ],
    "warped_fungus": [
        "Викривлений грибок"
    ],
    "red_mushroom_block": [
        "Блок червоного гриба"
    ],
    "red_sandstone": [
        "Червоний піщаник",
        "Червоний піщаник",
        "Висічений червоний піщаник",
        "Тесаний червоний піщаник",
        "Гладкий червоний піщаник"
    ],
    "redstone_wire": [
        "Пил редстоуну"
    ],
    "redstone_lamp": [
        "Лампа з редстоуну"
    ],
    "sand": [
        "Пісок",
        "Пісок",
        "Червоний пісок"
    ],
    "sandstone": [
        "Піщаник",
        "Піщаник",
        "Висічений піщаник",
        "Тесаний піщаник",
        "Гладкий піщаник"
    ],
    "sapling": [
        "Паросток дуба",
        "Паросток дуба",
        "Паросток хвойного дерева",
        "Паросток берези",
        "Паросток тропічного дерева",
        "Паросток акації",
        "Паросток темного дуба"
    ],
    "seaLantern": [
        "Морський ліхтар"
    ],
    "standing_sign": [
        "Напис"
    ],
    "spruce_standing_sign": [
        "Табличка з хвойного дерева"
    ],
    "birch_standing_sign": [
        "Табличка з берези"
    ],
    "jungle_standing_sign": [
        "Табличка з тропічного дерева"
    ],
    "acacia_standing_sign": [
        "Табличка з акації"
    ],
    "darkoak_standing_sign": [
        "Табличка з темного дуба"
    ],
    "slime": [
        "Блок слизу"
    ],
    "snow": [
        "Сніг"
    ],
    "sponge": [
        "Губка",
        "Губка",
        "Мокра губка"
    ],
    "spruceFence": [
        "Паркан із хвойного дерева"
    ],
    "spruce_fence_gate": [
        "Хвіртка з хвойного дерева"
    ],
    "brick_stairs": [
        "Сходи з цегли"
    ],
    "nether_brick_stairs": [
        "Сходи з незерської цегли"
    ],
    "quartz_stairs": [
        "Сходи з кварцу"
    ],
    "smooth_quartz_stairs": [
        "Сходи з гладкого кварцу"
    ],
    "red_sandstone_stairs": [
        "Сходи з червоного піщанику"
    ],
    "sandstone_stairs": [
        "Сходи з піщанику"
    ],
    "stone_stairs": [
        "Сходи з кругляку"
    ],
    "normal_stone_stairs": [
        "Сходи з каменю"
    ],
    "stone_brick_stairs": [
        "Сходи з кам’яної цегли"
    ],
    "oak_stairs": [
        "Сходи з дубової деревини"
    ],
    "acacia_stairs": [
        "Сходи з акацієвої деревини"
    ],
    "birch_stairs": [
        "Сходи з березової деревини"
    ],
    "dark_oak_stairs": [
        "Сходи з деревини темного дуба"
    ],
    "jungle_stairs": [
        "Сходи з тропічної деревини"
    ],
    "spruce_stairs": [
        "Сходи з хвойної деревини"
    ],
    "purpur_stairs": [
        "Сходи з пурпуру"
    ],
    "prismarine_stairs": [
        "Сходи з призмарину"
    ],
    "dark_prismarine_stairs": [
        "Сходи з темного призмарину"
    ],
    "prismarine_bricks_stairs": [
        "Сходи з призмаринової цегли"
    ],
    "granite_stairs": [
        "Сходи з граніту"
    ],
    "diorite_stairs": [
        "Сходи з діориту"
    ],
    "andesite_stairs": [
        "Сходи з андезиту"
    ],
    "polished_granite_stairs": [
        "Сходи з полірованого граніту"
    ],
    "polished_diorite_stairs": [
        "Сходи з полірованого діориту"
    ],
    "polished_andesite_stairs": [
        "Сходи з полірованого андезиту"
    ],
    "mossy_stone_brick_stairs": [
        "Сходи з моховитої кам’яної цегли"
    ],
    "smooth_red_sandstone_stairs": [
        "Сходи з гладкого червоного піщанику"
    ],
    "smooth_sandstone_stairs": [
        "Сходи з гладкого піщанику"
    ],
    "end_brick_stairs": [
        "Сходи з кам’яної цегли Енду"
    ],
    "mossy_cobblestone_stairs": [
        "Сходи з моховитого кругляку"
    ],
    "red_nether_brick_stairs": [
        "Сходи з червоної незерської цегли"
    ],
    "smooth_stone": [
        "Гладкий камінь"
    ],
    "standing_banner": [
        "Стяг",
        "Чорний стяг",
        "Червоний стяг",
        "Зелений стяг",
        "Коричневий стяг",
        "Синій стяг",
        "Фіолетовий стяг",
        "Бірюзовий стяг",
        "Світло-сірий стяг",
        "Сірий стяг",
        "Рожевий стяг",
        "Салатовий стяг",
        "Жовтий стяг",
        "Блакитний стяг",
        "Малиновий стяг",
        "Помаранчевий стяг",
        "Стяг"
    ],
    "stone": [
        "Камінь",
        "Камінь",
        "Граніт",
        "Полірований граніт",
        "Діорит",
        "Полірований діорит",
        "Андезит",
        "Полірований андезит"
    ],
    "cobblestone": [
        "Кругляк"
    ],
    "stonebrick": [
        "Кам’яна цегла",
        "Кам’яна цегла",
        "Моховита кам’яна цегла",
        "Висічена кам’яна цегла"
    ],
    "stonecutter": [
        "Каменяр"
    ],
    "stonecutter_block": [
        "Каменяр"
    ],
    "mossy_cobblestone": [
        "Моховитий кругляк"
    ],
    "double_stone_slab": [
        "Плита з каменю",
        "Плита з каменю",
        "Плита з піщанику",
        "Плита з деревини",
        "Плита з кругляку",
        "Плита з цегли",
        "Плита з кам’яної цегли",
        "Плита з кварцу",
        "Плита з незерської цегли"
    ],
    "stone_slab": [
        "Плита з каменю",
        "Плита з гладкого каменю",
        "Плита з піщанику",
        "Плита з деревини",
        "Плита з кругляку",
        "Плита з цегли",
        "Плита з кам’яної цегли",
        "Плита з кварцу",
        "Плита з незерської цегли"
    ],
    "double_stone_slab2": [
        "Плита з червоного піщанику",
        "Плита з червоного піщанику"
    ],
    "stone_slab2": [
        "Плита з червоного піщанику",
        "Плита з червоного піщанику",
        "Плита з пурпуру",
        "Плита з призмарину",
        "Плита з призмаринової цегли",
        "Плита з темного призмарину",
        "Плита з моховитого кругляку",
        "Плита з гладкого піщанику",
        "Плита з червоної незерської цегли"
    ],
    "stone_slab3": [
        "Плита з кам’яної цегли Енду",
        "Плита з кам’яної цегли Енду",
        "Плита з гладкого червоного піщанику",
        "Плита з полірованого андезиту",
        "Плита з андезиту",
        "Плита з діориту",
        "Плита з полірованого діориту",
        "Плита з граніту",
        "Плита з полірованого граніту"
    ],
    "stone_slab4": [
        "Плита з моховитої кам’яної цегли",
        "Плита з моховитої кам’яної цегли",
        "Плита з гладкого кварцу",
        "Плита з каменю",
        "Плита з тесаного піщанику",
        "Плита з тесаного червоного піщанику"
    ],
    "coral_block": [
        "Блок трубчастих коралів",
        "Блок трубчастих коралів",
        "Блок мозкових коралів",
        "Блок пухирчастих коралів",
        "Блок вогняних коралів",
        "Блок рогових коралів",
        "Блок мертвих трубчастих коралів",
        "Блок мертвих мозкових коралів",
        "Блок мертвих пухирчастих коралів",
        "Блок мертвих вогняних коралів",
        "Блок мертвих рогових коралів"
    ],
    "tallgrass": [
        "Трава",
        "Трава",
        "Папороть"
    ],
    "seagrass": [
        "Морська трава",
        "Морська трава"
    ],
    "sea_pickle": [
        "Морський огірок"
    ],
    "turtle_egg": [
        "Яйце морської черепахи"
    ],
    "coral": [
        "Трубчастий корал",
        "Трубчастий корал",
        "Мозковий корал",
        "Пухирчастий корал",
        "Вогняний корал",
        "Роговий корал",
        "Мертвий трубчастий корал",
        "Мертвий мозковий корал",
        "Мертвий пухирчастий корал",
        "Мертвий вогняний корал",
        "Мертвий роговий корал"
    ],
    "coral_fan": [
        "Віяло з трубчастих коралів",
        "Віяло з трубчастих коралів",
        "Віяло з мозкових коралів",
        "Віяло з пухирчастих коралів",
        "Віяло з вогняних коралів",
        "Віяло з рогових коралів"
    ],
    "coral_fan_dead": [
        "Віяло з мертвих трубчастих коралів",
        "Віяло з мертвих трубчастих коралів",
        "Віяло з мертвих мозкових коралів",
        "Віяло з мертвих пухирчастих коралів",
        "Віяло з мертвих вогняних коралів",
        "Віяло з мертвих рогових коралів"
    ],
    "glass_pane": [
        "Скляна панель"
    ],
    "tnt": [
        "Вибухівка"
    ],
    "snow_layer": [
        "Верхній шар снігу"
    ],
    "torch": [
        "Факел"
    ],
    "trapdoor": [
        "Дубовий лаз"
    ],
    "acacia_trapdoor": [
        "Акацієвий лаз"
    ],
    "birch_trapdoor": [
        "Березовий лаз"
    ],
    "dark_oak_trapdoor": [
        "Темно-дубовий лаз"
    ],
    "jungle_trapdoor": [
        "Джунглевий лаз"
    ],
    "spruce_trapdoor": [
        "Хвойний лаз"
    ],
    "tripWire": [
        "Розтяжка"
    ],
    "tripwire_hook": [
        "Гак для розтяжки"
    ],
    "vine": [
        "Лоза"
    ],
    "weeping_vines": [
        "Плакуча лоза"
    ],
    "twisting_vines": [
        "Покручені лози"
    ],
    "flowing_water": [
        "Вода"
    ],
    "water": [
        "Вода"
    ],
    "waterlily": [
        "Лілія"
    ],
    "web": [
        "Павутиння"
    ],
    "heavy_weighted_pressure_plate": [
        "Вагова притискна пластина (важка)"
    ],
    "light_weighted_pressure_plate": [
        "Вагова притискна пластина (легка)"
    ],
    "end_stone": [
        "Камінь Енду"
    ],
    "end_bricks": [
        "Цегла з каменю Енду"
    ],
    "planks": [
        "Дерев’яні дошки",
        "Дошки з дубової деревини",
        "Дошки з хвойної деревини",
        "Дошки з березової деревини",
        "Дошки з тропічної деревини",
        "Дошки з акацієвої деревини",
        "Дошки з деревини темного дуба"
    ],
    "wooden_slab": [
        "Плита з деревини",
        "Плита з дубової деревини",
        "Плита з хвойної деревини",
        "Плита з березової деревини",
        "Плита з тропічної деревини",
        "Плита з акацієвої деревини",
        "Плита з деревини темного дуба"
    ],
    "carpet": [
        "Килим",
        "Чорний килим",
        "Червоний килим",
        "Зелений килим",
        "Коричневий килим",
        "Синій килим",
        "Фіолетовий килим",
        "Бірюзовий килим",
        "Світло-сірий килим",
        "Сірий килим",
        "Рожевий килим",
        "Салатовий килим",
        "Жовтий килим",
        "Блакитний килим",
        "Малиновий килим",
        "Помаранчевий килим",
        "Білий килим"
    ],
    "crafting_table": [
        "Верстак"
    ],
    "white_glazed_terracotta": [
        "Біла глазурована кераміка",
        "Біла глазурована кераміка"
    ],
    "orange_glazed_terracotta": [
        "Помаранчева глазурована кераміка",
        "Помаранчева глазурована кераміка"
    ],
    "magenta_glazed_terracotta": [
        "Малинова глазурована кераміка",
        "Малинова глазурована кераміка"
    ],
    "light_blue_glazed_terracotta": [
        "Блакитна глазурована кераміка",
        "Блакитна глазурована кераміка"
    ],
    "yellow_glazed_terracotta": [
        "Жовта глазурована кераміка",
        "Жовта глазурована кераміка"
    ],
    "lime_glazed_terracotta": [
        "Салатова глазурована кераміка",
        "Салатова глазурована кераміка"
    ],
    "pink_glazed_terracotta": [
        "Рожева глазурована кераміка",
        "Рожева глазурована кераміка"
    ],
    "gray_glazed_terracotta": [
        "Сіра глазурована кераміка",
        "Сіра глазурована кераміка"
    ],
    "silver_glazed_terracotta": [
        "Світло-сіра глазурована кераміка",
        "Світло-сіра глазурована кераміка"
    ],
    "cyan_glazed_terracotta": [
        "Бірюзова глазурована кераміка",
        "Бірюзова глазурована кераміка"
    ],
    "purple_glazed_terracotta": [
        "Фіолетова глазурована кераміка",
        "Фіолетова глазурована кераміка"
    ],
    "blue_glazed_terracotta": [
        "Синя глазурована кераміка",
        "Синя глазурована кераміка"
    ],
    "brown_glazed_terracotta": [
        "Коричнева глазурована кераміка",
        "Коричнева глазурована кераміка"
    ],
    "green_glazed_terracotta": [
        "Зелена глазурована кераміка",
        "Зелена глазурована кераміка"
    ],
    "red_glazed_terracotta": [
        "Червона глазурована кераміка",
        "Червона глазурована кераміка"
    ],
    "black_glazed_terracotta": [
        "Чорна глазурована кераміка",
        "Чорна глазурована кераміка"
    ],
    "concrete": [
        "Білий бетон",
        "Білий бетон",
        "Помаранчевий бетон",
        "Малиновий бетон",
        "Блакитний бетон",
        "Жовтий бетон",
        "Салатовий бетон",
        "Рожевий бетон",
        "Сірий бетон",
        "Світло-сірий бетон",
        "Бірюзовий бетон",
        "Фіолетовий бетон",
        "Синій бетон",
        "Коричневий бетон",
        "Зелений бетон",
        "Червоний бетон",
        "Чорний бетон"
    ],
    "glazedTerracottaWhite": [
        "Біла глазурована кераміка"
    ],
    "glazedTerracottaOrange": [
        "Помаранчева глазурована кераміка"
    ],
    "glazedTerracottaMagenta": [
        "Малинова глазурована кераміка"
    ],
    "glazedTerracottaLightBlue": [
        "Блакитна глазурована кераміка"
    ],
    "glazedTerracottaYellow": [
        "Жовта глазурована кераміка"
    ],
    "glazedTerracottaLime": [
        "Салатова глазурована кераміка"
    ],
    "glazedTerracottaPink": [
        "Рожева глазурована кераміка"
    ],
    "glazedTerracottaGray": [
        "Сіра глазурована кераміка"
    ],
    "glazedTerracottaSilver": [
        "Світло-сіра глазурована кераміка"
    ],
    "glazedTerracottaCyan": [
        "Бірюзова глазурована кераміка"
    ],
    "glazedTerracottaPurple": [
        "Фіолетова глазурована кераміка"
    ],
    "glazedTerracottaBlue": [
        "Синя глазурована кераміка"
    ],
    "glazedTerracottaBrown": [
        "Коричнева глазурована кераміка"
    ],
    "glazedTerracottaGreen": [
        "Зелена глазурована кераміка"
    ],
    "glazedTerracottaRed": [
        "Червона глазурована кераміка"
    ],
    "glazedTerracottaBlack": [
        "Чорна глазурована кераміка"
    ],
    "concretePowder": [
        "Білий цемент",
        "Білий цемент",
        "Помаранчевий цемент",
        "Малиновий цемент",
        "Блакитний цемент",
        "Жовтий цемент",
        "Салатовий цемент",
        "Рожевий цемент",
        "Сірий цемент",
        "Світло-сірий цемент",
        "Бірюзовий цемент",
        "Фіолетовий цемент",
        "Синій цемент",
        "Коричневий цемент",
        "Зелений цемент",
        "Червоний цемент",
        "Чорний цемент"
    ],
    "stripped_spruce_log": [
        "Обідрана колода з хвойного дерева"
    ],
    "stripped_dark_oak_log": [
        "Обідрана колода з темного дуба"
    ],
    "stripped_birch_log": [
        "Обідрана колода з берези"
    ],
    "stripped_jungle_log": [
        "Обідрана колода з тропічного дерева"
    ],
    "stripped_oak_log": [
        "Обідрана колода з дуба"
    ],
    "stripped_acacia_log": [
        "Обідрана колода з акації"
    ],
    "bamboo": [
        "Бамбук"
    ],
    "scaffolding": [
        "Риштування"
    ],
    "grindstone": [
        "Точило"
    ],
    "cartography_table": [
        "Картографічний стіл"
    ],
    "lantern": [
        "Ліхтар"
    ],
    "soul_lantern": [
        "Ліхтар душ"
    ],
    "smoker": [
        "Коптильня"
    ],
    "smithing_table": [
        "Ковальський стіл"
    ],
    "barrel": [
        "Бочка"
    ],
    "campfire": [
        "Багаття"
    ],
    "loom": [
        "Ткацький верстат"
    ],
    "lectern": [
        "Кафедра"
    ],
    "sweet_berry_bush": [
        "Кущ солодких ягід"
    ],
    "wood": [
        "Дубова деревина",
        "Дубова деревина",
        "Деревина хвойного дерева",
        "Березова деревина",
        "Деревина тропічного дерева",
        "Акацієва деревина",
        "Обідрана деревина темного дуба",
        null,
        null,
        "Обідрана дубова деревина",
        "Обідрана деревина хвойного дерева",
        "Обідрана березова деревина",
        "Обідрана деревина тропічного дерева",
        "Обідрана акацієва деревина",
        "Обідрана деревина темного дуба"
    ],
    "netherite_block": [
        "Блок незериту"
    ],
    "ancient_debris": [
        "Старовинні уламки"
    ],
    "nether_gold_ore": [
        "Незерська золота руда"
    ],
    "respawn_anchor": [
        "Якір відродження"
    ],
    "crying_obsidian": [
        "Плакучий обсидіан"
    ]
}
};
freeze(lang_data);
export = lang_data;

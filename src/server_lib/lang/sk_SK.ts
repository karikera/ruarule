
import { freeze } from './freeze';
import { LangId } from './langid';
const lang_data = {
id: "sk_SK" as LangId,
commands:{
    "ability_description": "Nastaví hráčovu schopnosť.",
    "ability_noability": "Nie je k dispozícii žiadna schopnosť s názvom %1$s",
    "ability_granted": "Bola vám udelená schopnosť %1$s",
    "ability_revoked": "Schopnosť %1$s vám bola odobratá",
    "ability_success": "Schopnosť sa aktualizovala",
    "achievement_alreadyHave": "Hráč %1$s už má dosiahnutý výsledok %2$s",
    "achievement_description": "Poskytne hráčovi dosiahnutý výsledok alebo ho odstráni.",
    "achievement_dontHave": "Hráč %1$s nemá dosiahnutý výsledok %2$s",
    "achievement_give_success_all": "Hráčovi %1$s sa úspešne poskytli všetky dosiahnuté výsledky",
    "achievement_give_success_one": "Hráčovi %1$s sa úspešne poskytla štatistika %2$s",
    "achievement_statTooLow": "Hráč %1$s nemá štatistiku %2$s",
    "achievement_take_success_all": "Hráčovi %1$s sa úspešne odobrali všetky dosiahnuté výsledky",
    "achievement_take_success_one": "Štatistika %1$s sa úspešne odobrala hráčovi %2$s",
    "achievement_unknownAchievement": "Neznámy dosiahnutý výsledok alebo štatistika %1$s",
    "agent_attack_success": "Útok agenta bol úspešný",
    "agent_attack_failed": "Agentovi sa nepodarilo zaútočiť",
    "agent_collect_success": "Pozbieranie agentom bolo úspešné",
    "agent_collect_failed": "Agentovi sa nepodarilo pozbierať",
    "agent_createagent_success": "Agent sa vytvoril",
    "agent_createagent_failed": "Nepodarilo sa vytvoriť agenta",
    "agent_destroy_success": "Agent zničil blok",
    "agent_destroy_failed": "Agentovi sa nepodarilo zničiť",
    "agent_detect_success": "Zistenie agentom bolo úspešné",
    "agent_detect_failed": "Agentovi sa nepodarilo zistiť",
    "agent_detectredstone_success": "Príkaz detectredstone pre agenta bol úspešný",
    "agent_detectredstone_failed": "Agentovi sa nepodarilo vykonať príkaz detectredstone",
    "agent_drop_success": "Pustenie agentom bolo úspešné",
    "agent_drop_failed": "Agentovi sa nepodarilo pustiť",
    "agent_dropall_success": "Príkaz dropall pre agenta bol úspešný",
    "agent_dropall_failed": "Agentovi sa nepodarilo vykonať príkaz dropall",
    "agent_getitemcount_success": "Príkaz getitemcount pre agenta bol úspešný",
    "agent_getitemcount_failed": "Agentovi sa nepodarilo vykonať príkaz getitemcount",
    "agent_getitemspace_success": "Príkaz getitemspace pre agenta bol úspešný",
    "agent_getitemspace_failed": "Agentovi sa nepodarilo vykonať príkaz getitemspace",
    "agent_getitemdetail_success": "Príkaz getitemdetail pre agenta bol úspešný",
    "agent_getitemdetail_failed": "Agentovi sa nepodarilo vykonať príkaz getitemdetail",
    "agent_getposition_success": "Príkaz getposition pre agenta bol úspešný",
    "agent_getposition_failed": "Príkaz getposition pre agenta zlyhal",
    "agent_inspect_success": "Kontrola agentom bola úspešná",
    "agent_inspect_failed": "Agentovi sa nepodarilo skontrolovať",
    "agent_inspectdata_success": "Kontrola údajov agentom bola úspešná",
    "agent_inspectdata_failed": "Agentovi sa nepodarilo skontrolovať údaje",
    "agent_move_success": "Presun agenta bol úspešný",
    "agent_move_failed": "Nepodarilo sa presunúť agenta",
    "agent_outofrange": "Nemožno vydať príkaz, agent je mimo dosahu",
    "agent_place_success": "Umiestnenie agenta bolo úspešné",
    "agent_place_failed": "Agentovi sa nepodarilo umiestniť sa",
    "agent_setitem_success": "Nastavenie položky agenta bolo úspešné",
    "agent_setitem_failed": "Agentovi sa nepodarilo nastaviť položku",
    "agent_turn_success": "Otočenie agenta bolo úspešné",
    "agent_turn_failed": "Nepodarilo sa otočiť agenta",
    "agent_till_success": "Obrobenie agentom bolo úspešné",
    "agent_till_failed": "Agentovi sa nepodarilo obrobiť",
    "agent_tpagent_description": "Teleportujte svojho agenta.",
    "agent_tpagent_success": "Agent sa teleportoval",
    "agent_tpagent_failed": "Agentovi sa nepodarilo teleportovať",
    "agent_transfer_success": "Prenos agenta bol úspešný",
    "agent_transfer_failed": "Agenta sa nepodarilo preniesť",
    "always_day": "Cyklus deň – noc %1$s",
    "always_day_locked": "Cyklus deň – noc zamknutý",
    "always_day_unlocked": "Cyklus deň – noc odomknutý",
    "ban_description": "Pridá hráča do zoznamu zakázaných osôb.",
    "autocomplete_a": "všetci hráči",
    "autocomplete_c": "môj agent",
    "autocomplete_e": "všetky subjekty",
    "autocomplete_p": "najbližší hráč",
    "autocomplete_r": "náhodný hráč",
    "autocomplete_s": "vy",
    "autocomplete_v": "všetci agenti",
    "ban_failed": "Nepodarilo sa zakázať hráča %1$s",
    "ban_success": "Hráč %1$s má zákaz",
    "banip_description": "Pridá adresu IP do zoznamu zakázaných osôb.",
    "banip_invalid": "Zadali ste neplatnú adresu IP alebo hráča, ktorý nie je online",
    "banip_success": "Zakázaná adresa IP %1$s",
    "banip_success_players": "Zakázaná adresa IP %1$s patriaca hráčovi %2$s",
    "banlist_ips": "Celkový počet zakázaných adries IP: %1$d",
    "banlist_players": "Celkový počet zakázaných hráčov: %1$d",
    "blockdata_description": "Upraví údajovú značku bloku.",
    "blockdata_placeFailed": "Tu nemôžete umiestniť bloky",
    "blockdata_destroyFailed": "Tu nemôžete kopať",
    "blockdata_failed": "Údajová značka sa nezmenila: %1$s",
    "blockdata_notValid": "Cieľový blok nie je blok obsahujúci údaje",
    "blockdata_outOfWorld": "Nemožno zmeniť blok mimo sveta",
    "blockdata_success": "Údaje bloku sa aktualizovali na: %1$s",
    "blockdata_tagError": "Analýza údajovej značky zlyhala: %1$s",
    "bossbar_add_success": "Vlastný ukazovateľ protivníka [%1$s] sa vytvoril",
    "bossbar_add_failure_invalid": "Neplatný identifikátor ukazovateľa protivníka. Identifikátory by mali mať tvar namespace:ID alebo ID (predvolený priestor názvov je minecraft).",
    "bossbar_add_failure_exists": "Ukazovateľ protivníka už existuje s ID %1$s",
    "bossbar_description": "Vytvára a upravuje mreže pre bosov",
    "bossbar_get_max": "Vlastný ukazovateľ protivníka [%1$s] má maximálne %2$d",
    "bossbar_get_players": "Vlastný ukazovateľ protivníka [%1$s] momentálne má %2$s hráčov online: %3$s",
    "bossbar_get_players_none": "Vlastný ukazovateľ protivníka [%1$s] momentálne nemá žiadnych hráčov online",
    "bossbar_get_players_one": "Vlastný ukazovateľ protivníka [%1$s] momentálne má 1 hráča online: %2$s",
    "bossbar_get_value": "Vlastný ukazovateľ protivníka [%1$s] má hodnotu %2$d",
    "bossbar_get_visible_true": "Vlastný ukazovateľ protivníka [%1$s] sa momentálne zobrazuje",
    "bossbar_get_visible_false": "Vlastný ukazovateľ protivníka [%1$s] je momentálne skrytý",
    "bossbar_list": "Aktívne sú vlastné ukazovatele protivníka v počte %1$s: %2$s",
    "bossbar_list_none": "Nie sú aktívne žiadne vlastné ukazovatele protivníka",
    "bossbar_list_one": "Aktívny je 1 vlastný ukazovateľ protivníka: %1$s",
    "bossbar_notFound": "Neexistuje ukazovateľ protivníka s ID %1$s",
    "bossbar_remove": "Vlastný ukazovateľ protivníka [%1$s] sa odstránil",
    "change_setting_description": "Zmení nastavenie na určenom serveri, kým je spustený.",
    "change_setting_success": "Príkaz %1$s sa zmenil",
    "chunkinfo_compiled": "Blok údajov sa skompiloval.",
    "chunkinfo_data": "Prvých 64 vrcholov je: %1$s",
    "chunkinfo_empty": "Blok údajov je prázdny.",
    "chunkinfo_hasLayers": "Blok údajov má vrstvy: %1$s",
    "chunkinfo_hasNoRenderableLayers": "Blok údajov nemá žiadne vykresliteľné vrstvy.",
    "chunkinfo_isEmpty": "Blok údajov má prázdne vrstvy: %1$s",
    "chunkinfo_location": "Umiestnenie bloku údajov: (%1$d, %2$d, %3$d)",
    "chunkinfo_noChunk": "Na pozícii bloku údajov %1$d, %2$d, %3$d sa nenašiel žiadny blok údajov",
    "chunkinfo_notCompiled": "Blok údajov sa neskompiloval.",
    "chunkinfo_notEmpty": "Blok údajov nie je prázdny.",
    "chunkinfo_vertices": "Medzipamäť vrstvy %1$s obsahuje tento počet vrcholov: %2$d",
    "classroommode_description": "Pokúste sa spustiť režim triedy a pripojiť sa k nemu.",
    "classroommode_success": "Pokus o spustenie režimu triedy...",
    "clear_description": "Vymaže položky z hráčovho inventára.",
    "clear_failure": "Nepodarilo sa vymazať inventár hráča %1$s",
    "clear_failure_no_items": "Nepodarilo sa vymazať inventár hráča %1$s, pretože neobsahuje žiadne položky na odstránenie",
    "clear_success": "Inventár hráča %1$s sa vymazal a odstránili sa položky (%2$d)",
    "clear_tagError": "Analýza údajovej značky zlyhala: %1$s",
    "clear_testing": "Hráč %1$s má položky (%2$d) zodpovedajúce kritériám",
    "clearfixedinv_description": "Odstráni všetky pevné miesta v inventári.",
    "clearfixedinv_success": "Pevný inventár sa vymazal",
    "clone_description": "Naklonuje bloky z jednej oblasti do druhej.",
    "clone_failed": "Neklonovali sa žiadne bloky",
    "clone_filtered_error": "Filtrované používanie vyžaduje zadanie bloku filtra",
    "clone_noOverlap": "Zdroj a cieľ sa nemôžu prekrývať",
    "clone_outOfWorld": "Nemožno získať prístup k blokom mimo sveta",
    "clone_success": "Bloky (%1$d) sa klonovali",
    "clone_tooManyBlocks": "Príliš veľa blokov v zadanej oblasti (%1$d > %2$d)",
    "closechat_description": "Zavrie okno chatu lokálneho hráča, ak je otvorené.",
    "closechat_success": "Chat zatvorený",
    "closechat_failure": "Chat nebol otvorený",
    "closewebsocket_description": "Ukončí pripojenie WebSocket, ak existuje.",
    "code_description": "Spustí Zostavovač kódu.",
    "code_success": "Zostavovač kódu sa spustil.",
    "compare_failed": "Zdroj a cieľ nie sú identické",
    "compare_outOfWorld": "Nemožno získať prístup k blokom mimo sveta",
    "compare_success": "Bloky (%1$d) sa porovnali",
    "compare_tooManyBlocks": "Príliš veľa blokov v zadanej oblasti (%1$d > %2$d)",
    "corruptworld_description": "Poškodí svet načítaný na serveri.",
    "corruptworld_success": "Svet sa úspešne poškodil.",
    "daylock_description": "Uzamkne a odomkne cyklus deň – noc.",
    "debug_description": "Spustí alebo zastaví reláciu ladenia.",
    "debug_notStarted": "Nemôžete zastaviť profilovanie, keď sme ešte nezačali.",
    "debug_start": "Profilovanie ladenia sa začalo",
    "debug_stop": "Profilovanie ladenia sa zastavilo po %.2f sekundách (%1$d dielikoch)",
    "defaultgamemode_description": "Nastaví predvolený herný režim.",
    "defaultgamemode_success": "Predvolený herný režim pre svet je teraz %1$s",
    "deop_description": "Odníme hráčovi stav operátora.",
    "deop_failed": "Nepodarilo sa zrušiť funkciu operátora (úroveň povolení je príliš vysoká): %s",
    "deop_success": "Odobratá funkcia operátora: %s",
    "deop_message": "Bola vám odobratá funkcia operátora",
    "difficulty_description": "Nastaví úroveň náročnosti.",
    "difficulty_usage": "/difficulty <nová náročnosť>",
    "difficulty_success": "Náročnosť hry sa nastavila na %1$s",
    "downfall_success": "Prepli sa zrážky",
    "effect_description": "Pridajte alebo odstráňte stavové účinky.",
    "effect_failure_notActive": "Nepodarilo sa zobrať účinok %1$s hráčovi %2$s, pretože ho nemá",
    "effect_failure_notActive_all": "Nepodarilo sa zobrať účinky hráčovi %1$s, pretože žiadne nemá",
    "effect_failure_notAMob": "%1$s nemôže mať účinky",
    "effect_notFound": "Neexistuje žiadny účinok tvora s ID %s",
    "effect_success": "Dali ste účinok %1$s * %2$d hráčovi %3$s na %4$d sekúnd",
    "effect_success_removed": "Zobrali ste účinok %1$s hráčovi %2$s",
    "effect_success_removed_all": "Zobrali ste hráčovi %1$s všetky účinky",
    "enchant_cantCombine": "%1$s a %2$s nemožno skombinovať",
    "enchant_invalidLevel": "%1$s nepodporuje úroveň %2$d",
    "enchant_cantEnchant": "Vybraté očarovanie nemožno pridať cieľovej položke: %1$s",
    "enchant_description": "Pridá očarovanie položke vybratej hráčom.",
    "enchant_noItem": "Cieľ nemá položku: %1$s",
    "enchant_notFound": "Neexistuje žiadne očarovanie s ID %1$d",
    "enchant_success": "Očarovanie sa podarilo pre %1$s",
    "entitydata_description": "Upraví údajovú značku subjektu.",
    "entitydata_failed": "Údajová značka sa nezmenila: %1$s",
    "entitydata_noPlayers": "%1$s je hráč a nemožno ho zmeniť",
    "entitydata_success": "Údaje subjektu sa aktualizovali na: %1$s",
    "entitydata_tagError": "Analýza údajovej značky zlyhala: %1$s",
    "execute_allInvocationsFailed": "Všetky vyvolania zlyhali: %1$s",
    "execute_failed": "Nepodarilo sa vykonať %1$s ako %2$s",
    "execute_description": "Vykoná príkaz v mene jedného alebo viacerých subjektov.",
    "fill_description": "Vyplní konkrétnym blokom celú oblasť alebo jej časti.",
    "fill_failed": "Nevyplnené žiadnymi blokmi",
    "fill_outOfWorld": "Bloky nemožno umiestniť mimo sveta",
    "fill_success": "Vyplnené %1$d blokmi",
    "fill_tagError": "Analýza údajovej značky zlyhala: %1$s",
    "fill_tooManyBlocks": "Príliš veľa blokov v zadanej oblasti (%1$d > %2$d)",
    "fill_replace_auxvalue_invalid": "Neplatná hodnota nahradenia údajov pre blok %1$s",
    "function_description": "Spúšťa príkazy nájdené v súbore zodpovedajúcej funkcie.",
    "function_functionNameNotFound": "Funkcia %1$s sa nenašla.",
    "function_invalidCharacters": "Funkcia s názvom %s je neplatná. V názvoch funkcií nie je povolený znak %s.",
    "function_noEngineVersionSpecified": "Funkciu %s sa nepodarilo spustiť. V súbore manifest.json v balíku správania musíte zadať parameter min_engine_version.",
    "function_success": "Položky funkcie %1$d sa úspešne vykonali.",
    "gamemode_description": "Nastaví herný režim hráča.",
    "gamemode_success_other": "Herný režim hráča %2$s sa nastavil na %1$s",
    "gamemode_success_self": "Vlastný herný režim sa nastavil na %1$s",
    "gamemode_fail_invalid": "Herný režim %1$s je neplatný",
    "gamerule_description": "Nastaví alebo odošle dotaz na hodnotu pravidla hry.",
    "gamerule_type_invalid": "Neplatný typ použitý pre pravidlo hry %1$s",
    "gamerule_type_nocheatsenabled": "Pravidlo hry %1$s možno použiť, iba ak je v tomto svete povolené podvádzanie.",
    "gamerule_nopermission": "Pravidlo %1$s môžu zmeniť iba majitelia servera",
    "gamerule_norule": "Nie je k dispozícii žiadne pravidlo hry s názvom %1$s",
    "gamerule_success": "Pravidlo hry %1$s sa aktualizovalo na %2$s",
    "generic_async_initiated": "Spustil sa príkaz %1$s (asynchrónny krok %2$d)",
    "generic_boolean_invalid": "%1$s nemá hodnotu true ani false",
    "generic_chunk_notFound": "Zadaný blok údajov sa nenašiel",
    "generic_componentError": "Analýza zoznamu súčastí zlyhala",
    "generic_dimension_notFound": "Zadaná dimenzia sa nenašla",
    "generic_disabled": "Podvádzanie nie je v tejto úrovni povolené.",
    "generic_disabled_templateLocked": "Nastavenia sú momentálne zamknuté. Ak ich chcete zmeniť, odomknite možnosti sveta podľa šablóny v ponuke Nastavenia hry.",
    "generic_double_tooBig": "Zadané číslo (%.2f) je príliš veľké. Najväčšia hodnota musí byť %.2f",
    "generic_double_tooSmall": "Zadané číslo (%.2f) je príliš malé. Najmenšia hodnota musí byť %.2f",
    "generic_duplicateType": "Argumenty duplicitného typu",
    "generic_duplicateSelectorArgument": "Argumenty duplicitného voliča %s",
    "generic_encryption_badkey": "Bol poskytnutý zlý verejný kľúč. Po formátovaní PEM sa očakával 120-bajtový kľúč.",
    "generic_encryption_badsalt": "Bol poskytnutá zlá hodnota Salt. Pred kódovaním Base 64 sa očakávala 16-bajtová hodnota.",
    "generic_encryption_required": "Požaduje sa šifrovaná relácia",
    "generic_entity_invalidType": "Typ subjektu %1$s je neplatný",
    "generic_entity_invalidUuid": "Zadaný identifikátor UUID subjektu má neplatný formát",
    "generic_entity_notFound": "Tento subjekt nemožno nájsť",
    "generic_exception": "Pri pokuse o vykonanie tohto príkazu sa vyskytla neznáma chyba",
    "generic_invalidAgentType": "Argument typu uplatnený na volič iba pre agenta",
    "generic_invalidcontext": "Neplatný kontext poskytnutý pre daný typ príkazu",
    "generic_invalidDevice": "Zadaný príkaz %s v tomto zariadení nie je podporovaný",
    "generic_invalidPlayerType": "Argument typu uplatnený na volič iba pre hráča",
    "generic_invalidType": "Argument neznámeho typu",
    "generic_levelError": "Max. úroveň musí byť väčšia ako min. úroveň",
    "generic_malformed_body": "Telo chýba alebo je poškodené",
    "generic_malformed_type": "Neplatný typ požiadavky",
    "generic_notimplemented": "Neimplementované",
    "generic_num_invalid": "%1$s nie je platné číslo",
    "generic_num_tooBig": "Zadané číslo (%1$d) je príliš veľké. Najväčšia hodnota môže byť %2$d",
    "generic_num_tooSmall": "Zadané číslo (%1$d) je príliš malé. Najmenšia hodnota môže byť %2$d",
    "generic_parameter_invalid": "%1$s nie je platný parameter",
    "generic_permission_selector": "<nedostatočné povolenia pre rozšírenie voliča>",
    "generic_player_notFound": "Tohto hráča nemožno nájsť",
    "generic_protocol_mismatch": "Zadaná verzia protokolu sa nezhoduje s verziou protokolu hry Minecraft",
    "generic_radiusError": "Minimálny rádius voliča musí byť menší než maximálny",
    "generic_radiusNegative": "Rádius nemôže byť záporný",
    "generic_rotationError": "Rotácia mimo rozsahu",
    "generic_running": "Príkaz už je spustený",
    "generic_step_failed": "Krok príkazu zlyhal",
    "generic_syntax": "Chyba syntaxe: Neočakávaná hodnota %2$s: v príkaze %1$s>>%2$s<<%3$s",
    "generic_noTargetMatch": "Žiadne ciele nezodpovedajú voliču",
    "generic_targetNotPlayer": "Volič musí byť typu Hráč",
    "generic_tooManyNames": "Príliš veľa argumentov s názvom cieľa",
    "generic_tooManyTargets": "Príliš veľa cieľov zodpovedá voliču",
    "generic_too_many_requests": "Vyžiadalo sa priveľa príkazov. Počkajte, kým sa jeden z nich vykoná",
    "generic_unknown": "Neznámy príkaz: %s. Skontrolujte, či príkaz existuje a či máte povolenie na jeho používanie.",
    "generic_usage": "Použitie: %1$s",
    "generic_usage_noparam": "Použitie:",
    "generic_version_mismatch": "Požadovaná verzia neexistuje pre tento príkaz",
    "generic_version_missing": "Volania príkazov, ktoré nepochádzajú z chatu, by mali určovať verziu príkazu",
    "getchunkdata_description": "Získa pixle pre konkrétny blok údajov.",
    "getchunkdata_success": "Prijali sa údaje bloku údajov",
    "getchunks_description": "Získa zoznam načítaných blokov údajov.",
    "getchunks_success": "Prijal sa zoznam blokov údajov",
    "getlocalplayername_description": "Vráti meno lokálneho hráča.",
    "getspawnpoint_description": "Získa pozíciu objavenia sa zadaných hráčov.",
    "gettopsolidblock_description": "Získa pozíciu najvyššieho nevzduchového bloku pod zadanou pozíciou",
    "gettopsolidblock_notfound": "Žiadne pevné bloky pod zadanou pozíciou",
    "give_block_notFound": "Neexistuje žiadny blok s názvom %1$d",
    "give_description": "Dá hráčovi predmet.",
    "give_item_invalid": "Neplatná syntax príkazu: neexistuje žiadna položka %s s touto hodnotou údajov",
    "give_item_notFound": "Neexistuje žiadna položka s názvom %1$d",
    "give_map_invalidData": "Poskytnuté neplatné údaje mapy",
    "give_map_featureNotFound": "Nepodarilo sa vytvoriť mapu prieskumu. Funkcia sa v tejto dimenzii nenašla",
    "give_success": "Dali ste účinok %1$s * %2$d hráčovi %3$s",
    "give_successRecipient": "Dostali ste položku %1$s * %2$d",
    "give_tagError": "Analýza údajovej značky zlyhala: %1$s",
    "help_description": "Poskytne pomoc/zoznam príkazov.",
    "help_footer": "Tip: Pri zadávaní príkazu použite kláves <tab> na automatické dokončenie príkazu alebo argumentov",
    "help_header": "--- Zobrazuje sa stránka Pomocníka %1$d z %2$d (/help <stránka>) ---",
    "help_command_aliases": "%s (aj %s):",
    "immutableworld_description": "Nastaví nemenný stav sveta.",
    "immutableworld_info": "immutableworld = %s",
    "kick_description": "Vyhodí hráča zo servera.",
    "kick_description_edu": "Odstráni hráča z hry.",
    "kick_not_found": "Nepodarilo sa nájsť hráča %1$s",
    "kick_not_yourself": "Nemôžete sa odstrániť z hry",
    "kick_success": "Hráč %1$s bol vyhodený z hry",
    "kick_success_reason": "Hráč %1$s bol vyhodený z hry: %2$s",
    "kick_success_reasonedu": "Hráč %1$s bol odstránený z hry: %2$s",
    "kick_no_host": "Hostiteľ nemôže byť vyhodený z hry.",
    "kick_no_teacher": "Učitelia nemôžu byť odobraní z hry.",
    "kill_successful_edu": "Odstránili sa: %1$s",
    "kill_successful": "Subjekt %1$s bol zabitý",
    "kill_description_edu": "Odstráni subjekty (hráčov, tvory a pod.).",
    "kill_description": "Zabije subjekty (hráčov, tvory a pod.).",
    "list_description": "Zobrazí zoznam hráčov na serveri.",
    "locate_description": "Zobrazí súradnice najbližšej stavby daného typu.",
    "locate_fail_noplayer": "Príkaz môže použiť len platný hráč",
    "locate_fail_nostructurefound": "V tejto dimenzii sa nenašla žiadna platná stavba",
    "locate_success": "Najbližšia stavba %1$s je pri bloku %2$s, (y?), %3$s",
    "togglecontentlog_toggle": "Povoľuje/zakazuje príkaz pre denník obsahu",
    "togglecontentlog_enabled": "Denník obsahu povolený",
    "togglecontentlog_disabled": "Denník obsahu zakázaný",
    "me_description": "Zobrazí správu o vás.",
    "message_display_incoming": "%1$s vám šepká: %2$s",
    "message_display_outgoing": "Šepkáte hráčovi %1$s: %2$s",
    "message_sameTarget": "Súkromnú správu nemôžete poslať sebe.",
    "mixer_description": "Ovládací prvok interaktivity v aplikácii Mixer",
    "mixer_error_unknown": "Vyskytla sa neznáma chyba aplikácie Mixer.",
    "mixer_error_notoken": "Ak chcete povoliť interaktivitu v aplikácii Mixer, musíte byť prihlásení pomocou konta Microsoft.",
    "mixer_error_notsupported": "Používané zariadenie nepodporuje interaktivitu v aplikácii Mixer.",
    "mixer_interactive_error": "Vyskytla sa chyba aplikácie Mixer: %1$s",
    "mixer_scene_failed": "Neexistuje žiadna scéna s názvom %1$s. Skontrolujte, či ste zadali názov scény správne.",
    "mixer_scene_success": "Scéna zmenená na: %1$s",
    "mixer_start_success": "Interaktívne spustenie aplikácie Mixer: %1$s",
    "mixer_start_fail_invalidCode": "Nepodarilo sa nájsť projekt s identifikátorom %1$s. Skontrolujte správnosť identifikátora alebo kódu zdieľania.",
    "mixer_stop_success": "Aplikácia Mixer bola interaktívne zastavená.",
    "mixer_stop_fail": "Žiadna interaktívna relácia na zastavenie.",
    "mixer_status_notinitialized": "Interaktivita nie je inicializovaná.",
    "mixer_status_enabled": "Interaktivita je povolená.",
    "mixer_status_initializing": "Interaktivita sa inicializuje.",
    "mixer_status_pending": "Čaká sa na interaktivitu.",
    "mixer_status_disabled": "Interaktivita je zakázaná.",
    "mixer_activatedbutton": "Používateľ %1$s aktivoval %2$s.",
    "mobevent_description": "Určuje, aké udalosti tvorov môžu prebiehať.",
    "mobevent_eventsEnabledSetToTrue": "Udalosti tvorov sa povolili. Jednotlivé udalosti nastavené na hodnotu false sa nespustia.",
    "mobevent_eventsEnabledSetToFalse": "Udalosti tvorov sa zakázali. Jednotlivé udalosti sa nespustia.",
    "mobevent_eventsEnabledIsTrue": "Udalosti tvorov sú povolené. Jednotlivé udalosti nastavené na hodnotu false sa nespustia.",
    "mobevent_eventsEnabledIsFalse": "Udalosti tvorov sú zakázané. Jednotlivé udalosti sa nespustia.",
    "mobevent_eventSetToTrue": "Udalosť tvorov %s (id: %s) nastavená na hodnotu true.",
    "mobevent_eventSetToTrueButEventsDisabled": "Udalosť tvorov %s (id: %s) nastavená na hodnotu true, ale udalosti tvorov sú zakázané.",
    "mobevent_eventSetToFalse": "Udalosť tvorov %s (id: %s) nastavená na hodnotu false.",
    "mobevent_eventIsTrue": "Udalosť tvorov %s (id: %s) je nastavená na hodnotu true.",
    "mobevent_eventIsTrueButEventsDisabled": "Udalosť tvorov %s (id: %s) je nastavená na hodnotu true, ale udalosti tvorov sú zakázané.",
    "mobevent_eventIsFalse": "Udalosť tvorov %s (id: %s) je nastavená na hodnotu false.",
    "op_description": "Udelí hráčovi stav operátora.",
    "op_failed": "Nepodarilo sa určiť za operátora (hráč má funkciu operátora alebo vyššiu): %s",
    "op_success": "Určený za operátora: %s",
    "op_message": "Boli ste určení za operátora",
    "origin_commandblock": "PríkazovýBlok",
    "origin_external": "Externý",
    "origin_devconsole": "Konzola vývojára",
    "origin_script": "Nástroj skriptovania",
    "origin_server": "Server",
    "origin_teacher": "Učiteľ",
    "ops_description": "Načíta a použije povolenia operátora.",
    "ops_reloaded": "Operátori načítaní zo súboru.",
    "ops_set_success": "Podarilo sa nastaviť úroveň operátora pre hráča %s.",
    "permissions_description": "Znova načíta a použije povolenia.",
    "permissions_reloaded": "Povolenia sa znova načítali zo súboru.",
    "permissions_set_failed": "Nepodarilo sa nastaviť úroveň povolení %s pre hráča %s.",
    "permissions_set_success": "Podarilo sa nastaviť úroveň povolení %s pre hráča %s.",
    "permissions_save_failed": "Nepodarilo sa uložiť úroveň povolení %s pre hráča %s.",
    "permissions_save_success": "Podarilo sa uložiť úroveň povolení %s pre hráča %s.",
    "spawnParticleEmitter_description": "Vytvorí časticový žiarič",
    "particle_description": "Vytvorí častice.",
    "particle_notFound": "Neznámy názov účinku (%1$s)",
    "particle_success": "Efekt %1$s sa prehrá %2$d-krát",
    "players_list": "Hráči online: %1$d/%2$d",
    "players_list_names": "%s",
    "playsound_description": "Prehrá zvuk.",
    "playsound_playerTooFar": "Hráč %1$s je príliš ďaleko, aby počul zvuk",
    "playsound_success": "Zvuk %1$s sa prehral hráčovi %2$s",
    "position_description": "Zapne alebo vypne hráčove koordináty.",
    "publish_failed": "Nepodarilo sa hostiť lokálnu hru",
    "publish_started": "Lokálna hra sa hostila na porte %1$s",
    "querytarget_description": "Získa informácie o transformácii, mene a ID daného cieľového subjektu alebo subjektov.",
    "querytarget_success": "Údaje cieľa: %1$s",
    "reload_description": "Znova načíta všetky súbory funkcie zo všetkých balíkov správania.",
    "reload_success": "Znova sa načítali súbory existujúcich funkcií. Reštartujte Minecraft, aby sa znova načítali NOVÉ funkcie.",
    "replaceitem_description": "Nahradí položky v inventároch.",
    "replaceitem_failed": "%s miesto %d sa nepodarilo nahradiť položkou %d * %s",
    "replaceitem_keepFailed": "Už existuje položka zaberajúca %s slot %d.",
    "replaceitem_noContainer": "Blok na pozícii %s nie je nádoba",
    "replaceitem_badSlotNumber": "Nepodarilo sa nahradiť miesto %d. Musí to byť hodnota od %d do %d.",
    "replaceitem_success": "%s miesto %d sa nahradilo položkou %d * %s",
    "replaceitem_success_entity": "%s miesto %d z %s sa nahradilo položkou %d * %s",
    "replaceitem_tagError": "Analýza údajovej značky zlyhala: %1$s",
    "save_description": "Ovládajte alebo kontrolujte, ako hra ukladá údaje na disk.",
    "save_disabled": "Automatické ukladanie sveta je vypnuté",
    "save_enabled": "Automatické ukladanie sveta je zapnuté",
    "save_failed": "Ukladanie zlyhalo: %1$s",
    "save_start": "Ukladá sa…",
    "save_success": "Svet sa uložil",
    "save_all_error": "Pri pokuse o pozastavenie ukladacieho priestoru úrovne sa vyskytla chyba.",
    "save_all_success": "Údaje sa uložili. Súbory sú pripravené na kopírovanie.",
    "save_off_alreadyOff": "Ukladanie je už vypnuté.",
    "save_on_alreadyOn": "Ukladanie je už zapnuté.",
    "save_on_notDone": "Predchádzajúce ukladanie sa nedokončilo.",
    "save_on_description": "Povolí automatické ukladanie na serveri.",
    "save_on_success": "Zmeny úrovne sú obnovené.",
    "save_state_description": "Skontroluje, či sa dokončilo predchádzajúce ukladanie všetkých súborov, a zobrazí zoznam relevantných súborov.",
    "say_description": "Odošle ostatným hráčom správu chatu.",
    "scoreboard_description": "Sleduje a zobrazuje skóre pre rôzne ciele.",
    "scoreboard_allMatchesFailed": "Všetky priradenia zlyhali",
    "scoreboard_noMultiWildcard": "Povolený je iba jeden používateľský zástupný znak",
    "scoreboard_objectiveNotFound": "Podľa názvu %1$s sa nenašiel žiadny cieľ",
    "scoreboard_objectiveReadOnly": "Cieľ %1$s je určený iba na čítanie a nemožno ho nastaviť",
    "scoreboard_objectives_add_alreadyExists": "Cieľ s názvom %1$s už existuje",
    "scoreboard_objectives_add_displayTooLong": "Zobrazovaný názov %1$s je pre cieľ príliš dlhý. Najviac môže mať %2$d znakov",
    "scoreboard_objectives_add_success": "Nový cieľ %1$s sa úspešne pridal",
    "scoreboard_objectives_add_tooLong": "Názov %1$s je pre cieľ príliš dlhý. Najviac môže mať %2$d znakov",
    "scoreboard_objectives_add_wrongType": "Neplatný typ kritérií cieľa %1$s",
    "scoreboard_objectives_add_needName": "Cieľ musí mať názov.",
    "scoreboard_objectives_description": "Upravte ciele na tabuli so skóre.",
    "scoreboard_objectives_list_count": "Na tabuli so skóre sa zobrazujú ciele (%1$d):",
    "scoreboard_objectives_list_empty": "Na tabuli so skóre nie sú žiadne ciele",
    "scoreboard_objectives_list_entry": "– %1$s: zobrazuje sa ako %2$s a je typu %3$s",
    "scoreboard_objectives_remove_success": "Cieľ %1$s sa úspešne odstránil",
    "scoreboard_objectives_setdisplay_invalidSlot": "Žiadne takéto miesto zobrazenia %1$s",
    "scoreboard_objectives_setdisplay_successCleared": "Miesto zobrazenia cieľa %1$s sa odstránilo",
    "scoreboard_objectives_setdisplay_successSet": "Nastaviť zobrazený cieľ na mieste %1$s na %2$s",
    "scoreboard_players_add_success": "Hráč %3$s pridal %1$d bodov k cieľu [%2$s] (teraz má %4$d bodov)",
    "scoreboard_players_add_multiple_success": "Hráči (%3$s) pridali %1$d bodov k cieľu [%2$s]",
    "scoreboard_players_nameNotFound": "Musí byť zadané meno hráča.",
    "scoreboard_players_enable_noTrigger": "Cieľ %1$s nie je spúšťač",
    "scoreboard_players_enable_success": "Aktivoval sa spúšťač %1$s pre hráča %2$s",
    "scoreboard_players_list_count": "Na tabuli so skóre sa zobrazujú sledovaní hráči (%1$d):",
    "scoreboard_players_list_empty": "Na tabuli so skóre nie sú žiadni sledovaní hráči",
    "scoreboard_players_list_player_count": "Zobrazujú sa sledované ciele (%1$d) pre hráča %2$s:",
    "scoreboard_players_list_player_empty": "Hráč %1$s nemá žiadne zaznamenané skóre",
    "scoreboard_players_list_player_entry": "– %2$s: %1$d (%3$s)",
    "scoreboard_players_operation_invalidOperation": "Neplatná operácia %1$s",
    "scoreboard_players_operation_notFound": "Nenašlo sa žiadne skóre %1$s pre hráča %2$s",
    "scoreboard_players_operation_success": "Cieľ [%1$s] sa hráčom (%2$d) aktualizoval",
    "scoreboard_players_offlinePlayerName": "Hráč offline",
    "scoreboard_players_random_invalidRange": "Min. hodnota %1$d nie je menšia ako max. hodnota %2$d",
    "scoreboard_players_remove_success": "Hráč %3$s odobral %1$d bodov z cieľa [%2$s] (teraz má %4$d bodov)",
    "scoreboard_players_remove_multiple_success": "Hráči (%3$s) odobrali %1$d bodov z cieľa [%2$s]",
    "scoreboard_players_reset_success": "Vynulovalo sa skóre hráča %1$s",
    "scoreboard_players_resetscore_success": "Vynulovalo sa skóre %1$s hráča %2$s",
    "scoreboard_players_set_success": "Cieľ %1$s hráča %2$s sa nastavil na %3$d",
    "scoreboard_players_set_multiple_success": "Cieľ %1$s hráčov (%2$s) sa nastavil na %3$d",
    "scoreboard_players_set_tagError": "Nepodarilo sa analyzovať údajovú značku, dôvod: %1$s",
    "scoreboard_players_set_tagMismatch": "Údajová značka sa nezhoduje pre hráča %1$s",
    "scoreboard_players_score_notFound": "Nenašlo sa žiadne skóre %1$s pre hráča %2$s",
    "scoreboard_players_test_failed": "Skóre %1$d NIE je v rozsahu %2$d až %3$d",
    "scoreboard_players_test_success": "Skóre %1$d je v rozsahu %2$d až %3$d",
    "scoreboard_teamNotFound": "Podľa názvu %1$s sa nenašiel žiadny tím",
    "scoreboard_teams_add_alreadyExists": "Tím s názvom %1$s už existuje",
    "scoreboard_teams_add_displayTooLong": "Zobrazovaný názov %1$s je pre tím príliš dlhý. Najviac môže mať %2$d znakov",
    "scoreboard_teams_add_success": "Nový tím %1$s sa úspešne pridal",
    "scoreboard_teams_add_tooLong": "Názov %1$s je pre tím príliš dlhý. Najviac môže mať %2$d znakov",
    "scoreboard_teams_empty_alreadyEmpty": "Tím %1$s už je prázdny. Nemožno odstrániť neexistujúcich hráčov",
    "scoreboard_teams_empty_success": "Odstránili sa všetci hráči (%1$d) z tímu %2$s",
    "scoreboard_teams_join_failure": "Hráčov (%1$d) sa nepodarilo pridať do tímu %2$s: %3$s",
    "scoreboard_teams_join_success": "Hráči (%1$d) sa pridali do tímu %2$s: %3$s",
    "scoreboard_teams_leave_failure": "Hráčov (%1$d) sa nepodarilo odstrániť z tímov: %2$s",
    "scoreboard_teams_leave_noTeam": "Nie ste v tíme",
    "scoreboard_teams_leave_success": "Hráči (%1$d) sa odstránili z tímov: %2$s",
    "scoreboard_teams_list_count": "Na tabuli so skóre sa zobrazujú tímy (%1$d):",
    "scoreboard_teams_list_empty": "Na tabuli so skóre nie sú zaregistrované žiadne tímy",
    "scoreboard_teams_list_entry": "– %1$s: %2$s má %3$d hráčov",
    "scoreboard_teams_list_player_count": "Zobrazujú sa hráči (%1$d) v tíme %2$s:",
    "scoreboard_teams_list_player_empty": "Tím %1$s nemá žiadnych hráčov",
    "scoreboard_teams_list_player_entry": "– %2$s: %1$d (%3$s)",
    "scoreboard_teams_option_noValue": "Platné hodnoty možnosti %1$s sú: %2$s",
    "scoreboard_teams_option_success": "Možnosť %1$s tímu %2$s sa nastavila na %3$s",
    "scoreboard_teams_remove_success": "Tím %1$s sa odstránil",
    "seed_success": "Počiatočná hodnota: %1$s",
    "setblock_description": "Zmení blok na iný.",
    "setblock_failed": "Nepodarilo sa umiestniť blok",
    "setblock_noChange": "Blok sa nemohol umiestniť",
    "setblock_notFound": "Neexistuje žiadny blok s ID/názvom %1$s",
    "setblock_outOfWorld": "Blok nemožno umiestniť mimo sveta",
    "setblock_success": "Blok sa umiestnil",
    "setblock_tagError": "Analýza údajovej značky zlyhala: %1$s",
    "setidletimeout_success": "Časový limit nečinnosti sa úspešne nastavil na %1$d min.",
    "setfixedinvslots_description": "Nastaví počet pevných miest inventára pre server.",
    "setfixedinvslots_success": "Počet pevných miest inventára sa nastavil na %1$d",
    "setfixedinvslot_description": "Nastaví pevné miesto na zadanú položku.",
    "setfixedinvslot_success": "Pevné miesto inventára %1$d sa nastavilo na %2$s",
    "globalpause_description": "Nastaví alebo získa pozastavený stav hry pre všetkých hráčov.",
    "globalpause_success": "Pozastavený stav sa nastavil alebo získal",
    "setmaxplayers_description": "Nastaví maximálny počet hráčov pre túto reláciu hry.",
    "setmaxplayers_success": "Nastavte maximálny počet hráčov na %1$d.",
    "setmaxplayers_success_upperbound": "(Viaže sa na maximálny povolený počet pripojení.)",
    "setmaxplayers_success_lowerbound": "(Viaže sa na aktuálny počet hráčov.)",
    "setworldspawn_description": "Nastaví miesto objavenia sa sveta.",
    "setworldspawn_success": "Miesto objavenia sa vo svete sa nastavilo na (%1$d, %2$d, %3$d)",
    "setworldspawn_wrongDimension": "Miesto objavenia sa vo svete nemožno nastaviť v tejto dimenzii",
    "spawnpoint_success_single": "Miesto objavenia sa hráča %1$s sa nastavilo na (%2$d, %3$d, %4$d)",
    "spawnpoint_description": "Nastaví miesto objavenia sa hráča.",
    "spawnpoint_success_multiple_specific": "Miesto objavenia sa hráča %1$s sa nastavilo na (%2$d, %3$d, %4$d)",
    "spawnpoint_success_multiple_generic": "Miesto objavenia sa hráča %1$s sa nastavilo",
    "spawnpoint_wrongDimension": "Miesto objavenia sa nemožno nastaviť v tejto dimenzii",
    "spreadplayers_description": "Teleportuje subjekty na náhodné miesta.",
    "spreadplayers_failure_players": "Hráčov (%1$s) sa nepodarilo rozmiestniť okolo bodu %2$s, %3$s (príliš veľa hráčov na priestor – skúste použiť rozmiestnenie nanajvýš %4$s)",
    "spreadplayers_failure_teams": "Tímy (%1$s) sa nepodarilo rozmiestniť okolo bodu %2$s, %3$s (príliš veľa hráčov na priestor – skúste použiť rozmiestnenie nanajvýš %4$s)",
    "spreadplayers_info_players": "(Priemerná vzdialenosť medzi hráčmi je %1$s blokov od seba po %2$s opakovaniach)",
    "spreadplayers_info_teams": "(Priemerná vzdialenosť medzi tímami je %1$s blokov od seba po %2$s opakovaniach)",
    "spreadplayers_spreading_players": "Rozmiestňujú sa hráči (%1$s) %2$s blokov okolo bodu %3$s, %4$s (min. %5$s blokov od seba)",
    "spreadplayers_spreading_teams": "Rozmiestňujú sa tímy (%1$s) %2$s blokov okolo bodu %3$s, %4$s (min. %5$s blokov od seba)",
    "spreadplayers_success_players": "Hráči (%1$s) sa úspešne rozmiestnili okolo bodu %2$s, %3$s",
    "spreadplayers_success_teams": "Tímy (%1$s) sa úspešne rozmiestnili okolo bodu %2$s, %3$s",
    "stats_cleared": "Vymazali sa štatistiky (%1$s)",
    "stats_failed": "Neplatné parametre",
    "stats_noCompatibleBlock": "Blok na pozícii %1$d, %2$d, %3$d nemôže sledovať štatistiky",
    "stats_success": "Ukladajú sa štatistiky (%1$s) v %2$s na %3$s",
    "stop_description": "Zastaví server.",
    "stop_start": "Server sa zastavuje",
    "stopsound_description": "Zastaví zvuk.",
    "stopsound_success": "Zvuk %s sa zastavil na %s",
    "stopsound_success_all": "Všetky zvuky sa zastavili na %s",
    "summon_description": "Privolá subjekt.",
    "summon_failed": "Objekt sa nepodarilo vykúzliť",
    "summon_outOfWorld": "Objekt nemožno vykúzliť mimo sveta",
    "summon_success": "Objekt sa úspešne vykúzlil",
    "summon_tagError": "Analýza údajovej značky zlyhala: %1$s",
    "tag_description": "Spravuje značky uložené v subjektoch.",
    "tag_add_failed": "Cieľ už má značku alebo má príliš veľa značiek",
    "tag_add_success_single": "Pridala sa značka %1$s pre %2$s",
    "tag_add_success_multiple": "Značka %1$s sa pridala %2$d subjektom",
    "tag_list_single_empty": "%s nemá žiadne značky",
    "tag_list_single_success": "%1$s má značky (%2$d): %3$s",
    "tag_list_multiple_empty": "Neexistujú žiadne značky na %d subjektoch",
    "tag_list_multiple_success": "Subjekty (%1$d) majú celkový počet %2$d značiek: %3$s",
    "tag_remove_failed": "Cieľ nemá túto značku",
    "tag_remove_success_single": "Odstránila sa značka %1$s z %2$s",
    "tag_remove_success_multiple": "Značka %1$s sa odstránila z %2$d subjektov",
    "tell_description": "Odošle jednému alebo viacerým hráčom súkromnú správu.",
    "tellraw_description": "Odošle hráčom správu vo formáte JSON.",
    "tellraw_jsonException": "Neplatný formát json: %1$s",
    "tellraw_jsonStringException": "Neplatné údaje reťazca json.",
    "tellraw_error_noData": "Neposkytli sa žiadne údaje.",
    "tellraw_error_notArray": "Objekt Rawtext musí obsahovať pole. Príklad: \"rawtext\":[{..}]",
    "tellraw_error_textNotString": "Pole text v objekte rawtext musí obsahovať reťazec. Príklad: \"rawtext\":[{\"text\": \"text to display\"}]",
    "tellraw_error_translateNotString": "Pole translate v objekte rawtext musí obsahovať jazykový kľúč. Príklad: \"rawtext\":[{\"translate\": \"gui.ok\"}]",
    "tellraw_error_withNotArrayOrRawText": "s políčkom typu rawtext musí obsahovať pole alebo iný objekt typu rawtext. Príklad 1: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\": [ \"value1\", \"value2\" ]}]  Príklad 2: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\":{\"rawtext\":[{\"text\": \"value1\"}, {\"text\": \"value2\"}]}}]",
    "tellraw_error_itemIsNotObject": "Hodnota Json v poli rawtext nebola objekt. Príklad: \"rawtext\": [{ \"text\" : \"my text\" }]",
    "educlientinfo_description": "Získajte ID nájomníka a stav hostiteľa. Určené pre CM.",
    "testfor_description": "Spočíta subjekty (hráčov, tvory, predmety atď.) zodpovedajúce zadaným podmienkam.",
    "testfor_failure": "%1$s nezodpovedá požadovanej štruktúre údajov",
    "testfor_success": "Našlo sa: %1$s",
    "testfor_tagError": "Analýza údajovej značky zlyhala: %1$s",
    "testforblock_description": "Otestuje, či je určitý blok na konkrétnom mieste.",
    "testforblock_failed_data": "Blok na pozícii %1$d,%2$d,%3$d nezodpovedal očakávanému stavu bloku.",
    "testforblock_failed_nbt": "Blok na pozícii %1$d, %2$d, %3$d nemal požadované kľúče NBT.",
    "testforblock_failed_tile": "Blok na pozícii %1$d, %2$d, %3$d je %4$s (očakával sa: %5$s).",
    "testforblock_failed_tileEntity": "Blok na pozícii %1$d, %2$d, %3$d nie je subjektom dlaždice a nemôže podporovať priraďovanie značiek.",
    "testforblock_outOfWorld": "Nemožno otestovať pre blok mimo sveta",
    "testforblock_success": "Blok sa úspešne našiel na pozícii %1$d, %2$d, %3$d.",
    "testforblocks_description": "Otestuje, či sa bloky v dvoch oblastiach zhodujú.",
    "tickingarea_description": "Pridajte, odstráňte živé oblasti alebo zobrazte ich zoznam.",
    "tickingarea_inuse": "Používané živé oblasti: %1$d/%2$d.",
    "tickingarea_noneExist_currentDimension": "V aktuálnej dimenzii neexistujú žiadne živé oblasti.",
    "tickingarea_add_bounds_success": "Pridali sa živé oblasti od %1$d do %2$d.",
    "tickingarea_add_circle_success": "Pridala sa živá oblasť so stredom na %1$d a polomerom %2$d blokov údajov.",
    "tickingarea_add_failure": "Už bol dosiahnutý maximálny počet živých oblastí (%1$d). Nemožno pridať viac živých oblastí.",
    "tickingarea_add_conflictingname": "Živá oblasť s názvom %1$s už existuje.",
    "tickingarea_add_chunkfailure": "Živá oblasť obsahuje viac ako %1$d blokov údajov. Je príliš veľká a nemožno ju vytvoriť.",
    "tickingarea_add_radiusfailure": "Polomer nesmie byť väčší ako %1$d. Živá oblasť je príliš veľká a nedá sa vytvoriť.",
    "tickingarea_remove_success": "Živé oblasti sa odstránili",
    "tickingarea_remove_failure": "V aktuálnej dimenzii neexistujú žiadne živé oblasti obsahujúce pozíciu bloku %1$d.",
    "tickingarea_remove_byname_failure": "V aktuálnej dimenzii neexistujú žiadne živé oblasti s názvom %1$s.",
    "tickingarea_remove_all_success": "Živé oblasti sa odstránili",
    "tickingarea_remove_all_failure": "V aktuálnej dimenzii neexistujú žiadne živé oblasti.",
    "tickingarea_list_chunks": "bloky údajov",
    "tickingarea_list_circle_radius": "Polomer",
    "tickingarea_list_success_currentDimension": "Zoznam všetkých živých oblastí v aktuálnej dimenzii",
    "tickingarea_list_success_allDimensions": "Zoznam všetkých živých oblastí vo všetkých dimenziách",
    "tickingarea_list_failure_allDimensions": "V žiadnej dimenzii neexistujú žiadne živé oblasti.",
    "tickingarea_list_to": "do",
    "tickingarea_list_type_circle": "Kruh",
    "time_added": "K času sa pridalo: %1$d",
    "time_description": "Zmení herný čas sveta alebo zadá dotaz.",
    "time_disabled": "V tejto úrovni je povolené nastavenie Vždy deň.",
    "time_query_day": "Deň je %d",
    "time_query_daytime": "Denný čas je %d",
    "time_query_gametime": "Herný čas je %d",
    "time_set": "Nastaviť čas na %1$d",
    "time_stop": "Čas %1$s",
    "title_description": "Ovláda názvy obrazoviek.",
    "title_success": "Príkaz názvu sa úspešne vykonal",
    "titleraw_description": "Ovláda názvy obrazoviek pomocou správ JSON.",
    "toggledownfall_description": "Prepne počasie.",
    "tp_description": "Teleportuje subjekty (hráčov, tvory a pod.).",
    "tp_notSameDimension": "Nepodarilo sa teleportovať, pretože hráči nie sú v rovnakej dimenzii",
    "tp_outOfWorld": "Subjekty nemožno teleportovať mimo sveta",
    "tp_permission": "Nemáte povolenie na používanie tohto príkazu s lomkou",
    "tp_safeTeleportFail": "%1$s sa nedá teleportovať na miesto %2$s, pretože z oblasti neboli odstránené bloky.",
    "tp_far": "%1$s sa nedá teleportovať do nevyprázdnenej oblasti %2$s",
    "tp_success": "Subjekt %1$s sa teleportoval na miesto %2$s",
    "tp_successVictim": "Teleportovali ste sa na miesto %1$s",
    "tp_success_coordinates": "Subjekt %1$s sa teleportoval na miesto %2$s, %3$s, %4$s",
    "transferserver_description": "Prenesie hráča na iný server.",
    "transferserver_successful": "Prenesený hráč",
    "transferserver_invalid_port": "Neplatný port (0 – 65535)",
    "trigger_description": "Nastaví spúšťač na aktivovanie.",
    "trigger_disabled": "Spúšťač %1$s nie je povolený",
    "trigger_invalidMode": "Neplatný režim spúšťača %1$s",
    "trigger_invalidObjective": "Neplatný názov spúšťača %1$s",
    "trigger_invalidPlayer": "Príkaz /trigger môžu používať iba hráči",
    "trigger_success": "Spúšťač %1$s sa zmenil s %2$s %3$s",
    "unban_failed": "Nepodarilo sa zrušiť zákaz hráča %1$s",
    "unban_success": "Zrušil sa zákaz hráča %1$s",
    "unbanip_invalid": "Zadali ste neplatnú adresu IP",
    "unbanip_success": "Zrušil sa zákaz adresy IP %1$s",
    "validategamelighting_description": "Overiť osvetlenie hry pre určenú oblasť",
    "validategamelighting_checkRegionTooBig": "Oblasť na kontrolu osvetlenia je príliš veľká. (%1$d > %2$d)",
    "validategamelighting_outOfWorld": "Nemožno skontrolovať osvetlenie mimo sveta",
    "weather_clear": "Zmena na jasné počasie",
    "weather_description": "Nastaví počasie.",
    "weather_disabled": "V tejto úrovni nie je povolené nastavenie Cyklus počasia.",
    "weather_query": "Stav počasia je: %s",
    "weather_query_clear": "jasné",
    "weather_query_rain": "dážď",
    "weather_query_thunder": "búrka",
    "weather_rain": "Zmena na daždivé počasie",
    "weather_thunder": "Zmena na dážď a búrku",
    "whitelist_add_failed": "Hráča %1$s sa nepodarilo pridať do zoznamu povolených hráčov",
    "whitelist_add_success": "Hráč %1$s sa pridal do zoznamu povolených hráčov",
    "whitelist_description": "Spravuje zoznam povolených hráčov na serveri.",
    "whitelist_disabled": "Zoznam povolených hráčov sa vypol",
    "whitelist_enabled": "Zoznam povolených hráčov sa zapol",
    "whitelist_list": "Niektorí hráči (%1$d z %2$d videných) sú v zozname povolených hráčov:",
    "whitelist_reloaded": "Zoznam povolených hráčov sa načítal zo súboru.",
    "whitelist_remove_failed": "Hráča %1$s sa nepodarilo odstrániť zo zoznamu povolených hráčov",
    "whitelist_remove_success": "Hráč %1$s sa odstránil zo zoznamu povolených hráčov",
    "world_age_description": "Zmení alebo zadá dotaz na vek sveta (čas od vytvorenia).",
    "world_age_added": "K veku sveta sa pridal čas %1$d",
    "world_age_query": "Vek sveta je %d",
    "world_age_set": "Nastaviť vek sveta na %1$d",
    "worldborder_center_success": "Stred okraja sveta sa nastavil na pozíciu %1$s, %2$s",
    "worldborder_damage_amount_success": "Miera poškodenia na okraji sveta sa nastavila na %1$s za jeden blok (z %2$s za jeden blok)",
    "worldborder_damage_buffer_success": "Oddeľovacia zóna poškodenia na okraji sveta sa nastavila na tento počet blokov: %1$s (predtým: %2$s)",
    "worldborder_get_success": "Momentálna šírka okraja sveta v blokoch je %1$s",
    "worldborder_set_success": "Šírka okraja sveta sa nastavila na tento počet blokov: %1$s (predtým: %2$s)",
    "worldborder_setSlowly_grow_success": "Okraj sveta sa rozšíri na tento počet blokov: %1$s (predtým: %2$s) v priebehu %3$s sekúnd",
    "worldborder_setSlowly_shrink_success": "Okraj sveta sa zúži na tento počet blokov: %1$s (predtým: %2$s) v priebehu %3$s sekúnd",
    "worldborder_warning_distance_success": "Varovanie na okraj sveta sa nastavilo na tento počet blokov od okraja: %1$s (predtým: %2$s)",
    "worldborder_warning_time_success": "Varovanie na okraj sveta sa nastavilo na tento počet sekúnd od okraja: %1$s (predtým: %2$s)",
    "worldbuilder_description": "Prepnúť stav Staviteľ sveta volajúceho.",
    "worldbuilder_success": "Stav staviteľa sveta sa aktualizoval na %1$s",
    "wsserver_description": "Pokúsi sa pripojiť na server WebSocket na zadanej adrese URL.",
    "wsserver_invalid_url": "Zadaná adresa URL servera je neplatná",
    "wsserver_request_existing": "Momentálne sa vybavuje iná požiadavka na pripojenie",
    "wsserver_request_failed": "Nepodarilo sa pripojiť na server: %1$s",
    "wsserver_success": "Vytvorilo sa pripojenie na server: %1$s",
    "xp_description": "Pridá alebo odoberie hráčove skúsenosti.",
    "xp_failure_widthdrawXp": "Hráčovi nemožno dať záporné skúsenostné body",
    "xp_success": "Skúsenosť (%1$s) sa poskytla hráčovi %2$s",
    "xp_success_levels": "Úrovne (%1$d) sa poskytli hráčovi %2$s",
    "xp_success_negative_levels": "Úrovne (%1$d) sa odobrali hráčovi %2$s"
},
item:{
    "air": [
        "Vzduch"
    ],
    "apple": [
        "Jablko"
    ],
    "golden_apple": [
        "Zlaté jablko"
    ],
    "appleenchanted": [
        "Očarované jablko"
    ],
    "armor_stand": [
        "Stojan na brnenie"
    ],
    "arrow": [
        "Šíp"
    ],
    "tipped_arrow": [
        "Šíp namočený v elixíre"
    ],
    "banner": [
        "Čierna zástava",
        "Čierna zástava",
        "Červená zástava",
        "Zelená zástava",
        "Hnedá zástava",
        "Modrá zástava",
        "Fialová zástava",
        "Azúrová zástava",
        "Svetlosivá zástava",
        "Sivá zástava",
        "Ružová zástava",
        "Žltozelená zástava",
        "Žltá zástava",
        "Svetlomodrá zástava",
        "Purpurová zástava",
        "Oranžová zástava",
        "Biela zástava"
    ],
    "bed": [
        "Posteľ",
        "Biela posteľ",
        "Oranžová posteľ",
        "Purpurová posteľ",
        "Svetlomodrá posteľ",
        "Žltá posteľ",
        "Žltozelená posteľ",
        "Ružová posteľ",
        "Sivá posteľ",
        "Svetlosivá posteľ",
        "Azúrová posteľ",
        "Fialová posteľ",
        "Modrá posteľ",
        "Hnedá posteľ",
        "Zelená posteľ",
        "Červená posteľ",
        "Čierna posteľ"
    ],
    "bell": [
        "Zvon"
    ],
    "steak": [
        "Steak"
    ],
    "beef": [
        "Surová hovädzina"
    ],
    "beetroot": [
        "Cvikla"
    ],
    "beetroot_soup": [
        "Cviklová polievka"
    ],
    "blaze_powder": [
        "Prášok zo žiarivca"
    ],
    "blaze_rod": [
        "Žiarivá tyč"
    ],
    "boat": [
        "Dubový čln",
        "Dubový čln",
        "Smrekový čln",
        "Brezový čln",
        "Čln z tropického dreva",
        "Agátový čln",
        "Čln z tmavého duba"
    ],
    "bone": [
        "Kosť"
    ],
    "book": [
        "Kniha"
    ],
    "chainmail_boots": [
        "Krúžkové čižmy"
    ],
    "leather_boots": [
        "Kožené čižmy"
    ],
    "diamond_boots": [
        "Diamantové čižmy"
    ],
    "golden_boots": [
        "Zlaté čižmy"
    ],
    "iron_boots": [
        "Železné čižmy"
    ],
    "bow": [
        "Luk"
    ],
    "bowl": [
        "Miska"
    ],
    "bread": [
        "Chlieb"
    ],
    "brewing_stand": [
        "Varný stojan"
    ],
    "brick": [
        "Tehla"
    ],
    "bucket": [
        "Vedro"
    ],
    "bucketLava": [
        "Vedro na lávu"
    ],
    "bucketWater": [
        "Vedro na vodu"
    ],
    "bucketFish": [
        "Vedro s treskami"
    ],
    "bucketSalmon": [
        "Vedro s lososmi"
    ],
    "bucketTropical": [
        "Vedro s tropickými rybami"
    ],
    "bucketPuffer": [
        "Vedro so štvorzubcami"
    ],
    "bucketCustomFish": [
        "Vedro s"
    ],
    "tropicalColorWhite": [
        "biela"
    ],
    "tropicalColorOrange": [
        "oranžová"
    ],
    "tropicalColorMagenta": [
        "purpurová"
    ],
    "tropicalColorSky": [
        "blankytná"
    ],
    "tropicalColorYellow": [
        "žltá"
    ],
    "tropicalColorLime": [
        "žltozelená"
    ],
    "tropicalColorRose": [
        "ružová"
    ],
    "tropicalColorGray": [
        "sivá"
    ],
    "tropicalColorSilver": [
        "strieborná"
    ],
    "tropicalColorTeal": [
        "sivozelená"
    ],
    "tropicalColorPlum": [
        "slivková"
    ],
    "tropicalColorBlue": [
        "modrá"
    ],
    "tropicalColorBrown": [
        "hnedá"
    ],
    "tropicalColorGreen": [
        "zelená"
    ],
    "tropicalColorRed": [
        "červená"
    ],
    "tropicalBodyKobSingle": [
        "Sciéna (%1$s)"
    ],
    "tropicalBodySunstreakSingle": [
        "Slnečný prúžok (%1$s)"
    ],
    "tropicalBodySnooperSingle": [
        "Pátrač (%1$s)"
    ],
    "tropicalBodyDasherSingle": [
        "Švihák (%1$s)"
    ],
    "tropicalBodyBrinelySingle": [
        "Slanček (%1$s)"
    ],
    "tropicalBodySpottySingle": [
        "Strakoš (%1$s)"
    ],
    "tropicalBodyFlopperSingle": [
        "Pleskáč (%1$s)"
    ],
    "tropicalBodyStripeySingle": [
        "Pásikavec (%1$s)"
    ],
    "tropicalBodyGlitterSingle": [
        "Ligotavec (%1$s)"
    ],
    "tropicalBodyBlockfishSingle": [
        "Bloková ryba (%1$s)"
    ],
    "tropicalBodyBettySingle": [
        "Betka (%1$s)"
    ],
    "tropicalBodyClayfishSingle": [
        "Ílová ryba (%1$s)"
    ],
    "tropicalBodyKobMulti": [
        "Sciéna (%1$s, %2$s)"
    ],
    "tropicalBodySunstreakMulti": [
        "Slnečný prúžok (%1$s, %2$s)"
    ],
    "tropicalBodySnooperMulti": [
        "Pátrač (%1$s, %2$s)"
    ],
    "tropicalBodyDasherMulti": [
        "Švihák (%1$s, %2$s)"
    ],
    "tropicalBodyBrinelyMulti": [
        "Slanček (%1$s, %2$s)"
    ],
    "tropicalBodySpottyMulti": [
        "Strakoš (%1$s, %2$s)"
    ],
    "tropicalBodyFlopperMulti": [
        "Pleskáč (%1$s, %2$s)"
    ],
    "tropicalBodyStripeyMulti": [
        "Pásikavec (%1$s, %2$s)"
    ],
    "tropicalBodyGlitterMulti": [
        "Ligotavec (%1$s, %2$s)"
    ],
    "tropicalBodyBlockfishMulti": [
        "Bloková ryba (%1$s, %2$s)"
    ],
    "tropicalBodyBettyMulti": [
        "Betka (%1$s, %2$s)"
    ],
    "tropicalBodyClayfishMulti": [
        "Ílová ryba (%1$s, %2$s)"
    ],
    "tropicalSchoolAnemone": [
        "Sasanka"
    ],
    "tropicalSchoolBlackTang": [
        "Bodlok čierny"
    ],
    "tropicalSchoolBlueDory": [
        "Modrá Dory"
    ],
    "tropicalSchoolButterflyFish": [
        "Klipka"
    ],
    "tropicalSchoolCichlid": [
        "Cichlida"
    ],
    "tropicalSchoolClownfish": [
        "Klaun očkatý"
    ],
    "tropicalSchoolCottonCandyBetta": [
        "Bojovnica pestrá"
    ],
    "tropicalSchoolDottyback": [
        "Sapínovec"
    ],
    "tropicalSchoolEmperorRedSnapper": [
        "Chňapáč cisársky"
    ],
    "tropicalSchoolGoatfish": [
        "Mrena"
    ],
    "tropicalSchoolMoorishIdol": [
        "Zanklus ostnatý"
    ],
    "tropicalSchoolOrnateButterfly": [
        "Klipka žltopruhá"
    ],
    "tropicalSchoolParrotfish": [
        "Scarus"
    ],
    "tropicalSchoolQueenAngelFish": [
        "Anjelská ryba"
    ],
    "tropicalSchoolRedCichlid": [
        "Cichlida červená"
    ],
    "tropicalSchoolRedLippedBlenny": [
        "Slizúň atlantický"
    ],
    "tropicalSchoolRedSnapper": [
        "Chňapáč červený"
    ],
    "tropicalSchoolThreadfin": [
        "Šmuhovec"
    ],
    "tropicalSchoolTomatoClown": [
        "Klaun uzdičkatý"
    ],
    "tropicalSchoolTriggerfish": [
        "Ostňovec"
    ],
    "tropicalSchoolYellowTang": [
        "Bodlok žltý"
    ],
    "tropicalSchoolYellowtailParrot": [
        "Scarus žltochvostý"
    ],
    "cake": [
        "Koláč"
    ],
    "camera": [
        "Kamera"
    ],
    "golden_carrot": [
        "Zlatá mrkva"
    ],
    "carrotOnAStick": [
        "Mrkva na udici"
    ],
    "warped_fungus_on_a_stick": [
        "Zoschnutá huba na palici"
    ],
    "carrot": [
        "Mrkva"
    ],
    "cauldron": [
        "Kotol"
    ],
    "coal": [
        "Uhlie",
        null,
        "Drevné uhlie"
    ],
    "chainmail_chestplate": [
        "Krúžkový hrudný pancier"
    ],
    "leather_chestplate": [
        "Kožená blúza"
    ],
    "diamond_chestplate": [
        "Diamantový hrudný pancier"
    ],
    "golden_chestplate": [
        "Zlatý hrudný pancier"
    ],
    "iron_chestplate": [
        "Železný hrudný pancier"
    ],
    "chorus_fruit": [
        "Chórové ovocie"
    ],
    "chorus_fruit_popped": [
        "Puknuté chórové ovocie"
    ],
    "cooked_beef": [
        "Varená hovädzina"
    ],
    "cooked_chicken": [
        "Varená sliepka"
    ],
    "cooked_porkchop": [
        "Varené bravčové rebierko"
    ],
    "chicken": [
        "Surová sliepka"
    ],
    "clay_ball": [
        "Íl"
    ],
    "clock": [
        "Hodiny"
    ],
    "comparator": [
        "Ruditový porovnávač"
    ],
    "compass": [
        "Kompas"
    ],
    "lodestonecompass": [
        "Magnetitový kompas"
    ],
    "cookie": [
        "Sušienka"
    ],
    "crossbow": [
        "Kuša"
    ],
    "diamond": [
        "Diamant"
    ],
    "repeater": [
        "Ruditový zosilňovač"
    ],
    "acacia_door": [
        "Dvere z agátového dreva"
    ],
    "birch_door": [
        "Dvere z brezového dreva"
    ],
    "dark_oak_door": [
        "Dvere z dreva tmavého duba"
    ],
    "iron_door": [
        "Železné dvere"
    ],
    "jungle_door": [
        "Dvere z tropického dreva"
    ],
    "wooden_door": [
        "Dvere z dubového dreva"
    ],
    "spruce_door": [
        "Dvere zo smrekového dreva"
    ],
    "crimson_door": [
        "Karmínové dvere"
    ],
    "warped_door": [
        "Zoschnuté dvere"
    ],
    "dragon_breath": [
        "Dračí dych"
    ],
    "dye": [
        "Vrecúško s atramentom",
        "Vrecúško s atramentom",
        "Červené farbivo",
        "Zelené farbivo",
        "Kakaové bôby",
        "Ultramarín",
        "Fialové farbivo",
        "Azúrové farbivo",
        "Svetlosivé farbivo",
        "Sivé farbivo",
        "Ružové farbivo",
        "Žltozelené farbivo",
        "Žlté farbivo",
        "Svetlomodré farbivo",
        "Purpurové farbivo",
        "Oranžové farbivo",
        "Kostná múčka",
        "Čierne farbivo",
        "Hnedé farbivo",
        "Modré farbivo",
        "Biele farbivo"
    ],
    "egg": [
        "Vajce"
    ],
    "elytra": [
        "Krovky"
    ],
    "emerald": [
        "Smaragd"
    ],
    "emptyMap": [
        "Prázdna mapa"
    ],
    "emptyLocatorMap": [
        "Prázdna mapa hľadača"
    ],
    "emptyPotion": [
        "Džbán s vodou"
    ],
    "enchanted_book": [
        "Čarovná kniha"
    ],
    "end_crystal": [
        "Kryštál z konca sveta"
    ],
    "end_rod": [
        "Tyč z konca sveta"
    ],
    "ender_eye": [
        "Oko z konca sveta"
    ],
    "ender_pearl": [
        "Perla z konca sveta"
    ],
    "experience_bottle": [
        "Čarovná fľaša"
    ],
    "feather": [
        "Perie"
    ],
    "fermented_spider_eye": [
        "Skvasené pavúčie oko"
    ],
    "fireball": [
        "Ohnivá nálož"
    ],
    "fireworks": [
        "Ohňostrojová raketa"
    ],
    "fireworksCharge": [
        "Ohňostrojová hviezda"
    ],
    "clownfish": [
        "Tropická ryba"
    ],
    "cooked_fish": [
        "Varená treska"
    ],
    "fish": [
        "Surová treska"
    ],
    "pufferfish": [
        "Štvorzubec"
    ],
    "cooked_salmon": [
        "Varený losos"
    ],
    "salmon": [
        "Surový losos"
    ],
    "fishing_rod": [
        "Udica"
    ],
    "flint": [
        "Kresací kamienok"
    ],
    "flint_and_steel": [
        "Kresadlo"
    ],
    "flower_pot": [
        "Kvetináč"
    ],
    "frame": [
        "Rám na predmety"
    ],
    "ghast_tear": [
        "Slza ghasta"
    ],
    "glass_bottle": [
        "Sklenená fľaša"
    ],
    "gold_nugget": [
        "Hrudka zlata"
    ],
    "iron_nugget": [
        "Hrudka železa"
    ],
    "diamond_axe": [
        "Diamantová sekera"
    ],
    "golden_axe": [
        "Zlatá sekera"
    ],
    "iron_axe": [
        "Železná sekera"
    ],
    "stone_axe": [
        "Kamenná sekera"
    ],
    "wooden_axe": [
        "Drevená sekera"
    ],
    "chainmail_helmet": [
        "Krúžková helma"
    ],
    "leather_helmet": [
        "Kožená čiapka"
    ],
    "diamond_helmet": [
        "Diamantová helma"
    ],
    "golden_helmet": [
        "Zlatá helma"
    ],
    "iron_helmet": [
        "Železná helma"
    ],
    "diamond_hoe": [
        "Diamantová motyka"
    ],
    "golden_hoe": [
        "Zlatá motyka"
    ],
    "iron_hoe": [
        "Železná motyka"
    ],
    "stone_hoe": [
        "Kamenná motyka"
    ],
    "wooden_hoe": [
        "Drevená motyka"
    ],
    "honey_bottle": [
        "Fľaša s medom"
    ],
    "honeycomb": [
        "Včelí plást"
    ],
    "horsearmordiamond": [
        "Diamantové konské brnenie"
    ],
    "horsearmorgold": [
        "Zlaté konské brnenie"
    ],
    "horsearmoriron": [
        "Železné konské brnenie"
    ],
    "horsearmorleather": [
        "Kožené konské brnenie"
    ],
    "gold_ingot": [
        "Zlatý ingot"
    ],
    "iron_ingot": [
        "Železný ingot"
    ],
    "netherite_ingot": [
        "Netheritový ingot"
    ],
    "netherite_scrap": [
        "Netheritový šrot"
    ],
    "netherite_sword": [
        "Netheritový meč"
    ],
    "netherite_pickaxe": [
        "Netheritový krompáč"
    ],
    "netherite_axe": [
        "Netheritová sekera"
    ],
    "netherite_shovel": [
        "Netheritová lopata"
    ],
    "netherite_hoe": [
        "Netheritová motyka"
    ],
    "netherite_boots": [
        "Netheritové čižmy"
    ],
    "netherite_leggings": [
        "Netheritové nohavice"
    ],
    "netherite_chestplate": [
        "Netheritový hrudný pancier"
    ],
    "netherite_helmet": [
        "Netheritová helma"
    ],
    "lead": [
        "Remienok"
    ],
    "leather": [
        "Koža"
    ],
    "leaves": [
        "Listy",
        "Listy z duba",
        "Listy zo smreka",
        "Listy z brezy",
        "Listy z tropických stromov",
        "Listy z agáta",
        "Listy z tmavého duba"
    ],
    "chainmail_leggings": [
        "Krúžkové nohavice"
    ],
    "leather_leggings": [
        "Kožené nohavice"
    ],
    "diamond_leggings": [
        "Diamantové nohavice"
    ],
    "golden_leggings": [
        "Zlaté nohavice"
    ],
    "iron_leggings": [
        "Železné nohavice"
    ],
    "nautilus_shell": [
        "Ulita lodenky"
    ],
    "heart_of_the_sea": [
        "Srdce mora"
    ],
    "magma_cream": [
        "Magmový krém"
    ],
    "map": [
        "Mapa"
    ],
    "melon": [
        "Melón"
    ],
    "milk": [
        "Mlieko"
    ],
    "minecart": [
        "Banský vozík"
    ],
    "chest_minecart": [
        "Banský vozík s truhlicou"
    ],
    "command_block_minecart": [
        "Banský vozík s príkazovým blokom"
    ],
    "minecartFurnace": [
        "Banský vozík s pecou"
    ],
    "hopper_minecart": [
        "Banský vozík s násypníkom"
    ],
    "tnt_minecart": [
        "Banský vozík s TNT"
    ],
    "trident": [
        "Trojzubec"
    ],
    "mushroom_stew": [
        "Hubový šalát"
    ],
    "muttoncooked": [
        "Varená baranina"
    ],
    "muttonraw": [
        "Surová baranina"
    ],
    "name_tag": [
        "Menovka"
    ],
    "netherbrick": [
        "Netheritová tehla"
    ],
    "quartz": [
        "Netheritový kryštál"
    ],
    "nether_wart": [
        "Netheritová byľ"
    ],
    "netherStar": [
        "Netheritová hviezda"
    ],
    "painting": [
        "Maľba"
    ],
    "paper": [
        "Papier"
    ],
    "diamond_pickaxe": [
        "Diamantový krompáč"
    ],
    "golden_pickaxe": [
        "Zlatý krompáč"
    ],
    "iron_pickaxe": [
        "Železný krompáč"
    ],
    "stone_pickaxe": [
        "Kamenný krompáč"
    ],
    "wooden_pickaxe": [
        "Drevený krompáč"
    ],
    "porkchop_cooked": [
        "Varené bravčové rebierko"
    ],
    "porkchop": [
        "Surové bravčové rebierko"
    ],
    "portfolio": [
        "Portfólio"
    ],
    "potato": [
        "Zemiak"
    ],
    "baked_potato": [
        "Pečený zemiak"
    ],
    "poisonous_potato": [
        "Jedovatý zemiak"
    ],
    "potion": [
        "Elixír"
    ],
    "prismarine_crystals": [
        "Prizmarínové kryštály"
    ],
    "prismarine_shard": [
        "Prizmarínový črep"
    ],
    "pumpkin_pie": [
        "Tekvicový koláč"
    ],
    "cooked_rabbit": [
        "Varený králik"
    ],
    "rabbit_foot": [
        "Králičia labka"
    ],
    "rabbit_hide": [
        "Králičia koža"
    ],
    "rabbit": [
        "Surový králik"
    ],
    "rabbit_stew": [
        "Králičia polievka"
    ],
    "record": [
        "Hudobný disk"
    ],
    "redstone": [
        "Rudit"
    ],
    "reeds": [
        "Cukrová trstina"
    ],
    "kelp": [
        "Morská riasa"
    ],
    "dried_kelp": [
        "Sušená morská riasa"
    ],
    "rotten_flesh": [
        "Skazené mäso"
    ],
    "ruby": [
        "Rubín"
    ],
    "saddle": [
        "Sedlo"
    ],
    "wheat_seeds": [
        "Semená"
    ],
    "beetroot_seeds": [
        "Semená cvikly"
    ],
    "melon_seeds": [
        "Melónové semená"
    ],
    "pumpkin_seeds": [
        "Tekvicové semená"
    ],
    "shears": [
        "Nožnice"
    ],
    "diamond_shovel": [
        "Diamantová lopata"
    ],
    "golden_shovel": [
        "Zlatá lopata"
    ],
    "iron_shovel": [
        "Železná lopata"
    ],
    "stone_shovel": [
        "Kamenná lopata"
    ],
    "wooden_shovel": [
        "Drevená lopata"
    ],
    "sign": [
        "Dubová značka"
    ],
    "spruce_sign": [
        "Smreková značka"
    ],
    "birch_sign": [
        "Brezová značka"
    ],
    "jungle_sign": [
        "Značka z tropického dreva"
    ],
    "acacia_sign": [
        "Agátová značka"
    ],
    "darkoak_sign": [
        "Značka z tmavého duba"
    ],
    "crimson_sign": [
        "Karmínová značka"
    ],
    "warped_sign": [
        "Zoschnutá značka"
    ],
    "skull": [
        "Lebka kostlivca",
        "Lebka kostlivca",
        "Lebka wither kostlivca",
        "Hlava zombie",
        "Hlava",
        "Hlava creepera",
        "Dračia hlava"
    ],
    "slime_ball": [
        "Slizká guľa"
    ],
    "snowball": [
        "Snehová guľa"
    ],
    "speckled_melon": [
        "Blýskavý melón"
    ],
    "spider_eye": [
        "Pavúčie oko"
    ],
    "stick": [
        "Palica"
    ],
    "string": [
        "Vlákno"
    ],
    "sugar": [
        "Cukor"
    ],
    "gunpowder": [
        "Pušný prach"
    ],
    "diamond_sword": [
        "Diamantový meč"
    ],
    "golden_sword": [
        "Zlatý meč"
    ],
    "iron_sword": [
        "Železný meč"
    ],
    "stone_sword": [
        "Kamenný meč"
    ],
    "wooden_sword": [
        "Drevený meč"
    ],
    "wheat": [
        "Pšenica"
    ],
    "writable_book": [
        "Kniha a brko"
    ],
    "written_book": [
        "Napísaná kniha"
    ],
    "glowstone_dust": [
        "Prach zo žiarivého kameňa"
    ],
    "shield": [
        "Štít"
    ],
    "shulker_shell": [
        "Shulkrova ulita"
    ],
    "totem": [
        "Totem neumierajúceho"
    ],
    "turtle_helmet": [
        "Pancier korytnačky"
    ],
    "turtle_shell_piece": [
        "Šupina"
    ],
    "phantom_membrane": [
        "Blana z prízraku"
    ],
    "sweet_berries": [
        "Sladké bobule"
    ],
    "suspicious_stew": [
        "Podozrivý guláš"
    ],
    "banner_pattern": [
        "Vzor zástavy"
    ],
    "acaciaFence": [
        "Plot z agátového dreva"
    ],
    "acacia_fence_gate": [
        "Brána v plote z agátového dreva"
    ],
    "activator_rail": [
        "Koľajnica s aktivátorom"
    ],
    "allow": [
        "Povoliť"
    ],
    "deny": [
        "Odmietnuť"
    ],
    "border_block": [
        "Hranica"
    ],
    "anvil": [
        "Nákova",
        "Nákova",
        null,
        null,
        null,
        "Mierne poškodená nákova",
        null,
        null,
        null,
        "Veľmi poškodená nákova"
    ],
    "barrier": [
        "Bariéra"
    ],
    "beacon": [
        "Lúč"
    ],
    "beehive": [
        "Úľ"
    ],
    "bee_nest": [
        "Včelie hniezdo"
    ],
    "target": [
        "Terč"
    ],
    "bedrock": [
        "Podložie"
    ],
    "conduit": [
        "Žiarič"
    ],
    "invisibleBedrock": [
        "Neviditeľné podložie"
    ],
    "birchFence": [
        "Plot z brezového dreva"
    ],
    "birch_fence_gate": [
        "Brána v plote z brezového dreva"
    ],
    "blast_furnace": [
        "Taviaca pec"
    ],
    "bone_block": [
        "Kostený blok"
    ],
    "coal_block": [
        "Blok uhlia"
    ],
    "diamond_block": [
        "Blok diamantu"
    ],
    "emerald_block": [
        "Blok smaragdu"
    ],
    "gold_block": [
        "Blok zlata"
    ],
    "iron_block": [
        "Blok železa"
    ],
    "lapis_block": [
        "Ultramarínový blok"
    ],
    "redstone_block": [
        "Blok ruditu"
    ],
    "bookshelf": [
        "Polica na knihy"
    ],
    "brick_block": [
        "Tehlový blok"
    ],
    "brown_mushroom": [
        "Hnedá huba"
    ],
    "wooden_button": [
        "Tlačidlo duba"
    ],
    "acacia_button": [
        "Tlačidlo agátu"
    ],
    "birch_button": [
        "Tlačidlo brezy"
    ],
    "dark_oak_button": [
        "Tlačidlo tmavého duba"
    ],
    "jungle_button": [
        "Tlačidlo tropického dreva"
    ],
    "spruce_button": [
        "Tlačidlo smreku"
    ],
    "stone_button": [
        "Tlačidlo kameňa"
    ],
    "cactus": [
        "Kaktus"
    ],
    "dried_kelp_block": [
        "Blok sušenej morskej riasy"
    ],
    "carved_pumpkin": [
        "Vyrezávaná tekvica"
    ],
    "chest": [
        "Truhlica"
    ],
    "ender_chest": [
        "Truhlica z konca sveta"
    ],
    "jigsaw": [
        "Skladací blok"
    ],
    "honey_block": [
        "Medový blok"
    ],
    "honeycomb_block": [
        "Blok včelieho plástu"
    ],
    "lodestone": [
        "Magnetit"
    ],
    "nether_sprouts": [
        "Klíčky z Netheru"
    ],
    "crimson_stem": [
        "Karmínová stonka"
    ],
    "warped_stem": [
        "Zoschnutá stonka"
    ],
    "stripped_crimson_stem": [
        "Olúpaná karmínová stonka"
    ],
    "stripped_warped_stem": [
        "Olúpaná zoschnutá stonka"
    ],
    "crimson_hyphae": [
        "Karmínová hýfa"
    ],
    "warped_hyphae": [
        "Zoschnutá hýfa"
    ],
    "stripped_crimson_hyphae": [
        "Olúpaná karmínová hýfa"
    ],
    "stripped_warped_hyphae": [
        "Olúpaná zoschnutá hýfa"
    ],
    "crimson_planks": [
        "Karmínové dosky"
    ],
    "warped_planks": [
        "Zoschnuté dosky"
    ],
    "crimson_trapdoor": [
        "Karmínové padacie dvere"
    ],
    "warped_trapdoor": [
        "Zoschnuté padacie dvere"
    ],
    "crimson_standing_sign": [
        "Karmínová značka"
    ],
    "warped_standing_sign": [
        "Zoschnutá značka"
    ],
    "crimson_wall_sign": [
        "Karmínová značka"
    ],
    "warped_wall_sign": [
        "Zoschnutá značka"
    ],
    "crimson_stairs": [
        "Karmínové schody"
    ],
    "warped_stairs": [
        "Zoschnuté schody"
    ],
    "crimson_fence": [
        "Karmínový plot"
    ],
    "warped_fence": [
        "Zoschnutý plot"
    ],
    "crimson_fence_gate": [
        "Brána v karmínovom plote"
    ],
    "warped_fence_gate": [
        "Brána v zoschnutom plote"
    ],
    "crimson_button": [
        "Karmínové tlačidlo"
    ],
    "warped_button": [
        "Zoschnuté tlačidlo"
    ],
    "crimson_pressure_plate": [
        "Karmínová prítlačná doska"
    ],
    "warped_pressure_plate": [
        "Zoschnutá prítlačná doska"
    ],
    "crimson_slab": [
        "Karmínová tabuľa"
    ],
    "warped_slab": [
        "Zoschnutá tabuľa"
    ],
    "crimson_double_slab": [
        "Karmínová tabuľa"
    ],
    "warped_double_slab": [
        "Zoschnutá tabuľa"
    ],
    "shroomlight": [
        "Hubové svetlo"
    ],
    "crimson_nylium": [
        "Karmínové nylium"
    ],
    "warped_nylium": [
        "Zoschnuté nylium"
    ],
    "basalt": [
        "Čadič"
    ],
    "polished_basalt": [
        "Leštený čadič"
    ],
    "blackstone": [
        "Černit"
    ],
    "polished_blackstone_bricks": [
        "Leštené černitové tehly"
    ],
    "cracked_polished_blackstone_bricks": [
        "Popraskané leštené černitové tehly"
    ],
    "polished_blackstone_brick_stairs": [
        "Schody z leštených černitových tehál"
    ],
    "blackstone_stairs": [
        "Černitové schody"
    ],
    "blackstone_wall": [
        "Černitová stena"
    ],
    "polished_blackstone_brick_wall": [
        "Stena z leštených černitových tehál"
    ],
    "chiseled_polished_blackstone": [
        "Opracovaný leštený černit"
    ],
    "gilded_blackstone": [
        "Pozlátený černit"
    ],
    "blackstone_slab": [
        "Černitová tabuľa"
    ],
    "polished_blackstone_brick_slab": [
        "Tabuľa z leštených černitových tehál"
    ],
    "chain": [
        "Reťaz"
    ],
    "soul_soil": [
        "Pôda duší"
    ],
    "soul_fire": [
        "Oheň duší"
    ],
    "polished_blackstone": [
        "Leštený černit"
    ],
    "polished_blackstone_stairs": [
        "Leštené černitové schody"
    ],
    "polished_blackstone_slab": [
        "Leštená černitová tabuľa"
    ],
    "polished_blackstone_pressure_plate": [
        "Leštená černitová prítlačná doska"
    ],
    "polished_blackstone_button": [
        "Leštené černitové tlačidlo"
    ],
    "polished_blackstone_wall": [
        "Leštená černitová stena"
    ],
    "soul_campfire": [
        "Táborák duší"
    ],
    "chiseled_nether_bricks": [
        "Opracované netheritové tehly"
    ],
    "cracked_nether_bricks": [
        "Popraskané netheritové tehly"
    ],
    "quartz_bricks": [
        "Kryštálové tehly"
    ],
    "trapped_chest": [
        "Truhlica s pascou"
    ],
    "shulkerBoxWhite": [
        "Biela škatuľa shulkera"
    ],
    "shulkerBoxOrange": [
        "Oranžová škatuľa shulkera"
    ],
    "shulkerBoxMagenta": [
        "Purpurová škatuľa shulkera"
    ],
    "shulkerBoxLightBlue": [
        "Svetlomodrá škatuľa shulkera"
    ],
    "shulkerBoxYellow": [
        "Žltá škatuľa shulkera"
    ],
    "shulkerBoxLime": [
        "Žltozelená škatuľa shulkera"
    ],
    "shulkerBoxPink": [
        "Ružová škatuľa shulkera"
    ],
    "shulkerBoxGray": [
        "Sivá škatuľa shulkera"
    ],
    "shulkerBoxSilver": [
        "Svetlosivá škatuľa shulkera"
    ],
    "shulkerBoxCyan": [
        "Azúrová škatuľa shulkera"
    ],
    "shulkerBoxPurple": [
        "Fialová škatuľa shulkera"
    ],
    "shulkerBoxBlue": [
        "Modrá škatuľa shulkera"
    ],
    "shulkerBoxBrown": [
        "Hnedá škatuľa shulkera"
    ],
    "shulkerBoxGreen": [
        "Zelená škatuľa shulkera"
    ],
    "shulkerBoxRed": [
        "Červená škatuľa shulkera"
    ],
    "shulkerBoxBlack": [
        "Čierna škatuľa shulkera"
    ],
    "shulkerBox": [
        "Škatuľa shulkera"
    ],
    "chorus_flower": [
        "Chórový kvet"
    ],
    "chorus_plant": [
        "Chórová rastlina"
    ],
    "stained_glass": [
        "Biele sklo",
        "Biele sklo",
        "Oranžové sklo",
        "Purpurové sklo",
        "Svetlomodré sklo",
        "Žlté sklo",
        "Žltozelené sklo",
        "Ružové sklo",
        "Sivé sklo",
        "Svetlosivé sklo",
        "Azúrové sklo",
        "Fialové sklo",
        "Modré sklo",
        "Hnedé sklo",
        "Zelené sklo",
        "Červené sklo",
        "Čierne sklo"
    ],
    "stained_glass_pane": [
        "Tabuľa bieleho skla",
        "Tabuľa bieleho skla",
        "Tabuľa oranžového skla",
        "Tabuľa purpurového skla",
        "Tabuľa svetlomodrého skla",
        "Tabuľa žltého skla",
        "Tabuľa žltozeleného skla",
        "Tabuľa ružového skla",
        "Tabuľa sivého skla",
        "Tabuľa svetlosivého skla",
        "Tabuľa azúrového skla",
        "Tabuľa fialového skla",
        "Tabuľa modrého skla",
        "Tabuľa hnedého skla",
        "Tabuľa zeleného skla",
        "Tabuľa červeného skla",
        "Tabuľa čierneho skla"
    ],
    "clay": [
        "Ílový blok"
    ],
    "hardened_clay": [
        "Terakota"
    ],
    "stained_hardened_clay": [
        "Terakota",
        "Biela terakota",
        "Oranžová terakota",
        "Purpurová terakota",
        "Svetlomodrá terakota",
        "Žltá terakota",
        "Žltozelená terakota",
        "Ružová terakota",
        "Sivá terakota",
        "Svetlosivá terakota",
        "Azúrová terakota",
        "Fialová terakota",
        "Modrá terakota",
        "Hnedá terakota",
        "Zelená terakota",
        "Červená terakota",
        "Čierna terakota"
    ],
    "structure_block": [
        "Blok stavby"
    ],
    "structure_void": [
        "Medzera v stavbe"
    ],
    "wool": [
        "Vlna",
        "Biela vlna",
        "Oranžová vlna",
        "Purpurová vlna",
        "Svetlomodrá vlna",
        "Žltá vlna",
        "Žltozelená vlna",
        "Ružová vlna",
        "Sivá vlna",
        "Svetlosivá vlna",
        "Azúrová vlna",
        "Fialová vlna",
        "Modrá vlna",
        "Hnedá vlna",
        "Zelená vlna",
        "Červená vlna",
        "Čierna vlna"
    ],
    "cobblestone_wall": [
        "Stena zo stavebného kameňa",
        "Stena zo stavebného kameňa",
        "Stena zo stavebného kameňa pokrytá machom",
        "Stena zo žuly",
        "Stena z dioritu",
        "Stena z andezitu",
        "Stena z pieskovca",
        "Stena z tehál",
        "Stena z kamenných tehál",
        "Stena z kamenných tehál pokrytých machom",
        "Stena z kamenných tehál z konca sveta",
        "Stena z netheritových tehál",
        "Stena z prizmarínu",
        "Stena z červeného pieskovca",
        "Stena z červených netheritových tehál"
    ],
    "cocoa": [
        "Kakao"
    ],
    "command_block": [
        "Príkazový blok"
    ],
    "composter": [
        "Kompostér"
    ],
    "light_block": [
        "Ľahký blok"
    ],
    "repeating_command_block": [
        "Opakovací príkazový blok"
    ],
    "chain_command_block": [
        "Reťazový príkazový blok"
    ],
    "darkOakFence": [
        "Plot z dreva tmavého duba"
    ],
    "dark_oak_fence_gate": [
        "Brána v plote z dreva tmavého duba"
    ],
    "daylight_detector": [
        "Snímač denného svetla"
    ],
    "deadbush": [
        "Vyschnutý krík"
    ],
    "detector_rail": [
        "Koľajnica s detektorom"
    ],
    "dirt": [
        "Hlina",
        "Hlina",
        "Štrková hlina"
    ],
    "podzol": [
        "Podzol"
    ],
    "purpur_block": [
        "Purpurový blok",
        "Purpurový blok",
        "Opracovaný purpur",
        "Purpurový stĺp"
    ],
    "dispenser": [
        "Výdajný blok"
    ],
    "doorWood": [
        "Drevené dvere"
    ],
    "double_plant": [
        "Rastlina",
        "Slnečnica",
        "Orgován",
        "Dvojitá tráva",
        "Veľká papraď",
        "Ružový krík",
        "Pivónia"
    ],
    "dragon_egg": [
        "Dračie vajce"
    ],
    "dropper": [
        "Vypúšťač"
    ],
    "enchanting_table": [
        "Čarodejný stôl"
    ],
    "enderChest": [
        "Truhlica z konca sveta"
    ],
    "end_portal_frame": [
        "Portál na koniec sveta"
    ],
    "farmland": [
        "Poľnohospodárska pôda"
    ],
    "fletching_table": [
        "Stôl na výrobu šípov"
    ],
    "fence": [
        "Plot z dubového dreva"
    ],
    "fence_gate": [
        "Brána v plote z dubového dreva"
    ],
    "iron_bars": [
        "Železné mreže"
    ],
    "fire": [
        "Oheň"
    ],
    "yellow_flower": [
        "Kvet",
        "Púpava"
    ],
    "red_flower": [
        "Kvet",
        "Vlčí mak",
        "Modrá orchidea",
        "Medvedí cesnak",
        "Azúrová houstónia",
        "Červený tulipán",
        "Oranžový tulipán",
        "Biely tulipán",
        "Ružový tulipán",
        "Margaréta biela",
        "Nevädza",
        "Konvalinka"
    ],
    "wither_rose": [
        "Ruža chradnutia"
    ],
    "furnace": [
        "Pec"
    ],
    "glass": [
        "Sklo"
    ],
    "golden_rail": [
        "Napájaná koľajnica"
    ],
    "grass": [
        "Trávnatý blok"
    ],
    "grass_path": [
        "Trávnatá cestička"
    ],
    "gravel": [
        "Štrk"
    ],
    "hay_block": [
        "Balík sena"
    ],
    "netherrack": [
        "Netheritový kameň"
    ],
    "soul_sand": [
        "Piesok duší"
    ],
    "hopper": [
        "Násypník"
    ],
    "ice": [
        "Ľad"
    ],
    "packed_ice": [
        "Zhustený ľad"
    ],
    "blue_ice": [
        "Modrý ľad"
    ],
    "iron_trapdoor": [
        "Železné padacie dvere"
    ],
    "jukebox": [
        "Hudobný automat"
    ],
    "jungleFence": [
        "Plot z tropického dreva"
    ],
    "jungle_fence_gate": [
        "Brána v plote z tropického dreva"
    ],
    "ladder": [
        "Rebrík"
    ],
    "flowing_lava": [
        "Láva"
    ],
    "leaves2": [
        "Listy z agáta",
        "Listy z agáta",
        "Listy z tmavého duba"
    ],
    "lever": [
        "Páčka"
    ],
    "glowstone": [
        "Žiarivý kameň"
    ],
    "lit_pumpkin": [
        "Tekvicový lampáš"
    ],
    "lockedchest": [
        "Zamknutá truhlica"
    ],
    "log2": [
        "Agátové poleno",
        "Agátové poleno",
        "Poleno z tmavého duba"
    ],
    "log": [
        "Poleno",
        "Dubové poleno",
        "Smrekové poleno",
        "Brezové poleno",
        "Tropické poleno"
    ],
    "magma": [
        "Magmový blok"
    ],
    "melon_block": [
        "Melón"
    ],
    "mob_spawner": [
        "Miesto zrodu príšery"
    ],
    "monster_egg": [
        "Kameň ukrývajúci rybenku",
        "Kameň ukrývajúci rybenku",
        "Stavebný kameň ukrývajúci rybenku",
        "Kamenná tehla ukrývajúca rybenku",
        "Kamenná tehla pokrytá machom ukrývajúca rybenku",
        "Prasknutá kamenná tehla ukrývajúca rybenku",
        "Opracovaná kamenná tehla ukrývajúca rybenku"
    ],
    "mushroom": [
        "Huba"
    ],
    "noteblock": [
        "Blok noty"
    ],
    "mycelium": [
        "Podhubie"
    ],
    "nether_brick": [
        "Blok z netheritových tehál"
    ],
    "red_nether_brick": [
        "Červená netheritová tehla"
    ],
    "nether_brick_fence": [
        "Plot z netheritových tehál"
    ],
    "quartz_ore": [
        "Ruda netheritového kryštálu"
    ],
    "netherreactor": [
        "Jadro netheritového reaktora"
    ],
    "nether_wart_block": [
        "Blok z netheritových bylí"
    ],
    "warped_wart_block": [
        "Blok zoschnutých bylí"
    ],
    "unlit_redstone_torch": [
        "Ruditová fakľa"
    ],
    "redstone_torch": [
        "Ruditová fakľa"
    ],
    "soul_torch": [
        "Fakľa duší"
    ],
    "obsidian": [
        "Obsidián"
    ],
    "coal_ore": [
        "Uhoľná ruda"
    ],
    "diamond_ore": [
        "Diamantová ruda"
    ],
    "emerald_ore": [
        "Smaragdová ruda"
    ],
    "gold_ore": [
        "Zlatá ruda"
    ],
    "iron_ore": [
        "Železná ruda"
    ],
    "lapis_ore": [
        "Ultramarínová ruda"
    ],
    "redstone_ore": [
        "Ruditová ruda"
    ],
    "oreRuby": [
        "Rubínová ruda"
    ],
    "observer": [
        "Pozorovateľ"
    ],
    "piston": [
        "Piest"
    ],
    "sticky_piston": [
        "Lepkavý piest"
    ],
    "portal": [
        "Portál"
    ],
    "potatoes": [
        "Zemiaky"
    ],
    "stone_pressure_plate": [
        "Kamenná prítlačná doska"
    ],
    "wooden_pressure_plate": [
        "Dubová prítlačná doska"
    ],
    "acacia_pressure_plate": [
        "Agátová prítlačná doska"
    ],
    "birch_pressure_plate": [
        "Brezová prítlačná doska"
    ],
    "dark_oak_pressure_plate": [
        "Prítlačná doska z tmavého duba"
    ],
    "jungle_pressure_plate": [
        "Prítlačná doska z tropického dreva"
    ],
    "spruce_pressure_plate": [
        "Smreková prítlačná doska"
    ],
    "prismarine": [
        "Prizmarín",
        "Prizmarín",
        "Prizmarínové tehly",
        "Tmavý prizmarín"
    ],
    "pumpkin": [
        "Tekvica"
    ],
    "pumpkin_stem": [
        "Stonka tekvice"
    ],
    "quartz_block": [
        "Blok kryštálu",
        "Blok kryštálu",
        "Opracovaný blok kryštálu",
        "Stĺpový blok kryštálu",
        "Hladký blok kryštálu"
    ],
    "rail": [
        "Koľajnica"
    ],
    "red_mushroom": [
        "Červená huba"
    ],
    "crimson_fungus": [
        "Karmínová huba"
    ],
    "warped_fungus": [
        "Zoschnutá huba"
    ],
    "red_mushroom_block": [
        "Blok červenej huby"
    ],
    "red_sandstone": [
        "Červený pieskovec",
        "Červený pieskovec",
        "Opracovaný červený pieskovec",
        "Rezaný červený pieskovec",
        "Hladký červený pieskovec"
    ],
    "redstone_wire": [
        "Ruditový prach"
    ],
    "redstone_lamp": [
        "Ruditová lampa"
    ],
    "sand": [
        "Piesok",
        "Piesok",
        "Červený piesok"
    ],
    "sandstone": [
        "Pieskovec",
        "Pieskovec",
        "Opracovaný pieskovec",
        "Rezaný pieskovec",
        "Hladký pieskovec"
    ],
    "sapling": [
        "Sadenica duba",
        "Sadenica duba",
        "Sadenica smreka",
        "Sadenica brezy",
        "Sadenica tropického stromu",
        "Sadenica agátu",
        "Sadenica tmavého duba"
    ],
    "seaLantern": [
        "Morský lampáš"
    ],
    "standing_sign": [
        "Značka"
    ],
    "spruce_standing_sign": [
        "Smreková značka"
    ],
    "birch_standing_sign": [
        "Brezová značka"
    ],
    "jungle_standing_sign": [
        "Značka z tropického dreva"
    ],
    "acacia_standing_sign": [
        "Agátová značka"
    ],
    "darkoak_standing_sign": [
        "Značka z tmavého duba"
    ],
    "slime": [
        "Blok slizu"
    ],
    "snow": [
        "Sneh"
    ],
    "sponge": [
        "Špongia",
        "Špongia",
        "Vlhká špongia"
    ],
    "spruceFence": [
        "Plot zo smrekového dreva"
    ],
    "spruce_fence_gate": [
        "Brána v plote zo smrekového dreva"
    ],
    "brick_stairs": [
        "Tehlové schody"
    ],
    "nether_brick_stairs": [
        "Schody z netheritových tehál"
    ],
    "quartz_stairs": [
        "Kryštálové schody"
    ],
    "smooth_quartz_stairs": [
        "Hladké kryštálové schody"
    ],
    "red_sandstone_stairs": [
        "Schody z červeného pieskovca"
    ],
    "sandstone_stairs": [
        "Pieskovcové schody"
    ],
    "stone_stairs": [
        "Schody zo stavebného kameňa"
    ],
    "normal_stone_stairs": [
        "Kamenné schody"
    ],
    "stone_brick_stairs": [
        "Schody z kamenných tehál"
    ],
    "oak_stairs": [
        "Schody z dubového dreva"
    ],
    "acacia_stairs": [
        "Schody z agátového dreva"
    ],
    "birch_stairs": [
        "Schody z brezového dreva"
    ],
    "dark_oak_stairs": [
        "Schody z dreva tmavého duba"
    ],
    "jungle_stairs": [
        "Schody z tropického dreva"
    ],
    "spruce_stairs": [
        "Schody zo smrekového dreva"
    ],
    "purpur_stairs": [
        "Purpurové schody"
    ],
    "prismarine_stairs": [
        "Prizmarínové schody"
    ],
    "dark_prismarine_stairs": [
        "Schody z tmavého prizmarínu"
    ],
    "prismarine_bricks_stairs": [
        "Schody z prizmarínových tehál"
    ],
    "granite_stairs": [
        "Žulové schody"
    ],
    "diorite_stairs": [
        "Dioritové schody"
    ],
    "andesite_stairs": [
        "Andezitové schody"
    ],
    "polished_granite_stairs": [
        "Leštené žulové schody"
    ],
    "polished_diorite_stairs": [
        "Leštené dioritové schody"
    ],
    "polished_andesite_stairs": [
        "Leštené andezitové schody"
    ],
    "mossy_stone_brick_stairs": [
        "Schody z kamenných tehál pokrytých machom"
    ],
    "smooth_red_sandstone_stairs": [
        "Schody z hladkého červeného pieskovca"
    ],
    "smooth_sandstone_stairs": [
        "Schody z hladkého pieskovca"
    ],
    "end_brick_stairs": [
        "Schody z kamenných tehál z konca sveta"
    ],
    "mossy_cobblestone_stairs": [
        "Schody zo stavebného kameňa pokrytého machom"
    ],
    "red_nether_brick_stairs": [
        "Schody z červených netheritových tehál"
    ],
    "smooth_stone": [
        "Hladký kameň"
    ],
    "standing_banner": [
        "Zástava",
        "Čierna zástava",
        "Červená zástava",
        "Zelená zástava",
        "Hnedá zástava",
        "Modrá zástava",
        "Fialová zástava",
        "Azúrová zástava",
        "Svetlosivá zástava",
        "Sivá zástava",
        "Ružová zástava",
        "Žltozelená zástava",
        "Žltá zástava",
        "Svetlomodrá zástava",
        "Purpurová zástava",
        "Oranžová zástava",
        "Zástava"
    ],
    "stone": [
        "Kameň",
        "Kameň",
        "Žula",
        "Leštená žula",
        "Diorit",
        "Leštený diorit",
        "Andezit",
        "Leštený andezit"
    ],
    "cobblestone": [
        "Stavebný kameň"
    ],
    "stonebrick": [
        "Kamenné tehly",
        "Kamenné tehly",
        "Kamenné tehly pokryté machom",
        "Opracované kamenné tehly"
    ],
    "stonecutter": [
        "Rezačka kameňa"
    ],
    "stonecutter_block": [
        "Rezačka kameňa"
    ],
    "mossy_cobblestone": [
        "Stavebný kameň pokrytý machom"
    ],
    "double_stone_slab": [
        "Kamenná tabuľa",
        "Kamenná tabuľa",
        "Pieskovcová tabuľa",
        "Drevený schodík",
        "Tabuľa zo stavebného kameňa",
        "Tabuľa z tehál",
        "Tabuľa z kamenných tehál",
        "Kryštálová tabuľa",
        "Tabuľa z netheritových tehál"
    ],
    "stone_slab": [
        "Kamenná tabuľa",
        "Tabuľa z hladkého kameňa",
        "Pieskovcová tabuľa",
        "Drevený schodík",
        "Tabuľa zo stavebného kameňa",
        "Tabuľa z tehál",
        "Tabuľa z kamenných tehál",
        "Kryštálová tabuľa",
        "Tabuľa z netheritových tehál"
    ],
    "double_stone_slab2": [
        "Tabuľa z červeného pieskovca",
        "Tabuľa z červeného pieskovca"
    ],
    "stone_slab2": [
        "Tabuľa z červeného pieskovca",
        "Tabuľa z červeného pieskovca",
        "Purpurová tabuľa",
        "Prizmarínová tabuľa",
        "Tabuľa z prizmarínových tehál",
        "Tabuľa z tmavého prizmarínu",
        "Tabuľa zo stavebného kameňa pokrytého machom",
        "Tabuľa z hladkého pieskovca",
        "Tabuľa z červených netheritových tehál"
    ],
    "stone_slab3": [
        "Tabuľa z kamenných tehál z konca sveta",
        "Tabuľa z kamenných tehál z konca sveta",
        "Tabuľa z hladkého červeného pieskovca",
        "Leštená andezitová tabuľa",
        "Andezitová tabuľa",
        "Dioritová tabuľa",
        "Leštená dioritová tabuľa",
        "Žulová tabuľa",
        "Leštená žulová tabuľa"
    ],
    "stone_slab4": [
        "Tabuľa z kamenných tehál pokrytých machom",
        "Tabuľa z kamenných tehál pokrytých machom",
        "Tabuľa z hladkého kryštálu",
        "Kamenná tabuľa",
        "Tabuľa z rezaného pieskovca",
        "Tabuľa z rezaného červeného pieskovca"
    ],
    "coral_block": [
        "Blok rúrkovitého koralu",
        "Blok rúrkovitého koralu",
        "Blok mozgovitého koralu",
        "Blok bublinkového koralu",
        "Blok ohnivého koralu",
        "Blok rohovitého koralu",
        "Blok mŕtveho rúrkovitého koralu",
        "Blok mŕtveho mozgovitého koralu",
        "Blok mŕtveho bublinkového koralu",
        "Blok mŕtveho ohnivého koralu",
        "Blok mŕtveho rohovitého koralu"
    ],
    "tallgrass": [
        "Tráva",
        "Tráva",
        "Papraď"
    ],
    "seagrass": [
        "Morská tráva",
        "Morská tráva"
    ],
    "sea_pickle": [
        "Holotúria"
    ],
    "turtle_egg": [
        "Vajce morskej korytnačky"
    ],
    "coral": [
        "Rúrkovitý koral",
        "Rúrkovitý koral",
        "Mozgovitý koral",
        "Bublinkový koral",
        "Ohnivý koral",
        "Rohovitý koral",
        "Mŕtvy vejárovitý koral",
        "Mŕtvy mozgovitý koral",
        "Mŕtvy bublinkový koral",
        "Mŕtvy ohnivý koral",
        "Mŕtvy rohovitý koral"
    ],
    "coral_fan": [
        "Vejár rúrkovitého koralu",
        "Vejár rúrkovitého koralu",
        "Vejár mozgovitého koralu",
        "Vejár bublinkového koralu",
        "Vejár ohnivého koralu",
        "Vejár rohovitého koralu"
    ],
    "coral_fan_dead": [
        "Vejár mŕtveho rúrkovitého koralu",
        "Vejár mŕtveho rúrkovitého koralu",
        "Vejár mŕtveho mozgovitého koralu",
        "Vejár mŕtveho bublinkového koralu",
        "Vejár mŕtveho ohnivého koralu",
        "Vejár mŕtveho rohovitého koralu"
    ],
    "glass_pane": [
        "Sklenená tabuľa"
    ],
    "tnt": [
        "TNT"
    ],
    "snow_layer": [
        "Horný sneh"
    ],
    "torch": [
        "Fakľa"
    ],
    "trapdoor": [
        "Dubové padacie dvere"
    ],
    "acacia_trapdoor": [
        "Agátové padacie dvere"
    ],
    "birch_trapdoor": [
        "Brezové padacie dvere"
    ],
    "dark_oak_trapdoor": [
        "Padacie dvere z tmavého duba"
    ],
    "jungle_trapdoor": [
        "Padacie dvere z tropického dreva"
    ],
    "spruce_trapdoor": [
        "Smrekové padacie dvere"
    ],
    "tripWire": [
        "Nástražný drôt"
    ],
    "tripwire_hook": [
        "Hák nástražného drôtu"
    ],
    "vine": [
        "Vinič"
    ],
    "weeping_vines": [
        "Previsnutý vinič"
    ],
    "twisting_vines": [
        "Pokrútený vinič"
    ],
    "flowing_water": [
        "Voda"
    ],
    "water": [
        "Voda"
    ],
    "waterlily": [
        "Lekno"
    ],
    "web": [
        "Pavučina"
    ],
    "heavy_weighted_pressure_plate": [
        "Zaťažená prítlačná doska (ťažká)"
    ],
    "light_weighted_pressure_plate": [
        "Zaťažená prítlačná doska (ľahká)"
    ],
    "end_stone": [
        "Kameň z konca sveta"
    ],
    "end_bricks": [
        "Kamenné tehly z konca sveta"
    ],
    "planks": [
        "Dosky",
        "Dosky z dubového dreva",
        "Dosky zo smrekového dreva",
        "Dosky z brezového dreva",
        "Dosky z tropického dreva",
        "Dosky z agátového dreva",
        "Dosky z dreva tmavého duba"
    ],
    "wooden_slab": [
        "Tabuľa z dreva",
        "Tabuľa z dubového dreva",
        "Tabuľa zo smrekového dreva",
        "Tabuľa z brezového dreva",
        "Tabuľa z tropického dreva",
        "Tabuľa z agátového dreva",
        "Tabuľa z dreva tmavého duba"
    ],
    "carpet": [
        "Koberec",
        "Čierny koberec",
        "Červený koberec",
        "Zelený koberec",
        "Hnedý koberec",
        "Modrý koberec",
        "Fialový koberec",
        "Azúrový koberec",
        "Svetlosivý koberec",
        "Sivý koberec",
        "Ružový koberec",
        "Žltozelený koberec",
        "Žltý koberec",
        "Svetlomodrý koberec",
        "Purpurový koberec",
        "Oranžový koberec",
        "Biely koberec"
    ],
    "crafting_table": [
        "Pracovný stôl"
    ],
    "white_glazed_terracotta": [
        "Biela leštená terakota",
        "Biela leštená terakota"
    ],
    "orange_glazed_terracotta": [
        "Oranžová leštená terakota",
        "Oranžová leštená terakota"
    ],
    "magenta_glazed_terracotta": [
        "Purpurová leštená terakota",
        "Purpurová leštená terakota"
    ],
    "light_blue_glazed_terracotta": [
        "Svetlomodrá leštená terakota",
        "Svetlomodrá leštená terakota"
    ],
    "yellow_glazed_terracotta": [
        "Žltá leštená terakota",
        "Žltá leštená terakota"
    ],
    "lime_glazed_terracotta": [
        "Žltozelená leštená terakota",
        "Žltozelená leštená terakota"
    ],
    "pink_glazed_terracotta": [
        "Ružová leštená terakota",
        "Ružová leštená terakota"
    ],
    "gray_glazed_terracotta": [
        "Sivá leštená terakota",
        "Sivá leštená terakota"
    ],
    "silver_glazed_terracotta": [
        "Svetlosivá leštená terakota",
        "Svetlosivá leštená terakota"
    ],
    "cyan_glazed_terracotta": [
        "Azúrová leštená terakota",
        "Azúrová leštená terakota"
    ],
    "purple_glazed_terracotta": [
        "Fialová leštená terakota",
        "Fialová leštená terakota"
    ],
    "blue_glazed_terracotta": [
        "Modrá leštená terakota",
        "Modrá leštená terakota"
    ],
    "brown_glazed_terracotta": [
        "Hnedá leštená terakota",
        "Hnedá leštená terakota"
    ],
    "green_glazed_terracotta": [
        "Zelená leštená terakota",
        "Zelená leštená terakota"
    ],
    "red_glazed_terracotta": [
        "Červená leštená terakota",
        "Červená leštená terakota"
    ],
    "black_glazed_terracotta": [
        "Čierna leštená terakota",
        "Čierna leštená terakota"
    ],
    "concrete": [
        "Biely betón",
        "Biely betón",
        "Oranžový betón",
        "Purpurový betón",
        "Svetlomodrý betón",
        "Žltý betón",
        "Žltozelený betón",
        "Ružový betón",
        "Sivý betón",
        "Svetlosivý betón",
        "Azúrový betón",
        "Fialový betón",
        "Modrý betón",
        "Hnedý betón",
        "Zelený betón",
        "Červený betón",
        "Čierny betón"
    ],
    "glazedTerracottaWhite": [
        "Biela leštená terakota"
    ],
    "glazedTerracottaOrange": [
        "Oranžová leštená terakota"
    ],
    "glazedTerracottaMagenta": [
        "Purpurová leštená terakota"
    ],
    "glazedTerracottaLightBlue": [
        "Svetlomodrá leštená terakota"
    ],
    "glazedTerracottaYellow": [
        "Žltá leštená terakota"
    ],
    "glazedTerracottaLime": [
        "Žltozelená leštená terakota"
    ],
    "glazedTerracottaPink": [
        "Ružová leštená terakota"
    ],
    "glazedTerracottaGray": [
        "Sivá leštená terakota"
    ],
    "glazedTerracottaSilver": [
        "Svetlosivá leštená terakota"
    ],
    "glazedTerracottaCyan": [
        "Azúrová leštená terakota"
    ],
    "glazedTerracottaPurple": [
        "Fialová leštená terakota"
    ],
    "glazedTerracottaBlue": [
        "Modrá leštená terakota"
    ],
    "glazedTerracottaBrown": [
        "Hnedá leštená terakota"
    ],
    "glazedTerracottaGreen": [
        "Zelená leštená terakota"
    ],
    "glazedTerracottaRed": [
        "Červená leštená terakota"
    ],
    "glazedTerracottaBlack": [
        "Čierna leštená terakota"
    ],
    "concretePowder": [
        "Biely betónový prach",
        "Biely betónový prach",
        "Oranžový betónový prach",
        "Purpurový betónový prach",
        "Svetlomodrý betónový prach",
        "Žltý betónový prach",
        "Žltozelený betónový prach",
        "Ružový betónový prach",
        "Sivý betónový prach",
        "Svetlosivý betónový prach",
        "Azúrový betónový prach",
        "Fialový betónový prach",
        "Modrý betónový prach",
        "Hnedý betónový prach",
        "Zelený betónový prach",
        "Červený betónový prach",
        "Čierny betónový prach"
    ],
    "stripped_spruce_log": [
        "Olúpané smrekové poleno"
    ],
    "stripped_dark_oak_log": [
        "Olúpané poleno z tmavého duba"
    ],
    "stripped_birch_log": [
        "Olúpané brezové poleno"
    ],
    "stripped_jungle_log": [
        "Olúpané tropické poleno"
    ],
    "stripped_oak_log": [
        "Olúpané dubové poleno"
    ],
    "stripped_acacia_log": [
        "Olúpané agátové poleno"
    ],
    "bamboo": [
        "Bambus"
    ],
    "scaffolding": [
        "Lešenie"
    ],
    "grindstone": [
        "Brúska"
    ],
    "cartography_table": [
        "Kartografický stôl"
    ],
    "lantern": [
        "Lampáš"
    ],
    "soul_lantern": [
        "Lampáš duší"
    ],
    "smoker": [
        "Udiareň"
    ],
    "smithing_table": [
        "Kováčsky stôl"
    ],
    "barrel": [
        "Sud"
    ],
    "campfire": [
        "Táborák"
    ],
    "loom": [
        "Krosná"
    ],
    "lectern": [
        "Pult"
    ],
    "sweet_berry_bush": [
        "Krík so sladkými bobuľami"
    ],
    "wood": [
        "Dubové drevo",
        "Dubové drevo",
        "Smrekové drevo",
        "Brezové drevo",
        "Tropické drevo",
        "Agátové drevo",
        "Drevo tmavého duba",
        null,
        null,
        "Olúpané dubové drevo",
        "Olúpané smrekové drevo",
        "Olúpané brezové drevo",
        "Olúpané tropické drevo",
        "Olúpané agátové drevo",
        "Olúpané drevo tmavého duba"
    ],
    "netherite_block": [
        "Blok netheritu"
    ],
    "ancient_debris": [
        "Starodávne trosky"
    ],
    "nether_gold_ore": [
        "Netheritová zlatá ruda"
    ],
    "respawn_anchor": [
        "Kotva znovuzrodenia"
    ],
    "crying_obsidian": [
        "Plačúci obsidián"
    ]
}
};
freeze(lang_data);
export = lang_data;

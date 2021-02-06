
import { freeze } from './freeze';
import { LangId } from './langid';
const lang_data = {
id: "cs_CZ" as LangId,
commands:{
    "ability_description": "Nastaví schopnost hráče.",
    "ability_noability": "Žádná schopnost s názvem „%1$s“ není k dispozici",
    "ability_granted": "Získali jste schopnost „%1$s“",
    "ability_revoked": "Schopnost „%1$s“ vám byla odebrána",
    "ability_success": "Schopnost byla aktualizována",
    "achievement_alreadyHave": "Hráč %1$s již má herní úspěch %2$s",
    "achievement_description": "Přidá nebo odebere hráči herní úspěch.",
    "achievement_dontHave": "Hráč %1$s nemá herní úspěch %2$s",
    "achievement_give_success_all": "Všechny herní úspěchy byly úspěšně předány hráči %1$s",
    "achievement_give_success_one": "Statistika %1$s byla úspěšně předána hráči %2$s",
    "achievement_statTooLow": "Hráč %1$s nemá statistiku %2$s",
    "achievement_take_success_all": "Všechny herní úspěchy byly úspěšně převzaty od hráče %1$s",
    "achievement_take_success_one": "Statistika %1$s byla úspěšně převzata od hráče %2$s",
    "achievement_unknownAchievement": "Neznámý herní úspěch nebo statistika „%1$s“",
    "agent_attack_success": "Agent úspěšně provedl útok",
    "agent_attack_failed": "Útok se agentovi nezdařil",
    "agent_collect_success": "Agent úspěšně provedl sběr",
    "agent_collect_failed": "Sběr se agentovi nezdařil",
    "agent_createagent_success": "Agent byl vytvořen",
    "agent_createagent_failed": "Agenta nelze vytvořit",
    "agent_destroy_success": "Agent zničil blok",
    "agent_destroy_failed": "Zničení se agentovi nezdařilo",
    "agent_detect_success": "Agent úspěšně provedl detekci",
    "agent_detect_failed": "Detekce se agentovi nezdařila",
    "agent_detectredstone_success": "Agent úspěšně provedl příkaz detectredstone",
    "agent_detectredstone_failed": "Příkaz detectredstone se agentovi nezdařil",
    "agent_drop_success": "Agent úspěšně provedl zahození",
    "agent_drop_failed": "Zahození se agentovi nezdařilo",
    "agent_dropall_success": "Agent úspěšně provedl příkaz dropall",
    "agent_dropall_failed": "Příkaz dropall se agentovi nezdařil",
    "agent_getitemcount_success": "Agent úspěšně provedl příkaz getitemcount",
    "agent_getitemcount_failed": "Příkaz getitemcount se agentovi nezdařil",
    "agent_getitemspace_success": "Agent úspěšně provedl příkaz getitemspace",
    "agent_getitemspace_failed": "Příkaz getitemspace se agentovi nezdařil",
    "agent_getitemdetail_success": "Agent úspěšně provedl příkaz getitemdetail",
    "agent_getitemdetail_failed": "Příkaz getitemdetail se agentovi nezdařil",
    "agent_getposition_success": "Agentův příkaz getposition byl úspěšný",
    "agent_getposition_failed": "Agentův příkaz getposition se nezdařil",
    "agent_inspect_success": "Agent úspěšně provedl kontrolu",
    "agent_inspect_failed": "Kontrola se agentovi nezdařila",
    "agent_inspectdata_success": "Agent úspěšně provedl kontrolu",
    "agent_inspectdata_failed": "Kontrola se agentovi nezdařila",
    "agent_move_success": "Agent úspěšně provedl přesun",
    "agent_move_failed": "Agenta nelze přesunout",
    "agent_outofrange": "Nelze vydat příkaz, agent je mimo dosah",
    "agent_place_success": "Agent byl úspěšně umístěn",
    "agent_place_failed": "Umístění agenta se nezdařilo",
    "agent_setitem_success": "Agent úspěšně nastavil předmět",
    "agent_setitem_failed": "Agentovi se nastavení předmětu nezdařilo",
    "agent_turn_success": "Agent se úspěšně otočil",
    "agent_turn_failed": "Agenta nelze otočit",
    "agent_till_success": "Agent provedl úspěšnou orbu",
    "agent_till_failed": "Orba se agentovi nezdařila",
    "agent_tpagent_description": "Teleportuje vašeho agenta.",
    "agent_tpagent_success": "Agent byl teleportován",
    "agent_tpagent_failed": "Teleportování agenta se nezdařilo",
    "agent_transfer_success": "Agent byl úspěšně převeden",
    "agent_transfer_failed": "Převedení agenta se nezdařilo",
    "always_day": "Cyklus dne a noci %1$s",
    "always_day_locked": "Střídání dne a noci uzamčeno",
    "always_day_unlocked": "Střídání dne a noci odemčeno",
    "ban_description": "Přidá hráče na seznam zakázaných.",
    "autocomplete_a": "všichni hráči",
    "autocomplete_c": "můj agent",
    "autocomplete_e": "všechny entity",
    "autocomplete_p": "nejbližší hráč",
    "autocomplete_r": "náhodný hráč",
    "autocomplete_s": "vy",
    "autocomplete_v": "všichni agenti",
    "ban_failed": "Nelze zablokovat hráče %1$s",
    "ban_success": "Hráč %1$s byl zablokován",
    "banip_description": "Přidá IP adresu na seznam zakázaných.",
    "banip_invalid": "Zadali jste neplatnou IP adresu nebo hráč není online",
    "banip_success": "Zablokovaná IP adresa %1$s",
    "banip_success_players": "Zablokovaná IP adresa %1$s patřící hráči %2$s",
    "banlist_ips": "Celkový počet zablokovaných IP adres: %1$d:",
    "banlist_players": "Celkový počet zablokovaných hráčů: %1$d:",
    "blockdata_description": "Změní datovou značku bloku.",
    "blockdata_placeFailed": "Sem nelze umísťovat bloky",
    "blockdata_destroyFailed": "Zde není možné kopat",
    "blockdata_failed": "Datová značka se nezměnila: %1$s",
    "blockdata_notValid": "Cílový blok není blok obsahující data",
    "blockdata_outOfWorld": "Nelze měnit blok mimo svět",
    "blockdata_success": "Data bloku byla aktualizována na: %1$s",
    "blockdata_tagError": "Analýza datových značek se nezdařila: %1$s",
    "bossbar_add_success": "Vlastní ukazatel protivníka [%1$s] byl vytvořen.",
    "bossbar_add_failure_invalid": "Neplatné ID ukazatele protivníka. ID musí mít podobu namespace:id nebo id (změní se na výchozí název pro Minecraft namespace).",
    "bossbar_add_failure_exists": "Ukazatel protivníka s ID „%1$s“ již existuje.",
    "bossbar_description": "Vytváří a upravuje příkazy bossbar.",
    "bossbar_get_max": "Pro vlastní ukazatel protivníka [%1$s] je maximum %2$d.",
    "bossbar_get_players": "Pro vlastní ukazatel protivníka [%1$s] je momentálně %2$s hráčů online: %3$s",
    "bossbar_get_players_none": "Pro vlastní ukazatel protivníka [%1$s] nejsou momentálně žádní hráči online.",
    "bossbar_get_players_one": "Pro vlastní ukazatel protivníka [%1$s] je momentálně 1 hráč online: %2$s",
    "bossbar_get_value": "Vlastní ukazatel protivníka [%1$s] má hodnotu %2$d.",
    "bossbar_get_visible_true": "Vlastní ukazatel protivníka [%1$s] je momentálně zobrazen.",
    "bossbar_get_visible_false": "Vlastní ukazatel protivníka [%1$s] je momentálně skrytý.",
    "bossbar_list": "Je aktivních %1$s vlastních ukazatelů protivníka: %2$s",
    "bossbar_list_none": "Nejsou aktivní žádné vlastní ukazatele protivníka.",
    "bossbar_list_one": "Je aktivní 1 vlastní ukazatel protivníka: %1$s",
    "bossbar_notFound": "Ukazatel protivníka s ID „%1$s“ neexistuje.",
    "bossbar_remove": "Vlastní ukazatel protivníka [%1$s] byl odebrán.",
    "change_setting_description": "Změní nastavení vyhrazeného serveru za chodu.",
    "change_setting_success": "Nastavení %1$s bylo změněno",
    "chunkinfo_compiled": "Blok dat je zkompilován.",
    "chunkinfo_data": "Prvních 64 vrcholů je: %1$s",
    "chunkinfo_empty": "Blok dat je prázdný.",
    "chunkinfo_hasLayers": "Blok dat obsahuje vrstvy: %1$s",
    "chunkinfo_hasNoRenderableLayers": "Blok dat nemá žádné vykreslitelné vrstvy.",
    "chunkinfo_isEmpty": "Blok dat obsahuje prázdné vrstvy: %1$s",
    "chunkinfo_location": "Umístění bloku dat: (%1$d, %2$d, %3$d)",
    "chunkinfo_noChunk": "Na pozici bloku dat %1$d, %2$d, %3$d nebyl nalezen žádný blok",
    "chunkinfo_notCompiled": "Blok dat není zkompilován.",
    "chunkinfo_notEmpty": "Blok dat není prázdný.",
    "chunkinfo_vertices": "Počet vrcholů ve vyrovnávací paměti vrstvy %1$s: %2$d",
    "classroommode_description": "Pokusí se o spuštění a připojení k učitelskému režimu.",
    "classroommode_success": "Spouštění učitelského režimu...",
    "clear_description": "Vymaže předměty z inventáře hráče.",
    "clear_failure": "Inventář %1$s nelze vymazat",
    "clear_failure_no_items": "Inventář %1$s nelze vymazat, neobsahuje žádné předměty",
    "clear_success": "Inventář %1$s byl vymazán, předměty byly odstraněny (%2$d)",
    "clear_tagError": "Analýza datových značek se nezdařila: %1$s",
    "clear_testing": "Počet předmětů hráče %1$s odpovídajících kritériím: %2$d",
    "clearfixedinv_description": "Odebere všechny pozice fixního inventáře.",
    "clearfixedinv_success": "Fixní inventář byl vymazán",
    "clone_description": "Naklonuje bloky z jednoho regionu do druhého.",
    "clone_failed": "Žádné bloky nebyly klonovány",
    "clone_filtered_error": "Filtrované použití vyžaduje zadání filtrovaného bloku",
    "clone_noOverlap": "Zdroj a cíl se nemohou překrývat",
    "clone_outOfWorld": "Nelze získat přístup k blokům mimo svět",
    "clone_success": "Počet klonovaných bloků: %1$d",
    "clone_tooManyBlocks": "V zadané oblasti je příliš mnoho bloků (%1$d > %2$d)",
    "closechat_description": "Zavře okno chatu místního hráče, pokud je otevřené.",
    "closechat_success": "Chat byl zavřen",
    "closechat_failure": "Chat nebyl otevřen",
    "closewebsocket_description": "Uzavírá připojení soketu webu, pokud existuje.",
    "code_description": "Spouští nástroj pro tvorbu kódu.",
    "code_success": "Nástroj pro tvorbu kódu byl spuštěn.",
    "compare_failed": "Zdroj a cíl se neshodují",
    "compare_outOfWorld": "Nelze získat přístup k blokům mimo svět",
    "compare_success": "Počet porovnávaných bloků: %1$d",
    "compare_tooManyBlocks": "V zadané oblasti je příliš mnoho bloků (%1$d > %2$d)",
    "corruptworld_description": "Způsobí poškození světa spuštěného na serveru.",
    "corruptworld_success": "Svět byl poškozen.",
    "daylock_description": "Zamyká a odemyká střídání dne a noci.",
    "debug_description": "Spustí nebo zastaví relaci ladění.",
    "debug_notStarted": "Profilování nelze zastavit, když ještě nebylo spuštěno!",
    "debug_start": "Profilování ladění bylo spuštěno",
    "debug_stop": "Profilování ladění bylo zastaveno po %.2f sekundách (%1$d impulzů)",
    "defaultgamemode_description": "Nastaví výchozí herní režim.",
    "defaultgamemode_success": "Výchozí herní režim světa je nyní %1$s",
    "deop_description": "Zruší hráči stav operátora.",
    "deop_failed": "Nelze odebrat roli operátora (příliš vysoká úroveň oprávnění): %s",
    "deop_success": "Role operátora zrušena: %s",
    "deop_message": "Byla vám zrušena role operátora",
    "difficulty_description": "Nastaví úroveň obtížnosti.",
    "difficulty_usage": "/difficulty <new difficulty>",
    "difficulty_success": "Obtížnost hry byla nastavena na %1$s",
    "downfall_success": "Počasí bylo přepnuto",
    "effect_description": "Přidává nebo odebírá účinky stavu.",
    "effect_failure_notActive": "Nelze odebrat účinek %1$s hráči %2$s, neboť účinek nemá",
    "effect_failure_notActive_all": "Hráči %1$s nelze odebrat žádné účinky, neboť žádné účinky nemá",
    "effect_failure_notAMob": "%1$s nemůže mít účinky",
    "effect_notFound": "Účinek stvoření s ID %s neexistuje",
    "effect_success": "Předáno %1$s * %2$d hráči %3$s po dobu %4$d sekund",
    "effect_success_removed": "Převzato %1$s od hráče %2$s",
    "effect_success_removed_all": "Převzaty všechny účinky od hráče %1$s",
    "enchant_cantCombine": "%1$s nelze kombinovat s %2$s",
    "enchant_invalidLevel": "%1$s nepodporuje úroveň %2$d",
    "enchant_cantEnchant": "Vybrané zaklínadlo nelze přidat k cílovému předmětu: %1$s",
    "enchant_description": "Přidá zaklínadlo k předmětu, který hráč vybere.",
    "enchant_noItem": "Cíl neobsahuje předmět: %1$s",
    "enchant_notFound": "Zaklínadlo s ID %1$d neexistuje",
    "enchant_success": "Zaklínání pro %1$s proběhlo úspěšně",
    "entitydata_description": "Změní datovou značku entity.",
    "entitydata_failed": "Datová značka se nezměnila: %1$s",
    "entitydata_noPlayers": "%1$s je hráč a nelze ho změnit",
    "entitydata_success": "Data entity byla aktualizována na: %1$s",
    "entitydata_tagError": "Analýza datových značek se nezdařila: %1$s",
    "execute_allInvocationsFailed": "Žádné vyvolávání se nezdařilo: „%1$s“",
    "execute_failed": "Provedení „%1$s“ jako %2$s se nezdařilo",
    "execute_description": "Provede příkaz jménem jedné nebo více entit.",
    "fill_description": "Zaplní celý region nebo jeho části uvedeným blokem.",
    "fill_failed": "Žádné bloky nebyly přidány",
    "fill_outOfWorld": "Nelze umístit bloky mimo svět",
    "fill_success": "Počet přidaných bloků: %1$d",
    "fill_tagError": "Analýza datových značek se nezdařila: %1$s",
    "fill_tooManyBlocks": "V zadané oblasti je příliš mnoho bloků (%1$d > %2$d)",
    "fill_replace_auxvalue_invalid": "Neplatná hodnota dat nahrazení bloku %1$s",
    "function_description": "Spustí příkazy nalezené v odpovídajícím souboru s funkcemi.",
    "function_functionNameNotFound": "Funkce %1$s nebyla nalezena.",
    "function_invalidCharacters": "Funkce s názvem „%s“ je neplatná, znak „%s“ není v názvech funkcí povolen.",
    "function_noEngineVersionSpecified": "Funkci %s nebylo možné spustit. V souboru manifest.json z balíčku chování je nutné definovat min_engine_version.",
    "function_success": "%1$d záznamů funkcí bylo úspěšně provedeno.",
    "gamemode_description": "Nastaví herní režim hráče.",
    "gamemode_success_other": "Herní režim hráče %2$s byl nastaven na %1$s",
    "gamemode_success_self": "Vlastní herní režim byl nastaven na %1$s",
    "gamemode_fail_invalid": "Herní režim „%1$s“ je neplatný",
    "gamerule_description": "Nastaví nebo vyšle dotaz na hodnotu herního pravidla.",
    "gamerule_type_invalid": "Neplatný typ použitý pro herní pravidlo „%1$s“",
    "gamerule_type_nocheatsenabled": "Herní pravidlo „%1$s“ lze použít pouze v případě, že jsou v tomto světě povoleny cheaty.",
    "gamerule_nopermission": "„%1$s“ mohou měnit jen vlastníci serverů",
    "gamerule_norule": "Žádné herní pravidlo s názvem „%1$s“ neexistuje",
    "gamerule_success": "Herní pravidlo %1$s bylo aktualizováno na %2$s",
    "generic_async_initiated": "Příkaz „%1$s“ byl spuštěn (asynchronní krok %2$d)",
    "generic_boolean_invalid": "„%1$s“ nemá hodnotu pravda či nepravda",
    "generic_chunk_notFound": "Zadaný blok dat nebyl nalezen",
    "generic_componentError": "Nepodařilo se analyzovat seznam součástí",
    "generic_dimension_notFound": "Zadaný rozměr nebyl nalezen",
    "generic_disabled": "Cheaty nejsou v této úrovni povoleny.",
    "generic_disabled_templateLocked": "Nastavení jsou aktuálně uzamčena. Pro jejich změnu odemkněte možnosti světa šablony v herních nastaveních.",
    "generic_double_tooBig": "Zadané číslo (%.2f) je příliš velké, musí být maximálně %.2f",
    "generic_double_tooSmall": "Zadané číslo (%.2f) je příliš malé, musí být minimálně %.2f",
    "generic_duplicateType": "Argumenty typu duplikace",
    "generic_duplicateSelectorArgument": "Argumenty oblasti výběru duplikace %s",
    "generic_encryption_badkey": "Zadán špatný veřejný klíč. Očekávaná délka je 120 byte ve formátu PEM.",
    "generic_encryption_badsalt": "Zadána chybná sůl. Je očekáváno 16 byte před zakódováním s bází 64.",
    "generic_encryption_required": "Relace musí být šifrovaná",
    "generic_entity_invalidType": "Typ entity „%1$s“ je neplatný",
    "generic_entity_invalidUuid": "Uvedená entita UUID má neplatný formát",
    "generic_entity_notFound": "Danou entitu nelze najít",
    "generic_exception": "Při pokusu o provedení tohoto příkazu došlo k neznámé chybě",
    "generic_invalidAgentType": "Zadejte argument použitý u selektoru vyhrazeného pro agenta",
    "generic_invalidcontext": "Neplatný kontext zadaný pro daný typ příkazu",
    "generic_invalidDevice": "Zadaný příkaz %s není na tomto zařízení podporován",
    "generic_invalidPlayerType": "Typ argumentu byl použit na hráče – pouze oblast výběru",
    "generic_invalidType": "Neznámý typ argumentu",
    "generic_levelError": "Max. úroveň musí být vyšší než min. úroveň",
    "generic_malformed_body": "Tělo chybí nebo je poškozeno",
    "generic_malformed_type": "Neplatný typ požadavku",
    "generic_notimplemented": "Není implementováno",
    "generic_num_invalid": "„%1$s“ není platné číslo",
    "generic_num_tooBig": "Zadané číslo (%1$d) je příliš velké, nejvyšší povolená hodnota je %2$d",
    "generic_num_tooSmall": "Zadané číslo (%1$d) je příliš malé, nejmenší povolená hodnota je %2$d",
    "generic_parameter_invalid": "„%1$s“ není platný parametr",
    "generic_permission_selector": "<nedostatečná oprávnění pro rozšíření oblasti výběru>",
    "generic_player_notFound": "Daného hráče nelze najít",
    "generic_protocol_mismatch": "Uvedená verze protokolu neodpovídá verzi protokolu hry Minecraft",
    "generic_radiusError": "Minimální poloměr oblasti výběru musí být menší než maximální",
    "generic_radiusNegative": "Poloměr nemůže být záporný",
    "generic_rotationError": "Otáčení mimo rozsah",
    "generic_running": "Příkaz je již spuštěn",
    "generic_step_failed": "Krok příkazu se nezdařil",
    "generic_syntax": "Neplatná syntaxe: Neočekávané „%2$s“: u „%1$s>>%2$s<<%3$s“",
    "generic_noTargetMatch": "Oblasti výběru neodpovídají žádné cíle",
    "generic_targetNotPlayer": "Oblast výběru musí být typu hráč",
    "generic_tooManyNames": "Příliš mnoho argumentů jmen cíle",
    "generic_tooManyTargets": "Oblasti výběru odpovídá příliš mnoho cílů",
    "generic_too_many_requests": "Je požadováno příliš mnoho příkazů, vyčkejte, než se jeden vykoná",
    "generic_unknown": "Neznámý příkaz: %s. Zkontrolujte, zda příkaz existuje a zda máte oprávnění ho používat.",
    "generic_usage": "Využití: %1$s",
    "generic_usage_noparam": "Využití:",
    "generic_version_mismatch": "Požadovaná verze pro tento příkaz neexistuje",
    "generic_version_missing": "Volání příkazu mimo chat musí uvádět verzi příkazu",
    "getchunkdata_description": "Zjistí pixely pro konkrétní blok dat.",
    "getchunkdata_success": "Data bloku dat byla přijata",
    "getchunks_description": "Zjistí seznam bloků dat, které jsou načteny.",
    "getchunks_success": "Seznam bloků dat byl přijat",
    "getlocalplayername_description": "Vrátí jméno místního hráče.",
    "getspawnpoint_description": "Zjistí počáteční pozici uvedených hráčů.",
    "gettopsolidblock_description": "Vrátí pozici nejvyššího bloku jiného než vzduch pod zadanou pozicí.",
    "gettopsolidblock_notfound": "Pod zadanou pozicí nejsou žádné pevné bloky.",
    "give_block_notFound": "Blok s názvem %1$d neexistuje",
    "give_description": "Dá hráči předmět.",
    "give_item_invalid": "Neplatná syntaxe příkazu: neexistuje %s s uvedenou hodnotou dat",
    "give_item_notFound": "Předmět s názvem %1$d neexistuje",
    "give_map_invalidData": "Poskytnuta neplatná mapová data",
    "give_map_featureNotFound": "Nelze vytvořit průzkumnou mapu. Funkce nebyla v této dimenzi nalezena",
    "give_success": "Předáno %1$s * %2$d hráči %3$s",
    "give_successRecipient": "Získali jste %1$s * %2$d",
    "give_tagError": "Analýza datových značek se nezdařila: %1$s",
    "help_description": "Zobrazí nápovědu / seznam příkazů.",
    "help_footer": "Tip: Používejte během psaní příkazů klávesu <tab> pro automatické dokončování příkazů a jejich argumentů",
    "help_header": "--- Zobrazení stránky nápovědy %1$d z %2$d (/help <stránka>) ---",
    "help_command_aliases": "%s (také %s):",
    "immutableworld_description": "Nastaví neměnný stav světa.",
    "immutableworld_info": "immutableworld = %s",
    "kick_description": "Vyloučí hráče ze serveru.",
    "kick_description_edu": "Odebere hráče ze hry.",
    "kick_not_found": "Hráče %1$s nelze najít",
    "kick_not_yourself": "Nemůžete se odebrat ze hry.",
    "kick_success": "Hráč %1$s byl vyloučen ze hry",
    "kick_success_reason": "Důvod vyloučení hráče %1$s ze hry: „%2$s“",
    "kick_success_reasonedu": "Hráč %1$s byl odebrán ze hry: „%2$s“",
    "kick_no_host": "Hostitel nemůže být vyloučen ze hry.",
    "kick_no_teacher": "Učitelé nemohou být odebráni ze hry.",
    "kill_successful_edu": "Odebráno %1$s",
    "kill_successful": "Zabiti: %1$s",
    "kill_description_edu": "Odebere entity (hráče, stvoření atd.).",
    "kill_description": "Zabije entity (hráče, stvoření atd.).",
    "list_description": "Uvede seznam hráčů na serveru.",
    "locate_description": "Zobrazí souřadnice nejbližší struktury daného typu.",
    "locate_fail_noplayer": "Příkaz může použít pouze platný hráč",
    "locate_fail_nostructurefound": "V tomto rozměru nebyla nalezena žádná platná struktura",
    "locate_success": "Nejbližší %1$s je na bloku %2$s, (y?), %3$s",
    "togglecontentlog_toggle": "Povolí/zakáže příkaz protokolu obsahu",
    "togglecontentlog_enabled": "Protokol obsahu povolen",
    "togglecontentlog_disabled": "Protokol obsahu zakázán",
    "me_description": "Zobrazí zprávu o vás.",
    "message_display_incoming": "Hráč %1$s vám šeptá: %2$s",
    "message_display_outgoing": "Šeptáte hráči %1$s: %2$s",
    "message_sameTarget": "Soukromou zprávu nemůžete zaslat sami sobě!",
    "mixer_description": "Ovládání interaktivity Mixeru",
    "mixer_error_unknown": "Vyskytla se neznámá chyba Mixeru.",
    "mixer_error_notoken": "Chcete-li povolit interaktivitu Mixeru, musíte se přihlásit pomocí účtu Microsoft.",
    "mixer_error_notsupported": "Používané zařízení nepodporuje interaktivitu Mixeru.",
    "mixer_interactive_error": "Vyskytla se chyba Mixeru: %1$s",
    "mixer_scene_failed": "Neexistuje scéna s názvem %1$s. Ujistěte se, že jste zadali správný název scény.",
    "mixer_scene_success": "Scéna změněna na: %1$s",
    "mixer_start_success": "Spouštění interaktivity Mixeru: %1$s",
    "mixer_start_fail_invalidCode": "Nelze nalézt projekt s ID \"%1$s\". Ujistěte se, že je kód sdílení správný.",
    "mixer_stop_success": "Interaktivní aplikace Mixer se zastavila.",
    "mixer_stop_fail": "Neexistuje žádná interaktivní scéna k zastavení.",
    "mixer_status_notinitialized": "Interaktivita není spuštěna.",
    "mixer_status_enabled": "Interaktivita není povolena.",
    "mixer_status_initializing": "Interaktivita se spouští.",
    "mixer_status_pending": "Interaktivita čeká na vyřízení.",
    "mixer_status_disabled": "Interaktivita je vypnuta.",
    "mixer_activatedbutton": "%1$s aktivoval %2$s.",
    "mobevent_description": "Řídí, které události stvoření se mohou spouštět.",
    "mobevent_eventsEnabledSetToTrue": "Události stvoření jsou nyní povoleny. Jednotlivé události, u kterých je nastavena hodnota false, se nespustí.",
    "mobevent_eventsEnabledSetToFalse": "Události stvoření jsou nyní zakázány. Jednotlivé události se nespustí.",
    "mobevent_eventsEnabledIsTrue": "Události stvoření jsou povoleny. Jednotlivé události, u kterých je nastavena hodnota false, se nespustí.",
    "mobevent_eventsEnabledIsFalse": "Události stvoření jsou zakázány. Jednotlivé události se nespustí.",
    "mobevent_eventSetToTrue": "Událost stvoření %s (id: %s) je nastavena na hodnotu true.",
    "mobevent_eventSetToTrueButEventsDisabled": "Událost stvoření %s (id: %s) je nastavena na hodnotu true, ale události stvoření jsou zakázány.",
    "mobevent_eventSetToFalse": "Událost stvoření %s (id: %s) je nastavena na hodnotu false.",
    "mobevent_eventIsTrue": "Událost stvoření %s (id: %s) je nastavena na hodnotu true.",
    "mobevent_eventIsTrueButEventsDisabled": "Událost stvoření %s (id: %s) je nastavena na hodnotu true, ale události stvoření jsou zakázány.",
    "mobevent_eventIsFalse": "Událost stvoření %s (id: %s) je nastavena na hodnotu false.",
    "op_description": "Udělí hráči stav operátora.",
    "op_failed": "Nelze nastavit roli operátora (již má roli operátora nebo vyšší): %s",
    "op_success": "Nastavena role operátora: %s",
    "op_message": "Byla vám nastavena role operátora",
    "origin_commandblock": "PříkazovýBlok",
    "origin_external": "Externí",
    "origin_devconsole": "DevConsole",
    "origin_script": "Skriptovací stroj",
    "origin_server": "Server",
    "origin_teacher": "Učitel",
    "ops_description": "Znovu načte a použije oprávnění operátora.",
    "ops_reloaded": "Operátor byl znovu načten ze souboru.",
    "ops_set_success": "Nastavení úrovně operátora pro hráče %s se podařilo.",
    "permissions_description": "Znovu načte a použije oprávnění.",
    "permissions_reloaded": "Oprávnění byla znovu načtena ze souboru.",
    "permissions_set_failed": "Úroveň oprávnění %s pro hráče %s nelze nastavit.",
    "permissions_set_success": "Nastavení úrovně oprávnění %s pro hráče %s se podařilo.",
    "permissions_save_failed": "Úroveň oprávnění %s pro hráče %s nelze uložit.",
    "permissions_save_success": "Uložení úrovně oprávnění %s pro hráče %s se podařilo.",
    "spawnParticleEmitter_description": "Vytvoří zářič částic",
    "particle_description": "Vytvoří částice.",
    "particle_notFound": "Neznámý název účinku (%1$s)",
    "particle_success": "Přehrávání účinku %1$s %2$dkrát",
    "players_list": "%1$d/%2$d hráčů je online:",
    "players_list_names": "%s",
    "playsound_description": "Přehraje zvuk.",
    "playsound_playerTooFar": "Hráč %1$s je příliš daleko, aby zvuk slyšel",
    "playsound_success": "Zvuk „%1$s“ byl přehrán hráči %2$s",
    "position_description": "Zapíná/vypíná hráči souřadnice.",
    "publish_failed": "Nelze hostovat místní hru",
    "publish_started": "Místní hra je hostována na portu %1$s",
    "querytarget_description": "Zjistí informace o transformaci, jménu a ID dané cílové entity nebo entit.",
    "querytarget_success": "Data cíle: %1$s",
    "reload_description": "Znovu načte všechny soubory s funkcemi ze všech balíčků chování.",
    "reload_success": "Došlo k opětovnému načtení stávajících souborů funkce. Nové funkce budou dostupné po opětovném spuštění Minecraftu.",
    "replaceitem_description": "Nahradí předměty v inventářích.",
    "replaceitem_failed": "Pozici %s hráče %d nelze nahradit %d * %s",
    "replaceitem_keepFailed": "Již existuje předmět, který zabírá %s pozici %d.",
    "replaceitem_noContainer": "Blok na pozici %s není nádoba",
    "replaceitem_badSlotNumber": "Pozici %d nelze nahradit, je nutno použít hodnotu mezi %d a %d.",
    "replaceitem_success": "Pozice %s hráče %d byla nahrazena %d * %s",
    "replaceitem_success_entity": "Pozice %s %d hráče %s byla nahrazena %d * %s",
    "replaceitem_tagError": "Analýza datových značek se nezdařila: %1$s",
    "save_description": "Zkontrolujte nebo ověřte, jak hra ukládá data na disk.",
    "save_disabled": "Automatické ukládání světa vypnuto",
    "save_enabled": "Automatické ukládání světa zapnuto",
    "save_failed": "Uložení se nezdařilo: %1$s",
    "save_start": "Ukládání...",
    "save_success": "Svět byl uložen",
    "save_all_error": "Při pokusu o pozastavení ukládání úrovně došlo k chybě.",
    "save_all_success": "Data byla uložena. Soubory jsou nyní připraveny ke kopírování.",
    "save_off_alreadyOff": "Ukládání je již vypnuté.",
    "save_on_alreadyOn": "Ukládání je již zapnuté.",
    "save_on_notDone": "Předchozí uložení nebylo dokončeno.",
    "save_on_description": "Povolí automatické ukládání serveru.",
    "save_on_success": "Změny úrovně budou pokračovat.",
    "save_state_description": "Ověřuje, zda bylo úplné uložení dokončeno, a uvádí dané soubory.",
    "say_description": "Odešle zprávu ostatním hráčům prostřednictvím chatu.",
    "scoreboard_description": "Sleduje a zobrazuje skóre pro různé cíle.",
    "scoreboard_allMatchesFailed": "Všechny shody se nezdařily",
    "scoreboard_noMultiWildcard": "Je povolena jen jedna divoká karta uživatele",
    "scoreboard_objectiveNotFound": "Pod jménem „%1$s“ nebyl nalezen žádný cíl",
    "scoreboard_objectiveReadOnly": "Cíl „%1$s“ je pouze pro čtení a nelze ho nastavit",
    "scoreboard_objectives_add_alreadyExists": "Cíl s názvem „%1$s“ již existuje",
    "scoreboard_objectives_add_displayTooLong": "Zobrazovaný název cíle „%1$s“ je příliš dlouhý. Maximální povolený počet znaků je %2$d",
    "scoreboard_objectives_add_success": "Nový cíl „%1$s“ byl úspěšně přidán",
    "scoreboard_objectives_add_tooLong": "Název cíle „%1$s“ je příliš dlouhý. Maximální povolený počet znaků je %2$d",
    "scoreboard_objectives_add_wrongType": "Neplatný typ kritéria cíle „%1$s“",
    "scoreboard_objectives_add_needName": "Cíl musí mít nějaké jméno.",
    "scoreboard_objectives_description": "Změní cíle v tabulce skóre.",
    "scoreboard_objectives_list_count": "Zobrazení %1$d cílů v tabulce skóre:",
    "scoreboard_objectives_list_empty": "V tabulce skóre nejsou žádné cíle",
    "scoreboard_objectives_list_entry": "- %1$s: zobrazuje se jako „%2$s“ a je typu „%3$s“",
    "scoreboard_objectives_remove_success": "Cíl „%1$s“ byl úspěšně odebrán",
    "scoreboard_objectives_setdisplay_invalidSlot": "Pozice zobrazení „%1$s“ neexistuje",
    "scoreboard_objectives_setdisplay_successCleared": "Pozice zobrazení cíle „%1$s“ byla vymazána",
    "scoreboard_objectives_setdisplay_successSet": "Cíl zobrazení v pozici „%1$s“ byl nastaven na „%2$s“",
    "scoreboard_players_add_success": "Přidáno %1$d k [%2$s] hráči %3$s (nyní %4$d)",
    "scoreboard_players_add_multiple_success": "Přidáno %1$d k [%2$s] %3$d entitám",
    "scoreboard_players_nameNotFound": "Je třeba uvést jméno hráče.",
    "scoreboard_players_enable_noTrigger": "Cíl %1$s není spouštěč",
    "scoreboard_players_enable_success": "Povolit spouštěč %1$s pro %2$s",
    "scoreboard_players_list_count": "Zobrazení %1$d sledovaných hráčů v tabulce skóre:",
    "scoreboard_players_list_empty": "V tabulce skóre nejsou žádní sledovaní hráči",
    "scoreboard_players_list_player_count": "Zobrazení %1$d sledovaných cílů pro %2$s:",
    "scoreboard_players_list_player_empty": "Hráč %1$s nemá zaznamenané žádné skóre",
    "scoreboard_players_list_player_entry": "- %2$s: %1$d (%3$s)",
    "scoreboard_players_operation_invalidOperation": "Neplatná operace %1$s",
    "scoreboard_players_operation_notFound": "Pro hráče %1$s nebylo nalezeno žádné skóre %2$s",
    "scoreboard_players_operation_success": "Aktualizováno [%1$s] %2$d entitám",
    "scoreboard_players_offlinePlayerName": "Hráč offline",
    "scoreboard_players_random_invalidRange": "Minimum %1$d není nižší než maximum %2$d",
    "scoreboard_players_remove_success": "Odebráno %1$d z [%2$s] hráči %3$s (nyní %4$d)",
    "scoreboard_players_remove_multiple_success": "Odebráno %1$d z [%2$s] %3$d entitám",
    "scoreboard_players_reset_success": "Resetovat skóre hráče %1$s",
    "scoreboard_players_resetscore_success": "Resetovat skóre %1$s hráče %2$s",
    "scoreboard_players_set_success": "Nastaveno [%1$s] hráči %2$s na %3$d",
    "scoreboard_players_set_multiple_success": "Nastaveno [%1$s] %2$d entitám na %3$d",
    "scoreboard_players_set_tagError": "Nelze analyzovat datovou značku, důvod: %1$s",
    "scoreboard_players_set_tagMismatch": "Datová značka se neshoduje s %1$s",
    "scoreboard_players_score_notFound": "Pro hráče %1$s nebylo nalezeno žádné skóre %2$s",
    "scoreboard_players_test_failed": "Skóre %1$d NENÍ v rozsahu %2$d až %3$d",
    "scoreboard_players_test_success": "Skóre %1$d je v rozsahu %2$d až %3$d",
    "scoreboard_teamNotFound": "Pod názvem „%1$s“ nebyl nalezen žádný tým",
    "scoreboard_teams_add_alreadyExists": "Tým s názvem „%1$s“ již existuje",
    "scoreboard_teams_add_displayTooLong": "Zobrazovaný název týmu „%1$s“ je příliš dlouhý. Maximální povolený počet znaků je %2$d",
    "scoreboard_teams_add_success": "Nový tým „%1$s“ byl úspěšně přidán",
    "scoreboard_teams_add_tooLong": "Název týmu „%1$s“ je příliš dlouhý. Maximální povolený počet znaků je %2$d",
    "scoreboard_teams_empty_alreadyEmpty": "Tým %1$s je již prázdný, nelze odebrat neexistující hráče",
    "scoreboard_teams_empty_success": "Všichni hráči (%1$d) byli z týmu %2$s odebráni",
    "scoreboard_teams_join_failure": "Nelze přidat hráče (%1$d) do týmu %2$s: %3$s",
    "scoreboard_teams_join_success": "Hráči (%1$d) byli přidáni do týmu %2$s: %3$s",
    "scoreboard_teams_leave_failure": "Nelze odebrat hráče (%1$d) z jejich týmů: %2$s",
    "scoreboard_teams_leave_noTeam": "Nejste v týmu",
    "scoreboard_teams_leave_success": "Hráči (%1$d) byli ze svých týmů odebráni: %2$s",
    "scoreboard_teams_list_count": "Zobrazení %1$d týmů v tabulce skóre:",
    "scoreboard_teams_list_empty": "V tabulce skóre nejsou registrovány žádné týmy",
    "scoreboard_teams_list_entry": "- %1$s: „%2$s“ má %3$d hráčů",
    "scoreboard_teams_list_player_count": "Zobrazení %1$d hráčů týmu %2$s:",
    "scoreboard_teams_list_player_empty": "Tým %1$s nemá žádné hráče",
    "scoreboard_teams_list_player_entry": "- %2$s: %1$d (%3$s)",
    "scoreboard_teams_option_noValue": "Platné hodnoty pro možnost %1$s jsou: %2$s",
    "scoreboard_teams_option_success": "Nastavit možnost %1$s týmu %2$s na %3$s",
    "scoreboard_teams_remove_success": "Tým %1$s byl odebrán",
    "seed_success": "Počáteční hodnota: %1$s",
    "setblock_description": "Změní blok na jiný blok.",
    "setblock_failed": "Blok nelze umístit",
    "setblock_noChange": "Blok nebylo možné umístit",
    "setblock_notFound": "Blok s ID/názvem %1$s neexistuje",
    "setblock_outOfWorld": "Nelze umístit blok mimo svět",
    "setblock_success": "Blok byl umístěn",
    "setblock_tagError": "Analýza datových značek se nezdařila: %1$s",
    "setidletimeout_success": "Časový limit nečinnosti byl úspěšně nastaven na %1$d min.",
    "setfixedinvslots_description": "Nastaví počet pozic fixního inventáře pro server.",
    "setfixedinvslots_success": "Počet pozic fixního inventáře byl nastaven na %1$d",
    "setfixedinvslot_description": "Nastaví fixní pozici pro zadaný předmět.",
    "setfixedinvslot_success": "Pozice fixního inventáře %1$d byla nastavena na %2$s",
    "globalpause_description": "Nastaví nebo načte pozastavený stav hry pro všechny hráče.",
    "globalpause_success": "Pozastavený stav byl nastaven nebo načten",
    "setmaxplayers_description": "Stanovuje maximální počet hráčů pro tuto herní relaci.",
    "setmaxplayers_success": "Stanovuje maximální počet hráčů na %1$d.",
    "setmaxplayers_success_upperbound": "(Omezeno maximálním počtem připojení)",
    "setmaxplayers_success_lowerbound": "(Omezeno aktuálním počtem hráčů)",
    "setworldspawn_description": "Nastaví počáteční bod světa.",
    "setworldspawn_success": "Počáteční místo světa bylo nastaveno na (%1$d, %2$d, %3$d)",
    "setworldspawn_wrongDimension": "V této dimenzi nelze počáteční bod světa nastavit",
    "spawnpoint_success_single": "Nastavit počáteční místo hráče %1$s na (%2$d, %3$d, %4$d)",
    "spawnpoint_description": "Nastaví počáteční bod hráče.",
    "spawnpoint_success_multiple_specific": "Nastavit počáteční místo hráče %1$s na (%2$d, %3$d, %4$d)",
    "spawnpoint_success_multiple_generic": "Nastavit počáteční místo pro %1$s",
    "spawnpoint_wrongDimension": "V této dimenzi nelze nastavit bod vstupu do hry.",
    "spreadplayers_description": "Teleportuje entity na náhodná místa.",
    "spreadplayers_failure_players": "Nelze rozprostřít %1$s hráčů po %2$s,%3$s (příliš mnoho hráčů na daný prostor – zkuste použít rozprostření maximálně %4$s)",
    "spreadplayers_failure_teams": "Nelze rozprostřít %1$s týmů po %2$s,%3$s (příliš mnoho hráčů na daný prostor – zkuste použít rozprostření maximálně %4$s)",
    "spreadplayers_info_players": "(Průměrná vzdálenost mezi hráči je %1$s bloků po %2$s iteracích)",
    "spreadplayers_info_teams": "(Průměrná vzdálenost mezi týmy je %1$s bloků po %2$s iteracích)",
    "spreadplayers_spreading_players": "Rozprostírání %1$s hráčů %2$s bloků po %3$s,%4$s (min. %5$s bloků od sebe)",
    "spreadplayers_spreading_teams": "Rozprostírání %1$s týmů %2$s bloků po %3$s,%4$s (min. %5$s bloků od sebe)",
    "spreadplayers_success_players": "%1$s hráčů bylo úspěšně rozprostřeno po %2$s,%3$s",
    "spreadplayers_success_teams": "%1$s týmů bylo úspěšně rozprostřeno po %2$s,%3$s",
    "stats_cleared": "Statistiky hráče %1$s byly vymazány",
    "stats_failed": "Neplatné parametry",
    "stats_noCompatibleBlock": "Blok na pozici %1$d, %2$d, %3$d nemůže sledovat statistiky",
    "stats_success": "Statistiky %1$s v %2$s byly uloženy na %3$s",
    "stop_description": "Zastaví server.",
    "stop_start": "Zastavování serveru",
    "stopsound_description": "Zastaví zvuk.",
    "stopsound_success": "Zastaven zvuk %s pro %s",
    "stopsound_success_all": "Zastaveny všechny zvuky pro %s",
    "summon_description": "Vyvolá entitu.",
    "summon_failed": "Objekt nelze vyvolat",
    "summon_outOfWorld": "Objekt mimo svět nelze vyvolat",
    "summon_success": "Objekt byl úspěšně vyvolán",
    "summon_tagError": "Analýza datových značek se nezdařila: %1$s",
    "tag_description": "Spravuje značky uložené v entitách.",
    "tag_add_failed": "Cíl už má značku nebo má příliš mnoho značek",
    "tag_add_success_single": "Značka „%1$s“ byla přidána %2$s",
    "tag_add_success_multiple": "Značka „%1$s“ byla přidána %2$d entitám",
    "tag_list_single_empty": "%s nemá žádnou značku",
    "tag_list_single_success": "%1$s má %2$d značky: %3$s",
    "tag_list_multiple_empty": "Značku nemá %d entit",
    "tag_list_multiple_success": "%1$d entit mají celkově %2$d značky: %3$s",
    "tag_remove_failed": "Cíl nemá tuto značku",
    "tag_remove_success_single": "Značka „%1$s“ byla odebrána %2$s",
    "tag_remove_success_multiple": "Značka „%1$s“ byla odebrána %2$d entitám",
    "tell_description": "Odešle soukromou zprávu jednomu či více hráčům.",
    "tellraw_description": "Odešle hráčům zprávu JSON.",
    "tellraw_jsonException": "Neplatný json: %1$s",
    "tellraw_jsonStringException": "Neplatná data řetězce json.",
    "tellraw_error_noData": "Nebyla poskytnuta žádná data.",
    "tellraw_error_notArray": "Objekt nezpracovaného textu musí obsahovat pole. Příklad: „nezpracovaný text“:[{..}]",
    "tellraw_error_textNotString": "Pole Text v nezpracovaném textu musí obsahovat řetězec. Příklad: „nezpracovaný text“:[{\"text\": \"text to display\"}]",
    "tellraw_error_translateNotString": "Pole Překlad v nezpracovaném textu musí obsahovat jazykový klíč. Příklad: „nezpracovaný text“:[{\"translate\": \"gui.ok\"}]",
    "tellraw_error_withNotArrayOrRawText": "s polem v nezpracovaném textu musí obsahovat pole nebo jiný objekt nezpracovaného textu. 1. příklad: „nezpracovaný text“:[{\"translate\": \"chat.type.announcement\", \"with\": [ \"value1\", \"value2\" ]}]  2. příklad: „nezpracovaný text“:[{\"translate\": \"chat.type.announcement\", \"with\":{\"rawtext\":[{\"text\": \"value1\"}, {\"text\": \"value2\"}]}}]",
    "tellraw_error_itemIsNotObject": "Hodnota Json v nezpracovaném textu nebyla objektem. Příklad: „nezpracovaný text“: [{ \"text\" : \"my text\" }]",
    "educlientinfo_description": "Získá ID klienta a stav hostitele. Určeno pro CM.",
    "testfor_description": "Počítá entity (hráče, stvoření, předměty atd.) odpovídající zadaným podmínkám.",
    "testfor_failure": "%1$s neodpovídal požadované struktuře dat",
    "testfor_success": "%1$s byl nalezen",
    "testfor_tagError": "Analýza datových značek se nezdařila: %1$s",
    "testforblock_description": "Ověří, zda je určitý blok na konkrétním místě.",
    "testforblock_failed_data": "Blok na pozici %1$d,%2$d,%3$d se neshodoval s očekávaným stavem bloku.",
    "testforblock_failed_nbt": "Blok na pozici %1$d,%2$d,%3$d neměl požadované klíče NBT.",
    "testforblock_failed_tile": "Blok na pozici %1$d,%2$d,%3$d je %4$s (očekáváno: %5$s).",
    "testforblock_failed_tileEntity": "Blok na pozici %1$d, %2$d, %3$d není dlaždicová entita a nepodporuje párování značek.",
    "testforblock_outOfWorld": "Nelze testovat na blok mimo svět",
    "testforblock_success": "Na pozici %1$d,%2$d,%3$d byl úspěšně nalezen blok.",
    "testforblocks_description": "Ověří, zda se shodují bloky ve dvou regionech.",
    "tickingarea_description": "Přidává, odebírá nebo uvádí oblasti zaškrtnutí.",
    "tickingarea_inuse": "Používá se %1$d/%2$d oblastí zaškrtnutí.",
    "tickingarea_noneExist_currentDimension": "V aktuální dimenzi neexistuje žádná oblast zaškrtnutí.",
    "tickingarea_add_bounds_success": "Přidána oblast zaškrtnutí z %1$d do %2$d.",
    "tickingarea_add_circle_success": "Přidána oblast zaškrtnutí se středem v %1$d a poloměrem %2$d bloků dat.",
    "tickingarea_add_failure": "Již jste dosáhli maximálního počtu oblastí zaškrtnutí (%1$d). Další oblasti zaškrtnutí nelze přidat.",
    "tickingarea_add_conflictingname": "Oblast zaškrtnutí s názvem %1$s již existuje.",
    "tickingarea_add_chunkfailure": "Oblast zaškrtnutí obsahuje více než %1$d bloků dat a je příliš velká pro vytvoření.",
    "tickingarea_add_radiusfailure": "Poloměr nemůže být větší než %1$d, oblast zaškrtnutí je příliš velká a nelze ji vytvořit.",
    "tickingarea_remove_success": "Oblasti zaškrtnutí byly odebrány",
    "tickingarea_remove_failure": "V aktuální dimenzi neexistují žádné oblasti zaškrtnutí obsahující pozici bloku %1$d.",
    "tickingarea_remove_byname_failure": "V aktuální dimenzi neexistuje žádná oblast zaškrtnutí s názvem %1$s.",
    "tickingarea_remove_all_success": "Oblasti zaškrtnutí byly odebrány",
    "tickingarea_remove_all_failure": "V aktuální dimenzi neexistuje žádná oblast zaškrtnutí.",
    "tickingarea_list_chunks": "bloků dat",
    "tickingarea_list_circle_radius": "Poloměr",
    "tickingarea_list_success_currentDimension": "Seznam všech oblastí zaškrtnutí v aktuální dimenzi",
    "tickingarea_list_success_allDimensions": "Seznam všech oblastí zaškrtnutí ve všech dimenzích",
    "tickingarea_list_failure_allDimensions": "V žádné dimenzi neexistují žádné oblasti zaškrtnutí.",
    "tickingarea_list_to": "na",
    "tickingarea_list_type_circle": "Kružnice",
    "time_added": "Čas byl zvýšen o %1$d",
    "time_description": "Změní nebo vyšle dotaz na herní čas světa.",
    "time_disabled": "V této úrovni je povolena možnost Stále den.",
    "time_query_day": "Den je %d",
    "time_query_daytime": "Denní doba je %d",
    "time_query_gametime": "Čas hry je %d",
    "time_set": "Nastavit čas na %1$d",
    "time_stop": "Čas %1$s",
    "title_description": "Ovládá titulky na obrazovce.",
    "title_success": "Příkaz názvu byl úspěšně proveden",
    "titleraw_description": "Řídí názvy obrazovek pomocí zpráv JSON.",
    "toggledownfall_description": "Přepíná počasí.",
    "tp_description": "Teleportuje entity (hráče, stvoření atd.).",
    "tp_notSameDimension": "Teleportace není možná, protože hráči nejsou ve stejné dimenzi",
    "tp_outOfWorld": "Entity nelze teleportovat mimo svět",
    "tp_permission": "Nemáte oprávnění použít tento příkaz za lomítkem.",
    "tp_safeTeleportFail": "Nelze teleportovat %1$s do %2$s, protože z oblasti nebyly odstraněny bloky.",
    "tp_far": "Nelze teleportovat %1$s do nenačtené oblasti v %2$s.",
    "tp_success": "Hráč %1$s byl teleportován na %2$s",
    "tp_successVictim": "Byli jste teleportováni na %1$s",
    "tp_success_coordinates": "Hráč %1$s byl teleportován na %2$s, %3$s, %4$s",
    "transferserver_description": "Přenese hráče na jiný server.",
    "transferserver_successful": "Přenesený hráč",
    "transferserver_invalid_port": "Neplatný port (0-65535)",
    "trigger_description": "Aktivuje spouštěč.",
    "trigger_disabled": "Spouštěč %1$s není povolen",
    "trigger_invalidMode": "Neplatný režim spouštěče %1$s",
    "trigger_invalidObjective": "Neplatný název spouštěče %1$s",
    "trigger_invalidPlayer": "Příkaz /trigger mohou používat pouze hráči",
    "trigger_success": "Spouštěč %1$s byl změněn s %2$s %3$s",
    "unban_failed": "Hráče %1$s nelze odblokovat",
    "unban_success": "Hráč %1$s byl odblokován",
    "unbanip_invalid": "Zadali jste neplatnou IP adresu",
    "unbanip_success": "IP adresa %1$s byla odblokována",
    "validategamelighting_description": "Ověřit osvětlení hry pro určitou oblast",
    "validategamelighting_checkRegionTooBig": "Oblast pro kontrolu osvětlení je příliš velká! (%1$d > %2$d)",
    "validategamelighting_outOfWorld": "Nelze zkontrolovat osvětlení mimo svět",
    "weather_clear": "Změna na jasné počasí",
    "weather_description": "Nastaví počasí.",
    "weather_disabled": "V této úrovni není povolena možnost Cyklus počasí.",
    "weather_query": "Stav počasí je: %s",
    "weather_query_clear": "jasno",
    "weather_query_rain": "déšť",
    "weather_query_thunder": "bouřka",
    "weather_rain": "Změna na deštivé počasí",
    "weather_thunder": "Změna na déšť a bouřku",
    "whitelist_add_failed": "%1$s nelze přidat na seznam povolených",
    "whitelist_add_success": "Položka %1$s byla přidána na seznam povolených",
    "whitelist_description": "Spravuje seznam povolených serveru.",
    "whitelist_disabled": "Seznam povolených vypnutý",
    "whitelist_enabled": "Seznam povolených zapnutý",
    "whitelist_list": "Počet hráčů na seznamu povolených: %1$d (z %2$d spatřených):",
    "whitelist_reloaded": "Seznam povolených byl znovu načten ze souboru.",
    "whitelist_remove_failed": "%1$s nelze odebrat ze seznamu povolených",
    "whitelist_remove_success": "Položka %1$s byla odebrána ze seznamu povolených",
    "world_age_description": "Změní nebo se zeptá na stáří světa (čas od vytvoření).",
    "world_age_added": "Přidáno %1$d ke stáří světa",
    "world_age_query": "Stáří světa je %d",
    "world_age_set": "Nastavit stáří světa na %1$d",
    "worldborder_center_success": "Střed okraje světa byl nastaven na %1$s,%2$s",
    "worldborder_damage_amount_success": "Síla poškození okraje světa byla změněna na %1$s na blok (z %2$s na blok)",
    "worldborder_damage_buffer_success": "Ochranná zóna poškození okraje světa byla změněna na %1$s bloků (z %2$s bloků)",
    "worldborder_get_success": "Okraj světa je aktuálně %1$s bloků široký",
    "worldborder_set_success": "Okraj světa byl změněn na %1$s bloků šířky (z %2$s bloků)",
    "worldborder_setSlowly_grow_success": "Okraj světa byl zvětšen na %1$s bloků šířky (z %2$s bloků) za %3$s s",
    "worldborder_setSlowly_shrink_success": "Okraj světa byl zmenšen na %1$s bloků šířky (z %2$s bloků) za %3$s s",
    "worldborder_warning_distance_success": "Upozornění na okraj světa bylo nastaveno na vzdálenost %1$s bloků (z %2$s bloků)",
    "worldborder_warning_time_success": "Upozornění na okraj světa bylo změněno na %1$s s (z %2$s s)",
    "worldbuilder_description": "Přepíná stav volajícího v editoru světa.",
    "worldbuilder_success": "Stav Editoru světa byl změněn na %1$s",
    "wsserver_description": "Pokusí se připojit k serveru soketu webu na uvedené adrese URL.",
    "wsserver_invalid_url": "Uvedená adresa URL serveru je neplatná",
    "wsserver_request_existing": "Aktuálně je spuštěn další požadavek na připojení",
    "wsserver_request_failed": "Nelze se připojit k serveru: %1$s",
    "wsserver_success": "Bylo navázáno připojení k serveru: %1$s",
    "xp_description": "Přidá nebo odebere hráči zkušenosti.",
    "xp_failure_widthdrawXp": "Hráč nemůže obdržet záporné zkušenostní body",
    "xp_success": "Hráči %2$s byly předány zkušenosti (%1$d)",
    "xp_success_levels": "Hráči %2$s byly předány úrovně (%1$d)",
    "xp_success_negative_levels": "Od hráče %2$s byly převzaty úrovně (%1$d)"
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
        "Kouzelné jablko"
    ],
    "armor_stand": [
        "Stojan na zbroj"
    ],
    "arrow": [
        "Šíp"
    ],
    "tipped_arrow": [
        "Šíp namočený v lektvaru"
    ],
    "banner": [
        "Černá vlajka",
        "Černá vlajka",
        "Červená vlajka",
        "Zelená vlajka",
        "Hnědá vlajka",
        "Modrá vlajka",
        "Fialová vlajka",
        "Azurová vlajka",
        "Světle šedá vlajka",
        "Šedá vlajka",
        "Růžová vlajka",
        "Světle zelená vlajka",
        "Žlutá vlajka",
        "Světle modrá vlajka",
        "Purpurová vlajka",
        "Oranžová vlajka",
        "Bílá vlajka"
    ],
    "bed": [
        "Postel",
        "Bílá postel",
        "Oranžová postel",
        "Purpurová postel",
        "Světle modrá postel",
        "Žlutá postel",
        "Světle zelená postel",
        "Růžová postel",
        "Šedá postel",
        "Světle šedá postel",
        "Azurová postel",
        "Fialová postel",
        "Modrá postel",
        "Hnědá postel",
        "Zelená postel",
        "Červená postel",
        "Černá postel"
    ],
    "bell": [
        "Zvon"
    ],
    "steak": [
        "Steak"
    ],
    "beef": [
        "Syrové hovězí"
    ],
    "beetroot": [
        "Řepa"
    ],
    "beetroot_soup": [
        "Řepná polévka"
    ],
    "blaze_powder": [
        "Ohnivý prášek"
    ],
    "blaze_rod": [
        "Ohnivý prut"
    ],
    "boat": [
        "Dubový člun",
        "Dubový člun",
        "Smrkový člun",
        "Březový člun",
        "Sekvojový člun",
        "Akáciový člun",
        "Člun z tmavého dubu"
    ],
    "bone": [
        "Kost"
    ],
    "book": [
        "Kniha"
    ],
    "chainmail_boots": [
        "Kroužkové boty"
    ],
    "leather_boots": [
        "Kožené boty"
    ],
    "diamond_boots": [
        "Diamantové boty"
    ],
    "golden_boots": [
        "Zlaté boty"
    ],
    "iron_boots": [
        "Železné boty"
    ],
    "bow": [
        "Luk"
    ],
    "bowl": [
        "Miska"
    ],
    "bread": [
        "Chléb"
    ],
    "brewing_stand": [
        "Varný stojan"
    ],
    "brick": [
        "Cihla"
    ],
    "bucket": [
        "Kbelík"
    ],
    "bucketLava": [
        "Kbelík lávy"
    ],
    "bucketWater": [
        "Kbelík vody"
    ],
    "bucketFish": [
        "Kbelík tresek"
    ],
    "bucketSalmon": [
        "Kbelík lososů"
    ],
    "bucketTropical": [
        "Kbelík tropických ryb"
    ],
    "bucketPuffer": [
        "Kbelík ryb fugu"
    ],
    "bucketCustomFish": [
        "Kbelík"
    ],
    "tropicalColorWhite": [
        "Bílá"
    ],
    "tropicalColorOrange": [
        "Oranžová"
    ],
    "tropicalColorMagenta": [
        "Purpurová"
    ],
    "tropicalColorSky": [
        "Nebesky modrá"
    ],
    "tropicalColorYellow": [
        "Žlutá"
    ],
    "tropicalColorLime": [
        "Světle zelená"
    ],
    "tropicalColorRose": [
        "Růžová"
    ],
    "tropicalColorGray": [
        "Šedá"
    ],
    "tropicalColorSilver": [
        "Stříbrná"
    ],
    "tropicalColorTeal": [
        "Modrozelená"
    ],
    "tropicalColorPlum": [
        "Švestkově modrá"
    ],
    "tropicalColorBlue": [
        "Modrá"
    ],
    "tropicalColorBrown": [
        "Hnědá"
    ],
    "tropicalColorGreen": [
        "Zelená"
    ],
    "tropicalColorRed": [
        "Červená"
    ],
    "tropicalBodyKobSingle": [
        "%1$s Voduška"
    ],
    "tropicalBodySunstreakSingle": [
        "%1$s Sluněnka"
    ],
    "tropicalBodySnooperSingle": [
        "%1$s Slídilka"
    ],
    "tropicalBodyDasherSingle": [
        "%1$s Rychlík"
    ],
    "tropicalBodyBrinelySingle": [
        "%1$s Slaneček"
    ],
    "tropicalBodySpottySingle": [
        "%1$s Flekatka"
    ],
    "tropicalBodyFlopperSingle": [
        "%1$s Skokan"
    ],
    "tropicalBodyStripeySingle": [
        "%1$s Proužkovec"
    ],
    "tropicalBodyGlitterSingle": [
        "%1$s Třpytivka"
    ],
    "tropicalBodyBlockfishSingle": [
        "%1$s Blokovka"
    ],
    "tropicalBodyBettySingle": [
        "%1$s Betty"
    ],
    "tropicalBodyClayfishSingle": [
        "%1$s Jílovec"
    ],
    "tropicalBodyKobMulti": [
        "%1$s-%2$s Voduška"
    ],
    "tropicalBodySunstreakMulti": [
        "%1$s-%2$s Sluněnka"
    ],
    "tropicalBodySnooperMulti": [
        "%1$s-%2$s Slídilka"
    ],
    "tropicalBodyDasherMulti": [
        "%1$s-%2$s Rychlík"
    ],
    "tropicalBodyBrinelyMulti": [
        "%1$s-%2$s Slaneček"
    ],
    "tropicalBodySpottyMulti": [
        "%1$s-%2$s Flekatka"
    ],
    "tropicalBodyFlopperMulti": [
        "%1$s-%2$s Skokan"
    ],
    "tropicalBodyStripeyMulti": [
        "%1$s-%2$s Proužkovec"
    ],
    "tropicalBodyGlitterMulti": [
        "%1$s-%2$s Třpytivka"
    ],
    "tropicalBodyBlockfishMulti": [
        "%1$s-%2$s Blokovka"
    ],
    "tropicalBodyBettyMulti": [
        "%1$s-%2$s Betty"
    ],
    "tropicalBodyClayfishMulti": [
        "%1$s-%2$s Jílovec"
    ],
    "tropicalSchoolAnemone": [
        "Sasanka"
    ],
    "tropicalSchoolBlackTang": [
        "Bodlok černý"
    ],
    "tropicalSchoolBlueDory": [
        "Bodlok modrý"
    ],
    "tropicalSchoolButterflyFish": [
        "Klipka"
    ],
    "tropicalSchoolCichlid": [
        "Vrubozubec"
    ],
    "tropicalSchoolClownfish": [
        "Klaun"
    ],
    "tropicalSchoolCottonCandyBetta": [
        "Bojovnice pestrá"
    ],
    "tropicalSchoolDottyback": [
        "Sapínovec"
    ],
    "tropicalSchoolEmperorRedSnapper": [
        "Chňapal červený"
    ],
    "tropicalSchoolGoatfish": [
        "Parmice"
    ],
    "tropicalSchoolMoorishIdol": [
        "Bičonoš zobanovitý"
    ],
    "tropicalSchoolOrnateButterfly": [
        "Klipka žlutopruhá"
    ],
    "tropicalSchoolParrotfish": [
        "Ploskozubec"
    ],
    "tropicalSchoolQueenAngelFish": [
        "Pomec řasnatý"
    ],
    "tropicalSchoolRedCichlid": [
        "Vrubozuvec paví"
    ],
    "tropicalSchoolRedLippedBlenny": [
        "Slizoun atlantský"
    ],
    "tropicalSchoolRedSnapper": [
        "Chňapal"
    ],
    "tropicalSchoolThreadfin": [
        "Smuhovec"
    ],
    "tropicalSchoolTomatoClown": [
        "Klaun uzdičkatý"
    ],
    "tropicalSchoolTriggerfish": [
        "Osténec"
    ],
    "tropicalSchoolYellowTang": [
        "Bodlok žlutý"
    ],
    "tropicalSchoolYellowtailParrot": [
        "Ploskozubec východoindický"
    ],
    "cake": [
        "Dort"
    ],
    "camera": [
        "Fotoaparát"
    ],
    "golden_carrot": [
        "Zlatá mrkev"
    ],
    "carrotOnAStick": [
        "Zavěšená mrkev"
    ],
    "warped_fungus_on_a_stick": [
        "Pokroucený hřib na klacíku"
    ],
    "carrot": [
        "Mrkev"
    ],
    "cauldron": [
        "Kotlík"
    ],
    "coal": [
        "Uhlí",
        null,
        "Dřevěné uhlí"
    ],
    "chainmail_chestplate": [
        "Kroužkový pancíř"
    ],
    "leather_chestplate": [
        "Kožená tunika"
    ],
    "diamond_chestplate": [
        "Diamantový pancíř"
    ],
    "golden_chestplate": [
        "Zlatý pancíř"
    ],
    "iron_chestplate": [
        "Železný pancíř"
    ],
    "chorus_fruit": [
        "Ovoce chorusovníku"
    ],
    "chorus_fruit_popped": [
        "Prasklé ovoce chorusovníku"
    ],
    "cooked_beef": [
        "Vařené hovězí"
    ],
    "cooked_chicken": [
        "Vařená slepice"
    ],
    "cooked_porkchop": [
        "Vařená kotleta"
    ],
    "chicken": [
        "Syrová slepice"
    ],
    "clay_ball": [
        "Jíl"
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
        "Magnetický kompas"
    ],
    "cookie": [
        "Sušenka"
    ],
    "crossbow": [
        "Samostříl"
    ],
    "diamond": [
        "Diamant"
    ],
    "repeater": [
        "Ruditový opakovač"
    ],
    "acacia_door": [
        "Akáciové dveře"
    ],
    "birch_door": [
        "Březové dveře"
    ],
    "dark_oak_door": [
        "Dveře z tmavého dubu"
    ],
    "iron_door": [
        "Železné dveře"
    ],
    "jungle_door": [
        "Sekvojové dveře"
    ],
    "wooden_door": [
        "Dubové dveře"
    ],
    "spruce_door": [
        "Smrkové dveře"
    ],
    "crimson_door": [
        "Karmínové dveře"
    ],
    "warped_door": [
        "Pokroucené dveře"
    ],
    "dragon_breath": [
        "Dračí dech"
    ],
    "dye": [
        "Inkoustový váček",
        "Inkoustový váček",
        "Červené barvivo",
        "Zelené barvivo",
        "Kakaové boby",
        "Lazurit",
        "Fialové barvivo",
        "Azurové barvivo",
        "Světle šedé barvivo",
        "Šedé barvivo",
        "Růžové barvivo",
        "Světle zelené barvivo",
        "Žluté barvivo",
        "Světle modré barvivo",
        "Purpurové barvivo",
        "Oranžové barvivo",
        "Kostní moučka",
        "Černé barvivo",
        "Hnědé barvivo",
        "Modré barvivo",
        "Bílé barvivo"
    ],
    "egg": [
        "Vejce"
    ],
    "elytra": [
        "Krovky"
    ],
    "emerald": [
        "Smaragd"
    ],
    "emptyMap": [
        "Prázdná mapa"
    ],
    "emptyLocatorMap": [
        "Prázdná mapa lokátoru"
    ],
    "emptyPotion": [
        "Lahvička s vodou"
    ],
    "enchanted_book": [
        "Kouzelná kniha"
    ],
    "end_crystal": [
        "Endový krystal"
    ],
    "end_rod": [
        "Endový prut"
    ],
    "ender_eye": [
        "Oko z enderu"
    ],
    "ender_pearl": [
        "Perla z enderu"
    ],
    "experience_bottle": [
        "Čarovná láhev"
    ],
    "feather": [
        "Pírko"
    ],
    "fermented_spider_eye": [
        "Fermentované pavoučí oko"
    ],
    "fireball": [
        "Ohnivý výboj"
    ],
    "fireworks": [
        "Ohňostrojová raketa"
    ],
    "fireworksCharge": [
        "Ohňostrojová hvězda"
    ],
    "clownfish": [
        "Tropická ryba"
    ],
    "cooked_fish": [
        "Vařená treska"
    ],
    "fish": [
        "Syrová treska"
    ],
    "pufferfish": [
        "Ryba fugu"
    ],
    "cooked_salmon": [
        "Vařený losos"
    ],
    "salmon": [
        "Syrový losos"
    ],
    "fishing_rod": [
        "Rybářský prut"
    ],
    "flint": [
        "Pazourek"
    ],
    "flint_and_steel": [
        "Křesadlo"
    ],
    "flower_pot": [
        "Květináč"
    ],
    "frame": [
        "Rám pro předmět"
    ],
    "ghast_tear": [
        "Slza ďasa"
    ],
    "glass_bottle": [
        "Skleněná lahvička"
    ],
    "gold_nugget": [
        "Zlatý nuget"
    ],
    "iron_nugget": [
        "Železný nuget"
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
        "Dřevěná sekera"
    ],
    "chainmail_helmet": [
        "Kroužková přilba"
    ],
    "leather_helmet": [
        "Kožená čapka"
    ],
    "diamond_helmet": [
        "Diamantová přilba"
    ],
    "golden_helmet": [
        "Zlatá přilba"
    ],
    "iron_helmet": [
        "Železná přilba"
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
        "Dřevěná motyka"
    ],
    "honey_bottle": [
        "Láhev medu"
    ],
    "honeycomb": [
        "Medová plástev"
    ],
    "horsearmordiamond": [
        "Diamantová výzbroj koně"
    ],
    "horsearmorgold": [
        "Zlatá výzbroj koně"
    ],
    "horsearmoriron": [
        "Železná výzbroj koně"
    ],
    "horsearmorleather": [
        "Kožená výzbroj koně"
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
        "Netheritový krumpáč"
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
        "Netheritové boty"
    ],
    "netherite_leggings": [
        "Netheritové nohavice"
    ],
    "netherite_chestplate": [
        "Netheritový pancíř"
    ],
    "netherite_helmet": [
        "Netheritová přilba"
    ],
    "lead": [
        "Vodítko"
    ],
    "leather": [
        "Kůže"
    ],
    "leaves": [
        "Listí",
        "Dubové listí",
        "Smrkové jehličí",
        "Březové listí",
        "Sekvojové listí",
        "Akáciové listí",
        "Listí tmavého dubu"
    ],
    "chainmail_leggings": [
        "Kroužkové nohavice"
    ],
    "leather_leggings": [
        "Kožené kalhoty"
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
        "Ulita loděnky"
    ],
    "heart_of_the_sea": [
        "Srdce moře"
    ],
    "magma_cream": [
        "Lávová pěna"
    ],
    "map": [
        "Mapa"
    ],
    "melon": [
        "Meloun"
    ],
    "milk": [
        "Mléko"
    ],
    "minecart": [
        "Vozík"
    ],
    "chest_minecart": [
        "Vozík s truhlou"
    ],
    "command_block_minecart": [
        "Vozík s příkazovým blokem"
    ],
    "minecartFurnace": [
        "Vozík s pecí"
    ],
    "hopper_minecart": [
        "Vozík s násypkou"
    ],
    "tnt_minecart": [
        "Vozík s TNT"
    ],
    "trident": [
        "Trojzubec"
    ],
    "mushroom_stew": [
        "Houbový guláš"
    ],
    "muttoncooked": [
        "Vařené skopové"
    ],
    "muttonraw": [
        "Syrové skopové"
    ],
    "name_tag": [
        "Štítek se jménem"
    ],
    "netherbrick": [
        "Netheritová cihla"
    ],
    "quartz": [
        "Netheritový křemen"
    ],
    "nether_wart": [
        "Netheritový bradavičník"
    ],
    "netherStar": [
        "Netheritová hvězda"
    ],
    "painting": [
        "Obraz"
    ],
    "paper": [
        "Papír"
    ],
    "diamond_pickaxe": [
        "Diamantový krumpáč"
    ],
    "golden_pickaxe": [
        "Zlatý krumpáč"
    ],
    "iron_pickaxe": [
        "Železný krumpáč"
    ],
    "stone_pickaxe": [
        "Kamenný krumpáč"
    ],
    "wooden_pickaxe": [
        "Dřevěný krumpáč"
    ],
    "porkchop_cooked": [
        "Vařená kotleta"
    ],
    "porkchop": [
        "Syrová kotleta"
    ],
    "portfolio": [
        "Portfolio"
    ],
    "potato": [
        "Brambora"
    ],
    "baked_potato": [
        "Pečená brambora"
    ],
    "poisonous_potato": [
        "Jedovatá brambora"
    ],
    "potion": [
        "Lektvar"
    ],
    "prismarine_crystals": [
        "Prismarinové krystaly"
    ],
    "prismarine_shard": [
        "Prismarinový střep"
    ],
    "pumpkin_pie": [
        "Dýňový koláč"
    ],
    "cooked_rabbit": [
        "Vařený králík"
    ],
    "rabbit_foot": [
        "Králičí packa"
    ],
    "rabbit_hide": [
        "Králičí kožka"
    ],
    "rabbit": [
        "Syrový králík"
    ],
    "rabbit_stew": [
        "Králičí guláš"
    ],
    "record": [
        "Hudební disk"
    ],
    "redstone": [
        "Rudit"
    ],
    "reeds": [
        "Cukrová třtina"
    ],
    "kelp": [
        "Chaluha"
    ],
    "dried_kelp": [
        "Vysušená chaluha"
    ],
    "rotten_flesh": [
        "Shnilé maso"
    ],
    "ruby": [
        "Rubín"
    ],
    "saddle": [
        "Sedlo"
    ],
    "wheat_seeds": [
        "Semínka"
    ],
    "beetroot_seeds": [
        "Semínka řepy"
    ],
    "melon_seeds": [
        "Melounová semínka"
    ],
    "pumpkin_seeds": [
        "Dýňová semínka"
    ],
    "shears": [
        "Nůžky"
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
        "Dřevěná lopata"
    ],
    "sign": [
        "Dubová cedule"
    ],
    "spruce_sign": [
        "Smrková cedule"
    ],
    "birch_sign": [
        "Březová cedule"
    ],
    "jungle_sign": [
        "Sekvojová cedule"
    ],
    "acacia_sign": [
        "Akáciová cedule"
    ],
    "darkoak_sign": [
        "Cedule z tmavého dubu"
    ],
    "crimson_sign": [
        "Karmínová cedule"
    ],
    "warped_sign": [
        "Pokroucená cedule"
    ],
    "skull": [
        "Lebka kostlivce",
        "Lebka kostlivce",
        "Lebka kostry pakostnice",
        "Hlava zombie",
        "Hlava",
        "Hlava plíživce",
        "Hlava draka"
    ],
    "slime_ball": [
        "Slizová koule"
    ],
    "snowball": [
        "Sněhová koule"
    ],
    "speckled_melon": [
        "Třpytivý meloun"
    ],
    "spider_eye": [
        "Pavoučí oko"
    ],
    "stick": [
        "Klacík"
    ],
    "string": [
        "Vlákno"
    ],
    "sugar": [
        "Cukr"
    ],
    "gunpowder": [
        "Střelný prach"
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
        "Dřevěný meč"
    ],
    "wheat": [
        "Pšenice"
    ],
    "writable_book": [
        "Kniha a brk"
    ],
    "written_book": [
        "Psaná kniha"
    ],
    "glowstone_dust": [
        "Světlitový prášek"
    ],
    "shield": [
        "Štít"
    ],
    "shulker_shell": [
        "Krunýř krabicovce"
    ],
    "totem": [
        "Totem nesmrtelnosti"
    ],
    "turtle_helmet": [
        "Želví krunýř"
    ],
    "turtle_shell_piece": [
        "Destička krunýře"
    ],
    "phantom_membrane": [
        "Membrána fantoma"
    ],
    "sweet_berries": [
        "Sladké bobule"
    ],
    "suspicious_stew": [
        "Podezřelý guláš"
    ],
    "banner_pattern": [
        "Vzor na vlajce"
    ],
    "acaciaFence": [
        "Akáciový plot"
    ],
    "acacia_fence_gate": [
        "Akáciová branka"
    ],
    "activator_rail": [
        "Aktivační kolejnice"
    ],
    "allow": [
        "Povolit"
    ],
    "deny": [
        "Odepřít"
    ],
    "border_block": [
        "Okraj"
    ],
    "anvil": [
        "Kovadlina",
        "Kovadlina",
        null,
        null,
        null,
        "Mírně poškozená kovadlina",
        null,
        null,
        null,
        "Velmi poškozená kovadlina"
    ],
    "barrier": [
        "Bariéra"
    ],
    "beacon": [
        "Maják"
    ],
    "beehive": [
        "Včelí úl"
    ],
    "bee_nest": [
        "Včelí hnízdo"
    ],
    "target": [
        "Cíl"
    ],
    "bedrock": [
        "Základní hornina"
    ],
    "conduit": [
        "Zářič"
    ],
    "invisibleBedrock": [
        "Neviditelná základní hornina"
    ],
    "birchFence": [
        "Březový plot"
    ],
    "birch_fence_gate": [
        "Březová branka"
    ],
    "blast_furnace": [
        "Tavicí pec"
    ],
    "bone_block": [
        "Kostěný blok"
    ],
    "coal_block": [
        "Uhelný blok"
    ],
    "diamond_block": [
        "Diamantový blok"
    ],
    "emerald_block": [
        "Smaragdový blok"
    ],
    "gold_block": [
        "Zlatý blok"
    ],
    "iron_block": [
        "Železný blok"
    ],
    "lapis_block": [
        "Lazuritový blok"
    ],
    "redstone_block": [
        "Ruditový blok"
    ],
    "bookshelf": [
        "Knihovna"
    ],
    "brick_block": [
        "Cihlový blok"
    ],
    "brown_mushroom": [
        "Hnědá houba"
    ],
    "wooden_button": [
        "Dubové tlačítko"
    ],
    "acacia_button": [
        "Akáciové tlačítko"
    ],
    "birch_button": [
        "Březové tlačítko"
    ],
    "dark_oak_button": [
        "Tlačítko z tmavého dubu"
    ],
    "jungle_button": [
        "Tlačítko z dřeva z džungle"
    ],
    "spruce_button": [
        "Smrkové tlačítko"
    ],
    "stone_button": [
        "Kamenné tlačítko"
    ],
    "cactus": [
        "Kaktus"
    ],
    "dried_kelp_block": [
        "Blok z vysušených chaluh"
    ],
    "carved_pumpkin": [
        "Vyřezávaná dýně"
    ],
    "chest": [
        "Truhla"
    ],
    "ender_chest": [
        "Truhla z enderu"
    ],
    "jigsaw": [
        "Skládací blok"
    ],
    "honey_block": [
        "Medový blok"
    ],
    "honeycomb_block": [
        "Blok medové plástve"
    ],
    "lodestone": [
        "Magnetovec"
    ],
    "nether_sprouts": [
        "Netheritové výhonky"
    ],
    "crimson_stem": [
        "Karmínový stonek"
    ],
    "warped_stem": [
        "Pokroucený stonek"
    ],
    "stripped_crimson_stem": [
        "Holý karmínový stonek"
    ],
    "stripped_warped_stem": [
        "Holý pokroucený stonek"
    ],
    "crimson_hyphae": [
        "Karmínové podhoubí"
    ],
    "warped_hyphae": [
        "Pokroucené podhoubí"
    ],
    "stripped_crimson_hyphae": [
        "Holé karmínové podhoubí"
    ],
    "stripped_warped_hyphae": [
        "Holé pokroucené podhoubí"
    ],
    "crimson_planks": [
        "Karmínová prkna"
    ],
    "warped_planks": [
        "Pokroucená prkna"
    ],
    "crimson_trapdoor": [
        "Karmínové padací dveře"
    ],
    "warped_trapdoor": [
        "Pokroucené padací dveře"
    ],
    "crimson_standing_sign": [
        "Karmínová cedule"
    ],
    "warped_standing_sign": [
        "Pokroucená cedule"
    ],
    "crimson_wall_sign": [
        "Karmínová cedule"
    ],
    "warped_wall_sign": [
        "Pokroucená cedule"
    ],
    "crimson_stairs": [
        "Karmínové schody"
    ],
    "warped_stairs": [
        "Pokroucené schody"
    ],
    "crimson_fence": [
        "Karmínový plot"
    ],
    "warped_fence": [
        "Pokroucený plot"
    ],
    "crimson_fence_gate": [
        "Karmínová branka"
    ],
    "warped_fence_gate": [
        "Pokroucená branka"
    ],
    "crimson_button": [
        "Karmínové tlačítko"
    ],
    "warped_button": [
        "Pokroucené tlačítko"
    ],
    "crimson_pressure_plate": [
        "Karmínová nášlapná deska"
    ],
    "warped_pressure_plate": [
        "Pokroucená nášlapná deska"
    ],
    "crimson_slab": [
        "Karmínový panel"
    ],
    "warped_slab": [
        "Pokroucený panel"
    ],
    "crimson_double_slab": [
        "Karmínový panel"
    ],
    "warped_double_slab": [
        "Pokroucený panel"
    ],
    "shroomlight": [
        "Houbozář"
    ],
    "crimson_nylium": [
        "Karmínové nylium"
    ],
    "warped_nylium": [
        "Pokroucené nylium"
    ],
    "basalt": [
        "Čedič"
    ],
    "polished_basalt": [
        "Leštěný čedič"
    ],
    "blackstone": [
        "Černovec"
    ],
    "polished_blackstone_bricks": [
        "Leštěné černovcové cihly"
    ],
    "cracked_polished_blackstone_bricks": [
        "Popraskané leštěné černovcové cihly"
    ],
    "polished_blackstone_brick_stairs": [
        "Schody z leštěných černovcových cihel"
    ],
    "blackstone_stairs": [
        "Černovcové schody"
    ],
    "blackstone_wall": [
        "Černovcová zeď"
    ],
    "polished_blackstone_brick_wall": [
        "Zeď z leštěných černovcových cihel"
    ],
    "chiseled_polished_blackstone": [
        "Opracovaný leštěný černovec"
    ],
    "gilded_blackstone": [
        "Pozlacený černovec"
    ],
    "blackstone_slab": [
        "Černovcový panel"
    ],
    "polished_blackstone_brick_slab": [
        "Panel z leštěných černovcových cihel"
    ],
    "chain": [
        "Řetěz"
    ],
    "soul_soil": [
        "Spektrální půda"
    ],
    "soul_fire": [
        "Spektrální oheň"
    ],
    "polished_blackstone": [
        "Leštěný černovec"
    ],
    "polished_blackstone_stairs": [
        "Schody z leštěného černovce"
    ],
    "polished_blackstone_slab": [
        "Panel z leštěného černovce"
    ],
    "polished_blackstone_pressure_plate": [
        "Nášlapná deska z leštěného černovce"
    ],
    "polished_blackstone_button": [
        "Tlačítko z leštěného černovce"
    ],
    "polished_blackstone_wall": [
        "Zeď z leštěného černovce"
    ],
    "soul_campfire": [
        "Spektrální táborák"
    ],
    "chiseled_nether_bricks": [
        "Opracované netheritové cihly"
    ],
    "cracked_nether_bricks": [
        "Popraskané netheritové cihly"
    ],
    "quartz_bricks": [
        "Křemenné cihly"
    ],
    "trapped_chest": [
        "Truhla s pastí"
    ],
    "shulkerBoxWhite": [
        "Bílá krabice z krabicovce"
    ],
    "shulkerBoxOrange": [
        "Oranžová krabice z krabicovce"
    ],
    "shulkerBoxMagenta": [
        "Purpurová krabice z krabicovce"
    ],
    "shulkerBoxLightBlue": [
        "Světle modrá krabice z krabicovce"
    ],
    "shulkerBoxYellow": [
        "Žlutá krabice z krabicovce"
    ],
    "shulkerBoxLime": [
        "Světle zelená krabice z krabicovce"
    ],
    "shulkerBoxPink": [
        "Růžová krabice z krabicovce"
    ],
    "shulkerBoxGray": [
        "Šedá krabice z krabicovce"
    ],
    "shulkerBoxSilver": [
        "Světle šedá krabice z krabicovce"
    ],
    "shulkerBoxCyan": [
        "Azurová krabice z krabicovce"
    ],
    "shulkerBoxPurple": [
        "Fialová krabice z krabicovce"
    ],
    "shulkerBoxBlue": [
        "Modrá krabice z krabicovce"
    ],
    "shulkerBoxBrown": [
        "Hnědá krabice z krabicovce"
    ],
    "shulkerBoxGreen": [
        "Zelená krabice z krabicovce"
    ],
    "shulkerBoxRed": [
        "Červená krabice z krabicovce"
    ],
    "shulkerBoxBlack": [
        "Černá krabice z krabicovce"
    ],
    "shulkerBox": [
        "Krabice z krabicovce"
    ],
    "chorus_flower": [
        "Chorusový květ"
    ],
    "chorus_plant": [
        "Chorusovník"
    ],
    "stained_glass": [
        "Bílé sklo",
        "Bílé sklo",
        "Oranžové sklo",
        "Purpurové sklo",
        "Světle modré sklo",
        "Žluté sklo",
        "Světle zelené sklo",
        "Růžové sklo",
        "Šedé sklo",
        "Světle šedé sklo",
        "Azurové sklo",
        "Fialové sklo",
        "Modré sklo",
        "Hnědé sklo",
        "Zelené sklo",
        "Červené sklo",
        "Černé sklo"
    ],
    "stained_glass_pane": [
        "Bílá skleněná tabulka",
        "Bílá skleněná tabulka",
        "Oranžová skleněná tabulka",
        "Purpurová skleněná tabulka",
        "Světle modrá skleněná tabulka",
        "Žlutá skleněná tabulka",
        "Světle zelená skleněná tabulka",
        "Růžová skleněná tabulka",
        "Šedá skleněná tabulka",
        "Světle šedá skleněná tabulka",
        "Azurová skleněná tabulka",
        "Fialová skleněná tabulka",
        "Modrá skleněná tabulka",
        "Hnědá skleněná tabulka",
        "Zelená skleněná tabulka",
        "Červená skleněná tabulka",
        "Černá skleněná tabulka"
    ],
    "clay": [
        "Jílový blok"
    ],
    "hardened_clay": [
        "Terakota"
    ],
    "stained_hardened_clay": [
        "Terakota",
        "Bílá terakota",
        "Oranžová terakota",
        "Purpurová terakota",
        "Světle modrá terakota",
        "Žlutá terakota",
        "Světle zelená terakota",
        "Růžová terakota",
        "Šedá terakota",
        "Světle šedá terakota",
        "Azurová terakota",
        "Fialová terakota",
        "Modrá terakota",
        "Hnědá terakota",
        "Zelená terakota",
        "Červená terakota",
        "Černá terakota"
    ],
    "structure_block": [
        "Blok budovy"
    ],
    "structure_void": [
        "Prázdná stavba"
    ],
    "wool": [
        "Vlna",
        "Bílá vlna",
        "Oranžová vlna",
        "Purpurová vlna",
        "Světle modrá vlna",
        "Žlutá vlna",
        "Světle zelená vlna",
        "Růžová vlna",
        "Šedá vlna",
        "Světle šedá vlna",
        "Azurová vlna",
        "Fialová vlna",
        "Modrá vlna",
        "Hnědá vlna",
        "Zelená vlna",
        "Červená vlna",
        "Černá vlna"
    ],
    "cobblestone_wall": [
        "Zeď z kamenných kostek",
        "Zeď z kamenných kostek",
        "Mechem porostlá zeď z kamenných kostek",
        "Žulová zeď",
        "Dioritová zeď",
        "Andezitová zeď",
        "Pískovcová zeď",
        "Cihlová zeď",
        "Zeď z kamenných cihel",
        "Mechem porostlá zeď z kamenných cihel",
        "Zeď z enderitových cihel",
        "Zeď z netheritových cihel",
        "Prismarinová zeď",
        "Zeď z červeného pískovce",
        "Zeď z červených netheritových cihel"
    ],
    "cocoa": [
        "Kakao"
    ],
    "command_block": [
        "Příkazový blok"
    ],
    "composter": [
        "Kompostér"
    ],
    "light_block": [
        "Světelný blok"
    ],
    "repeating_command_block": [
        "Opakování příkazového bloku"
    ],
    "chain_command_block": [
        "Řetěz příkazového bloku"
    ],
    "darkOakFence": [
        "Plot z tmavého dubu"
    ],
    "dark_oak_fence_gate": [
        "Branka z tmavého dubu"
    ],
    "daylight_detector": [
        "Snímač denního světla"
    ],
    "deadbush": [
        "Mrtvý keř"
    ],
    "detector_rail": [
        "Spínací kolejnice"
    ],
    "dirt": [
        "Hlína",
        "Hlína",
        "Hrubá hlína"
    ],
    "podzol": [
        "Podzol"
    ],
    "purpur_block": [
        "Purpurový blok",
        "Purpurový blok",
        "Opracovaný purpurový",
        "Purpurový pilíř"
    ],
    "dispenser": [
        "Dávkovač"
    ],
    "doorWood": [
        "Dřevěné dveře"
    ],
    "double_plant": [
        "Rostlina",
        "Slunečnice",
        "Šeřík",
        "Velmi vysoká tráva",
        "Velká kapradina",
        "Růžový keř",
        "Pivoňka"
    ],
    "dragon_egg": [
        "Dračí vejce"
    ],
    "dropper": [
        "Podavač"
    ],
    "enchanting_table": [
        "Zaklínací stůl"
    ],
    "enderChest": [
        "Truhla z enderu"
    ],
    "end_portal_frame": [
        "Portál do endu"
    ],
    "farmland": [
        "Pole"
    ],
    "fletching_table": [
        "Stůl na výrobu šípů"
    ],
    "fence": [
        "Dubový plot"
    ],
    "fence_gate": [
        "Dubová branka"
    ],
    "iron_bars": [
        "Železné mříže"
    ],
    "fire": [
        "Oheň"
    ],
    "yellow_flower": [
        "Květina",
        "Pampeliška"
    ],
    "red_flower": [
        "Květina",
        "Mák",
        "Modrá orchidej",
        "Česnek",
        "Blankytná chrpa",
        "Červený tulipán",
        "Oranžový tulipán",
        "Bílý tulipán",
        "Růžový tulipán",
        "Kopretina bílá",
        "Chrpa",
        "Konvalinka"
    ],
    "wither_rose": [
        "Růže pakostnice"
    ],
    "furnace": [
        "Pec"
    ],
    "glass": [
        "Sklo"
    ],
    "golden_rail": [
        "Napájená kolejnice"
    ],
    "grass": [
        "Blok trávy"
    ],
    "grass_path": [
        "Travnatá cesta"
    ],
    "gravel": [
        "Štěrk"
    ],
    "hay_block": [
        "Balík sena"
    ],
    "netherrack": [
        "Netherrack"
    ],
    "soul_sand": [
        "Tekutý písek"
    ],
    "hopper": [
        "Násypka"
    ],
    "ice": [
        "Led"
    ],
    "packed_ice": [
        "Balený led"
    ],
    "blue_ice": [
        "Modrý led"
    ],
    "iron_trapdoor": [
        "Železné padací dveře"
    ],
    "jukebox": [
        "Hrací skříň"
    ],
    "jungleFence": [
        "Sekvojový plot"
    ],
    "jungle_fence_gate": [
        "Sekvojová branka"
    ],
    "ladder": [
        "Žebřík"
    ],
    "flowing_lava": [
        "Láva"
    ],
    "leaves2": [
        "Akáciové listí",
        "Akáciové listí",
        "Listí tmavého dubu"
    ],
    "lever": [
        "Páka"
    ],
    "glowstone": [
        "Zářivý kámen"
    ],
    "lit_pumpkin": [
        "Svítící dýně"
    ],
    "lockedchest": [
        "Zamčená truhla"
    ],
    "log2": [
        "Akáciové poleno",
        "Akáciové poleno",
        "Poleno tmavého dubu"
    ],
    "log": [
        "Poleno",
        "Dubové poleno",
        "Smrkové poleno",
        "Březové poleno",
        "Sekvojové poleno"
    ],
    "magma": [
        "Lávový blok"
    ],
    "melon_block": [
        "Meloun"
    ],
    "mob_spawner": [
        "Líheň nestvůr"
    ],
    "monster_egg": [
        "Kámen ukrývající rybenku",
        "Kámen ukrývající rybenku",
        "Kamenné kostky ukrývající rybenku",
        "Kamenná cihla ukrývající rybenku",
        "Mechem porostlá kamenná cihla ukrývající rybenku",
        "Popraskaná kamenná cihla ukrývající rybenku",
        "Opracovaná kamenná cihla ukrývající rybenku"
    ],
    "mushroom": [
        "Houba"
    ],
    "noteblock": [
        "Hudební blok"
    ],
    "mycelium": [
        "Podhoubí"
    ],
    "nether_brick": [
        "Blok z netheritových cihel"
    ],
    "red_nether_brick": [
        "Červená netheritová cihla"
    ],
    "nether_brick_fence": [
        "Plot z netheritových cihel"
    ],
    "quartz_ore": [
        "Netheritová křemenná ruda"
    ],
    "netherreactor": [
        "Jádro netheritového reaktoru"
    ],
    "nether_wart_block": [
        "Blok z netheritového bradavičníku"
    ],
    "warped_wart_block": [
        "Blok pokrouceného bradavičníku"
    ],
    "unlit_redstone_torch": [
        "Ruditová louč"
    ],
    "redstone_torch": [
        "Ruditová louč"
    ],
    "soul_torch": [
        "Spektrální pochodeň"
    ],
    "obsidian": [
        "Obsidián"
    ],
    "coal_ore": [
        "Uhelná ruda"
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
        "Lazuritová ruda"
    ],
    "redstone_ore": [
        "Ruditová ruda"
    ],
    "oreRuby": [
        "Rubínová ruda"
    ],
    "observer": [
        "Pozorovatel"
    ],
    "piston": [
        "Píst"
    ],
    "sticky_piston": [
        "Lepivý píst"
    ],
    "portal": [
        "Portál"
    ],
    "potatoes": [
        "Brambory"
    ],
    "stone_pressure_plate": [
        "Kamenná nášlapná deska"
    ],
    "wooden_pressure_plate": [
        "Dubová nášlapná deska"
    ],
    "acacia_pressure_plate": [
        "Akáciová nášlapná deska"
    ],
    "birch_pressure_plate": [
        "Březová nášlapná deska"
    ],
    "dark_oak_pressure_plate": [
        "Nášlapná deska z tmavého dubu"
    ],
    "jungle_pressure_plate": [
        "Nášlapná deska z dřeva z džungle"
    ],
    "spruce_pressure_plate": [
        "Smrková nášlapná deska"
    ],
    "prismarine": [
        "Prismarin",
        "Prismarin",
        "Prismarinové cihly",
        "Tmavý prismarin"
    ],
    "pumpkin": [
        "Dýně"
    ],
    "pumpkin_stem": [
        "Rostlinka dýně"
    ],
    "quartz_block": [
        "Křemenný blok",
        "Křemenný blok",
        "Opracovaný křemenný blok",
        "Sloupový křemenný blok",
        "Blok z hladkého křemene"
    ],
    "rail": [
        "Kolejnice"
    ],
    "red_mushroom": [
        "Červená houba"
    ],
    "crimson_fungus": [
        "Karmínový hřib"
    ],
    "warped_fungus": [
        "Pokroucený hřib"
    ],
    "red_mushroom_block": [
        "Červený houbový blok"
    ],
    "red_sandstone": [
        "Červený pískovec",
        "Červený pískovec",
        "Opracovaný červený pískovec",
        "Řezaný červený pískovec",
        "Hladký červený pískovec"
    ],
    "redstone_wire": [
        "Ruditový prášek"
    ],
    "redstone_lamp": [
        "Ruditová lampa"
    ],
    "sand": [
        "Písek",
        "Písek",
        "Červený písek"
    ],
    "sandstone": [
        "Pískovec",
        "Pískovec",
        "Opracovaný pískovec",
        "Řezaný pískovec",
        "Hladký pískovec"
    ],
    "sapling": [
        "Sazenice dubu",
        "Sazenice dubu",
        "Sazenice smrku",
        "Sazenice břízy",
        "Sazenice sekvoje",
        "Sazenice akácie",
        "Sazenice tmavého dubu"
    ],
    "seaLantern": [
        "Mořská lucerna"
    ],
    "standing_sign": [
        "Cedule"
    ],
    "spruce_standing_sign": [
        "Smrková cedule"
    ],
    "birch_standing_sign": [
        "Březová cedule"
    ],
    "jungle_standing_sign": [
        "Sekvojová cedule"
    ],
    "acacia_standing_sign": [
        "Akáciová cedule"
    ],
    "darkoak_standing_sign": [
        "Cedule z tmavého dubu"
    ],
    "slime": [
        "Blok slizu"
    ],
    "snow": [
        "Sníh"
    ],
    "sponge": [
        "Mořská houba",
        "Mořská houba",
        "Mokrá mořská houba"
    ],
    "spruceFence": [
        "Smrkový plot"
    ],
    "spruce_fence_gate": [
        "Smrková branka"
    ],
    "brick_stairs": [
        "Cihlové schody"
    ],
    "nether_brick_stairs": [
        "Schody z netheritových cihel"
    ],
    "quartz_stairs": [
        "Křemenné schody"
    ],
    "smooth_quartz_stairs": [
        "Schody z hladkého křemene"
    ],
    "red_sandstone_stairs": [
        "Schody z červeného pískovce"
    ],
    "sandstone_stairs": [
        "Pískovcové schody"
    ],
    "stone_stairs": [
        "Schody z kamenných kostek"
    ],
    "normal_stone_stairs": [
        "Kamenné schody"
    ],
    "stone_brick_stairs": [
        "Schody z kamenných cihel"
    ],
    "oak_stairs": [
        "Dubové schody"
    ],
    "acacia_stairs": [
        "Akáciové schody"
    ],
    "birch_stairs": [
        "Březové schody"
    ],
    "dark_oak_stairs": [
        "Schody z tmavého dubu"
    ],
    "jungle_stairs": [
        "Sekvojové schody"
    ],
    "spruce_stairs": [
        "Smrkové schody"
    ],
    "purpur_stairs": [
        "Purpurové schody"
    ],
    "prismarine_stairs": [
        "Schody z prismarinu"
    ],
    "dark_prismarine_stairs": [
        "Schody z tmavého prismarinu"
    ],
    "prismarine_bricks_stairs": [
        "Schody z prismarinových cihel"
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
        "Schody z leštěné žuly"
    ],
    "polished_diorite_stairs": [
        "Schody z leštěného dioritu"
    ],
    "polished_andesite_stairs": [
        "Schody z leštěného andezitu"
    ],
    "mossy_stone_brick_stairs": [
        "Mechem porostlé schody z kamenných cihel"
    ],
    "smooth_red_sandstone_stairs": [
        "Schody z hladkého červeného pískovce"
    ],
    "smooth_sandstone_stairs": [
        "Schody z hladkého pískovce"
    ],
    "end_brick_stairs": [
        "Schody z enderitových cihel"
    ],
    "mossy_cobblestone_stairs": [
        "Mechem porostlé schody z kamenných kostek"
    ],
    "red_nether_brick_stairs": [
        "Schody z červených netheritových cihel"
    ],
    "smooth_stone": [
        "Hladký kámen"
    ],
    "standing_banner": [
        "Vlajka",
        "Černá vlajka",
        "Červená vlajka",
        "Zelená vlajka",
        "Hnědá vlajka",
        "Modrá vlajka",
        "Fialová vlajka",
        "Azurová vlajka",
        "Světle šedá vlajka",
        "Šedá vlajka",
        "Růžová vlajka",
        "Světle zelená vlajka",
        "Žlutá vlajka",
        "Světle modrá vlajka",
        "Purpurová vlajka",
        "Oranžová vlajka",
        "Vlajka"
    ],
    "stone": [
        "Kámen",
        "Kámen",
        "Žula",
        "Leštěná žula",
        "Diorit",
        "Leštěný diorit",
        "Andezit",
        "Leštěný andezit"
    ],
    "cobblestone": [
        "Kamenné kostky"
    ],
    "stonebrick": [
        "Kamenné cihly",
        "Kamenné cihly",
        "Mechem porostlé kamenné cihly",
        "Opracované kamenné cihly"
    ],
    "stonecutter": [
        "Kameník"
    ],
    "stonecutter_block": [
        "Kameník"
    ],
    "mossy_cobblestone": [
        "Mechem porostlé kamenné kostky"
    ],
    "double_stone_slab": [
        "Kamenný panel",
        "Kamenný panel",
        "Pískovcový panel",
        "Dřevěný panel",
        "Panel z kamenných kostek",
        "Cihlový panel",
        "Panel z kamenných cihel",
        "Křemenný panel",
        "Panel z netheritových cihel"
    ],
    "stone_slab": [
        "Kamenný panel",
        "Panel z hladkého kamene",
        "Pískovcový panel",
        "Dřevěný panel",
        "Panel z kamenných kostek",
        "Cihlový panel",
        "Panel z kamenných cihel",
        "Křemenný panel",
        "Panel z netheritových cihel"
    ],
    "double_stone_slab2": [
        "Panel z červeného pískovce",
        "Panel z červeného pískovce"
    ],
    "stone_slab2": [
        "Panel z červeného pískovce",
        "Panel z červeného pískovce",
        "Purpurový panel",
        "Panel z prismarinu",
        "Panel z prismarinových cihel",
        "Panel z tmavého prismarinu",
        "Mechem porostlý panel z kamenných kostek",
        "Panel z hladkého pískovce",
        "Panel z červených netheritových cihel"
    ],
    "stone_slab3": [
        "Panel z enderitových cihel",
        "Panel z enderitových cihel",
        "Panel z hladkého červeného pískovce",
        "Panel z leštěného andezitu",
        "Andezitový panel",
        "Dioritový panel",
        "Panel z leštěného dioritu",
        "Žulový panel",
        "Panel z leštěné žuly"
    ],
    "stone_slab4": [
        "Mechem porostlý panel z kamenných cihel",
        "Mechem porostlý panel z kamenných cihel",
        "Panel z hladkého křemene",
        "Kamenný panel",
        "Panel z řezaného pískovce",
        "Panel z řezaného červeného pískovce"
    ],
    "coral_block": [
        "Blok z trubkových korálů",
        "Blok z trubkových korálů",
        "Blok z mozkových korálů",
        "Blok z bublinkových korálů",
        "Blok ze žahavých korálů",
        "Blok z rohovinových korálů",
        "Blok z mrtvých trubkových korálů",
        "Blok z mrtvých mozkových korálů",
        "Blok z mrtvých bublinkových korálů",
        "Blok z mrtvých žahavých korálů",
        "Blok z mrtvých rohovinových korálů"
    ],
    "tallgrass": [
        "Tráva",
        "Tráva",
        "Kapradí"
    ],
    "seagrass": [
        "Mořská tráva",
        "Mořská tráva"
    ],
    "sea_pickle": [
        "Mořská okurka"
    ],
    "turtle_egg": [
        "Vejce mořské želvy"
    ],
    "coral": [
        "Trubkový korál",
        "Trubkový korál",
        "Mozkový korál",
        "Bublinkový korál",
        "Žahavý korál",
        "Rohovinový korál",
        "Mrtvý trubkový korál",
        "Mrtvý mozkový korál",
        "Mrtvý bublinkový korál",
        "Mrtvý žahavý korál",
        "Mrtvý rohovinový korál"
    ],
    "coral_fan": [
        "Trubkový vějířovitý korál",
        "Trubkový vějířovitý korál",
        "Mozkový vějířovitý korál",
        "Bublinkový vějířovitý korál",
        "Žahavý vějířovitý korál",
        "Rohovinový vějířovitý korál"
    ],
    "coral_fan_dead": [
        "Mrtvý trubkový vějířovitý korál",
        "Mrtvý trubkový vějířovitý korál",
        "Mrtvý mozkový vějířovitý korál",
        "Mrtvý bublinkový vějířovitý korál",
        "Mrtvý žahavý vějířovitý korál",
        "Mrtvý rohovinový vějířovitý korál"
    ],
    "glass_pane": [
        "Skleněná tabulka"
    ],
    "tnt": [
        "TNT"
    ],
    "snow_layer": [
        "Napadaný sníh"
    ],
    "torch": [
        "Pochodeň"
    ],
    "trapdoor": [
        "Dubové padací dveře"
    ],
    "acacia_trapdoor": [
        "Akáciové padací dveře"
    ],
    "birch_trapdoor": [
        "Březové padací dveře"
    ],
    "dark_oak_trapdoor": [
        "Padací dveře z tmavého dubu"
    ],
    "jungle_trapdoor": [
        "Padací dveře z dřeva z džungle"
    ],
    "spruce_trapdoor": [
        "Smrkové padací dveře"
    ],
    "tripWire": [
        "Nástražný drát"
    ],
    "tripwire_hook": [
        "Sloupek s nástražným drátem"
    ],
    "vine": [
        "Réva"
    ],
    "weeping_vines": [
        "Plačící réva"
    ],
    "twisting_vines": [
        "Kroutící se réva"
    ],
    "flowing_water": [
        "Voda"
    ],
    "water": [
        "Voda"
    ],
    "waterlily": [
        "Leknínový list"
    ],
    "web": [
        "Pavučina"
    ],
    "heavy_weighted_pressure_plate": [
        "Váhová nášlapná deska (těžká)"
    ],
    "light_weighted_pressure_plate": [
        "Váhová nášlapná deska (lehká)"
    ],
    "end_stone": [
        "Enderit"
    ],
    "end_bricks": [
        "Enderitové cihly"
    ],
    "planks": [
        "Dřevěná prkna",
        "Prkna z dubového dřeva",
        "Prkna ze smrkového dřeva",
        "Prkna z březového dřeva",
        "Prkna ze sekvojového dřeva",
        "Prkna z akáciového dřeva",
        "Prkna ze dřeva tmavého dubu"
    ],
    "wooden_slab": [
        "Panel ze dřeva",
        "Panel z dubového dřeva",
        "Panel ze smrkového dřeva",
        "Panel z březového dřeva",
        "Panel ze sekvojového dřeva",
        "Panel z akáciového dřeva",
        "Panel ze dřeva tmavého dubu"
    ],
    "carpet": [
        "Koberec",
        "Černý koberec",
        "Červený koberec",
        "Zelený koberec",
        "Hnědý koberec",
        "Modrý koberec",
        "Fialový koberec",
        "Azurový koberec",
        "Světle šedý koberec",
        "Šedý koberec",
        "Růžový koberec",
        "Světle zelený koberec",
        "Žlutý koberec",
        "Světle modrý koberec",
        "Purpurový koberec",
        "Oranžový koberec",
        "Bílý koberec"
    ],
    "crafting_table": [
        "Pracovní stůl"
    ],
    "white_glazed_terracotta": [
        "Bílá glazovaná terakota",
        "Bílá glazovaná terakota"
    ],
    "orange_glazed_terracotta": [
        "Oranžová glazovaná terakota",
        "Oranžová glazovaná terakota"
    ],
    "magenta_glazed_terracotta": [
        "Purpurová glazovaná terakota",
        "Purpurová glazovaná terakota"
    ],
    "light_blue_glazed_terracotta": [
        "Světle modrá glazovaná terakota",
        "Světle modrá glazovaná terakota"
    ],
    "yellow_glazed_terracotta": [
        "Žlutá glazovaná terakota",
        "Žlutá glazovaná terakota"
    ],
    "lime_glazed_terracotta": [
        "Světle zelená glazovaná terakota",
        "Světle zelená glazovaná terakota"
    ],
    "pink_glazed_terracotta": [
        "Růžová glazovaná terakota",
        "Růžová glazovaná terakota"
    ],
    "gray_glazed_terracotta": [
        "Šedá glazovaná terakota",
        "Šedá glazovaná terakota"
    ],
    "silver_glazed_terracotta": [
        "Světle šedá glazovaná terakota",
        "Světle šedá glazovaná terakota"
    ],
    "cyan_glazed_terracotta": [
        "Azurová glazovaná terakota",
        "Azurová glazovaná terakota"
    ],
    "purple_glazed_terracotta": [
        "Fialová glazovaná terakota",
        "Fialová glazovaná terakota"
    ],
    "blue_glazed_terracotta": [
        "Modrá glazovaná terakota",
        "Modrá glazovaná terakota"
    ],
    "brown_glazed_terracotta": [
        "Hnědá glazovaná terakota",
        "Hnědá glazovaná terakota"
    ],
    "green_glazed_terracotta": [
        "Zelená glazovaná terakota",
        "Zelená glazovaná terakota"
    ],
    "red_glazed_terracotta": [
        "Červená glazovaná terakota",
        "Červená glazovaná terakota"
    ],
    "black_glazed_terracotta": [
        "Černá glazovaná terakota",
        "Černá glazovaná terakota"
    ],
    "concrete": [
        "Bílý beton",
        "Bílý beton",
        "Oranžový beton",
        "Purpurový beton",
        "Světle modrý beton",
        "Žlutý beton",
        "Světle zelený beton",
        "Růžový beton",
        "Šedý beton",
        "Světle šedý beton",
        "Azurový beton",
        "Fialový beton",
        "Modrý beton",
        "Hnědý beton",
        "Zelený beton",
        "Červený beton",
        "Černý beton"
    ],
    "glazedTerracottaWhite": [
        "Bílá glazovaná terakota"
    ],
    "glazedTerracottaOrange": [
        "Oranžová glazovaná terakota"
    ],
    "glazedTerracottaMagenta": [
        "Purpurová glazovaná terakota"
    ],
    "glazedTerracottaLightBlue": [
        "Světle modrá glazovaná terakota"
    ],
    "glazedTerracottaYellow": [
        "Žlutá glazovaná terakota"
    ],
    "glazedTerracottaLime": [
        "Světle zelená glazovaná terakota"
    ],
    "glazedTerracottaPink": [
        "Růžová glazovaná terakota"
    ],
    "glazedTerracottaGray": [
        "Šedá glazovaná terakota"
    ],
    "glazedTerracottaSilver": [
        "Světle šedá glazovaná terakota"
    ],
    "glazedTerracottaCyan": [
        "Azurová glazovaná terakota"
    ],
    "glazedTerracottaPurple": [
        "Fialová glazovaná terakota"
    ],
    "glazedTerracottaBlue": [
        "Modrá glazovaná terakota"
    ],
    "glazedTerracottaBrown": [
        "Hnědá glazovaná terakota"
    ],
    "glazedTerracottaGreen": [
        "Zelená glazovaná terakota"
    ],
    "glazedTerracottaRed": [
        "Červená glazovaná terakota"
    ],
    "glazedTerracottaBlack": [
        "Černá glazovaná terakota"
    ],
    "concretePowder": [
        "Bílý práškový beton",
        "Bílý práškový beton",
        "Oranžový práškový beton",
        "Purpurový práškový beton",
        "Světle modrý práškový beton",
        "Žlutý práškový beton",
        "Světle zelený práškový beton",
        "Růžový práškový beton",
        "Šedý práškový beton",
        "Světle šedý práškový beton",
        "Azurový práškový beton",
        "Fialový práškový beton",
        "Modrý práškový beton",
        "Hnědý práškový beton",
        "Zelený práškový beton",
        "Červený práškový beton",
        "Černý práškový beton"
    ],
    "stripped_spruce_log": [
        "Holé smrkové poleno"
    ],
    "stripped_dark_oak_log": [
        "Holé poleno tmavého dubu"
    ],
    "stripped_birch_log": [
        "Holé březové poleno"
    ],
    "stripped_jungle_log": [
        "Holé sekvojové poleno"
    ],
    "stripped_oak_log": [
        "Holé dubové poleno"
    ],
    "stripped_acacia_log": [
        "Holé akáciové poleno"
    ],
    "bamboo": [
        "Bambus"
    ],
    "scaffolding": [
        "Generování uživatelského rozhraní"
    ],
    "grindstone": [
        "Brusný kámen"
    ],
    "cartography_table": [
        "Kartografický stůl"
    ],
    "lantern": [
        "Lucerna"
    ],
    "soul_lantern": [
        "Spektrální lucerna"
    ],
    "smoker": [
        "Udírna"
    ],
    "smithing_table": [
        "Kovářský stůl"
    ],
    "barrel": [
        "Sud"
    ],
    "campfire": [
        "Táborák"
    ],
    "loom": [
        "Tkalcovský stav"
    ],
    "lectern": [
        "Řečnický pultík"
    ],
    "sweet_berry_bush": [
        "Keř se sladkými bobulemi"
    ],
    "wood": [
        "Dubové dřevo",
        "Dubové dřevo",
        "Smrkové dřevo",
        "Březové dřevo",
        "Sekvojové dřevo",
        "Akáciové dřevo",
        "Dřevo tmavého dubu",
        null,
        null,
        "Holé dubové dřevo",
        "Holé smrkové dřevo",
        "Holé březové dřevo",
        "Holé sekvojové dřevo",
        "Holé akáciové dřevo",
        "Holé dřevo tmavého dubu"
    ],
    "netherite_block": [
        "Blok netheritu"
    ],
    "ancient_debris": [
        "Prastaré sutiny"
    ],
    "nether_gold_ore": [
        "Netheritová zlatá ruda"
    ],
    "respawn_anchor": [
        "Kotva pro znovuzrození"
    ],
    "crying_obsidian": [
        "Plačící obsidián"
    ]
}
};
freeze(lang_data);
export = lang_data;

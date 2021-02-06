
import { freeze } from './freeze';
import { LangId } from './langid';
const lang_data = {
id: "sv_SE" as LangId,
commands:{
    "ability_description": "Bestämmer en spelares förmåga.",
    "ability_noability": "Det finns ingen färdighet vid namn \"%1$s\" tillgänglig",
    "ability_granted": "Du har fått färdigheten \"%1$s\"",
    "ability_revoked": "Du har förlorat färdigheten \"%1$s\"",
    "ability_success": "Färdighet uppdaterad",
    "achievement_alreadyHave": "Spelaren %1$s har redan följande achievement: %2$s",
    "achievement_description": "Ger eller tar achievements från en spelare.",
    "achievement_dontHave": "Spelaren %1$s har inte följande achievement: %2$s",
    "achievement_give_success_all": "%1$s har fått alla achievements",
    "achievement_give_success_one": "%1$s har fått egenskapen %2$s",
    "achievement_statTooLow": "Spelaren %1$s har inte egenskapen %2$s",
    "achievement_take_success_all": "%1$s har förlorat alla achievements",
    "achievement_take_success_one": "Egenskapen %1$s har tagits från %2$s",
    "achievement_unknownAchievement": "Okänd achievement eller egenskap: %1$s",
    "agent_attack_success": "Agentkommando lyckades: attack",
    "agent_attack_failed": "Agentkommando misslyckades: attack",
    "agent_collect_success": "Agentkommando lyckades: collect",
    "agent_collect_failed": "Agentkommando misslyckades: collect",
    "agent_createagent_success": "Skapade Agent",
    "agent_createagent_failed": "Kan inte skapa Agent",
    "agent_destroy_success": "Agentkommando lyckades: destroy",
    "agent_destroy_failed": "Agentkommando misslyckades: destroy",
    "agent_detect_success": "Agentkommando lyckades: detect",
    "agent_detect_failed": "Agentkommando misslyckades: detect",
    "agent_detectredstone_success": "Agentkommando lyckades: detectredstone",
    "agent_detectredstone_failed": "Agentkommando misslyckades: detectredstone",
    "agent_drop_success": "Agentkommando lyckades: drop",
    "agent_drop_failed": "Agentkommando misslyckades: drop",
    "agent_dropall_success": "Agentkommando lyckades: dropall",
    "agent_dropall_failed": "Agentkommando misslyckades: dropall",
    "agent_getitemcount_success": "Agentkommando lyckades: getitemcount",
    "agent_getitemcount_failed": "Agentkommando misslyckades: getitemcount",
    "agent_getitemspace_success": "Agentkommando lyckades: getitemspace",
    "agent_getitemspace_failed": "Agentkommando misslyckades: getitemspace",
    "agent_getitemdetail_success": "Agentkommando lyckades: getitemdetail",
    "agent_getitemdetail_failed": "Agentkommando misslyckades: getitemdetail",
    "agent_getposition_success": "Agentkommando lyckades: getposition",
    "agent_getposition_failed": "Agentkommando misslyckades: getposition",
    "agent_inspect_success": "Agentkommando lyckades: inspect",
    "agent_inspect_failed": "Agentkommando misslyckades: inspect",
    "agent_inspectdata_success": "Agentkommando lyckades: inspect data",
    "agent_inspectdata_failed": "Agentkommando misslyckades: inspect data",
    "agent_move_success": "Agentkommando lyckades: move",
    "agent_move_failed": "Agentkommando misslyckades: move",
    "agent_outofrange": "Kan inte utfärda kommando; Agent utom räckhåll",
    "agent_place_success": "Agentkommando lyckades: place",
    "agent_place_failed": "Agentkommando misslyckades: place",
    "agent_setitem_success": "Agentkommando lyckades: set item",
    "agent_setitem_failed": "Agentkommando misslyckades: set item",
    "agent_turn_success": "Agentkommando lyckades: turn",
    "agent_turn_failed": "Agentkommando misslyckades: turn",
    "agent_till_success": "Agentkommando lyckades: till",
    "agent_till_failed": "Agentkommando misslyckades: till",
    "agent_tpagent_description": "Teleportera din agent.",
    "agent_tpagent_success": "Agentkommando lyckades: teleport",
    "agent_tpagent_failed": "Agentkommando misslyckades: teleport",
    "agent_transfer_success": "Agentkommando lyckades: transfer",
    "agent_transfer_failed": "Agentkommando misslyckades: transfer",
    "always_day": "Dygnscykel %1$s",
    "always_day_locked": "Dygnscykel låst",
    "always_day_unlocked": "Dygnscykel upplåst",
    "ban_description": "Lägger till en spelare på listan över spärrade.",
    "autocomplete_a": "alla spelare",
    "autocomplete_c": "mina agenter",
    "autocomplete_e": "alla enheter",
    "autocomplete_p": "närmaste spelare",
    "autocomplete_r": "slumpmässig spelare",
    "autocomplete_s": "dig själv",
    "autocomplete_v": "alla agenter",
    "ban_failed": "Kunde inte spärra spelare %1$s",
    "ban_success": "Spelare %1$s har spärrats",
    "banip_description": "Lägger till IP-adress på listan över spärrade.",
    "banip_invalid": "Du har angett en ogiltig IP-adress eller en spelare som inte är online",
    "banip_success": "IP-adressen %1$s har spärrats",
    "banip_success_players": "IP-adressen %1$s som tillhör %2$s har spärrats",
    "banlist_ips": "Det finns sammanlagt %1$d spärrade IP-adresser:",
    "banlist_players": "Det finns sammanlagt %1$d spärrade spelare:",
    "blockdata_description": "Modifierar ett blocks datatagg.",
    "blockdata_placeFailed": "Du kan inte placera block här",
    "blockdata_destroyFailed": "Du kan inte gräva här",
    "blockdata_failed": "Dataetiketten har inte ändrats: %1$s",
    "blockdata_notValid": "Målblocket har inga blockdata",
    "blockdata_outOfWorld": "Kan inte ändra block utanför världen",
    "blockdata_success": "Blockdata uppdaterade till: %1$s",
    "blockdata_tagError": "Tolkning av dataetikett misslyckades: %1$s",
    "bossbar_add_success": "Skapade anpassad bossmätare [%1$s]",
    "bossbar_add_failure_invalid": "Ogiltigt bossmätar-id. Id:t borde ha formen namespace:id eller id (vilket ger minecraft namespace).",
    "bossbar_add_failure_exists": "Det finns redan en bossmätare med id:t %1$s",
    "bossbar_description": "Skapar och modifierar bossmätare",
    "bossbar_get_max": "Anpassad bossmätare [%1$s] har maximalt %2$d",
    "bossbar_get_players": "Anpassad bossmätare [%1$s] har %2$s spelare online just nu: %3$s",
    "bossbar_get_players_none": "Anpassad bossmätare [%1$s] har inga spelare online just nu",
    "bossbar_get_players_one": "Anpassad bossmätare [%1$s] har en spelare online just nu: %2$s",
    "bossbar_get_value": "Anpassad bossmätare [%1$s] har värdet %2$d",
    "bossbar_get_visible_true": "Anpassad bossmätare [%1$s] visas",
    "bossbar_get_visible_false": "Anpassad bossmätare [%1$s] är dold",
    "bossbar_list": "%1$s anpassade bossmätare är aktiva nu: %2$s",
    "bossbar_list_none": "Inga anpassade bossmätare är aktiva nu",
    "bossbar_list_one": "1 anpassad bossmätare är aktiv nu: %1$s",
    "bossbar_notFound": "Det finns ingen bossmätare med id:t %1$s",
    "bossbar_remove": "Tog bort anpassad bossmätare [%1$s]",
    "change_setting_description": "Ändrar en inställning på en dedikerad server medan den körs.",
    "change_setting_success": "%1$s har ändrats",
    "chunkinfo_compiled": "Datablocket har kompilerats.",
    "chunkinfo_data": "De första 64 punkterna är: %1$s",
    "chunkinfo_empty": "Datablocket är tomt.",
    "chunkinfo_hasLayers": "Datablocket har lager: %1$s",
    "chunkinfo_hasNoRenderableLayers": "Datablocket har inga lager som kan ritas upp.",
    "chunkinfo_isEmpty": "Datablocket har tomma lager: %1$s",
    "chunkinfo_location": "Datablockets position: (%1$d, %2$d, %3$d)",
    "chunkinfo_noChunk": "Hittade inget datablock på datablocksposition %1$d, %2$d, %3$d",
    "chunkinfo_notCompiled": "Datablocket har inte kompilerats.",
    "chunkinfo_notEmpty": "Datablocket är inte tomt.",
    "chunkinfo_vertices": "%1$s-lagrets buffert har %2$d punkter",
    "classroommode_description": "Försök att starta och ansluta till klassrumsläge.",
    "classroommode_success": "Försöker att starta klassrumsläge ...",
    "clear_description": "Tömmer en spelares förråd på föremål.",
    "clear_failure": "Kunde inte tömma förrådet på %1$s",
    "clear_failure_no_items": "Kunde inte tömma förrådet på %1$s; det finns inga föremål att ta bort",
    "clear_success": "Tömde förrådet på %1$s; %2$d föremål togs bort",
    "clear_tagError": "Tolkning av dataetikett misslyckades: %1$s",
    "clear_testing": "%1$s har %2$d föremål som matchar kriterierna",
    "clearfixedinv_description": "Tar bort alla låsta förrådsplatser.",
    "clearfixedinv_success": "Tömde det låsta förrådet",
    "clone_description": "Klonar block från en region till en annan.",
    "clone_failed": "Inga block har klonats",
    "clone_filtered_error": "Du måste ange ett filterblock för filtrerad användning",
    "clone_noOverlap": "Källan och målet får inte överlappa varandra",
    "clone_outOfWorld": "Kan inte komma åt block utanför världen",
    "clone_success": "%1$d block har klonats",
    "clone_tooManyBlocks": "För många block i det angivna området (%1$d > %2$d)",
    "closechat_description": "Stänger den lokala spelarens chattfönster om det är öppet",
    "closechat_success": "Chatt stängd",
    "closechat_failure": "Chatten var inte öppen",
    "closewebsocket_description": "Stänger Websocket-anslutningen om en sådan finns.",
    "code_description": "Startar Code Builder.",
    "code_success": "Startade Code Builder.",
    "compare_failed": "Källan och målet är inte identiska",
    "compare_outOfWorld": "Kan inte komma åt block utanför världen",
    "compare_success": "%1$d block har jämförts",
    "compare_tooManyBlocks": "För många block i det angivna området (%1$d > %2$d)",
    "corruptworld_description": "Skadar världen som lästs in på servern.",
    "corruptworld_success": "Världen skadades.",
    "daylock_description": "Låser och låser upp dygnscykeln.",
    "debug_description": "Startar eller stoppar en debug-session.",
    "debug_notStarted": "Kan inte avsluta profilering som inte har påbörjats!",
    "debug_start": "Påbörjade debug-profilering",
    "debug_stop": "Avslutade debug-profilering efter %.2f sekunder (%1$d tick)",
    "defaultgamemode_description": "Ställer in vilket spelläge som är standard.",
    "defaultgamemode_success": "Världens standardläge är nu %1$s",
    "deop_description": "Tar bort operatörsstatus från en spelare.",
    "deop_failed": "Kunde inte ta ifrån operatörsstatus (för hög tillståndsnivå): %s",
    "deop_success": "Tog ifrån operatörsstatus: %s",
    "deop_message": "Du har förlorat din operatörsstatus",
    "difficulty_description": "Ställer in svårighetsgraden.",
    "difficulty_usage": "/difficulty <ny svårighetsgrad>",
    "difficulty_success": "Ställ in spelets svårighetsgrad på %1$s",
    "downfall_success": "Kontrollerad nederbörd",
    "effect_description": "Lägg till eller ta bort statuseffekter.",
    "effect_failure_notActive": "%2$s har ingen effekt och kunde därför inte fråntas %1$s",
    "effect_failure_notActive_all": "%1$s har ingen effekt och kunde därför inte fråntas den",
    "effect_failure_notAMob": "%1$s kan inte ha effekter",
    "effect_notFound": "Det finns ingen varelseeffekt med ID %s",
    "effect_success": "Gav %1$s * %2$d till %3$s i %4$d sekunder",
    "effect_success_removed": "Tog %1$s från %2$s",
    "effect_success_removed_all": "Tog alla effekter från %1$s",
    "enchant_cantCombine": "%1$s kan inte kombineras med %2$s",
    "enchant_invalidLevel": "%1$s har inte stöd för nivå %2$d",
    "enchant_cantEnchant": "Den valda förtrollningen kan inte appliceras på målföremålet: %1$s",
    "enchant_description": "Applicerar en förtrollning på en spelares valda föremål.",
    "enchant_noItem": "Målet har inte föremålet: %1$s",
    "enchant_notFound": "Det finns ingen förtrollning med ID %1$d",
    "enchant_success": "Förtrollningen av %1$s lyckades",
    "entitydata_description": "Modifierar en enhets datatagg.",
    "entitydata_failed": "Dataetiketten har inte ändrats: %1$s",
    "entitydata_noPlayers": "%1$s är en spelare och kan inte ändras",
    "entitydata_success": "Enhetsdata uppdaterade till: %1$s",
    "entitydata_tagError": "Tolkning av dataetikett misslyckades: %1$s",
    "execute_allInvocationsFailed": "Alla åkallelser misslyckades: %1$s",
    "execute_failed": "Kunde inte verkställa \"%1$s\" som %2$s",
    "execute_description": "Verkställer ett kommando åt en eller flera varelser.",
    "fill_description": "Fyller alla eller delar av en region med ett specifikt block.",
    "fill_failed": "Inga block har fyllts",
    "fill_outOfWorld": "Kan inte placera block utanför världen",
    "fill_success": "%1$d block har fyllts",
    "fill_tagError": "Tolkning av dataetikett misslyckades: %1$s",
    "fill_tooManyBlocks": "För många block i det angivna området (%1$d > %2$d)",
    "fill_replace_auxvalue_invalid": "Felaktigt ersättningsdatavärde för block %1$s",
    "function_description": "Kör kommandon från motsvarande funktionsfil.",
    "function_functionNameNotFound": "Funktionen %1$s hittades inte.",
    "function_invalidCharacters": "Funktionen med namnet \"%s\" är ogiltig; tecknet \"%s\" tillåts inte i funktionsnamn.",
    "function_noEngineVersionSpecified": "Funktionen %s kunde inte köras. Du måste ange min_engine_version i beteendepakets manifest.json.",
    "function_success": "Körde %1$d funktioner.",
    "gamemode_description": "Bestämmer en spelares spelläge.",
    "gamemode_success_other": "Ställ in spelläget till %1$s för %2$s",
    "gamemode_success_self": "Ställ in ditt eget spelläge till %1$s",
    "gamemode_fail_invalid": "Spelläget \"%1$s\" är ogiltigt",
    "gamerule_description": "Ställer in eller kontrollerar värdet för en spelregel.",
    "gamerule_type_invalid": "Ogiltig typ vald för spelregel \"%1$s\"",
    "gamerule_type_nocheatsenabled": "Spelregeln \"%1$s\" kan bara användas med fusk aktiverade i världen.",
    "gamerule_nopermission": "Det är bara serverägare som kan ändra \"%1$s\"",
    "gamerule_norule": "Det finns ingen spelregel vid namn \"%1$s\" tillgänglig",
    "gamerule_success": "Spelregeln %1$s har uppdaterats till %2$s",
    "generic_async_initiated": "Kommandot \"%1$s\" har startats (asynkront steg %2$d)",
    "generic_boolean_invalid": "\"%1$s\" är inte sant eller falskt",
    "generic_chunk_notFound": "Det angivna datablocket kunde inte hittas",
    "generic_componentError": "Tolkning av komponentlista misslyckades",
    "generic_dimension_notFound": "Den angivna dimensionen kunde inte hittas",
    "generic_disabled": "Fusk har inte aktiverats på den här nivån.",
    "generic_disabled_templateLocked": "Inställningarna är låsta. Lås upp mallens världsalternativ i spelinställningarna för att ändra dem.",
    "generic_double_tooBig": "Numret du har angett (%.2f) är för stort; det får inte vara större än %.2f",
    "generic_double_tooSmall": "Numret du har angett (%.2f) är för litet; det får inte vara mindre än %.2f",
    "generic_duplicateType": "Duplicera typargument",
    "generic_duplicateSelectorArgument": "Duplicera %s väljarargument",
    "generic_encryption_badkey": "Felaktig offentlig nyckel angiven. 120-bytesnyckel efter PEM-formatering förväntades.",
    "generic_encryption_badsalt": "Felaktigt salt angivet. 16 byte innan grundläggande 64-kodning förväntades.",
    "generic_encryption_required": "Krypterad session krävs",
    "generic_entity_invalidType": "Enhetstypen \"%1$s\" är ogiltig",
    "generic_entity_invalidUuid": "Enhetens UUID har angetts i ett ogiltigt format",
    "generic_entity_notFound": "Enheten kan inte hittas",
    "generic_exception": "Ett okänt fel inträffade när kommandot skulle verkställas",
    "generic_invalidAgentType": "Typargument applicerat på agentexklusiv väljare",
    "generic_invalidcontext": "Ogiltigt sammanhang angivet för den givna kommandotypen",
    "generic_invalidDevice": "Det angivna kommandot, %s, stöds inte på den här enheten.",
    "generic_invalidPlayerType": "Typargument applicerat på spelarexklusiv väljare",
    "generic_invalidType": "Okänt typargument",
    "generic_levelError": "Högsta nivån måste vara högre än den lägsta",
    "generic_malformed_body": "Huvuddelen saknas eller är felaktig",
    "generic_malformed_type": "Ogiltig förfrågan",
    "generic_notimplemented": "Inte implementerat",
    "generic_num_invalid": "\"%1$s\" är inget giltigt nummer",
    "generic_num_tooBig": "Numret du har angett (%1$d) är för stort; det får inte vara större än %2$d",
    "generic_num_tooSmall": "Numret du har angett (%1$d) är för litet; det får inte vara mindre än %2$d",
    "generic_parameter_invalid": "\"%1$s\" är ingen giltig parameter",
    "generic_permission_selector": "<otillräckligt tillstånd för expansion av väljare>",
    "generic_player_notFound": "Spelaren kan inte hittas",
    "generic_protocol_mismatch": "Den angivna protokollversionen matchar inte Minecrafts protokollversion",
    "generic_radiusError": "Minsta väljarradie måste vara mindre än den största",
    "generic_radiusNegative": "Radien kan inte vara negativ",
    "generic_rotationError": "Rotationen är utanför intervallet",
    "generic_running": "Kommandot körs redan",
    "generic_step_failed": "Kommandosteget misslyckades",
    "generic_syntax": "Syntaxfel: Oväntat \"%2$s\": på \"%1$s>>%2$s<<%3$s\"",
    "generic_noTargetMatch": "Inga mål matchade väljaren",
    "generic_targetNotPlayer": "Väljaren måste vara av spelartyp",
    "generic_tooManyNames": "För många målnamnsargument",
    "generic_tooManyTargets": "För många mål matchade väljaren",
    "generic_too_many_requests": "För många kommandon har efterfrågats; vänta på att ett slutförs",
    "generic_unknown": "Okänt kommando: %s. Kontrollera att kommandot existerar och att du har tillgång till det.",
    "generic_usage": "Användning: %1$s",
    "generic_usage_noparam": "Användning:",
    "generic_version_mismatch": "Den efterfrågade versionen finns inte för det här kommandot",
    "generic_version_missing": "Kommandoanrop som inte kommer från chatten måste ange kommandots version",
    "getchunkdata_description": "Hämtar pixlar för ett specifikt datablock.",
    "getchunkdata_success": "Datablock mottaget",
    "getchunks_description": "Hämtar en lista med laddade datablock.",
    "getchunks_success": "Datablockslista mottagen",
    "getlocalplayername_description": "Returnerar det lokala spelarnamnet.",
    "getspawnpoint_description": "Hämtar spawnplatsen för en eller flera angivna spelare.",
    "gettopsolidblock_description": "Läs positionen för det översta blocket som inte består av luft på den angivna positionen",
    "gettopsolidblock_notfound": "Inga solida block under den angivna positionen",
    "give_block_notFound": "Det finns inget block med namnet %1$d",
    "give_description": "Ger ett föremål till en spelare.",
    "give_item_invalid": "Ogiltig kommandosyntax: ingen sådan %s finns med det datavärdet",
    "give_item_notFound": "Det finns inget föremål med namnet %1$d",
    "give_map_invalidData": "Ogiltiga kartdata angivna",
    "give_map_featureNotFound": "Kunde inte skapa utforskarkarta; funktionen hittades inte i den här dimensionen.",
    "give_success": "Gav %1$s * %2$d till %3$s",
    "give_successRecipient": "Du har fått %1$s * %2$d",
    "give_tagError": "Tolkning av dataetikett misslyckades: %1$s",
    "help_description": "Ger hjälp/lista med kommandon.",
    "help_footer": "Tips: Använd <tab> när du skriver kommandon för att komplettera kommandot eller dess argument automatiskt",
    "help_header": "--- Visar hjälpsida %1$d av %2$d (/help <sida>) ---",
    "help_command_aliases": "%s (även %s):",
    "immutableworld_description": "Bestämmer världens oföränderliga läge.",
    "immutableworld_info": "immutableworld = %s",
    "kick_description": "Sparkar en spelare från servern.",
    "kick_description_edu": "Tar bort en spelare från spelet.",
    "kick_not_found": "Kunde inte hitta spelare %1$s",
    "kick_not_yourself": "Du kan inte ta bort dig själv från spelet",
    "kick_success": "Sparkade %1$s från spelet",
    "kick_success_reason": "Sparkade %1$s från spelet: \"%2$s\"",
    "kick_success_reasonedu": "Sparkade %1$s från spelet: %2$s",
    "kick_no_host": "Värden får inte sparkas från spelet.",
    "kick_no_teacher": "Lärare får inte tas bort från spelet.",
    "kill_successful_edu": "Tog bort %1$s",
    "kill_successful": "Dödade %1$s",
    "kill_description_edu": "Tar bort enheter (spelare, varelser o.s.v.)",
    "kill_description": "Dödar enheter (spelare, varelser o.s.v.)",
    "list_description": "Listar spelare på servern.",
    "locate_description": "Visar koordinaterna för den närmaste angivna strukturtypen.",
    "locate_fail_noplayer": "Kommandot kan bara användas av giltiga spelare",
    "locate_fail_nostructurefound": "Hittade ingen giltig struktur i den här dimensionen",
    "locate_success": "Närmaste %1$s är på block %2$s, (y?), %3$s",
    "togglecontentlog_toggle": "Slår på/stänger av kommandot för innehållsloggen",
    "togglecontentlog_enabled": "Innehållslogg påslagen",
    "togglecontentlog_disabled": "Innehållslogg avstängd",
    "me_description": "Visar ett meddelande om dig.",
    "message_display_incoming": "%1$s viskar till dig: %2$s",
    "message_display_outgoing": "Du viskar till %1$s: %2$s",
    "message_sameTarget": "Du kan inte skicka privata meddelanden till dig själv!",
    "mixer_description": "Mixer Interactivity-kontroll",
    "mixer_error_unknown": "Ett okänt Mixer-fel har inträffat.",
    "mixer_error_notoken": "Du måste vara inloggad med ett Microsoft-konto för att aktivera Mixer Interactivity.",
    "mixer_error_notsupported": "Enheten du använder stöder inte Mixer Interactivity.",
    "mixer_interactive_error": "Ett Mixer-fel har inträffat: %1$s",
    "mixer_scene_failed": "Det finns ingen scen med namnet %1$s. Se till att du har angett rätt scennamn.",
    "mixer_scene_success": "Scenen har ändrats till: %1$s",
    "mixer_start_success": "Mixer-interaktivitet startar: %1$s",
    "mixer_start_fail_invalidCode": "Kunde inte hitta något projekt med id \"%1$s\". Se till att du har angett rätt id eller delningskod.",
    "mixer_stop_success": "Mixer-interaktivitet har stoppats.",
    "mixer_stop_fail": "Det finns ingen interaktivitetssession att stoppa.",
    "mixer_status_notinitialized": "Interactivity har inte startats.",
    "mixer_status_enabled": "Interactivity har startats.",
    "mixer_status_initializing": "Interactivity håller på att starta.",
    "mixer_status_pending": "Interactivity väntar.",
    "mixer_status_disabled": "Interactivity är avstängt.",
    "mixer_activatedbutton": "%1$s har aktiverat %2$s.",
    "mobevent_description": "Bestämmer vilka varelsehändelser som får köras.",
    "mobevent_eventsEnabledSetToTrue": "Nu är varelsehändelser aktiverade. Individuella händelser inställda som \"false\" körs inte.",
    "mobevent_eventsEnabledSetToFalse": "Nu är varelsehändelser avstängda. Individuella händelser körs inte.",
    "mobevent_eventsEnabledIsTrue": "Varelsehändelser är aktiverade. Individuella händelser inställda som \"false\" körs inte.",
    "mobevent_eventsEnabledIsFalse": "Varelsehändelser är avstängda. Individuella händelser körs inte.",
    "mobevent_eventSetToTrue": "Varelsehändelse %s (id: %s) inställd som \"true\".",
    "mobevent_eventSetToTrueButEventsDisabled": "Varelsehändelse %s (id: %s) inställd som \"true\", men varelsehändelser är avstängda.",
    "mobevent_eventSetToFalse": "Varelsehändelse %s (id: %s) inställd som \"false\".",
    "mobevent_eventIsTrue": "Varelsehändelse %s (id: %s) är inställd som \"true\".",
    "mobevent_eventIsTrueButEventsDisabled": "Varelsehändelse %s (id: %s) är inställd som \"true\", men varelsehändelser är avstängda.",
    "mobevent_eventIsFalse": "Varelsehändelse %s (id: %s) är inställd som \"false\".",
    "op_description": "Ger operatörsstatus till en spelare.",
    "op_failed": "Kunde inte ge operatörsstatus (redan operatör eller högre): %s",
    "op_success": "Gav operatörsstatus: %s",
    "op_message": "Du har fått operatörsstatus",
    "origin_commandblock": "Kommandoblock",
    "origin_external": "Extern",
    "origin_devconsole": "Utvecklarkonsol",
    "origin_script": "Skriptmotor",
    "origin_server": "Server",
    "origin_teacher": "Lärare",
    "ops_description": "Uppdaterar och tilldelar operatörstillstånd.",
    "ops_reloaded": "Operatörer uppdaterade från fil.",
    "ops_set_success": "Angav operatörsnivå för spelare %s.",
    "permissions_description": "Uppdaterar och tilldelar tillstånd.",
    "permissions_reloaded": "Tillstånden har uppdaterats från fil.",
    "permissions_set_failed": "Kunde inte ange tillståndsnivå %s för spelare %s.",
    "permissions_set_success": "Angav tillståndsnivå %s för spelare %s.",
    "permissions_save_failed": "Kunde inte spara tillståndsnivå %s för spelare %s.",
    "permissions_save_success": "Sparade tillståndsnivå %s för spelare %s.",
    "spawnParticleEmitter_description": "Skapar en partikelutsöndrare",
    "particle_description": "Skapar partiklar.",
    "particle_notFound": "Okänt effektnamn (%1$s)",
    "particle_success": "Spelar upp effekten %1$s %2$d gånger",
    "players_list": "%1$d/%2$d spelare online:",
    "players_list_names": "%s",
    "playsound_description": "Spelar upp ett ljud.",
    "playsound_playerTooFar": "Spelare %1$s är för långt borta för att höra ljudet",
    "playsound_success": "Spelade ljudet \"%1$s\" för %2$s",
    "position_description": "Visar/döljer spelarkoordinater.",
    "publish_failed": "Kan inte stå värd för lokalt spel",
    "publish_started": "Lokalt spel anordnas på port %1$s",
    "querytarget_description": "Hämtar uppgifter om förvandling, namn och id om en eller flera angivna enheter.",
    "querytarget_success": "Måldata: %1$s",
    "reload_description": "Laddar om alla funktionsfiler från alla beteendepaket.",
    "reload_success": "Befintliga funktionsfiler har lästs in på nytt. Starta om Minecraft för att ladda om nya funktioner.",
    "replaceitem_description": "Ersätter föremål i förråd.",
    "replaceitem_failed": "Kunde inte ersätta %s plats %d med %d * %s",
    "replaceitem_keepFailed": "Plats %d i %s används redan av ett föremål.",
    "replaceitem_noContainer": "Blocket på %s är ingen behållare",
    "replaceitem_badSlotNumber": "Kunde inte ersätta plats %d; måste vara ett giltigt värde mellan %d och %d.",
    "replaceitem_success": "Ersatte %s plats %d med %d * %s",
    "replaceitem_success_entity": "Ersatte %s plats %d för %s med %d * %s",
    "replaceitem_tagError": "Tolkning av dataetikett misslyckades: %1$s",
    "save_description": "Bestäm eller kontrollera hur spelet sparar data till hårddisken.",
    "save_disabled": "Stängde av automatisk sparning av världen",
    "save_enabled": "Slog på automatisk sparning av världen",
    "save_failed": "Det gick inte att spara: %1$s",
    "save_start": "Sparar ...",
    "save_success": "Världen har sparats",
    "save_all_error": "Ett fel uppstod när nivåns lagring skulle pausas.",
    "save_all_success": "Data sparad. Filerna är nu redo att kopieras.",
    "save_off_alreadyOff": "Sparning är redan avstängt.",
    "save_on_alreadyOn": "Sparning är redan påslaget.",
    "save_on_notDone": "Ingen tidigare sparfil har fullbordats.",
    "save_on_description": "Aktiverar automatisk sparning på servern.",
    "save_on_success": "Ändringar till nivån återupptas.",
    "save_state_description": "Kontrollerar om ett tidigare \"spara allt\" har fullbordats och listar alla inblandade filer.",
    "say_description": "Skickar ett chattmeddelande till andra spelare.",
    "scoreboard_description": "Sparar och visar resultat för diverse uppgifter.",
    "scoreboard_allMatchesFailed": "Alla matchningar misslyckades",
    "scoreboard_noMultiWildcard": "Endast ett jokertecken från användare tillåts",
    "scoreboard_objectiveNotFound": "Hittade inget mål med namnet \"%1$s\"",
    "scoreboard_objectiveReadOnly": "Målet \"%1$s\" är skrivskyddat och kan inte anges",
    "scoreboard_objectives_add_alreadyExists": "Det finns redan ett mål med namnet \"%1$s\"",
    "scoreboard_objectives_add_displayTooLong": "Visningsnamnet för målet \"%1$s\" är för långt; det får vara som längst %2$d tecken",
    "scoreboard_objectives_add_success": "Lade till det nya målet \"%1$s\"",
    "scoreboard_objectives_add_tooLong": "Namnet för målet \"%1$s\" är för långt; det får vara som längst %2$d tecken",
    "scoreboard_objectives_add_wrongType": "Målkriterieklassen \"%1$s\" är ogiltig",
    "scoreboard_objectives_add_needName": "En uppgift måste ha ett namn.",
    "scoreboard_objectives_description": "Modifiera uppgifterna på resultattavlan.",
    "scoreboard_objectives_list_count": "Visar %1$d mål på resultattavlan:",
    "scoreboard_objectives_list_empty": "Det finns inga mål på resultattavlan",
    "scoreboard_objectives_list_entry": "- %1$s: visas som \"%2$s\" och är av klassen \"%3$s\"",
    "scoreboard_objectives_remove_success": "Målet \"%1$s\" har tagits bort",
    "scoreboard_objectives_setdisplay_invalidSlot": "Visningsplatsen \"%1$s\" finns inte",
    "scoreboard_objectives_setdisplay_successCleared": "Visningsplatsen \"%1$s\" har tömts",
    "scoreboard_objectives_setdisplay_successSet": "Ange visningsmål på plats \"%1$s\" till \"%2$s\"",
    "scoreboard_players_add_success": "[%2$s] höjdes med %1$d för %3$s (nu %4$d)",
    "scoreboard_players_add_multiple_success": "[%2$s] höjdes med %1$d för %3$d enheter",
    "scoreboard_players_nameNotFound": "Ett spelarnamn måste anges.",
    "scoreboard_players_enable_noTrigger": "Målet %1$s är ingen utlösare",
    "scoreboard_players_enable_success": "Aktiverade utlösaren %1$s för %2$s",
    "scoreboard_players_list_count": "Visar %1$d följda spelare på resultattavlan:",
    "scoreboard_players_list_empty": "Det finns inga följda spelare på resultattavlan",
    "scoreboard_players_list_player_count": "Visar %1$d följda mål för %2$s:",
    "scoreboard_players_list_player_empty": "Spelare %1$s har inga registrerade resultat",
    "scoreboard_players_list_player_entry": "- %2$s: %1$d (%3$s)",
    "scoreboard_players_operation_invalidOperation": "Ogiltig åtgärd %1$s",
    "scoreboard_players_operation_notFound": "Hittade inget %1$s-resultat för %2$s",
    "scoreboard_players_operation_success": "[%1$s] uppdaterades för %2$d enheter",
    "scoreboard_players_offlinePlayerName": "Spelaren är offline",
    "scoreboard_players_random_invalidRange": "Min %1$d är inte mindre än max %2$d",
    "scoreboard_players_remove_success": "[%2$s] sänktes med %1$d för %3$s (nu %4$d)",
    "scoreboard_players_remove_multiple_success": "[%2$s] sänktes med %1$d för %3$d enheter",
    "scoreboard_players_reset_success": "Nollställ resultat för spelare %1$s",
    "scoreboard_players_resetscore_success": "Nollställ resultatet %1$s för spelare %2$s",
    "scoreboard_players_set_success": "[%1$s] angavs som %3$d för %2$s",
    "scoreboard_players_set_multiple_success": "[%1$s] angavs som %3$d för %2$d enheter",
    "scoreboard_players_set_tagError": "Kunde inte tolka dataTag; anledning: %1$s",
    "scoreboard_players_set_tagMismatch": "dataTag matchar inte för %1$s",
    "scoreboard_players_score_notFound": "Hittade inget %1$s-resultat för %2$s",
    "scoreboard_players_test_failed": "Resultatet %1$d är inte inom spannet %2$d–%3$d",
    "scoreboard_players_test_success": "Resultatet %1$d är inom spannet %2$d–%3$d",
    "scoreboard_teamNotFound": "Hittade inget lag med namnet \"%1$s\"",
    "scoreboard_teams_add_alreadyExists": "Det finns redan ett lag med namnet \"%1$s\"",
    "scoreboard_teams_add_displayTooLong": "Visningsnamnet för laget \"%1$s\" är för långt; det får vara som längst %2$d tecken",
    "scoreboard_teams_add_success": "Lade till det nya laget \"%1$s\"",
    "scoreboard_teams_add_tooLong": "Namnet för laget \"%1$s\" är för långt; det får vara som längst %2$d tecken",
    "scoreboard_teams_empty_alreadyEmpty": "Laget %1$s är redan tomt; kan inte ta bort icke-befintliga spelare",
    "scoreboard_teams_empty_success": "Tog bort alla spelare (%1$d) från laget %2$s",
    "scoreboard_teams_join_failure": "Kunde inte lägga till %1$d spelare till laget %2$s: %3$s",
    "scoreboard_teams_join_success": "Lade till %1$d spelare till laget %2$s: %3$s",
    "scoreboard_teams_leave_failure": "Kunde inte ta bort %1$d spelare från deras lag: %2$s",
    "scoreboard_teams_leave_noTeam": "Du är inte med i något lag",
    "scoreboard_teams_leave_success": "Tog bort %1$d spelare från deras lag: %2$s",
    "scoreboard_teams_list_count": "Visar %1$d lag på resultattavlan:",
    "scoreboard_teams_list_empty": "Det finns registrerade lag på resultattavlan",
    "scoreboard_teams_list_entry": "- %1$s: \"%2$s\" har %3$d spelare",
    "scoreboard_teams_list_player_count": "Visar %1$d spelare i laget %2$s:",
    "scoreboard_teams_list_player_empty": "Laget %1$s har inga spelare",
    "scoreboard_teams_list_player_entry": "- %2$s: %1$d (%3$s)",
    "scoreboard_teams_option_noValue": "Giltiga värden för alternativet %1$s är: %2$s",
    "scoreboard_teams_option_success": "Ställ in %1$s för laget %2$s till %3$s",
    "scoreboard_teams_remove_success": "Tog bort laget %1$s",
    "seed_success": "Frö: %1$s",
    "setblock_description": "Ändrar ett block till ett annat block.",
    "setblock_failed": "Kunde inte placera block",
    "setblock_noChange": "Blocket kunde inte placeras",
    "setblock_notFound": "Det finns inget block med ID/namnet %1$s",
    "setblock_outOfWorld": "Kan inte placera block utanför världen",
    "setblock_success": "Block placerat",
    "setblock_tagError": "Tolkning av dataetikett misslyckades: %1$s",
    "setidletimeout_success": "Inaktivitetsavstängning har ställts in på %1$d minuter.",
    "setfixedinvslots_description": "Anger antalet låsta förrådsplatser på servern.",
    "setfixedinvslots_success": "Antalet låsta förrådsplatser har ställts in på %1$d",
    "setfixedinvslot_description": "Låser ett särskilt föremål till en viss plats.",
    "setfixedinvslot_success": "Låst förrådsplats %1$d har ställts in på %2$s",
    "globalpause_description": "Anger eller kontrollerar pausstatus i spelet för alla spelare.",
    "globalpause_success": "Angav eller kontrollerade pausstatus",
    "setmaxplayers_description": "Anger det maximala antalet spelare i den här spelsessionen.",
    "setmaxplayers_success": "Anger maximalt antal spelare till %1$d.",
    "setmaxplayers_success_upperbound": "(Bundet till det maximala antalet tillåtna anslutningar)",
    "setmaxplayers_success_lowerbound": "(Bundet till nuvarande spelarantal)",
    "setworldspawn_description": "Bestämmer spawnplats i världen.",
    "setworldspawn_success": "Ange spawnplats i världen till (%1$d, %2$d, %3$d)",
    "setworldspawn_wrongDimension": "Spawnplatsen i världen kan inte vara i den här dimensionen",
    "spawnpoint_success_single": "Ange spawnplats för %1$s till (%2$d, %3$d, %4$d)",
    "spawnpoint_description": "Bestämmer spawnplats för en spelare.",
    "spawnpoint_success_multiple_specific": "Ange spawnplats för %1$s till (%2$d, %3$d, %4$d)",
    "spawnpoint_success_multiple_generic": "Ange spawnplats för %1$s",
    "spawnpoint_wrongDimension": "Spawnplatsen kan inte vara i den här dimensionen",
    "spreadplayers_description": "Teleporterar enheter till slumpmässiga platser.",
    "spreadplayers_failure_players": "Kunde inte sprida ut %1$s spelare runt %2$s,%3$s (för många spelare för ytan; prova en högsta spridning på %4$s)",
    "spreadplayers_failure_teams": "Kunde inte sprida ut %1$s lag runt %2$s,%3$s (för många spelare för ytan; prova en högsta spridning på %4$s)",
    "spreadplayers_info_players": "(Snittavstånd mellan spelare är %1$s blocks mellanrum efter %2$s upprepningar)",
    "spreadplayers_info_teams": "(Snittavstånd mellan lag är %1$s blocks mellanrum efter %2$s upprepningar)",
    "spreadplayers_spreading_players": "Sprider ut %1$s spelare bland %2$s block runt %3$s,%4$s (minst %5$s blocks mellanrum)",
    "spreadplayers_spreading_teams": "Sprider ut %1$s lag bland %2$s block runt %3$s,%4$s (minst %5$s blocks mellanrum)",
    "spreadplayers_success_players": "%1$s spelare har spridits ut runt %2$s,%3$s",
    "spreadplayers_success_teams": "%1$s lag har spridits ut runt %2$s,%3$s",
    "stats_cleared": "Nollställde %1$s statistikposter",
    "stats_failed": "Ogiltiga parametrar",
    "stats_noCompatibleBlock": "Blocket på %1$d, %2$d, %3$d kan inte spara statistikposter",
    "stats_success": "Sparar %1$s statistikposter i %2$s på %3$s",
    "stop_description": "Stoppar servern.",
    "stop_start": "Stoppar servern",
    "stopsound_description": "Stoppar ett ljud.",
    "stopsound_success": "Stoppade ljudet %s för %s",
    "stopsound_success_all": "Stoppade alla ljud för %s",
    "summon_description": "Åkallar en enhet.",
    "summon_failed": "Kan inte åkalla objekt",
    "summon_outOfWorld": "Kan inte åkalla objektet utanför världen",
    "summon_success": "Objektet har åkallats",
    "summon_tagError": "Tolkning av dataetikett misslyckades: %1$s",
    "tag_description": "Hanterar taggar lagrade i enheter.",
    "tag_add_failed": "Målet innehåller antingen redan taggen eller har för många taggar",
    "tag_add_success_single": "Lade till taggen \"%1$s\" till %2$s",
    "tag_add_success_multiple": "Lade till taggen \"%1$s\" till %2$d enheter",
    "tag_list_single_empty": "%s har inga taggar",
    "tag_list_single_success": "%1$s har %2$d taggar: %3$s",
    "tag_list_multiple_empty": "Det finns inga taggar på de %d enheterna",
    "tag_list_multiple_success": "De %1$d enheterna har totalt %2$d taggar: %3$s",
    "tag_remove_failed": "Målet saknar taggen",
    "tag_remove_success_single": "Tog bort taggen \"%1$s\" från %2$s",
    "tag_remove_success_multiple": "Tog bort taggen \"%1$s\" från %2$d enheter",
    "tell_description": "Skickar ett privat meddelande till en eller flera spelare.",
    "tellraw_description": "Skickar ett JSON-meddelande till spelare.",
    "tellraw_jsonException": "Ogiltig json: %1$s",
    "tellraw_jsonStringException": "Ogiltig JSON-strängdata.",
    "tellraw_error_noData": "Ingen data angavs.",
    "tellraw_error_notArray": "Råtextobjekt måste innehålla en matris. Exempel: \"rawtext\":[{..}]",
    "tellraw_error_textNotString": "Textfältet i råtext måste innehålla en sträng. Exempel: \"rawtext\":[{\"text\": \"text to display\"}]",
    "tellraw_error_translateNotString": "Översättningsfältet i råtext måste innehålla en språkkod. Exempel: \"rawtext\":[{\"translate\": \"gui.ok\"}]",
    "tellraw_error_withNotArrayOrRawText": "Medfältet i råtext måste innehålla en matris eller ett annat råtextobjekt. Exempel 1: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\": [ \"value1\", \"value2\" ]}]. Exempel 2: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\":{\"rawtext\":[{\"text\": \"value1\"}, {\"text\": \"value2\"}]}}].",
    "tellraw_error_itemIsNotObject": "Json-värdet i råtextmatrisen var inte ett objekt. Exempel: \"rawtext\": [{ \"text\" : \"my text\" }]",
    "educlientinfo_description": "Hämta klient-ID och värdstatus. Avsett för CM.",
    "testfor_description": "Räknar hur många enheter (spelare, varelser, föremål o.s.v.) som matchar angivna villkor.",
    "testfor_failure": "%1$s matchade inte den obligatoriska datastrukturen",
    "testfor_success": "Hittade %1$s",
    "testfor_tagError": "Tolkning av dataetikett misslyckades: %1$s",
    "testforblock_description": "Testar om ett visst block befinner sig på en specifik plats.",
    "testforblock_failed_data": "Blocket på %1$d,%2$d,%3$d matchade inte det förväntade blocktillståndet.",
    "testforblock_failed_nbt": "Blocket på %1$d,%2$d,%3$d hade inte de obligatoriska NBT-nycklarna.",
    "testforblock_failed_tile": "Blocket på %1$d,%2$d,%3$d är %4$s (förväntat: %5$s).",
    "testforblock_failed_tileEntity": "Blocket på %1$d,%2$d,%3$d är ingen rutenhet och stöder inte etikettmatchning.",
    "testforblock_outOfWorld": "Kan inte testa gentemot block utanför världen",
    "testforblock_success": "Blocket hittades på %1$d,%2$d,%3$d.",
    "testforblocks_description": "Testar om blocken i två regioner matchar.",
    "tickingarea_description": "Lägg till, ta bort eller lista tickområden.",
    "tickingarea_inuse": "%1$d/%2$d tickområden används.",
    "tickingarea_noneExist_currentDimension": "Den aktuella dimensionen har inga tickområden.",
    "tickingarea_add_bounds_success": "Lade till tickområde från %1$d till %2$d",
    "tickingarea_add_circle_success": "Lade till tickområde centrerat till %1$d med en radie på %2$d datablock.",
    "tickingarea_add_failure": "Det maximala antalet tickområden (%1$d) har redan uppnåtts. Kan inte lägga till fler tickområden.",
    "tickingarea_add_conflictingname": "Det finns redan ett tickområde med namnet %1$s.",
    "tickingarea_add_chunkfailure": "Tickområdet har fler än %1$d datablock; tickområdet är för stort och kan inte skapas.",
    "tickingarea_add_radiusfailure": "Radien kan inte vara större än %1$d; tickområdet är för stort och kan inte skapas.",
    "tickingarea_remove_success": "Tog bort tickområde(n)",
    "tickingarea_remove_failure": "Den aktuella dimensionen har inga tickområden med blockpositionen %1$d.",
    "tickingarea_remove_byname_failure": "Den aktuella dimensionen har inga tickområden vid namn %1$s.",
    "tickingarea_remove_all_success": "Tog bort tickområde(n)",
    "tickingarea_remove_all_failure": "Den aktuella dimensionen har inga tickområden.",
    "tickingarea_list_chunks": "datablock",
    "tickingarea_list_circle_radius": "Radie",
    "tickingarea_list_success_currentDimension": "Lista med alla tickområden i den aktuella dimensionen",
    "tickingarea_list_success_allDimensions": "Lista med alla tickområden i alla dimensioner",
    "tickingarea_list_failure_allDimensions": "Inga dimensioner har tickområden.",
    "tickingarea_list_to": "till",
    "tickingarea_list_type_circle": "Cirkel",
    "time_added": "Lade till %1$d till klockan",
    "time_description": "Ändrar eller kontrollerar världens speltid.",
    "time_disabled": "Alltid dag är aktiverat på den här nivån.",
    "time_query_day": "Dagen är %d",
    "time_query_daytime": "Klockan är %d",
    "time_query_gametime": "Speltiden är %d",
    "time_set": "Ställ in klockan till %1$d",
    "time_stop": "Tid %1$s",
    "title_description": "Kontrollerar skärmtitlar.",
    "title_success": "Titelkommandot verkställdes",
    "titleraw_description": "Kontrollerar skärmtitlar med JSON-meddelanden.",
    "toggledownfall_description": "Växlar väder.",
    "tp_description": "Teleporterar enheter (spelare, varelser o.s.v.)",
    "tp_notSameDimension": "Kan inte teleportera; spelarna befinner sig inte i samma dimension",
    "tp_outOfWorld": "Kan inte teleportera enheter utanför världen",
    "tp_permission": "Du har inte tillstånd att använda det här snedstreckskommandot.",
    "tp_safeTeleportFail": "Kan inte teleportera %1$s till %2$s för att det är block i området.",
    "tp_far": "Kan inte teleportera %1$s till det bortladdade området vid %2$s",
    "tp_success": "Teleporterade %1$s till %2$s",
    "tp_successVictim": "Du har blivit teleporterad till %1$s",
    "tp_success_coordinates": "Teleporterade %1$s till %2$s, %3$s, %4$s",
    "transferserver_description": "Flyttar en spelare till en annan server.",
    "transferserver_successful": "Flyttade spelaren",
    "transferserver_invalid_port": "Ogiltig port (0–65535)",
    "trigger_description": "Anger en utlösare som ska aktiveras.",
    "trigger_disabled": "Utlösaren %1$s har inte aktiverats",
    "trigger_invalidMode": "Ogiltigt utlösarläge %1$s",
    "trigger_invalidObjective": "Ogiltigt utlösarnamn %1$s",
    "trigger_invalidPlayer": "Bara spelare kan använda kommandot /trigger",
    "trigger_success": "Utlösaren %1$s ändrades med %2$s %3$s",
    "unban_failed": "Kunde inte häva spärrningen av spelare %1$s",
    "unban_success": "Spärrningen av spelare %1$s har hävts",
    "unbanip_invalid": "Du har angett en ogiltig IP-adress",
    "unbanip_success": "Spärrningen av IP-adressen %1$s har hävts",
    "validategamelighting_description": "Bekräfta spelljuset för en angiven region",
    "validategamelighting_checkRegionTooBig": "Regionen är för stor för att ljuset ska kunna kontrolleras! (%1$d > %2$d)",
    "validategamelighting_outOfWorld": "Kan inte kontrollera ljuset utanför världen",
    "weather_clear": "Ändrar till klart väder",
    "weather_description": "Bestämmer vädret.",
    "weather_disabled": "Vädercykel är inte aktiverat på den här nivån.",
    "weather_query": "Vädret är: %s",
    "weather_query_clear": "klart",
    "weather_query_rain": "regn",
    "weather_query_thunder": "åska",
    "weather_rain": "Ändrar till regnigt väder",
    "weather_thunder": "Ändrar till regn och åska",
    "whitelist_add_failed": "Kunde inte lägga till %1$s på listan över tillåtna",
    "whitelist_add_success": "%1$s har lagts till på listan över tillåtna",
    "whitelist_description": "Hanterar serverns lista över tillåtna.",
    "whitelist_disabled": "Vitlistan har stängts av",
    "whitelist_enabled": "Vitlistan har slagits på",
    "whitelist_list": "Det finns %1$d (av %2$d sedda) spelare på listan över tillåtna:",
    "whitelist_reloaded": "Vitlistan har uppdaterats från fil.",
    "whitelist_remove_failed": "Kunde inte ta bort %1$s från listan över tillåtna",
    "whitelist_remove_success": "Tog bort %1$s från listan över tillåtna",
    "world_age_description": "Ändrar eller kontrollerar världens ålder (tid sedan den skapades).",
    "world_age_added": "Gjorde världen %1$d äldre",
    "world_age_query": "Världens ålder är %d",
    "world_age_set": "Ställ in världens ålder som %1$d",
    "worldborder_center_success": "Ställ in världsgränsens mittpunkt till %1$s,%2$s",
    "worldborder_damage_amount_success": "Ställ in världsgränsens skadestyrka till %1$s per block (från %2$s per block)",
    "worldborder_damage_buffer_success": "Ställ in världsgränsens skadebuffert till %1$s block (från %2$s block)",
    "worldborder_get_success": "Världsgränsen är %1$s block bred för tillfället",
    "worldborder_set_success": "Ställ in världsgränsens bredd till %1$s block (från %2$s block)",
    "worldborder_setSlowly_grow_success": "Expanderar världsgränsens bredd till %1$s block (en ökning från %2$s block) under %3$s sekunder",
    "worldborder_setSlowly_shrink_success": "Krymper världsgränsens bredd till %1$s block (en minskning från %2$s block) under %3$s sekunder",
    "worldborder_warning_distance_success": "Ställ in världsgränsens varning till ett avstånd på %1$s block bort (från %2$s block)",
    "worldborder_warning_time_success": "Ställ in världsgränsens varning till ett avstånd på %1$s sekunder bort (från %2$s sekunder)",
    "worldbuilder_description": "Växla världsgränsens status för anroparen.",
    "worldbuilder_success": "Världsgränsens status uppdaterad till %1$s",
    "wsserver_description": "Försöker att ansluta till Websocket-servern på den angivna adressen.",
    "wsserver_invalid_url": "Den angivna serveradressen är ogiltig",
    "wsserver_request_existing": "En annan anslutningsförfrågan körs för tillfället",
    "wsserver_request_failed": "Kunde inte ansluta till servern: %1$s",
    "wsserver_success": "Anslutning upprättad till servern: %1$s",
    "xp_description": "Ger eller tar erfarenhet från spelare.",
    "xp_failure_widthdrawXp": "Kan inte ge spelare negativa erfarenhetspoäng",
    "xp_success": "Gav %1$d erfarenhetspoäng till %2$s",
    "xp_success_levels": "Gav %1$d nivåer till %2$s",
    "xp_success_negative_levels": "Tog %1$d nivåer från %2$s"
},
item:{
    "air": [
        "Luft"
    ],
    "apple": [
        "Äpple"
    ],
    "golden_apple": [
        "Guldäpple"
    ],
    "appleenchanted": [
        "Förtrollat äpple"
    ],
    "armor_stand": [
        "Rustningsställ"
    ],
    "arrow": [
        "Pil"
    ],
    "tipped_arrow": [
        "Doppad pil"
    ],
    "banner": [
        "Svart banderoll",
        "Svart banderoll",
        "Röd banderoll",
        "Grön banderoll",
        "Brun banderoll",
        "Blå banderoll",
        "Lila banderoll",
        "Turkos banderoll",
        "Ljusgrå banderoll",
        "Grå banderoll",
        "Rosa banderoll",
        "Limegrön banderoll",
        "Gul banderoll",
        "Ljusblå banderoll",
        "Ljuslila banderoll",
        "Orange banderoll",
        "Vit banderoll"
    ],
    "bed": [
        "Säng",
        "Vit säng",
        "Orange säng",
        "Ljuslila säng",
        "Ljusblå säng",
        "Gul säng",
        "Limegrön säng",
        "Rosa säng",
        "Grå säng",
        "Ljusgrå säng",
        "Turkos säng",
        "Lila säng",
        "Blå säng",
        "Brun säng",
        "Grön säng",
        "Röd säng",
        "Svart säng"
    ],
    "bell": [
        "Ringklocka"
    ],
    "steak": [
        "Biff"
    ],
    "beef": [
        "Rått nötkött"
    ],
    "beetroot": [
        "Rödbeta"
    ],
    "beetroot_soup": [
        "Rödbetssoppa"
    ],
    "blaze_powder": [
        "Flampulver"
    ],
    "blaze_rod": [
        "Flamstav"
    ],
    "boat": [
        "Ekbåt",
        "Ekbåt",
        "Granbåt",
        "Björkbåt",
        "Djungelbåt",
        "Akaciabåt",
        "Mörk ekbåt"
    ],
    "bone": [
        "Ben"
    ],
    "book": [
        "Bok"
    ],
    "chainmail_boots": [
        "Ringstövlar"
    ],
    "leather_boots": [
        "Läderstövlar"
    ],
    "diamond_boots": [
        "Diamantstövlar"
    ],
    "golden_boots": [
        "Guldstövlar"
    ],
    "iron_boots": [
        "Järnstövlar"
    ],
    "bow": [
        "Pilbåge"
    ],
    "bowl": [
        "Skål"
    ],
    "bread": [
        "Bröd"
    ],
    "brewing_stand": [
        "Brygdställ"
    ],
    "brick": [
        "Tegelsten"
    ],
    "bucket": [
        "Hink"
    ],
    "bucketLava": [
        "Lavahink"
    ],
    "bucketWater": [
        "Vattenhink"
    ],
    "bucketFish": [
        "Hink med torsk"
    ],
    "bucketSalmon": [
        "Hink med lax"
    ],
    "bucketTropical": [
        "Hink med tropisk fisk"
    ],
    "bucketPuffer": [
        "Hink med blåsfisk"
    ],
    "bucketCustomFish": [
        "Hink med"
    ],
    "tropicalColorWhite": [
        "Vit"
    ],
    "tropicalColorOrange": [
        "Orange"
    ],
    "tropicalColorMagenta": [
        "Ljuslila"
    ],
    "tropicalColorSky": [
        "Himmelsblå"
    ],
    "tropicalColorYellow": [
        "Gul"
    ],
    "tropicalColorLime": [
        "Limegrön"
    ],
    "tropicalColorRose": [
        "Rosenröd"
    ],
    "tropicalColorGray": [
        "Grå"
    ],
    "tropicalColorSilver": [
        "Silver"
    ],
    "tropicalColorTeal": [
        "Blågrön"
    ],
    "tropicalColorPlum": [
        "Plommonlila"
    ],
    "tropicalColorBlue": [
        "Blå"
    ],
    "tropicalColorBrown": [
        "Brun"
    ],
    "tropicalColorGreen": [
        "Grön"
    ],
    "tropicalColorRed": [
        "Röd"
    ],
    "tropicalBodyKobSingle": [
        "%1$s kobb"
    ],
    "tropicalBodySunstreakSingle": [
        "%1$s solstripa"
    ],
    "tropicalBodySnooperSingle": [
        "%1$s snokare"
    ],
    "tropicalBodyDasherSingle": [
        "%1$s smitfisk"
    ],
    "tropicalBodyBrinelySingle": [
        "%1$s saltfisk"
    ],
    "tropicalBodySpottySingle": [
        "%1$s fläckfisk"
    ],
    "tropicalBodyFlopperSingle": [
        "%1$s sprattelfisk"
    ],
    "tropicalBodyStripeySingle": [
        "%1$s zebrafisk"
    ],
    "tropicalBodyGlitterSingle": [
        "%1$s glitterfisk"
    ],
    "tropicalBodyBlockfishSingle": [
        "%1$s blockfisk"
    ],
    "tropicalBodyBettySingle": [
        "%1$s bettyfisk"
    ],
    "tropicalBodyClayfishSingle": [
        "%1$s lergust"
    ],
    "tropicalBodyKobMulti": [
        "%1$s-%2$s kobb"
    ],
    "tropicalBodySunstreakMulti": [
        "%1$s-%2$s solstripa"
    ],
    "tropicalBodySnooperMulti": [
        "%1$s-%2$s snokare"
    ],
    "tropicalBodyDasherMulti": [
        "%1$s-%2$s smitfisk"
    ],
    "tropicalBodyBrinelyMulti": [
        "%1$s-%2$s saltfisk"
    ],
    "tropicalBodySpottyMulti": [
        "%1$s-%2$s fläckfisk"
    ],
    "tropicalBodyFlopperMulti": [
        "%1$s-%2$s sprattelfisk"
    ],
    "tropicalBodyStripeyMulti": [
        "%1$s-%2$s zebrafisk"
    ],
    "tropicalBodyGlitterMulti": [
        "%1$s-%2$s glitterfisk"
    ],
    "tropicalBodyBlockfishMulti": [
        "%1$s-%2$s blockfisk"
    ],
    "tropicalBodyBettyMulti": [
        "%1$s-%2$s bettyfisk"
    ],
    "tropicalBodyClayfishMulti": [
        "%1$s-%2$s lergust"
    ],
    "tropicalSchoolAnemone": [
        "Anemon"
    ],
    "tropicalSchoolBlackTang": [
        "Svart kirurgfisk"
    ],
    "tropicalSchoolBlueDory": [
        "Blå kirurgfisk"
    ],
    "tropicalSchoolButterflyFish": [
        "Fjärilsfisk"
    ],
    "tropicalSchoolCichlid": [
        "Ciklid"
    ],
    "tropicalSchoolClownfish": [
        "Clownfisk"
    ],
    "tropicalSchoolCottonCandyBetta": [
        "Regnbågskampfisk"
    ],
    "tropicalSchoolDottyback": [
        "Pseudochromidae"
    ],
    "tropicalSchoolEmperorRedSnapper": [
        "Kejsarsnapper"
    ],
    "tropicalSchoolGoatfish": [
        "Mullusfisk"
    ],
    "tropicalSchoolMoorishIdol": [
        "Zanclidae"
    ],
    "tropicalSchoolOrnateButterfly": [
        "Chaetodon ornatissimus"
    ],
    "tropicalSchoolParrotfish": [
        "Papegojfisk"
    ],
    "tropicalSchoolQueenAngelFish": [
        "Holacanthus ciliaris"
    ],
    "tropicalSchoolRedCichlid": [
        "Rödzebra"
    ],
    "tropicalSchoolRedLippedBlenny": [
        "Ophioblennius atlanticus"
    ],
    "tropicalSchoolRedSnapper": [
        "Röd snapper"
    ],
    "tropicalSchoolThreadfin": [
        "Polynemidae"
    ],
    "tropicalSchoolTomatoClown": [
        "Amphiprion frenatus"
    ],
    "tropicalSchoolTriggerfish": [
        "Tryckarfisk"
    ],
    "tropicalSchoolYellowTang": [
        "Gul kirurg"
    ],
    "tropicalSchoolYellowtailParrot": [
        "Scarus hypselopterus"
    ],
    "cake": [
        "Tårta"
    ],
    "camera": [
        "Kamera"
    ],
    "golden_carrot": [
        "Gyllene morot"
    ],
    "carrotOnAStick": [
        "Morot på en pinne"
    ],
    "warped_fungus_on_a_stick": [
        "Vriden svamp på pinne"
    ],
    "carrot": [
        "Morot"
    ],
    "cauldron": [
        "Kittel"
    ],
    "coal": [
        "Kol",
        null,
        "Träkol"
    ],
    "chainmail_chestplate": [
        "Ringbrynja"
    ],
    "leather_chestplate": [
        "Lädertunika"
    ],
    "diamond_chestplate": [
        "Diamantharnesk"
    ],
    "golden_chestplate": [
        "Guldharnesk"
    ],
    "iron_chestplate": [
        "Järnharnesk"
    ],
    "chorus_fruit": [
        "Körfrukt"
    ],
    "chorus_fruit_popped": [
        "Utslagen körfrukt"
    ],
    "cooked_beef": [
        "Tillagat nötkött"
    ],
    "cooked_chicken": [
        "Tillagad kyckling"
    ],
    "cooked_porkchop": [
        "Tillagad fläskkotlett"
    ],
    "chicken": [
        "Rå kyckling"
    ],
    "clay_ball": [
        "Lera"
    ],
    "clock": [
        "Klocka"
    ],
    "comparator": [
        "Rödstensjämförare"
    ],
    "compass": [
        "Kompass"
    ],
    "lodestonecompass": [
        "Lodstenskompass"
    ],
    "cookie": [
        "Kaka"
    ],
    "crossbow": [
        "Armborst"
    ],
    "diamond": [
        "Diamant"
    ],
    "repeater": [
        "Rödstensrepeterare"
    ],
    "acacia_door": [
        "Akaciadörr"
    ],
    "birch_door": [
        "Björkdörr"
    ],
    "dark_oak_door": [
        "Mörk ekdörr"
    ],
    "iron_door": [
        "Järndörr"
    ],
    "jungle_door": [
        "Djungeldörr"
    ],
    "wooden_door": [
        "Ekdörr"
    ],
    "spruce_door": [
        "Grandörr"
    ],
    "crimson_door": [
        "Karmosindörr"
    ],
    "warped_door": [
        "Förvriden dörr"
    ],
    "dragon_breath": [
        "Drakes andedräkt"
    ],
    "dye": [
        "Bläcksäck",
        "Bläcksäck",
        "Rött färgämne",
        "Grönt färgämne",
        "Kakaobönor",
        "Lapis lazuli",
        "Lila färg",
        "Turkos färg",
        "Ljusgrå färg",
        "Grå färg",
        "Rosa färg",
        "Limegrön färg",
        "Gult färgämne",
        "Ljusblå färg",
        "Ljuslila färg",
        "Orange färg",
        "Benmjöl",
        "Svart färgämne",
        "Brunt färgämne",
        "Blåt färgämne",
        "Vitt färgämne"
    ],
    "egg": [
        "Ägg"
    ],
    "elytra": [
        "Elytra"
    ],
    "emerald": [
        "Smaragd"
    ],
    "emptyMap": [
        "Tom karta"
    ],
    "emptyLocatorMap": [
        "Tom orienteringskarta"
    ],
    "emptyPotion": [
        "Vattenflaska"
    ],
    "enchanted_book": [
        "Förtrollad bok"
    ],
    "end_crystal": [
        "Endkristall"
    ],
    "end_rod": [
        "Slutstav"
    ],
    "ender_eye": [
        "Enderöga"
    ],
    "ender_pearl": [
        "Enderpärla"
    ],
    "experience_bottle": [
        "Förtrollningsflaska"
    ],
    "feather": [
        "Fjäder"
    ],
    "fermented_spider_eye": [
        "Jäst spindelöga"
    ],
    "fireball": [
        "Eldladdning"
    ],
    "fireworks": [
        "Fyrverkeriraket"
    ],
    "fireworksCharge": [
        "Fyrverkeristjärna"
    ],
    "clownfish": [
        "Tropisk fisk"
    ],
    "cooked_fish": [
        "Tillagad torsk"
    ],
    "fish": [
        "Rå torsk"
    ],
    "pufferfish": [
        "Blåsfisk"
    ],
    "cooked_salmon": [
        "Tillagad lax"
    ],
    "salmon": [
        "Rå lax"
    ],
    "fishing_rod": [
        "Fiskespö"
    ],
    "flint": [
        "Flinta"
    ],
    "flint_and_steel": [
        "Flinta och stål"
    ],
    "flower_pot": [
        "Blomkruka"
    ],
    "frame": [
        "Ram"
    ],
    "ghast_tear": [
        "Gasttår"
    ],
    "glass_bottle": [
        "Glasflaska"
    ],
    "gold_nugget": [
        "Guldklimp"
    ],
    "iron_nugget": [
        "Järnklimp"
    ],
    "diamond_axe": [
        "Diamantyxa"
    ],
    "golden_axe": [
        "Guldyxa"
    ],
    "iron_axe": [
        "Järnyxa"
    ],
    "stone_axe": [
        "Stenyxa"
    ],
    "wooden_axe": [
        "Träyxa"
    ],
    "chainmail_helmet": [
        "Ringhjälm"
    ],
    "leather_helmet": [
        "Lädermössa"
    ],
    "diamond_helmet": [
        "Diamanthjälm"
    ],
    "golden_helmet": [
        "Guldhjälm"
    ],
    "iron_helmet": [
        "Järnhjälm"
    ],
    "diamond_hoe": [
        "Diamanthacka"
    ],
    "golden_hoe": [
        "Guldhacka"
    ],
    "iron_hoe": [
        "Järnhacka"
    ],
    "stone_hoe": [
        "Stenhacka"
    ],
    "wooden_hoe": [
        "Trähacka"
    ],
    "honey_bottle": [
        "Honungsflaska"
    ],
    "honeycomb": [
        "Honungskaka"
    ],
    "horsearmordiamond": [
        "Hästrustning av diamant"
    ],
    "horsearmorgold": [
        "Hästrustning av guld"
    ],
    "horsearmoriron": [
        "Hästrustning av järn"
    ],
    "horsearmorleather": [
        "Hästrustning av läder"
    ],
    "gold_ingot": [
        "Guldtacka"
    ],
    "iron_ingot": [
        "Järntacka"
    ],
    "netherite_ingot": [
        "Netherittacka"
    ],
    "netherite_scrap": [
        "Netheritstycke"
    ],
    "netherite_sword": [
        "Netheritsvärd"
    ],
    "netherite_pickaxe": [
        "Netheritspetshacka"
    ],
    "netherite_axe": [
        "Netherityxa"
    ],
    "netherite_shovel": [
        "Nehteritspade"
    ],
    "netherite_hoe": [
        "Netherithacka"
    ],
    "netherite_boots": [
        "Netheritstövlar"
    ],
    "netherite_leggings": [
        "Netheritbyxor"
    ],
    "netherite_chestplate": [
        "Netheritharnesk"
    ],
    "netherite_helmet": [
        "Netherithjälm"
    ],
    "lead": [
        "Koppel"
    ],
    "leather": [
        "Läder"
    ],
    "leaves": [
        "Löv",
        "Eklöv",
        "Granbarr",
        "Björklöv",
        "Djungellöv",
        "Akacialöv",
        "Mörka eklöv"
    ],
    "chainmail_leggings": [
        "Ringbyxor"
    ],
    "leather_leggings": [
        "Läderbyxor"
    ],
    "diamond_leggings": [
        "Diamantbyxor"
    ],
    "golden_leggings": [
        "Guldbyxor"
    ],
    "iron_leggings": [
        "Järnbyxor"
    ],
    "nautilus_shell": [
        "Nautilusskal"
    ],
    "heart_of_the_sea": [
        "Havets hjärta"
    ],
    "magma_cream": [
        "Magmamassa"
    ],
    "map": [
        "Karta"
    ],
    "melon": [
        "Melon"
    ],
    "milk": [
        "Mjölk"
    ],
    "minecart": [
        "Gruvvagn"
    ],
    "chest_minecart": [
        "Gruvvagn med kista"
    ],
    "command_block_minecart": [
        "Gruvvagn med kommandoblock"
    ],
    "minecartFurnace": [
        "Gruvvagn med smältugn"
    ],
    "hopper_minecart": [
        "Gruvvagn med tratt"
    ],
    "tnt_minecart": [
        "Gruvvagn med dynamit"
    ],
    "trident": [
        "Treudd"
    ],
    "mushroom_stew": [
        "Svampstuvning"
    ],
    "muttoncooked": [
        "Tillagat får"
    ],
    "muttonraw": [
        "Rått får"
    ],
    "name_tag": [
        "Namnskylt"
    ],
    "netherbrick": [
        "Nether-tegel"
    ],
    "quartz": [
        "Nether-kvarts"
    ],
    "nether_wart": [
        "Nether-vårta"
    ],
    "netherStar": [
        "Nether-stjärna"
    ],
    "painting": [
        "Tavla"
    ],
    "paper": [
        "Papper"
    ],
    "diamond_pickaxe": [
        "Diamantspetshacka"
    ],
    "golden_pickaxe": [
        "Guldspetshacka"
    ],
    "iron_pickaxe": [
        "Järnspetshacka"
    ],
    "stone_pickaxe": [
        "Stenspetshacka"
    ],
    "wooden_pickaxe": [
        "Träspetshacka"
    ],
    "porkchop_cooked": [
        "Tillagad fläskkotlett"
    ],
    "porkchop": [
        "Rå fläskkotlett"
    ],
    "portfolio": [
        "Portfölj"
    ],
    "potato": [
        "Potatis"
    ],
    "baked_potato": [
        "Bakad potatis"
    ],
    "poisonous_potato": [
        "Giftig potatis"
    ],
    "potion": [
        "Brygd"
    ],
    "prismarine_crystals": [
        "Prismarinkristaller"
    ],
    "prismarine_shard": [
        "Prismarinskärva"
    ],
    "pumpkin_pie": [
        "Pumpapaj"
    ],
    "cooked_rabbit": [
        "Tillagad kanin"
    ],
    "rabbit_foot": [
        "Kaninfot"
    ],
    "rabbit_hide": [
        "Kaninskinn"
    ],
    "rabbit": [
        "Rå kanin"
    ],
    "rabbit_stew": [
        "Kaningryta"
    ],
    "record": [
        "Musikskiva"
    ],
    "redstone": [
        "Rödsten"
    ],
    "reeds": [
        "Sockerrör"
    ],
    "kelp": [
        "Kelp"
    ],
    "dried_kelp": [
        "Torkad kelp"
    ],
    "rotten_flesh": [
        "Ruttet kött"
    ],
    "ruby": [
        "Rubin"
    ],
    "saddle": [
        "Sadel"
    ],
    "wheat_seeds": [
        "Frön"
    ],
    "beetroot_seeds": [
        "Rödbetsfrön"
    ],
    "melon_seeds": [
        "Melonfrön"
    ],
    "pumpkin_seeds": [
        "Pumpafrön"
    ],
    "shears": [
        "Sax"
    ],
    "diamond_shovel": [
        "Diamantspade"
    ],
    "golden_shovel": [
        "Guldspade"
    ],
    "iron_shovel": [
        "Järnspade"
    ],
    "stone_shovel": [
        "Stenspade"
    ],
    "wooden_shovel": [
        "Träspade"
    ],
    "sign": [
        "Ekskylt"
    ],
    "spruce_sign": [
        "Granskylt"
    ],
    "birch_sign": [
        "Björkskylt"
    ],
    "jungle_sign": [
        "Djungelskylt"
    ],
    "acacia_sign": [
        "Akaciaskylt"
    ],
    "darkoak_sign": [
        "Mörk ekskylt"
    ],
    "crimson_sign": [
        "Karmosinskylt"
    ],
    "warped_sign": [
        "Förvriden skylt"
    ],
    "skull": [
        "Skelettskalle",
        "Skelettskalle",
        "Wither-skelettkranium",
        "Zombiehuvud",
        "Huvud",
        "Creeper-huvud",
        "Drakhuvud"
    ],
    "slime_ball": [
        "Slemboll"
    ],
    "snowball": [
        "Snöboll"
    ],
    "speckled_melon": [
        "Gnistrande melon"
    ],
    "spider_eye": [
        "Spindelöga"
    ],
    "stick": [
        "Pinne"
    ],
    "string": [
        "Snöre"
    ],
    "sugar": [
        "Socker"
    ],
    "gunpowder": [
        "Krut"
    ],
    "diamond_sword": [
        "Diamantsvärd"
    ],
    "golden_sword": [
        "Guldsvärd"
    ],
    "iron_sword": [
        "Järnsvärd"
    ],
    "stone_sword": [
        "Stensvärd"
    ],
    "wooden_sword": [
        "Träsvärd"
    ],
    "wheat": [
        "Vete"
    ],
    "writable_book": [
        "Bok och fjäderpenna"
    ],
    "written_book": [
        "Skriven bok"
    ],
    "glowstone_dust": [
        "Glödstensstoft"
    ],
    "shield": [
        "Sköld"
    ],
    "shulker_shell": [
        "Shulkerskal"
    ],
    "totem": [
        "Vandöendets totem"
    ],
    "turtle_helmet": [
        "Sköldpaddsskal"
    ],
    "turtle_shell_piece": [
        "Fjäll"
    ],
    "phantom_membrane": [
        "Fantommembran"
    ],
    "sweet_berries": [
        "Söta bär"
    ],
    "suspicious_stew": [
        "Suspekt stuvning"
    ],
    "banner_pattern": [
        "Fanmönster"
    ],
    "acaciaFence": [
        "Akaciastaket"
    ],
    "acacia_fence_gate": [
        "Akaciagrind"
    ],
    "activator_rail": [
        "Aktiveringsräls"
    ],
    "allow": [
        "Tillåt"
    ],
    "deny": [
        "Neka"
    ],
    "border_block": [
        "Gräns"
    ],
    "anvil": [
        "Städ",
        "Städ",
        null,
        null,
        null,
        "Lätt skadat städ",
        null,
        null,
        null,
        "Mycket skadat städ"
    ],
    "barrier": [
        "Barriär"
    ],
    "beacon": [
        "Fyrljus"
    ],
    "beehive": [
        "Bikupa"
    ],
    "bee_nest": [
        "Bisamhälle"
    ],
    "target": [
        "Mål"
    ],
    "bedrock": [
        "Berggrund"
    ],
    "conduit": [
        "Ledare"
    ],
    "invisibleBedrock": [
        "Osynlig berggrund"
    ],
    "birchFence": [
        "Björkstaket"
    ],
    "birch_fence_gate": [
        "Björkgrind"
    ],
    "blast_furnace": [
        "Masugn"
    ],
    "bone_block": [
        "Benblock"
    ],
    "coal_block": [
        "Kolblock"
    ],
    "diamond_block": [
        "Diamantblock"
    ],
    "emerald_block": [
        "Smaragdblock"
    ],
    "gold_block": [
        "Guldblock"
    ],
    "iron_block": [
        "Järnblock"
    ],
    "lapis_block": [
        "Lapis lazuli-block"
    ],
    "redstone_block": [
        "Rödstensblock"
    ],
    "bookshelf": [
        "Bokhylla"
    ],
    "brick_block": [
        "Tegelblock"
    ],
    "brown_mushroom": [
        "Brun svamp"
    ],
    "wooden_button": [
        "Ekknapp"
    ],
    "acacia_button": [
        "Akaciaknapp"
    ],
    "birch_button": [
        "Björkknapp"
    ],
    "dark_oak_button": [
        "Mörk ekknapp"
    ],
    "jungle_button": [
        "Djungelknapp"
    ],
    "spruce_button": [
        "Granknapp"
    ],
    "stone_button": [
        "Stenknapp"
    ],
    "cactus": [
        "Kaktus"
    ],
    "dried_kelp_block": [
        "Block av torkad kelp"
    ],
    "carved_pumpkin": [
        "Snidad pumpa"
    ],
    "chest": [
        "Kista"
    ],
    "ender_chest": [
        "Enderkista"
    ],
    "jigsaw": [
        "Pusselblock"
    ],
    "honey_block": [
        "Honungsblock"
    ],
    "honeycomb_block": [
        "Honungskaksblock"
    ],
    "lodestone": [
        "Lodsten"
    ],
    "nether_sprouts": [
        "Nether-groddar"
    ],
    "crimson_stem": [
        "Karmosinfot"
    ],
    "warped_stem": [
        "Förvriden fot"
    ],
    "stripped_crimson_stem": [
        "Skalad karmosinfot"
    ],
    "stripped_warped_stem": [
        "Skalad förvriden fot"
    ],
    "crimson_hyphae": [
        "Blodröd hyfer"
    ],
    "warped_hyphae": [
        "Vriden hyfer"
    ],
    "stripped_crimson_hyphae": [
        "Skalad blodröd hyfer"
    ],
    "stripped_warped_hyphae": [
        "Skalad vriden hyfer"
    ],
    "crimson_planks": [
        "Karmosinplankor"
    ],
    "warped_planks": [
        "Förvridna plankor"
    ],
    "crimson_trapdoor": [
        "Karmosinfallucka"
    ],
    "warped_trapdoor": [
        "Förvriden fallucka"
    ],
    "crimson_standing_sign": [
        "Karmosinskylt"
    ],
    "warped_standing_sign": [
        "Förvriden skylt"
    ],
    "crimson_wall_sign": [
        "Karmosinskylt"
    ],
    "warped_wall_sign": [
        "Förvriden skylt"
    ],
    "crimson_stairs": [
        "Karmosintrappa"
    ],
    "warped_stairs": [
        "Förvriden trappa"
    ],
    "crimson_fence": [
        "Karmosinstaket"
    ],
    "warped_fence": [
        "Förvridet staket"
    ],
    "crimson_fence_gate": [
        "Karmosingrind"
    ],
    "warped_fence_gate": [
        "Förvriden grind"
    ],
    "crimson_button": [
        "Karmosinknapp"
    ],
    "warped_button": [
        "Förvriden knapp"
    ],
    "crimson_pressure_plate": [
        "Karmosintryckplatta"
    ],
    "warped_pressure_plate": [
        "Förvriden tryckplatta"
    ],
    "crimson_slab": [
        "Karmosinplatta"
    ],
    "warped_slab": [
        "Förvriden platta"
    ],
    "crimson_double_slab": [
        "Karmosinplatta"
    ],
    "warped_double_slab": [
        "Förvriden platta"
    ],
    "shroomlight": [
        "Lampsvamp"
    ],
    "crimson_nylium": [
        "Karmosinnylium"
    ],
    "warped_nylium": [
        "Förvridet nylium"
    ],
    "basalt": [
        "Basalt"
    ],
    "polished_basalt": [
        "Polerad basalt"
    ],
    "blackstone": [
        "Svartsten"
    ],
    "polished_blackstone_bricks": [
        "Polerade svartstenar"
    ],
    "cracked_polished_blackstone_bricks": [
        "Spruckna polerade svartstenar"
    ],
    "polished_blackstone_brick_stairs": [
        "Trappa av polerade svartstenar"
    ],
    "blackstone_stairs": [
        "Svartstenstrappa"
    ],
    "blackstone_wall": [
        "Svartstensvägg"
    ],
    "polished_blackstone_brick_wall": [
        "Vägg av polerade svartstenar"
    ],
    "chiseled_polished_blackstone": [
        "Huggen polerad svartsten"
    ],
    "gilded_blackstone": [
        "Förgylld svartsten"
    ],
    "blackstone_slab": [
        "Svartstensplatta"
    ],
    "polished_blackstone_brick_slab": [
        "Platta av polerade svartstenar"
    ],
    "chain": [
        "Kedja"
    ],
    "soul_soil": [
        "Själajord"
    ],
    "soul_fire": [
        "Själaeld"
    ],
    "polished_blackstone": [
        "Polerad svartsten"
    ],
    "polished_blackstone_stairs": [
        "Polerad svartstenstrappa"
    ],
    "polished_blackstone_slab": [
        "Polerad svarstensplatta"
    ],
    "polished_blackstone_pressure_plate": [
        "Tryckplatta av polerad svartsten"
    ],
    "polished_blackstone_button": [
        "Knapp av polerad svartsten"
    ],
    "polished_blackstone_wall": [
        "Vägg av polerad svartsten"
    ],
    "soul_campfire": [
        "Själslägereld"
    ],
    "chiseled_nether_bricks": [
        "Huggna Nether-tegelstenar"
    ],
    "cracked_nether_bricks": [
        "Spruckna Nether-tegelstenar"
    ],
    "quartz_bricks": [
        "Kvartstegelstenar"
    ],
    "trapped_chest": [
        "Kistfälla"
    ],
    "shulkerBoxWhite": [
        "Vit shulkerlåda"
    ],
    "shulkerBoxOrange": [
        "Orange shulkerlåda"
    ],
    "shulkerBoxMagenta": [
        "Ljuslila shulkerlåda"
    ],
    "shulkerBoxLightBlue": [
        "Ljusblå shulkerlåda"
    ],
    "shulkerBoxYellow": [
        "Gul shulkerlåda"
    ],
    "shulkerBoxLime": [
        "Limegrön shulkerlåda"
    ],
    "shulkerBoxPink": [
        "Rosa shulkerlåda"
    ],
    "shulkerBoxGray": [
        "Grå shulkerlåda"
    ],
    "shulkerBoxSilver": [
        "Ljusgrå shulkerlåda"
    ],
    "shulkerBoxCyan": [
        "Turkos shulkerlåda"
    ],
    "shulkerBoxPurple": [
        "Lila shulkerlåda"
    ],
    "shulkerBoxBlue": [
        "Blå shulkerlåda"
    ],
    "shulkerBoxBrown": [
        "Brun shulkerlåda"
    ],
    "shulkerBoxGreen": [
        "Grön shulkerlåda"
    ],
    "shulkerBoxRed": [
        "Röd shulkerlåda"
    ],
    "shulkerBoxBlack": [
        "Svart shulkerlåda"
    ],
    "shulkerBox": [
        "Shulkerlåda"
    ],
    "chorus_flower": [
        "Körblomma"
    ],
    "chorus_plant": [
        "Körväxt"
    ],
    "stained_glass": [
        "Vitmålat glas",
        "Vitmålat glas",
        "Orangemålat glas",
        "Ljuslilamålat glas",
        "Ljusblåmålat glas",
        "Gulmålat glas",
        "Limegrönmålat glas",
        "Rosamålat glas",
        "Gråmålat glas",
        "Ljusgråmålat glas",
        "Turkosmålat glas",
        "Lilamålat glas",
        "Blåmålat glas",
        "Brunmålat glas",
        "Grönmålat glas",
        "Rödmålat glas",
        "Svartmålat glas"
    ],
    "stained_glass_pane": [
        "Vitmålad glasruta",
        "Vitmålad glasruta",
        "Orangemålad glasruta",
        "Ljuslilamålad glasruta",
        "Ljusblåmålad glasruta",
        "Gulmålad glasruta",
        "Limegrönmålad glasruta",
        "Rosamålad glasruta",
        "Gråmålad glasruta",
        "Ljusgråmålad glasruta",
        "Turkosmålad glasruta",
        "Lilamålad glasruta",
        "Blåmålad glasruta",
        "Brunmålad glasruta",
        "Grönmålad glasruta",
        "Rödmålad glasruta",
        "Svartmålad glasruta"
    ],
    "clay": [
        "Lerblock"
    ],
    "hardened_clay": [
        "Terrakotta"
    ],
    "stained_hardened_clay": [
        "Terrakotta",
        "Vit terrakotta",
        "Orange terrakotta",
        "Ljuslila terrakotta",
        "Ljusblå terrakotta",
        "Gul terrakotta",
        "Limegrön terrakotta",
        "Rosa terrakotta",
        "Grå terrakotta",
        "Ljusgrå terrakotta",
        "Turkos terrakotta",
        "Lila terrakotta",
        "Blå terrakotta",
        "Brun terrakotta",
        "Grön terrakotta",
        "Röd terrakotta",
        "Svart terrakotta"
    ],
    "structure_block": [
        "Strukturblock"
    ],
    "structure_void": [
        "Strukturerat tomrum"
    ],
    "wool": [
        "Ull",
        "Vit ull",
        "Orange ull",
        "Ljuslila ull",
        "Ljusblå ull",
        "Gul ull",
        "Limegrön ull",
        "Rosa ull",
        "Grå ull",
        "Ljusgrå ull",
        "Turkos ull",
        "Lila ull",
        "Blå ull",
        "Brun ull",
        "Grön ull",
        "Röd ull",
        "Svart ull"
    ],
    "cobblestone_wall": [
        "Kullerstensmur",
        "Kullerstensmur",
        "Mossig kullerstensmur",
        "Granitmur",
        "Dioritmur",
        "Andesitmur",
        "Sandstensmur",
        "Tegelmur",
        "Murstensmur",
        "Mossig murstensmur",
        "Slutmurstensmur",
        "Nether-tegelmur",
        "Prismarinmur",
        "Röd sandstensmur",
        "Röd Nether-tegelmur"
    ],
    "cocoa": [
        "Kakao"
    ],
    "command_block": [
        "Kommandoblock"
    ],
    "composter": [
        "Komposterare"
    ],
    "light_block": [
        "Ljusblock"
    ],
    "repeating_command_block": [
        "Upprepande kommandoblock"
    ],
    "chain_command_block": [
        "Kedjande kommandoblock"
    ],
    "darkOakFence": [
        "Mörkt ekstaket"
    ],
    "dark_oak_fence_gate": [
        "Mörk ekgrind"
    ],
    "daylight_detector": [
        "Dagsljussensor"
    ],
    "deadbush": [
        "Vissen buske"
    ],
    "detector_rail": [
        "Sensorräls"
    ],
    "dirt": [
        "Jord",
        "Jord",
        "Smuts"
    ],
    "podzol": [
        "Podsol"
    ],
    "purpur_block": [
        "Purpurblock",
        "Purpurblock",
        "Utmejslad purpur",
        "Purpurpelare"
    ],
    "dispenser": [
        "Automat"
    ],
    "doorWood": [
        "Trädörr"
    ],
    "double_plant": [
        "Planta",
        "Solros",
        "Syren",
        "Dubbelt höggräs",
        "Stor ormbunke",
        "Rosenbuske",
        "Pion"
    ],
    "dragon_egg": [
        "Drakägg"
    ],
    "dropper": [
        "Utmatare"
    ],
    "enchanting_table": [
        "Förtrollningsbord"
    ],
    "enderChest": [
        "Enderkista"
    ],
    "end_portal_frame": [
        "Slutportal"
    ],
    "farmland": [
        "Åkerjord"
    ],
    "fletching_table": [
        "Pilmakarbänk"
    ],
    "fence": [
        "Ekstaket"
    ],
    "fence_gate": [
        "Ekgrind"
    ],
    "iron_bars": [
        "Järngaller"
    ],
    "fire": [
        "Eld"
    ],
    "yellow_flower": [
        "Blomma",
        "Maskros"
    ],
    "red_flower": [
        "Blomma",
        "Vallmo",
        "Blå orkidé",
        "Gräslök",
        "Porslinsstjärna",
        "Röd tulpan",
        "Orange tulpan",
        "Vit tulpan",
        "Rosa tulpan",
        "Prästkrage",
        "Blåklint",
        "Liljekonvalj"
    ],
    "wither_rose": [
        "Wither-ros"
    ],
    "furnace": [
        "Smältugn"
    ],
    "glass": [
        "Glas"
    ],
    "golden_rail": [
        "Strömförsedd räls"
    ],
    "grass": [
        "Gräsblock"
    ],
    "grass_path": [
        "Gräsväg"
    ],
    "gravel": [
        "Grus"
    ],
    "hay_block": [
        "Höbal"
    ],
    "netherrack": [
        "Nether-sten"
    ],
    "soul_sand": [
        "Själasand"
    ],
    "hopper": [
        "Tratt"
    ],
    "ice": [
        "Is"
    ],
    "packed_ice": [
        "Packad is"
    ],
    "blue_ice": [
        "Blå is"
    ],
    "iron_trapdoor": [
        "Järnfallucka"
    ],
    "jukebox": [
        "Jukebox"
    ],
    "jungleFence": [
        "Djungelstaket"
    ],
    "jungle_fence_gate": [
        "Djungelgrind"
    ],
    "ladder": [
        "Stege"
    ],
    "flowing_lava": [
        "Lava"
    ],
    "leaves2": [
        "Akacialöv",
        "Akacialöv",
        "Mörka eklöv"
    ],
    "lever": [
        "Spak"
    ],
    "glowstone": [
        "Glödsten"
    ],
    "lit_pumpkin": [
        "Halloweenlykta"
    ],
    "lockedchest": [
        "Låst kista"
    ],
    "log2": [
        "Akaciastock",
        "Akaciastock",
        "Mörk ekstock"
    ],
    "log": [
        "Stock",
        "Ekstock",
        "Granstock",
        "Björkstock",
        "Djungelstock"
    ],
    "magma": [
        "Magmablock"
    ],
    "melon_block": [
        "Melon"
    ],
    "mob_spawner": [
        "Monsterspawnare"
    ],
    "monster_egg": [
        "Infesterad sten",
        "Infesterad sten",
        "Infesterad kullersten",
        "Infesterad mursten",
        "Infesterad mossig mursten",
        "Infesterad sprucken mursten",
        "Infesterad utmejslad mursten"
    ],
    "mushroom": [
        "Svamp"
    ],
    "noteblock": [
        "Notblock"
    ],
    "mycelium": [
        "Mycel"
    ],
    "nether_brick": [
        "Nether-tegelblock"
    ],
    "red_nether_brick": [
        "Rött Nether-tegel"
    ],
    "nether_brick_fence": [
        "Nether-tegelstaket"
    ],
    "quartz_ore": [
        "Nether-kvartsmalm"
    ],
    "netherreactor": [
        "Nether-reaktorkärna"
    ],
    "nether_wart_block": [
        "Nether-vårtblock"
    ],
    "warped_wart_block": [
        "Förvridet vårtblock"
    ],
    "unlit_redstone_torch": [
        "Rödstensfackla"
    ],
    "redstone_torch": [
        "Rödstensfackla"
    ],
    "soul_torch": [
        "Själafackla"
    ],
    "obsidian": [
        "Obsidian"
    ],
    "coal_ore": [
        "Kolmalm"
    ],
    "diamond_ore": [
        "Diamantmalm"
    ],
    "emerald_ore": [
        "Smaragdmalm"
    ],
    "gold_ore": [
        "Guldmalm"
    ],
    "iron_ore": [
        "Järnmalm"
    ],
    "lapis_ore": [
        "Lapis lazuli-malm"
    ],
    "redstone_ore": [
        "Rödstensmalm"
    ],
    "oreRuby": [
        "Rubinmalm"
    ],
    "observer": [
        "Observatör"
    ],
    "piston": [
        "Kolv"
    ],
    "sticky_piston": [
        "Klisterkolv"
    ],
    "portal": [
        "Portal"
    ],
    "potatoes": [
        "Potatisar"
    ],
    "stone_pressure_plate": [
        "Stentryckplatta"
    ],
    "wooden_pressure_plate": [
        "Ektryckplatta"
    ],
    "acacia_pressure_plate": [
        "Akaciatryckplatta"
    ],
    "birch_pressure_plate": [
        "Björktryckplatta"
    ],
    "dark_oak_pressure_plate": [
        "Mörk ektryckplatta"
    ],
    "jungle_pressure_plate": [
        "Djungeltryckplatta"
    ],
    "spruce_pressure_plate": [
        "Grantryckplatta"
    ],
    "prismarine": [
        "Prismarin",
        "Prismarin",
        "Prismarintegel",
        "Mörk prismarin"
    ],
    "pumpkin": [
        "Pumpa"
    ],
    "pumpkin_stem": [
        "Pumpastjälk"
    ],
    "quartz_block": [
        "Kvartsblock",
        "Kvartsblock",
        "Utmejslat kvartsblock",
        "Pelarkvartsblock",
        "Slätt kvartsblock"
    ],
    "rail": [
        "Räls"
    ],
    "red_mushroom": [
        "Röd svamp"
    ],
    "crimson_fungus": [
        "Karmosinsvamp"
    ],
    "warped_fungus": [
        "Förvriden svamp"
    ],
    "red_mushroom_block": [
        "Rött svampblock"
    ],
    "red_sandstone": [
        "Röd sandsten",
        "Röd sandsten",
        "Utmejslad röd sandsten",
        "Skuren röd sandsten",
        "Slät röd sandsten"
    ],
    "redstone_wire": [
        "Rödstenspulver"
    ],
    "redstone_lamp": [
        "Rödstenslampa"
    ],
    "sand": [
        "Sand",
        "Sand",
        "Röd sand"
    ],
    "sandstone": [
        "Sandsten",
        "Sandsten",
        "Utmejslad sandsten",
        "Skuren sandsten",
        "Slät sandsten"
    ],
    "sapling": [
        "Ekplanta",
        "Ekplanta",
        "Granplanta",
        "Björkplanta",
        "Djungelplanta",
        "Akaciaplanta",
        "Mörk ekplanta"
    ],
    "seaLantern": [
        "Sjölykta"
    ],
    "standing_sign": [
        "Underteckna"
    ],
    "spruce_standing_sign": [
        "Granskylt"
    ],
    "birch_standing_sign": [
        "Björkskylt"
    ],
    "jungle_standing_sign": [
        "Djungelskylt"
    ],
    "acacia_standing_sign": [
        "Akaciaskylt"
    ],
    "darkoak_standing_sign": [
        "Mörk ekskylt"
    ],
    "slime": [
        "Slemblock"
    ],
    "snow": [
        "Snö"
    ],
    "sponge": [
        "Tvättsvamp",
        "Tvättsvamp",
        "Våt tvättsvamp"
    ],
    "spruceFence": [
        "Granstaket"
    ],
    "spruce_fence_gate": [
        "Grangrind"
    ],
    "brick_stairs": [
        "Tegelstenstrappa"
    ],
    "nether_brick_stairs": [
        "Nether-tegeltrappa"
    ],
    "quartz_stairs": [
        "Kvartstrappa"
    ],
    "smooth_quartz_stairs": [
        "Slät kvartstrappa"
    ],
    "red_sandstone_stairs": [
        "Röd sandstenstrappa"
    ],
    "sandstone_stairs": [
        "Sandstenstrappa"
    ],
    "stone_stairs": [
        "Kullerstenstrappa"
    ],
    "normal_stone_stairs": [
        "Stentrappa"
    ],
    "stone_brick_stairs": [
        "Murstenstrappa"
    ],
    "oak_stairs": [
        "Ektrappa"
    ],
    "acacia_stairs": [
        "Akaciatrappa"
    ],
    "birch_stairs": [
        "Björktrappa"
    ],
    "dark_oak_stairs": [
        "Mörk ektrappa"
    ],
    "jungle_stairs": [
        "Djungeltrappa"
    ],
    "spruce_stairs": [
        "Grantrappa"
    ],
    "purpur_stairs": [
        "Purpurtrappa"
    ],
    "prismarine_stairs": [
        "Prismarintrappa"
    ],
    "dark_prismarine_stairs": [
        "Mörk prismarintrappa"
    ],
    "prismarine_bricks_stairs": [
        "Prismarintegeltrappa"
    ],
    "granite_stairs": [
        "Granittrappa"
    ],
    "diorite_stairs": [
        "Diorittrappa"
    ],
    "andesite_stairs": [
        "Andesittrappa"
    ],
    "polished_granite_stairs": [
        "Polerad granittrappa"
    ],
    "polished_diorite_stairs": [
        "Polerad diorittrappa"
    ],
    "polished_andesite_stairs": [
        "Polerad andesittrappa"
    ],
    "mossy_stone_brick_stairs": [
        "Mossig murstenstrappa"
    ],
    "smooth_red_sandstone_stairs": [
        "Slät röd sandstenstrappa"
    ],
    "smooth_sandstone_stairs": [
        "Slät sandstenstrappa"
    ],
    "end_brick_stairs": [
        "Slutmurstenstrappa"
    ],
    "mossy_cobblestone_stairs": [
        "Mossig kullerstenstrappa"
    ],
    "red_nether_brick_stairs": [
        "Röd Nether-tegeltrappa"
    ],
    "smooth_stone": [
        "Slät sten"
    ],
    "standing_banner": [
        "Fana",
        "Svart fana",
        "Röd fana",
        "Grön fana",
        "Brun fana",
        "Blå fana",
        "Lila fana",
        "Turkos fana",
        "Ljusgrå fana",
        "Grå fana",
        "Rosa fana",
        "Limegrön fana",
        "Gul fana",
        "Ljusblå fana",
        "Ljuslila fana",
        "Orange fana",
        "Fana"
    ],
    "stone": [
        "Sten",
        "Sten",
        "Granit",
        "Polerad granit",
        "Diorit",
        "Polerad diorit",
        "Andesit",
        "Polerad andesit"
    ],
    "cobblestone": [
        "Kullersten"
    ],
    "stonebrick": [
        "Mursten",
        "Mursten",
        "Mossig mursten",
        "Utmejslad mursten"
    ],
    "stonecutter": [
        "Stenskärare"
    ],
    "stonecutter_block": [
        "Stenskärare"
    ],
    "mossy_cobblestone": [
        "Mossig kullersten"
    ],
    "double_stone_slab": [
        "Stenplatta",
        "Stenplatta",
        "Sandstensplatta",
        "Träplatta",
        "Kullerstensplatta",
        "Tegelstensplatta",
        "Murstensplatta",
        "Kvartsplatta",
        "Nether-tegelplatta"
    ],
    "stone_slab": [
        "Stenplatta",
        "Slät stenplatta",
        "Sandstensplatta",
        "Träplatta",
        "Kullerstensplatta",
        "Tegelstensplatta",
        "Murstensplatta",
        "Kvartsplatta",
        "Nether-tegelplatta"
    ],
    "double_stone_slab2": [
        "Röd sandstensplatta",
        "Röd sandstensplatta"
    ],
    "stone_slab2": [
        "Röd sandstensplatta",
        "Röd sandstensplatta",
        "Purpurplatta",
        "Prismarinplatta",
        "Prismarintegelplatta",
        "Mörk prismarinplatta",
        "Mossig kullerstensplatta",
        "Slät sandstensplatta",
        "Röd Nether-tegelplatta"
    ],
    "stone_slab3": [
        "Slutmurstensplatta",
        "Slutmurstensplatta",
        "Slät röd sandstensplatta",
        "Polerad andesitplatta",
        "Andesitplatta",
        "Dioritplatta",
        "Polerad dioritplatta",
        "Granitplatta",
        "Polerad granitplatta"
    ],
    "stone_slab4": [
        "Mossig murstensplatta",
        "Mossig murstensplatta",
        "Slät kvartsplatta",
        "Stenplatta",
        "Skuren sandstensplatta",
        "Skuren röd sandstensplatta"
    ],
    "coral_block": [
        "Block av orgelkorall",
        "Block av orgelkorall",
        "Block av hjärnkorall",
        "Block av bubbelkorall",
        "Block av millepora",
        "Block av tetrakorall",
        "Block av död orgelkorall",
        "Block av död hjärnkorall",
        "Block av död bubbelkorall",
        "Block av död millepora",
        "Block av död tetrakorall"
    ],
    "tallgrass": [
        "Gräs",
        "Gräs",
        "Ormbunke"
    ],
    "seagrass": [
        "Sjögräs",
        "Sjögräs"
    ],
    "sea_pickle": [
        "Havsgurka"
    ],
    "turtle_egg": [
        "Havssköldpaddsägg"
    ],
    "coral": [
        "Orgelkorall",
        "Orgelkorall",
        "Hjärnkorall",
        "Bubbelkorall",
        "Millepora",
        "Tetrakorall",
        "Död orgelkorall",
        "Död hjärnkorall",
        "Död bubbelkorall",
        "Död millepora",
        "Död tetrakorall"
    ],
    "coral_fan": [
        "Orgelhornkorall",
        "Orgelhornkorall",
        "Hjärnhornkorall",
        "Bubbelhornkorall",
        "Milleporahornkorall",
        "Tetrahornkorall"
    ],
    "coral_fan_dead": [
        "Död orgelhornkorall",
        "Död orgelhornkorall",
        "Död hjärnhornkorall",
        "Död bubbelhornkorall",
        "Död milleporahornkorall",
        "Död tetrahornkorall"
    ],
    "glass_pane": [
        "Glasruta"
    ],
    "tnt": [
        "Dynamit"
    ],
    "snow_layer": [
        "Snöskikt"
    ],
    "torch": [
        "Fackla"
    ],
    "trapdoor": [
        "Ekfallucka"
    ],
    "acacia_trapdoor": [
        "Akaciafallucka"
    ],
    "birch_trapdoor": [
        "Björkfallucka"
    ],
    "dark_oak_trapdoor": [
        "Mörk ekfallucka"
    ],
    "jungle_trapdoor": [
        "Djungelfallucka"
    ],
    "spruce_trapdoor": [
        "Granfallucka"
    ],
    "tripWire": [
        "Snubbeltråd"
    ],
    "tripwire_hook": [
        "Snubbeltrådshake"
    ],
    "vine": [
        "Murgröna"
    ],
    "weeping_vines": [
        "Sörjande murgröna"
    ],
    "twisting_vines": [
        "Vriden murgröna"
    ],
    "flowing_water": [
        "Vatten"
    ],
    "water": [
        "Vatten"
    ],
    "waterlily": [
        "Näckrosblad"
    ],
    "web": [
        "Spindelnät"
    ],
    "heavy_weighted_pressure_plate": [
        "Viktplatta (tung)"
    ],
    "light_weighted_pressure_plate": [
        "Viktplatta (lätt)"
    ],
    "end_stone": [
        "Slutsten"
    ],
    "end_bricks": [
        "Slutmursten"
    ],
    "planks": [
        "Träplankor",
        "Ekträplankor",
        "Granträplankor",
        "Björkträplankor",
        "Djungelträplankor",
        "Akaciaträplankor",
        "Mörka ekträplankor"
    ],
    "wooden_slab": [
        "Träplatta",
        "Ekplatta",
        "Granplatta",
        "Björkplatta",
        "Djungelplatta",
        "Akaciaplatta",
        "Mörk ekplatta"
    ],
    "carpet": [
        "Matta",
        "Svart matta",
        "Röd matta",
        "Grön matta",
        "Brun matta",
        "Blå matta",
        "Lila matta",
        "Turkos matta",
        "Ljusgrå matta",
        "Grå matta",
        "Rosa matta",
        "Limegrön matta",
        "Gul matta",
        "Ljusblå matta",
        "Ljuslila matta",
        "Orange matta",
        "Vit matta"
    ],
    "crafting_table": [
        "Arbetsbänk"
    ],
    "white_glazed_terracotta": [
        "Vitglaserad terrakotta",
        "Vitglaserad terrakotta"
    ],
    "orange_glazed_terracotta": [
        "Orangeglaserad terrakotta",
        "Orangeglaserad terrakotta"
    ],
    "magenta_glazed_terracotta": [
        "Ljuslilaglaserad terrakotta",
        "Ljuslilaglaserad terrakotta"
    ],
    "light_blue_glazed_terracotta": [
        "Ljusblåglaserad terrakotta",
        "Ljusblåglaserad terrakotta"
    ],
    "yellow_glazed_terracotta": [
        "Gulglaserad terrakotta",
        "Gulglaserad terrakotta"
    ],
    "lime_glazed_terracotta": [
        "Limegrönglaserad terrakotta",
        "Limegrönglaserad terrakotta"
    ],
    "pink_glazed_terracotta": [
        "Rosaglaserad terrakotta",
        "Rosaglaserad terrakotta"
    ],
    "gray_glazed_terracotta": [
        "Gråglaserad terrakotta",
        "Gråglaserad terrakotta"
    ],
    "silver_glazed_terracotta": [
        "Ljusgråglaserad terrakotta",
        "Ljusgråglaserad terrakotta"
    ],
    "cyan_glazed_terracotta": [
        "Turkosglaserad terrakotta",
        "Turkosglaserad terrakotta"
    ],
    "purple_glazed_terracotta": [
        "Lilaglaserad terrakotta",
        "Lilaglaserad terrakotta"
    ],
    "blue_glazed_terracotta": [
        "Blåglaserad terrakotta",
        "Blåglaserad terrakotta"
    ],
    "brown_glazed_terracotta": [
        "Brunglaserad terrakotta",
        "Brunglaserad terrakotta"
    ],
    "green_glazed_terracotta": [
        "Grönglaserad terrakotta",
        "Grönglaserad terrakotta"
    ],
    "red_glazed_terracotta": [
        "Rödglaserad terrakotta",
        "Rödglaserad terrakotta"
    ],
    "black_glazed_terracotta": [
        "Svartglaserad terrakotta",
        "Svartglaserad terrakotta"
    ],
    "concrete": [
        "Vit betong",
        "Vit betong",
        "Orange betong",
        "Ljuslila betong",
        "Ljusblå betong",
        "Gul betong",
        "Limegrön betong",
        "Rosa betong",
        "Grå betong",
        "Ljusgrå betong",
        "Turkos betong",
        "Lila betong",
        "Blå betong",
        "Brun betong",
        "Grön betong",
        "Röd betong",
        "Svart betong"
    ],
    "glazedTerracottaWhite": [
        "Vitglaserad terrakotta"
    ],
    "glazedTerracottaOrange": [
        "Orangeglaserad terrakotta"
    ],
    "glazedTerracottaMagenta": [
        "Ljuslilaglaserad terrakotta"
    ],
    "glazedTerracottaLightBlue": [
        "Ljusblåglaserad terrakotta"
    ],
    "glazedTerracottaYellow": [
        "Gulglaserad terrakotta"
    ],
    "glazedTerracottaLime": [
        "Limegrönglaserad terrakotta"
    ],
    "glazedTerracottaPink": [
        "Rosaglaserad terrakotta"
    ],
    "glazedTerracottaGray": [
        "Gråglaserad terrakotta"
    ],
    "glazedTerracottaSilver": [
        "Ljusgråglaserad terrakotta"
    ],
    "glazedTerracottaCyan": [
        "Turkosglaserad terrakotta"
    ],
    "glazedTerracottaPurple": [
        "Lilaglaserad terrakotta"
    ],
    "glazedTerracottaBlue": [
        "Blåglaserad terrakotta"
    ],
    "glazedTerracottaBrown": [
        "Brunglaserad terrakotta"
    ],
    "glazedTerracottaGreen": [
        "Grönglaserad terrakotta"
    ],
    "glazedTerracottaRed": [
        "Rödglaserad terrakotta"
    ],
    "glazedTerracottaBlack": [
        "Svartglaserad terrakotta"
    ],
    "concretePowder": [
        "Vitt betongpulver",
        "Vitt betongpulver",
        "Orange betongpulver",
        "Ljuslila betongpulver",
        "Ljusblått betongpulver",
        "Gult betongpulver",
        "Limegrönt betongpulver",
        "Rosa betongpulver",
        "Grått betongpulver",
        "Ljusgrått betongpulver",
        "Turkost betongpulver",
        "Lila betongpulver",
        "Blått betongpulver",
        "Brunt betongpulver",
        "Grönt betongpulver",
        "Rött betongpulver",
        "Svart betongpulver"
    ],
    "stripped_spruce_log": [
        "Granstocksvirke"
    ],
    "stripped_dark_oak_log": [
        "Mörkt ekstocksvirke"
    ],
    "stripped_birch_log": [
        "Björkstocksvirke"
    ],
    "stripped_jungle_log": [
        "Djungelstocksvirke"
    ],
    "stripped_oak_log": [
        "Ekstocksvirke"
    ],
    "stripped_acacia_log": [
        "Akaciastocksvirke"
    ],
    "bamboo": [
        "Bambu"
    ],
    "scaffolding": [
        "Ställning"
    ],
    "grindstone": [
        "Slipsten"
    ],
    "cartography_table": [
        "Kartografbänk"
    ],
    "lantern": [
        "Lykta"
    ],
    "soul_lantern": [
        "Själalykta"
    ],
    "smoker": [
        "Rökugn"
    ],
    "smithing_table": [
        "Smidesbänk"
    ],
    "barrel": [
        "Tunna"
    ],
    "campfire": [
        "Lägereld"
    ],
    "loom": [
        "Vävstol"
    ],
    "lectern": [
        "Läspulpet"
    ],
    "sweet_berry_bush": [
        "Sötbärsbuske"
    ],
    "wood": [
        "Ekträ",
        "Ekträ",
        "Granträ",
        "Björkträ",
        "Djungelträ",
        "Akaciaträ",
        "Mörkt ekträ",
        null,
        null,
        "Ekträvirke",
        "Granträvirke",
        "Björkträvirke",
        "Djungelträvirke",
        "Akaciaträvirke",
        "Mörkt ekträvirke"
    ],
    "netherite_block": [
        "Netheritblock"
    ],
    "ancient_debris": [
        "Uråldrig bråte"
    ],
    "nether_gold_ore": [
        "Nether-guldmalm"
    ],
    "respawn_anchor": [
        "Respawnankare"
    ],
    "crying_obsidian": [
        "Gråtande obsidian"
    ]
}
};
freeze(lang_data);
export = lang_data;

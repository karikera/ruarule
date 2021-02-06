
import { freeze } from './freeze';
import { LangId } from './langid';
const lang_data = {
id: "nb_NO" as LangId,
commands:{
    "ability_description": "Angir en spillers evne.",
    "ability_noability": "Det finnes ingen evne med navnet %1$s",
    "ability_granted": "Du har fått evnen %1$s",
    "ability_revoked": "Du har blitt fratatt evnen %1$s",
    "ability_success": "Evnen har blitt endret",
    "achievement_alreadyHave": "Spilleren %1$s har allerede prestasjonen %2$s",
    "achievement_description": "Gir en prestasjon til eller fjerner en fra en spiller.",
    "achievement_dontHave": "Spilleren %1$s har ikke prestasjonen %2$s",
    "achievement_give_success_all": "%1$s har fått alle prestasjonene",
    "achievement_give_success_one": "%1$s har fått statistikken %2$s",
    "achievement_statTooLow": "Spilleren %1$s har ikke statistikken %2$s",
    "achievement_take_success_all": "%1$s har blitt fratatt alle prestasjonene",
    "achievement_take_success_one": "%1$s har blitt fratatt statistikken %2$s",
    "achievement_unknownAchievement": "%1$s er en ukjent prestasjon eller statistikk",
    "agent_attack_success": "Agent: attack-kommandoen lyktes",
    "agent_attack_failed": "Agent: attack-kommandoen mislyktes",
    "agent_collect_success": "Agent: collect-kommandoen lyktes",
    "agent_collect_failed": "Agent: collect-kommandoen mislyktes",
    "agent_createagent_success": "Agenten har blitt opprettet",
    "agent_createagent_failed": "Kan ikke opprette agenten",
    "agent_destroy_success": "Agenten ødela en blokk",
    "agent_destroy_failed": "Agent: destroy-kommandoen mislyktes",
    "agent_detect_success": "Agent: detect-kommandoen lyktes",
    "agent_detect_failed": "Agent: detect-kommandoen mislyktes",
    "agent_detectredstone_success": "Agent: detectredstone-kommandoen lyktes",
    "agent_detectredstone_failed": "Agent: detectredstone-kommandoen mislyktes",
    "agent_drop_success": "Agent: drop-kommandoen lyktes",
    "agent_drop_failed": "Agent: drop-kommandoen mislyktes",
    "agent_dropall_success": "Agent: dropall-kommandoen lyktes",
    "agent_dropall_failed": "Agent: dropall-kommandoen mislyktes",
    "agent_getitemcount_success": "Agent: getitemcount-kommandoen lyktes",
    "agent_getitemcount_failed": "Agent: getitemcount-kommandoen mislyktes",
    "agent_getitemspace_success": "Agent: getitemspace-kommandoen lyktes",
    "agent_getitemspace_failed": "Agent: getitemspace-kommandoen mislyktes",
    "agent_getitemdetail_success": "Agent: getitemdetail-kommandoen lyktes",
    "agent_getitemdetail_failed": "Agent: getitemdetail-kommandoen mislyktes",
    "agent_getposition_success": "Agent: getposition-kommandoen lyktes",
    "agent_getposition_failed": "Agent: getposition-kommandoen mislyktes",
    "agent_inspect_success": "Agent: inspect-kommandoen lyktes",
    "agent_inspect_failed": "Agent: inspect-kommandoen mislyktes",
    "agent_inspectdata_success": "Agent: inspect data-kommandoen lyktes",
    "agent_inspectdata_failed": "Agent: inspect data-kommandoen mislyktes",
    "agent_move_success": "Agent: move-kommandoen lyktes",
    "agent_move_failed": "Kan ikke flytte agenten",
    "agent_outofrange": "Kan ikke gi kommandoen fordi agenten er utenfor rekkevidde",
    "agent_place_success": "Agent: place-kommandoen lyktes",
    "agent_place_failed": "Agent: place-kommandoen mislyktes",
    "agent_setitem_success": "Agent: setitem-kommandoen lyktes",
    "agent_setitem_failed": "Agent: setitem-kommandoen mislyktes",
    "agent_turn_success": "Agent: turn-kommandoen lyktes",
    "agent_turn_failed": "Kan ikke snu agenten",
    "agent_till_success": "Agent: till-kommandoen lyktes",
    "agent_till_failed": "Agent: till-kommandoen mislyktes",
    "agent_tpagent_description": "Teleporter agenten din.",
    "agent_tpagent_success": "Agenten har blitt teleportert",
    "agent_tpagent_failed": "Kunne ikke teleportere agenten",
    "agent_transfer_success": "Agent: transfer-kommandoen lyktes",
    "agent_transfer_failed": "Agent: transfer-kommandoen mislyktes",
    "always_day": "Døgnsyklus %1$s",
    "always_day_locked": "Døgnsyklus låst",
    "always_day_unlocked": "Døgnsyklus låst opp",
    "ban_description": "Legger til en spiller i svartelisten.",
    "autocomplete_a": "alle spillere",
    "autocomplete_c": "min agent",
    "autocomplete_e": "alle objekter",
    "autocomplete_p": "nærmeste spiller",
    "autocomplete_r": "en tilfeldig spiller",
    "autocomplete_s": "deg selv",
    "autocomplete_v": "alle agenter",
    "ban_failed": "Kunne ikke utestenge spilleren %1$s",
    "ban_success": "Spilleren %1$s har blitt utestengt",
    "banip_description": "Legger til en IP-adresse i svartelisten.",
    "banip_invalid": "Du har oppgitt en ugyldig IP-adresse eller en spiller som ikke er tilkoblet",
    "banip_success": "IP-adressen %1$s har blitt utestengt",
    "banip_success_players": "IP-adressen %1$s, som tilhører %2$s, har blitt utestengt",
    "banlist_ips": "Det finnes %1$d utestengte IP-adresser totalt:",
    "banlist_players": "Det finnes %1$d utestengte spillere totalt:",
    "blockdata_description": "Endrer datataggen til en blokk.",
    "blockdata_placeFailed": "Du kan ikke plassere blokker her",
    "blockdata_destroyFailed": "Du kan ikke grave her",
    "blockdata_failed": "Datataggen ble ikke endret: %1$s",
    "blockdata_notValid": "Målblokken er ikke en dataholderblokk",
    "blockdata_outOfWorld": "Kan ikke endre blokker utenfor verdenen",
    "blockdata_success": "Blokkdataene har blitt endret til: %1$s",
    "blockdata_tagError": "Analyseringen av datataggen mislyktes: %1$s",
    "bossbar_add_success": "Egendefinert bosslinje [%1$s] er opprettet",
    "bossbar_add_failure_invalid": "Ugyldig bosslinje-ID. ID-er må ha formen navneområde:ID eller ID (settes til Minecraft-navneområdet som standard).",
    "bossbar_add_failure_exists": "Det finnes allerede en bosslinje med ID-en %1$s",
    "bossbar_description": "Oppretter og modifiserer bossbarer",
    "bossbar_get_max": "Egendefinert bosslinje [%1$s] har et maksimum på %2$d",
    "bossbar_get_players": "Egendefinert bosslinje [%1$s] har %2$s spillere online nå: %3$s",
    "bossbar_get_players_none": "Egendefinert bosslinje [%1$s] har ingen spillere online nå",
    "bossbar_get_players_one": "Egendefinert bosslinje [%1$s] har 1 spiller online nå: %2$s",
    "bossbar_get_value": "Egendefinert bosslinje [%1$s] har verdien %2$d",
    "bossbar_get_visible_true": "Egendefinert bosslinje [%1$s] vises nå",
    "bossbar_get_visible_false": "Egendefinert bosslinje [%1$s] er skjult nå",
    "bossbar_list": "Det er %1$s aktive egendefinerte bosslinjer: %2$s",
    "bossbar_list_none": "Det er ingen aktive egendefinerte bosslinjer",
    "bossbar_list_one": "Det er 1 aktiv egendefinert bosslinje: %1$s",
    "bossbar_notFound": "Det finnes ingen bosslinje med ID-en %1$s",
    "bossbar_remove": "Egendefinert bosslinje [%1$s] er fjernet",
    "change_setting_description": "Endrer en innstilling på den dedikerte serveren mens den kjører.",
    "change_setting_success": "%1$s har blitt endret",
    "chunkinfo_compiled": "Delen er kompilert.",
    "chunkinfo_data": "De 64 første toppunktene er: %1$s",
    "chunkinfo_empty": "Delen er tom.",
    "chunkinfo_hasLayers": "Delen har lag: %1$s",
    "chunkinfo_hasNoRenderableLayers": "Delen har ingen lag som kan gjengis.",
    "chunkinfo_isEmpty": "Delen har tomme lag: %1$s",
    "chunkinfo_location": "Delens plassering: (%1$d, %2$d, %3$d)",
    "chunkinfo_noChunk": "Fant ingen del på plasseringen %1$d, %2$d, %3$d",
    "chunkinfo_notCompiled": "Delen er ikke kompilert.",
    "chunkinfo_notEmpty": "Delen er ikke tom.",
    "chunkinfo_vertices": "Bufferen til laget %1$s inneholder %2$d toppunkter",
    "classroommode_description": "Prøv å starte og koble deg til klasseromsmodus.",
    "classroommode_success": "Prøver å starte klasseromsmodus …",
    "clear_description": "Fjerner gjenstander fra en spillers inventar.",
    "clear_failure": "Kunne ikke tømme inventaret for %1$s",
    "clear_failure_no_items": "Kunne ikke tømme inventaret for %1$s fordi det ikke var noen gjenstander å fjerne",
    "clear_success": "Tømte inventaret for %1$s og fjernet %2$d gjenstander",
    "clear_tagError": "Analyseringen av datataggen mislyktes: %1$s",
    "clear_testing": "%1$s har %2$d gjenstander som oppfyller kriteriene",
    "clearfixedinv_description": "Fjerner alle faste inventarplasser.",
    "clearfixedinv_success": "Det faste inventaret har blitt tømt",
    "clone_description": "Kloner blokker fra ett område til et annet.",
    "clone_failed": "Ingen blokker ble klonet",
    "clone_filtered_error": "Når du bruker filtre, må du spesifisere en blokk du vil filtrere etter",
    "clone_noOverlap": "Kilden og målet kan ikke overlappe",
    "clone_outOfWorld": "Kan ikke få tilgang til blokker utenfor verdenen",
    "clone_success": "%1$d blokker ble klonet",
    "clone_tooManyBlocks": "Det er for mange blokker i det spesifiserte området (%1$d > %2$d)",
    "closechat_description": "Lukker chattevinduet til den lokale spilleren hvis det er åpent.",
    "closechat_success": "Chatten er lukket",
    "closechat_failure": "Chatten var ikke åpen",
    "closewebsocket_description": "Lukker en eventuell WebSocket-tilkobling.",
    "code_description": "Starter Kodebygger.",
    "code_success": "Startet Kodebygger.",
    "compare_failed": "Kilden og målet er ikke identiske",
    "compare_outOfWorld": "Kan ikke få tilgang til blokker utenfor verdenen",
    "compare_success": "%1$d blokker ble sammenlignet",
    "compare_tooManyBlocks": "Det er for mange blokker i det spesifiserte området (%1$d > %2$d)",
    "corruptworld_description": "Ødelegger verdenen som er lastet inn på serveren.",
    "corruptworld_success": "Verdenen er ødelagt.",
    "daylock_description": "Låser og låser opp døgnsyklusen.",
    "debug_description": "Starter eller stopper en feilsøkingsøkt.",
    "debug_notStarted": "Kan ikke stoppe profileringen når den ikke har begynt ennå!",
    "debug_start": "Feilsøkingsprofileringen er startet",
    "debug_stop": "Feilsøkingsprofileringen ble stoppet etter %.2f sekunder (%1$d intervaller)",
    "defaultgamemode_description": "Velger standard spillmodus.",
    "defaultgamemode_success": "Standard spillmodus i verdenen er nå %1$s",
    "deop_description": "Opphever operatorstatus for en spiller.",
    "deop_failed": "Kunne ikke fjerne operatørstatusen (tillatelsesnivået er for høyt): %s",
    "deop_success": "Fjernet operatørstatus: %s",
    "deop_message": "Operatørstatusen din har blitt fjernet",
    "difficulty_description": "Velger vanskelighetsgrad.",
    "difficulty_usage": "/difficulty <ny vanskelighetsgrad>",
    "difficulty_success": "Satte spillets vanskelighetsgrad til %1$s",
    "downfall_success": "Aktiver/deaktiver nedbør",
    "effect_description": "Legg til eller fjern statuseffekter.",
    "effect_failure_notActive": "Kunne ikke ta %1$s fra %2$s fordi vedkommende ikke har effekten",
    "effect_failure_notActive_all": "Kunne ikke ta noen effekter fra %1$s fordi vedkommende ikke har noen",
    "effect_failure_notAMob": "%1$s kan ikke ha effekter",
    "effect_notFound": "Det finnes ingen veseneffekt med ID-en %s",
    "effect_success": "Ga %1$s * %2$d til %3$s i %4$d sekunder",
    "effect_success_removed": "Tok %1$s fra %2$s",
    "effect_success_removed_all": "Tok alle effekter fra %1$s",
    "enchant_cantCombine": "%1$s kan ikke kombineres med %2$s",
    "enchant_invalidLevel": "%1$s støtter ikke nivå %2$d",
    "enchant_cantEnchant": "Kan ikke fortrylle målgjenstanden med den valgte fortryllelsen: %1$s",
    "enchant_description": "Legger til en fortryllelse for en valgt gjenstand for en spiller.",
    "enchant_noItem": "Målet har ikke noen gjenstand: %1$s",
    "enchant_notFound": "Det finnes ingen fortryllelse med ID-en %1$d",
    "enchant_success": "Fortryllingen av %1$s var vellykket",
    "entitydata_description": "Endrer datataggen til et objekt.",
    "entitydata_failed": "Datataggen ble ikke endret: %1$s",
    "entitydata_noPlayers": "%1$s er en spiller og kan ikke endres",
    "entitydata_success": "Enhetsdataene har blitt endret til: %1$s",
    "entitydata_tagError": "Analyseringen av datataggen mislyktes: %1$s",
    "execute_allInvocationsFailed": "Alle oppkall mislyktes: %1$s",
    "execute_failed": "Kunne ikke kjøre %1$s som %2$s",
    "execute_description": "Kjører en kommando på vegne av én eller flere enheter.",
    "fill_description": "Fyller hele eller deler av et område med en bestemt blokk.",
    "fill_failed": "Ingen blokker ble fylt",
    "fill_outOfWorld": "Kan ikke plassere blokker utenfor verdenen",
    "fill_success": "%1$d blokker ble fylt",
    "fill_tagError": "Analyseringen av datataggen mislyktes: %1$s",
    "fill_tooManyBlocks": "Det er for mange blokker i det spesifiserte området (%1$d > %2$d)",
    "fill_replace_auxvalue_invalid": "Den nye dataverdien for blokk %1$s er ugyldig",
    "function_description": "Kjører kommandoene i den tilsvarende funksjonsfilen.",
    "function_functionNameNotFound": "Fant ikke funksjonen %1$s.",
    "function_invalidCharacters": "Funksjonen med navnet \"%s\" er ugyldig. Tegnet \"%s\" er ikke tillatt i funksjonsnavn.",
    "function_noEngineVersionSpecified": "Funksjonen %s kan ikke kjøres. Du må angi en min_engine_version i atferdspakkens manifest.json.",
    "function_success": "Kjørte funksjonsoppføringene (%1$d) uten feil.",
    "gamemode_description": "Angir en spillers spillmodus.",
    "gamemode_success_other": "Spillmodusen til %2$s har blitt satt til %1$s",
    "gamemode_success_self": "Din egen spillmodus har blitt satt til %1$s",
    "gamemode_fail_invalid": "Spillmodusen %1$s er ugyldig",
    "gamerule_description": "Angir eller spør om en spillregelverdi.",
    "gamerule_type_invalid": "Ugyldig type brukes for spillregelen %1$s",
    "gamerule_type_nocheatsenabled": "Spillregelen \"%1$s\" kan bare brukes hvis juksing er aktivert i denne verdenen.",
    "gamerule_nopermission": "Det er bare servereiere som kan endre %1$s",
    "gamerule_norule": "Det finnes ingen spillregel med navnet %1$s",
    "gamerule_success": "Spillregelen %1$s har blitt endret til %2$s",
    "generic_async_initiated": "%1$s-kommandoen er startet (asynkront trinn %2$d)",
    "generic_boolean_invalid": "%1$s er ikke sann eller usann",
    "generic_chunk_notFound": "Fant ikke den spesifiserte delen",
    "generic_componentError": "Kunne ikke analysere komponentlisten",
    "generic_dimension_notFound": "Fant ikke den spesifiserte dimensjonen",
    "generic_disabled": "Juksing er ikke aktivert på dette nivået.",
    "generic_disabled_templateLocked": "Innstillingene er låst for øyeblikket. Lås opp verdensalternativer for mal på menyen Spillinnstillinger for å endre dem.",
    "generic_double_tooBig": "Tallet du har oppgitt (%.2f), er for stort og kan være maksimalt %.2f",
    "generic_double_tooSmall": "Tallet du har oppgitt (%.2f), er for lite og må være minst %.2f",
    "generic_duplicateType": "Dupliserte typeargumenter",
    "generic_duplicateSelectorArgument": "Dupliserte velgerargumenter (%s)",
    "generic_encryption_badkey": "Ugyldig fellesnøkkel. Forventet nøkkel på 120 byte etter PEM-formatering.",
    "generic_encryption_badsalt": "Ugyldig SALT. Forventet SALT på 16 byte før koding med base 64.",
    "generic_encryption_required": "Kryptert økt kreves",
    "generic_entity_invalidType": "Enhetstypen %1$s er ugyldig",
    "generic_entity_invalidUuid": "Enhetens oppgitte UUID er i et ugyldig format",
    "generic_entity_notFound": "Finner ikke denne enheten",
    "generic_exception": "Det oppstod en ukjent feil under forsøket på å utføre denne kommandoen",
    "generic_invalidAgentType": "Typeargument brukt på velger begrenset til agenter",
    "generic_invalidcontext": "Ugyldig kontekst angitt for gitt kommandotype",
    "generic_invalidDevice": "Den oppgitte kommandoen %s støttes ikke på denne enheten",
    "generic_invalidPlayerType": "Typeargument brukt på velger begrenset til spillere",
    "generic_invalidType": "Ukjent typeargument",
    "generic_levelError": "Høyeste nivå må være større enn laveste nivå",
    "generic_malformed_body": "Hoveddelen mangler eller har feil format",
    "generic_malformed_type": "Ugyldig forespørselstype",
    "generic_notimplemented": "Ikke implementert",
    "generic_num_invalid": "%1$s er ikke et gyldig tall",
    "generic_num_tooBig": "Tallet du har oppgitt (%1$d), er for stort og kan være maksimalt %2$d",
    "generic_num_tooSmall": "Tallet du har oppgitt (%1$d), er for lite og må være minst %2$d",
    "generic_parameter_invalid": "%1$s er ikke en gyldig parameter",
    "generic_permission_selector": "<mangler tillatelser for velgerutvidelse>",
    "generic_player_notFound": "Finner ikke denne spilleren",
    "generic_protocol_mismatch": "Den oppgitte protokollversjonen samsvarer ikke med Minecrafts protokollversjon",
    "generic_radiusError": "Minste velgerradius må være mindre enn den største",
    "generic_radiusNegative": "Radiusen kan ikke være negativ",
    "generic_rotationError": "Ugyldig rotasjon",
    "generic_running": "Kommandoen kjører allerede",
    "generic_step_failed": "Kommandotrinnet mislyktes",
    "generic_syntax": "Syntaksfeil: uventet \"%2$s\": i \"%1$s>>%2$s<<%3$s\"",
    "generic_noTargetMatch": "Ingen mål samsvarte med velgeren",
    "generic_targetNotPlayer": "Velgeren må være spillertype",
    "generic_tooManyNames": "For mange målnavnargumenter",
    "generic_tooManyTargets": "For mange mål samsvarte med velgeren",
    "generic_too_many_requests": "Du har spurt om for mange kommandoer. Vent til en av dem er ferdig.",
    "generic_unknown": "Ukjent kommando: %s. Sjekk at kommandoen finnes, og at du har lov til å bruke den.",
    "generic_usage": "Bruk: %1$s",
    "generic_usage_noparam": "Bruk:",
    "generic_version_mismatch": "Den ønskede versjonen finnes ikke for denne kommandoen",
    "generic_version_missing": "Kommandokall som ikke er fra chat må angi kommandoversjonen",
    "getchunkdata_description": "Henter piksler for en bestemt del.",
    "getchunkdata_success": "Deldata er mottatt",
    "getchunks_description": "Henter liste over innlastede deler.",
    "getchunks_success": "Liste over deler er mottatt",
    "getlocalplayername_description": "Henter navnet til den lokale spilleren.",
    "getspawnpoint_description": "Henter startpunktet til de angitte spillerne.",
    "gettopsolidblock_description": "Henter posisjonen til den øverste blokken som ikke er luft, under den angitte posisjonen",
    "gettopsolidblock_notfound": "Ingen faste blokker under den angitte posisjonen",
    "give_block_notFound": "Det finnes ingen blokk med navnet %1$d",
    "give_description": "Gir en gjenstand til en spiller.",
    "give_item_invalid": "Ugyldig kommandosyntaks: Det finnes ingen %s med denne dataverdien",
    "give_item_notFound": "Det finnes ingen gjenstand med navnet %1$d",
    "give_map_invalidData": "De oppgitte kartdataene er ugyldige",
    "give_map_featureNotFound": "Kunne ikke lage utforskingskart. Fant ikke funksjonen i denne dimensjonen.",
    "give_success": "Gav %1$s * %2$d til %3$s",
    "give_successRecipient": "Du har fått %1$s * %2$d",
    "give_tagError": "Analyseringen av datataggen mislyktes: %1$s",
    "help_description": "Viser hjelp / liste over kommandoer.",
    "help_footer": "Tips: Bruk <tabulatortasten> til automatisk å fullføre kommandoen eller kommandoens argumenter når du skriver en kommando",
    "help_header": "--- Viser hjelpeside %1$d av %2$d (/help <side>) ---",
    "help_command_aliases": "%s (også %s):",
    "immutableworld_description": "Angir den uforanderlige tilstanden til verdenen.",
    "immutableworld_info": "immutableworld = %s",
    "kick_description": "Sparker en spiller ut fra serveren.",
    "kick_description_edu": "Fjerner en spiller fra spillet.",
    "kick_not_found": "Fant ikke spilleren %1$s",
    "kick_not_yourself": "Du kan ikke fjerne deg selv fra spillet",
    "kick_success": "%1$s ble sparket ut av spillet",
    "kick_success_reason": "%1$s ble sparket ut av spillet: %2$s",
    "kick_success_reasonedu": "%1$s ble fjernet fra spillet: %2$s",
    "kick_no_host": "Verten kan ikke kastet ut av spillet.",
    "kick_no_teacher": "Lærere kan ikke fjernes fra spillet.",
    "kill_successful_edu": "Fjernet %1$s",
    "kill_successful": "Drepte %1$s",
    "kill_description_edu": "Fjerner enheter (spillere, vesener osv.).",
    "kill_description": "Dreper enheter (spillere, vesener osv.).",
    "list_description": "Viser en liste over spillere på serveren.",
    "locate_description": "Viser koordinatene for den nærmeste strukturen av en angitt type.",
    "locate_fail_noplayer": "Kommandoen kan bare brukes av en gyldig spiller",
    "locate_fail_nostructurefound": "Fant ingen gyldige byggverk i denne dimensjonen",
    "locate_success": "Nærmeste %1$s er ved blokken %2$s, (y?), %3$s",
    "togglecontentlog_toggle": "Aktiverer/deaktiverer innholdsloggkommandoen",
    "togglecontentlog_enabled": "Innholdsloggen er aktivert",
    "togglecontentlog_disabled": "Innholdsloggen er deaktivert",
    "me_description": "Viser en melding om deg selv.",
    "message_display_incoming": "%1$s hvisker til deg: %2$s",
    "message_display_outgoing": "Du hvisker til %1$s: %2$s",
    "message_sameTarget": "Du kan ikke sende en privat melding til deg selv!",
    "mixer_description": "Styring av Mixer-interaktivitet",
    "mixer_error_unknown": "Det har oppstått en ukjent Mixer-feil.",
    "mixer_error_notoken": "Du må være logget på med en Microsoft-konto for å aktivere Mixer-interaktivitet.",
    "mixer_error_notsupported": "Mixer-interaktivitet støttes ikke på enheten din.",
    "mixer_interactive_error": "Det har oppstått en Mixer-feil: %1$s",
    "mixer_scene_failed": "Det finnes ingen scener ved navn %1$s. Sjekk at du har skrevet scenens navn riktig.",
    "mixer_scene_success": "Scenen er forandret til: %1$s",
    "mixer_start_success": "Mixer-interaktivitet starter: %1$s",
    "mixer_start_fail_invalidCode": "Finner ingen prosjekter med ID-en «%1$s». Sjekk at ID-en eller delingskoden er riktig.",
    "mixer_stop_success": "Mixer-interaktivitet stanset.",
    "mixer_stop_fail": "Ingen interaktiv økt å stoppe.",
    "mixer_status_notinitialized": "Interaktivitet er ikke startet.",
    "mixer_status_enabled": "Interaktivitet er aktivert.",
    "mixer_status_initializing": "Interaktivitet starter.",
    "mixer_status_pending": "Interaktivitet er på vent.",
    "mixer_status_disabled": "Interaktivitet er deaktivert.",
    "mixer_activatedbutton": "%1$s aktiverte %2$s.",
    "mobevent_description": "Styrer hvilke vesenhendelser som er tillatt å kjøre.",
    "mobevent_eventsEnabledSetToTrue": "Vesenhendelser er nå aktivert. Individuelle hendelser som er satt til usanne vil ikke kjøre.",
    "mobevent_eventsEnabledSetToFalse": "Vesenhendelser er nå deaktivert. Individuelle hendelser vil ikke kjøre.",
    "mobevent_eventsEnabledIsTrue": "Vesenhendelser er nå aktivert. Individuelle hendelser som er satt til usanne vil ikke kjøre.",
    "mobevent_eventsEnabledIsFalse": "Vesenhendelser er deaktivert. Individuelle hendelser vil ikke kjøre.",
    "mobevent_eventSetToTrue": "Vesenhendelse %s (id: %s) satt til sann.",
    "mobevent_eventSetToTrueButEventsDisabled": "Vesenhendelse %s (id: %s) satt til sann, men vesenhendelser er deaktivert.",
    "mobevent_eventSetToFalse": "Vesenhendelse %s (id: %s) satt til usann.",
    "mobevent_eventIsTrue": "Vesenhendelse %s (id: %s) er satt til sann.",
    "mobevent_eventIsTrueButEventsDisabled": "Vesenhendelse %s (id: %s) er satt til sann, men vesenhendelser er deaktivert.",
    "mobevent_eventIsFalse": "Vesenhendelse %s (id: %s) er satt til usann.",
    "op_description": "Gir operatorstatus til en spiller.",
    "op_failed": "Kunne ikke gi operatørstatus (er allerede operatør eller høyere): %s",
    "op_success": "Fått operatørstatus: %s",
    "op_message": "Du har fått operatørstatus",
    "origin_commandblock": "Kommandoblokk",
    "origin_external": "Ekstern",
    "origin_devconsole": "Utviklerkonsoll",
    "origin_script": "Skriptmotor",
    "origin_server": "Server",
    "origin_teacher": "Lærer",
    "ops_description": "Laster inn operatørtillatelser på nytt og tar dem i bruk.",
    "ops_reloaded": "Operatørtillatelser er lastet inn på nytt fra en fil.",
    "ops_set_success": "Operatørnivå er angitt for spiller %s.",
    "permissions_description": "Laster inn tillatelser på nytt og tar dem i bruk.",
    "permissions_reloaded": "Tillatelser er lastet inn på nytt fra en fil.",
    "permissions_set_failed": "Kunne ikke angi tillatelsesnivå %s for spiller %s.",
    "permissions_set_success": "Tillatelsesnivå %s er angitt for spiller %s.",
    "permissions_save_failed": "Kunne ikke lagre tillatelsesnivå %s for spiller %s.",
    "permissions_save_success": "Tillatelsesnivå %s er lagret for spiller %s.",
    "spawnParticleEmitter_description": "Oppretter en partikkelsender",
    "particle_description": "Lager partikler.",
    "particle_notFound": "Ukjent effektnavn (%1$s)",
    "particle_success": "Gjentar effekten %1$s %2$d ganger",
    "players_list": "%1$d/%2$d spillere er tilkoblet:",
    "players_list_names": "%s",
    "playsound_description": "Spiller en lyd.",
    "playsound_playerTooFar": "Spilleren %1$s er for langt borte til å høre lyden",
    "playsound_success": "Spilte lyden %1$s for %2$s",
    "position_description": "Slår spillerens koordinater av og på.",
    "publish_failed": "Kan ikke være vert for lokalt spill",
    "publish_started": "Lokalt spill kjøres på port %1$s",
    "querytarget_description": "Henter transformeringsinformasjon, navn og ID til angitt målenhet eller enheter.",
    "querytarget_success": "Måldata: %1$s",
    "reload_description": "Laster inn alle funksjonsfiler fra alle atferdspakker på nytt.",
    "reload_success": "Eksisterende funksjonsfiler er lastet på nytt. Start Minecraft på nytt for å laste inn nye funksjoner.",
    "replaceitem_description": "Erstatter gjenstander i inventarer.",
    "replaceitem_failed": "Kan ikke erstatte %s plass %d med %d * %s",
    "replaceitem_keepFailed": "Det er allerede en gjenstand som opptar %s spor %d.",
    "replaceitem_noContainer": "Blokken på %s er ikke en beholder",
    "replaceitem_badSlotNumber": "Kunne ikke erstatte plassen %d. Må være en verdi mellom %d og %d.",
    "replaceitem_success": "Erstattet %s plass %d med %d * %s",
    "replaceitem_success_entity": "Erstattet %s plass %d (%s) med %d * %s",
    "replaceitem_tagError": "Analyseringen av datataggen mislyktes: %1$s",
    "save_description": "Velg eller sjekk hvordan spillet lagrer data på harddisken.",
    "save_disabled": "Automatisk lagring av verdenen er deaktivert",
    "save_enabled": "Automatisk lagring av verdenen er aktivert",
    "save_failed": "Lagringen mislyktes: %1$s",
    "save_start": "Lagrer …",
    "save_success": "Verdenen er lagret",
    "save_all_error": "Det oppstod en feil under forsøket på å sette nivålagringen på pause.",
    "save_all_success": "Dataene har blitt lagret. Filene kan nå kopieres.",
    "save_off_alreadyOff": "Lagring er allerede deaktivert.",
    "save_on_alreadyOn": "Lagring er allerede aktivert.",
    "save_on_notDone": "En tidligere lagring er ikke ferdig.",
    "save_on_description": "Aktiverer automatisk serverlagring.",
    "save_on_success": "Endringene av nivået er aktivert igjen.",
    "save_state_description": "Sjekker om en tidligere lagring av alt er ferdig, og viser de involverte filene.",
    "say_description": "Sender en melding i chatten til andre spillere.",
    "scoreboard_description": "Registrerer og viser poengsum for ulike mål.",
    "scoreboard_allMatchesFailed": "Alle operasjoner mislyktes",
    "scoreboard_noMultiWildcard": "Det er bare tillatt med én bruker som ikke er kvalifisert på vanlig måte",
    "scoreboard_objectiveNotFound": "Fant ikke noe mål med navnet \"%1$s\"",
    "scoreboard_objectiveReadOnly": "Målet \"%1$s\" er skrivebeskyttet og kan ikke velges",
    "scoreboard_objectives_add_alreadyExists": "Det finnes allerede et mål med navnet \"%1$s\"",
    "scoreboard_objectives_add_displayTooLong": "Kallenavnet \"%1$s\" er for langt for et mål. Det kan inneholde maksimalt %2$d tegn.",
    "scoreboard_objectives_add_success": "Det nye målet \"%1$s\" er lagt til",
    "scoreboard_objectives_add_tooLong": "Navnet \"%1$s\" er for langt for et mål. Det kan inneholde maksimalt %2$d tegn.",
    "scoreboard_objectives_add_wrongType": "Målkriterietypen \"%1$s\" er ugyldig",
    "scoreboard_objectives_add_needName": "Mål må ha et navn.",
    "scoreboard_objectives_description": "Endre mål i resultatlisten.",
    "scoreboard_objectives_list_count": "Viser %1$d mål i resultatlisten:",
    "scoreboard_objectives_list_empty": "Det finnes ingen mål i resultatlisten",
    "scoreboard_objectives_list_entry": "– %1$s: vises som \"%2$s\" og er av typen \"%3$s\"",
    "scoreboard_objectives_remove_success": "Målet \"%1$s\" har blitt fjernet",
    "scoreboard_objectives_setdisplay_invalidSlot": "Visningsplassen \"%1$s\" finnes ikke",
    "scoreboard_objectives_setdisplay_successCleared": "Målvisningsplassen \"%1$s\" har blitt tømt",
    "scoreboard_objectives_setdisplay_successSet": "Satte visningsmålet på plassen \"%1$s\" til \"%2$s\"",
    "scoreboard_players_add_success": "La til %1$d til [%2$s] for %3$s (nå %4$d)",
    "scoreboard_players_add_multiple_success": "La til %1$d til [%2$s] for %3$d enheter",
    "scoreboard_players_nameNotFound": "Du må oppgi et spillernavn.",
    "scoreboard_players_enable_noTrigger": "Målet \"%1$s\" er ikke en utløser",
    "scoreboard_players_enable_success": "Utløseren \"%1$s\" har blitt aktivert for \"%2$s\"",
    "scoreboard_players_list_count": "Viser %1$d fulgte spillere i resultatlisten:",
    "scoreboard_players_list_empty": "Det finnes ingen fulgte spillere i resultatlisten",
    "scoreboard_players_list_player_count": "Viser %1$d fulgt(e) mål for %2$s:",
    "scoreboard_players_list_player_empty": "Spilleren %1$s har ikke registrert noen resultater",
    "scoreboard_players_list_player_entry": "– %2$s: %1$d (%3$s)",
    "scoreboard_players_operation_invalidOperation": "Operasjonen \"%1$s\" er ugyldig",
    "scoreboard_players_operation_notFound": "Fant ikke resultatet %1$s for %2$s",
    "scoreboard_players_operation_success": "Oppdaterte [%1$s] for %2$d enheter",
    "scoreboard_players_offlinePlayerName": "Spiller Frakoblet",
    "scoreboard_players_random_invalidRange": "Min. %1$d er ikke mindre enn maks. %2$d",
    "scoreboard_players_remove_success": "Fjernet %1$d fra [%2$s] for %3$s (nå %4$d)",
    "scoreboard_players_remove_multiple_success": "Fjernet %1$d fra [%2$s] for %3$d enheter",
    "scoreboard_players_reset_success": "Tilbakestilte resultatene for spilleren %1$s",
    "scoreboard_players_resetscore_success": "Tilbakestilte resultatet %1$s for spilleren %2$s",
    "scoreboard_players_set_success": "Angi [%1$s] for %2$s til %3$d",
    "scoreboard_players_set_multiple_success": "Angi [%1$s] for %2$d enheter til %3$d",
    "scoreboard_players_set_tagError": "Kunne ikke analysere datataggen. Årsak: %1$s",
    "scoreboard_players_set_tagMismatch": "Datataggen samsvarer ikke for %1$s",
    "scoreboard_players_score_notFound": "Fant ikke resultatet %1$s for %2$s",
    "scoreboard_players_test_failed": "Resultatet %1$d er IKKE mellom %2$d og %3$d",
    "scoreboard_players_test_success": "Resultatet %1$d er mellom %2$d og %3$d",
    "scoreboard_teamNotFound": "Fant ikke noe lag med navnet \"%1$s\"",
    "scoreboard_teams_add_alreadyExists": "Det finnes allerede et lag med navnet \"%1$s\"",
    "scoreboard_teams_add_displayTooLong": "Kallenavnet \"%1$s\" er for langt for et lag. Det kan inneholde maksimalt %2$d tegn.",
    "scoreboard_teams_add_success": "Det nye laget \"%1$s\" er lagt til",
    "scoreboard_teams_add_tooLong": "Navnet \"%1$s\" er for langt for et lag. Det kan inneholde maksimalt %2$d tegn.",
    "scoreboard_teams_empty_alreadyEmpty": "Laget \"%1$s\" er allerede tomt, og du kan ikke fjerne spillere som ikke finnes",
    "scoreboard_teams_empty_success": "Alle spillerne (%1$d) har blitt fjernet fra laget \"%2$s\"",
    "scoreboard_teams_join_failure": "Kunne ikke legge til %1$d spiller(e) på laget \"%2$s\": %3$s",
    "scoreboard_teams_join_success": "%1$d spiller(e) er lagt til på laget \"%2$s\": %3$s",
    "scoreboard_teams_leave_failure": "Kunne ikke fjerne %1$d spiller(e) fra laget sitt: %2$s",
    "scoreboard_teams_leave_noTeam": "Du er ikke med på et lag",
    "scoreboard_teams_leave_success": "%1$d spiller(e) har blitt fjernet fra laget sitt: %2$s",
    "scoreboard_teams_list_count": "Viser %1$d lag i resultatlisten:",
    "scoreboard_teams_list_empty": "Det finnes ingen registrerte lag i resultatlisten",
    "scoreboard_teams_list_entry": "– %1$s: \"%2$s\" har %3$d spillere",
    "scoreboard_teams_list_player_count": "Viser %1$d spiller(e) på laget \"%2$s\":",
    "scoreboard_teams_list_player_empty": "Laget \"%1$s\" har ingen spillere",
    "scoreboard_teams_list_player_entry": "– %2$s: %1$d (%3$s)",
    "scoreboard_teams_option_noValue": "Gyldige verdier for alternativet %1$s er: %2$s",
    "scoreboard_teams_option_success": "Satte alternativet %1$s for laget \"%2$s\" til %3$s",
    "scoreboard_teams_remove_success": "Fjernet laget \"%1$s\"",
    "seed_success": "Frø: %1$s",
    "setblock_description": "Endrer en blokk til en annen blokk.",
    "setblock_failed": "Kan ikke plassere blokken",
    "setblock_noChange": "Blokken kunne ikke plasseres",
    "setblock_notFound": "Det finnes ingen blokk med ID-en eller navnet %1$s",
    "setblock_outOfWorld": "Kan ikke plassere blokker utenfor verdenen",
    "setblock_success": "Blokken er plassert",
    "setblock_tagError": "Analyseringen av datataggen mislyktes: %1$s",
    "setidletimeout_success": "Tid uten aktivitet har blitt satt til %1$d minutter.",
    "setfixedinvslots_description": "Velger antallet faste inventarplasser for serveren.",
    "setfixedinvslots_success": "Antallet faste inventarplasser har blitt satt til %1$d",
    "setfixedinvslot_description": "Gir en fast plass til en angitt gjenstand.",
    "setfixedinvslot_success": "Den faste inventarplassen %1$d har blitt satt til %2$s",
    "globalpause_description": "Angir eller henter pausestatusen for spillet for alle spillere.",
    "globalpause_success": "Pausestatusen har blitt angitt eller oppgitt",
    "setmaxplayers_description": "Angir maksimalt antall spillere for spilløkten.",
    "setmaxplayers_success": "Sett maksimalt antall spillere til %1$d.",
    "setmaxplayers_success_upperbound": "(Bundet til maksimalt antall tillatte tilkoblinger)",
    "setmaxplayers_success_lowerbound": "(Bundet til gjeldende spillerkonto)",
    "setworldspawn_description": "Angir startpunktet for verden.",
    "setworldspawn_success": "Satte startpunktet i verdenen til (%1$d, %2$d, %3$d)",
    "setworldspawn_wrongDimension": "Startpunktet i verdenen kan ikke settes i denne dimensjonen",
    "spawnpoint_success_single": "Satte startpunktet til %1$s til (%2$d, %3$d, %4$d)",
    "spawnpoint_description": "Angir startpunktet for en spiller.",
    "spawnpoint_success_multiple_specific": "Satte startpunktet til %1$s til (%2$d, %3$d, %4$d)",
    "spawnpoint_success_multiple_generic": "Fastsatte startpunktet til %1$s",
    "spawnpoint_wrongDimension": "Startpunktet kan ikke settes i denne dimensjonen",
    "spreadplayers_description": "Teleporterer objekter til tilfeldige steder.",
    "spreadplayers_failure_players": "Kunne ikke spre %1$s spillere rundt %2$s,%3$s (for mange spillere i forhold til plassen – prøv med en spredning på maksimalt %4$s)",
    "spreadplayers_failure_teams": "Kunne ikke spre %1$s lag rundt %2$s,%3$s (for mange spillere i forhold til plassen – prøv med en spredning på maksimalt %4$s)",
    "spreadplayers_info_players": "(Den gjennomsnittlige avstanden mellom spillerne er %1$s blokker etter %2$s gjentakelser)",
    "spreadplayers_info_teams": "(Den gjennomsnittlige avstanden mellom lagene er %1$s blokker etter %2$s gjentakelser)",
    "spreadplayers_spreading_players": "Sprer %1$s spillere med en spredning på %2$s blokker rundt %3$s,%4$s (minst %5$s blokker fra hverandre)",
    "spreadplayers_spreading_teams": "Sprer %1$s lag med en spredning på %2$s blokker rundt %3$s,%4$s (minst %5$s blokker fra hverandre)",
    "spreadplayers_success_players": "%1$s spillere har blitt spredt rundt %2$s,%3$s",
    "spreadplayers_success_teams": "%1$s lag har blitt spredt rundt %2$s,%3$s",
    "stats_cleared": "Statistikken til %1$s har blitt fjernet",
    "stats_failed": "Ugyldige parametere",
    "stats_noCompatibleBlock": "Blokken på %1$d, %2$d, %3$d kan ikke spore statistikk",
    "stats_success": "Lagrer %1$s sin statistikk for %2$s på %3$s",
    "stop_description": "Stopper serveren.",
    "stop_start": "Stopper serveren",
    "stopsound_description": "Stopper en lyd.",
    "stopsound_success": "Stoppet lyden %s for %s",
    "stopsound_success_all": "Stoppet alle lydene for %s",
    "summon_description": "Tilkaller en enhet.",
    "summon_failed": "Kan ikke hente objektet",
    "summon_outOfWorld": "Kan ikke hente objektet ut av verdenen",
    "summon_success": "Objektet har blitt hentet",
    "summon_tagError": "Analyseringen av datataggen mislyktes: %1$s",
    "tag_description": "Administrerer tagger lagret i objekter.",
    "tag_add_failed": "Målet har taggen allerede eller har for mange tagger",
    "tag_add_success_single": "Taggen \"%1$s\" er lagt til i %2$s",
    "tag_add_success_multiple": "Taggen \"%1$s\" er lagt til i %2$d objekter",
    "tag_list_single_empty": "%s har ingen tagger",
    "tag_list_single_success": "%1$s har %2$d tagger: %3$s",
    "tag_list_multiple_empty": "Det er ingen tagger i de %d objektene",
    "tag_list_multiple_success": "De %1$d objektene har %2$d tagger totalt: %3$s",
    "tag_remove_failed": "Målet har ikke denne taggen",
    "tag_remove_success_single": "Taggen \"%1$s\" er fjernet fra %2$s",
    "tag_remove_success_multiple": "Taggen \"%1$s\" er fjernet fra %2$d objekter",
    "tell_description": "Sender en privat melding til én eller flere spillere.",
    "tellraw_description": "Sender en JSON-melding til spillere.",
    "tellraw_jsonException": "Ugyldig JSON: %1$s",
    "tellraw_jsonStringException": "Ugyldige JSON-strengdata.",
    "tellraw_error_noData": "Ingen data ble angitt.",
    "tellraw_error_notArray": "Rawtext-objektet må inneholde en matrise. Eksempel: \"rawtext\": [{..}]",
    "tellraw_error_textNotString": "tekstfeltet i rawtext må inneholde en streng. Eksempel: \"rawtext\": [{\"text\": \"text to display\"}]",
    "tellraw_error_translateNotString": "translate-feltet i rawtext må inneholde en språknøkkel. Eksempel: \"rawtext\":[{\"translate\": \"gui.ok\"}]",
    "tellraw_error_withNotArrayOrRawText": "med felt i råtekst må inneholde en matrise eller et annet råtekstobjekt. Eksempel 1: \"råtekst\":[{\"translate\": \"chat.type.announcement\", \"with\": [ \"value1\", \"value2\" ]}]  Eksempel 2: \"råtekst\":[{\"translate\": \"chat.type.announcement\", \"with\":{\"rawtext\":[{\"text\": \"value1\"}, {\"text\": \"value2\"}]}}]",
    "tellraw_error_itemIsNotObject": "JSON-verdien i en matrise av rawtext var ikke et objekt. Eksempel: \"rawtext\": [{ \"text\" : \"my text\" }]",
    "educlientinfo_description": "Få oppgitt bruker-ID og vertsstatus. Ment for CM.",
    "testfor_description": "Teller objekter (spillere, vesener, gjenstander osv.) som oppfyller de gitte betingelsene.",
    "testfor_failure": "%1$s samsvarte ikke med den nødvendige datastrukturen",
    "testfor_success": "Fant %1$s",
    "testfor_tagError": "Analyseringen av datataggen mislyktes: %1$s",
    "testforblock_description": "Tester om en bestemt blokk er på et bestemt sted.",
    "testforblock_failed_data": "Blokken på %1$d,%2$d,%3$d samsvarte ikke med forventet blokktilstand.",
    "testforblock_failed_nbt": "Blokken på %1$d,%2$d,%3$d hadde ikke de nødvendige NBT-nøklene.",
    "testforblock_failed_tile": "Blokken på %1$d,%2$d,%3$d er %4$s (forventet %5$s).",
    "testforblock_failed_tileEntity": "Blokken på %1$d,%2$d,%3$d er ikke en flisenhet og støtter ikke taggsamsvar.",
    "testforblock_outOfWorld": "Kan ikke teste for blokker utenfor verdenen",
    "testforblock_success": "Fant blokken på %1$d,%2$d,%3$d.",
    "testforblocks_description": "Tester om blokkene på to områder er like.",
    "tickingarea_description": "Legg til, fjern eller vis selvoppdaterende områder.",
    "tickingarea_inuse": "%1$d/%2$d selvoppdaterende områder er i bruk.",
    "tickingarea_noneExist_currentDimension": "Det finnes ingen selvoppdaterende områder i den nåværende dimensjonen.",
    "tickingarea_add_bounds_success": "La til selvoppdaterende område fra %1$d i %2$d.",
    "tickingarea_add_circle_success": "La til selvoppdaterende område med midtpunktet %1$d og en radius på %2$d deler.",
    "tickingarea_add_failure": "Maksimalt antall selvoppdaterende områder (%1$d) er allerede nådd. Kan ikke legge til flere selvoppdaterende områder.",
    "tickingarea_add_conflictingname": "Det finnes allerede et selvoppdaterende område med navnet %1$s.",
    "tickingarea_add_chunkfailure": "Det selvoppdaterende området inneholder mer enn %1$d deler, noe som gjør det så stort at det ikke kan opprettes.",
    "tickingarea_add_radiusfailure": "Radiusen kan ikke være større enn %1$d. Det selvoppdaterende området er for stort og kan ikke opprettes.",
    "tickingarea_remove_success": "Fjernet selvoppdaterende område(r)",
    "tickingarea_remove_failure": "Det finnes ingen selvoppdaterende områder med blokkposisjonen %1$d i den nåværende dimensjonen.",
    "tickingarea_remove_byname_failure": "Det finnes ingen selvoppdaterende områder med navnet %1$s i den nåværende dimensjonen.",
    "tickingarea_remove_all_success": "Fjernet selvoppdaterende område(r)",
    "tickingarea_remove_all_failure": "Det finnes ingen selvoppdaterende områder i den nåværende dimensjonen.",
    "tickingarea_list_chunks": "deler",
    "tickingarea_list_circle_radius": "Radius",
    "tickingarea_list_success_currentDimension": "Liste over alle selvoppdaterende områder i den nåværende dimensjonen",
    "tickingarea_list_success_allDimensions": "Liste over alle selvoppdaterende områder i alle dimensjoner",
    "tickingarea_list_failure_allDimensions": "Det finnes ikke selvoppdaterende områder i noen dimensjoner.",
    "tickingarea_list_to": "til",
    "tickingarea_list_type_circle": "Sirkel",
    "time_added": "%1$d har blitt lagt til tiden",
    "time_description": "Endrer eller spør om verdenens spilletid.",
    "time_disabled": "Alltid dag er aktivert på dette nivået.",
    "time_query_day": "Dagen er %d",
    "time_query_daytime": "Tiden på dagen er %d",
    "time_query_gametime": "Spilltiden er %d",
    "time_set": "Sett tiden til %1$d",
    "time_stop": "Tid: %1$s",
    "title_description": "Kontrollerer skjermtitler.",
    "title_success": "Tittelkommandoen ble kjørt uten feil",
    "titleraw_description": "Kontrollerer skjermtitler med JSON-meldinger.",
    "toggledownfall_description": "Aktiverer eller deaktiverer været.",
    "tp_description": "Teleporterer enheter (spillere, vesener osv.).",
    "tp_notSameDimension": "Kan ikke teleportere fordi spillerne ikke er i samme dimensjon",
    "tp_outOfWorld": "Kan ikke teleportere objekter utenfor verdenen",
    "tp_permission": "Du har ikke tillatelse til å bruke denne /-kommandoen.",
    "tp_safeTeleportFail": "Kunne ikke teleportere %1$s til %2$s fordi området ikke var fritt for blokker.",
    "tp_far": "Kunne ikke teleportere %1$s til det ikke innlastede området ved %2$s",
    "tp_success": "%1$s har blitt teleportert til %2$s",
    "tp_successVictim": "Du har blitt teleportert til %1$s",
    "tp_success_coordinates": "%1$s har blitt teleportert til %2$s, %3$s, %4$s",
    "transferserver_description": "Overfører en spiller til en annen server.",
    "transferserver_successful": "Overførte spiller",
    "transferserver_invalid_port": "Ugyldig port (0-65535)",
    "trigger_description": "Velger en utløser som skal aktiveres.",
    "trigger_disabled": "Utløseren %1$s er ikke aktivert",
    "trigger_invalidMode": "Utløsermodusen %1$s er ugyldig",
    "trigger_invalidObjective": "Utløsernavnet %1$s er ugyldig",
    "trigger_invalidPlayer": "Bare spillere kan bruke kommandoen /trigger",
    "trigger_success": "Utløseren %1$s har blitt endret med %2$s %3$s",
    "unban_failed": "Kunne ikke oppheve utestengingen av spilleren %1$s",
    "unban_success": "Utestengingen av spilleren %1$s har blitt opphevet",
    "unbanip_invalid": "Du har oppgitt en ugyldig IP-adresse",
    "unbanip_success": "Utestengingen av IP-adressen %1$s har blitt opphevet",
    "validategamelighting_description": "Validere spillbelysning for en bestemt region",
    "validategamelighting_checkRegionTooBig": "Region for å se etter belysning er for stor! (%1$d > %2$d)",
    "validategamelighting_outOfWorld": "Kan ikke sjekke belysning utenfor verden",
    "weather_clear": "Endrer til skyfri himmel",
    "weather_description": "Angir været.",
    "weather_disabled": "Værsyklus er ikke aktivert på dette nivået.",
    "weather_query": "Været er: %s",
    "weather_query_clear": "klart",
    "weather_query_rain": "regn",
    "weather_query_thunder": "torden",
    "weather_rain": "Endrer til regnvær",
    "weather_thunder": "Endrer til regn og torden",
    "whitelist_add_failed": "Kunne ikke legge til %1$s i hvitelisten",
    "whitelist_add_success": "%1$s har blitt lagt til i hvitelisten",
    "whitelist_description": "Behandler hvitelisten for serveren.",
    "whitelist_disabled": "Hvitelisten er slått av",
    "whitelist_enabled": "Hvitelisten er slått på",
    "whitelist_list": "Det finnes %1$d hvitelistede spillere (av %2$d totalt):",
    "whitelist_reloaded": "Hvitelisten er lastet inn på nytt fra en fil.",
    "whitelist_remove_failed": "Kunne ikke fjerne %1$s fra hvitelisten",
    "whitelist_remove_success": "%1$s har blitt fjernet fra hvitelisten",
    "world_age_description": "Endrer eller henter verdenens alder (tiden siden opprettelsen).",
    "world_age_added": "%1$d har blitt lagt til verdenens alder",
    "world_age_query": "Verdenens alder er %d",
    "world_age_set": "Sett verdenens alder til %1$d",
    "worldborder_center_success": "Satte verdensgrensens midtpunkt til %1$s,%2$s",
    "worldborder_damage_amount_success": "Satte verdensgrensens skademengde til %1$s per blokk (fra %2$s per blokk)",
    "worldborder_damage_buffer_success": "Satte verdensgrensens skadebuffer til %1$s blokker (fra %2$s blokker)",
    "worldborder_get_success": "Verdensgrensen er %1$s blokker bred for øyeblikket",
    "worldborder_set_success": "Satte verdensgrensens bredde til %1$s blokker (fra %2$s blokker)",
    "worldborder_setSlowly_grow_success": "Øker verdensgrensens bredde til %1$s blokker (opp fra %2$s blokker) over et tidsrom på %3$s sekunder",
    "worldborder_setSlowly_shrink_success": "Reduserer verdensgrensens bredde til %1$s blokker (ned fra %2$s blokker) over et tidsrom på %3$s sekunder",
    "worldborder_warning_distance_success": "Satte advarselen om verdensgrensen til %1$s blokker unna (fra %2$s blokker)",
    "worldborder_warning_time_success": "Satte advarselen om verdensgrensen til %1$s sekunder unna (fra %2$s sekunder)",
    "worldbuilder_description": "Endre verdensbyggerstatusen til brukeren.",
    "worldbuilder_success": "Verdensbyggerstatusen har blitt endret til %1$s",
    "wsserver_description": "Prøver å koble til WebSocket-serveren på den angitte nettadressen.",
    "wsserver_invalid_url": "Serverens angitte nettadresse er ugyldig",
    "wsserver_request_existing": "En annen tilkoblingsforespørsel er aktiv for øyeblikket",
    "wsserver_request_failed": "Kunne ikke koble til serveren: %1$s",
    "wsserver_success": "Det er opprettet en tilkobling til serveren: %1$s",
    "xp_description": "Gir erfaring til eller fjerner erfaring fra en spiller.",
    "xp_failure_widthdrawXp": "Kan ikke gi spilleren et negativt antall erfaringspoeng",
    "xp_success": "Gav %1$d erfaringspoeng til %2$s",
    "xp_success_levels": "Gav %1$d nivåer til %2$s",
    "xp_success_negative_levels": "Tok %1$d nivåer fra %2$s"
},
item:{
    "air": [
        "Luft"
    ],
    "apple": [
        "Eple"
    ],
    "golden_apple": [
        "Gulleple"
    ],
    "appleenchanted": [
        "Fortryllet eple"
    ],
    "armor_stand": [
        "Rustningstativ"
    ],
    "arrow": [
        "Pil"
    ],
    "tipped_arrow": [
        "Pil med innsmurt spiss"
    ],
    "banner": [
        "Svart banner",
        "Svart banner",
        "Rødt banner",
        "Grønt banner",
        "Brunt banner",
        "Blått banner",
        "Lilla banner",
        "Cyanfarget banner",
        "Lysegrått banner",
        "Grått banner",
        "Rosa banner",
        "Limegrønt banner",
        "Gult banner",
        "Lyseblått banner",
        "Magentarødt banner",
        "Oransje banner",
        "Hvitt banner"
    ],
    "bed": [
        "Seng",
        "Hvit seng",
        "Oransje seng",
        "Magentarød seng",
        "Lyseblå seng",
        "Gul seng",
        "Limegrønn seng",
        "Rosa seng",
        "Grå seng",
        "Lysegrå seng",
        "Cyanfarget seng",
        "Lilla seng",
        "Blå seng",
        "Brun seng",
        "Grønn seng",
        "Rød seng",
        "Svart seng"
    ],
    "bell": [
        "Bjelle"
    ],
    "steak": [
        "Biff"
    ],
    "beef": [
        "Rått kjøtt"
    ],
    "beetroot": [
        "Rødbete"
    ],
    "beetroot_soup": [
        "Rødbetsuppe"
    ],
    "blaze_powder": [
        "Flammepulver"
    ],
    "blaze_rod": [
        "Blusserstav"
    ],
    "boat": [
        "Eikebåt",
        "Eikebåt",
        "Granbåt",
        "Bjørkebåt",
        "Jungeltrebåt",
        "Akasiebåt",
        "Båt av mørk eik"
    ],
    "bone": [
        "Bein"
    ],
    "book": [
        "Bok"
    ],
    "chainmail_boots": [
        "Brynjestøvler"
    ],
    "leather_boots": [
        "Skinnstøvler"
    ],
    "diamond_boots": [
        "Diamantstøvler"
    ],
    "golden_boots": [
        "Gullstøvler"
    ],
    "iron_boots": [
        "Jernstøvler"
    ],
    "bow": [
        "Bue"
    ],
    "bowl": [
        "Bolle"
    ],
    "bread": [
        "Brød"
    ],
    "brewing_stand": [
        "Bryggeapparat"
    ],
    "brick": [
        "Murstein"
    ],
    "bucket": [
        "Bøtte"
    ],
    "bucketLava": [
        "Lavabøtte"
    ],
    "bucketWater": [
        "Vannbøtte"
    ],
    "bucketFish": [
        "Bøtte med torsk"
    ],
    "bucketSalmon": [
        "Bøtte med laks"
    ],
    "bucketTropical": [
        "Bøtte med tropisk fisk"
    ],
    "bucketPuffer": [
        "Bøtte med kulefisk"
    ],
    "bucketCustomFish": [
        "Bøtte med"
    ],
    "tropicalColorWhite": [
        "Hvit"
    ],
    "tropicalColorOrange": [
        "Oransje"
    ],
    "tropicalColorMagenta": [
        "Magentarød"
    ],
    "tropicalColorSky": [
        "Himmelblå"
    ],
    "tropicalColorYellow": [
        "Gul"
    ],
    "tropicalColorLime": [
        "Limegrønn"
    ],
    "tropicalColorRose": [
        "Rosenrød"
    ],
    "tropicalColorGray": [
        "Grå"
    ],
    "tropicalColorSilver": [
        "Sølvfarget"
    ],
    "tropicalColorTeal": [
        "Blågrønn"
    ],
    "tropicalColorPlum": [
        "Mørkelilla"
    ],
    "tropicalColorBlue": [
        "Blå"
    ],
    "tropicalColorBrown": [
        "Brun"
    ],
    "tropicalColorGreen": [
        "Grønn"
    ],
    "tropicalColorRed": [
        "Rød"
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
        "%1$s blokkfisk"
    ],
    "tropicalBodyBettySingle": [
        "%1$s Betty"
    ],
    "tropicalBodyClayfishSingle": [
        "%1$s leirefisk"
    ],
    "tropicalBodyKobMulti": [
        "%1$s og %2$s Kob"
    ],
    "tropicalBodySunstreakMulti": [
        "%1$s og %2$s SunStreak"
    ],
    "tropicalBodySnooperMulti": [
        "%1$s og %2$s Snooper"
    ],
    "tropicalBodyDasherMulti": [
        "%1$s og %2$s Dasher"
    ],
    "tropicalBodyBrinelyMulti": [
        "%1$s og %2$s Brinely"
    ],
    "tropicalBodySpottyMulti": [
        "%1$s og %2$s Spotty"
    ],
    "tropicalBodyFlopperMulti": [
        "%1$s og %2$s Flopper"
    ],
    "tropicalBodyStripeyMulti": [
        "%1$s og %2$s Stripey"
    ],
    "tropicalBodyGlitterMulti": [
        "%1$s og %2$s Glitter"
    ],
    "tropicalBodyBlockfishMulti": [
        "%1$s og %2$s blokkfisk"
    ],
    "tropicalBodyBettyMulti": [
        "%1$s og %2$s Betty"
    ],
    "tropicalBodyClayfishMulti": [
        "%1$s og %2$s leirefisk"
    ],
    "tropicalSchoolAnemone": [
        "Sjøanemone"
    ],
    "tropicalSchoolBlackTang": [
        "Svart kirurgfisk"
    ],
    "tropicalSchoolBlueDory": [
        "Palettkirurgfisk"
    ],
    "tropicalSchoolButterflyFish": [
        "Sommerfuglfisk"
    ],
    "tropicalSchoolCichlid": [
        "Ciklide"
    ],
    "tropicalSchoolClownfish": [
        "Klovnefisk"
    ],
    "tropicalSchoolCottonCandyBetta": [
        "Kampfisk"
    ],
    "tropicalSchoolDottyback": [
        "Prikket piggfinnefisk"
    ],
    "tropicalSchoolEmperorRedSnapper": [
        "Keisersnapper"
    ],
    "tropicalSchoolGoatfish": [
        "Mulle"
    ],
    "tropicalSchoolMoorishIdol": [
        "Hornzanchlide"
    ],
    "tropicalSchoolOrnateButterfly": [
        "Praktsommerfuglfisk"
    ],
    "tropicalSchoolParrotfish": [
        "Papegøyefisk"
    ],
    "tropicalSchoolQueenAngelFish": [
        "Blå englefisk"
    ],
    "tropicalSchoolRedCichlid": [
        "Rød zebra"
    ],
    "tropicalSchoolRedLippedBlenny": [
        "Rødleppet blenny"
    ],
    "tropicalSchoolRedSnapper": [
        "Rød snapper"
    ],
    "tropicalSchoolThreadfin": [
        "Trådfinnefisk"
    ],
    "tropicalSchoolTomatoClown": [
        "Tomatklovnefisk"
    ],
    "tropicalSchoolTriggerfish": [
        "Avtrekkerfisk"
    ],
    "tropicalSchoolYellowTang": [
        "Gul kirurgfisk"
    ],
    "tropicalSchoolYellowtailParrot": [
        "Gulhalet papegøyefisk"
    ],
    "cake": [
        "Kake"
    ],
    "camera": [
        "Kamera"
    ],
    "golden_carrot": [
        "Gullrot"
    ],
    "carrotOnAStick": [
        "Gulrot på pinne"
    ],
    "warped_fungus_on_a_stick": [
        "Fordreid sopp på en pinne"
    ],
    "carrot": [
        "Gulrot"
    ],
    "cauldron": [
        "Gryte"
    ],
    "coal": [
        "Kull",
        null,
        "Trekull"
    ],
    "chainmail_chestplate": [
        "Brynjebrystplate"
    ],
    "leather_chestplate": [
        "Skinnkjortel"
    ],
    "diamond_chestplate": [
        "Diamantbrystplate"
    ],
    "golden_chestplate": [
        "Gullbrystplate"
    ],
    "iron_chestplate": [
        "Jernbrystplate"
    ],
    "chorus_fruit": [
        "Korfrukt"
    ],
    "chorus_fruit_popped": [
        "Sprukket korfrukt"
    ],
    "cooked_beef": [
        "Stekt kjøtt"
    ],
    "cooked_chicken": [
        "Stekt kylling"
    ],
    "cooked_porkchop": [
        "Stekt kotelett"
    ],
    "chicken": [
        "Rå kylling"
    ],
    "clay_ball": [
        "Leire"
    ],
    "clock": [
        "Klokke"
    ],
    "comparator": [
        "Rødsteinskomparator"
    ],
    "compass": [
        "Kompass"
    ],
    "lodestonecompass": [
        "Magnetsteinkompass"
    ],
    "cookie": [
        "Kjeks"
    ],
    "crossbow": [
        "Armbrøst"
    ],
    "diamond": [
        "Diamant"
    ],
    "repeater": [
        "Rødsteinsrepeater"
    ],
    "acacia_door": [
        "Akasiedør"
    ],
    "birch_door": [
        "Bjørkedør"
    ],
    "dark_oak_door": [
        "Dør av mørk eik"
    ],
    "iron_door": [
        "Jerndør"
    ],
    "jungle_door": [
        "Jungeltredør"
    ],
    "wooden_door": [
        "Eikedør"
    ],
    "spruce_door": [
        "Grandør"
    ],
    "crimson_door": [
        "Høyrød dør"
    ],
    "warped_door": [
        "Fordreid dør"
    ],
    "dragon_breath": [
        "Dragepust"
    ],
    "dye": [
        "Blekkpose",
        "Blekkpose",
        "Rødt fargestoff",
        "Grønt fargestoff",
        "Kakaobønner",
        "Lasurstein",
        "Lilla fargestoff",
        "Cyanfarget fargestoff",
        "Lysegrått fargestoff",
        "Grått fargestoff",
        "Rosa fargestoff",
        "Limegrønt fargestoff",
        "Gult fargestoff",
        "Lyseblått fargestoff",
        "Magentarødt fargestoff",
        "Oransje fargestoff",
        "Beinmel",
        "Svart fargestoff",
        "Brunt fargestoff",
        "Blått fargestoff",
        "Hvitt fargestoff"
    ],
    "egg": [
        "Egg"
    ],
    "elytra": [
        "Elytra"
    ],
    "emerald": [
        "Smaragd"
    ],
    "emptyMap": [
        "Tomt kart"
    ],
    "emptyLocatorMap": [
        "Tomt kart"
    ],
    "emptyPotion": [
        "Vannflaske"
    ],
    "enchanted_book": [
        "Fortryllet bok"
    ],
    "end_crystal": [
        "Sluttkrystall"
    ],
    "end_rod": [
        "Sluttstav"
    ],
    "ender_eye": [
        "Enderøye"
    ],
    "ender_pearl": [
        "Enderperle"
    ],
    "experience_bottle": [
        "Flaske med fortryllelse"
    ],
    "feather": [
        "Fjær"
    ],
    "fermented_spider_eye": [
        "Gjæret edderkoppøye"
    ],
    "fireball": [
        "Ildladning"
    ],
    "fireworks": [
        "Fyrverkerirakett"
    ],
    "fireworksCharge": [
        "Fyrverkeristjerne"
    ],
    "clownfish": [
        "Tropisk fisk"
    ],
    "cooked_fish": [
        "Kokt Torsk"
    ],
    "fish": [
        "Rå Torsk"
    ],
    "pufferfish": [
        "Kulefisk"
    ],
    "cooked_salmon": [
        "Stekt laks"
    ],
    "salmon": [
        "Rå laks"
    ],
    "fishing_rod": [
        "Fiskestang"
    ],
    "flint": [
        "Flint"
    ],
    "flint_and_steel": [
        "Tennstål"
    ],
    "flower_pot": [
        "Blomsterpotte"
    ],
    "frame": [
        "Gjenstandsramme"
    ],
    "ghast_tear": [
        "Geisttåre"
    ],
    "glass_bottle": [
        "Glassflaske"
    ],
    "gold_nugget": [
        "Gullklump"
    ],
    "iron_nugget": [
        "Jernklump"
    ],
    "diamond_axe": [
        "Diamantøks"
    ],
    "golden_axe": [
        "Gulløks"
    ],
    "iron_axe": [
        "Jernøks"
    ],
    "stone_axe": [
        "Steinøks"
    ],
    "wooden_axe": [
        "Treøks"
    ],
    "chainmail_helmet": [
        "Brynjehjelm"
    ],
    "leather_helmet": [
        "Skinnhatt"
    ],
    "diamond_helmet": [
        "Diamanthjelm"
    ],
    "golden_helmet": [
        "Gullhjelm"
    ],
    "iron_helmet": [
        "Jernhjelm"
    ],
    "diamond_hoe": [
        "Diamantkrafse"
    ],
    "golden_hoe": [
        "Gullkrafse"
    ],
    "iron_hoe": [
        "Jernkrafse"
    ],
    "stone_hoe": [
        "Steinkrafse"
    ],
    "wooden_hoe": [
        "Trekrafse"
    ],
    "honey_bottle": [
        "Honningflaske"
    ],
    "honeycomb": [
        "Bikake"
    ],
    "horsearmordiamond": [
        "Hesterustning av diamant"
    ],
    "horsearmorgold": [
        "Hesterustning av gull"
    ],
    "horsearmoriron": [
        "Hesterustning av jern"
    ],
    "horsearmorleather": [
        "Hesterustning av skinn"
    ],
    "gold_ingot": [
        "Gullbarre"
    ],
    "iron_ingot": [
        "Jernbarre"
    ],
    "netherite_ingot": [
        "Underverdenbarre"
    ],
    "netherite_scrap": [
        "Underverdenskrap"
    ],
    "netherite_sword": [
        "Underverdensverd"
    ],
    "netherite_pickaxe": [
        "Underverdenhakke"
    ],
    "netherite_axe": [
        "Underverdenøks"
    ],
    "netherite_shovel": [
        "Underverdenspade"
    ],
    "netherite_hoe": [
        "Underverdenkrafse"
    ],
    "netherite_boots": [
        "Underverdenstøvler"
    ],
    "netherite_leggings": [
        "Underverdenleggings"
    ],
    "netherite_chestplate": [
        "Underverdenbrystplate"
    ],
    "netherite_helmet": [
        "Underverdenhjelm"
    ],
    "lead": [
        "Reim"
    ],
    "leather": [
        "Skinn"
    ],
    "leaves": [
        "Løv",
        "Eikeløv",
        "Granløv",
        "Bjørkeløv",
        "Jungeltreløv",
        "Akasieløv",
        "Løv fra mørk eik"
    ],
    "chainmail_leggings": [
        "Brynjebukser"
    ],
    "leather_leggings": [
        "Skinnbukser"
    ],
    "diamond_leggings": [
        "Diamantbukser"
    ],
    "golden_leggings": [
        "Gullbukser"
    ],
    "iron_leggings": [
        "Jernbukser"
    ],
    "nautilus_shell": [
        "Perlebåtskall"
    ],
    "heart_of_the_sea": [
        "Havets hjerte"
    ],
    "magma_cream": [
        "Magmakrem"
    ],
    "map": [
        "Kart"
    ],
    "melon": [
        "Melon"
    ],
    "milk": [
        "Melk"
    ],
    "minecart": [
        "Gruvevogn"
    ],
    "chest_minecart": [
        "Gruvevogn med kiste"
    ],
    "command_block_minecart": [
        "Gruvevogn med kommandoblokk"
    ],
    "minecartFurnace": [
        "Gruvevogn med smelteovn"
    ],
    "hopper_minecart": [
        "Gruvevogn med trakt"
    ],
    "tnt_minecart": [
        "Gruvevogn med TNT"
    ],
    "trident": [
        "Trefork"
    ],
    "mushroom_stew": [
        "Soppstuing"
    ],
    "muttoncooked": [
        "Stekt fårekjøtt"
    ],
    "muttonraw": [
        "Rått fårekjøtt"
    ],
    "name_tag": [
        "Navnemerke"
    ],
    "netherbrick": [
        "Underverdenmurstein"
    ],
    "quartz": [
        "Underkvarts"
    ],
    "nether_wart": [
        "Underverdenvorte"
    ],
    "netherStar": [
        "Underverdenstjerne"
    ],
    "painting": [
        "Maleri"
    ],
    "paper": [
        "Papir"
    ],
    "diamond_pickaxe": [
        "Diamanthakke"
    ],
    "golden_pickaxe": [
        "Gullhakke"
    ],
    "iron_pickaxe": [
        "Jernhakke"
    ],
    "stone_pickaxe": [
        "Steinhakke"
    ],
    "wooden_pickaxe": [
        "Trehakke"
    ],
    "porkchop_cooked": [
        "Stekt kotelett"
    ],
    "porkchop": [
        "Rå kotelett"
    ],
    "portfolio": [
        "Portefølje"
    ],
    "potato": [
        "Potet"
    ],
    "baked_potato": [
        "Bakt potet"
    ],
    "poisonous_potato": [
        "Giftig potet"
    ],
    "potion": [
        "Eliksir"
    ],
    "prismarine_crystals": [
        "Prismarinekrystaller"
    ],
    "prismarine_shard": [
        "Prismarineskår"
    ],
    "pumpkin_pie": [
        "Gresskarpai"
    ],
    "cooked_rabbit": [
        "Stekt kaninkjøtt"
    ],
    "rabbit_foot": [
        "Harelabb"
    ],
    "rabbit_hide": [
        "Kaninskinn"
    ],
    "rabbit": [
        "Rått kaninkjøtt"
    ],
    "rabbit_stew": [
        "Kaninstuing"
    ],
    "record": [
        "Musikkplate"
    ],
    "redstone": [
        "Rødstein"
    ],
    "reeds": [
        "Sukkerrør"
    ],
    "kelp": [
        "Tare"
    ],
    "dried_kelp": [
        "Tørket tare"
    ],
    "rotten_flesh": [
        "Råttent kjøtt"
    ],
    "ruby": [
        "Rubin"
    ],
    "saddle": [
        "Sal"
    ],
    "wheat_seeds": [
        "Frø"
    ],
    "beetroot_seeds": [
        "Rødbetfrø"
    ],
    "melon_seeds": [
        "Melonfrø"
    ],
    "pumpkin_seeds": [
        "Gresskarfrø"
    ],
    "shears": [
        "Sauesaks"
    ],
    "diamond_shovel": [
        "Diamantspade"
    ],
    "golden_shovel": [
        "Gullspade"
    ],
    "iron_shovel": [
        "Jernspade"
    ],
    "stone_shovel": [
        "Steinspade"
    ],
    "wooden_shovel": [
        "Trespade"
    ],
    "sign": [
        "Skilt av eiketre"
    ],
    "spruce_sign": [
        "Skilt av grantre"
    ],
    "birch_sign": [
        "Skilt av bjørketre"
    ],
    "jungle_sign": [
        "Skilt av jungeltre"
    ],
    "acacia_sign": [
        "Skilt av akasietre"
    ],
    "darkoak_sign": [
        "Skilt av mørkt eiketre"
    ],
    "crimson_sign": [
        "Høyrødt skilt"
    ],
    "warped_sign": [
        "Fordreid skilt"
    ],
    "skull": [
        "Hodeskalle",
        "Hodeskalle",
        "Wither-hodeskalle",
        "Zombiehode",
        "Hode",
        "Smygerhode",
        "Dragehode"
    ],
    "slime_ball": [
        "Slimball"
    ],
    "snowball": [
        "Snøball"
    ],
    "speckled_melon": [
        "Glitrende melon"
    ],
    "spider_eye": [
        "Edderkoppøye"
    ],
    "stick": [
        "Pinne"
    ],
    "string": [
        "Hyssing"
    ],
    "sugar": [
        "Sukker"
    ],
    "gunpowder": [
        "Krutt"
    ],
    "diamond_sword": [
        "Diamantsverd"
    ],
    "golden_sword": [
        "Gullsverd"
    ],
    "iron_sword": [
        "Jernsverd"
    ],
    "stone_sword": [
        "Steinsverd"
    ],
    "wooden_sword": [
        "Tresverd"
    ],
    "wheat": [
        "Hvete"
    ],
    "writable_book": [
        "Bok og fjærpenn"
    ],
    "written_book": [
        "Ferdigskrevet bok"
    ],
    "glowstone_dust": [
        "Glødesteinstøv"
    ],
    "shield": [
        "Skjold"
    ],
    "shulker_shell": [
        "Shulkerskall"
    ],
    "totem": [
        "Udødelighetstotem"
    ],
    "turtle_helmet": [
        "Skilpaddeskall"
    ],
    "turtle_shell_piece": [
        "Plate"
    ],
    "phantom_membrane": [
        "Fantommembran"
    ],
    "sweet_berries": [
        "Søte bær"
    ],
    "suspicious_stew": [
        "Suspekt stuing"
    ],
    "banner_pattern": [
        "Bannermønster"
    ],
    "acaciaFence": [
        "Akasiegjerde"
    ],
    "acacia_fence_gate": [
        "Akasiegrind"
    ],
    "activator_rail": [
        "Aktivatorskinne"
    ],
    "allow": [
        "Tillat"
    ],
    "deny": [
        "Avslå"
    ],
    "border_block": [
        "Grense"
    ],
    "anvil": [
        "Ambolt",
        "Ambolt",
        null,
        null,
        null,
        "Litt skadet ambolt",
        null,
        null,
        null,
        "Veldig skadet ambolt"
    ],
    "barrier": [
        "Barriere"
    ],
    "beacon": [
        "Lyssignal"
    ],
    "beehive": [
        "Bikube"
    ],
    "bee_nest": [
        "Biebol"
    ],
    "target": [
        "Blink"
    ],
    "bedrock": [
        "Grunnfjell"
    ],
    "conduit": [
        "Vannkraftblokk"
    ],
    "invisibleBedrock": [
        "Usynlig grunnfjell"
    ],
    "birchFence": [
        "Bjørkegjerde"
    ],
    "birch_fence_gate": [
        "Bjørkegrind"
    ],
    "blast_furnace": [
        "Masovn"
    ],
    "bone_block": [
        "Beinblokk"
    ],
    "coal_block": [
        "Kullblokk"
    ],
    "diamond_block": [
        "Diamantblokk"
    ],
    "emerald_block": [
        "Smaragdblokk"
    ],
    "gold_block": [
        "Gullblokk"
    ],
    "iron_block": [
        "Jernblokk"
    ],
    "lapis_block": [
        "Lasursteinblokk"
    ],
    "redstone_block": [
        "Rødsteinsblokk"
    ],
    "bookshelf": [
        "Bokhylle"
    ],
    "brick_block": [
        "Murblokk"
    ],
    "brown_mushroom": [
        "Brun sopp"
    ],
    "wooden_button": [
        "Eikeknapp"
    ],
    "acacia_button": [
        "Akasieknapp"
    ],
    "birch_button": [
        "Bjørkeknapp"
    ],
    "dark_oak_button": [
        "Knapp av mørk eik"
    ],
    "jungle_button": [
        "Jungeltreknapp"
    ],
    "spruce_button": [
        "Granknapp"
    ],
    "stone_button": [
        "Steinknapp"
    ],
    "cactus": [
        "Kaktus"
    ],
    "dried_kelp_block": [
        "Tørket tareblokk"
    ],
    "carved_pumpkin": [
        "Utskåret gresskar"
    ],
    "chest": [
        "Kiste"
    ],
    "ender_chest": [
        "Enderkiste"
    ],
    "jigsaw": [
        "Puslespillblokk"
    ],
    "honey_block": [
        "Honningblokk"
    ],
    "honeycomb_block": [
        "Bikakeblokk"
    ],
    "lodestone": [
        "Magnetstein"
    ],
    "nether_sprouts": [
        "Underverdenspirer"
    ],
    "crimson_stem": [
        "Høyrød stilk"
    ],
    "warped_stem": [
        "Fordreid stilk"
    ],
    "stripped_crimson_stem": [
        "Ribbet høyrød stilk"
    ],
    "stripped_warped_stem": [
        "Ribbet forvridd stilk"
    ],
    "crimson_hyphae": [
        "Høyrøde hyfer"
    ],
    "warped_hyphae": [
        "Fordreide hyfer"
    ],
    "stripped_crimson_hyphae": [
        "Ribbede høyrøde hyfer"
    ],
    "stripped_warped_hyphae": [
        "Ribbede fordreide hyfer"
    ],
    "crimson_planks": [
        "Høyrøde planker"
    ],
    "warped_planks": [
        "Fordreide planker"
    ],
    "crimson_trapdoor": [
        "Høyrød luke"
    ],
    "warped_trapdoor": [
        "Fordreid luke"
    ],
    "crimson_standing_sign": [
        "Høyrødt skilt"
    ],
    "warped_standing_sign": [
        "Fordreid skilt"
    ],
    "crimson_wall_sign": [
        "Høyrødt skilt"
    ],
    "warped_wall_sign": [
        "Fordreid skilt"
    ],
    "crimson_stairs": [
        "Høyrød trapp"
    ],
    "warped_stairs": [
        "Fordreid trapp"
    ],
    "crimson_fence": [
        "Høyrødt gjerde"
    ],
    "warped_fence": [
        "Fordreid gjerde"
    ],
    "crimson_fence_gate": [
        "Høyrød grind"
    ],
    "warped_fence_gate": [
        "Fordreid grind"
    ],
    "crimson_button": [
        "Høyrød knapp"
    ],
    "warped_button": [
        "Fordreid knapp"
    ],
    "crimson_pressure_plate": [
        "Høyrød trykkplate"
    ],
    "warped_pressure_plate": [
        "Fordreid trykkplate"
    ],
    "crimson_slab": [
        "Høyrød helle"
    ],
    "warped_slab": [
        "Fordreid helle"
    ],
    "crimson_double_slab": [
        "Høyrød helle"
    ],
    "warped_double_slab": [
        "Fordreid helle"
    ],
    "shroomlight": [
        "Sopplys"
    ],
    "crimson_nylium": [
        "Høyrød nylium"
    ],
    "warped_nylium": [
        "Fordreid nylium"
    ],
    "basalt": [
        "Basalt"
    ],
    "polished_basalt": [
        "Polert basalt"
    ],
    "blackstone": [
        "Svartstein"
    ],
    "polished_blackstone_bricks": [
        "Mursteiner av polert svartstein"
    ],
    "cracked_polished_blackstone_bricks": [
        "Sprukne mursteiner av polert svartstein"
    ],
    "polished_blackstone_brick_stairs": [
        "Mursteinstrapp av polert svartstein"
    ],
    "blackstone_stairs": [
        "Svartsteinstrapp"
    ],
    "blackstone_wall": [
        "Svartsteinsmur"
    ],
    "polished_blackstone_brick_wall": [
        "Murvegg av polert svartstein"
    ],
    "chiseled_polished_blackstone": [
        "Meislet polert svartstein"
    ],
    "gilded_blackstone": [
        "Forgylt svartstein"
    ],
    "blackstone_slab": [
        "Svartsteinshelle"
    ],
    "polished_blackstone_brick_slab": [
        "Mursteinshelle av polert svartstein"
    ],
    "chain": [
        "Brynje"
    ],
    "soul_soil": [
        "Sjelejord"
    ],
    "soul_fire": [
        "Sjeleild"
    ],
    "polished_blackstone": [
        "Polert svartstein"
    ],
    "polished_blackstone_stairs": [
        "Trapp av polert svartstein"
    ],
    "polished_blackstone_slab": [
        "Helle av polert svartstein"
    ],
    "polished_blackstone_pressure_plate": [
        "Trykkplate av polert svartstein"
    ],
    "polished_blackstone_button": [
        "Knapp av polert svartstein"
    ],
    "polished_blackstone_wall": [
        "Mur av polert svartstein"
    ],
    "soul_campfire": [
        "Sjelleirbål"
    ],
    "chiseled_nether_bricks": [
        "Meislede underverdenmursteiner"
    ],
    "cracked_nether_bricks": [
        "Sprukne underverdenmursteiner"
    ],
    "quartz_bricks": [
        "Kvartsmursteiner"
    ],
    "trapped_chest": [
        "Fellekiste"
    ],
    "shulkerBoxWhite": [
        "Hvit shulkerboks"
    ],
    "shulkerBoxOrange": [
        "Oransje shulkerboks"
    ],
    "shulkerBoxMagenta": [
        "Magentarød shulkerboks"
    ],
    "shulkerBoxLightBlue": [
        "Lyseblå shulkerboks"
    ],
    "shulkerBoxYellow": [
        "Gul shulkerboks"
    ],
    "shulkerBoxLime": [
        "Limegrønn shulkerboks"
    ],
    "shulkerBoxPink": [
        "Rosa shulkerboks"
    ],
    "shulkerBoxGray": [
        "Grå shulkerboks"
    ],
    "shulkerBoxSilver": [
        "Lysegrå shulkerboks"
    ],
    "shulkerBoxCyan": [
        "Cyanfarget shulkerboks"
    ],
    "shulkerBoxPurple": [
        "Lilla shulkerboks"
    ],
    "shulkerBoxBlue": [
        "Blå shulkerboks"
    ],
    "shulkerBoxBrown": [
        "Brun shulkerboks"
    ],
    "shulkerBoxGreen": [
        "Grønn shulkerboks"
    ],
    "shulkerBoxRed": [
        "Rød shulkerboks"
    ],
    "shulkerBoxBlack": [
        "Svart shulkerboks"
    ],
    "shulkerBox": [
        "Shulkerboks"
    ],
    "chorus_flower": [
        "Korblomst"
    ],
    "chorus_plant": [
        "Korplante"
    ],
    "stained_glass": [
        "Hvitfarget glass",
        "Hvitfarget glass",
        "Oransjefarget glass",
        "Magentafarget glass",
        "Lyseblåfarget glass",
        "Gulfarget glass",
        "Limegrønnfarget glass",
        "Rosafarget glass",
        "Gråfarget glass",
        "Lysegråfarget glass",
        "Cyanfarget glass",
        "Lillafarget glass",
        "Blåfarget glass",
        "Brunfarget glass",
        "Grønnfarget glass",
        "Rødfarget glass",
        "Svartfarget glass"
    ],
    "stained_glass_pane": [
        "Hvitfarget glassrute",
        "Hvitfarget glassrute",
        "Oransjefarget glassrute",
        "Magentafarget glassrute",
        "Lyseblåfarget glassrute",
        "Gulfarget glassrute",
        "Limegrønnfarget glassrute",
        "Rosafarget glassrute",
        "Gråfarget glassrute",
        "Lysegråfarget glassrute",
        "Cyanfarget glassrute",
        "Lillafarget glassrute",
        "Blåfarget glassrute",
        "Brunfarget glassrute",
        "Grønnfarget glassrute",
        "Rødfarget glassrute",
        "Svartfarget glassrute"
    ],
    "clay": [
        "Leirblokk"
    ],
    "hardened_clay": [
        "Terrakotta"
    ],
    "stained_hardened_clay": [
        "Terrakotta",
        "Hvit terrakotta",
        "Oransje terrakotta",
        "Magentarød terrakotta",
        "Lyseblå terrakotta",
        "Gul terrakotta",
        "Limegrønn terrakotta",
        "Rosa terrakotta",
        "Grå terrakotta",
        "Lysegrå terrakotta",
        "Cyanfarget terrakotta",
        "Lilla terrakotta",
        "Blå terrakotta",
        "Brun terrakotta",
        "Grønn terrakotta",
        "Rød terrakotta",
        "Svart terrakotta"
    ],
    "structure_block": [
        "Byggverksblokk"
    ],
    "structure_void": [
        "Tomrom"
    ],
    "wool": [
        "Ull",
        "Hvit ull",
        "Oransje ull",
        "Magentarød ull",
        "Lyseblå ull",
        "Gul ull",
        "Limegrønn ull",
        "Rosa ull",
        "Grå ull",
        "Lysegrå ull",
        "Cyanfarget ull",
        "Lilla ull",
        "Blå ull",
        "Brun ull",
        "Grønn ull",
        "Rød ull",
        "Svart ull"
    ],
    "cobblestone_wall": [
        "Brosteinsmur",
        "Brosteinsmur",
        "Mosegrodd brosteinsmur",
        "Granittmur",
        "Diorittmur",
        "Andesittmur",
        "Sandsteinsmur",
        "Teglsteinsmur",
        "Steinmur",
        "Mur av mosegrodd stein",
        "Mur av sluttstein",
        "Mur av underverdenmurstein",
        "Prismarinemur",
        "Mur av rød sandstein",
        "Mur av rød underverdenmurstein"
    ],
    "cocoa": [
        "Kakao"
    ],
    "command_block": [
        "Kommandoblokk"
    ],
    "composter": [
        "Komposteringsblokk"
    ],
    "light_block": [
        "Lys blokk"
    ],
    "repeating_command_block": [
        "Gjentar kommandoblokk"
    ],
    "chain_command_block": [
        "Kjede kommandoblokk"
    ],
    "darkOakFence": [
        "Gjerde av mørk eik"
    ],
    "dark_oak_fence_gate": [
        "Grind av mørk eik"
    ],
    "daylight_detector": [
        "Dagslyssensor"
    ],
    "deadbush": [
        "Død busk"
    ],
    "detector_rail": [
        "Detektorskinne"
    ],
    "dirt": [
        "Jord",
        "Jord",
        "Grov jord"
    ],
    "podzol": [
        "Podsol"
    ],
    "purpur_block": [
        "Purpurblokk",
        "Purpurblokk",
        "Meislet purpur",
        "Purpursøyle"
    ],
    "dispenser": [
        "Dispenser"
    ],
    "doorWood": [
        "Tredør"
    ],
    "double_plant": [
        "Plante",
        "Solsikke",
        "Syrin",
        "Ekstra høyt gress",
        "Stor bregne",
        "Rosebusk",
        "Peon"
    ],
    "dragon_egg": [
        "Drageegg"
    ],
    "dropper": [
        "Dråpeteller"
    ],
    "enchanting_table": [
        "Fortryllelsesbord"
    ],
    "enderChest": [
        "Enderkiste"
    ],
    "end_portal_frame": [
        "Sluttportal"
    ],
    "farmland": [
        "Dyrkbar jord"
    ],
    "fletching_table": [
        "Buemakerbord"
    ],
    "fence": [
        "Eikegjerde"
    ],
    "fence_gate": [
        "Eikegrind"
    ],
    "iron_bars": [
        "Jernstenger"
    ],
    "fire": [
        "Ild"
    ],
    "yellow_flower": [
        "Blomst",
        "Løvetann"
    ],
    "red_flower": [
        "Blomst",
        "Valmue",
        "Blå orkide",
        "Prydløk",
        "Blåmaure",
        "Rød tulipan",
        "Oransje tulipan",
        "Hvit tulipan",
        "Rosa tulipan",
        "Prestekrage",
        "Kornblomst",
        "Liljekonvall"
    ],
    "wither_rose": [
        "Wither-rose"
    ],
    "furnace": [
        "Smelteovn"
    ],
    "glass": [
        "Glass"
    ],
    "golden_rail": [
        "Kraftskinne"
    ],
    "grass": [
        "Gressblokk"
    ],
    "grass_path": [
        "Gressvei"
    ],
    "gravel": [
        "Grus"
    ],
    "hay_block": [
        "Høyballe"
    ],
    "netherrack": [
        "Underverdenstein"
    ],
    "soul_sand": [
        "Sjelesand"
    ],
    "hopper": [
        "Trakt"
    ],
    "ice": [
        "Is"
    ],
    "packed_ice": [
        "Sammenpresset is"
    ],
    "blue_ice": [
        "Blå is"
    ],
    "iron_trapdoor": [
        "Jernluke"
    ],
    "jukebox": [
        "Platespiller"
    ],
    "jungleFence": [
        "Jungeltregjerde"
    ],
    "jungle_fence_gate": [
        "Jungeltregrind"
    ],
    "ladder": [
        "Stige"
    ],
    "flowing_lava": [
        "Lava"
    ],
    "leaves2": [
        "Akasieløv",
        "Akasieløv",
        "Løv fra mørk eik"
    ],
    "lever": [
        "Spak"
    ],
    "glowstone": [
        "Glødestein"
    ],
    "lit_pumpkin": [
        "Gresskarlykt"
    ],
    "lockedchest": [
        "Låst kiste"
    ],
    "log2": [
        "Akasiestokk",
        "Akasiestokk",
        "Mørk eik-stokk"
    ],
    "log": [
        "Stokk",
        "Eikestokk",
        "Granstokk",
        "Bjørkestokk",
        "Jungeltrestokk"
    ],
    "magma": [
        "Magmablokk"
    ],
    "melon_block": [
        "Melon"
    ],
    "mob_spawner": [
        "Monstergenerator"
    ],
    "monster_egg": [
        "Infisert stein",
        "Infisert stein",
        "Infisert brostein",
        "Infisert steinblokk",
        "Infisert mosegrodd steinblokk",
        "Infisert sprukket steinblokk",
        "Infisert meislet steinblokk"
    ],
    "mushroom": [
        "Sopp"
    ],
    "noteblock": [
        "Noteblokk"
    ],
    "mycelium": [
        "Mycelium"
    ],
    "nether_brick": [
        "Underverdenmurblokk"
    ],
    "red_nether_brick": [
        "Rød underverdenmurstein"
    ],
    "nether_brick_fence": [
        "Gjerde av underverdenmurstein"
    ],
    "quartz_ore": [
        "Underkvartsmalm"
    ],
    "netherreactor": [
        "Underverdenreaktorkjerne"
    ],
    "nether_wart_block": [
        "Underverdenvorteblokk"
    ],
    "warped_wart_block": [
        "Fordreid vorteblokk"
    ],
    "unlit_redstone_torch": [
        "Rødsteinsfakkel"
    ],
    "redstone_torch": [
        "Rødsteinsfakkel"
    ],
    "soul_torch": [
        "Sjelfakkel"
    ],
    "obsidian": [
        "Obsidian"
    ],
    "coal_ore": [
        "Kullmalm"
    ],
    "diamond_ore": [
        "Diamantmalm"
    ],
    "emerald_ore": [
        "Smaragdmalm"
    ],
    "gold_ore": [
        "Gullmalm"
    ],
    "iron_ore": [
        "Jernmalm"
    ],
    "lapis_ore": [
        "Lasursteinmalm"
    ],
    "redstone_ore": [
        "Rødsteinsmalm"
    ],
    "oreRuby": [
        "Rubinmalm"
    ],
    "observer": [
        "Observatør"
    ],
    "piston": [
        "Stempel"
    ],
    "sticky_piston": [
        "Klistrestempel"
    ],
    "portal": [
        "Portal"
    ],
    "potatoes": [
        "Poteter"
    ],
    "stone_pressure_plate": [
        "Trykkplate av stein"
    ],
    "wooden_pressure_plate": [
        "Eiketrykkplate"
    ],
    "acacia_pressure_plate": [
        "Akasietrykkplate"
    ],
    "birch_pressure_plate": [
        "Bjørketrykkplate"
    ],
    "dark_oak_pressure_plate": [
        "Trykkplate av mørk eik"
    ],
    "jungle_pressure_plate": [
        "Jungeltretrykkplate"
    ],
    "spruce_pressure_plate": [
        "Grantrykkplate"
    ],
    "prismarine": [
        "Prismarine",
        "Prismarine",
        "Prismarinemursteiner",
        "Mørk prismarine"
    ],
    "pumpkin": [
        "Gresskar"
    ],
    "pumpkin_stem": [
        "Gresskarstilk"
    ],
    "quartz_block": [
        "Kvartsblokk",
        "Kvartsblokk",
        "Meislet kvartsblokk",
        "Kvartssøyleblokk",
        "Glatt kvartsblokk"
    ],
    "rail": [
        "Skinne"
    ],
    "red_mushroom": [
        "Rød sopp"
    ],
    "crimson_fungus": [
        "Høyrød sopp"
    ],
    "warped_fungus": [
        "Fordreid sopp"
    ],
    "red_mushroom_block": [
        "Rød soppblokk"
    ],
    "red_sandstone": [
        "Rød sandstein",
        "Rød sandstein",
        "Meislet rød sandstein",
        "Hugget rød sandstein",
        "Glatt rød sandstein"
    ],
    "redstone_wire": [
        "Rødsteinstøv"
    ],
    "redstone_lamp": [
        "Rødsteinslampe"
    ],
    "sand": [
        "Sand",
        "Sand",
        "Rød sand"
    ],
    "sandstone": [
        "Sandstein",
        "Sandstein",
        "Meislet sandstein",
        "Hugget sandstein",
        "Glatt sandstein"
    ],
    "sapling": [
        "Ungeik",
        "Ungeik",
        "Unggran",
        "Ungbjørk",
        "Ungt jungeltre",
        "Ungt akasietre",
        "Ung mørk eik"
    ],
    "seaLantern": [
        "Sjølykt"
    ],
    "standing_sign": [
        "Skilt"
    ],
    "spruce_standing_sign": [
        "Skilt av grantre"
    ],
    "birch_standing_sign": [
        "Skilt av bjørketre"
    ],
    "jungle_standing_sign": [
        "Skilt av jungeltre"
    ],
    "acacia_standing_sign": [
        "Skilt av akasietre"
    ],
    "darkoak_standing_sign": [
        "Skilt av mørkt eiketre"
    ],
    "slime": [
        "Slimblokk"
    ],
    "snow": [
        "Snø"
    ],
    "sponge": [
        "Svamp",
        "Svamp",
        "Våt svamp"
    ],
    "spruceFence": [
        "Grangjerde"
    ],
    "spruce_fence_gate": [
        "Grangrind"
    ],
    "brick_stairs": [
        "Mursteinstrapp"
    ],
    "nether_brick_stairs": [
        "Trapp av underverdenmurstein"
    ],
    "quartz_stairs": [
        "Kvartstrapp"
    ],
    "smooth_quartz_stairs": [
        "Trapp av glatt kvarts"
    ],
    "red_sandstone_stairs": [
        "Trapp av rød sandstein"
    ],
    "sandstone_stairs": [
        "Sandsteinstrapp"
    ],
    "stone_stairs": [
        "Brosteinstrapp"
    ],
    "normal_stone_stairs": [
        "Steintrapp"
    ],
    "stone_brick_stairs": [
        "Steinblokktrapp"
    ],
    "oak_stairs": [
        "Eiketrapp"
    ],
    "acacia_stairs": [
        "Akasietrapp"
    ],
    "birch_stairs": [
        "Bjørketrapp"
    ],
    "dark_oak_stairs": [
        "Trapp av mørk eik"
    ],
    "jungle_stairs": [
        "Jungeltretrapp"
    ],
    "spruce_stairs": [
        "Grantrapp"
    ],
    "purpur_stairs": [
        "Purpurtrapp"
    ],
    "prismarine_stairs": [
        "Prismarinetrapp"
    ],
    "dark_prismarine_stairs": [
        "Mørk prismarinetrapp"
    ],
    "prismarine_bricks_stairs": [
        "Trapp av prismarinemurstein"
    ],
    "granite_stairs": [
        "Granittrapp"
    ],
    "diorite_stairs": [
        "Diorittrapp"
    ],
    "andesite_stairs": [
        "Andesittrapp"
    ],
    "polished_granite_stairs": [
        "Trapp av polert granitt"
    ],
    "polished_diorite_stairs": [
        "Trapp av polert dioritt"
    ],
    "polished_andesite_stairs": [
        "Trapp av polert andesitt"
    ],
    "mossy_stone_brick_stairs": [
        "Trapp av mosegrodd stein"
    ],
    "smooth_red_sandstone_stairs": [
        "Trapp av glatt rød sandstein"
    ],
    "smooth_sandstone_stairs": [
        "Trapp av glatt sandstein"
    ],
    "end_brick_stairs": [
        "Trapp av sluttstein"
    ],
    "mossy_cobblestone_stairs": [
        "Trapp av mosegrodd brostein"
    ],
    "red_nether_brick_stairs": [
        "Trapp av rød underverdenmurstein"
    ],
    "smooth_stone": [
        "Glatt stein"
    ],
    "standing_banner": [
        "Banner",
        "Svart banner",
        "Rødt banner",
        "Grønt banner",
        "Brunt banner",
        "Blått banner",
        "Lilla banner",
        "Cyanfarget banner",
        "Lysegrått banner",
        "Grått banner",
        "Rosa banner",
        "Limegrønt banner",
        "Gult banner",
        "Lyseblått banner",
        "Magentarødt banner",
        "Oransje banner",
        "Banner"
    ],
    "stone": [
        "Stein",
        "Stein",
        "Granitt",
        "Polert granitt",
        "Dioritt",
        "Polert dioritt",
        "Andesitt",
        "Polert andesitt"
    ],
    "cobblestone": [
        "Brostein"
    ],
    "stonebrick": [
        "Steinblokker",
        "Steinblokker",
        "Mosegrodde steinblokker",
        "Meislede steinblokker"
    ],
    "stonecutter": [
        "Steinkutter"
    ],
    "stonecutter_block": [
        "Steinkutter"
    ],
    "mossy_cobblestone": [
        "Mosegrodd brostein"
    ],
    "double_stone_slab": [
        "Steinhelle",
        "Steinhelle",
        "Sandsteinshelle",
        "Trehelle",
        "Brosteinshelle",
        "Murhelle",
        "Steinblokkhelle",
        "Kvartshelle",
        "Helle av underverdenmurstein"
    ],
    "stone_slab": [
        "Steinhelle",
        "Helle av glatt stein",
        "Sandsteinshelle",
        "Trehelle",
        "Brosteinshelle",
        "Murhelle",
        "Steinblokkhelle",
        "Kvartshelle",
        "Helle av underverdenmurstein"
    ],
    "double_stone_slab2": [
        "Helle av rød sandstein",
        "Helle av rød sandstein"
    ],
    "stone_slab2": [
        "Helle av rød sandstein",
        "Helle av rød sandstein",
        "Purpurhelle",
        "Prismarinehelle",
        "Prismarinemurhelle",
        "Mørk prismarinehelle",
        "Helle av mosegrodd brostein",
        "Helle av glatt sandstein",
        "Helle av rød underverdenmurstein"
    ],
    "stone_slab3": [
        "Helle av sluttstein",
        "Helle av sluttstein",
        "Helle av glatt rød sandstein",
        "Helle av polert andesitt",
        "Andesitthelle",
        "Dioritthelle",
        "Helle av polert dioritt",
        "Granitthelle",
        "Helle av polert granitt"
    ],
    "stone_slab4": [
        "Helle av mosegrodd stein",
        "Helle av mosegrodd stein",
        "Helle av glatt kvarts",
        "Steinhelle",
        "Helle av hugget sandstein",
        "Helle av hugget rød sandstein"
    ],
    "coral_block": [
        "Rørkorallblokk",
        "Rørkorallblokk",
        "Hjernekorallblokk",
        "Boblekorallblokk",
        "Ildkorallblokk",
        "Hornkorallblokk",
        "Død rørkorallblokk",
        "Død hjernekorallblokk",
        "Død boblekorallblokk",
        "Død ildkorallblokk",
        "Død hornkorallblokk"
    ],
    "tallgrass": [
        "Gress",
        "Gress",
        "Bregne"
    ],
    "seagrass": [
        "Sjøgress",
        "Sjøgress"
    ],
    "sea_pickle": [
        "Sjøpølse"
    ],
    "turtle_egg": [
        "Havskilpaddeegg"
    ],
    "coral": [
        "Rørkorall",
        "Rørkorall",
        "Hjernekorall",
        "Boblekorall",
        "Ildkorall",
        "Hornkorall",
        "Død rørkorall",
        "Død hjernekorall",
        "Død boblekorall",
        "Død ildkorall",
        "Død hornkorall"
    ],
    "coral_fan": [
        "Rørkorallvifte",
        "Rørkorallvifte",
        "Hjernekorallvifte",
        "Boblekorallvifte",
        "Ildkorallvifte",
        "Hornkorallvifte"
    ],
    "coral_fan_dead": [
        "Død rørkorallvifte",
        "Død rørkorallvifte",
        "Død hjernekorallvifte",
        "Død boblekorallvifte",
        "Død ildkorallvifte",
        "Død hornkorallvifte"
    ],
    "glass_pane": [
        "Glassrute"
    ],
    "tnt": [
        "TNT"
    ],
    "snow_layer": [
        "Toppsnø"
    ],
    "torch": [
        "Fakkel"
    ],
    "trapdoor": [
        "Eikeluke"
    ],
    "acacia_trapdoor": [
        "Akasieluke"
    ],
    "birch_trapdoor": [
        "Bjørkeluke"
    ],
    "dark_oak_trapdoor": [
        "Luke av mørk eik"
    ],
    "jungle_trapdoor": [
        "Jungeltreluke"
    ],
    "spruce_trapdoor": [
        "Granluke"
    ],
    "tripWire": [
        "Snubletråd"
    ],
    "tripwire_hook": [
        "Snubletrådkrok"
    ],
    "vine": [
        "Slyngplanter"
    ],
    "weeping_vines": [
        "Gråtende slyngplante"
    ],
    "twisting_vines": [
        "Flettede slyngplanter"
    ],
    "flowing_water": [
        "Vann"
    ],
    "water": [
        "Vann"
    ],
    "waterlily": [
        "Vannliljeblad"
    ],
    "web": [
        "Spindelvev"
    ],
    "heavy_weighted_pressure_plate": [
        "Vektet trykkplate (tung)"
    ],
    "light_weighted_pressure_plate": [
        "Vektet trykkplate (lett)"
    ],
    "end_stone": [
        "Sluttstein"
    ],
    "end_bricks": [
        "Sluttsteinblokker"
    ],
    "planks": [
        "Treplanker",
        "Eikeplanker",
        "Granplanker",
        "Bjørkeplanker",
        "Jungeltreplanker",
        "Akasieplanker",
        "Planker av mørk eik"
    ],
    "wooden_slab": [
        "Trehelle",
        "Eikehelle",
        "Granhelle",
        "Bjørkehelle",
        "Jungeltrehelle",
        "Akasiehelle",
        "Helle av mørk eik"
    ],
    "carpet": [
        "Teppe",
        "Svart teppe",
        "Rødt teppe",
        "Grønt teppe",
        "Brunt teppe",
        "Blått teppe",
        "Lilla teppe",
        "Cyanfarget teppe",
        "Lysegrått teppe",
        "Grått teppe",
        "Rosa teppe",
        "Limegrønt teppe",
        "Gult teppe",
        "Lyseblått teppe",
        "Magentarødt teppe",
        "Oransje teppe",
        "Hvitt teppe"
    ],
    "crafting_table": [
        "Arbeidsbenk"
    ],
    "white_glazed_terracotta": [
        "Hvit glasert terrakotta",
        "Hvit glasert terrakotta"
    ],
    "orange_glazed_terracotta": [
        "Oransje glasert terrakotta",
        "Oransje glasert terrakotta"
    ],
    "magenta_glazed_terracotta": [
        "Magentarød glasert terrakotta",
        "Magentarød glasert terrakotta"
    ],
    "light_blue_glazed_terracotta": [
        "Lyseblå glasert terrakotta",
        "Lyseblå glasert terrakotta"
    ],
    "yellow_glazed_terracotta": [
        "Gul glasert terrakotta",
        "Gul glasert terrakotta"
    ],
    "lime_glazed_terracotta": [
        "Limegrønn glasert terrakotta",
        "Limegrønn glasert terrakotta"
    ],
    "pink_glazed_terracotta": [
        "Rosa glasert terrakotta",
        "Rosa glasert terrakotta"
    ],
    "gray_glazed_terracotta": [
        "Grå glasert terrakotta",
        "Grå glasert terrakotta"
    ],
    "silver_glazed_terracotta": [
        "Lysegrå glasert terrakotta",
        "Lysegrå glasert terrakotta"
    ],
    "cyan_glazed_terracotta": [
        "Cyanfarget glasert terrakotta",
        "Cyanfarget glasert terrakotta"
    ],
    "purple_glazed_terracotta": [
        "Lilla glasert terrakotta",
        "Lilla glasert terrakotta"
    ],
    "blue_glazed_terracotta": [
        "Blå glasert terrakotta",
        "Blå glasert terrakotta"
    ],
    "brown_glazed_terracotta": [
        "Brun glasert terrakotta",
        "Brun glasert terrakotta"
    ],
    "green_glazed_terracotta": [
        "Grønn glasert terrakotta",
        "Grønn glasert terrakotta"
    ],
    "red_glazed_terracotta": [
        "Rød glasert terrakotta",
        "Rød glasert terrakotta"
    ],
    "black_glazed_terracotta": [
        "Svart glasert terrakotta",
        "Svart glasert terrakotta"
    ],
    "concrete": [
        "Hvit betong",
        "Hvit betong",
        "Oransje betong",
        "Magentarød betong",
        "Lyseblå betong",
        "Gul betong",
        "Limegrønn betong",
        "Rosa betong",
        "Grå betong",
        "Lysegrå betong",
        "Cyanfarget betong",
        "Lilla betong",
        "Blå betong",
        "Brun betong",
        "Grønn betong",
        "Rød betong",
        "Svart betong"
    ],
    "glazedTerracottaWhite": [
        "Hvit glasert terrakotta"
    ],
    "glazedTerracottaOrange": [
        "Oransje glasert terrakotta"
    ],
    "glazedTerracottaMagenta": [
        "Magentarød glasert terrakotta"
    ],
    "glazedTerracottaLightBlue": [
        "Lyseblå glasert terrakotta"
    ],
    "glazedTerracottaYellow": [
        "Gul glasert terrakotta"
    ],
    "glazedTerracottaLime": [
        "Limegrønn glasert terrakotta"
    ],
    "glazedTerracottaPink": [
        "Rosa glasert terrakotta"
    ],
    "glazedTerracottaGray": [
        "Grå glasert terrakotta"
    ],
    "glazedTerracottaSilver": [
        "Lysegrå glasert terrakotta"
    ],
    "glazedTerracottaCyan": [
        "Cyanfarget glasert terrakotta"
    ],
    "glazedTerracottaPurple": [
        "Lilla glasert terrakotta"
    ],
    "glazedTerracottaBlue": [
        "Blå glasert terrakotta"
    ],
    "glazedTerracottaBrown": [
        "Brun glasert terrakotta"
    ],
    "glazedTerracottaGreen": [
        "Grønn glasert terrakotta"
    ],
    "glazedTerracottaRed": [
        "Rød glasert terrakotta"
    ],
    "glazedTerracottaBlack": [
        "Svart glasert terrakotta"
    ],
    "concretePowder": [
        "Hvit sement",
        "Hvit sement",
        "Oransje sement",
        "Magentarød sement",
        "Lyseblå sement",
        "Gul sement",
        "Limegrønn sement",
        "Rosa sement",
        "Grå sement",
        "Lysegrå sement",
        "Cyanfarget sement",
        "Lilla sement",
        "Blå sement",
        "Brun sement",
        "Grønn sement",
        "Rød sement",
        "Svart sement"
    ],
    "stripped_spruce_log": [
        "Høvlet granstokk"
    ],
    "stripped_dark_oak_log": [
        "Høvlet mørk eikestokk"
    ],
    "stripped_birch_log": [
        "Høvlet bjørkestokk"
    ],
    "stripped_jungle_log": [
        "Høvlet jungeltrestokk"
    ],
    "stripped_oak_log": [
        "Høvlet eikestokk"
    ],
    "stripped_acacia_log": [
        "Høvlet akasiestokk"
    ],
    "bamboo": [
        "Bambus"
    ],
    "scaffolding": [
        "Stillas"
    ],
    "grindstone": [
        "Slipestein"
    ],
    "cartography_table": [
        "Kartografibord"
    ],
    "lantern": [
        "Lykt"
    ],
    "soul_lantern": [
        "Sjellykt"
    ],
    "smoker": [
        "Rykeovn"
    ],
    "smithing_table": [
        "Smiebord"
    ],
    "barrel": [
        "Tønne"
    ],
    "campfire": [
        "Leirbål"
    ],
    "loom": [
        "Vev"
    ],
    "lectern": [
        "Talerstol"
    ],
    "sweet_berry_bush": [
        "Søte bær-busk"
    ],
    "wood": [
        "Eiketre",
        "Eiketre",
        "Grantre",
        "Bjørketre",
        "Jungeltre",
        "Akasietre",
        "Tre fra mørk eik",
        null,
        null,
        "Høvlet eiketre",
        "Høvlet grantre",
        "Høvlet bjørketre",
        "Høvlet jungeltre",
        "Høvlet akasietre",
        "Høvlet tre fra mørk eik"
    ],
    "netherite_block": [
        "Blokk fra underverdenen"
    ],
    "ancient_debris": [
        "Eldgammelt rusk"
    ],
    "nether_gold_ore": [
        "Underverdensgullmalm"
    ],
    "respawn_anchor": [
        "Regenereringsanker"
    ],
    "crying_obsidian": [
        "Gråtende Obsidian"
    ]
}
};
freeze(lang_data);
export = lang_data;

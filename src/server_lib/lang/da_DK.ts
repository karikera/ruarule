
import { freeze } from './freeze';
import { LangId } from './langid';
const lang_data = {
id: "da_DK" as LangId,
commands:{
    "ability_description": "Indstiller en spillers evne.",
    "ability_noability": "Evnen '%1$s' findes ikke",
    "ability_granted": "Du har fået tildelt evnen '%1$s'",
    "ability_revoked": "Du har mistet evnen ''%1$s'",
    "ability_success": "Evnen er blevet opdateret",
    "achievement_alreadyHave": "Spilleren %1$s har allerede gennemført %2$s",
    "achievement_description": "Giver eller fjerner en gennemførelse fra en spiller.",
    "achievement_dontHave": "Spilleren %1$s har ikke gennemført %2$s",
    "achievement_give_success_all": "Alle gennemførelser er overført til %1$s",
    "achievement_give_success_one": "%1$s har modtaget statistikken %2$s",
    "achievement_statTooLow": "Spilleren %1$s har ikke statistikken %2$s",
    "achievement_take_success_all": "Alle gennemførelser er taget fra %1$s",
    "achievement_take_success_one": "Statistikken %1$s er taget fra %2$s",
    "achievement_unknownAchievement": "Gennemførelsen eller statistikken '%1$s' er ukendt",
    "agent_attack_success": "Agenten angreb",
    "agent_attack_failed": "Agenten angreb ikke",
    "agent_collect_success": "Agenten samlede op",
    "agent_collect_failed": "Agenten samlede ikke op",
    "agent_createagent_success": "Agenten er oprettet",
    "agent_createagent_failed": "Agenten kunne ikke oprettes",
    "agent_destroy_success": "Agenten ødelagde en blok",
    "agent_destroy_failed": "Agenten ødelagde ikke noget",
    "agent_detect_success": "Agenten registrerede",
    "agent_detect_failed": "Agenten registrerede ikke",
    "agent_detectredstone_success": "Agentens detectredstone lykkedes",
    "agent_detectredstone_failed": "Agentens detectredstone lykkedes ikke",
    "agent_drop_success": "Agentens drop lykkedes",
    "agent_drop_failed": "Agentens drop lykkedes ikke",
    "agent_dropall_success": "Agentens dropall lykkedes",
    "agent_dropall_failed": "Agentens dropall lykkedes ikke",
    "agent_getitemcount_success": "Agentens getitemcount lykkedes",
    "agent_getitemcount_failed": "Agentens getitemcount lykkedes ikke",
    "agent_getitemspace_success": "Agentens getitemspace lykkedes",
    "agent_getitemspace_failed": "Agentens getitemspace lykkedes ikke",
    "agent_getitemdetail_success": "Agentens getitemdetail lykkedes",
    "agent_getitemdetail_failed": "Agentens getitemdetail lykkedes ikke",
    "agent_getposition_success": "Agentens getposition lykkedes",
    "agent_getposition_failed": "Agentens getposition lykkedes ikke",
    "agent_inspect_success": "Agenten undersøgte nærmere",
    "agent_inspect_failed": "Agenten undersøgte ikke nærmere",
    "agent_inspectdata_success": "Agenten undersøgte data",
    "agent_inspectdata_failed": "Agenten undersøgte ikke data",
    "agent_move_success": "Agenten er flyttet",
    "agent_move_failed": "Agenten kunne ikke flyttes",
    "agent_outofrange": "Kommandoen kan ikke udstedes. Agenten er uden for rækkevidde",
    "agent_place_success": "Agenten placerede",
    "agent_place_failed": "Agenten placerede ikke noget",
    "agent_setitem_success": "Agentens set item lykkedes",
    "agent_setitem_failed": "Agentens set item lykkedes ikke",
    "agent_turn_success": "Agenten er vendt",
    "agent_turn_failed": "Agenten kunne ikke vendes",
    "agent_till_success": "Agenten kultiverede",
    "agent_till_failed": "Agenten kultiverede ikke",
    "agent_tpagent_description": "Teleportér din agent.",
    "agent_tpagent_success": "Agenten blev teleporteret",
    "agent_tpagent_failed": "Agenten kunne ikke teleporteres",
    "agent_transfer_success": "Agenten er overført",
    "agent_transfer_failed": "Agenten kunne ikke overføres",
    "always_day": "Dag/nat-cyklus %1$s",
    "always_day_locked": "Dag/nat-cyklus låst",
    "always_day_unlocked": "Dag/nat-cyklus låst op",
    "ban_description": "Føjer spilleren til udelukkelseslisten.",
    "autocomplete_a": "alle spillere",
    "autocomplete_c": "min Agent",
    "autocomplete_e": "alle enheder",
    "autocomplete_p": "nærmeste spiller",
    "autocomplete_r": "tilfældig spiller",
    "autocomplete_s": "dig selv",
    "autocomplete_v": "alle Agenter",
    "ban_failed": "Spilleren %1$s kunne ikke udelukkes",
    "ban_success": "Spilleren %1$s er udelukket",
    "banip_description": "Tilføjer ip-adressen på udelukkelseslisten.",
    "banip_invalid": "Du har angivet en ugyldig IP-adresse eller en spiller, der ikke er online",
    "banip_success": "Ip-adressen %1$s er udelukket",
    "banip_success_players": "Ip-adressen %1$s, der tilhører %2$s, er udelukket",
    "banlist_ips": "Der er %1$d udelukkede ip-adresser i alt:",
    "banlist_players": "Der er %1$d udelukkede spillere i alt:",
    "blockdata_description": "Ændrer datatagget for en blok.",
    "blockdata_placeFailed": "Du kan ikke placere blokke her",
    "blockdata_destroyFailed": "Du kan ikke grave her",
    "blockdata_failed": "Datatagget ændrede sig ikke: %1$s",
    "blockdata_notValid": "Den tilsigtede blok er ikke en dataholderblok",
    "blockdata_outOfWorld": "Blokke uden for verdenen kan ikke ændres",
    "blockdata_success": "Blokdataene er opdateret til: %1$s",
    "blockdata_tagError": "Parsingen af datatags lykkedes ikke: %1$s",
    "bossbar_add_success": "Bossbjælken [%1$s] er oprettet",
    "bossbar_add_failure_invalid": "Ugyldigt bossbjælke-id. ID'er skal være i formen namespace:id eller id (hvor namespace automatisk er minecraft).",
    "bossbar_add_failure_exists": "Bossbjælken med id'et \"%1$s\" findes allerede",
    "bossbar_description": "Opretter og modificerer bossbarer",
    "bossbar_get_max": "Bossbjælken [%1$s] har et maksimum på %2$d",
    "bossbar_get_players": "Bossbjælken [%1$s] har %2$s spillere online: %3$s",
    "bossbar_get_players_none": "Bossbjælken [%1$s] har ingen spillere online",
    "bossbar_get_players_one": "Bossbjælken [%1$s] har 1 spiller online: %2$s",
    "bossbar_get_value": "Bossbjælken [%1$s] har en værdi på %2$d",
    "bossbar_get_visible_true": "Bossbjælken [%1$s] vises",
    "bossbar_get_visible_false": "Bossbjælken [%1$s] er skjult",
    "bossbar_list": "Der er %1$s aktive bossbjælker: %2$s",
    "bossbar_list_none": "Der er ingen aktive bossbjælker",
    "bossbar_list_one": "Der er 1 aktiv bossbjælke: %1$s",
    "bossbar_notFound": "Der er ingen bossbjælker med id'et \"%1$s\"",
    "bossbar_remove": "Bossbjælken [%1$s] er fjernet",
    "change_setting_description": "Ændrer en indstilling på den dedikerede server, mens den kører.",
    "change_setting_success": "%1$s er blevet ændret",
    "chunkinfo_compiled": "Segmentet er kompileret.",
    "chunkinfo_data": "De første 64 figurknudepunkter er: %1$s",
    "chunkinfo_empty": "Segmentet er tomt.",
    "chunkinfo_hasLayers": "Segmentet indeholder lag: %1$s",
    "chunkinfo_hasNoRenderableLayers": "Segmentet indeholder ingen gengivelige lag.",
    "chunkinfo_isEmpty": "Segmentet indeholder tomme lag: %1$s",
    "chunkinfo_location": "Segmentplacering: (%1$d, %2$d, %3$d)",
    "chunkinfo_noChunk": "Segmentpositionen %1$d, %2$d, %3$d indeholder ikke noget segment",
    "chunkinfo_notCompiled": "Segmentet er ikke kompileret.",
    "chunkinfo_notEmpty": "Segmentet er ikke tomt.",
    "chunkinfo_vertices": "%1$s-lagets buffer indeholder %2$d figurknudepunkter",
    "classroommode_description": "Forsøg at åbne og oprette forbindelse til Klassetilstand.",
    "classroommode_success": "Forsøger at åbne Klassetilstand...",
    "clear_description": "Rydder genstande fra spillerens lager.",
    "clear_failure": "Lageret for %1$s kunne ikke ryddes",
    "clear_failure_no_items": "Lageret for %1$s kunne ikke ryddes – der var ingen genstande at fjerne",
    "clear_success": "Lageret for %1$s er ryddet – %2$d genstande blev fjernet",
    "clear_tagError": "Parsingen af datatags lykkedes ikke: %1$s",
    "clear_testing": "%1$s har %2$d genstande, der matcher kriterierne",
    "clearfixedinv_description": "Fjerner alle faste lagerpladser.",
    "clearfixedinv_success": "De faste lagerpladser er ryddet",
    "clone_description": "Kloner blokke fra en region til en anden.",
    "clone_failed": "Ingen blokke er klonet",
    "clone_filtered_error": "Filtreret brug kræver specifikation af en filterblok",
    "clone_noOverlap": "Kilde og destination kan ikke overlappe",
    "clone_outOfWorld": "Der er ikke adgang til blokke uden for verdenen",
    "clone_success": "%1$d blokke er klonet",
    "clone_tooManyBlocks": "Der er for mange blokke i det angivne område (%1$d > %2$d)",
    "closechat_description": "Lukker den lokale spillers chatvindue, hvis det er åbent.",
    "closechat_success": "Chatten er lukket",
    "closechat_failure": "Chatten var ikke åben",
    "closewebsocket_description": "Lukker websocketforbindelsen, hvis der er en.",
    "code_description": "Åbner Code Builder.",
    "code_success": "Code Builder kører.",
    "compare_failed": "Kilden og destinationen er ikke identiske",
    "compare_outOfWorld": "Der er ikke adgang til blokke uden for verdenen",
    "compare_success": "%1$d blokke sammenlignes",
    "compare_tooManyBlocks": "Der er for mange blokke i det angivne område (%1$d > %2$d)",
    "corruptworld_description": "Ødelægger den verden, der er indlæst på serveren.",
    "corruptworld_success": "Verdenen er ødelagt.",
    "daylock_description": "Låser og låser op for dag/nat-cyklus.",
    "debug_description": "Starter eller stopper en fejlfindingssession.",
    "debug_notStarted": "Profileringen kan ikke standses, før den er begyndt!",
    "debug_start": "Fejlfindingsprofileringen er begyndt",
    "debug_stop": "Fejlfindingsprofileringen er standset efter %.2f sekunder (%1$d ticks)",
    "defaultgamemode_description": "Angiver standardspiltypen.",
    "defaultgamemode_success": "Denne verdens standardspiltype er nu %1$s",
    "deop_description": "Tilbagekalder operatorstatus fra en spiller.",
    "deop_failed": "Kunne ikke de-oppes (tilladelsesniveauet er for højt): %s",
    "deop_success": "%s er de-oppet",
    "deop_message": "Du er blevet de-oppet",
    "difficulty_description": "Angiver sværhedsgraden.",
    "difficulty_usage": "/difficulty <ny sværhedsgrad>",
    "difficulty_success": "Sæt sværhedsgraden til %1$s",
    "downfall_success": "Nedbøren er ændret",
    "effect_description": "Tilføj eller fjern statuseffekter.",
    "effect_failure_notActive": "Kunne ikke tage %1$s fra %2$s, fordi effekten ikke er til stede",
    "effect_failure_notActive_all": "Der var ikke muligt at tage effekter fra %1$s, fordi der ikke var nogen at tage",
    "effect_failure_notAMob": "%1$s kan ikke have effekter",
    "effect_notFound": "Der findes ikke nogen væsenseffekt med id'et %s",
    "effect_success": "Gav %1$s * %2$d til %3$s i %4$d sekunder",
    "effect_success_removed": "Tog %1$s fra %2$s",
    "effect_success_removed_all": "Alle effekter er taget fra %1$s",
    "enchant_cantCombine": "%1$s kan ikke kombineres med %2$s",
    "enchant_invalidLevel": "%1$s understøtter ikke niveau %2$d",
    "enchant_cantEnchant": "Den valgte fortryllelse kan ikke benyttes på den aktuelle genstand: %1$s",
    "enchant_description": "Tilføjer en fortryllelse på en spillers valgte genstand.",
    "enchant_noItem": "Målet holder ikke nogen genstand: %1$s",
    "enchant_notFound": "Der findes ikke nogen fortryllelse med id'et %1$d",
    "enchant_success": "Fortryllelsen lykkedes for %1$s",
    "entitydata_description": "Ændrer datatagget for en enhed.",
    "entitydata_failed": "Datatagget ændrede sig ikke: %1$s",
    "entitydata_noPlayers": "%1$s er en spiller og kan ikke ændres",
    "entitydata_success": "Enhedens data er opdateret til: %1$s",
    "entitydata_tagError": "Parsingen af datatags lykkedes ikke: %1$s",
    "execute_allInvocationsFailed": "Ingen aktiveringer lykkedes: '%1$s'",
    "execute_failed": "'%1$s' kunne ikke udføres som %2$s",
    "execute_description": "Udfører en kommando på vegne af en eller flere enheder.",
    "fill_description": "Fylder alle eller dele af en region med en bestemt blok.",
    "fill_failed": "Ingen blokke er udfyldt",
    "fill_outOfWorld": "Blokke kan ikke placeres uden for verdenen",
    "fill_success": "%1$d blokke er udfyldt",
    "fill_tagError": "Parsingen af datatags lykkedes ikke: %1$s",
    "fill_tooManyBlocks": "Der er for mange blokke i det angivne område (%1$d > %2$d)",
    "fill_replace_auxvalue_invalid": "Ugyldig erstatningsdataværdi for blok %1$s",
    "function_description": "Kører kommandoer fra den tilsvarende funktionsfil.",
    "function_functionNameNotFound": "Funktionen %1$s blev ikke fundet.",
    "function_invalidCharacters": "Funktionen \"%s\" er ugyldig. Tegnet \"%s\" kan ikke anvendes i funktionsnavne.",
    "function_noEngineVersionSpecified": "Funktionen %s kunne ikke køres. Du skal angive en min_engine_version i adfærdspakkens manifest.json.",
    "function_success": "%1$d funktionsposter er udført.",
    "gamemode_description": "Indstiller en spillers spiltilstand.",
    "gamemode_success_other": "Sæt spiltypen for %2$s til %1$s",
    "gamemode_success_self": "Sæt din egen spiltype til %1$s",
    "gamemode_fail_invalid": "Spiltypen '%1$s' er ugyldig",
    "gamerule_description": "Angiver eller anmoder om en værdi for en spilregel.",
    "gamerule_type_invalid": "Ugyldig type til spilreglen '%1$s'",
    "gamerule_type_nocheatsenabled": "Spilreglen \"%1$s\" kan kun bruges i verdener, hvor snydekoder er aktiveret.",
    "gamerule_nopermission": "Kun serverejere kan ændre '%1$s'",
    "gamerule_norule": "Spilreglen '%1$s' findes ikke",
    "gamerule_success": "Spilreglen %1$s er blevet opdateret til %2$s",
    "generic_async_initiated": "Kommandoen '%1$s' er startet (asynkront trin %2$d)",
    "generic_boolean_invalid": "'%1$s' er hverken sand eller falsk",
    "generic_chunk_notFound": "Det angivne segment blev ikke fundet",
    "generic_componentError": "Parsingen af komponentlisten lykkedes ikke",
    "generic_dimension_notFound": "Den angivne dimension blev ikke fundet",
    "generic_disabled": "Snydekoder er ikke aktiveret på dette niveau.",
    "generic_disabled_templateLocked": "Indstillingerne er låst. Hvis du vil ændre dem, skal du låse op for skabelonens verdensindstillinger i dine Spilindstillinger.",
    "generic_double_tooBig": "Det indtastede tal (%.2f) er for højt. Det må højst være %.2f",
    "generic_double_tooSmall": "Det indtastede tal (%.2f) er for lavt. Det skal mindst være %.2f",
    "generic_duplicateType": "Dublerede typeargumenter",
    "generic_duplicateSelectorArgument": "Dublerede argumenter for %s-afgrænsning",
    "generic_encryption_badkey": "Den anvendte offentlige nøgle er forkert. Efter PEM-formatering forventes en nøgle med 120 bytes.",
    "generic_encryption_badsalt": "Den anvendte salt er forkert. Før base 64-kodning forventes 16 bytes.",
    "generic_encryption_required": "Krypteret session påkrævet",
    "generic_entity_invalidType": "Enhedstypen '%1$s' er ugyldig",
    "generic_entity_invalidUuid": "Enhedens UUID er angivet i et ugyldigt format",
    "generic_entity_notFound": "Enheden kan ikke findes",
    "generic_exception": "Der opstod en ukendt fejl under forsøget på at udføre kommandoen",
    "generic_invalidAgentType": "Der anvendes et typeargument til Agentafgrænsning",
    "generic_invalidcontext": "Ugyldig kontekst til den givne kommandotype",
    "generic_invalidDevice": "Kommandoen %s, som du angav, understøttes ikke på denne enhed",
    "generic_invalidPlayerType": "Der blev anvendt et typeargument til spillerafgrænsning",
    "generic_invalidType": "Ukendt typeargument",
    "generic_levelError": "Det maksimale niveau skal være større end det minimale niveau",
    "generic_malformed_body": "Kroppen mangler eller er deform",
    "generic_malformed_type": "Ugyldig forespørgselstype",
    "generic_notimplemented": "Ikke implementeret",
    "generic_num_invalid": "'%1$s' er ikke et gyldigt tal",
    "generic_num_tooBig": "Det indtastede tal (%1$) er for højt. Det må højst være %2$d",
    "generic_num_tooSmall": "Det indtastede tal (%1$d) er for lavt. Det skal mindst være %2$d",
    "generic_parameter_invalid": "'%1$s' er ikke en gyldig parameter",
    "generic_permission_selector": "<utilstækkelige tilladelser til afgrænsningsudvidelse>",
    "generic_player_notFound": "Spilleren kan ikke findes",
    "generic_protocol_mismatch": "Den angivne protokolversion matcher ikke Minecrafts protokolversion",
    "generic_radiusError": "Den minimale afgrænsningsradius skal være mindre end den maksimale",
    "generic_radiusNegative": "Radius kan ikke være negativ",
    "generic_rotationError": "Rotationen er uden for rækkevidde",
    "generic_running": "Kommandoen kører allerede",
    "generic_step_failed": "Kommandotrinet lykkedes ikke",
    "generic_syntax": "Syntaksfejl: Uventet \"%2$s\": På \"%1$s>>%2$s<<%3$s\"",
    "generic_noTargetMatch": "Ingen mål matchede afgrænsningen",
    "generic_targetNotPlayer": "Afgrænsningen skal være en spillertype",
    "generic_tooManyNames": "Målet indeholder for mange navneargumenter",
    "generic_tooManyTargets": "Afgrænsningen matcher for mange mål",
    "generic_too_many_requests": "Der er udstedt for mange kommandoer – vent, til en af dem er udført",
    "generic_unknown": "Ukendt kommando: %s. Tjek, om kommandoen findes, og om du har tilladelse til at bruge den.",
    "generic_usage": "Brug: %1$s",
    "generic_usage_noparam": "Brug:",
    "generic_version_mismatch": "Den ønskede version af kommandoen findes ikke",
    "generic_version_missing": "Kommandokald, der ikke kommer fra chat, skal specificere kommandoens version",
    "getchunkdata_description": "Henter pixels til et specifikt segment.",
    "getchunkdata_success": "Segmentdataene er modtaget",
    "getchunks_description": "Henter en liste over indlæste segmenter.",
    "getchunks_success": "Segmentlisten er modtaget",
    "getlocalplayername_description": "Henter det lokale spillernavn.",
    "getspawnpoint_description": "Henter spawningspunktet for de angivne spillere.",
    "gettopsolidblock_description": "Henter positionen på den øverste ikke-luftblok under den specificerede position",
    "gettopsolidblock_notfound": "Ingen solide blokke under den specificerede position",
    "give_block_notFound": "Blokken %1$d findes ikke",
    "give_description": "Giver en genstand til en spiller.",
    "give_item_invalid": "Ugyldig kommandosyntaks: Der findes ingen %s med den dataværdi",
    "give_item_notFound": "Genstanden %1$d findes ikke",
    "give_map_invalidData": "Kortdataene er ugyldige",
    "give_map_featureNotFound": "Udforskningskortet kunne ikke oprettes. Funktionen findes ikke i den aktuelle dimension",
    "give_success": "%3$s fik %1$s * %2$d",
    "give_successRecipient": "Du har fået %1$s * %2$d",
    "give_tagError": "Parsingen af datatags lykkedes ikke: %1$s",
    "help_description": "Hjælper/viser en liste over kommandoer.",
    "help_footer": "Tip: Hvis du trykker på tasten <tab>, når du skriver en kommando, fuldføres kommandoen eller dens argumenter automatisk",
    "help_header": "--- Viser hjælpeside %1$d af %2$d (/help <side>) ---",
    "help_command_aliases": "%s (også %s):",
    "immutableworld_description": "Indstiller verdenens uforanderlige tilstand.",
    "immutableworld_info": "immutableworld = %s",
    "kick_description": "Smider en spiller ud fra serveren.",
    "kick_description_edu": "Fjern en spiller fra spillet.",
    "kick_not_found": "Spilleren %1$s blev ikke fundet",
    "kick_not_yourself": "Du kan ikke fjerne dig selv fra spillet",
    "kick_success": "%1$s er smidt ud af spillet",
    "kick_success_reason": "%1$s er smidt ud af spillet: '%2$s'",
    "kick_success_reasonedu": "%1$s er fjernet fra spillet: '%2$s'",
    "kick_no_host": "Værten kan ikke smides ud af spillet.",
    "kick_no_teacher": "Lærere kan ikke fjernes fra spillet.",
    "kill_successful_edu": "%1$s er fjernet",
    "kill_successful": "%1$s blev slået ihjel",
    "kill_description_edu": "Fjerner enheder (spillere, væsner etc.).",
    "kill_description": "Dræber enheder (spillere, væsner etc.).",
    "list_description": "Oplister spillere på serveren.",
    "locate_description": "Henter koordinaterne på den nærmeste struktur af en given type.",
    "locate_fail_noplayer": "Kommandoen kan kun benyttes af en gyldig spiller",
    "locate_fail_nostructurefound": "Der er ingen gyldige strukturer i dimensionen",
    "locate_success": "Den nærmeste %1$s er på blok %2$s, (y?), %3$s",
    "togglecontentlog_toggle": "Aktiverer/deaktiverer kommandoen Indholdslog",
    "togglecontentlog_enabled": "Indholdslog aktiveret",
    "togglecontentlog_disabled": "Indholdslog deaktiveret",
    "me_description": "Viser en besked om dig selv.",
    "message_display_incoming": "%1$s hvisker til dig: %2$s",
    "message_display_outgoing": "Du hvisker til %1$s: %2$s",
    "message_sameTarget": "Du kan ikke sende en privat besked til dig selv!",
    "mixer_description": "Styring af Mixer-interaktivitet",
    "mixer_error_unknown": "Der opstod en ukendt Mixer-fejl.",
    "mixer_error_notoken": "Du skal være logget på med en Microsoft-konto for at aktivere Mixer-interaktivitet.",
    "mixer_error_notsupported": "Din enhed understøtter ikke Mixer-interaktivitet.",
    "mixer_interactive_error": "Der opstod en fejl i Mixer: %1$s",
    "mixer_scene_failed": "Der findes ikke nogen scene med navnet %1$s. Sørg for, at du har indtastet scenenavnet korrekt.",
    "mixer_scene_success": "Scenen er ændret til: %1$s",
    "mixer_start_success": "Mixer-interaktivitet starter: %1$s",
    "mixer_start_fail_invalidCode": "Vi kunne ikke finde et projekt med ID'et \"%1$s\". Sørg for, at ID'et eller delingskoden er korrekt.",
    "mixer_stop_success": "Mixer-interaktiviteten er stoppet.",
    "mixer_stop_fail": "Der er ikke nogen interaktiv session at stoppe.",
    "mixer_status_notinitialized": "Interaktivitet er ikke påbegyndt.",
    "mixer_status_enabled": "Interaktivitet er aktiveret.",
    "mixer_status_initializing": "Interaktivitet påbegyndes.",
    "mixer_status_pending": "Interaktivitet afventer.",
    "mixer_status_disabled": "Interaktivitet er deaktiveret.",
    "mixer_activatedbutton": "%1$s aktiverede %2$s.",
    "mobevent_description": "Styrer, hvilke væsen-events der er tilladt at køre.",
    "mobevent_eventsEnabledSetToTrue": "Væsen-events er nu aktiveret. Individuelle events, der er indstillet til falsk, kører ikke.",
    "mobevent_eventsEnabledSetToFalse": "Væsen-events er nu deaktiveret. Individuelle events kører ikke.",
    "mobevent_eventsEnabledIsTrue": "Væsen-events er aktiveret. Individuelle events, der er indstillet til falsk, kører ikke.",
    "mobevent_eventsEnabledIsFalse": "Væsen-events er deaktiveret. Individuelle events kører ikke.",
    "mobevent_eventSetToTrue": "Væsen-event %s (id: %s) indstillet til sand.",
    "mobevent_eventSetToTrueButEventsDisabled": "Væsen-event %s (id: %s) indstillet til sand, men væsen-events er deaktiveret.",
    "mobevent_eventSetToFalse": "Væsen-event %s (id: %s) indstillet til falsk.",
    "mobevent_eventIsTrue": "Væsen-event %s (id: %s) er indstillet til sand.",
    "mobevent_eventIsTrueButEventsDisabled": "Væsen-event %s (id: %s) er indstillet til sand, men væsen-events er deaktiveret.",
    "mobevent_eventIsFalse": "Væsen-event %s (id: %s) er indstillet til falsk.",
    "op_description": "Tildeler en spiller operatorstatus.",
    "op_failed": "%s kunne ikke oppes (allerede oppet eller højere)",
    "op_success": "%s er oppet",
    "op_message": "Du er blevet oppet",
    "origin_commandblock": "CommandBlock",
    "origin_external": "Ekstern",
    "origin_devconsole": "DevConsole",
    "origin_script": "Script engine",
    "origin_server": "Server",
    "origin_teacher": "Lærer",
    "ops_description": "Genindlæser og implementerer op-tilladelser.",
    "ops_reloaded": "Ops er genindlæst fra filen.",
    "ops_set_success": "%s er nu operator.",
    "permissions_description": "Genindlæser og anvender tilladelser.",
    "permissions_reloaded": "Tilladelser er genindlæst fra filen.",
    "permissions_set_failed": "Tilladelsesniveauet %s kunne ikke angives for %s.",
    "permissions_set_success": "Tilladelsesniveauet %s er angivet for %s.",
    "permissions_save_failed": "Tilladelsesniveauet %s kunne ikke gemmes for %s.",
    "permissions_save_success": "Tilladelsesniveauet %s er gemt for %s.",
    "spawnParticleEmitter_description": "Opretter en partikeludleder",
    "particle_description": "Opretter partikler.",
    "particle_notFound": "Ukendt effektnavn (%1$s)",
    "particle_success": "Afspiller effekten %1$s %2$d gange",
    "players_list": "Der er %1$d/%2$d spillere online:",
    "players_list_names": "%s",
    "playsound_description": "Afspiller en lyd.",
    "playsound_playerTooFar": "Spilleren %1$s er for langt væk til at kunne høre lyden",
    "playsound_success": "Afspiller lyden '%1$s' for %2$s",
    "position_description": "Viser/skjuler koordinater for spilleren.",
    "publish_failed": "Det var ikke muligt at hoste et lokalt spil",
    "publish_started": "Det lokale spil hostes via port %1$s",
    "querytarget_description": "Henter omdannelses-, navn- og id-oplysninger om den givne enhed eller de givne enheder.",
    "querytarget_success": "Måldata: %1$s",
    "reload_description": "Genindlæser alle funktionsfiler fra alle adfærdspakker.",
    "reload_success": "De eksisterende funktionsfiler er blevet genindlæst. Genstart Minecraft for at genindlæse de NYE funktioner.",
    "replaceitem_description": "Erstatter genstande på lagre.",
    "replaceitem_failed": "%s-pladsen %d kunne ikke erstattes med %d * %s",
    "replaceitem_keepFailed": "Der er allerede en genstand på %s plads %d.",
    "replaceitem_noContainer": "Blokken på %s er ikke en beholder",
    "replaceitem_badSlotNumber": "Plads %d kunne ikke erstattes. Værdien skal være mellem %d og %d.",
    "replaceitem_success": "%s-pladsen %d er erstattet med %d * %s",
    "replaceitem_success_entity": "%s-plads %d af %s er erstattet med %d * %s",
    "replaceitem_tagError": "Parsingen af datatags lykkedes ikke: %1$s",
    "save_description": "Administrer eller se, hvordan spillet gemmer data på disken.",
    "save_disabled": "Automatisk lagring af verdenen er deaktiveret",
    "save_enabled": "Automatisk lagring af verdenen er aktiveret",
    "save_failed": "Det var ikke muligt at gemme: %1$s",
    "save_start": "Gemmer ...",
    "save_success": "Verdenen er gemt",
    "save_all_error": "Der opstod en fejl under forsøget på at sætte niveaulagringen på pause.",
    "save_all_success": "Dataene er gemt, og filerne er klar til kopiering.",
    "save_off_alreadyOff": "Lagring er allerede deaktiveret.",
    "save_on_alreadyOn": "Lagring er allerede aktiveret.",
    "save_on_notDone": "En tidligere lagring er ikke blevet fuldført.",
    "save_on_description": "Aktiverer automatisk serverlagring.",
    "save_on_success": "Ændringer af niveauet bevares.",
    "save_state_description": "Tjekker om en tidligere lagring er gennemført og angiver alle de involverede filer.",
    "say_description": "Sender en besked til andre spillere i chatten.",
    "scoreboard_description": "Registrerer og viser scorer for forskellige mål.",
    "scoreboard_allMatchesFailed": "Ingen match lykkedes",
    "scoreboard_noMultiWildcard": "Der må kun anvendes ét brugerwildcard",
    "scoreboard_objectiveNotFound": "Målet '%1$s' findes ikke",
    "scoreboard_objectiveReadOnly": "Målet '%1$s' er skrivebeskyttet og kan ikke indstilles",
    "scoreboard_objectives_add_alreadyExists": "Målet '%1$s' findes allerede",
    "scoreboard_objectives_add_displayTooLong": "Det viste navn '%1$s' er for langt for et mål. Det må højst indeholde %2$d tegn",
    "scoreboard_objectives_add_success": "Målet '%1$s' er tilføjet",
    "scoreboard_objectives_add_tooLong": "Navnet '%1$s' er for langt for et mål. Det må højst indeholde %2$d tegn",
    "scoreboard_objectives_add_wrongType": "Kriterietypen '%1$s' er ugyldig for et mål",
    "scoreboard_objectives_add_needName": "Et mål mangler et navn.",
    "scoreboard_objectives_description": "Rediger mål på resultattavlen.",
    "scoreboard_objectives_list_count": "Viser %1$d mål på resultattavlen:",
    "scoreboard_objectives_list_empty": "Resultattavlen indeholder ingen mål",
    "scoreboard_objectives_list_entry": "- %1$s: vises som '%2$s' og er af typen '%3$s'",
    "scoreboard_objectives_remove_success": "Målet '%1$s' er fjernet",
    "scoreboard_objectives_setdisplay_invalidSlot": "Visningspladsen '%1$s' findes ikke",
    "scoreboard_objectives_setdisplay_successCleared": "Visningsplads '%1$s' er ryddet for mål",
    "scoreboard_objectives_setdisplay_successSet": "Målet på visningsplads '%1$s' er sat til '%2$s'",
    "scoreboard_players_add_success": "Der er tilføjet %1$d til [%2$s] for %3$s (nu %4$d)",
    "scoreboard_players_add_multiple_success": "Der er tilføjet %1$d til [%2$s] for %3$d spillere",
    "scoreboard_players_nameNotFound": "Angiv et spillernavn.",
    "scoreboard_players_enable_noTrigger": "Målet %1$s er ikke en udløser",
    "scoreboard_players_enable_success": "Udløseren %1$s er aktiveret for %2$s",
    "scoreboard_players_list_count": "Resultattavlen viser %1$d fulgte spillere:",
    "scoreboard_players_list_empty": "Resultattavlen viser ingen fulgte spillere",
    "scoreboard_players_list_player_count": "Viser %1$d fulgte mål for %2$s:",
    "scoreboard_players_list_player_empty": "Spilleren %1$s har ikke registreret nogen score",
    "scoreboard_players_list_player_entry": "- %2$s: %1$d (%3$s)",
    "scoreboard_players_operation_invalidOperation": "Operationen %1$s er ugyldig",
    "scoreboard_players_operation_notFound": "Der er ingen %1$s-score for %2$s",
    "scoreboard_players_operation_success": "[%1$s] er opdateret for %2$d spillere",
    "scoreboard_players_offlinePlayerName": "Spiller offline",
    "scoreboard_players_random_invalidRange": "Min. %1$d er ikke mindre end maks. %2$d",
    "scoreboard_players_remove_success": "Der er fjernet %1$d fra [%2$s] for %3$s (nu %4$d)",
    "scoreboard_players_remove_multiple_success": "Der er fjernet %1$d fra [%2$s] for %3$d spillere",
    "scoreboard_players_reset_success": "Scorerne for spilleren %1$s er nulstillet",
    "scoreboard_players_resetscore_success": "%1$s-scoren for spilleren %2$s er nulstillet",
    "scoreboard_players_set_success": "[%1$s] er sat til %3$d for %2$s",
    "scoreboard_players_set_multiple_success": "[%1$s] er sat til %3$d for %2$d spillere",
    "scoreboard_players_set_tagError": "Datatagget kunne ikke parses; årsag: %1$s",
    "scoreboard_players_set_tagMismatch": "Datatagget matcher ikke for %1$s",
    "scoreboard_players_score_notFound": "Der er ingen %1$s-score for %2$s",
    "scoreboard_players_test_failed": "%1$d-scoren er IKKE inden for intervallet %2$d til %3$d",
    "scoreboard_players_test_success": "%1$d-scoren er inden for intervallet %2$d to %3$d",
    "scoreboard_teamNotFound": "Teamet '%1$s' findes ikke",
    "scoreboard_teams_add_alreadyExists": "Teamet '%1$s' findes allerede",
    "scoreboard_teams_add_displayTooLong": "Det viste navn '%1$s' er for langt for et team. Det må højst indeholde %2$d tegn",
    "scoreboard_teams_add_success": "Teamet '%1$s' er tilføjet",
    "scoreboard_teams_add_tooLong": "Navnet '%1$s' er for langt for et team. Det må højst indeholde %2$d tegn",
    "scoreboard_teams_empty_alreadyEmpty": "Teamet %1$s er allerede tomt. Spillere, der ikke eksisterer, kan ikke fjernes",
    "scoreboard_teams_empty_success": "Alle %1$d spiller(e) er fjernet fra teamet %2$s",
    "scoreboard_teams_join_failure": "%1$d spiller(e) kunne ikke føjes til teamet %2$s: %3$s",
    "scoreboard_teams_join_success": "%1$d spiller(e) er føjet til teamet %2$s: %3$s",
    "scoreboard_teams_leave_failure": "%1$d spiller(e) kunne ikke fjernes fra deres teams: %2$s",
    "scoreboard_teams_leave_noTeam": "Du er ikke en del af et team",
    "scoreboard_teams_leave_success": "%1$d spiller(e) er fjernet fra deres teams: %2$s",
    "scoreboard_teams_list_count": "Resultattavlen viser %1$d teams:",
    "scoreboard_teams_list_empty": "Resultattavlen viser ingen teams",
    "scoreboard_teams_list_entry": "- %1$s: '%2$s' har %3$d spillere",
    "scoreboard_teams_list_player_count": "Viser %1$d spiller(e) på teamet %2$s:",
    "scoreboard_teams_list_player_empty": "Team %1$s har ingen spillere",
    "scoreboard_teams_list_player_entry": "- %2$s: %1$d (%3$s)",
    "scoreboard_teams_option_noValue": "De gyldige værdier for %1$s er: %2$s",
    "scoreboard_teams_option_success": "%1$s for teamet %2$s er sat til %3$s",
    "scoreboard_teams_remove_success": "Teamet %1$s er fjernet",
    "seed_success": "Frø: %1$s",
    "setblock_description": "Ændrer en blok til en anden blok.",
    "setblock_failed": "Blokken blev ikke placeret",
    "setblock_noChange": "Blokken kunne ikke placeres",
    "setblock_notFound": "Der findes ingen blok med id'et/navnet %1$s",
    "setblock_outOfWorld": "En blok kan ikke placeres uden for verdenen",
    "setblock_success": "Blokken er placeret",
    "setblock_tagError": "Parsingen af datatags lykkedes ikke: %1$s",
    "setidletimeout_success": "Der gives nu timeout for inaktivitet efter %1$d minutter.",
    "setfixedinvslots_description": "Angiver antallet af faste lagerpladser til serveren.",
    "setfixedinvslots_success": "Antallet af faste lagerpladser er sat til %1$d",
    "setfixedinvslot_description": "Afsætter en fast plads til en specifik genstand.",
    "setfixedinvslot_success": "Fast lagerplads %1$d benyttes til %2$s",
    "globalpause_description": "Indstiller eller henter pausetilstand for alle spillere i spillet.",
    "globalpause_success": "Pausetilstanden er sat eller hentet",
    "setmaxplayers_description": "Angiver det maksimale antal spillere for spilsessionen.",
    "setmaxplayers_success": "Det maksimale antal spillere er sat til %1$d.",
    "setmaxplayers_success_upperbound": "(Det er det maksimale antal tilladte forbindelser)",
    "setmaxplayers_success_lowerbound": "(Det er antallet af spillere lige nu)",
    "setworldspawn_description": "Indstiller verdenens dannelsespunkt.",
    "setworldspawn_success": "Verdens dannelsespunkt er sat til (%1$d, %2$d, %3$d)",
    "setworldspawn_wrongDimension": "Verden kan ikke dannes i denne dimension",
    "spawnpoint_success_single": "Spawningspunktet for %1$s er sat til (%2$d, %3$d, %4$d)",
    "spawnpoint_description": "Indstiller en spillers spawningspunkt.",
    "spawnpoint_success_multiple_specific": "Spawningspunktet for %1$s er sat til (%2$d, %3$d, %4$d)",
    "spawnpoint_success_multiple_generic": "Spawningspunktet for %1$s er sat",
    "spawnpoint_wrongDimension": "Spawningspunktet kan ikke indstilles i denne dimension",
    "spreadplayers_description": "Teleporterer enheder til tilfældige steder.",
    "spreadplayers_failure_players": "De %1$s spillere kunne ikke spredes omkring %2$s, %3$s (pladsen er for trang til mængden af spillere - begræns din spredning til %4$s)",
    "spreadplayers_failure_teams": "De %1$s teams kunne ikke spredes omkring %2$s, %3$s (pladsen er for trang til mængden af spillere - begræns din spredning til %4$s)",
    "spreadplayers_info_players": "(Den gennemsnitlige afstand mellem spillerne er %1$s blokke efter %2$s gentagelser)",
    "spreadplayers_info_teams": "(Den gennemsnitlige afstand mellem de respektive teams er %1$s blokke efter %2$s gentagelser)",
    "spreadplayers_spreading_players": "Spreder %1$s spillere inden for %2$s blokke omkring %3$s, %4$s (min. %5$s blokke fra hinanden)",
    "spreadplayers_spreading_teams": "Spreder %1$s teams inden for %2$s blokke omkring %3$s, %4$s (min. %5$s blokke fra hinanden)",
    "spreadplayers_success_players": "%1$s spillere er spredt omkring %2$s, %3$s",
    "spreadplayers_success_teams": "%1$s teams er spredt omkring %2$s, %3$s",
    "stats_cleared": "%1$s statistikker er ryddet",
    "stats_failed": "Ugyldige parametre",
    "stats_noCompatibleBlock": "Blokken på %1$d, %2$d, %3$d kan ikke registrere statistik",
    "stats_success": "%1$s statistikker er gemt i %2$s på %3$s",
    "stop_description": "Stopper serveren.",
    "stop_start": "Serveren stoppes",
    "stopsound_description": "Stopper en lyd.",
    "stopsound_success": "Lyden %s er stoppet for %s",
    "stopsound_success_all": "Alle lyde er stoppet for %s",
    "summon_description": "Fremmaner en enhed.",
    "summon_failed": "Objektet kunne ikke fremmanes",
    "summon_outOfWorld": "Objektet kan ikke fremmanes uden for verdenen",
    "summon_success": "Objektet er fremmanet",
    "summon_tagError": "Parsingen af datatags lykkedes ikke: %1$s",
    "tag_description": "Administrerer tags gemt i enheder.",
    "tag_add_failed": "Målet har allerede tagget, eller også har det for mange tags",
    "tag_add_success_single": "%2$s har fået tagget '%1$s'",
    "tag_add_success_multiple": "%2$d enheder har fået tagget '%1$s'",
    "tag_list_single_empty": "%s har ingen tags",
    "tag_list_single_success": "%1$s har %2$d tags: %3$s",
    "tag_list_multiple_empty": "Der er ingen tags på de %d enheder",
    "tag_list_multiple_success": "De %1$d enheder har %2$d tags i alt: %3$s",
    "tag_remove_failed": "Målet har ikke dette tag",
    "tag_remove_success_single": "Tagget '%1$s' er fjernet fra %2$s",
    "tag_remove_success_multiple": "Tagget '%1$s' er fjernet fra %2$d enheder",
    "tell_description": "Sender en privat besked til en eller flere spillere.",
    "tellraw_description": "Sender en JSON-besked til spillerne.",
    "tellraw_jsonException": "Ugyldig json: %1$s",
    "tellraw_jsonStringException": "Ugyldige json-strengdata.",
    "tellraw_error_noData": "Der er ikke angivet data.",
    "tellraw_error_notArray": "Rawtext-objekter skal indeholde et array. Eksempel: \"rawtext\":[{..}]",
    "tellraw_error_textNotString": "text-feltet i rawtext skal indeholde en streng. Eksempel: \"rawtext\":[{\"text\": \"text to display\"}]",
    "tellraw_error_translateNotString": "translate-feltet i rawtext skal indeholde en sprognøgle. Eksempel: \"rawtext\":[{\"translate\": \"gui.ok\"}]",
    "tellraw_error_withNotArrayOrRawText": "Feltet with i rawtext skal indeholde en matrix eller et andet rawtext-objekt. Eksempel 1: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\": [ \"value1\", \"value2\" ]}]  Eksempel 2: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\":{\"rawtext\":[{\"text\": \"value1\"}, {\"text\": \"value2\"}]}}]",
    "tellraw_error_itemIsNotObject": "Json-værdien i rawtext-arrayet er ikke et objekt. Eksempel: \"rawtext\": [{ \"text\" : \"my text\" }]",
    "educlientinfo_description": "Hent tenant-id og hoststatus. Tilsigtet CM.",
    "testfor_description": "Tæller de enheder (spillere, væsner, genstande etc.), der matcher specificerede betingelser.",
    "testfor_failure": "%1$s matcher ikke den påkrævede datastruktur",
    "testfor_success": "Fandt %1$s",
    "testfor_tagError": "Parsingen af datatags lykkedes ikke: %1$s",
    "testforblock_description": "Tester om en bestemt blok er på en specifik placering.",
    "testforblock_failed_data": "Blokken på %1$d, %2$d, %3$d matcher ikke den forventede bloktilstand.",
    "testforblock_failed_nbt": "Blokken på %1$d, %2$d, %3$d mangler de påkrævede NBT-nøgler.",
    "testforblock_failed_tile": "Blokken på %1$d, %2$d, %3$d er %4$s (forventet: %5$s).",
    "testforblock_failed_tileEntity": "Blokken på %1$d, %2$d, %3$d er ikke en fliseenhed og kan ikke understøtte tagmatchning.",
    "testforblock_outOfWorld": "Der kan ikke testes for blokke uden for verdenen",
    "testforblock_success": "Blokken er fundet på %1$d, %2$d, %3$d.",
    "testforblocks_description": "Tester, om blokkene i to regioner matcher.",
    "tickingarea_description": "Tilføj, fjern eller angiv tickende områder.",
    "tickingarea_inuse": "%1$d/%2$d tickende områder er i brug.",
    "tickingarea_noneExist_currentDimension": "Den aktuelle dimension indeholder ingen tickende områder.",
    "tickingarea_add_bounds_success": "Tilføjede et tickende område fra %1$d til %2$d.",
    "tickingarea_add_circle_success": "Tilføjede et tickende område, der er centreret ved %1$d og har en radius på %2$d segmenter.",
    "tickingarea_add_failure": "Det maksimale antal tickende områder (%1$d) er allerede nået. Der kan ikke tilføjes flere.",
    "tickingarea_add_conflictingname": "Der findes allerede et tickende område med navnet %1$s.",
    "tickingarea_add_chunkfailure": "Det tickende område indeholder flere end %1$d segmenter. Når det er så stort, kan det ikke oprettes.",
    "tickingarea_add_radiusfailure": "Radius må ikke være større end %1$d. Det tickende område er for stort til at blive oprettet.",
    "tickingarea_remove_success": "Fjernede tickende område(r)",
    "tickingarea_remove_failure": "Den aktuelle dimension indeholder ingen tickende områder med blokpositionen %1$d.",
    "tickingarea_remove_byname_failure": "Den aktuelle dimension indeholder ingen tickende områder med navnet %1$s.",
    "tickingarea_remove_all_success": "Fjernede tickende område(r)",
    "tickingarea_remove_all_failure": "Den aktuelle dimension indeholder ingen tickende områder.",
    "tickingarea_list_chunks": "segmenter",
    "tickingarea_list_circle_radius": "Radius",
    "tickingarea_list_success_currentDimension": "Liste over alle tickende områder i den aktuelle dimension",
    "tickingarea_list_success_allDimensions": "Liste over alle tickende områder i alle dimensioner",
    "tickingarea_list_failure_allDimensions": "Ingen dimensioner indeholder tickende områder.",
    "tickingarea_list_to": "til",
    "tickingarea_list_type_circle": "Cirkel",
    "time_added": "Der er føjet %1$d til tiden",
    "time_description": "Ændrer eller forespørger om verdenens spiltid.",
    "time_disabled": "På dette niveau er Altid dag aktiveret.",
    "time_query_day": "Dagen er %d",
    "time_query_daytime": "Tidspunktet på dagen er %d",
    "time_query_gametime": "Spiltiden er %d",
    "time_set": "Indstil tiden til %1$d",
    "time_stop": "Tid %1$s",
    "title_description": "Styrer skærmtitler.",
    "title_success": "Titelkommandoen er udført",
    "titleraw_description": "Styrer skærmtitler med JSON-meddelelser.",
    "toggledownfall_description": "Slår vejret til og fra.",
    "tp_description": "Teleporterer enheder (spillere, væsner etc.).",
    "tp_notSameDimension": "Teleportering er ikke muligt, fordi spillerne befinder sig i forskellige dimensioner",
    "tp_outOfWorld": "Enheder kan ikke teleporteres uden for verdenen",
    "tp_permission": "Du har ikke tilladelse til at bruge denne skråstregskommando",
    "tp_safeTeleportFail": "%1$s kunne ikke teleporteres til %2$s, fordi området ikke er fri for blokke.",
    "tp_far": "%1$s kunne ikke teleporteres til %2$s, fordi området ikke er indlæst.",
    "tp_success": "%1$s blev teleporteret til %2$s",
    "tp_successVictim": "Du er blevet teleporteret til %1$s",
    "tp_success_coordinates": "%1$s blev teleporteret til %2$s, %3$s, %4$s",
    "transferserver_description": "Overfører en spiller til en anden server.",
    "transferserver_successful": "Spilleren er overført",
    "transferserver_invalid_port": "Ugyldig port (0-65535)",
    "trigger_description": "Indstiller en udløser til aktivering.",
    "trigger_disabled": "Udløseren %1$s er ikke aktiveret",
    "trigger_invalidMode": "Udløsertilstanden %1$s er ugyldig",
    "trigger_invalidObjective": "Udløsernavnet %1$s er ugyldigt",
    "trigger_invalidPlayer": "Det er kun spillere, der kan bruge kommandoen /trigger",
    "trigger_success": "Udløseren %1$s er ændret med %2$s %3$s",
    "unban_failed": "Udelukkelsen af spilleren %1$s kunne ikke ophæves",
    "unban_success": "Udelukkelsen af spilleren %1$s er ophævet",
    "unbanip_invalid": "Du har angivet en ugyldig ip-adresse",
    "unbanip_success": "Udelukkelsen af ip-adressen %1$s er ophævet",
    "validategamelighting_description": "Valider spilbelysning for et bestemt område",
    "validategamelighting_checkRegionTooBig": "Belysningen kan ikke valideres, fordi området er for stort! (%1$d > %2$d)",
    "validategamelighting_outOfWorld": "Belysning kan ikke valideres uden for verden",
    "weather_clear": "Skifter til skyfrit",
    "weather_description": "Indstiller vejret.",
    "weather_disabled": "På dette niveau er Vejrcyklus ikke aktiveret.",
    "weather_query": "Vejrudsigt: %s",
    "weather_query_clear": "Klart",
    "weather_query_rain": "Regn",
    "weather_query_thunder": "Torden",
    "weather_rain": "Skifter til regnvejr",
    "weather_thunder": "Skifter til regn og torden",
    "whitelist_add_failed": "%1$s kunne ikke tilføjes på hvidlisten",
    "whitelist_add_success": "%1$s står nu på hvidlisten",
    "whitelist_description": "Administrerer serverens hvidliste.",
    "whitelist_disabled": "Hvidlisten er deaktiveret",
    "whitelist_enabled": "Hvidlisten er aktiveret",
    "whitelist_list": "Der er %1$d (ud af %2$d sete) hvidlistede spillere:",
    "whitelist_reloaded": "Hvidlisten er genindlæst fra filen.",
    "whitelist_remove_failed": "%1$s kunne ikke fjernes fra hvidlisten",
    "whitelist_remove_success": "%1$s er fjernet fra hvidlisten",
    "world_age_description": "Ændrer eller forespørger på verdenens alder (tid siden oprettelse).",
    "world_age_added": "Verdenens alder er øget med %1$d",
    "world_age_query": "Verdenens alder er %d",
    "world_age_set": "Sæt verdenens alder til %1$d",
    "worldborder_center_success": "Centrum for verdens grænse er nu %1$s, %2$s",
    "worldborder_damage_amount_success": "Skaden fra verdens grænse er nu %1$s pr. blok (fra %2$s pr. blok)",
    "worldborder_damage_buffer_success": "Bufferen inden verdens grænse gør skade er nu %1$s blokke (fra %2$s blokke)",
    "worldborder_get_success": "Verdens grænse har nu en bredde på %1$s blokke",
    "worldborder_set_success": "Verdens grænse har nu en bredde på %1$s blokke (fra %2$s blokke)",
    "worldborder_setSlowly_grow_success": "Verdens grænse udvides til en bredde på %1$s blokke (fra %2$s blokke) over %3$s sekunder",
    "worldborder_setSlowly_shrink_success": "Verdens grænse indskrænkes til en bredde på %1$s blokke (fra %2$s blokke) over %3$s sekunder",
    "worldborder_warning_distance_success": "Advarslen om verdens grænse udløses nu på en afstand af %1$s blokke (fra %2$s blokke)",
    "worldborder_warning_time_success": "Advarslen om verdens grænse udløses nu på en afstand af %1$s sekunder (fra %2$s sekunder)",
    "worldbuilder_description": "Giv/fjern verdensbyggerstatus til spilleren.",
    "worldbuilder_success": "Verdensbyggerstatussen er opdateret til %1$s",
    "wsserver_description": "Forsøger at oprette forbindelse til websocketserveren på den angivne URL.",
    "wsserver_invalid_url": "Den angivne server-URL er ugyldig",
    "wsserver_request_existing": "Der kører allerede en anden forbindelsesanmodning",
    "wsserver_request_failed": "Der kunne ikke oprettes forbindelse til serveren: %1$s",
    "wsserver_success": "Der er oprettet forbindelse til serveren: %1$s",
    "xp_description": "Tilføjer eller fjerner spillererfaring.",
    "xp_failure_widthdrawXp": "En spiller kan ikke tildeles negative erfaringspoint",
    "xp_success": "%2$s fik tildelt %1$d erfaring",
    "xp_success_levels": "%2$s fik tildelt %1$d niveauer",
    "xp_success_negative_levels": "%2$s fik fjernet %1$d niveauer"
},
item:{
    "air": [
        "Luft"
    ],
    "apple": [
        "Æble"
    ],
    "golden_apple": [
        "Guldæble"
    ],
    "appleenchanted": [
        "Fortryllet æble"
    ],
    "armor_stand": [
        "Rustningsstativ"
    ],
    "arrow": [
        "Pil"
    ],
    "tipped_arrow": [
        "Dyppet pil"
    ],
    "banner": [
        "Sort banner",
        "Sort banner",
        "Rødt banner",
        "Grønt banner",
        "Brunt banner",
        "Blåt banner",
        "Lilla banner",
        "Blågrønt banner",
        "Lysegråt banner",
        "Gråt banner",
        "Lyserødt banner",
        "Limegrønt banner",
        "Gult banner",
        "Lyseblåt banner",
        "Magentarødt banner",
        "Orange banner",
        "Hvidt banner"
    ],
    "bed": [
        "Seng",
        "Hvid seng",
        "Orange seng",
        "Magentarød seng",
        "Lyseblå seng",
        "Gul seng",
        "Limegrøn seng",
        "Lyserød seng",
        "Grå seng",
        "Lysegrå seng",
        "Blågrøn seng",
        "Lilla seng",
        "Blå seng",
        "Brun seng",
        "Grøn seng",
        "Rød seng",
        "Sort seng"
    ],
    "bell": [
        "Klokke"
    ],
    "steak": [
        "Steak"
    ],
    "beef": [
        "Råt kød"
    ],
    "beetroot": [
        "Rødbede"
    ],
    "beetroot_soup": [
        "Rødbedesuppe"
    ],
    "blaze_powder": [
        "Blazepulver"
    ],
    "blaze_rod": [
        "Blazestav"
    ],
    "boat": [
        "Egebåd",
        "Egebåd",
        "Granbåd",
        "Birkebåd",
        "Jungletræsbåd",
        "Akaciebåd",
        "Båd af mørkt egetræ"
    ],
    "bone": [
        "Knogle"
    ],
    "book": [
        "Bog"
    ],
    "chainmail_boots": [
        "Brynjestøvler"
    ],
    "leather_boots": [
        "Læderstøvler"
    ],
    "diamond_boots": [
        "Diamantstøvler"
    ],
    "golden_boots": [
        "Guldstøvler"
    ],
    "iron_boots": [
        "Jernstøvler"
    ],
    "bow": [
        "Bue"
    ],
    "bowl": [
        "Skål"
    ],
    "bread": [
        "Brød"
    ],
    "brewing_stand": [
        "Bryggestand"
    ],
    "brick": [
        "Mursten"
    ],
    "bucket": [
        "Spand"
    ],
    "bucketLava": [
        "Lavaspand"
    ],
    "bucketWater": [
        "Vandspand"
    ],
    "bucketFish": [
        "Spand torsk"
    ],
    "bucketSalmon": [
        "Spand laks"
    ],
    "bucketTropical": [
        "Spand tropefisk"
    ],
    "bucketPuffer": [
        "Spand kuglefisk"
    ],
    "bucketCustomFish": [
        "Spand"
    ],
    "tropicalColorWhite": [
        "Hvid"
    ],
    "tropicalColorOrange": [
        "Orange"
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
        "Limegrøn"
    ],
    "tropicalColorRose": [
        "Rosa"
    ],
    "tropicalColorGray": [
        "Grå"
    ],
    "tropicalColorSilver": [
        "Sølv"
    ],
    "tropicalColorTeal": [
        "Blågrøn"
    ],
    "tropicalColorPlum": [
        "Blomme"
    ],
    "tropicalColorBlue": [
        "Blå"
    ],
    "tropicalColorBrown": [
        "Brun"
    ],
    "tropicalColorGreen": [
        "Grøn"
    ],
    "tropicalColorRed": [
        "Rød"
    ],
    "tropicalBodyKobSingle": [
        "%1$s japansk ørnefisk"
    ],
    "tropicalBodySunstreakSingle": [
        "%1$s solfisk"
    ],
    "tropicalBodySnooperSingle": [
        "%1$s snyltefisk"
    ],
    "tropicalBodyDasherSingle": [
        "%1$s springer"
    ],
    "tropicalBodyBrinelySingle": [
        "%1$s lagefisk"
    ],
    "tropicalBodySpottySingle": [
        "%1$s pletfisk"
    ],
    "tropicalBodyFlopperSingle": [
        "%1$s flopper"
    ],
    "tropicalBodyStripeySingle": [
        "%1$s stribefisk"
    ],
    "tropicalBodyGlitterSingle": [
        "%1$s glitterfisk"
    ],
    "tropicalBodyBlockfishSingle": [
        "%1$s blokfisk"
    ],
    "tropicalBodyBettySingle": [
        "%1$s Betty"
    ],
    "tropicalBodyClayfishSingle": [
        "%1$s lerfisk"
    ],
    "tropicalBodyKobMulti": [
        "%1$s-%2$s japansk ørnefisk"
    ],
    "tropicalBodySunstreakMulti": [
        "%1$s-%2$s solfisk"
    ],
    "tropicalBodySnooperMulti": [
        "%1$s-%2$s snyltefisk"
    ],
    "tropicalBodyDasherMulti": [
        "%1$s-%2$s springer"
    ],
    "tropicalBodyBrinelyMulti": [
        "%1$s-%2$s lagefisk"
    ],
    "tropicalBodySpottyMulti": [
        "%1$s-%2$s pletfisk"
    ],
    "tropicalBodyFlopperMulti": [
        "%1$s-%2$s flopper"
    ],
    "tropicalBodyStripeyMulti": [
        "%1$s-%2$s stribefisk"
    ],
    "tropicalBodyGlitterMulti": [
        "%1$s-%2$s glitterfisk"
    ],
    "tropicalBodyBlockfishMulti": [
        "%1$s-%2$s blokfisk"
    ],
    "tropicalBodyBettyMulti": [
        "%1$s-%2$s Betty"
    ],
    "tropicalBodyClayfishMulti": [
        "%1$s-%2$s lerfisk"
    ],
    "tropicalSchoolAnemone": [
        "Anemone"
    ],
    "tropicalSchoolBlackTang": [
        "Langsnudet kirurgfisk"
    ],
    "tropicalSchoolBlueDory": [
        "Paletkirurgfisk"
    ],
    "tropicalSchoolButterflyFish": [
        "Skælfinnefisk"
    ],
    "tropicalSchoolCichlid": [
        "Ciclide"
    ],
    "tropicalSchoolClownfish": [
        "Klovnfisk"
    ],
    "tropicalSchoolCottonCandyBetta": [
        "Lyserød siamesisk kampfisk"
    ],
    "tropicalSchoolDottyback": [
        "Koralsmutte"
    ],
    "tropicalSchoolEmperorRedSnapper": [
        "Rød kejsersnapper"
    ],
    "tropicalSchoolGoatfish": [
        "Mulle"
    ],
    "tropicalSchoolMoorishIdol": [
        "Fanefisk"
    ],
    "tropicalSchoolOrnateButterfly": [
        "Klovnfanefisk"
    ],
    "tropicalSchoolParrotfish": [
        "Papegøjefisk"
    ],
    "tropicalSchoolQueenAngelFish": [
        "Dronningekejserfisk"
    ],
    "tropicalSchoolRedCichlid": [
        "Rød ciclide"
    ],
    "tropicalSchoolRedLippedBlenny": [
        "Rødlæbet slimfisk"
    ],
    "tropicalSchoolRedSnapper": [
        "Rød snapper"
    ],
    "tropicalSchoolThreadfin": [
        "Trådfinnefisk"
    ],
    "tropicalSchoolTomatoClown": [
        "Tomatklovnfisk"
    ],
    "tropicalSchoolTriggerfish": [
        "Aftrækkerfisk"
    ],
    "tropicalSchoolYellowTang": [
        "Gul kirurgfisk"
    ],
    "tropicalSchoolYellowtailParrot": [
        "Gulhalet papegøjefisk"
    ],
    "cake": [
        "Kage"
    ],
    "camera": [
        "Kamera"
    ],
    "golden_carrot": [
        "Guldgulerod"
    ],
    "carrotOnAStick": [
        "Gulerod på en pind"
    ],
    "warped_fungus_on_a_stick": [
        "Forkvaklet svamp på en pind"
    ],
    "carrot": [
        "Gulerod"
    ],
    "cauldron": [
        "Gryde"
    ],
    "coal": [
        "Kul",
        null,
        "Trækul"
    ],
    "chainmail_chestplate": [
        "Brynje"
    ],
    "leather_chestplate": [
        "Lædertunika"
    ],
    "diamond_chestplate": [
        "Diamantbrystplade"
    ],
    "golden_chestplate": [
        "Guldbrystplade"
    ],
    "iron_chestplate": [
        "Jernbrystplade"
    ],
    "chorus_fruit": [
        "Chorusfrugt"
    ],
    "chorus_fruit_popped": [
        "Poppet chorusfrugt"
    ],
    "cooked_beef": [
        "Tilberedt oksekød"
    ],
    "cooked_chicken": [
        "Tilberedt kylling"
    ],
    "cooked_porkchop": [
        "Tilberedt kotelet"
    ],
    "chicken": [
        "Rå kylling"
    ],
    "clay_ball": [
        "Ler"
    ],
    "clock": [
        "Ur"
    ],
    "comparator": [
        "Redstone-sammenligner"
    ],
    "compass": [
        "Kompas"
    ],
    "lodestonecompass": [
        "Magnetitkompas"
    ],
    "cookie": [
        "Småkage"
    ],
    "crossbow": [
        "Armbrøst"
    ],
    "diamond": [
        "Diamant"
    ],
    "repeater": [
        "Redstone-gentager"
    ],
    "acacia_door": [
        "Akaciedør"
    ],
    "birch_door": [
        "Birkedør"
    ],
    "dark_oak_door": [
        "Dør af mørkt egetræ"
    ],
    "iron_door": [
        "Jerndør"
    ],
    "jungle_door": [
        "Jungletræsdør"
    ],
    "wooden_door": [
        "Egedør"
    ],
    "spruce_door": [
        "Grandør"
    ],
    "crimson_door": [
        "Karmoisinrød dør"
    ],
    "warped_door": [
        "Forkvaklet dør"
    ],
    "dragon_breath": [
        "Drageånde"
    ],
    "dye": [
        "Blækpose",
        "Blækpose",
        "Rød farve",
        "Grøn farve",
        "Kakaobønner",
        "Lasursten",
        "Lilla farvestof",
        "Blågrønt farvestof",
        "Lysegråt farvestof",
        "Gråt farvestof",
        "Lyserødt farvestof",
        "Limegrønt farvestof",
        "Gul farve",
        "Lyseblåt farvestof",
        "Magentarødt farvestof",
        "Orange farvestof",
        "Benmel",
        "Sort farve",
        "Brun farve",
        "Blå farve",
        "Hvid farve"
    ],
    "egg": [
        "Æg"
    ],
    "elytra": [
        "Elytra"
    ],
    "emerald": [
        "Smaragd"
    ],
    "emptyMap": [
        "Blankt kort"
    ],
    "emptyLocatorMap": [
        "Blankt placeringskort"
    ],
    "emptyPotion": [
        "Vandflaske"
    ],
    "enchanted_book": [
        "Fortryllet bog"
    ],
    "end_crystal": [
        "End-krystal"
    ],
    "end_rod": [
        "End-stav"
    ],
    "ender_eye": [
        "Ender-øje"
    ],
    "ender_pearl": [
        "Ender-perle"
    ],
    "experience_bottle": [
        "Fortryllelseseliksir"
    ],
    "feather": [
        "Fjer"
    ],
    "fermented_spider_eye": [
        "Gæret edderkoppeøje"
    ],
    "fireball": [
        "Ildladning"
    ],
    "fireworks": [
        "Fyrværkeriraket"
    ],
    "fireworksCharge": [
        "Fyrværkeristjerne"
    ],
    "clownfish": [
        "Tropefisk"
    ],
    "cooked_fish": [
        "Tilberedt torsk"
    ],
    "fish": [
        "Rå torsk"
    ],
    "pufferfish": [
        "Kuglefisk"
    ],
    "cooked_salmon": [
        "Tilberedt laks"
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
        "Fyrtøj"
    ],
    "flower_pot": [
        "Blomsterkrukke"
    ],
    "frame": [
        "Ramme"
    ],
    "ghast_tear": [
        "Ghast-tåre"
    ],
    "glass_bottle": [
        "Glasflaske"
    ],
    "gold_nugget": [
        "Guldklump"
    ],
    "iron_nugget": [
        "Jernklump"
    ],
    "diamond_axe": [
        "Diamantøkse"
    ],
    "golden_axe": [
        "Guldøkse"
    ],
    "iron_axe": [
        "Jernøkse"
    ],
    "stone_axe": [
        "Stenøkse"
    ],
    "wooden_axe": [
        "Træøkse"
    ],
    "chainmail_helmet": [
        "Brynjehjelm"
    ],
    "leather_helmet": [
        "Læderhjelm"
    ],
    "diamond_helmet": [
        "Diamanthjelm"
    ],
    "golden_helmet": [
        "Guldhjelm"
    ],
    "iron_helmet": [
        "Jernhjelm"
    ],
    "diamond_hoe": [
        "Diamantlugejern"
    ],
    "golden_hoe": [
        "Guldlugejern"
    ],
    "iron_hoe": [
        "Jernlugejern"
    ],
    "stone_hoe": [
        "Stenlugejern"
    ],
    "wooden_hoe": [
        "Trælugejern"
    ],
    "honey_bottle": [
        "Honningflaske"
    ],
    "honeycomb": [
        "Vokstavle"
    ],
    "horsearmordiamond": [
        "Diamantrustning til hest"
    ],
    "horsearmorgold": [
        "Guldrustning til hest"
    ],
    "horsearmoriron": [
        "Jernrustning til hest"
    ],
    "horsearmorleather": [
        "Læderrustning til hest"
    ],
    "gold_ingot": [
        "Guldbarre"
    ],
    "iron_ingot": [
        "Jernbarre"
    ],
    "netherite_ingot": [
        "Netheritbarre"
    ],
    "netherite_scrap": [
        "Netheritstykke"
    ],
    "netherite_sword": [
        "Netheritsværd"
    ],
    "netherite_pickaxe": [
        "Netherithakke"
    ],
    "netherite_axe": [
        "Netheritøkse"
    ],
    "netherite_shovel": [
        "Netheritskovl"
    ],
    "netherite_hoe": [
        "Netheritlugejern"
    ],
    "netherite_boots": [
        "Netheritstøvler"
    ],
    "netherite_leggings": [
        "Netheritbukser"
    ],
    "netherite_chestplate": [
        "Brystplade af netherit"
    ],
    "netherite_helmet": [
        "Netherithjelm"
    ],
    "lead": [
        "Line"
    ],
    "leather": [
        "Læder"
    ],
    "leaves": [
        "Blade",
        "Egeblade",
        "Grannåle",
        "Birkeblade",
        "Jungletræsblade",
        "Akacieblade",
        "Blade fra mørk eg"
    ],
    "chainmail_leggings": [
        "Brynjebukser"
    ],
    "leather_leggings": [
        "Læderbukser"
    ],
    "diamond_leggings": [
        "Diamantbukser"
    ],
    "golden_leggings": [
        "Guldbukser"
    ],
    "iron_leggings": [
        "Jernbukser"
    ],
    "nautilus_shell": [
        "Konkylie"
    ],
    "heart_of_the_sea": [
        "Havets hjerte"
    ],
    "magma_cream": [
        "Magmacreme"
    ],
    "map": [
        "Kort"
    ],
    "melon": [
        "Vandmelon"
    ],
    "milk": [
        "Mælk"
    ],
    "minecart": [
        "Minevogn"
    ],
    "chest_minecart": [
        "Minevogn med kiste"
    ],
    "command_block_minecart": [
        "Minevogn med kommandoblok"
    ],
    "minecartFurnace": [
        "Minevogn med ovn"
    ],
    "hopper_minecart": [
        "Minevogn med tragt"
    ],
    "tnt_minecart": [
        "Minevogn med TNT"
    ],
    "trident": [
        "Trefork"
    ],
    "mushroom_stew": [
        "Svampestuvning"
    ],
    "muttoncooked": [
        "Tilberedt fårekød"
    ],
    "muttonraw": [
        "Råt fårekød"
    ],
    "name_tag": [
        "Navneskilt"
    ],
    "netherbrick": [
        "Nether-mursten"
    ],
    "quartz": [
        "Nether-kvarts"
    ],
    "nether_wart": [
        "Nether-urt"
    ],
    "netherStar": [
        "Nether-stjerne"
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
        "Guldhakke"
    ],
    "iron_pickaxe": [
        "Jernhakke"
    ],
    "stone_pickaxe": [
        "Stenhakke"
    ],
    "wooden_pickaxe": [
        "Træhakke"
    ],
    "porkchop_cooked": [
        "Tilberedt kotelet"
    ],
    "porkchop": [
        "Rå kotelet"
    ],
    "portfolio": [
        "Portfolio"
    ],
    "potato": [
        "Kartoffel"
    ],
    "baked_potato": [
        "Bagt kartoffel"
    ],
    "poisonous_potato": [
        "Giftig kartoffel"
    ],
    "potion": [
        "Eliksir"
    ],
    "prismarine_crystals": [
        "Prismarine-krystaller"
    ],
    "prismarine_shard": [
        "Prismarine-skår"
    ],
    "pumpkin_pie": [
        "Græskartærte"
    ],
    "cooked_rabbit": [
        "Tilberedt kanin"
    ],
    "rabbit_foot": [
        "Kaninfod"
    ],
    "rabbit_hide": [
        "Kaninskind"
    ],
    "rabbit": [
        "Rå kanin"
    ],
    "rabbit_stew": [
        "Kaninstuvning"
    ],
    "record": [
        "Musikplade"
    ],
    "redstone": [
        "Redstone"
    ],
    "reeds": [
        "Sukkerrør"
    ],
    "kelp": [
        "Kelp"
    ],
    "dried_kelp": [
        "Tørret kelp"
    ],
    "rotten_flesh": [
        "Råddent kød"
    ],
    "ruby": [
        "Rubin"
    ],
    "saddle": [
        "Sadel"
    ],
    "wheat_seeds": [
        "Frø"
    ],
    "beetroot_seeds": [
        "Rødbedefrø"
    ],
    "melon_seeds": [
        "Melonfrø"
    ],
    "pumpkin_seeds": [
        "Græskarfrø"
    ],
    "shears": [
        "Saks"
    ],
    "diamond_shovel": [
        "Diamantskovl"
    ],
    "golden_shovel": [
        "Guldskovl"
    ],
    "iron_shovel": [
        "Jernskovl"
    ],
    "stone_shovel": [
        "Stenskovl"
    ],
    "wooden_shovel": [
        "Træskovl"
    ],
    "sign": [
        "Skilt af egetræ"
    ],
    "spruce_sign": [
        "Skilt af grantræ"
    ],
    "birch_sign": [
        "Skilt af birketræ"
    ],
    "jungle_sign": [
        "Skilt af jungletræ"
    ],
    "acacia_sign": [
        "Skilt af akacietræ"
    ],
    "darkoak_sign": [
        "Skilt af mørkt egetræ"
    ],
    "crimson_sign": [
        "Karmoisinrødt skilt"
    ],
    "warped_sign": [
        "Forkvaklet skilt"
    ],
    "skull": [
        "Kranium fra skelet",
        "Kranium fra skelet",
        "Kranium fra wither-skelet",
        "Zombiehoved",
        "Hoved",
        "Creeper-hoved",
        "Dragehoved"
    ],
    "slime_ball": [
        "Slimklat"
    ],
    "snowball": [
        "Snebold"
    ],
    "speckled_melon": [
        "Glitrende vandmelon"
    ],
    "spider_eye": [
        "Edderkoppeøje"
    ],
    "stick": [
        "Pind"
    ],
    "string": [
        "Snor"
    ],
    "sugar": [
        "Sukker"
    ],
    "gunpowder": [
        "Krudt"
    ],
    "diamond_sword": [
        "Diamantsværd"
    ],
    "golden_sword": [
        "Guldsværd"
    ],
    "iron_sword": [
        "Jernsværd"
    ],
    "stone_sword": [
        "Stensværd"
    ],
    "wooden_sword": [
        "Træsværd"
    ],
    "wheat": [
        "Hvede"
    ],
    "writable_book": [
        "Bog og fjerpen"
    ],
    "written_book": [
        "Skrevet bog"
    ],
    "glowstone_dust": [
        "Glødestenspulver"
    ],
    "shield": [
        "Skjold"
    ],
    "shulker_shell": [
        "Shulkerskal"
    ],
    "totem": [
        "Udødelighedstotem"
    ],
    "turtle_helmet": [
        "Skildpaddeskjold"
    ],
    "turtle_shell_piece": [
        "Skæl"
    ],
    "phantom_membrane": [
        "Fantommembran"
    ],
    "sweet_berries": [
        "Mirakelbær"
    ],
    "suspicious_stew": [
        "Skummel stuvning"
    ],
    "banner_pattern": [
        "Bannermønster"
    ],
    "acaciaFence": [
        "Akacietræshegn"
    ],
    "acacia_fence_gate": [
        "Hegnslåge af akacietræ"
    ],
    "activator_rail": [
        "Aktivatorskinne"
    ],
    "allow": [
        "Tillad"
    ],
    "deny": [
        "Nægt"
    ],
    "border_block": [
        "Grænse"
    ],
    "anvil": [
        "Ambolt",
        "Ambolt",
        null,
        null,
        null,
        "Lettere beskadiget ambolt",
        null,
        null,
        null,
        "Svært beskadiget ambolt"
    ],
    "barrier": [
        "Barriere"
    ],
    "beacon": [
        "Fyr"
    ],
    "beehive": [
        "Bistade"
    ],
    "bee_nest": [
        "Bikube"
    ],
    "target": [
        "Målskive"
    ],
    "bedrock": [
        "Grundfjeld"
    ],
    "conduit": [
        "Konduktor"
    ],
    "invisibleBedrock": [
        "Usynligt grundfjeld"
    ],
    "birchFence": [
        "Birketræshegn"
    ],
    "birch_fence_gate": [
        "Hegnslåge af birketræ"
    ],
    "blast_furnace": [
        "Højovn"
    ],
    "bone_block": [
        "Knogleblok"
    ],
    "coal_block": [
        "Kulblok"
    ],
    "diamond_block": [
        "Diamantblok"
    ],
    "emerald_block": [
        "Smaragdblok"
    ],
    "gold_block": [
        "Guldblok"
    ],
    "iron_block": [
        "Jernblok"
    ],
    "lapis_block": [
        "Lasurstensblok"
    ],
    "redstone_block": [
        "Redstone-blok"
    ],
    "bookshelf": [
        "Bogreol"
    ],
    "brick_block": [
        "Murstensblok"
    ],
    "brown_mushroom": [
        "Brun svamp"
    ],
    "wooden_button": [
        "Knap af egetræ"
    ],
    "acacia_button": [
        "Knap af akacietræ"
    ],
    "birch_button": [
        "Knap af birketræ"
    ],
    "dark_oak_button": [
        "Knap af mørkt egetræ"
    ],
    "jungle_button": [
        "Knap af jungletræ"
    ],
    "spruce_button": [
        "Knap af grantræ"
    ],
    "stone_button": [
        "Stenknap"
    ],
    "cactus": [
        "Kaktus"
    ],
    "dried_kelp_block": [
        "Tørret kelpblok"
    ],
    "carved_pumpkin": [
        "Udskåret græskar"
    ],
    "chest": [
        "Kiste"
    ],
    "ender_chest": [
        "Ender-kiste"
    ],
    "jigsaw": [
        "Pusleblok"
    ],
    "honey_block": [
        "Honningblok"
    ],
    "honeycomb_block": [
        "Vokstavle-blok"
    ],
    "lodestone": [
        "Magnetit"
    ],
    "nether_sprouts": [
        "Nether-spirer"
    ],
    "crimson_stem": [
        "Karmoisinrød stok"
    ],
    "warped_stem": [
        "Forkvaklet stok"
    ],
    "stripped_crimson_stem": [
        "Afbarket karmoisinrød stok"
    ],
    "stripped_warped_stem": [
        "Afbarket forkvaklet stok"
    ],
    "crimson_hyphae": [
        "Karmoisinrødt hyfe"
    ],
    "warped_hyphae": [
        "Forkvaklet hyfe"
    ],
    "stripped_crimson_hyphae": [
        "Afbarket karmoisinrød hyfe"
    ],
    "stripped_warped_hyphae": [
        "Afbarket forkvaklet hyfe"
    ],
    "crimson_planks": [
        "Karmoisinrøde planker"
    ],
    "warped_planks": [
        "Forkvaklede planker"
    ],
    "crimson_trapdoor": [
        "Karmoisinrød faldlem"
    ],
    "warped_trapdoor": [
        "Forkvaklet faldlem"
    ],
    "crimson_standing_sign": [
        "Karmoisinrødt skilt"
    ],
    "warped_standing_sign": [
        "Forkvaklet skilt"
    ],
    "crimson_wall_sign": [
        "Karmoisinrødt skilt"
    ],
    "warped_wall_sign": [
        "Forkvaklet skilt"
    ],
    "crimson_stairs": [
        "Karmoisinrøde trapper"
    ],
    "warped_stairs": [
        "Forkvaklede trapper"
    ],
    "crimson_fence": [
        "Karmoisinrødt hegn"
    ],
    "warped_fence": [
        "Forkvaklet hegn"
    ],
    "crimson_fence_gate": [
        "Karmoisinrød hegnslåge"
    ],
    "warped_fence_gate": [
        "Forkvaklet hegnslåge"
    ],
    "crimson_button": [
        "Karmoisinrød knap"
    ],
    "warped_button": [
        "Forkvaklet knap"
    ],
    "crimson_pressure_plate": [
        "Karmoisinrød trykplade"
    ],
    "warped_pressure_plate": [
        "Forkvaklet trykplade"
    ],
    "crimson_slab": [
        "Karmoisinrød flise"
    ],
    "warped_slab": [
        "Forkvaklet flise"
    ],
    "crimson_double_slab": [
        "Karmoisinrød flise"
    ],
    "warped_double_slab": [
        "Forkvaklet flise"
    ],
    "shroomlight": [
        "Svampelys"
    ],
    "crimson_nylium": [
        "Karmoisinrød nylium"
    ],
    "warped_nylium": [
        "Forkvaklet nylium"
    ],
    "basalt": [
        "Basalt"
    ],
    "polished_basalt": [
        "Poleret basalt"
    ],
    "blackstone": [
        "Blackstone"
    ],
    "polished_blackstone_bricks": [
        "Polerede blackstone-mursten"
    ],
    "cracked_polished_blackstone_bricks": [
        "Revnet mursten i poleret blackstone"
    ],
    "polished_blackstone_brick_stairs": [
        "Poleret blackstone-murstenstappe"
    ],
    "blackstone_stairs": [
        "Blackstone-trapper"
    ],
    "blackstone_wall": [
        "Blackstone-mur"
    ],
    "polished_blackstone_brick_wall": [
        "Poleret blackstone-murstensmur"
    ],
    "chiseled_polished_blackstone": [
        "Mejslet poleret blackstone"
    ],
    "gilded_blackstone": [
        "Forgyldt blackstone"
    ],
    "blackstone_slab": [
        "Blackstone-plade"
    ],
    "polished_blackstone_brick_slab": [
        "Poleret blackstone-murstensplade"
    ],
    "chain": [
        "Ringbrynje"
    ],
    "soul_soil": [
        "Sjælejord"
    ],
    "soul_fire": [
        "Sjæleild"
    ],
    "polished_blackstone": [
        "Poleret blackstone"
    ],
    "polished_blackstone_stairs": [
        "Polerede blackstone-trapper"
    ],
    "polished_blackstone_slab": [
        "Poleret blackstone-plade"
    ],
    "polished_blackstone_pressure_plate": [
        "Poleret blackstone-trykplade"
    ],
    "polished_blackstone_button": [
        "Poleret blackstone-knap"
    ],
    "polished_blackstone_wall": [
        "Poleret blackstone-mur"
    ],
    "soul_campfire": [
        "Sjælelejrbål"
    ],
    "chiseled_nether_bricks": [
        "Mejslet Nether-mursten"
    ],
    "cracked_nether_bricks": [
        "Krakket Nether-mursten"
    ],
    "quartz_bricks": [
        "Kvartsmursten"
    ],
    "trapped_chest": [
        "Kiste med fælde"
    ],
    "shulkerBoxWhite": [
        "Hvid shulkerboks"
    ],
    "shulkerBoxOrange": [
        "Orange shulkerboks"
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
        "Limegrøn shulkerboks"
    ],
    "shulkerBoxPink": [
        "Lyserød shulkerboks"
    ],
    "shulkerBoxGray": [
        "Grå shulkerboks"
    ],
    "shulkerBoxSilver": [
        "Lysegrå shulkerboks"
    ],
    "shulkerBoxCyan": [
        "Blågrøn shulkerboks"
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
        "Grøn shulkerboks"
    ],
    "shulkerBoxRed": [
        "Rød shulkerboks"
    ],
    "shulkerBoxBlack": [
        "Sort shulkerboks"
    ],
    "shulkerBox": [
        "Shulkerboks"
    ],
    "chorus_flower": [
        "Chorusblomst"
    ],
    "chorus_plant": [
        "Chorusplante"
    ],
    "stained_glass": [
        "Hvidt mosaikglas",
        "Hvidt mosaikglas",
        "Orange mosaikglas",
        "Magentarødt mosaikglas",
        "Lyseblåt mosaikglas",
        "Gult mosaikglas",
        "Limegrønt mosaikglas",
        "Lyserødt mosaikglas",
        "Gråt mosaikglas",
        "Lysegråt mosaikglas",
        "Blågrønt mosaikglas",
        "Lilla mosaikglas",
        "Blåt mosaikglas",
        "Brunt mosaikglas",
        "Grønt mosaikglas",
        "Rødt mosaikglas",
        "Sort mosaikglas"
    ],
    "stained_glass_pane": [
        "Hvid mosaikrude",
        "Hvid mosaikrude",
        "Orange mosaikrude",
        "Magentarød mosaikrude",
        "Lyseblå mosaikrude",
        "Gul mosaikrude",
        "Limegrøn mosaikrude",
        "Lyserød mosaikrude",
        "Grå mosaikrude",
        "Lysegrå mosaikrude",
        "Blågrøn mosaikrude",
        "Lilla mosaikrude",
        "Blå mosaikrude",
        "Brun mosaikrude",
        "Grøn mosaikrude",
        "Rød mosaikrude",
        "Sort mosaikrude"
    ],
    "clay": [
        "Lerblok"
    ],
    "hardened_clay": [
        "Terrakotta"
    ],
    "stained_hardened_clay": [
        "Terrakotta",
        "Hvid terrakotta",
        "Orange terrakotta",
        "Magentarød terrakotta",
        "Lyseblå terrakotta",
        "Gul terrakotta",
        "Limegrøn terrakotta",
        "Lyserød terrakotta",
        "Grå terrakotta",
        "Lysegrå terrakotta",
        "Blågrøn terrakotta",
        "Lilla terrakotta",
        "Blå terrakotta",
        "Brun terrakotta",
        "Grøn terrakotta",
        "Rød terrakotta",
        "Sort terrakotta"
    ],
    "structure_block": [
        "Strukturblok"
    ],
    "structure_void": [
        "Strukturtomrum"
    ],
    "wool": [
        "Uld",
        "Hvid uld",
        "Orange uld",
        "Magentarød uld",
        "Lyseblå uld",
        "Gul uld",
        "Limegrøn uld",
        "Lyserød uld",
        "Grå uld",
        "Lysegrå uld",
        "Blågrøn uld",
        "Lilla uld",
        "Blå uld",
        "Brun uld",
        "Grøn uld",
        "Rød uld",
        "Sort uld"
    ],
    "cobblestone_wall": [
        "Brostensmur",
        "Brostensmur",
        "Mur af mosset brosten",
        "Granitmur",
        "Dioritmur",
        "Andesitmur",
        "Sandstensmur",
        "Murstensmur",
        "Stenmur",
        "Mosbegroet stenmur",
        "End-stensmur",
        "Nether-murstensmur",
        "Prismarinemur",
        "Rød sandstensmur",
        "Rød Nether-murstensmur"
    ],
    "cocoa": [
        "Kakao"
    ],
    "command_block": [
        "Kommandoblok"
    ],
    "composter": [
        "Kompostbeholder"
    ],
    "light_block": [
        "Lys blok"
    ],
    "repeating_command_block": [
        "Gentagende kommandoblok"
    ],
    "chain_command_block": [
        "Kædekommandoblok"
    ],
    "darkOakFence": [
        "Hegn af mørkt egetræ"
    ],
    "dark_oak_fence_gate": [
        "Hegnslåge af mørkt egetræ"
    ],
    "daylight_detector": [
        "Dagslyssensor"
    ],
    "deadbush": [
        "Vissen busk"
    ],
    "detector_rail": [
        "Kontaktskinne"
    ],
    "dirt": [
        "Jord",
        "Jord",
        "Rå jord"
    ],
    "podzol": [
        "Podsol"
    ],
    "purpur_block": [
        "Purpur-blok",
        "Purpur-blok",
        "Udmejslet purpur",
        "Purpur-søjle"
    ],
    "dispenser": [
        "Automat"
    ],
    "doorWood": [
        "Trædør"
    ],
    "double_plant": [
        "Plante",
        "Solsikke",
        "Syren",
        "Dobbelthøjt græs",
        "Stor bregne",
        "Rosenbusk",
        "Pæon"
    ],
    "dragon_egg": [
        "Drageæg"
    ],
    "dropper": [
        "Pipette"
    ],
    "enchanting_table": [
        "Fortryllelsesbord"
    ],
    "enderChest": [
        "Ender-kiste"
    ],
    "end_portal_frame": [
        "End-portal"
    ],
    "farmland": [
        "Landbrugsjord"
    ],
    "fletching_table": [
        "Buemagerbord"
    ],
    "fence": [
        "Egetræshegn"
    ],
    "fence_gate": [
        "Hegnslåge af egetræ"
    ],
    "iron_bars": [
        "Jerntremmer"
    ],
    "fire": [
        "Ild"
    ],
    "yellow_flower": [
        "Blomst",
        "Mælkebøtte"
    ],
    "red_flower": [
        "Blomst",
        "Valmue",
        "Blå orkidé",
        "Blomsterløg",
        "Azurblå kornblomst",
        "Rød tulipan",
        "Orange tulipan",
        "Hvid tulipan",
        "Lyserød tulipan",
        "Hvid okseøje",
        "Kornblomst",
        "Liljekonval"
    ],
    "wither_rose": [
        "Wither-rose"
    ],
    "furnace": [
        "Ovn"
    ],
    "glass": [
        "Glas"
    ],
    "golden_rail": [
        "Strømskinne"
    ],
    "grass": [
        "Græsblok"
    ],
    "grass_path": [
        "Græssti"
    ],
    "gravel": [
        "Grus"
    ],
    "hay_block": [
        "Halmballe"
    ],
    "netherrack": [
        "Nether-sten"
    ],
    "soul_sand": [
        "Sjælesand"
    ],
    "hopper": [
        "Tragt"
    ],
    "ice": [
        "Is"
    ],
    "packed_ice": [
        "Pakket is"
    ],
    "blue_ice": [
        "Blå is"
    ],
    "iron_trapdoor": [
        "Faldlem af jern"
    ],
    "jukebox": [
        "Jukeboks"
    ],
    "jungleFence": [
        "Jungletræshegn"
    ],
    "jungle_fence_gate": [
        "Hegnslåge af jungletræ"
    ],
    "ladder": [
        "Stige"
    ],
    "flowing_lava": [
        "Lava"
    ],
    "leaves2": [
        "Akacieblade",
        "Akacieblade",
        "Blade fra mørk eg"
    ],
    "lever": [
        "Håndtag"
    ],
    "glowstone": [
        "Glødesten"
    ],
    "lit_pumpkin": [
        "Græskarlanterne"
    ],
    "lockedchest": [
        "Låst kiste"
    ],
    "log2": [
        "Kævle af akacietræ",
        "Kævle af akacietræ",
        "Kævle af mørkt egetræ"
    ],
    "log": [
        "Kævle",
        "Kævle af egetræ",
        "Kævle af grantræ",
        "Kævle af birketræ",
        "Kævle af jungletræ"
    ],
    "magma": [
        "Magmablok"
    ],
    "melon_block": [
        "Vandmelon"
    ],
    "mob_spawner": [
        "Monsterfremkalder"
    ],
    "monster_egg": [
        "Inficeret sten",
        "Inficeret sten",
        "Inficeret brosten",
        "Inficeret mursten",
        "Inficeret mosbegroet mursten",
        "Inficeret revnet mursten",
        "Inficeret mejslet mursten"
    ],
    "mushroom": [
        "Svamp"
    ],
    "noteblock": [
        "Nodeblok"
    ],
    "mycelium": [
        "Mycelium"
    ],
    "nether_brick": [
        "Blok af Nether-mursten"
    ],
    "red_nether_brick": [
        "Rød Nether-mursten"
    ],
    "nether_brick_fence": [
        "Hegn af Nether-mursten"
    ],
    "quartz_ore": [
        "Nether-kvartsmalm"
    ],
    "netherreactor": [
        "Nether-reaktorkerne"
    ],
    "nether_wart_block": [
        "Blok af Nether-urt"
    ],
    "warped_wart_block": [
        "Forkvaklet urteblok"
    ],
    "unlit_redstone_torch": [
        "Redstone-fakkel"
    ],
    "redstone_torch": [
        "Redstone-fakkel"
    ],
    "soul_torch": [
        "Sjælefakkel"
    ],
    "obsidian": [
        "Obsidian"
    ],
    "coal_ore": [
        "Kulmalm"
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
        "Jernmalm"
    ],
    "lapis_ore": [
        "Lasurstensmalm"
    ],
    "redstone_ore": [
        "Redstone-malm"
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
        "Klistret stempel"
    ],
    "portal": [
        "Portal"
    ],
    "potatoes": [
        "Kartofler"
    ],
    "stone_pressure_plate": [
        "Trykplade af sten"
    ],
    "wooden_pressure_plate": [
        "Trykplade af egetræ"
    ],
    "acacia_pressure_plate": [
        "Trykplade af akacietræ"
    ],
    "birch_pressure_plate": [
        "Trykplade af birketræ"
    ],
    "dark_oak_pressure_plate": [
        "Trykplade af mørkt egetræ"
    ],
    "jungle_pressure_plate": [
        "Trykplade af jungletræ"
    ],
    "spruce_pressure_plate": [
        "Trykplade af grantræ"
    ],
    "prismarine": [
        "Prismarine",
        "Prismarine",
        "Prismarine-mursten",
        "Mørk prismarine"
    ],
    "pumpkin": [
        "Græskar"
    ],
    "pumpkin_stem": [
        "Græskarstilk"
    ],
    "quartz_block": [
        "Kvartsblok",
        "Kvartsblok",
        "Mejslet kvartsblok",
        "Kvartssøjle",
        "Glat kvartsblok"
    ],
    "rail": [
        "Skinne"
    ],
    "red_mushroom": [
        "Rød svamp"
    ],
    "crimson_fungus": [
        "Karmoisinrød svamp"
    ],
    "warped_fungus": [
        "Forkvaklet svamp"
    ],
    "red_mushroom_block": [
        "Blok af rød svamp"
    ],
    "red_sandstone": [
        "Rød sandsten",
        "Rød sandsten",
        "Mejslet rød sandsten",
        "Tilskåret rød sandsten",
        "Glat rød sandsten"
    ],
    "redstone_wire": [
        "Redstone-pulver"
    ],
    "redstone_lamp": [
        "Redstone-lampe"
    ],
    "sand": [
        "Sand",
        "Sand",
        "Rødt sand"
    ],
    "sandstone": [
        "Sandsten",
        "Sandsten",
        "Mejslet sandsten",
        "Tilskåret sandsten",
        "Glat sandsten"
    ],
    "sapling": [
        "Stikling fra egetræ",
        "Stikling fra egetræ",
        "Stikling fra grantræ",
        "Stikling fra birketræ",
        "Stikling fra jungletræ",
        "Stikling fra akacietræ",
        "Stikling fra mørkt egetræ"
    ],
    "seaLantern": [
        "Havlanterne"
    ],
    "standing_sign": [
        "Skilt"
    ],
    "spruce_standing_sign": [
        "Skilt af grantræ"
    ],
    "birch_standing_sign": [
        "Skilt af birketræ"
    ],
    "jungle_standing_sign": [
        "Skilt af jungletræ"
    ],
    "acacia_standing_sign": [
        "Skilt af akacietræ"
    ],
    "darkoak_standing_sign": [
        "Skilt af mørkt egetræ"
    ],
    "slime": [
        "Slimblok"
    ],
    "snow": [
        "Sne"
    ],
    "sponge": [
        "Svamp",
        "Svamp",
        "Våd svamp"
    ],
    "spruceFence": [
        "Grantræshegn"
    ],
    "spruce_fence_gate": [
        "Hegnslåge af grantræ"
    ],
    "brick_stairs": [
        "Murstenstrappe"
    ],
    "nether_brick_stairs": [
        "Trappe af Nether-mursten"
    ],
    "quartz_stairs": [
        "Kvartstrappe"
    ],
    "smooth_quartz_stairs": [
        "Glat kvartstrappe"
    ],
    "red_sandstone_stairs": [
        "Trappe af rød sandsten"
    ],
    "sandstone_stairs": [
        "Sandstenstrappe"
    ],
    "stone_stairs": [
        "Brostenstrappe"
    ],
    "normal_stone_stairs": [
        "Stentrappe"
    ],
    "stone_brick_stairs": [
        "Stenmurstenstrappe"
    ],
    "oak_stairs": [
        "Trappe af egetræ"
    ],
    "acacia_stairs": [
        "Trappe af akacietræ"
    ],
    "birch_stairs": [
        "Trappe af birketræ"
    ],
    "dark_oak_stairs": [
        "Trappe af mørkt egetræ"
    ],
    "jungle_stairs": [
        "Trappe af jungletræ"
    ],
    "spruce_stairs": [
        "Trappe af grantræ"
    ],
    "purpur_stairs": [
        "Purpur-trappe"
    ],
    "prismarine_stairs": [
        "Prismarinetrappe"
    ],
    "dark_prismarine_stairs": [
        "Trappe af mørk prismarine"
    ],
    "prismarine_bricks_stairs": [
        "Murstenstrappe af prismarine"
    ],
    "granite_stairs": [
        "Granittrappe"
    ],
    "diorite_stairs": [
        "Diorittrappe"
    ],
    "andesite_stairs": [
        "Andesittrappe"
    ],
    "polished_granite_stairs": [
        "Poleret granittrappe"
    ],
    "polished_diorite_stairs": [
        "Poleret diorittrappe"
    ],
    "polished_andesite_stairs": [
        "Poleret andesittrappe"
    ],
    "mossy_stone_brick_stairs": [
        "Mosbegroet stentrappe"
    ],
    "smooth_red_sandstone_stairs": [
        "Glat rød sandstenstrappe"
    ],
    "smooth_sandstone_stairs": [
        "Glat sandstenstrappe"
    ],
    "end_brick_stairs": [
        "End-stenstrappe"
    ],
    "mossy_cobblestone_stairs": [
        "Mosbegroet brostenstrappe"
    ],
    "red_nether_brick_stairs": [
        "Rød Nether-murstenstrappe"
    ],
    "smooth_stone": [
        "Glat sten"
    ],
    "standing_banner": [
        "Banner",
        "Sort banner",
        "Rødt banner",
        "Grønt banner",
        "Brunt banner",
        "Blåt banner",
        "Lilla banner",
        "Blågrønt banner",
        "Lysegråt banner",
        "Gråt banner",
        "Lyserødt banner",
        "Limegrønt banner",
        "Gult banner",
        "Lyseblåt banner",
        "Magentarødt banner",
        "Orange banner",
        "Banner"
    ],
    "stone": [
        "Sten",
        "Sten",
        "Granit",
        "Poleret granit",
        "Diorit",
        "Poleret diorit",
        "Andesit",
        "Poleret andesit"
    ],
    "cobblestone": [
        "Brosten"
    ],
    "stonebrick": [
        "Stenmursten",
        "Stenmursten",
        "Mosbegroede mursten",
        "Mejslede stenmursten"
    ],
    "stonecutter": [
        "Stenskærer"
    ],
    "stonecutter_block": [
        "Stenskærer"
    ],
    "mossy_cobblestone": [
        "Mosbegroet brosten"
    ],
    "double_stone_slab": [
        "Stenflise",
        "Stenflise",
        "Sandstensflise",
        "Træplade",
        "Brostensflise",
        "Murstensflise",
        "Stenmurstensflise",
        "Kvartsflise",
        "Nether-murstensflise"
    ],
    "stone_slab": [
        "Stenflise",
        "Glat stenflise",
        "Sandstensflise",
        "Træplade",
        "Brostensflise",
        "Murstensflise",
        "Stenmurstensflise",
        "Kvartsflise",
        "Nether-murstensflise"
    ],
    "double_stone_slab2": [
        "Rød sandstensflise",
        "Rød sandstensflise"
    ],
    "stone_slab2": [
        "Rød sandstensflise",
        "Rød sandstensflise",
        "Purpur-flise",
        "Prismarineflise",
        "Murstensflise af prismarine",
        "Flise af mørk prismarine",
        "Mosbegroet brostensflise",
        "Glat sandstensflise",
        "Rød Nether-murstensflise"
    ],
    "stone_slab3": [
        "End-stensflise",
        "End-stensflise",
        "Glat rød sandstensflise",
        "Poleret andesitflise",
        "Andesitflise",
        "Dioritflise",
        "Poleret dioritflise",
        "Granitflise",
        "Poleret granitflise"
    ],
    "stone_slab4": [
        "Mosbegroet stenflise",
        "Mosbegroet stenflise",
        "Glat kvartsflise",
        "Stenflise",
        "Tilskåret sandstensflise",
        "Tilskåret rød sandstensflise"
    ],
    "coral_block": [
        "Rørkoralblok",
        "Rørkoralblok",
        "Hjernekoralblok",
        "Boblekoralblok",
        "Ildkoralblok",
        "Hornkoralblok",
        "Død rørkoralblok",
        "Død hjernekoralblok",
        "Død boblekoralblok",
        "Død ildkoralblok",
        "Død hornkoralblok"
    ],
    "tallgrass": [
        "Græs",
        "Græs",
        "Bregne"
    ],
    "seagrass": [
        "Havgræs",
        "Havgræs"
    ],
    "sea_pickle": [
        "Søpølse"
    ],
    "turtle_egg": [
        "Havskildpaddeæg"
    ],
    "coral": [
        "Rørkoral",
        "Rørkoral",
        "Hjernekoral",
        "Boblekoral",
        "Ildkoral",
        "Hornkoral",
        "Død rørkoral",
        "Død hjernekoral",
        "Død boblekoral",
        "Død ildkoral",
        "Død hornkoral"
    ],
    "coral_fan": [
        "Rørkoralvifte",
        "Rørkoralvifte",
        "Hjernekoralvifte",
        "Boblekoralvifte",
        "Ildkoralvifte",
        "Hornkoralvifte"
    ],
    "coral_fan_dead": [
        "Død rørkoralvifte",
        "Død rørkoralvifte",
        "Død hjernekoralvifte",
        "Død boblekoralvifte",
        "Død ildkoralvifte",
        "Død hornkoralvifte"
    ],
    "glass_pane": [
        "Glasrude"
    ],
    "tnt": [
        "TNT"
    ],
    "snow_layer": [
        "Nysne"
    ],
    "torch": [
        "Fakkel"
    ],
    "trapdoor": [
        "Faldlem af egetræ"
    ],
    "acacia_trapdoor": [
        "Faldlem af akacietræ"
    ],
    "birch_trapdoor": [
        "Faldlem af birketræ"
    ],
    "dark_oak_trapdoor": [
        "Faldlem af mørkt egetræ"
    ],
    "jungle_trapdoor": [
        "Faldlem af jungletræ"
    ],
    "spruce_trapdoor": [
        "Faldlem af grantræ"
    ],
    "tripWire": [
        "Snubletråd"
    ],
    "tripwire_hook": [
        "Snubletrådskrog"
    ],
    "vine": [
        "Slyngplanter"
    ],
    "weeping_vines": [
        "Grædende slyngplanter"
    ],
    "twisting_vines": [
        "Snoede slyngplanter"
    ],
    "flowing_water": [
        "Vand"
    ],
    "water": [
        "Vand"
    ],
    "waterlily": [
        "Åkande"
    ],
    "web": [
        "Spindelvæv"
    ],
    "heavy_weighted_pressure_plate": [
        "Vægtbaseret trykplade (tung)"
    ],
    "light_weighted_pressure_plate": [
        "Vægtbaseret trykplade (let)"
    ],
    "end_stone": [
        "End-sten"
    ],
    "end_bricks": [
        "End-stenmursten"
    ],
    "planks": [
        "Træplanker",
        "Egeplanker",
        "Grantræsplanker",
        "Birkeplanker",
        "Jungletræsplanker",
        "Akacietræsplanker",
        "Planker af mørkt egetræ"
    ],
    "wooden_slab": [
        "Træplade",
        "Egetræsplade",
        "Granplade",
        "Birkeplade",
        "Plade af jungletræ",
        "Akacieplade",
        "Plade af mørkt egetræ"
    ],
    "carpet": [
        "Tæppe",
        "Sort tæppe",
        "Rødt tæppe",
        "Grønt tæppe",
        "Brunt tæppe",
        "Blåt tæppe",
        "Lilla tæppe",
        "Blågrønt tæppe",
        "Lysegråt tæppe",
        "Gråt tæppe",
        "Lyserødt tæppe",
        "Limegrønt tæppe",
        "Gult tæppe",
        "Lyseblåt tæppe",
        "Magentarødt tæppe",
        "Orange tæppe",
        "Hvidt tæppe"
    ],
    "crafting_table": [
        "Arbejdsbord"
    ],
    "white_glazed_terracotta": [
        "Hvidglaseret terrakotta",
        "Hvidglaseret terrakotta"
    ],
    "orange_glazed_terracotta": [
        "Orangeglaseret terrakotta",
        "Orangeglaseret terrakotta"
    ],
    "magenta_glazed_terracotta": [
        "Magentarødglaseret terrakotta",
        "Magentarødglaseret terrakotta"
    ],
    "light_blue_glazed_terracotta": [
        "Lyseblåglaseret terrakotta",
        "Lyseblåglaseret terrakotta"
    ],
    "yellow_glazed_terracotta": [
        "Gulglaseret terrakotta",
        "Gulglaseret terrakotta"
    ],
    "lime_glazed_terracotta": [
        "Limegrønglaseret terrakotta",
        "Limegrønglaseret terrakotta"
    ],
    "pink_glazed_terracotta": [
        "Lyserødglaseret terrakotta",
        "Lyserødglaseret terrakotta"
    ],
    "gray_glazed_terracotta": [
        "Gråglaseret terrakotta",
        "Gråglaseret terrakotta"
    ],
    "silver_glazed_terracotta": [
        "Lysegråglaseret terrakotta",
        "Lysegråglaseret terrakotta"
    ],
    "cyan_glazed_terracotta": [
        "Blågrønglaseret terrakotta",
        "Blågrønglaseret terrakotta"
    ],
    "purple_glazed_terracotta": [
        "Lillaglaseret terrakotta",
        "Lillaglaseret terrakotta"
    ],
    "blue_glazed_terracotta": [
        "Blåglaseret terrakotta",
        "Blåglaseret terrakotta"
    ],
    "brown_glazed_terracotta": [
        "Brunglaseret terrakotta",
        "Brunglaseret terrakotta"
    ],
    "green_glazed_terracotta": [
        "Grønglaseret terrakotta",
        "Grønglaseret terrakotta"
    ],
    "red_glazed_terracotta": [
        "Rødglaseret terrakotta",
        "Rødglaseret terrakotta"
    ],
    "black_glazed_terracotta": [
        "Sortglaseret terrakotta",
        "Sortglaseret terrakotta"
    ],
    "concrete": [
        "Hvid beton",
        "Hvid beton",
        "Orange beton",
        "Magentarød beton",
        "Lyseblå beton",
        "Gul beton",
        "Limegrøn beton",
        "Lyserød beton",
        "Grå beton",
        "Lysegrå beton",
        "Blågrøn beton",
        "Lilla beton",
        "Blå beton",
        "Brun beton",
        "Grøn beton",
        "Rød beton",
        "Sort beton"
    ],
    "glazedTerracottaWhite": [
        "Hvidglaseret terrakotta"
    ],
    "glazedTerracottaOrange": [
        "Orangeglaseret terrakotta"
    ],
    "glazedTerracottaMagenta": [
        "Magentarødglaseret terrakotta"
    ],
    "glazedTerracottaLightBlue": [
        "Lyseblåglaseret terrakotta"
    ],
    "glazedTerracottaYellow": [
        "Gulglaseret terrakotta"
    ],
    "glazedTerracottaLime": [
        "Limegrønglaseret terrakotta"
    ],
    "glazedTerracottaPink": [
        "Lyserødglaseret terrakotta"
    ],
    "glazedTerracottaGray": [
        "Gråglaseret terrakotta"
    ],
    "glazedTerracottaSilver": [
        "Lysegråglaseret terrakotta"
    ],
    "glazedTerracottaCyan": [
        "Blågrønglaseret terrakotta"
    ],
    "glazedTerracottaPurple": [
        "Lillaglaseret terrakotta"
    ],
    "glazedTerracottaBlue": [
        "Blåglaseret terrakotta"
    ],
    "glazedTerracottaBrown": [
        "Brunglaseret terrakotta"
    ],
    "glazedTerracottaGreen": [
        "Grønglaseret terrakotta"
    ],
    "glazedTerracottaRed": [
        "Rødglaseret terrakotta"
    ],
    "glazedTerracottaBlack": [
        "Sortglaseret terrakotta"
    ],
    "concretePowder": [
        "Hvidt betonpulver",
        "Hvidt betonpulver",
        "Orange betonpulver",
        "Magentarødt betonpulver",
        "Lyseblåt betonpulver",
        "Gult betonpulver",
        "Limegrønt betonpulver",
        "Lyserødt betonpulver",
        "Gråt betonpulver",
        "Lysegråt betonpulver",
        "Blågrønt betonpulver",
        "Lilla betonpulver",
        "Blåt betonpulver",
        "Brunt betonpulver",
        "Grønt betonpulver",
        "Rødt betonpulver",
        "Sort betonpulver"
    ],
    "stripped_spruce_log": [
        "Afbarket kævle af grantræ"
    ],
    "stripped_dark_oak_log": [
        "Afbarket kævle af mørkt egetræ"
    ],
    "stripped_birch_log": [
        "Afbarket kævle af birketræ"
    ],
    "stripped_jungle_log": [
        "Afbarket kævle af jungletræ"
    ],
    "stripped_oak_log": [
        "Afbarket kævle af egetræ"
    ],
    "stripped_acacia_log": [
        "Afbarket kævle af akacietræ"
    ],
    "bamboo": [
        "Bambus"
    ],
    "scaffolding": [
        "Stillads"
    ],
    "grindstone": [
        "Slibesten"
    ],
    "cartography_table": [
        "Kortbord"
    ],
    "lantern": [
        "Lanterne"
    ],
    "soul_lantern": [
        "Sjælelanterne"
    ],
    "smoker": [
        "Rygeovn"
    ],
    "smithing_table": [
        "Smedjebord"
    ],
    "barrel": [
        "Tønde"
    ],
    "campfire": [
        "Lejrbål"
    ],
    "loom": [
        "Væv"
    ],
    "lectern": [
        "Talerpult"
    ],
    "sweet_berry_bush": [
        "Mirakelbærbusk"
    ],
    "wood": [
        "Egetræ",
        "Egetræ",
        "Grantræ",
        "Birketræ",
        "Jungletræ",
        "Akacietræ",
        "Mørkt egetræ",
        null,
        null,
        "Afbarket egetræ",
        "Afbarket grantræ",
        "Afbarket birketræ",
        "Afbarket jungletræ",
        "Afbarket akacietræ",
        "Afbarket mørkt egetræ"
    ],
    "netherite_block": [
        "Netheritblok"
    ],
    "ancient_debris": [
        "Oldtidsaflejring"
    ],
    "nether_gold_ore": [
        "Nether-guldmalm"
    ],
    "respawn_anchor": [
        "Respawn-anker"
    ],
    "crying_obsidian": [
        "Grædende obsidian"
    ]
}
};
freeze(lang_data);
export = lang_data;

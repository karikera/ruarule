
import { freeze } from './freeze';
import { LangId } from './langid';
const lang_data = {
id: "fi_FI" as LangId,
commands:{
    "ability_description": "Asettaa pelaajan taidon.",
    "ability_noability": "Taitoa \"%1$s\" ei ole käytettävissä",
    "ability_granted": "Sinulle on myönnetty taito \"%1$s\"",
    "ability_revoked": "Taitosi \"%1$s\" on kumottu",
    "ability_success": "Taitoa on päivitetty",
    "achievement_alreadyHave": "Pelaajalla %1$s on jo saavutus %2$s",
    "achievement_description": "Antaa tai poistaa saavutuksen pelaajalta.",
    "achievement_dontHave": "Pelaajalla %1$s ei ole saavutusta %2$s",
    "achievement_give_success_all": "Kaikki saavutukset on annettu onnistuneesti pelaajalle %1$s",
    "achievement_give_success_one": "Tilasto %2$s on annettu onnistuneesti pelaajalle %1$s",
    "achievement_statTooLow": "Pelaajalla %1$s ei ole tilastoa %2$s",
    "achievement_take_success_all": "Kaikki saavutukset on onnistuneesti poistettu pelaajalta %1$s",
    "achievement_take_success_one": "Tilasto %1$s on otettu onnistuneesti pois pelaajalta %2$s",
    "achievement_unknownAchievement": "Tuntematon saavutus tai tilasto \"%1$s\"",
    "agent_attack_success": "Agentin attack onnistui",
    "agent_attack_failed": "Agentin attack epäonnistui",
    "agent_collect_success": "Agentin collect onnistui",
    "agent_collect_failed": "Agentin collect epäonnistui",
    "agent_createagent_success": "Agentti luotiin",
    "agent_createagent_failed": "Agenttia ei voi luoda",
    "agent_destroy_success": "Agentti tuhosi kuution",
    "agent_destroy_failed": "Agentin destroy epäonnistui",
    "agent_detect_success": "Agentin detect onnistui",
    "agent_detect_failed": "Agentin detect epäonnistui",
    "agent_detectredstone_success": "Agentin detectredstone onnistui",
    "agent_detectredstone_failed": "Agent detectredstone epäonnistui",
    "agent_drop_success": "Agentin drop onnistui",
    "agent_drop_failed": "Agentin drop epäonnistui",
    "agent_dropall_success": "Agentin dropall onnistui",
    "agent_dropall_failed": "Agentin dropall epäonnistui",
    "agent_getitemcount_success": "Agentin getitemcount onnistui",
    "agent_getitemcount_failed": "Agentin getitemcount epäonnistui",
    "agent_getitemspace_success": "Agentin getitemspace onnistui",
    "agent_getitemspace_failed": "Agentin getitemspace epäonnistui",
    "agent_getitemdetail_success": "Agentin getitemdetail onnistui",
    "agent_getitemdetail_failed": "Agentin getitemdetail onnistui",
    "agent_getposition_success": "Agentin getposition onnistui",
    "agent_getposition_failed": "Agentin getposition epäonnistui",
    "agent_inspect_success": "Agentin inspect onnistui",
    "agent_inspect_failed": "Agentin inspect epäonnistui",
    "agent_inspectdata_success": "Agentin inspect data onnistui",
    "agent_inspectdata_failed": "Agentin inspect data epäonnistui",
    "agent_move_success": "Agentin move onnistui",
    "agent_move_failed": "Agentin move epäonnistui",
    "agent_outofrange": "Komentoa ei voi antaa, agentti ei ole saavutettavissa",
    "agent_place_success": "Agentin place onnistui",
    "agent_place_failed": "Agentin place epäonnistui",
    "agent_setitem_success": "Agentin set item onnistui",
    "agent_setitem_failed": "Agentin set item epäonnistui",
    "agent_turn_success": "Agentin turn onnistui",
    "agent_turn_failed": "Agentin turn epäonnistui",
    "agent_till_success": "Agentin till onnistui",
    "agent_till_failed": "Agentin till epäonnistui",
    "agent_tpagent_description": "Kaukosiirrä agenttisi.",
    "agent_tpagent_success": "Agentin kaukosiirto onnistui",
    "agent_tpagent_failed": "Agentin kaukosiirto epäonnistui",
    "agent_transfer_success": "Agentin transfer onnistui",
    "agent_transfer_failed": "Agentin transfer epäonnistui",
    "always_day": "Päivä-yö-kierto %1$s",
    "always_day_locked": "Päivä-yö-kierto lukittu",
    "always_day_unlocked": "Päivä-yö-kierto avattu",
    "ban_description": "Lisää pelaajan estolistalle.",
    "autocomplete_a": "kaikki pelaajat",
    "autocomplete_c": "oma Agent",
    "autocomplete_e": "kaikki kohteet",
    "autocomplete_p": "lähin pelaajat",
    "autocomplete_r": "sattumanvarainen pelaaja",
    "autocomplete_s": "itse",
    "autocomplete_v": "kaikki Agentit",
    "ban_failed": "Pelaajaa %1$s ei voitu estää",
    "ban_success": "Pelaaja %1$s estettiin",
    "banip_description": "Lisää IP-osoitteen estolistalle.",
    "banip_invalid": "Olet antanut virheellisen IP-osoitteen tai pelaajan, joka ei ole verkossa",
    "banip_success": "IP-osoite %1$s estetty",
    "banip_success_players": "Estetty pelaajan %2$s IP-osoite %1$s",
    "banlist_ips": "Estettyjä IP-osoitteita on yhteensä %1$d:",
    "banlist_players": "Estettyjä pelaajia on yhteensä %1$d:",
    "blockdata_description": "Muokkaa kuution tietotunnistetta.",
    "blockdata_placeFailed": "Et voi asettaa kuutioita tähän",
    "blockdata_destroyFailed": "Et voi kaivaa tässä",
    "blockdata_failed": "Tietotunniste ei muuttunut: %1$s",
    "blockdata_notValid": "Kohteena oleva kuutio ei ole tietoa kantava kuutio",
    "blockdata_outOfWorld": "Kuutiota ei voi muuttaa maailman ulkopuolella",
    "blockdata_success": "Kuution tiedot päivitetty muotoon: %1$s",
    "blockdata_tagError": "Tietotunnisteen jäsennys epäonnistui: %1$s",
    "bossbar_add_success": "Luotu mukautettu pomopalkki [%1$s]",
    "bossbar_add_failure_invalid": "Virheellinen pomopalkkitunnus. Tunnusten on oltava namespace:id- tai id-muotoisia (Minecraftin nimiavaruuden oletusarvoja).",
    "bossbar_add_failure_exists": "Pomopalkki tunnuksella %1$s on jo olemassa",
    "bossbar_description": "Luo ja muokkaa pomopalkkeja",
    "bossbar_get_max": "Mukautetun pomopalkin [%1$s] enimmäismäärä on %2$d",
    "bossbar_get_players": "Mukautetussa pomopalkissa [%1$s] on tällä hetkellä %2$s pelaajaa online-tilassa: %3$s",
    "bossbar_get_players_none": "Mukautetussa pomopalkissa [%1$s] ei tällä hetkellä ole pelaajia online-tilassa",
    "bossbar_get_players_one": "Mukautetussa pomopalkissa [%1$s] on tällä hetkellä 1 pelaaja online-tilassa: %2$s",
    "bossbar_get_value": "Mukautetun pomopalkin [%1$s] arvo on %2$d",
    "bossbar_get_visible_true": "Mukautettu pomopalkki [%1$s] on näkyvissä",
    "bossbar_get_visible_false": "Mukautettu pomopalkki [%1$s] on piilotettuna",
    "bossbar_list": "Käytössä on %1$s mukautettua pomopalkkia: %2$s",
    "bossbar_list_none": "Mukautettuja pomopalkkeja ei ole käytössä",
    "bossbar_list_one": "Käytössä on 1 mukautettu pomopalkki: %1$s",
    "bossbar_notFound": "Tunnuksella %1$s ei ole olemassa pomopalkkia",
    "bossbar_remove": "Mukautettu pomopalkki [%1$s] poistettiin",
    "change_setting_description": "Muuttaa asianomaisen palvelimen asetusta, kun se on käynnissä.",
    "change_setting_success": "Asetusta %1$s on muutettu",
    "chunkinfo_compiled": "Lohko on laadittu.",
    "chunkinfo_data": "Ensimmäiset 64 pistettä ovat: %1$s",
    "chunkinfo_empty": "Lohko on tyhjä.",
    "chunkinfo_hasLayers": "Lohkossa on kerrokset: %1$s",
    "chunkinfo_hasNoRenderableLayers": "Lohkossa ei ole renderoitavia kerroksia.",
    "chunkinfo_isEmpty": "Lohkossa on tyhjät kerrokset: %1$s",
    "chunkinfo_location": "Lohkon sijainti: (%1$d, %2$d, %3$d)",
    "chunkinfo_noChunk": "Lohkosijainnissa %1$d, %2$d, %3$d ei ole lohkoa",
    "chunkinfo_notCompiled": "Lohkoa ei ole laadittu.",
    "chunkinfo_notEmpty": "Lohko ei ole tyhjä.",
    "chunkinfo_vertices": "Lohkon kerroksen %1$s puskurissa on %2$d pistettä",
    "classroommode_description": "Yritä käynnistää ja yhdistää luokkahuonetilaan.",
    "classroommode_success": "Yritetään käynnistää luokkahuonetilaan...",
    "clear_description": "Poistaa esineet pelaajan tavaraluettelosta.",
    "clear_failure": "Tavaraluetteloa ei voitu tyhjentää %1$s-esineistä",
    "clear_failure_no_items": "Tavaraluetteloa ei voitu tyhjentää %1$s-esineistä, niitä ei ole",
    "clear_success": "Tavaraluettelo tyhjennettiin %1$s-esineistä, %2$d esinettä poistettiin",
    "clear_tagError": "Tietotunnisteen jäsennys epäonnistui: %1$s",
    "clear_testing": "Pelaajalla %1$s on %2$d esinettä, jotka täyttävät ehdot",
    "clearfixedinv_description": "Poistaa kaikki määritetyt tavaraluettelon paikat.",
    "clearfixedinv_success": "Määritetty tavaraluettelo tyhjennettiin",
    "clone_description": "Kloonaa kuutioita yhdeltä alueelta toiselle.",
    "clone_failed": "Kuutioita ei kloonattu",
    "clone_filtered_error": "Suodatettu käyttö edellyttää suodatinkuution määrittämistä",
    "clone_noOverlap": "Lähde ja kohde eivät voi olla päällekkäin",
    "clone_outOfWorld": "Kuutioita ei voi käsitellä maailman ulkopuolella",
    "clone_success": "Kloonattiin %1$s kuutiota",
    "clone_tooManyBlocks": "Määritetyllä alueella (%1$d > %2$d) on liikaa kuutioita",
    "closechat_description": "Sulkee paikallisen pelaajan chatti-ikkunan, jos se on auki.",
    "closechat_success": "Chatti suljettu",
    "closechat_failure": "Chatti ei ollut auki",
    "closewebsocket_description": "Sulkee websocket-yhteyden, jos sellainen on.",
    "code_description": "Käynnistää Koodinrakentajan.",
    "code_success": "Koodinrakentaja käynnistetty.",
    "compare_failed": "Lähde ja kohde eivät ole identtisiä",
    "compare_outOfWorld": "Kuutioita ei voi käsitellä maailman ulkopuolella",
    "compare_success": "%1$d kuutiota vertailtu",
    "compare_tooManyBlocks": "Määritetyllä alueella (%1$d > %2$d) on liikaa kuutioita",
    "corruptworld_description": "Vahingoittaa palvelimelle ladattua maailmaa.",
    "corruptworld_success": "Maailmaa vahingoitettiin onnistuneesti.",
    "daylock_description": "Lukitsee ja avaa päivä-yö-kierron.",
    "debug_description": "Aloittaa tai lopettaa vianetsinnän.",
    "debug_notStarted": "Profilointia ei voi lopettaa, kun emme ole aloittaneetkaan vielä!",
    "debug_start": "Vianetsintäprofilointi aloitettu",
    "debug_stop": "Vianetsintäprofilointi lopetettiin %.2f sekunnin (%1$d sykäyksen) jälkeen",
    "defaultgamemode_description": "Asettaa pelin oletustilan.",
    "defaultgamemode_success": "Maailman oletuspelimuoto on nyt %1$s",
    "deop_description": "Peruu pelaajan operaattoristatuksen.",
    "deop_failed": "Ei voitu poistaa operaattorin käyttöoikeuksia (liian korkea lupataso): %s",
    "deop_success": "Op poistettu: %s",
    "deop_message": "Op:si on poistettu",
    "difficulty_description": "Asettaa vaikeustason.",
    "difficulty_usage": "/difficulty <new difficulty>",
    "difficulty_success": "Pelin vaikeustasoksi asetettu %1$s",
    "downfall_success": "Vaihdettu sademuotoa",
    "effect_description": "Lisää tai poista statusvaikutuksia.",
    "effect_failure_notActive": "Vaikutusta %1$s ei voitu poistaa pelaajalta %2$s, koska hänellä ei ole tätä vaikutusta",
    "effect_failure_notActive_all": "Pelaajalta %1$s ei voi poistaa vaikutuksia, koska hänellä ei ole sellaisia",
    "effect_failure_notAMob": "%1$s ei voi sisältää vaikutuksia",
    "effect_notFound": "Hirviövaikutusta tunnuksella %s ei ole",
    "effect_success": "Annettiin %1$s * %2$d pelaajalle %3$s for %4$d sekunniksi",
    "effect_success_removed": "Otettiin %1$s pelaajalta %2$s",
    "effect_success_removed_all": "Poistettiin kaikki vaikutukset pelaajalta %1$s",
    "enchant_cantCombine": "Vaikutusta %1$s ei voi yhdistää vaikutukseen %2$s",
    "enchant_invalidLevel": "%1$s ei tue tasoa %2$d",
    "enchant_cantEnchant": "Valittua lumousta ei voi lisätä kohteena olevaan esineeseen: %1$s",
    "enchant_description": "Lisää lumouksen pelaajan valitsemaan esineeseen.",
    "enchant_noItem": "Kohteessa ei ole esinettä: %1$s",
    "enchant_notFound": "Lumousta tunnuksella %1$s ei ole",
    "enchant_success": "Kohteen %1$s lumous onnistui",
    "entitydata_description": "Muokkaa kohteen tietotunnistetta.",
    "entitydata_failed": "Tietotunniste ei muuttunut: %1$s",
    "entitydata_noPlayers": "%1$s on pelaaja eikä häntä voi vaihtaa",
    "entitydata_success": "Tahon tiedot päivitetty muotoon: %1$s",
    "entitydata_tagError": "Tietotunnisteen jäsennys epäonnistui: %1$s",
    "execute_allInvocationsFailed": "Kaikki manaukset epäonnistuivat: \"%1$s\"",
    "execute_failed": "Komennon \"%1$s\" suorittaminen muodossa %2$s epäonnistui",
    "execute_description": "Suorittaa komennon yhden tai useamman tahon puolesta.",
    "fill_description": "Täyttää alueen tai osan alueesta tietyllä kuutiolla.",
    "fill_failed": "Kuutioita ei asetettu",
    "fill_outOfWorld": "Kuutioita ei voi asettaa maailman ulkopuolelle",
    "fill_success": "%1$d kuutiota asetettu",
    "fill_tagError": "Tietotunnisteen jäsennys epäonnistui: %1$s",
    "fill_tooManyBlocks": "Määritetyllä alueella (%1$d > %2$d) on liikaa kuutioita",
    "fill_replace_auxvalue_invalid": "Virheellinen korvaava tietoarvo kuutiolle %1$s",
    "function_description": "Suorittaa vastaavan toimintotiedoston komentoja.",
    "function_functionNameNotFound": "Toimintoa %1$s ei löydetty.",
    "function_invalidCharacters": "Toiminto nimeltä %s ei ole kelvollinen, merkki %s ei ole sallittu toimintojen nimissä.",
    "function_noEngineVersionSpecified": "Toimintoa %s ei voitu suorittaa. Sinun on määritettävä min_engine_version käyttäytymispaketin manifest.json-tiedostossa.",
    "function_success": "%1$d toimintosyötettä suoritettu onnistuneesti.",
    "gamemode_description": "Asettaa pelaajan pelitilan.",
    "gamemode_success_other": "Aseta pelaajan %2$s pelimuodoksi %1$s",
    "gamemode_success_self": "Aseta omaksi pelimuodoksi %1$s",
    "gamemode_fail_invalid": "Pelimuoto \"%1$s\" on virheellinen",
    "gamerule_description": "Asettaa pelisäännön arvon tai kysyy sitä.",
    "gamerule_type_invalid": "Pelisäännössä \"%1$s\" käytetty virheellistä tyyppiä",
    "gamerule_type_nocheatsenabled": "Pelisääntöä \"%1$s\" voi käyttää vain, jos huijauskoodit ovat käytössä tässä maailmassa.",
    "gamerule_nopermission": "Vain palvelimenomistajat voivat muuttaa sääntöä \"%1$s\"",
    "gamerule_norule": "Pelisääntöä nimellä \"%1$s\" ei ole käytettävissä",
    "gamerule_success": "Pelisääntö %1$s on päivitetty muotoon %2$s",
    "generic_async_initiated": "Komento \"%1$s\" aloitettu (asynkronoitu vaihe %2$d)",
    "generic_boolean_invalid": "\"%1$s\" ei ole tosi tai epätosi",
    "generic_chunk_notFound": "Määritettyä lohkoa ei löydetty",
    "generic_componentError": "Komponenttiluettelon jäsennys epäonnistui",
    "generic_dimension_notFound": "Määritettyä ulottuvuutta ei löydetty",
    "generic_disabled": "Huijauskoodit eivät ole käytössä tällä tasolla.",
    "generic_disabled_templateLocked": "Asetukset ovat lukittuna. Avaa mallimaailma-asetukset peliasetuksista, jotta voit muuttaa niitä.",
    "generic_double_tooBig": "Antamasi luku (%.2f) on liian suuri, se saa olla enintään %.2f",
    "generic_double_tooSmall": "Antamasi luku (%.2f) on liian pieni, sen on oltava vähintään %.2f",
    "generic_duplicateType": "Kopioi tyypin argumentit",
    "generic_duplicateSelectorArgument": "Kopioi haun %s argumentit",
    "generic_encryption_badkey": "Virheellinen julkinen avain syötetty. Odotettu avain PEM-alustuksen jälkeen 120 tavua.",
    "generic_encryption_badsalt": "Virheellinen suola syötetty. Odotettu 16 tavua ennen base 64 -enkoodausta.",
    "generic_encryption_required": "Vaaditaan salattu istunto",
    "generic_entity_invalidType": "Entiteettityyppi \"%1$s\" on virheellinen",
    "generic_entity_invalidUuid": "Annettu entiteetin UUID on virheellisessä muodossa",
    "generic_entity_notFound": "Entiteettiä ei löydy",
    "generic_exception": "Tämän komennon suorittamisen yhteydessä tapahtui tuntematon virhe",
    "generic_invalidAgentType": "Tyypin argumentti otettiin käyttöön vain Agentin valitsimessa",
    "generic_invalidcontext": "Annettu virheellinen konteksti syötetylle komentotyypille",
    "generic_invalidDevice": "Tämä laite ei tue syöttämääsi komentoa, %s.",
    "generic_invalidPlayerType": "Tyypin argumentti otettiin käyttöön vain pelaajien haussa",
    "generic_invalidType": "Tuntematon tyypin argumentti",
    "generic_levelError": "Maksimitason on oltava suurempi kuin minimitason",
    "generic_malformed_body": "Keho puuttuu tai on epämuodostunut",
    "generic_malformed_type": "Virheellinen pyyntötyyppi",
    "generic_notimplemented": "Ei toteutettuna",
    "generic_num_invalid": "\"%1$s\" ei ole hyväksyttävä luku",
    "generic_num_tooBig": "Antamasi luku (%1$d) on liian suuri, se saa olla enintään %2$d",
    "generic_num_tooSmall": "Antamasi luku (%1$d) on liian pieni, sen on oltava vähintään %2$d",
    "generic_parameter_invalid": "\"%1$s\" ei ole hyväksyttävä parametri",
    "generic_permission_selector": "<puutteelliset oikeudet haun laajennukseen>",
    "generic_player_notFound": "Pelaajaa ei löydy",
    "generic_protocol_mismatch": "Annettu protokollaversio ei vastaa Minecraftin protokollaversiota",
    "generic_radiusError": "Haun minimisäteen on oltava pienempi kuin maksimin",
    "generic_radiusNegative": "Säde ei voi olla negatiivinen",
    "generic_rotationError": "Kierto ei ole saavutettavissa",
    "generic_running": "Komento on jo käynnissä",
    "generic_step_failed": "Komentovaihe epäonnistui",
    "generic_syntax": "Syntaksivirhe: Odottamaton \"%2$s\": kohteessa \"%1$s>>%2$s<<%3$s\"",
    "generic_noTargetMatch": "Yksikään kohde ei vastannut hakua",
    "generic_targetNotPlayer": "Haun on oltava pelaajatyyppi",
    "generic_tooManyNames": "Liian monta kohdenimen argumenttia",
    "generic_tooManyTargets": "Liian moni kohde vastasi hakua",
    "generic_too_many_requests": "Komentoja on annettu liikaa, odota, että yksi on suoritettu loppuun",
    "generic_unknown": "Tuntematon komento: %s. Varmista, että komento on olemassa ja että sinulla on oikeus käyttää sitä.",
    "generic_usage": "Käyttö: %1$s",
    "generic_usage_noparam": "Käyttö:",
    "generic_version_mismatch": "Annettua versiota tästä komennosta ei ole olemassa",
    "generic_version_missing": "Muualla kuin chatissa annetuissa komennoissa on määritettävä komennon versio",
    "getchunkdata_description": "Näyttää tietyn lohkon pikselit.",
    "getchunkdata_success": "Lohkotiedot on vastaanotettu",
    "getchunks_description": "Näyttää ladattujen lohkojen luettelon.",
    "getchunks_success": "Lohkoluettelo on vastaanotettu",
    "getlocalplayername_description": "Palauttaa paikallisen pelaajanimen.",
    "getspawnpoint_description": "Näyttää määritettyjen pelaajien luontikohdat.",
    "gettopsolidblock_description": "Hakee määritetyssä kohdassa ylimpänä olevan ei-ilmakuution paikan",
    "gettopsolidblock_notfound": "Määritetyssä paikassa ei ole kiinteitä kuutioita",
    "give_block_notFound": "Nimellä %1$d ei ole kuutiota",
    "give_description": "Antaa esineen pelaajalle.",
    "give_item_invalid": "Virheellinen komennon syntaksi: %s ei ole olemassa kyseisellä arvolla",
    "give_item_notFound": "Esinettä nimellä %1$d ei ole",
    "give_map_invalidData": "Virheelliset karttatiedot",
    "give_map_featureNotFound": "Tutkimuskarttaa ei voitu luoda. Ominaisuus ei löydy tästä ulottuvuudesta.",
    "give_success": "Annettiin %1$s * %2$d pelaajalle %3$s",
    "give_successRecipient": "Sinulle on annettu %1$s * %2$d",
    "give_tagError": "Tietotunnisteen jäsennys epäonnistui: %1$s",
    "help_description": "Antaa apua/komentoluettelon.",
    "help_footer": "Vihje: Täydennä komento tai sen argumentit automaattisesti käyttämällä painiketta <tab>, kun kirjoitat komentoa",
    "help_header": "--- Näytetään ohjesivu %1$d/%2$d (/help <page>) ---",
    "help_command_aliases": "%s (myös %s):",
    "immutableworld_description": "Asettaa maailman muuttumattoman tilan.",
    "immutableworld_info": "immutableworld = %s",
    "kick_description": "Poistaa pelaajan palvelimelta.",
    "kick_description_edu": "Poistaa pelaajan pelistä.",
    "kick_not_found": "Ei löydetty pelaajaa %1$s",
    "kick_not_yourself": "Et voi poistaa itseäsi pelistä",
    "kick_success": "%1$s poistettiin pelistä",
    "kick_success_reason": "Poistettiin %1$s pelistä: \"%2$s\"",
    "kick_success_reasonedu": "Poistettiin %1$s pelistä: %2$s",
    "kick_no_host": "Isäntää ei voi poistaa pelistä.",
    "kick_no_teacher": "Opettajia ei voi poistaa pelistä.",
    "kill_successful_edu": "%1$s poistettu",
    "kill_successful": "%1$s tapettu",
    "kill_description_edu": "Poistaa kohteita (pelaajia, hirviöitä, jne.).",
    "kill_description": "Tappaa kohteita (pelaajia, hirviöitä, jne.).",
    "list_description": "Antaa luettelon palvelimella olevista pelaajista.",
    "locate_description": "Näyttää tietyn rakenteen lähimmän esiintymispaikan koordinaatit.",
    "locate_fail_noplayer": "Vain hyväksytty pelaaja voi käyttää komentoa",
    "locate_fail_nostructurefound": "Tässä ulottuvuudessa ei ole hyväksyttävää rakennetta",
    "locate_success": "Lähin %1$s on kuution %2$s, (y?), %3$s kohdalla",
    "togglecontentlog_toggle": "Ottaa käyttöön sisältölokikomennon tai poistaa sen käytöstä",
    "togglecontentlog_enabled": "Sisältöloki käytössä",
    "togglecontentlog_disabled": "Sisältöloki ei käytössä",
    "me_description": "Näyttää viestin sinusta.",
    "message_display_incoming": "%1$s kuiskaa sinulle: %2$s",
    "message_display_outgoing": "Kuiskaat pelaajalle %1$s: %2$s",
    "message_sameTarget": "Et voi lähettää yksityisviestiä itsellesi!",
    "mixer_description": "Mixer-interaktiivisuuden ohjaus",
    "mixer_error_unknown": "Tuntematon Mixer-virhe.",
    "mixer_error_notoken": "Sinun on oltava kirjautuneena Microsoft-tilillä, jotta voit ottaa Mixer-interaktiivisuuden käyttöön.",
    "mixer_error_notsupported": "Käyttämäsi laite ei tue Mixer-interaktiivisuutta.",
    "mixer_interactive_error": "Tapahtui Mixer-virhe: %1$s",
    "mixer_scene_failed": "Kohtausta nimellä %1$s ei ole. Varmista, että olet antanut kohtauksen nimen oikein.",
    "mixer_scene_success": "Kohtaus muutettu muotoon: %1$s",
    "mixer_start_success": "Mixer-interaktiivisuus alkaa: %1$s",
    "mixer_start_fail_invalidCode": "Projektia tunnuksella \"%1$s\" ei löytynyt. Varmista, että tunnus tai jakokoodi on oikein.",
    "mixer_stop_success": "Mixer-interaktiivisuus keskeytetty.",
    "mixer_stop_fail": "Ei lopetettavaa interaktiivista istuntoa.",
    "mixer_status_notinitialized": "Interaktiivisuutta ei ole alustettu.",
    "mixer_status_enabled": "Interaktiivisuus on käytössä.",
    "mixer_status_initializing": "Interaktiivisuutta alustetaan.",
    "mixer_status_pending": "Interaktiivisuutta odotetaan.",
    "mixer_status_disabled": "Interaktiivisuus ei ole käytössä.",
    "mixer_activatedbutton": "%1$s aktivoi %2$s.",
    "mobevent_description": "Valitsee, mitä hirviötapahtumia voidaan käyttää.",
    "mobevent_eventsEnabledSetToTrue": "Hirviötapahtumat ovat nyt käytössä. Yksittäisiä tapahtumia, joille on valittu epätosi-arvo, ei suoriteta.",
    "mobevent_eventsEnabledSetToFalse": "Hirviötapahtumat on nyt poistettu käytöstä. Yksittäisiä tapahtumia ei suoriteta.",
    "mobevent_eventsEnabledIsTrue": "Hirviötapahtumat ovat käytössä. Yksittäisiä tapahtumia, joille on valittu epätosi-arvo, ei suoriteta.",
    "mobevent_eventsEnabledIsFalse": "Hirviötapahtumat on poistettu käytöstä. Yksittäisiä tapahtumia ei suoriteta.",
    "mobevent_eventSetToTrue": "Hirviötapahtuman %s (tunnus: %s) arvoksi määritetty tosi.",
    "mobevent_eventSetToTrueButEventsDisabled": "Hirviötapahtuman %s (tunnus: %s) arvoksi määritetty tosi, mutta hirviötapahtumat on poistettu käytöstä.",
    "mobevent_eventSetToFalse": "Hirviötapahtuman %s (tunnus: %s) arvoksi määritetty epätosi.",
    "mobevent_eventIsTrue": "Hirviötapahtuman %s (tunnus: %s) arvoksi on määritetty tosi.",
    "mobevent_eventIsTrueButEventsDisabled": "Hirviötapahtuman %s (tunnus: %s) arvoksi on määritetty tosi, mutta hirviötapahtumat on poistettu käytöstä.",
    "mobevent_eventIsFalse": "Hirviötapahtuman %s (tunnus: %s) arvoksi on määritetty epätosi.",
    "op_description": "Myöntää pelaajalle operaattorin statuksen.",
    "op_failed": "Ei voitu antaa op:tä (jo operaattori tai ylempi rooli): %s",
    "op_success": "Annettu op pelaajalle: %s",
    "op_message": "Sinulle on annettu op",
    "origin_commandblock": "KomentoKuutio",
    "origin_external": "Ulkoinen",
    "origin_devconsole": "DevConsole",
    "origin_script": "Komentosarjamoottori",
    "origin_server": "Palvelin",
    "origin_teacher": "Opettaja",
    "ops_description": "Lataa uudelleen ja ottaa käyttöön op-oikeudet.",
    "ops_reloaded": "Op:t ladattu uudelleen tiedostosta.",
    "ops_set_success": "Operaattoritason asettaminen pelaajalle %s onnistui.",
    "permissions_description": "Lataa uudelleen ja ottaa luvat käyttöön.",
    "permissions_reloaded": "Luvat ladattu uudelleen tiedostosta.",
    "permissions_set_failed": "Käyttöoikeustasoa %s ei voitu asettaa pelaajalle %s.",
    "permissions_set_success": "Käyttöoikeustason %s asettaminen pelaajalle %s onnistui.",
    "permissions_save_failed": "Käyttöoikeustasoa %s ei voitu tallentaa pelaajalle %s.",
    "permissions_save_success": "Käyttöoikeustason %s tallentaminen pelaajalle %s onnistui.",
    "spawnParticleEmitter_description": "Luo partikkeliefektin",
    "particle_description": "Luo hiukkasia.",
    "particle_notFound": "Tuntematon vaikutuksen nimi (%1$s)",
    "particle_success": "Näytetään tehoste %1$s %2$d kertaa",
    "players_list": "Online-tilassa %1$d/%2$d pelaajaa:",
    "players_list_names": "%s",
    "playsound_description": "Toistaa äänen.",
    "playsound_playerTooFar": "Pelaaja %1$s on liian kaukana kuullakseen äänen",
    "playsound_success": "Soitettiin ääni \"%1$s\" pelaajalle %2$s",
    "position_description": "Kytkee pelaajan koordinaatit päälle/pois.",
    "publish_failed": "Paikallista peliä ei voi isännöidä",
    "publish_started": "Paikallinen peli isännöidään portissa %1$s",
    "querytarget_description": "Näyttää määritettyjen kohteiden muunnos-, nimi- ja tunnustiedot.",
    "querytarget_success": "Kohdetiedot: %1$s",
    "reload_description": "Lataa uudelleen kaikkien käyttäytymispakettien kaikki toimintotiedostot.",
    "reload_success": "Olemassa olevat toimintotiedostot on ladattu uudelleen. Lataa UUDET toiminnot käynnistämällä Minecraft uudelleen.",
    "replaceitem_description": "Korvaa esineitä tavaraluettelossa.",
    "replaceitem_failed": "%s-paikkaa %d ei voitu korvata paikalla %d * %s",
    "replaceitem_keepFailed": "Kohteen %s paikassa %d on jo esine.",
    "replaceitem_noContainer": "Kuutio sijainnissa %s ei ole säiliö",
    "replaceitem_badSlotNumber": "Ei voitu korvata paikkaa %d, sen on oltava arvo välillä %d−%d.",
    "replaceitem_success": "Korvattu %s-paikka %d paikalla %d * %s",
    "replaceitem_success_entity": "Korvattu %s-paikka %d/%s paikalla %d * %s",
    "replaceitem_tagError": "Tietotunnisteen jäsennys epäonnistui: %1$s",
    "save_description": "Hallitse tai tarkista, miten peli tallentaa tietoja levylle.",
    "save_disabled": "Maailmojen automaattinen tallennus otettu pois käytöstä",
    "save_enabled": "Maailmojen automaattinen tallennus otettu käyttöön",
    "save_failed": "Tallennus epäonnistui: %1$s",
    "save_start": "Tallennetaan…",
    "save_success": "Maailma tallennettu",
    "save_all_error": "Tason tallennuksen pysäyttämisessä tapahtui virhe.",
    "save_all_success": "Tiedot tallennettu. Tiedostot ovat valmiina kopioitavaksi.",
    "save_off_alreadyOff": "Tallennus on jo poistettu käytöstä.",
    "save_on_alreadyOn": "Tallennus on jo otettu käyttöön.",
    "save_on_notDone": "Edellistä tallennusta ei ole suoritettu loppuun.",
    "save_on_description": "Ottaa automaattisen palvelintallennuksen käyttöön.",
    "save_on_success": "Muutokset tasoon säilytetään.",
    "save_state_description": "Tarkistaa, mikäli edellinen täystallennus on suoritettu, ja listaa kaikki siihen liittyvät tiedostot.",
    "say_description": "Lähettää chatissa viestin muille pelaajille.",
    "scoreboard_description": "Seuraa ja näyttää eri tavoitteiden pistemääriä.",
    "scoreboard_allMatchesFailed": "Kaikki toimet epäonnistuivat",
    "scoreboard_noMultiWildcard": "Vain yksi käyttäjä-villikortti sallittu",
    "scoreboard_objectiveNotFound": "Yhtään tavoitetta nimellä \"%1$s\" ei löydetty",
    "scoreboard_objectiveReadOnly": "Tavoite \"%1$s\" on vain luku -tavoite eikä sitä voida muuttaa",
    "scoreboard_objectives_add_alreadyExists": "Tavoite nimellä \"%1$s\" on jo olemassa",
    "scoreboard_objectives_add_displayTooLong": "Näytettävä nimi \"%1$s\" on liian pitkä tavoitteelle, se saa olla pituudeltaan enintään %2$d merkkiä",
    "scoreboard_objectives_add_success": "Uusi tavoite \"%1$s\" lisätty onnistuneesti",
    "scoreboard_objectives_add_tooLong": "Nimi \"%1$s\" on liian pitkä tavoitteelle, se saa olla pituudeltaan enintään %2$d merkkiä",
    "scoreboard_objectives_add_wrongType": "Virheellinen tavoitekriteerin tyyppi \"%1$s\"",
    "scoreboard_objectives_add_needName": "Tavoitteella on oltava nimi.",
    "scoreboard_objectives_description": "Muokkaa pistetaulukon tavoitteita.",
    "scoreboard_objectives_list_count": "Näytetään %1$d tavoite(tta) tulostaululla:",
    "scoreboard_objectives_list_empty": "Tulostaululla ei ole tavoitteita",
    "scoreboard_objectives_list_entry": "- %1$s: näkyy muodossa \"%2$s\" ja on tyyppiä \"%3$s\"",
    "scoreboard_objectives_remove_success": "Tavoite \"%1$s\" poistettu onnistuneesti",
    "scoreboard_objectives_setdisplay_invalidSlot": "Näyttöpaikkaa \"%1$s\" ei ole",
    "scoreboard_objectives_setdisplay_successCleared": "Tyhjennettiin näytettävän tavoitteen paikka \"%1$s\"",
    "scoreboard_objectives_setdisplay_successSet": "Muutetaan näytettävä tavoite paikassa \"%1$s\" muotoon \"%2$d\"",
    "scoreboard_players_add_success": "Lisätty %1$d tavoitteeseen [%2$s] pelaajalla %3$s (nyt %4$d)",
    "scoreboard_players_add_multiple_success": "Lisätty %1$d tavoitteeseen [%2$s] %3$d pelaajalla",
    "scoreboard_players_nameNotFound": "Pelaajan nimi on annettava.",
    "scoreboard_players_enable_noTrigger": "Tavoite %1$s ei ole käynnistin",
    "scoreboard_players_enable_success": "Otettu käyttöön käynnistin %1$s tapahtumalle %2$s",
    "scoreboard_players_list_count": "Näytetään %1$d seurattua pelaajaa tulostaululla:",
    "scoreboard_players_list_empty": "Tulostaululla ei ole seurattuja pelaajia",
    "scoreboard_players_list_player_count": "Näytetään %1$d pelaajan %2$s seurattua tavoitetta:",
    "scoreboard_players_list_player_empty": "Pelaajalla %1$s ei ole tallennettuja tuloksia",
    "scoreboard_players_list_player_entry": "- %2$s: %1$d (%3$s)",
    "scoreboard_players_operation_invalidOperation": "Virheellinen toimi %1$s",
    "scoreboard_players_operation_notFound": "Pelaajalle %1$s ei löydy %2$s-tulosta",
    "scoreboard_players_operation_success": "Päivitettiin tavoitetta [%1$s] %2$d pelaajalla",
    "scoreboard_players_offlinePlayerName": "Pelaaja offline-tilassa",
    "scoreboard_players_random_invalidRange": "Vähintään %1$d ei ole vähemmän kuin enintään %2$d",
    "scoreboard_players_remove_success": "Vähennetty %1$d tavoitteesta [%2$s] pelaajalla %3$s (nyt %4$d)",
    "scoreboard_players_remove_multiple_success": "Poistettu %1$d tavoitteesta [%2$s] %3$d pelaajalla",
    "scoreboard_players_reset_success": "Nollattiin pelaajan %1$s tulokset",
    "scoreboard_players_resetscore_success": "Nollattiin pelaajan %2$s tulos %1$s",
    "scoreboard_players_set_success": "Aseta [%1$s] pelaajalla %2$s arvoon %3$d",
    "scoreboard_players_set_multiple_success": "Aseta [%1$s] %2$d pelaajalla arvoon %3$d",
    "scoreboard_players_set_tagError": "TietoTunnusta ei voitu jäsentää, syy: %1$s",
    "scoreboard_players_set_tagMismatch": "TietoTunnus ei vastaa pelaajaa %1$s",
    "scoreboard_players_score_notFound": "Pelaajalle %1$s ei löydy %2$s-tulosta",
    "scoreboard_players_test_failed": "Tulos %1$s EI ole välillä %2$s−%3$s",
    "scoreboard_players_test_success": "Tulos %1$s on välillä %2$s−%3$s",
    "scoreboard_teamNotFound": "Nimellä \"%1$s\" ei löydy joukkuetta",
    "scoreboard_teams_add_alreadyExists": "Joukkue nimellä \"%1$s\" on jo olemassa",
    "scoreboard_teams_add_displayTooLong": "Näkyvä nimi \"%1$s\" on liian pitkä joukkueelle, se saa olla pituudeltaan enintään %2$s merkkiä",
    "scoreboard_teams_add_success": "Uusi joukkue \"%1$s\" lisättiin onnistuneesti",
    "scoreboard_teams_add_tooLong": "Nimi \"%1$s\" on liian pitkä joukkueelle, se saa olla pituudeltaan enintään %2$d merkkiä",
    "scoreboard_teams_empty_alreadyEmpty": "Joukkue %1$s on jo tyhjä, olemattomia pelaajia ei voi poistaa",
    "scoreboard_teams_empty_success": "Poistettiin kaikki %1$d pelaajaa joukkueesta %2$d",
    "scoreboard_teams_join_failure": "Joukkueeseen %2$s ei voitu lisätä %1$d pelaajaa: %3$s",
    "scoreboard_teams_join_success": "Lisätty %1$d pelaaja(a) joukkueeseen %2$s: %3$s",
    "scoreboard_teams_leave_failure": "Ei voitu poistaa %1$d pelaajaa joukkueistaan: %2$s",
    "scoreboard_teams_leave_noTeam": "Et ole joukkueessa",
    "scoreboard_teams_leave_success": "Poistettiin %1$d pelaaja(a) joukkueesta %2$d",
    "scoreboard_teams_list_count": "Näytetään %1$d joukkuetta tulostaululla:",
    "scoreboard_teams_list_empty": "Tulostaululle ei ole rekisteröitynyt joukkueita",
    "scoreboard_teams_list_entry": "- %1$s: joukkueessa \"%2$s\" on %3$d pelaajaa",
    "scoreboard_teams_list_player_count": "Näytetään %1$d pelaajaa joukkueessa %2$s:",
    "scoreboard_teams_list_player_empty": "Joukkueessa %1$s ei ole pelaajia",
    "scoreboard_teams_list_player_entry": "- %2$s: %1$d (%3$s)",
    "scoreboard_teams_option_noValue": "Hyväksyttäviä arvoja asetukselle %1$s ovat: %2$s",
    "scoreboard_teams_option_success": "Muuta joukkueen %1$s asetus %2$s arvoon %3$s",
    "scoreboard_teams_remove_success": "Poistettu joukkue %1$s",
    "seed_success": "Siemen: %1$s",
    "setblock_description": "Muuttaa kuution toisenlaiseksi kuutioksi.",
    "setblock_failed": "Kuutiota ei voi asettaa",
    "setblock_noChange": "Kuutiota ei voitu asettaa",
    "setblock_notFound": "Tunnuksella/nimellä %1$s ei ole kuutiota",
    "setblock_outOfWorld": "Kuutiota ei voi muuttaa maailman ulkopuolella",
    "setblock_success": "Kuutio asetettu",
    "setblock_tagError": "Tietotunnisteen jäsennys epäonnistui: %1$s",
    "setidletimeout_success": "Odotuksen aikakatkaisu asetettu onnistuneesti %1$d minuuttiin.",
    "setfixedinvslots_description": "Asettaa määritettyjen tavaraluettelopaikkojen määrän tällä palvelimella.",
    "setfixedinvslots_success": "Määritettyjen tavaraluettelopaikkojen määrä asetettu arvoon %1$d",
    "setfixedinvslot_description": "Asettaa määritetylle esineelle tietyn paikan.",
    "setfixedinvslot_success": "Määritetty tavaraluettelopaikka %1$d asetettu arvoon %2$s",
    "globalpause_description": "Asettaa tai näyttää pelin pysäytystilan kaikille pelaajille.",
    "globalpause_success": "Pysäytystila asetettu tai näytetty",
    "setmaxplayers_description": "Asettaa tämän peli-istunnon pelaajien enimmäismäärän.",
    "setmaxplayers_success": "Asettaa pelaajien enimmäismäärän arvoon %1$d.",
    "setmaxplayers_success_upperbound": "(Määräytyy sallittujen yhteyksien enimmäismäärän mukaan)",
    "setmaxplayers_success_lowerbound": "(Määräytyy nykyisen pelaajamäärän mukaan)",
    "setworldspawn_description": "Asettaa maailman luontikohdan.",
    "setworldspawn_success": "Aseta maailman paluupaikaksi (%1$d, %2$d, %3$d)",
    "setworldspawn_wrongDimension": "Maailman paluupaikkaa ei voida asettaa tässä ulottuvuudessa",
    "spawnpoint_success_single": "Aseta pelaajan %1$s paluupaikaksi (%2$d, %3$d, %4$d)",
    "spawnpoint_description": "Asettaa pelaajan luontikohdan.",
    "spawnpoint_success_multiple_specific": "Aseta pelaajien %1$s paluupaikaksi (%2$d, %3$d, %4$d)",
    "spawnpoint_success_multiple_generic": "Aseta pelaajien %1$s paluupaikka",
    "spawnpoint_wrongDimension": "Maailmaantulokohtaa ei voi asettaa tässä ulottuvuudessa",
    "spreadplayers_description": "Siirtää kohteet satunnaiseen paikkaan.",
    "spreadplayers_failure_players": "Ei voitu levittää %1$s pelaajaa paikkaan %2$s, %3$s (liian monta pelaajaa tähän tilaan, kokeile enintään %4$s kuution etäisyyttä)",
    "spreadplayers_failure_teams": "Ei voitu levittää %1$s joukkuetta paikkaan %2$s, %3$s (liian monta joukkuetta tähän tilaan, kokeile enintään %4$s kuution etäisyyttä)",
    "spreadplayers_info_players": "(Keskimääräinen etäisyys pelaajien välillä on %1$s kuutiota %2$s iteraation jälkeen)",
    "spreadplayers_info_teams": "(Keskimääräinen etäisyys joukkueiden välillä on %1$s kuutiota %2$s iteraation jälkeen)",
    "spreadplayers_spreading_players": "Levitetään %1$s pelaajaa %2$s kuution etäisyydelle paikasta %3$s, %4$s (vähintään %5$s kuution päähän toisistaan)",
    "spreadplayers_spreading_teams": "Levitetään %1$s joukkuetta %2$s kuution etäisyydelle paikasta %3$s, %4$s (vähintään %5$s kuution päähän toisistaan)",
    "spreadplayers_success_players": "%1$s pelaajaa levitettiin onnistuneesti paikkaan %2$s, %3$s",
    "spreadplayers_success_teams": "%1$s joukkuetta levitettiin onnistuneesti paikkaan %2$s, %3$s",
    "stats_cleared": "Tyhjennettiin pelaajan %1$s tilastot",
    "stats_failed": "Virheelliset parametrit",
    "stats_noCompatibleBlock": "Kuutio paikassa %1$d, %2$d, %3$sd ei pysty tallentamaan tilastoja",
    "stats_success": "Tallennetaan %1$s tilastoa paikassa %2$s paikkaan %3$s",
    "stop_description": "Pysäyttää palvelimen.",
    "stop_start": "Pysäytetään palvelinta",
    "stopsound_description": "Sammuttaa äänen.",
    "stopsound_success": "Estetty ääni %s lähteestä %s",
    "stopsound_success_all": "Estetty kaikki äänet lähteestä %s",
    "summon_description": "Kutsuu kohteen.",
    "summon_failed": "Esinettä ei voi kutsua",
    "summon_outOfWorld": "Esinettä ei voi kutsua ulos maailmasta",
    "summon_success": "Kohde kutsuttiin onnistuneesti",
    "summon_tagError": "Tietotunnisteen jäsennys epäonnistui: %1$s",
    "tag_description": "Hallitsee entiteetteihin tallennettuja tunnisteita.",
    "tag_add_failed": "Kohteella joko on jo tämä tunniste tai sillä on liikaa tunnisteita",
    "tag_add_success_single": "Lisätty tunniste '%1$s' kohteelle %2$s",
    "tag_add_success_multiple": "Lisätty tunniste '%1$s' %2$d entiteetille",
    "tag_list_single_empty": "Kohteella %s ei ole tunnisteita",
    "tag_list_single_success": "Kohteella %1$s on %2$d tunnistetta: %3$s",
    "tag_list_multiple_empty": "Näillä %d entiteetillä ei ole tunnisteita",
    "tag_list_multiple_success": "Näillä %1$d entiteetillä on yhteensä %2$d tunnistetta: %3$s",
    "tag_remove_failed": "Kohteella ei ole tätä tunnistetta",
    "tag_remove_success_single": "Poistettu tunniste %1$s kohteelta %2$s",
    "tag_remove_success_multiple": "Poistettu tunniste %1$s %2$d entiteetiltä",
    "tell_description": "Lähettää yksityisviestin yhdelle tai useammalle pelaajalle.",
    "tellraw_description": "Lähettää JSON-viestin pelaajille.",
    "tellraw_jsonException": "Virheellinen json: %1$s",
    "tellraw_jsonStringException": "Vireellinen json-merkkijonotieto.",
    "tellraw_error_noData": "Tietoja ei annettu.",
    "tellraw_error_notArray": "Rawtext-kohteen on sisällettävä taulukko. Esimerkki: \"rawtext\":[{..}]",
    "tellraw_error_textNotString": "rawtextin tekstikentän on sisällettävä merkkijono. Esimerkki: \"rawtext\":[{\"text\": \"text to display\"}]",
    "tellraw_error_translateNotString": "rawtextin käännöskentän on sisällettävä kieliavain. Esimerkki: \"rawtext\":[{\"translate\": \"gui.ok\"}]",
    "tellraw_error_withNotArrayOrRawText": "raakatekstin muodossa olevalla kentällä on sisällettävä taulukko tai muu raakatekstikohde. Esimerkki 1: \"raakateksti\":[{\"translate\": \"chat.type.announcement\", \"with\": [ \"value1\", \"value2\" ]}]  Esimerkki 2: \"raakateksti\":[{\"translate\": \"chat.type.announcement\", \"with\":{\"rawtext\":[{\"text\": \"value1\"}, {\"text\": \"value2\"}]}}]",
    "tellraw_error_itemIsNotObject": "Rawtext-taulukon Json-arvo ei ollut kohde. Esimerkki: \"rawtext\": [{ \"text\" : \"my text\" }]",
    "educlientinfo_description": "Hae haltijatunnus ja isännän status. Tarkoitettu CM:eille.",
    "testfor_description": "Laskee kohteet (pelaajat, hirviöt, esineet jne.) tiettyjen ehtojen perusteella.",
    "testfor_failure": "%1$s ei vastannut vaadittua tietorakennetta",
    "testfor_success": "Löydetty %1$s",
    "testfor_tagError": "Tietotunnisteen jäsennys epäonnistui: %1$s",
    "testforblock_description": "Testaa, onko tietty kuutio määritetyssä paikassa.",
    "testforblock_failed_data": "Kuutio paikassa %1$d,%2$d,%3$d ei vastannut odotettua lohkon tilaa.",
    "testforblock_failed_nbt": "Kuutiolla paikassa %1$d, %2$d, %3$d ei ollut vaadittuja NBT-avaimia.",
    "testforblock_failed_tile": "Kuutio paikassa %1$s, %2$s, %3$d on %4$s (oletus: %5$s).",
    "testforblock_failed_tileEntity": "Kuutio paikassa %1$s, %2$s, %3$s ei ole kuutioentiteetti eikä voi tukea tunnisteiden yhteensovittamista.",
    "testforblock_outOfWorld": "Kuutiota ei voi testata maailman ulkopuolella",
    "testforblock_success": "Kuutio paikassa %1$d, %2$d, %3$d löydettiin onnistuneesti.",
    "testforblocks_description": "Testaa, sopivatko ovatko kahden alueen kuutiot samaa tyyppiä.",
    "tickingarea_description": "Lisää, poista tai luetteloi itsepäivittyviä alueita.",
    "tickingarea_inuse": "%1$d/%2$d itsepäivittyvää aluetta käytössä.",
    "tickingarea_noneExist_currentDimension": "Nykyisessä ulottuvuudessa ei ole itsepäivittyviä alueita.",
    "tickingarea_add_bounds_success": "Lisätty itsepäivittyvät alueet %1$d−%2$d.",
    "tickingarea_add_circle_success": "Lisätty itsepäivittyvä alue %1$d, jonka säde on %2$d lohkoa.",
    "tickingarea_add_failure": "Itsepäivittyvien alueiden enimmäismäärä (%1$d) on jo saavutettu. Itsepäivittyviä alueita ei voida lisätä.",
    "tickingarea_add_conflictingname": "Itsepäivittyvä alue nimellä %1$s on jo olemassa.",
    "tickingarea_add_chunkfailure": "Itsepäivittyvä alue sisältää yli %1$d lohkoa. Itsepäivittyvä alue on liian suuri, eikä sitä voida luoda.",
    "tickingarea_add_radiusfailure": "Säde ei voi olla suurempi kuin %1$d, itsepäivittyvä alue on liian suuri, ja sitä ei voida luoda.",
    "tickingarea_remove_success": "Poistettu itsepäivittyviä alueita",
    "tickingarea_remove_failure": "Nykyisessä ulottuvuudessa ei ole itsepäivittyviä alueita, jotka sisältävät kuutiopaikan %1$d.",
    "tickingarea_remove_byname_failure": "Nykyisessä ulottuvuudessa ei ole itsepäivittyviä alueita nimellä %1$s.",
    "tickingarea_remove_all_success": "Poistettu itsepäivittyviä alueita",
    "tickingarea_remove_all_failure": "Nykyisessä ulottuvuudessa ei ole itsepäivittyviä alueita.",
    "tickingarea_list_chunks": "lohkoa",
    "tickingarea_list_circle_radius": "Säde",
    "tickingarea_list_success_currentDimension": "Luettelo kaikista nykyisen ulottuvuuden itsepäivittyvistä alueista",
    "tickingarea_list_success_allDimensions": "Luettelo kaikista itsepäivittyvistä alueista kaikissa ulottuvuuksissa",
    "tickingarea_list_failure_allDimensions": "Missään ulottuvuudessa ei ole itsepäivittyviä alueita.",
    "tickingarea_list_to": "->",
    "tickingarea_list_type_circle": "Ympyrä",
    "time_added": "Lisätty aikaan %1$d",
    "time_description": "Muuttaa maailman peliaikaa tai kysyy sitä.",
    "time_disabled": "Ikuinen päivä on käytössä tällä tasolla.",
    "time_query_day": "Päivä: %d",
    "time_query_daytime": "Päiväsaika: %d",
    "time_query_gametime": "Peliaika: %d",
    "time_set": "Ajaksi asetettu %1$d",
    "time_stop": "Aika: %1$s",
    "title_description": "Hallitsee näytön otsikoita.",
    "title_success": "Otsikkokomento suoritettu onnistuneesti",
    "titleraw_description": "Hallitsee JSON-sanomia sisältäviä ruutuotsikko.",
    "toggledownfall_description": "Muuttaa säätä.",
    "tp_description": "Kaukosiirtää kohteita (pelaajia, hirviöitä jne.).",
    "tp_notSameDimension": "Kaukosiirtyminen ei onnistu, koska pelaajat eivät ole samassa ulottuvuudessa",
    "tp_outOfWorld": "Kohteita ei voi siirtää maailman ulkopuolelle",
    "tp_permission": "Sinulla ei ole oikeutta käyttää tätä vinoviivakomentoa.",
    "tp_safeTeleportFail": "Kohdetta %1$s ei voitu kaukosiirtää paikkaan %2$s, koska alueella oli kuutioita.",
    "tp_far": "Kohdetta %1$s ei voitu siirtää lataamattomalle alueelle paikassa %2$s",
    "tp_success": "Kaukosiirretty pelaaja %1$s paikkaan %2$s",
    "tp_successVictim": "Sinut on kaukosiirretty paikkaan %1$s",
    "tp_success_coordinates": "Pelaaja %1$s kaukosiirretty paikkaan %2$s, %3$s, %4$s",
    "transferserver_description": "Siirtää pelaajan toiselle palvelimelle.",
    "transferserver_successful": "Pelaaja siirretty",
    "transferserver_invalid_port": "Virheellinen portti (0-65535)",
    "trigger_description": "Asettaa aktivoitavan käynnistimen.",
    "trigger_disabled": "Käynnistin %1$s ei ole käytössä",
    "trigger_invalidMode": "Käynnistintila %1$s on virheellinen",
    "trigger_invalidObjective": "Käynnistimen nimi %1$s on virheellinen",
    "trigger_invalidPlayer": "Vain pelaajat voivat käyttää komentoa /trigger",
    "trigger_success": "Käynnistintä %1$s muutettu arvoilla %2$s %3$s",
    "unban_failed": "Pelaajan %1$s estoa ei voitu perua",
    "unban_success": "Pelaajan %1$s esto peruttu",
    "unbanip_invalid": "Olet antanut virheellisen IP-osoitteen",
    "unbanip_success": "IP-osoitteen %1$s esto peruttu",
    "validategamelighting_description": "Vahvista tietynalueen pelivalaistus",
    "validategamelighting_checkRegionTooBig": "Valaistuksen osalta tarkistettava alue on liian suuri! (%1$d > %2$d)",
    "validategamelighting_outOfWorld": "Valaistusta ei voi tarkistaa maailman ulkopuolella",
    "weather_clear": "Vaihto selkeään säähän",
    "weather_description": "Asettaa sään.",
    "weather_disabled": "Sääsykli ei ole käytössä tällä tasolla.",
    "weather_query": "Säätila on: %s",
    "weather_query_clear": "kirkas",
    "weather_query_rain": "sade",
    "weather_query_thunder": "ukkonen",
    "weather_rain": "Vaihto sateiseen säähän",
    "weather_thunder": "Vaihto sateeseen ja ukkoseen",
    "whitelist_add_failed": "Pelaajaa %1$s ei voitu lisätä valkoiseen luetteloon",
    "whitelist_add_success": "Lisätty pelaaja %1$s valkoiseen luetteloon",
    "whitelist_description": "Hallitsee palvelimen valkoista listaa.",
    "whitelist_disabled": "Valkoinen luettelo poistettu käytöstä",
    "whitelist_enabled": "Valkoinen luettelo otettu käyttöön",
    "whitelist_list": "Valkoisen luettelon pelaajia on %1$d (%2$s nähdystä pelaajasta):",
    "whitelist_reloaded": "Valkoinen luettelo ladattu uudelleen tiedostosta.",
    "whitelist_remove_failed": "Pelaajaa %1$s ei voitu poistaa valkoisesta luettelosta",
    "whitelist_remove_success": "Pelaaja %1$s poistettiin valkoisesta luettelosta",
    "world_age_description": "Vaihtaa tai kysyy maailman ikää (aikaa luomisesta).",
    "world_age_added": "Lisätty %1$d maailman ikään",
    "world_age_query": "Maailman ikä on%d",
    "world_age_set": "Aseta maailman iäksi %1$d",
    "worldborder_center_success": "Aseta maailman rajan keskikohdaksi paikka %1$s, %2$s",
    "worldborder_damage_amount_success": "Aseta maailman rajan aiheuttaman vahingon määräksi %1$s kuutiota kohden (aiempi arvo %2$s vahinkoa kuutiota kohden)",
    "worldborder_damage_buffer_success": "Aseta maailman rajan aiheuttaman vahingon puskuriksi %1$s kuutiota (aiemmin %2$s kuutiota)",
    "worldborder_get_success": "Maailman raja on tällä hetkellä leveydeltään %1$s kuutiota",
    "worldborder_set_success": "Aseta maailman rajan leveydeksi %1$s kuutiota (aiemmin %2$s kuutiota)",
    "worldborder_setSlowly_grow_success": "Kasvatetaan maailman rajan leveys %1$s kuutioon (aiemmin %2$s kuutiota) %3$s sekunnin kuluessa",
    "worldborder_setSlowly_shrink_success": "Supistetaan maailman rajan leveys %1$s kuutioon (aiemmin %2$s kuutiota) %3$s sekunnin kuluessa",
    "worldborder_warning_distance_success": "Aseta varoitus maailman rajasta %1$s kuution päähän (aiemmin %2$s kuutiota)",
    "worldborder_warning_time_success": "Aseta varoitus maailman rajasta %1$s sekunnin päähän (aiemmin %2$s sekuntia)",
    "worldbuilder_description": "Muuta pelaajan maailmanrakentaja-asemaa.",
    "worldbuilder_success": "Maailmanrakentaja-asema päivitetty muotoon %1$s",
    "wsserver_description": "Yrittää yhdistää websocket-palvelimeen annetussa URL:ssä.",
    "wsserver_invalid_url": "Annettu palvelimen URL on virheellinen",
    "wsserver_request_existing": "Toinen yhdistyspyyntö on käynnissä",
    "wsserver_request_failed": "Palvelimeen ei saatu yhteyttä: %1$s",
    "wsserver_success": "Muodostettu yhteys palvelimeen: %1$s",
    "xp_description": "Lisää tai poistaa pelaajan kokemusta.",
    "xp_failure_widthdrawXp": "Pelaajalle ei voi antaa negatiivisia kokemuspisteitä",
    "xp_success": "Annettu %1$d kokemuspistettä pelaajalle %2$s",
    "xp_success_levels": "Annettu %1$d tasoa pelaajalle %2$s",
    "xp_success_negative_levels": "Poistettu %1$d tasoa pelaajalta %2$s"
},
item:{
    "air": [
        "Ilma"
    ],
    "apple": [
        "Omena"
    ],
    "golden_apple": [
        "Kultainen omena"
    ],
    "appleenchanted": [
        "Lumottu omena"
    ],
    "armor_stand": [
        "Haarniskajalusta"
    ],
    "arrow": [
        "Nuoli"
    ],
    "tipped_arrow": [
        "Valeltu nuoli"
    ],
    "banner": [
        "Musta lippu",
        "Musta lippu",
        "Punainen lippu",
        "Vihreä lippu",
        "Ruskea lippu",
        "Sininen lippu",
        "Violetti lippu",
        "Syaani lippu",
        "Vaaleanharmaa lippu",
        "Harmaa lippu",
        "Vaaleanpunainen lippu",
        "Limetinvihreä lippu",
        "Keltainen lippu",
        "Vaaleansininen lippu",
        "Aniliininpunainen lippu",
        "Oranssi lippu",
        "Valkoinen lippu"
    ],
    "bed": [
        "Sänky",
        "Valkoinen sänky",
        "Oranssi sänky",
        "Aniliininpunainen sänky",
        "Vaaleansininen sänky",
        "Keltainen sänky",
        "Limetinvihreä sänky",
        "Vaaleanpunainen sänky",
        "Harmaa sänky",
        "Vaaleanharmaa sänky",
        "Syaani sänky",
        "Violetti sänky",
        "Sininen sänky",
        "Ruskea sänky",
        "Vihreä sänky",
        "Punainen sänky",
        "Musta sänky"
    ],
    "bell": [
        "Kello"
    ],
    "steak": [
        "Pihvi"
    ],
    "beef": [
        "Raaka paisti"
    ],
    "beetroot": [
        "Punajuuri"
    ],
    "beetroot_soup": [
        "Punajuurikeitto"
    ],
    "blaze_powder": [
        "Lieskajauhetta"
    ],
    "blaze_rod": [
        "Lieskatanko"
    ],
    "boat": [
        "Tammivene",
        "Tammivene",
        "Kuusivene",
        "Koivuvene",
        "Viidakkovene",
        "Akasiavene",
        "Tumma tammivene"
    ],
    "bone": [
        "Luu"
    ],
    "book": [
        "Kirja"
    ],
    "chainmail_boots": [
        "Silmukkasaappaat"
    ],
    "leather_boots": [
        "Nahkasaappaat"
    ],
    "diamond_boots": [
        "Timanttisaappaat"
    ],
    "golden_boots": [
        "Kultasaappaat"
    ],
    "iron_boots": [
        "Rautasaappaat"
    ],
    "bow": [
        "Jousi"
    ],
    "bowl": [
        "Kulho"
    ],
    "bread": [
        "Leipä"
    ],
    "brewing_stand": [
        "Haudutin"
    ],
    "brick": [
        "Tiili"
    ],
    "bucket": [
        "Ämpäri"
    ],
    "bucketLava": [
        "Laavaämpäri"
    ],
    "bucketWater": [
        "Vesiämpäri"
    ],
    "bucketFish": [
        "Ämpärillinen turskaa"
    ],
    "bucketSalmon": [
        "Ämpärillinen lohta"
    ],
    "bucketTropical": [
        "Ämpärillinen trooppista kalaa"
    ],
    "bucketPuffer": [
        "Ämpärillinen pallokalaa"
    ],
    "bucketCustomFish": [
        "Ämpärillinen"
    ],
    "tropicalColorWhite": [
        "Valkoinen"
    ],
    "tropicalColorOrange": [
        "Oranssi"
    ],
    "tropicalColorMagenta": [
        "Aniliininpunainen"
    ],
    "tropicalColorSky": [
        "Taivaansininen"
    ],
    "tropicalColorYellow": [
        "Keltainen"
    ],
    "tropicalColorLime": [
        "Limetinvihreä"
    ],
    "tropicalColorRose": [
        "Ruusunpunainen"
    ],
    "tropicalColorGray": [
        "Harmaa"
    ],
    "tropicalColorSilver": [
        "Hopea"
    ],
    "tropicalColorTeal": [
        "Sinivihreä"
    ],
    "tropicalColorPlum": [
        "Luumunvärinen"
    ],
    "tropicalColorBlue": [
        "Sininen"
    ],
    "tropicalColorBrown": [
        "Ruskea"
    ],
    "tropicalColorGreen": [
        "Vihreä"
    ],
    "tropicalColorRed": [
        "Punainen"
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
        "%1$s-%2$s Kob"
    ],
    "tropicalBodySunstreakMulti": [
        "%1$s-%2$s SunStreak"
    ],
    "tropicalBodySnooperMulti": [
        "%1$s-%2$s Snooper"
    ],
    "tropicalBodyDasherMulti": [
        "%1$s-%2$s Dasher"
    ],
    "tropicalBodyBrinelyMulti": [
        "%1$s-%2$s Brinely"
    ],
    "tropicalBodySpottyMulti": [
        "%1$s-%2$s Spotty"
    ],
    "tropicalBodyFlopperMulti": [
        "%1$s-%2$s Flopper"
    ],
    "tropicalBodyStripeyMulti": [
        "%1$s-%2$s Stripey"
    ],
    "tropicalBodyGlitterMulti": [
        "%1$s-%2$s Glitter"
    ],
    "tropicalBodyBlockfishMulti": [
        "%1$s-%2$s Blockfish"
    ],
    "tropicalBodyBettyMulti": [
        "%1$s-%2$s Betty"
    ],
    "tropicalBodyClayfishMulti": [
        "%1$s-%2$s Clayfish"
    ],
    "tropicalSchoolAnemone": [
        "Merivuokko"
    ],
    "tropicalSchoolBlackTang": [
        "Mustavälskäri"
    ],
    "tropicalSchoolBlueDory": [
        "Palettivälskäri"
    ],
    "tropicalSchoolButterflyFish": [
        "Perhokala"
    ],
    "tropicalSchoolCichlid": [
        "Kirjoahven"
    ],
    "tropicalSchoolClownfish": [
        "Vuokkokala"
    ],
    "tropicalSchoolCottonCandyBetta": [
        "Taistelukala"
    ],
    "tropicalSchoolDottyback": [
        "Keijuahven"
    ],
    "tropicalSchoolEmperorRedSnapper": [
        "Keisarinapsija"
    ],
    "tropicalSchoolGoatfish": [
        "Mullo"
    ],
    "tropicalSchoolMoorishIdol": [
        "Sarvikala"
    ],
    "tropicalSchoolOrnateButterfly": [
        "Chaetodon ornatissimus"
    ],
    "tropicalSchoolParrotfish": [
        "Papukaijakala"
    ],
    "tropicalSchoolQueenAngelFish": [
        "Holacanthus ciliaris"
    ],
    "tropicalSchoolRedCichlid": [
        "Pilkkutimanttiahven"
    ],
    "tropicalSchoolRedLippedBlenny": [
        "Ophioblennius atlanticus"
    ],
    "tropicalSchoolRedSnapper": [
        "Punanapsija"
    ],
    "tropicalSchoolThreadfin": [
        "Siimaevä"
    ],
    "tropicalSchoolTomatoClown": [
        "Punavuokkokala"
    ],
    "tropicalSchoolTriggerfish": [
        "Säppikala"
    ],
    "tropicalSchoolYellowTang": [
        "Keltavälskäri"
    ],
    "tropicalSchoolYellowtailParrot": [
        "Keltapyrstöpapukaijakala"
    ],
    "cake": [
        "Kakku"
    ],
    "camera": [
        "Kamera"
    ],
    "golden_carrot": [
        "Kultaporkkana"
    ],
    "carrotOnAStick": [
        "Houkutusporkkana"
    ],
    "warped_fungus_on_a_stick": [
        "Epämuotoinen sieni kepissä"
    ],
    "carrot": [
        "Porkkana"
    ],
    "cauldron": [
        "Pata"
    ],
    "coal": [
        "Hiili",
        null,
        "Puuhiili"
    ],
    "chainmail_chestplate": [
        "Silmukkarintapanssari"
    ],
    "leather_chestplate": [
        "Nahkatunika"
    ],
    "diamond_chestplate": [
        "Timanttirintapanssari"
    ],
    "golden_chestplate": [
        "Kultarintapanssari"
    ],
    "iron_chestplate": [
        "Rautarintapanssari"
    ],
    "chorus_fruit": [
        "Koorihedelmä"
    ],
    "chorus_fruit_popped": [
        "Poksautettu koorihedelmä"
    ],
    "cooked_beef": [
        "Paistettu naudanliha"
    ],
    "cooked_chicken": [
        "Paistettu kana"
    ],
    "cooked_porkchop": [
        "Paistettu porsaankyljys"
    ],
    "chicken": [
        "Raaka kana"
    ],
    "clay_ball": [
        "Savi"
    ],
    "clock": [
        "Kello"
    ],
    "comparator": [
        "Punakivivertailija"
    ],
    "compass": [
        "Kompassi"
    ],
    "lodestonecompass": [
        "Magnetiittikompassi"
    ],
    "cookie": [
        "Keksi"
    ],
    "crossbow": [
        "Varsijousi"
    ],
    "diamond": [
        "Timantti"
    ],
    "repeater": [
        "Punakivitoistin"
    ],
    "acacia_door": [
        "Akasiaovi"
    ],
    "birch_door": [
        "Koivuovi"
    ],
    "dark_oak_door": [
        "Tumma tammiovi"
    ],
    "iron_door": [
        "Rautaovi"
    ],
    "jungle_door": [
        "Viidakko-ovi"
    ],
    "wooden_door": [
        "Tammiovi"
    ],
    "spruce_door": [
        "Kuusiovi"
    ],
    "crimson_door": [
        "Purppuranpunainen ovi"
    ],
    "warped_door": [
        "Epämuotoinen ovi"
    ],
    "dragon_breath": [
        "Liskon henkäys"
    ],
    "dye": [
        "Mustepussi",
        "Mustepussi",
        "Punainen väriaine",
        "Vihreä väriaine",
        "Kaakaopapuja",
        "Lasuurikivi",
        "Violetti väri",
        "Syaani väri",
        "Vaaleanharmaa väri",
        "Harmaa väri",
        "Vaaleanpunainen väri",
        "Limetinvihreä väri",
        "Keltainen väriaine",
        "Vaaleansininen väri",
        "Aniliininpunainen väri",
        "Oranssi väri",
        "Luujauho",
        "Musta väriaine",
        "Ruskea väriaine",
        "Sininen väriaine",
        "Valkoinen väriaine"
    ],
    "egg": [
        "Kananmuna"
    ],
    "elytra": [
        "Liitosiivet"
    ],
    "emerald": [
        "Smaragdi"
    ],
    "emptyMap": [
        "Tyhjä kartta"
    ],
    "emptyLocatorMap": [
        "Tyhjä paikannuskartta"
    ],
    "emptyPotion": [
        "Vesipullo"
    ],
    "enchanted_book": [
        "Lumottu kirja"
    ],
    "end_crystal": [
        "Äärikristalli"
    ],
    "end_rod": [
        "Ääritanko"
    ],
    "ender_eye": [
        "Äären silmä"
    ],
    "ender_pearl": [
        "Äärenhelmi"
    ],
    "experience_bottle": [
        "Lumouspullo"
    ],
    "feather": [
        "Höyhen"
    ],
    "fermented_spider_eye": [
        "Hapatettu lukinsilmä"
    ],
    "fireball": [
        "Tulipanos"
    ],
    "fireworks": [
        "Ilotulitusraketti"
    ],
    "fireworksCharge": [
        "Ilotulitustähti"
    ],
    "clownfish": [
        "Trooppinen kala"
    ],
    "cooked_fish": [
        "Paistettu turska"
    ],
    "fish": [
        "Raaka turska"
    ],
    "pufferfish": [
        "Pallokala"
    ],
    "cooked_salmon": [
        "Paistettu lohi"
    ],
    "salmon": [
        "Raaka lohi"
    ],
    "fishing_rod": [
        "Onkivapa"
    ],
    "flint": [
        "Piikivi"
    ],
    "flint_and_steel": [
        "Tulukset"
    ],
    "flower_pot": [
        "Kukkaruukku"
    ],
    "frame": [
        "Esinekehys"
    ],
    "ghast_tear": [
        "Hornanhengen kyynel"
    ],
    "glass_bottle": [
        "Lasipullo"
    ],
    "gold_nugget": [
        "Kultakimpale"
    ],
    "iron_nugget": [
        "Rautahippu"
    ],
    "diamond_axe": [
        "Timanttikirves"
    ],
    "golden_axe": [
        "Kultakirves"
    ],
    "iron_axe": [
        "Rautakirves"
    ],
    "stone_axe": [
        "Kivikirves"
    ],
    "wooden_axe": [
        "Puukirves"
    ],
    "chainmail_helmet": [
        "Silmukkakypärä"
    ],
    "leather_helmet": [
        "Nahkapäähine"
    ],
    "diamond_helmet": [
        "Timanttikypärä"
    ],
    "golden_helmet": [
        "Kultakypärä"
    ],
    "iron_helmet": [
        "Rautakypärä"
    ],
    "diamond_hoe": [
        "Timanttikuokka"
    ],
    "golden_hoe": [
        "Kultakuokka"
    ],
    "iron_hoe": [
        "Rautakuokka"
    ],
    "stone_hoe": [
        "Kivikuokka"
    ],
    "wooden_hoe": [
        "Puukuokka"
    ],
    "honey_bottle": [
        "Hunajapullo"
    ],
    "honeycomb": [
        "Hunajakenno"
    ],
    "horsearmordiamond": [
        "Timanttinen hevospanssari"
    ],
    "horsearmorgold": [
        "Kultainen hevospanssari"
    ],
    "horsearmoriron": [
        "Rautainen hevospanssari"
    ],
    "horsearmorleather": [
        "Nahkainen hevospanssari"
    ],
    "gold_ingot": [
        "Kultaharkko"
    ],
    "iron_ingot": [
        "Rautaharkko"
    ],
    "netherite_ingot": [
        "Horniittiharkko"
    ],
    "netherite_scrap": [
        "Horniittipala"
    ],
    "netherite_sword": [
        "Horniittimiekka"
    ],
    "netherite_pickaxe": [
        "Horniittihakku"
    ],
    "netherite_axe": [
        "Horniittikirves"
    ],
    "netherite_shovel": [
        "Horniittilapio"
    ],
    "netherite_hoe": [
        "Horniittikuokka"
    ],
    "netherite_boots": [
        "Horniittisaappaat"
    ],
    "netherite_leggings": [
        "Horniittihousut"
    ],
    "netherite_chestplate": [
        "Horniittirintapanssari"
    ],
    "netherite_helmet": [
        "Horniittikypärä"
    ],
    "lead": [
        "Talutusköysi"
    ],
    "leather": [
        "Nahka"
    ],
    "leaves": [
        "Lehtiä",
        "Tammenlehtiä",
        "Kuusenlehtiä",
        "Koivunlehtiä",
        "Palmunlehtiä",
        "Akasianlehtiä",
        "Tummia tammenlehtiä"
    ],
    "chainmail_leggings": [
        "Silmukkahousut"
    ],
    "leather_leggings": [
        "Nahkahousut"
    ],
    "diamond_leggings": [
        "Timanttihousut"
    ],
    "golden_leggings": [
        "Kultahousut"
    ],
    "iron_leggings": [
        "Rautahousut"
    ],
    "nautilus_shell": [
        "Helmiveneen kuori"
    ],
    "heart_of_the_sea": [
        "Merensydän"
    ],
    "magma_cream": [
        "Magmarasvaa"
    ],
    "map": [
        "Kartta"
    ],
    "melon": [
        "Meloni"
    ],
    "milk": [
        "Maito"
    ],
    "minecart": [
        "Kaivosvaunu"
    ],
    "chest_minecart": [
        "Arkkuvaunu"
    ],
    "command_block_minecart": [
        "Komentokuutiovaunu"
    ],
    "minecartFurnace": [
        "Polttouunivaunu"
    ],
    "hopper_minecart": [
        "Suppilovaunu"
    ],
    "tnt_minecart": [
        "TNT-vaunu"
    ],
    "trident": [
        "Atrain"
    ],
    "mushroom_stew": [
        "Sienimuhennos"
    ],
    "muttoncooked": [
        "Paistettu lammas"
    ],
    "muttonraw": [
        "Raaka lammas"
    ],
    "name_tag": [
        "Nimilappu"
    ],
    "netherbrick": [
        "Hornatiili"
    ],
    "quartz": [
        "Hornakvartsi"
    ],
    "nether_wart": [
        "Hornapahka"
    ],
    "netherStar": [
        "Hornatähti"
    ],
    "painting": [
        "Maalaus"
    ],
    "paper": [
        "Paperi"
    ],
    "diamond_pickaxe": [
        "Timanttihakku"
    ],
    "golden_pickaxe": [
        "Kultahakku"
    ],
    "iron_pickaxe": [
        "Rautahakku"
    ],
    "stone_pickaxe": [
        "Kivihakku"
    ],
    "wooden_pickaxe": [
        "Puuhakku"
    ],
    "porkchop_cooked": [
        "Paistettu porsaankyljys"
    ],
    "porkchop": [
        "Raaka porsaankyljys"
    ],
    "portfolio": [
        "Portfolio"
    ],
    "potato": [
        "Peruna"
    ],
    "baked_potato": [
        "Uuniperuna"
    ],
    "poisonous_potato": [
        "Myrkkyperuna"
    ],
    "potion": [
        "Taikajuoma"
    ],
    "prismarine_crystals": [
        "Prismariinikristalleja"
    ],
    "prismarine_shard": [
        "Prismariinin sirpale"
    ],
    "pumpkin_pie": [
        "Kurpitsapiiras"
    ],
    "cooked_rabbit": [
        "Paistettu jänis"
    ],
    "rabbit_foot": [
        "Jäniksenkäpälä"
    ],
    "rabbit_hide": [
        "Jäniksentalja"
    ],
    "rabbit": [
        "Raaka jänis"
    ],
    "rabbit_stew": [
        "Jänismuhennos"
    ],
    "record": [
        "Musiikkilevy"
    ],
    "redstone": [
        "Punakivi"
    ],
    "reeds": [
        "Sokeriruokoja"
    ],
    "kelp": [
        "Merilevä"
    ],
    "dried_kelp": [
        "Kuivattu merilevä"
    ],
    "rotten_flesh": [
        "Pilaantunutta lihaa"
    ],
    "ruby": [
        "Rubiini"
    ],
    "saddle": [
        "Satula"
    ],
    "wheat_seeds": [
        "Siemeniä"
    ],
    "beetroot_seeds": [
        "Punajuurensiemeniä"
    ],
    "melon_seeds": [
        "Meloninsiemeniä"
    ],
    "pumpkin_seeds": [
        "Kurpitsansiemeniä"
    ],
    "shears": [
        "Keritsimet"
    ],
    "diamond_shovel": [
        "Timanttilapio"
    ],
    "golden_shovel": [
        "Kultalapio"
    ],
    "iron_shovel": [
        "Rautalapio"
    ],
    "stone_shovel": [
        "Kivilapio"
    ],
    "wooden_shovel": [
        "Puulapio"
    ],
    "sign": [
        "Tammikyltti"
    ],
    "spruce_sign": [
        "Kuusikyltti"
    ],
    "birch_sign": [
        "Koivukyltti"
    ],
    "jungle_sign": [
        "Viidakkokyltti"
    ],
    "acacia_sign": [
        "Akasiakyltti"
    ],
    "darkoak_sign": [
        "Tumma tammikyltti"
    ],
    "crimson_sign": [
        "Purppuranpunainen kyltti"
    ],
    "warped_sign": [
        "Epämuotoinen kyltti"
    ],
    "skull": [
        "Luurangon pääkallo",
        "Luurangon pääkallo",
        "Hornaluurangon pääkallo",
        "Zombin pää",
        "Pää",
        "Creeperin pää",
        "Liskonpää"
    ],
    "slime_ball": [
        "Limapallo"
    ],
    "snowball": [
        "Lumipallo"
    ],
    "speckled_melon": [
        "Hippumeloni"
    ],
    "spider_eye": [
        "Lukinsilmä"
    ],
    "stick": [
        "Keppi"
    ],
    "string": [
        "Lanka"
    ],
    "sugar": [
        "Sokeria"
    ],
    "gunpowder": [
        "Ruutia"
    ],
    "diamond_sword": [
        "Timanttimiekka"
    ],
    "golden_sword": [
        "Kultamiekka"
    ],
    "iron_sword": [
        "Rautamiekka"
    ],
    "stone_sword": [
        "Kivimiekka"
    ],
    "wooden_sword": [
        "Puumiekka"
    ],
    "wheat": [
        "Vehnää"
    ],
    "writable_book": [
        "Kirja ja Sulka"
    ],
    "written_book": [
        "Kirjoitettu kirja"
    ],
    "glowstone_dust": [
        "Loistekivitomua"
    ],
    "shield": [
        "Kilpi"
    ],
    "shulker_shell": [
        "Kuoripiilijän kuori"
    ],
    "totem": [
        "Epäkuoleman toteemi"
    ],
    "turtle_helmet": [
        "Kilpikonnan kilpi"
    ],
    "turtle_shell_piece": [
        "Sarveislevy"
    ],
    "phantom_membrane": [
        "Aavekalvo"
    ],
    "sweet_berries": [
        "Makeamarjoja"
    ],
    "suspicious_stew": [
        "Epäilyttävä muhennos"
    ],
    "banner_pattern": [
        "Lippukuvio"
    ],
    "acaciaFence": [
        "Akasia-aita"
    ],
    "acacia_fence_gate": [
        "Akasia-aidan portti"
    ],
    "activator_rail": [
        "Aktivointikisko"
    ],
    "allow": [
        "Salli"
    ],
    "deny": [
        "Kiellä"
    ],
    "border_block": [
        "Reuna"
    ],
    "anvil": [
        "Alasin",
        "Alasin",
        null,
        null,
        null,
        "Hieman vaurioitunut alasin",
        null,
        null,
        null,
        "Pahasti vaurioitunut alasin"
    ],
    "barrier": [
        "Este"
    ],
    "beacon": [
        "Lyhtykuutio"
    ],
    "beehive": [
        "Tarhurin mehiläispesä"
    ],
    "bee_nest": [
        "Mehiläispesä"
    ],
    "target": [
        "Kohde"
    ],
    "bedrock": [
        "Peruskallio"
    ],
    "conduit": [
        "Johdin"
    ],
    "invisibleBedrock": [
        "Näkymätön peruskallio"
    ],
    "birchFence": [
        "Koivuaita"
    ],
    "birch_fence_gate": [
        "Koivuaidan portti"
    ],
    "blast_furnace": [
        "Masuuni"
    ],
    "bone_block": [
        "Luukuutio"
    ],
    "coal_block": [
        "Hiilikuutio"
    ],
    "diamond_block": [
        "Timanttikuutio"
    ],
    "emerald_block": [
        "Smaragdikuutio"
    ],
    "gold_block": [
        "Kultakuutio"
    ],
    "iron_block": [
        "Rautakuutio"
    ],
    "lapis_block": [
        "Lasuurikivikuutio"
    ],
    "redstone_block": [
        "Punakivikuutio"
    ],
    "bookshelf": [
        "Kirjahylly"
    ],
    "brick_block": [
        "Tiilikuutio"
    ],
    "brown_mushroom": [
        "Ruskea sieni"
    ],
    "wooden_button": [
        "Tammipainike"
    ],
    "acacia_button": [
        "Akasiapainike"
    ],
    "birch_button": [
        "Koivupainike"
    ],
    "dark_oak_button": [
        "Tumma tammipainike"
    ],
    "jungle_button": [
        "Viidakkopainike"
    ],
    "spruce_button": [
        "Kuusipainike"
    ],
    "stone_button": [
        "Puupainike"
    ],
    "cactus": [
        "Kaktus"
    ],
    "dried_kelp_block": [
        "Kuivattu merileväkuutio"
    ],
    "carved_pumpkin": [
        "Koverrettu kurpitsa"
    ],
    "chest": [
        "Arkku"
    ],
    "ender_chest": [
        "Ääriarkku"
    ],
    "jigsaw": [
        "Palapelikuutio"
    ],
    "honey_block": [
        "Hunajakuutio"
    ],
    "honeycomb_block": [
        "Hunajakennokuutio"
    ],
    "lodestone": [
        "Magnetiitti"
    ],
    "nether_sprouts": [
        "Hornaituja"
    ],
    "crimson_stem": [
        "Purppuranpunainen varsi"
    ],
    "warped_stem": [
        "Epämuotoinen varsi"
    ],
    "stripped_crimson_stem": [
        "Kuorittu purppuranpunainen varsi"
    ],
    "stripped_warped_stem": [
        "Kuorittu epämuotoinen varsi"
    ],
    "crimson_hyphae": [
        "Purppuranpunainen sienirihmasto"
    ],
    "warped_hyphae": [
        "Epämuotoinen sienirihmasto"
    ],
    "stripped_crimson_hyphae": [
        "Riisuttu purppuranpunainen sienirihmasto"
    ],
    "stripped_warped_hyphae": [
        "Riisuttu epämuotoinen sienirihmasto"
    ],
    "crimson_planks": [
        "Purppuranpunaisia lautoja"
    ],
    "warped_planks": [
        "Epämuotoisia lautoja"
    ],
    "crimson_trapdoor": [
        "Purppuranpunainen lattialuukku"
    ],
    "warped_trapdoor": [
        "Epämuotoinen lattialuukku"
    ],
    "crimson_standing_sign": [
        "Purppuranpunainen kyltti"
    ],
    "warped_standing_sign": [
        "Epämuotoinen kyltti"
    ],
    "crimson_wall_sign": [
        "Purppuranpunainen kyltti"
    ],
    "warped_wall_sign": [
        "Epämuotoinen kyltti"
    ],
    "crimson_stairs": [
        "Purppuranpunaiset portaat"
    ],
    "warped_stairs": [
        "Epämuotoiset portaat"
    ],
    "crimson_fence": [
        "Purppuranpunainen aita"
    ],
    "warped_fence": [
        "Epämuotoinen aita"
    ],
    "crimson_fence_gate": [
        "Purppuranpunainen aidanportti"
    ],
    "warped_fence_gate": [
        "Epämuotoinen aidanportti"
    ],
    "crimson_button": [
        "Purppuranpunainen painike"
    ],
    "warped_button": [
        "Epämuotoinen painike"
    ],
    "crimson_pressure_plate": [
        "Purppuranpunainen painelevy"
    ],
    "warped_pressure_plate": [
        "Epämuotoinen painelevy"
    ],
    "crimson_slab": [
        "Purppuranpunainen laatta"
    ],
    "warped_slab": [
        "Epämuotoinen laatta"
    ],
    "crimson_double_slab": [
        "Purppuranpunainen laatta"
    ],
    "warped_double_slab": [
        "Epämuotoinen laatta"
    ],
    "shroomlight": [
        "Sienivalo"
    ],
    "crimson_nylium": [
        "Purppuranpunainen nyliini"
    ],
    "warped_nylium": [
        "Epämuotoinen nyliini"
    ],
    "basalt": [
        "Basaltti"
    ],
    "polished_basalt": [
        "Kiillotettu basaltti"
    ],
    "blackstone": [
        "Hiililiuske"
    ],
    "polished_blackstone_bricks": [
        "Kiillotettuja hiililiusketiiliä"
    ],
    "cracked_polished_blackstone_bricks": [
        "Halkeilleita kiillotettuja hiililiusketiiliä"
    ],
    "polished_blackstone_brick_stairs": [
        "Kiillotetut hiililiusketiiliportaat"
    ],
    "blackstone_stairs": [
        "Hiililiuskeportaat"
    ],
    "blackstone_wall": [
        "Hiililiuskeseinä"
    ],
    "polished_blackstone_brick_wall": [
        "Kiillotettu hiililiusketiiliseinä"
    ],
    "chiseled_polished_blackstone": [
        "Veistetty kiillotettu hiililiuske"
    ],
    "gilded_blackstone": [
        "Kullattu hiililiuske"
    ],
    "blackstone_slab": [
        "Hiililiuskelaatta"
    ],
    "polished_blackstone_brick_slab": [
        "Kiillotettu hiililiusketiililaatta"
    ],
    "chain": [
        "Ketju"
    ],
    "soul_soil": [
        "Sielumaata"
    ],
    "soul_fire": [
        "Sielutuli"
    ],
    "polished_blackstone": [
        "Kiillotettu hiililiuske"
    ],
    "polished_blackstone_stairs": [
        "Kiillotetut hiililiuskeportaat"
    ],
    "polished_blackstone_slab": [
        "Kiillotettu hiililiuskelaatta"
    ],
    "polished_blackstone_pressure_plate": [
        "Kiillotettu hiililiuskepainelevy"
    ],
    "polished_blackstone_button": [
        "Kiillotettu hiililiuskepainike"
    ],
    "polished_blackstone_wall": [
        "Kiillotettu hiililiuskeseinä"
    ],
    "soul_campfire": [
        "Sielunuotio"
    ],
    "chiseled_nether_bricks": [
        "Veistettyjä hornatiiliä"
    ],
    "cracked_nether_bricks": [
        "Halkeilleita hornatiiliä"
    ],
    "quartz_bricks": [
        "Kvartsitiiliä"
    ],
    "trapped_chest": [
        "Ansa-arkku"
    ],
    "shulkerBoxWhite": [
        "Valkoinen kuoripiilijälaatikko"
    ],
    "shulkerBoxOrange": [
        "Oranssi kuoripiilijälaatikko"
    ],
    "shulkerBoxMagenta": [
        "Aniliininpunainen kuoripiilijälaatikko"
    ],
    "shulkerBoxLightBlue": [
        "Vaaleansininen kuoripiilijälaatikko"
    ],
    "shulkerBoxYellow": [
        "Keltainen kuoripiilijälaatikko"
    ],
    "shulkerBoxLime": [
        "Limetinvihreä kuoripiilijälaatikko"
    ],
    "shulkerBoxPink": [
        "Vaaleanpunainen kuoripiilijälaatikko"
    ],
    "shulkerBoxGray": [
        "Harmaa kuoripiilijälaatikko"
    ],
    "shulkerBoxSilver": [
        "Vaaleanharmaa kuoripiilijälaatikko"
    ],
    "shulkerBoxCyan": [
        "Syaani kuoripiilijälaatikko"
    ],
    "shulkerBoxPurple": [
        "Violetti kuoripiilijälaatikko"
    ],
    "shulkerBoxBlue": [
        "Sininen kuoripiilijälaatikko"
    ],
    "shulkerBoxBrown": [
        "Ruskea kuoripiilijälaatikko"
    ],
    "shulkerBoxGreen": [
        "Vihreä kuoripiilijälaatikko"
    ],
    "shulkerBoxRed": [
        "Punainen kuoripiilijälaatikko"
    ],
    "shulkerBoxBlack": [
        "Musta kuoripiilijälaatikko"
    ],
    "shulkerBox": [
        "Kuoripiilijälaatikko"
    ],
    "chorus_flower": [
        "Koorinkukka"
    ],
    "chorus_plant": [
        "Koorikasvi"
    ],
    "stained_glass": [
        "Valkoinen värjätty lasi",
        "Valkoinen värjätty lasi",
        "Oranssi värjätty lasi",
        "Aniliininpunainen värjätty lasi",
        "Vaaleansininen värjätty lasi",
        "Keltainen värjätty lasi",
        "Limetinvihreä värjätty lasi",
        "Vaaleanpunainen värjätty lasi",
        "Harmaa värjätty lasi",
        "Vaaleanharmaa värjätty lasi",
        "Syaani värjätty lasi",
        "Violetti värjätty lasi",
        "Sininen värjätty lasi",
        "Ruskea värjätty lasi",
        "Vihreä värjätty lasi",
        "Punainen värjätty lasi",
        "Musta värjätty lasi"
    ],
    "stained_glass_pane": [
        "Valkoinen värjätty lasiruutu",
        "Valkoinen värjätty lasiruutu",
        "Oranssi värjätty lasiruutu",
        "Aniliininpunainen värjätty lasiruutu",
        "Vaaleansininen värjätty lasiruutu",
        "Keltainen värjätty lasiruutu",
        "Limetinvihreä värjätty lasiruutu",
        "Vaaleanpunainen värjätty lasiruutu",
        "Harmaa värjätty lasiruutu",
        "Vaaleanharmaa värjätty lasiruutu",
        "Syaani värjätty lasiruutu",
        "Violetti värjätty lasiruutu",
        "Sininen värjätty lasiruutu",
        "Ruskea värjätty lasiruutu",
        "Vihreä värjätty lasiruutu",
        "Punainen värjätty lasiruutu",
        "Musta värjätty lasiruutu"
    ],
    "clay": [
        "Savikuutio"
    ],
    "hardened_clay": [
        "Terrakotta"
    ],
    "stained_hardened_clay": [
        "Terrakotta",
        "Valkoinen terrakotta",
        "Oranssi terrakotta",
        "Aniliininpunainen terrakotta",
        "Vaaleansininen terrakotta",
        "Keltainen terrakotta",
        "Limetinvihreä terrakotta",
        "Vaaleanpunainen terrakotta",
        "Harmaa terrakotta",
        "Vaaleanharmaa terrakotta",
        "Syaani terrakotta",
        "Violetti terrakotta",
        "Sininen terrakotta",
        "Ruskea terrakotta",
        "Vihreä terrakotta",
        "Punainen terrakotta",
        "Musta terrakotta"
    ],
    "structure_block": [
        "Rakennekuutio"
    ],
    "structure_void": [
        "Rakennetyhjiö"
    ],
    "wool": [
        "Villaa",
        "Valkoista villaa",
        "Oranssia villaa",
        "Aniliininpunaista villaa",
        "Vaaleansinistä villaa",
        "Keltaista villaa",
        "Limetinvihreää villaa",
        "Vaaleanpunaista villaa",
        "Harmaata villaa",
        "Vaaleanharmaata villaa",
        "Syaania villaa",
        "Violettia villaa",
        "Sinistä villaa",
        "Ruskeaa villaa",
        "Vihreää villaa",
        "Punaista villaa",
        "Mustaa villaa"
    ],
    "cobblestone_wall": [
        "Mukulakiviseinä",
        "Mukulakiviseinä",
        "Sammaleinen mukulakiviseinä",
        "Graniittiseinä",
        "Dioriittiseinä",
        "Andesiittiseinä",
        "Hiekkakiviseinä",
        "Tiiliseinä",
        "Kivitiiliseinä",
        "Sammaleinen kivitiiliseinä",
        "Äärikivitiiliseinä",
        "Hornatiiliseinä",
        "Prismariiniseinä",
        "Punainen hiekkakiviseinä",
        "Punainen hornatiiliseinä"
    ],
    "cocoa": [
        "Kaakao"
    ],
    "command_block": [
        "Komentokuutio"
    ],
    "composter": [
        "Kompostori"
    ],
    "light_block": [
        "Valokuutio"
    ],
    "repeating_command_block": [
        "Toistuva komentokuutio"
    ],
    "chain_command_block": [
        "Ketjukomentokuutio"
    ],
    "darkOakFence": [
        "Tumma tammiaita"
    ],
    "dark_oak_fence_gate": [
        "Tumman tammiaidan portti"
    ],
    "daylight_detector": [
        "Päivänvaloanturi"
    ],
    "deadbush": [
        "Kuollut pensas"
    ],
    "detector_rail": [
        "Havaitsinkisko"
    ],
    "dirt": [
        "Hieta",
        "Hieta",
        "Karkeaa hietaa"
    ],
    "podzol": [
        "Podsoli"
    ],
    "purpur_block": [
        "Purppurakuutio",
        "Purppurakuutio",
        "Veistettyä purppuraa",
        "Purppurapilari"
    ],
    "dispenser": [
        "Automaatti"
    ],
    "doorWood": [
        "Puuovi"
    ],
    "double_plant": [
        "Kasvi",
        "Auringonkukka",
        "Syreeni",
        "Pitkä ruoho",
        "Suuri saniainen",
        "Ruusupensas",
        "Pioni"
    ],
    "dragon_egg": [
        "Lohikäärmeen muna"
    ],
    "dropper": [
        "Pudottaja"
    ],
    "enchanting_table": [
        "Lumouspöytä"
    ],
    "enderChest": [
        "Ääriarkku"
    ],
    "end_portal_frame": [
        "Ääriportaali"
    ],
    "farmland": [
        "Peltomaa"
    ],
    "fletching_table": [
        "Nuolentekijän pöytä"
    ],
    "fence": [
        "Tammiaita"
    ],
    "fence_gate": [
        "Tammiaidan portti"
    ],
    "iron_bars": [
        "Rautakalterit"
    ],
    "fire": [
        "Tuli"
    ],
    "yellow_flower": [
        "Kukka",
        "Narsissi"
    ],
    "red_flower": [
        "Kukka",
        "Unikko",
        "Sininen orkidea",
        "Laukka",
        "Keijunsilmä",
        "Punainen tulppaani",
        "Oranssi tulppaani",
        "Valkoinen tulppaani",
        "Vaaleanpunainen tulppaani",
        "Päivänkakkara",
        "Ruiskaunokki",
        "Kielo"
    ],
    "wither_rose": [
        "Näiveruusu"
    ],
    "furnace": [
        "Polttouuni"
    ],
    "glass": [
        "Lasi"
    ],
    "golden_rail": [
        "Sähkökisko"
    ],
    "grass": [
        "Ruohokuutio"
    ],
    "grass_path": [
        "Ruohopolku"
    ],
    "gravel": [
        "Sora"
    ],
    "hay_block": [
        "Heinäpaali"
    ],
    "netherrack": [
        "Tulikivi"
    ],
    "soul_sand": [
        "Sieluhiekka"
    ],
    "hopper": [
        "Suppilo"
    ],
    "ice": [
        "Jää"
    ],
    "packed_ice": [
        "Tiivistä jäätä"
    ],
    "blue_ice": [
        "Sinistä jäätä"
    ],
    "iron_trapdoor": [
        "Rautaluukku"
    ],
    "jukebox": [
        "Jukeboksi"
    ],
    "jungleFence": [
        "Viidakkoaita"
    ],
    "jungle_fence_gate": [
        "Viidakkoaidan portti"
    ],
    "ladder": [
        "Tikapuut"
    ],
    "flowing_lava": [
        "Laava"
    ],
    "leaves2": [
        "Akasianlehtiä",
        "Akasianlehtiä",
        "Tummia tammenlehtiä"
    ],
    "lever": [
        "Vipu"
    ],
    "glowstone": [
        "Loistekivi"
    ],
    "lit_pumpkin": [
        "Kurpitsalyhty"
    ],
    "lockedchest": [
        "Lukittu arkku"
    ],
    "log2": [
        "Akasiapölkky",
        "Akasiapölkky",
        "Tumma tammipölkky"
    ],
    "log": [
        "Pölkky",
        "Tammipölkky",
        "Kuusipölkky",
        "Koivupölkky",
        "Palmupölkky"
    ],
    "magma": [
        "Magmakuutio"
    ],
    "melon_block": [
        "Meloni"
    ],
    "mob_spawner": [
        "Hirviönsynnytin"
    ],
    "monster_egg": [
        "Saastakivi",
        "Saastakivi",
        "Saastainen mukulakivi",
        "Saastakivitiili",
        "Saastainen sammaleinen kivitiili",
        "Saastainen murtunut kivitiili",
        "Saastainen veistetty kivitiili"
    ],
    "mushroom": [
        "Sieni"
    ],
    "noteblock": [
        "Sävelkuutio"
    ],
    "mycelium": [
        "Homerihmasto"
    ],
    "nether_brick": [
        "Hornatiilikuutio"
    ],
    "red_nether_brick": [
        "Punainen hornatiili"
    ],
    "nether_brick_fence": [
        "Hornatiiliaita"
    ],
    "quartz_ore": [
        "Hornakvartsimalmi"
    ],
    "netherreactor": [
        "Hornareaktoriydin"
    ],
    "nether_wart_block": [
        "Hornapahkakuutio"
    ],
    "warped_wart_block": [
        "Epämuotoinen pahkakuutio"
    ],
    "unlit_redstone_torch": [
        "Punakivisoihtu"
    ],
    "redstone_torch": [
        "Punakivisoihtu"
    ],
    "soul_torch": [
        "Sielutulisoihtu"
    ],
    "obsidian": [
        "Obsidiaani"
    ],
    "coal_ore": [
        "Hiilimalmi"
    ],
    "diamond_ore": [
        "Timanttimalmi"
    ],
    "emerald_ore": [
        "Smaragdimalmi"
    ],
    "gold_ore": [
        "Kultamalmi"
    ],
    "iron_ore": [
        "Rautamalmi"
    ],
    "lapis_ore": [
        "Lasuurikivimalmi"
    ],
    "redstone_ore": [
        "Punakivimalmi"
    ],
    "oreRuby": [
        "Rubiinimalmi"
    ],
    "observer": [
        "Tarkkailija"
    ],
    "piston": [
        "Mäntä"
    ],
    "sticky_piston": [
        "Liimamäntä"
    ],
    "portal": [
        "Siirtoportaali"
    ],
    "potatoes": [
        "Perunoita"
    ],
    "stone_pressure_plate": [
        "Kivinen painelaatta"
    ],
    "wooden_pressure_plate": [
        "Tammipainelaatta"
    ],
    "acacia_pressure_plate": [
        "Akasiapainelaatta"
    ],
    "birch_pressure_plate": [
        "Koivupainelaatta"
    ],
    "dark_oak_pressure_plate": [
        "Tumma tammipainelaatta"
    ],
    "jungle_pressure_plate": [
        "Viidakkopainelaatta"
    ],
    "spruce_pressure_plate": [
        "Kuusipainelaatta"
    ],
    "prismarine": [
        "Prismariini",
        "Prismariini",
        "Prismariinitiiliä",
        "Tumma prismariini"
    ],
    "pumpkin": [
        "Kurpitsa"
    ],
    "pumpkin_stem": [
        "Kurpitsan varsi"
    ],
    "quartz_block": [
        "Kvartsikuutio",
        "Kvartsikuutio",
        "Veistetty kvartsikuutio",
        "Kvartsipilarikuutio",
        "Sileä kvartsikuutio"
    ],
    "rail": [
        "Raide"
    ],
    "red_mushroom": [
        "Punainen sieni"
    ],
    "crimson_fungus": [
        "Purppuranpunainen sieni"
    ],
    "warped_fungus": [
        "Epämuotoinen sieni"
    ],
    "red_mushroom_block": [
        "Punainen sienikuutio"
    ],
    "red_sandstone": [
        "Punaista hiekkakiveä",
        "Punaista hiekkakiveä",
        "Veistettyä punaista hiekkakiveä",
        "Leikattu punainen hiekkakivi",
        "Sileää punaista hiekkakiveä"
    ],
    "redstone_wire": [
        "Punakivitomu"
    ],
    "redstone_lamp": [
        "Punakivilamppu"
    ],
    "sand": [
        "Hiekka",
        "Hiekka",
        "Punaista hiekkaa"
    ],
    "sandstone": [
        "Hiekkakivi",
        "Hiekkakivi",
        "Veistettyä hiekkakiveä",
        "Leikattu hiekkakivi",
        "Sileä hiekkakivi"
    ],
    "sapling": [
        "Tammentaimi",
        "Tammentaimi",
        "Kuusentaimi",
        "Koivuntaimi",
        "Palmuntaimi",
        "Akasiantaimi",
        "Tumma tammitaimi"
    ],
    "seaLantern": [
        "Merilyhty"
    ],
    "standing_sign": [
        "Kyltti"
    ],
    "spruce_standing_sign": [
        "Kuusikyltti"
    ],
    "birch_standing_sign": [
        "Koivukyltti"
    ],
    "jungle_standing_sign": [
        "Viidakkokyltti"
    ],
    "acacia_standing_sign": [
        "Akasiakyltti"
    ],
    "darkoak_standing_sign": [
        "Tumma tammikyltti"
    ],
    "slime": [
        "Limakuutio"
    ],
    "snow": [
        "Lunta"
    ],
    "sponge": [
        "Pesusieni",
        "Pesusieni",
        "Märkä pesusieni"
    ],
    "spruceFence": [
        "Kuusiaita"
    ],
    "spruce_fence_gate": [
        "Kuusiaidan portti"
    ],
    "brick_stairs": [
        "Tiiliportaat"
    ],
    "nether_brick_stairs": [
        "Hornatiiliportaat"
    ],
    "quartz_stairs": [
        "Kvartsiportaat"
    ],
    "smooth_quartz_stairs": [
        "Sileät kvartsiportaat"
    ],
    "red_sandstone_stairs": [
        "Punaiset hiekkakiviportaat"
    ],
    "sandstone_stairs": [
        "Hiekkakiviportaat"
    ],
    "stone_stairs": [
        "Mukulakiviportaat"
    ],
    "normal_stone_stairs": [
        "Kiviportaat"
    ],
    "stone_brick_stairs": [
        "Kivitiiliportaat"
    ],
    "oak_stairs": [
        "Tammiportaat"
    ],
    "acacia_stairs": [
        "Akasiaportaat"
    ],
    "birch_stairs": [
        "Koivuportaat"
    ],
    "dark_oak_stairs": [
        "Tummat tammiportaat"
    ],
    "jungle_stairs": [
        "Palmuportaat"
    ],
    "spruce_stairs": [
        "Kuusiportaat"
    ],
    "purpur_stairs": [
        "Purppuraportaat"
    ],
    "prismarine_stairs": [
        "Prismariiniportaat"
    ],
    "dark_prismarine_stairs": [
        "Tummat prismariiniportaat"
    ],
    "prismarine_bricks_stairs": [
        "Prismariinitiiliportaat"
    ],
    "granite_stairs": [
        "Graniittiportaat"
    ],
    "diorite_stairs": [
        "Dioriittiportaat"
    ],
    "andesite_stairs": [
        "Andesiittiportaat"
    ],
    "polished_granite_stairs": [
        "Kiillotetut graniittiportaat"
    ],
    "polished_diorite_stairs": [
        "Kiillotetut dioriittiportaat"
    ],
    "polished_andesite_stairs": [
        "Kiillotetut andesiittiportaat"
    ],
    "mossy_stone_brick_stairs": [
        "Sammaleiset kivitiiliportaat"
    ],
    "smooth_red_sandstone_stairs": [
        "Sileät punaiset hiekkakiviportaat"
    ],
    "smooth_sandstone_stairs": [
        "Sileät hiekkakiviportaat"
    ],
    "end_brick_stairs": [
        "Äärikivitiiliportaat"
    ],
    "mossy_cobblestone_stairs": [
        "Sammaleiset mukulakiviportaat"
    ],
    "red_nether_brick_stairs": [
        "Punaiset hornatiiliportaat"
    ],
    "smooth_stone": [
        "Sileää kiveä"
    ],
    "standing_banner": [
        "Lippu",
        "Musta lippu",
        "Punainen lippu",
        "Vihreä lippu",
        "Ruskea lippu",
        "Sininen lippu",
        "Violetti lippu",
        "Syaani lippu",
        "Vaaleanharmaa lippu",
        "Harmaa lippu",
        "Vaaleanpunainen lippu",
        "Limetinvihreä lippu",
        "Keltainen lippu",
        "Vaaleansininen lippu",
        "Aniliininpunainen lippu",
        "Oranssi lippu",
        "Lippu"
    ],
    "stone": [
        "Kivi",
        "Kivi",
        "Graniitti",
        "Kiillotettu graniitti",
        "Dioriitti",
        "Kiillotettu dioriitti",
        "Andesiitti",
        "Kiillotettu andesiitti"
    ],
    "cobblestone": [
        "Mukulakivi"
    ],
    "stonebrick": [
        "Kivitiiliä",
        "Kivitiiliä",
        "Sammaleisia kivitiiliä",
        "Veistettyjä kivitiiliä"
    ],
    "stonecutter": [
        "Kivileikkuri"
    ],
    "stonecutter_block": [
        "Kivileikkuri"
    ],
    "mossy_cobblestone": [
        "Sammaleista mukulakiveä"
    ],
    "double_stone_slab": [
        "Kivilaatta",
        "Kivilaatta",
        "Hiekkakivilaatta",
        "Puulaatta",
        "Mukulakivilaatta",
        "Tiililaatta",
        "Kivitiililaatta",
        "Kvartsilaatta",
        "Hornatiililaatta"
    ],
    "stone_slab": [
        "Kivilaatta",
        "Sileä kivilaatta",
        "Hiekkakivilaatta",
        "Puulaatta",
        "Mukulakivilaatta",
        "Tiililaatta",
        "Kivitiililaatta",
        "Kvartsilaatta",
        "Hornatiililaatta"
    ],
    "double_stone_slab2": [
        "Punainen hiekkakivilaatta",
        "Punainen hiekkakivilaatta"
    ],
    "stone_slab2": [
        "Punainen hiekkakivilaatta",
        "Punainen hiekkakivilaatta",
        "Purppuralaatta",
        "Prismariinilaatta",
        "Prismariinitiililaatta",
        "Tumma prismariinilaatta",
        "Sammaleinen mukulakivilaatta",
        "Sileä hiekkakivilaatta",
        "Punainen hornatiililaatta"
    ],
    "stone_slab3": [
        "Äärikivitiililaatta",
        "Äärikivitiililaatta",
        "Sileä punainen hiekkakivilaatta",
        "Kiillotettu andesiittilaatta",
        "Andesiittilaatta",
        "Dioriittilaatta",
        "Kiillotettu dioriittilaatta",
        "Graniittilaatta",
        "Kiillotettu graniittilaatta"
    ],
    "stone_slab4": [
        "Sammalleinen kivitiililaatta",
        "Sammalleinen kivitiililaatta",
        "Sileä kvartsilaatta",
        "Kivilaatta",
        "Leikattu hiekkakivilaatta",
        "Punainen hiekkakivilaatta"
    ],
    "coral_block": [
        "Putkikorallikuutio",
        "Putkikorallikuutio",
        "Aivokorallikuutio",
        "Kuplakorallikuutio",
        "Tulikorallikuutio",
        "Sarvikorallikuutio",
        "Kuollut putkikorallikuutio",
        "Kuollut aivokorallikuutio",
        "Kuollut kuplakorallikuutio",
        "Kuollut tulikorallikuutio",
        "Kuollut sarvikorallikuutio"
    ],
    "tallgrass": [
        "Ruoho",
        "Ruoho",
        "Saniainen"
    ],
    "seagrass": [
        "Meriruoho",
        "Meriruoho"
    ],
    "sea_pickle": [
        "Merimakkara"
    ],
    "turtle_egg": [
        "Merikilpikonnan muna"
    ],
    "coral": [
        "Putkikoralli",
        "Putkikoralli",
        "Aivokoralli",
        "Kuplakoralli",
        "Tulikoralli",
        "Sarvikoralli",
        "Kuollut putkikoralli",
        "Kuollut aivokoralli",
        "Kuollut kuplakoralli",
        "Kuollut tulikoralli",
        "Kuollut sarvikoralli"
    ],
    "coral_fan": [
        "Putkikoralliviuhka",
        "Putkikoralliviuhka",
        "Aivokoralliviuhka",
        "Kuplakoralliviuhka",
        "Tulikoralliviuhka",
        "Sarvikoralliviuhka"
    ],
    "coral_fan_dead": [
        "Kuollut putkikoralliviuhka",
        "Kuollut putkikoralliviuhka",
        "Kuollut aivokoralliviuhka",
        "Kuollut kuplakoralliviuhka",
        "Kuollut tulikoralliviuhka",
        "Kuollut sarvikoralliviuhka"
    ],
    "glass_pane": [
        "Lasiruutu"
    ],
    "tnt": [
        "TNT"
    ],
    "snow_layer": [
        "Suojalumi"
    ],
    "torch": [
        "Soihtu"
    ],
    "trapdoor": [
        "Tammilattialuukku"
    ],
    "acacia_trapdoor": [
        "Akasialattialuukku"
    ],
    "birch_trapdoor": [
        "Koivulattialuukku"
    ],
    "dark_oak_trapdoor": [
        "Tumma tammilattialuukku"
    ],
    "jungle_trapdoor": [
        "Viidakkolattialuukku"
    ],
    "spruce_trapdoor": [
        "Kuusilattialuukku"
    ],
    "tripWire": [
        "Ansalanka"
    ],
    "tripwire_hook": [
        "Ansalankakytkin"
    ],
    "vine": [
        "Köynnöksiä"
    ],
    "weeping_vines": [
        "Itkuköynnös"
    ],
    "twisting_vines": [
        "Kiemuraisia köynnöksiä"
    ],
    "flowing_water": [
        "Vesi"
    ],
    "water": [
        "Vesi"
    ],
    "waterlily": [
        "Lumpeenlehti"
    ],
    "web": [
        "Hämähäkinseitti"
    ],
    "heavy_weighted_pressure_plate": [
        "Painotettu painelaatta (painava)"
    ],
    "light_weighted_pressure_plate": [
        "Painotettu painelaatta (kevyt)"
    ],
    "end_stone": [
        "Äärikivi"
    ],
    "end_bricks": [
        "Äärikivitiiliä"
    ],
    "planks": [
        "Puulautoja",
        "Tammilautoja",
        "Kuusilautoja",
        "Koivulautoja",
        "Palmulautoja",
        "Akasialautoja",
        "Tummia tammilautoja"
    ],
    "wooden_slab": [
        "Puulaatta",
        "Tammilaatta",
        "Kuusilaatta",
        "Koivulaatta",
        "Palmulaatta",
        "Akasialaatta",
        "Tumma tammilaatta"
    ],
    "carpet": [
        "Matto",
        "Musta matto",
        "Punainen matto",
        "Vihreä matto",
        "Ruskea matto",
        "Sininen matto",
        "Violetti matto",
        "Syaani matto",
        "Vaaleanharmaa matto",
        "Harmaa matto",
        "Vaaleanpunainen matto",
        "Limetinvihreä matto",
        "Keltainen matto",
        "Vaaleansininen matto",
        "Aniliininpunainen matto",
        "Oranssi matto",
        "Valkoinen matto"
    ],
    "crafting_table": [
        "Nikkarointipöytä"
    ],
    "white_glazed_terracotta": [
        "Valkoinen lasitettu terrakotta",
        "Valkoinen lasitettu terrakotta"
    ],
    "orange_glazed_terracotta": [
        "Oranssi lasitettu terrakotta",
        "Oranssi lasitettu terrakotta"
    ],
    "magenta_glazed_terracotta": [
        "Aniliininpunainen lasitettu terrakotta",
        "Aniliininpunainen lasitettu terrakotta"
    ],
    "light_blue_glazed_terracotta": [
        "Vaaleansininen lasitettu terrakotta",
        "Vaaleansininen lasitettu terrakotta"
    ],
    "yellow_glazed_terracotta": [
        "Keltainen lasitettu terrakotta",
        "Keltainen lasitettu terrakotta"
    ],
    "lime_glazed_terracotta": [
        "Limetinvihreä lasitettu terrakotta",
        "Limetinvihreä lasitettu terrakotta"
    ],
    "pink_glazed_terracotta": [
        "Vaaleanpunainen lasitettu terrakotta",
        "Vaaleanpunainen lasitettu terrakotta"
    ],
    "gray_glazed_terracotta": [
        "Harmaa lasitettu terrakotta",
        "Harmaa lasitettu terrakotta"
    ],
    "silver_glazed_terracotta": [
        "Vaaleanharmaa lasitettu terrakotta",
        "Vaaleanharmaa lasitettu terrakotta"
    ],
    "cyan_glazed_terracotta": [
        "Syaani lasitettu terrakotta",
        "Syaani lasitettu terrakotta"
    ],
    "purple_glazed_terracotta": [
        "Violetti lasitettu terrakotta",
        "Violetti lasitettu terrakotta"
    ],
    "blue_glazed_terracotta": [
        "Sininen lasitettu terrakotta",
        "Sininen lasitettu terrakotta"
    ],
    "brown_glazed_terracotta": [
        "Ruskea lasitettu terrakotta",
        "Ruskea lasitettu terrakotta"
    ],
    "green_glazed_terracotta": [
        "Vihreä lasitettu terrakotta",
        "Vihreä lasitettu terrakotta"
    ],
    "red_glazed_terracotta": [
        "Punainen lasitettu terrakotta",
        "Punainen lasitettu terrakotta"
    ],
    "black_glazed_terracotta": [
        "Musta lasitettu terrakotta",
        "Musta lasitettu terrakotta"
    ],
    "concrete": [
        "Valkoinen betoni",
        "Valkoinen betoni",
        "Oranssi betoni",
        "Aniliininpunainen betoni",
        "Vaaleansininen betoni",
        "Keltainen betoni",
        "Limetinvihreä betoni",
        "Vaaleanpunainen betoni",
        "Harmaa betoni",
        "Vaaleanharmaa betoni",
        "Syaani betoni",
        "Violetti betoni",
        "Sininen betoni",
        "Ruskea betoni",
        "Vihreä betoni",
        "Punainen betoni",
        "Musta betoni"
    ],
    "glazedTerracottaWhite": [
        "Valkoinen lasitettu terrakotta"
    ],
    "glazedTerracottaOrange": [
        "Oranssi lasitettu terrakotta"
    ],
    "glazedTerracottaMagenta": [
        "Aniliininpunainen lasitettu terrakotta"
    ],
    "glazedTerracottaLightBlue": [
        "Vaaleansininen lasitettu terrakotta"
    ],
    "glazedTerracottaYellow": [
        "Keltainen lasitettu terrakotta"
    ],
    "glazedTerracottaLime": [
        "Limetinvihreä lasitettu terrakotta"
    ],
    "glazedTerracottaPink": [
        "Vaaleanpunainen lasitettu terrakotta"
    ],
    "glazedTerracottaGray": [
        "Harmaa lasitettu terrakotta"
    ],
    "glazedTerracottaSilver": [
        "Vaaleanharmaa lasitettu terrakotta"
    ],
    "glazedTerracottaCyan": [
        "Syaani lasitettu terrakotta"
    ],
    "glazedTerracottaPurple": [
        "Violetti lasitettu terrakotta"
    ],
    "glazedTerracottaBlue": [
        "Sininen lasitettu terrakotta"
    ],
    "glazedTerracottaBrown": [
        "Ruskea lasitettu terrakotta"
    ],
    "glazedTerracottaGreen": [
        "Vihreä lasitettu terrakotta"
    ],
    "glazedTerracottaRed": [
        "Punainen lasitettu terrakotta"
    ],
    "glazedTerracottaBlack": [
        "Musta lasitettu terrakotta"
    ],
    "concretePowder": [
        "Valkoinen betonijauhe",
        "Valkoinen betonijauhe",
        "Oranssi betonijauhe",
        "Aniliininpunainen betonijauhe",
        "Vaaleansininen betonijauhe",
        "Keltainen betonijauhe",
        "Limetinvihreä betonijauhe",
        "Vaaleanpunainen betonijauhe",
        "Harmaa betonijauhe",
        "Vaaleanharmaa betonijauhe",
        "Syaani betonijauhe",
        "Violetti betonijauhe",
        "Sininen betonijauhe",
        "Ruskea betonijauhe",
        "Vihreä betonijauhe",
        "Punainen betonijauhe",
        "Musta betonijauhe"
    ],
    "stripped_spruce_log": [
        "Kelokuusipölkky"
    ],
    "stripped_dark_oak_log": [
        "Tumma tammikelopölkky"
    ],
    "stripped_birch_log": [
        "Kelokoivupölkky"
    ],
    "stripped_jungle_log": [
        "Kelopalmupölkky"
    ],
    "stripped_oak_log": [
        "Kelotammipölkky"
    ],
    "stripped_acacia_log": [
        "Keloakasiapölkky"
    ],
    "bamboo": [
        "Bambu"
    ],
    "scaffolding": [
        "Rakennusteline"
    ],
    "grindstone": [
        "Tahko"
    ],
    "cartography_table": [
        "Kartantekijän pöytä"
    ],
    "lantern": [
        "Lyhty"
    ],
    "soul_lantern": [
        "Sielutulilyhty"
    ],
    "smoker": [
        "Savustin"
    ],
    "smithing_table": [
        "Sepän pöytä"
    ],
    "barrel": [
        "Tynnyri"
    ],
    "campfire": [
        "Nuotio"
    ],
    "loom": [
        "Kangaspuut"
    ],
    "lectern": [
        "Puhujapöytä"
    ],
    "sweet_berry_bush": [
        "Makeamarjapensas"
    ],
    "wood": [
        "Tammipuuta",
        "Tammipuuta",
        "Kuusipuuta",
        "Koivupuuta",
        "Palmupuuta",
        "Akasiapuuta",
        "Tummaa tammipuuta",
        null,
        null,
        "Tammen kelopuuta",
        "Kuusen kelopuuta",
        "Koivun kelopuuta",
        "Palmun kelopuuta",
        "Akasian kelopuuta",
        "Tummaa tammen kelopuuta"
    ],
    "netherite_block": [
        "Horniittikuutio"
    ],
    "ancient_debris": [
        "Muinaisromu"
    ],
    "nether_gold_ore": [
        "Hornakultamalmia"
    ],
    "respawn_anchor": [
        "Paluukohta-ankkuri"
    ],
    "crying_obsidian": [
        "Itkevä obsidiaani"
    ]
}
};
freeze(lang_data);
export = lang_data;

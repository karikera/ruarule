
import { freeze } from './freeze';
import { LangId } from './langid';
const lang_data = {
id: "pl_PL" as LangId,
commands:{
    "ability_description": "Ustawia umiejętność gracza.",
    "ability_noability": "Brak dostępnej umiejętności o nazwie '%1$s'",
    "ability_granted": "Przyznano ci umiejętność '%1$s'",
    "ability_revoked": "Odebrano ci umiejętność '%1$s'",
    "ability_success": "Umiejętność zaktualizowana",
    "achievement_alreadyHave": "Gracz %1$s już ma osiągnięcie %2$s",
    "achievement_description": "Daje lub odbiera graczowi osiągnięcie.",
    "achievement_dontHave": "Gracz %1$s nie ma osiągnięcia %2$s",
    "achievement_give_success_all": "Wszystkie osiągnięcia przekazane: %1$s",
    "achievement_give_success_one": "%1$s otrzymuje następującą statystykę: %2$s",
    "achievement_statTooLow": "Gracz %1$s nie ma następującej statystyki: %2$s",
    "achievement_take_success_all": "Osiągnięcia zabrane: %1$s",
    "achievement_take_success_one": "Statystyka (%1$s) zabrana: %2$s",
    "achievement_unknownAchievement": "Nieznane osiągnięcie lub statystyka '%1$s'",
    "agent_attack_success": "Agent: atak (powodzenie)",
    "agent_attack_failed": "Agent: atak (niepowodzenie)",
    "agent_collect_success": "Agent: zbieranie (powodzenie)",
    "agent_collect_failed": "Agent: zbieranie (niepowodzenie)",
    "agent_createagent_success": "Agent: utworzono",
    "agent_createagent_failed": "Agent: nie udało się utworzyć",
    "agent_destroy_success": "Agent: zniszczenie bloku (powodzenie)",
    "agent_destroy_failed": "Agent: zniszczenie (niepowodzenie)",
    "agent_detect_success": "Agent: wykrycie (powodzenie)",
    "agent_detect_failed": "Agent: wykrycie (niepowodzenie)",
    "agent_detectredstone_success": "Agent: detectredstone (powodzenie)",
    "agent_detectredstone_failed": "Agent: detectredstone (niepowodzenie)",
    "agent_drop_success": "Agent: upuszczenie (powodzenie)",
    "agent_drop_failed": "Agent: upuszczenie (niepowodzenie)",
    "agent_dropall_success": "Agent: dropall (powodzenie)",
    "agent_dropall_failed": "Agent: dropall (niepowodzenie)",
    "agent_getitemcount_success": "Agent: getitemcount (powodzenie)",
    "agent_getitemcount_failed": "Agent: getitemcount (niepowodzenie)",
    "agent_getitemspace_success": "Agent: getitemspace (powodzenie)",
    "agent_getitemspace_failed": "Agent: getitemspace (niepowodzenie)",
    "agent_getitemdetail_success": "Agent: getitemdetail (powodzenie)",
    "agent_getitemdetail_failed": "Agent: getitemdetail (powodzenie)",
    "agent_getposition_success": "Agent getposition (powodzenie)",
    "agent_getposition_failed": "Agent getposition (niepowodzenie)",
    "agent_inspect_success": "Agent: badanie (powodzenie)",
    "agent_inspect_failed": "Agent: badanie (niepowodzenie)",
    "agent_inspectdata_success": "Agent: badanie (powodzenie)",
    "agent_inspectdata_failed": "Agent: badanie (niepowodzenie)",
    "agent_move_success": "Agent: ruch (powodzenie)",
    "agent_move_failed": "Agent: ruch (niepowodzenie)",
    "agent_outofrange": "Nie można wydać polecenia, Agent jest poza zasięgiem",
    "agent_place_success": "Agent: umieszczenie (powodzenie)",
    "agent_place_failed": "Agent: umieszczenie (niepowodzenie)",
    "agent_setitem_success": "Agent set item (powodzenie)",
    "agent_setitem_failed": "Agent set item (niepowodzenie)",
    "agent_turn_success": "Agent: obrót (powodzenie)",
    "agent_turn_failed": "Agent: obrót (niepowodzenie)",
    "agent_till_success": "Agent: till (powodzenie)",
    "agent_till_failed": "Agent: till (niepowodzenie)",
    "agent_tpagent_description": "Teleportuj swojego Agenta.",
    "agent_tpagent_success": "Agent: teleportowanie (powodzenie)",
    "agent_tpagent_failed": "Agent: teleportowanie (niepowodzenie)",
    "agent_transfer_success": "Agent: przeniesienie (powodzenie)",
    "agent_transfer_failed": "Agent: przeniesienie (niepowodzenie)",
    "always_day": "Cykl dnia i nocy: %1$s",
    "always_day_locked": "Cykl dnia i nocy zablokowany",
    "always_day_unlocked": "Cykl dnia i nocy odblokowany",
    "ban_description": "Dopisuje gracza do listy zablokowanych.",
    "autocomplete_a": "wszyscy gracze",
    "autocomplete_c": "Mój Agent",
    "autocomplete_e": "wszystkie obiekty",
    "autocomplete_p": "najbliższy gracz",
    "autocomplete_r": "losowy gracz",
    "autocomplete_s": "ty",
    "autocomplete_v": "wszyscy Agenci",
    "ban_failed": "Nie można zbanować gracza %1$s",
    "ban_success": "Gracz %1$s został zbanowany",
    "banip_description": "Dopisuje adres IP gracza do listy zablokowanych.",
    "banip_invalid": "Wprowadzono nieprawidłowy adres IP lub nazwę gracza, który nie jest online",
    "banip_success": "Zbanowano adres IP %1$s",
    "banip_success_players": "Zbanowano adres IP %1$s należący do: %2$s",
    "banlist_ips": "Zbanowane adresy IP (łącznie %1$d):",
    "banlist_players": "Zbanowani gracze (łącznie %1$d):",
    "blockdata_description": "Modyfikuje tag danych bloku.",
    "blockdata_placeFailed": "Nie można tutaj umieszczać bloków",
    "blockdata_destroyFailed": "Nie można tutaj kopać",
    "blockdata_failed": "Nie zmieniono znacznika danych: %1$s",
    "blockdata_notValid": "Namierzony blok nie jest blokiem zawierającym dane",
    "blockdata_outOfWorld": "Nie można zmieniać bloku poza światem",
    "blockdata_success": "Dane bloków zaktualizowane do: %1$s",
    "blockdata_tagError": "Parsowanie znacznika danych nie powiodło się: %1$s",
    "bossbar_add_success": "Stworzono niestandardowy pasek bossa [%1$s]",
    "bossbar_add_failure_invalid": "Nieprawidłowy identyfikator paska bossa. Identyfikatory powinny mieć postać namespace:id lub id (zmienia na domyślne ustawienie przestrzeni nazw Minecrafta).",
    "bossbar_add_failure_exists": "Pasek bossa o identyfikatorze „%1$s” już istnieje",
    "bossbar_description": "Tworzy i modyfikuje paski bossów",
    "bossbar_get_max": "Maksimum w przypadku niestandardowego paska bossa [%1$s] wynosi %2$d",
    "bossbar_get_players": "Aktualna liczba graczy online w przypadku niestandardowego paska bossa [%1$s] wynosi %2$s: %3$s",
    "bossbar_get_players_none": "W przypadku niestandardowego paska bossa [%1$s] aktualnie nie ma żadnych graczy online",
    "bossbar_get_players_one": "W przypadku niestandardowego paska bossa [%1$s] aktualnie 1 gracz jest online: %2$s",
    "bossbar_get_value": "Wartość niestandardowego paska bossa [%1$s] wynosi %2$d",
    "bossbar_get_visible_true": "Niestandardowy pasek bossa [%1$s] jest aktualnie wyświetlany",
    "bossbar_get_visible_false": "Niestandardowy pasek bossa [%1$s] jest aktualnie ukryty",
    "bossbar_list": "Liczba aktywnych niestandardowych pasków bossa wynosi %1$s: %2$s",
    "bossbar_list_none": "Żadne niestandardowe paski bossa nie są aktywne",
    "bossbar_list_one": "Aktywny jest 1 niestandardowy pasek bossa: %1$s",
    "bossbar_notFound": "Nie istnieje żaden niestandardowy pasek bossa o identyfikatorze „%1$s”",
    "bossbar_remove": "Usunięto niestandardowy pasek bossa [%1$s]",
    "change_setting_description": "Zmienia ustawienia na serwerze dedykowanym podczas jego działania.",
    "change_setting_success": "Zmieniono: %1$s",
    "chunkinfo_compiled": "Kompilacja chunka.",
    "chunkinfo_data": "Pierwsze 64 wierzchołki to: %1$s",
    "chunkinfo_empty": "Chunk jest pusty.",
    "chunkinfo_hasLayers": "Chunk ma warstwy: %1$s",
    "chunkinfo_hasNoRenderableLayers": "Chunk nie ma renderowalnych warstw.",
    "chunkinfo_isEmpty": "Chunk ma puste warstwy: %1$s",
    "chunkinfo_location": "Koordynaty chunka: (%1$d, %2$d, %3$d)",
    "chunkinfo_noChunk": "Nie znaleziono chunka pod koordynatami: %1$d, %2$d, %3$d",
    "chunkinfo_notCompiled": "Chunk nie jest skompilowany.",
    "chunkinfo_notEmpty": "Chunk nie jest pusty.",
    "chunkinfo_vertices": "Bufor warstwy (%1$s) zawiera wierzchołki: %2$d",
    "classroommode_description": "Spróbuj uruchomić tryb klasowy i się z nim połączyć",
    "classroommode_success": "Próba uruchomienia trybu klasowego...",
    "clear_description": "Usuwa przedmioty z ekwipunku gracza.",
    "clear_failure": "Nie udało się wyczyścić ekwipunku gracza %1$s",
    "clear_failure_no_items": "Nie udało się wyczyścić ekwipunku gracza %1$s. Brak przedmiotów do usunięcia",
    "clear_success": "Wyczyszczono ekwipunek gracza %1$s. Usunięto przedmioty (%2$d)",
    "clear_tagError": "Parsowanie znacznika danych nie powiodło się: %1$s",
    "clear_testing": "Gracz %1$s ma przedmioty (%2$d), które spełniają wymagania",
    "clearfixedinv_description": "Usuwa wszystkie ustalone miejsca w ekwipunku.",
    "clearfixedinv_success": "Wyczyszczono ustalony ekwipunek",
    "clone_description": "Kopiuje bloki z jednego regionu do innego.",
    "clone_failed": "Nie sklonowano bloków",
    "clone_filtered_error": "Użycie filtra wymaga określenia bloku filtrującego",
    "clone_noOverlap": "Miejsca źródłowe i docelowe nie mogą być takie same",
    "clone_outOfWorld": "Nie można uzyskać dostępu do bloków spoza świata",
    "clone_success": "Sklonowano bloki (%1$d)",
    "clone_tooManyBlocks": "Zbyt wiele bloków w podanym obszarze (%1$d > %2$d)",
    "closechat_description": "Zamyka okno czatu lokalnego gracza, jeśli jest otwarte.",
    "closechat_success": "Czat zamknięty",
    "closechat_failure": "Czat był zamknięty",
    "closewebsocket_description": "Zamyka połączenie WebSocket, jeżeli takowe istnieje.",
    "code_description": "Uruchamianie Konstruktora kodów.",
    "code_success": "Uruchomiono Konstruktor kodów.",
    "compare_failed": "Miejsca źródłowe i docelowe nie są takie same",
    "compare_outOfWorld": "Nie można uzyskać dostępu do bloków spoza świata",
    "compare_success": "Porównano bloki (%1$d)",
    "compare_tooManyBlocks": "Zbyt wiele bloków w podanym obszarze (%1$d > %2$d)",
    "corruptworld_description": "Spacza świat wgrany na serwer.",
    "corruptworld_success": "Pomyślnie spaczono świat.",
    "daylock_description": "Blokuje i odblokowuje cykl dnia i nocy.",
    "debug_description": "Rozpoczyna lub kończy sesję debugowania.",
    "debug_notStarted": "Nie można zatrzymać debugowania z wykresem, ponieważ jeszcze nie zostało uruchomione!",
    "debug_start": "Rozpoczęto debugowanie z wykresem",
    "debug_stop": "Zatrzymano debugowanie z wykresem po %.2f sek. (%1$d ticków)",
    "defaultgamemode_description": "Ustawia domyślny tryb gry.",
    "defaultgamemode_success": "Domyślnym trybem gry świata jest obecnie %1$s",
    "deop_description": "Cofa graczowi status operatora.",
    "deop_failed": "Nie można cofnąć statusu operatora (zbyt wysoki poziom uprawnień): %s",
    "deop_success": "Pozbawiono uprawnień operatora: %s",
    "deop_message": "Pozbawiono cię uprawnień operatora",
    "difficulty_description": "Ustawia poziom trudności.",
    "difficulty_usage": "/difficulty <new difficulty>",
    "difficulty_success": "Ustawiono poziom trudności: %1$s",
    "downfall_success": "Przełączono opady",
    "effect_description": "Dodaj lub usuń efekty statusu.",
    "effect_failure_notActive": "Nie można zabrać efektu %1$s graczowi %2$s, ponieważ nie ma on żadnego efektu",
    "effect_failure_notActive_all": "Nie można zabrać efektów graczowi %1$s, ponieważ nie ma on żadnych",
    "effect_failure_notAMob": "%1$s nie może mieć efektów",
    "effect_notFound": "Brak efektu moba o ID %s",
    "effect_success": "Przekazano efekt %1$s * %2$d graczowi %3$s na %4$d sek.",
    "effect_success_removed": "Zabrano efekt %1$s graczowi %2$s",
    "effect_success_removed_all": "Zabrano wszystkie efekty graczowi %1$s",
    "enchant_cantCombine": "%1$s - nie można połączyć z: %2$s",
    "enchant_invalidLevel": "%1$s nie ma wsparcia dla poziomu: %2$d",
    "enchant_cantEnchant": "Wybranego zaklęcia nie można dodać do docelowego przedmiotu: %1$s",
    "enchant_description": "Dodaje zaklęcie do przedmiotu wybranego przez gracza.",
    "enchant_noItem": "Cel nie trzyma przedmiotu: %1$s",
    "enchant_notFound": "Brak zaklęcia o ID %1$d",
    "enchant_success": "Zaklinanie udane: %1$s",
    "entitydata_description": "Modyfikuje tag danych obiektu.",
    "entitydata_failed": "Nie zmieniono znacznika danych: %1$s",
    "entitydata_noPlayers": "%1$s jest graczem, graczy nie można zmieniać",
    "entitydata_success": "Dane bytów zaktualizowane do: %1$s",
    "entitydata_tagError": "Parsowanie znacznika danych nie powiodło się: %1$s",
    "execute_allInvocationsFailed": "Wszystkie inwokacje nieudane: '%1$s'",
    "execute_failed": "Nie udało się wykonać: '%1$s' jako %2$s",
    "execute_description": "Wykonuje polecenie w imieniu przynajmniej jednego obiektu.",
    "fill_description": "Wypełnia cały region lub jego części określonym blokiem.",
    "fill_failed": "Nie zapełniono żadnymi blokami",
    "fill_outOfWorld": "Nie można umieszczać bloków poza światem",
    "fill_success": "Zapełniono blokami: %1$d",
    "fill_tagError": "Parsowanie znacznika danych nie powiodło się: %1$s",
    "fill_tooManyBlocks": "Zbyt wiele bloków w podanym obszarze (%1$d > %2$d)",
    "fill_replace_auxvalue_invalid": "Nieprawidłowa wartość zastępowanych danych dla bloku: %1$s",
    "function_description": "Wykonuje polecenia znalezione w odpowiednim pliku funkcji.",
    "function_functionNameNotFound": "Nie znaleziono %1$s.",
    "function_invalidCharacters": "Funkcja zatytułowana „%s” jest nieprawidłowa, znak „%s” jest niedozwolony w nazwach funkcji.",
    "function_noEngineVersionSpecified": "Nie udało się uruchomić funkcji %s. Określ parametr min_engine_version w pliku manifest.json w paczce zachowań.",
    "function_success": "Wykonano z powodzeniem wejścia funkcji (%1$d).",
    "gamemode_description": "Ustawia tryb gry gracza.",
    "gamemode_success_other": "Ustaw tryb gry gracza %2$s na %1$s",
    "gamemode_success_self": "Ustaw swój tryb gry na %1$s",
    "gamemode_fail_invalid": "Nieprawidłowy tryb gry: '%1$s'",
    "gamerule_description": "Ustawia lub wysyła zapytanie o wartość reguły gry.",
    "gamerule_type_invalid": "Niewłaściwy typ użyty dla zasady gry '%1$s'",
    "gamerule_type_nocheatsenabled": "Reguły gry „%1$s” można używać tylko po włączeniu kodów w tym świecie.",
    "gamerule_nopermission": "Tylko właściciele serwerów mogą zmieniać '%1$s'",
    "gamerule_norule": "Brak dostępnej reguły gry o nazwie '%1$s'",
    "gamerule_success": "Reguła gry %1$s została zaktualizowana do %2$s",
    "generic_async_initiated": "'%1$s' polecenie rozpoczęte (async step %2$d)",
    "generic_boolean_invalid": "'%1$s' nie jest prawdą lub fałszem",
    "generic_chunk_notFound": "Nie znaleziono określonego chunka",
    "generic_componentError": "Parsowanie listy komponentów nieudane",
    "generic_dimension_notFound": "Nie odnaleziono określonego wymiaru",
    "generic_disabled": "Kody nie zostały włączone na tym poziomie.",
    "generic_disabled_templateLocked": "Ustawienia są obecnie zablokowane. Odblokuj opcje szablonu świata w ustawieniach gry, aby je zmienić.",
    "generic_double_tooBig": "Wprowadzona liczba jest zbyt wysoka (%.2f), musi wynosić co najwyżej %.2f",
    "generic_double_tooSmall": "Wprowadzona liczba jest zbyt niska (%.2f), musi wynosić co najmniej %.2f",
    "generic_duplicateType": "Duplikuj argumenty typu",
    "generic_duplicateSelectorArgument": "Duplikuj argumenty selektora (%s)",
    "generic_encryption_badkey": "Podano nieprawidłowy klucz publiczny. Potrzeba 120-bajtowego klucza po formatowaniu PEM.",
    "generic_encryption_badsalt": "Podano nieprawidłową sól. Potrzeba 16-bajtowej przed kodowaniem base 64.",
    "generic_encryption_required": "Wymagana szyfrowana sesja",
    "generic_entity_invalidType": "Nieprawidłowy rodzaj bytu '%1$s'",
    "generic_entity_invalidUuid": "Wprowadzony numer UUID obiektu ma nieprawidłowy format",
    "generic_entity_notFound": "Nie można znaleźć tego bytu",
    "generic_exception": "Podczas próby wykonania tego polecenia wystąpił nieznany błąd",
    "generic_invalidAgentType": "Wprowadź argument dotyczący selektora Agent-only",
    "generic_invalidcontext": "Niewłaściwy kontekst dla danego typu polecenia",
    "generic_invalidDevice": "Wprowadzone polecenie, %s, nie jest obsługiwane na tym urządzeniu",
    "generic_invalidPlayerType": "Argument typu stosowany wyłącznie do selektora-gracza",
    "generic_invalidType": "Nieznany argument typu",
    "generic_levelError": "Poziom maksymalny musi być większy od poziomu minimalnego",
    "generic_malformed_body": "Brak ciała lub jest ono zdeformowane",
    "generic_malformed_type": "Nieprawidłowy typ żądania",
    "generic_notimplemented": "Nie wprowadzono",
    "generic_num_invalid": "'%1$s' jest nieprawidłowym numerem",
    "generic_num_tooBig": "Wprowadzona liczba jest zbyt wysoka (%1$d), musi wynosić co najwyżej %2$d",
    "generic_num_tooSmall": "Wprowadzona liczba jest zbyt niska (%1$d), musi wynosić co najmniej %2$d",
    "generic_parameter_invalid": "'%1$s' jest nieprawidłowym parametrem",
    "generic_permission_selector": "<brak pozwolenia na rozszerzenie selektora>",
    "generic_player_notFound": "Nie można odnaleźć tego gracza",
    "generic_protocol_mismatch": "Wersja protokołu jest inna od wersji protokołu Minecrafta",
    "generic_radiusError": "Minimalny promień selektora musi być mniejszy od maksymalnego",
    "generic_radiusNegative": "Promień nie może być ujemny",
    "generic_rotationError": "Rotacja poza zakresem",
    "generic_running": "Polecenie jest już wykonywane",
    "generic_step_failed": "Krok polecenia nie powiódł się",
    "generic_syntax": "Nieoczekiwany błąd składni: %2$s\": at \"%1$s>>%2$s<<%3$s\"",
    "generic_noTargetMatch": "Brak wyników pasujących do selektora",
    "generic_targetNotPlayer": "Selektor musi być graczem",
    "generic_tooManyNames": "Zbyt wiele argumentów z nazwami celu",
    "generic_tooManyTargets": "Zbyt wiele celów pasuje do selektora",
    "generic_too_many_requests": "Wprowadzono zbyt dużo poleceń, poczekaj na wykonanie któregoś z nich",
    "generic_unknown": "Nieznane polecenie: %s. Sprawdź, czy takie polecenie istnieje i czy masz pozwolenie na jego wykorzystanie.",
    "generic_usage": "Zastosowanie: %1$s",
    "generic_usage_noparam": "Zastosowanie:",
    "generic_version_mismatch": "Żądana wersja nie istnieje dla tego polecenia",
    "generic_version_missing": "Polecenia niewysłane z czatu powinny określać wersję polecenia",
    "getchunkdata_description": "Pobiera piksele dla określonego chunka.",
    "getchunkdata_success": "Dane chunka pobrane",
    "getchunks_description": "Pobiera listę wczytywanych chunków.",
    "getchunks_success": "Lista chunków pobrana",
    "getlocalplayername_description": "Zwraca nazwę gracza lokalnego.",
    "getspawnpoint_description": "Pobiera pozycję odradzania się określonego gracza lub graczy.",
    "gettopsolidblock_description": "Pobiera pozycję najwyższego bloku niebędącego w powietrzu pod określonym miejscem położenia",
    "gettopsolidblock_notfound": "Brak litych bloków pod określonym miejscem położenia",
    "give_block_notFound": "Brak bloku o nazwie %1$d",
    "give_description": "Daje graczowi przedmiot.",
    "give_item_invalid": "Nieprawidłowa składnia polecenia: %s – brak o takich wartościach danych",
    "give_item_notFound": "Brak przedmiotu o nazwie %1$d",
    "give_map_invalidData": "Podano nieprawidłowe dane mapy",
    "give_map_featureNotFound": "Nie można wykonać mapy eksploracyjnej. Opcja nieznaleziona w tym wymiarze",
    "give_success": "Przekazano efekt %1$s * %2$d graczowi %3$s",
    "give_successRecipient": "Przekazano ci %1$s * %2$d",
    "give_tagError": "Parsowanie znacznika danych nie powiodło się: %1$s",
    "help_description": "Zapewnia pomoc/listę poleceń.",
    "help_footer": "Wskazówka: wpisując polecenie, użyj klawisza <tab>, żeby automatycznie uzupełnić polecenie lub jego argumenty",
    "help_header": "--- Wyświetlanie listy poleceń. Strona %1$d z %2$d (/help <page>) ---",
    "help_command_aliases": "%s (również %s):",
    "immutableworld_description": "Ustawia stan świata jako niezmienny.",
    "immutableworld_info": "immutableworld = %s",
    "kick_description": "Wyrzuca gracza z serwera.",
    "kick_description_edu": "Usuwa gracza z gry.",
    "kick_not_found": "Nie można odnaleźć gracza %1$s",
    "kick_not_yourself": "Nie możesz usunąć z gry siebie",
    "kick_success": "Gracz %1$s został wyrzucony z gry",
    "kick_success_reason": "Z gry '%1$s' wyrzucono gracza '%2$s'",
    "kick_success_reasonedu": "Usunięto gracza %1$s z gry „%2$s”",
    "kick_no_host": "Nie można wyrzucić gospodarza z gry.",
    "kick_no_teacher": "Nie można usunąć nauczycieli z gry.",
    "kill_successful_edu": "Usunięto %1$s",
    "kill_successful": "Zabito: %1$s",
    "kill_description_edu": "Usuwa obiekty (graczy, moby itp.).",
    "kill_description": "Wyrzuca obiekty (graczy, moby itp.).",
    "list_description": "Pokazuje graczy na serwerze.",
    "locate_description": "Wyświetla współrzędne najbliższej budowli danego typu.",
    "locate_fail_noplayer": "Polecenia może użyć wyłącznie właściwy gracz",
    "locate_fail_nostructurefound": "Nie znaleziono prawidłowej struktury w tym wymiarze",
    "locate_success": "Najbliższy obiekt %1$s znajduje się przy bloku %2$s, (y?), %3$s",
    "togglecontentlog_toggle": "Włącza/wyłącza polecenie dziennika treści",
    "togglecontentlog_enabled": "Dziennik treści włączony",
    "togglecontentlog_disabled": "Dziennik treści wyłączony",
    "me_description": "Wyświetla wiadomość o Tobie.",
    "message_display_incoming": "Gracz %1$s szepcze do ciebie: %2$s",
    "message_display_outgoing": "Szepczesz do gracza %1$s: %2$s",
    "message_sameTarget": "Nie możesz wysyłać sobie prywatnych wiadomości!",
    "mixer_description": "Regulacja interaktywności usługi Mixer",
    "mixer_error_unknown": "W usłudze Mixer wystąpił nieznany błąd.",
    "mixer_error_notoken": "Aby korzystać z interaktywnych funkcji usługi Mixer, należy zalogować się na konto Microsoft.",
    "mixer_error_notsupported": "Używane urządzenie nie wspiera interaktywnych funkcji usługi Mixer.",
    "mixer_interactive_error": "Wystąpił błąd usługi Mixer: %1$s",
    "mixer_scene_failed": "Nie istnieje scena o nazwie %1$s. Upewnij się, że wprowadzono poprawną nazwę sceny.",
    "mixer_scene_success": "Zmieniono scenę na następującą: %1$s",
    "mixer_start_success": "Rozpoczyna się interaktywna usługa Mixer: %1$s",
    "mixer_start_fail_invalidCode": "Nie znaleziono projektu o identyfikatorze \"%1$s\". Upewnij się, że identyfikator lub kod współdzielony jest prawidłowy.",
    "mixer_stop_success": "Interaktywna usługa Mixer zatrzymana.",
    "mixer_stop_fail": "Brak sesji z funkcjami interaktywnymi, którą można zatrzymać.",
    "mixer_status_notinitialized": "Nie zainicjowano funkcji interaktywnych.",
    "mixer_status_enabled": "Funkcje interaktywne są włączone.",
    "mixer_status_initializing": "Funkcje interaktywne są inicjalizowane.",
    "mixer_status_pending": "Funkcje interaktywne oczekują na uruchomienie.",
    "mixer_status_disabled": "Funkcje interaktywne są wyłączone.",
    "mixer_activatedbutton": "%1$s: aktywowano %2$s.",
    "mobevent_description": "Kontroluje, które wydarzenia mobów mogą zostać uruchomione.",
    "mobevent_eventsEnabledSetToTrue": "Wydarzenia mobów są teraz włączone. Wydarzenia indywidualne ustawione na false nie będą uruchamiane.",
    "mobevent_eventsEnabledSetToFalse": "Wydarzenia mobów są teraz wyłączone. Wydarzenia indywidualne nie będą uruchamiane.",
    "mobevent_eventsEnabledIsTrue": "Wydarzenia mobów są włączone. Wydarzenia indywidualne ustawione na false nie będą uruchamiane.",
    "mobevent_eventsEnabledIsFalse": "Wydarzenia mobów wyłączone. Wydarzenia indywidualne nie będą uruchamiane.",
    "mobevent_eventSetToTrue": "Wydarzenie mobów %s (id: %s) ustawiono na true.",
    "mobevent_eventSetToTrueButEventsDisabled": "Wydarzenie mobów %s (id: %s) ustawiono na true, ale wydarzenia mobów są wyłączone.",
    "mobevent_eventSetToFalse": "Wydarzenie mobów %s (id: %s) ustawiono na false.",
    "mobevent_eventIsTrue": "Wydarzenie mobów %s (id: %s) ustawiono na true.",
    "mobevent_eventIsTrueButEventsDisabled": "Wydarzenie mobów %s (id: %s) ustawiono na true, ale wydarzenia mobów są wyłączone.",
    "mobevent_eventIsFalse": "Wydarzenie mobów %s (id: %s) ustawiono na false.",
    "op_description": "Daje graczowi status operatora.",
    "op_failed": "Nie można nadać uprawnień operatora (gracz posiada już takie lub wyższe uprawnienia): %s",
    "op_success": "Nadano uprawnienia operatora: %s",
    "op_message": "Uzyskujesz uprawnienia operatora",
    "origin_commandblock": "BlokPoleceń",
    "origin_external": "Zewnętrzny",
    "origin_devconsole": "DevConsole",
    "origin_script": "Silnik skryptu",
    "origin_server": "Serwer",
    "origin_teacher": "Nauczyciel",
    "ops_description": "Ponownie wczytuje i nadaje uprawnienia operatora.",
    "ops_reloaded": "Uprawnienia operatorów ponownie wczytane z pliku.",
    "ops_set_success": "Ustawiono poziom operatora dla gracza %s.",
    "permissions_description": "Ponownie wczytuje i nadaje uprawnienia.",
    "permissions_reloaded": "Pozwolenia ponownie wczytane z pliku.",
    "permissions_set_failed": "Nie ustawiono poziomu uprawnień (%s) dla gracza %s.",
    "permissions_set_success": "Ustawiono poziom uprawnień (%s) dla gracza %s.",
    "permissions_save_failed": "Nie zapisano poziomu uprawnień (%s) dla gracza %s.",
    "permissions_save_success": "Zapisano poziom uprawnień (%s) dla gracza %s.",
    "spawnParticleEmitter_description": "Tworzy emiter cząstek",
    "particle_description": "Tworzy cząsteczki.",
    "particle_notFound": "Nieznana nazwa efektu (%1$s)",
    "particle_success": "Odtwarzanie efektu %1$s (liczba odtworzeń: %2$d)",
    "players_list": "Następujący gracze są online (%1$d/%2$d):",
    "players_list_names": "%s",
    "playsound_description": "Odtwarza dźwięk.",
    "playsound_playerTooFar": "Gracz %1$s jest zbyt daleko, żeby usłyszeć ten dźwięk",
    "playsound_success": "Dźwięk gracza '%1$s' do %2$s",
    "position_description": "Włącza/wyłącza współrzędne dla gracza.",
    "publish_failed": "Nie można utworzyć gry lokalnej",
    "publish_started": "Gra lokalna utworzona na porcie %1$s",
    "querytarget_description": "Pozyskaj informacje na temat transformacji, nazwy i numeru identyfikacyjnego danego bytu lub bytów.",
    "querytarget_success": "Dane wybranego bytu: %1$s",
    "reload_description": "Ponownie wczytuje wszystkie pliki funkcji ze wszystkich paczek zachowań.",
    "reload_success": "Ponownie załadowano istniejące pliki funkcji. Uruchom ponownie grę Minecraft, aby wczytać NOWE funkcje.",
    "replaceitem_description": "Zastępuje przedmioty w ekwipunku.",
    "replaceitem_failed": "Nie można zastąpić miejsca (%s) %d miejscem %d * %s",
    "replaceitem_keepFailed": "Istnieje już element zajmujący %s gniazdo %d.",
    "replaceitem_noContainer": "Blok przy %s nie jest pojemnikiem",
    "replaceitem_badSlotNumber": "Nie udało się zastąpić miejsca %d, podana wartość musi znajdować się w przedziale od %d do %d.",
    "replaceitem_success": "Zastąpiono miejsce (%s) %d miejscem %d * %s",
    "replaceitem_success_entity": "Zastąpiono miejsce %d (%s) należące do %s miejscem %d * %s",
    "replaceitem_tagError": "Parsowanie znacznika danych nie powiodło się: %1$s",
    "save_description": "Nadzoruj lub sprawdź sposób zapisywania danych przez grę na dysku.",
    "save_disabled": "Autozapis świata wyłączony",
    "save_enabled": "Autozapis świata włączony",
    "save_failed": "Zapisywanie nie powiodło się: %1$s",
    "save_start": "Zapisywanie...",
    "save_success": "Zapisano świat",
    "save_all_error": "Wystąpił błąd podczas próby zatrzymania przechowywania poziomu.",
    "save_all_success": "Dane zapisane. Pliki można już kopiować.",
    "save_off_alreadyOff": "Zapisywanie jest już wyłączone.",
    "save_on_alreadyOn": "Zapisywanie jest już włączone.",
    "save_on_notDone": "Poprzedni zapis nie został ukończony.",
    "save_on_description": "Włącza automatyczne zapisywanie na serwerze.",
    "save_on_success": "Zmiany poziomu są wznawiane.",
    "save_state_description": "Sprawdź, czy poprzedni zapis wszystkiego został ukończony i pokazuje pliki będące jego częścią.",
    "say_description": "Wysyła innym graczom wiadomość na czacie.",
    "scoreboard_description": "Rejestruje i wyświetla wynik w odniesieniu do różnych celów.",
    "scoreboard_allMatchesFailed": "Wszystkie dopasowania nieudane",
    "scoreboard_noMultiWildcard": "Można użyć tylko jednego własnego symbolu wieloznacznego",
    "scoreboard_objectiveNotFound": "Nie znaleziono celu o nazwie '%1$s'",
    "scoreboard_objectiveReadOnly": "Cel '%1$s' jest tylko do odczytu i nie można go ustawić",
    "scoreboard_objectives_add_alreadyExists": "Cel o nazwie '%1$s' już istnieje",
    "scoreboard_objectives_add_displayTooLong": "Nazwa celu '%1$s' jest zbyt długa. Może mieć co najwyżej następującą liczbę znaków: %2$d",
    "scoreboard_objectives_add_success": "Dodano nowy cel '%1$s'",
    "scoreboard_objectives_add_tooLong": "Nazwa celu '%1$s' jest zbyt długa. Może mieć co najwyżej następującą liczbę znaków: %2$d",
    "scoreboard_objectives_add_wrongType": "Nieprawidłowy rodzaj kryteriów celu '%1$s'",
    "scoreboard_objectives_add_needName": "Cel musi mieć nazwę.",
    "scoreboard_objectives_description": "Modyfikacja celów na tablicy wyników.",
    "scoreboard_objectives_list_count": "Cele na tablicy wyników (%1$d):",
    "scoreboard_objectives_list_empty": "Brak celów na tablicy wyników",
    "scoreboard_objectives_list_entry": "- %1$s: wyświetlany jako '%2$s' (rodzaj: '%3$s')",
    "scoreboard_objectives_remove_success": "Usunięto cel '%1$s'",
    "scoreboard_objectives_setdisplay_invalidSlot": "Brak takiego miejsca ('%1$s') na tablicy wyników",
    "scoreboard_objectives_setdisplay_successCleared": "Wyczyszczono miejsce celu '%1$s' na tablicy wyników",
    "scoreboard_objectives_setdisplay_successSet": "Ustaw wyświetlanie celu na miejscach od '%1$s' do '%2$s'",
    "scoreboard_players_add_success": "Dodano %1$d do celu [%2$s] dla gracza %3$s (obecnie %4$d)",
    "scoreboard_players_add_multiple_success": "Dodano %1$d do celu [%2$s] dla kilku graczy (%3$d)",
    "scoreboard_players_nameNotFound": "Należy podać nazwę gracza.",
    "scoreboard_players_enable_noTrigger": "Cel %1$s nie jest wyzwalaczem",
    "scoreboard_players_enable_success": "Włączono wyzwalacz %1$s dla %2$s",
    "scoreboard_players_list_count": "Wyświetlanie rejestrowanych graczy (%1$d) na tablicy wyników:",
    "scoreboard_players_list_empty": "Na tablicy wyników nie ma rejestrowanych graczy",
    "scoreboard_players_list_player_count": "Wyświetlanie rejestrowanych celów (%1$d) dla %2$s:",
    "scoreboard_players_list_player_empty": "Gracz %1$s nie ma zapisanych wyników",
    "scoreboard_players_list_player_entry": "- %2$s: %1$d (%3$s)",
    "scoreboard_players_operation_invalidOperation": "%1$s – nieprawidłowe działanie",
    "scoreboard_players_operation_notFound": "Nie znaleziono wyniku (%1$s) dla %2$s",
    "scoreboard_players_operation_success": "Zaktualizowano [%1$s] dla kilku graczy (%2$d)",
    "scoreboard_players_offlinePlayerName": "Gracz offline",
    "scoreboard_players_random_invalidRange": "Min. %1$d to nie mniej niż maks. %2$d",
    "scoreboard_players_remove_success": "Usunięto %1$d z celu [%2$s] dla gracza %3$s (obecnie %4$d)",
    "scoreboard_players_remove_multiple_success": "Usunięto %1$d z celu [%2$s] dla kilku graczy (%3$d)",
    "scoreboard_players_reset_success": "Zresetuj wyniki gracza %1$s",
    "scoreboard_players_resetscore_success": "Zresetuj wynik (%1$s) gracza %2$s",
    "scoreboard_players_set_success": "Ustaw [%1$s] dla gracza %2$s na %3$d",
    "scoreboard_players_set_multiple_success": "Ustaw [%1$s] dla kilku graczy (%2$d) na %3$d",
    "scoreboard_players_set_tagError": "Nie można sparsować znacznika danych, przyczyna: %1$s",
    "scoreboard_players_set_tagMismatch": "Znacznik danych nie pasuje do %1$sd",
    "scoreboard_players_score_notFound": "Brak wyniku %1$s w odniesieniu do %2$s",
    "scoreboard_players_test_failed": "Wynik %1$d nie znajduje się w zakresie %2$d do %3$d",
    "scoreboard_players_test_success": "Wynik %1$d znajduje się w zakresie %2$d do %3$d",
    "scoreboard_teamNotFound": "Nie znaleziono drużyny o nazwie '%1$s'",
    "scoreboard_teams_add_alreadyExists": "Drużyna o nazwie '%1$s' już istnieje",
    "scoreboard_teams_add_displayTooLong": "Wyświetlana nazwa drużyny '%1$s' jest zbyt długa, może mieć co najwyżej następującą liczbę znaków: %2$d",
    "scoreboard_teams_add_success": "Dodano nową drużynę '%1$s'",
    "scoreboard_teams_add_tooLong": "Nazwa drużyny '%1$s' jest zbyt długa, może mieć co najwyżej następującą liczbę znaków: %2$d",
    "scoreboard_teams_empty_alreadyEmpty": "Drużyna %1$s jest już pusta, nie można usuwać nieistniejących graczy",
    "scoreboard_teams_empty_success": "Usunięto wszystkich graczy (%1$d) z drużyny %2$s",
    "scoreboard_teams_join_failure": "Nie można dodać graczy (%1$d) do drużyny %2$s: %3$s",
    "scoreboard_teams_join_success": "Dodano graczy (%1$d) do drużyny %2$s: %3$s",
    "scoreboard_teams_leave_failure": "Nie można usunąć graczy (%1$d) z ich drużyn: %2$s",
    "scoreboard_teams_leave_noTeam": "Nie jesteś w drużynie",
    "scoreboard_teams_leave_success": "Usunięto graczy (%1$d) z ich drużyn: %2$s",
    "scoreboard_teams_list_count": "Wyświetlanie drużyn (%1$d) na tablicy wyników:",
    "scoreboard_teams_list_empty": "Brak drużyn zapisanych na tablicy wyników",
    "scoreboard_teams_list_entry": "- %1$s: '%2$s' ma graczy: %3$d",
    "scoreboard_teams_list_player_count": "Wyświetlanie graczy (%1$d) w drużynie %2$s:",
    "scoreboard_teams_list_player_empty": "Drużyna %1$s nie ma graczy",
    "scoreboard_teams_list_player_entry": "- %2$s: %1$d (%3$s)",
    "scoreboard_teams_option_noValue": "Prawidłowe wartości dla opcji %1$s to: %2$s",
    "scoreboard_teams_option_success": "Ustaw opcję %1$s dla drużyny %2$s na %3$s",
    "scoreboard_teams_remove_success": "Usunięto drużynę %1$s",
    "seed_success": "Ziarno: %1$s",
    "setblock_description": "Zamienia blok na inny blok.",
    "setblock_failed": "Nie można umieścić bloku",
    "setblock_noChange": "Nie można umieścić bloku",
    "setblock_notFound": "Nie ma bloku o numerze/nazwie %1$s",
    "setblock_outOfWorld": "Nie można umieścić bloku poza światem",
    "setblock_success": "Umieszczono blok",
    "setblock_tagError": "Parsowanie znacznika danych nie powiodło się: %1$s",
    "setidletimeout_success": "Ustawiono limit czasu bezczynności na %1$d min.",
    "setfixedinvslots_description": "Ustawia liczbę ustalonych miejsc ekwipunku dla serwera.",
    "setfixedinvslots_success": "Liczba ustalonych miejsc ekwipunku ustawiona na %1$d",
    "setfixedinvslot_description": "Ustawia ustalone miejsce dla określonego przedmiotu.",
    "setfixedinvslot_success": "Ustalone miejsce ekwipunku %1$d ustawione na %2$s",
    "globalpause_description": "Ustawia lub uzyskuje stan wstrzymania całej gry dla wszystkich graczy.",
    "globalpause_success": "Ustawiono lub uzyskano stan wstrzymania",
    "setmaxplayers_description": "Ustawia maksymalną liczbę graczy na tę sesję gry.",
    "setmaxplayers_success": "Ustawiono maksymalną liczbę graczy na: %1$d.",
    "setmaxplayers_success_upperbound": "(powiązane z maksymalną liczbą dozwolonych połączeń)",
    "setmaxplayers_success_lowerbound": "(powiązane z aktualnym kontem gracza)",
    "setworldspawn_description": "Ustawia odradzanie w świecie.",
    "setworldspawn_success": "Wyznacz (%1$d, %2$d, %3$d) na punkt odradzania w świecie",
    "setworldspawn_wrongDimension": "W tym wymiarze nie można ustawić odradzania w świecie",
    "spawnpoint_success_single": "Wyznacz punkt odradzania (%1$s) na: %2$d, %3$d, %4$d",
    "spawnpoint_description": "Ustawia punkt odradzania dla gracza.",
    "spawnpoint_success_multiple_specific": "Wyznacz punkt odradzania dla %1$s na: %2$d, %3$d, %4$d",
    "spawnpoint_success_multiple_generic": "Wyznacz punkt odradzania dla %1$s",
    "spawnpoint_wrongDimension": "W tym wymiarze nie można ustawić punktu odrodzenia",
    "spreadplayers_description": "Teleportuje obiekty w losowe miejsca.",
    "spreadplayers_failure_players": "Nie można rozstawić graczy %1$s w obszarze %2$s,%3$s (zbyt wielu graczy - spróbuj rozstawić najwyżej %4$s)",
    "spreadplayers_failure_teams": "Nie można rozstawić drużyn %1$s w obszarze %2$s,%3$s (zbyt wielu graczy - spróbuj rozstawić najwyżej %4$s)",
    "spreadplayers_info_players": "(Po %2$s iteracjach gracze są od siebie oddaleni średnio o następującą liczbę bloków: %1$s)",
    "spreadplayers_info_teams": "(Po %2$s iteracjach drużyny są od siebie oddalone średnio o następującą liczbę bloków: %1$s)",
    "spreadplayers_spreading_players": "Rozstawianie %1$s graczy (dystans w blokach: %2$s) na obszarze %3$s, %4$s (min. liczba bloków odstępu: %5$s)",
    "spreadplayers_spreading_teams": "Rozstawianie %1$s drużyn (dystans w blokach: %2$s) na obszarze %3$s,%4$s (min. liczba bloków odstępu: %5$s)",
    "spreadplayers_success_players": "Udało się rozstawić %1$s graczy w obszarze %2$s,%3$s",
    "spreadplayers_success_teams": "Udało się rozstawić drużyny (%1$s) w obszarze %2$s,%3$s",
    "stats_cleared": "Wyzerowano statystyki (%1$s)",
    "stats_failed": "Nieprawidłowe parametry",
    "stats_noCompatibleBlock": "Blok przy %1$d, %2$d, %3$d nie może rejestrować statystyk",
    "stats_success": "Przechowywanie statystyk gracza %1$s (%2$s/%3$s)",
    "stop_description": "Zatrzymuje serwer.",
    "stop_start": "Zatrzymywanie serwera",
    "stopsound_description": "Zatrzymuje dźwięk.",
    "stopsound_success": "Zatrzymano dźwięk %s (%s)",
    "stopsound_success_all": "Zatrzymano wszystkie dźwięki (%s)",
    "summon_description": "Przyzywa obiekt.",
    "summon_failed": "Nie można wezwać obiektu",
    "summon_outOfWorld": "Nie można wezwać obiektu ze świata",
    "summon_success": "Obiekt pomyślnie wezwany",
    "summon_tagError": "Parsowanie znacznika danych nie powiodło się: %1$s",
    "tag_description": "Zarządza znacznikami przechowywanymi w obiektach.",
    "tag_add_failed": "Element docelowy ma już znacznik lub ma za dużo znaczników",
    "tag_add_success_single": "Dodano znacznik „%1$s” do %2$s",
    "tag_add_success_multiple": "Liczba obiektów, do których dodano znacznik „%1$s”: %2$d",
    "tag_list_single_empty": "%s nie ma żadnych znaczników",
    "tag_list_single_success": "%1$s ma następującą liczbę znaczników: %2$d. Są to: %3$s",
    "tag_list_multiple_empty": "Liczba obiektów, w których nie ma żadnych znaczników: %d",
    "tag_list_multiple_success": "Następująca liczba obiektów: %1$d ma następującą całkowitą liczbę znaczników: %2$d. Są to: %3$s",
    "tag_remove_failed": "Element docelowy nie ma tego znacznika",
    "tag_remove_success_single": "Usunięto znacznik „%1$s” z %2$s",
    "tag_remove_success_multiple": "Liczba obiektów, z których usunięto znacznik „%1$s”: %2$d",
    "tell_description": "Wysyła jednemu graczowi lub większej liczbie graczy wiadomość prywatną.",
    "tellraw_description": "Wysyła graczom wiadomość JSON.",
    "tellraw_jsonException": "Nieprawidłowy json: %1$s",
    "tellraw_jsonStringException": "Nieprawidłowe dane łańcucha znaków JSON.",
    "tellraw_error_noData": "Nie dostarczono żadnych danych.",
    "tellraw_error_notArray": "Obiekt rawtext musi zawierać tablicę. Przykład: \"rawtext\":[{..}]",
    "tellraw_error_textNotString": "Pole text parametru rawtext musi zawierać ciąg znaków. Przykład: \"rawtext\":[{\"text\": \"text to display\"}]",
    "tellraw_error_translateNotString": "Pole translate parametru rawtext musi zawierać klucz językowy. Przykład: \"rawtext\":[{\"translate\": \"gui.ok\"}]",
    "tellraw_error_withNotArrayOrRawText": "a pole w rawtext musi zawierać tablicę lub inny obiekt rawtext. Przykład 1: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\": [ \"value1\", \"value2\" ]}]  Przykład 2: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\":{\"rawtext\":[{\"text\": \"value1\"}, {\"text\": \"value2\"}]}}]",
    "tellraw_error_itemIsNotObject": "Wartość JSON w tablicy rawtext nie była obiektem. Przykład: \"rawtext\": [{ \"text\" : \"my text\" }]",
    "educlientinfo_description": "Uzyskaj identyfikator dzierżawcy i status hosta (dla CM).",
    "testfor_description": "Zlicza obiekty (graczy, moby, przedmioty itp.), które spełniają określone kryteria.",
    "testfor_failure": "%1$s nie odpowiada strukturze wymaganych danych",
    "testfor_success": "Znaleziono: %1$s",
    "testfor_tagError": "Parsowanie znacznika danych nie powiodło się: %1$s",
    "testforblock_description": "Sprawdza, czy dany blok jest w określonym miejscu.",
    "testforblock_failed_data": "Blok na %1$d,%2$d,%3$d nie odpowiada oczekiwanemu stanowi bloku.",
    "testforblock_failed_nbt": "Blok przy %1$d,%2$d,%3$d nie miał wymaganych kluczy NBT.",
    "testforblock_failed_tile": "Blok przy %1$d,%2$d,%3$d to %4$s (oczekiwano: %5$s).",
    "testforblock_failed_tileEntity": "Blok przy %1$d,%2$d,%3$d nie jest bytem-płytką i nie wspiera dopasowania znaczników.",
    "testforblock_outOfWorld": "Nie można szukać bloków poza światem",
    "testforblock_success": "Blok znaleziony przy %1$d,%2$d,%3$d.",
    "testforblocks_description": "Sprawdza, czy bloki w dwóch regionach są zgodne.",
    "tickingarea_description": "Dodaj, usuń lub pokaż obszary tickowania.",
    "tickingarea_inuse": "Obszary tickowania w użyciu: %1$d/%2$d.",
    "tickingarea_noneExist_currentDimension": "W obecnym wymiarze nie ma obszarów tickowania.",
    "tickingarea_add_bounds_success": "Dodano obszary tickowania od %1$d do %2$d.",
    "tickingarea_add_circle_success": "Dodano obszar tickowania o promieniu %2$d fragmentów, którego środek znajduje się w %1$d.",
    "tickingarea_add_failure": "Osiągnięto maksymalną liczbę obszarów tickowania (%1$d). Nie można dodać kolejnych.",
    "tickingarea_add_conflictingname": "Obszar tickowania o nazwie %1$s już istnieje.",
    "tickingarea_add_chunkfailure": "Obszar tickowania zawiera więcej fragmentów niż %1$d, jest zbyt duży i nie można go utworzyć.",
    "tickingarea_add_radiusfailure": "Promień nie może być dłuższy niż %1$d, obszar tickowania jest zbyt duży i nie można go stworzyć.",
    "tickingarea_remove_success": "Usunięto obszar(y) tickowania",
    "tickingarea_remove_failure": "W obecnym wymiarze nie ma obszarów tickowania zawierających następującą pozycję bloku: %1$d.",
    "tickingarea_remove_byname_failure": "W obecnym wymiarze brak obszarów tickowania o nazwie %1$s.",
    "tickingarea_remove_all_success": "Usunięto obszar(y) tickowania",
    "tickingarea_remove_all_failure": "W obecnym wymiarze nie ma obszarów tickowania.",
    "tickingarea_list_chunks": "chunki",
    "tickingarea_list_circle_radius": "Promień",
    "tickingarea_list_success_currentDimension": "Wykaz wszystkich obszarów tickowania w obecnym wymiarze",
    "tickingarea_list_success_allDimensions": "Wykaz wszystkich obszarów tickowania we wszystkich wymiarach",
    "tickingarea_list_failure_allDimensions": "W żadnym wymiarze nie ma obszarów tickowania.",
    "tickingarea_list_to": "do",
    "tickingarea_list_type_circle": "Okrąg",
    "time_added": "Dodano %1$d do czasu",
    "time_description": "Zmienia lub pyta o czas w świecie gry.",
    "time_disabled": "Na tym poziomie uaktywniony jest Zawsze dzień.",
    "time_query_day": "Dzień: %d",
    "time_query_daytime": "Pora dzienna: %d",
    "time_query_gametime": "Czas gry: %d",
    "time_set": "Ustaw czas na %1$d",
    "time_stop": "Czas: %1$s",
    "title_description": "Zarządza ekranami tytułowymi.",
    "title_success": "Polecenie tytułowe wykonane",
    "titleraw_description": "Zarządza ekranami tytułowymi z wiadomościami JSON.",
    "toggledownfall_description": "Przełącza pogodę.",
    "tp_description": "Teleportuje obiekty (graczy, moby itp.).",
    "tp_notSameDimension": "Nie można teleportować, ponieważ gracze nie znajdują się w tym samym wymiarze",
    "tp_outOfWorld": "Nie można teleportować obiektów poza świat",
    "tp_permission": "Nie masz uprawnień do korzystania z tego polecenia systemowego.",
    "tp_safeTeleportFail": "Nie możesz teleportować obiektu %1$s do lokacji %2$s, ponieważ na tym obszarze znajdują się bloki.",
    "tp_far": "Nie możesz teleportować obiektu %1$s do niewczytanego obszaru w lokacji %2$s.",
    "tp_success": "Teleportowano %1$s do %2$s",
    "tp_successVictim": "Teleportujesz się do %1$s",
    "tp_success_coordinates": "Teleportowano %1$s do %2$s, %3$s, %4$s",
    "transferserver_description": "Przenosi gracza na inny serwer.",
    "transferserver_successful": "Gracz przeniesiony",
    "transferserver_invalid_port": "Nieprawidłowy port (0-65535)",
    "trigger_description": "Ustawia wyzwalacz jako aktywny.",
    "trigger_disabled": "Wyzwalacz (%1$s) nie jest włączony",
    "trigger_invalidMode": "Nieprawidłowy tryb wyzwalacza (%1$s)",
    "trigger_invalidObjective": "Nieprawidłowa nazwa wyzwalacza (%1$s)",
    "trigger_invalidPlayer": "Tylko gracze mogą używać polecenia /trigger",
    "trigger_success": "Wyzwalacz (%1$s) zamieniony z %2$s %3$s",
    "unban_failed": "Nie można odbanować gracza %1$s",
    "unban_success": "Odbanowano gracza %1$s",
    "unbanip_invalid": "Wprowadzono nieprawidłowy adres IP",
    "unbanip_success": "Odbanowano adres IP %1$s",
    "validategamelighting_description": "Sprawdź poprawność oświetlenia gry dla określonego regionu",
    "validategamelighting_checkRegionTooBig": "Region, dla którego chcesz sprawdzić oświetlenie, jest zbyt duży! (%1$d > %2$d)",
    "validategamelighting_outOfWorld": "Nie można sprawdzić oświetlenia poza światem",
    "weather_clear": "Zmiana na słoneczną pogodę",
    "weather_description": "Ustawia pogodę.",
    "weather_disabled": "Cykl pogodowy nie jest uaktywniony na tym poziomie.",
    "weather_query": "Informacja pogodowa: %s",
    "weather_query_clear": "bezchmurnie",
    "weather_query_rain": "deszczowo",
    "weather_query_thunder": "burzowo",
    "weather_rain": "Zmiana na deszczową pogodę",
    "weather_thunder": "Zmiana na deszcz i burzę",
    "whitelist_add_failed": "Nie można dodać %1$s do białej listy",
    "whitelist_add_success": "Dodano %1$s do białej listy",
    "whitelist_description": "Zarządza białą listą serwera.",
    "whitelist_disabled": "Wyłączono białą listę",
    "whitelist_enabled": "Włączono białą listę",
    "whitelist_list": "Gracze na białej liście (%1$d z widocznych %2$d):",
    "whitelist_reloaded": "Lista dozwolonych ponownie wczytana z pliku.",
    "whitelist_remove_failed": "Nie można usunąć gracza %1$s z białej listy",
    "whitelist_remove_success": "Usunięto gracza %1$s z białej listy",
    "world_age_description": "Zmienia lub wysyła zapytanie o wiek świata (czas od jego utworzenia).",
    "world_age_added": "Dodano %1$d do wieku świata",
    "world_age_query": "Wiek świata to %d",
    "world_age_set": "Ustaw wiek świata (%1$d)",
    "worldborder_center_success": "Ustaw środek granicy świata na %1$s,%2$s",
    "worldborder_damage_amount_success": "Ustaw obrażenia granicy świata na %1$s/blok (z %2$s/blok)",
    "worldborder_damage_buffer_success": "Ustaw bufor obrażeń granicy świata na następującą liczbę bloków: %1$s (z %2$s)",
    "worldborder_get_success": "Granica świata ma obecnie szerokość %1$s (w blokach)",
    "worldborder_set_success": "Ustaw szerokość granicy świata na %1$s (z %2$s bloków)",
    "worldborder_setSlowly_grow_success": "Rozszerzanie granicy świata do %1$s z %2$s (w blokach) przez %3$s sek.",
    "worldborder_setSlowly_shrink_success": "Zwężanie granicy świata do %1$s z %2$s (w blokach) przez %3$s sek.",
    "worldborder_warning_distance_success": "Przestaw ostrzeżenie granicy świata na %1$s z %2$s (w blokach)",
    "worldborder_warning_time_success": "Przestaw ostrzeżenie granicy świata na %1$s sek. (z %2$s sek.)",
    "worldbuilder_description": "Przełącz status budowniczego światów wywołującego.",
    "worldbuilder_success": "Status budowniczego światów zaktualizowany do %1$s",
    "wsserver_description": "Próbuje połączyć sie z serwerem WebSocket za pomocą podanego URL.",
    "wsserver_invalid_url": "Podany URL serwera jest nieprawidłowy",
    "wsserver_request_existing": "Obecnie uruchomione jest inne żądanie połączenia",
    "wsserver_request_failed": "Nie można nawiązać połączenia z serwerem: %1$s",
    "wsserver_success": "Nawiązano połączenie z serwerem: %1$s",
    "xp_description": "Dodaje lub odejmuje graczowi doświadczenia.",
    "xp_failure_widthdrawXp": "Nie można dawać graczom ujemnych punktów doświadczenia",
    "xp_success": "Graczowi %2$s przekazano %1$d doświadczenia",
    "xp_success_levels": "Graczowi %2$s przekazano poziomy (%1$d)",
    "xp_success_negative_levels": "Graczowi %2$s odebrano poziomy (%1$d)"
},
item:{
    "air": [
        "Powietrze"
    ],
    "apple": [
        "Jabłko"
    ],
    "golden_apple": [
        "Złote jabłko"
    ],
    "appleenchanted": [
        "Zaczarowane jabłko"
    ],
    "armor_stand": [
        "Stojak na zbroję"
    ],
    "arrow": [
        "Strzała"
    ],
    "tipped_arrow": [
        "Strzała z miksturą"
    ],
    "banner": [
        "Czarny sztandar",
        "Czarny sztandar",
        "Czerwony sztandar",
        "Zielony sztandar",
        "Brązowy sztandar",
        "Niebieski sztandar",
        "Fioletowy sztandar",
        "Błękitny sztandar",
        "Jasnoszary sztandar",
        "Szary sztandar",
        "Różowy sztandar",
        "Limonkowy sztandar",
        "Żółty sztandar",
        "Jasnoniebieski sztandar",
        "Karmazynowy sztandar",
        "Pomarańczowy sztandar",
        "Biały sztandar"
    ],
    "bed": [
        "Łóżko",
        "Białe łóżko",
        "Pomarańczowe łóżko",
        "Karmazynowe łóżko",
        "Jasnoniebieskie łóżko",
        "Żółte łóżko",
        "Limonkowe łóżko",
        "Różowe łóżko",
        "Szare łóżko",
        "Jasnoszare łóżko",
        "Błękitne łóżko",
        "Fioletowe łóżko",
        "Niebieskie łóżko",
        "Brązowe łóżko",
        "Zielone łóżko",
        "Czerwone łóżko",
        "Czarne łóżko"
    ],
    "bell": [
        "Dzwon"
    ],
    "steak": [
        "Stek"
    ],
    "beef": [
        "Surowa wołowina"
    ],
    "beetroot": [
        "Burak"
    ],
    "beetroot_soup": [
        "Barszcz"
    ],
    "blaze_powder": [
        "Płomienny proszek"
    ],
    "blaze_rod": [
        "Płomienna różdżka"
    ],
    "boat": [
        "Dębowa łódka",
        "Dębowa łódka",
        "Świerkowa łódka",
        "Brzozowa łódka",
        "Łódka z drewna tropikalnego",
        "Akacjowa łódka",
        "Łódka z czarnego dębu"
    ],
    "bone": [
        "Kość"
    ],
    "book": [
        "Książka"
    ],
    "chainmail_boots": [
        "Buty kolcze"
    ],
    "leather_boots": [
        "Skórzane buty"
    ],
    "diamond_boots": [
        "Diamentowe buty"
    ],
    "golden_boots": [
        "Złote buty"
    ],
    "iron_boots": [
        "Żelazne buty"
    ],
    "bow": [
        "Łuk"
    ],
    "bowl": [
        "Miska"
    ],
    "bread": [
        "Chleb"
    ],
    "brewing_stand": [
        "Statyw alchemiczny"
    ],
    "brick": [
        "Cegła"
    ],
    "bucket": [
        "Wiadro"
    ],
    "bucketLava": [
        "Wiadro lawy"
    ],
    "bucketWater": [
        "Wiadro wody"
    ],
    "bucketFish": [
        "Wiadro z dorszem"
    ],
    "bucketSalmon": [
        "Wiadro z łososiem"
    ],
    "bucketTropical": [
        "Wiadro z tropikalną rybką"
    ],
    "bucketPuffer": [
        "Wiadro z rozdymką"
    ],
    "bucketCustomFish": [
        "Wiadro z:"
    ],
    "tropicalColorWhite": [
        "białym"
    ],
    "tropicalColorOrange": [
        "pomarańczowym"
    ],
    "tropicalColorMagenta": [
        "karmazynowym"
    ],
    "tropicalColorSky": [
        "nieba"
    ],
    "tropicalColorYellow": [
        "żółtym"
    ],
    "tropicalColorLime": [
        "limonkowym"
    ],
    "tropicalColorRose": [
        "różowym"
    ],
    "tropicalColorGray": [
        "szarym"
    ],
    "tropicalColorSilver": [
        "srebrnym"
    ],
    "tropicalColorTeal": [
        "turkusowym"
    ],
    "tropicalColorPlum": [
        "śliwkowym"
    ],
    "tropicalColorBlue": [
        "niebieskim"
    ],
    "tropicalColorBrown": [
        "brązowym"
    ],
    "tropicalColorGreen": [
        "zielonym"
    ],
    "tropicalColorRed": [
        "czerwonym"
    ],
    "tropicalBodyKobSingle": [
        "Kulbak w kolorze %1$s"
    ],
    "tropicalBodySunstreakSingle": [
        "Złotynka w kolorze %1$s"
    ],
    "tropicalBodySnooperSingle": [
        "Węszyk w kolorze %1$s"
    ],
    "tropicalBodyDasherSingle": [
        "Śmigawka w kolorze %1$s"
    ],
    "tropicalBodyBrinelySingle": [
        "Słonka w kolorze %1$s"
    ],
    "tropicalBodySpottySingle": [
        "Wargaczowiec w kolorze %1$s"
    ],
    "tropicalBodyFlopperSingle": [
        "Floper w kolorze %1$s"
    ],
    "tropicalBodyStripeySingle": [
        "Prężynka w kolorze %1$s"
    ],
    "tropicalBodyGlitterSingle": [
        "Błyszczka w kolorze %1$s"
    ],
    "tropicalBodyBlockfishSingle": [
        "Blokówka w kolorze %1$s"
    ],
    "tropicalBodyBettySingle": [
        "Betka w kolorze %1$s"
    ],
    "tropicalBodyClayfishSingle": [
        "Glinka w kolorze %1$s"
    ],
    "tropicalBodyKobMulti": [
        "Kulbak w kolorze %1$s i %2$s"
    ],
    "tropicalBodySunstreakMulti": [
        "Złotynka w kolorze %1$s i %2$s"
    ],
    "tropicalBodySnooperMulti": [
        "Węszyk w kolorze %1$s i %2$s"
    ],
    "tropicalBodyDasherMulti": [
        "Śmigawka w kolorze %1$s i %2$s"
    ],
    "tropicalBodyBrinelyMulti": [
        "Słonka w kolorze %1$s i %2$s"
    ],
    "tropicalBodySpottyMulti": [
        "Wargaczowiec w kolorze %1$s i %2$s"
    ],
    "tropicalBodyFlopperMulti": [
        "Floper w kolorze %1$s i %2$s"
    ],
    "tropicalBodyStripeyMulti": [
        "Prężynka w kolorze %1$s i %2$s"
    ],
    "tropicalBodyGlitterMulti": [
        "Błyszczka w kolorze %1$s i %2$s"
    ],
    "tropicalBodyBlockfishMulti": [
        "Blokówka w kolorze %1$s i %2$s"
    ],
    "tropicalBodyBettyMulti": [
        "Betka w kolorze %1$s i %2$s"
    ],
    "tropicalBodyClayfishMulti": [
        "Glinka w kolorze %1$s i %2$s"
    ],
    "tropicalSchoolAnemone": [
        "Ukwiał"
    ],
    "tropicalSchoolBlackTang": [
        "Zebrasoma czarna"
    ],
    "tropicalSchoolBlueDory": [
        "Pokolec królewski"
    ],
    "tropicalSchoolButterflyFish": [
        "Ryba motyl"
    ],
    "tropicalSchoolCichlid": [
        "Pielęgnica"
    ],
    "tropicalSchoolClownfish": [
        "Błazenek"
    ],
    "tropicalSchoolCottonCandyBetta": [
        "Bojownik różowy"
    ],
    "tropicalSchoolDottyback": [
        "Diademka"
    ],
    "tropicalSchoolEmperorRedSnapper": [
        "Lucjan seba"
    ],
    "tropicalSchoolGoatfish": [
        "Barwena"
    ],
    "tropicalSchoolMoorishIdol": [
        "Idolek mauretański"
    ],
    "tropicalSchoolOrnateButterfly": [
        "Chetonik ozdobny"
    ],
    "tropicalSchoolParrotfish": [
        "Papugoryba"
    ],
    "tropicalSchoolQueenAngelFish": [
        "Nefrytek królewski"
    ],
    "tropicalSchoolRedCichlid": [
        "Pyszczak zebra red"
    ],
    "tropicalSchoolRedLippedBlenny": [
        "Ślizg atlantycki"
    ],
    "tropicalSchoolRedSnapper": [
        "Beryks australijski"
    ],
    "tropicalSchoolThreadfin": [
        "Alektys indyjski"
    ],
    "tropicalSchoolTomatoClown": [
        "Amfiprion pomidorowy"
    ],
    "tropicalSchoolTriggerfish": [
        "Rogatnica"
    ],
    "tropicalSchoolYellowTang": [
        "Zebrasoma żółta"
    ],
    "tropicalSchoolYellowtailParrot": [
        "Papugoryba żółty ogon"
    ],
    "cake": [
        "Ciasto"
    ],
    "camera": [
        "Aparat"
    ],
    "golden_carrot": [
        "Złota marchewka"
    ],
    "carrotOnAStick": [
        "Marchewka na patyku"
    ],
    "warped_fungus_on_a_stick": [
        "Wypaczony grzyb na patyku"
    ],
    "carrot": [
        "Marchewka"
    ],
    "cauldron": [
        "Kocioł"
    ],
    "coal": [
        "Węgiel",
        null,
        "Węgiel drzewny"
    ],
    "chainmail_chestplate": [
        "Napierśnik kolczy"
    ],
    "leather_chestplate": [
        "Skórzana tunika"
    ],
    "diamond_chestplate": [
        "Diamentowy napierśnik"
    ],
    "golden_chestplate": [
        "Złoty napierśnik"
    ],
    "iron_chestplate": [
        "Żelazny napierśnik"
    ],
    "chorus_fruit": [
        "Owoc refrenu"
    ],
    "chorus_fruit_popped": [
        "Prażony owoc refrenu"
    ],
    "cooked_beef": [
        "Befsztyk"
    ],
    "cooked_chicken": [
        "Pieczony kurczak"
    ],
    "cooked_porkchop": [
        "Pieczony schab"
    ],
    "chicken": [
        "Surowy kurczak"
    ],
    "clay_ball": [
        "Glina"
    ],
    "clock": [
        "Zegar"
    ],
    "comparator": [
        "Komparator"
    ],
    "compass": [
        "Kompas"
    ],
    "lodestonecompass": [
        "Magnetytowy kompas"
    ],
    "cookie": [
        "Ciastko"
    ],
    "crossbow": [
        "Kusza"
    ],
    "diamond": [
        "Diament"
    ],
    "repeater": [
        "Przekaźnik"
    ],
    "acacia_door": [
        "Drzwi akacjowe"
    ],
    "birch_door": [
        "Drzwi brzozowe"
    ],
    "dark_oak_door": [
        "Drzwi z czarnego dębu"
    ],
    "iron_door": [
        "Żelazne drzwi"
    ],
    "jungle_door": [
        "Drzwi z drewna tropikalnego"
    ],
    "wooden_door": [
        "Drzwi dębowe"
    ],
    "spruce_door": [
        "Drzwi świerkowe"
    ],
    "crimson_door": [
        "Karmazynowe drzwi"
    ],
    "warped_door": [
        "Wypaczone drzwi"
    ],
    "dragon_breath": [
        "Wyziew smoka"
    ],
    "dye": [
        "Torbiel z atramentem",
        "Torbiel z atramentem",
        "Czerwony barwnik",
        "Zielony barwnik",
        "Owoce kakaowca",
        "Lazuryt",
        "Fioletowy barwnik",
        "Błękitny barwnik",
        "Jasnoszary barwnik",
        "Szary barwnik",
        "Różowy barwnik",
        "Limonkowy barwnik",
        "Żółty barwnik",
        "Jasnoniebieski barwnik",
        "Karmazynowy barwnik",
        "Pomarańczowy barwnik",
        "Mączka kostna",
        "Czarny barwnik",
        "Brązowy barwnik",
        "Niebieski barwnik",
        "Biały barwnik"
    ],
    "egg": [
        "Jajko"
    ],
    "elytra": [
        "Elytry"
    ],
    "emerald": [
        "Szmaragd"
    ],
    "emptyMap": [
        "Pusta mapa"
    ],
    "emptyLocatorMap": [
        "Pusta mapa lokalizująca"
    ],
    "emptyPotion": [
        "Butelka z wodą"
    ],
    "enchanted_book": [
        "Zaklęta księga"
    ],
    "end_crystal": [
        "Kryształ Kresu"
    ],
    "end_rod": [
        "Słupek Kresu"
    ],
    "ender_eye": [
        "Oko Kresu"
    ],
    "ender_pearl": [
        "Perła Kresu"
    ],
    "experience_bottle": [
        "Zaklęta butelka"
    ],
    "feather": [
        "Piórko"
    ],
    "fermented_spider_eye": [
        "Sfermentowane oko pająka"
    ],
    "fireball": [
        "Ognista kula"
    ],
    "fireworks": [
        "Fajerwerk"
    ],
    "fireworksCharge": [
        "Gwiazdka pirotechniczna"
    ],
    "clownfish": [
        "Tropikalna rybka"
    ],
    "cooked_fish": [
        "Pieczony dorsz"
    ],
    "fish": [
        "Surowy dorsz"
    ],
    "pufferfish": [
        "Rozdymka"
    ],
    "cooked_salmon": [
        "Pieczony łosoś"
    ],
    "salmon": [
        "Surowy łosoś"
    ],
    "fishing_rod": [
        "Wędka"
    ],
    "flint": [
        "Krzemień"
    ],
    "flint_and_steel": [
        "Krzesiwo"
    ],
    "flower_pot": [
        "Donica"
    ],
    "frame": [
        "Ramka na przedmiot"
    ],
    "ghast_tear": [
        "Łza ghasta"
    ],
    "glass_bottle": [
        "Szklana butelka"
    ],
    "gold_nugget": [
        "Samorodek złota"
    ],
    "iron_nugget": [
        "Żelazny samorodek"
    ],
    "diamond_axe": [
        "Diamentowa siekiera"
    ],
    "golden_axe": [
        "Złota siekiera"
    ],
    "iron_axe": [
        "Żelazna siekiera"
    ],
    "stone_axe": [
        "Kamienna siekiera"
    ],
    "wooden_axe": [
        "Drewniana siekiera"
    ],
    "chainmail_helmet": [
        "Hełm kolczy"
    ],
    "leather_helmet": [
        "Skórzany hełm"
    ],
    "diamond_helmet": [
        "Diamentowy hełm"
    ],
    "golden_helmet": [
        "Złoty hełm"
    ],
    "iron_helmet": [
        "Żelazny hełm"
    ],
    "diamond_hoe": [
        "Diamentowa motyka"
    ],
    "golden_hoe": [
        "Złota motyka"
    ],
    "iron_hoe": [
        "Żelazna motyka"
    ],
    "stone_hoe": [
        "Kamienna motyka"
    ],
    "wooden_hoe": [
        "Drewniana motyka"
    ],
    "honey_bottle": [
        "Butelka miodu"
    ],
    "honeycomb": [
        "Plaster miodu"
    ],
    "horsearmordiamond": [
        "Diamentowa zbroja dla konia"
    ],
    "horsearmorgold": [
        "Złota zbroja dla konia"
    ],
    "horsearmoriron": [
        "Żelazna zbroja dla konia"
    ],
    "horsearmorleather": [
        "Skórzana zbroja dla konia"
    ],
    "gold_ingot": [
        "Sztabka złota"
    ],
    "iron_ingot": [
        "Sztabka żelaza"
    ],
    "netherite_ingot": [
        "Sztabka netherytu"
    ],
    "netherite_scrap": [
        "Fragment netherytu"
    ],
    "netherite_sword": [
        "Netherytowy miecz"
    ],
    "netherite_pickaxe": [
        "Netherytowy kilof"
    ],
    "netherite_axe": [
        "Netherytowa siekiera"
    ],
    "netherite_shovel": [
        "Netherytowa łopata"
    ],
    "netherite_hoe": [
        "Netherytowa motyka"
    ],
    "netherite_boots": [
        "Netherytowe buty"
    ],
    "netherite_leggings": [
        "Netherytowe nogawice"
    ],
    "netherite_chestplate": [
        "Netherytowy napierśnik"
    ],
    "netherite_helmet": [
        "Netherytowy hełm"
    ],
    "lead": [
        "Postronek"
    ],
    "leather": [
        "Skóra"
    ],
    "leaves": [
        "Liście",
        "Liście dębu",
        "Liście świerku",
        "Liście brzozy",
        "Liście drzewa tropikalnego",
        "Liście akacjowe",
        "Liście czarnego dębu"
    ],
    "chainmail_leggings": [
        "Nogawice kolcze"
    ],
    "leather_leggings": [
        "Skórzane spodnie"
    ],
    "diamond_leggings": [
        "Diamentowe nogawice"
    ],
    "golden_leggings": [
        "Złote nogawice"
    ],
    "iron_leggings": [
        "Żelazne nogawice"
    ],
    "nautilus_shell": [
        "Muszla łodzika"
    ],
    "heart_of_the_sea": [
        "Serce mórz"
    ],
    "magma_cream": [
        "Magmowy krem"
    ],
    "map": [
        "Mapa"
    ],
    "melon": [
        "Arbuz"
    ],
    "milk": [
        "Mleko"
    ],
    "minecart": [
        "Wagonik"
    ],
    "chest_minecart": [
        "Wagonik ze skrzynią"
    ],
    "command_block_minecart": [
        "Wagonik z blokiem poleceń"
    ],
    "minecartFurnace": [
        "Wagonik z piecem"
    ],
    "hopper_minecart": [
        "Wagonik z lejkiem"
    ],
    "tnt_minecart": [
        "Wagonik z TNT"
    ],
    "trident": [
        "Trójząb"
    ],
    "mushroom_stew": [
        "Potrawka grzybowa"
    ],
    "muttoncooked": [
        "Pieczona baranina"
    ],
    "muttonraw": [
        "Surowa baranina"
    ],
    "name_tag": [
        "Etykietka"
    ],
    "netherbrick": [
        "Netherowa cegła"
    ],
    "quartz": [
        "Netherowy kwarc"
    ],
    "nether_wart": [
        "Netherowa brodawka"
    ],
    "netherStar": [
        "Netherowa gwiazda"
    ],
    "painting": [
        "Obraz"
    ],
    "paper": [
        "Papier"
    ],
    "diamond_pickaxe": [
        "Diamentowy kilof"
    ],
    "golden_pickaxe": [
        "Złoty kilof"
    ],
    "iron_pickaxe": [
        "Żelazny kilof"
    ],
    "stone_pickaxe": [
        "Kamienny kilof"
    ],
    "wooden_pickaxe": [
        "Drewniany kilof"
    ],
    "porkchop_cooked": [
        "Pieczony schab"
    ],
    "porkchop": [
        "Surowy schab"
    ],
    "portfolio": [
        "Portfolio"
    ],
    "potato": [
        "Ziemniak"
    ],
    "baked_potato": [
        "Pieczony ziemniak"
    ],
    "poisonous_potato": [
        "Trujący ziemniak"
    ],
    "potion": [
        "Mikstura"
    ],
    "prismarine_crystals": [
        "Kryształy pryzmarynu"
    ],
    "prismarine_shard": [
        "Odłamek pryzmarynu"
    ],
    "pumpkin_pie": [
        "Ciasto dyniowe"
    ],
    "cooked_rabbit": [
        "Pieczony królik"
    ],
    "rabbit_foot": [
        "Królicza łapka"
    ],
    "rabbit_hide": [
        "Królicza skóra"
    ],
    "rabbit": [
        "Surowy królik"
    ],
    "rabbit_stew": [
        "Potrawka z królika"
    ],
    "record": [
        "Płyta muzyczna"
    ],
    "redstone": [
        "Czerwony kamień"
    ],
    "reeds": [
        "Trzcina cukrowa"
    ],
    "kelp": [
        "Krasnorosty"
    ],
    "dried_kelp": [
        "Suszone krasnorosty"
    ],
    "rotten_flesh": [
        "Zgniłe mięso"
    ],
    "ruby": [
        "Rubin"
    ],
    "saddle": [
        "Siodło"
    ],
    "wheat_seeds": [
        "Nasiona"
    ],
    "beetroot_seeds": [
        "Nasiona buraka"
    ],
    "melon_seeds": [
        "Nasiona arbuza"
    ],
    "pumpkin_seeds": [
        "Nasiona dyni"
    ],
    "shears": [
        "Nożyce"
    ],
    "diamond_shovel": [
        "Diamentowa łopata"
    ],
    "golden_shovel": [
        "Złota łopata"
    ],
    "iron_shovel": [
        "Żelazna łopata"
    ],
    "stone_shovel": [
        "Kamienna łopata"
    ],
    "wooden_shovel": [
        "Drewniana łopata"
    ],
    "sign": [
        "Dębowa tabliczka"
    ],
    "spruce_sign": [
        "Świerkowa tabliczka"
    ],
    "birch_sign": [
        "Brzozowa tabliczka"
    ],
    "jungle_sign": [
        "Tabliczka z drewna tropikalnego"
    ],
    "acacia_sign": [
        "Akacjowa tabliczka"
    ],
    "darkoak_sign": [
        "Tabliczka z czarnego dębu"
    ],
    "crimson_sign": [
        "Karmazynowa tabliczka"
    ],
    "warped_sign": [
        "Wypaczona tabliczka"
    ],
    "skull": [
        "Czaszka szkieletu",
        "Czaszka szkieletu",
        "Czaszka mrocznego szkieletu",
        "Głowa zombie",
        "Głowa",
        "Głowa creepera",
        "Głowa smoka"
    ],
    "slime_ball": [
        "Kula szlamu"
    ],
    "snowball": [
        "Śnieżka"
    ],
    "speckled_melon": [
        "Błyszczący arbuz"
    ],
    "spider_eye": [
        "Oko pająka"
    ],
    "stick": [
        "Patyk"
    ],
    "string": [
        "Linka"
    ],
    "sugar": [
        "Cukier"
    ],
    "gunpowder": [
        "Proch"
    ],
    "diamond_sword": [
        "Diamentowy miecz"
    ],
    "golden_sword": [
        "Złoty miecz"
    ],
    "iron_sword": [
        "Żelazny miecz"
    ],
    "stone_sword": [
        "Kamienny miecz"
    ],
    "wooden_sword": [
        "Drewniany miecz"
    ],
    "wheat": [
        "Pszenica"
    ],
    "writable_book": [
        "Książka i pióro"
    ],
    "written_book": [
        "Zapisana książka"
    ],
    "glowstone_dust": [
        "Jasnopył"
    ],
    "shield": [
        "Tarcza"
    ],
    "shulker_shell": [
        "Muszla shulkera"
    ],
    "totem": [
        "Totem nieśmiertelnych"
    ],
    "turtle_helmet": [
        "Skorupa żółwia"
    ],
    "turtle_shell_piece": [
        "Tarczka"
    ],
    "phantom_membrane": [
        "Upiorna membrana"
    ],
    "sweet_berries": [
        "Synsepale"
    ],
    "suspicious_stew": [
        "Podejrzana potrawka"
    ],
    "banner_pattern": [
        "Wzór sztandaru"
    ],
    "acaciaFence": [
        "Płot akacjowy"
    ],
    "acacia_fence_gate": [
        "Akacjowa brama"
    ],
    "activator_rail": [
        "Tory aktywujące"
    ],
    "allow": [
        "Zezwól"
    ],
    "deny": [
        "Odmów"
    ],
    "border_block": [
        "Obramowanie"
    ],
    "anvil": [
        "Kowadło",
        "Kowadło",
        null,
        null,
        null,
        "Lekko uszkodzone kowadło",
        null,
        null,
        null,
        "Mocno uszkodzone kowadło"
    ],
    "barrier": [
        "Bariera"
    ],
    "beacon": [
        "Magiczna latarnia"
    ],
    "beehive": [
        "Ul"
    ],
    "bee_nest": [
        "Pszczele gniazdo"
    ],
    "target": [
        "Cel"
    ],
    "bedrock": [
        "Skała macierzysta"
    ],
    "conduit": [
        "Przekaźnik"
    ],
    "invisibleBedrock": [
        "Niewidziana skała macierzysta"
    ],
    "birchFence": [
        "Płot brzozowy"
    ],
    "birch_fence_gate": [
        "Brzozowa brama"
    ],
    "blast_furnace": [
        "Piec hutniczy"
    ],
    "bone_block": [
        "Blok kości"
    ],
    "coal_block": [
        "Blok węgla"
    ],
    "diamond_block": [
        "Blok diamentu"
    ],
    "emerald_block": [
        "Blok szmaragdu"
    ],
    "gold_block": [
        "Blok złota"
    ],
    "iron_block": [
        "Blok żelaza"
    ],
    "lapis_block": [
        "Blok lazurytu"
    ],
    "redstone_block": [
        "Blok czerwonego kamienia"
    ],
    "bookshelf": [
        "Biblioteczka"
    ],
    "brick_block": [
        "Blok cegły"
    ],
    "brown_mushroom": [
        "Brązowy grzyb"
    ],
    "wooden_button": [
        "Przycisk dębowy"
    ],
    "acacia_button": [
        "Przycisk akacjowy"
    ],
    "birch_button": [
        "Przycisk brzozowy"
    ],
    "dark_oak_button": [
        "Przycisk z czarnego dębu"
    ],
    "jungle_button": [
        "Przycisk z drewna tropikalnego"
    ],
    "spruce_button": [
        "Przycisk świerkowy"
    ],
    "stone_button": [
        "Kamienny przycisk"
    ],
    "cactus": [
        "Kaktus"
    ],
    "dried_kelp_block": [
        "Blok suszonych krasnorostów"
    ],
    "carved_pumpkin": [
        "Wykrojona dynia"
    ],
    "chest": [
        "Skrzynia"
    ],
    "ender_chest": [
        "Skrzynia Kresu"
    ],
    "jigsaw": [
        "Puzzelblok"
    ],
    "honey_block": [
        "Blok miodu"
    ],
    "honeycomb_block": [
        "Blok plastra miodu"
    ],
    "lodestone": [
        "Magnetyt"
    ],
    "nether_sprouts": [
        "Netherowe kiełki"
    ],
    "crimson_stem": [
        "Karmazynowy trzon"
    ],
    "warped_stem": [
        "Wypaczony trzon"
    ],
    "stripped_crimson_stem": [
        "Okorowany karmazynowy trzon"
    ],
    "stripped_warped_stem": [
        "Okorowany wypaczony trzon"
    ],
    "crimson_hyphae": [
        "Szkarłatne strzępki"
    ],
    "warped_hyphae": [
        "Wypaczone strzępki"
    ],
    "stripped_crimson_hyphae": [
        "Okorowane szkarłatne strzępki"
    ],
    "stripped_warped_hyphae": [
        "Okorowane wypaczone strzępki"
    ],
    "crimson_planks": [
        "Karmazynowe deski"
    ],
    "warped_planks": [
        "Wypaczone deski"
    ],
    "crimson_trapdoor": [
        "Karmazynowa zapadnia"
    ],
    "warped_trapdoor": [
        "Wypaczona zapadnia"
    ],
    "crimson_standing_sign": [
        "Karmazynowa tabliczka"
    ],
    "warped_standing_sign": [
        "Wypaczona tabliczka"
    ],
    "crimson_wall_sign": [
        "Karmazynowa tabliczka"
    ],
    "warped_wall_sign": [
        "Wypaczona tabliczka"
    ],
    "crimson_stairs": [
        "Karmazynowe schody"
    ],
    "warped_stairs": [
        "Wypaczone schody"
    ],
    "crimson_fence": [
        "Karmazynowe ogrodzenie"
    ],
    "warped_fence": [
        "Wypaczone ogrodzenie"
    ],
    "crimson_fence_gate": [
        "Karmazynowa brama"
    ],
    "warped_fence_gate": [
        "Wypaczona brama"
    ],
    "crimson_button": [
        "Karmazynowy przycisk"
    ],
    "warped_button": [
        "Wypaczony przycisk"
    ],
    "crimson_pressure_plate": [
        "Karmazynowa płyta naciskowa"
    ],
    "warped_pressure_plate": [
        "Wypaczona płyta naciskowa"
    ],
    "crimson_slab": [
        "Karmazynowy półblok"
    ],
    "warped_slab": [
        "Wypaczony półblok"
    ],
    "crimson_double_slab": [
        "Karmazynowy półblok"
    ],
    "warped_double_slab": [
        "Wypaczony półblok"
    ],
    "shroomlight": [
        "Światłogrzyb"
    ],
    "crimson_nylium": [
        "Karmazynowe nylium"
    ],
    "warped_nylium": [
        "Wypaczone nylium"
    ],
    "basalt": [
        "Bazalt"
    ],
    "polished_basalt": [
        "Polerowany bazalt"
    ],
    "blackstone": [
        "Czarny kamień"
    ],
    "polished_blackstone_bricks": [
        "Cegły z wypolerowanego czarnego kamienia"
    ],
    "cracked_polished_blackstone_bricks": [
        "Popękane cegły z wypolerowanego czarnego kamienia"
    ],
    "polished_blackstone_brick_stairs": [
        "Schody z cegły z wypolerowanego czarnego kamienia"
    ],
    "blackstone_stairs": [
        "Schody z czarnego kamienia"
    ],
    "blackstone_wall": [
        "Mur z czarnego kamienia"
    ],
    "polished_blackstone_brick_wall": [
        "Mur z cegły z wypolerowanego czarnego kamienia"
    ],
    "chiseled_polished_blackstone": [
        "Rzeźbiony wypolerowany czarny kamień"
    ],
    "gilded_blackstone": [
        "Złotonośny czarny kamień"
    ],
    "blackstone_slab": [
        "Płyta z czarnego kamienia"
    ],
    "polished_blackstone_brick_slab": [
        "Płyta z cegły z wypolerowanego czarnego kamienia"
    ],
    "chain": [
        "Kolczuga"
    ],
    "soul_soil": [
        "Gleba dusz"
    ],
    "soul_fire": [
        "Ogień dusz"
    ],
    "polished_blackstone": [
        "Wypolerowany czarny kamień"
    ],
    "polished_blackstone_stairs": [
        "Schody z wypolerowanego czarnego kamienia"
    ],
    "polished_blackstone_slab": [
        "Płyta z wypolerowanego czarnego kamienia"
    ],
    "polished_blackstone_pressure_plate": [
        "Płyta naciskowa z wypolerowanego czarnego kamienia"
    ],
    "polished_blackstone_button": [
        "Przycisk z wypolerowanego czarnego kamienia"
    ],
    "polished_blackstone_wall": [
        "Mur z wypolerowanego czarnego kamienia"
    ],
    "soul_campfire": [
        "Ognisko dusz"
    ],
    "chiseled_nether_bricks": [
        "Rzeźbione netherowe cegły"
    ],
    "cracked_nether_bricks": [
        "Popękane netherowe cegły"
    ],
    "quartz_bricks": [
        "Kwarcowe cegły"
    ],
    "trapped_chest": [
        "Skrzynia-pułapka"
    ],
    "shulkerBoxWhite": [
        "Biała shulkerowa skrzynia"
    ],
    "shulkerBoxOrange": [
        "Pomarańczowa shulkerowa skrzynia"
    ],
    "shulkerBoxMagenta": [
        "Karmazynowa shulkerowa skrzynia"
    ],
    "shulkerBoxLightBlue": [
        "Jasnoniebieska shulkerowa skrzynia"
    ],
    "shulkerBoxYellow": [
        "Żółta shulkerowa skrzynia"
    ],
    "shulkerBoxLime": [
        "Limonkowa shulkerowa skrzynia"
    ],
    "shulkerBoxPink": [
        "Różowa shulkerowa skrzynia"
    ],
    "shulkerBoxGray": [
        "Szara shulkerowa skrzynia"
    ],
    "shulkerBoxSilver": [
        "Jasnoszara shulkerowa skrzynia"
    ],
    "shulkerBoxCyan": [
        "Błękitna shulkerowa skrzynia"
    ],
    "shulkerBoxPurple": [
        "Fioletowa shulkerowa skrzynia"
    ],
    "shulkerBoxBlue": [
        "Niebieska shulkerowa skrzynia"
    ],
    "shulkerBoxBrown": [
        "Brązowa shulkerowa skrzynia"
    ],
    "shulkerBoxGreen": [
        "Zielona shulkerowa skrzynia"
    ],
    "shulkerBoxRed": [
        "Czerwona shulkerowa skrzynia"
    ],
    "shulkerBoxBlack": [
        "Czarna shulkerowa skrzynia"
    ],
    "shulkerBox": [
        "Shulkerowa skrzynia"
    ],
    "chorus_flower": [
        "Kwiat refrenu"
    ],
    "chorus_plant": [
        "Roślina refrenu"
    ],
    "stained_glass": [
        "Białe barwione szkło",
        "Białe barwione szkło",
        "Pomarańczowe barwione szkło",
        "Karmazynowe barwione szkło",
        "Jasnoniebieskie barwione szkło",
        "Żółte barwione szkło",
        "Limonkowe barwione szkło",
        "Różowe barwione szkło",
        "Szare barwione szkło",
        "Jasnoszare barwione szkło",
        "Błękitne barwione szkło",
        "Fioletowe barwione szkło",
        "Niebieskie barwione szkło",
        "Brązowe barwione szkło",
        "Zielone barwione szkło",
        "Czerwone barwione szkło",
        "Czarne barwione szkło"
    ],
    "stained_glass_pane": [
        "Biała barwiona szyba",
        "Biała barwiona szyba",
        "Pomarańczowa barwiona szyba",
        "Karmazynowa barwiona szyba",
        "Jasnoniebieska barwiona szyba",
        "Żółta barwiona szyba",
        "Limonkowa barwiona szyba",
        "Różowa barwiona szyba",
        "Szara barwiona szyba",
        "Jasnoszara barwiona szyba",
        "Błękitna barwiona szyba",
        "Fioletowa barwiona szyba",
        "Niebieska barwiona szyba",
        "Brązowa barwiona szyba",
        "Zielona barwiona szyba",
        "Czerwona barwiona szyba",
        "Czarna barwiona szyba"
    ],
    "clay": [
        "Blok gliny"
    ],
    "hardened_clay": [
        "Terakota"
    ],
    "stained_hardened_clay": [
        "Terakota",
        "Biała terakota",
        "Pomarańczowa terakota",
        "Karmazynowa terakota",
        "Jasnoniebieska terakota",
        "Żółta terakota",
        "Limonkowa terakota",
        "Różowa terakota",
        "Szara terakota",
        "Jasnoszara terakota",
        "Błękitna terakota",
        "Fioletowa terakota",
        "Niebieska terakota",
        "Brązowa terakota",
        "Zielona terakota",
        "Czerwona terakota",
        "Czarna terakota"
    ],
    "structure_block": [
        "Blok budowli"
    ],
    "structure_void": [
        "Pustka obiektu"
    ],
    "wool": [
        "Wełna",
        "Biała wełna",
        "Pomarańczowa wełna",
        "Karmazynowa wełna",
        "Jasnoniebieska wełna",
        "Żółta wełna",
        "Limonkowa wełna",
        "Różowa wełna",
        "Szara wełna",
        "Jasnoszara wełna",
        "Błękitna wełna",
        "Fioletowa wełna",
        "Niebieska wełna",
        "Brązowa wełna",
        "Zielona wełna",
        "Czerwona wełna",
        "Czarna wełna"
    ],
    "cobblestone_wall": [
        "Mur z bruku",
        "Mur z bruku",
        "Mur z bruku z mchem",
        "Mur z granitu",
        "Mur z diorytu",
        "Mur z andezytu",
        "Mur z piaskowca",
        "Mur z cegieł",
        "Mur z kamiennych cegieł",
        "Mur z omszałych kamiennych cegieł",
        "Mur z cegieł z Kamieni Kresu",
        "Mur z netherowej cegły",
        "Mur z pryzmarynu",
        "Mur z czerwonego piaskowca",
        "Mur z czerwonej netherowej cegły"
    ],
    "cocoa": [
        "Roślina kakao"
    ],
    "command_block": [
        "Blok poleceń"
    ],
    "composter": [
        "Kompostownik"
    ],
    "light_block": [
        "Świecący blok"
    ],
    "repeating_command_block": [
        "Powtarzający blok poleceń"
    ],
    "chain_command_block": [
        "Łańcuchowy blok poleceń"
    ],
    "darkOakFence": [
        "Płot z czarnego dębu"
    ],
    "dark_oak_fence_gate": [
        "Brama z czarnego dębu"
    ],
    "daylight_detector": [
        "Detektor światła dziennego"
    ],
    "deadbush": [
        "Uschnięty krzew"
    ],
    "detector_rail": [
        "Tory z czujnikiem"
    ],
    "dirt": [
        "Ziemia",
        "Ziemia",
        "Gruboziarnista ziemia"
    ],
    "podzol": [
        "Bielica"
    ],
    "purpur_block": [
        "Blok porfiru",
        "Blok porfiru",
        "Rzeźbiony porfir",
        "Kolumna porfiru"
    ],
    "dispenser": [
        "Dozownik"
    ],
    "doorWood": [
        "Drewniane drzwi"
    ],
    "double_plant": [
        "Roślina",
        "Słonecznik",
        "Bez",
        "Podwójnie wysoka trawa",
        "Duża paproć",
        "Krzak róży",
        "Piwonia"
    ],
    "dragon_egg": [
        "Jajo smoka"
    ],
    "dropper": [
        "Podajnik"
    ],
    "enchanting_table": [
        "Stół do zaklęć"
    ],
    "enderChest": [
        "Skrzynia Kresu"
    ],
    "end_portal_frame": [
        "Portal Kresu"
    ],
    "farmland": [
        "Pole uprawne"
    ],
    "fletching_table": [
        "Stół łuczniczy"
    ],
    "fence": [
        "Płot dębowy"
    ],
    "fence_gate": [
        "Dębowa brama"
    ],
    "iron_bars": [
        "Żelazne kraty"
    ],
    "fire": [
        "Ogień"
    ],
    "yellow_flower": [
        "Kwiat",
        "Mlecz"
    ],
    "red_flower": [
        "Kwiat",
        "Mak",
        "Niebieska orchidea",
        "Kwiat czosnku",
        "Houstonia błękitna",
        "Czerwony tulipan",
        "Pomarańczowy tulipan",
        "Biały tulipan",
        "Różowy tulipan",
        "Margaretka",
        "Chaber",
        "Konwalia"
    ],
    "wither_rose": [
        "Witherowa róża"
    ],
    "furnace": [
        "Piec"
    ],
    "glass": [
        "Szkło"
    ],
    "golden_rail": [
        "Zasilane tory"
    ],
    "grass": [
        "Blok trawy"
    ],
    "grass_path": [
        "Trawiasta ścieżka"
    ],
    "gravel": [
        "Żwir"
    ],
    "hay_block": [
        "Snop siana"
    ],
    "netherrack": [
        "Netherrack"
    ],
    "soul_sand": [
        "Piasek dusz"
    ],
    "hopper": [
        "Lejek"
    ],
    "ice": [
        "Lód"
    ],
    "packed_ice": [
        "Zbity lód"
    ],
    "blue_ice": [
        "Niebieski lód"
    ],
    "iron_trapdoor": [
        "Żelazna zapadnia"
    ],
    "jukebox": [
        "Szafa grająca"
    ],
    "jungleFence": [
        "Płot z drewna tropikalnego"
    ],
    "jungle_fence_gate": [
        "Brama z drewna tropikalnego"
    ],
    "ladder": [
        "Drabina"
    ],
    "flowing_lava": [
        "Lawa"
    ],
    "leaves2": [
        "Liście akacjowe",
        "Liście akacjowe",
        "Liście czarnego dębu"
    ],
    "lever": [
        "Dźwignia"
    ],
    "glowstone": [
        "Jasnogłaz"
    ],
    "lit_pumpkin": [
        "Dyniowa latarnia"
    ],
    "lockedchest": [
        "Zamknięta skrzynia"
    ],
    "log2": [
        "Kłoda akacjowa",
        "Kłoda akacjowa",
        "Kłoda czarnego dębu"
    ],
    "log": [
        "Kłoda",
        "Kłoda dębowa",
        "Kłoda świerkowa",
        "Kłoda brzozowa",
        "Kłoda drzewa tropikalnego"
    ],
    "magma": [
        "Blok magmy"
    ],
    "melon_block": [
        "Arbuz"
    ],
    "mob_spawner": [
        "Spawner potworów"
    ],
    "monster_egg": [
        "Zainfekowany kamień",
        "Zainfekowany kamień",
        "Zainfekowany bruk",
        "Zainfekowana kamienna cegła",
        "Zainfekowana omszała kamienna cegła",
        "Zainfekowana popękana kamienna cegła",
        "Zainfekowana rzeźbiona kamienna cegła"
    ],
    "mushroom": [
        "Grzyb"
    ],
    "noteblock": [
        "Blok dźwiękowy"
    ],
    "mycelium": [
        "Grzybnia"
    ],
    "nether_brick": [
        "Blok z netherowej cegły"
    ],
    "red_nether_brick": [
        "Czerwona netherowa cegła"
    ],
    "nether_brick_fence": [
        "Płot z netherowej cegły"
    ],
    "quartz_ore": [
        "Ruda netherowego kwarcu"
    ],
    "netherreactor": [
        "Rdzeń reaktora Netheru"
    ],
    "nether_wart_block": [
        "Blok z netherowych brodawek"
    ],
    "warped_wart_block": [
        "Blok wypaczonych brodawek"
    ],
    "unlit_redstone_torch": [
        "Pochodnia z czerwonego kamienia"
    ],
    "redstone_torch": [
        "Pochodnia z czerwonego kamienia"
    ],
    "soul_torch": [
        "Pochodnia dusz"
    ],
    "obsidian": [
        "Obsydian"
    ],
    "coal_ore": [
        "Ruda węgla"
    ],
    "diamond_ore": [
        "Ruda diamentu"
    ],
    "emerald_ore": [
        "Ruda szmaragdu"
    ],
    "gold_ore": [
        "Ruda złota"
    ],
    "iron_ore": [
        "Ruda żelaza"
    ],
    "lapis_ore": [
        "Ruda lazurytu"
    ],
    "redstone_ore": [
        "Ruda czerwonego kamienia"
    ],
    "oreRuby": [
        "Ruda rubinu"
    ],
    "observer": [
        "Obserwator"
    ],
    "piston": [
        "Tłok"
    ],
    "sticky_piston": [
        "Lepki tłok"
    ],
    "portal": [
        "Portal"
    ],
    "potatoes": [
        "Ziemniaki"
    ],
    "stone_pressure_plate": [
        "Kamienna płyta naciskowa"
    ],
    "wooden_pressure_plate": [
        "Dębowa płyta naciskowa"
    ],
    "acacia_pressure_plate": [
        "Akacjowa płyta naciskowa"
    ],
    "birch_pressure_plate": [
        "Brzozowa płyta naciskowa"
    ],
    "dark_oak_pressure_plate": [
        "Płyta naciskowa z czarnego dębu"
    ],
    "jungle_pressure_plate": [
        "Płyta naciskowa z drewna tropikalnego"
    ],
    "spruce_pressure_plate": [
        "Świerkowa płyta naciskowa"
    ],
    "prismarine": [
        "Pryzmaryn",
        "Pryzmaryn",
        "Pryzmarynowe cegły",
        "Ciemny pryzmaryn"
    ],
    "pumpkin": [
        "Dynia"
    ],
    "pumpkin_stem": [
        "Łodyga dyni"
    ],
    "quartz_block": [
        "Blok kwarcu",
        "Blok kwarcu",
        "Rzeźbiony blok kwarcu",
        "Kolumna kwarcu",
        "Gładki blok kwarcu"
    ],
    "rail": [
        "Tory"
    ],
    "red_mushroom": [
        "Czerwony grzyb"
    ],
    "crimson_fungus": [
        "Karmazynowy grzyb"
    ],
    "warped_fungus": [
        "Wypaczony grzyb"
    ],
    "red_mushroom_block": [
        "Blok czerwonego grzyba"
    ],
    "red_sandstone": [
        "Czerwony piaskowiec",
        "Czerwony piaskowiec",
        "Rzeźbiony czerwony piaskowiec",
        "Czerwony piaskowiec cięty",
        "Gładki czerwony piaskowiec"
    ],
    "redstone_wire": [
        "Pył czerwonego kamienia"
    ],
    "redstone_lamp": [
        "Lampa z czerw. kamienia"
    ],
    "sand": [
        "Piasek",
        "Piasek",
        "Czerwony piasek"
    ],
    "sandstone": [
        "Piaskowiec",
        "Piaskowiec",
        "Rzeźbiony piaskowiec",
        "Piaskowiec cięty",
        "Gładki piaskowiec"
    ],
    "sapling": [
        "Sadzonka dębu",
        "Sadzonka dębu",
        "Sadzonka świerku",
        "Sadzonka brzozy",
        "Sadzonka drzewa tropikalnego",
        "Sadzonka akacji",
        "Sadzonka czarnego dębu"
    ],
    "seaLantern": [
        "Latarnia morska"
    ],
    "standing_sign": [
        "Znak"
    ],
    "spruce_standing_sign": [
        "Świerkowa tabliczka"
    ],
    "birch_standing_sign": [
        "Brzozowa tabliczka"
    ],
    "jungle_standing_sign": [
        "Tabliczka z drewna tropikalnego"
    ],
    "acacia_standing_sign": [
        "Akacjowa tabliczka"
    ],
    "darkoak_standing_sign": [
        "Tabliczka z czarnego dębu"
    ],
    "slime": [
        "Blok szlamu"
    ],
    "snow": [
        "Śnieg"
    ],
    "sponge": [
        "Gąbka",
        "Gąbka",
        "Mokra gąbka"
    ],
    "spruceFence": [
        "Płot świerkowy"
    ],
    "spruce_fence_gate": [
        "Świerkowa brama"
    ],
    "brick_stairs": [
        "Schody z cegły"
    ],
    "nether_brick_stairs": [
        "Schody z netherowej cegły"
    ],
    "quartz_stairs": [
        "Schody z kwarcu"
    ],
    "smooth_quartz_stairs": [
        "Schody z gładkiego kwarcu"
    ],
    "red_sandstone_stairs": [
        "Schody z czerwonego piaskowca"
    ],
    "sandstone_stairs": [
        "Schody z piaskowca"
    ],
    "stone_stairs": [
        "Schody z bruku"
    ],
    "normal_stone_stairs": [
        "Schody z kamienia"
    ],
    "stone_brick_stairs": [
        "Schody z kamiennej cegły"
    ],
    "oak_stairs": [
        "Schody dębowe"
    ],
    "acacia_stairs": [
        "Schody akacjowe"
    ],
    "birch_stairs": [
        "Schody brzozowe"
    ],
    "dark_oak_stairs": [
        "Schody z czarnego dębu"
    ],
    "jungle_stairs": [
        "Schody z drewna tropikalnego"
    ],
    "spruce_stairs": [
        "Schody świerkowe"
    ],
    "purpur_stairs": [
        "Schody z porfiru"
    ],
    "prismarine_stairs": [
        "Schody z pryzmarynu"
    ],
    "dark_prismarine_stairs": [
        "Schody z ciemnego pryzmarynu"
    ],
    "prismarine_bricks_stairs": [
        "Schody z pryzmarynowej cegły"
    ],
    "granite_stairs": [
        "Schody z granitu"
    ],
    "diorite_stairs": [
        "Schody z diorytu"
    ],
    "andesite_stairs": [
        "Schody z andezytu"
    ],
    "polished_granite_stairs": [
        "Schody z wypolerowanego granitu"
    ],
    "polished_diorite_stairs": [
        "Schody z wypolerowanego diorytu"
    ],
    "polished_andesite_stairs": [
        "Schody z wypolerowanego andezytu"
    ],
    "mossy_stone_brick_stairs": [
        "Schody z omszałej kamiennej cegły"
    ],
    "smooth_red_sandstone_stairs": [
        "Schody z gładkiego czerwonego piaskowca"
    ],
    "smooth_sandstone_stairs": [
        "Schody z gładkiego piaskowca"
    ],
    "end_brick_stairs": [
        "Schody z cegły z Kamienia Kresu"
    ],
    "mossy_cobblestone_stairs": [
        "Omszałe brukowane schody"
    ],
    "red_nether_brick_stairs": [
        "Schody z czerwonej netherowej cegły"
    ],
    "smooth_stone": [
        "Gładki kamień"
    ],
    "standing_banner": [
        "Sztandar",
        "Czarny sztandar",
        "Czerwony sztandar",
        "Zielony sztandar",
        "Brązowy sztandar",
        "Niebieski sztandar",
        "Fioletowy sztandar",
        "Błękitny sztandar",
        "Jasnoszary sztandar",
        "Szary sztandar",
        "Różowy sztandar",
        "Limonkowy sztandar",
        "Żółty sztandar",
        "Jasnoniebieski sztandar",
        "Karmazynowy sztandar",
        "Pomarańczowy sztandar",
        "Sztandar"
    ],
    "stone": [
        "Kamień",
        "Kamień",
        "Granit",
        "Wypolerowany granit",
        "Dioryt",
        "Wypolerowany dioryt",
        "Andezyt",
        "Wypolerowany andezyt"
    ],
    "cobblestone": [
        "Bruk"
    ],
    "stonebrick": [
        "Kamienne cegły",
        "Kamienne cegły",
        "Omszałe kamienne cegły",
        "Rzeźbione kamienne cegły"
    ],
    "stonecutter": [
        "Przycinarka"
    ],
    "stonecutter_block": [
        "Przycinarka"
    ],
    "mossy_cobblestone": [
        "Omszały bruk"
    ],
    "double_stone_slab": [
        "Półblok kamienia",
        "Półblok kamienia",
        "Półblok piaskowca",
        "Półblok drewna",
        "Półblok bruku",
        "Półblok cegły",
        "Półblok kamiennej cegły",
        "Półblok kwarcu",
        "Półblok z netherowej cegły"
    ],
    "stone_slab": [
        "Półblok kamienia",
        "Półblok z gładkiego kamienia",
        "Półblok piaskowca",
        "Półblok drewna",
        "Półblok bruku",
        "Półblok cegły",
        "Półblok kamiennej cegły",
        "Półblok kwarcu",
        "Półblok z netherowej cegły"
    ],
    "double_stone_slab2": [
        "Półblok czerwonego piaskowca",
        "Półblok czerwonego piaskowca"
    ],
    "stone_slab2": [
        "Półblok czerwonego piaskowca",
        "Półblok czerwonego piaskowca",
        "Półblok porfiru",
        "Półblok pryzmarynu",
        "Półblok pryzmarynowej cegły",
        "Półblok ciemnego pryzmarynu",
        "Półblok z omszałego bruku",
        "Półblok z gładkiego piaskowca",
        "Półblok z czerwonej netherowej cegły"
    ],
    "stone_slab3": [
        "Półblok z cegieł z Kamieni Kresu",
        "Półblok z cegieł z Kamieni Kresu",
        "Półblok z gładkiego czerwonego piaskowca",
        "Półblok z wypolerowanego andezytu",
        "Półblok z andezytu",
        "Półblok z diorytu",
        "Półblok z wypolerowanego diorytu",
        "Półblok z granitu",
        "Półblok z wypolerowanego granitu"
    ],
    "stone_slab4": [
        "Półblok z omszałych kamiennych cegieł",
        "Półblok z omszałych kamiennych cegieł",
        "Półblok z gładkiego kwarcu",
        "Półblok kamienia",
        "Półblok z piaskowca ciętego",
        "Półblok z czerwonego piaskowca ciętego"
    ],
    "coral_block": [
        "Blok korala rurkowatego",
        "Blok korala rurkowatego",
        "Blok korala mózgowego",
        "Blok korala bąbelkowego",
        "Blok korala ognistego",
        "Blok korala rogatego",
        "Blok martwego korala rurkowatego",
        "Blok martwego korala mózgowego",
        "Blok martwego korala bąbelkowego",
        "Blok martwego korala ognistego",
        "Blok martwego korala rogatego"
    ],
    "tallgrass": [
        "Trawa",
        "Trawa",
        "Paproć"
    ],
    "seagrass": [
        "Trawa morska",
        "Trawa morska"
    ],
    "sea_pickle": [
        "Iskrzyłuda"
    ],
    "turtle_egg": [
        "Jajo żółwia morskiego"
    ],
    "coral": [
        "Koral rurkowaty",
        "Koral rurkowaty",
        "Koral mózgowy",
        "Koral bąbelkowy",
        "Koral ognisty",
        "Koral rogaty",
        "Martwy koral rurkowaty",
        "Martwy koral mózgowy",
        "Martwy koral bąbelkowy",
        "Martwy koral ognisty",
        "Martwy koral rogaty"
    ],
    "coral_fan": [
        "Wachlarz korala rurkowatego",
        "Wachlarz korala rurkowatego",
        "Wachlarz korala mózgowego",
        "Wachlarz korala bąbelkowego",
        "Wachlarz korala ognistego",
        "Wachlarz korala rogatego"
    ],
    "coral_fan_dead": [
        "Wachlarz martwego korala rurkowatego",
        "Wachlarz martwego korala rurkowatego",
        "Wachlarz martwego korala mózgowego",
        "Wachlarz martwego korala bąbelkowego",
        "Wachlarz martwego korala ognistego",
        "Wachlarz martwego korala rogatego"
    ],
    "glass_pane": [
        "Szyba"
    ],
    "tnt": [
        "TNT"
    ],
    "snow_layer": [
        "Śnieg powierzchniowy"
    ],
    "torch": [
        "Pochodnia"
    ],
    "trapdoor": [
        "Zapadnia dębowa"
    ],
    "acacia_trapdoor": [
        "Zapadnia akacjowa"
    ],
    "birch_trapdoor": [
        "Zapadnia brzozowa"
    ],
    "dark_oak_trapdoor": [
        "Zapadnia z czarnego dębu"
    ],
    "jungle_trapdoor": [
        "Zapadnia z drewna tropikalnego"
    ],
    "spruce_trapdoor": [
        "Zapadnia świerkowa"
    ],
    "tripWire": [
        "Linka potykacza"
    ],
    "tripwire_hook": [
        "Zaczep linki"
    ],
    "vine": [
        "Pnącze"
    ],
    "weeping_vines": [
        "Lamentorośl"
    ],
    "twisting_vines": [
        "Wykręcone pnącza"
    ],
    "flowing_water": [
        "Woda"
    ],
    "water": [
        "Woda"
    ],
    "waterlily": [
        "Lilia"
    ],
    "web": [
        "Pajęczyna"
    ],
    "heavy_weighted_pressure_plate": [
        "Wagowa płyta naciskowa (ciężka)"
    ],
    "light_weighted_pressure_plate": [
        "Wagowa płyta naciskowa (lekka)"
    ],
    "end_stone": [
        "Kamień Kresu"
    ],
    "end_bricks": [
        "Cegły z kamienia Kresu"
    ],
    "planks": [
        "Drewniane deski",
        "Deski dębowe",
        "Deski świerkowe",
        "Deski brzozowe",
        "Deski z drewna tropikalnego",
        "Deski z drewna akacjowego",
        "Deski z czarnego dębu"
    ],
    "wooden_slab": [
        "Półblok drewna",
        "Półblok drewna dębowego",
        "Półblok świerkowy",
        "Półblok brzozowy",
        "Półblok drewna tropikalnego",
        "Półblok drewna akacjowego",
        "Półblok drewna z czarnego dębu"
    ],
    "carpet": [
        "Dywan",
        "Czarny dywan",
        "Czerwony dywan",
        "Zielony dywan",
        "Brązowy dywan",
        "Niebieski dywan",
        "Fioletowy dywan",
        "Błękitny dywan",
        "Jasnoszary dywan",
        "Szary dywan",
        "Różowy dywan",
        "Limonkowy dywan",
        "Żółty dywan",
        "Jasnoniebieski dywan",
        "Karmazynowy dywan",
        "Pomarańczowy dywan",
        "Biały dywan"
    ],
    "crafting_table": [
        "Stół rzemieślniczy"
    ],
    "white_glazed_terracotta": [
        "Biała glazurowana terakota",
        "Biała glazurowana terakota"
    ],
    "orange_glazed_terracotta": [
        "Pomarańczowa glazurowana terakota",
        "Pomarańczowa glazurowana terakota"
    ],
    "magenta_glazed_terracotta": [
        "Karmazynowa glazurowana terakota",
        "Karmazynowa glazurowana terakota"
    ],
    "light_blue_glazed_terracotta": [
        "Jasnoniebieska glazurowana terakota",
        "Jasnoniebieska glazurowana terakota"
    ],
    "yellow_glazed_terracotta": [
        "Żółta glazurowana terakota",
        "Żółta glazurowana terakota"
    ],
    "lime_glazed_terracotta": [
        "Limonkowa glazurowana terakota",
        "Limonkowa glazurowana terakota"
    ],
    "pink_glazed_terracotta": [
        "Różowa glazurowana terakota",
        "Różowa glazurowana terakota"
    ],
    "gray_glazed_terracotta": [
        "Szara glazurowana terakota",
        "Szara glazurowana terakota"
    ],
    "silver_glazed_terracotta": [
        "Jasnoszara glazurowana terakota",
        "Jasnoszara glazurowana terakota"
    ],
    "cyan_glazed_terracotta": [
        "Błękitna glazurowana terakota",
        "Błękitna glazurowana terakota"
    ],
    "purple_glazed_terracotta": [
        "Fioletowa glazurowana terakota",
        "Fioletowa glazurowana terakota"
    ],
    "blue_glazed_terracotta": [
        "Niebieska glazurowana terakota",
        "Niebieska glazurowana terakota"
    ],
    "brown_glazed_terracotta": [
        "Brązowa glazurowana terakota",
        "Brązowa glazurowana terakota"
    ],
    "green_glazed_terracotta": [
        "Zielona glazurowana terakota",
        "Zielona glazurowana terakota"
    ],
    "red_glazed_terracotta": [
        "Czerwona glazurowana terakota",
        "Czerwona glazurowana terakota"
    ],
    "black_glazed_terracotta": [
        "Czarna glazurowana terakota",
        "Czarna glazurowana terakota"
    ],
    "concrete": [
        "Biały beton",
        "Biały beton",
        "Pomarańczowy beton",
        "Karmazynowy beton",
        "Jasnoniebieski beton",
        "Żółty beton",
        "Limonkowy beton",
        "Różowy beton",
        "Szary beton",
        "Jasnoszary beton",
        "Błękitny beton",
        "Fioletowy beton",
        "Niebieski beton",
        "Brązowy beton",
        "Zielony beton",
        "Czerwony beton",
        "Czarny beton"
    ],
    "glazedTerracottaWhite": [
        "Biała glazurowana terakota"
    ],
    "glazedTerracottaOrange": [
        "Pomarańczowa glazurowana terakota"
    ],
    "glazedTerracottaMagenta": [
        "Karmazynowa glazurowana terakota"
    ],
    "glazedTerracottaLightBlue": [
        "Jasnoniebieska glazurowana terakota"
    ],
    "glazedTerracottaYellow": [
        "Żółta glazurowana terakota"
    ],
    "glazedTerracottaLime": [
        "Limonkowa glazurowana terakota"
    ],
    "glazedTerracottaPink": [
        "Różowa glazurowana terakota"
    ],
    "glazedTerracottaGray": [
        "Szara glazurowana terakota"
    ],
    "glazedTerracottaSilver": [
        "Jasnoszara glazurowana terakota"
    ],
    "glazedTerracottaCyan": [
        "Błękitna glazurowana terakota"
    ],
    "glazedTerracottaPurple": [
        "Fioletowa glazurowana terakota"
    ],
    "glazedTerracottaBlue": [
        "Niebieska glazurowana terakota"
    ],
    "glazedTerracottaBrown": [
        "Brązowa glazurowana terakota"
    ],
    "glazedTerracottaGreen": [
        "Zielona glazurowana terakota"
    ],
    "glazedTerracottaRed": [
        "Czerwona glazurowana terakota"
    ],
    "glazedTerracottaBlack": [
        "Czarna glazurowana terakota"
    ],
    "concretePowder": [
        "Biały proszek cementowy",
        "Biały proszek cementowy",
        "Pomarańczowy proszek cementowy",
        "Karmazynowy proszek cementowy",
        "Jasnoniebieski proszek cementowy",
        "Żółty proszek cementowy",
        "Limonkowy proszek cementowy",
        "Różowy proszek cementowy",
        "Szary proszek cementowy",
        "Jasnoszary proszek cementowy",
        "Błękitny proszek cementowy",
        "Fioletowy proszek cementowy",
        "Niebieski proszek cementowy",
        "Brązowy proszek cementowy",
        "Zielony proszek cementowy",
        "Czerwony proszek cementowy",
        "Czarny proszek cementowy"
    ],
    "stripped_spruce_log": [
        "Kłoda okorowanego świerku"
    ],
    "stripped_dark_oak_log": [
        "Kłoda okorowanego czarnego dębu"
    ],
    "stripped_birch_log": [
        "Kłoda okorowanej brzozy"
    ],
    "stripped_jungle_log": [
        "Kłoda okorowanego drzewa tropikalnego"
    ],
    "stripped_oak_log": [
        "Kłoda okorowanego dębu"
    ],
    "stripped_acacia_log": [
        "Kłoda okorowanej akacji"
    ],
    "bamboo": [
        "Bambus"
    ],
    "scaffolding": [
        "Rusztowania"
    ],
    "grindstone": [
        "Kamień szlifierski"
    ],
    "cartography_table": [
        "Stół kartograficzny"
    ],
    "lantern": [
        "Lampion"
    ],
    "soul_lantern": [
        "Lampion dusz"
    ],
    "smoker": [
        "Piec wędzarniczy"
    ],
    "smithing_table": [
        "Stół kowalski"
    ],
    "barrel": [
        "Baryłka"
    ],
    "campfire": [
        "Ognisko"
    ],
    "loom": [
        "Krosno"
    ],
    "lectern": [
        "Pulpit"
    ],
    "sweet_berry_bush": [
        "Krzew synsepalu"
    ],
    "wood": [
        "Drewno dębu",
        "Drewno dębu",
        "Drewno świerku",
        "Drewno brzozy",
        "Drewno tropikalne",
        "Drewno akacjowe",
        "Drewno czarnego dębu",
        null,
        null,
        "Okorowany dąb",
        "Okorowany świerk",
        "Okorowana brzoza",
        "Okorowane drzewo tropikalne",
        "Okorowana akacja",
        "Okorowany czarny dąb"
    ],
    "netherite_block": [
        "Blok netherytu"
    ],
    "ancient_debris": [
        "Pradawne szczątki"
    ],
    "nether_gold_ore": [
        "Netherowa ruda złota"
    ],
    "respawn_anchor": [
        "Kotwica odrodzenia"
    ],
    "crying_obsidian": [
        "Płaczący obsydian"
    ]
}
};
freeze(lang_data);
export = lang_data;


import { freeze } from './freeze';
import { LangId } from './langid';
const lang_data = {
id: "el_GR" as LangId,
commands:{
    "ability_description": "Ορίζει τη δυνατότητα ενός παίκτη.",
    "ability_noability": "Δεν υπάρχει διαθέσιμη δυνατότητα με το όνομα '%1$s'",
    "ability_granted": "Σου έχει δοθεί η δυνατότητα '%1$s'",
    "ability_revoked": "Έχει αφαιρεθεί από εσένα η δυνατότητα '%1$s'",
    "ability_success": "Η δυνατότητα ενημερώθηκε",
    "achievement_alreadyHave": "Ο παίκτης %1$s έχει ήδη το επίτευγμα %2$s",
    "achievement_description": "Δίνει ή αφαιρεί ένα επίτευγμα από έναν παίκτη.",
    "achievement_dontHave": "Ο παίκτης %1$s δεν έχει το επίτευγμα %2$s",
    "achievement_give_success_all": "Δόθηκαν με επιτυχία όλα τα επιτεύγματα στον παίκτη %1$s",
    "achievement_give_success_one": "Δόθηκε με επιτυχία στον παίκτη %1$s το στατιστικό στοιχείο %2$s",
    "achievement_statTooLow": "Ο παίκτης %1$s δεν έχει το στατιστικό στοιχείο %2$s",
    "achievement_take_success_all": "Επιτυχής λήψη όλων των επιτευγμάτων από %1$s",
    "achievement_take_success_one": "Επιτυχής λήψη του στατιστικού στοιχείου %1$s από %2$s",
    "achievement_unknownAchievement": "Άγνωστο επίτευγμα ή στατιστικό στοιχείο '%1$s'",
    "agent_attack_success": "Επιτυχημένη επίθεση παράγοντα",
    "agent_attack_failed": "Αποτυχημένη επίθεση παράγοντα",
    "agent_collect_success": "Επιτυχημένη συλλογή παράγοντα",
    "agent_collect_failed": "Αποτυχημένη συλλογή παράγοντα",
    "agent_createagent_success": "Δημιουργήθηκε παράγοντας",
    "agent_createagent_failed": "Δεν είναι δυνατή η δημιουργία παράγοντα",
    "agent_destroy_success": "Ο παράγοντας κατέστρεψε έναν κύβο",
    "agent_destroy_failed": "Αποτυχημένη καταστροφή παράγοντα",
    "agent_detect_success": "Επιτυχημένος εντοπισμός παράγοντα",
    "agent_detect_failed": "Αποτυχημένος εντοπισμός παράγοντα",
    "agent_detectredstone_success": "Επιτυχές detectredstone πράκτορα",
    "agent_detectredstone_failed": "Απέτυχε το detectredstone πράκτορα",
    "agent_drop_success": "Επιτυχημένη ρίψη παράγοντα",
    "agent_drop_failed": "Αποτυχημένη ρίψη παράγοντα",
    "agent_dropall_success": "Επιτυχές dropall παράγοντα",
    "agent_dropall_failed": "Απέτυχε το dropall παράγοντα",
    "agent_getitemcount_success": "Επιτυχές getitemcount παράγοντα",
    "agent_getitemcount_failed": "Απέτυχε το getitemcount παράγοντα",
    "agent_getitemspace_success": "Επιτυχές getitemspace παράγοντα",
    "agent_getitemspace_failed": "Απέτυχε το getitemspace παράγοντα",
    "agent_getitemdetail_success": "Επιτυχές getitemdetail παράγοντα",
    "agent_getitemdetail_failed": "Απέτυχε το getitemdetail παράγοντα",
    "agent_getposition_success": "Επιτυχής λήψη θέσης του Agent",
    "agent_getposition_failed": "Ανεπιτυχής λήψη θέσης του Agent",
    "agent_inspect_success": "Επιτυχημένη έρευνα παράγοντα",
    "agent_inspect_failed": "Απέτυχε η έρευνα παράγοντα",
    "agent_inspectdata_success": "Επιτυχής έλεγχος δεδομένων από τον παράγοντα",
    "agent_inspectdata_failed": "Απέτυχε ο έλεγχος δεδομένων από τον παράγοντα",
    "agent_move_success": "Επιτυχημένη κίνηση παράγοντα",
    "agent_move_failed": "Δεν είναι δυνατή η κίνηση του παράγοντα",
    "agent_outofrange": "Δεν είναι δυνατή η έκδοση εντολής, ο παράγοντας είναι εκτός εμβέλειας",
    "agent_place_success": "Επιτυχημένη τοποθέτηση παράγοντα",
    "agent_place_failed": "Απέτυχε η τοποθέτηση παράγοντα",
    "agent_setitem_success": "Επιτυχής ορισμός στοιχείου από τον Agent",
    "agent_setitem_failed": "Ανεπιτυχής ορισμός στοιχείου από τον Agent",
    "agent_turn_success": "Επιτυχημένη περιστροφή του παράγοντα",
    "agent_turn_failed": "Δεν είναι δυνατή η περιστροφή του παράγοντα",
    "agent_till_success": "Επιτυχές till παράγοντα",
    "agent_till_failed": "Αποτυχία till παράγοντα",
    "agent_tpagent_description": "Τηλεμεταφορά στον Agent.",
    "agent_tpagent_success": "Ο παράγοντας τηλεμεταφέρθηκε",
    "agent_tpagent_failed": "Απέτυχε η τηλεμεταφορά του παράγοντα",
    "agent_transfer_success": "Επιτυχής μεταφορά παράγοντα",
    "agent_transfer_failed": "Απέτυχε η μεταφορά του παράγοντα",
    "always_day": "Κύκλος ημέρας-νύχτας: %1$s",
    "always_day_locked": "Κύκλος ημέρας-νύχτας: κλειδώθηκε",
    "always_day_unlocked": "Κύκλος ημέρας-νύχτας: ξεκλειδώθηκε",
    "ban_description": "Προσθέτει έναν παίκτη στη λίστα αποκλεισμού.",
    "autocomplete_a": "όλοι οι παίκτες",
    "autocomplete_c": "Agent",
    "autocomplete_e": "όλες οι οντότητες",
    "autocomplete_p": "πιο κοντινός παίκτης",
    "autocomplete_r": "τυχαίος παίκτης",
    "autocomplete_s": "εσύ",
    "autocomplete_v": "όλοι οι Agent",
    "ban_failed": "Δεν ήταν δυνατός ο αποκλεισμός του παίκτη %1$s",
    "ban_success": "Αποκλείστηκε ο παίκτης %1$s",
    "banip_description": "Προσθέτει μια διεύθυνση IP στη λίστα αποκλεισμού.",
    "banip_invalid": "Εισήγαγες μη έγκυρη διεύθυνση IP ή παίκτη που δεν είναι online",
    "banip_success": "Αποκλείστηκε η διεύθυνση IP %1$s",
    "banip_success_players": "Αποκλείστηκε η διεύθυνση IP %1$s που ανήκει στον παίκτη %2$s",
    "banlist_ips": "Υπάρχουν συνολικά %1$d αποκλεισμένες διευθύνσεις IP:",
    "banlist_players": "Υπάρχουν συνολικά %1$d αποκλεισμένοι παίκτες:",
    "blockdata_description": "Τροποποιεί την ετικέτα δεδομένων ενός κύβου.",
    "blockdata_placeFailed": "Δεν μπορείς να τοποθετήσεις κύβους εδώ",
    "blockdata_destroyFailed": "Δεν μπορείς να σκάψεις εδώ",
    "blockdata_failed": "Δεν άλλαξε η ετικέτα δεδομένων: %1$s",
    "blockdata_notValid": "Ο στοχευμένος κύβος δεν είναι κύβος με περιεχόμενα δεδομένων",
    "blockdata_outOfWorld": "Δεν είναι δυνατή η αλλαγή ενός κύβου έξω από τον κόσμο",
    "blockdata_success": "Ενημέρωση δεδομένων κύβου σε: %1$s",
    "blockdata_tagError": "Απέτυχε η ανάλυση της ετικέτας δεδομένων: %1$s",
    "bossbar_add_success": "Δημιουργήθηκε προσαρμοσμένη ράβδος αρχηγού [%1$s]",
    "bossbar_add_failure_invalid": "Μη έγκυρο αναγνωριστικό ράβδου αρχηγού. Τα αναγνωριστικά πρέπει έχουν μορφή \"namespace:id\" ή \"id\" (από προεπιλογή η μορφή είναι \"minecraft namespace\").",
    "bossbar_add_failure_exists": "Μια ράβδος αρχηγού με το αναγνωριστικό \"%1$s\" υπάρχει ήδη",
    "bossbar_description": "Δημιουργεί και τροποποιεί ράβδους αρχηγών",
    "bossbar_get_max": "Η προσαρμοσμένη ράβδος αρχηγού [%1$s] έχει μέγιστη τιμή %2$d",
    "bossbar_get_players": "Η προσαρμοσμένη ράβδος αρχηγού [%1$s] έχει %2$s παίκτες σε σύνδεση αυτή τη στιγμή: %3$s",
    "bossbar_get_players_none": "Η προσαρμοσμένη ράβδος αρχηγού [%1$s] δεν έχει παίκτες σε σύνδεση αυτή τη στιγμή",
    "bossbar_get_players_one": "Η προσαρμοσμένη ράβδος αρχηγού [%1$s] έχει 1 παίκτη σε σύνδεση αυτή τη στιγμή: %2$s",
    "bossbar_get_value": "Η προσαρμοσμένη ράβδος αρχηγού [%1$s] έχει τιμή %2$d",
    "bossbar_get_visible_true": "Η προσαρμοσμένη ράβδος αρχηγού [%1$s] εμφανίζεται αυτή τη στιγμή",
    "bossbar_get_visible_false": "Η προσαρμοσμένη ράβδος αρχηγού [%1$s] είναι κρυφή αυτή τη στιγμή",
    "bossbar_list": "Υπάρχουν %1$s ενεργές προσαρμοσμένες ράβδοι αρχηγού: %2$s",
    "bossbar_list_none": "Δεν υπάρχουν ενεργές προσαρμοσμένες ράβδοι αρχηγού",
    "bossbar_list_one": "Υπάρχει 1 ενεργή προσαρμοσμένη ράβδος αρχηγού: %1$s",
    "bossbar_notFound": "Δεν υπάρχει καμία ράβδος αρχηγού με το αναγνωριστικό \"%1$s\"",
    "bossbar_remove": "Η προσαρμοσμένη ράβδος αρχηγού [%1$s] καταργήθηκε",
    "change_setting_description": "Αλλάζει μια ρύθμιση στον αποκλειστικό διακομιστή όσο βρίσκεται σε λειτουργία.",
    "change_setting_success": "Η ρύθμιση %1$s έχει αλλάξει",
    "chunkinfo_compiled": "Το τμήμα μεταγλωττίσθηκε.",
    "chunkinfo_data": "Οι πρώτες 64 κορυφές είναι: %1$s",
    "chunkinfo_empty": "Το τμήμα είναι κενό.",
    "chunkinfo_hasLayers": "Το τμήμα έχει επίπεδα: %1$s",
    "chunkinfo_hasNoRenderableLayers": "Το τμήμα δεν έχει επίπεδα με δυνατότητα απόδοσης.",
    "chunkinfo_isEmpty": "Το τμήμα έχει κενά επίπεδα: %1$s",
    "chunkinfo_location": "Θέση τμήματος: (%1$d, %2$d, %3$d)",
    "chunkinfo_noChunk": "Δεν βρέθηκε τμήμα στη θέση τμήματος %1$d, %2$d, %3$d",
    "chunkinfo_notCompiled": "Το τμήμα δεν μεταγλωττίσθηκε.",
    "chunkinfo_notEmpty": "Το τμήμα δεν είναι κενό.",
    "chunkinfo_vertices": "Το buffer του επιπέδου %1$s περιλαμβάνει %2$d κορυφές",
    "classroommode_description": "Προσπάθεια εκκίνησης και σύνδεσης με τη Λειτουργία τάξης.",
    "classroommode_success": "Προσπάθεια εκκίνησης Λειτουργίας τάξης...",
    "clear_description": "Αφαιρεί αντικείμενα από τα αποθέματα του παίκτη.",
    "clear_failure": "Δεν ήταν δυνατή η εκκαθάριση των αποθεμάτων από %1$s",
    "clear_failure_no_items": "Δεν ήταν δυνατή η εκκαθάριση των αποθεμάτων από %1$s, δεν υπάρχουν στοιχεία για κατάργηση",
    "clear_success": "Εκκαθάριση αποθεμάτων από %1$s, κατάργηση %2$d στοιχείων",
    "clear_tagError": "Απέτυχε η ανάλυση της ετικέτας δεδομένων: %1$s",
    "clear_testing": "Ο παίκτης %1$s έχει %2$d αντικείμενα που ταιριάζουν με τα κριτήρια",
    "clearfixedinv_description": "Καταργεί όλες τις σταθερές υποδοχές αποθεμάτων.",
    "clearfixedinv_success": "Καταργήθηκαν τα Σταθερά αποθέματα",
    "clone_description": "Κλωνοποιεί κύβους από μία περιοχή σε μια άλλη.",
    "clone_failed": "Δεν κλωνοποιήθηκαν κύβοι",
    "clone_filtered_error": "Η χρήση με φίλτρο απαιτεί προσδιορισμό κύβου φιλτραρίσματος",
    "clone_noOverlap": "Η προέλευση και ο προορισμός δεν μπορούν να συμπίπτουν",
    "clone_outOfWorld": "Δεν είναι δυνατή η πρόσβαση σε κύβους εκτός του κόσμου",
    "clone_success": "Κλωνοποιήθηκαν %1$d κύβοι",
    "clone_tooManyBlocks": "Υπερβολικά πολλοί κύβοι στην καθορισμένη περιοχή (%1$d > %2$d)",
    "closechat_description": "Κλείνει το παράθυρο συνομιλίας του τοπικού παίκτη αν είναι ανοικτό.",
    "closechat_success": "Η συνομιλία έκλεισε",
    "closechat_failure": "Η συνομιλία δεν άνοιξε",
    "closewebsocket_description": "Κλείνει τη σύνδεση websocket εφόσον υπάρχει.",
    "code_description": "Εκκινεί το Code Builder.",
    "code_success": "Το Code Builder εκκινήθηκε.",
    "compare_failed": "Η προέλευση και ο προορισμός δεν είναι όμοια",
    "compare_outOfWorld": "Δεν είναι δυνατή η πρόσβαση σε κύβους εκτός του κόσμου",
    "compare_success": "Έγινε σύγκριση %1$d κύβων",
    "compare_tooManyBlocks": "Υπερβολικά πολλοί κύβοι στην καθορισμένη περιοχή (%1$d > %2$d)",
    "corruptworld_description": "Καταστρέφει τον κόσμο που έχει φορτωθεί στον διακομιστή.",
    "corruptworld_success": "Ο κόσμος καταστράφηκε με επιτυχία.",
    "daylock_description": "Κλειδώνει και ξεκλειδώνει τον κύκλο ημέρας-νύχτας.",
    "debug_description": "Ξεκινά ή σταματά μια περίοδο λειτουργίας εντοπισμού σφαλμάτων.",
    "debug_notStarted": "Δεν είναι δυνατή η διακοπή της δημιουργίας προφίλ όταν δεν έχουμε αρχίσει ακόμη!",
    "debug_start": "Έναρξη δημιουργίας προφίλ εντοπισμού σφαλμάτων",
    "debug_stop": "Διακόπηκε η δημιουργία προφίλ εντοπισμού σφαλμάτων έπειτα από %.2f δευτερόλεπτα (%1$d σήματα ρολογιού)",
    "defaultgamemode_description": "Ορίζει την προεπιλεγμένη λειτουργία παιχνιδιού.",
    "defaultgamemode_success": "Η προεπιλεγμένη λειτουργία παιχνιδιού του κόσμου είναι τώρα %1$s",
    "deop_description": "Ανακαλεί την κατάσταση χειριστή από έναν παίκτη.",
    "deop_failed": "Δεν ήταν δυνατή η κατάργηση δικαιώματος OP (πολύ υψηλό επίπεδο δικαιωμάτων): %s",
    "deop_success": "Κατάργηση ιδιότητας op: %s",
    "deop_message": "Καταργήθηκε για εσένα η ιδιότητα του op",
    "difficulty_description": "Ορίζει το επίπεδο δυσκολίας.",
    "difficulty_usage": "/difficulty <new difficulty>",
    "difficulty_success": "Ορισμός δυσκολίας παιχνιδιού σε %1$s",
    "downfall_success": "Εναλλασσόμενη πτώση",
    "effect_description": "Πρόσθεσε ή κατάργησε εφέ κατάστασης.",
    "effect_failure_notActive": "Δεν ήταν δυνατή η αφαίρεση του εφέ %1$s από τον παίκτη %2$s γιατί δεν έχει αυτό το εφέ",
    "effect_failure_notActive_all": "Δεν ήταν δυνατή η αφαίρεση οποιουδήποτε εφέ από τον παίκτη %1$s γιατί δεν έχει κανένα",
    "effect_failure_notAMob": "%1$s - δεν μπορεί να έχει εφέ",
    "effect_notFound": "Δεν υπάρχει τέτοιο εφέ πλάσματος με αναγνωριστικό %s",
    "effect_success": "Δόθηκε %1$s * %2$d στον παίκτη %3$s για %4$d δευτερόλεπτα",
    "effect_success_removed": "Αφαιρέθηκε το εφέ %1$s από τον παίκτη %2$s",
    "effect_success_removed_all": "Αφαιρέθηκαν όλα τα εφέ από τον παίκτη %1$s",
    "enchant_cantCombine": "Δεν μπορεί να συνδυαστεί %1$s με %2$s",
    "enchant_invalidLevel": "%1$s - δεν υποστηρίζει επίπεδο %2$d",
    "enchant_cantEnchant": "Το επιλεγμένο ξόρκι δεν μπορεί να προστεθεί στο αντικείμενο προορισμού: %1$s",
    "enchant_description": "Μαγεύει το επιλεγμένο αντικείμενο του παίκτη.",
    "enchant_noItem": "Ο προορισμός δεν περιλαμβάνει κάποιο αντικείμενο: %1$s",
    "enchant_notFound": "Δεν υπάρχει ξόρκι με το αναγνωριστικό %1$d",
    "enchant_success": "Το ξόρκι πέτυχε για %1$s",
    "entitydata_description": "Τροποποιεί την ετικέτα δεδομένων μιας οντότητας.",
    "entitydata_failed": "Δεν άλλαξε η ετικέτα δεδομένων: %1$s",
    "entitydata_noPlayers": "Το στοιχείο %1$s είναι παίκτης και δεν μπορεί να αλλάξει",
    "entitydata_success": "Ενημέρωση δεδομένων οντότητας σε: %1$s",
    "entitydata_tagError": "Απέτυχε η ανάλυση της ετικέτας δεδομένων: %1$s",
    "execute_allInvocationsFailed": "Απέτυχαν όλες οι επικλήσεις: '%1$s'",
    "execute_failed": "Απέτυχε η εκτέλεση του στοιχείου '%1$s' ως %2$s",
    "execute_description": "Εκτελεί μια εντολή για λογαριασμό μίας ή περισσότερων οντοτήτων.",
    "fill_description": "Γεμίζει με έναν συγκεκριμένο κύβο τμήματα περιοχής ή ολόκληρη περιοχή.",
    "fill_failed": "Δεν τοποθετήθηκαν κύβοι",
    "fill_outOfWorld": "Δεν είναι δυνατή η τοποθέτηση κύβων εκτός του κόσμου",
    "fill_success": "Τοποθετήθηκαν %1$d κύβοι",
    "fill_tagError": "Απέτυχε η ανάλυση της ετικέτας δεδομένων: %1$s",
    "fill_tooManyBlocks": "Υπερβολικά πολλοί κύβοι στην καθορισμένη περιοχή (%1$d > %2$d)",
    "fill_replace_auxvalue_invalid": "Μη έγκυρη τιμή δεδομένων αντικατάστασης για τον κύβο %1$s",
    "function_description": "Εκτελεί εντολές που βρίσκονται στο αντίστοιχο αρχείο συναρτήσεων.",
    "function_functionNameNotFound": "Δεν βρέθηκε η συνάρτηση %1$s.",
    "function_invalidCharacters": "Η συνάρτηση με τίτλο \"%s\" δεν είναι έγκυρη, ο χαρακτήρας \"%s\" δεν επιτρέπεται σε ονόματα συναρτήσεων.",
    "function_noEngineVersionSpecified": "Δεν ήταν δυνατή η εκτέλεση της συνάρτησης %s. Πρέπει να καθορίσεις ένα min_engine_version στο manifest.json του πακέτου συμπεριφορών.",
    "function_success": "Πραγματοποιήθηκε επιτυχής εκτέλεση %1$d καταχωρήσεων συναρτήσεων.",
    "gamemode_description": "Ορίζει τη λειτουργία παιχνιδιού ενός παίκτη.",
    "gamemode_success_other": "Ορισμός της λειτουργίας παιχνιδιού του παίκτη %2$s σε %1$s",
    "gamemode_success_self": "Ορισμός της λειτουργίας του δικού σου παιχνιδιού σε %1$s",
    "gamemode_fail_invalid": "Η λειτουργία παιχνιδιού '%1$s' δεν είναι έγκυρη",
    "gamerule_description": "Ορίζει ή δημιουργεί ερώτημα για μια τιμή κανόνα παιχνιδιού.",
    "gamerule_type_invalid": "Δεν χρησιμοποιήθηκε έγκυρος τύπος για τον κανόνα παιχνιδιού '%1$s'",
    "gamerule_type_nocheatsenabled": "Ο κανόνας παιχνιδιού \"%1$s\" μπορεί να χρησιμοποιηθεί μόνο αν έχουν ενεργοποιηθεί τα cheat σε αυτόν τον κόσμο.",
    "gamerule_nopermission": "Μόνο οι κάτοχοι διακομιστή μπορούν να αλλάξουν το στοιχείο '%1$s'",
    "gamerule_norule": "Δεν υπάρχει διαθέσιμος κανόνας παιχνιδιού με το όνομα '%1$s'",
    "gamerule_success": "Ο κανόνας παιχνιδιού %1$s ενημερώθηκε σε %2$s",
    "generic_async_initiated": "Εκκινήθηκε η εντολή '%1$s' (ασύγχρονο βήμα %2$d)",
    "generic_boolean_invalid": "Το στοιχείο '%1$s' δεν έχει τιμή true ή false",
    "generic_chunk_notFound": "Δεν βρέθηκε το καθορισμένο τμήμα",
    "generic_componentError": "Απέτυχε η ανάλυση της λίστας στοιχείων",
    "generic_dimension_notFound": "Δεν βρέθηκε η καθορισμένη διάσταση",
    "generic_disabled": "Τα cheat δεν είναι ενεργοποιημένα σε αυτό το επίπεδο.",
    "generic_disabled_templateLocked": "Οι ρυθμίσεις είναι κλειδωμένες προς το παρόν. Ξεκλείδωσε τις επιλογές κόσμου προτύπου από τις ρυθμίσεις παιχνιδιού, για να τις αλλάξεις.",
    "generic_double_tooBig": "Ο αριθμός που εισήγαγες (%.2f) είναι υπερβολικά μεγάλος, το μέγιστο είναι %.2f",
    "generic_double_tooSmall": "Ο αριθμός που εισήγαγες (%.2f) είναι υπερβολικά μικρός, πρέπει να είναι τουλάχιστον %.2f",
    "generic_duplicateType": "Αναπαραγωγή ορισμάτων τύπου",
    "generic_duplicateSelectorArgument": "Αναπαραγωγή %s ορισμάτων επιλογέα",
    "generic_encryption_badkey": "Δόθηκε εσφαλμένο δημόσιο κλειδί. Αναμένεται κλειδί 120 byte μετά τη μορφοποίηση PEM.",
    "generic_encryption_badsalt": "Δόθηκε εσφαλμένο salt. Αναμένεται 16 byte πριν την κωδικοποίηση base 64.",
    "generic_encryption_required": "Απαιτείται κρυπτογραφημένη περίοδος λειτουργίας",
    "generic_entity_invalidType": "Ο τύπος οντότητας '%1$s' δεν είναι έγκυρος",
    "generic_entity_invalidUuid": "Η οντότητα UUID που παρασχέθηκε είναι σε άκυρη μορφή",
    "generic_entity_notFound": "Η οντότητα δεν μπορεί να βρεθεί",
    "generic_exception": "Παρουσιάστηκε άγνωστο σφάλμα κατά την απόπειρα εκτέλεσης αυτής της εντολής",
    "generic_invalidAgentType": "Εφαρμόστηκε όρισμα τύπου στον επιλογέα αποκλειστικά για Agent",
    "generic_invalidcontext": "Δεν δόθηκε έγκυρο περιβάλλον για τον συγκεκριμένο τύπο εντολής",
    "generic_invalidDevice": "Η εντολή, %s, που πληκτρολόγησες δεν υποστηρίζεται σε αυτήν τη συσκευή",
    "generic_invalidPlayerType": "Εφαρμογή ορίσματος τύπου σε επιλογέα \"μόνο για παίκτη\"",
    "generic_invalidType": "Άγνωστο όρισμα τύπου",
    "generic_levelError": "Το μέγιστο επίπεδο πρέπει να είναι μεγαλύτερο από το ελάχιστο επίπεδο",
    "generic_malformed_body": "Το σώμα λείπει ή είναι ακατάλληλο",
    "generic_malformed_type": "Μη έγκυρος τύπος αιτήματος",
    "generic_notimplemented": "Δεν εφαρμόστηκε",
    "generic_num_invalid": "Το '%1$s' δεν είναι έγκυρος αριθμός",
    "generic_num_tooBig": "Ο αριθμός που εισήγαγες (%1$d) είναι υπερβολικά μεγάλος. Η μέγιστη τιμή που μπορεί να έχει είναι %2$d",
    "generic_num_tooSmall": "Ο αριθμός που εισήγαγες (%1$d) είναι υπερβολικά μικρός. Η ελάχιστη τιμή που μπορεί να έχει είναι %2$d",
    "generic_parameter_invalid": "Το '%1$s' δεν είναι έγκυρη παράμετρος",
    "generic_permission_selector": "<ανεπαρκή δικαιώματα για επέκταση επιλογέα>",
    "generic_player_notFound": "Ο παίκτης δεν μπορεί να βρεθεί",
    "generic_protocol_mismatch": "Αυτή η έκδοση πρωτοκόλλου δεν αντιστοιχεί με την έκδοση πρωτοκόλλου του Minecraft",
    "generic_radiusError": "Η ελάχιστη ακτίνα επιλογέα πρέπει να είναι μικρότερη από τη μέγιστη",
    "generic_radiusNegative": "Η ακτίνα δεν μπορεί να είναι αρνητική",
    "generic_rotationError": "Περιστροφή εκτός περιοχής",
    "generic_running": "Η εντολή εκτελείται ήδη",
    "generic_step_failed": "Το βήμα εντολής απέτυχε",
    "generic_syntax": "Συντακτικό λάθος: Μη αναμενόμενο \"%2$s\": στο \"%1$s>>%2$s<<%3$s\"",
    "generic_noTargetMatch": "Δεν υπάρχουν προορισμοί που να αντιστοιχούν στον επιλογέα",
    "generic_targetNotPlayer": "Ο επιλογέας πρέπει να είναι τύπος παίκτη",
    "generic_tooManyNames": "Υπερβολικά πολλά ορίσματα ονομάτων προορισμού",
    "generic_tooManyTargets": "Υπάρχουν υπερβολικά πολλοί προορισμοί που αντιστοιχούν στον επιλογέα",
    "generic_too_many_requests": "Ζητήθηκαν υπερβολικά πολλές εντολές, περίμενε μέχρι να ολοκληρωθεί η διαδικασία",
    "generic_unknown": "Άγνωστη εντολή: %s. Βεβαιώσου ότι η εντολή υπάρχει και ότι έχεις άδεια να τη χρησιμοποιήσεις.",
    "generic_usage": "Χρήση: %1$s",
    "generic_usage_noparam": "Χρήση:",
    "generic_version_mismatch": "Η έκδοση που ζητήθηκε δεν υπάρχει για αυτή την εντολή",
    "generic_version_missing": "Οι κλήσεις εντολών που δεν προέρχονται από τη συνομιλία πρέπει να ορίζουν την έκδοση της εντολής",
    "getchunkdata_description": "Λαμβάνει pixel για ένα συγκεκριμένο τμήμα.",
    "getchunkdata_success": "Δεδομένα τμήματος που έχουν ληφθεί",
    "getchunks_description": "Λαμβάνει λίστα των τμημάτων που έχουν φορτωθεί.",
    "getchunks_success": "Λίστα τμημάτων που έχουν ληφθεί",
    "getlocalplayername_description": "Επιστρέφει το όνομα τοπικού παίκτη.",
    "getspawnpoint_description": "Λαμβάνει τη θέση γένεσης συγκεκριμένου παίκτη ή παικτών.",
    "gettopsolidblock_description": "Λαμβάνει τη θέση του επάνω κύβου που δεν είναι αέρας κάτω από την καθορισμένη θέση",
    "gettopsolidblock_notfound": "Δεν υπάρχουν συμπαγείς κύβοι κάτω από την καθορισμένη θέση",
    "give_block_notFound": "Δεν υπάρχει κύβος με το όνομα %1$d",
    "give_description": "Δίνει ένα αντικείμενο σε έναν παίκτη.",
    "give_item_invalid": "Η σύνταξη εντολής δεν είναι έγκυρη: δεν υπάρχει %s με αυτήν την τιμή δεδομένων",
    "give_item_notFound": "Δεν υπάρχει αντικείμενο με το όνομα %1$d",
    "give_map_invalidData": "Τα δεδομένα χάρτη που παρέχονται δεν είναι έγκυρα",
    "give_map_featureNotFound": "Δεν ήταν δυνατή η δημιουργία χάρτη εξερεύνησης. Η δυνατότητα δεν βρέθηκε σε αυτήν τη διάσταση",
    "give_success": "Δόθηκε %1$s * %2$d στον παίκτη %3$s",
    "give_successRecipient": "Σου δόθηκαν %1$s * %2$d",
    "give_tagError": "Απέτυχε η ανάλυση της ετικέτας δεδομένων: %1$s",
    "help_description": "Παρέχει βοήθεια/λίστα εντολών.",
    "help_footer": "Συμβουλή: Χρησιμοποίησε το πλήκτρο <tab> κατά την πληκτρολόγηση μιας εντολής για να γίνεται αυτόματη συμπλήρωση της εντολής ή των ορισμάτων της",
    "help_header": "--- Εμφάνιση σελίδας βοήθειας %1$d από %2$d (/help <page>) ---",
    "help_command_aliases": "%s (επίσης %s):",
    "immutableworld_description": "Ορίζει την αμετάβλητη κατάσταση του κόσμου.",
    "immutableworld_info": "immutableworld = %s",
    "kick_description": "Αποβάλει έναν παίκτη από το διακομιστή.",
    "kick_description_edu": "Καταργεί έναν παίκτη από το παιχνίδι.",
    "kick_not_found": "Δεν είναι δυνατή η εύρεση του παίκτη %1$s",
    "kick_not_yourself": "Δεν μπορείς να καταργήσεις τον εαυτό σου από το παιχνίδι",
    "kick_success": "Ο παίκτης %1$s αποβλήθηκε από το παιχνίδι",
    "kick_success_reason": "Ο παίκτης %1$s αποβλήθηκε από το παιχνίδι: '%2$s'",
    "kick_success_reasonedu": "Ο παίκτης %1$s καταργήθηκε από το παιχνίδι: \"%2$s\"",
    "kick_no_host": "Ο οικοδεσπότης δεν μπορεί να αποβληθεί από το παιχνίδι.",
    "kick_no_teacher": "Οι δάσκαλοι δεν μπορούν να καταργηθούν από το παιχνίδι.",
    "kill_successful_edu": "Καταργήθηκε το στοιχείο %1$s",
    "kill_successful": "Σκοτώθηκε: %1$s",
    "kill_description_edu": "Καταργεί οντότητες (παίκτες, πλάσματα κ.λπ.).",
    "kill_description": "Σκοτώνει οντότητες (παίκτες, πλάσματα, κ.λπ).",
    "list_description": "Παραθέτει τους παίκτες στο διακομιστή.",
    "locate_description": "Εμφανίζει τις συντεταγμένες του πλησιέστερου καθορισμένου οικοδομήματος.",
    "locate_fail_noplayer": "Η εντολή μπορεί να χρησιμοποιηθεί μόνο από έγκυρο παίκτη",
    "locate_fail_nostructurefound": "Δεν βρέθηκε έγκυρο οικοδόμημα σε αυτή τη διάσταση",
    "locate_success": "Το πλησιέστερο %1$s είναι στον κύβο %2$s, (y?), %3$s",
    "togglecontentlog_toggle": "Ενεργοποιεί/απενεργοποιεί την εντολή αρχείου καταγραφής περιεχομένου",
    "togglecontentlog_enabled": "Το αρχείο καταγραφής περιεχομένου ενεργοποιήθηκε",
    "togglecontentlog_disabled": "Το αρχείο καταγραφής περιεχομένου απενεργοποιήθηκε",
    "me_description": "Εμφανίζει ένα μήνυμα για εσένα.",
    "message_display_incoming": "Ο παίκτης %1$s σου ψιθυρίζει: %2$s",
    "message_display_outgoing": "Ψιθυρίζεις στον παίκτη %1$s: %2$s",
    "message_sameTarget": "Δεν μπορείς να στείλεις προσωπικό μήνυμα στον εαυτό σου!",
    "mixer_description": "Έλεγχος αλληλεπίδρασης Mixer",
    "mixer_error_unknown": "Παρουσιάστηκε άγνωστο σφάλμα Mixer.",
    "mixer_error_notoken": "Πρέπει να έχεις πραγματοποιήσει είσοδο με λογαριασμό Microsoft για να ενεργοποιήσεις την αλληλεπίδραση Mixer.",
    "mixer_error_notsupported": "Η συσκευή που χρησιμοποιείς δεν υποστηρίζει την αλληλεπίδραση Mixer.",
    "mixer_interactive_error": "Παρουσιάστηκε σφάλμα Mixer: %1$s",
    "mixer_scene_failed": "Δεν υπάρχει σκηνή με όνομα %1$s. Βεβαιώσου ότι έχεις εισαγάγει σωστά το όνομα της σκηνής.",
    "mixer_scene_success": "Η σκηνή άλλαξε σε: %1$s",
    "mixer_start_success": "Έναρξη αλληλεπίδρασης Mixer: %1$s",
    "mixer_start_fail_invalidCode": "Δεν ήταν δυνατή η εύρεση έργου με αναγνωριστικό \"%1$s\". Βεβαιώσου ότι το αναγνωριστικό ή ο κωδικός κοινής χρήσης είναι σωστά.",
    "mixer_stop_success": "Η αλληλεπίδραση Mixer διακόπηκε.",
    "mixer_stop_fail": "Δεν υπάρχει αλληλεπιδραστική περίοδος λειτουργίας για διακοπή.",
    "mixer_status_notinitialized": "Δεν έχει γίνει προετοιμασία της αλληλεπίδρασης.",
    "mixer_status_enabled": "Η αλληλεπίδραση έχει ενεργοποιηθεί.",
    "mixer_status_initializing": "Γίνεται προετοιμασία της αλληλεπίδρασης.",
    "mixer_status_pending": "Η αλληλεπίδραση βρίσκεται σε εκκρεμότητα.",
    "mixer_status_disabled": "Η αλληλεπίδραση έχει απενεργοποιηθεί.",
    "mixer_activatedbutton": "Το %1$s ενεργοποίησε το %2$s.",
    "mobevent_description": "Ελέγχει τα συμβάντα πλασμάτων που επιτρέπεται να εκτελεστούν.",
    "mobevent_eventsEnabledSetToTrue": "Τα συμβάντα πλασμάτων έχουν τώρα ενεργοποιηθεί. Δεν θα εκτελούνται μεμονωμένα συμβάντα που έχουν οριστεί σε τιμή \"false\".",
    "mobevent_eventsEnabledSetToFalse": "Τα συμβάντα πλασμάτων έχουν τώρα απενεργοποιηθεί. Δεν εκτελούνται μεμονωμένα συμβάντα.",
    "mobevent_eventsEnabledIsTrue": "Τα συμβάντα πλασμάτων έχουν ενεργοποιηθεί. Δεν θα εκτελούνται μεμονωμένα συμβάντα που έχουν οριστεί σε τιμή \"false\".",
    "mobevent_eventsEnabledIsFalse": "Τα συμβάντα πλασμάτων έχουν απενεργοποιηθεί. Δεν εκτελούνται μεμονωμένα συμβάντα.",
    "mobevent_eventSetToTrue": "Η τιμή για το συμβάν πλάσματος %s (αναγνωριστικό: %s) ορίστηκε σε \"true\".",
    "mobevent_eventSetToTrueButEventsDisabled": "Η τιμή για το συμβάν πλάσματος %s (αναγνωριστικό: %s) ορίστηκε σε \"true\", αλλά τα συμβάντα πλασμάτων είναι απενεργοποιημένα.",
    "mobevent_eventSetToFalse": "Η τιμή για το συμβάν πλάσματος %s (αναγνωριστικό: %s) ορίστηκε σε \"false\".",
    "mobevent_eventIsTrue": "Η τιμή για το συμβάν πλάσματος %s (αναγνωριστικό: %s) έχει οριστεί σε \"true\".",
    "mobevent_eventIsTrueButEventsDisabled": "Η τιμή για το συμβάν πλάσματος %s (αναγνωριστικό: %s) έχει οριστεί σε \"true\", αλλά τα συμβάντα πλασμάτων είναι απενεργοποιημένα.",
    "mobevent_eventIsFalse": "Η τιμή για το συμβάν πλάσματος %s (αναγνωριστικό: %s) έχει οριστεί σε \"false\".",
    "op_description": "Παραχωρεί κατάσταση χειριστή σε έναν παίκτη.",
    "op_failed": "Δεν ήταν δυνατή η μετατροπή σε op (ήδη op ή υψηλότερο): %s",
    "op_success": "Μετατροπή σε op: %s",
    "op_message": "Έχεις μετατραπεί σε op",
    "origin_commandblock": "ΚύβοςΕντολών",
    "origin_external": "Εξωτερικό",
    "origin_devconsole": "DevConsole",
    "origin_script": "Μηχανισμός δέσμης ενεργειών",
    "origin_server": "Διακομιστής",
    "origin_teacher": "Δάσκαλος",
    "ops_description": "Επαναφορτώνει και εφαρμόζει τα δικαιώματα Op.",
    "ops_reloaded": "Επαναφορτώθηκαν Op από αρχείο.",
    "ops_set_success": "Επιτυχής ρύθμιση επιπέδου χειριστή για τον παίκτη %s.",
    "permissions_description": "Επαναφορτώνει και εφαρμόζει δικαιώματα.",
    "permissions_reloaded": "Έγινε νέα φόρτωση δικαιωμάτων από αρχείο.",
    "permissions_set_failed": "Δεν ήταν δυνατή η ρύθμιση του επιπέδου δικαιωμάτων %s για τον παίκτη %s.",
    "permissions_set_success": "Επιτυχής ρύθμιση επιπέδου δικαιωμάτων %s για τον παίκτη %s.",
    "permissions_save_failed": "Δεν ήταν δυνατή η αποθήκευση του επιπέδου δικαιωμάτων %s για τον παίκτη %s.",
    "permissions_save_success": "Επιτυχής αποθήκευση επιπέδου δικαιωμάτων %s για τον παίκτη %s.",
    "spawnParticleEmitter_description": "Δημιουργεί έναν πομπό σωματιδίων",
    "particle_description": "Δημιουργεί σωματίδια.",
    "particle_notFound": "Άγνωστο όνομα εφέ (%1$s)",
    "particle_success": "Αναπαραγωγή εφέ %1$s %2$d φορές",
    "players_list": "Υπάρχουν %1$d/%2$d παίκτες online:",
    "players_list_names": "%s",
    "playsound_description": "Αναπαράγει ήχο.",
    "playsound_playerTooFar": "Ο παίκτης %1$s είναι πολύ μακριά για να ακούσει τον ήχο",
    "playsound_success": "Έγινε αναπαραγωγή του ήχου '%1$s' σε %2$s",
    "position_description": "Ενεργοποιεί/απενεργοποιεί τις συντεταγμένες για τον παίκτη.",
    "publish_failed": "Δεν είναι δυνατό να φιλοξενηθεί τοπικό παιχνίδι",
    "publish_started": "Το τοπικό παιχνίδι φιλοξενείται στη θύρα %1$s",
    "querytarget_description": "Λαμβάνει πληροφορίες μετασχηματισμού, ονόματος και αναγνωριστικού για τις καθορισμένες οντότητες ή οντότητα στόχο.",
    "querytarget_success": "Δεδομένα προορισμού: %1$s",
    "reload_description": "Πραγματοποιεί νέα φόρτωση όλων των αρχείων συναρτήσεων από όλα τα πακέτα συμπεριφοράς.",
    "reload_success": "Τα υπάρχοντα αρχεία συναρτήσεων φορτώθηκαν ξανά. Επανεκκίνησε το Minecraft για να φορτώσεις ξανά ΝΕΕΣ συναρτήσεις.",
    "replaceitem_description": "Αντικαθιστά αντικείμενα στα αποθέματα.",
    "replaceitem_failed": "Δεν είναι δυνατή η αντικατάσταση της υποδοχής %s %d με %d * %s",
    "replaceitem_keepFailed": "Υπάρχει ήδη ένα αντικείμενο που καταλαμβάνει την υποδοχή %s %d.",
    "replaceitem_noContainer": "Ο κύβος στη θέση %s δεν είναι κιβώτιο",
    "replaceitem_badSlotNumber": "Δεν ήταν δυνατή η αντικατάσταση της υποδοχής %d, πρέπει να είναι μια τιμή μεταξύ %d και %d.",
    "replaceitem_success": "Η υποδοχή %s %d αντικαταστάθηκε από %d * %s",
    "replaceitem_success_entity": "Η υποδοχή %s %d από %s αντικαταστάθηκε από %d * %s",
    "replaceitem_tagError": "Απέτυχε η ανάλυση της ετικέτας δεδομένων: %1$s",
    "save_description": "Έλεγξε τον τρόπο με τον οποίο το παιχνίδι αποθηκεύει δεδομένα στο δίσκο.",
    "save_disabled": "Απενεργοποιήθηκε η αυτόματη αποθήκευση κόσμου",
    "save_enabled": "Ενεργοποιήθηκε η αυτόματη αποθήκευση κόσμου",
    "save_failed": "Αποτυχία αποθήκευσης: %1$s",
    "save_start": "Αποθήκευση...",
    "save_success": "Ο κόσμος αποθηκεύτηκε",
    "save_all_error": "Παρουσιάστηκε σφάλμα κατά την απόπειρα παύσης της αποθήκευσης επιπέδου.",
    "save_all_success": "Τα δεδομένα αποθηκεύτηκαν. Τα αρχεία είναι πλέον έτοιμα για αντιγραφή.",
    "save_off_alreadyOff": "Η αποθήκευση είναι ήδη απενεργοποιημένη.",
    "save_on_alreadyOn": "Η αποθήκευση είναι ήδη ενεργοποιημένη.",
    "save_on_notDone": "Δεν ολοκληρώθηκε μια προηγούμενη αποθήκευση.",
    "save_on_description": "Επιτρέπει την αυτόματη αποθήκευση στο διακομιστή.",
    "save_on_success": "Γίνεται συνέχιση των αλλαγών στο επίπεδο.",
    "save_state_description": "Ελέγχει αν ολοκληρώθηκε μια προηγούμενη αποθήκευση όλων και παραθέτει τα σχετικά αρχεία.",
    "say_description": "Αποστέλλει ένα μήνυμα στη συνομιλία σε άλλους παίκτες.",
    "scoreboard_description": "Παρακολουθεί και εμφανίζει βαθμολογίες για διάφορους στόχους.",
    "scoreboard_allMatchesFailed": "Απέτυχαν όλες οι συμφωνίες",
    "scoreboard_noMultiWildcard": "Επιτρέπεται μόνο ένας μπαλαντέρ χρήστη",
    "scoreboard_objectiveNotFound": "Δεν βρέθηκε στόχος με το όνομα '%1$s'",
    "scoreboard_objectiveReadOnly": "Ο στόχος '%1$s' είναι μόνο για ανάγνωση και δεν μπορεί να οριστεί",
    "scoreboard_objectives_add_alreadyExists": "Υπάρχει ήδη στόχος με το όνομα '%1$s'",
    "scoreboard_objectives_add_displayTooLong": "Το όνομα εμφάνισης '%1$s' είναι πολύ μεγάλο για έναν στόχο, μπορεί να έχει μέγεθος έως και %2$d χαρακτήρες",
    "scoreboard_objectives_add_success": "Ο νέος στόχος '%1$s' προστέθηκε με επιτυχία",
    "scoreboard_objectives_add_tooLong": "Το όνομα '%1$s' είναι πολύ μεγάλο για έναν στόχο, μπορεί να έχει μέγεθος έως και %2$d χαρακτήρες",
    "scoreboard_objectives_add_wrongType": "Μη έγκυρος τύπος κριτηρίου στόχου '%1$s'",
    "scoreboard_objectives_add_needName": "Ο στόχος χρειάζεται όνομα.",
    "scoreboard_objectives_description": "Τροποποίηση στόχων του πίνακα βαθμολογίας.",
    "scoreboard_objectives_list_count": "Εμφάνιση %1$d στόχου(-ων) στον πίνακα βαθμολογίας:",
    "scoreboard_objectives_list_empty": "Δεν υπάρχουν στόχοι στον πίνακα βαθμολογίας",
    "scoreboard_objectives_list_entry": "- %1$s: εμφανίζεται ως '%2$s' και ο τύπος του είναι '%3$s'",
    "scoreboard_objectives_remove_success": "Ο στόχος '%1$s' καταργήθηκε με επιτυχία",
    "scoreboard_objectives_setdisplay_invalidSlot": "Δεν υπάρχει τέτοια υποδοχή εμφάνισης '%1$s'",
    "scoreboard_objectives_setdisplay_successCleared": "Έγινε εκκαθάριση της υποδοχής εμφάνισης στόχου '%1$s'",
    "scoreboard_objectives_setdisplay_successSet": "Ορισμός του στόχου εμφάνισης στην υποδοχή '%1$s' ως '%2$s'",
    "scoreboard_players_add_success": "Προστέθηκαν %1$d στο [%2$s] για τον παίκτη %3$s (τώρα %4$d)",
    "scoreboard_players_add_multiple_success": "Προστέθηκαν %1$d στο [%2$s] για %3$d οντότητες",
    "scoreboard_players_nameNotFound": "Πρέπει να δοθεί όνομα παίκτη.",
    "scoreboard_players_enable_noTrigger": "Ο στόχος %1$s δεν είναι έναυσμα",
    "scoreboard_players_enable_success": "Ενεργοποιήθηκε το έναυσμα %1$s για %2$s",
    "scoreboard_players_list_count": "Εμφανίζονται %1$d παίκτες που παρακολουθούνται στον πίνακα βαθμολογίας:",
    "scoreboard_players_list_empty": "Δεν υπάρχουν παίκτες που παρακολουθούνται στον πίνακα βαθμολογίας",
    "scoreboard_players_list_player_count": "Εμφάνιση %1$d στόχων που παρακολουθούνται για %2$s:",
    "scoreboard_players_list_player_empty": "Δεν έχουν καταγραφεί βαθμολογίες για τον παίκτη %1$s",
    "scoreboard_players_list_player_entry": "- %2$s: %1$d (%3$s)",
    "scoreboard_players_operation_invalidOperation": "Μη έγκυρη λειτουργία %1$s",
    "scoreboard_players_operation_notFound": "Δεν βρέθηκε βαθμολογία %1$s για τον παίκτη %2$s",
    "scoreboard_players_operation_success": "Ενημερώθηκε το [%1$s] για %2$d οντότητες",
    "scoreboard_players_offlinePlayerName": "Παίκτης εκτός σύνδεσης",
    "scoreboard_players_random_invalidRange": "Το ελάχιστο %1$d δεν είναι μικρότερο από το μέγιστο %2$d",
    "scoreboard_players_remove_success": "Καταργήθηκαν %1$d από το [%2$s] για τον παίκτη %3$s (τώρα %4$d)",
    "scoreboard_players_remove_multiple_success": "Καταργήθηκαν %1$d από το [%2$s] για %3$d οντότητες",
    "scoreboard_players_reset_success": "Επαναφορά βαθμολογιών για τον παίκτη %1$s",
    "scoreboard_players_resetscore_success": "Επαναφορά βαθμολογίας %1$s για τον παίκτη %2$s",
    "scoreboard_players_set_success": "Ορίστηκε το [%1$s] για τον παίκτη %2$s σε %3$d",
    "scoreboard_players_set_multiple_success": "Ορίστηκε το [%1$s] για %2$d οντότητες σε %3$d",
    "scoreboard_players_set_tagError": "Δεν ήταν δυνατή η ανάλυση της ετικέτας δεδομένων, αιτία: %1$s",
    "scoreboard_players_set_tagMismatch": "Η ετικέτα δεδομένων δεν αντιστοιχεί σε %1$s",
    "scoreboard_players_score_notFound": "Δεν βρέθηκε βαθμολογία %1$s για τον παίκτη %2$s",
    "scoreboard_players_test_failed": "Η βαθμολογία %1$d ΔΕΝ είναι εντός του εύρους %2$d έως %3$d",
    "scoreboard_players_test_success": "Η βαθμολογία %1$d είναι εντός του εύρους %2$d έως %3$d",
    "scoreboard_teamNotFound": "Δεν βρέθηκε ομάδα με το όνομα '%1$s'",
    "scoreboard_teams_add_alreadyExists": "Μια ομάδα με το όνομα '%1$s' υπάρχει ήδη",
    "scoreboard_teams_add_displayTooLong": "Το όνομα εμφάνισης '%1$s' είναι πολύ μεγάλο για μια ομάδα, μπορεί να έχει μέγεθος έως και %2$d χαρακτήρες",
    "scoreboard_teams_add_success": "Η νέα ομάδα '%1$s' προστέθηκε με επιτυχία",
    "scoreboard_teams_add_tooLong": "Το όνομα '%1$s' είναι πολύ μεγάλο για μια ομάδα, μπορεί να έχει μέγεθος έως και %2$d χαρακτήρες",
    "scoreboard_teams_empty_alreadyEmpty": "Η ομάδα %1$s είναι ήδη κενή, δεν μπορούν να καταργηθούν παίκτες που δεν υπάρχουν",
    "scoreboard_teams_empty_success": "Καταργήθηκε το σύνολο %1$d παικτών της ομάδας %2$s",
    "scoreboard_teams_join_failure": "Δεν είναι δυνατή η προσθήκη %1$d παίκτη(-ών) στην ομάδα %2$s: %3$s",
    "scoreboard_teams_join_success": "Έγινε προσθήκη %1$d παίκτη(-ών) στην ομάδα %2$s: %3$s",
    "scoreboard_teams_leave_failure": "Δεν ήταν δυνατή η κατάργηση %1$d παίκτη(-ών) από τις ομάδες: %2$s",
    "scoreboard_teams_leave_noTeam": "Δεν ανήκεις σε ομάδα",
    "scoreboard_teams_leave_success": "Έγινε κατάργηση %1$d παίκτη(-ών) από τις ομάδες: %2$s",
    "scoreboard_teams_list_count": "Εμφανίζονται %1$d ομάδες στον πίνακα βαθμολογίας:",
    "scoreboard_teams_list_empty": "Δεν υπάρχουν καταγεγραμμένες ομάδες στον πίνακα βαθμολογίας",
    "scoreboard_teams_list_entry": "- %1$s: η ομάδα '%2$s' έχει %3$d παίκτες",
    "scoreboard_teams_list_player_count": "Γίνεται εμφάνιση %1$d παίκτη(-ών) στην ομάδα %2$s:",
    "scoreboard_teams_list_player_empty": "Η ομάδα %1$s δεν έχει παίκτες",
    "scoreboard_teams_list_player_entry": "- %2$s: %1$d (%3$s)",
    "scoreboard_teams_option_noValue": "Οι έγκυρες τιμές για την επιλογή %1$s είναι: %2$s",
    "scoreboard_teams_option_success": "Ορισμός της επιλογής %1$s για την ομάδα %2$s σε %3$s",
    "scoreboard_teams_remove_success": "Καταργήθηκε η ομάδα %1$s",
    "seed_success": "Φύτρο: %1$s",
    "setblock_description": "Αλλάζει έναν κύβο σε διαφορετικό κύβο.",
    "setblock_failed": "Δεν είναι δυνατή η τοποθέτηση κύβου",
    "setblock_noChange": "Δεν ήταν δυνατή η τοποθέτηση κύβου",
    "setblock_notFound": "Δεν υπάρχει κύβος με το αναγνωριστικό/όνομα %1$s",
    "setblock_outOfWorld": "Δεν είναι δυνατή η τοποθέτηση του κύβου έξω από τον κόσμο",
    "setblock_success": "Ο κύβος τοποθετήθηκε",
    "setblock_tagError": "Απέτυχε η ανάλυση της ετικέτας δεδομένων: %1$s",
    "setidletimeout_success": "Το χρονικό όριο αδράνειας ορίστηκε με επιτυχία στα %1$d λεπτά.",
    "setfixedinvslots_description": "Ορίζει τον αριθμό σταθερών υποδοχών αποθεμάτων για το διακομιστή.",
    "setfixedinvslots_success": "Ο αριθμός σταθερών υποδοχών αποθεμάτων ορίστηκε σε %1$d",
    "setfixedinvslot_description": "Ορίζει σταθερή υποδοχή σε συγκεκριμένο αντικείμενο.",
    "setfixedinvslot_success": "Η σταθερή υποδοχή αποθεμάτων %1$d έχει οριστεί σε %2$s",
    "globalpause_description": "Ορίζει ή λαμβάνει την κατάσταση παύσης του παιχνιδιού για όλους τους παίκτες.",
    "globalpause_success": "Ορισμός ή λήψη κατάστασης παύσης",
    "setmaxplayers_description": "Ορίζει τον μέγιστο αριθμό των παικτών για αυτήν την περίοδο λειτουργίας παιχνιδιού.",
    "setmaxplayers_success": "Ορίζει τον μέγιστο αριθμό παικτών σε %1$d.",
    "setmaxplayers_success_upperbound": "(Όριο στις μέγιστες επιτρεπόμενες συνδέσεις)",
    "setmaxplayers_success_lowerbound": "(Όριο στον τρέχοντα αριθμό παικτών)",
    "setworldspawn_description": "Ορίζει το σημείο γένεσης κόσμου.",
    "setworldspawn_success": "Ορισμός του σημείου γένεσης κόσμου σε (%1$d, %2$d, %3$d)",
    "setworldspawn_wrongDimension": "Η γένεση κόσμου δεν μπορεί να οριστεί σε αυτήν τη διάσταση",
    "spawnpoint_success_single": "Ορισμός σημείου γένεσης του παίκτη %1$s σε (%2$d, %3$d, %4$d)",
    "spawnpoint_description": "Ορίζει το σημείο γένεσης ενός παίκτη.",
    "spawnpoint_success_multiple_specific": "Ορισμός σημείου γένεσης παίκτη %1$s σε (%2$d, %3$d, %4$d)",
    "spawnpoint_success_multiple_generic": "Ορισμός σημείου γένεσης παίκτη %1$s",
    "spawnpoint_wrongDimension": "Το σημείο γένεσης δεν μπορεί να οριστεί σε αυτή τη διάσταση",
    "spreadplayers_description": "Τηλεμεταφέρει οντότητες σε τυχαίες τοποθεσίες.",
    "spreadplayers_failure_players": "Δεν μπορούν να διασκορπιστούν %1$s παίκτες γύρω από %2$s,%3$s (υπερβολικά πολλοί παίκτες για το χώρο - δοκίμασε να διασκορπίσεις έως και %4$s)",
    "spreadplayers_failure_teams": "Δεν μπορούν να διασκορπιστούν %1$s ομάδες γύρω από %2$s,%3$s (υπερβολικά πολλές ομάδες για το χώρο - δοκίμασε να διασκορπίσεις έως και%4$s)",
    "spreadplayers_info_players": "(Η μέση απόσταση μεταξύ παικτών είναι %1$s κύβοι μετά από %2$s διαδοχικές προσεγγίσεις)",
    "spreadplayers_info_teams": "(Η μέση απόσταση μεταξύ ομάδων είναι %1$s κύβοι μετά από %2$s διαδοχικές προσεγγίσεις)",
    "spreadplayers_spreading_players": "Διασκορπίζονται %1$s παίκτες %2$s κύβους γύρω από %3$s,%4$s (ελάχιστη απόσταση μεταξύ τους %5$s κύβοι)",
    "spreadplayers_spreading_teams": "Διασκορπίζονται %1$s ομάδες %2$s κύβους γύρω από %3$s,%4$s (ελάχιστη απόσταση μεταξύ τους %5$s κύβοι)",
    "spreadplayers_success_players": "Διασκορπίστηκαν με επιτυχία %1$s παίκτες γύρω από %2$s,%3$s",
    "spreadplayers_success_teams": "Διασκορπίστηκαν με επιτυχία %1$s ομάδες γύρω από %2$s,%3$s",
    "stats_cleared": "Εκκαθαρίστηκαν τα στατιστικά στοιχεία του παίκτη %1$s",
    "stats_failed": "Μη έγκυρες παράμετροι",
    "stats_noCompatibleBlock": "Ο κύβος στη θέση %1$d, %2$d, %3$d δεν μπορεί να παρακολουθήσει στατιστικά στοιχεία",
    "stats_success": "Αποθήκευση στατιστικών στοιχείων του παίκτη %1$s στο %2$s στο %3$s",
    "stop_description": "Διακόπτει τη λειτουργία του διακομιστή.",
    "stop_start": "Διακόπηκε η λειτουργία του διακομιστή",
    "stopsound_description": "Διακόπτει έναν ήχο.",
    "stopsound_success": "Διακοπή ήχου %s για %s",
    "stopsound_success_all": "Διακοπή όλων των ήχων για %s",
    "summon_description": "Καλεί μια οντότητα.",
    "summon_failed": "Δεν είναι δυνατή η κλήση αντικειμένου",
    "summon_outOfWorld": "Δεν είναι δυνατή η κλήση του αντικειμένου έξω από τον κόσμο",
    "summon_success": "Η κλήση του αντικειμένου ολοκληρώθηκε με επιτυχία",
    "summon_tagError": "Απέτυχε η ανάλυση της ετικέτας δεδομένων: %1$s",
    "tag_description": "Διαχειρίζεται ετικέτες που έχουν αποθηκευτεί σε οντότητες.",
    "tag_add_failed": "Ο προορισμός είτε έχει ήδη την ετικέτα είτε έχει πολλές ετικέτες",
    "tag_add_success_single": "Προστέθηκε η ετικέτα \"%1$s\" στο στοιχείο %2$s",
    "tag_add_success_multiple": "Προστέθηκε η ετικέτα \"%1$s\" σε %2$d οντότητες",
    "tag_list_single_empty": "Το στοιχείο %s δεν έχει ετικέτες",
    "tag_list_single_success": "Το στοιχείο %1$s έχει %2$d ετικέτες: %3$s",
    "tag_list_multiple_empty": "Δεν υπάρχουν ετικέτες σε %d οντότητες",
    "tag_list_multiple_success": "Οι %1$d οντότητες έχουν %2$d ετικέτες συνολικά: %3$s",
    "tag_remove_failed": "Ο προορισμός δεν έχει αυτή την ετικέτα",
    "tag_remove_success_single": "Καταργήθηκε η ετικέτα \"%1$s\" από το στοιχείο %2$s",
    "tag_remove_success_multiple": "Καταργήθηκε η ετικέτα \"%1$s\" από %2$d οντότητες",
    "tell_description": "Αποστέλλει ένα προσωπικό μήνυμα σε έναν ή περισσότερους παίκτες.",
    "tellraw_description": "Στέλνει ένα μήνυμα JSON στους παίκτες.",
    "tellraw_jsonException": "Μη έγκυρο json: %1$s",
    "tellraw_jsonStringException": "Μη έγκυρα δεδομένα συμβολοσειράς json.",
    "tellraw_error_noData": "Δεν δόθηκαν δεδομένα.",
    "tellraw_error_notArray": "Το αντικείμενο rawtext πρέπει να περιέχει συστοιχία. Παράδειγμα: \"rawtext\":[{..}]",
    "tellraw_error_textNotString": "Το πεδίο \"text\" (κείμενο) στο rawtext πρέπει να περιέχει συμβολοσειρά. Παράδειγμα: \"rawtext\":[{\"text\": \"text to display\"}]",
    "tellraw_error_translateNotString": "Το πεδίο \"translate\" (μετάφραση) στο rawtext πρέπει να περιέχει ένα κλειδί γλώσσας. Παράδειγμα: \"rawtext\":[{\"translate\": \"gui.ok\"}]",
    "tellraw_error_withNotArrayOrRawText": "Το πεδίο \"with\" (με) στο rawtext πρέπει να περιέχει μια συστοιχία ή ένα άλλο αντικείμενο rawtext. Παράδειγμα 1: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\": [ \"value1\", \"value2\" ]}]  Παράδειγμα 2: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\":{\"rawtext\":[{\"text\": \"value1\"}, {\"text\": \"value2\"}]}}]",
    "tellraw_error_itemIsNotObject": "Η τιμή Json στη συστοιχία rawtext δεν ήταν αντικείμενο. Παράδειγμα: \"rawtext\": [{ \"text\" : \"my text\" }]",
    "educlientinfo_description": "Λήψη αναγνωριστικού μισθωτή και κατάστασης οικοδεσπότη. Χρησιμοποιείται στο CM.",
    "testfor_description": "Υπολογίζει οντότητες (παίκτες, πλάσματα, αντικείμενα κ.λπ.) που πληρούν καθορισμένες προϋποθέσεις.",
    "testfor_failure": "Το στοιχείο %1$s δεν αντιστοιχεί στην απαιτούμενη δομή δεδομένων",
    "testfor_success": "Βρέθηκε το στοιχείο %1$s",
    "testfor_tagError": "Απέτυχε η ανάλυση της ετικέτας δεδομένων: %1$s",
    "testforblock_description": "Ελέγχει αν ένας συγκεκριμένος κύβος βρίσκεται σε μια καθορισμένη τοποθεσία.",
    "testforblock_failed_data": "Ο κύβος στο %1$d,%2$d,%3$d δεν αντιστοιχούσε με την αναμενόμενη κατάσταση κύβου.",
    "testforblock_failed_nbt": "Ο κύβος στη θέση %1$d,%2$d,%3$d δεν είχε τα απαραίτητα κλειδιά NBT.",
    "testforblock_failed_tile": "Ο κύβος στη θέση %1$d,%2$d,%3$d είναι %4$s (αναμενόμενο: %5$s).",
    "testforblock_failed_tileEntity": "Ο κύβος στη θέση %1$d,%2$d,%3$d δεν είναι οντότητα πλακιδίου και δεν υποστηρίζει αντιστοίχιση ετικέτας.",
    "testforblock_outOfWorld": "Δεν είναι δυνατός ο έλεγχος για κύβους εκτός του κόσμου",
    "testforblock_success": "Βρέθηκε με επιτυχία ο κύβος στη θέση %1$d,%2$d,%3$d.",
    "testforblocks_description": "Ελέγχει αν ταιριάζουν οι κύβοι δύο περιοχών.",
    "tickingarea_description": "Πρόσθεσε, κατάργησε ή απαρίθμησε περιοχές αυτόματης ενημέρωσης.",
    "tickingarea_inuse": "%1$d/%2$d περιοχές αυτόματης ενημέρωσης σε χρήση.",
    "tickingarea_noneExist_currentDimension": "Δεν υπάρχουν περιοχές αυτόματης ενημέρωσης στην τρέχουσα διάσταση.",
    "tickingarea_add_bounds_success": "Προστέθηκε περιοχή αυτόματης ενημέρωσης από %1$d έως %2$d.",
    "tickingarea_add_circle_success": "Προστέθηκε περιοχή αυτόματης ενημέρωσης με επίκεντρο το %1$d και ακτίνα %2$d τμημάτων.",
    "tickingarea_add_failure": "Έχεις ήδη συμπληρώσει τον μέγιστο αριθμό περιοχών αυτόματης ενημέρωσης (%1$d). Δεν μπορείς να προσθέσεις περισσότερες περιοχές αυτόματης ενημέρωσης.",
    "tickingarea_add_conflictingname": "Υπάρχει ήδη περιοχή αυτόματης ενημέρωσης με όνομα %1$s.",
    "tickingarea_add_chunkfailure": "Η περιοχή αυτόματης ενημέρωσης περιέχει περισσότερα από %1$d τμήματα, η περιοχή αυτόματης ενημέρωσης είναι πολύ μεγάλη και δεν μπορεί να δημιουργηθεί.",
    "tickingarea_add_radiusfailure": "Η ακτίνα δεν μπορεί να είναι μεγαλύτερη από %1$d, η περιοχή αυτόματης ενημέρωσης είναι πολύ μεγάλη και δεν μπορεί να δημιουργηθεί.",
    "tickingarea_remove_success": "Καταργήθηκε/αν περιοχή/χές αυτόματης ενημέρωσης",
    "tickingarea_remove_failure": "Δεν υπάρχουν περιοχές αυτόματης ενημέρωσης που να περιέχουν τη θέση κύβου %1$d στην τρέχουσα διάσταση.",
    "tickingarea_remove_byname_failure": "Δεν υπάρχουν περιοχές αυτόματης ενημέρωσης με όνομα %1$s στην τρέχουσα διάσταση.",
    "tickingarea_remove_all_success": "Καταργήθηκε/αν περιοχή/χές αυτόματης ενημέρωσης",
    "tickingarea_remove_all_failure": "Δεν υπάρχουν περιοχές αυτόματης ενημέρωσης στην τρέχουσα διάσταση.",
    "tickingarea_list_chunks": "τμήματα",
    "tickingarea_list_circle_radius": "Ακτίνα",
    "tickingarea_list_success_currentDimension": "Λίστα όλων των περιοχών αυτόματης ενημέρωσης στην τρέχουσα διάσταση",
    "tickingarea_list_success_allDimensions": "Λίστα όλων των περιοχών αυτόματης ενημέρωσης σε όλες τις διαστάσεις",
    "tickingarea_list_failure_allDimensions": "Δεν υπάρχουν περιοχές αυτόματης ενημέρωσης σε καμία διάσταση.",
    "tickingarea_list_to": "σε",
    "tickingarea_list_type_circle": "Κύκλος",
    "time_added": "Προστέθηκαν %1$d στο χρόνο",
    "time_description": "Αλλάζει ή ρωτά την ώρα παιχνιδιού του κόσμου.",
    "time_disabled": "Έχει ενεργοποιηθεί η επιλογή \"Πάντα ημέρα\" σε αυτό το επίπεδο.",
    "time_query_day": "Η ημέρα είναι %d",
    "time_query_daytime": "Η διάρκεια της ημέρας είναι %d",
    "time_query_gametime": "Ο χρόνος παιχνιδιού είναι %d",
    "time_set": "Ορισμός του χρόνου σε %1$d",
    "time_stop": "Χρόνος %1$s",
    "title_description": "Ελέγχει τους τίτλους της οθόνης.",
    "title_success": "Η εντολή τίτλου εκτελέστηκε με επιτυχία",
    "titleraw_description": "Ελέγχει τους τίτλους οθόνης με μηνύματα JSON.",
    "toggledownfall_description": "Αλλάζει τον καιρό.",
    "tp_description": "Τηλεμεταφέρει οντότητες (παίκτες, πλάσματα, κ.λπ.).",
    "tp_notSameDimension": "Δεν είναι δυνατή η τηλεμεταφορά επειδή οι παίκτες δεν είναι στην ίδια διάσταση",
    "tp_outOfWorld": "Δεν είναι δυνατή η τηλεμεταφορά οντοτήτων έξω από τον κόσμο",
    "tp_permission": "Δεν έχεις άδεια να χρησιμοποιήσεις αυτήν την εντολή slash.",
    "tp_safeTeleportFail": "Δεν είναι δυνατή η τηλεμεταφορά του %1$s σε %2$s επειδή υπάρχουν κύβοι στην περιοχή.",
    "tp_far": "Δεν είναι δυνατή η τηλεμεταφορά του %1$s στην περιοχή που δεν φορτώθηκε σε %2$s",
    "tp_success": "Τηλεμεταφορά %1$s σε %2$s",
    "tp_successVictim": "Τηλεμεταφέρθηκες στη θέση %1$s",
    "tp_success_coordinates": "Τηλεμεταφέρθηκε ο παίκτης %1$s στη θέση %2$s, %3$s, %4$s",
    "transferserver_description": "Μεταφέρει έναν παίκτη σε άλλο διακομιστή.",
    "transferserver_successful": "Παίκτης που μεταφέρθηκε",
    "transferserver_invalid_port": "Μη έγκυρη θύρα (0-65535)",
    "trigger_description": "Ορίζει ένα έναυσμα για ενεργοποίηση.",
    "trigger_disabled": "Το έναυσμα %1$s δεν είναι ενεργοποιημένο",
    "trigger_invalidMode": "Μη έγκυρη λειτουργία εναύσματος %1$s",
    "trigger_invalidObjective": "Μη έγκυρο όνομα εναύσματος %1$s",
    "trigger_invalidPlayer": "Μόνο οι παίκτες μπορούν να χρησιμοποιήσουν την εντολή /trigger",
    "trigger_success": "Το έναυσμα %1$s άλλαξε με %2$s %3$s",
    "unban_failed": "Δεν είναι δυνατή η κατάργηση αποκλεισμού του παίκτη %1$s",
    "unban_success": "Καταργήθηκε ο αποκλεισμός του παίκτη %1$s",
    "unbanip_invalid": "Εισήγαγες μη έγκυρη διεύθυνση IP",
    "unbanip_success": "Καταργήθηκε ο αποκλεισμός της διεύθυνσης IP %1$s",
    "validategamelighting_description": "Επικύρωση φωτισμού του παιχνιδιού για μια συγκεκριμένη περιοχή",
    "validategamelighting_checkRegionTooBig": "Η περιοχή για έλεγχο του φωτισμού είναι πολύ μεγάλη! (%1$d > %2$d)",
    "validategamelighting_outOfWorld": "Δεν είναι δυνατός ο έλεγχος του φωτισμού εκτός του κόσμου",
    "weather_clear": "Αλλαγή σε αίθριο καιρό",
    "weather_description": "Ορίζει τον καιρό.",
    "weather_disabled": "Δεν έχει ενεργοποιηθεί η επιλογή \"Κύκλος καιρού\" σε αυτό το επίπεδο.",
    "weather_query": "Η κατάσταση του καιρού είναι: %s",
    "weather_query_clear": "αίθριος",
    "weather_query_rain": "βροχή",
    "weather_query_thunder": "κεραυνός",
    "weather_rain": "Αλλαγή σε βροχερό καιρό",
    "weather_thunder": "Αλλαγή σε βροχή και κεραυνό",
    "whitelist_add_failed": "Δεν ήταν δυνατή η προσθήκη του παίκτη %1$s στη λίστα αποδοχής",
    "whitelist_add_success": "Προσθήκη του παίκτη %1$s στη λίστα αποδοχής",
    "whitelist_description": "Διαχειρίζεται τη λίστα αποδοχής του διακομιστή.",
    "whitelist_disabled": "Απενεργοποιήθηκε η λίστα αποδοχής",
    "whitelist_enabled": "Ενεργοποιήθηκε η λίστα αποδοχής",
    "whitelist_list": "Υπάρχουν %1$d (από %2$d που εμφανίζονται) παίκτες στη λίστα αποδοχής:",
    "whitelist_reloaded": "Επαναφόρτωση της λίστας αποδοχής από αρχείο.",
    "whitelist_remove_failed": "Δεν ήταν δυνατή η κατάργηση του παίκτη %1$s από τη λίστα αποδοχής",
    "whitelist_remove_success": "Καταργήθηκε ο παίκτης %1$s από τη λίστα αποδοχής",
    "world_age_description": "Αλλάζει ή ρωτά την ηλικία του κόσμου (χρόνος από τη δημιουργία).",
    "world_age_added": "Προστέθηκε %1$d στην ηλικία του κόσμου",
    "world_age_query": "Η ηλικία του κόσμου είναι %d",
    "world_age_set": "Ορισμός της ηλικίας του κόσμου σε %1$d",
    "worldborder_center_success": "Ορισμός του κέντρου ορίου του κόσμου σε %1$s,%2$s",
    "worldborder_damage_amount_success": "Ορισμός της ποσότητας ζημιάς του ορίου του κόσμου σε %1$s ανά κύβο (από %2$s ανά κύβο)",
    "worldborder_damage_buffer_success": "Ορισμός της ενδιάμεσης προστασίας ζημιάς του ορίου του κόσμου σε %1$s κύβους (από %2$s κύβους)",
    "worldborder_get_success": "Το όριο κόσμου έχει τώρα πλάτος %1$s κύβων",
    "worldborder_set_success": "Ορισμός του ορίου κόσμου σε πλάτος %1$s κύβων (από %2$s κύβους)",
    "worldborder_setSlowly_grow_success": "Μεγέθυνση του ορίου κόσμου σε πλάτος %1$s κύβων (αύξηση από τους %2$s κύβους) σε χρόνο πάνω από %3$s δευτερόλεπτα",
    "worldborder_setSlowly_shrink_success": "Σμίκρυνση του ορίου κόσμου σε πλάτος %1$s (κάτω από %2$s κύβους) σε χρόνο πάνω από %3$s δευτερόλεπτα",
    "worldborder_warning_distance_success": "Ορισμός της ειδοποίησης ορίου κόσμου σε %1$s κύβους μακριά (από %2$s κύβους)",
    "worldborder_warning_time_success": "Ορισμός της ειδοποίησης ορίου κόσμου σε %1$s δευτερόλεπτα μακριά (από %2$s δευτερόλεπτα)",
    "worldbuilder_description": "Εναλλαγή κατάστασης Κατασκευαστή κόσμου του καλούντος.",
    "worldbuilder_success": "Η κατάσταση της λειτουργίας δόμησης κόσμου ενημερώθηκε σε %1$s",
    "wsserver_description": "Επιχειρεί σύνδεση με το διακομιστή websocket στη διεύθυνση URL που παρέχεται.",
    "wsserver_invalid_url": "Το URL διακομιστή που παρασχέθηκε δεν είναι έγκυρο",
    "wsserver_request_existing": "Εκτελείται αυτή τη στιγμή άλλο αίτημα σύνδεσης",
    "wsserver_request_failed": "Δεν είναι δυνατή η σύνδεση στο διακομιστή: %1$s",
    "wsserver_success": "Έγινε σύνδεση στο διακομιστή: %1$s",
    "xp_description": "Προσθέτει ή αφαιρεί εμπειρία παίκτη.",
    "xp_failure_widthdrawXp": "Δεν είναι δυνατόν να δοθούν σε έναν παίκτη αρνητικοί πόντοι εμπειρίας",
    "xp_success": "Δόθηκαν %1$d πόντοι εμπειρίας στον παίκτη %2$s",
    "xp_success_levels": "Δόθηκαν %1$d επίπεδα στον παίκτη %2$s",
    "xp_success_negative_levels": "Αφαιρέθηκαν %1$d επίπεδα από τον παίκτη %2$s"
},
item:{
    "air": [
        "Αέρας"
    ],
    "apple": [
        "Μήλο"
    ],
    "golden_apple": [
        "Χρυσό μήλο"
    ],
    "appleenchanted": [
        "Μαγεμένο μήλο"
    ],
    "armor_stand": [
        "Βάση πανοπλίας"
    ],
    "arrow": [
        "Βέλος"
    ],
    "tipped_arrow": [
        "Ενισχυμένο βέλος"
    ],
    "banner": [
        "Μαύρο λάβαρο",
        "Μαύρο λάβαρο",
        "Κόκκινο λάβαρο",
        "Πράσινο λάβαρο",
        "Καφέ λάβαρο",
        "Μπλε λάβαρο",
        "Μοβ λάβαρο",
        "Κυανό λάβαρο",
        "Ανοικτό γκρι λάβαρο",
        "Γκρι λάβαρο",
        "Ροζ λάβαρο",
        "Λαχανί λάβαρο",
        "Κίτρινο λάβαρο",
        "Γαλάζιο λάβαρο",
        "Φούξια λάβαρο",
        "Πορτοκαλί λάβαρο",
        "Λευκό λάβαρο"
    ],
    "bed": [
        "Κρεβάτι",
        "Λευκό κρεβάτι",
        "Πορτοκαλί κρεβάτι",
        "Φούξια κρεβάτι",
        "Γαλάζιο κρεβάτι",
        "Κίτρινο κρεβάτι",
        "Λαχανί κρεβάτι",
        "Ροζ κρεβάτι",
        "Γκρι κρεβάτι",
        "Ανοικτό γκρι κρεβάτι",
        "Κυανό κρεβάτι",
        "Μοβ κρεβάτι",
        "Μπλε κρεβάτι",
        "Καφέ κρεβάτι",
        "Πράσινο κρεβάτι",
        "Κόκκινο κρεβάτι",
        "Μαύρο κρεβάτι"
    ],
    "bell": [
        "Καμπάνα"
    ],
    "steak": [
        "Μπριζόλα"
    ],
    "beef": [
        "Ωμό βοδινό"
    ],
    "beetroot": [
        "Παντζάρι"
    ],
    "beetroot_soup": [
        "Παντζαρόσουπα"
    ],
    "blaze_powder": [
        "Σκόνη φλόγας"
    ],
    "blaze_rod": [
        "Ράβδος φλόγας"
    ],
    "boat": [
        "Βάρκα από βελανιδιά",
        "Βάρκα από βελανιδιά",
        "Βάρκα από έλατο",
        "Βάρκα από σημύδα",
        "Βάρκα από ξύλο ζούγκλας",
        "Βάρκα από ακακία",
        "Βάρκα από σκούρα βελανιδιά"
    ],
    "bone": [
        "Κόκαλο"
    ],
    "book": [
        "Βιβλίο"
    ],
    "chainmail_boots": [
        "Αλυσιδωτές μπότες"
    ],
    "leather_boots": [
        "Δερμάτινες μπότες"
    ],
    "diamond_boots": [
        "Διαμαντένιες μπότες"
    ],
    "golden_boots": [
        "Χρυσές μπότες"
    ],
    "iron_boots": [
        "Σιδερένιες μπότες"
    ],
    "bow": [
        "Τόξο"
    ],
    "bowl": [
        "Μπολ"
    ],
    "bread": [
        "Ψωμί"
    ],
    "brewing_stand": [
        "Πάγκος παρασκευής"
    ],
    "brick": [
        "Τούβλο"
    ],
    "bucket": [
        "Κουβάς"
    ],
    "bucketLava": [
        "Κουβάς με λάβα"
    ],
    "bucketWater": [
        "Κουβάς με νερό"
    ],
    "bucketFish": [
        "Κουβάς με μπακαλιάρο"
    ],
    "bucketSalmon": [
        "Κουβάς με σολομό"
    ],
    "bucketTropical": [
        "Κουβάς με τροπικό ψάρι"
    ],
    "bucketPuffer": [
        "Κουβάς με μπαλονόψαρο"
    ],
    "bucketCustomFish": [
        "Κουβάς με"
    ],
    "tropicalColorWhite": [
        "Λευκό"
    ],
    "tropicalColorOrange": [
        "Πορτοκαλί"
    ],
    "tropicalColorMagenta": [
        "Βαθυκόκκινο"
    ],
    "tropicalColorSky": [
        "Ανοιχτό γαλάζιο"
    ],
    "tropicalColorYellow": [
        "Κίτρινο"
    ],
    "tropicalColorLime": [
        "Πρασινοκίτρινο"
    ],
    "tropicalColorRose": [
        "Τριανταφυλλί"
    ],
    "tropicalColorGray": [
        "Γκρι"
    ],
    "tropicalColorSilver": [
        "Ασημί"
    ],
    "tropicalColorTeal": [
        "Γαλαζοπράσινο"
    ],
    "tropicalColorPlum": [
        "Δαμασκηνί"
    ],
    "tropicalColorBlue": [
        "Μπλε"
    ],
    "tropicalColorBrown": [
        "Καφέ"
    ],
    "tropicalColorGreen": [
        "Πράσινο"
    ],
    "tropicalColorRed": [
        "Κόκκινο"
    ],
    "tropicalBodyKobSingle": [
        "%1$s Κομπ"
    ],
    "tropicalBodySunstreakSingle": [
        "%1$s Ηλιαχτίδα"
    ],
    "tropicalBodySnooperSingle": [
        "%1$s Σνούπερ"
    ],
    "tropicalBodyDasherSingle": [
        "%1$s Ντάσερ"
    ],
    "tropicalBodyBrinelySingle": [
        "%1$s Μπράνλι"
    ],
    "tropicalBodySpottySingle": [
        "%1$s Βουλίτσας"
    ],
    "tropicalBodyFlopperSingle": [
        "%1$s Φλόπερ"
    ],
    "tropicalBodyStripeySingle": [
        "%1$s Λωρίδας"
    ],
    "tropicalBodyGlitterSingle": [
        "%1$s Γκλίτερ"
    ],
    "tropicalBodyBlockfishSingle": [
        "%1$s Κυβόψαρο"
    ],
    "tropicalBodyBettySingle": [
        "%1$s Μπέττυ"
    ],
    "tropicalBodyClayfishSingle": [
        "%1$s Πηλόψαρο"
    ],
    "tropicalBodyKobMulti": [
        "%1$s-%2$s Κομπ"
    ],
    "tropicalBodySunstreakMulti": [
        "%1$s-%2$s Ηλιαχτίδα"
    ],
    "tropicalBodySnooperMulti": [
        "%1$s-%2$s Σνούπερ"
    ],
    "tropicalBodyDasherMulti": [
        "%1$s-%2$s Ντάσερ"
    ],
    "tropicalBodyBrinelyMulti": [
        "%1$s-%2$s Μπράνλι"
    ],
    "tropicalBodySpottyMulti": [
        "%1$s-%2$s Βουλίτσας"
    ],
    "tropicalBodyFlopperMulti": [
        "%1$s-%2$s Φλόπερ"
    ],
    "tropicalBodyStripeyMulti": [
        "%1$s-%2$s Λωρίδας"
    ],
    "tropicalBodyGlitterMulti": [
        "%1$s-%2$s Γκλίτερ"
    ],
    "tropicalBodyBlockfishMulti": [
        "%1$s-%2$s Κυβόψαρο"
    ],
    "tropicalBodyBettyMulti": [
        "%1$s-%2$s Μπέττυ"
    ],
    "tropicalBodyClayfishMulti": [
        "%1$s-%2$s Πηλόψαρο"
    ],
    "tropicalSchoolAnemone": [
        "Ανεμώνη"
    ],
    "tropicalSchoolBlackTang": [
        "Μαύρο Τανγκ"
    ],
    "tropicalSchoolBlueDory": [
        "Μπλε Ντόρι"
    ],
    "tropicalSchoolButterflyFish": [
        "Πεταλούδα"
    ],
    "tropicalSchoolCichlid": [
        "Κιχλίδα"
    ],
    "tropicalSchoolClownfish": [
        "Ψάρι κλόουν"
    ],
    "tropicalSchoolCottonCandyBetta": [
        "Μπέτα"
    ],
    "tropicalSchoolDottyback": [
        "Dottyback"
    ],
    "tropicalSchoolEmperorRedSnapper": [
        "Λυθρίνι αυτοκράτορας"
    ],
    "tropicalSchoolGoatfish": [
        "Μουλίδα"
    ],
    "tropicalSchoolMoorishIdol": [
        "Moorish Idol"
    ],
    "tropicalSchoolOrnateButterfly": [
        "Ornate Butterfly"
    ],
    "tropicalSchoolParrotfish": [
        "Σκάρος"
    ],
    "tropicalSchoolQueenAngelFish": [
        "Βασίλισσα αγγελόψαρο"
    ],
    "tropicalSchoolRedCichlid": [
        "Κόκκινη Κιχλίδα"
    ],
    "tropicalSchoolRedLippedBlenny": [
        "Κοκκινοσαλιάρα"
    ],
    "tropicalSchoolRedSnapper": [
        "Λυθρίνι"
    ],
    "tropicalSchoolThreadfin": [
        "Νεµίπτερος"
    ],
    "tropicalSchoolTomatoClown": [
        "Tomato Clown"
    ],
    "tropicalSchoolTriggerfish": [
        "Βαλιστής"
    ],
    "tropicalSchoolYellowTang": [
        "Κίτρινο Τανγκ"
    ],
    "tropicalSchoolYellowtailParrot": [
        "Yellowtail Parrot"
    ],
    "cake": [
        "Τούρτα"
    ],
    "camera": [
        "Φωτογραφική μηχανή"
    ],
    "golden_carrot": [
        "Χρυσό καρότο"
    ],
    "carrotOnAStick": [
        "Καρότο σε ραβδί"
    ],
    "warped_fungus_on_a_stick": [
        "Στρεβλός μύκητας σε ραβδί"
    ],
    "carrot": [
        "Καρότο"
    ],
    "cauldron": [
        "Καζάνι"
    ],
    "coal": [
        "Κάρβουνο",
        null,
        "Ξυλοκάρβουνο"
    ],
    "chainmail_chestplate": [
        "Αλυσοθώρακας"
    ],
    "leather_chestplate": [
        "Δερμάτινο χιτώνιο"
    ],
    "diamond_chestplate": [
        "Διαμαντένιος θώρακας"
    ],
    "golden_chestplate": [
        "Χρυσός θώρακας"
    ],
    "iron_chestplate": [
        "Σιδερένιος θώρακας"
    ],
    "chorus_fruit": [
        "Χοροφρούτο"
    ],
    "chorus_fruit_popped": [
        "Σκασμένο χοροφρούτο"
    ],
    "cooked_beef": [
        "Μαγειρεμένο βοδινό"
    ],
    "cooked_chicken": [
        "Μαγειρεμένο κοτόπουλο"
    ],
    "cooked_porkchop": [
        "Μαγειρεμένη χοιρινή μπριζόλα"
    ],
    "chicken": [
        "Ωμό κοτόπουλο"
    ],
    "clay_ball": [
        "Πηλός"
    ],
    "clock": [
        "Ρολόι"
    ],
    "comparator": [
        "Συγκριτής Ερυθρόλιθου"
    ],
    "compass": [
        "Πυξίδα"
    ],
    "lodestonecompass": [
        "Πυξίδα μαγνητίτη"
    ],
    "cookie": [
        "Μπισκότο"
    ],
    "crossbow": [
        "Βαλλίστρα"
    ],
    "diamond": [
        "Διαμάντι"
    ],
    "repeater": [
        "Επαναλήπτης ερυθρόλιθου"
    ],
    "acacia_door": [
        "Πόρτα από ακακία"
    ],
    "birch_door": [
        "Πόρτα από σημύδα"
    ],
    "dark_oak_door": [
        "Πόρτα από σκούρα βελανιδιά"
    ],
    "iron_door": [
        "Σιδερένια πόρτα"
    ],
    "jungle_door": [
        "Πόρτα από ξύλο ζούγκλας"
    ],
    "wooden_door": [
        "Πόρτα από βελανιδιά"
    ],
    "spruce_door": [
        "Πόρτα από έλατο"
    ],
    "crimson_door": [
        "Πορφυρή πόρτα"
    ],
    "warped_door": [
        "Στρεβλή πόρτα"
    ],
    "dragon_breath": [
        "Ανάσα δράκου"
    ],
    "dye": [
        "Θύλακας μελανιού",
        "Θύλακας μελανιού",
        "Κόκκινη βαφή",
        "Πράσινη βαφή",
        "Σπόροι κακάο",
        "Λαζουρίτης",
        "Μοβ βαφή",
        "Κυανή βαφή",
        "Ανοικτή γκρι βαφή",
        "Γκρι βαφή",
        "Ροζ βαφή",
        "Λαχανί βαφή",
        "Κίτρινη βαφή",
        "Γαλάζια βαφή",
        "Φούξια βαφή",
        "Πορτοκαλί βαφή",
        "Οστεάλευρο",
        "Μαύρη βαφή",
        "Καφέ βαφή",
        "Μπλε βαφή",
        "Λευκή βαφή"
    ],
    "egg": [
        "Αυγό"
    ],
    "elytra": [
        "Έλυτρα"
    ],
    "emerald": [
        "Σμαράγδι"
    ],
    "emptyMap": [
        "Κενός Χάρτης"
    ],
    "emptyLocatorMap": [
        "Κενός χάρτης εντοπισμού"
    ],
    "emptyPotion": [
        "Μπουκάλι με νερό"
    ],
    "enchanted_book": [
        "Μαγεμένο βιβλίο"
    ],
    "end_crystal": [
        "Κρύσταλλος του Τέλους"
    ],
    "end_rod": [
        "Ράβδος του Τέλους"
    ],
    "ender_eye": [
        "Μάτι του Τελειωτή"
    ],
    "ender_pearl": [
        "Μαργαριτάρι του Τελειωτή"
    ],
    "experience_bottle": [
        "Μπουκάλι μαγέματος"
    ],
    "feather": [
        "Φτερό"
    ],
    "fermented_spider_eye": [
        "Ζυμωμένο μάτι αράχνης"
    ],
    "fireball": [
        "Γόμωση"
    ],
    "fireworks": [
        "Ρουκέτα πυροτεχνήματος"
    ],
    "fireworksCharge": [
        "Αστέρι πυροτεχνήματος"
    ],
    "clownfish": [
        "Τροπικό ψάρι"
    ],
    "cooked_fish": [
        "Μαγειρεμένος μπακαλιάρος"
    ],
    "fish": [
        "Ωμός μπακαλιάρος"
    ],
    "pufferfish": [
        "Μπαλονόψαρο"
    ],
    "cooked_salmon": [
        "Μαγειρεμένος σολομός"
    ],
    "salmon": [
        "Ωμός σολομός"
    ],
    "fishing_rod": [
        "Καλάμι ψαρέματος"
    ],
    "flint": [
        "Πυρόλιθος"
    ],
    "flint_and_steel": [
        "Πυρόλιθος και ατσάλι"
    ],
    "flower_pot": [
        "Γλάστρα"
    ],
    "frame": [
        "Πλαίσιο αντικειμένου"
    ],
    "ghast_tear": [
        "Δάκρυ Ghast"
    ],
    "glass_bottle": [
        "Γυάλινο μπουκάλι"
    ],
    "gold_nugget": [
        "Σβόλος χρυσού"
    ],
    "iron_nugget": [
        "Σβόλος σιδήρου"
    ],
    "diamond_axe": [
        "Διαμαντένιο τσεκούρι"
    ],
    "golden_axe": [
        "Χρυσό τσεκούρι"
    ],
    "iron_axe": [
        "Σιδερένιο τσεκούρι"
    ],
    "stone_axe": [
        "Πέτρινο τσεκούρι"
    ],
    "wooden_axe": [
        "Ξύλινο τσεκούρι"
    ],
    "chainmail_helmet": [
        "Αλυσιδωτό κράνος"
    ],
    "leather_helmet": [
        "Δερμάτινο καπέλο"
    ],
    "diamond_helmet": [
        "Διαμαντένιο κράνος"
    ],
    "golden_helmet": [
        "Χρυσό κράνος"
    ],
    "iron_helmet": [
        "Σιδερένιο κράνος"
    ],
    "diamond_hoe": [
        "Διαμαντένια τσάπα"
    ],
    "golden_hoe": [
        "Χρυσή τσάπα"
    ],
    "iron_hoe": [
        "Σιδερένια τσάπα"
    ],
    "stone_hoe": [
        "Πέτρινη τσάπα"
    ],
    "wooden_hoe": [
        "Ξύλινη τσάπα"
    ],
    "honey_bottle": [
        "Μπουκάλι με μέλι"
    ],
    "honeycomb": [
        "Κηρήθρα"
    ],
    "horsearmordiamond": [
        "Διαμαντένια πανοπλία αλόγου"
    ],
    "horsearmorgold": [
        "Χρυσή πανοπλία αλόγου"
    ],
    "horsearmoriron": [
        "Σιδερένια πανοπλία αλόγου"
    ],
    "horsearmorleather": [
        "Δερμάτινη πανοπλία αλόγου"
    ],
    "gold_ingot": [
        "Ράβδος χρυσού"
    ],
    "iron_ingot": [
        "Ράβδος σιδήρου"
    ],
    "netherite_ingot": [
        "Ράβδος Εγκατίτη"
    ],
    "netherite_scrap": [
        "Θραύσμα Εγκατίτη"
    ],
    "netherite_sword": [
        "Σπαθί από Εγκατίτη"
    ],
    "netherite_pickaxe": [
        "Αξίνα από Εγκατίτη"
    ],
    "netherite_axe": [
        "Τσεκούρι από Εγκατίτη"
    ],
    "netherite_shovel": [
        "Φτυάρι από Εγκατίτη"
    ],
    "netherite_hoe": [
        "Τσάπα από Εγκατίτη"
    ],
    "netherite_boots": [
        "Μπότες από Εγκατίτη"
    ],
    "netherite_leggings": [
        "Περικνημίδες από Εγκατίτη"
    ],
    "netherite_chestplate": [
        "Θώρακας από Εγκατίτη"
    ],
    "netherite_helmet": [
        "Κράνος από Εγκατίτη"
    ],
    "lead": [
        "Λουρί"
    ],
    "leather": [
        "Δέρμα"
    ],
    "leaves": [
        "Φύλλα",
        "Φύλλα βελανιδιάς",
        "Φύλλα ελάτου",
        "Φύλλα σημύδας",
        "Φύλλα ζούγκλας",
        "Φύλλα ακακίας",
        "Φύλλα σκούρας βελανιδιάς"
    ],
    "chainmail_leggings": [
        "Αλυσιδωτές περικνημίδες"
    ],
    "leather_leggings": [
        "Δερμάτινο παντελόνι"
    ],
    "diamond_leggings": [
        "Διαμαντένιες περικνημίδες"
    ],
    "golden_leggings": [
        "Χρυσές περικνημίδες"
    ],
    "iron_leggings": [
        "Σιδερένιες περικνημίδες"
    ],
    "nautilus_shell": [
        "Όστρακο ναυτίλου"
    ],
    "heart_of_the_sea": [
        "Καρδιά της θάλασσας"
    ],
    "magma_cream": [
        "Κρέμα μάγματος"
    ],
    "map": [
        "Χάρτης"
    ],
    "melon": [
        "Καρπούζι"
    ],
    "milk": [
        "Γάλα"
    ],
    "minecart": [
        "Βαγονέτο"
    ],
    "chest_minecart": [
        "Βαγονέτο με σεντούκι"
    ],
    "command_block_minecart": [
        "Βαγονέτο με κύβο εντολών"
    ],
    "minecartFurnace": [
        "Βαγονέτο με καμίνι"
    ],
    "hopper_minecart": [
        "Βαγονέτο με χωνί"
    ],
    "tnt_minecart": [
        "Βαγονέτο με δυναμίτη"
    ],
    "trident": [
        "Τρίαινα"
    ],
    "mushroom_stew": [
        "Μανιταρόσουπα"
    ],
    "muttoncooked": [
        "Μαγειρεμένο αρνί"
    ],
    "muttonraw": [
        "Ωμό αρνί"
    ],
    "name_tag": [
        "Ετικέτα ονόματος"
    ],
    "netherbrick": [
        "Τούβλο Εγκάτων"
    ],
    "quartz": [
        "Χαλαζίας Εγκάτων"
    ],
    "nether_wart": [
        "Στίγμα των εγκάτων"
    ],
    "netherStar": [
        "Αστέρι Εγκάτων"
    ],
    "painting": [
        "Πίνακας ζωγραφικής"
    ],
    "paper": [
        "Χαρτί"
    ],
    "diamond_pickaxe": [
        "Διαμαντένια αξίνα"
    ],
    "golden_pickaxe": [
        "Χρυσή αξίνα"
    ],
    "iron_pickaxe": [
        "Σιδερένια αξίνα"
    ],
    "stone_pickaxe": [
        "Πέτρινη αξίνα"
    ],
    "wooden_pickaxe": [
        "Ξύλινη αξίνα"
    ],
    "porkchop_cooked": [
        "Μαγειρεμένη χοιρινή μπριζόλα"
    ],
    "porkchop": [
        "Ωμή χοιρινή μπριζόλα"
    ],
    "portfolio": [
        "Χαρτοφυλάκιο"
    ],
    "potato": [
        "Πατάτα"
    ],
    "baked_potato": [
        "Ψητή πατάτα"
    ],
    "poisonous_potato": [
        "Δηλητηριώδης πατάτα"
    ],
    "potion": [
        "Φίλτρο"
    ],
    "prismarine_crystals": [
        "Κρύσταλλοι πρισμαρίνας"
    ],
    "prismarine_shard": [
        "Θραύσμα πρισμαρίνας"
    ],
    "pumpkin_pie": [
        "Κολοκυθόπιτα"
    ],
    "cooked_rabbit": [
        "Μαγειρεμένος λαγός"
    ],
    "rabbit_foot": [
        "Λαγοπόδαρο"
    ],
    "rabbit_hide": [
        "Λαγοτόμαρο"
    ],
    "rabbit": [
        "Ωμός λαγός"
    ],
    "rabbit_stew": [
        "Λαγός στιφάδο"
    ],
    "record": [
        "Μουσικός δίσκος"
    ],
    "redstone": [
        "Ερυθρόλιθος"
    ],
    "reeds": [
        "Ζαχαροκάλαμα"
    ],
    "kelp": [
        "Φύκι"
    ],
    "dried_kelp": [
        "Αποξηραμένο φύκι"
    ],
    "rotten_flesh": [
        "Σάπια σάρκα"
    ],
    "ruby": [
        "Ρουμπίνι"
    ],
    "saddle": [
        "Σέλα"
    ],
    "wheat_seeds": [
        "Σπόροι"
    ],
    "beetroot_seeds": [
        "Σπόροι παντζαριού"
    ],
    "melon_seeds": [
        "Σπόροι καρπουζιού"
    ],
    "pumpkin_seeds": [
        "Σπόροι κολοκύθας"
    ],
    "shears": [
        "Ψαλίδα"
    ],
    "diamond_shovel": [
        "Διαμαντένιο φτυάρι"
    ],
    "golden_shovel": [
        "Χρυσό φτυάρι"
    ],
    "iron_shovel": [
        "Σιδερένιο φτυάρι"
    ],
    "stone_shovel": [
        "Πέτρινο φτυάρι"
    ],
    "wooden_shovel": [
        "Ξύλινο φτυάρι"
    ],
    "sign": [
        "Επιγραφή από βελανιδιά"
    ],
    "spruce_sign": [
        "Επιγραφή από έλατο"
    ],
    "birch_sign": [
        "Επιγραφή από σημύδα"
    ],
    "jungle_sign": [
        "Επιγραφή από ξύλο ζούγκλας"
    ],
    "acacia_sign": [
        "Επιγραφή από ακακία"
    ],
    "darkoak_sign": [
        "Σκουρόχρωμη επιγραφή από βελανιδιά"
    ],
    "crimson_sign": [
        "Πορφυρή επιγραφή"
    ],
    "warped_sign": [
        "Στρεβλή επιγραφή"
    ],
    "skull": [
        "Κρανίο σκελετού",
        "Κρανίο σκελετού",
        "Κρανίο σκελετού Μαρασμού",
        "Κεφάλι Ζόμπι",
        "Κεφάλι",
        "Κεφάλι Creeper",
        "Κεφάλι δράκου"
    ],
    "slime_ball": [
        "Μπάλα γλίτσας"
    ],
    "snowball": [
        "Χιονόμπαλα"
    ],
    "speckled_melon": [
        "Γυαλιστερό καρπούζι"
    ],
    "spider_eye": [
        "Μάτι αράχνης"
    ],
    "stick": [
        "Ραβδί"
    ],
    "string": [
        "Νήμα"
    ],
    "sugar": [
        "Ζάχαρη"
    ],
    "gunpowder": [
        "Πυρίτιδα"
    ],
    "diamond_sword": [
        "Διαμαντένιο σπαθί"
    ],
    "golden_sword": [
        "Χρυσό σπαθί"
    ],
    "iron_sword": [
        "Σιδερένιο σπαθί"
    ],
    "stone_sword": [
        "Πέτρινο σπαθί"
    ],
    "wooden_sword": [
        "Ξύλινο σπαθί"
    ],
    "wheat": [
        "Σιτάρι"
    ],
    "writable_book": [
        "Βιβλίο και πένα"
    ],
    "written_book": [
        "Γραμμένο βιβλίο"
    ],
    "glowstone_dust": [
        "Σκόνη φεγγόλιθου"
    ],
    "shield": [
        "Ασπίδα"
    ],
    "shulker_shell": [
        "Κέλυφος Shulker"
    ],
    "totem": [
        "Τοτέμ της Αθανασίας"
    ],
    "turtle_helmet": [
        "Καβούκι χελώνας"
    ],
    "turtle_shell_piece": [
        "Φολίδα"
    ],
    "phantom_membrane": [
        "Μεμβράνη στοιχειού"
    ],
    "sweet_berries": [
        "Γλυκά βατόμουρα"
    ],
    "suspicious_stew": [
        "Ύποπτη σούπα"
    ],
    "banner_pattern": [
        "Σχέδιο λάβαρου"
    ],
    "acaciaFence": [
        "Φράκτης από ακακία"
    ],
    "acacia_fence_gate": [
        "Πύλη φράκτη από ακακία"
    ],
    "activator_rail": [
        "Ράγα-ενεργοποιητής"
    ],
    "allow": [
        "Έγκριση"
    ],
    "deny": [
        "Απαγόρευση"
    ],
    "border_block": [
        "Όριο"
    ],
    "anvil": [
        "Αμόνι",
        "Αμόνι",
        null,
        null,
        null,
        "Ελαφρώς φθαρμένο αμόνι",
        null,
        null,
        null,
        "Πολύ φθαρμένο αμόνι"
    ],
    "barrier": [
        "Εμπόδιο"
    ],
    "beacon": [
        "Φάρος"
    ],
    "beehive": [
        "Κυψέλη"
    ],
    "bee_nest": [
        "Φωλιά μελισσών"
    ],
    "target": [
        "Στόχος"
    ],
    "bedrock": [
        "Βραχώδες υπόστρωμα"
    ],
    "conduit": [
        "Αγωγός"
    ],
    "invisibleBedrock": [
        "Αόρατο βραχώδες υπόστρωμα"
    ],
    "birchFence": [
        "Φράκτης από σημύδα"
    ],
    "birch_fence_gate": [
        "Πύλη φράκτη σημύδας"
    ],
    "blast_furnace": [
        "Υψικάμινος"
    ],
    "bone_block": [
        "Κύβος από κόκαλο"
    ],
    "coal_block": [
        "Κύβος από Κάρβουνο"
    ],
    "diamond_block": [
        "Κύβος από διαμάντι"
    ],
    "emerald_block": [
        "Κύβος Σμαραγδιού"
    ],
    "gold_block": [
        "Κύβος από Χρυσό"
    ],
    "iron_block": [
        "Κύβος από Σίδερο"
    ],
    "lapis_block": [
        "Κύβος Λαζουρίτη"
    ],
    "redstone_block": [
        "Κύβος Ερυθρόλιθου"
    ],
    "bookshelf": [
        "Ράφι βιβλιοθήκης"
    ],
    "brick_block": [
        "Κύβος από τούβλα"
    ],
    "brown_mushroom": [
        "Καφέ μανιτάρι"
    ],
    "wooden_button": [
        "Κουμπί από βελανιδιά"
    ],
    "acacia_button": [
        "Κουμπί από ακακία"
    ],
    "birch_button": [
        "Κουμπί από σημύδα"
    ],
    "dark_oak_button": [
        "Κουμπί από σκούρα βελανιδιά"
    ],
    "jungle_button": [
        "Κουμπί ζούγκλας"
    ],
    "spruce_button": [
        "Κουμπί από έλατο"
    ],
    "stone_button": [
        "Κουμπί πέτρας"
    ],
    "cactus": [
        "Κάκτος"
    ],
    "dried_kelp_block": [
        "Κύβος αποξηραμένου φυκιού"
    ],
    "carved_pumpkin": [
        "Σκαλισμένη κολοκύθα"
    ],
    "chest": [
        "Σεντούκι"
    ],
    "ender_chest": [
        "Σεντούκι του Τελειωτή"
    ],
    "jigsaw": [
        "Κύβος συναρμολόγησης"
    ],
    "honey_block": [
        "Κύβος μελιού"
    ],
    "honeycomb_block": [
        "Κύβος κηρήθρας"
    ],
    "lodestone": [
        "Μαγνητίτης"
    ],
    "nether_sprouts": [
        "Βλαστάρια Εγκάτων"
    ],
    "crimson_stem": [
        "Πορφυρός μίσχος"
    ],
    "warped_stem": [
        "Στρεβλός μίσχος"
    ],
    "stripped_crimson_stem": [
        "Αποφλοιωμένος πορφυρός μίσχος"
    ],
    "stripped_warped_stem": [
        "Αποφλοιωμένος στρεβλός μίσχος"
    ],
    "crimson_hyphae": [
        "Πορφυρή υφή"
    ],
    "warped_hyphae": [
        "Στρεβλή υφή"
    ],
    "stripped_crimson_hyphae": [
        "Αποφλοιωμένη πορφυρή υφή"
    ],
    "stripped_warped_hyphae": [
        "Αποφλοιωμένη στρεβλή υφή"
    ],
    "crimson_planks": [
        "Πορφυρές σανίδες"
    ],
    "warped_planks": [
        "Στρεβλές σανίδες"
    ],
    "crimson_trapdoor": [
        "Πορφυρή καταπακτή"
    ],
    "warped_trapdoor": [
        "Στρεβλή καταπακτή"
    ],
    "crimson_standing_sign": [
        "Πορφυρή επιγραφή"
    ],
    "warped_standing_sign": [
        "Στρεβλή επιγραφή"
    ],
    "crimson_wall_sign": [
        "Πορφυρή επιγραφή"
    ],
    "warped_wall_sign": [
        "Στρεβλή επιγραφή"
    ],
    "crimson_stairs": [
        "Πορφυρές σκάλες"
    ],
    "warped_stairs": [
        "Στρεβλές σκάλες"
    ],
    "crimson_fence": [
        "Πορφυρός φράκτης"
    ],
    "warped_fence": [
        "Στρεβλός φράκτης"
    ],
    "crimson_fence_gate": [
        "Πορφυρή πύλη φράκτη"
    ],
    "warped_fence_gate": [
        "Στρεβλή πύλη φράκτη"
    ],
    "crimson_button": [
        "Πορφυρό κουμπί"
    ],
    "warped_button": [
        "Στρεβλό κουμπί"
    ],
    "crimson_pressure_plate": [
        "Πορφυρή πλάκα πίεσης"
    ],
    "warped_pressure_plate": [
        "Στρεβλή πλάκα πίεσης"
    ],
    "crimson_slab": [
        "Πορφυρή πλάκα"
    ],
    "warped_slab": [
        "Στρεβλή πλάκα"
    ],
    "crimson_double_slab": [
        "Πορφυρή πλάκα"
    ],
    "warped_double_slab": [
        "Στρεβλή πλάκα"
    ],
    "shroomlight": [
        "Μανιταροφώς"
    ],
    "crimson_nylium": [
        "Πορφυρό Νύλιο"
    ],
    "warped_nylium": [
        "Στρεβλό Νύλιο"
    ],
    "basalt": [
        "Βασάλτης"
    ],
    "polished_basalt": [
        "Γυαλισμένος βασάλτης"
    ],
    "blackstone": [
        "Μαυρόλιθος"
    ],
    "polished_blackstone_bricks": [
        "Τούβλα από γυαλισμένο μαυρόλιθο"
    ],
    "cracked_polished_blackstone_bricks": [
        "Ραγισμένα τούβλα από γυαλισμένο μαυρόλιθο"
    ],
    "polished_blackstone_brick_stairs": [
        "Σκάλες από τούβλα από γυαλισμένο μαυρόλιθο"
    ],
    "blackstone_stairs": [
        "Σκάλες από μαυρόλιθο"
    ],
    "blackstone_wall": [
        "Τοίχος από μαυρόλιθο"
    ],
    "polished_blackstone_brick_wall": [
        "Τοίχος από τούβλα από γυαλισμένο μαυρόλιθο"
    ],
    "chiseled_polished_blackstone": [
        "Λαξευμένος γυαλισμένος μαυρόλιθος"
    ],
    "gilded_blackstone": [
        "Επιχρυσωμένος μαυρόλιθος"
    ],
    "blackstone_slab": [
        "Πλάκα από μαυρόλιθο"
    ],
    "polished_blackstone_brick_slab": [
        "Τουβλόπλακα από γυαλισμένο μαυρόλιθο"
    ],
    "chain": [
        "Αλυσίδα"
    ],
    "soul_soil": [
        "Ψυχόχωμα"
    ],
    "soul_fire": [
        "Ψυχοφωτιά"
    ],
    "polished_blackstone": [
        "Γυαλισμένος μαυρόλιθος"
    ],
    "polished_blackstone_stairs": [
        "Σκάλες από γυαλισμένο μαυρόλιθο"
    ],
    "polished_blackstone_slab": [
        "Πλάκα από γυαλισμένο μαυρόλιθο"
    ],
    "polished_blackstone_pressure_plate": [
        "Πλάκα πίεσης από γυαλισμένο μαυρόλιθο"
    ],
    "polished_blackstone_button": [
        "Κουμπί από γυαλισμένο μαυρόλιθο"
    ],
    "polished_blackstone_wall": [
        "Τοίχος από γυαλισμένο μαυρόλιθο"
    ],
    "soul_campfire": [
        "Ψυχοφωτιά κατασκήνωσης"
    ],
    "chiseled_nether_bricks": [
        "Λαξευμένα τούβλα Εγκάτων"
    ],
    "cracked_nether_bricks": [
        "Ραγισμένα τούβλα Εγκάτων"
    ],
    "quartz_bricks": [
        "Τούβλα χαλαζία"
    ],
    "trapped_chest": [
        "Παγιδευμένο σεντούκι"
    ],
    "shulkerBoxWhite": [
        "Λευκό κιβώτιο Shulker"
    ],
    "shulkerBoxOrange": [
        "Πορτοκαλί κιβώτιο Shulker"
    ],
    "shulkerBoxMagenta": [
        "Φούξια κιβώτιο Shulker"
    ],
    "shulkerBoxLightBlue": [
        "Γαλάζιο κιβώτιο Shulker"
    ],
    "shulkerBoxYellow": [
        "Κίτρινο κιβώτιο Shulker"
    ],
    "shulkerBoxLime": [
        "Λαχανί κιβώτιο Shulker"
    ],
    "shulkerBoxPink": [
        "Ροζ κιβώτιο Shulker"
    ],
    "shulkerBoxGray": [
        "Γκρι κιβώτιο Shulker"
    ],
    "shulkerBoxSilver": [
        "Ανοικτό γκρι κιβώτιο Shulker"
    ],
    "shulkerBoxCyan": [
        "Κυανό κιβώτιο Shulker"
    ],
    "shulkerBoxPurple": [
        "Μοβ κιβώτιο Shulker"
    ],
    "shulkerBoxBlue": [
        "Μπλε κιβώτιο Shulker"
    ],
    "shulkerBoxBrown": [
        "Καφέ κιβώτιο Shulker"
    ],
    "shulkerBoxGreen": [
        "Πράσινο κιβώτιο Shulker"
    ],
    "shulkerBoxRed": [
        "Κόκκινο κιβώτιο Shulker"
    ],
    "shulkerBoxBlack": [
        "Μαύρο κιβώτιο Shulker"
    ],
    "shulkerBox": [
        "Κιβώτιο Shulker"
    ],
    "chorus_flower": [
        "Χορολουλούδια"
    ],
    "chorus_plant": [
        "Χοροφυτό"
    ],
    "stained_glass": [
        "Λευκό χρωματισμένο γυαλί",
        "Λευκό χρωματισμένο γυαλί",
        "Πορτοκαλί χρωματισμένο γυαλί",
        "Φούξια χρωματισμένο γυαλί",
        "Γαλάζιο χρωματισμένο γυαλί",
        "Κίτρινο χρωματισμένο γυαλί",
        "Λαχανί χρωματισμένο γυαλί",
        "Ροζ χρωματισμένο γυαλί",
        "Γκρι χρωματισμένο γυαλί",
        "Ανοικτό γκρι χρωματισμένο γυαλί",
        "Κυανό χρωματισμένο γυαλί",
        "Μοβ χρωματισμένο γυαλί",
        "Μπλε χρωματισμένο γυαλί",
        "Καφέ χρωματισμένο γυαλί",
        "Πράσινο χρωματισμένο γυαλί",
        "Κόκκινο χρωματισμένο γυαλί",
        "Μαύρο χρωματισμένο γυαλί"
    ],
    "stained_glass_pane": [
        "Λευκός χρωματισμένος υαλοπίνακας",
        "Λευκός χρωματισμένος υαλοπίνακας",
        "Πορτοκαλί χρωματισμένος υαλοπίνακας",
        "Φούξια χρωματισμένος υαλοπίνακας",
        "Γαλάζιος χρωματισμένος υαλοπίνακας",
        "Κίτρινος χρωματισμένος υαλοπίνακας",
        "Λαχανί χρωματισμένος υαλοπίνακας",
        "Ροζ χρωματισμένος υαλοπίνακας",
        "Γκρι χρωματισμένος υαλοπίνακας",
        "Ανοικτός γκρι χρωματισμένος υαλοπίνακας",
        "Κυανός χρωματισμένος υαλοπίνακας",
        "Μοβ χρωματισμένος υαλοπίνακας",
        "Μπλε χρωματισμένος υαλοπίνακας",
        "Καφέ χρωματισμένος υαλοπίνακας",
        "Πράσινος χρωματισμένος υαλοπίνακας",
        "Κόκκινος χρωματισμένος υαλοπίνακας",
        "Μαύρος χρωματισμένος υαλοπίνακας"
    ],
    "clay": [
        "Κύβος από πηλό"
    ],
    "hardened_clay": [
        "Τερακότα"
    ],
    "stained_hardened_clay": [
        "Τερακότα",
        "Λευκή τερακότα",
        "Πορτοκαλί τερακότα",
        "Φούξια τερακότα",
        "Γαλάζια τερακότα",
        "Κίτρινη τερακότα",
        "Λαχανί τερακότα",
        "Ροζ τερακότα",
        "Γκρι τερακότα",
        "Ανοικτό γκρι τερακότα",
        "Κυανή τερακότα",
        "Μοβ τερακότα",
        "Μπλε τερακότα",
        "Καφέ τερακότα",
        "Πράσινη τερακότα",
        "Κόκκινη τερακότα",
        "Μαύρη τερακότα"
    ],
    "structure_block": [
        "Κύβος οικοδομήματος"
    ],
    "structure_void": [
        "Κενό οικοδομήματος"
    ],
    "wool": [
        "Μαλλί",
        "Λευκό μαλλί",
        "Πορτοκαλί μαλλί",
        "Φούξια μαλλί",
        "Γαλάζιο μαλλί",
        "Κίτρινο μαλλί",
        "Λαχανί μαλλί",
        "Ροζ μαλλί",
        "Γκρι μαλλί",
        "Ανοικτό γκρι μαλλί",
        "Κυανό μαλλί",
        "Μοβ μαλλί",
        "Μπλε μαλλί",
        "Καφέ μαλλί",
        "Πράσινο μαλλί",
        "Κόκκινο μαλλί",
        "Μαύρο μαλλί"
    ],
    "cobblestone_wall": [
        "Τοίχος από σκύρο",
        "Τοίχος από σκύρο",
        "Χορταριασμένος τοίχος από σκύρο",
        "Τοίχος από γρανίτη",
        "Τοίχος από διορίτη",
        "Τοίχος από ανδεσίτη",
        "Τοίχος από αμμόλιθο",
        "Τοίχος από τούβλα",
        "Τοίχος από πετρότουβλα",
        "Τοίχος από χορταριασμένα πετρότουβλα",
        "Τοίχος από πετρότουβλα του Τέλους",
        "Τοίχος από τούβλα Εγκάτων",
        "Τοίχος από πρισμαρίνα",
        "Τοίχος από κόκκινο ψαμμίτη",
        "Τοίχος από κόκκινα τούβλα των Εγκάτων"
    ],
    "cocoa": [
        "Κακάο"
    ],
    "command_block": [
        "Κύβος εντολών"
    ],
    "composter": [
        "Κομποστοποιητής"
    ],
    "light_block": [
        "Κύβος φωτός"
    ],
    "repeating_command_block": [
        "Επαναλαμβανόμενος κύβος εντολών"
    ],
    "chain_command_block": [
        "Αλυσίδα κύβου εντολών"
    ],
    "darkOakFence": [
        "Φράκτης από σκούρα βελανιδιά"
    ],
    "dark_oak_fence_gate": [
        "Πύλη φράκτη από σκούρα βελανιδιά"
    ],
    "daylight_detector": [
        "Αισθητήρας φωτός ημέρας"
    ],
    "deadbush": [
        "Ξερός θάμνος"
    ],
    "detector_rail": [
        "Ράγα ανιχνευτή"
    ],
    "dirt": [
        "Χώμα",
        "Χώμα",
        "Τραχύ χώμα"
    ],
    "podzol": [
        "Ποντσόλ"
    ],
    "purpur_block": [
        "Μοβ κύβος",
        "Μοβ κύβος",
        "Λαξευμένος μοβ κύβος",
        "Μοβ στήλη"
    ],
    "dispenser": [
        "Διανομέας"
    ],
    "doorWood": [
        "Ξύλινη πόρτα"
    ],
    "double_plant": [
        "Φυτό",
        "Ηλίανθος",
        "Μενεξές",
        "Διπλό ψηλό γρασίδι",
        "Μεγάλη φτέρη",
        "Θάμνος τριαντάφυλλων",
        "Παιώνια"
    ],
    "dragon_egg": [
        "Αυγό Δράκου"
    ],
    "dropper": [
        "Ρίχτης"
    ],
    "enchanting_table": [
        "Τραπέζι μαγείας"
    ],
    "enderChest": [
        "Σεντούκι του Τελειωτή"
    ],
    "end_portal_frame": [
        "Πύλη του Τέλους"
    ],
    "farmland": [
        "Καλλιεργήσιμη γη"
    ],
    "fletching_table": [
        "Τραπέζι τοξοβολίας"
    ],
    "fence": [
        "Φράκτης από βελανιδιά"
    ],
    "fence_gate": [
        "Πύλη φράκτη από βελανιδιά"
    ],
    "iron_bars": [
        "Σιδερένια κάγκελα"
    ],
    "fire": [
        "Φωτιά"
    ],
    "yellow_flower": [
        "Λουλούδι",
        "Κίτρινο της πικραλίδας"
    ],
    "red_flower": [
        "Λουλούδι",
        "Παπαρούνα",
        "Μπλε ορχιδέα",
        "Άλλιο",
        "Αζουριά",
        "Κόκκινη τουλίπα",
        "Πορτοκαλί τουλίπα",
        "Λευκή τουλίπα",
        "Ροζ τουλίπα",
        "Μαργαρίτα",
        "Κενταύρια",
        "Κρίνος της κοιλάδας"
    ],
    "wither_rose": [
        "Τριαντάφυλλο Μαρασμού"
    ],
    "furnace": [
        "Καμίνι"
    ],
    "glass": [
        "Γυαλί"
    ],
    "golden_rail": [
        "Ενεργειακά τροφοδοτούμενη ράγα"
    ],
    "grass": [
        "Κύβος γρασιδιού"
    ],
    "grass_path": [
        "Χορταριασμένο μονοπάτι"
    ],
    "gravel": [
        "Χαλίκι"
    ],
    "hay_block": [
        "Δέμα σανού"
    ],
    "netherrack": [
        "Λίθος Εγκάτων"
    ],
    "soul_sand": [
        "Άμμος των ψυχών"
    ],
    "hopper": [
        "Χωνί"
    ],
    "ice": [
        "Πάγος"
    ],
    "packed_ice": [
        "Συμπιεσμένος πάγος"
    ],
    "blue_ice": [
        "Μπλε πάγος"
    ],
    "iron_trapdoor": [
        "Σιδερένια καταπακτή"
    ],
    "jukebox": [
        "Τζουκ μποξ"
    ],
    "jungleFence": [
        "Φράκτης από ξύλο ζούγκλας"
    ],
    "jungle_fence_gate": [
        "Πύλη φράκτη ξύλου ζούγκλας"
    ],
    "ladder": [
        "Φορητή σκάλα"
    ],
    "flowing_lava": [
        "Λάβα"
    ],
    "leaves2": [
        "Φύλλα ακακίας",
        "Φύλλα ακακίας",
        "Φύλλα σκούρας βελανιδιάς"
    ],
    "lever": [
        "Μοχλός"
    ],
    "glowstone": [
        "Φεγγόλιθος"
    ],
    "lit_pumpkin": [
        "Κολοκυθοφάναρο"
    ],
    "lockedchest": [
        "Κλειδωμένο σεντούκι"
    ],
    "log2": [
        "Κούτσουρο ακακίας",
        "Κούτσουρο ακακίας",
        "Κούτσουρο σκούρας βελανιδιάς"
    ],
    "log": [
        "Κούτσουρο",
        "Κούτσουρο βελανιδιάς",
        "Κούτσουρο ελάτου",
        "Κούτσουρο σημύδας",
        "Κούτσουρο ξύλου ζούγκλας"
    ],
    "magma": [
        "Κύβος μάγματος"
    ],
    "melon_block": [
        "Καρπούζι"
    ],
    "mob_spawner": [
        "Κύβος δημιουργίας τεράτων"
    ],
    "monster_egg": [
        "Πέτρα με έντομο \"ψαράκι\"",
        "Πέτρα με έντομο \"ψαράκι\"",
        "Σκύρο με έντομο \"ψαράκι\"",
        "Πετρότουβλο με έντομο \"ψαράκι\"",
        "Χορταριασμένο πετρότουβλο με έντομο \"ψαράκι\"",
        "Ραγισμένο πετρότουβλο με έντομο \"ψαράκι\"",
        "Λαξευμένο πετρότουβλο με έντομο \"ψαράκι\""
    ],
    "mushroom": [
        "Μανιτάρι"
    ],
    "noteblock": [
        "Κύβος νότας"
    ],
    "mycelium": [
        "Μυκήλιο"
    ],
    "nether_brick": [
        "Κύβος από τούβλα Εγκάτων"
    ],
    "red_nether_brick": [
        "Κόκκινο τούβλο των Εγκάτων"
    ],
    "nether_brick_fence": [
        "Φράκτης από τούβλα Εγκάτων"
    ],
    "quartz_ore": [
        "Ορυκτός χαλαζίας Εγκάτων"
    ],
    "netherreactor": [
        "Πυρήνας αντιδραστήρα Nether"
    ],
    "nether_wart_block": [
        "Κύβος στίγματος των Εγκάτων"
    ],
    "warped_wart_block": [
        "Κύβος στρεβλού χορτόροζου"
    ],
    "unlit_redstone_torch": [
        "Πυρσός ερυθρόλιθου"
    ],
    "redstone_torch": [
        "Πυρσός ερυθρόλιθου"
    ],
    "soul_torch": [
        "Πυρσός ψυχών"
    ],
    "obsidian": [
        "Οψιδιανός"
    ],
    "coal_ore": [
        "Γαιάνθρακας"
    ],
    "diamond_ore": [
        "Ορυκτό διαμάντι"
    ],
    "emerald_ore": [
        "Ορυκτό σμαράγδι"
    ],
    "gold_ore": [
        "Ορυκτός χρυσός"
    ],
    "iron_ore": [
        "Ορυκτός σίδηρος"
    ],
    "lapis_ore": [
        "Ορυκτός Λαζουρίτης"
    ],
    "redstone_ore": [
        "Ορυκτός ερυθρόλιθος"
    ],
    "oreRuby": [
        "Ορυκτό ρουμπίνι"
    ],
    "observer": [
        "Παρατηρητής"
    ],
    "piston": [
        "Έμβολο"
    ],
    "sticky_piston": [
        "Κολλώδες έμβολο"
    ],
    "portal": [
        "Πύλη"
    ],
    "potatoes": [
        "Πατάτες"
    ],
    "stone_pressure_plate": [
        "Πέτρινη πλάκα πίεσης"
    ],
    "wooden_pressure_plate": [
        "Πλάκα πίεσης από βελανιδιά"
    ],
    "acacia_pressure_plate": [
        "Πλάκα πίεσης από ακακία"
    ],
    "birch_pressure_plate": [
        "Πλάκα πίεσης από σημύδα"
    ],
    "dark_oak_pressure_plate": [
        "Πλάκα πίεσης από σκούρα βελανιδιά"
    ],
    "jungle_pressure_plate": [
        "Πλάκα πίεσης ζούγκλας"
    ],
    "spruce_pressure_plate": [
        "Πλάκα πίεσης από έλατο"
    ],
    "prismarine": [
        "Πρισμαρίνα",
        "Πρισμαρίνα",
        "Τούβλα πρισμαρίνας",
        "Σκούρη πρισμαρίνα"
    ],
    "pumpkin": [
        "Κολοκύθα"
    ],
    "pumpkin_stem": [
        "Μίσχος κολοκύθας"
    ],
    "quartz_block": [
        "Κύβος χαλαζία",
        "Κύβος χαλαζία",
        "Λαξεμένος Χαλαζίας",
        "Στήλη κύβων χαλαζία",
        "Λείος χαλαζίας"
    ],
    "rail": [
        "Ράγα"
    ],
    "red_mushroom": [
        "Κόκκινο μανιτάρι"
    ],
    "crimson_fungus": [
        "Πορφυρός μύκητας"
    ],
    "warped_fungus": [
        "Στρεβλός μύκητας"
    ],
    "red_mushroom_block": [
        "Κύβος κόκκινου μανιταριού"
    ],
    "red_sandstone": [
        "Κόκκινος ψαμμίτης",
        "Κόκκινος ψαμμίτης",
        "Λαξευμένος κόκκινος ψαμμίτης",
        "Κομμένος κόκκινος ψαμμίτης",
        "Λείος κόκκινος ψαμμίτης"
    ],
    "redstone_wire": [
        "Σκόνη ερυθρόλιθου"
    ],
    "redstone_lamp": [
        "Λάμπα ερυθρόλιθου"
    ],
    "sand": [
        "Άμμος",
        "Άμμος",
        "Κόκκινη άμμος"
    ],
    "sandstone": [
        "Αμμόλιθος",
        "Αμμόλιθος",
        "Λαξευμένος αμμόλιθος",
        "Κομμένος αμμόλιθος",
        "Λείος αμμόλιθος"
    ],
    "sapling": [
        "Δενδρύλλιο βελανιδιάς",
        "Δενδρύλλιο βελανιδιάς",
        "Δενδρύλλιο ελάτου",
        "Δενδρύλλιο σημύδας",
        "Δενδρύλλιο δέντρου ζούγκλας",
        "Δενδρύλλιο ακακίας",
        "Δενδρύλλιο σκούρας βελανιδιάς"
    ],
    "seaLantern": [
        "Θαλάσσιο φανάρι"
    ],
    "standing_sign": [
        "Επιγραφή"
    ],
    "spruce_standing_sign": [
        "Επιγραφή από έλατο"
    ],
    "birch_standing_sign": [
        "Επιγραφή από σημύδα"
    ],
    "jungle_standing_sign": [
        "Επιγραφή από ξύλο ζούγκλας"
    ],
    "acacia_standing_sign": [
        "Επιγραφή από ακακία"
    ],
    "darkoak_standing_sign": [
        "Σκουρόχρωμη επιγραφή από βελανιδιά"
    ],
    "slime": [
        "Κύβος γλίτσας"
    ],
    "snow": [
        "Χιόνι"
    ],
    "sponge": [
        "Σφουγγάρι",
        "Σφουγγάρι",
        "Βρεγμένο σφουγγάρι"
    ],
    "spruceFence": [
        "Φράκτης από έλατο"
    ],
    "spruce_fence_gate": [
        "Πύλη φράκτη ελάτου"
    ],
    "brick_stairs": [
        "Σκάλες από τούβλα"
    ],
    "nether_brick_stairs": [
        "Σκάλες από τούβλα Εγκάτων"
    ],
    "quartz_stairs": [
        "Σκάλες χαλαζία"
    ],
    "smooth_quartz_stairs": [
        "Σκάλες από λείο χαλαζία"
    ],
    "red_sandstone_stairs": [
        "Σκάλες από κόκκινο ψαμμίτη"
    ],
    "sandstone_stairs": [
        "Σκάλες από Αμμόλιθο"
    ],
    "stone_stairs": [
        "Σκάλες από σκύρο"
    ],
    "normal_stone_stairs": [
        "Πέτρινες σκάλες"
    ],
    "stone_brick_stairs": [
        "Σκάλες από πετρότουβλα"
    ],
    "oak_stairs": [
        "Σκάλες από ξύλο βελανιδιάς"
    ],
    "acacia_stairs": [
        "Σκάλες από ξύλο ακακίας"
    ],
    "birch_stairs": [
        "Σκάλες από ξύλο σημύδας"
    ],
    "dark_oak_stairs": [
        "Σκάλες από ξύλο σκούρας βελανιδιάς"
    ],
    "jungle_stairs": [
        "Σκάλες από ξύλο ζούγκλας"
    ],
    "spruce_stairs": [
        "Σκάλες από ξύλο ελάτου"
    ],
    "purpur_stairs": [
        "Μοβ σκάλες"
    ],
    "prismarine_stairs": [
        "Σκάλες από πρισμαρίνα"
    ],
    "dark_prismarine_stairs": [
        "Σκάλες από σκούρα πρισμαρίνα"
    ],
    "prismarine_bricks_stairs": [
        "Σκάλες από τούβλα πρισμαρίνας"
    ],
    "granite_stairs": [
        "Σκάλες από γρανίτη"
    ],
    "diorite_stairs": [
        "Σκάλες από διορίτη"
    ],
    "andesite_stairs": [
        "Σκάλες από ανδεσίτη"
    ],
    "polished_granite_stairs": [
        "Σκάλες από γυαλισμένο γρανίτη"
    ],
    "polished_diorite_stairs": [
        "Σκάλες από γυαλισμένο διορίτη"
    ],
    "polished_andesite_stairs": [
        "Σκάλες από γυαλισμένο ανδεσίτη"
    ],
    "mossy_stone_brick_stairs": [
        "Σκάλες από χορταριασμένα πετρότουβλα"
    ],
    "smooth_red_sandstone_stairs": [
        "Σκάλες από λείο κόκκινο ψαμμίτη"
    ],
    "smooth_sandstone_stairs": [
        "Σκάλες από λείο αμμόλιθο"
    ],
    "end_brick_stairs": [
        "Σκάλες από πετρότουβλα του Τέλους"
    ],
    "mossy_cobblestone_stairs": [
        "Σκάλες από χορταριασμένο σκύρο"
    ],
    "red_nether_brick_stairs": [
        "Σκάλες από κόκκινα τούβλα των Εγκάτων"
    ],
    "smooth_stone": [
        "Λεία πέτρα"
    ],
    "standing_banner": [
        "Λάβαρο",
        "Μαύρο λάβαρο",
        "Κόκκινο λάβαρο",
        "Πράσινο λάβαρο",
        "Καφέ λάβαρο",
        "Μπλε λάβαρο",
        "Μοβ λάβαρο",
        "Κυανό λάβαρο",
        "Ανοικτό γκρι λάβαρο",
        "Γκρι λάβαρο",
        "Ροζ λάβαρο",
        "Λαχανί λάβαρο",
        "Κίτρινο λάβαρο",
        "Γαλάζιο λάβαρο",
        "Φούξια λάβαρο",
        "Πορτοκαλί λάβαρο",
        "Λάβαρο"
    ],
    "stone": [
        "Πέτρα",
        "Πέτρα",
        "Γρανίτης",
        "Γυαλισμένος γρανίτης",
        "Διορίτης",
        "Γυαλισμένος διορίτης",
        "Ανδεσίτης",
        "Γυαλισμένος ανδεσίτης"
    ],
    "cobblestone": [
        "Σκύρο"
    ],
    "stonebrick": [
        "Πετρότουβλα",
        "Πετρότουβλα",
        "Χορταριασμένα πετρότουβλα",
        "Λαξευμένα πετρότουβλα"
    ],
    "stonecutter": [
        "Εργαλείο κοπής πέτρας"
    ],
    "stonecutter_block": [
        "Κόφτης πέτρας"
    ],
    "mossy_cobblestone": [
        "Χορταριασμένο σκύρο"
    ],
    "double_stone_slab": [
        "Πέτρινη πλάκα",
        "Πέτρινη πλάκα",
        "Πλάκα από αμμόλιθο",
        "Ξύλινη πλάκα",
        "Πλάκα από σκύρο",
        "Τουβλόπλακα",
        "Πέτρινη τουβλόπλακα",
        "Πλάκα χαλαζία",
        "Τουβλόπλακα Εγκάτων"
    ],
    "stone_slab": [
        "Πέτρινη πλάκα",
        "Λεία πέτρινη πλάκα",
        "Πλάκα από Αμμόλιθο",
        "Ξύλινη πλάκα",
        "Πλάκα από σκύρο",
        "Τουβλόπλακα",
        "Πέτρινη τουβλόπλακα",
        "Πλάκα χαλαζία",
        "Τουβλόπλακα Εγκάτων"
    ],
    "double_stone_slab2": [
        "Πλάκα από κόκκινο ψαμμίτη",
        "Πλάκα από κόκκινο ψαμμίτη"
    ],
    "stone_slab2": [
        "Πλάκα από κόκκινο ψαμμίτη",
        "Πλάκα από κόκκινο ψαμμίτη",
        "Μοβ πλάκα",
        "Πλάκα από πρισμαρίνα",
        "Τουβλόπλακα από πρισμαρίνα",
        "Πλάκα από σκούρα πρισμαρίνα",
        "Πλάκα από χορταριασμένο σκύρο",
        "Πλάκα από λείο αμμόλιθο",
        "Πλάκα από κόκκινα τούβλα των Εγκάτων"
    ],
    "stone_slab3": [
        "Πλάκα από πετρότουβλα του Τέλους",
        "Πλάκα από πετρότουβλα του Τέλους",
        "Πλάκα από λείο κόκκινο ψαμμίτη",
        "Πλάκα από γυαλισμένο ανδεσίτη",
        "Πλάκα από ανδεσίτη",
        "Πλάκα από διορίτη",
        "Πλάκα από γυαλισμένο διορίτη",
        "Πλάκα από γρανίτη",
        "Πλάκα από γυαλισμένο γρανίτη"
    ],
    "stone_slab4": [
        "Πλάκα από χορταριασμένα πετρότουβλα",
        "Πλάκα από χορταριασμένα πετρότουβλα",
        "Πλάκα από λείο χαλαζία",
        "Πέτρινη πλάκα",
        "Πλάκα από κομμένο αμμόλιθο",
        "Πλάκα από κομμένο κόκκινο ψαμμίτη"
    ],
    "coral_block": [
        "Κοράλλινος κύβος-σωλήνας",
        "Κοράλλινος κύβος-σωλήνας",
        "Κοράλλινος κύβος-εγκέφαλος",
        "Κοράλλινος κύβος-φούσκα",
        "Κοράλλινος κύβος-φωτιά",
        "Κοράλλινος κύβος-κέρας",
        "Νεκρός κοράλλινος κύβος-σωλήνας",
        "Νεκρός κοράλλινος κύβος-εγκέφαλος",
        "Νεκρός κοράλλινος κύβος-φούσκα",
        "Νεκρός κοράλλινος κύβος-φωτιά",
        "Νεκρός κοράλλινος κύβος-κέρας"
    ],
    "tallgrass": [
        "Γρασίδι",
        "Γρασίδι",
        "Φτέρη"
    ],
    "seagrass": [
        "Θαλάσσια βλάστηση",
        "Θαλάσσια βλάστηση"
    ],
    "sea_pickle": [
        "Θαλάσσια πίκλα"
    ],
    "turtle_egg": [
        "Αυγό θαλάσσιας χελώνας"
    ],
    "coral": [
        "Κοράλλι-σωλήνας",
        "Κοράλλι-σωλήνας",
        "Κοράλλι-εγκέφαλος",
        "Κοράλλι-φούσκα",
        "Κοράλλι-φωτιά",
        "Κοράλλι-κέρας",
        "Νεκρό κοράλλι-σωλήνας",
        "Νεκρό κοράλλι-εγκέφαλος",
        "Νεκρό κοράλλι-φούσκα",
        "Νεκρό κοράλλι-φωτιά",
        "Νεκρό κοράλλι-κέρας"
    ],
    "coral_fan": [
        "Μαλακό κοράλλι-σωλήνας",
        "Μαλακό κοράλλι-σωλήνας",
        "Μαλακό κοράλλι-εγκέφαλος",
        "Μαλακό κοράλλι-φούσκα",
        "Μαλακό κοράλλι-φωτιά",
        "Μαλακό κοράλλι-κέρας"
    ],
    "coral_fan_dead": [
        "Νεκρό μαλακό κοράλλι-σωλήνας",
        "Νεκρό μαλακό κοράλλι-σωλήνας",
        "Νεκρό μαλακό κοράλλι-εγκέφαλος",
        "Νεκρό μαλακό κοράλλι-φούσκα",
        "Νεκρό μαλακό κοράλλι-φωτιά",
        "Νεκρό μαλακό κοράλλι-κέρας"
    ],
    "glass_pane": [
        "Υαλοπίνακας"
    ],
    "tnt": [
        "Δυναμίτης"
    ],
    "snow_layer": [
        "Επάνω χιόνι"
    ],
    "torch": [
        "Πυρσός"
    ],
    "trapdoor": [
        "Καταπακτή από βελανιδιά"
    ],
    "acacia_trapdoor": [
        "Καταπακτή από ακακία"
    ],
    "birch_trapdoor": [
        "Καταπακτή από σημύδα"
    ],
    "dark_oak_trapdoor": [
        "Καταπακτή από σκούρα βελανιδιά"
    ],
    "jungle_trapdoor": [
        "Καταπακτή ζούγκλας"
    ],
    "spruce_trapdoor": [
        "Καταπακτή από έλατο"
    ],
    "tripWire": [
        "Σύρμα παγίδευσης"
    ],
    "tripwire_hook": [
        "Γάντζος σύρματος παγίδευσης"
    ],
    "vine": [
        "Κληματσίδες"
    ],
    "weeping_vines": [
        "Κλαίουσες κληματσίδες"
    ],
    "twisting_vines": [
        "Στριφογυριστές κληματσίδες"
    ],
    "flowing_water": [
        "Νερό"
    ],
    "water": [
        "Νερό"
    ],
    "waterlily": [
        "Νούφαρο"
    ],
    "web": [
        "Ιστός αράχνης"
    ],
    "heavy_weighted_pressure_plate": [
        "Βαριά Πλάκα πίεσης"
    ],
    "light_weighted_pressure_plate": [
        "Ελαφριά Πλάκα πίεσης"
    ],
    "end_stone": [
        "Πέτρα του Τέλους"
    ],
    "end_bricks": [
        "Πετρότουβλα του Τέλους"
    ],
    "planks": [
        "Ξύλινες σανίδες",
        "Σανίδες βελανιδιάς",
        "Σανίδες ξύλου ελάτου",
        "Σανίδες από ξύλο σημύδας",
        "Σανίδες από ξύλο ζούγκλας",
        "Σανίδες από ξύλο ακακίας",
        "Σανίδες από ξύλο σκούρας βελανιδιάς"
    ],
    "wooden_slab": [
        "Πλάκα από ξύλο ακακίας",
        "Πλάκα από ξύλο Βελανιδιάς",
        "Πλάκα από ξύλο Ελάτου",
        "Πλάκα από ξύλο Σημύδας",
        "Πλάκα από ξύλο Ζούγκλας",
        "Πλάκα από ξύλο ακακίας",
        "Πλάκα από ξύλο σκούρας βελανιδιάς"
    ],
    "carpet": [
        "Χαλί",
        "Μαύρο χαλί",
        "Κόκκινο χαλί",
        "Πράσινο χαλί",
        "Καφέ χαλί",
        "Μπλε χαλί",
        "Μοβ χαλί",
        "Κυανό χαλί",
        "Ανοικτό γκρι χαλί",
        "Γκρι χαλί",
        "Ροζ χαλί",
        "Λαχανί χαλί",
        "Κίτρινο χαλί",
        "Γαλάζιο χαλί",
        "Φούξια χαλί",
        "Πορτοκαλί χαλί",
        "Λευκό χαλί"
    ],
    "crafting_table": [
        "Τραπέζι κατασκευών"
    ],
    "white_glazed_terracotta": [
        "Λευκή λουστραρισμένη τερακότα",
        "Λευκή λουστραρισμένη τερακότα"
    ],
    "orange_glazed_terracotta": [
        "Πορτοκαλί λουστραρισμένη τερακότα",
        "Πορτοκαλί λουστραρισμένη τερακότα"
    ],
    "magenta_glazed_terracotta": [
        "Φούξια λουστραρισμένη τερακότα",
        "Φούξια λουστραρισμένη τερακότα"
    ],
    "light_blue_glazed_terracotta": [
        "Γαλάζια λουστραρισμένη τερακότα",
        "Γαλάζια λουστραρισμένη τερακότα"
    ],
    "yellow_glazed_terracotta": [
        "Κίτρινη λουστραρισμένη τερακότα",
        "Κίτρινη λουστραρισμένη τερακότα"
    ],
    "lime_glazed_terracotta": [
        "Λαχανί λουστραρισμένη τερακότα",
        "Λαχανί λουστραρισμένη τερακότα"
    ],
    "pink_glazed_terracotta": [
        "Ροζ λουστραρισμένη τερακότα",
        "Ροζ λουστραρισμένη τερακότα"
    ],
    "gray_glazed_terracotta": [
        "Γκρι λουστραρισμένη τερακότα",
        "Γκρι λουστραρισμένη τερακότα"
    ],
    "silver_glazed_terracotta": [
        "Ανοικτό γκρι λουστραρισμένη τερακότα",
        "Ανοικτό γκρι λουστραρισμένη τερακότα"
    ],
    "cyan_glazed_terracotta": [
        "Κυανή λουστραρισμένη τερακότα",
        "Κυανή λουστραρισμένη τερακότα"
    ],
    "purple_glazed_terracotta": [
        "Μοβ λουστραρισμένη τερακότα",
        "Μοβ λουστραρισμένη τερακότα"
    ],
    "blue_glazed_terracotta": [
        "Μπλε λουστραρισμένη τερακότα",
        "Μπλε λουστραρισμένη τερακότα"
    ],
    "brown_glazed_terracotta": [
        "Καφέ λουστραρισμένη τερακότα",
        "Καφέ λουστραρισμένη τερακότα"
    ],
    "green_glazed_terracotta": [
        "Πράσινη λουστραρισμένη τερακότα",
        "Πράσινη λουστραρισμένη τερακότα"
    ],
    "red_glazed_terracotta": [
        "Κόκκινη λουστραρισμένη τερακότα",
        "Κόκκινη λουστραρισμένη τερακότα"
    ],
    "black_glazed_terracotta": [
        "Μαύρη λουστραρισμένη τερακότα",
        "Μαύρη λουστραρισμένη τερακότα"
    ],
    "concrete": [
        "Λευκό σκυρόδεμα",
        "Λευκό σκυρόδεμα",
        "Πορτοκαλί σκυρόδεμα",
        "Φούξια σκυρόδεμα",
        "Γαλάζιο σκυρόδεμα",
        "Κίτρινο σκυρόδεμα",
        "Λαχανί σκυρόδεμα",
        "Ροζ σκυρόδεμα",
        "Γκρι σκυρόδεμα",
        "Ανοικτό γκρι σκυρόδεμα",
        "Κυανό σκυρόδεμα",
        "Μοβ σκυρόδεμα",
        "Μπλε σκυρόδεμα",
        "Καφέ σκυρόδεμα",
        "Πράσινο σκυρόδεμα",
        "Κόκκινο σκυρόδεμα",
        "Μαύρο σκυρόδεμα"
    ],
    "glazedTerracottaWhite": [
        "Λευκή λουστραρισμένη τερακότα"
    ],
    "glazedTerracottaOrange": [
        "Πορτοκαλί λουστραρισμένη τερακότα"
    ],
    "glazedTerracottaMagenta": [
        "Φούξια λουστραρισμένη τερακότα"
    ],
    "glazedTerracottaLightBlue": [
        "Γαλάζια λουστραρισμένη τερακότα"
    ],
    "glazedTerracottaYellow": [
        "Κίτρινη λουστραρισμένη τερακότα"
    ],
    "glazedTerracottaLime": [
        "Λαχανί λουστραρισμένη τερακότα"
    ],
    "glazedTerracottaPink": [
        "Ροζ λουστραρισμένη τερακότα"
    ],
    "glazedTerracottaGray": [
        "Γκρι λουστραρισμένη τερακότα"
    ],
    "glazedTerracottaSilver": [
        "Ανοικτό γκρι λουστραρισμένη τερακότα"
    ],
    "glazedTerracottaCyan": [
        "Κυανή λουστραρισμένη τερακότα"
    ],
    "glazedTerracottaPurple": [
        "Μοβ λουστραρισμένη τερακότα"
    ],
    "glazedTerracottaBlue": [
        "Μπλε λουστραρισμένη τερακότα"
    ],
    "glazedTerracottaBrown": [
        "Καφέ λουστραρισμένη τερακότα"
    ],
    "glazedTerracottaGreen": [
        "Πράσινη λουστραρισμένη τερακότα"
    ],
    "glazedTerracottaRed": [
        "Κόκκινη λουστραρισμένη τερακότα"
    ],
    "glazedTerracottaBlack": [
        "Μαύρη λουστραρισμένη τερακότα"
    ],
    "concretePowder": [
        "Λευκή σκόνη σκυροδέματος",
        "Λευκή σκόνη σκυροδέματος",
        "Πορτοκαλί σκόνη σκυροδέματος",
        "Φούξια σκόνη σκυροδέματος",
        "Γαλάζια σκόνη σκυροδέματος",
        "Κίτρινη σκόνη σκυροδέματος",
        "Λαχανί σκόνη σκυροδέματος",
        "Ροζ σκόνη σκυροδέματος",
        "Γκρι σκόνη σκυροδέματος",
        "Ανοικτό γκρι σκόνη σκυροδέματος",
        "Κυανή σκόνη σκυροδέματος",
        "Μοβ σκόνη σκυροδέματος",
        "Μπλε σκόνη σκυροδέματος",
        "Καφέ σκόνη σκυροδέματος",
        "Πράσινη σκόνη σκυροδέματος",
        "Κόκκινη σκόνη σκυροδέματος",
        "Μαύρη σκόνη σκυροδέματος"
    ],
    "stripped_spruce_log": [
        "Αποφλοιωμένο κούτσουρο ελάτου"
    ],
    "stripped_dark_oak_log": [
        "Αποφλοιωμένο κούτσουρο σκούρας βελανιδιάς"
    ],
    "stripped_birch_log": [
        "Αποφλοιωμένο κούτσουρο σημύδας"
    ],
    "stripped_jungle_log": [
        "Αποφλοιωμένο κούτσουρο ξύλου ζούγκλας"
    ],
    "stripped_oak_log": [
        "Αποφλοιωμένο κούτσουρο βελανιδιάς"
    ],
    "stripped_acacia_log": [
        "Αποφλοιωμένο κούτσουρο ακακίας"
    ],
    "bamboo": [
        "Μπαμπού"
    ],
    "scaffolding": [
        "Σκαλωσιά"
    ],
    "grindstone": [
        "Τροχός ακονίσματος"
    ],
    "cartography_table": [
        "Τραπέζι χαρτογραφίας"
    ],
    "lantern": [
        "Φανάρι"
    ],
    "soul_lantern": [
        "Φανάρι ψυχών"
    ],
    "smoker": [
        "Καπνιστήρι τροφίμων"
    ],
    "smithing_table": [
        "Τραπέζι μεταλλουργίας"
    ],
    "barrel": [
        "Βαρέλι"
    ],
    "campfire": [
        "Φωτιά κατασκήνωσης"
    ],
    "loom": [
        "Αργαλειός"
    ],
    "lectern": [
        "Αναλόγιο"
    ],
    "sweet_berry_bush": [
        "Γλυκιά βατομουριά"
    ],
    "wood": [
        "Ξύλο βελανιδιάς",
        "Ξύλο βελανιδιάς",
        "Ξύλο ελάτου",
        "Ξύλο σημύδας",
        "Ξύλο ζούγκλας",
        "Ξύλο ακακίας",
        "Ξύλο σκούρας βελανιδιάς",
        null,
        null,
        "Αποφλοιωμένο ξύλο βελανιδιάς",
        "Αποφλοιωμένο ξύλο ελάτου",
        "Αποφλοιωμένο ξύλο σημύδας",
        "Αποφλοιωμένο ξύλο ζούγκλας",
        "Αποφλοιωμένο ξύλο ακακίας",
        "Αποφλοιωμένο ξύλο σκούρας βελανιδιάς"
    ],
    "netherite_block": [
        "Κύβος Εγκατίτη"
    ],
    "ancient_debris": [
        "Αρχαία ερείπια"
    ],
    "nether_gold_ore": [
        "Ορυκτός χρυσός των Εγκάτων"
    ],
    "respawn_anchor": [
        "Άγκυρα επαναγένεσης"
    ],
    "crying_obsidian": [
        "Δακρυσμένος οψιδιανός"
    ]
}
};
freeze(lang_data);
export = lang_data;

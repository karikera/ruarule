
import { freeze } from './freeze';
import { LangId } from './langid';
const lang_data = {
id: "tr_TR" as LangId,
commands:{
    "ability_description": "Oyuncu yeteneğini ayarlar.",
    "ability_noability": "'%1$s' adlı bir yetenek mevcut değil",
    "ability_granted": "Size '%1$s' yeteneği verildi",
    "ability_revoked": "'%1$s' yeteneği sizden geri alındı",
    "ability_success": "Yetenek güncellendi",
    "achievement_alreadyHave": "Oyuncu %1$s, %2$s başarısına zaten sahip",
    "achievement_description": "Bir oyuncuya başarım kazandırır veya başarımını kaldırır.",
    "achievement_dontHave": "Oyuncu %1$s, %2$s başarısına sahip değil",
    "achievement_give_success_all": "%1$s kişisine bütün başarılar başarıyla verildi",
    "achievement_give_success_one": "%1$s kişisine %2$s istatistiği başarıyla verildi",
    "achievement_statTooLow": "Oyuncu %1$s, %2$s istatistiğine sahip değil",
    "achievement_take_success_all": "%1$s kişisinden bütün başarılar başarıyla alındı",
    "achievement_take_success_one": "%2$s kişisinden %1$s istatistiği başarıyla alındı",
    "achievement_unknownAchievement": "Bilinmeyen başarı veya istatistik '%1$s'",
    "agent_attack_success": "Ajan başarıyla saldırdı",
    "agent_attack_failed": "Ajan saldırıda başarısız oldu",
    "agent_collect_success": "Ajan başarıyla topladı",
    "agent_collect_failed": "Ajan, toplamada başarısız oldu",
    "agent_createagent_success": "Ajan oluşturuldu",
    "agent_createagent_failed": "Ajan oluşturulamadı",
    "agent_destroy_success": "Ajan bir bloğu yok etti",
    "agent_destroy_failed": "Ajan, yok etmede başarısız",
    "agent_detect_success": "Ajan komutu başarılı: detect",
    "agent_detect_failed": "Ajan komutu başarısız: detect",
    "agent_detectredstone_success": "Ajan komutu başarılı: detectredstone",
    "agent_detectredstone_failed": "Ajan komutu başarısız: detectredstone",
    "agent_drop_success": "Ajan komutu başarılı: drop",
    "agent_drop_failed": "Ajan komutu başarısız: drop",
    "agent_dropall_success": "Ajan komutu başarılı: dropall",
    "agent_dropall_failed": "Ajan komutu başarısız: dropall",
    "agent_getitemcount_success": "Ajan komutu başarılı: getitemcount",
    "agent_getitemcount_failed": "Ajan komutu başarısız: getitemcount",
    "agent_getitemspace_success": "Ajan komutu başarılı: getitemspace",
    "agent_getitemspace_failed": "Ajan komutu başarısız: getitemspace",
    "agent_getitemdetail_success": "Ajan komutu başarılı: getitemdetail",
    "agent_getitemdetail_failed": "Ajan komutu başarısız: getitemdetail",
    "agent_getposition_success": "Agent konum alma başarılı",
    "agent_getposition_failed": "Agent konum alma başarısız",
    "agent_inspect_success": "Ajan komutu başarılı: inspect",
    "agent_inspect_failed": "Ajan komutu başarısız: inspect",
    "agent_inspectdata_success": "Ajan, verileri başarıyla denetledi",
    "agent_inspectdata_failed": "Ajan, verileri denetleyemedi",
    "agent_move_success": "Ajan başarıyla hareket ettirildi",
    "agent_move_failed": "Ajan hareket ettirilemedi",
    "agent_outofrange": "Komut işlenemedi, Ajan kapsam dışında",
    "agent_place_success": "Ajan komutu başarılı: place",
    "agent_place_failed": "Ajan komutu başarısız: place",
    "agent_setitem_success": "Agent eşya ayarlama başarılı",
    "agent_setitem_failed": "Agent eşyayı ayarlayamadı",
    "agent_turn_success": "Ajan döndürme başarılı",
    "agent_turn_failed": "Ajan döndürülemedi",
    "agent_till_success": "Ajan komutu başarılı: till",
    "agent_till_failed": "Ajan komutu başarısız: till",
    "agent_tpagent_description": "Ajanınızı Işınlayın.",
    "agent_tpagent_success": "Ajan ışınlandı",
    "agent_tpagent_failed": "Ajan ışınlanmayı başaramadı",
    "agent_transfer_success": "Ajan komutu başarılı: transfer",
    "agent_transfer_failed": "Ajan komutu başarısız: transfer",
    "always_day": "Gündüz-Gece döngüsü %1$s",
    "always_day_locked": "Gündü-Gece döngüsü kilitli",
    "always_day_unlocked": "Gündüz-Gece döngüsü kilitli değil",
    "ban_description": "Oyuncuyu yasaklılar listesine ekler.",
    "autocomplete_a": "tüm oyuncular",
    "autocomplete_c": "Agent'ım",
    "autocomplete_e": "tüm varlıklar",
    "autocomplete_p": "en yakın oyuncu",
    "autocomplete_r": "rastgele oyuncu",
    "autocomplete_s": "kendiniz",
    "autocomplete_v": "tüm Agent'lar",
    "ban_failed": "Oyuncu %1$s engellenemedi",
    "ban_success": "Oyuncu %1$s engellendi",
    "banip_description": "IP adresini yasaklılar listesine ekler.",
    "banip_invalid": "Geçersiz bir IP adresi veya çevrimiçi olmayan bir oyuncu girdiniz",
    "banip_success": "IP adresi %1$s engellendi",
    "banip_success_players": "%2$s kişisine ait %1$s IP adresi engellendi",
    "banlist_ips": "Engellenen toplam %1$d IP adresi var:",
    "banlist_players": "Engellenen toplam %1$d oyuncu var:",
    "blockdata_description": "Bir bloğun veri etiketini değiştirir.",
    "blockdata_placeFailed": "Buraya blokları yerleştiremezsiniz",
    "blockdata_destroyFailed": "Burayı kazamazsınız",
    "blockdata_failed": "Veri etiketi değişmedi: %1$s",
    "blockdata_notValid": "Hedef blok veri tutucu bir blok değil",
    "blockdata_outOfWorld": "Dünya dışındaki blok değiştirilemez",
    "blockdata_success": "Blok verisi güncellendi: %1$s",
    "blockdata_tagError": "Veri etiketi çözümleme başarısız: %1$s",
    "bossbar_add_success": "Özel boss çubuğu [%1$s] oluşturuldu",
    "bossbar_add_failure_invalid": "Boss çubuğu kimliği geçersiz. Kimlikler adalanı:kimlik veya kimlik (varsayılan olarak minecraft ad alanıdır) biçiminde olmalıdır.",
    "bossbar_add_failure_exists": "Kimliği '%1$s' olan bir boss çubuğu zaten var",
    "bossbar_description": "Yönetim çubukları oluşturur ve değiştirir",
    "bossbar_get_max": "Özel boss çubuğunda [%1$s] en fazla %2$d var",
    "bossbar_get_players": "Özel boss çubuğunda [%1$s] şu anda %2$s oyuncu çevrimiçi: %3$s",
    "bossbar_get_players_none": "Özel boss çubuğunda [%1$s] şu anda çevrimiçi oyuncu yok",
    "bossbar_get_players_one": "Özel boss çubuğunda [%1$s] şu anda 1 oyuncu çevrimiçi: %2$s",
    "bossbar_get_value": "Özel boss çubuğunun [%1$s] değeri %2$d",
    "bossbar_get_visible_true": "Özel boss çubuğu [%1$s] şu anda gösteriliyor",
    "bossbar_get_visible_false": "Özel boss çubuğu [%1$s] şu anda gizli",
    "bossbar_list": "Etkin olan %1$s özel boss çubuğu var: %2$s",
    "bossbar_list_none": "Etkin olan bir özel boss çubuğu yok",
    "bossbar_list_one": "Etkin olan 1 özel boss çubuğu var: %1$s",
    "bossbar_notFound": "Kimliği '%1$s' olan bir boss çubuğu yok",
    "bossbar_remove": "Özel boss çubuğu [%1$s] kaldırıldı",
    "change_setting_description": "Çalışırken ilgili sunucuda bir ayarı değiştirir.",
    "change_setting_success": "%1$s değiştirildi",
    "chunkinfo_compiled": "Chunk hazırlandı.",
    "chunkinfo_data": "İlk 64 köşe: %1$s",
    "chunkinfo_empty": "Chunk boş.",
    "chunkinfo_hasLayers": "Chunk'ta katmanlar var: %1$s",
    "chunkinfo_hasNoRenderableLayers": "Chunk'ta işlenebilecek katman yok.",
    "chunkinfo_isEmpty": "Chunk'ta boş katmanlar var: %1$s",
    "chunkinfo_location": "Chunk konumu: (%1$d, %2$d, %3$d)",
    "chunkinfo_noChunk": "%1$d, %2$d, %3$d chunk konumunda chunk bulunamadı",
    "chunkinfo_notCompiled": "Chunk hazırlanmadı.",
    "chunkinfo_notEmpty": "Chunk boş değil.",
    "chunkinfo_vertices": "%1$s katman tamponu %2$d köşe içeriyor",
    "classroommode_description": "Sınıf Modunu başlatmaya ve moda bağlanmaya çalışın.",
    "classroommode_success": "Sınıf Modunu başlatmaya çalışılıyor...",
    "clear_description": "Oyuncunun envanterindeki eşyaları siler.",
    "clear_failure": "%1$s envanteri temizlenemedi",
    "clear_failure_no_items": "%1$s envanteri temizlenemedi, kaldırılacak öge yok",
    "clear_success": "%1$s envanteri temizlendi, %2$d öge kaldırılıyor",
    "clear_tagError": "Veri etiketi çözümleme başarısız: %1$s",
    "clear_testing": "%1$s konumunda kriterlere uyan %2$d öğe mevcut",
    "clearfixedinv_description": "Tüm Sabit Envanter Yuvalarını Kaldır.",
    "clearfixedinv_success": "Sabit Envanter temizlendi",
    "clone_description": "Blokları bir bölgeden diğerine kopyalar.",
    "clone_failed": "Hiçbir blok kopyalanmadı",
    "clone_filtered_error": "Filtreli kullanım, bir filtre bloğunun belirlenmesini gerektirir",
    "clone_noOverlap": "Kaynak ve hedef aynı olamaz",
    "clone_outOfWorld": "Dünya dışındaki bloklara erişilemiyor",
    "clone_success": "%1$d blok kopyalandı",
    "clone_tooManyBlocks": "Belirtilen alanda çok fazla blok var (%1$d > %2$d)",
    "closechat_description": "Açıksa yerel oyuncunun sohbet penceresini kapatır.",
    "closechat_success": "Sohbet kapatıldı",
    "closechat_failure": "Sohbet açılmadı",
    "closewebsocket_description": "Varsa internet soketi bağlantısını kapatır.",
    "code_description": "Kod Oluşturucu'yu başlatır.",
    "code_success": "Kod Oluşturucu başlatıldı.",
    "compare_failed": "Kaynak ve hedef aynı değil",
    "compare_outOfWorld": "Dünya dışındaki bloklara erişilemiyor",
    "compare_success": "%1$d blok karşılaştırıldı",
    "compare_tooManyBlocks": "Belirtilen alanda çok fazla blok var (%1$d > %2$d)",
    "corruptworld_description": "Sunucuda yüklü olan dünyayı bozar.",
    "corruptworld_success": "Dünya başarıyla bozuldu.",
    "daylock_description": "Gündüz-gece döngüsünü kilitler ve kilidini açar.",
    "debug_description": "Bir hata ayıklama oturumunu başlatır veya durdurur.",
    "debug_notStarted": "Başlamadan profilleme durdurulamıyor!",
    "debug_start": "Hata ayıklama profilleme başlatıldı",
    "debug_stop": "Hata ayıklama profilleme %.2f saniye sonra durduruldu (%1$d tik)",
    "defaultgamemode_description": "Varsayılan oyun modunu ayarlar.",
    "defaultgamemode_success": "Dünyanın varsayılan oyun modu şimdi %1$s",
    "deop_description": "Operatör statüsünü oyuncudan geri alır.",
    "deop_failed": "D-op yapılamadı (izin seviyesi çok yüksek): %s",
    "deop_success": "Op geri alındı: %s",
    "deop_message": "Size verilen op geri alındı",
    "difficulty_description": "Zorluk seviyesini ayarlar.",
    "difficulty_usage": "/difficulty <yeni zorluk>",
    "difficulty_success": "Oyun zorluğu %1$s olarak ayarlandı",
    "downfall_success": "Yağış ayarlandı",
    "effect_description": "Durum etkileri ekler veya kaldırır.",
    "effect_failure_notActive": "İçinde efekt bulunmadığı için %2$s öğesinden %1$s öğesi alınamadı",
    "effect_failure_notActive_all": "Hiçbir etkiye sahip olmadığı için %1$s ögesinden etki alınamadı",
    "effect_failure_notAMob": "%1$s üzerinde etki olamaz",
    "effect_notFound": "%s kimlikli hiçbir yaratık etkisi yok",
    "effect_success": "%3$s ögesine %4$d saniyeliğine %1$s * %2$d verildi",
    "effect_success_removed": "%2$s öğesinden %1$s alındı",
    "effect_success_removed_all": "%1$s ögesinden bütün efektler alındı",
    "enchant_cantCombine": "%1$s, %2$s ile birleştirilemiyor",
    "enchant_invalidLevel": "%1$s %2$d seviyesini desteklemiyor",
    "enchant_cantEnchant": "Seçilen büyü, hedef eşyaya eklenemiyor: %1$s",
    "enchant_description": "Bir oyuncunun seçilen eşyasına bir büyü ekler.",
    "enchant_noItem": "Hedefte eşya bulunmuyor: %1$s",
    "enchant_notFound": "%1$d kimlikli hiçbir büyü yok",
    "enchant_success": "%1$s için büyü yapma başarılı",
    "entitydata_description": "Bir varlığın veri etiketini değiştirir.",
    "entitydata_failed": "Veri etiketi değişmedi: %1$s",
    "entitydata_noPlayers": "%1$s bir oyuncudur ve değiştirilemez",
    "entitydata_success": "Varlık verileri güncellendi: %1$s",
    "entitydata_tagError": "Veri etiketi çözümleme başarısız: %1$s",
    "execute_allInvocationsFailed": "Bütün başlatmalar başarısız: '%1$s'",
    "execute_failed": "'%1$s', %2$s olarak yürütülemedi",
    "execute_description": "Bir veya daha fazla varlık adına bir komut gerçekleştirir.",
    "fill_description": "Bir bölgenin tamamını veya bazı bölümlerini belirli bir blokla doldurur.",
    "fill_failed": "Hiçbir blok doldurulmadı",
    "fill_outOfWorld": "Dünya dışına blok yerleştirilemez",
    "fill_success": "%1$d blok dolduruldu",
    "fill_tagError": "Veri etiketi çözümleme başarısız: %1$s",
    "fill_tooManyBlocks": "Belirtilen alanda çok fazla blok var (%1$d > %2$d)",
    "fill_replace_auxvalue_invalid": "%1$s bloğu için geçersiz veri değiştirme değeri",
    "function_description": "İlgili işlev dosyasında bulunan komutları çalıştırır.",
    "function_functionNameNotFound": "%1$s işlevi bulunamadı.",
    "function_invalidCharacters": "Başlığı '%s' olan işlev geçersiz. İşlev adlarında '%s' karakteri kullanılamaz.",
    "function_noEngineVersionSpecified": "%s işlevi çalıştırılamadı. Davranış paketinin manifest.json dosyasında bir min_engine_version belirtmeniz gerekiyor.",
    "function_success": "%1$d işlev girişi başarıyla yürütüldü.",
    "gamemode_description": "Oyuncunun oyun modunu ayarlar.",
    "gamemode_success_other": "%2$s kişisinin oyun modunu %1$s olarak ayarla",
    "gamemode_success_self": "Kendi oyun modunu %1$s olarak ayarla",
    "gamemode_fail_invalid": "Oyun modu '%1$s' geçersiz",
    "gamerule_description": "Bir oyun kuralı değeri belirler veya sorgular.",
    "gamerule_type_invalid": "Oyun kuralı '%1$s' için kullanılan geçersiz tür",
    "gamerule_type_nocheatsenabled": "'%1$s' oyun kuralı yalnızca hileler bu dünyada etkinse kullanılabilir.",
    "gamerule_nopermission": "Sadece sunucu sahipleri '%1$s' ögesini değiştirebilirler",
    "gamerule_norule": "'%1$s' adlı bir oyun kuralı mevcut değil",
    "gamerule_success": "Oyun kuralı %1$s, %2$s olarak güncellendi",
    "generic_async_initiated": "'%1$s' komutu başlatıldı (eşzamansız adım %2$d)",
    "generic_boolean_invalid": "'%1$s' doğru veya yanlış değil",
    "generic_chunk_notFound": "Belirtilen chunk bulunamadı",
    "generic_componentError": "Bileşen listesi çözümlemesi başarısız",
    "generic_dimension_notFound": "Belirtilen boyut bulunamadı",
    "generic_disabled": "Hileler bu seviyede etkin değil.",
    "generic_disabled_templateLocked": "Ayarlar şu anda kilitli. Değiştirmek için Oyun Ayarları menüsündeki Şablon Dünya Seçenekleri'nin kilidini açın.",
    "generic_double_tooBig": "Girdiğiniz sayı (%.2f) çok büyük; bu sayı en fazla %.2f olmalıdır",
    "generic_double_tooSmall": "Girdiğiniz sayı (%.2f) çok küçük; bu sayı en az %.2f olmalıdır",
    "generic_duplicateType": "Yinelenen tür bağımsız değişkenleri",
    "generic_duplicateSelectorArgument": "Yinelenen %s seçici bağımsız değişkenleri",
    "generic_encryption_badkey": "Kötü ortak anahtar verildi. PEM biçimlendirmesinden sonra 120 bayt anahtar bekleniyor.",
    "generic_encryption_badsalt": "Kötü tuz verildi. Temel 64 kodlamadan önce 16 bayt bekleniyor.",
    "generic_encryption_required": "Şifreli oturum gerekli",
    "generic_entity_invalidType": "Varlık türü '%1$s' geçersiz",
    "generic_entity_invalidUuid": "Verilen varlık UUID geçersiz bir formatta",
    "generic_entity_notFound": "Bu varlık bulunamadı",
    "generic_exception": "Bu komutu gerçekleştirmeye çalışırken bilinmeyen bir hata oluştu",
    "generic_invalidAgentType": "Tür bağımsız değişkeni Agent'a özgü seçiciye uygulanmış",
    "generic_invalidcontext": "Verilen komut türü için sağlanan geçersiz bağlam",
    "generic_invalidDevice": "Girdiğiniz %s komutu bu cihazda desteklenmiyor",
    "generic_invalidPlayerType": "Tür bağımsız değişkeni oyunculara özgü seçiciye uygulanmış",
    "generic_invalidType": "Bilinmeyen tür bağımsız değişkeni",
    "generic_levelError": "Maksimum seviye minimum seviyeden büyük olmalıdır",
    "generic_malformed_body": "Vücut eksik veya kusurlu",
    "generic_malformed_type": "Geçersiz istek türü",
    "generic_notimplemented": "Uygulanmadı",
    "generic_num_invalid": "'%1$s' geçerli bir sayı değil",
    "generic_num_tooBig": "Girdiğiniz sayı (%1$d) çok büyük, bu sayı en fazla %2$d olmalıdır",
    "generic_num_tooSmall": "Girdiğiniz sayı (%1$d) çok küçük, bu sayı en az %2$d olmalıdır",
    "generic_parameter_invalid": "'%1$s' geçerli bir parametre değil",
    "generic_permission_selector": "<seçici genişletmesi için izinler yetersiz>",
    "generic_player_notFound": "Bu oyuncu bulunamadı",
    "generic_protocol_mismatch": "Verilen protokol versiyonu, Minecraft protokol versiyonuyla eşleşmiyor",
    "generic_radiusError": "Minimum seçici yarıçapı maksimumdan küçük olmalıdır",
    "generic_radiusNegative": "Yarıçap negatif olamaz",
    "generic_rotationError": "Rotasyon aralık dışında",
    "generic_running": "Komut zaten etkin",
    "generic_step_failed": "Komut adımı başarısız",
    "generic_syntax": "Söz dizimi hatası: \"%1$s>>%2$s<<%3$s\" konumunda beklenmeyen \"%2$s\"",
    "generic_noTargetMatch": "Seçiciyle hiçbir hedef eşleşmedi",
    "generic_targetNotPlayer": "Seçici oyuncu tipi olmalıdır",
    "generic_tooManyNames": "Çok fazla hedef isim bağımsız değişkeni var",
    "generic_tooManyTargets": "Seçiciyle çok fazla hedef eşleşti",
    "generic_too_many_requests": "Çok fazla komut istendi; bir komutun gerçekleştirilmesini bekleyin",
    "generic_unknown": "Bilinmeyen komut: %s. Lütfen komutun mevcut olduğundan ve komutu kullanma iznine sahip olduğunuzdan emin olun.",
    "generic_usage": "Kullanım: %1$s",
    "generic_usage_noparam": "Kullanım:",
    "generic_version_mismatch": "Bu komut için istenen versiyon mevcut değil",
    "generic_version_missing": "Sohbetten gelmeyen komut çağrıları komut çeşidini belirtmelidir",
    "getchunkdata_description": "Belirli bir chunk için görüntü ögesi alır.",
    "getchunkdata_success": "Chunk verisi alındı",
    "getchunks_description": "Yüklenen chunk'ların listesini getirir.",
    "getchunks_success": "Chunk listesi alındı",
    "getlocalplayername_description": "Yerel oyuncu adına geri döner.",
    "getspawnpoint_description": "Belirtilen oyuncunun/oyuncuların oluşum konumunu getirir.",
    "gettopsolidblock_description": "Belirtilen konumun altında en üstte bulunan hava olmayan bloğun konumunu alır",
    "gettopsolidblock_notfound": "Belirtilen konumun altında katı blok yok",
    "give_block_notFound": "%1$d adında bir blok yok",
    "give_description": "Bir oyuncuya bir eşya verir.",
    "give_item_invalid": "Geçersiz komut söz dizimi: Bu veri değerinde %s diye bir şey yok",
    "give_item_notFound": "%1$d adlı öge yok",
    "give_map_invalidData": "Geçersiz harita verileri sağlandı",
    "give_map_featureNotFound": "Keşif haritası yapılamadı. Özellik bu boyutta bulunmuyor",
    "give_success": "%3$s ögesine %1$s * %2$d verildi",
    "give_successRecipient": "Size %1$s * %2$d verildi",
    "give_tagError": "Veri etiketi çözümleme başarısız: %1$s",
    "help_description": "Yardım/komut listesi sağlar.",
    "help_footer": "İpucu: Bir komut girerken komut veya argümanlarının otomatik olarak tamamlanması için <tab> tuşunu kullanın",
    "help_header": "--- %1$d/%2$d yardım sayfası gösteriliyor (/yardım <page>) ---",
    "help_command_aliases": "%s (ayrıca %s):",
    "immutableworld_description": "Dünyanın değişmez durumunu ayarlar.",
    "immutableworld_info": "immutableworld = %s",
    "kick_description": "Bir oyuncuyu sunucudan atar.",
    "kick_description_edu": "Bir oyuncuyu oyundan çıkarır.",
    "kick_not_found": "Oyuncu %1$s bulunamadı",
    "kick_not_yourself": "Kendinizi oyundan çıkaramazsınız",
    "kick_success": "%1$s oyundan atıldı",
    "kick_success_reason": "%1$s oyundan atıldı: '%2$s'",
    "kick_success_reasonedu": "%1$s şu oyundan çıkarıldı: '%2$s'",
    "kick_no_host": "Kurucu oyundan atılamaz.",
    "kick_no_teacher": "Öğretmenler oyundan çıkarılamaz.",
    "kill_successful_edu": "%1$s kaldırıldı",
    "kill_successful": "%1$s öldürüldü",
    "kill_description_edu": "Varlıkları (oyuncular, yaratıklar vb.) kaldırır.",
    "kill_description": "Varlıkları (oyuncular, yaratıklar gibi) öldürür.",
    "list_description": "Sunucudaki oyuncuları listeler.",
    "locate_description": "Belirtilen bir türe en yakın yapının koordinatlarını görüntüler.",
    "locate_fail_noplayer": "Komut yalnızca geçerli bir oyuncu tarafından kullanılabilir",
    "locate_fail_nostructurefound": "Bu boyutta hiçbir geçerli yapı bulunamadı",
    "locate_success": "En yakın %1$s, %2$s, (y?), %3$s blokta",
    "togglecontentlog_toggle": "İçerik günlüğü komutunu etkinleştirir/devre dışı bırakır",
    "togglecontentlog_enabled": "İçerik Günlüğü Etkin",
    "togglecontentlog_disabled": "İçerik Günlüğü Devre Dışı",
    "me_description": "Sizin hakkınızda bir mesaj görüntüler.",
    "message_display_incoming": "%1$s size fısıldıyor: %2$s",
    "message_display_outgoing": "%1$s kişisine fısıldıyorsunuz: %2$s",
    "message_sameTarget": "Kendinize özel mesaj gönderemezsiniz!",
    "mixer_description": "Mixer Etkileşim kontrolü",
    "mixer_error_unknown": "Bilinmeyen bir Mixer hatası oluştu.",
    "mixer_error_notoken": "Mixer etkileşimini etkinleştirmek için bir Microsoft Hesabıyla oturum açmanız gerekir.",
    "mixer_error_notsupported": "Kullanmakta olduğunuz cihaz Mixer etkileşimini desteklemiyor.",
    "mixer_interactive_error": "Bir Mixer hatası oluştu: %1$s",
    "mixer_scene_failed": "%1$s adlı bir sahne yok. Sahne adını doğru şekilde girdiğinizden emin olun.",
    "mixer_scene_success": "Sahne şu şekilde değiştirildi: %1$s",
    "mixer_start_success": "Mixer etkileşimi başlangıcı: %1$s",
    "mixer_start_fail_invalidCode": "Kimliği \"%1$s\" olan proje bulunamadı. Kimliğin ve paylaşım kodunun doğru olduğundan emin olun.",
    "mixer_stop_success": "Mixer etkileşimi durduruldu.",
    "mixer_stop_fail": "Durdurulacak etkileşimli oturum yok.",
    "mixer_status_notinitialized": "Etkileşim başlatılmadı.",
    "mixer_status_enabled": "Etkileşim etkin.",
    "mixer_status_initializing": "Etkileşim başlatılıyor.",
    "mixer_status_pending": "Etkileşim beklemede.",
    "mixer_status_disabled": "Etkileşim devre dışı.",
    "mixer_activatedbutton": "%2$s, %1$s tarafından etkinleştirildi.",
    "mobevent_description": "Yaratık olaylarının çalışmasına izin verilen kontroller.",
    "mobevent_eventsEnabledSetToTrue": "Yaratık Olayları şimdi etkin. False olarak ayarlanmış tekil olaylar çalışmayacak.",
    "mobevent_eventsEnabledSetToFalse": "Yaratık Olayları şimdi devre dışı. Tekil olaylar çalışmayacak.",
    "mobevent_eventsEnabledIsTrue": "Yaratık Olayları etkin. False olarak ayarlanmış tekil olaylar çalışmayacak.",
    "mobevent_eventsEnabledIsFalse": "Yaratık Olayları devre dışı. Tekil olaylar çalışmayacak.",
    "mobevent_eventSetToTrue": "Yaratık Olayı %s (kimlik: %s) true olarak ayarlandı.",
    "mobevent_eventSetToTrueButEventsDisabled": "Yaratık Olayı %s (kimlik: %s) true olarak ayarlandı ancak Yaratık Olayları devre dışı.",
    "mobevent_eventSetToFalse": "Yaratık Olayı %s (kimlik: %s) false olarak ayarlandı.",
    "mobevent_eventIsTrue": "Yaratık Olayı %s (kimlik: %s) true olarak ayarlandı.",
    "mobevent_eventIsTrueButEventsDisabled": "Yaratık Olayı %s (kimlik: %s) true olarak ayarlandı ancak Yaratık Olayları devre dışı.",
    "mobevent_eventIsFalse": "Yaratık Olayı %s (kimlik: %s) false olarak ayarlandı.",
    "op_description": "Oyuncuya operatör statüsü verir.",
    "op_failed": "Op verilemedi (zaten op verilmiş veya daha yüksek): %s",
    "op_success": "Op verildi: %s",
    "op_message": "Op verildiniz",
    "origin_commandblock": "CommandBlock",
    "origin_external": "Harici",
    "origin_devconsole": "DevConsole",
    "origin_script": "Betik Altyapısı",
    "origin_server": "Sunucu",
    "origin_teacher": "Öğretmen",
    "ops_description": "Op izinlerini yeniden yükler ve uygular.",
    "ops_reloaded": "Op'lar dosyadan yeniden yüklendi.",
    "ops_set_success": "Oyuncu %s için operatör düzeyi başarıyla ayarlandı.",
    "permissions_description": "İzinleri yeniden yükler ve uygular.",
    "permissions_reloaded": "İzinler dosyadan yeniden yüklendi.",
    "permissions_set_failed": "Oyuncu %s için izin düzeyi %s ayarlanamadı.",
    "permissions_set_success": "Oyuncu %s için izin düzeyi %s başarıyla ayarlandı.",
    "permissions_save_failed": "Oyuncu %s için izin düzeyi %s kaydedilemedi.",
    "permissions_save_success": "Oyuncu %s için izin düzeyi %s başarıyla kaydedildi.",
    "spawnParticleEmitter_description": "Bir parçacık yayıcı oluşturur",
    "particle_description": "Parçacık oluşturur.",
    "particle_notFound": "Bilinmeyen efekt adı (%1$s)",
    "particle_success": "%2$d süredir efekt %1$s oynanıyor",
    "players_list": "Çevrimiçi %1$d/%2$d oyuncu var:",
    "players_list_names": "%s",
    "playsound_description": "Bir sesi çalar.",
    "playsound_playerTooFar": "Oyuncu %1$s sesi duyamayacak kadar uzakta",
    "playsound_success": "%2$s ögesine '%1$s' sesi çalındı",
    "position_description": "Oyuncunun koordinatlarını açar/kapatır.",
    "publish_failed": "Yerel oyuna sunuculuk yapılamıyor",
    "publish_started": "%1$s bağlantı noktasında yerel oyuna sunuculuk yapıldı",
    "querytarget_description": "Verilen hedef varlık veya varlıklar hakkında dönüşüm, ad ve kimlik bilgisi getirir.",
    "querytarget_success": "Hedef veri: %1$s",
    "reload_description": "Tüm davranış paketlerindeki tüm işlev dosyalarını yeniden yükler.",
    "reload_success": "Var olan işlev dosyaları tekrar yüklendi. YENİ işlevleri tekrar yüklemek için Minecraft'ı yeniden başlatın.",
    "replaceitem_description": "Envanterlerdeki eşyaları değiştirir.",
    "replaceitem_failed": "%s yuva %d, %d * %s ile değiştirilemedi",
    "replaceitem_keepFailed": "%s yuvası %d içinde zaten bir eşya var.",
    "replaceitem_noContainer": "%s konumundaki blok konteyner değil",
    "replaceitem_badSlotNumber": "Yuva %d değiştirilemedi, %d ve %d arasında bir değer olması gerekiyor.",
    "replaceitem_success": "%s yuva %d, %d * %s ile değiştirildi",
    "replaceitem_success_entity": "%s yuva %s'nin %d'si, %d * %s ile değiştirildi.",
    "replaceitem_tagError": "Veri etiketi çözümleme başarısız: %1$s",
    "save_description": "Oyunun verileri diske nasıl kaydettiğini kontrol edin.",
    "save_disabled": "Dünya otomatik kaydetme kapatıldı",
    "save_enabled": "Dünya otomatik kaydetme açıldı",
    "save_failed": "Kaydedilemedi: %1$s",
    "save_start": "Kaydediliyor...",
    "save_success": "Dünya kaydedildi",
    "save_all_error": "Seviye kaydetmeyi duraklatmaya çalışırken bir hata oluştu.",
    "save_all_success": "Veriler kaydedildi. Dosyalar artık kopyalanmaya hazır.",
    "save_off_alreadyOff": "Kaydetme zaten kapatıldı.",
    "save_on_alreadyOn": "Kaydetme zaten açıldı.",
    "save_on_notDone": "Daha önceki bir kayıt tamamlanmamış.",
    "save_on_description": "Otomatik sunucu kaydetmeyi etkinleştirir.",
    "save_on_success": "Seviyedeki değişikliklere devam ediliyor.",
    "save_state_description": "Önceki bir tümünü kaydet işleminin tamamlanıp tamamlanmadığını kontrol eder ve ilgili dosyaları listeler.",
    "say_description": "Sohbette diğer oyunculara mesaj gönderir.",
    "scoreboard_description": "Çeşitli hedefler için puanları izler ve gösterir.",
    "scoreboard_allMatchesFailed": "Tüm eşleşmeler başarısız",
    "scoreboard_noMultiWildcard": "Yalnızca bir kullanıcı eşlemeye izin verilir",
    "scoreboard_objectiveNotFound": "'%1$s' adında bir hedef bulunamadı",
    "scoreboard_objectiveReadOnly": "'%1$s' hedefi salt okunur olduğundan ayarlanamaz",
    "scoreboard_objectives_add_alreadyExists": "'%1$s' adında bir hedef zaten var",
    "scoreboard_objectives_add_displayTooLong": "'%1$s' görünen adı bir hedef için çok uzun, hedef adı en fazla %2$d karakter uzunluğunda olabilir",
    "scoreboard_objectives_add_success": "Yeni '%1$s' hedefi başarıyla eklendi",
    "scoreboard_objectives_add_tooLong": "'%1$s' adı bir hedef için çok uzun, hedef adı en fazla %2$d karakter uzunluğunda olabilir",
    "scoreboard_objectives_add_wrongType": "Geçersiz hedef ölçütü türü '%1$s'",
    "scoreboard_objectives_add_needName": "Hedefin bir adı olmalıdır.",
    "scoreboard_objectives_description": "Puan tablosu hedeflerini değiştir.",
    "scoreboard_objectives_list_count": "Puan tablosunda %1$d hedef gösteriliyor:",
    "scoreboard_objectives_list_empty": "Puan tablosunda hedef yok",
    "scoreboard_objectives_list_entry": "- %1$s: '%2$s' olarak görünür ve '%3$s' türündedir",
    "scoreboard_objectives_remove_success": "'%1$s' hedefi başarıyla kaldırıldı",
    "scoreboard_objectives_setdisplay_invalidSlot": "'%1$s' ekran yuvası yok",
    "scoreboard_objectives_setdisplay_successCleared": "'%1$s' hedef ekranı yuvası temizlendi",
    "scoreboard_objectives_setdisplay_successSet": "'%1$s' yuvasındaki ekran hedefini '%2$s' olarak ayarla",
    "scoreboard_players_add_success": "%3$s için (şimdi %4$d) [%2$s] hedefine %1$d eklendi",
    "scoreboard_players_add_multiple_success": "%3$d varlık için [%2$s] hedefine %1$d eklendi",
    "scoreboard_players_nameNotFound": "Bir oyuncu adı verilmelidir.",
    "scoreboard_players_enable_noTrigger": "%1$s hedefi tetikleyici değil",
    "scoreboard_players_enable_success": "%1$s tetikleyicisi %2$s için etkinleştirildi",
    "scoreboard_players_list_count": "Puan tablosunda %1$d izlenen oyuncu gösteriliyor:",
    "scoreboard_players_list_empty": "Puan tablosunda izlenen oyuncu yok",
    "scoreboard_players_list_player_count": "%2$s için %1$d izlenen hedef gösteriliyor:",
    "scoreboard_players_list_player_empty": "%1$s oyuncusunun kayıtlı puanı yok",
    "scoreboard_players_list_player_entry": "- %2$s: %1$d (%3$s)",
    "scoreboard_players_operation_invalidOperation": "Geçersiz işlem %1$s",
    "scoreboard_players_operation_notFound": "%2$s için %1$s puanı bulunamadı",
    "scoreboard_players_operation_success": "%2$d varlık için [%1$s] güncellendi",
    "scoreboard_players_offlinePlayerName": "Oyuncu Çevrimdışı",
    "scoreboard_players_random_invalidRange": "En küçük %1$d, en büyük %2$d değerinden az değil",
    "scoreboard_players_remove_success": "%3$s için (şimdi %4$d) [%2$s] hedefinden %1$d çıkarıldı",
    "scoreboard_players_remove_multiple_success": "%3$d varlık için [%2$s] hedefinden %1$d çıkarıldı",
    "scoreboard_players_reset_success": "%1$s oyuncusunun puanlarını sıfırla",
    "scoreboard_players_resetscore_success": "%2$s oyuncusunun %1$s puanını sıfırla",
    "scoreboard_players_set_success": "%2$s için [%1$s] değeri %3$d olarak ayarlandı",
    "scoreboard_players_set_multiple_success": "%2$d varlık için [%1$s] değeri %3$d olarak ayarlandı",
    "scoreboard_players_set_tagError": "dataTag ayrıştırılamadı, nedeni: %1$s",
    "scoreboard_players_set_tagMismatch": "%1$s için dataTag eşleşmiyor",
    "scoreboard_players_score_notFound": "%2$s için %1$s puanı bulunamadı",
    "scoreboard_players_test_failed": "%1$d puanı %2$d ile %3$d aralığında DEĞİL",
    "scoreboard_players_test_success": "%1$d puanı %2$d ile %3$d aralığında",
    "scoreboard_teamNotFound": "'%1$s' adlı bir takım bulunamadı",
    "scoreboard_teams_add_alreadyExists": "'%1$s' adlı bir takım zaten var",
    "scoreboard_teams_add_displayTooLong": "'%1$s' görünen adı bir takım için çok uzun, takım adı en fazla %2$d karakter uzunluğunda olabilir",
    "scoreboard_teams_add_success": "Yeni '%1$s' takımı başarıyla eklendi",
    "scoreboard_teams_add_tooLong": "'%1$s' adı bir takım için çok uzun, takım adı en fazla %2$d karakter uzunluğunda olabilir",
    "scoreboard_teams_empty_alreadyEmpty": "%1$s takımı zaten boş, var olmayan oyuncular çıkarılamaz",
    "scoreboard_teams_empty_success": "%1$d oyuncunun hepsi %2$s takımından çıkarıldı",
    "scoreboard_teams_join_failure": "%2$s takımına %1$d oyuncu eklenemedi: %3$s",
    "scoreboard_teams_join_success": "%2$s takımına %1$d oyuncu eklendi: %3$s",
    "scoreboard_teams_leave_failure": "%1$d oyuncu takımlarından çıkarılamadı: %2$s",
    "scoreboard_teams_leave_noTeam": "Bir takımda değilsiniz",
    "scoreboard_teams_leave_success": "%1$d oyuncu takımlarından çıkarıldı: %2$s",
    "scoreboard_teams_list_count": "Puan tablosunda %1$d takım gösteriliyor:",
    "scoreboard_teams_list_empty": "Puan tablosunda kayıtlı takım yok",
    "scoreboard_teams_list_entry": "- %1$s: '%2$s' %3$d oyuncuya sahip",
    "scoreboard_teams_list_player_count": "%2$s takımında %1$d oyuncu gösteriliyor:",
    "scoreboard_teams_list_player_empty": "%1$s takımında oyuncu yok",
    "scoreboard_teams_list_player_entry": "- %2$s: %1$d (%3$s)",
    "scoreboard_teams_option_noValue": "%1$s seçeneği için geçerli değerler: %2$s",
    "scoreboard_teams_option_success": "%2$s takımı için %1$s seçeneğini %3$s olarak ayarla",
    "scoreboard_teams_remove_success": "%1$s takımı kaldırıldı",
    "seed_success": "Tohum: %1$s",
    "setblock_description": "Bir bloku başka bir blokla değiştirir.",
    "setblock_failed": "Blok yerleştirilemedi",
    "setblock_noChange": "Blok yerleştirilemedi",
    "setblock_notFound": "%1$s kimlikli/adlı bir blok yok",
    "setblock_outOfWorld": "Dünya dışındaki bir bloğu yerleştiremezsiniz",
    "setblock_success": "Blok yerleştirildi",
    "setblock_tagError": "Veri etiketi çözümleme başarısız: %1$s",
    "setidletimeout_success": "Boşta kalma zaman aşımı başarıyla %1$d dakika olarak ayarlandı.",
    "setfixedinvslots_description": "Sunucu için sabit envanter yuvası sayısını ayarlar.",
    "setfixedinvslots_success": "Sabit Envanter Yuvası sayısı %1$d olarak ayarlandı",
    "setfixedinvslot_description": "Sabit bir yuvayı belirli bir eşyaya ayarlar.",
    "setfixedinvslot_success": "Sabit Envanter Yuvası %1$d, %2$s olarak ayarlandı",
    "globalpause_description": "Tüm oyuncular için duraklatılan oyun durumunu ayarlar veya getirir.",
    "globalpause_success": "Ayarlı veya duraklatıldı durumu",
    "setmaxplayers_description": "Bu oyun oturumu için maksimum oyuncu sayısını belirler.",
    "setmaxplayers_success": "Maksimum oyuncu sayısını %1$d olarak ayarla.",
    "setmaxplayers_success_upperbound": "(Maksimum izin verilen bağlantıya bağlıdır)",
    "setmaxplayers_success_lowerbound": "(Mevcut oyuncu sayısına bağlıdır)",
    "setworldspawn_description": "Dünya oluşumunu ayarlar.",
    "setworldspawn_success": "Dünya oluşum noktasını (%1$d, %2$d, %3$d) olarak ayarla",
    "setworldspawn_wrongDimension": "Dünya oluşumu bu boyutta ayarlanamıyor",
    "spawnpoint_success_single": "%1$s oluşum noktasını (%2$d, %3$d, %4$d) olarak ayarla",
    "spawnpoint_description": "Bir oyuncu için oluşum noktasını ayarlar.",
    "spawnpoint_success_multiple_specific": "%1$s için oluşum noktasını (%2$d, %3$d, %4$d) olarak ayarla",
    "spawnpoint_success_multiple_generic": "%1$s için oluşum noktasını ayarla",
    "spawnpoint_wrongDimension": "Oluşum noktası bu boyutta ayarlanamıyor",
    "spreadplayers_description": "Varlıkları rastgele yerlere ışınlar.",
    "spreadplayers_failure_players": "%1$s oyuncu %2$s,%3$s etrafına dağıtılamadı (bu alan için çok fazla oyuncu var, en fazla %4$s tane dağıtmayı deneyin)",
    "spreadplayers_failure_teams": "%1$s takım %2$s,%3$s etrafına dağıtılamadı (bu alan için çok fazla oyuncu var, en fazla %4$s tane dağıtmayı deneyin)",
    "spreadplayers_info_players": "(Oyuncular arasındaki ortalama uzaklık %2$s tekrardan sonra %1$s blok)",
    "spreadplayers_info_teams": "(Takımlar arasındaki ortalama uzaklık %2$s tekrardan sonra %1$s blok)",
    "spreadplayers_spreading_players": "%1$s oyuncu %2$s blok %3$s,%4$s etrafına dağıtılıyor (min %5$s blok bırakıldı)",
    "spreadplayers_spreading_teams": "%1$s takım %2$s blok %3$s,%4$s etrafına dağıtılıyor (min %5$s blok bırakıldı)",
    "spreadplayers_success_players": "%1$s oyuncu başarıyla %2$s,%3$s etrafına dağıtıldı",
    "spreadplayers_success_teams": "%1$s takım başarıyla %2$s,%3$s etrafına dağıtıldı",
    "stats_cleared": "%1$s istatistik temizlendi",
    "stats_failed": "Geçersiz parametreler",
    "stats_noCompatibleBlock": "%1$d, %2$d, %3$d konumundaki blok istatistikleri takip edemez",
    "stats_success": "%1$s istatistik %3$s, %2$s üzerinde saklanıyor",
    "stop_description": "Sunucuyu durdurur.",
    "stop_start": "Sunucu durduruluyor",
    "stopsound_description": "Bir sesi durdurur.",
    "stopsound_success": "%s sesi %s için durduruldu",
    "stopsound_success_all": "%s için bütün sesler durduruldu",
    "summon_description": "Bir varlık çağırır.",
    "summon_failed": "Nesne çağırılamadı",
    "summon_outOfWorld": "Dünya dışındaki nesne çağırılamaz",
    "summon_success": "Nesne başarıyla çağırıldı",
    "summon_tagError": "Veri etiketi çözümleme başarısız: %1$s",
    "tag_description": "Varlıklarda depolanmış etiketleri yönetir.",
    "tag_add_failed": "Hedefte zaten etiket var veya çok fazla etiket var",
    "tag_add_success_single": "'%1$s' etiketi %2$s hedefine eklendi",
    "tag_add_success_multiple": "'%1$s' etiketi %2$d varlığa eklendi",
    "tag_list_single_empty": "%s bir etikete sahip değil",
    "tag_list_single_success": "%1$s %2$d etikete sahip: %3$s",
    "tag_list_multiple_empty": "%d varlıkta etiket yok",
    "tag_list_multiple_success": "%1$d varlıkta toplam %2$d etiket var: %3$s",
    "tag_remove_failed": "Hedefte bu etiket yok",
    "tag_remove_success_single": "'%1$s' etiketi %2$s kaynağından kaldırıldı",
    "tag_remove_success_multiple": "'%1$s' etiketi %2$d varlıktan kaldırıldı",
    "tell_description": "Bir veya daha fazla oyuncuya özel bir mesaj gönderir.",
    "tellraw_description": "Oyunculara bir JSON mesajı gönderir.",
    "tellraw_jsonException": "Geçersiz json: %1$s",
    "tellraw_jsonStringException": "Geçersiz json dize verileri.",
    "tellraw_error_noData": "Veri sağlanmadı.",
    "tellraw_error_notArray": "Rawtext nesnesi bir dizi içermelidir. Örnek: \"rawtext\":[{..}]",
    "tellraw_error_textNotString": "rawtext içindeki text alanı bir dize içermelidir. Örnek: \"rawtext\":[{\"text\": \"text to display\"}]",
    "tellraw_error_translateNotString": "rawtext içindeki translate alanı bir dil anahtarı içermelidir. Örnek: \"rawtext\":[{\"translate\": \"gui.ok\"}]",
    "tellraw_error_withNotArrayOrRawText": "düz metinli alan bir dizi veya başka bir düz metin nesnesi içermelidir. Örnek 1: \"düz metin\":[{\"translate\": \"chat.type.announcement\", \"with\": [ \"value1\", \"value2\" ]}]  Örnek 2: \"düz metin\":[{\"translate\": \"chat.type.announcement\", \"with\":{\"rawtext\":[{\"text\": \"value1\"}, {\"text\": \"value2\"}]}}]",
    "tellraw_error_itemIsNotObject": "rawtext içindeki Json değeri bir nesne değil. Örnek: \"rawtext\": [{ \"text\" : \"my text\" }]",
    "educlientinfo_description": "Kiracı Kimliği veya ana bilgisayar durumunu alır. CM içindir.",
    "testfor_description": "Belirtilen koşullarla eşleşen varlıkları (oyuncular, yaratıklar, eşyalar vb.) sayar.",
    "testfor_failure": "%1$s gerekli veri yapısı ile eşleşmedi",
    "testfor_success": "%1$s bulundu",
    "testfor_tagError": "Veri etiketi çözümleme başarısız: %1$s",
    "testforblock_description": "Belirli bir blokun belirli bir konumda olup olmadığını test eder.",
    "testforblock_failed_data": "%1$d,%2$d,%3$d konumundaki blok, beklenen blok durumu ile eşleşmedi.",
    "testforblock_failed_nbt": "%1$d,%2$d,%3$d konumundaki blok, gerekli NBT tuşlarına sahip değildi.",
    "testforblock_failed_tile": "%1$d,%2$d,%3$d konumundaki blok %4$s (beklenen: %5$s).",
    "testforblock_failed_tileEntity": "%1$d,%2$d,%3$d konumundaki blok bir kutucuk olmadığından etiket eşleştirmeyi desteklemiyor.",
    "testforblock_outOfWorld": "Dünya dışındaki blok test edilemez",
    "testforblock_success": "%1$d,%2$d,%3$d konumundaki blok başarıyla bulundu.",
    "testforblocks_description": "İki farklı bölgedeki blokların eşleşip eşleşmediğini test eder.",
    "tickingarea_description": "İşaretleme alanlarını ekler, kaldırır veya listeler.",
    "tickingarea_inuse": "%1$d/%2$d işaretleme alanı kullanılıyor.",
    "tickingarea_noneExist_currentDimension": "Geçerli boyutta işaretleme alanı yok.",
    "tickingarea_add_bounds_success": "%1$d bölgesinden %2$d bölgesine işaretleme alanı eklendi.",
    "tickingarea_add_circle_success": "İşaretleme alanı, yarıçapı %2$d olan parçalarla %1$d konumuna ortalandı.",
    "tickingarea_add_failure": "İşaretleme alanı üst sınırına (%1$d) zaten ulaşıldı. Daha fazla işaretleme alanı eklenemez.",
    "tickingarea_add_conflictingname": "%1$s adlı bir işaretleme alanı zaten var.",
    "tickingarea_add_chunkfailure": "İşaretleme alanı en az %1$d parça içeriyor; işaretleme alanı çok büyük ve oluşturulamıyor.",
    "tickingarea_add_radiusfailure": "Yarıçap en fazla %1$d olabilir; işaretleme alanı çok büyük ve oluşturulamıyor.",
    "tickingarea_remove_success": "İşaretleme alanları kaldırıldı",
    "tickingarea_remove_failure": "Geçerli boyutta %1$d blok konumunu içeren işaretleme alanı yok.",
    "tickingarea_remove_byname_failure": "Geçerli boyutta %1$s adlı işaretleme alanı yok.",
    "tickingarea_remove_all_success": "İşaretleme alanları kaldırıldı",
    "tickingarea_remove_all_failure": "Geçerli boyutta işaretleme alanı yok.",
    "tickingarea_list_chunks": "parça",
    "tickingarea_list_circle_radius": "Yarıçap",
    "tickingarea_list_success_currentDimension": "Geçerli boyuttaki tüm işaretleme alanlarının listesi",
    "tickingarea_list_success_allDimensions": "Tüm boyutlardaki tüm işaretleme alanlarının listesi",
    "tickingarea_list_failure_allDimensions": "Herhangi bir boyutta işaretleme alanı yok.",
    "tickingarea_list_to": "hedef:",
    "tickingarea_list_type_circle": "Daire",
    "time_added": "Saate %1$d eklendi",
    "time_description": "Dünyanın oyun zamanını değiştirir veya sorgular.",
    "time_disabled": "Bu düzeyde Her Zaman Gündüz etkindir.",
    "time_query_day": "%d günü",
    "time_query_daytime": "Gündüz saat %d",
    "time_query_gametime": "Oyun saati %d",
    "time_set": "Saati %1$d olarak ayarla",
    "time_stop": "Saat %1$s",
    "title_description": "Ekran başlıklarını denetler.",
    "title_success": "Başlık komutu başarıyla gerçekleştirildi",
    "titleraw_description": "JSON iletileri içeren ekran başlıklarını denetler.",
    "toggledownfall_description": "Hava durumunu değiştirir.",
    "tp_description": "Varlıkları (oyuncular, yaratıklar gibi) ışınlar.",
    "tp_notSameDimension": "Oyuncular aynı boyutta olmadığından ışınlama yapılamadı",
    "tp_outOfWorld": "Varlıklar dünyanın dışına ışınlanamaz",
    "tp_permission": "Bu eğik çizgi komutunu kullanma izniniz yok.",
    "tp_safeTeleportFail": "Bölgede bloklar olduğu için %1$s adlı oyuncu %2$s hedefine ışınlanamadı.",
    "tp_far": "%1$s adlı oyuncu %2$s konumundaki boşaltılmış alana ışınlanamıyor",
    "tp_success": "%1$s, %2$s konumuna ışınlandı",
    "tp_successVictim": "%1$s konumuna ışınlandınız",
    "tp_success_coordinates": "%1$s; %2$s, %3$s, %4$s konumuna ışınlandı",
    "transferserver_description": "Bir oyuncuyu başka bir sunucuya aktarır.",
    "transferserver_successful": "Aktarılan oyuncu",
    "transferserver_invalid_port": "Geçersiz bağlantı noktası (0-65535)",
    "trigger_description": "Etkinleştirilecek bir tetik ayarlar.",
    "trigger_disabled": "%1$s tetikleyicisi etkin değil",
    "trigger_invalidMode": "Geçersiz tetikleyici modu %1$s",
    "trigger_invalidObjective": "Geçersiz tetikleyici adı %1$s",
    "trigger_invalidPlayer": "Sadece oyuncular /tetikleyici komutunu kullanabilirler",
    "trigger_success": "%1$s tetikleyicisi %2$s %3$s ile değiştirildi",
    "unban_failed": "Kullanıcı %1$s engeli kaldırılamadı",
    "unban_success": "Oyuncu %1$s engeli kaldırıldı",
    "unbanip_invalid": "Geçersiz bir IP adresi girdiniz",
    "unbanip_success": "IP adresi %1$s engeli kaldırıldı",
    "validategamelighting_description": "Belirli bir bölge için oyun aydınlatmasını doğrula",
    "validategamelighting_checkRegionTooBig": "Aydınlatması kontrol edilecek bölge çok büyük! (%1$d > %2$d)",
    "validategamelighting_outOfWorld": "Dünyanın dışındaki aydınlatma kontrol edilemez",
    "weather_clear": "Hava durumu açık olarak değiştiriliyor",
    "weather_description": "Hava durumunu ayarlar.",
    "weather_disabled": "Bu düzeyde Hava Durumu Döngüsü etkin değildir.",
    "weather_query": "Hava durumu: %s",
    "weather_query_clear": "açık",
    "weather_query_rain": "yağmur",
    "weather_query_thunder": "gök gürültüsü",
    "weather_rain": "Hava durumu yağmurlu olarak değiştiriliyor",
    "weather_thunder": "Yağmur ve gök gürültüsü olarak değiştiriliyor",
    "whitelist_add_failed": "Beyaz listeye %1$s eklenemedi",
    "whitelist_add_success": "Beyaz listeye %1$s eklendi",
    "whitelist_description": "Sunucu beyaz listesini yönetir.",
    "whitelist_disabled": "İzinli liste kapatıldı",
    "whitelist_enabled": "İzinli liste açıldı",
    "whitelist_list": "Beyaz listeye alınmış %1$d (görülen %2$d oyuncu arasından) oyuncu var:",
    "whitelist_reloaded": "İzinli liste dosyadan yeniden yüklendi.",
    "whitelist_remove_failed": "%1$s beyaz listeden kaldırılamadı",
    "whitelist_remove_success": "%1$s beyaz listeden kaldırıldı",
    "world_age_description": "Dünyanın yaşını (oluşturulduktan sonra geçen zaman) değiştirir veya sorgular.",
    "world_age_added": "Dünya yaşına %1$d eklendi",
    "world_age_query": "Dünya yaşı %d",
    "world_age_set": "Dünya yaşı %1$d olarak ayarlandı",
    "worldborder_center_success": "Dünya sınırı merkezini %1$s,%2$s olarak ayarla",
    "worldborder_damage_amount_success": "Dünya sınırı hasar miktarını her blok için %1$s olarak ayarla (blok başına %2$s değeri üzerinden)",
    "worldborder_damage_buffer_success": "Dünya sınırı hasar tamponunu %1$s blok olarak ayarla (%2$s blok üzerinden)",
    "worldborder_get_success": "Dünya sınırı şu anda %1$s blok genişliğinde",
    "worldborder_set_success": "Dünya sınırını %1$s blok genişliğine ayarla (%2$s blok üzerinden)",
    "worldborder_setSlowly_grow_success": "%3$s saniyede dünya sınırı %1$s blok genişliğine (%2$s blok üzerinden) büyütülüyor",
    "worldborder_setSlowly_shrink_success": "%3$s saniyede dünya sınırı %1$s blok genişliğine (%2$s blok üzerinden) küçültülüyor",
    "worldborder_warning_distance_success": "Dünya sınırı uyarısını %1$s blok uzaklığına ayarla (%2$s blok üzerinden)",
    "worldborder_warning_time_success": "Dünya sınırı uyarısını %1$s saniye uzaklığına ayarla (%2$s saniye üzerinden)",
    "worldbuilder_description": "Çağıranın Dünya Yapıcı durumunu değiştirir.",
    "worldbuilder_success": "Dünya İnşa Edici durumu %1$s olarak güncellendi",
    "wsserver_description": "Verilen URL üzerinden internet soketi sunucusuna bağlanmaya çalışır.",
    "wsserver_invalid_url": "Verilen sunucu URL'si geçersiz",
    "wsserver_request_existing": "Başka bir bağlantı isteği şu anda çalışıyor",
    "wsserver_request_failed": "Sunucuya bağlanılamadı: %1$s",
    "wsserver_success": "Sunucuya kurulan bağlantı: %1$s",
    "xp_description": "Oyuncu deneyimi ekler veya kaldırır.",
    "xp_failure_widthdrawXp": "Oyuncuya olumsuz deneyim puanları verilemiyor",
    "xp_success": "%2$s için %1$d deneyim verildi",
    "xp_success_levels": "%2$s için %1$d seviye verildi",
    "xp_success_negative_levels": "%2$s üzerinden %1$d seviye alındı"
},
item:{
    "air": [
        "Hava"
    ],
    "apple": [
        "Elma"
    ],
    "golden_apple": [
        "Altın Elma"
    ],
    "appleenchanted": [
        "Büyülü Elma"
    ],
    "armor_stand": [
        "Zırh Askısı"
    ],
    "arrow": [
        "Ok"
    ],
    "tipped_arrow": [
        "Eğimli Ok"
    ],
    "banner": [
        "Siyah Flama",
        "Siyah Flama",
        "Kırmızı Flama",
        "Yeşil Flama",
        "Kahverengi Flama",
        "Mavi Flama",
        "Mor Flama",
        "Camgöbeği Flama",
        "Açık Gri Flama",
        "Gri Flama",
        "Pembe Flama",
        "Açık Yeşil Flama",
        "Sarı Flama",
        "Açık Mavi Flama",
        "Eflatun Flama",
        "Turuncu Flama",
        "Beyaz Flama"
    ],
    "bed": [
        "Yatak",
        "Beyaz Yatak",
        "Turuncu Yatak",
        "Eflatun Yatak",
        "Açık Mavi Yatak",
        "Sarı Yatak",
        "Açık Yeşil Yatak",
        "Pembe Yatak",
        "Gri Yatak",
        "Açık Gri Yatak",
        "Camgöbeği Yatak",
        "Mor Yatak",
        "Mavi Yatak",
        "Kahverengi Yatak",
        "Yeşil Yatak",
        "Kırmızı Yatak",
        "Siyah Yatak"
    ],
    "bell": [
        "Zil"
    ],
    "steak": [
        "Biftek"
    ],
    "beef": [
        "Çiğ Sığır Eti"
    ],
    "beetroot": [
        "Pancar"
    ],
    "beetroot_soup": [
        "Pancar Çorbası"
    ],
    "blaze_powder": [
        "Blaze Tozu"
    ],
    "blaze_rod": [
        "Blaze Çubuğu"
    ],
    "boat": [
        "Meşe Tekne",
        "Meşe Tekne",
        "Çam Tekne",
        "Huş Ağacından Tekne",
        "Büyük Orman Tekne",
        "Akasya Tekne",
        "Koyu Meşe Tekne"
    ],
    "bone": [
        "Kemik"
    ],
    "book": [
        "Kitap"
    ],
    "chainmail_boots": [
        "Zincir Botlar"
    ],
    "leather_boots": [
        "Deri Botlar"
    ],
    "diamond_boots": [
        "Elmas Botlar"
    ],
    "golden_boots": [
        "Altın Botlar"
    ],
    "iron_boots": [
        "Demir Botlar"
    ],
    "bow": [
        "Yay"
    ],
    "bowl": [
        "Kase"
    ],
    "bread": [
        "Ekmek"
    ],
    "brewing_stand": [
        "Simya Standı"
    ],
    "brick": [
        "Tuğla"
    ],
    "bucket": [
        "Kova"
    ],
    "bucketLava": [
        "Lav Kovası"
    ],
    "bucketWater": [
        "Su Kovası"
    ],
    "bucketFish": [
        "Morina Kovası"
    ],
    "bucketSalmon": [
        "Somon Kovası"
    ],
    "bucketTropical": [
        "Tropik Balık Kovası"
    ],
    "bucketPuffer": [
        "Kirpi Balığı Kovası"
    ],
    "bucketCustomFish": [
        "Bir Kova"
    ],
    "tropicalColorWhite": [
        "Beyaz"
    ],
    "tropicalColorOrange": [
        "Turuncu"
    ],
    "tropicalColorMagenta": [
        "Eflatun"
    ],
    "tropicalColorSky": [
        "Gök Mavisi"
    ],
    "tropicalColorYellow": [
        "Sarı"
    ],
    "tropicalColorLime": [
        "Açık Yeşil"
    ],
    "tropicalColorRose": [
        "Gül Rengi"
    ],
    "tropicalColorGray": [
        "Gri"
    ],
    "tropicalColorSilver": [
        "Gümüş"
    ],
    "tropicalColorTeal": [
        "Deniz Mavisi"
    ],
    "tropicalColorPlum": [
        "Mürdüm"
    ],
    "tropicalColorBlue": [
        "Mavi"
    ],
    "tropicalColorBrown": [
        "Kahverengi"
    ],
    "tropicalColorGreen": [
        "Yeşil"
    ],
    "tropicalColorRed": [
        "Kırmızı"
    ],
    "tropicalBodyKobSingle": [
        "%1$s Kob"
    ],
    "tropicalBodySunstreakSingle": [
        "%1$s Güneş Çizgisi"
    ],
    "tropicalBodySnooperSingle": [
        "%1$s Meraklı"
    ],
    "tropicalBodyDasherSingle": [
        "%1$s Şık Tip"
    ],
    "tropicalBodyBrinelySingle": [
        "%1$s Sulu"
    ],
    "tropicalBodySpottySingle": [
        "%1$s Benekli"
    ],
    "tropicalBodyFlopperSingle": [
        "%1$s Atlayıcı"
    ],
    "tropicalBodyStripeySingle": [
        "%1$s Çizgili"
    ],
    "tropicalBodyGlitterSingle": [
        "%1$s Parlak"
    ],
    "tropicalBodyBlockfishSingle": [
        "%1$s Blok Balığı"
    ],
    "tropicalBodyBettySingle": [
        "%1$s Betty"
    ],
    "tropicalBodyClayfishSingle": [
        "%1$s Kil Balığı"
    ],
    "tropicalBodyKobMulti": [
        "%1$s-%2$s Kob"
    ],
    "tropicalBodySunstreakMulti": [
        "%1$s-%2$s Güneş Çizgisi"
    ],
    "tropicalBodySnooperMulti": [
        "%1$s-%2$s Meraklı"
    ],
    "tropicalBodyDasherMulti": [
        "%1$s-%2$s Şık Tip"
    ],
    "tropicalBodyBrinelyMulti": [
        "%1$s-%2$s Sulu"
    ],
    "tropicalBodySpottyMulti": [
        "%1$s-%2$s Benekli"
    ],
    "tropicalBodyFlopperMulti": [
        "%1$s-%2$s Atlayıcı"
    ],
    "tropicalBodyStripeyMulti": [
        "%1$s-%2$s Çizgili"
    ],
    "tropicalBodyGlitterMulti": [
        "%1$s-%2$s Parlak"
    ],
    "tropicalBodyBlockfishMulti": [
        "%1$s-%2$s Blok Balığı"
    ],
    "tropicalBodyBettyMulti": [
        "%1$s-%2$s Betty"
    ],
    "tropicalBodyClayfishMulti": [
        "%1$s-%2$s Kil Balığı"
    ],
    "tropicalSchoolAnemone": [
        "Anemon"
    ],
    "tropicalSchoolBlackTang": [
        "Siyah Tang"
    ],
    "tropicalSchoolBlueDory": [
        "Mavi Yassı Balık"
    ],
    "tropicalSchoolButterflyFish": [
        "Kırlangıç Balığı"
    ],
    "tropicalSchoolCichlid": [
        "Ciklet Balığı"
    ],
    "tropicalSchoolClownfish": [
        "Palyaço Balığı"
    ],
    "tropicalSchoolCottonCandyBetta": [
        "Şeker Pembe Beta"
    ],
    "tropicalSchoolDottyback": [
        "Dottyback"
    ],
    "tropicalSchoolEmperorRedSnapper": [
        "İmparator Kırlangıç Balığı"
    ],
    "tropicalSchoolGoatfish": [
        "Keçi Balığı"
    ],
    "tropicalSchoolMoorishIdol": [
        "Moorish Idol"
    ],
    "tropicalSchoolOrnateButterfly": [
        "Süslü Kelebek Balığı"
    ],
    "tropicalSchoolParrotfish": [
        "Papağan Balığı"
    ],
    "tropicalSchoolQueenAngelFish": [
        "Kraliçe Melek Balığı"
    ],
    "tropicalSchoolRedCichlid": [
        "Kırmızı Ciklet Balığı"
    ],
    "tropicalSchoolRedLippedBlenny": [
        "Kırmızı Dudaklı Horozbina"
    ],
    "tropicalSchoolRedSnapper": [
        "Kırmızı Kırlangıç Balığı"
    ],
    "tropicalSchoolThreadfin": [
        "Sakallı Balık"
    ],
    "tropicalSchoolTomatoClown": [
        "Kırmızı Palyaço Balığı"
    ],
    "tropicalSchoolTriggerfish": [
        "Çotira"
    ],
    "tropicalSchoolYellowTang": [
        "Sarı Tang"
    ],
    "tropicalSchoolYellowtailParrot": [
        "Sarı Kuyruklu Papağan Balığı"
    ],
    "cake": [
        "Kek"
    ],
    "camera": [
        "Kamera"
    ],
    "golden_carrot": [
        "Altın Havuç"
    ],
    "carrotOnAStick": [
        "Çubuğa Asılı Havuç"
    ],
    "warped_fungus_on_a_stick": [
        "Sopa üzerinde Çarpık Mantar"
    ],
    "carrot": [
        "Havuç"
    ],
    "cauldron": [
        "Kazan"
    ],
    "coal": [
        "Kömür",
        null,
        "Odun Kömürü"
    ],
    "chainmail_chestplate": [
        "Zincir Zırh"
    ],
    "leather_chestplate": [
        "Deri Ceket"
    ],
    "diamond_chestplate": [
        "Elmas Zırh"
    ],
    "golden_chestplate": [
        "Altın Zırh"
    ],
    "iron_chestplate": [
        "Demir Zırh"
    ],
    "chorus_fruit": [
        "Koro Meyvesi"
    ],
    "chorus_fruit_popped": [
        "Atık Koro Meyvesi"
    ],
    "cooked_beef": [
        "Pişmiş Biftek"
    ],
    "cooked_chicken": [
        "Pişmiş Tavuk"
    ],
    "cooked_porkchop": [
        "Pişmiş Domuz Pirzolası"
    ],
    "chicken": [
        "Çiğ Tavuk"
    ],
    "clay_ball": [
        "Kil"
    ],
    "clock": [
        "Saat"
    ],
    "comparator": [
        "Redstone Karşılaştırıcı"
    ],
    "compass": [
        "Pusula"
    ],
    "lodestonecompass": [
        "Lodestone Pusula"
    ],
    "cookie": [
        "Kurabiye"
    ],
    "crossbow": [
        "Yaylı Tüfek"
    ],
    "diamond": [
        "Elmas"
    ],
    "repeater": [
        "Redstone Yineleyici"
    ],
    "acacia_door": [
        "Akasya Kapı"
    ],
    "birch_door": [
        "Huş Ağacı Kapı"
    ],
    "dark_oak_door": [
        "Koyu Meşe Kapı"
    ],
    "iron_door": [
        "Demir Kapı"
    ],
    "jungle_door": [
        "Büyük Orman Kapısı"
    ],
    "wooden_door": [
        "Meşe Kapı"
    ],
    "spruce_door": [
        "Çam Kapı"
    ],
    "crimson_door": [
        "Kızıl Kapı"
    ],
    "warped_door": [
        "Çarpık Kapı"
    ],
    "dragon_breath": [
        "Ejderha Nefesi"
    ],
    "dye": [
        "Mürekkep Kesesi",
        "Mürekkep Kesesi",
        "Kırmızı Boya",
        "Yeşil Boya",
        "Kakao Çekirdekleri",
        "Lacivert Taş",
        "Mor Boya",
        "Camgöbeği Boya",
        "Açık Gri Boya",
        "Gri Boya",
        "Pembe Boya",
        "Açık Yeşil Boya",
        "Sarı Boya",
        "Açık Mavi Boya",
        "Eflatun Boya",
        "Turuncu Boya",
        "Kemik Tozu",
        "Siyah Boya",
        "Kahverengi Boya",
        "Mavi Boya",
        "Beyaz Boya"
    ],
    "egg": [
        "Yumurta"
    ],
    "elytra": [
        "Elytra"
    ],
    "emerald": [
        "Zümrüt"
    ],
    "emptyMap": [
        "Boş Harita"
    ],
    "emptyLocatorMap": [
        "Boş Yer Bulucu Harita"
    ],
    "emptyPotion": [
        "Su şişesi"
    ],
    "enchanted_book": [
        "Büyülü Kitap"
    ],
    "end_crystal": [
        "End Kristali"
    ],
    "end_rod": [
        "End Çubuğu"
    ],
    "ender_eye": [
        "Ender Gözü"
    ],
    "ender_pearl": [
        "Ender İncisi"
    ],
    "experience_bottle": [
        "Büyü Şişesi"
    ],
    "feather": [
        "Tüy"
    ],
    "fermented_spider_eye": [
        "Fermente Örümcek Gözü"
    ],
    "fireball": [
        "Ateş Yükü"
    ],
    "fireworks": [
        "Havai Fişek Roket"
    ],
    "fireworksCharge": [
        "Havai Fişek Yıldız"
    ],
    "clownfish": [
        "Tropik Balık"
    ],
    "cooked_fish": [
        "Pişmiş Morina"
    ],
    "fish": [
        "Çiğ Morina"
    ],
    "pufferfish": [
        "Kirpi Balığı"
    ],
    "cooked_salmon": [
        "Pişmiş Somon Balığı"
    ],
    "salmon": [
        "Çiğ Somon Balığı"
    ],
    "fishing_rod": [
        "Olta"
    ],
    "flint": [
        "Çakmaktaşı"
    ],
    "flint_and_steel": [
        "Çakmaktaşı ve Çelik"
    ],
    "flower_pot": [
        "Çiçek Saksısı"
    ],
    "frame": [
        "Eşya Çerçevesi"
    ],
    "ghast_tear": [
        "Ghast gözyaşı"
    ],
    "glass_bottle": [
        "Cam şişe"
    ],
    "gold_nugget": [
        "Altın Parçası"
    ],
    "iron_nugget": [
        "Demir Parçası"
    ],
    "diamond_axe": [
        "Elmas Balta"
    ],
    "golden_axe": [
        "Altın Balta"
    ],
    "iron_axe": [
        "Demir Balta"
    ],
    "stone_axe": [
        "Taş Balta"
    ],
    "wooden_axe": [
        "Tahta Balta"
    ],
    "chainmail_helmet": [
        "Zincir Miğfer"
    ],
    "leather_helmet": [
        "Deri Başlık"
    ],
    "diamond_helmet": [
        "Elmas Miğfer"
    ],
    "golden_helmet": [
        "Altın Miğfer"
    ],
    "iron_helmet": [
        "Demir Miğfer"
    ],
    "diamond_hoe": [
        "Elmas Çapa"
    ],
    "golden_hoe": [
        "Altın Çapa"
    ],
    "iron_hoe": [
        "Demir Çapa"
    ],
    "stone_hoe": [
        "Taş Çapa"
    ],
    "wooden_hoe": [
        "Tahta Çapa"
    ],
    "honey_bottle": [
        "Bal Şişesi"
    ],
    "honeycomb": [
        "Petek"
    ],
    "horsearmordiamond": [
        "Elmas At Zırhı"
    ],
    "horsearmorgold": [
        "Altın At Zırhı"
    ],
    "horsearmoriron": [
        "Demir At Zırhı"
    ],
    "horsearmorleather": [
        "Deri At Zırhı"
    ],
    "gold_ingot": [
        "Altın Külçesi"
    ],
    "iron_ingot": [
        "Demir külçesi"
    ],
    "netherite_ingot": [
        "Netherit Külçesi"
    ],
    "netherite_scrap": [
        "Netherit Hurdası"
    ],
    "netherite_sword": [
        "Netherit Kılıç"
    ],
    "netherite_pickaxe": [
        "Netherit Kazma"
    ],
    "netherite_axe": [
        "Netherit Balta"
    ],
    "netherite_shovel": [
        "Netherit Kürek"
    ],
    "netherite_hoe": [
        "Netherit Çapa"
    ],
    "netherite_boots": [
        "Netherit Çizme"
    ],
    "netherite_leggings": [
        "Netherit Tozluk"
    ],
    "netherite_chestplate": [
        "Netherit Göğüs Zırhı"
    ],
    "netherite_helmet": [
        "Netherit Miğfer"
    ],
    "lead": [
        "Tasma"
    ],
    "leather": [
        "Deri"
    ],
    "leaves": [
        "Yapraklar",
        "Meşe Yaprakları",
        "Çam Yaprakları",
        "Huş Ağacı Yaprakları",
        "Büyük Orman Yaprakları",
        "Akasya Yaprakları",
        "Koyu Meşe Yaprakları"
    ],
    "chainmail_leggings": [
        "Zincir Bacak Zırhı"
    ],
    "leather_leggings": [
        "Deri Pantolon"
    ],
    "diamond_leggings": [
        "Elmas Bacak Zırhı"
    ],
    "golden_leggings": [
        "Altın Bacak Zırhı"
    ],
    "iron_leggings": [
        "Demir Bacak Zırhı"
    ],
    "nautilus_shell": [
        "Notilus Kabuğu"
    ],
    "heart_of_the_sea": [
        "Denizin Kalbi"
    ],
    "magma_cream": [
        "Magma Kremi"
    ],
    "map": [
        "Harita"
    ],
    "melon": [
        "Karpuz"
    ],
    "milk": [
        "Süt"
    ],
    "minecart": [
        "Maden arabası"
    ],
    "chest_minecart": [
        "Sandıklı Maden arabası"
    ],
    "command_block_minecart": [
        "Komut Bloklu Maden Arabası"
    ],
    "minecartFurnace": [
        "Ocaklı Maden arabası"
    ],
    "hopper_minecart": [
        "Hunili Maden arabası"
    ],
    "tnt_minecart": [
        "TNT'li Maden arabası"
    ],
    "trident": [
        "Üç Uçlu Mızrak"
    ],
    "mushroom_stew": [
        "Mantar Yemeği"
    ],
    "muttoncooked": [
        "Pişmiş Koyun Eti"
    ],
    "muttonraw": [
        "Çiğ Koyun Eti"
    ],
    "name_tag": [
        "Ad Etiketi"
    ],
    "netherbrick": [
        "Nether Tuğlası"
    ],
    "quartz": [
        "Nether Kuvarsı"
    ],
    "nether_wart": [
        "Nether Wart"
    ],
    "netherStar": [
        "Nether Yıldızı"
    ],
    "painting": [
        "Tuval"
    ],
    "paper": [
        "Kağıt"
    ],
    "diamond_pickaxe": [
        "Elmas Kazma"
    ],
    "golden_pickaxe": [
        "Altın Kazma"
    ],
    "iron_pickaxe": [
        "Demir Kazma"
    ],
    "stone_pickaxe": [
        "Taş Kazma"
    ],
    "wooden_pickaxe": [
        "Tahta Kazma"
    ],
    "porkchop_cooked": [
        "Pişmiş Domuz Pirzolası"
    ],
    "porkchop": [
        "Çiğ Domuz Pirzolası"
    ],
    "portfolio": [
        "Portfolyo"
    ],
    "potato": [
        "Patates"
    ],
    "baked_potato": [
        "Fırında Patates"
    ],
    "poisonous_potato": [
        "Zehirli Patates"
    ],
    "potion": [
        "İksir"
    ],
    "prismarine_crystals": [
        "Prismarine Kristali"
    ],
    "prismarine_shard": [
        "Prismarine Parçacığı"
    ],
    "pumpkin_pie": [
        "Balkabağı Turtası"
    ],
    "cooked_rabbit": [
        "Pişmiş Tavşan Eti"
    ],
    "rabbit_foot": [
        "Tavşan Ayağı"
    ],
    "rabbit_hide": [
        "Tavşan Postu"
    ],
    "rabbit": [
        "Çiğ Tavşan Eti"
    ],
    "rabbit_stew": [
        "Tavşan Yemeği"
    ],
    "record": [
        "Müzik Diski"
    ],
    "redstone": [
        "Redstone"
    ],
    "reeds": [
        "Şeker Kamışları"
    ],
    "kelp": [
        "Varek"
    ],
    "dried_kelp": [
        "Kurutulmuş Varek"
    ],
    "rotten_flesh": [
        "Çürük et"
    ],
    "ruby": [
        "Yakut"
    ],
    "saddle": [
        "Eyer"
    ],
    "wheat_seeds": [
        "Tohumlar"
    ],
    "beetroot_seeds": [
        "Pancar Tohumu"
    ],
    "melon_seeds": [
        "Karpuz Tohumu"
    ],
    "pumpkin_seeds": [
        "Balkabağı Tohumları"
    ],
    "shears": [
        "Makas"
    ],
    "diamond_shovel": [
        "Elmas Kürek"
    ],
    "golden_shovel": [
        "Altın Kürek"
    ],
    "iron_shovel": [
        "Demir Kürek"
    ],
    "stone_shovel": [
        "Taş Kürek"
    ],
    "wooden_shovel": [
        "Tahta Kürek"
    ],
    "sign": [
        "Meşe Levha"
    ],
    "spruce_sign": [
        "Çam Levha"
    ],
    "birch_sign": [
        "Huş Ağacı Levha"
    ],
    "jungle_sign": [
        "Büyük Orman Levha"
    ],
    "acacia_sign": [
        "Akasya Levha"
    ],
    "darkoak_sign": [
        "Koyu Meşe Levha"
    ],
    "crimson_sign": [
        "Kızıl Levha"
    ],
    "warped_sign": [
        "Çarpık Levha"
    ],
    "skull": [
        "İskelet Kafatası",
        "İskelet Kafatası",
        "Wither İskelet Kafatası",
        "Zombi Kafası",
        "Kafa",
        "Creeper Kafası",
        "Ejderha Kafası"
    ],
    "slime_ball": [
        "Balçık Topu"
    ],
    "snowball": [
        "Kartopu"
    ],
    "speckled_melon": [
        "Parlayan Karpuz"
    ],
    "spider_eye": [
        "Örümcek gözü"
    ],
    "stick": [
        "Sopa"
    ],
    "string": [
        "İp"
    ],
    "sugar": [
        "Şeker"
    ],
    "gunpowder": [
        "Barut"
    ],
    "diamond_sword": [
        "Elmas Kılıç"
    ],
    "golden_sword": [
        "Altın Kılıç"
    ],
    "iron_sword": [
        "Demir Kılıç"
    ],
    "stone_sword": [
        "Taş Kılıç"
    ],
    "wooden_sword": [
        "Tahta Kılıç"
    ],
    "wheat": [
        "Buğday"
    ],
    "writable_book": [
        "Kitap ve Tüy"
    ],
    "written_book": [
        "Yazılı Kitap"
    ],
    "glowstone_dust": [
        "Işık Taşı Tozu"
    ],
    "shield": [
        "Kalkan"
    ],
    "shulker_shell": [
        "Shulker Kabuğu"
    ],
    "totem": [
        "Ölümsüzlük Totemi"
    ],
    "turtle_helmet": [
        "Kaplumbağa Kabuğu"
    ],
    "turtle_shell_piece": [
        "Sırt Pulu"
    ],
    "phantom_membrane": [
        "Fantom Zarı"
    ],
    "sweet_berries": [
        "Tatlı Meyveler"
    ],
    "suspicious_stew": [
        "Şüpheli Yahni"
    ],
    "banner_pattern": [
        "Flama Deseni"
    ],
    "acaciaFence": [
        "Akasya Çiti"
    ],
    "acacia_fence_gate": [
        "Akasya Çit Kapısı"
    ],
    "activator_rail": [
        "Aktivatör Ray"
    ],
    "allow": [
        "İzin ver"
    ],
    "deny": [
        "Reddet"
    ],
    "border_block": [
        "Sınır"
    ],
    "anvil": [
        "Örs",
        "Örs",
        null,
        null,
        null,
        "Hafif Hasarlı Örs",
        null,
        null,
        null,
        "Ağır Hasarlı Örs"
    ],
    "barrier": [
        "Bariyer"
    ],
    "beacon": [
        "İşaret Işığı"
    ],
    "beehive": [
        "Arı Kovanı"
    ],
    "bee_nest": [
        "Arı Yuvası"
    ],
    "target": [
        "Hedef"
    ],
    "bedrock": [
        "Ana kaya"
    ],
    "conduit": [
        "Kanal"
    ],
    "invisibleBedrock": [
        "Görünmez Ana Kaya"
    ],
    "birchFence": [
        "Huş Ağacı Çiti"
    ],
    "birch_fence_gate": [
        "Huş Ağacı Çit Kapısı"
    ],
    "blast_furnace": [
        "Maden Eritme Ocağı"
    ],
    "bone_block": [
        "Kemik Bloğu"
    ],
    "coal_block": [
        "Kömür Bloğu"
    ],
    "diamond_block": [
        "Elmas Bloğu"
    ],
    "emerald_block": [
        "Zümrüt Bloğu"
    ],
    "gold_block": [
        "Altın Bloğu"
    ],
    "iron_block": [
        "Demir Bloğu"
    ],
    "lapis_block": [
        "Lacivert Taş Bloğu"
    ],
    "redstone_block": [
        "Redstone Bloğu"
    ],
    "bookshelf": [
        "Kitaplık"
    ],
    "brick_block": [
        "Tuğla Bloğu"
    ],
    "brown_mushroom": [
        "Kahverengi Mantar"
    ],
    "wooden_button": [
        "Meşe Düğme"
    ],
    "acacia_button": [
        "Akasya Düğme"
    ],
    "birch_button": [
        "Huş Ağacı Düğme"
    ],
    "dark_oak_button": [
        "Koyu Meşe Düğme"
    ],
    "jungle_button": [
        "Büyük Orman Düğme"
    ],
    "spruce_button": [
        "Çam Düğme"
    ],
    "stone_button": [
        "Taş Düğme"
    ],
    "cactus": [
        "Kaktüs"
    ],
    "dried_kelp_block": [
        "Kurutulmuş Varek Bloğu"
    ],
    "carved_pumpkin": [
        "Oyulmuş Balkabağı"
    ],
    "chest": [
        "Sandık"
    ],
    "ender_chest": [
        "Ender Sandığı"
    ],
    "jigsaw": [
        "Yapboz Blok"
    ],
    "honey_block": [
        "Bal Bloku"
    ],
    "honeycomb_block": [
        "Petek Bloku"
    ],
    "lodestone": [
        "Lodestone"
    ],
    "nether_sprouts": [
        "Nether Çimleri"
    ],
    "crimson_stem": [
        "Kızıl Sap"
    ],
    "warped_stem": [
        "Çarpık Sap"
    ],
    "stripped_crimson_stem": [
        "Soyulmuş Kızıl Sap"
    ],
    "stripped_warped_stem": [
        "Soyulmuş Çarpık Sap"
    ],
    "crimson_hyphae": [
        "Kızıl Hif"
    ],
    "warped_hyphae": [
        "Çarpık Hif"
    ],
    "stripped_crimson_hyphae": [
        "Soyulmuş Kızıl Hif"
    ],
    "stripped_warped_hyphae": [
        "Soyulmuş Çarpık Hif"
    ],
    "crimson_planks": [
        "Kızıl Kalaslar"
    ],
    "warped_planks": [
        "Çarpık Kalaslar"
    ],
    "crimson_trapdoor": [
        "Kızıl Tuzak Kapısı"
    ],
    "warped_trapdoor": [
        "Çarpık Tuzak Kapısı"
    ],
    "crimson_standing_sign": [
        "Kızıl Levha"
    ],
    "warped_standing_sign": [
        "Çarpık Levha"
    ],
    "crimson_wall_sign": [
        "Kızıl Levha"
    ],
    "warped_wall_sign": [
        "Çarpık Levha"
    ],
    "crimson_stairs": [
        "Kızıl Merdiven"
    ],
    "warped_stairs": [
        "Çarpık Merdiven"
    ],
    "crimson_fence": [
        "Kızıl Çit"
    ],
    "warped_fence": [
        "Çarpık Çit"
    ],
    "crimson_fence_gate": [
        "Kızıl Çit Kapısı"
    ],
    "warped_fence_gate": [
        "Çarpık Çit Kapısı"
    ],
    "crimson_button": [
        "Kızıl Düğme"
    ],
    "warped_button": [
        "Çarpık Düğme"
    ],
    "crimson_pressure_plate": [
        "Kızıl Baskı Plakası"
    ],
    "warped_pressure_plate": [
        "Çarpık Baskı Plakası"
    ],
    "crimson_slab": [
        "Kızıl Tabla"
    ],
    "warped_slab": [
        "Çarpık Tabla"
    ],
    "crimson_double_slab": [
        "Kızıl Tabla"
    ],
    "warped_double_slab": [
        "Çarpık Tabla"
    ],
    "shroomlight": [
        "Mantar Işığı"
    ],
    "crimson_nylium": [
        "Kızıl Nilyum"
    ],
    "warped_nylium": [
        "Çarpık Nilyum"
    ],
    "basalt": [
        "Bazalt"
    ],
    "polished_basalt": [
        "Cilalı Bazalt"
    ],
    "blackstone": [
        "Karataş"
    ],
    "polished_blackstone_bricks": [
        "Cilalı Karataş Tuğlalar"
    ],
    "cracked_polished_blackstone_bricks": [
        "Çatlak Cilalı Karataş Tuğlalar"
    ],
    "polished_blackstone_brick_stairs": [
        "Cilalı Karataş Tuğla Merdivenler"
    ],
    "blackstone_stairs": [
        "Karataş Merdivenler"
    ],
    "blackstone_wall": [
        "Karataş Duvar"
    ],
    "polished_blackstone_brick_wall": [
        "Cilalı Karataş Tuğla Duvar"
    ],
    "chiseled_polished_blackstone": [
        "Keskin Cilalı Karataş"
    ],
    "gilded_blackstone": [
        "Yaldızlı Karataş"
    ],
    "blackstone_slab": [
        "Karataş Levha"
    ],
    "polished_blackstone_brick_slab": [
        "Cilalı Karataş Tuğla Levha"
    ],
    "chain": [
        "Zincir"
    ],
    "soul_soil": [
        "Ruh Toprağı"
    ],
    "soul_fire": [
        "Ruh Ateşi"
    ],
    "polished_blackstone": [
        "Cilalı Karataş"
    ],
    "polished_blackstone_stairs": [
        "Cilalı Karataş Merdivenler"
    ],
    "polished_blackstone_slab": [
        "Cilalı Karataş Levha"
    ],
    "polished_blackstone_pressure_plate": [
        "Cilalı Karataş Baskı Plakası"
    ],
    "polished_blackstone_button": [
        "Cilalı Karataş Düğme"
    ],
    "polished_blackstone_wall": [
        "Cilalı Karataş Duvar"
    ],
    "soul_campfire": [
        "Ruh Kamp Ateşi"
    ],
    "chiseled_nether_bricks": [
        "Keskin Nether Tuğlaları"
    ],
    "cracked_nether_bricks": [
        "Çatlak Nether Tuğlaları"
    ],
    "quartz_bricks": [
        "Kuvars Tuğlalar"
    ],
    "trapped_chest": [
        "Tuzaklı Sandık"
    ],
    "shulkerBoxWhite": [
        "Beyaz Shulker Kutusu"
    ],
    "shulkerBoxOrange": [
        "Turuncu Shulker Kutusu"
    ],
    "shulkerBoxMagenta": [
        "Eflatun Shulker Kutusu"
    ],
    "shulkerBoxLightBlue": [
        "Açık Mavi Shulker Kutusu"
    ],
    "shulkerBoxYellow": [
        "Sarı Shulker Kutusu"
    ],
    "shulkerBoxLime": [
        "Açık Yeşil Shulker Kutusu"
    ],
    "shulkerBoxPink": [
        "Pembe Shulker Kutusu"
    ],
    "shulkerBoxGray": [
        "Gri Shulker Kutusu"
    ],
    "shulkerBoxSilver": [
        "Açık Gri Shulker Kutusu"
    ],
    "shulkerBoxCyan": [
        "Camgöbeği Shulker Kutusu"
    ],
    "shulkerBoxPurple": [
        "Mor Shulker Kutusu"
    ],
    "shulkerBoxBlue": [
        "Mavi Shulker Kutusu"
    ],
    "shulkerBoxBrown": [
        "Kahverengi Shulker Kutusu"
    ],
    "shulkerBoxGreen": [
        "Yeşil Shulker Kutusu"
    ],
    "shulkerBoxRed": [
        "Kırmızı Shulker Kutusu"
    ],
    "shulkerBoxBlack": [
        "Siyah Shulker Kutusu"
    ],
    "shulkerBox": [
        "Shulker Kutusu"
    ],
    "chorus_flower": [
        "Koro Çiçeği"
    ],
    "chorus_plant": [
        "Koro Bitkisi"
    ],
    "stained_glass": [
        "Beyaz Boyalı Cam",
        "Beyaz Boyalı Cam",
        "Turuncu Boyalı Cam",
        "Eflatun Boyalı Cam",
        "Açık Mavi Boyalı Cam",
        "Sarı Boyalı Cam",
        "Açık Yeşil Boyalı Cam",
        "Pembe Boyalı Cam",
        "Gri Boyalı Cam",
        "Açık Gri Boyalı Cam",
        "Camgöbeği Boyalı Cam",
        "Mor Boyalı Cam",
        "Mavi Boyalı Cam",
        "Kahverengi Boyalı Cam",
        "Yeşil Boyalı Cam",
        "Kırmızı Boyalı Cam",
        "Siyah Boyalı Cam"
    ],
    "stained_glass_pane": [
        "Beyaz Boyalı Cam Levha",
        "Beyaz Boyalı Cam Levha",
        "Turuncu Boyalı Cam Levha",
        "Eflatun Boyalı Cam Levha",
        "Açık Mavi Boyalı Cam Levha",
        "Sarı Boyalı Cam Levha",
        "Açık Yeşil Boyalı Cam Levha",
        "Pembe Boyalı Cam Levha",
        "Gri Boyalı Cam Levha",
        "Açık Gri Boyalı Cam Levha",
        "Camgöbeği Boyalı Cam Levha",
        "Mor Boyalı Cam Levha",
        "Mavi Boyalı Cam Levha",
        "Kahverengi Boyalı Cam Levha",
        "Yeşil Boyalı Cam Levha",
        "Kırmızı Boyalı Cam Levha",
        "Siyah Boyalı Cam Levha"
    ],
    "clay": [
        "Kil Bloğu"
    ],
    "hardened_clay": [
        "Terakota"
    ],
    "stained_hardened_clay": [
        "Terakota",
        "Beyaz Terakota",
        "Turuncu Terakota",
        "Eflatun Terakota",
        "Açık Mavi Terakota",
        "Sarı Terakota",
        "Açık Yeşil Terakota",
        "Pembe Terakota",
        "Gri Terakota",
        "Açık Gri Terakota",
        "Camgöbeği Terakota",
        "Mor Terakota",
        "Mavi Terakota",
        "Kahverengi Terakota",
        "Yeşil Terakota",
        "Kırmızı Terakota",
        "Siyah Terakota"
    ],
    "structure_block": [
        "Yapı Bloku"
    ],
    "structure_void": [
        "Yapı Boşluğu"
    ],
    "wool": [
        "Yün",
        "Beyaz Yün",
        "Turuncu Yün",
        "Eflatun Yün",
        "Açık Mavi Yün",
        "Sarı Yün",
        "Açık Yeşil Yün",
        "Pembe Yün",
        "Gri Yün",
        "Açık Gri Yün",
        "Camgöbeği Yün",
        "Mor Yün",
        "Mavi Yün",
        "Kahverengi Yün",
        "Yeşil Yün",
        "Kırmızı Yün",
        "Siyah Yün"
    ],
    "cobblestone_wall": [
        "Kırık Taş Duvarı",
        "Kırık Taş Duvarı",
        "Yosunlu Kırık Taş Duvarı",
        "Granit Duvar",
        "Diorit Duvar",
        "Andezit Duvar",
        "Kumtaşı Duvar",
        "Tuğla Duvar",
        "Taş Tuğla Duvar",
        "Yosunlu Taş Tuğla Duvar",
        "End Taşı Tuğla Duvar",
        "Nether Tuğla Duvar",
        "Prismarine Duvar",
        "Kırmızı Kumtaşı Duvar",
        "Kırmızı Nether Tuğla Duvar"
    ],
    "cocoa": [
        "Kakao"
    ],
    "command_block": [
        "Komut Bloku"
    ],
    "composter": [
        "Gübreleyici"
    ],
    "light_block": [
        "Işık Bloku"
    ],
    "repeating_command_block": [
        "Komut Bloku yineleniyor"
    ],
    "chain_command_block": [
        "Zincir Komut Bloku"
    ],
    "darkOakFence": [
        "Koyu Meşe Çiti"
    ],
    "dark_oak_fence_gate": [
        "Koyu Meşe Çit Kapısı"
    ],
    "daylight_detector": [
        "Gün Işığı Sensörü"
    ],
    "deadbush": [
        "Ölü Çalı"
    ],
    "detector_rail": [
        "Dedektör Ray"
    ],
    "dirt": [
        "Toprak",
        "Toprak",
        "Çorak Toprak"
    ],
    "podzol": [
        "Podzol"
    ],
    "purpur_block": [
        "Purpur Bloğu",
        "Purpur Bloğu",
        "Yontulmuş Purpur",
        "Purpur Sütunu"
    ],
    "dispenser": [
        "Dağıtıcı"
    ],
    "doorWood": [
        "Ahşap Kapı"
    ],
    "double_plant": [
        "Bitki",
        "Ayçiçeği",
        "Leylak",
        "Çifte Uzun Boylu Ot",
        "Büyük Eğreltiotu",
        "Gül Çalılığı",
        "Şakayık"
    ],
    "dragon_egg": [
        "Ejderha Yumurtası"
    ],
    "dropper": [
        "Bırakıcı"
    ],
    "enchanting_table": [
        "Büyü Masası"
    ],
    "enderChest": [
        "Ender Sandığı"
    ],
    "end_portal_frame": [
        "End Portalı"
    ],
    "farmland": [
        "Ekilebilir Arazi"
    ],
    "fletching_table": [
        "Okçuluk Masası"
    ],
    "fence": [
        "Meşe Çit"
    ],
    "fence_gate": [
        "Meşe Çit Kapısı"
    ],
    "iron_bars": [
        "Demir Çubuklar"
    ],
    "fire": [
        "Ateş"
    ],
    "yellow_flower": [
        "Çiçek",
        "Karahindiba"
    ],
    "red_flower": [
        "Çiçek",
        "Gelincik",
        "Mavi Orkide",
        "Allium",
        "Yaban Çiçeği",
        "Kırmızı Lale",
        "Turuncu Lale",
        "Beyaz Lale",
        "Pembe Lale",
        "Papatya",
        "Mavi Kantaron",
        "Müge"
    ],
    "wither_rose": [
        "Wither Gülü"
    ],
    "furnace": [
        "Ocak"
    ],
    "glass": [
        "Cam"
    ],
    "golden_rail": [
        "Elektrikli Ray"
    ],
    "grass": [
        "Çim Blok"
    ],
    "grass_path": [
        "Çim Patika"
    ],
    "gravel": [
        "Çakıl"
    ],
    "hay_block": [
        "Saman Balyası"
    ],
    "netherrack": [
        "Nether Taşı"
    ],
    "soul_sand": [
        "Ruh Kumu"
    ],
    "hopper": [
        "Huni"
    ],
    "ice": [
        "Buz"
    ],
    "packed_ice": [
        "Paketlenmiş Buz"
    ],
    "blue_ice": [
        "Mavi Buz"
    ],
    "iron_trapdoor": [
        "Demir Tuzak Kapısı"
    ],
    "jukebox": [
        "Müzik Kutusu"
    ],
    "jungleFence": [
        "Büyük Orman Çit"
    ],
    "jungle_fence_gate": [
        "Büyük Orman Çit Kapısı"
    ],
    "ladder": [
        "Merdiven"
    ],
    "flowing_lava": [
        "Lav"
    ],
    "leaves2": [
        "Akasya Yaprakları",
        "Akasya Yaprakları",
        "Koyu Meşe Yaprakları"
    ],
    "lever": [
        "Şalter"
    ],
    "glowstone": [
        "Işık Taşı"
    ],
    "lit_pumpkin": [
        "Kabak Lamba"
    ],
    "lockedchest": [
        "Kilitli Sandık"
    ],
    "log2": [
        "Akasya Kütüğü",
        "Akasya Kütüğü",
        "Koyu Meşe Kütüğü"
    ],
    "log": [
        "Kütük",
        "Meşe Kütüğü",
        "Çam Kütüğü",
        "Huş Ağacı Kütüğü",
        "Büyük Orman Kütüğü"
    ],
    "magma": [
        "Magma Bloğu"
    ],
    "melon_block": [
        "Karpuz"
    ],
    "mob_spawner": [
        "Canavar Yaratıcısı"
    ],
    "monster_egg": [
        "Bulaşmış Taş",
        "Bulaşmış Taş",
        "Bulaşmış Kırık Taş",
        "Bulaşmış Taş Tuğla",
        "Bulaşmış Yosunlu Taş Tuğla",
        "Bulaşmış Çatlak Taş Tuğla",
        "Bulaşmış Keskin Taş Tuğla"
    ],
    "mushroom": [
        "Mantar"
    ],
    "noteblock": [
        "Nota Bloğu"
    ],
    "mycelium": [
        "Miselyum"
    ],
    "nether_brick": [
        "Nether Tuğlası Bloğu"
    ],
    "red_nether_brick": [
        "Kırmızı Nether Tuğlası"
    ],
    "nether_brick_fence": [
        "Nether Tuğlası Çiti"
    ],
    "quartz_ore": [
        "Nether Kuvars Cevheri"
    ],
    "netherreactor": [
        "Nether Reaktör Çekirdeği"
    ],
    "nether_wart_block": [
        "Nether Wart Bloğu"
    ],
    "warped_wart_block": [
        "Çarpık Siğil Bloku"
    ],
    "unlit_redstone_torch": [
        "Redstone Meşalesi"
    ],
    "redstone_torch": [
        "Redstone Meşalesi"
    ],
    "soul_torch": [
        "Ruh Meşalesi"
    ],
    "obsidian": [
        "Obsidiyen"
    ],
    "coal_ore": [
        "Kömür Cevheri"
    ],
    "diamond_ore": [
        "Elmas Cevheri"
    ],
    "emerald_ore": [
        "Zümrüt Cevheri"
    ],
    "gold_ore": [
        "Altın Cevheri"
    ],
    "iron_ore": [
        "Demir Cevheri"
    ],
    "lapis_ore": [
        "Lacivert Taş Cevheri"
    ],
    "redstone_ore": [
        "Redstone Cevheri"
    ],
    "oreRuby": [
        "Yakut Cevheri"
    ],
    "observer": [
        "Gözlemci"
    ],
    "piston": [
        "Piston"
    ],
    "sticky_piston": [
        "Yapışkanlı Piston"
    ],
    "portal": [
        "Portal"
    ],
    "potatoes": [
        "Patatesler"
    ],
    "stone_pressure_plate": [
        "Taş Basınç Plakası"
    ],
    "wooden_pressure_plate": [
        "Meşe Baskı Plakası"
    ],
    "acacia_pressure_plate": [
        "Akasya Baskı Plakası"
    ],
    "birch_pressure_plate": [
        "Huş Ağacı Baskı Plakası"
    ],
    "dark_oak_pressure_plate": [
        "Koyu Meşe Baskı Plakası"
    ],
    "jungle_pressure_plate": [
        "Büyük Orman Baskı Plakası"
    ],
    "spruce_pressure_plate": [
        "Çam Baskı Plakası"
    ],
    "prismarine": [
        "Prismarine",
        "Prismarine",
        "Prismarine Tuğlası",
        "Koyu Prismarine"
    ],
    "pumpkin": [
        "Balkabağı"
    ],
    "pumpkin_stem": [
        "Balkabağı Sapı"
    ],
    "quartz_block": [
        "Kuvars Bloğu",
        "Kuvars Bloğu",
        "Keskin Kuvars Bloğu",
        "Sütun Kuvars Bloğu",
        "Pürüzsüz Kuvars Bloğu"
    ],
    "rail": [
        "Ray"
    ],
    "red_mushroom": [
        "Kırmızı Mantar"
    ],
    "crimson_fungus": [
        "Kızıl Mantar"
    ],
    "warped_fungus": [
        "Çarpık Mantar"
    ],
    "red_mushroom_block": [
        "Kırmızı Mantar Bloku"
    ],
    "red_sandstone": [
        "Kırmızı Kumtaşı",
        "Kırmızı Kumtaşı",
        "Keskin Kırmızı Kumtaşı",
        "Kesik Kırmızı Kumtaşı",
        "Pürüzsüz Kırmızı Kumtaşı"
    ],
    "redstone_wire": [
        "Redstone Tozu"
    ],
    "redstone_lamp": [
        "Redstone Lambası"
    ],
    "sand": [
        "Kum",
        "Kum",
        "Kırmızı Kum"
    ],
    "sandstone": [
        "Kumtaşı",
        "Kumtaşı",
        "Keskin Kumtaşı",
        "Kesik Kumtaşı",
        "Düz Kumtaşı"
    ],
    "sapling": [
        "Meşe Fidanı",
        "Meşe Fidanı",
        "Çam Fidanı",
        "Huş Ağacı Fidanı",
        "Büyük Orman Fidanı",
        "Akasya Fidanı",
        "Koyu Meşe Fidanı"
    ],
    "seaLantern": [
        "Deniz Feneri"
    ],
    "standing_sign": [
        "Tabela"
    ],
    "spruce_standing_sign": [
        "Çam Levha"
    ],
    "birch_standing_sign": [
        "Huş Ağacı Levha"
    ],
    "jungle_standing_sign": [
        "Büyük Orman Levha"
    ],
    "acacia_standing_sign": [
        "Akasya Levha"
    ],
    "darkoak_standing_sign": [
        "Koyu Meşe Levha"
    ],
    "slime": [
        "Balçık Bloğu"
    ],
    "snow": [
        "Kar"
    ],
    "sponge": [
        "Sünger",
        "Sünger",
        "Islak Sünger"
    ],
    "spruceFence": [
        "Çam Çit"
    ],
    "spruce_fence_gate": [
        "Çam Çit Kapısı"
    ],
    "brick_stairs": [
        "Tuğla Merdivenler"
    ],
    "nether_brick_stairs": [
        "Nether Tuğla Merdiveni"
    ],
    "quartz_stairs": [
        "Kuvars Merdivenler"
    ],
    "smooth_quartz_stairs": [
        "Pürüzsüz Kuvars Merdiven"
    ],
    "red_sandstone_stairs": [
        "Kırmızı Kumtaşı Merdiveni"
    ],
    "sandstone_stairs": [
        "Kumtaşı Merdivenler"
    ],
    "stone_stairs": [
        "Kırık Taş Merdiven"
    ],
    "normal_stone_stairs": [
        "Taş Merdiven"
    ],
    "stone_brick_stairs": [
        "Taş Tuğla Merdiveni"
    ],
    "oak_stairs": [
        "Meşe Odunu Merdivenler"
    ],
    "acacia_stairs": [
        "Akasya Odunu Merdivenler"
    ],
    "birch_stairs": [
        "Huş Ağacından Merdivenler"
    ],
    "dark_oak_stairs": [
        "Koyu Meşe Odunu Merdivenleri"
    ],
    "jungle_stairs": [
        "Büyük Orman Odunu Merdivenler"
    ],
    "spruce_stairs": [
        "Çam Odunu Merdivenler"
    ],
    "purpur_stairs": [
        "Purpur Merdivenleri"
    ],
    "prismarine_stairs": [
        "Prismarine Merdivenler"
    ],
    "dark_prismarine_stairs": [
        "Koyu Prismarine Merdivenler"
    ],
    "prismarine_bricks_stairs": [
        "Prismarine Tuğla Merdivenler"
    ],
    "granite_stairs": [
        "Granit Merdiven"
    ],
    "diorite_stairs": [
        "Diorit Merdiven"
    ],
    "andesite_stairs": [
        "Andezit Merdiven"
    ],
    "polished_granite_stairs": [
        "Cilalı Granit Merdiven"
    ],
    "polished_diorite_stairs": [
        "Cilalı Diorit Merdiven"
    ],
    "polished_andesite_stairs": [
        "Cilalı Andezit Merdiven"
    ],
    "mossy_stone_brick_stairs": [
        "Yosunlu Taş Tuğla Merdiven"
    ],
    "smooth_red_sandstone_stairs": [
        "Pürüzsüz Kırmızı Kumtaşı Merdiven"
    ],
    "smooth_sandstone_stairs": [
        "Pürüzsüz Kumtaşı Merdiven"
    ],
    "end_brick_stairs": [
        "End Taşı Tuğla Merdiven"
    ],
    "mossy_cobblestone_stairs": [
        "Yosunlu Kırık Taş Merdiven"
    ],
    "red_nether_brick_stairs": [
        "Kırmızı Nether Tuğla Merdiven"
    ],
    "smooth_stone": [
        "Pürüzsüz Taş"
    ],
    "standing_banner": [
        "Flama",
        "Siyah Flama",
        "Kırmızı Flama",
        "Yeşil Flama",
        "Kahverengi Flama",
        "Mavi Flama",
        "Mor Flama",
        "Camgöbeği Flama",
        "Açık Gri Flama",
        "Gri Flama",
        "Pembe Flama",
        "Açık Yeşil Flama",
        "Sarı Flama",
        "Açık Mavi Flama",
        "Eflatun Flama",
        "Turuncu Flama",
        "Flama"
    ],
    "stone": [
        "Taş",
        "Taş",
        "Granit",
        "Cilalı Granit",
        "Diorit",
        "Cilalı Diorit",
        "Andezit",
        "Cilalı Andezit"
    ],
    "cobblestone": [
        "Kırık Taş"
    ],
    "stonebrick": [
        "Taş Tuğla",
        "Taş Tuğla",
        "Yosunlu Taş Tuğla",
        "Keskin Taş Tuğla"
    ],
    "stonecutter": [
        "Taş Kesici"
    ],
    "stonecutter_block": [
        "Taş Kesici"
    ],
    "mossy_cobblestone": [
        "Yosunlu Kırık Taş"
    ],
    "double_stone_slab": [
        "Taş Basamak",
        "Taş Basamak",
        "Kumtaşı Basamak",
        "Tahta Basamak",
        "Kırık Taş Basamak",
        "Tuğla Basamak",
        "Taş Tuğla Basamak",
        "Kuvars Basamağı",
        "Nether Tuğlası Basamağı"
    ],
    "stone_slab": [
        "Taş Basamak",
        "Pürüzsüz Taş Basamak",
        "Kumtaşı Basamak",
        "Tahta Basamak",
        "Kırık Taş Basamak",
        "Tuğla Basamak",
        "Taş Tuğla Basamak",
        "Kuvars Basamağı",
        "Nether Tuğlası Basamağı"
    ],
    "double_stone_slab2": [
        "Kırmızı Kumtaşı Basamak",
        "Kırmızı Kumtaşı Basamak"
    ],
    "stone_slab2": [
        "Kırmızı Kumtaşı Basamak",
        "Kırmızı Kumtaşı Basamak",
        "Purpur Basamak",
        "Prismarine Basamak",
        "Prismarine Tuğla Basamak",
        "Koyu Prismarine Basamak",
        "Yosunlu Kırık Taş Basamak",
        "Pürüzsüz Kumtaşı Basamak",
        "Kırmızı Nether Tuğla Basamak"
    ],
    "stone_slab3": [
        "End Taşı Tuğla Basamak",
        "End Taşı Tuğla Basamak",
        "Pürüzsüz Kırmızı Kumtaşı Basamak",
        "Cilalı Andezit Basamak",
        "Andezit Basamak",
        "Diorit Basamak",
        "Cilalı Diorit Basamak",
        "Granit Basamak",
        "Cilalı Granit Basamak"
    ],
    "stone_slab4": [
        "Yosunlu Taş Tuğla Basamak",
        "Yosunlu Taş Tuğla Basamak",
        "Pürüzsüz Kuvars Basamak",
        "Taş Basamak",
        "Kesik Kumtaşı Basamak",
        "Kesik Kırmızı Kumtaşı Basamak"
    ],
    "coral_block": [
        "Tüp Mercan Bloğu",
        "Tüp Mercan Bloğu",
        "Beyin Mercanı Bloğu",
        "Balon Mercan Bloğu",
        "Yangın Mercanı Bloğu",
        "Boynuz Mercan Bloğu",
        "Ölü Tüp Mercan Bloğu",
        "Ölü Beyin Mercanı Bloğu",
        "Ölü Balon Mercan Bloğu",
        "Ölü Yangın Mercanı Bloğu",
        "Ölü Boynuz Mercan Bloğu"
    ],
    "tallgrass": [
        "Çimen",
        "Çimen",
        "Eğreltiotu"
    ],
    "seagrass": [
        "Deniz Yosunu",
        "Deniz Yosunu"
    ],
    "sea_pickle": [
        "Deniz Hıyarı"
    ],
    "turtle_egg": [
        "Deniz Kaplumbağası Yumurtası"
    ],
    "coral": [
        "Tüp Mercan",
        "Tüp Mercan",
        "Beyin Mercanı",
        "Balon Mercan",
        "Yangın Mercanı",
        "Boynuz Mercan",
        "Ölü Tüp Mercan",
        "Ölü Beyin Mercanı",
        "Ölü Balon Mercan",
        "Ölü Yangın Mercanı",
        "Ölü Boynuz Mercan"
    ],
    "coral_fan": [
        "Tüp Mercan Yelpazesi",
        "Tüp Mercan Yelpazesi",
        "Beyin Mercanı Yelpazesi",
        "Balon Mercan Yelpazesi",
        "Yangın Mercanı Yelpazesi",
        "Boynuz Mercan Yelpazesi"
    ],
    "coral_fan_dead": [
        "Ölü Tüp Mercan Yelpazesi",
        "Ölü Tüp Mercan Yelpazesi",
        "Ölü Beyin Mercanı Yelpazesi",
        "Ölü Balon Mercan Yelpazesi",
        "Ölü Yangın Mercanı Yelpazesi",
        "Ölü Boynuz Mercan Yelpazesi"
    ],
    "glass_pane": [
        "Cam Levha"
    ],
    "tnt": [
        "TNT"
    ],
    "snow_layer": [
        "Üst Kar"
    ],
    "torch": [
        "Meşale"
    ],
    "trapdoor": [
        "Meşe Tuzak Kapısı"
    ],
    "acacia_trapdoor": [
        "Akasya Tuzak Kapısı"
    ],
    "birch_trapdoor": [
        "Huş Ağacı Tuzak Kapısı"
    ],
    "dark_oak_trapdoor": [
        "Koyu Meşe Tuzak Kapısı"
    ],
    "jungle_trapdoor": [
        "Büyük Orman Tuzak Kapısı"
    ],
    "spruce_trapdoor": [
        "Çam Tuzak Kapısı"
    ],
    "tripWire": [
        "Tetikleyici Mekanizma"
    ],
    "tripwire_hook": [
        "Tetikleyici Mekanizma Kancası"
    ],
    "vine": [
        "Sarmaşık"
    ],
    "weeping_vines": [
        "Ağlayan Sarmaşıklar"
    ],
    "twisting_vines": [
        "Burgulu Sarmaşık"
    ],
    "flowing_water": [
        "Su"
    ],
    "water": [
        "Su"
    ],
    "waterlily": [
        "Nilüfer Yaprağı"
    ],
    "web": [
        "Örümcek Ağı"
    ],
    "heavy_weighted_pressure_plate": [
        "Ağırlıklı Basınç Plakası (Ağır)"
    ],
    "light_weighted_pressure_plate": [
        "Ağırlıklı Basınç Plakası (Hafif)"
    ],
    "end_stone": [
        "End Taşı"
    ],
    "end_bricks": [
        "End Taşı Tuğlalar"
    ],
    "planks": [
        "Ahşap Kalaslar",
        "Meşe Ağacı Tahtası",
        "Çam Odunu Kalası",
        "Huş Ağacından Kalaslar",
        "Büyük Orman Ağacı Kalası",
        "Akasya Odunu Kalasları",
        "Koyu Meşe Odunu Tahtası"
    ],
    "wooden_slab": [
        "Ahşap Basamak",
        "Meşe Ağacı Basamağı",
        "Çam Basamağı",
        "Huş Odunu Basamağı",
        "Büyük Orman Odunu Basamağı",
        "Akasya Odunu Basamağı",
        "Koyu Meşe Ağacı Basamağı"
    ],
    "carpet": [
        "Halı",
        "Siyah Halı",
        "Kırmızı Halı",
        "Yeşil Halı",
        "Kahverengi Halı",
        "Mavi Halı",
        "Mor Halı",
        "Camgöbeği Halı",
        "Açık Gri Halı",
        "Gri Halı",
        "Pembe Halı",
        "Açık Yeşil Halı",
        "Sarı Halı",
        "Açık Mavi Halı",
        "Eflatun Halı",
        "Turuncu Halı",
        "Beyaz Halı"
    ],
    "crafting_table": [
        "Eşya Yapma Masası"
    ],
    "white_glazed_terracotta": [
        "Beyaz Cilalı Terakota",
        "Beyaz Cilalı Terakota"
    ],
    "orange_glazed_terracotta": [
        "Turuncu Cilalı Terakota",
        "Turuncu Cilalı Terakota"
    ],
    "magenta_glazed_terracotta": [
        "Eflatun Cilalı Terakota",
        "Eflatun Cilalı Terakota"
    ],
    "light_blue_glazed_terracotta": [
        "Açık Mavi Cilalı Terakota",
        "Açık Mavi Cilalı Terakota"
    ],
    "yellow_glazed_terracotta": [
        "Sarı Cilalı Terakota",
        "Sarı Cilalı Terakota"
    ],
    "lime_glazed_terracotta": [
        "Açık Yeşil Cilalı Terakota",
        "Açık Yeşil Cilalı Terakota"
    ],
    "pink_glazed_terracotta": [
        "Pembe Cilalı Terakota",
        "Pembe Cilalı Terakota"
    ],
    "gray_glazed_terracotta": [
        "Gri Cilalı Terakota",
        "Gri Cilalı Terakota"
    ],
    "silver_glazed_terracotta": [
        "Açık Gri Cilalı Terakota",
        "Açık Gri Cilalı Terakota"
    ],
    "cyan_glazed_terracotta": [
        "Camgöbeği Cilalı Terakota",
        "Camgöbeği Cilalı Terakota"
    ],
    "purple_glazed_terracotta": [
        "Mor Cilalı Terakota",
        "Mor Cilalı Terakota"
    ],
    "blue_glazed_terracotta": [
        "Mavi Cilalı Terakota",
        "Mavi Cilalı Terakota"
    ],
    "brown_glazed_terracotta": [
        "Kahverengi Cilalı Terakota",
        "Kahverengi Cilalı Terakota"
    ],
    "green_glazed_terracotta": [
        "Yeşil Cilalı Terakota",
        "Yeşil Cilalı Terakota"
    ],
    "red_glazed_terracotta": [
        "Kırmızı Cilalı Terakota",
        "Kırmızı Cilalı Terakota"
    ],
    "black_glazed_terracotta": [
        "Siyah Cilalı Terakota",
        "Siyah Cilalı Terakota"
    ],
    "concrete": [
        "Beyaz Beton",
        "Beyaz Beton",
        "Turuncu Beton",
        "Eflatun Beton",
        "Açık Mavi Beton",
        "Sarı Beton",
        "Açık Yeşil Beton",
        "Pembe Beton",
        "Gri Beton",
        "Açık Gri Beton",
        "Camgöbeği Beton",
        "Mor Beton",
        "Mavi Beton",
        "Kahverengi Beton",
        "Yeşil Beton",
        "Kırmızı Beton",
        "Siyah Beton"
    ],
    "glazedTerracottaWhite": [
        "Beyaz Cilalı Terakota"
    ],
    "glazedTerracottaOrange": [
        "Turuncu Cilalı Terakota"
    ],
    "glazedTerracottaMagenta": [
        "Eflatun Cilalı Terakota"
    ],
    "glazedTerracottaLightBlue": [
        "Açık Mavi Cilalı Terakota"
    ],
    "glazedTerracottaYellow": [
        "Sarı Cilalı Terakota"
    ],
    "glazedTerracottaLime": [
        "Açık Yeşil Cilalı Terakota"
    ],
    "glazedTerracottaPink": [
        "Pembe Cilalı Terakota"
    ],
    "glazedTerracottaGray": [
        "Gri Cilalı Terakota"
    ],
    "glazedTerracottaSilver": [
        "Açık Gri Cilalı Terakota"
    ],
    "glazedTerracottaCyan": [
        "Camgöbeği Cilalı Terakota"
    ],
    "glazedTerracottaPurple": [
        "Mor Cilalı Terakota"
    ],
    "glazedTerracottaBlue": [
        "Mavi Cilalı Terakota"
    ],
    "glazedTerracottaBrown": [
        "Kahverengi Cilalı Terakota"
    ],
    "glazedTerracottaGreen": [
        "Yeşil Cilalı Terakota"
    ],
    "glazedTerracottaRed": [
        "Kırmızı Cilalı Terakota"
    ],
    "glazedTerracottaBlack": [
        "Siyah Cilalı Terakota"
    ],
    "concretePowder": [
        "Beyaz Beton Tozu",
        "Beyaz Beton Tozu",
        "Turuncu Beton Tozu",
        "Eflatun Beton Tozu",
        "Açık Mavi Beton Tozu",
        "Sarı Beton Tozu",
        "Açık Yeşil Beton Tozu",
        "Pembe Beton Tozu",
        "Gri Beton Tozu",
        "Açık Gri Beton Tozu",
        "Camgöbeği Beton Tozu",
        "Mor Beton Tozu",
        "Mavi Beton Tozu",
        "Kahverengi Beton Tozu",
        "Yeşil Beton Tozu",
        "Kırmızı Beton Tozu",
        "Siyah Beton Tozu"
    ],
    "stripped_spruce_log": [
        "Soyulmuş Çam Kütüğü"
    ],
    "stripped_dark_oak_log": [
        "Soyulmuş Koyu Meşe Kütüğü"
    ],
    "stripped_birch_log": [
        "Soyulmuş Huş Ağacı Kütüğü"
    ],
    "stripped_jungle_log": [
        "Soyulmuş Büyük Orman Kütüğü"
    ],
    "stripped_oak_log": [
        "Soyulmuş Meşe Kütüğü"
    ],
    "stripped_acacia_log": [
        "Soyulmuş Akasya Kütüğü"
    ],
    "bamboo": [
        "Bambu"
    ],
    "scaffolding": [
        "İskele"
    ],
    "grindstone": [
        "Bileği Taşı"
    ],
    "cartography_table": [
        "Haritacılık Masası"
    ],
    "lantern": [
        "Fener"
    ],
    "soul_lantern": [
        "Ruh Feneri"
    ],
    "smoker": [
        "Körük"
    ],
    "smithing_table": [
        "Nalbant Masası"
    ],
    "barrel": [
        "Fıçı"
    ],
    "campfire": [
        "Kamp Ateşi"
    ],
    "loom": [
        "Tezgah"
    ],
    "lectern": [
        "Kürsü"
    ],
    "sweet_berry_bush": [
        "Tatlı Meyve Çalılığı"
    ],
    "wood": [
        "Meşe Odunu",
        "Meşe Odunu",
        "Çam Odunu",
        "Huş Ağacı Odunu",
        "Büyük Orman Odunu",
        "Akasya Odunu",
        "Koyu Meşe Odunu",
        null,
        null,
        "Soyulmuş Meşe Odunu",
        "Soyulmuş Çam Odunu",
        "Soyulmuş Huş Ağacı Odunu",
        "Soyulmuş Büyük Orman Odunu",
        "Soyulmuş Akasya Odunu",
        "Soyulmuş Koyu Meşe Odunu"
    ],
    "netherite_block": [
        "Netherit Bloku"
    ],
    "ancient_debris": [
        "Antik Enkaz"
    ],
    "nether_gold_ore": [
        "Nether Altın Cevheri"
    ],
    "respawn_anchor": [
        "Yeniden Oluşum Çapası"
    ],
    "crying_obsidian": [
        "Ağlayan Obsidiyen"
    ]
}
};
freeze(lang_data);
export = lang_data;

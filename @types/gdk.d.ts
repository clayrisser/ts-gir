import * as Pango from './pango';
import * as GLib from './g-lib';
import * as cairo from './cairo';
import * as GdkPixbuf from './gdk-pixbuf';
import * as GObject from './g-object';
import * as Gio from './gio';
export const BUTTON_MIDDLE: number;
export const BUTTON_PRIMARY: number;
export const BUTTON_SECONDARY: number;
export const CURRENT_TIME: number;
export const EVENT_PROPAGATE: boolean;
export const EVENT_STOP: boolean;
export const KEY_0: number;
export const KEY_1: number;
export const KEY_2: number;
export const KEY_3: number;
export const KEY_3270_AltCursor: number;
export const KEY_3270_Attn: number;
export const KEY_3270_BackTab: number;
export const KEY_3270_ChangeScreen: number;
export const KEY_3270_Copy: number;
export const KEY_3270_CursorBlink: number;
export const KEY_3270_CursorSelect: number;
export const KEY_3270_DeleteWord: number;
export const KEY_3270_Duplicate: number;
export const KEY_3270_Enter: number;
export const KEY_3270_EraseEOF: number;
export const KEY_3270_EraseInput: number;
export const KEY_3270_ExSelect: number;
export const KEY_3270_FieldMark: number;
export const KEY_3270_Ident: number;
export const KEY_3270_Jump: number;
export const KEY_3270_KeyClick: number;
export const KEY_3270_Left2: number;
export const KEY_3270_PA1: number;
export const KEY_3270_PA2: number;
export const KEY_3270_PA3: number;
export const KEY_3270_Play: number;
export const KEY_3270_PrintScreen: number;
export const KEY_3270_Quit: number;
export const KEY_3270_Record: number;
export const KEY_3270_Reset: number;
export const KEY_3270_Right2: number;
export const KEY_3270_Rule: number;
export const KEY_3270_Setup: number;
export const KEY_3270_Test: number;
export const KEY_4: number;
export const KEY_5: number;
export const KEY_6: number;
export const KEY_7: number;
export const KEY_8: number;
export const KEY_9: number;
export const KEY_A: number;
export const KEY_AE: number;
export const KEY_Aacute: number;
export const KEY_Abelowdot: number;
export const KEY_Abreve: number;
export const KEY_Abreveacute: number;
export const KEY_Abrevebelowdot: number;
export const KEY_Abrevegrave: number;
export const KEY_Abrevehook: number;
export const KEY_Abrevetilde: number;
export const KEY_AccessX_Enable: number;
export const KEY_AccessX_Feedback_Enable: number;
export const KEY_Acircumflex: number;
export const KEY_Acircumflexacute: number;
export const KEY_Acircumflexbelowdot: number;
export const KEY_Acircumflexgrave: number;
export const KEY_Acircumflexhook: number;
export const KEY_Acircumflextilde: number;
export const KEY_AddFavorite: number;
export const KEY_Adiaeresis: number;
export const KEY_Agrave: number;
export const KEY_Ahook: number;
export const KEY_Alt_L: number;
export const KEY_Alt_R: number;
export const KEY_Amacron: number;
export const KEY_Aogonek: number;
export const KEY_ApplicationLeft: number;
export const KEY_ApplicationRight: number;
export const KEY_Arabic_0: number;
export const KEY_Arabic_1: number;
export const KEY_Arabic_2: number;
export const KEY_Arabic_3: number;
export const KEY_Arabic_4: number;
export const KEY_Arabic_5: number;
export const KEY_Arabic_6: number;
export const KEY_Arabic_7: number;
export const KEY_Arabic_8: number;
export const KEY_Arabic_9: number;
export const KEY_Arabic_ain: number;
export const KEY_Arabic_alef: number;
export const KEY_Arabic_alefmaksura: number;
export const KEY_Arabic_beh: number;
export const KEY_Arabic_comma: number;
export const KEY_Arabic_dad: number;
export const KEY_Arabic_dal: number;
export const KEY_Arabic_damma: number;
export const KEY_Arabic_dammatan: number;
export const KEY_Arabic_ddal: number;
export const KEY_Arabic_farsi_yeh: number;
export const KEY_Arabic_fatha: number;
export const KEY_Arabic_fathatan: number;
export const KEY_Arabic_feh: number;
export const KEY_Arabic_fullstop: number;
export const KEY_Arabic_gaf: number;
export const KEY_Arabic_ghain: number;
export const KEY_Arabic_ha: number;
export const KEY_Arabic_hah: number;
export const KEY_Arabic_hamza: number;
export const KEY_Arabic_hamza_above: number;
export const KEY_Arabic_hamza_below: number;
export const KEY_Arabic_hamzaonalef: number;
export const KEY_Arabic_hamzaonwaw: number;
export const KEY_Arabic_hamzaonyeh: number;
export const KEY_Arabic_hamzaunderalef: number;
export const KEY_Arabic_heh: number;
export const KEY_Arabic_heh_doachashmee: number;
export const KEY_Arabic_heh_goal: number;
export const KEY_Arabic_jeem: number;
export const KEY_Arabic_jeh: number;
export const KEY_Arabic_kaf: number;
export const KEY_Arabic_kasra: number;
export const KEY_Arabic_kasratan: number;
export const KEY_Arabic_keheh: number;
export const KEY_Arabic_khah: number;
export const KEY_Arabic_lam: number;
export const KEY_Arabic_madda_above: number;
export const KEY_Arabic_maddaonalef: number;
export const KEY_Arabic_meem: number;
export const KEY_Arabic_noon: number;
export const KEY_Arabic_noon_ghunna: number;
export const KEY_Arabic_peh: number;
export const KEY_Arabic_percent: number;
export const KEY_Arabic_qaf: number;
export const KEY_Arabic_question_mark: number;
export const KEY_Arabic_ra: number;
export const KEY_Arabic_rreh: number;
export const KEY_Arabic_sad: number;
export const KEY_Arabic_seen: number;
export const KEY_Arabic_semicolon: number;
export const KEY_Arabic_shadda: number;
export const KEY_Arabic_sheen: number;
export const KEY_Arabic_sukun: number;
export const KEY_Arabic_superscript_alef: number;
export const KEY_Arabic_switch: number;
export const KEY_Arabic_tah: number;
export const KEY_Arabic_tatweel: number;
export const KEY_Arabic_tcheh: number;
export const KEY_Arabic_teh: number;
export const KEY_Arabic_tehmarbuta: number;
export const KEY_Arabic_thal: number;
export const KEY_Arabic_theh: number;
export const KEY_Arabic_tteh: number;
export const KEY_Arabic_veh: number;
export const KEY_Arabic_waw: number;
export const KEY_Arabic_yeh: number;
export const KEY_Arabic_yeh_baree: number;
export const KEY_Arabic_zah: number;
export const KEY_Arabic_zain: number;
export const KEY_Aring: number;
export const KEY_Armenian_AT: number;
export const KEY_Armenian_AYB: number;
export const KEY_Armenian_BEN: number;
export const KEY_Armenian_CHA: number;
export const KEY_Armenian_DA: number;
export const KEY_Armenian_DZA: number;
export const KEY_Armenian_E: number;
export const KEY_Armenian_FE: number;
export const KEY_Armenian_GHAT: number;
export const KEY_Armenian_GIM: number;
export const KEY_Armenian_HI: number;
export const KEY_Armenian_HO: number;
export const KEY_Armenian_INI: number;
export const KEY_Armenian_JE: number;
export const KEY_Armenian_KE: number;
export const KEY_Armenian_KEN: number;
export const KEY_Armenian_KHE: number;
export const KEY_Armenian_LYUN: number;
export const KEY_Armenian_MEN: number;
export const KEY_Armenian_NU: number;
export const KEY_Armenian_O: number;
export const KEY_Armenian_PE: number;
export const KEY_Armenian_PYUR: number;
export const KEY_Armenian_RA: number;
export const KEY_Armenian_RE: number;
export const KEY_Armenian_SE: number;
export const KEY_Armenian_SHA: number;
export const KEY_Armenian_TCHE: number;
export const KEY_Armenian_TO: number;
export const KEY_Armenian_TSA: number;
export const KEY_Armenian_TSO: number;
export const KEY_Armenian_TYUN: number;
export const KEY_Armenian_VEV: number;
export const KEY_Armenian_VO: number;
export const KEY_Armenian_VYUN: number;
export const KEY_Armenian_YECH: number;
export const KEY_Armenian_ZA: number;
export const KEY_Armenian_ZHE: number;
export const KEY_Armenian_accent: number;
export const KEY_Armenian_amanak: number;
export const KEY_Armenian_apostrophe: number;
export const KEY_Armenian_at: number;
export const KEY_Armenian_ayb: number;
export const KEY_Armenian_ben: number;
export const KEY_Armenian_but: number;
export const KEY_Armenian_cha: number;
export const KEY_Armenian_da: number;
export const KEY_Armenian_dza: number;
export const KEY_Armenian_e: number;
export const KEY_Armenian_exclam: number;
export const KEY_Armenian_fe: number;
export const KEY_Armenian_full_stop: number;
export const KEY_Armenian_ghat: number;
export const KEY_Armenian_gim: number;
export const KEY_Armenian_hi: number;
export const KEY_Armenian_ho: number;
export const KEY_Armenian_hyphen: number;
export const KEY_Armenian_ini: number;
export const KEY_Armenian_je: number;
export const KEY_Armenian_ke: number;
export const KEY_Armenian_ken: number;
export const KEY_Armenian_khe: number;
export const KEY_Armenian_ligature_ew: number;
export const KEY_Armenian_lyun: number;
export const KEY_Armenian_men: number;
export const KEY_Armenian_nu: number;
export const KEY_Armenian_o: number;
export const KEY_Armenian_paruyk: number;
export const KEY_Armenian_pe: number;
export const KEY_Armenian_pyur: number;
export const KEY_Armenian_question: number;
export const KEY_Armenian_ra: number;
export const KEY_Armenian_re: number;
export const KEY_Armenian_se: number;
export const KEY_Armenian_separation_mark: number;
export const KEY_Armenian_sha: number;
export const KEY_Armenian_shesht: number;
export const KEY_Armenian_tche: number;
export const KEY_Armenian_to: number;
export const KEY_Armenian_tsa: number;
export const KEY_Armenian_tso: number;
export const KEY_Armenian_tyun: number;
export const KEY_Armenian_verjaket: number;
export const KEY_Armenian_vev: number;
export const KEY_Armenian_vo: number;
export const KEY_Armenian_vyun: number;
export const KEY_Armenian_yech: number;
export const KEY_Armenian_yentamna: number;
export const KEY_Armenian_za: number;
export const KEY_Armenian_zhe: number;
export const KEY_Atilde: number;
export const KEY_AudibleBell_Enable: number;
export const KEY_AudioCycleTrack: number;
export const KEY_AudioForward: number;
export const KEY_AudioLowerVolume: number;
export const KEY_AudioMedia: number;
export const KEY_AudioMicMute: number;
export const KEY_AudioMute: number;
export const KEY_AudioNext: number;
export const KEY_AudioPause: number;
export const KEY_AudioPlay: number;
export const KEY_AudioPrev: number;
export const KEY_AudioRaiseVolume: number;
export const KEY_AudioRandomPlay: number;
export const KEY_AudioRecord: number;
export const KEY_AudioRepeat: number;
export const KEY_AudioRewind: number;
export const KEY_AudioStop: number;
export const KEY_Away: number;
export const KEY_B: number;
export const KEY_Babovedot: number;
export const KEY_Back: number;
export const KEY_BackForward: number;
export const KEY_BackSpace: number;
export const KEY_Battery: number;
export const KEY_Begin: number;
export const KEY_Blue: number;
export const KEY_Bluetooth: number;
export const KEY_Book: number;
export const KEY_BounceKeys_Enable: number;
export const KEY_Break: number;
export const KEY_BrightnessAdjust: number;
export const KEY_Byelorussian_SHORTU: number;
export const KEY_Byelorussian_shortu: number;
export const KEY_C: number;
export const KEY_CD: number;
export const KEY_CH: number;
export const KEY_C_H: number;
export const KEY_C_h: number;
export const KEY_Cabovedot: number;
export const KEY_Cacute: number;
export const KEY_Calculator: number;
export const KEY_Calendar: number;
export const KEY_Cancel: number;
export const KEY_Caps_Lock: number;
export const KEY_Ccaron: number;
export const KEY_Ccedilla: number;
export const KEY_Ccircumflex: number;
export const KEY_Ch: number;
export const KEY_Clear: number;
export const KEY_ClearGrab: number;
export const KEY_Close: number;
export const KEY_Codeinput: number;
export const KEY_ColonSign: number;
export const KEY_Community: number;
export const KEY_ContrastAdjust: number;
export const KEY_Control_L: number;
export const KEY_Control_R: number;
export const KEY_Copy: number;
export const KEY_CruzeiroSign: number;
export const KEY_Cut: number;
export const KEY_CycleAngle: number;
export const KEY_Cyrillic_A: number;
export const KEY_Cyrillic_BE: number;
export const KEY_Cyrillic_CHE: number;
export const KEY_Cyrillic_CHE_descender: number;
export const KEY_Cyrillic_CHE_vertstroke: number;
export const KEY_Cyrillic_DE: number;
export const KEY_Cyrillic_DZHE: number;
export const KEY_Cyrillic_E: number;
export const KEY_Cyrillic_EF: number;
export const KEY_Cyrillic_EL: number;
export const KEY_Cyrillic_EM: number;
export const KEY_Cyrillic_EN: number;
export const KEY_Cyrillic_EN_descender: number;
export const KEY_Cyrillic_ER: number;
export const KEY_Cyrillic_ES: number;
export const KEY_Cyrillic_GHE: number;
export const KEY_Cyrillic_GHE_bar: number;
export const KEY_Cyrillic_HA: number;
export const KEY_Cyrillic_HARDSIGN: number;
export const KEY_Cyrillic_HA_descender: number;
export const KEY_Cyrillic_I: number;
export const KEY_Cyrillic_IE: number;
export const KEY_Cyrillic_IO: number;
export const KEY_Cyrillic_I_macron: number;
export const KEY_Cyrillic_JE: number;
export const KEY_Cyrillic_KA: number;
export const KEY_Cyrillic_KA_descender: number;
export const KEY_Cyrillic_KA_vertstroke: number;
export const KEY_Cyrillic_LJE: number;
export const KEY_Cyrillic_NJE: number;
export const KEY_Cyrillic_O: number;
export const KEY_Cyrillic_O_bar: number;
export const KEY_Cyrillic_PE: number;
export const KEY_Cyrillic_SCHWA: number;
export const KEY_Cyrillic_SHA: number;
export const KEY_Cyrillic_SHCHA: number;
export const KEY_Cyrillic_SHHA: number;
export const KEY_Cyrillic_SHORTI: number;
export const KEY_Cyrillic_SOFTSIGN: number;
export const KEY_Cyrillic_TE: number;
export const KEY_Cyrillic_TSE: number;
export const KEY_Cyrillic_U: number;
export const KEY_Cyrillic_U_macron: number;
export const KEY_Cyrillic_U_straight: number;
export const KEY_Cyrillic_U_straight_bar: number;
export const KEY_Cyrillic_VE: number;
export const KEY_Cyrillic_YA: number;
export const KEY_Cyrillic_YERU: number;
export const KEY_Cyrillic_YU: number;
export const KEY_Cyrillic_ZE: number;
export const KEY_Cyrillic_ZHE: number;
export const KEY_Cyrillic_ZHE_descender: number;
export const KEY_Cyrillic_a: number;
export const KEY_Cyrillic_be: number;
export const KEY_Cyrillic_che: number;
export const KEY_Cyrillic_che_descender: number;
export const KEY_Cyrillic_che_vertstroke: number;
export const KEY_Cyrillic_de: number;
export const KEY_Cyrillic_dzhe: number;
export const KEY_Cyrillic_e: number;
export const KEY_Cyrillic_ef: number;
export const KEY_Cyrillic_el: number;
export const KEY_Cyrillic_em: number;
export const KEY_Cyrillic_en: number;
export const KEY_Cyrillic_en_descender: number;
export const KEY_Cyrillic_er: number;
export const KEY_Cyrillic_es: number;
export const KEY_Cyrillic_ghe: number;
export const KEY_Cyrillic_ghe_bar: number;
export const KEY_Cyrillic_ha: number;
export const KEY_Cyrillic_ha_descender: number;
export const KEY_Cyrillic_hardsign: number;
export const KEY_Cyrillic_i: number;
export const KEY_Cyrillic_i_macron: number;
export const KEY_Cyrillic_ie: number;
export const KEY_Cyrillic_io: number;
export const KEY_Cyrillic_je: number;
export const KEY_Cyrillic_ka: number;
export const KEY_Cyrillic_ka_descender: number;
export const KEY_Cyrillic_ka_vertstroke: number;
export const KEY_Cyrillic_lje: number;
export const KEY_Cyrillic_nje: number;
export const KEY_Cyrillic_o: number;
export const KEY_Cyrillic_o_bar: number;
export const KEY_Cyrillic_pe: number;
export const KEY_Cyrillic_schwa: number;
export const KEY_Cyrillic_sha: number;
export const KEY_Cyrillic_shcha: number;
export const KEY_Cyrillic_shha: number;
export const KEY_Cyrillic_shorti: number;
export const KEY_Cyrillic_softsign: number;
export const KEY_Cyrillic_te: number;
export const KEY_Cyrillic_tse: number;
export const KEY_Cyrillic_u: number;
export const KEY_Cyrillic_u_macron: number;
export const KEY_Cyrillic_u_straight: number;
export const KEY_Cyrillic_u_straight_bar: number;
export const KEY_Cyrillic_ve: number;
export const KEY_Cyrillic_ya: number;
export const KEY_Cyrillic_yeru: number;
export const KEY_Cyrillic_yu: number;
export const KEY_Cyrillic_ze: number;
export const KEY_Cyrillic_zhe: number;
export const KEY_Cyrillic_zhe_descender: number;
export const KEY_D: number;
export const KEY_DOS: number;
export const KEY_Dabovedot: number;
export const KEY_Dcaron: number;
export const KEY_Delete: number;
export const KEY_Display: number;
export const KEY_Documents: number;
export const KEY_DongSign: number;
export const KEY_Down: number;
export const KEY_Dstroke: number;
export const KEY_E: number;
export const KEY_ENG: number;
export const KEY_ETH: number;
export const KEY_EZH: number;
export const KEY_Eabovedot: number;
export const KEY_Eacute: number;
export const KEY_Ebelowdot: number;
export const KEY_Ecaron: number;
export const KEY_Ecircumflex: number;
export const KEY_Ecircumflexacute: number;
export const KEY_Ecircumflexbelowdot: number;
export const KEY_Ecircumflexgrave: number;
export const KEY_Ecircumflexhook: number;
export const KEY_Ecircumflextilde: number;
export const KEY_EcuSign: number;
export const KEY_Ediaeresis: number;
export const KEY_Egrave: number;
export const KEY_Ehook: number;
export const KEY_Eisu_Shift: number;
export const KEY_Eisu_toggle: number;
export const KEY_Eject: number;
export const KEY_Emacron: number;
export const KEY_End: number;
export const KEY_Eogonek: number;
export const KEY_Escape: number;
export const KEY_Eth: number;
export const KEY_Etilde: number;
export const KEY_EuroSign: number;
export const KEY_Excel: number;
export const KEY_Execute: number;
export const KEY_Explorer: number;
export const KEY_F: number;
export const KEY_F1: number;
export const KEY_F10: number;
export const KEY_F11: number;
export const KEY_F12: number;
export const KEY_F13: number;
export const KEY_F14: number;
export const KEY_F15: number;
export const KEY_F16: number;
export const KEY_F17: number;
export const KEY_F18: number;
export const KEY_F19: number;
export const KEY_F2: number;
export const KEY_F20: number;
export const KEY_F21: number;
export const KEY_F22: number;
export const KEY_F23: number;
export const KEY_F24: number;
export const KEY_F25: number;
export const KEY_F26: number;
export const KEY_F27: number;
export const KEY_F28: number;
export const KEY_F29: number;
export const KEY_F3: number;
export const KEY_F30: number;
export const KEY_F31: number;
export const KEY_F32: number;
export const KEY_F33: number;
export const KEY_F34: number;
export const KEY_F35: number;
export const KEY_F4: number;
export const KEY_F5: number;
export const KEY_F6: number;
export const KEY_F7: number;
export const KEY_F8: number;
export const KEY_F9: number;
export const KEY_FFrancSign: number;
export const KEY_Fabovedot: number;
export const KEY_Farsi_0: number;
export const KEY_Farsi_1: number;
export const KEY_Farsi_2: number;
export const KEY_Farsi_3: number;
export const KEY_Farsi_4: number;
export const KEY_Farsi_5: number;
export const KEY_Farsi_6: number;
export const KEY_Farsi_7: number;
export const KEY_Farsi_8: number;
export const KEY_Farsi_9: number;
export const KEY_Farsi_yeh: number;
export const KEY_Favorites: number;
export const KEY_Finance: number;
export const KEY_Find: number;
export const KEY_First_Virtual_Screen: number;
export const KEY_Forward: number;
export const KEY_FrameBack: number;
export const KEY_FrameForward: number;
export const KEY_G: number;
export const KEY_Gabovedot: number;
export const KEY_Game: number;
export const KEY_Gbreve: number;
export const KEY_Gcaron: number;
export const KEY_Gcedilla: number;
export const KEY_Gcircumflex: number;
export const KEY_Georgian_an: number;
export const KEY_Georgian_ban: number;
export const KEY_Georgian_can: number;
export const KEY_Georgian_char: number;
export const KEY_Georgian_chin: number;
export const KEY_Georgian_cil: number;
export const KEY_Georgian_don: number;
export const KEY_Georgian_en: number;
export const KEY_Georgian_fi: number;
export const KEY_Georgian_gan: number;
export const KEY_Georgian_ghan: number;
export const KEY_Georgian_hae: number;
export const KEY_Georgian_har: number;
export const KEY_Georgian_he: number;
export const KEY_Georgian_hie: number;
export const KEY_Georgian_hoe: number;
export const KEY_Georgian_in: number;
export const KEY_Georgian_jhan: number;
export const KEY_Georgian_jil: number;
export const KEY_Georgian_kan: number;
export const KEY_Georgian_khar: number;
export const KEY_Georgian_las: number;
export const KEY_Georgian_man: number;
export const KEY_Georgian_nar: number;
export const KEY_Georgian_on: number;
export const KEY_Georgian_par: number;
export const KEY_Georgian_phar: number;
export const KEY_Georgian_qar: number;
export const KEY_Georgian_rae: number;
export const KEY_Georgian_san: number;
export const KEY_Georgian_shin: number;
export const KEY_Georgian_tan: number;
export const KEY_Georgian_tar: number;
export const KEY_Georgian_un: number;
export const KEY_Georgian_vin: number;
export const KEY_Georgian_we: number;
export const KEY_Georgian_xan: number;
export const KEY_Georgian_zen: number;
export const KEY_Georgian_zhar: number;
export const KEY_Go: number;
export const KEY_Greek_ALPHA: number;
export const KEY_Greek_ALPHAaccent: number;
export const KEY_Greek_BETA: number;
export const KEY_Greek_CHI: number;
export const KEY_Greek_DELTA: number;
export const KEY_Greek_EPSILON: number;
export const KEY_Greek_EPSILONaccent: number;
export const KEY_Greek_ETA: number;
export const KEY_Greek_ETAaccent: number;
export const KEY_Greek_GAMMA: number;
export const KEY_Greek_IOTA: number;
export const KEY_Greek_IOTAaccent: number;
export const KEY_Greek_IOTAdiaeresis: number;
export const KEY_Greek_IOTAdieresis: number;
export const KEY_Greek_KAPPA: number;
export const KEY_Greek_LAMBDA: number;
export const KEY_Greek_LAMDA: number;
export const KEY_Greek_MU: number;
export const KEY_Greek_NU: number;
export const KEY_Greek_OMEGA: number;
export const KEY_Greek_OMEGAaccent: number;
export const KEY_Greek_OMICRON: number;
export const KEY_Greek_OMICRONaccent: number;
export const KEY_Greek_PHI: number;
export const KEY_Greek_PI: number;
export const KEY_Greek_PSI: number;
export const KEY_Greek_RHO: number;
export const KEY_Greek_SIGMA: number;
export const KEY_Greek_TAU: number;
export const KEY_Greek_THETA: number;
export const KEY_Greek_UPSILON: number;
export const KEY_Greek_UPSILONaccent: number;
export const KEY_Greek_UPSILONdieresis: number;
export const KEY_Greek_XI: number;
export const KEY_Greek_ZETA: number;
export const KEY_Greek_accentdieresis: number;
export const KEY_Greek_alpha: number;
export const KEY_Greek_alphaaccent: number;
export const KEY_Greek_beta: number;
export const KEY_Greek_chi: number;
export const KEY_Greek_delta: number;
export const KEY_Greek_epsilon: number;
export const KEY_Greek_epsilonaccent: number;
export const KEY_Greek_eta: number;
export const KEY_Greek_etaaccent: number;
export const KEY_Greek_finalsmallsigma: number;
export const KEY_Greek_gamma: number;
export const KEY_Greek_horizbar: number;
export const KEY_Greek_iota: number;
export const KEY_Greek_iotaaccent: number;
export const KEY_Greek_iotaaccentdieresis: number;
export const KEY_Greek_iotadieresis: number;
export const KEY_Greek_kappa: number;
export const KEY_Greek_lambda: number;
export const KEY_Greek_lamda: number;
export const KEY_Greek_mu: number;
export const KEY_Greek_nu: number;
export const KEY_Greek_omega: number;
export const KEY_Greek_omegaaccent: number;
export const KEY_Greek_omicron: number;
export const KEY_Greek_omicronaccent: number;
export const KEY_Greek_phi: number;
export const KEY_Greek_pi: number;
export const KEY_Greek_psi: number;
export const KEY_Greek_rho: number;
export const KEY_Greek_sigma: number;
export const KEY_Greek_switch: number;
export const KEY_Greek_tau: number;
export const KEY_Greek_theta: number;
export const KEY_Greek_upsilon: number;
export const KEY_Greek_upsilonaccent: number;
export const KEY_Greek_upsilonaccentdieresis: number;
export const KEY_Greek_upsilondieresis: number;
export const KEY_Greek_xi: number;
export const KEY_Greek_zeta: number;
export const KEY_Green: number;
export const KEY_H: number;
export const KEY_Hangul: number;
export const KEY_Hangul_A: number;
export const KEY_Hangul_AE: number;
export const KEY_Hangul_AraeA: number;
export const KEY_Hangul_AraeAE: number;
export const KEY_Hangul_Banja: number;
export const KEY_Hangul_Cieuc: number;
export const KEY_Hangul_Codeinput: number;
export const KEY_Hangul_Dikeud: number;
export const KEY_Hangul_E: number;
export const KEY_Hangul_EO: number;
export const KEY_Hangul_EU: number;
export const KEY_Hangul_End: number;
export const KEY_Hangul_Hanja: number;
export const KEY_Hangul_Hieuh: number;
export const KEY_Hangul_I: number;
export const KEY_Hangul_Ieung: number;
export const KEY_Hangul_J_Cieuc: number;
export const KEY_Hangul_J_Dikeud: number;
export const KEY_Hangul_J_Hieuh: number;
export const KEY_Hangul_J_Ieung: number;
export const KEY_Hangul_J_Jieuj: number;
export const KEY_Hangul_J_Khieuq: number;
export const KEY_Hangul_J_Kiyeog: number;
export const KEY_Hangul_J_KiyeogSios: number;
export const KEY_Hangul_J_KkogjiDalrinIeung: number;
export const KEY_Hangul_J_Mieum: number;
export const KEY_Hangul_J_Nieun: number;
export const KEY_Hangul_J_NieunHieuh: number;
export const KEY_Hangul_J_NieunJieuj: number;
export const KEY_Hangul_J_PanSios: number;
export const KEY_Hangul_J_Phieuf: number;
export const KEY_Hangul_J_Pieub: number;
export const KEY_Hangul_J_PieubSios: number;
export const KEY_Hangul_J_Rieul: number;
export const KEY_Hangul_J_RieulHieuh: number;
export const KEY_Hangul_J_RieulKiyeog: number;
export const KEY_Hangul_J_RieulMieum: number;
export const KEY_Hangul_J_RieulPhieuf: number;
export const KEY_Hangul_J_RieulPieub: number;
export const KEY_Hangul_J_RieulSios: number;
export const KEY_Hangul_J_RieulTieut: number;
export const KEY_Hangul_J_Sios: number;
export const KEY_Hangul_J_SsangKiyeog: number;
export const KEY_Hangul_J_SsangSios: number;
export const KEY_Hangul_J_Tieut: number;
export const KEY_Hangul_J_YeorinHieuh: number;
export const KEY_Hangul_Jamo: number;
export const KEY_Hangul_Jeonja: number;
export const KEY_Hangul_Jieuj: number;
export const KEY_Hangul_Khieuq: number;
export const KEY_Hangul_Kiyeog: number;
export const KEY_Hangul_KiyeogSios: number;
export const KEY_Hangul_KkogjiDalrinIeung: number;
export const KEY_Hangul_Mieum: number;
export const KEY_Hangul_MultipleCandidate: number;
export const KEY_Hangul_Nieun: number;
export const KEY_Hangul_NieunHieuh: number;
export const KEY_Hangul_NieunJieuj: number;
export const KEY_Hangul_O: number;
export const KEY_Hangul_OE: number;
export const KEY_Hangul_PanSios: number;
export const KEY_Hangul_Phieuf: number;
export const KEY_Hangul_Pieub: number;
export const KEY_Hangul_PieubSios: number;
export const KEY_Hangul_PostHanja: number;
export const KEY_Hangul_PreHanja: number;
export const KEY_Hangul_PreviousCandidate: number;
export const KEY_Hangul_Rieul: number;
export const KEY_Hangul_RieulHieuh: number;
export const KEY_Hangul_RieulKiyeog: number;
export const KEY_Hangul_RieulMieum: number;
export const KEY_Hangul_RieulPhieuf: number;
export const KEY_Hangul_RieulPieub: number;
export const KEY_Hangul_RieulSios: number;
export const KEY_Hangul_RieulTieut: number;
export const KEY_Hangul_RieulYeorinHieuh: number;
export const KEY_Hangul_Romaja: number;
export const KEY_Hangul_SingleCandidate: number;
export const KEY_Hangul_Sios: number;
export const KEY_Hangul_Special: number;
export const KEY_Hangul_SsangDikeud: number;
export const KEY_Hangul_SsangJieuj: number;
export const KEY_Hangul_SsangKiyeog: number;
export const KEY_Hangul_SsangPieub: number;
export const KEY_Hangul_SsangSios: number;
export const KEY_Hangul_Start: number;
export const KEY_Hangul_SunkyeongeumMieum: number;
export const KEY_Hangul_SunkyeongeumPhieuf: number;
export const KEY_Hangul_SunkyeongeumPieub: number;
export const KEY_Hangul_Tieut: number;
export const KEY_Hangul_U: number;
export const KEY_Hangul_WA: number;
export const KEY_Hangul_WAE: number;
export const KEY_Hangul_WE: number;
export const KEY_Hangul_WEO: number;
export const KEY_Hangul_WI: number;
export const KEY_Hangul_YA: number;
export const KEY_Hangul_YAE: number;
export const KEY_Hangul_YE: number;
export const KEY_Hangul_YEO: number;
export const KEY_Hangul_YI: number;
export const KEY_Hangul_YO: number;
export const KEY_Hangul_YU: number;
export const KEY_Hangul_YeorinHieuh: number;
export const KEY_Hangul_switch: number;
export const KEY_Hankaku: number;
export const KEY_Hcircumflex: number;
export const KEY_Hebrew_switch: number;
export const KEY_Help: number;
export const KEY_Henkan: number;
export const KEY_Henkan_Mode: number;
export const KEY_Hibernate: number;
export const KEY_Hiragana: number;
export const KEY_Hiragana_Katakana: number;
export const KEY_History: number;
export const KEY_Home: number;
export const KEY_HomePage: number;
export const KEY_HotLinks: number;
export const KEY_Hstroke: number;
export const KEY_Hyper_L: number;
export const KEY_Hyper_R: number;
export const KEY_I: number;
export const KEY_ISO_Center_Object: number;
export const KEY_ISO_Continuous_Underline: number;
export const KEY_ISO_Discontinuous_Underline: number;
export const KEY_ISO_Emphasize: number;
export const KEY_ISO_Enter: number;
export const KEY_ISO_Fast_Cursor_Down: number;
export const KEY_ISO_Fast_Cursor_Left: number;
export const KEY_ISO_Fast_Cursor_Right: number;
export const KEY_ISO_Fast_Cursor_Up: number;
export const KEY_ISO_First_Group: number;
export const KEY_ISO_First_Group_Lock: number;
export const KEY_ISO_Group_Latch: number;
export const KEY_ISO_Group_Lock: number;
export const KEY_ISO_Group_Shift: number;
export const KEY_ISO_Last_Group: number;
export const KEY_ISO_Last_Group_Lock: number;
export const KEY_ISO_Left_Tab: number;
export const KEY_ISO_Level2_Latch: number;
export const KEY_ISO_Level3_Latch: number;
export const KEY_ISO_Level3_Lock: number;
export const KEY_ISO_Level3_Shift: number;
export const KEY_ISO_Level5_Latch: number;
export const KEY_ISO_Level5_Lock: number;
export const KEY_ISO_Level5_Shift: number;
export const KEY_ISO_Lock: number;
export const KEY_ISO_Move_Line_Down: number;
export const KEY_ISO_Move_Line_Up: number;
export const KEY_ISO_Next_Group: number;
export const KEY_ISO_Next_Group_Lock: number;
export const KEY_ISO_Partial_Line_Down: number;
export const KEY_ISO_Partial_Line_Up: number;
export const KEY_ISO_Partial_Space_Left: number;
export const KEY_ISO_Partial_Space_Right: number;
export const KEY_ISO_Prev_Group: number;
export const KEY_ISO_Prev_Group_Lock: number;
export const KEY_ISO_Release_Both_Margins: number;
export const KEY_ISO_Release_Margin_Left: number;
export const KEY_ISO_Release_Margin_Right: number;
export const KEY_ISO_Set_Margin_Left: number;
export const KEY_ISO_Set_Margin_Right: number;
export const KEY_Iabovedot: number;
export const KEY_Iacute: number;
export const KEY_Ibelowdot: number;
export const KEY_Ibreve: number;
export const KEY_Icircumflex: number;
export const KEY_Idiaeresis: number;
export const KEY_Igrave: number;
export const KEY_Ihook: number;
export const KEY_Imacron: number;
export const KEY_Insert: number;
export const KEY_Iogonek: number;
export const KEY_Itilde: number;
export const KEY_J: number;
export const KEY_Jcircumflex: number;
export const KEY_K: number;
export const KEY_KP_0: number;
export const KEY_KP_1: number;
export const KEY_KP_2: number;
export const KEY_KP_3: number;
export const KEY_KP_4: number;
export const KEY_KP_5: number;
export const KEY_KP_6: number;
export const KEY_KP_7: number;
export const KEY_KP_8: number;
export const KEY_KP_9: number;
export const KEY_KP_Add: number;
export const KEY_KP_Begin: number;
export const KEY_KP_Decimal: number;
export const KEY_KP_Delete: number;
export const KEY_KP_Divide: number;
export const KEY_KP_Down: number;
export const KEY_KP_End: number;
export const KEY_KP_Enter: number;
export const KEY_KP_Equal: number;
export const KEY_KP_F1: number;
export const KEY_KP_F2: number;
export const KEY_KP_F3: number;
export const KEY_KP_F4: number;
export const KEY_KP_Home: number;
export const KEY_KP_Insert: number;
export const KEY_KP_Left: number;
export const KEY_KP_Multiply: number;
export const KEY_KP_Next: number;
export const KEY_KP_Page_Down: number;
export const KEY_KP_Page_Up: number;
export const KEY_KP_Prior: number;
export const KEY_KP_Right: number;
export const KEY_KP_Separator: number;
export const KEY_KP_Space: number;
export const KEY_KP_Subtract: number;
export const KEY_KP_Tab: number;
export const KEY_KP_Up: number;
export const KEY_Kana_Lock: number;
export const KEY_Kana_Shift: number;
export const KEY_Kanji: number;
export const KEY_Kanji_Bangou: number;
export const KEY_Katakana: number;
export const KEY_KbdBrightnessDown: number;
export const KEY_KbdBrightnessUp: number;
export const KEY_KbdLightOnOff: number;
export const KEY_Kcedilla: number;
export const KEY_Korean_Won: number;
export const KEY_L: number;
export const KEY_L1: number;
export const KEY_L10: number;
export const KEY_L2: number;
export const KEY_L3: number;
export const KEY_L4: number;
export const KEY_L5: number;
export const KEY_L6: number;
export const KEY_L7: number;
export const KEY_L8: number;
export const KEY_L9: number;
export const KEY_Lacute: number;
export const KEY_Last_Virtual_Screen: number;
export const KEY_Launch0: number;
export const KEY_Launch1: number;
export const KEY_Launch2: number;
export const KEY_Launch3: number;
export const KEY_Launch4: number;
export const KEY_Launch5: number;
export const KEY_Launch6: number;
export const KEY_Launch7: number;
export const KEY_Launch8: number;
export const KEY_Launch9: number;
export const KEY_LaunchA: number;
export const KEY_LaunchB: number;
export const KEY_LaunchC: number;
export const KEY_LaunchD: number;
export const KEY_LaunchE: number;
export const KEY_LaunchF: number;
export const KEY_Lbelowdot: number;
export const KEY_Lcaron: number;
export const KEY_Lcedilla: number;
export const KEY_Left: number;
export const KEY_LightBulb: number;
export const KEY_Linefeed: number;
export const KEY_LiraSign: number;
export const KEY_LogGrabInfo: number;
export const KEY_LogOff: number;
export const KEY_LogWindowTree: number;
export const KEY_Lstroke: number;
export const KEY_M: number;
export const KEY_Mabovedot: number;
export const KEY_Macedonia_DSE: number;
export const KEY_Macedonia_GJE: number;
export const KEY_Macedonia_KJE: number;
export const KEY_Macedonia_dse: number;
export const KEY_Macedonia_gje: number;
export const KEY_Macedonia_kje: number;
export const KEY_Mae_Koho: number;
export const KEY_Mail: number;
export const KEY_MailForward: number;
export const KEY_Market: number;
export const KEY_Massyo: number;
export const KEY_Meeting: number;
export const KEY_Memo: number;
export const KEY_Menu: number;
export const KEY_MenuKB: number;
export const KEY_MenuPB: number;
export const KEY_Messenger: number;
export const KEY_Meta_L: number;
export const KEY_Meta_R: number;
export const KEY_MillSign: number;
export const KEY_ModeLock: number;
export const KEY_Mode_switch: number;
export const KEY_MonBrightnessDown: number;
export const KEY_MonBrightnessUp: number;
export const KEY_MouseKeys_Accel_Enable: number;
export const KEY_MouseKeys_Enable: number;
export const KEY_Muhenkan: number;
export const KEY_Multi_key: number;
export const KEY_MultipleCandidate: number;
export const KEY_Music: number;
export const KEY_MyComputer: number;
export const KEY_MySites: number;
export const KEY_N: number;
export const KEY_Nacute: number;
export const KEY_NairaSign: number;
export const KEY_Ncaron: number;
export const KEY_Ncedilla: number;
export const KEY_New: number;
export const KEY_NewSheqelSign: number;
export const KEY_News: number;
export const KEY_Next: number;
export const KEY_Next_VMode: number;
export const KEY_Next_Virtual_Screen: number;
export const KEY_Ntilde: number;
export const KEY_Num_Lock: number;
export const KEY_O: number;
export const KEY_OE: number;
export const KEY_Oacute: number;
export const KEY_Obarred: number;
export const KEY_Obelowdot: number;
export const KEY_Ocaron: number;
export const KEY_Ocircumflex: number;
export const KEY_Ocircumflexacute: number;
export const KEY_Ocircumflexbelowdot: number;
export const KEY_Ocircumflexgrave: number;
export const KEY_Ocircumflexhook: number;
export const KEY_Ocircumflextilde: number;
export const KEY_Odiaeresis: number;
export const KEY_Odoubleacute: number;
export const KEY_OfficeHome: number;
export const KEY_Ograve: number;
export const KEY_Ohook: number;
export const KEY_Ohorn: number;
export const KEY_Ohornacute: number;
export const KEY_Ohornbelowdot: number;
export const KEY_Ohorngrave: number;
export const KEY_Ohornhook: number;
export const KEY_Ohorntilde: number;
export const KEY_Omacron: number;
export const KEY_Ooblique: number;
export const KEY_Open: number;
export const KEY_OpenURL: number;
export const KEY_Option: number;
export const KEY_Oslash: number;
export const KEY_Otilde: number;
export const KEY_Overlay1_Enable: number;
export const KEY_Overlay2_Enable: number;
export const KEY_P: number;
export const KEY_Pabovedot: number;
export const KEY_Page_Down: number;
export const KEY_Page_Up: number;
export const KEY_Paste: number;
export const KEY_Pause: number;
export const KEY_PesetaSign: number;
export const KEY_Phone: number;
export const KEY_Pictures: number;
export const KEY_Pointer_Accelerate: number;
export const KEY_Pointer_Button1: number;
export const KEY_Pointer_Button2: number;
export const KEY_Pointer_Button3: number;
export const KEY_Pointer_Button4: number;
export const KEY_Pointer_Button5: number;
export const KEY_Pointer_Button_Dflt: number;
export const KEY_Pointer_DblClick1: number;
export const KEY_Pointer_DblClick2: number;
export const KEY_Pointer_DblClick3: number;
export const KEY_Pointer_DblClick4: number;
export const KEY_Pointer_DblClick5: number;
export const KEY_Pointer_DblClick_Dflt: number;
export const KEY_Pointer_DfltBtnNext: number;
export const KEY_Pointer_DfltBtnPrev: number;
export const KEY_Pointer_Down: number;
export const KEY_Pointer_DownLeft: number;
export const KEY_Pointer_DownRight: number;
export const KEY_Pointer_Drag1: number;
export const KEY_Pointer_Drag2: number;
export const KEY_Pointer_Drag3: number;
export const KEY_Pointer_Drag4: number;
export const KEY_Pointer_Drag5: number;
export const KEY_Pointer_Drag_Dflt: number;
export const KEY_Pointer_EnableKeys: number;
export const KEY_Pointer_Left: number;
export const KEY_Pointer_Right: number;
export const KEY_Pointer_Up: number;
export const KEY_Pointer_UpLeft: number;
export const KEY_Pointer_UpRight: number;
export const KEY_PowerDown: number;
export const KEY_PowerOff: number;
export const KEY_Prev_VMode: number;
export const KEY_Prev_Virtual_Screen: number;
export const KEY_PreviousCandidate: number;
export const KEY_Print: number;
export const KEY_Prior: number;
export const KEY_Q: number;
export const KEY_R: number;
export const KEY_R1: number;
export const KEY_R10: number;
export const KEY_R11: number;
export const KEY_R12: number;
export const KEY_R13: number;
export const KEY_R14: number;
export const KEY_R15: number;
export const KEY_R2: number;
export const KEY_R3: number;
export const KEY_R4: number;
export const KEY_R5: number;
export const KEY_R6: number;
export const KEY_R7: number;
export const KEY_R8: number;
export const KEY_R9: number;
export const KEY_Racute: number;
export const KEY_Rcaron: number;
export const KEY_Rcedilla: number;
export const KEY_Red: number;
export const KEY_Redo: number;
export const KEY_Refresh: number;
export const KEY_Reload: number;
export const KEY_RepeatKeys_Enable: number;
export const KEY_Reply: number;
export const KEY_Return: number;
export const KEY_Right: number;
export const KEY_RockerDown: number;
export const KEY_RockerEnter: number;
export const KEY_RockerUp: number;
export const KEY_Romaji: number;
export const KEY_RotateWindows: number;
export const KEY_RotationKB: number;
export const KEY_RotationPB: number;
export const KEY_RupeeSign: number;
export const KEY_S: number;
export const KEY_SCHWA: number;
export const KEY_Sabovedot: number;
export const KEY_Sacute: number;
export const KEY_Save: number;
export const KEY_Scaron: number;
export const KEY_Scedilla: number;
export const KEY_Scircumflex: number;
export const KEY_ScreenSaver: number;
export const KEY_ScrollClick: number;
export const KEY_ScrollDown: number;
export const KEY_ScrollUp: number;
export const KEY_Scroll_Lock: number;
export const KEY_Search: number;
export const KEY_Select: number;
export const KEY_SelectButton: number;
export const KEY_Send: number;
export const KEY_Serbian_DJE: number;
export const KEY_Serbian_DZE: number;
export const KEY_Serbian_JE: number;
export const KEY_Serbian_LJE: number;
export const KEY_Serbian_NJE: number;
export const KEY_Serbian_TSHE: number;
export const KEY_Serbian_dje: number;
export const KEY_Serbian_dze: number;
export const KEY_Serbian_je: number;
export const KEY_Serbian_lje: number;
export const KEY_Serbian_nje: number;
export const KEY_Serbian_tshe: number;
export const KEY_Shift_L: number;
export const KEY_Shift_Lock: number;
export const KEY_Shift_R: number;
export const KEY_Shop: number;
export const KEY_SingleCandidate: number;
export const KEY_Sinh_a: number;
export const KEY_Sinh_aa: number;
export const KEY_Sinh_aa2: number;
export const KEY_Sinh_ae: number;
export const KEY_Sinh_ae2: number;
export const KEY_Sinh_aee: number;
export const KEY_Sinh_aee2: number;
export const KEY_Sinh_ai: number;
export const KEY_Sinh_ai2: number;
export const KEY_Sinh_al: number;
export const KEY_Sinh_au: number;
export const KEY_Sinh_au2: number;
export const KEY_Sinh_ba: number;
export const KEY_Sinh_bha: number;
export const KEY_Sinh_ca: number;
export const KEY_Sinh_cha: number;
export const KEY_Sinh_dda: number;
export const KEY_Sinh_ddha: number;
export const KEY_Sinh_dha: number;
export const KEY_Sinh_dhha: number;
export const KEY_Sinh_e: number;
export const KEY_Sinh_e2: number;
export const KEY_Sinh_ee: number;
export const KEY_Sinh_ee2: number;
export const KEY_Sinh_fa: number;
export const KEY_Sinh_ga: number;
export const KEY_Sinh_gha: number;
export const KEY_Sinh_h2: number;
export const KEY_Sinh_ha: number;
export const KEY_Sinh_i: number;
export const KEY_Sinh_i2: number;
export const KEY_Sinh_ii: number;
export const KEY_Sinh_ii2: number;
export const KEY_Sinh_ja: number;
export const KEY_Sinh_jha: number;
export const KEY_Sinh_jnya: number;
export const KEY_Sinh_ka: number;
export const KEY_Sinh_kha: number;
export const KEY_Sinh_kunddaliya: number;
export const KEY_Sinh_la: number;
export const KEY_Sinh_lla: number;
export const KEY_Sinh_lu: number;
export const KEY_Sinh_lu2: number;
export const KEY_Sinh_luu: number;
export const KEY_Sinh_luu2: number;
export const KEY_Sinh_ma: number;
export const KEY_Sinh_mba: number;
export const KEY_Sinh_na: number;
export const KEY_Sinh_ndda: number;
export const KEY_Sinh_ndha: number;
export const KEY_Sinh_ng: number;
export const KEY_Sinh_ng2: number;
export const KEY_Sinh_nga: number;
export const KEY_Sinh_nja: number;
export const KEY_Sinh_nna: number;
export const KEY_Sinh_nya: number;
export const KEY_Sinh_o: number;
export const KEY_Sinh_o2: number;
export const KEY_Sinh_oo: number;
export const KEY_Sinh_oo2: number;
export const KEY_Sinh_pa: number;
export const KEY_Sinh_pha: number;
export const KEY_Sinh_ra: number;
export const KEY_Sinh_ri: number;
export const KEY_Sinh_rii: number;
export const KEY_Sinh_ru2: number;
export const KEY_Sinh_ruu2: number;
export const KEY_Sinh_sa: number;
export const KEY_Sinh_sha: number;
export const KEY_Sinh_ssha: number;
export const KEY_Sinh_tha: number;
export const KEY_Sinh_thha: number;
export const KEY_Sinh_tta: number;
export const KEY_Sinh_ttha: number;
export const KEY_Sinh_u: number;
export const KEY_Sinh_u2: number;
export const KEY_Sinh_uu: number;
export const KEY_Sinh_uu2: number;
export const KEY_Sinh_va: number;
export const KEY_Sinh_ya: number;
export const KEY_Sleep: number;
export const KEY_SlowKeys_Enable: number;
export const KEY_Spell: number;
export const KEY_SplitScreen: number;
export const KEY_Standby: number;
export const KEY_Start: number;
export const KEY_StickyKeys_Enable: number;
export const KEY_Stop: number;
export const KEY_Subtitle: number;
export const KEY_Super_L: number;
export const KEY_Super_R: number;
export const KEY_Support: number;
export const KEY_Suspend: number;
export const KEY_Switch_VT_1: number;
export const KEY_Switch_VT_10: number;
export const KEY_Switch_VT_11: number;
export const KEY_Switch_VT_12: number;
export const KEY_Switch_VT_2: number;
export const KEY_Switch_VT_3: number;
export const KEY_Switch_VT_4: number;
export const KEY_Switch_VT_5: number;
export const KEY_Switch_VT_6: number;
export const KEY_Switch_VT_7: number;
export const KEY_Switch_VT_8: number;
export const KEY_Switch_VT_9: number;
export const KEY_Sys_Req: number;
export const KEY_T: number;
export const KEY_THORN: number;
export const KEY_Tab: number;
export const KEY_Tabovedot: number;
export const KEY_TaskPane: number;
export const KEY_Tcaron: number;
export const KEY_Tcedilla: number;
export const KEY_Terminal: number;
export const KEY_Terminate_Server: number;
export const KEY_Thai_baht: number;
export const KEY_Thai_bobaimai: number;
export const KEY_Thai_chochan: number;
export const KEY_Thai_chochang: number;
export const KEY_Thai_choching: number;
export const KEY_Thai_chochoe: number;
export const KEY_Thai_dochada: number;
export const KEY_Thai_dodek: number;
export const KEY_Thai_fofa: number;
export const KEY_Thai_fofan: number;
export const KEY_Thai_hohip: number;
export const KEY_Thai_honokhuk: number;
export const KEY_Thai_khokhai: number;
export const KEY_Thai_khokhon: number;
export const KEY_Thai_khokhuat: number;
export const KEY_Thai_khokhwai: number;
export const KEY_Thai_khorakhang: number;
export const KEY_Thai_kokai: number;
export const KEY_Thai_lakkhangyao: number;
export const KEY_Thai_lekchet: number;
export const KEY_Thai_lekha: number;
export const KEY_Thai_lekhok: number;
export const KEY_Thai_lekkao: number;
export const KEY_Thai_leknung: number;
export const KEY_Thai_lekpaet: number;
export const KEY_Thai_leksam: number;
export const KEY_Thai_leksi: number;
export const KEY_Thai_leksong: number;
export const KEY_Thai_leksun: number;
export const KEY_Thai_lochula: number;
export const KEY_Thai_loling: number;
export const KEY_Thai_lu: number;
export const KEY_Thai_maichattawa: number;
export const KEY_Thai_maiek: number;
export const KEY_Thai_maihanakat: number;
export const KEY_Thai_maihanakat_maitho: number;
export const KEY_Thai_maitaikhu: number;
export const KEY_Thai_maitho: number;
export const KEY_Thai_maitri: number;
export const KEY_Thai_maiyamok: number;
export const KEY_Thai_moma: number;
export const KEY_Thai_ngongu: number;
export const KEY_Thai_nikhahit: number;
export const KEY_Thai_nonen: number;
export const KEY_Thai_nonu: number;
export const KEY_Thai_oang: number;
export const KEY_Thai_paiyannoi: number;
export const KEY_Thai_phinthu: number;
export const KEY_Thai_phophan: number;
export const KEY_Thai_phophung: number;
export const KEY_Thai_phosamphao: number;
export const KEY_Thai_popla: number;
export const KEY_Thai_rorua: number;
export const KEY_Thai_ru: number;
export const KEY_Thai_saraa: number;
export const KEY_Thai_saraaa: number;
export const KEY_Thai_saraae: number;
export const KEY_Thai_saraaimaimalai: number;
export const KEY_Thai_saraaimaimuan: number;
export const KEY_Thai_saraam: number;
export const KEY_Thai_sarae: number;
export const KEY_Thai_sarai: number;
export const KEY_Thai_saraii: number;
export const KEY_Thai_sarao: number;
export const KEY_Thai_sarau: number;
export const KEY_Thai_saraue: number;
export const KEY_Thai_sarauee: number;
export const KEY_Thai_sarauu: number;
export const KEY_Thai_sorusi: number;
export const KEY_Thai_sosala: number;
export const KEY_Thai_soso: number;
export const KEY_Thai_sosua: number;
export const KEY_Thai_thanthakhat: number;
export const KEY_Thai_thonangmontho: number;
export const KEY_Thai_thophuthao: number;
export const KEY_Thai_thothahan: number;
export const KEY_Thai_thothan: number;
export const KEY_Thai_thothong: number;
export const KEY_Thai_thothung: number;
export const KEY_Thai_topatak: number;
export const KEY_Thai_totao: number;
export const KEY_Thai_wowaen: number;
export const KEY_Thai_yoyak: number;
export const KEY_Thai_yoying: number;
export const KEY_Thorn: number;
export const KEY_Time: number;
export const KEY_ToDoList: number;
export const KEY_Tools: number;
export const KEY_TopMenu: number;
export const KEY_TouchpadOff: number;
export const KEY_TouchpadOn: number;
export const KEY_TouchpadToggle: number;
export const KEY_Touroku: number;
export const KEY_Travel: number;
export const KEY_Tslash: number;
export const KEY_U: number;
export const KEY_UWB: number;
export const KEY_Uacute: number;
export const KEY_Ubelowdot: number;
export const KEY_Ubreve: number;
export const KEY_Ucircumflex: number;
export const KEY_Udiaeresis: number;
export const KEY_Udoubleacute: number;
export const KEY_Ugrave: number;
export const KEY_Uhook: number;
export const KEY_Uhorn: number;
export const KEY_Uhornacute: number;
export const KEY_Uhornbelowdot: number;
export const KEY_Uhorngrave: number;
export const KEY_Uhornhook: number;
export const KEY_Uhorntilde: number;
export const KEY_Ukrainian_GHE_WITH_UPTURN: number;
export const KEY_Ukrainian_I: number;
export const KEY_Ukrainian_IE: number;
export const KEY_Ukrainian_YI: number;
export const KEY_Ukrainian_ghe_with_upturn: number;
export const KEY_Ukrainian_i: number;
export const KEY_Ukrainian_ie: number;
export const KEY_Ukrainian_yi: number;
export const KEY_Ukranian_I: number;
export const KEY_Ukranian_JE: number;
export const KEY_Ukranian_YI: number;
export const KEY_Ukranian_i: number;
export const KEY_Ukranian_je: number;
export const KEY_Ukranian_yi: number;
export const KEY_Umacron: number;
export const KEY_Undo: number;
export const KEY_Ungrab: number;
export const KEY_Uogonek: number;
export const KEY_Up: number;
export const KEY_Uring: number;
export const KEY_User1KB: number;
export const KEY_User2KB: number;
export const KEY_UserPB: number;
export const KEY_Utilde: number;
export const KEY_V: number;
export const KEY_VendorHome: number;
export const KEY_Video: number;
export const KEY_View: number;
export const KEY_VoidSymbol: number;
export const KEY_W: number;
export const KEY_WLAN: number;
export const KEY_WWW: number;
export const KEY_Wacute: number;
export const KEY_WakeUp: number;
export const KEY_Wcircumflex: number;
export const KEY_Wdiaeresis: number;
export const KEY_WebCam: number;
export const KEY_Wgrave: number;
export const KEY_WheelButton: number;
export const KEY_WindowClear: number;
export const KEY_WonSign: number;
export const KEY_Word: number;
export const KEY_X: number;
export const KEY_Xabovedot: number;
export const KEY_Xfer: number;
export const KEY_Y: number;
export const KEY_Yacute: number;
export const KEY_Ybelowdot: number;
export const KEY_Ycircumflex: number;
export const KEY_Ydiaeresis: number;
export const KEY_Yellow: number;
export const KEY_Ygrave: number;
export const KEY_Yhook: number;
export const KEY_Ytilde: number;
export const KEY_Z: number;
export const KEY_Zabovedot: number;
export const KEY_Zacute: number;
export const KEY_Zcaron: number;
export const KEY_Zen_Koho: number;
export const KEY_Zenkaku: number;
export const KEY_Zenkaku_Hankaku: number;
export const KEY_ZoomIn: number;
export const KEY_ZoomOut: number;
export const KEY_Zstroke: number;
export const KEY_a: number;
export const KEY_aacute: number;
export const KEY_abelowdot: number;
export const KEY_abovedot: number;
export const KEY_abreve: number;
export const KEY_abreveacute: number;
export const KEY_abrevebelowdot: number;
export const KEY_abrevegrave: number;
export const KEY_abrevehook: number;
export const KEY_abrevetilde: number;
export const KEY_acircumflex: number;
export const KEY_acircumflexacute: number;
export const KEY_acircumflexbelowdot: number;
export const KEY_acircumflexgrave: number;
export const KEY_acircumflexhook: number;
export const KEY_acircumflextilde: number;
export const KEY_acute: number;
export const KEY_adiaeresis: number;
export const KEY_ae: number;
export const KEY_agrave: number;
export const KEY_ahook: number;
export const KEY_amacron: number;
export const KEY_ampersand: number;
export const KEY_aogonek: number;
export const KEY_apostrophe: number;
export const KEY_approxeq: number;
export const KEY_approximate: number;
export const KEY_aring: number;
export const KEY_asciicircum: number;
export const KEY_asciitilde: number;
export const KEY_asterisk: number;
export const KEY_at: number;
export const KEY_atilde: number;
export const KEY_b: number;
export const KEY_babovedot: number;
export const KEY_backslash: number;
export const KEY_ballotcross: number;
export const KEY_bar: number;
export const KEY_because: number;
export const KEY_blank: number;
export const KEY_botintegral: number;
export const KEY_botleftparens: number;
export const KEY_botleftsqbracket: number;
export const KEY_botleftsummation: number;
export const KEY_botrightparens: number;
export const KEY_botrightsqbracket: number;
export const KEY_botrightsummation: number;
export const KEY_bott: number;
export const KEY_botvertsummationconnector: number;
export const KEY_braceleft: number;
export const KEY_braceright: number;
export const KEY_bracketleft: number;
export const KEY_bracketright: number;
export const KEY_braille_blank: number;
export const KEY_braille_dot_1: number;
export const KEY_braille_dot_10: number;
export const KEY_braille_dot_2: number;
export const KEY_braille_dot_3: number;
export const KEY_braille_dot_4: number;
export const KEY_braille_dot_5: number;
export const KEY_braille_dot_6: number;
export const KEY_braille_dot_7: number;
export const KEY_braille_dot_8: number;
export const KEY_braille_dot_9: number;
export const KEY_braille_dots_1: number;
export const KEY_braille_dots_12: number;
export const KEY_braille_dots_123: number;
export const KEY_braille_dots_1234: number;
export const KEY_braille_dots_12345: number;
export const KEY_braille_dots_123456: number;
export const KEY_braille_dots_1234567: number;
export const KEY_braille_dots_12345678: number;
export const KEY_braille_dots_1234568: number;
export const KEY_braille_dots_123457: number;
export const KEY_braille_dots_1234578: number;
export const KEY_braille_dots_123458: number;
export const KEY_braille_dots_12346: number;
export const KEY_braille_dots_123467: number;
export const KEY_braille_dots_1234678: number;
export const KEY_braille_dots_123468: number;
export const KEY_braille_dots_12347: number;
export const KEY_braille_dots_123478: number;
export const KEY_braille_dots_12348: number;
export const KEY_braille_dots_1235: number;
export const KEY_braille_dots_12356: number;
export const KEY_braille_dots_123567: number;
export const KEY_braille_dots_1235678: number;
export const KEY_braille_dots_123568: number;
export const KEY_braille_dots_12357: number;
export const KEY_braille_dots_123578: number;
export const KEY_braille_dots_12358: number;
export const KEY_braille_dots_1236: number;
export const KEY_braille_dots_12367: number;
export const KEY_braille_dots_123678: number;
export const KEY_braille_dots_12368: number;
export const KEY_braille_dots_1237: number;
export const KEY_braille_dots_12378: number;
export const KEY_braille_dots_1238: number;
export const KEY_braille_dots_124: number;
export const KEY_braille_dots_1245: number;
export const KEY_braille_dots_12456: number;
export const KEY_braille_dots_124567: number;
export const KEY_braille_dots_1245678: number;
export const KEY_braille_dots_124568: number;
export const KEY_braille_dots_12457: number;
export const KEY_braille_dots_124578: number;
export const KEY_braille_dots_12458: number;
export const KEY_braille_dots_1246: number;
export const KEY_braille_dots_12467: number;
export const KEY_braille_dots_124678: number;
export const KEY_braille_dots_12468: number;
export const KEY_braille_dots_1247: number;
export const KEY_braille_dots_12478: number;
export const KEY_braille_dots_1248: number;
export const KEY_braille_dots_125: number;
export const KEY_braille_dots_1256: number;
export const KEY_braille_dots_12567: number;
export const KEY_braille_dots_125678: number;
export const KEY_braille_dots_12568: number;
export const KEY_braille_dots_1257: number;
export const KEY_braille_dots_12578: number;
export const KEY_braille_dots_1258: number;
export const KEY_braille_dots_126: number;
export const KEY_braille_dots_1267: number;
export const KEY_braille_dots_12678: number;
export const KEY_braille_dots_1268: number;
export const KEY_braille_dots_127: number;
export const KEY_braille_dots_1278: number;
export const KEY_braille_dots_128: number;
export const KEY_braille_dots_13: number;
export const KEY_braille_dots_134: number;
export const KEY_braille_dots_1345: number;
export const KEY_braille_dots_13456: number;
export const KEY_braille_dots_134567: number;
export const KEY_braille_dots_1345678: number;
export const KEY_braille_dots_134568: number;
export const KEY_braille_dots_13457: number;
export const KEY_braille_dots_134578: number;
export const KEY_braille_dots_13458: number;
export const KEY_braille_dots_1346: number;
export const KEY_braille_dots_13467: number;
export const KEY_braille_dots_134678: number;
export const KEY_braille_dots_13468: number;
export const KEY_braille_dots_1347: number;
export const KEY_braille_dots_13478: number;
export const KEY_braille_dots_1348: number;
export const KEY_braille_dots_135: number;
export const KEY_braille_dots_1356: number;
export const KEY_braille_dots_13567: number;
export const KEY_braille_dots_135678: number;
export const KEY_braille_dots_13568: number;
export const KEY_braille_dots_1357: number;
export const KEY_braille_dots_13578: number;
export const KEY_braille_dots_1358: number;
export const KEY_braille_dots_136: number;
export const KEY_braille_dots_1367: number;
export const KEY_braille_dots_13678: number;
export const KEY_braille_dots_1368: number;
export const KEY_braille_dots_137: number;
export const KEY_braille_dots_1378: number;
export const KEY_braille_dots_138: number;
export const KEY_braille_dots_14: number;
export const KEY_braille_dots_145: number;
export const KEY_braille_dots_1456: number;
export const KEY_braille_dots_14567: number;
export const KEY_braille_dots_145678: number;
export const KEY_braille_dots_14568: number;
export const KEY_braille_dots_1457: number;
export const KEY_braille_dots_14578: number;
export const KEY_braille_dots_1458: number;
export const KEY_braille_dots_146: number;
export const KEY_braille_dots_1467: number;
export const KEY_braille_dots_14678: number;
export const KEY_braille_dots_1468: number;
export const KEY_braille_dots_147: number;
export const KEY_braille_dots_1478: number;
export const KEY_braille_dots_148: number;
export const KEY_braille_dots_15: number;
export const KEY_braille_dots_156: number;
export const KEY_braille_dots_1567: number;
export const KEY_braille_dots_15678: number;
export const KEY_braille_dots_1568: number;
export const KEY_braille_dots_157: number;
export const KEY_braille_dots_1578: number;
export const KEY_braille_dots_158: number;
export const KEY_braille_dots_16: number;
export const KEY_braille_dots_167: number;
export const KEY_braille_dots_1678: number;
export const KEY_braille_dots_168: number;
export const KEY_braille_dots_17: number;
export const KEY_braille_dots_178: number;
export const KEY_braille_dots_18: number;
export const KEY_braille_dots_2: number;
export const KEY_braille_dots_23: number;
export const KEY_braille_dots_234: number;
export const KEY_braille_dots_2345: number;
export const KEY_braille_dots_23456: number;
export const KEY_braille_dots_234567: number;
export const KEY_braille_dots_2345678: number;
export const KEY_braille_dots_234568: number;
export const KEY_braille_dots_23457: number;
export const KEY_braille_dots_234578: number;
export const KEY_braille_dots_23458: number;
export const KEY_braille_dots_2346: number;
export const KEY_braille_dots_23467: number;
export const KEY_braille_dots_234678: number;
export const KEY_braille_dots_23468: number;
export const KEY_braille_dots_2347: number;
export const KEY_braille_dots_23478: number;
export const KEY_braille_dots_2348: number;
export const KEY_braille_dots_235: number;
export const KEY_braille_dots_2356: number;
export const KEY_braille_dots_23567: number;
export const KEY_braille_dots_235678: number;
export const KEY_braille_dots_23568: number;
export const KEY_braille_dots_2357: number;
export const KEY_braille_dots_23578: number;
export const KEY_braille_dots_2358: number;
export const KEY_braille_dots_236: number;
export const KEY_braille_dots_2367: number;
export const KEY_braille_dots_23678: number;
export const KEY_braille_dots_2368: number;
export const KEY_braille_dots_237: number;
export const KEY_braille_dots_2378: number;
export const KEY_braille_dots_238: number;
export const KEY_braille_dots_24: number;
export const KEY_braille_dots_245: number;
export const KEY_braille_dots_2456: number;
export const KEY_braille_dots_24567: number;
export const KEY_braille_dots_245678: number;
export const KEY_braille_dots_24568: number;
export const KEY_braille_dots_2457: number;
export const KEY_braille_dots_24578: number;
export const KEY_braille_dots_2458: number;
export const KEY_braille_dots_246: number;
export const KEY_braille_dots_2467: number;
export const KEY_braille_dots_24678: number;
export const KEY_braille_dots_2468: number;
export const KEY_braille_dots_247: number;
export const KEY_braille_dots_2478: number;
export const KEY_braille_dots_248: number;
export const KEY_braille_dots_25: number;
export const KEY_braille_dots_256: number;
export const KEY_braille_dots_2567: number;
export const KEY_braille_dots_25678: number;
export const KEY_braille_dots_2568: number;
export const KEY_braille_dots_257: number;
export const KEY_braille_dots_2578: number;
export const KEY_braille_dots_258: number;
export const KEY_braille_dots_26: number;
export const KEY_braille_dots_267: number;
export const KEY_braille_dots_2678: number;
export const KEY_braille_dots_268: number;
export const KEY_braille_dots_27: number;
export const KEY_braille_dots_278: number;
export const KEY_braille_dots_28: number;
export const KEY_braille_dots_3: number;
export const KEY_braille_dots_34: number;
export const KEY_braille_dots_345: number;
export const KEY_braille_dots_3456: number;
export const KEY_braille_dots_34567: number;
export const KEY_braille_dots_345678: number;
export const KEY_braille_dots_34568: number;
export const KEY_braille_dots_3457: number;
export const KEY_braille_dots_34578: number;
export const KEY_braille_dots_3458: number;
export const KEY_braille_dots_346: number;
export const KEY_braille_dots_3467: number;
export const KEY_braille_dots_34678: number;
export const KEY_braille_dots_3468: number;
export const KEY_braille_dots_347: number;
export const KEY_braille_dots_3478: number;
export const KEY_braille_dots_348: number;
export const KEY_braille_dots_35: number;
export const KEY_braille_dots_356: number;
export const KEY_braille_dots_3567: number;
export const KEY_braille_dots_35678: number;
export const KEY_braille_dots_3568: number;
export const KEY_braille_dots_357: number;
export const KEY_braille_dots_3578: number;
export const KEY_braille_dots_358: number;
export const KEY_braille_dots_36: number;
export const KEY_braille_dots_367: number;
export const KEY_braille_dots_3678: number;
export const KEY_braille_dots_368: number;
export const KEY_braille_dots_37: number;
export const KEY_braille_dots_378: number;
export const KEY_braille_dots_38: number;
export const KEY_braille_dots_4: number;
export const KEY_braille_dots_45: number;
export const KEY_braille_dots_456: number;
export const KEY_braille_dots_4567: number;
export const KEY_braille_dots_45678: number;
export const KEY_braille_dots_4568: number;
export const KEY_braille_dots_457: number;
export const KEY_braille_dots_4578: number;
export const KEY_braille_dots_458: number;
export const KEY_braille_dots_46: number;
export const KEY_braille_dots_467: number;
export const KEY_braille_dots_4678: number;
export const KEY_braille_dots_468: number;
export const KEY_braille_dots_47: number;
export const KEY_braille_dots_478: number;
export const KEY_braille_dots_48: number;
export const KEY_braille_dots_5: number;
export const KEY_braille_dots_56: number;
export const KEY_braille_dots_567: number;
export const KEY_braille_dots_5678: number;
export const KEY_braille_dots_568: number;
export const KEY_braille_dots_57: number;
export const KEY_braille_dots_578: number;
export const KEY_braille_dots_58: number;
export const KEY_braille_dots_6: number;
export const KEY_braille_dots_67: number;
export const KEY_braille_dots_678: number;
export const KEY_braille_dots_68: number;
export const KEY_braille_dots_7: number;
export const KEY_braille_dots_78: number;
export const KEY_braille_dots_8: number;
export const KEY_breve: number;
export const KEY_brokenbar: number;
export const KEY_c: number;
export const KEY_c_h: number;
export const KEY_cabovedot: number;
export const KEY_cacute: number;
export const KEY_careof: number;
export const KEY_caret: number;
export const KEY_caron: number;
export const KEY_ccaron: number;
export const KEY_ccedilla: number;
export const KEY_ccircumflex: number;
export const KEY_cedilla: number;
export const KEY_cent: number;
export const KEY_ch: number;
export const KEY_checkerboard: number;
export const KEY_checkmark: number;
export const KEY_circle: number;
export const KEY_club: number;
export const KEY_colon: number;
export const KEY_comma: number;
export const KEY_containsas: number;
export const KEY_copyright: number;
export const KEY_cr: number;
export const KEY_crossinglines: number;
export const KEY_cuberoot: number;
export const KEY_currency: number;
export const KEY_cursor: number;
export const KEY_d: number;
export const KEY_dabovedot: number;
export const KEY_dagger: number;
export const KEY_dcaron: number;
export const KEY_dead_A: number;
export const KEY_dead_E: number;
export const KEY_dead_I: number;
export const KEY_dead_O: number;
export const KEY_dead_U: number;
export const KEY_dead_a: number;
export const KEY_dead_abovecomma: number;
export const KEY_dead_abovedot: number;
export const KEY_dead_abovereversedcomma: number;
export const KEY_dead_abovering: number;
export const KEY_dead_acute: number;
export const KEY_dead_belowbreve: number;
export const KEY_dead_belowcircumflex: number;
export const KEY_dead_belowcomma: number;
export const KEY_dead_belowdiaeresis: number;
export const KEY_dead_belowdot: number;
export const KEY_dead_belowmacron: number;
export const KEY_dead_belowring: number;
export const KEY_dead_belowtilde: number;
export const KEY_dead_breve: number;
export const KEY_dead_capital_schwa: number;
export const KEY_dead_caron: number;
export const KEY_dead_cedilla: number;
export const KEY_dead_circumflex: number;
export const KEY_dead_currency: number;
export const KEY_dead_dasia: number;
export const KEY_dead_diaeresis: number;
export const KEY_dead_doubleacute: number;
export const KEY_dead_doublegrave: number;
export const KEY_dead_e: number;
export const KEY_dead_grave: number;
export const KEY_dead_greek: number;
export const KEY_dead_hook: number;
export const KEY_dead_horn: number;
export const KEY_dead_i: number;
export const KEY_dead_invertedbreve: number;
export const KEY_dead_iota: number;
export const KEY_dead_macron: number;
export const KEY_dead_o: number;
export const KEY_dead_ogonek: number;
export const KEY_dead_perispomeni: number;
export const KEY_dead_psili: number;
export const KEY_dead_semivoiced_sound: number;
export const KEY_dead_small_schwa: number;
export const KEY_dead_stroke: number;
export const KEY_dead_tilde: number;
export const KEY_dead_u: number;
export const KEY_dead_voiced_sound: number;
export const KEY_decimalpoint: number;
export const KEY_degree: number;
export const KEY_diaeresis: number;
export const KEY_diamond: number;
export const KEY_digitspace: number;
export const KEY_dintegral: number;
export const KEY_division: number;
export const KEY_dollar: number;
export const KEY_doubbaselinedot: number;
export const KEY_doubleacute: number;
export const KEY_doubledagger: number;
export const KEY_doublelowquotemark: number;
export const KEY_downarrow: number;
export const KEY_downcaret: number;
export const KEY_downshoe: number;
export const KEY_downstile: number;
export const KEY_downtack: number;
export const KEY_dstroke: number;
export const KEY_e: number;
export const KEY_eabovedot: number;
export const KEY_eacute: number;
export const KEY_ebelowdot: number;
export const KEY_ecaron: number;
export const KEY_ecircumflex: number;
export const KEY_ecircumflexacute: number;
export const KEY_ecircumflexbelowdot: number;
export const KEY_ecircumflexgrave: number;
export const KEY_ecircumflexhook: number;
export const KEY_ecircumflextilde: number;
export const KEY_ediaeresis: number;
export const KEY_egrave: number;
export const KEY_ehook: number;
export const KEY_eightsubscript: number;
export const KEY_eightsuperior: number;
export const KEY_elementof: number;
export const KEY_ellipsis: number;
export const KEY_em3space: number;
export const KEY_em4space: number;
export const KEY_emacron: number;
export const KEY_emdash: number;
export const KEY_emfilledcircle: number;
export const KEY_emfilledrect: number;
export const KEY_emopencircle: number;
export const KEY_emopenrectangle: number;
export const KEY_emptyset: number;
export const KEY_emspace: number;
export const KEY_endash: number;
export const KEY_enfilledcircbullet: number;
export const KEY_enfilledsqbullet: number;
export const KEY_eng: number;
export const KEY_enopencircbullet: number;
export const KEY_enopensquarebullet: number;
export const KEY_enspace: number;
export const KEY_eogonek: number;
export const KEY_equal: number;
export const KEY_eth: number;
export const KEY_etilde: number;
export const KEY_exclam: number;
export const KEY_exclamdown: number;
export const KEY_ezh: number;
export const KEY_f: number;
export const KEY_fabovedot: number;
export const KEY_femalesymbol: number;
export const KEY_ff: number;
export const KEY_figdash: number;
export const KEY_filledlefttribullet: number;
export const KEY_filledrectbullet: number;
export const KEY_filledrighttribullet: number;
export const KEY_filledtribulletdown: number;
export const KEY_filledtribulletup: number;
export const KEY_fiveeighths: number;
export const KEY_fivesixths: number;
export const KEY_fivesubscript: number;
export const KEY_fivesuperior: number;
export const KEY_fourfifths: number;
export const KEY_foursubscript: number;
export const KEY_foursuperior: number;
export const KEY_fourthroot: number;
export const KEY_function: number;
export const KEY_g: number;
export const KEY_gabovedot: number;
export const KEY_gbreve: number;
export const KEY_gcaron: number;
export const KEY_gcedilla: number;
export const KEY_gcircumflex: number;
export const KEY_grave: number;
export const KEY_greater: number;
export const KEY_greaterthanequal: number;
export const KEY_guillemotleft: number;
export const KEY_guillemotright: number;
export const KEY_h: number;
export const KEY_hairspace: number;
export const KEY_hcircumflex: number;
export const KEY_heart: number;
export const KEY_hebrew_aleph: number;
export const KEY_hebrew_ayin: number;
export const KEY_hebrew_bet: number;
export const KEY_hebrew_beth: number;
export const KEY_hebrew_chet: number;
export const KEY_hebrew_dalet: number;
export const KEY_hebrew_daleth: number;
export const KEY_hebrew_doublelowline: number;
export const KEY_hebrew_finalkaph: number;
export const KEY_hebrew_finalmem: number;
export const KEY_hebrew_finalnun: number;
export const KEY_hebrew_finalpe: number;
export const KEY_hebrew_finalzade: number;
export const KEY_hebrew_finalzadi: number;
export const KEY_hebrew_gimel: number;
export const KEY_hebrew_gimmel: number;
export const KEY_hebrew_he: number;
export const KEY_hebrew_het: number;
export const KEY_hebrew_kaph: number;
export const KEY_hebrew_kuf: number;
export const KEY_hebrew_lamed: number;
export const KEY_hebrew_mem: number;
export const KEY_hebrew_nun: number;
export const KEY_hebrew_pe: number;
export const KEY_hebrew_qoph: number;
export const KEY_hebrew_resh: number;
export const KEY_hebrew_samech: number;
export const KEY_hebrew_samekh: number;
export const KEY_hebrew_shin: number;
export const KEY_hebrew_taf: number;
export const KEY_hebrew_taw: number;
export const KEY_hebrew_tet: number;
export const KEY_hebrew_teth: number;
export const KEY_hebrew_waw: number;
export const KEY_hebrew_yod: number;
export const KEY_hebrew_zade: number;
export const KEY_hebrew_zadi: number;
export const KEY_hebrew_zain: number;
export const KEY_hebrew_zayin: number;
export const KEY_hexagram: number;
export const KEY_horizconnector: number;
export const KEY_horizlinescan1: number;
export const KEY_horizlinescan3: number;
export const KEY_horizlinescan5: number;
export const KEY_horizlinescan7: number;
export const KEY_horizlinescan9: number;
export const KEY_hstroke: number;
export const KEY_ht: number;
export const KEY_hyphen: number;
export const KEY_i: number;
export const KEY_iTouch: number;
export const KEY_iacute: number;
export const KEY_ibelowdot: number;
export const KEY_ibreve: number;
export const KEY_icircumflex: number;
export const KEY_identical: number;
export const KEY_idiaeresis: number;
export const KEY_idotless: number;
export const KEY_ifonlyif: number;
export const KEY_igrave: number;
export const KEY_ihook: number;
export const KEY_imacron: number;
export const KEY_implies: number;
export const KEY_includedin: number;
export const KEY_includes: number;
export const KEY_infinity: number;
export const KEY_integral: number;
export const KEY_intersection: number;
export const KEY_iogonek: number;
export const KEY_itilde: number;
export const KEY_j: number;
export const KEY_jcircumflex: number;
export const KEY_jot: number;
export const KEY_k: number;
export const KEY_kana_A: number;
export const KEY_kana_CHI: number;
export const KEY_kana_E: number;
export const KEY_kana_FU: number;
export const KEY_kana_HA: number;
export const KEY_kana_HE: number;
export const KEY_kana_HI: number;
export const KEY_kana_HO: number;
export const KEY_kana_HU: number;
export const KEY_kana_I: number;
export const KEY_kana_KA: number;
export const KEY_kana_KE: number;
export const KEY_kana_KI: number;
export const KEY_kana_KO: number;
export const KEY_kana_KU: number;
export const KEY_kana_MA: number;
export const KEY_kana_ME: number;
export const KEY_kana_MI: number;
export const KEY_kana_MO: number;
export const KEY_kana_MU: number;
export const KEY_kana_N: number;
export const KEY_kana_NA: number;
export const KEY_kana_NE: number;
export const KEY_kana_NI: number;
export const KEY_kana_NO: number;
export const KEY_kana_NU: number;
export const KEY_kana_O: number;
export const KEY_kana_RA: number;
export const KEY_kana_RE: number;
export const KEY_kana_RI: number;
export const KEY_kana_RO: number;
export const KEY_kana_RU: number;
export const KEY_kana_SA: number;
export const KEY_kana_SE: number;
export const KEY_kana_SHI: number;
export const KEY_kana_SO: number;
export const KEY_kana_SU: number;
export const KEY_kana_TA: number;
export const KEY_kana_TE: number;
export const KEY_kana_TI: number;
export const KEY_kana_TO: number;
export const KEY_kana_TSU: number;
export const KEY_kana_TU: number;
export const KEY_kana_U: number;
export const KEY_kana_WA: number;
export const KEY_kana_WO: number;
export const KEY_kana_YA: number;
export const KEY_kana_YO: number;
export const KEY_kana_YU: number;
export const KEY_kana_a: number;
export const KEY_kana_closingbracket: number;
export const KEY_kana_comma: number;
export const KEY_kana_conjunctive: number;
export const KEY_kana_e: number;
export const KEY_kana_fullstop: number;
export const KEY_kana_i: number;
export const KEY_kana_middledot: number;
export const KEY_kana_o: number;
export const KEY_kana_openingbracket: number;
export const KEY_kana_switch: number;
export const KEY_kana_tsu: number;
export const KEY_kana_tu: number;
export const KEY_kana_u: number;
export const KEY_kana_ya: number;
export const KEY_kana_yo: number;
export const KEY_kana_yu: number;
export const KEY_kappa: number;
export const KEY_kcedilla: number;
export const KEY_kra: number;
export const KEY_l: number;
export const KEY_lacute: number;
export const KEY_latincross: number;
export const KEY_lbelowdot: number;
export const KEY_lcaron: number;
export const KEY_lcedilla: number;
export const KEY_leftanglebracket: number;
export const KEY_leftarrow: number;
export const KEY_leftcaret: number;
export const KEY_leftdoublequotemark: number;
export const KEY_leftmiddlecurlybrace: number;
export const KEY_leftopentriangle: number;
export const KEY_leftpointer: number;
export const KEY_leftradical: number;
export const KEY_leftshoe: number;
export const KEY_leftsinglequotemark: number;
export const KEY_leftt: number;
export const KEY_lefttack: number;
export const KEY_less: number;
export const KEY_lessthanequal: number;
export const KEY_lf: number;
export const KEY_logicaland: number;
export const KEY_logicalor: number;
export const KEY_lowleftcorner: number;
export const KEY_lowrightcorner: number;
export const KEY_lstroke: number;
export const KEY_m: number;
export const KEY_mabovedot: number;
export const KEY_macron: number;
export const KEY_malesymbol: number;
export const KEY_maltesecross: number;
export const KEY_marker: number;
export const KEY_masculine: number;
export const KEY_minus: number;
export const KEY_minutes: number;
export const KEY_mu: number;
export const KEY_multiply: number;
export const KEY_musicalflat: number;
export const KEY_musicalsharp: number;
export const KEY_n: number;
export const KEY_nabla: number;
export const KEY_nacute: number;
export const KEY_ncaron: number;
export const KEY_ncedilla: number;
export const KEY_ninesubscript: number;
export const KEY_ninesuperior: number;
export const KEY_nl: number;
export const KEY_nobreakspace: number;
export const KEY_notapproxeq: number;
export const KEY_notelementof: number;
export const KEY_notequal: number;
export const KEY_notidentical: number;
export const KEY_notsign: number;
export const KEY_ntilde: number;
export const KEY_numbersign: number;
export const KEY_numerosign: number;
export const KEY_o: number;
export const KEY_oacute: number;
export const KEY_obarred: number;
export const KEY_obelowdot: number;
export const KEY_ocaron: number;
export const KEY_ocircumflex: number;
export const KEY_ocircumflexacute: number;
export const KEY_ocircumflexbelowdot: number;
export const KEY_ocircumflexgrave: number;
export const KEY_ocircumflexhook: number;
export const KEY_ocircumflextilde: number;
export const KEY_odiaeresis: number;
export const KEY_odoubleacute: number;
export const KEY_oe: number;
export const KEY_ogonek: number;
export const KEY_ograve: number;
export const KEY_ohook: number;
export const KEY_ohorn: number;
export const KEY_ohornacute: number;
export const KEY_ohornbelowdot: number;
export const KEY_ohorngrave: number;
export const KEY_ohornhook: number;
export const KEY_ohorntilde: number;
export const KEY_omacron: number;
export const KEY_oneeighth: number;
export const KEY_onefifth: number;
export const KEY_onehalf: number;
export const KEY_onequarter: number;
export const KEY_onesixth: number;
export const KEY_onesubscript: number;
export const KEY_onesuperior: number;
export const KEY_onethird: number;
export const KEY_ooblique: number;
export const KEY_openrectbullet: number;
export const KEY_openstar: number;
export const KEY_opentribulletdown: number;
export const KEY_opentribulletup: number;
export const KEY_ordfeminine: number;
export const KEY_oslash: number;
export const KEY_otilde: number;
export const KEY_overbar: number;
export const KEY_overline: number;
export const KEY_p: number;
export const KEY_pabovedot: number;
export const KEY_paragraph: number;
export const KEY_parenleft: number;
export const KEY_parenright: number;
export const KEY_partdifferential: number;
export const KEY_partialderivative: number;
export const KEY_percent: number;
export const KEY_period: number;
export const KEY_periodcentered: number;
export const KEY_permille: number;
export const KEY_phonographcopyright: number;
export const KEY_plus: number;
export const KEY_plusminus: number;
export const KEY_prescription: number;
export const KEY_prolongedsound: number;
export const KEY_punctspace: number;
export const KEY_q: number;
export const KEY_quad: number;
export const KEY_question: number;
export const KEY_questiondown: number;
export const KEY_quotedbl: number;
export const KEY_quoteleft: number;
export const KEY_quoteright: number;
export const KEY_r: number;
export const KEY_racute: number;
export const KEY_radical: number;
export const KEY_rcaron: number;
export const KEY_rcedilla: number;
export const KEY_registered: number;
export const KEY_rightanglebracket: number;
export const KEY_rightarrow: number;
export const KEY_rightcaret: number;
export const KEY_rightdoublequotemark: number;
export const KEY_rightmiddlecurlybrace: number;
export const KEY_rightmiddlesummation: number;
export const KEY_rightopentriangle: number;
export const KEY_rightpointer: number;
export const KEY_rightshoe: number;
export const KEY_rightsinglequotemark: number;
export const KEY_rightt: number;
export const KEY_righttack: number;
export const KEY_s: number;
export const KEY_sabovedot: number;
export const KEY_sacute: number;
export const KEY_scaron: number;
export const KEY_scedilla: number;
export const KEY_schwa: number;
export const KEY_scircumflex: number;
export const KEY_script_switch: number;
export const KEY_seconds: number;
export const KEY_section: number;
export const KEY_semicolon: number;
export const KEY_semivoicedsound: number;
export const KEY_seveneighths: number;
export const KEY_sevensubscript: number;
export const KEY_sevensuperior: number;
export const KEY_signaturemark: number;
export const KEY_signifblank: number;
export const KEY_similarequal: number;
export const KEY_singlelowquotemark: number;
export const KEY_sixsubscript: number;
export const KEY_sixsuperior: number;
export const KEY_slash: number;
export const KEY_soliddiamond: number;
export const KEY_space: number;
export const KEY_squareroot: number;
export const KEY_ssharp: number;
export const KEY_sterling: number;
export const KEY_stricteq: number;
export const KEY_t: number;
export const KEY_tabovedot: number;
export const KEY_tcaron: number;
export const KEY_tcedilla: number;
export const KEY_telephone: number;
export const KEY_telephonerecorder: number;
export const KEY_therefore: number;
export const KEY_thinspace: number;
export const KEY_thorn: number;
export const KEY_threeeighths: number;
export const KEY_threefifths: number;
export const KEY_threequarters: number;
export const KEY_threesubscript: number;
export const KEY_threesuperior: number;
export const KEY_tintegral: number;
export const KEY_topintegral: number;
export const KEY_topleftparens: number;
export const KEY_topleftradical: number;
export const KEY_topleftsqbracket: number;
export const KEY_topleftsummation: number;
export const KEY_toprightparens: number;
export const KEY_toprightsqbracket: number;
export const KEY_toprightsummation: number;
export const KEY_topt: number;
export const KEY_topvertsummationconnector: number;
export const KEY_trademark: number;
export const KEY_trademarkincircle: number;
export const KEY_tslash: number;
export const KEY_twofifths: number;
export const KEY_twosubscript: number;
export const KEY_twosuperior: number;
export const KEY_twothirds: number;
export const KEY_u: number;
export const KEY_uacute: number;
export const KEY_ubelowdot: number;
export const KEY_ubreve: number;
export const KEY_ucircumflex: number;
export const KEY_udiaeresis: number;
export const KEY_udoubleacute: number;
export const KEY_ugrave: number;
export const KEY_uhook: number;
export const KEY_uhorn: number;
export const KEY_uhornacute: number;
export const KEY_uhornbelowdot: number;
export const KEY_uhorngrave: number;
export const KEY_uhornhook: number;
export const KEY_uhorntilde: number;
export const KEY_umacron: number;
export const KEY_underbar: number;
export const KEY_underscore: number;
export const KEY_union: number;
export const KEY_uogonek: number;
export const KEY_uparrow: number;
export const KEY_upcaret: number;
export const KEY_upleftcorner: number;
export const KEY_uprightcorner: number;
export const KEY_upshoe: number;
export const KEY_upstile: number;
export const KEY_uptack: number;
export const KEY_uring: number;
export const KEY_utilde: number;
export const KEY_v: number;
export const KEY_variation: number;
export const KEY_vertbar: number;
export const KEY_vertconnector: number;
export const KEY_voicedsound: number;
export const KEY_vt: number;
export const KEY_w: number;
export const KEY_wacute: number;
export const KEY_wcircumflex: number;
export const KEY_wdiaeresis: number;
export const KEY_wgrave: number;
export const KEY_x: number;
export const KEY_xabovedot: number;
export const KEY_y: number;
export const KEY_yacute: number;
export const KEY_ybelowdot: number;
export const KEY_ycircumflex: number;
export const KEY_ydiaeresis: number;
export const KEY_yen: number;
export const KEY_ygrave: number;
export const KEY_yhook: number;
export const KEY_ytilde: number;
export const KEY_z: number;
export const KEY_zabovedot: number;
export const KEY_zacute: number;
export const KEY_zcaron: number;
export const KEY_zerosubscript: number;
export const KEY_zerosuperior: number;
export const KEY_zstroke: number;
export const MAJOR_VERSION: number;
export const MAX_TIMECOORD_AXES: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const PARENT_RELATIVE: number;
export const PRIORITY_REDRAW: number;
export enum AxisUse {
  GDK_AXIS_IGNORE,
  GDK_AXIS_X,
  GDK_AXIS_Y,
  GDK_AXIS_PRESSURE,
  GDK_AXIS_XTILT,
  GDK_AXIS_YTILT,
  GDK_AXIS_WHEEL,
  GDK_AXIS_DISTANCE,
  GDK_AXIS_ROTATION,
  GDK_AXIS_SLIDER,
  GDK_AXIS_LAST,
}
export enum ByteOrder {
  GDK_LSB_FIRST,
  GDK_MSB_FIRST,
}
export enum CrossingMode {
  GDK_CROSSING_NORMAL,
  GDK_CROSSING_GRAB,
  GDK_CROSSING_UNGRAB,
  GDK_CROSSING_GTK_GRAB,
  GDK_CROSSING_GTK_UNGRAB,
  GDK_CROSSING_STATE_CHANGED,
  GDK_CROSSING_TOUCH_BEGIN,
  GDK_CROSSING_TOUCH_END,
  GDK_CROSSING_DEVICE_SWITCH,
}
export enum CursorType {
  GDK_X_CURSOR,
  GDK_ARROW,
  GDK_BASED_ARROW_DOWN,
  GDK_BASED_ARROW_UP,
  GDK_BOAT,
  GDK_BOGOSITY,
  GDK_BOTTOM_LEFT_CORNER,
  GDK_BOTTOM_RIGHT_CORNER,
  GDK_BOTTOM_SIDE,
  GDK_BOTTOM_TEE,
  GDK_BOX_SPIRAL,
  GDK_CENTER_PTR,
  GDK_CIRCLE,
  GDK_CLOCK,
  GDK_COFFEE_MUG,
  GDK_CROSS,
  GDK_CROSS_REVERSE,
  GDK_CROSSHAIR,
  GDK_DIAMOND_CROSS,
  GDK_DOT,
  GDK_DOTBOX,
  GDK_DOUBLE_ARROW,
  GDK_DRAFT_LARGE,
  GDK_DRAFT_SMALL,
  GDK_DRAPED_BOX,
  GDK_EXCHANGE,
  GDK_FLEUR,
  GDK_GOBBLER,
  GDK_GUMBY,
  GDK_HAND1,
  GDK_HAND2,
  GDK_HEART,
  GDK_ICON,
  GDK_IRON_CROSS,
  GDK_LEFT_PTR,
  GDK_LEFT_SIDE,
  GDK_LEFT_TEE,
  GDK_LEFTBUTTON,
  GDK_LL_ANGLE,
  GDK_LR_ANGLE,
  GDK_MAN,
  GDK_MIDDLEBUTTON,
  GDK_MOUSE,
  GDK_PENCIL,
  GDK_PIRATE,
  GDK_PLUS,
  GDK_QUESTION_ARROW,
  GDK_RIGHT_PTR,
  GDK_RIGHT_SIDE,
  GDK_RIGHT_TEE,
  GDK_RIGHTBUTTON,
  GDK_RTL_LOGO,
  GDK_SAILBOAT,
  GDK_SB_DOWN_ARROW,
  GDK_SB_H_DOUBLE_ARROW,
  GDK_SB_LEFT_ARROW,
  GDK_SB_RIGHT_ARROW,
  GDK_SB_UP_ARROW,
  GDK_SB_V_DOUBLE_ARROW,
  GDK_SHUTTLE,
  GDK_SIZING,
  GDK_SPIDER,
  GDK_SPRAYCAN,
  GDK_STAR,
  GDK_TARGET,
  GDK_TCROSS,
  GDK_TOP_LEFT_ARROW,
  GDK_TOP_LEFT_CORNER,
  GDK_TOP_RIGHT_CORNER,
  GDK_TOP_SIDE,
  GDK_TOP_TEE,
  GDK_TREK,
  GDK_UL_ANGLE,
  GDK_UMBRELLA,
  GDK_UR_ANGLE,
  GDK_WATCH,
  GDK_XTERM,
  GDK_LAST_CURSOR,
  GDK_BLANK_CURSOR,
  GDK_CURSOR_IS_PIXMAP,
}
export enum DevicePadFeature {
  GDK_DEVICE_PAD_FEATURE_BUTTON,
  GDK_DEVICE_PAD_FEATURE_RING,
  GDK_DEVICE_PAD_FEATURE_STRIP,
}
export enum DeviceToolType {
  GDK_DEVICE_TOOL_TYPE_UNKNOWN,
  GDK_DEVICE_TOOL_TYPE_PEN,
  GDK_DEVICE_TOOL_TYPE_ERASER,
  GDK_DEVICE_TOOL_TYPE_BRUSH,
  GDK_DEVICE_TOOL_TYPE_PENCIL,
  GDK_DEVICE_TOOL_TYPE_AIRBRUSH,
  GDK_DEVICE_TOOL_TYPE_MOUSE,
  GDK_DEVICE_TOOL_TYPE_LENS,
}
export enum DeviceType {
  GDK_DEVICE_TYPE_MASTER,
  GDK_DEVICE_TYPE_SLAVE,
  GDK_DEVICE_TYPE_FLOATING,
}
export enum DragCancelReason {
  GDK_DRAG_CANCEL_NO_TARGET,
  GDK_DRAG_CANCEL_USER_CANCELLED,
  GDK_DRAG_CANCEL_ERROR,
}
export enum DragProtocol {
  GDK_DRAG_PROTO_NONE,
  GDK_DRAG_PROTO_MOTIF,
  GDK_DRAG_PROTO_XDND,
  GDK_DRAG_PROTO_ROOTWIN,
  GDK_DRAG_PROTO_WIN32_DROPFILES,
  GDK_DRAG_PROTO_OLE2,
  GDK_DRAG_PROTO_LOCAL,
  GDK_DRAG_PROTO_WAYLAND,
}
export enum EventType {
  GDK_NOTHING,
  GDK_DELETE,
  GDK_DESTROY,
  GDK_EXPOSE,
  GDK_MOTION_NOTIFY,
  GDK_BUTTON_PRESS,
  GDK_2BUTTON_PRESS,
  GDK_DOUBLE_BUTTON_PRESS,
  GDK_3BUTTON_PRESS,
  GDK_TRIPLE_BUTTON_PRESS,
  GDK_BUTTON_RELEASE,
  GDK_KEY_PRESS,
  GDK_KEY_RELEASE,
  GDK_ENTER_NOTIFY,
  GDK_LEAVE_NOTIFY,
  GDK_FOCUS_CHANGE,
  GDK_CONFIGURE,
  GDK_MAP,
  GDK_UNMAP,
  GDK_PROPERTY_NOTIFY,
  GDK_SELECTION_CLEAR,
  GDK_SELECTION_REQUEST,
  GDK_SELECTION_NOTIFY,
  GDK_PROXIMITY_IN,
  GDK_PROXIMITY_OUT,
  GDK_DRAG_ENTER,
  GDK_DRAG_LEAVE,
  GDK_DRAG_MOTION,
  GDK_DRAG_STATUS,
  GDK_DROP_START,
  GDK_DROP_FINISHED,
  GDK_CLIENT_EVENT,
  GDK_VISIBILITY_NOTIFY,
  GDK_SCROLL,
  GDK_WINDOW_STATE,
  GDK_SETTING,
  GDK_OWNER_CHANGE,
  GDK_GRAB_BROKEN,
  GDK_DAMAGE,
  GDK_TOUCH_BEGIN,
  GDK_TOUCH_UPDATE,
  GDK_TOUCH_END,
  GDK_TOUCH_CANCEL,
  GDK_TOUCHPAD_SWIPE,
  GDK_TOUCHPAD_PINCH,
  GDK_PAD_BUTTON_PRESS,
  GDK_PAD_BUTTON_RELEASE,
  GDK_PAD_RING,
  GDK_PAD_STRIP,
  GDK_PAD_GROUP_MODE,
  GDK_EVENT_LAST,
}
export enum FilterReturn {
  GDK_FILTER_CONTINUE,
  GDK_FILTER_TRANSLATE,
  GDK_FILTER_REMOVE,
}
export enum FullscreenMode {
  GDK_FULLSCREEN_ON_CURRENT_MONITOR,
  GDK_FULLSCREEN_ON_ALL_MONITORS,
}
export enum GLError {
  GDK_GL_ERROR_NOT_AVAILABLE,
  GDK_GL_ERROR_UNSUPPORTED_FORMAT,
  GDK_GL_ERROR_UNSUPPORTED_PROFILE,
}
export enum GrabOwnership {
  GDK_OWNERSHIP_NONE,
  GDK_OWNERSHIP_WINDOW,
  GDK_OWNERSHIP_APPLICATION,
}
export enum GrabStatus {
  GDK_GRAB_SUCCESS,
  GDK_GRAB_ALREADY_GRABBED,
  GDK_GRAB_INVALID_TIME,
  GDK_GRAB_NOT_VIEWABLE,
  GDK_GRAB_FROZEN,
  GDK_GRAB_FAILED,
}
export enum Gravity {
  GDK_GRAVITY_NORTH_WEST,
  GDK_GRAVITY_NORTH,
  GDK_GRAVITY_NORTH_EAST,
  GDK_GRAVITY_WEST,
  GDK_GRAVITY_CENTER,
  GDK_GRAVITY_EAST,
  GDK_GRAVITY_SOUTH_WEST,
  GDK_GRAVITY_SOUTH,
  GDK_GRAVITY_SOUTH_EAST,
  GDK_GRAVITY_STATIC,
}
export enum InputMode {
  GDK_MODE_DISABLED,
  GDK_MODE_SCREEN,
  GDK_MODE_WINDOW,
}
export enum InputSource {
  GDK_SOURCE_MOUSE,
  GDK_SOURCE_PEN,
  GDK_SOURCE_ERASER,
  GDK_SOURCE_CURSOR,
  GDK_SOURCE_KEYBOARD,
  GDK_SOURCE_TOUCHSCREEN,
  GDK_SOURCE_TOUCHPAD,
  GDK_SOURCE_TRACKPOINT,
  GDK_SOURCE_TABLET_PAD,
}
export enum ModifierIntent {
  GDK_MODIFIER_INTENT_PRIMARY_ACCELERATOR,
  GDK_MODIFIER_INTENT_CONTEXT_MENU,
  GDK_MODIFIER_INTENT_EXTEND_SELECTION,
  GDK_MODIFIER_INTENT_MODIFY_SELECTION,
  GDK_MODIFIER_INTENT_NO_TEXT_INPUT,
  GDK_MODIFIER_INTENT_SHIFT_GROUP,
  GDK_MODIFIER_INTENT_DEFAULT_MOD_MASK,
}
export enum NotifyType {
  GDK_NOTIFY_ANCESTOR,
  GDK_NOTIFY_VIRTUAL,
  GDK_NOTIFY_INFERIOR,
  GDK_NOTIFY_NONLINEAR,
  GDK_NOTIFY_NONLINEAR_VIRTUAL,
  GDK_NOTIFY_UNKNOWN,
}
export enum OwnerChange {
  GDK_OWNER_CHANGE_NEW_OWNER,
  GDK_OWNER_CHANGE_DESTROY,
  GDK_OWNER_CHANGE_CLOSE,
}
export enum PropMode {
  GDK_PROP_MODE_REPLACE,
  GDK_PROP_MODE_PREPEND,
  GDK_PROP_MODE_APPEND,
}
export enum PropertyState {
  GDK_PROPERTY_NEW_VALUE,
  GDK_PROPERTY_DELETE,
}
export enum ScrollDirection {
  GDK_SCROLL_UP,
  GDK_SCROLL_DOWN,
  GDK_SCROLL_LEFT,
  GDK_SCROLL_RIGHT,
  GDK_SCROLL_SMOOTH,
}
export enum SettingAction {
  GDK_SETTING_ACTION_NEW,
  GDK_SETTING_ACTION_CHANGED,
  GDK_SETTING_ACTION_DELETED,
}
export enum Status {
  GDK_OK,
  GDK_ERROR,
  GDK_ERROR_PARAM,
  GDK_ERROR_FILE,
  GDK_ERROR_MEM,
}
export enum SubpixelLayout {
  GDK_SUBPIXEL_LAYOUT_UNKNOWN,
  GDK_SUBPIXEL_LAYOUT_NONE,
  GDK_SUBPIXEL_LAYOUT_HORIZONTAL_RGB,
  GDK_SUBPIXEL_LAYOUT_HORIZONTAL_BGR,
  GDK_SUBPIXEL_LAYOUT_VERTICAL_RGB,
  GDK_SUBPIXEL_LAYOUT_VERTICAL_BGR,
}
export enum TouchpadGesturePhase {
  GDK_TOUCHPAD_GESTURE_PHASE_BEGIN,
  GDK_TOUCHPAD_GESTURE_PHASE_UPDATE,
  GDK_TOUCHPAD_GESTURE_PHASE_END,
  GDK_TOUCHPAD_GESTURE_PHASE_CANCEL,
}
export enum VisibilityState {
  GDK_VISIBILITY_UNOBSCURED,
  GDK_VISIBILITY_PARTIAL,
  GDK_VISIBILITY_FULLY_OBSCURED,
}
export enum VisualType {
  GDK_VISUAL_STATIC_GRAY,
  GDK_VISUAL_GRAYSCALE,
  GDK_VISUAL_STATIC_COLOR,
  GDK_VISUAL_PSEUDO_COLOR,
  GDK_VISUAL_TRUE_COLOR,
  GDK_VISUAL_DIRECT_COLOR,
}
export enum WindowEdge {
  GDK_WINDOW_EDGE_NORTH_WEST,
  GDK_WINDOW_EDGE_NORTH,
  GDK_WINDOW_EDGE_NORTH_EAST,
  GDK_WINDOW_EDGE_WEST,
  GDK_WINDOW_EDGE_EAST,
  GDK_WINDOW_EDGE_SOUTH_WEST,
  GDK_WINDOW_EDGE_SOUTH,
  GDK_WINDOW_EDGE_SOUTH_EAST,
}
export enum WindowType {
  GDK_WINDOW_ROOT,
  GDK_WINDOW_TOPLEVEL,
  GDK_WINDOW_CHILD,
  GDK_WINDOW_TEMP,
  GDK_WINDOW_FOREIGN,
  GDK_WINDOW_OFFSCREEN,
  GDK_WINDOW_SUBSURFACE,
}
export enum WindowTypeHint {
  GDK_WINDOW_TYPE_HINT_NORMAL,
  GDK_WINDOW_TYPE_HINT_DIALOG,
  GDK_WINDOW_TYPE_HINT_MENU,
  GDK_WINDOW_TYPE_HINT_TOOLBAR,
  GDK_WINDOW_TYPE_HINT_SPLASHSCREEN,
  GDK_WINDOW_TYPE_HINT_UTILITY,
  GDK_WINDOW_TYPE_HINT_DOCK,
  GDK_WINDOW_TYPE_HINT_DESKTOP,
  GDK_WINDOW_TYPE_HINT_DROPDOWN_MENU,
  GDK_WINDOW_TYPE_HINT_POPUP_MENU,
  GDK_WINDOW_TYPE_HINT_TOOLTIP,
  GDK_WINDOW_TYPE_HINT_NOTIFICATION,
  GDK_WINDOW_TYPE_HINT_COMBO,
  GDK_WINDOW_TYPE_HINT_DND,
}
export enum WindowWindowClass {
  GDK_INPUT_OUTPUT,
  GDK_INPUT_ONLY,
}
export enum AnchorHints {
  GDK_ANCHOR_FLIP_X,
  GDK_ANCHOR_FLIP_Y,
  GDK_ANCHOR_SLIDE_X,
  GDK_ANCHOR_SLIDE_Y,
  GDK_ANCHOR_RESIZE_X,
  GDK_ANCHOR_RESIZE_Y,
  GDK_ANCHOR_FLIP,
  GDK_ANCHOR_SLIDE,
  GDK_ANCHOR_RESIZE,
}
export enum AxisFlags {
  GDK_AXIS_FLAG_X,
  GDK_AXIS_FLAG_Y,
  GDK_AXIS_FLAG_PRESSURE,
  GDK_AXIS_FLAG_XTILT,
  GDK_AXIS_FLAG_YTILT,
  GDK_AXIS_FLAG_WHEEL,
  GDK_AXIS_FLAG_DISTANCE,
  GDK_AXIS_FLAG_ROTATION,
  GDK_AXIS_FLAG_SLIDER,
}
export enum DragAction {
  GDK_ACTION_DEFAULT,
  GDK_ACTION_COPY,
  GDK_ACTION_MOVE,
  GDK_ACTION_LINK,
  GDK_ACTION_PRIVATE,
  GDK_ACTION_ASK,
}
export enum EventMask {
  GDK_EXPOSURE_MASK,
  GDK_POINTER_MOTION_MASK,
  GDK_POINTER_MOTION_HINT_MASK,
  GDK_BUTTON_MOTION_MASK,
  GDK_BUTTON1_MOTION_MASK,
  GDK_BUTTON2_MOTION_MASK,
  GDK_BUTTON3_MOTION_MASK,
  GDK_BUTTON_PRESS_MASK,
  GDK_BUTTON_RELEASE_MASK,
  GDK_KEY_PRESS_MASK,
  GDK_KEY_RELEASE_MASK,
  GDK_ENTER_NOTIFY_MASK,
  GDK_LEAVE_NOTIFY_MASK,
  GDK_FOCUS_CHANGE_MASK,
  GDK_STRUCTURE_MASK,
  GDK_PROPERTY_CHANGE_MASK,
  GDK_VISIBILITY_NOTIFY_MASK,
  GDK_PROXIMITY_IN_MASK,
  GDK_PROXIMITY_OUT_MASK,
  GDK_SUBSTRUCTURE_MASK,
  GDK_SCROLL_MASK,
  GDK_TOUCH_MASK,
  GDK_SMOOTH_SCROLL_MASK,
  GDK_TOUCHPAD_GESTURE_MASK,
  GDK_TABLET_PAD_MASK,
  GDK_ALL_EVENTS_MASK,
}
export enum FrameClockPhase {
  GDK_FRAME_CLOCK_PHASE_NONE,
  GDK_FRAME_CLOCK_PHASE_FLUSH_EVENTS,
  GDK_FRAME_CLOCK_PHASE_BEFORE_PAINT,
  GDK_FRAME_CLOCK_PHASE_UPDATE,
  GDK_FRAME_CLOCK_PHASE_LAYOUT,
  GDK_FRAME_CLOCK_PHASE_PAINT,
  GDK_FRAME_CLOCK_PHASE_RESUME_EVENTS,
  GDK_FRAME_CLOCK_PHASE_AFTER_PAINT,
}
export enum ModifierType {
  GDK_SHIFT_MASK,
  GDK_LOCK_MASK,
  GDK_CONTROL_MASK,
  GDK_MOD1_MASK,
  GDK_MOD2_MASK,
  GDK_MOD3_MASK,
  GDK_MOD4_MASK,
  GDK_MOD5_MASK,
  GDK_BUTTON1_MASK,
  GDK_BUTTON2_MASK,
  GDK_BUTTON3_MASK,
  GDK_BUTTON4_MASK,
  GDK_BUTTON5_MASK,
  GDK_MODIFIER_RESERVED_13_MASK,
  GDK_MODIFIER_RESERVED_14_MASK,
  GDK_MODIFIER_RESERVED_15_MASK,
  GDK_MODIFIER_RESERVED_16_MASK,
  GDK_MODIFIER_RESERVED_17_MASK,
  GDK_MODIFIER_RESERVED_18_MASK,
  GDK_MODIFIER_RESERVED_19_MASK,
  GDK_MODIFIER_RESERVED_20_MASK,
  GDK_MODIFIER_RESERVED_21_MASK,
  GDK_MODIFIER_RESERVED_22_MASK,
  GDK_MODIFIER_RESERVED_23_MASK,
  GDK_MODIFIER_RESERVED_24_MASK,
  GDK_MODIFIER_RESERVED_25_MASK,
  GDK_SUPER_MASK,
  GDK_HYPER_MASK,
  GDK_META_MASK,
  GDK_MODIFIER_RESERVED_29_MASK,
  GDK_RELEASE_MASK,
  GDK_MODIFIER_MASK,
}
export enum SeatCapabilities {
  GDK_SEAT_CAPABILITY_NONE,
  GDK_SEAT_CAPABILITY_POINTER,
  GDK_SEAT_CAPABILITY_TOUCH,
  GDK_SEAT_CAPABILITY_TABLET_STYLUS,
  GDK_SEAT_CAPABILITY_KEYBOARD,
  GDK_SEAT_CAPABILITY_ALL_POINTING,
  GDK_SEAT_CAPABILITY_ALL,
}
export enum WMDecoration {
  GDK_DECOR_ALL,
  GDK_DECOR_BORDER,
  GDK_DECOR_RESIZEH,
  GDK_DECOR_TITLE,
  GDK_DECOR_MENU,
  GDK_DECOR_MINIMIZE,
  GDK_DECOR_MAXIMIZE,
}
export enum WMFunction {
  GDK_FUNC_ALL,
  GDK_FUNC_RESIZE,
  GDK_FUNC_MOVE,
  GDK_FUNC_MINIMIZE,
  GDK_FUNC_MAXIMIZE,
  GDK_FUNC_CLOSE,
}
export enum WindowAttributesType {
  GDK_WA_TITLE,
  GDK_WA_X,
  GDK_WA_Y,
  GDK_WA_CURSOR,
  GDK_WA_VISUAL,
  GDK_WA_WMCLASS,
  GDK_WA_NOREDIR,
  GDK_WA_TYPE_HINT,
}
export enum WindowHints {
  GDK_HINT_POS,
  GDK_HINT_MIN_SIZE,
  GDK_HINT_MAX_SIZE,
  GDK_HINT_BASE_SIZE,
  GDK_HINT_ASPECT,
  GDK_HINT_RESIZE_INC,
  GDK_HINT_WIN_GRAVITY,
  GDK_HINT_USER_POS,
  GDK_HINT_USER_SIZE,
}
export enum WindowState {
  GDK_WINDOW_STATE_WITHDRAWN,
  GDK_WINDOW_STATE_ICONIFIED,
  GDK_WINDOW_STATE_MAXIMIZED,
  GDK_WINDOW_STATE_STICKY,
  GDK_WINDOW_STATE_FULLSCREEN,
  GDK_WINDOW_STATE_ABOVE,
  GDK_WINDOW_STATE_BELOW,
  GDK_WINDOW_STATE_FOCUSED,
  GDK_WINDOW_STATE_TILED,
  GDK_WINDOW_STATE_TOP_TILED,
  GDK_WINDOW_STATE_TOP_RESIZABLE,
  GDK_WINDOW_STATE_RIGHT_TILED,
  GDK_WINDOW_STATE_RIGHT_RESIZABLE,
  GDK_WINDOW_STATE_BOTTOM_TILED,
  GDK_WINDOW_STATE_BOTTOM_RESIZABLE,
  GDK_WINDOW_STATE_LEFT_TILED,
  GDK_WINDOW_STATE_LEFT_RESIZABLE,
}
export type XEvent = void;
export type Event = EventType | EventAny | EventExpose | EventVisibility | EventMotion | EventButton | EventTouch | EventScroll | EventKey | EventCrossing | EventFocus | EventConfigure | EventProperty | EventSelection | EventOwnerChange | EventProximity | EventDND | EventWindowState | EventSetting | EventGrabBroken | EventTouchpadSwipe | EventTouchpadPinch | EventPadButton | EventPadAxis | EventPadGroupMode;
export interface DevicePad {
  get_feature_group(feature: DevicePadFeature, feature_idx: number): number;
  get_group_n_modes(group_idx: number): number;
  get_n_features(feature: DevicePadFeature): number;
  get_n_groups(): number;
}
export class AppLaunchContext extends Gio.AppLaunchContext {
  constructor();
  display: Display;
  set_desktop(desktop: number): void;
  set_display(display: Display): void;
  set_icon(icon: Gio.Icon | null): void;
  set_icon_name(icon_name: string | null): void;
  set_screen(screen: Screen): void;
  set_timestamp(timestamp: number): void;
}
export class Cursor extends GObject.Object {
  constructor(cursor_type: CursorType);
  'cursor-type': CursorType;
  display: Display;
  get_cursor_type(): CursorType;
  get_display(): Display;
  get_image(): GdkPixbuf.Pixbuf | null;
  get_surface(x_hot?: number, y_hot?: number): cairo.Surface | null;
  ref(): Cursor;
  unref(): void;
}
export class Device extends GObject.Object {
  'associated-device': Device;
  axes: AxisFlags;
  'device-manager': DeviceManager;
  display: Display;
  'has-cursor': boolean;
  'input-mode': InputMode;
  'input-source': InputSource;
  'n-axes': number;
  name: string;
  'num-touches': number;
  'product-id': string;
  seat: Seat;
  tool: DeviceTool;
  type: DeviceType;
  'vendor-id': string;
  get_associated_device(): Device | null;
  get_axes(): AxisFlags;
  get_axis(axes: number[], use: AxisUse, value: number): boolean;
  get_axis_use(index_: number): AxisUse;
  get_axis_value(axes: number[], axis_label: Atom, value: number): boolean;
  get_device_type(): DeviceType;
  get_display(): Display;
  get_has_cursor(): boolean;
  get_history(window: Window, start: number, stop: number, events?: TimeCoord[], n_events?: number): boolean;
  get_key(index_: number, keyval: number, modifiers: ModifierType): boolean;
  get_last_event_window(): Window | null;
  get_mode(): InputMode;
  get_n_axes(): number;
  get_n_keys(): number;
  get_name(): string;
  get_position(screen?: Screen, x?: number, y?: number): void;
  get_position_double(screen?: Screen, x?: number, y?: number): void;
  get_product_id(): string | null;
  get_seat(): Seat;
  get_source(): InputSource;
  get_state(window: Window, axes: number[] | null, mask?: ModifierType): void;
  get_vendor_id(): string | null;
  get_window_at_position(win_x?: number, win_y?: number): Window | null;
  get_window_at_position_double(win_x?: number, win_y?: number): Window | null;
  grab(window: Window, grab_ownership: GrabOwnership, owner_events: boolean, event_mask: EventMask, cursor: Cursor | null, time_: number): GrabStatus;
  list_axes(): GLib.List;
  list_slave_devices(): GLib.List | null;
  set_axis_use(index_: number, use: AxisUse): void;
  set_key(index_: number, keyval: number, modifiers: ModifierType): void;
  set_mode(mode: InputMode): boolean;
  ungrab(time_: number): void;
  warp(screen: Screen, x: number, y: number): void;
  static free_history(events: TimeCoord[], n_events: number): void;
  static grab_info_libgtk_only(display: Display, device: Device, grab_window: Window, owner_events: boolean): boolean;
}
export class DeviceManager extends GObject.Object {
  display: Display;
  get_client_pointer(): Device;
  get_display(): Display | null;
  list_devices(type: DeviceType): GLib.List;
}
export class DeviceTool extends GObject.Object {
  axes: AxisFlags;
  'hardware-id': number;
  serial: number;
  'tool-type': DeviceToolType;
  get_hardware_id(): number;
  get_serial(): number;
  get_tool_type(): DeviceToolType;
}
export class Display extends GObject.Object {
  beep(): void;
  close(): void;
  device_is_grabbed(device: Device): boolean;
  flush(): void;
  get_app_launch_context(): AppLaunchContext;
  get_default_cursor_size(): number;
  get_default_group(): Window;
  get_default_screen(): Screen;
  get_default_seat(): Seat;
  get_device_manager(): DeviceManager | null;
  get_event(): Event | null;
  get_maximal_cursor_size(width: number, height: number): void;
  get_monitor(monitor_num: number): Monitor | null;
  get_monitor_at_point(x: number, y: number): Monitor;
  get_monitor_at_window(window: Window): Monitor;
  get_n_monitors(): number;
  get_n_screens(): number;
  get_name(): string;
  get_pointer(screen?: Screen, x?: number, y?: number, mask?: ModifierType): void;
  get_primary_monitor(): Monitor | null;
  get_screen(screen_num: number): Screen;
  get_window_at_pointer(win_x?: number, win_y?: number): Window | null;
  has_pending(): boolean;
  is_closed(): boolean;
  keyboard_ungrab(time_: number): void;
  list_devices(): GLib.List;
  list_seats(): GLib.List;
  notify_startup_complete(startup_id: string): void;
  peek_event(): Event | null;
  pointer_is_grabbed(): boolean;
  pointer_ungrab(time_: number): void;
  put_event(event: Event): void;
  request_selection_notification(selection: Atom): boolean;
  set_double_click_distance(distance: number): void;
  set_double_click_time(msec: number): void;
  store_clipboard(clipboard_window: Window, time_: number, targets: Atom[] | null, n_targets: number): void;
  supports_clipboard_persistence(): boolean;
  supports_composite(): boolean;
  supports_cursor_alpha(): boolean;
  supports_cursor_color(): boolean;
  supports_input_shapes(): boolean;
  supports_selection_notification(): boolean;
  supports_shapes(): boolean;
  sync(): void;
  warp_pointer(screen: Screen, x: number, y: number): void;
  static get_default(): Display | null;
  static open(display_name: string): Display | null;
  static open_default_libgtk_only(): Display | null;
}
export class DisplayManager extends GObject.Object {
  'default-display': Display;
  get_default_display(): Display | null;
  list_displays(): GLib.SList;
  open_display(name: string): Display | null;
  set_default_display(display: Display): void;
  static get(): DisplayManager;
}
export class DragContext extends GObject.Object {
  get_actions(): DragAction;
  get_dest_window(): Window;
  get_device(): Device;
  get_drag_window(): Window | null;
  get_protocol(): DragProtocol;
  get_selected_action(): DragAction;
  get_source_window(): Window;
  get_suggested_action(): DragAction;
  list_targets(): GLib.List;
  manage_dnd(ipc_window: Window, actions: DragAction): boolean;
  set_device(device: Device): void;
  set_hotspot(hot_x: number, hot_y: number): void;
}
export class DrawingContext extends GObject.Object {
  clip: cairo.Region;
  window: Window;
  get_cairo_context(): cairo.Context;
  get_clip(): cairo.Region | null;
  get_window(): Window;
  is_valid(): boolean;
}
export class FrameClock extends GObject.Object {
  begin_updating(): void;
  end_updating(): void;
  get_current_timings(): FrameTimings | null;
  get_frame_counter(): number;
  get_frame_time(): number;
  get_history_start(): number;
  get_refresh_info(base_time: number, refresh_interval_return?: number, presentation_time_return?: number): void;
  get_timings(frame_counter: number): FrameTimings | null;
  request_phase(phase: FrameClockPhase): void;
}
export class GLContext extends GObject.Object {
  display: Display;
  'shared-context': GLContext;
  window: Window;
  get_debug_enabled(): boolean;
  get_display(): Display | null;
  get_forward_compatible(): boolean;
  get_required_version(major: number | null, minor: number | null): void;
  get_shared_context(): GLContext | null;
  get_use_es(): boolean;
  get_version(major: number, minor: number): void;
  get_window(): Window | null;
  is_legacy(): boolean;
  make_current(): void;
  realize(): boolean;
  set_debug_enabled(enabled: boolean): void;
  set_forward_compatible(compatible: boolean): void;
  set_required_version(major: number, minor: number): void;
  set_use_es(use_es: number): void;
  static clear_current(): void;
  static get_current(): GLContext | null;
}
export class Keymap extends GObject.Object {
  add_virtual_modifiers(state: ModifierType): void;
  get_caps_lock_state(): boolean;
  get_direction(): Pango.Direction;
  get_entries_for_keycode(hardware_keycode: number, keys?: KeymapKey[], keyvals?: number[], n_entries?: number): boolean;
  get_entries_for_keyval(keyval: number, keys: KeymapKey[], n_keys: number): boolean;
  get_modifier_mask(intent: ModifierIntent): ModifierType;
  get_modifier_state(): number;
  get_num_lock_state(): boolean;
  get_scroll_lock_state(): boolean;
  have_bidi_layouts(): boolean;
  lookup_key(key: KeymapKey): number;
  map_virtual_modifiers(state: ModifierType): boolean;
  translate_keyboard_state(hardware_keycode: number, state: ModifierType, group: number, keyval?: number, effective_group?: number, level?: number, consumed_modifiers?: ModifierType): boolean;
  static get_default(): Keymap;
  static get_for_display(display: Display): Keymap;
}
export class Monitor extends GObject.Object {
  display: Display;
  geometry: Rectangle;
  'height-mm': number;
  manufacturer: string;
  model: string;
  'refresh-rate': number;
  'scale-factor': number;
  'subpixel-layout': SubpixelLayout;
  'width-mm': number;
  workarea: Rectangle;
  get_display(): Display;
  get_geometry(geometry: Rectangle): void;
  get_height_mm(): number;
  get_manufacturer(): string | null;
  get_model(): string | null;
  get_refresh_rate(): number;
  get_scale_factor(): number;
  get_subpixel_layout(): SubpixelLayout;
  get_width_mm(): number;
  get_workarea(workarea: Rectangle): void;
  is_primary(): boolean;
}
export class Screen extends GObject.Object {
  'font-options': object;
  resolution: number;
  get_active_window(): Window | null;
  get_display(): Display;
  get_font_options(): cairo.FontOptions | null;
  get_height(): number;
  get_height_mm(): number;
  get_monitor_at_point(x: number, y: number): number;
  get_monitor_at_window(window: Window): number;
  get_monitor_geometry(monitor_num: number, dest?: Rectangle): void;
  get_monitor_height_mm(monitor_num: number): number;
  get_monitor_plug_name(monitor_num: number): string | null;
  get_monitor_scale_factor(monitor_num: number): number;
  get_monitor_width_mm(monitor_num: number): number;
  get_monitor_workarea(monitor_num: number, dest?: Rectangle): void;
  get_n_monitors(): number;
  get_number(): number;
  get_primary_monitor(): number;
  get_resolution(): number;
  get_rgba_visual(): Visual | null;
  get_root_window(): Window;
  get_setting(name: string, value: GObject.Value): boolean;
  get_system_visual(): Visual;
  get_toplevel_windows(): GLib.List;
  get_width(): number;
  get_width_mm(): number;
  get_window_stack(): GLib.List | null;
  is_composited(): boolean;
  list_visuals(): GLib.List;
  make_display_name(): string;
  set_font_options(options: cairo.FontOptions | null): void;
  set_resolution(dpi: number): void;
  static get_default(): Screen | null;
  static height(): number;
  static height_mm(): number;
  static width(): number;
  static width_mm(): number;
}
export class Seat extends GObject.Object {
  display: Display;
  static parent_instance: GObject.Object;
  get_capabilities(): SeatCapabilities;
  get_display(): Display;
  get_keyboard(): Device | null;
  get_pointer(): Device | null;
  get_slaves(capabilities: SeatCapabilities): GLib.List;
  grab(window: Window, capabilities: SeatCapabilities, owner_events: boolean, cursor: Cursor | null, event: Event | null, prepare_func: SeatGrabPrepareFunc | null, prepare_func_data: object | null): GrabStatus;
  ungrab(): void;
}
export class Visual extends GObject.Object {
  get_bits_per_rgb(): number;
  get_blue_pixel_details(mask?: number, shift?: number, precision?: number): void;
  get_byte_order(): ByteOrder;
  get_colormap_size(): number;
  get_depth(): number;
  get_green_pixel_details(mask?: number, shift?: number, precision?: number): void;
  get_red_pixel_details(mask?: number, shift?: number, precision?: number): void;
  get_screen(): Screen;
  get_visual_type(): VisualType;
  static get_best(): Visual;
  static get_best_depth(): number;
  static get_best_type(): VisualType;
  static get_best_with_both(depth: number, visual_type: VisualType): Visual | null;
  static get_best_with_depth(depth: number): Visual;
  static get_best_with_type(visual_type: VisualType): Visual;
  static get_system(): Visual;
}
export class Window extends GObject.Object {
  constructor(parent: Window | null, attributes: WindowAttr, attributes_mask: WindowAttributesType);
  cursor: Cursor;
  add_filter(_function: FilterFunc, data: object | null): void;
  beep(): void;
  begin_draw_frame(region: cairo.Region): DrawingContext;
  begin_move_drag(button: number, root_x: number, root_y: number, timestamp: number): void;
  begin_move_drag_for_device(device: Device, button: number, root_x: number, root_y: number, timestamp: number): void;
  begin_paint_rect(rectangle: Rectangle): void;
  begin_paint_region(region: cairo.Region): void;
  begin_resize_drag(edge: WindowEdge, button: number, root_x: number, root_y: number, timestamp: number): void;
  begin_resize_drag_for_device(edge: WindowEdge, device: Device, button: number, root_x: number, root_y: number, timestamp: number): void;
  configure_finished(): void;
  coords_from_parent(parent_x: number, parent_y: number, x?: number, y?: number): void;
  coords_to_parent(x: number, y: number, parent_x?: number, parent_y?: number): void;
  create_gl_context(): GLContext;
  create_similar_image_surface(format: number, width: number, height: number, scale: number): cairo.Surface;
  create_similar_surface(content: cairo.Content, width: number, height: number): cairo.Surface;
  deiconify(): void;
  destroy(): void;
  destroy_notify(): void;
  enable_synchronized_configure(): void;
  end_draw_frame(context: DrawingContext): void;
  end_paint(): void;
  ensure_native(): boolean;
  flush(): void;
  focus(timestamp: number): void;
  freeze_toplevel_updates_libgtk_only(): void;
  freeze_updates(): void;
  fullscreen(): void;
  fullscreen_on_monitor(monitor: number): void;
  geometry_changed(): void;
  get_accept_focus(): boolean;
  get_background_pattern(): cairo.Pattern | null;
  get_children(): GLib.List;
  get_children_with_user_data(user_data: object | null): GLib.List;
  get_clip_region(): cairo.Region;
  get_composited(): boolean;
  get_cursor(): Cursor | null;
  get_decorations(decorations: WMDecoration): boolean;
  get_device_cursor(device: Device): Cursor | null;
  get_device_events(device: Device): EventMask;
  get_device_position(device: Device, x?: number, y?: number, mask?: ModifierType): Window | null;
  get_device_position_double(device: Device, x?: number, y?: number, mask?: ModifierType): Window | null;
  get_display(): Display;
  get_drag_protocol(target?: Window): DragProtocol;
  get_effective_parent(): Window;
  get_effective_toplevel(): Window;
  get_event_compression(): boolean;
  get_events(): EventMask;
  get_focus_on_map(): boolean;
  get_frame_clock(): FrameClock;
  get_frame_extents(rect: Rectangle): void;
  get_fullscreen_mode(): FullscreenMode;
  get_geometry(x?: number, y?: number, width?: number, height?: number): void;
  get_group(): Window;
  get_height(): number;
  get_modal_hint(): boolean;
  get_origin(x?: number, y?: number): number;
  get_parent(): Window;
  get_pass_through(): boolean;
  get_pointer(x?: number, y?: number, mask?: ModifierType): Window | null;
  get_position(x?: number, y?: number): void;
  get_root_coords(x: number, y: number, root_x: number, root_y: number): void;
  get_root_origin(x: number, y: number): void;
  get_scale_factor(): number;
  get_screen(): Screen;
  get_source_events(source: InputSource): EventMask;
  get_state(): WindowState;
  get_support_multidevice(): boolean;
  get_toplevel(): Window;
  get_type_hint(): WindowTypeHint;
  get_update_area(): cairo.Region;
  get_user_data(data: object | null): void;
  get_visible_region(): cairo.Region;
  get_visual(): Visual;
  get_width(): number;
  get_window_type(): WindowType;
  has_native(): boolean;
  hide(): void;
  iconify(): void;
  input_shape_combine_region(shape_region: cairo.Region, offset_x: number, offset_y: number): void;
  invalidate_maybe_recurse(region: cairo.Region, child_func: WindowChildFunc | null, user_data: object | null): void;
  invalidate_rect(rect: Rectangle | null, invalidate_children: boolean): void;
  invalidate_region(region: cairo.Region, invalidate_children: boolean): void;
  is_destroyed(): boolean;
  is_input_only(): boolean;
  is_shaped(): boolean;
  is_viewable(): boolean;
  is_visible(): boolean;
  lower(): void;
  mark_paint_from_clip(cr: cairo.Context): void;
  maximize(): void;
  merge_child_input_shapes(): void;
  merge_child_shapes(): void;
  move(x: number, y: number): void;
  move_region(region: cairo.Region, dx: number, dy: number): void;
  move_resize(x: number, y: number, width: number, height: number): void;
  move_to_rect(rect: Rectangle, rect_anchor: Gravity, window_anchor: Gravity, anchor_hints: AnchorHints, rect_anchor_dx: number, rect_anchor_dy: number): void;
  peek_children(): GLib.List;
  process_updates(update_children: boolean): void;
  raise(): void;
  register_dnd(): void;
  remove_filter(_function: FilterFunc, data: object | null): void;
  reparent(new_parent: Window, x: number, y: number): void;
  resize(width: number, height: number): void;
  restack(sibling: Window | null, above: boolean): void;
  scroll(dx: number, dy: number): void;
  set_accept_focus(accept_focus: boolean): void;
  set_background(color: Color): void;
  set_background_pattern(pattern: cairo.Pattern | null): void;
  set_background_rgba(rgba: RGBA): void;
  set_child_input_shapes(): void;
  set_child_shapes(): void;
  set_composited(composited: boolean): void;
  set_cursor(cursor: Cursor | null): void;
  set_decorations(decorations: WMDecoration): void;
  set_device_cursor(device: Device, cursor: Cursor): void;
  set_device_events(device: Device, event_mask: EventMask): void;
  set_event_compression(event_compression: boolean): void;
  set_events(event_mask: EventMask): void;
  set_focus_on_map(focus_on_map: boolean): void;
  set_fullscreen_mode(mode: FullscreenMode): void;
  set_functions(functions: WMFunction): void;
  set_geometry_hints(geometry: Geometry, geom_mask: WindowHints): void;
  set_group(leader: Window | null): void;
  set_icon_list(pixbufs: GLib.List): void;
  set_icon_name(name: string | null): void;
  set_invalidate_handler(handler: WindowInvalidateHandlerFunc): void;
  set_keep_above(setting: boolean): void;
  set_keep_below(setting: boolean): void;
  set_modal_hint(modal: boolean): void;
  set_opacity(opacity: number): void;
  set_opaque_region(region: cairo.Region | null): void;
  set_override_redirect(override_redirect: boolean): void;
  set_pass_through(pass_through: boolean): void;
  set_role(role: string): void;
  set_shadow_width(left: number, right: number, top: number, bottom: number): void;
  set_skip_pager_hint(skips_pager: boolean): void;
  set_skip_taskbar_hint(skips_taskbar: boolean): void;
  set_source_events(source: InputSource, event_mask: EventMask): void;
  set_startup_id(startup_id: string): void;
  set_static_gravities(use_static: boolean): boolean;
  set_support_multidevice(support_multidevice: boolean): void;
  set_title(title: string): void;
  set_transient_for(parent: Window): void;
  set_type_hint(hint: WindowTypeHint): void;
  set_urgency_hint(urgent: boolean): void;
  set_user_data(user_data: GObject.Object | null): void;
  shape_combine_region(shape_region: cairo.Region | null, offset_x: number, offset_y: number): void;
  show(): void;
  show_unraised(): void;
  show_window_menu(event: Event): boolean;
  stick(): void;
  thaw_toplevel_updates_libgtk_only(): void;
  thaw_updates(): void;
  unfullscreen(): void;
  unmaximize(): void;
  unstick(): void;
  withdraw(): void;
  create_surface(width: number, height: number): cairo.Surface;
  from_embedder(embedder_x: number, embedder_y: number, offscreen_x: number, offscreen_y: number): void;
  pick_embedded_child(x: number, y: number): Window;
  to_embedder(offscreen_x: number, offscreen_y: number, embedder_x: number, embedder_y: number): void;
  static at_pointer(win_x?: number, win_y?: number): Window;
  static constrain_size(geometry: Geometry, flags: WindowHints, width: number, height: number, new_width: number, new_height: number): void;
  static process_all_updates(): void;
  static set_debug_updates(setting: boolean): void;
}
export class Atom {
  name(): string;
  static intern(atom_name: string, only_if_exists: boolean): Atom;
  static intern_static_string(atom_name: string): Atom;
}
export class Color {
  static pixel: number;
  static red: number;
  static green: number;
  static blue: number;
  copy(): Color;
  equal(colorb: Color): boolean;
  free(): void;
  hash(): number;
  to_string(): string;
  static parse(spec: string, color: Color): boolean;
}
export class DevicePadInterface {}
export class DrawingContextClass {}
export class EventAny {
  static type: EventType;
  static window: Window;
  static send_event: number;
}
export class EventButton {
  static type: EventType;
  static window: Window;
  static send_event: number;
  static time: number;
  static x: number;
  static y: number;
  static axes: number;
  static state: ModifierType;
  static button: number;
  static device: Device;
  static x_root: number;
  static y_root: number;
}
export class EventConfigure {
  static type: EventType;
  static window: Window;
  static send_event: number;
  static x: number;
  static y: number;
  static width: number;
  static height: number;
}
export class EventCrossing {
  static type: EventType;
  static window: Window;
  static send_event: number;
  static subwindow: Window;
  static time: number;
  static x: number;
  static y: number;
  static x_root: number;
  static y_root: number;
  static mode: CrossingMode;
  static detail: NotifyType;
  static focus: boolean;
  static state: ModifierType;
}
export class EventDND {
  static type: EventType;
  static window: Window;
  static send_event: number;
  static context: DragContext;
  static time: number;
  static x_root: any;
  static y_root: any;
}
export class EventExpose {
  static type: EventType;
  static window: Window;
  static send_event: number;
  static area: Rectangle;
  static region: cairo.Region;
  static count: number;
}
export class EventFocus {
  static type: EventType;
  static window: Window;
  static send_event: number;
  static g_in: number;
}
export class EventGrabBroken {
  static type: EventType;
  static window: Window;
  static send_event: number;
  static keyboard: boolean;
  static implicit: boolean;
  static grab_window: Window;
}
export class EventKey {
  static type: EventType;
  static window: Window;
  static send_event: number;
  static time: number;
  static state: ModifierType;
  static keyval: number;
  static length: number;
  static string: string;
  static hardware_keycode: number;
  static group: number;
  static is_modifier: number;
}
export class EventMotion {
  static type: EventType;
  static window: Window;
  static send_event: number;
  static time: number;
  static x: number;
  static y: number;
  static axes: number;
  static state: ModifierType;
  static is_hint: number;
  static device: Device;
  static x_root: number;
  static y_root: number;
}
export class EventOwnerChange {
  static type: EventType;
  static window: Window;
  static send_event: number;
  static owner: Window;
  static reason: OwnerChange;
  static selection: Atom;
  static time: number;
  static selection_time: number;
}
export class EventPadAxis {
  static type: EventType;
  static window: Window;
  static send_event: number;
  static time: number;
  static group: number;
  static index: number;
  static mode: number;
  static value: number;
}
export class EventPadButton {
  static type: EventType;
  static window: Window;
  static send_event: number;
  static time: number;
  static group: number;
  static button: number;
  static mode: number;
}
export class EventPadGroupMode {
  static type: EventType;
  static window: Window;
  static send_event: number;
  static time: number;
  static group: number;
  static mode: number;
}
export class EventProperty {
  static type: EventType;
  static window: Window;
  static send_event: number;
  static atom: Atom;
  static time: number;
  static state: PropertyState;
}
export class EventProximity {
  static type: EventType;
  static window: Window;
  static send_event: number;
  static time: number;
  static device: Device;
}
export class EventScroll {
  static type: EventType;
  static window: Window;
  static send_event: number;
  static time: number;
  static x: number;
  static y: number;
  static state: ModifierType;
  static direction: ScrollDirection;
  static device: Device;
  static x_root: number;
  static y_root: number;
  static delta_x: number;
  static delta_y: number;
  static is_stop: number;
}
export class EventSelection {
  static type: EventType;
  static window: Window;
  static send_event: number;
  static selection: Atom;
  static target: Atom;
  static property: Atom;
  static time: number;
  static requestor: Window;
}
export class EventSequence {}
export class EventSetting {
  static type: EventType;
  static window: Window;
  static send_event: number;
  static action: SettingAction;
  static name: string;
}
export class EventTouch {
  static type: EventType;
  static window: Window;
  static send_event: number;
  static time: number;
  static x: number;
  static y: number;
  static axes: number;
  static state: ModifierType;
  static sequence: EventSequence;
  static emulating_pointer: boolean;
  static device: Device;
  static x_root: number;
  static y_root: number;
}
export class EventTouchpadPinch {
  static type: EventType;
  static window: Window;
  static send_event: number;
  static phase: number;
  static n_fingers: number;
  static time: number;
  static x: number;
  static y: number;
  static dx: number;
  static dy: number;
  static angle_delta: number;
  static scale: number;
  static x_root: number;
  static y_root: number;
  static state: ModifierType;
}
export class EventTouchpadSwipe {
  static type: EventType;
  static window: Window;
  static send_event: number;
  static phase: number;
  static n_fingers: number;
  static time: number;
  static x: number;
  static y: number;
  static dx: number;
  static dy: number;
  static x_root: number;
  static y_root: number;
  static state: ModifierType;
}
export class EventVisibility {
  static type: EventType;
  static window: Window;
  static send_event: number;
  static state: VisibilityState;
}
export class EventWindowState {
  static type: EventType;
  static window: Window;
  static send_event: number;
  static changed_mask: WindowState;
  static new_window_state: WindowState;
}
export class FrameClockClass {}
export class FrameClockPrivate {}
export class FrameTimings {
  get_complete(): boolean;
  get_frame_counter(): number;
  get_frame_time(): number;
  get_predicted_presentation_time(): number;
  get_presentation_time(): number;
  get_refresh_interval(): number;
  ref(): FrameTimings;
  unref(): void;
}
export class Geometry {
  static min_width: number;
  static min_height: number;
  static max_width: number;
  static max_height: number;
  static base_width: number;
  static base_height: number;
  static width_inc: number;
  static height_inc: number;
  static min_aspect: number;
  static max_aspect: number;
  static win_gravity: Gravity;
}
export class KeymapKey {
  static keycode: number;
  static group: number;
  static level: number;
}
export class MonitorClass {}
export class Point {
  static x: number;
  static y: number;
}
export class RGBA {
  static red: number;
  static green: number;
  static blue: number;
  static alpha: number;
  copy(): RGBA;
  equal(p2: RGBA): boolean;
  free(): void;
  hash(): number;
  parse(spec: string): boolean;
  to_string(): string;
}
export class Rectangle {
  static x: number;
  static y: number;
  static width: number;
  static height: number;
  equal(rect2: Rectangle): boolean;
  intersect(src2: Rectangle, dest?: Rectangle): boolean;
  union(src2: Rectangle, dest: Rectangle): void;
}
export class TimeCoord {
  static time: number;
  static axes: number[];
}
export class WindowAttr {
  static title: string;
  static event_mask: number;
  static x: number;
  static y: number;
  static width: number;
  static height: number;
  static wclass: WindowWindowClass;
  static visual: Visual;
  static window_type: WindowType;
  static cursor: Cursor;
  static wmclass_name: string;
  static wmclass_class: string;
  static override_redirect: boolean;
  static type_hint: WindowTypeHint;
}
export class WindowClass {
  static parent_class: GObject.ObjectClass;
  static pick_embedded_child: (window: Window, x: number, y: number) => Window;
  static to_embedder: (window: Window, offscreen_x: number, offscreen_y: number, embedder_x: number, embedder_y: number) => void;
  static from_embedder: (window: Window, embedder_x: number, embedder_y: number, offscreen_x: number, offscreen_y: number) => void;
  static create_surface: (window: Window, width: number, height: number) => cairo.Surface;
  static _gdk_reserved1: () => void;
  static _gdk_reserved2: () => void;
  static _gdk_reserved3: () => void;
  static _gdk_reserved4: () => void;
  static _gdk_reserved5: () => void;
  static _gdk_reserved6: () => void;
  static _gdk_reserved7: () => void;
  static _gdk_reserved8: () => void;
}
export class WindowRedirect {}
export function add_option_entries_libgtk_only(group: GLib.OptionGroup): void;
export function atom_intern(atom_name: string, only_if_exists: boolean): Atom;
export function atom_intern_static_string(atom_name: string): Atom;
export function beep(): void;
export function cairo_create(window: Window): cairo.Context;
export function cairo_draw_from_gl(cr: cairo.Context, window: Window, source: number, source_type: number, buffer_scale: number, x: number, y: number, width: number, height: number): void;
export function cairo_get_clip_rectangle(cr: cairo.Context, rect: Rectangle): boolean;
export function cairo_get_drawing_context(cr: cairo.Context): DrawingContext | null;
export function cairo_rectangle(cr: cairo.Context, rectangle: Rectangle): void;
export function cairo_region(cr: cairo.Context, region: cairo.Region): void;
export function cairo_region_create_from_surface(surface: cairo.Surface): cairo.Region;
export function cairo_set_source_color(cr: cairo.Context, color: Color): void;
export function cairo_set_source_pixbuf(cr: cairo.Context, pixbuf: GdkPixbuf.Pixbuf, pixbuf_x: number, pixbuf_y: number): void;
export function cairo_set_source_rgba(cr: cairo.Context, rgba: RGBA): void;
export function cairo_set_source_window(cr: cairo.Context, window: Window, x: number, y: number): void;
export function cairo_surface_create_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf, scale: number, for_window: Window | null): cairo.Surface;
export function color_parse(spec: string, color: Color): boolean;
export function disable_multidevice(): void;
export function drag_abort(context: DragContext, time_: number): void;
export function drag_begin(window: Window, targets: GLib.List): DragContext;
export function drag_begin_for_device(window: Window, device: Device, targets: GLib.List): DragContext;
export function drag_begin_from_point(window: Window, device: Device, targets: GLib.List, x_root: number, y_root: number): DragContext;
export function drag_drop(context: DragContext, time_: number): void;
export function drag_drop_done(context: DragContext, success: boolean): void;
export function drag_drop_succeeded(context: DragContext): boolean;
export function drag_find_window_for_screen(context: DragContext, drag_window: Window, screen: Screen, x_root: number, y_root: number, dest_window: Window, protocol: DragProtocol): void;
export function drag_get_selection(context: DragContext): Atom;
export function drag_motion(context: DragContext, dest_window: Window, protocol: DragProtocol, x_root: number, y_root: number, suggested_action: DragAction, possible_actions: DragAction, time_: number): boolean;
export function drag_status(context: DragContext, action: DragAction, time_: number): void;
export function drop_finish(context: DragContext, success: boolean, time_: number): void;
export function drop_reply(context: DragContext, accepted: boolean, time_: number): void;
export function error_trap_pop(): number;
export function error_trap_pop_ignored(): void;
export function error_trap_push(): void;
export function event_get(): Event | null;
export function event_handler_set(func: EventFunc, data: object | null, notify: GLib.DestroyNotify): void;
export function event_peek(): Event | null;
export function event_request_motions(event: EventMotion): void;
export function events_get_angle(event1: Event, event2: Event, angle: number): boolean;
export function events_get_center(event1: Event, event2: Event, x: number, y: number): boolean;
export function events_get_distance(event1: Event, event2: Event, distance: number): boolean;
export function events_pending(): boolean;
export function flush(): void;
export function get_default_root_window(): Window;
export function get_display(): string;
export function get_display_arg_name(): string | null;
export function get_program_class(): string;
export function get_show_events(): boolean;
export function gl_error_quark(): GLib.Quark;
export function init(argc: number, argv: string[]): void;
export function init_check(argc: number, argv: string[]): boolean;
export function keyboard_grab(window: Window, owner_events: boolean, time_: number): GrabStatus;
export function keyboard_ungrab(time_: number): void;
export function keyval_convert_case(symbol: number, lower: number, upper: number): void;
export function keyval_from_name(keyval_name: string): number;
export function keyval_is_lower(keyval: number): boolean;
export function keyval_is_upper(keyval: number): boolean;
export function keyval_name(keyval: number): string | null;
export function keyval_to_lower(keyval: number): number;
export function keyval_to_unicode(keyval: number): number;
export function keyval_to_upper(keyval: number): number;
export function list_visuals(): GLib.List;
export function notify_startup_complete(): void;
export function notify_startup_complete_with_id(startup_id: string): void;
export function offscreen_window_get_embedder(window: Window): Window | null;
export function offscreen_window_get_surface(window: Window): cairo.Surface | null;
export function offscreen_window_set_embedder(window: Window, embedder: Window): void;
export function pango_context_get(): Pango.Context;
export function pango_context_get_for_display(display: Display): Pango.Context;
export function pango_context_get_for_screen(screen: Screen): Pango.Context;
export function pango_layout_get_clip_region(layout: Pango.Layout, x_origin: number, y_origin: number, index_ranges: number, n_ranges: number): cairo.Region;
export function pango_layout_line_get_clip_region(line: Pango.LayoutLine, x_origin: number, y_origin: number, index_ranges: number[], n_ranges: number): cairo.Region;
export function parse_args(argc: number, argv: string[]): void;
export function pixbuf_get_from_surface(surface: cairo.Surface, src_x: number, src_y: number, width: number, height: number): GdkPixbuf.Pixbuf | null;
export function pixbuf_get_from_window(window: Window, src_x: number, src_y: number, width: number, height: number): GdkPixbuf.Pixbuf | null;
export function pointer_grab(window: Window, owner_events: boolean, event_mask: EventMask, confine_to: Window | null, cursor: Cursor | null, time_: number): GrabStatus;
export function pointer_is_grabbed(): boolean;
export function pointer_ungrab(time_: number): void;
export function pre_parse_libgtk_only(): void;
export function property_change(window: Window, property: Atom, type: Atom, format: number, mode: PropMode, data: number, nelements: number): void;
export function property_delete(window: Window, property: Atom): void;
export function property_get(window: Window, property: Atom, type: Atom, offset: number, length: number, pdelete: number, actual_property_type: Atom, actual_format: number, actual_length: number, data: number[]): boolean;
export function query_depths(depths: number[], count: number): void;
export function query_visual_types(visual_types: VisualType[], count: number): void;
export function selection_convert(requestor: Window, selection: Atom, target: Atom, time_: number): void;
export function selection_owner_get(selection: Atom): Window | null;
export function selection_owner_get_for_display(display: Display, selection: Atom): Window | null;
export function selection_owner_set(owner: Window | null, selection: Atom, time_: number, send_event: boolean): boolean;
export function selection_owner_set_for_display(display: Display, owner: Window | null, selection: Atom, time_: number, send_event: boolean): boolean;
export function selection_property_get(requestor: Window, data: number, prop_type: Atom, prop_format: number): number;
export function selection_send_notify(requestor: Window, selection: Atom, target: Atom, property: Atom, time_: number): void;
export function selection_send_notify_for_display(display: Display, requestor: Window, selection: Atom, target: Atom, property: Atom, time_: number): void;
export function set_allowed_backends(backends: string): void;
export function set_double_click_time(msec: number): void;
export function set_program_class(program_class: string): void;
export function set_show_events(show_events: boolean): void;
export function setting_get(name: string, value: GObject.Value): boolean;
export function synthesize_window_state(window: Window, unset_flags: WindowState, set_flags: WindowState): void;
export function test_render_sync(window: Window): void;
export function test_simulate_button(window: Window, x: number, y: number, button: number, modifiers: ModifierType, button_pressrelease: EventType): boolean;
export function test_simulate_key(window: Window, x: number, y: number, keyval: number, modifiers: ModifierType, key_pressrelease: EventType): boolean;
export function text_property_to_utf8_list_for_display(display: Display, encoding: Atom, format: number, text: number[], length: number, list: string[]): number;
export function threads_add_idle(_function: GLib.SourceFunc, data: object | null): number;
export function threads_add_idle_full(priority: number, _function: GLib.SourceFunc, data: object | null, notify: GLib.DestroyNotify | null): number;
export function threads_add_timeout(interval: number, _function: GLib.SourceFunc, data: object | null): number;
export function threads_add_timeout_full(priority: number, interval: number, _function: GLib.SourceFunc, data: object | null, notify: GLib.DestroyNotify | null): number;
export function threads_add_timeout_seconds(interval: number, _function: GLib.SourceFunc, data: object | null): number;
export function threads_add_timeout_seconds_full(priority: number, interval: number, _function: GLib.SourceFunc, data: object | null, notify: GLib.DestroyNotify | null): number;
export function threads_enter(): void;
export function threads_init(): void;
export function threads_leave(): void;
export function threads_set_lock_functions(enter_fn: GObject.Callback, leave_fn: GObject.Callback): void;
export function unicode_to_keyval(wc: number): number;
export function utf8_to_string_target(str: string): string | null;
export type EventFunc = (event: Event, data: object | null) => void;
export type FilterFunc = (xevent: XEvent, event: Event, data: object | null) => FilterReturn;
export type SeatGrabPrepareFunc = (seat: Seat, window: Window, user_data: object | null) => void;
export type WindowChildFunc = (window: Window, user_data: object | null) => boolean;
export type WindowInvalidateHandlerFunc = (window: Window, region: cairo.Region) => void;
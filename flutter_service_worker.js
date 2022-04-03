'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "78dc228f1294628e8ff1e39f4bf54449",
"assets/assets/icons/accessibility_outline_28.svg": "1dcfefb1cb084e10774a8bfe1ef81b31",
"assets/assets/icons/achievement_circle_fill_blue_28.svg": "c03d7f9f678fe7341771660f835c997d",
"assets/assets/icons/add_award_outline_28.svg": "03c49ee58308d24fb2a09f9adf9fa2be",
"assets/assets/icons/add_circle_fill_blue_28.svg": "dd850e84e5c1dfc7ae4d5d3c920352a8",
"assets/assets/icons/add_circle_outline_28.svg": "691d2a6a2a6b5807f88bf054fe4fdeeb",
"assets/assets/icons/add_outline_28.svg": "4e1a2adf1d01991f114e5f50424ceee0",
"assets/assets/icons/add_square_outline_28.svg": "7f0c91b9378195867a9d0b754469f789",
"assets/assets/icons/advertising_circle_fill_red_28.svg": "747aa2509b9f9defc9296741cda621d3",
"assets/assets/icons/advertising_outline_28.svg": "8790e5ca945a36a06c40c3570b149742",
"assets/assets/icons/airplay_audio_outline_28.svg": "3074b8c78f29f2d59108124f43a7b150",
"assets/assets/icons/airplay_video_outline_28.svg": "d98767b314bd9cb223fa9e4e065711a3",
"assets/assets/icons/all_categories_outline_28.svg": "60b24d571999aec2940153786f44673c",
"assets/assets/icons/apple_outline_28.svg": "2b718936ab1c59c42b36e89035563afb",
"assets/assets/icons/apple_watch_outlite_28.svg": "ef30fbddd2dce138e388fe33102dc3fc",
"assets/assets/icons/app_badge_outline_28.svg": "9ff737e3f80c36a2c3e868197d7732bc",
"assets/assets/icons/archive_check_outline_28.svg": "1165e8bbebe350982fced786b740e9b5",
"assets/assets/icons/archive_circle_fill_gray_28.svg": "3519f0b7329413f4050e3d0db4a94df7",
"assets/assets/icons/archive_outline_28.svg": "83a357f52de35d01325ef4140d08c56b",
"assets/assets/icons/armchair_outline_28.svg": "acf95f1f9253c24d36cf45930a5cbd7b",
"assets/assets/icons/arrow_down_outline_28.svg": "d1a6172115c079db5ad553e31e897bae",
"assets/assets/icons/arrow_left_outline_28.svg": "55c50033e1511c1a0b7ba651e8ab06de",
"assets/assets/icons/arrow_right_circle_outline_28.svg": "213c1af9c7e6a78f5b686ec593b85b94",
"assets/assets/icons/arrow_right_outline_28.svg": "6094a15ed03f017aea66f85e69d65094",
"assets/assets/icons/arrow_right_square_outline_28.svg": "91795d74bf042e3daf33c41954e0a8f8",
"assets/assets/icons/arrow_up_circle_outline_28.svg": "f48d0a1e4a8ff0d7018a4570a579fe34",
"assets/assets/icons/arrow_up_outline_28.svg": "64cfdaec0cfea17cdf50da4b2f7e1a7a",
"assets/assets/icons/arrow_up_rectangle_outline_28.svg": "85631816329ba468624aa632f3a1e40e",
"assets/assets/icons/arrow_uturn_left_outline_28.svg": "a9583036729fdbe45976eaeadad5b940",
"assets/assets/icons/arrow_uturn_right_outline_28.svg": "bd777d4d06362deb6612cf3f894e1740",
"assets/assets/icons/articles_outline_28.svg": "2ba0799eec46b24b0c66724e00651cd3",
"assets/assets/icons/article_outline_28.svg": "6cbf95a29a205294a48f272fec1c1f6d",
"assets/assets/icons/attachments_28.svg": "bb99efa7b1e09c5d084f71a4cc57748e",
"assets/assets/icons/attach_circle_fill_blue_28.svg": "6653a3c2674e8bbb18aa07afd9f82b68",
"assets/assets/icons/attach_outline_28.svg": "0e07dc4074739ac998f2776fcc9c2f23",
"assets/assets/icons/baby_bottle_outline_28.svg": "cfff0edc4f9d48cb62c0525b99f85dcb",
"assets/assets/icons/backspace_28.svg": "18139957cb9ee1720f892255bf02c08f",
"assets/assets/icons/backspace_outline_28.svg": "4ac0e3f83ccbf793dd80f6bb6ed3dbf5",
"assets/assets/icons/bank_outline_28.svg": "d5ff25e6e5c30a1f104baa2eeb795745",
"assets/assets/icons/basketball_ball_outline_28.svg": "b25258cf014c58e9fe20fb0d2243454d",
"assets/assets/icons/beauty_outline_28.svg": "fdc252c32642495d34f6f966f99c59e2",
"assets/assets/icons/billhead_outline_28.svg": "805ffce739b26c5171cd75b5e0d29542",
"assets/assets/icons/bill_separated_outline_28.svg": "2b2e6bb5a0ee40021d543cb62a8556f2",
"assets/assets/icons/block_circle_fill_gray_28.svg": "a980d779daa576ed4d099e00722cd4b0",
"assets/assets/icons/block_outline_28.svg": "80fab2d27383d6c1485e725d78374d94",
"assets/assets/icons/body_outline_28.svg": "674a0c86051b2a008c10a149bfa121ca",
"assets/assets/icons/bomb_outline_28.svg": "674bd3b83f71210bc2b94e24feb78daf",
"assets/assets/icons/bookmark_outline_28.svg": "13011f62989cbc5bab1c7703645da1e8",
"assets/assets/icons/bookmark_slash_outline_28.svg": "49734963e3650aa47e2ea851ddd754ed",
"assets/assets/icons/book_outline_28.svg": "eeb049ddf1507ec3f8a9afd5b6b64f4f",
"assets/assets/icons/box_circle_fill_blue_28.svg": "0d1dd380ce92c0a14cf8148ad2bf91bd",
"assets/assets/icons/box_heart_outline_28.svg": "ac0c1a433225d40c13c54d5a48d62bdc",
"assets/assets/icons/brackets_slash_square_outline_28.svg": "2a512a8cc0092f015b508c71e9e6188b",
"assets/assets/icons/brackets_square_outline_28.svg": "015dcff12ffacf5236dd6d706a03c673",
"assets/assets/icons/brain_outline_28.svg": "8e8e834f17621d3475ffd4356f21cd9e",
"assets/assets/icons/briefcase_outline_28.svg": "8eb631c8765232885d18db4ec48da91a",
"assets/assets/icons/brush_outline_28.svg": "182f113c22ab28f5e95affd071f3eeb8",
"assets/assets/icons/bug_outline_28.svg": "bd7b3578f83f57f0723900a9dfea0f45",
"assets/assets/icons/building_outline_28.svg": "85c57994a3b3127d92ecdfe00b29e743",
"assets/assets/icons/bus_outline_28.svg": "2ce655a5f09beb5c59f0bed0e9366b49",
"assets/assets/icons/cake_circle_fill_purple_28.svg": "7f5deda3ef3094688c4bbdfc1810dfc9",
"assets/assets/icons/cake_circle_fill_raspberry_pink_28.svg": "6884441cd1f689d175418213a97d28cb",
"assets/assets/icons/calendar_circle_fill_red_28.svg": "694bd306cf0c9159f271b88018a95ad1",
"assets/assets/icons/calendar_outline_28.svg": "de5baf222b4d7a7984aea46f658777a7",
"assets/assets/icons/camera_28.svg": "a729a34a30b5b68837000329791c7e47",
"assets/assets/icons/camera_add_outline_28.svg": "59b1bb7618b2e67b8ed412873e8143bd",
"assets/assets/icons/camera_circle_fill_green_28.svg": "3da5778ea43631b749daf374ce25482d",
"assets/assets/icons/camera_outline_28.svg": "2b2b7cebe1777e4fb6c6bf3b8b9b98b8",
"assets/assets/icons/camera_slash_outline_28.svg": "188d5c9fb8187e4bb193ff8f25e1a889",
"assets/assets/icons/cancel_alt_outline_28.svg": "d1b8c723ed238ae86212972c105a7902",
"assets/assets/icons/cancel_circle_fill_red_28.svg": "fc1c4ad4fc11333acaeca77c73330687",
"assets/assets/icons/cancel_circle_outline_28.svg": "b6b702d6e1b6da307a5c5b5fe2ce3be1",
"assets/assets/icons/cancel_outline_28.svg": "79f9188c2205eec2295287fb6d4d1e3e",
"assets/assets/icons/cancel_shield_outline_28.svg": "1fa2fb6e11e72f852a63eb7a8b3b1de2",
"assets/assets/icons/canister_outline_28.svg": "861f37a92d75ebf2ad7d2a4676697b5c",
"assets/assets/icons/cards_2_outline_28.svg": "6d18a9de2c29f096e43b5b170762c0eb",
"assets/assets/icons/car_outline_28.svg": "0c98ee5fab8d1d5185d8453dc8739a4b",
"assets/assets/icons/cash_out_outline_28.svg": "18626b0b09ded20fea7c058136c99e6c",
"assets/assets/icons/chain_circle_fill_blue_28.svg": "b1f7790e8b2309efc535a0d0a6df2323",
"assets/assets/icons/chain_outline_28.svg": "7b9d6e183a71f51468209b57bfc8ed6d",
"assets/assets/icons/chats_outline_28.svg": "630af1fbbd6a28292577b102cbb9fa58",
"assets/assets/icons/checks_outline_28.svg": "2a512619a872a0805f64f341ead5dc9a",
"assets/assets/icons/check_circle_device_outline_28.svg": "d847b68704d126c3e6336fe2cc54a237",
"assets/assets/icons/check_circle_fill_28.svg": "6ed02e5cb1bac3020d519ed89a31f8e7",
"assets/assets/icons/check_circle_fill_yellow_28.svg": "ab3153d5d27449a3eeeb346748ff6e8a",
"assets/assets/icons/check_circle_off_28.svg": "1da2dd889e88e89b8719778d9e457b29",
"assets/assets/icons/check_circle_on_28.svg": "ea6237b8510d71f2d8b8071ff66ff7de",
"assets/assets/icons/check_circle_outline_28.svg": "8b0e176dc84fc04139d1aaf2a9760d18",
"assets/assets/icons/check_shield_device_outline_28.svg": "278c23ec050a94536e3f2b7692374594",
"assets/assets/icons/check_shield_outline_28.svg": "a7c2c893c4f48573242b0746a18072b2",
"assets/assets/icons/check_square_outline_28.svg": "7222576d1035ea56b50a07cc0a96c65c",
"assets/assets/icons/chef_hat_outline_28.svg": "49efae36cd5bb510c9ee014af9c6c0ef",
"assets/assets/icons/chevrons_2_left_outline_28.svg": "d17dfc01a1af6f2f6cbab446d5d7cad4",
"assets/assets/icons/chevron_back_28.svg": "c445b41e85e5283d1e7f7c9759f74bed",
"assets/assets/icons/chevron_down_outline_28.svg": "43238886d4db63974fcd29732f5b547e",
"assets/assets/icons/chevron_left_outline_28.svg": "7d27dc1aab7cbfddf2d94a9065d09a68",
"assets/assets/icons/chevron_right_circle_outline_28.svg": "46801297c7551e780fbaf87e85e82568",
"assets/assets/icons/chevron_right_outline_28.svg": "8308286114d146c5982553a4bed38d08",
"assets/assets/icons/chevron_up_outline_28.svg": "e68a991f01061fb5f21d688798f7312c",
"assets/assets/icons/clapperboard_outline_28.svg": "d7ad4c3a2fe2bfb7a0f379323b690b40",
"assets/assets/icons/clear_data_outline_28.svg": "c5f505f1c214ff43e4ab291698e98cdd",
"assets/assets/icons/clip_circle_fill_violet_28.svg": "6dce3f1f20e88bf71441cc27141535e4",
"assets/assets/icons/clip_outline_28.svg": "73a33fc0b3a155c8fe829721a2c16644",
"assets/assets/icons/clock_circle_fill_gray_28.svg": "fdc43ecb2fbd3915310d6b82fa4c14ae",
"assets/assets/icons/clock_outline_28.svg": "e69f1a357fe99cef0288538c4ae69c31",
"assets/assets/icons/cloud_outline_28.svg": "d7730c1f4d10aefa0ed4647f208deac3",
"assets/assets/icons/coffee_steam_outline_28.svg": "1e7efe988d5aee5685e035c604021e22",
"assets/assets/icons/coins_outline_28.svg": "46144e7f7b08f9b73c3811b40f70f04e",
"assets/assets/icons/comment_circle_fill_green_28.svg": "c69c5001e2076dad1a7ee20d8478f69d",
"assets/assets/icons/comment_disable_outline_28.svg": "f2d5acbe812d3eec9fc5bcdd74244f45",
"assets/assets/icons/comment_outline_28.svg": "76cfa0c1fe4917bd30e6f12866fe9814",
"assets/assets/icons/compass_circle_fill_blue_28.svg": "21279bce94be714fb977b23baba84767",
"assets/assets/icons/compass_circle_fill_purple_28.svg": "5865151bf60e66d365eb256b43f9ac2e",
"assets/assets/icons/compass_outline_28.svg": "4d90e32aa35bef142f4017fb1c22149d",
"assets/assets/icons/computer_outline_28.svg": "599e60817b18d29609540ae89c5d1a3b",
"assets/assets/icons/copy_outline_28.svg": "0760abb3d7623a0a2540afd22480b77b",
"assets/assets/icons/crop_28.svg": "ffaaa6c8d286d2490fa161b9ee22fda7",
"assets/assets/icons/crown_outline_28.svg": "868011c2d1ad6595111db11b4136d8a4",
"assets/assets/icons/cube_box_outline_28.svg": "02fb2e8c9d22709f5df48fb0c5787bf9",
"assets/assets/icons/cup_outline_28.svg": "d207c321dbd17d81973c9138612d1ade",
"assets/assets/icons/delete_28.svg": "04b89f85511ad359613ac5e3be296a75",
"assets/assets/icons/delete_outline_28.svg": "a5b5f58b93a972ce40ad097b1058eedd",
"assets/assets/icons/delete_outline_android_28.svg": "4042ecd8a7f197a81542581b52f702f2",
"assets/assets/icons/devices_outline_28.svg": "237abdc27215d8879683a3346fd9e2f1",
"assets/assets/icons/diamond_outline_28.svg": "0ef302becb3d901176ffab1d762e7d2a",
"assets/assets/icons/dice_1_outline_28.svg": "92d41d2a8c41dd1b298c15b17464dff0",
"assets/assets/icons/dice_2_outline_28.svg": "2af5db84aadb8bd2222db950652cdf25",
"assets/assets/icons/dice_3_outline_28.svg": "6a84fb8159a33f502c5583ff052ab85c",
"assets/assets/icons/dice_4_outline_28.svg": "d38c58c8f431e9db11b537210a806125",
"assets/assets/icons/dice_5_outline_28.svg": "6f4db8cab9da88468bef9bce3ec4e11d",
"assets/assets/icons/dice_6_outline_28.svg": "ea3bf80a8ff32c5f640ba7b62225f944",
"assets/assets/icons/discount_outline_28.svg": "914e77cc8f1f5029b7c26706e79750f4",
"assets/assets/icons/discussions_circle_fill_28.svg": "b1cabe1d820f5525715c7855e6eca5f6",
"assets/assets/icons/discussions_circle_fill_green_28.svg": "9457748ce574d8d553eb05efb29a3ea4",
"assets/assets/icons/document_28.svg": "3938a1d0bdf87b7444fa5c8648cc4f27",
"assets/assets/icons/document_outline_28.svg": "eed0a3dd1c7d0c8ac4322577cd4d5cea",
"assets/assets/icons/donate_circle_fill_yellow_28.svg": "410f2dfc797af2d1e6444855f17406da",
"assets/assets/icons/donate_outline_28.svg": "7a86ea25f80bc190137ab8ee6cf10d51",
"assets/assets/icons/done_outline_28.svg": "bf2b73e932deb2883e76eb6c5006280d",
"assets/assets/icons/door_arrow_left_outline_28.svg": "a4579cd88637f0cc94b8ea74df558729",
"assets/assets/icons/door_arrow_right_outline_28.svg": "636455550718358cd436e5e29ede4795",
"assets/assets/icons/download_cancel_outline_28.svg": "9595d3438e7f1efda8741626f36d4308",
"assets/assets/icons/download_check_outline_28.svg": "f6341fd3300c1fe4f77a738ffef538a7",
"assets/assets/icons/download_cloud_outline_28.svg": "ac3adac50a9d7e512d5671eafe6ef364",
"assets/assets/icons/download_outline_28.svg": "55c49de4569a54fd50e066c3ca10ec8a",
"assets/assets/icons/drill_outline_28.svg": "527cf84cbc8724d21ad154dc4ff73cec",
"assets/assets/icons/edit_circle_fill_blue_28.svg": "922030c16c5f703847cf5e7aa4ee30ba",
"assets/assets/icons/edit_outline_28.svg": "c0d9016ae44639982bce7e49287df9c2",
"assets/assets/icons/education_outline_28.svg": "6dc967fa2cc7d021418ded77789e8e09",
"assets/assets/icons/emblem_outline_28.svg": "78366e3a41cd02804224c3ab7f715ae8",
"assets/assets/icons/employee_outline_28.svg": "4c3efed2d8d8808ddcc32f108ed65e77",
"assets/assets/icons/error_circle_outline_28.svg": "9f7ba4491579820afaf4e7610c110b33",
"assets/assets/icons/error_outline_28.svg": "66098c4b772dcf14721c0df346f89ef9",
"assets/assets/icons/explicit_outline_28.svg": "a30a35b4f544326948a6e15aa0e19b01",
"assets/assets/icons/face_id_outline_28.svg": "98aa2c358d488a424cf3d136e2feab70",
"assets/assets/icons/face_recognition_outline_28.svg": "8b32f1bb450cc77f2bc413fab120db8c",
"assets/assets/icons/favorite_28.svg": "e94e798ae6616d06324f7f2255de0c34",
"assets/assets/icons/favorite_circle_fill_green_28.svg": "59f8e029c961470ba863cde3ef6c98d8",
"assets/assets/icons/favorite_circle_fill_yellow_28.svg": "db95a7b242d66c10cb01faf11ddf60a5",
"assets/assets/icons/favorite_outline_28.svg": "63d79d56d81b7331851861633b3f85e4",
"assets/assets/icons/film_strip_add_outline_28.svg": "b5af8d22343dd3635af043afca1c244f",
"assets/assets/icons/film_strip_outline_28.svg": "fdb56c8b63d02d35d3a325ceab3f2f4d",
"assets/assets/icons/film_strip_rss_outline_28.svg": "0464b83c64e929b5aa51d98a5a3bcf1c",
"assets/assets/icons/fire_circle_fill_red_28.svg": "a0b85bd2e3fe4cd8457eab055164d709",
"assets/assets/icons/fire_outline_28.svg": "4a3af8cf8113d1620d4fec6e67a5f0c3",
"assets/assets/icons/flash_28.svg": "ed72928f200502191f7d367b2c1c3632",
"assets/assets/icons/flash_circle_fill_gray_28.svg": "6504124f83373bff8858795f38b333f4",
"assets/assets/icons/folder_outline_28.svg": "569259635cc2211045de77d5570fd950",
"assets/assets/icons/forward_10_28.svg": "b63242105e4ec8067390f7bbe6c89ee4",
"assets/assets/icons/forward_10_outline_28.svg": "92c5464ce9690f1199f6a4ec3203e32d",
"assets/assets/icons/forward_15_28.svg": "c2215d1ff5c4a3e04951fc56a1f0c3f5",
"assets/assets/icons/game_28.svg": "b003a2c075632f482ac6e7406875d877",
"assets/assets/icons/game_circle_fill_blue_28.svg": "fbf6d825dbce39cf8ffd07796f9cbed0",
"assets/assets/icons/game_outline_28.svg": "57e1d701cc80bf84389bb11c7da43b31",
"assets/assets/icons/gear_circle_fill_gray_28.svg": "dca4e1415ca448409301eebc82b8b52f",
"assets/assets/icons/gesture_outline_28.svg": "1b97d649bd3f018d43a6eb5bf31be86d",
"assets/assets/icons/ghost_28.svg": "3cf29aaac5d946f08e0a725fff3af9fd",
"assets/assets/icons/ghost_outline_28.svg": "a349550ed9ee25a28e67b8f6e0050f83",
"assets/assets/icons/ghost_simle_outline_28.svg": "d1cefc207cba5c024592b255ad9d7d0c",
"assets/assets/icons/gift_circle_fill_red_28.svg": "9db600236e62d7aeceaa6a9e21a7f62c",
"assets/assets/icons/gift_circle_fill_yellow_28.svg": "f457f0fc0b9d651a8f0135647d508c59",
"assets/assets/icons/gift_outline_28.svg": "b838f118de83404911d86e75c2409050",
"assets/assets/icons/globe_circle_fill_yellow_28.svg": "6742ab6cdbdff6e40404c4a2c8d62223",
"assets/assets/icons/globe_outline_28.svg": "feab0036564017bc7705528d714a56bc",
"assets/assets/icons/google.svg": "b7727941c0e8a117b6cfd8f06a1cb7ed",
"assets/assets/icons/graph_outline_28.svg": "14fccf5ca605b60ff3aaf624bb1702d6",
"assets/assets/icons/grid_layout_outline_28.svg": "34a897a4a0a522d9f52c0639582e9ec9",
"assets/assets/icons/grid_square_outline_28.svg": "7e6ff3ac1d2df70d7aad0c146d598395",
"assets/assets/icons/hand_slash_outline_28.svg": "d1e351f4066873a59553137aaa398f99",
"assets/assets/icons/hanger_outline_28.svg": "c8df324d6a905abca6703a520a6ed0f2",
"assets/assets/icons/hashtag_outline_28.svg": "7260e5798f862c1545c95ca6ab14dcc7",
"assets/assets/icons/headphones_outline_28.svg": "d87cf156c4518ad888a512c9bcb9465f",
"assets/assets/icons/hearts_2_circle_fill_twilight_28.svg": "2af250f6e7408f4dad73161ce245301c",
"assets/assets/icons/heart_circle_outline_28.svg": "93f66fb5a3d307f6fee44dd83c44b805",
"assets/assets/icons/help_circle_outline_28.svg": "f4dfa64e82d1e1d3e2709808b426fc4f",
"assets/assets/icons/help_outline_28.svg": "014a608124912cad40d0f2c07b0c0eb1",
"assets/assets/icons/hide_circle_fill_black_28.svg": "662be812ed71b18b6da3748f7894fc89",
"assets/assets/icons/hide_outline_28.svg": "46690488e0628756d023516c5268e38d",
"assets/assets/icons/hieroglyph_character_outline_28.svg": "d2905965f76dd97a3cabae65d3c28fa4",
"assets/assets/icons/history_backward_outline_28.svg": "07896bf8ba88c24d3832f4383ff3701b",
"assets/assets/icons/history_forward_outline_28.svg": "4cc3bb27e3fb55bd8e2733d215d65e59",
"assets/assets/icons/home_outline_28.svg": "70332b746e5a8eb849a471988374f168",
"assets/assets/icons/horse_toy_outline_28.svg": "d9f6df13fa954717273efc9579218474",
"assets/assets/icons/inbox_outline_28.svg": "2931a6014078687cbfe9d4063e9edbb3",
"assets/assets/icons/incognito_outline_28.svg": "cb15ad552616e857e7ee6945e7524707",
"assets/assets/icons/info_circle_outline_28.svg": "2300cca83d26d1b7a6f5243a44b62cae",
"assets/assets/icons/info_outline_28.svg": "6a5a807d2c1145c236b1656568804b19",
"assets/assets/icons/ipad_outline_28.svg": "fa5b4d332036bc9de19f429b0361f1a2",
"assets/assets/icons/keyboard_bots_outline_28.svg": "10dad656a04dc555f7b077b3e5f584b0",
"assets/assets/icons/keyboard_outline_28.svg": "5f7c6276513b018c812c5dbf8e0bc424",
"assets/assets/icons/key_outline_28.svg": "9860ba734a20059c38fba14918c4c00d",
"assets/assets/icons/key_square_outline_28.svg": "cac291ce7170c8eb9bca239af5fa3149",
"assets/assets/icons/laptop_outline_28.svg": "6711a874f0f2c8275420985a19d26ed3",
"assets/assets/icons/lifebuoy_outline_28.svg": "abafee517d2932997fb185608d7fbd57",
"assets/assets/icons/lightbulb_circle_fill_yellow_28.svg": "26255dd737ff9249cbb3c226930406ce",
"assets/assets/icons/lightbulb_outline_28.svg": "f6bcb90402f46abe2b327ff41eadbc37",
"assets/assets/icons/lightbulb_star_outline_28.svg": "ea8ca9c2b637452abf5d92531517f4fb",
"assets/assets/icons/like_28.svg": "ff3c5b43c471a5b107f043cd7ad0396f",
"assets/assets/icons/like_circle_fill_red_28.svg": "b0dd0281799dc0095b1b652f59dddd8a",
"assets/assets/icons/like_fill_red_28.svg": "15a1e5c191a6c3ae9ac7ee2d0f95afe4",
"assets/assets/icons/like_lock_outline_28.svg": "fb036eae32e17b4779135ae3c197f662",
"assets/assets/icons/like_outline_28.svg": "b3017d41aa8ad866ef787b43146bb815",
"assets/assets/icons/link_circle_outline_28.svg": "98b7757196dfc9a9f42eea3c646aaa2f",
"assets/assets/icons/link_outline_28.svg": "982def47fe10a890f9ef8a7313c6ad34",
"assets/assets/icons/list_add_outline_28.svg": "9cedc1e7b650ab4ededd508465c9dcfe",
"assets/assets/icons/list_arrow_left_down_outline_28.svg": "9a7a96717e2ecdc358c96f6fb93a9b4d",
"assets/assets/icons/list_check_outline_28.svg": "7017d8909abb8791f9c799f04bb1ebd4",
"assets/assets/icons/list_circle_fill_gray_28.svg": "b4787e4f86597f672f56f97770be7a3c",
"assets/assets/icons/list_hand_alt_28.svg": "7a8fdfa1138570437523cfbf21153cf5",
"assets/assets/icons/list_like_outline_28.svg": "92c9f8dc495dd3f72be998f41437c04e",
"assets/assets/icons/list_like_slash_outline_28.svg": "b7b7e3844df3a0b6d463e8a301015749",
"assets/assets/icons/list_outline_28.svg": "e09046704da156843d866aba1990be28",
"assets/assets/icons/list_play_outline_28.svg": "54ed48cdca3534eaec7d70392271d7be",
"assets/assets/icons/live_add_outline_28.svg": "be66042af34ce10a4c0004098be9ca0b",
"assets/assets/icons/live_clock_badge_outline_28.svg": "e433a8de4010d03ab0b950059b5a7024",
"assets/assets/icons/live_outline_28.svg": "35b5e91fe80cd0f440ae79e4c6ce5d60",
"assets/assets/icons/live_slash_outline_28.svg": "79684cfd3f073513c12ff17f842de2a2",
"assets/assets/icons/location_map_outline_28.svg": "fe94cbe580c5beec7a1c157ff05a42f5",
"assets/assets/icons/location_outline_28.svg": "1685d4d842e92858ee1d9b1f7f2b8365",
"assets/assets/icons/lock_open_outline_28.svg": "ccd66a6eb97febfef6c762a945e45c56",
"assets/assets/icons/lock_outline_28.svg": "4554bd0b2f946da4c71086ab8f68a433",
"assets/assets/icons/logo_instagram_28.svg": "d66459136fa16fc80966417056a475bd",
"assets/assets/icons/logo_skype_28.svg": "f544d98095b8cc4ca73cd5dd6e29adee",
"assets/assets/icons/logo_vk_28.svg": "7ec729264d40f3d39313dea2d39aa697",
"assets/assets/icons/logo_vk_color_28.svg": "7e273f974b176d91b5975197d94e52f9",
"assets/assets/icons/logo_vk_outline_28.svg": "e0225e26a40c4a7b05ecb92a0b17fad0",
"assets/assets/icons/logo_wink_28.svg": "534de6475122f593ab6c723a599a5202",
"assets/assets/icons/lotus_outline_28.svg": "87642aa49d0382133cb75224cff1e923",
"assets/assets/icons/loudspeaker_slash_outline_28.svg": "58e8c2e2e514f9fe41e41a2af4dcfe7a",
"assets/assets/icons/magic_wand_outline_28.svg": "fd09cdbf8051b6399796de9b112de3c4",
"assets/assets/icons/magnet_outline_28.svg": "bae0c87d5768f6d207839bd6a6bf67a3",
"assets/assets/icons/magnifier_minus_28.svg": "fa5aef6eac2965758d6276198dd10475",
"assets/assets/icons/magnifier_plus_28.svg": "6621ea8f672df97ef19edad947b0f0ce",
"assets/assets/icons/mail_circle_fill_blue_28.svg": "aec38908db2e506290a285287f124d15",
"assets/assets/icons/mail_circle_fill_gray_28.svg": "45e736aa00ff6d190a7daa0cdccba504",
"assets/assets/icons/mail_outline_28.svg": "3d8cd8bca63c95ab842e827301deecf3",
"assets/assets/icons/market_add_badge_outline_28.svg": "abb53dc67e2f7e52f9e24be31e5b7d62",
"assets/assets/icons/market_like_outline_28.svg": "63b6b696d0bd494fb653e678f44a6c9c",
"assets/assets/icons/market_outline_28.svg": "eaaf45bc496ff144100a38115e6ed32a",
"assets/assets/icons/market_slash_outline_28.svg": "25e59975228c995835f6d79b01292491",
"assets/assets/icons/masks_outline_28.svg": "8a54947033a57b9601ef16b2f91caa61",
"assets/assets/icons/mask_outline.svg": "ddd38111ea06ed98e5f8664b74959f77",
"assets/assets/icons/mention_28.svg": "54d5ed6fc78f89ea4e4c057fbf399b1a",
"assets/assets/icons/mention_circle_fill_blue_28.svg": "f852a6b0e4730530c1ad5daf9677bd0d",
"assets/assets/icons/mention_outline_28.svg": "7e7cdfee2453826deffcb213c7f3fd3b",
"assets/assets/icons/menu_28.svg": "3764f7dc53985b6d5133d2e7f1da9bbf",
"assets/assets/icons/menu_outline_28.svg": "1704e7e3f96a9e5fa88ebf25b47764a4",
"assets/assets/icons/messages_28.svg": "8c07b8c33906284015da609e9f1a2dc9",
"assets/assets/icons/messages_circle_fill_gray_28.svg": "dd4977f99ad4afb0f70b083c8999bae2",
"assets/assets/icons/messages_circle_fill_yellow_28.svg": "2de13f398d1ec6755b496b33c5cd0c74",
"assets/assets/icons/messages_outline_28.svg": "40d8a20dbeaa112e07fd02b7bde03239",
"assets/assets/icons/message_28.svg": "e1c82968b2cb499f7d70a07ab2f5b360",
"assets/assets/icons/message_add_badge_outline_28.svg": "2b4725f45fc31a2418c291c3668c84c6",
"assets/assets/icons/message_arrow_right_outline_28.svg": "ed65d7e621b6238925f8d9a6c02b453d",
"assets/assets/icons/message_check_outline_28.svg": "e70b1414407aa6286571ea8e16bf4b54",
"assets/assets/icons/message_circle_fill_green_28.svg": "811e7b3dd91a62adf7e67fcbbde3a956",
"assets/assets/icons/message_cross_outline_28.svg": "a92e2f3a8c320d5f77cfac9172d86449",
"assets/assets/icons/message_heart_28.svg": "e52fb876fe99dd997c32847411c37c20",
"assets/assets/icons/message_heart_outline_28.svg": "ec53e07f9b172fe1406f9f743e5552b1",
"assets/assets/icons/message_outline_28.svg": "3d779c794637ecb6787acfdd1d436992",
"assets/assets/icons/message_pin_outline_28.svg": "f84723fb64c1f922119ee50a1b33c28e",
"assets/assets/icons/message_reply_outline_28.svg": "b6db0f578f4922362923a79350e58e77",
"assets/assets/icons/message_request_circle_fill_blue_28.svg": "578c65e92ada3e138709c8791c9de8e6",
"assets/assets/icons/message_unread_circle_fill_gray_28.svg": "1d4fc5409deac5d127c393572e36032a",
"assets/assets/icons/message_unread_circle_fill_red_28.svg": "2203e27f7bb76fbf768139f5a262e7e2",
"assets/assets/icons/message_unread_outline_28.svg": "330da95f2fdbcc82a4954d5fa1eac2d3",
"assets/assets/icons/message_unread_top_28.svg": "5019e7f48bd9534f604b32b0f16ecb2b",
"assets/assets/icons/microphone_alt_28.svg": "02ef46e8c8fa24f0f00b0275d06f13b9",
"assets/assets/icons/microphone_slash_28.svg": "046da381bdf203f3c3358a882432fad6",
"assets/assets/icons/microphone_slash_alt_28.svg": "aac67db742710c67e2587db1c203cff0",
"assets/assets/icons/microphone_slash_outline_28.svg": "36de1e7a2e1e7f38cda696c7c805c9ea",
"assets/assets/icons/microphone_videocam_outline_28.svg": "65106d9c7e20e649fca6bde6a7bb2f50",
"assets/assets/icons/microphone_videocam_slash_outline_28.svg": "64df4a579c4b169e989712c66008240f",
"assets/assets/icons/mic_slash_outline_28.svg": "aa373c719d26c58f100c0364d1f12466",
"assets/assets/icons/money_circle_outline_28.svg": "07b818226a27ab3eea2710044ca607cb",
"assets/assets/icons/money_history_backward_outline_28.svg": "7f96ec68541c96d6d786dd3bec9d942b",
"assets/assets/icons/money_request_circle_fill_blue_28.svg": "ff2a76a52126cd0f6ba430bd653739e4",
"assets/assets/icons/money_request_outline_28.svg": "bfa6e9adbd67a58c46c961e3b966dc92",
"assets/assets/icons/money_send_outline_28.svg": "94bfd80e2ecd227168a311a808a72ff9",
"assets/assets/icons/money_transfer_28.svg": "dce05e9031a640cc25912a1faaa08776",
"assets/assets/icons/money_transfer_circle_fill_red_28.svg": "2cc05c233b5448fd1bdad87b43073dd2",
"assets/assets/icons/money_transfer_circle_fill_turquoise_28.svg": "b3df63e901a3f2b8f6aef3d6a93c7829",
"assets/assets/icons/money_transfer_outline_28.svg": "ed948a2115253dc14527d8187d9fa4f9",
"assets/assets/icons/money_wad_outline_28.svg": "0c6f50d44eda4fc2c573e29240f9cb5b",
"assets/assets/icons/moon_outline_28.svg": "4d1af5c932be6eca25537b1ac19170fb",
"assets/assets/icons/more_28.svg": "10974f6387a4d2db5a8e4c28eccb6a90",
"assets/assets/icons/more_horizontal_28.svg": "206c8a235c15035b44ea48a8dbc0ebc5",
"assets/assets/icons/more_horizontal_circle_fill_gray_28.svg": "dca4e1415ca448409301eebc82b8b52f",
"assets/assets/icons/more_vertical_28.svg": "7dddb249a038f37ab0ec0a70b6c3f24c",
"assets/assets/icons/mortar_outline_28.svg": "48e7a5d39a8dcafc88a6430a57dc54fe",
"assets/assets/icons/motorcycle_outline_28.svg": "737cd0dc6fa9fa44078523a19daa571e",
"assets/assets/icons/movie_reel_outline_28.svg": "2c679f1fd33a68c88830fce21b069e5e",
"assets/assets/icons/music_28.svg": "38c62d17b0b912ce781b2f6ae82c190d",
"assets/assets/icons/music_mic_outline_28.svg": "993f66cb8e9ede6a9d463073cbd2130b",
"assets/assets/icons/music_note_wave_outline_28.svg": "997c3d6163b6a6202fc23f75ce5b83c2",
"assets/assets/icons/music_outline_28.svg": "9d07f91c33e1291a7fb5b20df164d198",
"assets/assets/icons/mute_outline_28.svg": "6069d7e7ad87955556403d53f42a26e5",
"assets/assets/icons/name_tag_outline_28.svg": "9f2a3c00abcc4670ca2d683afc92aa8c",
"assets/assets/icons/narrative_active_outline_28.svg": "120e12ca891ece45aebe79d22d4d7d43",
"assets/assets/icons/narrative_outline_28.svg": "68d6d3c0e440bc680e7a193ba9334acb",
"assets/assets/icons/newsfeed_28.svg": "baee2b92680fd1da5ae794951cf98cdd",
"assets/assets/icons/newsfeed_music_note_outline_28.svg": "48feabbc54c267db4d167624d7622035",
"assets/assets/icons/newsfeed_outline_28.svg": "6e15c30bd27ea490c73fe27af4a54813",
"assets/assets/icons/notebook_add_badge_outline_28.svg": "7daf06f9e094cf5b62170b9c1c60b03a",
"assets/assets/icons/notebook_check_outline_28.svg": "5cf544bade536965726a7850aa46fef0",
"assets/assets/icons/notifications_28.svg": "708ae14458aeef19c99e44b63efac612",
"assets/assets/icons/notification_28.svg": "cf9e640ccdeb6896d9d46cc0c526e251",
"assets/assets/icons/notification_add_outline_28.svg": "6ff4e31b6d2d7464a378b88860b03fb7",
"assets/assets/icons/notification_circle_fill_gray_28.svg": "87e99a200fc29f16780101239990d44c",
"assets/assets/icons/notification_disable_outline_28.svg": "a76cc319378c4b9c2bcbba0711cdac55",
"assets/assets/icons/no_smoking_sign_outline_28.svg": "93406010619b16696ab9bd2370ec92e0",
"assets/assets/icons/on_off_outline_28.svg": "16ee851007e01c249d548cc9696edb7c",
"assets/assets/icons/paint_roller_outline_28.svg": "d20ac9954b161b50bb856f4a3519d982",
"assets/assets/icons/palette_fill_blue_28.svg": "5c93a010466a2aad909914a10dc4fde0",
"assets/assets/icons/palette_outline_28.svg": "da5c32766ff32dc0043feceb12a0e318",
"assets/assets/icons/paperplane_outline_28.svg": "cd630e84b1ad68216eddc4cfbd863972",
"assets/assets/icons/pause_28.svg": "4e96749ad6e1da34127284c3aab4e861",
"assets/assets/icons/pause_circle_28.svg": "5ebd048efff271958df85a43bffddc98",
"assets/assets/icons/paw_outline_28.svg": "c734c17214dbf60c28fe6958789e3002",
"assets/assets/icons/payment_card_outline_28.svg": "2bf5e630b8e6f775e1207cbb2e795984",
"assets/assets/icons/payment_card_vertical_outline_28.svg": "3798c407e53a0f2377bf221500973ee1",
"assets/assets/icons/pen_keyhole_outline_28.svg": "8e195cf906e2f1f12328318eb50b2e09",
"assets/assets/icons/pen_stack_lock_outline_28.svg": "41ee70683e1426ec83bd62015bf45866",
"assets/assets/icons/pen_stack_outline_28.svg": "77dc6247de6e986fbd2d9c1cb244e43e",
"assets/assets/icons/phone_add_outline_28.svg": "bcbce5536e0e549b30fa2eb9dafbbc1e",
"assets/assets/icons/phone_circle_fill_green_28.svg": "aad653c0ad00d743e76e1afd1b24dc47",
"assets/assets/icons/phone_outline_28.svg": "37a5089e9b7532627f289ac37868275d",
"assets/assets/icons/phone_spam_outline_28.svg": "f82d9c5c37fe3cfb2592ad759811a241",
"assets/assets/icons/phone_wave_outline_28.svg": "25095109c40ff7b1761632b45343bb5d",
"assets/assets/icons/picture_in_picture_16x9_outline_28.svg": "72180a9933182b2eecc577444c5318b0",
"assets/assets/icons/picture_in_picture_out_16x9_outline_28.svg": "e4083a0e068dcf686b17829844477f34",
"assets/assets/icons/picture_outline_28.svg": "82e032d2329c6469d9803313d18ff990",
"assets/assets/icons/picture_stack_outline_28.svg": "3d1c8247eab9d8bc98eab8ed567f0ed4",
"assets/assets/icons/pill_outline_28.svg": "755dca51f791dd6010f0cee30ca3bdcc",
"assets/assets/icons/pincode_lock_outline_28.svg": "0dfc48f256729f11b5072eae90b2fade",
"assets/assets/icons/pincode_outline_28.svg": "ab9ea6dbf65a5a271a201167722c1d8e",
"assets/assets/icons/pin_circle_fill_blue_28.svg": "77818aca2bc6e9e8559e2266731d7e33",
"assets/assets/icons/pin_dot_outline_28.svg": "615ba9890c9ff06c395ca0aa6277850f",
"assets/assets/icons/pin_dot_slash_outline_28.svg": "e3ba207eb45e6d7414cb8b942afb8e66",
"assets/assets/icons/pin_outline_28.svg": "bb5bb6ec9a7efc728863dc67c78376bd",
"assets/assets/icons/place_28.svg": "ea72510fb742fcb13d7c5a0943eb63ce",
"assets/assets/icons/place_outline_28.svg": "f6f236ce4a756a226b6d779fa09aecd2",
"assets/assets/icons/plane_outline_28.svg": "cdbe174b424dca6aeb686122982894ff",
"assets/assets/icons/playlist_outline_28.svg": "a7b74e7c6a0e4c23cbaa8ac9db9eea9a",
"assets/assets/icons/play_28.svg": "932e2dc5d3ab8f63d45452987b1a5d6e",
"assets/assets/icons/play_cards_2_outline_28.svg": "db367fe3493f97b33aac57d8c69c1404",
"assets/assets/icons/play_circle_28.svg": "e1ebfce3a95b39b04e3d677e8ae2fc05",
"assets/assets/icons/play_circle_fill_azure_28.svg": "3377853200683ba6c1cbf2b562f2c079",
"assets/assets/icons/play_rectangle_stack_outline_28.svg": "d42a56c47f368ec86a2cf92bd271e5e3",
"assets/assets/icons/play_speed_outline_28.svg": "8d59869ab3bdfcff74c13e9d7cd3724d",
"assets/assets/icons/podcast_circle_fill_red_28.svg": "026611d20480deab9ac72a154b55991a",
"assets/assets/icons/podcast_outline_28.svg": "09aa22964618896af073e8580034d124",
"assets/assets/icons/poll_circle_fill_green_28.svg": "85be9d18427cafc73464280be67b3a86",
"assets/assets/icons/poll_square_outline_28.svg": "a5642303dad326e47f8da339c07c427e",
"assets/assets/icons/popup_stickers_circle_fill_raspberry_pink_product_28.svg": "010d602f28af04981f20a01470dbfe2d",
"assets/assets/icons/power_socket_outline_28.svg": "8c92a0f1ad01d1ac7ca1ce62f7d33781",
"assets/assets/icons/printer_outline_28.svg": "1c27148505f89343448183cf0aab5b28",
"assets/assets/icons/privacy_outline_28.svg": "36890b48f41b7838a63e20b194a527b9",
"assets/assets/icons/profile_28.svg": "5dd83bcfcd9a159924797f2c85de5896",
"assets/assets/icons/qr_code_outline_28.svg": "849715f2d4b1a42ea25781f3e69f57eb",
"assets/assets/icons/question_outline_28.svg": "e8a1abc979f52860b60edc85e2fb2418",
"assets/assets/icons/radiowaves_around_outline_28.svg": "abce53a33dc257a891c8e229bdec7b58",
"assets/assets/icons/radiowaves_left_and_right_circle_fill_red_28.svg": "2f672319e9d2282f136612eb4cdcc4d1",
"assets/assets/icons/radiowaves_left_and_right_outline_28.svg": "2ba00a04ec530f5a350bf82fdf96e683",
"assets/assets/icons/recent_outline_28.svg": "b277ed0fbf8b338257b53fe119d2714f",
"assets/assets/icons/recorder_tape_outline_28.svg": "384f23b773b10eb9adc994fa91951f95",
"assets/assets/icons/rectangle_2_outline_28.svg": "7017190d03f5c5e2fdc1b75e33d84799",
"assets/assets/icons/refresh_outline_28.svg": "d0608a4dbf461b3bc98dd33bf91736dd",
"assets/assets/icons/remove_circle_outline_28.svg": "2f603e4b86d88aef9eb50b914af3ae25",
"assets/assets/icons/replay_10_28.svg": "44719132c435fb691ee7f8d194f49498",
"assets/assets/icons/replay_10_outline_28.svg": "30f5e35ba3116525f0774b1b9f57410f",
"assets/assets/icons/replay_15_28.svg": "d8f9c714d942af4c71e1720fe9356513",
"assets/assets/icons/replay_28.svg": "436872148f204f1377a2555352f670dd",
"assets/assets/icons/replay_outline_28.svg": "feea4cb453c1b52e0a87515918cfaaaf",
"assets/assets/icons/reply_circle_fill_green_28.svg": "44d6a68f026a5fc9413552cea73a05fc",
"assets/assets/icons/reply_outline_28.svg": "fe0b5d5444e2c0e77e8f4b3833cbad31",
"assets/assets/icons/report_outline_28.svg": "5b64e528e1e1f628258af4b52a4778a5",
"assets/assets/icons/repost_circle_fill_green_28.svg": "f3dc46949758f75d8b2168da01ee6155",
"assets/assets/icons/rouble_circle_fill_blue_28.svg": "81d16aba184140e7bf6da3ec64804dfd",
"assets/assets/icons/rss_circle_fill_black_28.svg": "050e7b43a4f5cba0e3b79c0eab3569f0",
"assets/assets/icons/rss_circle_fill_yellow_28.svg": "a056eb45113e598819350928aeb499e6",
"assets/assets/icons/rss_feed_outline_28.svg": "26f4997ffdd1aa4a4e2a5b7480338de7",
"assets/assets/icons/safari_outline_28.svg": "6fd8d29ac15d47146309e4b47cb5e246",
"assets/assets/icons/scan_viewfinder_outline_28.svg": "c653cb2665a925e81ac3e404a778afa0",
"assets/assets/icons/school_outline_28.svg": "8969b644dbd08a31e4ecbf221132658e",
"assets/assets/icons/screencast_28.svg": "2ff1621fe103f13dafae7d1308e08278",
"assets/assets/icons/screencast_outline_28.svg": "ea595569025edd26ad72a9cecd434641",
"assets/assets/icons/search_28.svg": "fa267f5da59929ef5a17b038bd0f5727",
"assets/assets/icons/search_like_filled_outline_28.svg": "4fcbab72e19626602eb08de8b762a63c",
"assets/assets/icons/search_like_outline_28.svg": "a2df6f4c724550e2eeb4ad85b7745807",
"assets/assets/icons/search_outline_28.svg": "e43c7a34ae2ff695a196a58084a5ded8",
"assets/assets/icons/send_28.svg": "2deb48f0cf315d8a3b293dce79b6fdde",
"assets/assets/icons/send_circle_fill_gray_28.svg": "21e0598a60d7bfc366e06c669e872a4b",
"assets/assets/icons/send_outline_28.svg": "fd52d5bb67fa894bdc19765da81dd79b",
"assets/assets/icons/services_28.svg": "4627f60aac832f3ff631164384b7f431",
"assets/assets/icons/services_circle_fill_blue_28.svg": "77c5a8d82414386fa77eb4f678f55f40",
"assets/assets/icons/services_circle_fill_turquoise_28.svg": "c968ad4026979ed752627117d421390f",
"assets/assets/icons/services_gibdd_28.svg": "11f292be97f498108b4e4b24dfad3ef0",
"assets/assets/icons/services_outline_28.svg": "b80bf788d628ced9e9f8bbfcd3518ee2",
"assets/assets/icons/settings_28.svg": "200f111f5b601ee923ac31fbb08501fd",
"assets/assets/icons/settings_outline_28.svg": "34107fefc872c4d66b986969b50f19cf",
"assets/assets/icons/share_external_28.svg": "25de8183cb60771976bc8349f70e1f15",
"assets/assets/icons/share_external_outline_28.svg": "f504b707beefe5249e1702e7406dcfe4",
"assets/assets/icons/share_outline_28.svg": "e0e78a2f041e7a5762310e967f687de1",
"assets/assets/icons/shield_keyhole_outline_28.svg": "c337ce87f11c35354d03fbfcc8f8a3f1",
"assets/assets/icons/shopping_cart_outline_28.svg": "6a0a96d4c2b3844fc7ac637170ff5659",
"assets/assets/icons/shuffle_outline_28.svg": "2e2b3938e0e204eeb86e9c4222e8e7ca",
"assets/assets/icons/skip_back_28.svg": "1f9ca072f3f5615183b8dad8ec27aa70",
"assets/assets/icons/skip_forward_28.svg": "f01468ce1545bfc4120b72a12ac91a39",
"assets/assets/icons/skip_next_28.svg": "dc8cfecf196ea1d21ea7ac87bfce3f32",
"assets/assets/icons/skip_previous_28.svg": "084c188fd80977738d02e74322b8a003",
"assets/assets/icons/skirt_outline_28.svg": "616fb5b7be8193e91527b049d2ed6dfb",
"assets/assets/icons/sliders_outline_28.svg": "5b46f7fc6f3107d76ab8cb6ae24bde00",
"assets/assets/icons/sliders_vertical_outline_28.svg": "9f64d4dbc43632f7d39bc109188992b8",
"assets/assets/icons/smartphone_outline_28.svg": "7988d969b46db6bf0acb2ebbc17066ed",
"assets/assets/icons/smartphone_stars_outline_28.svg": "460c68b219910e46616ae0555d7bd5e8",
"assets/assets/icons/smiles_2_outline_28.svg": "675c7aa1e74faf868ed88cb396a9db1c",
"assets/assets/icons/smile_28.svg": "7a8723bd9657f49a591005e6a28ca66c",
"assets/assets/icons/smile_outline_28.svg": "b7a83b4c1117f7ce70644c2dd9a5fc6e",
"assets/assets/icons/sneaker_outline_28.svg": "b49c8757d75db97754a584e743fd0017",
"assets/assets/icons/snowflake_outline_28.svg": "ba22d7ad4aba215f57bf5597f7e9f9a0",
"assets/assets/icons/song_circle_fill_violet_28.svg": "16f691f50f308b65d1418a47bd10360e",
"assets/assets/icons/song_outline_28.svg": "a4a0ce6ab05abe23a38ae5ea63060b7a",
"assets/assets/icons/sort_horizontal_outline_28.svg": "b55d86f6222617a87779f652bd611b77",
"assets/assets/icons/sort_outline_28.svg": "4d0b5e4d245b00df21bb861f7b240cdb",
"assets/assets/icons/sound_wave_outline_28.svg": "29a7cc46aa9812476f931b543a3e85cd",
"assets/assets/icons/sparkle_outline_28.svg": "5e3ac7f63e2bd10176faf9f5b8ad3027",
"assets/assets/icons/speedometer_max_outline_28.svg": "e33e120f26a41ae276477209049398d3",
"assets/assets/icons/speedometer_middle_outline_28.svg": "9798030020cad74ca7be90ed7355932a",
"assets/assets/icons/speedometer_start_outline_28.svg": "20b4310e5833b23e252b87b286d69cdf",
"assets/assets/icons/square_4_outline_28.svg": "5359c0bf2593c74aa8391903e25d3273",
"assets/assets/icons/stars_circle_fill_violet_28.svg": "6306c53b5b22a4150f2334a3d6e57b28",
"assets/assets/icons/stars_outline_28.svg": "8d6df30945f49d27e2e0209537a85c8d",
"assets/assets/icons/statistics_outline_28.svg": "8b81698c97e9672ff90222cda4154cff",
"assets/assets/icons/statistic_circle_fill_blue_28.svg": "7c4451634f08ddc34ee2530be746391e",
"assets/assets/icons/sticker_outline_28.svg": "c6db11d5fde61039fe230f60c896a0bf",
"assets/assets/icons/stopwatch_outline_28.svg": "730fc142203ecc4b390220a0c7c5e026",
"assets/assets/icons/storefront_outline_28.svg": "bdf3d64872116e9b69a3a141a2d1dda1",
"assets/assets/icons/story_28.svg": "36356636be8d85c8e3fcd03ebeeaf460",
"assets/assets/icons/story_add_outline_28.svg": "933e5093d4174de7fbe9c68943959d5e",
"assets/assets/icons/story_circle_fill_violet_28.svg": "b8f2e0659216dec72bbbe35c7662e193",
"assets/assets/icons/story_circle_fill_yellow_28.svg": "7fb85edb84f3a64290c507a0d0b24636",
"assets/assets/icons/story_fill_circle_red_28.svg": "3c244021130a3e6cb20c4ed9176c9019",
"assets/assets/icons/story_outline_28.svg": "75bf672e94f0e20f0c1fa55aa0d70203",
"assets/assets/icons/story_question_circle_fill_violet_28.svg": "b11193a4f81136633f69901826e7e664",
"assets/assets/icons/story_reply_circle_fill_violet_28.svg": "867633ac0bb622324b04718d0624d6ba",
"assets/assets/icons/stud_outline_28.svg": "87538d0cfd2496074e2bb20778f4ac01",
"assets/assets/icons/subtitles_outline_28.svg": "599a05488f4edbed6cf999068af057a7",
"assets/assets/icons/sun_outline_28.svg": "cd90083d213d4c7ab90e4ba0a3480185",
"assets/assets/icons/switch_outline_28.svg": "db4c0b455b3f7509b590580de8d71715",
"assets/assets/icons/switch_outline_alt_28.svg": "f8008fd672a789ef26ef64ee61f33cfd",
"assets/assets/icons/sync_outline_28.svg": "401c2d843dbfcb87a2ce3e3d7a61e3c3",
"assets/assets/icons/tag_outline_28.svg": "d9c50839978fc8619ccd24e0e84a0a48",
"assets/assets/icons/target_outline_28.svg": "28883336e5d9ae5a07f246f61bca8739",
"assets/assets/icons/tear_off_flyer_fill_blue_28.svg": "9eeebd87db23637216f66d01ced2e26b",
"assets/assets/icons/tear_off_flyer_outline_28.svg": "33bbd19f362353b288be60fcb75a2277",
"assets/assets/icons/text_circle_fill_gray_28.svg": "761a7156a7a00940016950036ce22670",
"assets/assets/icons/text_circle_outline_28.svg": "aeba4f8af855e0bc1a07e384df2db129",
"assets/assets/icons/text_live_circle_fill_green_28.svg": "85f4be4eefdffea18cd24135d35c4c94",
"assets/assets/icons/text_live_outline_28.svg": "81215604ab526fb7624e36d658c03212",
"assets/assets/icons/thumbs_up_outline_28.svg": "ea7a866139f1e6d998a8a26c9e5271a6",
"assets/assets/icons/ticket_outline_28.svg": "9fc765272902fa0d7e42b73fd7357abe",
"assets/assets/icons/touch_id_outline_28.svg": "786f29447438d4bfab23a5729cb6d3be",
"assets/assets/icons/train_outline_28.svg": "3ff1748bb0406e19a779d4708e31b73c",
"assets/assets/icons/tshirt_outline_28.svg": "aff1fd2e1e4921e526bb52940a9e9c2d",
"assets/assets/icons/tv_outline_28.svg": "9c0d5bba4d57cfc3d2da5d63e815f13d",
"assets/assets/icons/unarchive_outline_28.svg": "4c2dc05f2b2b31b710d9171bb7477885",
"assets/assets/icons/unfavorite_outline_28.svg": "17f29cc36939f841bbe8fc4ee78bd8e3",
"assets/assets/icons/unpin_outline_28.svg": "7e5d568746022760e3bcd22be850a1c8",
"assets/assets/icons/upload_outline_28.svg": "917d9cfffc0cda8a6b271c8278279eeb",
"assets/assets/icons/users_28.svg": "68859392ebcdcba9a22b5dec3cb9da86",
"assets/assets/icons/users_3_outline_28.svg": "ad3a51a0614d65a0b97751af9cfe609c",
"assets/assets/icons/users_circle_fill_blue_28.svg": "05032592d6525e0ddbeaf46a7cc99da8",
"assets/assets/icons/users_circle_fill_gray_28.svg": "c93c5ab4e1e07400faffb03b9180736a",
"assets/assets/icons/users_circle_fill_yellow_28.svg": "1eeffd68843e2f30eda239b433c1bfc8",
"assets/assets/icons/users_outline_28.svg": "347b0803d7af9777751270580cfbe6f6",
"assets/assets/icons/user_28.svg": "4a12b2fc91acf8b17b6a1bf7f322ea49",
"assets/assets/icons/user_added_outline_28.svg": "48852cef3fa87506c3f29177f6541a2f",
"assets/assets/icons/user_add_badge_outline_28.svg": "50c2b3da7e17ee8b4b7710163129866d",
"assets/assets/icons/user_add_outline_28.svg": "cdeaf01540420e7be625ffa1f90fe617",
"assets/assets/icons/user_card_outline_28.svg": "6bc5a3928d934142a1ba7ba02eaf005f",
"assets/assets/icons/user_circle_fill_blue_28.svg": "d0aedd3ea38e05ba156f573641589ced",
"assets/assets/icons/user_circle_outline_28.svg": "a5af651ad3b878d8558d596b89c1953f",
"assets/assets/icons/user_incoming_outline_28.svg": "95c218298310dcd9a0553e86665cf292",
"assets/assets/icons/user_microphone_badge_outline_28.svg": "aa95d895b2c626608e849558deb46074",
"assets/assets/icons/user_microphone_badge_slash_outline_28.svg": "9c0dc04e7fe0a18be68f8b7ccc623839",
"assets/assets/icons/user_outgoing_outline_28.svg": "4c9946581b5c295a2975b316027caf4c",
"assets/assets/icons/user_outline_28.svg": "7ddaabd4af7822300ce68db1f7d68cbb",
"assets/assets/icons/user_square_outline_28.svg": "d6c4ba4bfa4964abce6a86402f48bafd",
"assets/assets/icons/user_star_badge_outline_28.svg": "14df9b75f6b5d8ae5c676bf7454338be",
"assets/assets/icons/user_star_badge_slash_outline_28.svg": "40ccb0e1d110c2c42d2fe990de7d945e",
"assets/assets/icons/user_tag_outline_28.svg": "3791dd4897d11b423668489277954dd9",
"assets/assets/icons/videocam_28.svg": "c5574e0817e4bfdb9e4c7b7419215234",
"assets/assets/icons/videocam_add_outline_28.svg": "475b67b2bb38022b2c3acd30a86821a2",
"assets/assets/icons/videocam_alt_28.svg": "99428e85055c1be82d59309498f4b0e8",
"assets/assets/icons/videocam_arrow_up_outline_28.svg": "64d6798bb75ffd6d5cd5a9b8b50a0e4e",
"assets/assets/icons/videocam_arrow_up_slash_outline_28.svg": "bdca3b667c94d2c67dc64c62d74d7ae2",
"assets/assets/icons/videocam_outline_28.svg": "86d94e8dd0616e553ebfba0b031538bc",
"assets/assets/icons/videocam_slash_alt_28.svg": "495e9f8b3afeb5273979090f52b61fb5",
"assets/assets/icons/videocam_slash_outline_28.svg": "a1c9843dd8e3486e7c8838540b906e58",
"assets/assets/icons/video_28.svg": "72f3da1a11b920372ed798149ee6c198",
"assets/assets/icons/video_camera_circle_fill_red_28.svg": "a3fae6de23fa4c8485c569abec212f9d",
"assets/assets/icons/video_circle_outline_28.svg": "b4ec27b28d67a5e04b1abcc97edb65f8",
"assets/assets/icons/video_fill_outline_28.svg": "60ba5207b6005a48a979ed4368160aba",
"assets/assets/icons/video_outline_28.svg": "2f8a408e96dcf1c9608194e798b7fd52",
"assets/assets/icons/view_outline_28.svg": "67d1df74a7cc503ea3759757ba6e4ba7",
"assets/assets/icons/vinyl_outline_28.svg": "acf7c44b36013c2a274f3d96c449c7b5",
"assets/assets/icons/voice_28.svg": "b79c2b7a4f215ec7a1a6854434529423",
"assets/assets/icons/voice_outline_28.svg": "eab4439d228f9771517694db16318731",
"assets/assets/icons/volume_alt_28.svg": "367c8c54beee1ae0e8401990fe94a592",
"assets/assets/icons/volume_circle_fill_gray_28.svg": "c9ec805702885e9e34649c1b47e6a124",
"assets/assets/icons/volume_outline_28.svg": "6b584f1ded742c1e81a4b7bacff3fa0c",
"assets/assets/icons/votes_transfer_circle_fill_turquoise_28.svg": "306f47ec59d0ba554430b4666c122473",
"assets/assets/icons/wallet_outline_28.svg": "79a7396046837092631c269e31b9aef3",
"assets/assets/icons/warning_triangle_outline_28.svg": "833a9d58b3e0761b0297c36e93520e0e",
"assets/assets/icons/washer_outline_28.svg": "9b47e86d2365657df2928a58fed2dfa3",
"assets/assets/icons/water_drop_outline_28.svg": "9e8162248c5fe84c4fde72f27d539373",
"assets/assets/icons/wheel_outline_28.svg": "9adce62fc513d24e633463a5114cc97e",
"assets/assets/icons/window_check_28.svg": "a4fb279cf2140fed26466d4a6e7f3043",
"assets/assets/icons/work_outline_28.svg": "0daf48f1f0b8bd5e9f81f70da02085e4",
"assets/assets/icons/wrist_watch_outline_28.svg": "dbe6292530b95f9828007249e868e172",
"assets/assets/icons/write_28.svg": "df339a2c2dc4d585a39cf372f7b380ba",
"assets/assets/icons/write_outline_28.svg": "50c393d9c7f038213ffe9d6a8066b1f1",
"assets/assets/icons/write_square_outline_28.svg": "299c8fa54923fea990a33be7e5316e89",
"assets/assets/icons/zero_ruble_outline_28.svg": "5e3723372361cc557d1123a461e5cb98",
"assets/assets/icons/zip_outline_28.svg": "b161da768e378ade770157c92d988497",
"assets/assets/images/apple.png": "f0371e51c9e5bd470b9ad96eafccc881",
"assets/assets/images/basket.png": "9cbb41c990c5f6e814d0df40caa3b716",
"assets/assets/images/Google.png": "837dff38123c876ee3c88bf003adb76d",
"assets/assets/images/inbox_outline_56.svg": "ef904d9b0a430e2fe4700253c9b9fd83",
"assets/assets/images/masks_outline_32.svg": "3bae6381e09d604136a9689a28c92f5e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "4e2c14effbb306e59394f86f61860a09",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b8cc0cbd32c5d43aa8ed9cc32d86ea95",
"/": "b8cc0cbd32c5d43aa8ed9cc32d86ea95",
"main.dart.js": "71e2d071af999486b7addd9dd4720df0",
"manifest.json": "66f3056d94a878a99aadbfe845af396e",
"version.json": "b15ede7573cd8a8c47d8d1d14586050a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

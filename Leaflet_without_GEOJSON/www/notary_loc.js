// DONNEES DE TEST
// données de test étude notariale (Millon-Dailly)
var coorNot_MD = [48.87,2.34];
var areaNot_MD = 1000; // rayon exprimé en mètres
// Données individuelles du notaire
var datEtude_MD = "CVIII";
var datNom_MD = "Augustin Millon-Dailly";
var datAdr_MD = "Rue de la Tisseranderie, vis-a-vis la rue du Mouton, Paris";
var datDates_MD = "20 aout 1774 - 10 juillet 1776";
var datUrl_MD = "https://www.siv.archives-nationales.culture.gouv.fr/siv/NP/FRAN_NP_011185";
// données de test clients du notaire (Millon-Dailly)
var latClients_MD = new Array(48.8634101, 48.8704817, 48.86874410000001, 48.8545034, 48.855545, 48.8604178, 48.8874114, 48.8604178, 48.8565112, 48.8545034, 48.8560263, 48.85534269999999, 48.8689074, 48.8656049, 48.8574926, 48.851315, 48.8520918, 48.8639731, 48.852663, 48.8604178, 48.85961469999999, 48.86283359999999, 48.86874410000001, 48.8639731, 48.8410312, 48.8604178, 48.85534269999999, 48.8688869, 48.869663, 48.8552146, 48.852646, 48.855247, 48.8534769, 48.8639731, 48.8545034);
var lonClients_MD = new Array(2.3509563999999727, 2.3312512999999626, 2.359396400000037, 2.3476631999999427, 2.362691, 2.3423625000000357, 2.3441748999999845, 2.3423625000000357, 2.359518699999967, 2.3476631999999427, 2.353260099999943, 2.3552610000000413, 2.329418300000043, 2.3324192999999696, 2.3486219999999776,  2.334859, 2.3485513000000537, 2.3353366999999707, 2.3633307999999715, 2.3423625000000357, 2.31480160000001, 2.3484703999999965, 2.359396400000037, 2.3353366999999707, 2.356017599999973, 2.3423625000000357, 2.3552610000000413, 2.335959199999934, 2.349641, 2.3470340999999735, 2.3691939000000275, 2.355210, 2.3333553999999594, 2.3353366999999707, 2.3476631999999427);
var coorClients_MD = new Array(latClients_MD, lonClients_MD);

// données de test étude notariale (André Fourchy)
var coorNot_AF = [48.864958,2.332825];
var areaNot_AF = 2000;
// données individuelle du notaire
var datEtude_AF = "LIX";
var datNom_AF = "André Fourchy";
var datAdr_AF = "11 rue des Pyramides, Paris";
var datDates_AF = "17 février 1898 - 15 janvier 1902";
var datUrl_AF = "https://www.siv.archives-nationales.culture.gouv.fr/siv/IR/FRAN_IR_042380";
// données clients du notaire
var latClients_AF = new Array(48.864977,48.867877,48.870303,48.878819,48.8816,48.885868,48.860731,48.87819,48.885778,48.86585,48.871017,48.860536,48.879731,48.871623,48.868877,48.868877,48.881841,48.835342,48.835377,48.854229,48.865273,48.873312,48.845748,48.87319,48.872494,48.878254,48.847766,48.851639,48.855402,42.548357,48.873951,48.867533,48.842151,48.85887,48.868681,48.882435,48.860581,48.866089,48.857255,48.869263,48.871265,48.884208,48.830587,48.841379,48.873281,48.839069,48.876666,48.884401,48.844445,48.880513,48.841006,48.875133,48.86907,48.853281,48.851817,48.857847,48.89533,48.893449,48.876618,48.830187,48.882674,48.867616,48.868053,48.868996,48.868996,48.885196,48.837186,48.865778,48.867423,48.876853,48.895683,48.878307,48.880927,48.842671,48.84261,48.86273,48.848328,48.855248,48.869985,48.825424,48.877575,48.870398,48.88173,48.839829,48.890097,48.883434,48.880214,48.889392,48.850563,48.879356,48.880017,48.880334,48.849453,48.861059,48.88352,48.883892,48.864048,48.863996,48.844701,48.834718,48.885231,48.878984,48.881952,48.878477,48.853811,48.882671,48.88857,48.856932,48.869874,48.881808,48.850028,48.871528,48.848781,48.873312,48.840764,48.879463,48.882897,48.844168,48.872056,48.864236,48.864545,48.867861,48.87021,48.874168,48.850598,48.875943,48.876172,48.870003,48.862601,48.889588,48.867094,48.846996,48.850533,48.857551,48.825417,48.874429,48.861575,48.882475,48.865126,48.825734,48.849538,48.834848,48.831885,48.871668,48.883166,48.857751,48.864048,48.881506,48.87952560000001,48.875111,48.852193,48.874721,48.85177,48.874871,48.824815,48.855374,48.852504,48.843361,48.863211,48.858882,48.876135,48.8746,48.884887,48.888395,48.846244,48.884583,48.854814,48.857487,48.827446,48.885988,48.890595,48.88006,48.84913,48.873923,48.850533,48.887959,48.851235,48.873977,48.859915,48.879351,48.879311,48.858417,48.868984,48.840934,48.848395,48.848395,48.846503,48.887867,48.859234,48.877578,48.865491,48.881443,48.827141,48.876401,48.84884,48.878256,48.876029,48.834507,48.875141,48.86057,48.885501,48.86563,48.878255,48.871721,48.869169,48.880006,48.868712,48.878979,48.848512,48.873277,48.870916,48.877867,48.870558,48.868233,48.87638,48.876588,48.843325,48.878249,48.857287,48.875702,48.878086,48.843955,48.86649,48.86649,48.871081,48.859578,48.871907,48.851578,48.84341,48.842208,48.86618,48.849943,48.880893,48.853994,48.877893,48.879656,48.865451,48.843012,48.881891,48.860675,48.887043,48.878746,48.843012,48.876334,48.86542,48.837897,48.88377,48.850155,48.835341,48.869138,48.866682,48.851839,49.885199,48.864029,48.865171,48.857829,48.841945,48.86274,48.858097,48.883463,48.883921,48.873662,48.866713,48.84133,48.869364,48.858975,48.879426,48.882464,48.8742,48.865113,48.865684,48.86253,48.86253,48.855183,48.838597,48.848383,48.824491,48.882268,48.848597,48.844692,48.869485,48.87409,48.888892,48.861863,48.877284,48.883146,48.87976,48.878055,48.884785,48.863509,48.85683,48.876602,48.849041,48.879911,48.844879,48.86799,48.867243,48.876334,48.856861,48.858339,48.857937,48.866046,48.87679,48.870451,48.864637,48.864934,48.846495,48.862578,48.848758,48.865739,48.874703,48.887285,48.86178,48.857132,48.854758,48.861811,48.8704,48.868328,48.860901,48.874972,48.864963,48.863675,48.879046,48.878539,48.881186,48.881883,48.86467,48.885891,48.861228,48.854185,48.882163,48.86702,48.87198,48.881143,48.88676,48.865587,48.8604,48.880515,48.843596,48.876988,48.864614,48.854494,48.854494,48.839695,48.858037,48.842908,48.875159,48.865449,48.869131,48.857116,48.860421,48.851593,48.855923,48.871569,48.858479,48.878667,48.883862,48.873116,48.847752,48.855806,48.859313,48.869443,48.868133,48.85715,48.858874,48.866149,48.881523,48.867877,48.853572,48.880866,48.868877,48.868877,48.881841,48.872652,48.858592,48.873312,48.873951,48.867533,48.857255,48.869263,48.846531,48.87787,48.875382,48.867207,48.885769,48.853281,48.851817,48.859439,48.857775,48.884831,48.827742,48.882674,48.885196,48.874621,48.846918,48.855248,48.846366,48.873465,48.861059,48.880124,48.881822,50.041361,48.873536,48.881808,48.873312,48.840764,48.850598,48.867094,48.850533,48.850533,48.84634,48.834848,48.854737,48.857751,48.863002,48.879608,48.875111,48.87406,48.85177,48.863976,48.863976,48.843361,48.865547,48.842528,48.870502,48.884583,48.875544,48.88006,48.887959,48.876472,48.879311,48.858417,48.857395,48.842499,48.877578,48.881443,48.84884,48.878256,48.834507,48.875141,48.885501,48.891239,48.878979,48.848512,48.843325,48.875702,48.878086,48.86649,48.883231,48.868058,48.851578,48.86305,48.84341,48.848604,48.853994,48.877893,48.879608,48.879656,48.840652,48.878746,48.867544,48.86542,48.837897,48.892512,48.866827,48.88377,48.850155,48.835341,48.864029,48.86274,48.858097,48.883921,48.883921,48.860365,48.873662,48.877081,48.849157,48.864926,48.837646,48.8742,48.865113,48.86253,48.889103,48.855183,48.85599,48.839239,48.844692,48.869485,48.861863,48.883146,48.87976,48.865144,48.866753,48.859852,48.859852,48.856861,48.87679,48.870451,48.846495,48.862578,48.892211,48.848758,48.865739,48.851474,48.868328,48.860901,48.874972,48.863675,48.879046,48.885891,48.861228,48.86702,48.865587,48.8604,48.839695,48.842908,48.875159,48.869131,48.855923,48.878667,48.847221,48.847752,48.869443,48.868133,48.85715,48.858874,48.853315,48.868877,48.858592,48.857255,48.853281,48.855248,48.847739,48.836328,47.768244,48.88006,48.858417,48.857395,48.876029,48.396746,48.865113,48.878055,48.859852,48.887285,48.863675,48.878667,48.868133,48.85715,48.872652,48.868133,48.870509,48.816409,49.080001,48.866295,48.539143,48.807058,50.348984,48.382188,48.776544,48.318321,50.462947,48.815635,48.890461,48.860628,48.887264,48.836231,48.890062,48.244032,48.92797,49.050698,48.55815,48.877761,48.895949,48.870829,48.804537,48.939269,48.826589,48.847726,48.787238,48.752531,48.9104,48.916948,48.834945,48.697809,48.408814,48.788449,48.987754,48.904206,48.877459,48.958702,48.539143,48.890461,48.887264,48.836231,48.92797,48.650624,48.558993,48.877761,48.970833,49.0255,48.826589,48.847726,48.595126,50.104441,-12.851398,44.204139,45.469396,49.595118,47.622304,48.585031,47.477945,44.122379,46.184604,48.964782,49.440127,47.482603,47.38735,45.351089,47.857628,48.770942,49.277733,49.013568,48.02963,45.781884,44.851775,49.663869,43.246671,49.090049,48.909547,48.256397,44.864677,48.828339,47.08277,46.53018,48.834453,43.704252,48.840144,49.189061,50.175313,48.816583,48.811572,48.827382,48.451155,48.890134,46.197521,49.614786,48.798024,49.627603,48.241737,44.507672,48.766325,48.800885,48.907483,47.986684,49.253803,48.921359,48.976022,48.890495,48.546039,48.626558,50.370351,44.794743,49.289677,49.050386,46.174666,43.924797,48.411144,48.858445,48.892177,44.562824,48.922392,48.816922,49.49232,48.655897,49.221245,50.247495,50.724045,48.988523,50.320632,43.945901,48.294335,44.89155,48.821838,48.824975,46.471494,48.904206,48.879663,44.683706,44.9553,50.649794,47.601504,46.171427,48.94029,46.796853,50.215438,49.507913,47.999348,48.782017,48.897467,49.229046,48.64489,46.925686,44.794743,47.745768,50.480065,49.115527,47.90309,45.664679,48.945808,43.645833,48.807233,41.910173,48.825919,47.291987,49.080001,48.866295,48.948748,48.532044,43.775624,49.101963,48.820288,49.005917,44.679977,45.423947,48.389838,47.855914,48.776544,49.311707,48.346614,48.812505,47.239049,48.705047,48.909865,47.151146,48.863145,48.895904,43.707077,48.830973,48.493593,48.892657,48.785192,44.323834,44.044789,48.928079,46.912191,49.049333,16.419706,48.795473,46.051395,49.151453,45.734348,48.828483,50.689662,44.800763,48.885948,49.146772,47.87638,48.912367,48.895949,47.612981,45.146567,43.978773,48.857527,48.560151,48.199536,1.352083,49.38088,47.252754,48.965636,48.883663,43.908979,43.124011,43.620137,47.425637,47.404782,47.67932,45.908914,46.801608,48.804537,49.263552,46.12142,48.339898,48.939269,48.829444,48.808788,48.796478,47.477945,48.745837,49.440127,48.922326,50.350842,48.195143,45.351089,48.909547,48.828339,46.53018,49.21531,48.697809,45.443138,48.028589,48.241737,48.546039,49.289677,48.411144,48.789245,48.99331,47.613529,47.975849,48.904206,48.879663,44.847257,44.794743,48.948748,48.532044,47.440213,46.565272,48.909865,48.895904,48.830973,48.928079,43.288557,48.647712,48.566375,48.885948,43.274391,44.869129,49.847362,48.964686,49.008063,48.829444,48.808788,48.266191,48.589557,47.999348,43.889563,46.565272,45.281667);
var lonClients_AF = new Array(2.330401,2.347178,2.319538,2.305257,2.339094,2.382414,2.301871,2.385654,2.302389,2.389622,2.338824,2.367843,2.327075,2.321737,2.333185,2.333185,2.362852,2.346645,2.345536,2.34981,2.3338,2.307002,2.33167,2.319453,2.329068,2.33593,2.264925,2.320095,2.325135,2.388137,2.300816,2.340613,2.333528,2.360809,2.297037,2.32123,2.370463,2.338506,2.368412,2.349775,2.316559,2.348455,2.385496,2.377464,2.305578,2.345676,2.316838,2.326134,2.348664,2.331508,2.300973,2.286885,2.321922,2.333404,2.377031,2.304228,2.317566,2.317076,2.295703,2.33917,2.360489,2.350652,2.326622,2.329365,2.329365,2.310899,2.337115,2.327951,2.336946,2.352736,2.33997,2.347118,2.333168,2.264738,2.314055,2.362475,2.324135,2.308342,2.335888,2.360451,2.341166,2.314509,2.323854,2.346895,2.320777,2.328017,2.329086,2.348127,2.344829,2.391459,2.344162,2.319577,2.339114,2.27926,2.298819,2.333999,2.283344,2.340163,2.356641,2.327688,2.308401,2.365607,2.296065,2.357679,2.265194,2.332212,2.353728,2.277798,2.293801,2.347523,2.345859,2.350651,2.348293,2.307002,2.326543,2.320167,2.305303,2.287972,2.350828,2.347016,2.284779,2.275371,2.37146,2.342042,2.379757,2.355602,2.360673,2.340805,2.365707,2.375721,2.273191,2.329829,2.270688,2.360897,2.323976,2.300964,2.365778,2.334703,2.398498,2.315059,2.268665,2.353281,2.357421,2.327108,2.30074,2.316314,2.283344,2.289296,2.318227400000069,2.315423,2.34267,2.326649,2.364596,2.325822,2.357629,2.334143,2.367367,2.287261,2.341759,2.307907,2.364911,2.330457,2.306922,2.305424,2.35514,2.367787,2.375933,2.300515,2.378077,2.321827,2.322685,2.3595,2.296375,2.338082,2.270688,2.354918,2.348197,2.302922,2.349531,2.334892,2.343127,2.309844,2.289577,2.297389,2.371818,2.371818,2.341593,2.321403,2.327157,2.312688,2.283788,2.364471,2.329402,2.294316,2.331795,2.320229,2.356543,2.324072,2.283765,2.305842,2.307152,2.367713,2.340365,2.361449,2.298245,2.301467,2.306439,2.339935,2.31414,2.324163,2.313281,2.344225,2.351698,2.284463,2.312967,2.310881,2.260497,2.341181,2.365842,2.315861,2.311263,2.352176,2.305758,2.305758,2.318644,2.29903,2.341555,2.262425,2.325946,2.325566,2.327309,2.372661,2.324351,2.269154,2.307635,2.338558,2.3725,2.331491,2.2958,2.307361,2.321055,2.337269,2.331491,2.297936,2.376698,2.336319,2.343377,2.317852,2.317968,2.331307,2.386754,2.34454,2.287478,2.375635,2.391552,2.279921,2.313679,2.359653,2.362293,2.360399,2.295772,2.351311,2.336797,2.398624,2.303259,2.326211,2.297599,2.304011,2.33539,2.33294,2.339368,2.348046,2.348046,2.271948,2.330571,2.326714,2.337605,2.297179,2.328205,2.389852,2.338943,2.344891,2.372782,2.338081,2.346096,2.344477,2.345949,2.319996,2.317553,2.399157,2.37821,2.299478,2.318415,2.395107,2.284114,2.336257,2.323965,2.337184,2.32507,2.344498,2.366233,2.331726,2.33325,2.340622,2.353287,2.377933,2.340609,2.363523,2.32543,2.332396,2.371743,2.311901,2.282478,2.374946,2.336785,2.382334,2.284237,2.277501,2.309383,2.335298,2.365933,2.358615,2.29171,2.297876,2.288712,2.313534,2.348099,2.309589,2.27918,2.308388,2.394558,2.373596,2.325663,2.343211,2.319897,2.356858,2.364683,2.345143,2.344806,2.364734,2.338443,2.321592,2.321592,2.302416,2.329123,2.268942,2.33536,2.340901,2.283774,2.349792,2.36149,2.331264,2.275559,2.326444,2.324377,2.370574,2.303829,2.361198,2.293294,2.335642,2.278726,2.340313,2.296722,2.381537,2.330986,2.357726,2.300611,2.347178,2.392571,2.319077,2.333185,2.333185,2.362852,2.323957,2.355494,2.307002,2.300816,2.340613,2.368412,2.349775,2.39771,2.347102,2.390942,2.310735,2.339296,2.333404,2.377031,2.344681,2.3175,2.319062,2.349666,2.360489,2.310899,2.288623,2.383704,2.308342,2.295433,2.346839,2.27926,2.306904,2.341664,1.977247,2.340516,2.347523,2.307002,2.326543,2.379757,2.273191,2.270688,2.270688,2.306202,2.353281,2.342109,2.316314,2.353423,2.318426,2.315423,2.350499,2.364596,2.272965,2.272965,2.287261,2.366646,2.265355,2.384021,2.367787,2.318646,2.3595,2.354918,2.341723,2.343127,2.309844,2.308506,2.347329,2.312688,2.364471,2.331795,2.320229,2.324072,2.283765,2.307152,2.339835,2.339935,2.31414,2.260497,2.315861,2.311263,2.305758,2.322951,2.343725,2.262425,2.354983,2.325946,2.364569,2.269154,2.307635,2.318426,2.338558,2.339514,2.337269,2.358067,2.376698,2.336319,2.344048,2.397575,2.343377,2.317852,2.317968,2.375635,2.359653,2.362293,2.295772,2.295772,2.341568,2.351311,2.287749,2.35251,2.278491,2.307997,2.33539,2.33294,2.348046,2.346276,2.271948,2.281275,2.394639,2.389852,2.338943,2.338081,2.344477,2.345949,2.28291,2.351137,2.309844,2.309844,2.32507,2.33325,2.340622,2.340609,2.363523,2.327343,2.32543,2.332396,2.336685,2.277501,2.309383,2.335298,2.358615,2.29171,2.309589,2.27918,2.373596,2.356858,2.364683,2.302416,2.268942,2.33536,2.283774,2.275559,2.370574,2.40488,2.293294,2.340313,2.296722,2.381537,2.330986,2.266784,2.333185,2.355494,2.368412,2.333404,2.308342,2.380763,2.374537,7.385109,2.3595,2.309844,2.308506,2.356543,-0.099312,2.33294,2.319996,2.309844,2.311901,2.358615,2.370574,2.296722,2.381537,2.323957,2.296722,2.281698,2.298646,2.499032,2.093493,2.658631,2.240221,3.156327,2.947327,1.807899,2.991906,1.763832,2.320446,2.203544,2.50932,2.266325,2.482302,2.453127,2.652459,2.044648,2.099848,3.298128,2.187376,2.090248,2.227021,2.134053,1.99666,2.543694,2.438582,2.391594,2.295423,2.381968,2.267271,2.241177,2.502696,2.701368,2.28541,2.229381,2.242895,2.705498,2.886658,2.658631,2.203544,2.266325,2.482302,2.044648,2.412189,2.680185,2.187376,2.255584,2.226086,2.543694,2.438582,2.742344,1.834007,45.097849,0.615827,4.454619,3.614241,7.238429,7.78157,-0.547379,4.841726,6.243121,2.257411,2.095881,6.839093,6.774871,-0.237646,-1.681048,5.166424,-0.704269,2.189352,3.022166,3.079969,0.486676,4.106125,5.401502,-0.192638,2.247615,1.986751,-0.551595,2.250597,2.395012,3.315733,0.914066,7.264064,2.51702,-0.336769,3.233516,2.515182,2.512748,2.40313,1.487566,2.155815,0.147514,3.218517,2.195966,-1.666297,7.299494,-0.33743,2.411144,2.267901,2.322917,1.242735,4.063902,2.227764,2.190819,2.252009,2.640688,-2.076908,3.078607,-0.708342,1.001957,3.962466,2.485396,2.133451,2.710489,2.491775,2.536039,6.084253,2.324066,2.349163,2.673004,2.387691,1.678228,3.924214,2.53775,2.161058,2.590141,4.778579,0.392121,3.006392,2.241102,2.467187,0.517942,2.242895,2.710454,2.846046,-0.210278,3.021876,2.024467,-1.138547,2.374384,4.402319,1.624314,0.17331,0.190971,2.274855,2.52897,2.882968,2.075609,-1.166508,-0.708342,-3.366877,1.600059,2.427057,2.240885,0.236946,2.143989,0.584988,2.286068,8.710669,1.34631,1.328705,2.499032,2.093493,2.889923,2.662612,7.506998,6.10512,2.240803,1.905156,0.893744,0.557642,2.961828,2.572089,1.807899,4.707755,2.978539,2.314977,-1.611809,6.182559,2.283186,-1.605729,2.518257,2.268828,7.292416,2.474659,3.502136,2.454377,2.53725,-0.211833,1.331334,2.041491,6.353696,2.10186,-61.532193,2.550602,3.924742,3.386523,3.198528,-1.043741,3.171042,4.765444,2.166855,1.329213,1.959217,2.356076,2.090248,1.237438,-0.642827,4.017027,2.310948,1.035662,3.275367,103.81983600000001,3.322158,-1.497229,6.578107,2.215554,-0.964154,5.930466,1.405135,0.694564,0.699259,2.620525,1.293244,1.356938,2.134053,3.001374,3.421797,3.063427,1.99666,2.558235,2.447998,2.403353,-0.547379,2.301279,2.095881,2.372452,2.590276,0.892219,-0.237646,2.247615,2.250597,3.315733,-0.515485,2.502696,0.18756,1.87304,7.299494,2.640688,1.001957,2.710489,2.289792,2.175832,7.23395,3.41257,2.242895,2.710454,-0.544641,-0.708342,2.889923,2.662612,0.672485,3.333065,2.283186,2.268828,2.474659,2.041491,5.383141,2.415988,2.678654,2.166855,6.460383,1.042428,3.28481,2.273086,2.211328,2.558235,2.447998,1.609449,2.731825,0.190971,-0.501576,3.333065,0.732914);
var coorClients_AF = new Array(latClients_AF, lonClients_AF);

// SCRIPT
function initialize_map(){
    // création des fonctions de création des marqueurs
    function create_coordinates(lat, long){
        var coordinates = new Array(lat, long);
        return coordinates;
    }
  
    function create_marker_clients(coorClients){
        for (var i = 0; i < coorClients[0].length; i++){
            var coorOneClient = create_coordinates(coorClients[0][i],coorClients[1][i]);
            L.marker(coorOneClient,{icon:blueIcon}).addTo(map);
        }
    }
    
    function create_marker_notary(coorNot, popupContent, areaNot){
        var markerNot = L.marker(coorNot, {icon:greenIcon}).addTo(map); // localisation de l'étude notariale
        markerNot.bindPopup(popupContent);
        L.circle(coorNot, {color: '#44708E', fillColor: '#AFC7ED', fillOpacity:0.4, radius:areaNot}).addTo(map); // aire d'influence du notaire
    }
    
    function create_popup_string(datNom, datEtude, datAdr, datDates, datUrl){
        var popupString = "<b>" + datNom + " (" + datEtude + ")</b><br>" + datAdr + "<br>" + datDates + "<br><a href=\"" + datUrl + "\" target=\"_blank\">Voir la notice</a>"; // intégration des métadonnées du notaire dans le pop-up 
        return popupString;
    }

    // carte centrée sur Paris
    var map = L.map("notarymap").setView([48.864716, 2.349014], 12);
    // aout du fond de carte OpemStreetMap
    var fondcarte = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>, Data by <a href="http://www.archives-nationales.culture.gouv.fr/">Archives Nationales</a>',
            maxZoom:19,
            id: "mapbox.streets",
            accessToken:'pk.eyJ1IjoiY2FpbGxpYm90IiwiYSI6ImNqcGQ2NXc0ZDFkYmIzcXNiZHFwZjhjNGIifQ.paCPst_H1pioOQzUccyVxQ'
        });
    map.addLayer(fondcarte);

    // création des pointeurs personnalisés
    var greenIcon = L.icon({iconUrl:'style/pointer_green.png', shadowUrl:'style/pointer_shadow.png',iconSize: [26,43], shadowSize: [47,19],iconAnchor: [13,42], shadowAnchor: [4,15],popupAnchor: [0,-38]});
    var blueIcon = L.icon({iconUrl:'style/pointer_blue.png',shadowUrl:'style/pointer_shadow.png',iconSize: [22,37],shadowSize: [39,16],iconAnchor: [11,36],shadowAnchor: [4,13],popupAnchor: [0,-32]});

    // création des points Million-Dailly sur la carte
    //var popupContent_MD = create_popup_string(datNom_MD, datEtude_MD, datAdr_MD, datDates_MD, datUrl_MD);
    //create_marker_notary(coorNot_MD, popupContent_MD, areaNot_MD);
    //create_marker_clients(coorClients_MD);

    // création des point Fourchy sur la carte
    var popupContent_AF = create_popup_string(datNom_AF, datEtude_AF, datAdr_AF, datDates_AF, datUrl_AF);
    create_marker_notary(coorNot_AF, popupContent_AF, areaNot_AF);
    create_marker_clients(coorClients_AF);
}


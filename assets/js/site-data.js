window.TRAVEL_DATA = {
  home: {
    hero: "IMG_6131",
    title: "把旅行整理成\n可以回看的地方",
    deck:
      "成都的慢、重庆的高低、云南的颜色、甘肃的辽阔。四段旅程按地区和主题整理成照片故事，随时可以回看。"
  },
  regions: [
    {
      id: "chengdu",
      name: "成都",
      eyebrow: "Chengdu and Around",
      title: "成都：慢下来的一段路",
      deck:
        "从清晨的一碗面，到都江堰的水声、乐山的江雾和峨眉山的山路，这一组照片记录的是成都和周边几天里不紧不慢的行走。",
      dates: "2023.10.12 - 2023.10.17",
      location: "成都、广汉、都江堰、乐山、峨眉山",
      hero: "IMG_5336",
      featurePhotos: ["IMG_5273", "IMG_5280", "IMG_5321", "IMG_5347", "IMG_5361"],
      themes: ["food", "streets", "culture", "nature", "timeline"]
    },
    {
      id: "chongqing",
      name: "重庆",
      eyebrow: "Chongqing",
      title: "重庆：灯火和山路之间",
      deck:
        "从洪崖洞的夜色、观音桥的热闹，到山城老街的石阶、渣滓洞的灰瓦和一桌火辣饭菜，这一组照片把重庆的高低起伏和烟火气放在一起。",
      dates: "重庆片段",
      location: "洪崖洞、观音桥、山城街巷、渣滓洞",
      hero: "IMG_5397",
      featurePhotos: ["IMG_5385", "IMG_5391", "IMG_5406", "IMG_5407", "IMG_5408"],
      themes: ["cq-night", "cq-streets", "cq-nature", "cq-food", "cq-timeline"]
    },
    {
      id: "yunnan",
      name: "云南",
      eyebrow: "Yunnan via Wuhan",
      title: "云南：从江城到云岭以南",
      deck:
        "这段旅程从武汉的江边和校园开始，转进丽江的木屋街巷、玉龙雪山的云雾、大理的湖风，最后抵达西双版纳的热带夜色。",
      dates: "2024.10.18 - 2024.10.24",
      location: "武汉、丽江、玉龙雪山、大理、西双版纳",
      hero: "IMG_6112",
      featurePhotos: ["IMG_6079", "IMG_6090", "IMG_6131", "IMG_6147", "IMG_6184"],
      themes: ["yn-route", "yn-lijiang", "yn-snow", "yn-dali", "yn-xishuangbanna"]
    },
    {
      id: "gansu",
      name: "甘肃",
      eyebrow: "Gansu",
      title: "甘肃：黄河、丹霞和丝路",
      deck:
        "从兰州黄河边出发，经过武威的寺塔与城楼，走过张掖丹霞和峡谷地貌，再到嘉峪关、敦煌与一桌桌西北风味，这组照片把甘肃的辽阔、厚重和热气放在一起。",
      dates: "甘肃片段",
      location: "兰州、武威、张掖、嘉峪关、敦煌",
      hero: "GS_N_DANXIA_WIDE",
      featurePhotos: ["GS_N_YELLOW_RIVER", "GS_C_ANCIENT_TOWER", "GS_N_DANXIA_COLORS", "GS_C_MOGAO_CLIFF", "GS_F_NOODLES"],
      themes: ["gs-nature", "gs-culture", "gs-food"]
    }
  ],
  themes: {
    food: {
      id: "food",
      name: "美食",
      kicker: "Food",
      title: "热气里的成都",
      deck:
        "很多记忆并不是从景点开始的，而是从一张小桌、一只碗和刚端上来的热气开始。",
      hero: "IMG_5292",
      intro:
        "成都的味道很直接，也很温柔。红油、汤面、夜里的小店和山下的家常菜，把旅程里那些走累的时刻都接住了。",
      photoIds: ["IMG_5273", "IMG_5292", "IMG_5329", "IMG_5369", "IMG_5371", "IMG_5381", "IMG_5383"]
    },
    streets: {
      id: "streets",
      name: "街巷生活",
      kicker: "Streets",
      title: "街巷里的慢时间",
      deck:
        "菜市场、茶馆、公园小路和夜晚的招牌，是这座城市最容易亲近的部分。",
      hero: "IMG_5280",
      intro:
        "在成都，很多好看的瞬间并不急着发生。它们藏在菜摊之间、木桌旁边、老墙的苔痕里，也藏在夜色刚亮起来的时候。",
      photoIds: ["IMG_5276", "IMG_5278", "IMG_5280", "IMG_5285", "IMG_5286", "IMG_5293", "IMG_5295", "IMG_5297", "IMG_5298", "IMG_5301", "IMG_5368"]
    },
    culture: {
      id: "culture",
      name: "古蜀与人文",
      kicker: "Culture",
      title: "从古蜀到水城",
      deck:
        "博物馆里的金面具、古城门下的人流、山门前的石阶，让时间在照片里变得更安静。",
      hero: "IMG_5321",
      intro:
        "这几天里，历史不是遥远的名词。它有金色的面具、青铜的轮廓，也有被游客反复走过的石阶和门楼。",
      photoIds: ["IMG_5289", "IMG_5309", "IMG_5318", "IMG_5321", "IMG_5323", "IMG_5331", "IMG_5347", "IMG_5351", "IMG_5354"]
    },
    nature: {
      id: "nature",
      name: "山水与周边",
      kicker: "Nature",
      title: "水声、山路和江雾",
      deck:
        "离开市区以后，旅程被水声和山色接过去。都江堰、乐山、峨眉山，各有自己的呼吸。",
      hero: "IMG_5361",
      intro:
        "城市之外，风景慢慢变宽。江水绕过山壁，雾气停在树梢，路边的阳光把一段普通山路照得很轻。",
      photoIds: ["IMG_5333", "IMG_5336", "IMG_5346", "IMG_5349", "IMG_5361", "IMG_5365", "IMG_5375", "IMG_5379"]
    },
    timeline: {
      id: "timeline",
      name: "时间线",
      kicker: "Timeline",
      title: "按时间回看这趟旅程",
      deck:
        "从抵达成都，到走向周边山水，照片把这几天轻轻排成了一条线。",
      hero: "IMG_5270",
      intro:
        "时间线不是为了把行程说得很满，而是让每一天的气息都有自己的位置。",
      photoIds: [
        "IMG_5270",
        "IMG_5271",
        "IMG_5273",
        "IMG_5276",
        "IMG_5280",
        "IMG_5292",
        "IMG_5309",
        "IMG_5321",
        "IMG_5333",
        "IMG_5347",
        "IMG_5361",
        "IMG_5375",
        "IMG_5383"
      ]
    },
    "cq-night": {
      id: "cq-night",
      path: "night",
      name: "夜色",
      kicker: "Night",
      title: "洪崖洞亮起来以后",
      deck:
        "金色屋檐、江边车流和背后的高楼一起亮起，重庆的夜晚有一种很满的层次。",
      hero: "IMG_5397",
      intro:
        "重庆的夜景不是单独的一盏灯，而是一整座城市同时发光。近处是洪崖洞的屋檐，远处是楼宇和雾气，江水在下面把灯影慢慢带走。",
      photoIds: ["IMG_5397", "IMG_5398", "IMG_5399"]
    },
    "cq-streets": {
      id: "cq-streets",
      path: "streets",
      name: "街巷",
      kicker: "Streets",
      title: "高低之间的山城",
      deck:
        "街口招牌、老式门面、临江栏杆和拐角处的小景，把重庆的坡度变成可以走进去的日常。",
      hero: "IMG_5390",
      intro:
        "在重庆，方向感常常被楼梯、桥和街巷重新安排。抬头是楼，转身是江，走几步就会遇见另一层热闹。",
      photoIds: ["IMG_5390", "IMG_5389", "IMG_5391", "IMG_5400"]
    },
    "cq-nature": {
      id: "cq-nature",
      path: "nature",
      name: "山水旧址",
      kicker: "Green",
      title: "树影、灰瓦和旧址",
      deck:
        "车窗外的校门、山坡上的绿意和渣滓洞的灰瓦，让这组重庆照片有了安静而沉重的一面。",
      hero: "IMG_5406",
      intro:
        "热闹之外，重庆也有很慢的绿色。雨后的路面、山坡上的叶子、渣滓洞的灰瓦之间，让城市的声音轻轻压低。",
      photoIds: ["IMG_5403", "IMG_5404", "IMG_5405", "IMG_5406"]
    },
    "cq-food": {
      id: "cq-food",
      path: "food",
      name: "餐桌",
      kicker: "Food",
      title: "红油、炭火和晚饭",
      deck:
        "重庆的味道很直接，红油和炭火把一顿饭推到眼前，热得明亮，也热得踏实。",
      hero: "IMG_5407",
      intro:
        "这一桌不需要太多铺垫。辣椒、蒜瓣、江湖菜和烤鱼一起上来，旅途里的疲惫就被一口热味收走了。",
      photoIds: ["IMG_5385", "IMG_5407", "IMG_5408"]
    },
    "cq-timeline": {
      id: "cq-timeline",
      path: "timeline",
      name: "时间线",
      kicker: "Timeline",
      title: "按照片顺序回看重庆",
      deck:
        "从夜市入口到洪崖洞夜景，再到白天的绿意和最后一桌热辣，照片把重庆排成了一段短短的路。",
      hero: "IMG_5385",
      intro:
        "这不是完整行程表，更像一次回放：先被夜色吸引，再走进山城的坡与桥，最后用热气腾腾的一餐收尾。",
      photoIds: [
        "IMG_5385",
        "IMG_5389",
        "IMG_5390",
        "IMG_5391",
        "IMG_5397",
        "IMG_5398",
        "IMG_5399",
        "IMG_5400",
        "IMG_5403",
        "IMG_5404",
        "IMG_5405",
        "IMG_5406",
        "IMG_5407",
        "IMG_5408"
      ]
    },
    "yn-route": {
      id: "yn-route",
      path: "route",
      name: "经停武汉",
      kicker: "Wuhan",
      title: "出发前，先经过江城",
      deck:
        "江边的天光、大学门口的\n树影和一顿热饭，把正式\n进入云南之前的那一天也留了下来。",
      hero: "IMG_6079",
      intro:
        "旅程有时候不是从目的地开始，而是从途中那个刚好停下来的城市开始。武汉的江面很宽，校园路口很亮，饭桌上的热气让转场也有了自己的分量。",
      photoIds: ["IMG_6079", "IMG_6081", "IMG_6082", "IMG_6084", "IMG_6086", "IMG_6087"]
    },
    "yn-lijiang": {
      id: "yn-lijiang",
      path: "lijiang",
      name: "丽江",
      kicker: "Lijiang",
      title: "木屋、花和雪山的第一眼",
      deck:
        "从古城街巷走到远处能看见雪山的地方，丽江把阳光、木色和生活气慢慢铺开。",
      hero: "IMG_6090",
      intro:
        "丽江的好看不只在远处的山，也在脚边的花盆、木楼之间的窄路和餐桌上的香味里。走得慢一点，才会发现每个转角都在改变光线。",
      photoIds: ["IMG_6090", "IMG_6092", "IMG_6093", "IMG_6094", "IMG_6096", "IMG_6097", "IMG_6100", "IMG_6102", "IMG_6110"]
    },
    "yn-snow": {
      id: "yn-snow",
      path: "snow-mountain",
      name: "雪山",
      kicker: "Snow Mountain",
      title: "云雾擦过玉龙雪山",
      deck:
        "山峰、栈道、蓝月谷和层层水声，让这一天有了很清澈的冷意。",
      hero: "IMG_6112",
      intro:
        "雪山近在眼前的时候，风景会忽然变得很直接。云从山腰掠过去，水把颜色亮出来，人站在里面，像被一整天的蓝和白轻轻包住。",
      photoIds: ["IMG_6112", "IMG_6113", "IMG_6116", "IMG_6125", "IMG_6128", "IMG_6129", "IMG_6130", "IMG_6131"]
    },
    "yn-dali": {
      id: "yn-dali",
      path: "dali",
      name: "大理",
      kicker: "Dali",
      title: "城门、白塔和洱海边",
      deck:
        "大理的时间更松一点，古城门、三塔、湖边木栈道和云下的饭桌都慢慢展开。",
      hero: "IMG_6147",
      intro:
        "到了大理，天色和水面一起放宽。城门有热闹的入口，白塔在树影里抬高，洱海边的风把前几天的紧凑行程吹得柔和下来。",
      photoIds: ["IMG_6132", "IMG_6133", "IMG_6138", "IMG_6143", "IMG_6144", "IMG_6146", "IMG_6147", "IMG_6150", "IMG_6154"]
    },
    "yn-xishuangbanna": {
      id: "yn-xishuangbanna",
      path: "xishuangbanna",
      name: "西双版纳",
      kicker: "Xishuangbanna",
      title: "热带夜色和植物的绿",
      deck:
        "夜市灯光、成袋水果、植物园的浓绿和阳光里的高树，把旅程最后一段带到更湿润、更明亮的地方。",
      hero: "IMG_6184",
      intro:
        "西双版纳的记忆很有颜色。夜里是金色和粉色的灯，白天是从脚边长到头顶的绿，还有一路买回来的水果，把这段旅程收得热闹又清甜。",
      photoIds: [
        "IMG_6159",
        "IMG_6161",
        "IMG_6162",
        "IMG_6163",
        "IMG_6165",
        "IMG_6168",
        "IMG_6167",
        "IMG_6170",
        "IMG_6171",
        "IMG_6172",
        "IMG_6173",
        "IMG_6174",
        "IMG_6175",
        "IMG_6177",
        "IMG_6179",
        "IMG_6180",
        "IMG_6184",
        "IMG_6186",
        "IMG_6187",
        "IMG_6190",
        "IMG_6192",
        "IMG_6198",
        "IMG_6200",
        "IMG_6201"
      ]
    },
    "gs-nature": {
      id: "gs-nature",
      path: "nature",
      name: "自然风光",
      kicker: "Nature",
      title: "黄河、丹霞与沙山",
      deck:
        "黄河从城市边穿过，\n丹霞把山体染成层层颜色，\n峡谷和沙山，则把甘肃的空间感继续推远。",
      hero: "GS_N_DANXIA_WIDE",
      intro:
        "甘肃的自然风光有一种很直接的尺度。兰州黄河边是湿润的灰黄，张掖丹霞是明亮的红与金，峡谷里只有窄窄的天光，到了敦煌，沙山又把视线放到更远。",
      photoIds: [
        "GS_N_YELLOW_RIVER",
        "GS_N_RIVER_CANOPY",
        "GS_N_RIVER_SELFIE",
        "GS_N_ZHONGSHAN_BRIDGE",
        "GS_N_DANXIA_PORTRAIT",
        "GS_N_DANXIA_WIDE",
        "GS_N_DANXIA_TOGETHER",
        "GS_N_DANXIA_VALLEY",
        "GS_N_DANXIA_LOOKOUT",
        "GS_N_DANXIA_COLORS",
        "GS_N_DANXIA_CANYON",
        "GS_N_DANXIA_SHADOW",
        "GS_N_PINGSHANHU_PORTRAIT",
        "GS_N_PINGSHANHU_SIGN",
        "GS_N_CANYON_WALK",
        "GS_N_CANYON_BOARDWALK",
        "GS_N_CANYON_STONE_PILE",
        "GS_N_CANYON_SCALE",
        "GS_N_CANYON_SELFIE",
        "GS_N_CANYON_WALL",
        "GS_N_CANYON_SKY",
        "GS_N_CANYON_TALL_WALL",
        "GS_N_GORGE_STAIR",
        "GS_N_CANYON_DEEP_VIEW",
        "GS_N_GORGE_LOOKOUT",
        "GS_N_DESERT_PERSON",
        "GS_N_MINGSHA_MAN",
        "GS_N_CRESCENT_LAKE",
        "GS_N_DUNES_GROVE",
        "GS_N_CRESCENT_LAKE_GATE"
      ]
    },
    "gs-culture": {
      id: "gs-culture",
      path: "culture",
      name: "文化",
      kicker: "Culture",
      title: "丝路上的城关与壁画",
      deck:
        "白塔寺、鸠摩罗什寺、武威城楼、嘉峪关城墙和敦煌壁画，让这条路不只是风景，更像一段被时间反复擦亮的长廊。",
      hero: "GS_C_MOGAO_CLIFF",
      intro:
        "甘肃的文化感不是单一景点给出来的，而是一路累积起来的：武威白塔寺、鸠摩罗什寺和凉州城楼，张掖大佛寺，嘉峪关的城墙，敦煌石窟与壁画，把旅程从城市带进更长的历史。",
      photoIds: [
        "GS_C_BUDDHA_TERRACE",
        "GS_C_WHITE_PAGODA",
        "GS_C_TEMPLE_GATE",
        "GS_C_ANCIENT_TOWER",
        "GS_C_CITY_GATE",
        "GS_C_WUWEI_GATE_SELFIE",
        "GS_C_WUWEI_HOTEL_LOBBY",
        "GS_C_OLD_HOUSE",
        "GS_C_WEATHERED_DOOR",
        "GS_C_SLEEPING_BUDDHA",
        "GS_C_MURAL_HALL",
        "GS_C_PAINTED_STATUE",
        "GS_C_DAFOSI_GARDEN",
        "GS_C_DAFOSI_CAT",
        "GS_C_XIJIN_TILE",
        "GS_C_JIAYUGUAN_GATE",
        "GS_C_HERO_PASS",
        "GS_C_RAMMED_WALL",
        "GS_C_JIAYUGUAN_WALL_TOWER",
        "GS_C_FORT_TOWER",
        "GS_C_MOGAO_EARTHEN_WALL",
        "GS_C_MOGAO_CLIFF",
        "GS_C_MOGAO_RED_EAVES",
        "GS_C_MOGAO_PLAZA",
        "GS_C_MOGAO_EAVES_SIDE",
        "GS_C_MOGAO_DOOR_PAINTING",
        "GS_C_MOGAO_DETAIL",
        "GS_C_MOGAO_CEILING",
        "GS_C_MOGAO_MURAL_FIGURES",
        "GS_C_MOGAO_BUDDHA_WALL",
        "GS_C_MOGAO_HORSE_DETAIL",
        "GS_C_MOGAO_RIDER_DETAIL",
        "GS_C_MOGAO_CALLIGRAPHY",
        "GS_C_MOGAO_STORY_PANEL",
        "GS_C_MOGAO_RED_HORSE",
        "GS_C_MOGAO_GATE",
        "GS_C_MOGAO_LINE_DETAIL",
        "GS_C_MOGAO_CLAY_STATUE",
        "GS_C_THOUSAND_BUDDHAS"
      ]
    },
    "gs-food": {
      id: "gs-food",
      path: "food",
      name: "美食",
      kicker: "Food",
      title: "面、肉、茶和甜醅子",
      deck:
        "牛肉面、面皮子、灰豆子、奶皮子、杏皮茶和烤串，\n把西北旅程里最踏实的一面端到了桌上。",
      hero: "GS_F_NOODLES",
      intro:
        "甘肃的吃法很有力量，也很会安慰赶路的人。清汤牛肉面是开场，武威的小吃把行程接住，烤土豆和羊肉把夜市点热，甜醅子、灰豆子和杏皮茶又把粗粝的风吹得柔软一点。",
      photoIds: [
        "GS_F_NOODLES",
        "GS_F_LANZHOU_NIGHT_STREET",
        "GS_F_LANZHOU_COFFEE",
        "GS_F_MIANPI",
        "GS_F_MIANPI_STALL",
        "GS_F_GREY_BEANS",
        "GS_F_POTATO",
        "GS_F_POTATO_CHIPS",
        "GS_F_NAIPI",
        "GS_F_HAND_NAIPI",
        "GS_F_TIANPEIZI",
        "GS_F_LANZHOU_FAREWELL_NAIPI",
        "GS_F_APRICOT_TEA",
        "GS_F_CHAOBOLA",
        "GS_F_LAMB_PANCAKE",
        "GS_F_LATIAOZI",
        "GS_F_LAMB_RICE",
        "GS_F_SHACONG",
        "GS_F_BOILED_LAMB",
        "GS_F_WUWEI_HAND_LAMB",
        "GS_F_SKEWERS",
        "GS_F_BREAD_TEA",
        "GS_F_MARKET",
        "GS_F_ZHANGYE_FIGS",
        "GS_F_FOOD_STREET",
        "GS_F_DAPANJI"
      ]
    }
  },
  photos: {
    IMG_5270: {
      region: "chengdu",
      file: "IMG_5270.jpeg",
      title: "抵达之前",
      location: "飞往成都的路上",
      date: "2023.10.12 下午",
      text: "窗外是一片很亮的云，旅程还没有真正开始，心里已经先空出了一小块地方。"
    },
    IMG_5271: {
      region: "chengdu",
      file: "IMG_5271.jpeg",
      title: "清晨同路",
      location: "成都地铁",
      date: "2023.10.13 清晨",
      text: "城市刚醒来的时候，人也还带着一点困意。两个人坐在同一段车厢里，像把这一天慢慢接住。"
    },
    IMG_5273: {
      region: "chengdu",
      file: "IMG_5273.jpeg",
      title: "第一碗热汤",
      location: "成都市区",
      date: "2023.10.13 早晨",
      text: "一碗面端上来，热气先把早晨叫醒。味道不必隆重，只要踏实，就已经很好。"
    },
    IMG_5276: {
      region: "chengdu",
      file: "IMG_5276.jpeg",
      title: "菜市场的颜色",
      location: "成都市区",
      date: "2023.10.13 早晨",
      text: "摊位挨着摊位，蔬菜和水果把一天铺得很鲜活。这里不是景点，却很像城市真正的开场。"
    },
    IMG_5278: {
      region: "chengdu",
      file: "IMG_5278.jpeg",
      title: "树影小路",
      location: "成都公园",
      date: "2023.10.13 上午",
      text: "树荫把路压得很低，脚步也自然慢下来。成都的舒服，有时候就是这样安静的一段路。"
    },
    IMG_5280: {
      region: "chengdu",
      file: "IMG_5280.jpeg",
      title: "茶馆的上午",
      location: "成都茶馆",
      date: "2023.10.13 上午",
      text: "竹椅、木桌、半开的天光，时间在这里没有被催促。坐一会儿，就像真正到了成都。"
    },
    IMG_5285: {
      region: "chengdu",
      file: "IMG_5285.jpeg",
      title: "老墙与花",
      location: "成都老街",
      date: "2023.10.13 上午",
      text: "灰墙很旧，花却开得很认真。新旧之间没有冲突，只是一起过着日子。"
    },
    IMG_5286: {
      region: "chengdu",
      file: "IMG_5286.jpeg",
      title: "苔痕",
      location: "成都老街",
      date: "2023.10.13 上午",
      text: "一角石壁、一点青苔，细小的绿意让老建筑有了呼吸。"
    },
    IMG_5289: {
      region: "chengdu",
      file: "IMG_5289.jpeg",
      title: "红灯笼下",
      location: "成都武侯祠一带",
      date: "2023.10.13 上午",
      text: "门前人来人往，红灯笼把入口照得热闹。历史在这里没有沉睡，它和游客一起站在阳光里。"
    },
    IMG_5292: {
      region: "chengdu",
      file: "IMG_5292.jpeg",
      title: "一锅热辣",
      location: "成都市区",
      date: "2023.10.13 中午",
      text: "锅底翻着小小的浪，辣味和香气一起升起来。走了一上午，终于可以坐下来，好好吃一顿。"
    },
    IMG_5293: {
      region: "chengdu",
      file: "IMG_5293.jpeg",
      title: "竹影",
      location: "成都杜甫草堂一带",
      date: "2023.10.13 下午",
      text: "竹子把光切得很细，风吹过的时候，整片绿色都像在轻声说话。"
    },
    IMG_5295: {
      region: "chengdu",
      file: "IMG_5295.jpeg",
      title: "石上文字",
      location: "成都杜甫草堂一带",
      date: "2023.10.13 下午",
      text: "文字刻在石头上，安静得像一句留下来的叮嘱。走近看，时间也慢了下来。"
    },
    IMG_5297: {
      region: "chengdu",
      file: "IMG_5297.jpeg",
      title: "夜色刚亮",
      location: "成都街头",
      date: "2023.10.13 夜晚",
      text: "招牌亮起来以后，街道有了另一种表情。白天的城市退后一点，夜晚的成都开始说话。"
    },
    IMG_5298: {
      region: "chengdu",
      file: "IMG_5298.jpeg",
      title: "路边小摊",
      location: "成都街头",
      date: "2023.10.13 夜晚",
      text: "小摊前围着人，灯光落在纸牌和笑声上。旅行里最轻的快乐，常常就是停下来买一点吃的。"
    },
    IMG_5301: {
      region: "chengdu",
      file: "IMG_5301.jpeg",
      title: "冰粉与夜风",
      location: "成都街头",
      date: "2023.10.13 夜晚",
      text: "夜风里看见冰粉的招牌，忽然觉得这座城市很会照顾人。辣过之后，还有一口清甜。"
    },
    IMG_5309: {
      region: "chengdu",
      file: "IMG_5309.jpeg",
      title: "面具的凝视",
      location: "三星堆博物馆",
      date: "2023.10.14 上午",
      text: "灯光落在面具上，表情像从很远的时间里看过来。那一刻，喧闹都被隔在展柜外面。"
    },
    IMG_5318: {
      region: "chengdu",
      file: "IMG_5318.jpeg",
      title: "展厅里的光",
      location: "三星堆博物馆",
      date: "2023.10.14 上午",
      text: "展厅很暗，文物被光单独托起。人们放轻声音，像怕惊动这些古老的形状。"
    },
    IMG_5321: {
      region: "chengdu",
      file: "IMG_5321.jpeg",
      title: "金色面具",
      location: "三星堆博物馆",
      date: "2023.10.14 上午",
      text: "金色并不张扬，反而有一种沉静的力量。隔着玻璃看它，像看见一个遥远文明留下的呼吸。"
    },
    IMG_5323: {
      region: "chengdu",
      file: "IMG_5323.jpeg",
      title: "青铜的轮廓",
      location: "三星堆博物馆",
      date: "2023.10.14 上午",
      text: "青铜器的线条很奇异，也很坚定。它不像答案，更像一个还在发光的问题。"
    },
    IMG_5329: {
      region: "chengdu",
      file: "IMG_5329.jpeg",
      title: "手里的小吃",
      location: "成都街头",
      date: "2023.10.15 清晨",
      text: "用纸袋包着的食物最有旅途感。边走边吃，连赶路也变得亲切。"
    },
    IMG_5331: {
      region: "chengdu",
      file: "IMG_5331.jpeg",
      title: "山门石阶",
      location: "青城山一带",
      date: "2023.10.15 上午",
      text: "石阶一级一级向上，山门被树影半遮着。还没有进入深处，心已经先安静了。"
    },
    IMG_5333: {
      region: "chengdu",
      file: "IMG_5333.jpeg",
      title: "都江堰的水声",
      location: "都江堰",
      date: "2023.10.15 上午",
      text: "水从山边推过来，颜色很浅，声音却很有力量。站在岸边，会突然理解这里为什么值得被记住。"
    },
    IMG_5336: {
      region: "chengdu",
      file: "IMG_5336.jpeg",
      title: "江水绕山",
      location: "都江堰",
      date: "2023.10.15 上午",
      text: "山壁、江水和远处的人群都在同一张照片里。风景很大，人也因此变得轻。"
    },
    IMG_5346: {
      region: "chengdu",
      file: "IMG_5346.jpeg",
      title: "水边停留",
      location: "都江堰",
      date: "2023.10.15 上午",
      text: "在水边站一会儿，不急着拍完，也不急着离开。风从江面过来，把人吹得很清醒。"
    },
    IMG_5347: {
      region: "chengdu",
      file: "IMG_5347.jpeg",
      title: "古城门前",
      location: "都江堰",
      date: "2023.10.15 中午",
      text: "门楼的线条很繁复，人群从下面慢慢经过。热闹和古意在这里并肩站着。"
    },
    IMG_5349: {
      region: "chengdu",
      file: "IMG_5349.jpeg",
      title: "水边合影",
      location: "都江堰",
      date: "2023.10.15 中午",
      text: "背景里是水和树，镜头前是笑起来的人。比起风景，同行的人更像旅程的中心。"
    },
    IMG_5351: {
      region: "chengdu",
      file: "IMG_5351.jpeg",
      title: "林间牌坊",
      location: "青城山",
      date: "2023.10.15 下午",
      text: "木牌坊立在林子里，阳光从枝叶间漏下来。山路从这里开始变得有仪式感。"
    },
    IMG_5354: {
      region: "chengdu",
      file: "IMG_5354.jpeg",
      title: "石龙",
      location: "青城山",
      date: "2023.10.15 下午",
      text: "石头被摸得有了温度，纹路里积着湿润的青绿。它守在路边，像陪人走过很多年。"
    },
    IMG_5361: {
      region: "chengdu",
      file: "IMG_5361.jpeg",
      title: "江边大佛",
      location: "乐山大佛",
      date: "2023.10.16 下午",
      objectPosition: "center 30%",
      text: "红色山壁贴着江水，大佛在雾气里显得很安稳。人群在脚下移动，山却一直沉默。"
    },
    IMG_5365: {
      region: "chengdu",
      file: "IMG_5365.jpeg",
      title: "江对岸的塔",
      location: "乐山",
      date: "2023.10.16 下午",
      text: "塔藏在一片绿色里，隔着江看过去，像一个安静的句号。"
    },
    IMG_5368: {
      region: "chengdu",
      file: "IMG_5368.jpeg",
      title: "花边街口",
      location: "乐山街头",
      date: "2023.10.16 傍晚",
      text: "街口摆着花，旁边就是来来往往的人。旅途中这样的角落很小，却让城市有了温度。"
    },
    IMG_5369: {
      region: "chengdu",
      file: "IMG_5369.jpeg",
      title: "晚饭之后",
      location: "乐山",
      date: "2023.10.16 夜晚",
      text: "桌上还剩一点汤和油光，像一顿饭刚刚结束时的余温。吃饱以后，夜路也变得柔软。"
    },
    IMG_5371: {
      region: "chengdu",
      file: "IMG_5371.jpeg",
      title: "夜里的小店",
      location: "乐山",
      date: "2023.10.16 夜晚",
      text: "红色招牌亮在街边，桌椅还没收。地方小，却有一种让人放心坐下来的热闹。"
    },
    IMG_5375: {
      region: "chengdu",
      file: "IMG_5375.jpeg",
      title: "山里的相遇",
      location: "峨眉山",
      date: "2023.10.17 上午",
      text: "雾气压在树枝上，山里的生命忽然出现在眼前。那一瞬间，路途多了一点野性的安静。"
    },
    IMG_5379: {
      region: "chengdu",
      file: "IMG_5379.jpeg",
      title: "山路有光",
      location: "峨眉山",
      date: "2023.10.17 中午",
      text: "阳光落在山路尽头，雾还没有完全散开。走在这里，会觉得疲惫也有一点清亮。"
    },
    IMG_5381: {
      region: "chengdu",
      file: "IMG_5381.jpeg",
      title: "一盘青椒",
      location: "峨眉山下",
      date: "2023.10.17 下午",
      text: "绿色的菜端上桌，带着锅气和一点辛香。山路之后，家常味道格外让人踏实。"
    },
    IMG_5383: {
      region: "chengdu",
      file: "IMG_5383.jpeg",
      title: "最后一碗",
      location: "峨眉山下",
      date: "2023.10.17 下午",
      text: "最后一碗粉热热地放在面前，像给这几天收一个平实的尾。旅程结束得不声张，却很满足。"
    },
    IMG_5385: {
      region: "chongqing",
      file: "IMG_5385.jpeg",
      title: "观音桥的入口",
      location: "重庆观音桥",
      date: "夜晚",
      text: "招牌一层叠一层，食物的香气和人流一起涌过来。重庆的夜晚，是从这样的热闹里开始的。"
    },
    IMG_5389: {
      region: "chongqing",
      file: "IMG_5389.jpeg",
      title: "街边小景",
      location: "重庆街巷",
      date: "夜晚",
      text: "木墙、红灯笼和一个熟悉的身影站在路边，像把城市的热闹稍微停顿了一下。"
    },
    IMG_5390: {
      region: "chongqing",
      file: "IMG_5390.jpeg",
      title: "山城门楼",
      location: "洪崖洞一带",
      date: "白天",
      text: "楼层向上叠起，灯笼和招牌把入口装得很满。还没走进去，山城的坡度已经扑面而来。"
    },
    IMG_5391: {
      region: "chongqing",
      file: "IMG_5391.jpeg",
      title: "桥下看江",
      location: "重庆江边",
      date: "白天",
      text: "红色大桥从身后穿过，江面在雾气里变得很浅。站在栏杆边，城市的高度忽然有了参照。"
    },
    IMG_5397: {
      region: "chongqing",
      file: "IMG_5397.jpeg",
      title: "洪崖洞夜色",
      location: "洪崖洞",
      date: "夜晚",
      text: "金色灯带铺满屋檐，高楼在背后沉下来。重庆的夜景很会制造层次，热闹里也有一点雾。"
    },
    IMG_5398: {
      region: "chongqing",
      file: "IMG_5398.jpeg",
      title: "灯火的屋顶",
      location: "洪崖洞",
      date: "夜晚",
      text: "从高处看下去，屋顶像一片被点亮的山坡。每一层都有声音，每一层都有光。"
    },
    IMG_5399: {
      region: "chongqing",
      file: "IMG_5399.jpeg",
      title: "楼群与金光",
      location: "洪崖洞",
      date: "夜晚",
      text: "传统屋檐和现代高楼挤在同一个画面里，谁也没有退让。重庆的好看，正在这种拥挤里。"
    },
    IMG_5400: {
      region: "chongqing",
      file: "IMG_5400.jpeg",
      title: "一杯紫色的甜",
      location: "重庆街头",
      date: "夜晚",
      text: "走累之后停在饮品店前，明亮的紫色把夜路照得轻一点。旅行里这样的补给很小，却很必要。"
    },
    IMG_5403: {
      region: "chongqing",
      file: "IMG_5403.jpeg",
      title: "山坡上的绿",
      location: "重庆",
      date: "白天",
      text: "大片叶子从墙边伸出来，远处隐约是山。热闹之外，重庆也有很湿润、很安静的一面。"
    },
    IMG_5404: {
      region: "chongqing",
      file: "IMG_5404.jpeg",
      title: "车窗外的校门",
      location: "西南政法大学",
      date: "白天",
      text: "雨后的路面还带着光，校门从车窗边慢慢经过。不是专门停留，却也被这片树影记住了。"
    },
    IMG_5405: {
      region: "chongqing",
      file: "IMG_5405.jpeg",
      title: "另一所大学",
      location: "四川外国语大学",
      date: "白天",
      text: "车窗里的城市一段一段往后退，学校的名字和街边的树一起闪过，像旅程中的一个注脚。"
    },
    IMG_5406: {
      region: "chongqing",
      file: "IMG_5406.jpeg",
      title: "渣滓洞的灰瓦",
      location: "渣滓洞",
      date: "白天",
      text: "灰瓦屋顶层层压在绿色之间，山坡把旧址轻轻围住。这里的安静不是轻松的，而是会让人放慢脚步。"
    },
    IMG_5407: {
      region: "chongqing",
      file: "IMG_5407.jpeg",
      title: "红油一大盘",
      location: "重庆餐桌",
      date: "晚饭",
      text: "辣椒、蒜瓣和红油把盘子填得很满。看一眼就知道，这顿饭不会温吞。"
    },
    IMG_5408: {
      region: "chongqing",
      file: "IMG_5408.jpeg",
      title: "炭火烤鱼",
      location: "重庆餐桌",
      date: "晚饭",
      text: "鱼还在热油里冒着香气，配菜贴着锅边吸足味道。最后的满足感，往往就停在这一桌。"
    },
    IMG_6079: {
      region: "yunnan",
      file: "IMG_6079.jpeg",
      title: "江边天光",
      location: "武汉江边",
      date: "2024.10.18 上午",
      text: "江面把城市拉得很宽，远处楼群在光里排开。还没到云南，旅程已经先有了开阔的开场。"
    },
    IMG_6081: {
      region: "yunnan",
      file: "IMG_6081.jpeg",
      title: "同路的人",
      location: "武汉",
      date: "2024.10.18 上午",
      text: "赶路的时候拍下一张合影，表情比行程表更能说明那天的心情。目的地还在前面，人已经在路上。"
    },
    IMG_6082: {
      region: "yunnan",
      file: "IMG_6082.jpeg",
      title: "黄鹤楼石阶",
      location: "黄鹤楼",
      date: "2024.10.18 上午",
      text: "长长的台阶把人群带向楼前，红色花带从中间铺开。短暂停留，也被黄鹤楼的热闹和高度记住。"
    },
    IMG_6084: {
      region: "yunnan",
      file: "IMG_6084.jpeg",
      title: "校门前",
      location: "武汉大学",
      date: "2024.10.18 上午",
      text: "红字和绿树在路口站得很稳，车流从旁边经过。城市里的一个节点，被行程顺手收进来。"
    },
    IMG_6086: {
      region: "yunnan",
      file: "IMG_6086.jpeg",
      title: "一锅藕汤",
      location: "武汉餐桌",
      date: "2024.10.18 中午",
      text: "藕块从汤里捞起来，热气把午饭变得很踏实。转场之前，先被这一锅暖住。"
    },
    IMG_6087: {
      region: "yunnan",
      file: "IMG_6087.jpeg",
      title: "红辣下饭",
      location: "武汉餐桌",
      date: "2024.10.18 中午",
      text: "盘子里的颜色很直接，香气也不绕弯。赶路的人坐下来，才算真正补上力气。"
    },
    IMG_6090: {
      region: "yunnan",
      file: "IMG_6090.jpeg",
      title: "丽江的第一张",
      location: "丽江古城",
      date: "2024.10.19 上午",
      text: "阳光照在木楼和石牌坊上，人站在街口，像刚刚走进一段慢下来的时间。"
    },
    IMG_6092: {
      region: "yunnan",
      file: "IMG_6092.jpeg",
      title: "花盆里的小景",
      location: "丽江古城",
      date: "2024.10.19 上午",
      text: "多肉挤在木盆里，颜色很安静。古城的热闹之外，也有这样贴近脚边的细节。"
    },
    IMG_6093: {
      region: "yunnan",
      file: "IMG_6093.jpeg",
      title: "木屋小巷",
      location: "丽江古城",
      date: "2024.10.19 上午",
      text: "木门、石路和花草把路收得很窄，脚步自然放轻。这里适合慢慢走，不适合匆忙经过。"
    },
    IMG_6094: {
      region: "yunnan",
      file: "IMG_6094.jpeg",
      title: "树下蓝天",
      location: "丽江古城",
      date: "2024.10.19 上午",
      text: "老树把天空分成几块，屋檐从旁边探出来。阳光很亮，古城却显得很温和。"
    },
    IMG_6096: {
      region: "yunnan",
      file: "IMG_6096.jpeg",
      title: "街巷深处",
      location: "丽江古城",
      date: "2024.10.19 上午",
      text: "石板路往前延伸，旁边的店铺和树影一起安静下来。丽江的层次藏在这些小路里。"
    },
    IMG_6097: {
      region: "yunnan",
      file: "IMG_6097.jpeg",
      title: "门前小坐",
      location: "丽江古城",
      date: "2024.10.19 上午",
      text: "墙面粗粝，阳光停在门口，一切都像刚好按下了暂停。旅行里也需要这样没有安排的一秒。"
    },
    IMG_6100: {
      region: "yunnan",
      file: "IMG_6100.jpeg",
      title: "雪山远处出现",
      location: "丽江",
      date: "2024.10.19 下午",
      text: "云很低，山很清楚，屋顶在前景里显得小小的。真正看见雪山那一刻，行程突然有了方向。"
    },
    IMG_6102: {
      region: "yunnan",
      file: "IMG_6102.jpeg",
      title: "水果和午后",
      location: "丽江",
      date: "2024.10.19 下午",
      text: "袋子里的水果还带着刚买来的新鲜，桌边的人也慢慢放松。旅途中的补给，总是有一点快乐。"
    },
    IMG_6110: {
      region: "yunnan",
      file: "IMG_6110.jpeg",
      title: "一桌酸辣",
      location: "丽江餐桌",
      date: "2024.10.19 晚上",
      text: "汤锅和鱼菜一起摆上桌，颜色明亮得很有食欲。走了一天，最后还是要被热味收住。"
    },
    IMG_6112: {
      region: "yunnan",
      file: "IMG_6112.jpeg",
      title: "云擦过山顶",
      location: "玉龙雪山",
      date: "2024.10.20 上午",
      text: "白云贴着山峰翻过去，雪线在光里露出来。照片里的冷意很轻，却让人一下记住了那天。"
    },
    IMG_6113: {
      region: "yunnan",
      file: "IMG_6113.jpeg",
      title: "山峰近处",
      location: "玉龙雪山",
      date: "2024.10.20 上午",
      text: "岩壁从云雾里露出来，树影在下面站得很瘦。越靠近山，声音越像被慢慢收低。"
    },
    IMG_6116: {
      region: "yunnan",
      file: "IMG_6116.jpeg",
      title: "海拔牌前",
      location: "玉龙雪山",
      date: "2024.10.20 上午",
      text: "栈道、人群和山峰挤在同一个画面里，冷风也像能被看见。到达的证据，就这样被留住。"
    },
    IMG_6125: {
      region: "yunnan",
      file: "IMG_6125.jpeg",
      title: "蓝月谷的水",
      location: "蓝月谷",
      date: "2024.10.20 中午",
      text: "湖水亮得像从山里单独取出的一块颜色，树和栈道都在旁边安静下来。"
    },
    IMG_6128: {
      region: "yunnan",
      file: "IMG_6128.jpeg",
      title: "水边留影",
      location: "蓝月谷",
      date: "2024.10.20 中午",
      text: "白色水阶一层层往后退，远处是山，近处是人。风景很大，笑容把它拉近了一点。"
    },
    IMG_6129: {
      region: "yunnan",
      file: "IMG_6129.jpeg",
      title: "层层水声",
      location: "蓝月谷",
      date: "2024.10.20 中午",
      text: "水从石阶上细细流下来，像把山里的声音分成了很多层。站在旁边，会不自觉慢下来。"
    },
    IMG_6130: {
      region: "yunnan",
      file: "IMG_6130.jpeg",
      title: "谷口合影",
      location: "蓝月谷",
      date: "2024.10.20 中午",
      text: "人群在身后移动，水色和山色在更远处铺开。两个人站进同一张照片里，这一天就完整了一点。"
    },
    IMG_6131: {
      region: "yunnan",
      file: "IMG_6131.jpeg",
      title: "一截枯枝",
      location: "蓝月谷",
      date: "2024.10.20 中午",
      text: "蓝色水面前，一截枝干像安静的标点。越是简单的画面，越能记住当时的清冷。"
    },
    IMG_6132: {
      region: "yunnan",
      file: "IMG_6132.jpeg",
      title: "大理第一锅",
      location: "大理餐桌",
      date: "2024.10.20 晚上",
      text: "汤在锅里慢慢翻着，蘑菇和热气一起升起来。到大理后的第一顿饭，很适合把节奏放慢。"
    },
    IMG_6133: {
      region: "yunnan",
      file: "IMG_6133.jpeg",
      title: "辣炒见手青",
      location: "大理餐桌",
      date: "2024.10.20 晚上",
      text: "辣椒和见手青炒得很香，颜色也很有存在感。味道再诱人也要省着点吃，湖边城市的夜晚先从这一口热菜开始。"
    },
    IMG_6138: {
      region: "yunnan",
      file: "IMG_6138.jpeg",
      title: "大理城门",
      location: "大理古城",
      date: "2024.10.21 上午",
      text: "城门把人群聚到一起，远处的云压得很低。走进去之前，已经能感觉到这座城的从容。"
    },
    IMG_6144: {
      region: "yunnan",
      file: "IMG_6144.jpeg",
      title: "白塔入云",
      location: "崇圣寺三塔",
      date: "2024.10.21 中午",
      text: "塔身从树影后面立起来，天色微暗，反而让线条更清楚。古意在这里被拉得很高。"
    },
    IMG_6146: {
      region: "yunnan",
      file: "IMG_6146.jpeg",
      title: "树影中的塔",
      location: "崇圣寺三塔",
      date: "2024.10.21 中午",
      text: "树枝把塔身围住，云从后面慢慢铺开。大理的静，有时候就藏在这种不着急的画面里。"
    },
    IMG_6143: {
      region: "yunnan",
      file: "IMG_6143.jpeg",
      title: "三塔与云",
      location: "崇圣寺三塔",
      date: "2024.10.21 中午",
      text: "三座塔在云下排开，山影从后面隐约透出来。比起近看一座塔，这一张更像把大理的天色也一起收住了。"
    },
    IMG_6147: {
      region: "yunnan",
      file: "IMG_6147.jpeg",
      title: "洱海边",
      location: "洱海",
      date: "2024.10.21 下午",
      text: "水面铺得很平，远山和云连在一起。站在湖边，前几天的山路和街巷都慢慢沉下来。"
    },
    IMG_6150: {
      region: "yunnan",
      file: "IMG_6150.jpeg",
      title: "湖边木栈道",
      location: "洱海",
      date: "2024.10.21 下午",
      text: "人群沿着水边散开，岸线把视线带向远处。风一吹，城市的声音就轻了。"
    },
    IMG_6154: {
      region: "yunnan",
      file: "IMG_6154.jpeg",
      title: "云下的一桌",
      location: "大理餐桌",
      date: "2024.10.21 下午",
      text: "餐桌旁能看见远处的水和天，食物摆得热闹。大理把吃饭也变成了看风景的一部分。"
    },
    IMG_6159: {
      region: "yunnan",
      file: "IMG_6159.jpeg",
      title: "夜市入口",
      location: "西双版纳",
      date: "2024.10.22 晚上",
      text: "灯牌、摊位和人流一起亮起来，夜晚被热带的颜色推到眼前。旅程进入了完全不同的温度。"
    },
    IMG_6161: {
      region: "yunnan",
      file: "IMG_6161.jpeg",
      title: "舞台灯光",
      location: "西双版纳",
      date: "2024.10.22 晚上",
      text: "手机屏幕、舞台和围观的人群叠在一起，夜色很热闹。每一束光都像在把空气加热。"
    },
    IMG_6162: {
      region: "yunnan",
      file: "IMG_6162.jpeg",
      title: "榴莲手心",
      location: "西双版纳夜市",
      date: "2024.10.22 晚上",
      text: "一小盒水果被捧在手里，香气不用靠近也能想象。夜市的快乐，常常就是这么直接。"
    },
    IMG_6163: {
      region: "yunnan",
      file: "IMG_6163.jpeg",
      title: "窗外的绿",
      location: "西双版纳",
      date: "2024.10.23 上午",
      text: "房间里还带着刚醒来的凌乱，窗外已经是一片浓绿。热带的早晨，像从玻璃外涌进来。"
    },
    IMG_6165: {
      region: "yunnan",
      file: "IMG_6165.jpeg",
      title: "睡莲池",
      location: "野象谷",
      date: "2024.10.23 上午",
      text: "水面被叶片铺满，花藏在绿意之间。野象谷的安静不是空旷，而是被植物慢慢填满。"
    },
    IMG_6168: {
      region: "yunnan",
      file: "IMG_6168.jpeg",
      title: "野象谷山林",
      location: "野象谷",
      date: "2024.10.23 上午",
      text: "山林在阳光下层层铺开，树冠一直延到远处的坡上。到了野象谷，西双版纳的绿变得更野、更深。"
    },
    IMG_6167: {
      region: "yunnan",
      file: "IMG_6167.jpeg",
      title: "池边栈台",
      location: "野象谷",
      date: "2024.10.23 上午",
      text: "站在水边的小平台上，身后是一整片湿润的绿。野象谷的光线柔下来，人也跟着放松。"
    },
    IMG_6170: {
      region: "yunnan",
      file: "IMG_6170.jpeg",
      title: "大叶之间",
      location: "野象谷",
      date: "2024.10.23 上午",
      text: "叶子比人还醒目，把画面撑得很满。走在野象谷，会觉得绿色不只是颜色，也是一种气候。"
    },
    IMG_6171: {
      region: "yunnan",
      file: "IMG_6171.jpeg",
      title: "路边水果摊",
      location: "西双版纳",
      date: "2024.10.23 下午",
      text: "篮子里的水果摊在地上，颜色像被太阳晒得更甜。停下来挑一袋，就是南方旅途的日常。"
    },
    IMG_6172: {
      region: "yunnan",
      file: "IMG_6172.jpeg",
      title: "摊位前",
      location: "西双版纳",
      date: "2024.10.23 下午",
      text: "橙黄和浅绿一层层堆在面前，挑选也变成一种小小的停留。热带的味道很容易被带走。"
    },
    IMG_6173: {
      region: "yunnan",
      file: "IMG_6173.jpeg",
      title: "金色屋顶",
      location: "西双版纳",
      date: "2024.10.23 下午",
      text: "屋顶在树影里露出尖角，金色被阳光照得更亮。城市的南方感，在这一眼里很清楚。"
    },
    IMG_6174: {
      region: "yunnan",
      file: "IMG_6174.jpeg",
      title: "窗边绿影",
      location: "西双版纳",
      date: "2024.10.23 下午",
      text: "叶片贴着窗边伸过来，外面的光被筛成柔软的绿色。细节很小，却很像这里。"
    },
    IMG_6175: {
      region: "yunnan",
      file: "IMG_6175.jpeg",
      title: "林间小路",
      location: "西双版纳",
      date: "2024.10.23 下午",
      text: "路被树荫包住，空气也显得更湿。走在里面，不需要急着抵达哪里。"
    },
    IMG_6177: {
      region: "yunnan",
      file: "IMG_6177.jpeg",
      title: "白塔与蓝天",
      location: "西双版纳",
      date: "2024.10.23 下午",
      text: "白色塔身在蓝天下很干净，周围的树把它衬得更亮。阳光在这里有一种清脆的质感。"
    },
    IMG_6179: {
      region: "yunnan",
      file: "IMG_6179.jpeg",
      title: "林中的金像",
      location: "西双版纳",
      date: "2024.10.23 下午",
      text: "金色从树影里显出来，旁边的绿意把声音都压低。热闹之外，也有庄重的一面。"
    },
    IMG_6180: {
      region: "yunnan",
      file: "IMG_6180.jpeg",
      title: "买回来的甜",
      location: "西双版纳",
      date: "2024.10.23 傍晚",
      text: "一袋袋水果摊在桌上，像把白天的阳光都带回了房间。旅途的收获有时就是这些可以分着吃的甜。"
    },
    IMG_6184: {
      region: "yunnan",
      file: "IMG_6184.jpeg",
      title: "星光夜市",
      location: "西双版纳星光夜市",
      date: "2024.10.23 晚上",
      objectPosition: "center bottom",
      text: "金色建筑和人群一起亮起来，夜市像一整片灯海。最后几天的兴奋，被这一眼推到最高。"
    },
    IMG_6186: {
      region: "yunnan",
      file: "IMG_6186.jpeg",
      title: "粉色夜场",
      location: "西双版纳",
      date: "2024.10.23 晚上",
      text: "舞台灯把夜色染成粉紫色，音乐和人声贴得很近。西双版纳的夜晚很会把人留住。"
    },
    IMG_6187: {
      region: "yunnan",
      file: "IMG_6187.jpeg",
      title: "夜里的果袋",
      location: "西双版纳",
      date: "2024.10.23 晚上",
      text: "切好的水果装在袋子里，颜色被室内灯照得很软。热带夜晚的一点满足，简单又具体。"
    },
    IMG_6190: {
      region: "yunnan",
      file: "IMG_6190.jpeg",
      title: "红果缀满树",
      location: "西双版纳热带植物园",
      date: "2024.10.24 上午",
      text: "树干上挂满细小的红色，像植物自己留下的装饰。越往林子里走，越容易被这些细节抓住。"
    },
    IMG_6192: {
      region: "yunnan",
      file: "IMG_6192.jpeg",
      title: "草地中央",
      location: "西双版纳热带植物园",
      date: "2024.10.24 上午",
      text: "草地在树之间展开，远处的白桦和绿意把空间撑开。人站在中间，显得很轻。"
    },
    IMG_6198: {
      region: "yunnan",
      file: "IMG_6198.jpeg",
      title: "叶间果实",
      location: "西双版纳热带植物园",
      date: "2024.10.24 上午",
      text: "一颗果实藏在大叶之间，绿色一层叠一层。这里的植物总能把普通散步变成观察。"
    },
    IMG_6200: {
      region: "yunnan",
      file: "IMG_6200.jpeg",
      title: "树上的菠萝蜜",
      location: "西双版纳热带植物园",
      date: "2024.10.24 上午",
      text: "沉甸甸的果实挂在树干上，阳光从叶缝里落下来。热带的丰盛感，几乎不用解释。"
    },
    IMG_6201: {
      region: "yunnan",
      file: "IMG_6201.jpeg",
      title: "高树路旁",
      location: "西双版纳热带植物园",
      date: "2024.10.24 上午",
      text: "笔直的树沿着路边排开，天空从叶冠之间露出来。最后一段路，明亮得很轻松。"
    },
    GS_N_YELLOW_RIVER: {
      region: "gansu",
      file: "gs_n_yellow_river.jpeg",
      title: "黄河边的风",
      location: "兰州黄河边",
      date: "2026.05.14 晚上",
      text: "河水贴着城市慢慢流过，岸边的柳树和人影让兰州的开场显得很生活。"
    },
    GS_N_ZHONGSHAN_BRIDGE: {
      region: "gansu",
      file: "gs_n_zhongshan_bridge.jpeg",
      title: "铁桥与河水",
      location: "兰州中山桥一带",
      date: "2026.05.14 晚上",
      text: "铁桥横在黄河上，水面带着厚重的颜色。城市的地标不是摆在那里，而是被每天的河风反复经过。"
    },
    GS_N_DANXIA_PORTRAIT: {
      region: "gansu",
      file: "gs_n_danxia_portrait.jpeg",
      title: "彩丘前",
      location: "张掖丹霞",
      date: "2026.05.17 下午",
      text: "人站在彩色山体前，比例一下被拉小。甘肃的辽阔，常常就是这样从身后展开。"
    },
    GS_N_DANXIA_WIDE: {
      region: "gansu",
      file: "gs_n_danxia_wide.jpeg",
      title: "丹霞铺开",
      location: "张掖丹霞",
      date: "2026.05.17 下午",
      text: "山脊一层层向远处推开，红、黄和褐色在阳光下分得很清楚，像大地自己留下的纹路。"
    },
    GS_N_DANXIA_VALLEY: {
      region: "gansu",
      file: "gs_n_danxia_valley.jpeg",
      title: "褶皱里的路",
      location: "张掖丹霞",
      date: "2026.05.17 下午",
      text: "远处的步道和近处的山纹一起弯折，人在里面移动得很慢，风景却一直往外扩。"
    },
    GS_N_DANXIA_LOOKOUT: {
      region: "gansu",
      file: "gs_n_danxia_lookout.jpeg",
      title: "看台上的停留",
      location: "张掖丹霞",
      date: "2026.05.17 下午",
      text: "站在栏杆边看出去，山色像被阳光一层层翻开。拍照只是停留的理由，真正记住的是那阵风。"
    },
    GS_N_DANXIA_COLORS: {
      region: "gansu",
      file: "gs_n_danxia_colors.jpeg",
      title: "颜色起伏",
      location: "张掖丹霞",
      date: "2026.05.17 下午",
      text: "红色岩层和浅色山坡交错在一起，画面明亮得像被西北的太阳重新调过色。"
    },
    GS_N_DANXIA_CANYON: {
      region: "gansu",
      file: "gs_n_danxia_canyon.jpeg",
      title: "远处的峡谷",
      location: "张掖丹霞",
      date: "2026.05.18 中午",
      text: "峡谷像被时间慢慢刻出来，阴影落在褐色山体上，让远处也有了层次。"
    },
    GS_N_DANXIA_SHADOW: {
      region: "gansu",
      file: "gs_n_danxia_shadow.jpeg",
      title: "丹霞的阴影",
      location: "张掖丹霞",
      date: "2026.05.18 中午",
      text: "光线从高处压下来，沟壑里留下深色的影。颜色之外，地貌本身也足够有力量。"
    },
    GS_N_CANYON_WALK: {
      region: "gansu",
      file: "gs_n_canyon_walk.jpeg",
      title: "红岩栈道",
      location: "张掖平山湖大峡谷",
      date: "2026.05.18 中午",
      text: "栈道贴着红色岩壁向前，人在岩层之间穿行，像走进一条被山体夹住的时间线。"
    },
    GS_N_CANYON_BOARDWALK: {
      region: "gansu",
      file: "gs_n_canyon_boardwalk.jpeg",
      title: "峡谷里的阶梯",
      location: "张掖平山湖大峡谷",
      date: "2026.05.18 中午",
      text: "木阶从峡谷中间抬上去，阳光只照亮一部分岩壁，剩下的都留给凉意和回声。"
    },
    GS_N_CANYON_WALL: {
      region: "gansu",
      file: "gs_n_canyon_wall.jpeg",
      title: "一线岩壁",
      location: "张掖平山湖大峡谷",
      date: "2026.05.18 中午",
      text: "窄路两边是高高的岩壁，纹理近得几乎可以读出来。风景在这里从远眺变成了贴身经过。"
    },
    GS_N_CANYON_SKY: {
      region: "gansu",
      file: "gs_n_canyon_sky.jpeg",
      title: "岩缝里的天",
      location: "张掖平山湖大峡谷",
      date: "2026.05.18 中午",
      text: "抬头只看见一条蓝色的天，岩壁把光收得很窄，反而让天空显得更亮。"
    },
    GS_N_GORGE_STAIR: {
      region: "gansu",
      file: "gs_n_gorge_stair.jpeg",
      title: "上行的铁梯",
      location: "张掖平山湖大峡谷",
      date: "2026.05.18 下午",
      text: "铁梯顺着岩壁往上走，脚下是热土，头顶是强光，每一步都带着干燥的西北感。"
    },
    GS_N_GORGE_LOOKOUT: {
      region: "gansu",
      file: "gs_n_gorge_lookout.jpeg",
      title: "荒原远望",
      location: "张掖平山湖大峡谷",
      date: "2026.05.18 下午",
      text: "从高处看出去，褐色荒原一直铺到远处，空间大得让人下意识安静下来。"
    },
    GS_N_DESERT_PERSON: {
      region: "gansu",
      file: "gs_n_desert_person.jpeg",
      title: "沙山脚下",
      location: "敦煌鸣沙山",
      date: "2026.05.21 上午",
      text: "沙丘在身后缓慢起伏，人的影子很小。到了敦煌，风景换成了更明亮也更干燥的质地。"
    },
    GS_N_CRESCENT_LAKE: {
      region: "gansu",
      file: "gs_n_crescent_lake.jpeg",
      title: "月牙泉远处",
      location: "敦煌鸣沙山月牙泉",
      date: "2026.05.21 上午",
      text: "沙山之间突然出现一片绿和水，亭台在远处压住画面，像荒漠里的一点回声。"
    },
    GS_N_DUNES_GROVE: {
      region: "gansu",
      file: "gs_n_dunes_grove.jpeg",
      title: "沙山与树影",
      location: "敦煌鸣沙山月牙泉",
      date: "2026.05.21 上午",
      text: "树影、栏杆和沙山叠在一起，柔软的沙线把旅程最后的自然风景慢慢收住。"
    },
    GS_C_BUDDHA_TERRACE: {
      region: "gansu",
      file: "gs_c_buddha_terrace.jpeg",
      title: "白塔寺的佛像",
      location: "武威白塔寺",
      date: "2026.05.15 下午",
      text: "佛像立在灰天之下，台阶和栏杆把空间收得庄重。武威白塔寺里有安静的宗教气息。"
    },
    GS_C_WHITE_PAGODA: {
      region: "gansu",
      file: "gs_c_white_pagoda.jpeg",
      title: "白塔寺白塔",
      location: "武威白塔寺",
      date: "2026.05.15 下午",
      text: "白色塔身在树影旁显得很清净，灰天之下更显得沉静。"
    },
    GS_C_TEMPLE_GATE: {
      region: "gansu",
      file: "gs_c_temple_gate.jpeg",
      title: "鸠摩罗什寺山门",
      location: "武威鸠摩罗什寺",
      date: "2026.05.15 下午",
      text: "红柱、蓝匾和彩画把入口装点得很明亮，武威的文化线索从这座寺院前慢慢展开。"
    },
    GS_C_ANCIENT_TOWER: {
      region: "gansu",
      file: "gs_c_ancient_tower.jpeg",
      title: "鸠摩罗什寺塔",
      location: "武威鸠摩罗什寺",
      date: "2026.05.15 下午",
      text: "石塔站在院落中央，天色压得很低，反而让塔身的线条更稳。"
    },
    GS_C_CITY_GATE: {
      region: "gansu",
      file: "gs_c_city_gate.jpeg",
      title: "凉州城楼前",
      location: "武威凉州城区",
      date: "2026.05.15 下午",
      text: "城楼把人带回一种更古老的尺度，台阶、门洞和广场一起把时间拉开。"
    },
    GS_C_OLD_HOUSE: {
      region: "gansu",
      file: "gs_c_old_house.jpeg",
      title: "老宅门楼",
      location: "张掖大佛寺",
      date: "2026.05.17 上午",
      text: "木门和匾额被岁月磨得发暗，门口的人影让这座老建筑仍然有日常的温度。"
    },
    GS_C_WEATHERED_DOOR: {
      region: "gansu",
      file: "gs_c_weathered_door.jpeg",
      title: "斑驳门板",
      location: "张掖大佛寺",
      date: "2026.05.17 上午",
      text: "旧门上的痕迹像一层层被留下来的时间。没有鲜艳颜色，却很能让人停下来。"
    },
    GS_C_SLEEPING_BUDDHA: {
      region: "gansu",
      file: "gs_c_sleeping_buddha.jpeg",
      title: "殿中的卧佛",
      location: "张掖大佛寺",
      date: "2026.05.17 上午",
      text: "昏暗殿内，卧佛被柱子和壁画围住。人站在下方，声音自然放轻。"
    },
    GS_C_MURAL_HALL: {
      region: "gansu",
      file: "gs_c_mural_hall.jpeg",
      title: "壁画上的人物",
      location: "张掖大佛寺",
      date: "2026.05.17 上午",
      text: "壁画色彩已经旧了，人物却仍然清楚。看得久一点，会觉得时间并没有完全退远。"
    },
    GS_C_PAINTED_STATUE: {
      region: "gansu",
      file: "gs_c_painted_statue.jpeg",
      title: "彩塑侧影",
      location: "张掖大佛寺",
      date: "2026.05.17 上午",
      text: "彩塑站在木构之间，衣纹和颜色都带着旧意。它不需要完整解释，已经足够有存在感。"
    },
    GS_C_XIJIN_TILE: {
      region: "gansu",
      file: "gs_c_xijin_tile.jpeg",
      title: "西晋地砖",
      location: "敦煌莫高窟相关展陈",
      date: "2026.05.20 下午",
      text: "一块地砖把很远的年代带到眼前，花纹留在石面上，像历史给旅程留下的小签名。"
    },
    GS_C_JIAYUGUAN_GATE: {
      region: "gansu",
      file: "gs_c_jiayuguan_gate.jpeg",
      title: "嘉峪关入口",
      location: "嘉峪关",
      date: "2026.05.19 中午",
      text: "城门前的阳光很硬，人群从门洞前经过，关城的轮廓显得格外清楚。"
    },
    GS_C_HERO_PASS: {
      region: "gansu",
      file: "gs_c_hero_pass.jpeg",
      title: "天下雄关",
      location: "嘉峪关",
      date: "2026.05.19 中午",
      text: "匾额立在风沙里，四个字把边关的气势直接写出来。到这里，丝路忽然有了具体的门。"
    },
    GS_C_RAMMED_WALL: {
      region: "gansu",
      file: "gs_c_rammed_wall.jpeg",
      title: "夯土城墙",
      location: "嘉峪关",
      date: "2026.05.19 中午",
      text: "墙体在阳光下显出层层土色，线条朴素，却把边塞的力量留得很实。"
    },
    GS_C_FORT_TOWER: {
      region: "gansu",
      file: "gs_c_fort_tower.jpeg",
      title: "关城楼阁",
      location: "嘉峪关",
      date: "2026.05.19 下午",
      text: "楼阁立在高墙之上，蓝天和黄土把画面分得很干净，像一段历史的剪影。"
    },
    GS_C_MOGAO_CLIFF: {
      region: "gansu",
      file: "gs_c_mogao_cliff.jpeg",
      title: "石窟外墙",
      location: "敦煌莫高窟",
      date: "2026.05.20 中午",
      text: "洞窟沿着崖壁排开，栈道一层层连着。还没进入洞内，敦煌的厚度已经扑面而来。"
    },
    GS_C_MOGAO_RED_EAVES: {
      region: "gansu",
      file: "gs_c_mogao_red_eaves.jpeg",
      title: "九层楼",
      location: "敦煌莫高窟",
      date: "2026.05.20 下午",
      text: "红色檐角贴着崖壁向上，建筑像从石壁里长出来，把宗教和地貌接在一起。"
    },
    GS_C_MOGAO_DOOR_PAINTING: {
      region: "gansu",
      file: "gs_c_mogao_door_painting.jpeg",
      title: "门上的彩绘",
      location: "敦煌莫高窟",
      date: "2026.05.20 下午",
      text: "门板上的图案已经斑驳，线条却还在。细节越旧，越让人愿意多看一眼。"
    },
    GS_C_MOGAO_DETAIL: {
      region: "gansu",
      file: "gs_c_mogao_detail.jpeg",
      title: "壁画细部",
      location: "敦煌莫高窟相关展陈",
      date: "2026.05.20 下午",
      text: "人物、树木和建筑被画在同一片旧色里，细节密得像一段被保存下来的故事。"
    },
    GS_C_MOGAO_CEILING: {
      region: "gansu",
      file: "gs_c_mogao_ceiling.jpeg",
      title: "藻井图案",
      location: "敦煌莫高窟相关展陈",
      date: "2026.05.20 下午",
      text: "图案从中心向四周展开，颜色褪去后仍然有秩序。它让抬头这件事变得很有仪式感。"
    },
    GS_C_MOGAO_BUDDHA_WALL: {
      region: "gansu",
      file: "gs_c_mogao_buddha_wall.jpeg",
      title: "佛国壁面",
      location: "敦煌莫高窟相关展陈",
      date: "2026.05.20 下午",
      text: "壁面上人物层层排列，红与绿沉在旧色里。热闹的画面反而带着很深的安静。"
    },
    GS_C_MOGAO_CALLIGRAPHY: {
      region: "gansu",
      file: "gs_c_mogao_calligraphy.jpeg",
      title: "纸上的墨迹",
      location: "敦煌莫高窟相关展陈",
      date: "2026.05.20 下午",
      text: "墨迹竖着落下，笔画像还带着人的手劲。文物有时不需要巨大，只要一行字就够近。"
    },
    GS_C_THOUSAND_BUDDHAS: {
      region: "gansu",
      file: "gs_c_thousand_buddhas.jpeg",
      title: "千佛排列",
      location: "敦煌莫高窟相关展陈",
      date: "2026.05.20 下午",
      text: "一尊尊小佛排成整面墙，重复里有一种稳定的力量。站在前面，会被数量和时间同时击中。"
    },
    GS_F_NOODLES: {
      region: "gansu",
      file: "gs_f_noodles.jpeg",
      title: "兰州牛肉面",
      location: "兰州餐桌",
      date: "2026.05.15 清晨",
      text: "清汤、红油、葱花和面条放在同一个碗里，热气一起升上来。甘肃的第一口，很适合从这里开始。"
    },
    GS_F_MIANPI: {
      region: "gansu",
      file: "gs_f_mianpi.jpeg",
      title: "古浪面皮子",
      location: "武威小吃",
      date: "2026.05.16 上午",
      text: "面皮子裹着辣油和芝麻，颜色很直接。西北小吃的爽利，在这一盘里很清楚。"
    },
    GS_F_GREY_BEANS: {
      region: "gansu",
      file: "gs_f_grey_beans.jpeg",
      title: "灰豆子",
      location: "兰州小吃",
      date: "2026.05.14 晚上",
      text: "甜汤颜色很深，豆子圆圆地沉在碗里，让走累后的夜晚更加安静。"
    },
    GS_F_POTATO: {
      region: "gansu",
      file: "gs_f_potato.jpeg",
      title: "烤土豆",
      location: "张掖夜市",
      date: "2026.05.16 傍晚",
      text: "土豆块撒上调料，外面带一点焦香。很简单，也很有路边摊的快乐。"
    },
    GS_F_POTATO_CHIPS: {
      region: "gansu",
      file: "gs_f_potato_chips.jpeg",
      title: "烤土豆片",
      location: "武威夜市",
      date: "2026.05.15 晚上",
      text: "薄片一层层叠在烤架上，辣椒面把香气推得很近。夜市的热闹有时就是这一串。"
    },
    GS_F_NAIPI: {
      region: "gansu",
      file: "gs_f_naipi.jpeg",
      title: "兰州奶皮子",
      location: "兰州小吃",
      date: "2026.05.22 上午",
      text: "奶皮子在杯子里柔软地卷起，凉意和奶香让干燥的路程忽然变得温和。"
    },
    GS_F_HAND_NAIPI: {
      region: "gansu",
      file: "gs_f_hand_naipi.jpeg",
      title: "手工奶皮子",
      location: "兰州小吃",
      date: "2026.05.14 晚上",
      text: "黑芝麻和枸杞点在奶香上，甜味很轻，却刚好把西北的风沙压下去一点。"
    },
    GS_F_TIANPEIZI: {
      region: "gansu",
      file: "gs_f_tianpeizi.jpeg",
      title: "甜醅子",
      location: "兰州小吃",
      date: "2026.05.14 晚上",
      text: "麦粒泡在清甜的汤里，吃起来有发酵后的微微香气。它像这趟旅程里一口很本地的甜。"
    },
    GS_F_APRICOT_TEA: {
      region: "gansu",
      file: "gs_f_apricot_tea.jpeg",
      title: "杏皮茶",
      location: "敦煌街头",
      date: "2026.05.20 晚上",
      text: "杯子握在手里，酸甜味像从西北的水果里直接取出来。走在太阳下，这一口特别及时。"
    },
    GS_F_CHAOBOLA: {
      region: "gansu",
      file: "gs_f_chaobola.jpeg",
      title: "炒拨拉",
      location: "张掖餐桌",
      date: "2026.05.17 晚上",
      text: "铁盘里肉和菜炒得很满，油光、辣椒和锅气都很足。看一眼就知道这顿不会清淡。"
    },
    GS_F_LAMB_PANCAKE: {
      region: "gansu",
      file: "gs_f_lamb_pancake.jpeg",
      title: "敦煌羊肉焖饼",
      location: "敦煌餐桌",
      date: "2026.05.19 晚上",
      text: "饼吸了汤汁，羊肉和青椒把味道撑起来。敦煌的晚饭，带着很踏实的分量。"
    },
    GS_F_LATIAOZI: {
      region: "gansu",
      file: "gs_f_latiaozi.jpeg",
      title: "新疆拉条子",
      location: "张掖餐桌",
      date: "2026.05.16 傍晚",
      text: "面条拌着肉和辣味，颜色厚重，口感也很有劲。赶路之后，这种主食很让人放心。"
    },
    GS_F_LAMB_RICE: {
      region: "gansu",
      file: "gs_f_lamb_rice.jpeg",
      title: "羊肉炒饭",
      location: "张掖餐桌",
      date: "2026.05.16 傍晚",
      text: "米饭炒得粒粒分明，羊肉香气压在里面。简单一盘，也能把人从风景里拉回现实。"
    },
    GS_F_SHACONG: {
      region: "gansu",
      file: "gs_f_shacong.jpeg",
      title: "凉拌沙葱",
      location: "武威餐桌",
      date: "2026.05.15 晚上",
      text: "沙葱拌得清爽，颜色绿得很利落。重口味之间，有这样一盘刚好解腻。"
    },
    GS_F_BOILED_LAMB: {
      region: "gansu",
      file: "gs_f_boiled_lamb.jpeg",
      title: "手抓羊肉",
      location: "兰州餐桌",
      date: "2026.05.14 晚上",
      text: "羊肉按骨切开，旁边蘸一点辣油就很有滋味。手抓羊肉看起来朴素，却最能吃出西北餐桌的底气。"
    },
    GS_F_WUWEI_HAND_LAMB: {
      region: "gansu",
      file: "gs_f_wuwei_hand_lamb.jpeg",
      title: "武威手抓羊肉",
      location: "武威餐桌",
      date: "2026.05.15 中午",
      text: "羊肉装在长盘里，旁边是辣椒面和蒜汁。到了武威，这一口手抓羊肉更像是旅途里扎实的一顿。"
    },
    GS_F_SKEWERS: {
      region: "gansu",
      file: "gs_f_skewers.jpeg",
      title: "一把烤串",
      location: "武威夜市",
      date: "2026.05.15 晚上",
      text: "烤串摆满铁盘，调料和火候把夜晚一下点热。旅行中的快乐，有时就是不用等太久的香气。"
    },
    GS_F_BREAD_TEA: {
      region: "gansu",
      file: "gs_f_bread_tea.jpeg",
      title: "烤馕与炼乳",
      location: "武威餐桌",
      date: "2026.05.15 晚上",
      text: "烤馕切成扇形，旁边配着炼乳和特制辣酱。甜口和辣味一起上桌，是武威餐桌上很直接的组合。"
    },
    GS_F_MARKET: {
      region: "gansu",
      file: "gs_f_market.jpeg",
      title: "市场里的红枣",
      location: "武威市场",
      date: "2026.05.16 上午",
      text: "摊位上堆着红枣和干货，颜色沉稳又丰盛。这里不只是买东西，也是看见当地生活。"
    },
    GS_F_FOOD_STREET: {
      region: "gansu",
      file: "gs_f_food_street.jpeg",
      title: "夜色里的食街",
      location: "敦煌夜市",
      date: "2026.05.20 晚上",
      text: "灯牌一排排亮起来，游客和摊主在路中间交错。甘肃的夜晚，常常是被吃食照亮的。"
    },
    GS_F_DAPANJI: {
      region: "gansu",
      file: "gs_f_dapanji.jpeg",
      title: "夜市柜台",
      location: "敦煌夜市",
      date: "2026.05.20 晚上",
      text: "柜台前挂着明亮的招牌，烤串和热菜等着上桌。还没吃到，气氛已经先到了。"
    },
    GS_C_WUWEI_HOTEL_LOBBY: {
      region: "gansu",
      file: "gs_c_wuwei_hotel_lobby.jpeg",
      title: "武威落脚处",
      location: "武威酒店",
      date: "2026.05.15 晚上",
      text: "大堂的灯和地面纹样把赶路的一晚安放下来。旅程里这样的落脚处，也会成为回忆的背景。"
    },
    GS_F_LANZHOU_FAREWELL_NAIPI: {
      region: "gansu",
      file: "gs_f_lanzhou_farewell_naipi.jpeg",
      title: "别了，兰州",
      location: "兰州中川机场",
      date: "2026.05.22 中午",
      text: "离开前再拿一杯奶皮子，像给兰州这段路收一个柔软的尾。"
    },
    GS_F_ZHANGYE_FIGS: {
      region: "gansu",
      file: "gs_f_zhangye_figs.jpeg",
      title: "张掖红色无花果",
      location: "张掖",
      date: "2026.05.17 傍晚",
      text: "红色无花果装在手里，颜色新鲜得很直接。风景之外，路边水果也把当地味道留下来。"
    },
    GS_N_DANXIA_TOGETHER: {
      region: "gansu",
      file: "gs_n_danxia_together.jpeg",
      title: "丹霞前合影",
      location: "张掖丹霞",
      date: "2026.05.17 下午",
      text: "彩色山体在身后铺开，人站在风里，显得轻而明亮。"
    },
    GS_N_PINGSHANHU_PORTRAIT: {
      region: "gansu",
      file: "gs_n_pingshanhu_portrait.jpeg",
      title: "红岩前",
      location: "张掖平山湖大峡谷",
      date: "2026.05.18 中午",
      text: "红色岩层堆叠在身后，阳光很硬，人的轮廓也被照得更清楚。"
    },
    GS_N_MINGSHA_MAN: {
      region: "gansu",
      file: "gs_n_mingsha_man.jpeg",
      title: "沙地里的身影",
      location: "敦煌鸣沙山",
      date: "2026.05.21 上午",
      text: "人站在沙地中央，远处的沙山被风吹成柔软的曲线。"
    },
    GS_F_LANZHOU_NIGHT_STREET: {
      region: "gansu",
      file: "gs_f_lanzhou_night_street.jpeg",
      title: "兰州夜里的食街",
      location: "兰州夜市",
      date: "2026.05.14 傍晚",
      text: "木色门面和招牌挤在一起，夜晚刚亮，吃饭的气氛已经先围上来。"
    },
    GS_N_RIVER_CANOPY: {
      region: "gansu",
      file: "gs_n_river_canopy.jpeg",
      title: "黄河边的茶馆",
      location: "兰州黄河边",
      date: "2026.05.14 晚上",
      text: "茶馆沿着黄河排开，椅子面向河水。坐下来喝茶看河，是兰州很日常也很舒服的一刻。"
    },
    GS_N_RIVER_SELFIE: {
      region: "gansu",
      file: "gs_n_river_selfie.jpeg",
      title: "黄河边合影",
      location: "兰州黄河边",
      date: "2026.05.14 晚上",
      text: "身后是黄河和山坡，两个人靠近镜头，旅程从城市边的河风里留下证据。"
    },
    GS_F_LANZHOU_COFFEE: {
      region: "gansu",
      file: "gs_f_lanzhou_coffee.jpeg",
      title: "离开前的小酒店前台",
      location: "兰州小酒店",
      date: "2026.05.15 清晨",
      text: "离开前在小酒店前台短暂停留，屏幕、灯光和行李一起构成旅途里的中转片段。"
    },
    GS_C_WUWEI_GATE_SELFIE: {
      region: "gansu",
      file: "gs_c_wuwei_gate_selfie.jpeg",
      title: "凉州城楼合影",
      location: "武威凉州城区",
      date: "2026.05.15 下午",
      text: "城楼在身后抬起，门洞和台阶把武威的城市记忆放进同一张照片。"
    },
    GS_F_MIANPI_STALL: {
      region: "gansu",
      file: "gs_f_mianpi_stall.jpeg",
      title: "面皮子小店",
      location: "武威小吃店",
      date: "2026.05.16 上午",
      text: "柜台前有人正在点餐，墙上的菜单写着各种面皮。真正的地方味道常在这样的店口出现。"
    },
    GS_C_DAFOSI_GARDEN: {
      region: "gansu",
      file: "gs_c_dafosi_garden.jpeg",
      title: "大佛寺院中",
      location: "张掖大佛寺",
      date: "2026.05.17 上午",
      text: "院子里的树影和灯杆把古建筑围住，热烈阳光下仍然有一块安静。"
    },
    GS_C_DAFOSI_CAT: {
      region: "gansu",
      file: "gs_c_dafosi_cat.jpeg",
      title: "寺边白猫",
      location: "张掖大佛寺",
      date: "2026.05.17 上午",
      text: "白猫躺在墙边，旁边写着禁烟提示。严肃的古寺角落，也有很松弛的一秒。"
    },
    GS_N_PINGSHANHU_SIGN: {
      region: "gansu",
      file: "gs_n_pingshanhu_sign.jpeg",
      title: "平山湖大峡谷入口",
      location: "张掖平山湖大峡谷",
      date: "2026.05.18 中午",
      text: "牌子立在红岩前，峡谷还没有真正展开，干燥的气息已经很近。"
    },
    GS_N_CANYON_STONE_PILE: {
      region: "gansu",
      file: "gs_n_canyon_stone_pile.jpeg",
      title: "红岩下的小石堆",
      location: "张掖平山湖大峡谷",
      date: "2026.05.18 中午",
      text: "小石堆靠在岩壁脚下，尺度很小，却让峡谷里的路有了人的痕迹。"
    },
    GS_N_CANYON_SCALE: {
      region: "gansu",
      file: "gs_n_canyon_scale.jpeg",
      title: "峡谷中的人",
      location: "张掖平山湖大峡谷",
      date: "2026.05.18 中午",
      objectPosition: "center bottom",
      text: "人站在高高岩壁前，才看出这片红色地貌真正的尺度。"
    },
    GS_N_CANYON_SELFIE: {
      region: "gansu",
      file: "gs_n_canyon_selfie.jpeg",
      title: "峡谷自拍",
      location: "张掖平山湖大峡谷",
      date: "2026.05.18 中午",
      text: "近处是同行的人，身后是温热的红岩。风景很大，镜头把它拉回到身边。"
    },
    GS_N_CANYON_TALL_WALL: {
      region: "gansu",
      file: "gs_n_canyon_tall_wall.jpeg",
      title: "高墙之下",
      location: "张掖平山湖大峡谷",
      date: "2026.05.18 下午",
      text: "岩壁从身边直直升起，脚下的路被压得很窄，人也自然放慢。"
    },
    GS_N_CANYON_DEEP_VIEW: {
      region: "gansu",
      file: "gs_n_canyon_deep_view.jpeg",
      title: "峡谷深处",
      location: "张掖平山湖大峡谷",
      date: "2026.05.18 下午",
      text: "从高处向下看，岩层和步道交错在一起，像一条被风和时间刻出的路线。"
    },
    GS_C_JIAYUGUAN_WALL_TOWER: {
      region: "gansu",
      file: "gs_c_jiayuguan_wall_tower.jpeg",
      title: "城墙上的楼阁",
      location: "嘉峪关",
      date: "2026.05.19 下午",
      text: "楼阁从长墙上抬起，墙体一路延向远处，边关的线条干净而有力。"
    },
    GS_C_MOGAO_EARTHEN_WALL: {
      region: "gansu",
      file: "gs_c_mogao_earthen_wall.jpeg",
      title: "石窟外的土墙",
      location: "敦煌莫高窟",
      date: "2026.05.20 中午",
      text: "土色墙体贴着崖面延伸，质地朴素，却把敦煌的厚度稳稳托住。"
    },
    GS_C_MOGAO_PLAZA: {
      region: "gansu",
      file: "gs_c_mogao_plaza.jpeg",
      title: "莫高窟广场",
      location: "敦煌莫高窟",
      date: "2026.05.20 下午",
      text: "人站在石窟外的广场上，背后是层层崖壁和栈道，抵达感很清楚。"
    },
    GS_C_MOGAO_EAVES_SIDE: {
      region: "gansu",
      file: "gs_c_mogao_eaves_side.jpeg",
      title: "九层楼侧影",
      location: "敦煌莫高窟",
      date: "2026.05.20 下午",
      text: "红色木构贴着山体向上，树影从旁边压过来，让建筑显得更高。"
    },
    GS_C_MOGAO_MURAL_FIGURES: {
      region: "gansu",
      file: "gs_c_mogao_mural_figures.jpeg",
      title: "壁画人物",
      location: "敦煌莫高窟相关展陈",
      date: "2026.05.20 下午",
      text: "人物线条在旧色里仍然清楚，眉眼和衣纹像从很远的时间里留下来。"
    },
    GS_C_MOGAO_HORSE_DETAIL: {
      region: "gansu",
      file: "gs_c_mogao_horse_detail.jpeg",
      title: "壁画里的奔马",
      location: "敦煌莫高窟相关展陈",
      date: "2026.05.20 下午",
      text: "马匹在残损的画面里仍然有速度，褪色反而让那种动势更耐看。"
    },
    GS_C_MOGAO_RIDER_DETAIL: {
      region: "gansu",
      file: "gs_c_mogao_rider_detail.jpeg",
      title: "骑者细部",
      location: "敦煌莫高窟相关展陈",
      date: "2026.05.20 下午",
      text: "骑马人物被保存成一块斑驳的细节，颜色淡了，姿态还在。"
    },
    GS_C_MOGAO_STORY_PANEL: {
      region: "gansu",
      file: "gs_c_mogao_story_panel.jpeg",
      title: "壁画故事",
      location: "敦煌莫高窟相关展陈",
      date: "2026.05.20 下午",
      text: "两个人物在浅色背景里相对而坐，像一个故事被安静截取下来。"
    },
    GS_C_MOGAO_RED_HORSE: {
      region: "gansu",
      file: "gs_c_mogao_red_horse.jpeg",
      title: "红马",
      location: "敦煌莫高窟相关展陈",
      date: "2026.05.20 下午",
      text: "红色马匹在蓝绿底色上向前跃起，残损的边缘让它更像一段时间的切片。"
    },
    GS_C_MOGAO_GATE: {
      region: "gansu",
      file: "gs_c_mogao_gate.jpeg",
      title: "莫高窟牌楼",
      location: "敦煌莫高窟",
      date: "2026.05.20 下午",
      text: "木牌楼立在广场入口，游客从下面经过，正式走进敦煌的下一层。"
    },
    GS_C_MOGAO_LINE_DETAIL: {
      region: "gansu",
      file: "gs_c_mogao_line_detail.jpeg",
      title: "线刻纹样",
      location: "敦煌莫高窟相关展陈",
      date: "2026.05.20 下午",
      text: "细密线条在灰白表面上交织，近看像时间留下的一张纹理地图。"
    },
    GS_C_MOGAO_CLAY_STATUE: {
      region: "gansu",
      file: "gs_c_mogao_clay_statue.jpeg",
      title: "彩塑头像",
      location: "敦煌莫高窟相关展陈",
      date: "2026.05.20 下午",
      text: "彩塑面部还保留着淡淡颜色，安静地把目光停在展厅里。"
    },
    GS_N_CRESCENT_LAKE_GATE: {
      region: "gansu",
      file: "gs_n_crescent_lake_gate.jpeg",
      title: "月牙泉入口",
      location: "敦煌鸣沙山月牙泉",
      date: "2026.05.21 上午",
      text: "牌楼和沙山同在一张画面里，游客套着防沙鞋进出，荒漠旅程也有了日常的入口。"
    }
  }
};

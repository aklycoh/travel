window.TRAVEL_DATA = {
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
        "从洪崖洞的夜色、观音桥的热闹，到山城老街的石阶、雨后校园和一桌火辣饭菜，这一组照片把重庆的高低起伏和烟火气放在一起。",
      dates: "重庆片段",
      location: "洪崖洞、观音桥、山城街巷、重庆校园",
      hero: "IMG_5397",
      featurePhotos: ["IMG_5385", "IMG_5391", "IMG_5406", "IMG_5407", "IMG_5408"],
      themes: ["cq-night", "cq-streets", "cq-nature", "cq-food", "cq-timeline"]
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
      name: "山水校园",
      kicker: "Green",
      title: "雨后树影和灰瓦",
      deck:
        "车窗外的校门、山坡上的绿意和旧屋顶，让这组重庆照片有了安静的一面。",
      hero: "IMG_5406",
      intro:
        "热闹之外，重庆也有很慢的绿色。雨后的路面、山坡上的叶子、灰瓦之间的风，把城市的声音轻轻压低。",
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
    }
  },
  photos: {
    IMG_5270: {
      file: "IMG_5270.jpeg",
      title: "抵达之前",
      location: "飞往成都的路上",
      date: "2023.10.12 下午",
      text: "窗外是一片很亮的云，旅程还没有真正开始，心里已经先空出了一小块地方。"
    },
    IMG_5271: {
      file: "IMG_5271.jpeg",
      title: "清晨同路",
      location: "成都地铁",
      date: "2023.10.13 清晨",
      text: "城市刚醒来的时候，人也还带着一点困意。两个人坐在同一段车厢里，像把这一天慢慢接住。"
    },
    IMG_5273: {
      file: "IMG_5273.jpeg",
      title: "第一碗热汤",
      location: "成都市区",
      date: "2023.10.13 早晨",
      text: "一碗面端上来，热气先把早晨叫醒。味道不必隆重，只要踏实，就已经很好。"
    },
    IMG_5276: {
      file: "IMG_5276.jpeg",
      title: "菜市场的颜色",
      location: "成都市区",
      date: "2023.10.13 早晨",
      text: "摊位挨着摊位，蔬菜和水果把一天铺得很鲜活。这里不是景点，却很像城市真正的开场。"
    },
    IMG_5278: {
      file: "IMG_5278.jpeg",
      title: "树影小路",
      location: "成都公园",
      date: "2023.10.13 上午",
      text: "树荫把路压得很低，脚步也自然慢下来。成都的舒服，有时候就是这样安静的一段路。"
    },
    IMG_5280: {
      file: "IMG_5280.jpeg",
      title: "茶馆的上午",
      location: "成都茶馆",
      date: "2023.10.13 上午",
      text: "竹椅、木桌、半开的天光，时间在这里没有被催促。坐一会儿，就像真正到了成都。"
    },
    IMG_5285: {
      file: "IMG_5285.jpeg",
      title: "老墙与花",
      location: "成都老街",
      date: "2023.10.13 上午",
      text: "灰墙很旧，花却开得很认真。新旧之间没有冲突，只是一起过着日子。"
    },
    IMG_5286: {
      file: "IMG_5286.jpeg",
      title: "苔痕",
      location: "成都老街",
      date: "2023.10.13 上午",
      text: "一角石壁、一点青苔，细小的绿意让老建筑有了呼吸。"
    },
    IMG_5289: {
      file: "IMG_5289.jpeg",
      title: "红灯笼下",
      location: "成都武侯祠一带",
      date: "2023.10.13 上午",
      text: "门前人来人往，红灯笼把入口照得热闹。历史在这里没有沉睡，它和游客一起站在阳光里。"
    },
    IMG_5292: {
      file: "IMG_5292.jpeg",
      title: "一锅热辣",
      location: "成都市区",
      date: "2023.10.13 中午",
      text: "锅底翻着小小的浪，辣味和香气一起升起来。走了一上午，终于可以坐下来，好好吃一顿。"
    },
    IMG_5293: {
      file: "IMG_5293.jpeg",
      title: "竹影",
      location: "成都杜甫草堂一带",
      date: "2023.10.13 下午",
      text: "竹子把光切得很细，风吹过的时候，整片绿色都像在轻声说话。"
    },
    IMG_5295: {
      file: "IMG_5295.jpeg",
      title: "石上文字",
      location: "成都杜甫草堂一带",
      date: "2023.10.13 下午",
      text: "文字刻在石头上，安静得像一句留下来的叮嘱。走近看，时间也慢了下来。"
    },
    IMG_5297: {
      file: "IMG_5297.jpeg",
      title: "夜色刚亮",
      location: "成都街头",
      date: "2023.10.13 夜晚",
      text: "招牌亮起来以后，街道有了另一种表情。白天的城市退后一点，夜晚的成都开始说话。"
    },
    IMG_5298: {
      file: "IMG_5298.jpeg",
      title: "路边小摊",
      location: "成都街头",
      date: "2023.10.13 夜晚",
      text: "小摊前围着人，灯光落在纸牌和笑声上。旅行里最轻的快乐，常常就是停下来买一点吃的。"
    },
    IMG_5301: {
      file: "IMG_5301.jpeg",
      title: "冰粉与夜风",
      location: "成都街头",
      date: "2023.10.13 夜晚",
      text: "夜风里看见冰粉的招牌，忽然觉得这座城市很会照顾人。辣过之后，还有一口清甜。"
    },
    IMG_5309: {
      file: "IMG_5309.jpeg",
      title: "面具的凝视",
      location: "金沙遗址博物馆",
      date: "2023.10.13 夜晚",
      text: "灯光落在面具上，表情像从很远的时间里看过来。那一刻，喧闹都被隔在展柜外面。"
    },
    IMG_5318: {
      file: "IMG_5318.jpeg",
      title: "展厅里的光",
      location: "三星堆博物馆",
      date: "2023.10.14 上午",
      text: "展厅很暗，文物被光单独托起。人们放轻声音，像怕惊动这些古老的形状。"
    },
    IMG_5321: {
      file: "IMG_5321.jpeg",
      title: "金色面具",
      location: "三星堆博物馆",
      date: "2023.10.14 上午",
      text: "金色并不张扬，反而有一种沉静的力量。隔着玻璃看它，像看见一个遥远文明留下的呼吸。"
    },
    IMG_5323: {
      file: "IMG_5323.jpeg",
      title: "青铜的轮廓",
      location: "三星堆博物馆",
      date: "2023.10.14 上午",
      text: "青铜器的线条很奇异，也很坚定。它不像答案，更像一个还在发光的问题。"
    },
    IMG_5329: {
      file: "IMG_5329.jpeg",
      title: "手里的小吃",
      location: "成都街头",
      date: "2023.10.15 清晨",
      text: "用纸袋包着的食物最有旅途感。边走边吃，连赶路也变得亲切。"
    },
    IMG_5331: {
      file: "IMG_5331.jpeg",
      title: "山门石阶",
      location: "青城山一带",
      date: "2023.10.15 上午",
      text: "石阶一级一级向上，山门被树影半遮着。还没有进入深处，心已经先安静了。"
    },
    IMG_5333: {
      file: "IMG_5333.jpeg",
      title: "都江堰的水声",
      location: "都江堰",
      date: "2023.10.15 上午",
      text: "水从山边推过来，颜色很浅，声音却很有力量。站在岸边，会突然理解这里为什么值得被记住。"
    },
    IMG_5336: {
      file: "IMG_5336.jpeg",
      title: "江水绕山",
      location: "都江堰",
      date: "2023.10.15 上午",
      text: "山壁、江水和远处的人群都在同一张照片里。风景很大，人也因此变得轻。"
    },
    IMG_5346: {
      file: "IMG_5346.jpeg",
      title: "水边停留",
      location: "都江堰",
      date: "2023.10.15 上午",
      text: "在水边站一会儿，不急着拍完，也不急着离开。风从江面过来，把人吹得很清醒。"
    },
    IMG_5347: {
      file: "IMG_5347.jpeg",
      title: "古城门前",
      location: "都江堰",
      date: "2023.10.15 中午",
      text: "门楼的线条很繁复，人群从下面慢慢经过。热闹和古意在这里并肩站着。"
    },
    IMG_5349: {
      file: "IMG_5349.jpeg",
      title: "水边合影",
      location: "都江堰",
      date: "2023.10.15 中午",
      text: "背景里是水和树，镜头前是笑起来的人。比起风景，同行的人更像旅程的中心。"
    },
    IMG_5351: {
      file: "IMG_5351.jpeg",
      title: "林间牌坊",
      location: "青城山",
      date: "2023.10.15 下午",
      text: "木牌坊立在林子里，阳光从枝叶间漏下来。山路从这里开始变得有仪式感。"
    },
    IMG_5354: {
      file: "IMG_5354.jpeg",
      title: "石龙",
      location: "青城山",
      date: "2023.10.15 下午",
      text: "石头被摸得有了温度，纹路里积着湿润的青绿。它守在路边，像陪人走过很多年。"
    },
    IMG_5361: {
      file: "IMG_5361.jpeg",
      title: "江边大佛",
      location: "乐山大佛",
      date: "2023.10.16 下午",
      text: "红色山壁贴着江水，大佛在雾气里显得很安稳。人群在脚下移动，山却一直沉默。"
    },
    IMG_5365: {
      file: "IMG_5365.jpeg",
      title: "江对岸的塔",
      location: "乐山",
      date: "2023.10.16 下午",
      text: "塔藏在一片绿色里，隔着江看过去，像一个安静的句号。"
    },
    IMG_5368: {
      file: "IMG_5368.jpeg",
      title: "花边街口",
      location: "乐山街头",
      date: "2023.10.16 傍晚",
      text: "街口摆着花，旁边就是来来往往的人。旅途中这样的角落很小，却让城市有了温度。"
    },
    IMG_5369: {
      file: "IMG_5369.jpeg",
      title: "晚饭之后",
      location: "乐山",
      date: "2023.10.16 夜晚",
      text: "桌上还剩一点汤和油光，像一顿饭刚刚结束时的余温。吃饱以后，夜路也变得柔软。"
    },
    IMG_5371: {
      file: "IMG_5371.jpeg",
      title: "夜里的小店",
      location: "乐山",
      date: "2023.10.16 夜晚",
      text: "红色招牌亮在街边，桌椅还没收。地方小，却有一种让人放心坐下来的热闹。"
    },
    IMG_5375: {
      file: "IMG_5375.jpeg",
      title: "山里的相遇",
      location: "峨眉山",
      date: "2023.10.17 上午",
      text: "雾气压在树枝上，山里的生命忽然出现在眼前。那一瞬间，路途多了一点野性的安静。"
    },
    IMG_5379: {
      file: "IMG_5379.jpeg",
      title: "山路有光",
      location: "峨眉山",
      date: "2023.10.17 中午",
      text: "阳光落在山路尽头，雾还没有完全散开。走在这里，会觉得疲惫也有一点清亮。"
    },
    IMG_5381: {
      file: "IMG_5381.jpeg",
      title: "一盘青椒",
      location: "峨眉山下",
      date: "2023.10.17 下午",
      text: "绿色的菜端上桌，带着锅气和一点辛香。山路之后，家常味道格外让人踏实。"
    },
    IMG_5383: {
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
      title: "灰瓦和树",
      location: "重庆校园",
      date: "白天",
      text: "屋顶层层压在绿色之间，像被山坡轻轻托住。重庆的安静，有时候藏在这样的高处。"
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
    }
  }
};

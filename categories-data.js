// بيانات التصنيفات والقطع الافتراضية لدولاب العروسة (Wedding Wardrobe Taxonomy)
// مستخرجة من دراسة شاملة لاحتياجات جهاز العروسة وتصنيفات المتاجر في مصر

(function() {
  const defaultCategories = {
  winter: {
    home: [
      {
        id: "w_h_pajamas",
        nameAr: "بيجامات شتوي",
        nameEn: "Pajama Sets",
        items: [
          "بيجامة كم طويل · Long-sleeve pajama",
          "بيجامة بولار / فليس · Fleece pajama",
          "بيجامة قطيفة · Velvet pajama",
          "بيجامة كاروه بياقة · Flannel pajama",
          "بيجامة قطن شتوي · Cotton long pajama",
          "بيجامة حرارية (ثيرمال) · Thermal pajama",
          "توب بيجامة منفصل · Pajama top",
          "بنطلون بيجامة منفصل · Pajama pants"
        ]
      },
      {
        id: "w_h_nightwear",
        nameAr: "قمصان نوم شتوي",
        nameEn: "Nightwear",
        items: [
          "قميص نوم كم طويل · Long-sleeve nightgown",
          "قميص نوم قطيفة · Velvet nightgown",
          "قميص نوم طويل · Long nightgown",
          "طقم قميص وروب · Nightgown & robe set",
          "فستان نوم دافئ · Warm sleep dress"
        ]
      },
      {
        id: "w_h_robes",
        nameAr: "أرواب وبرانس",
        nameEn: "Robes & Bathrobes",
        items: [
          "روب قطيفة طويل · Long velvet robe",
          "روب فليس دافئ · Fleece robe",
          "روب بكابيشون · Hooded robe",
          "برنس حمام كامل · Bathrobe set",
          "روب ستان مبطن · Lined satin robe"
        ]
      },
      {
        id: "w_h_loungewear",
        nameAr: "لبس بيت كاجوال",
        nameEn: "Loungewear & Homewear",
        items: [
          "هودي دافئ · Hoodie",
          "سويتشيرت بيتي · Sweatshirt",
          "تيشرت بيتي كم طويل · Long-sleeve T-shirt",
          "بنطلون جوجر بيتي · Joggers",
          "ترينج بيتي دافئ · Tracksuit",
          "ليجن بيتي · Leggings",
          "كارديجان بيتي دافئ · Home cardigan",
          "طقم بيتي كاجوال · Lounge set"
        ]
      },
      {
        id: "w_h_sportswear",
        nameAr: "لبس رياضة بيتي",
        nameEn: "Home Sportswear",
        items: [
          "ليجن رياضي مبطن · Thermal sports leggings",
          "توب رياضي كم طويل · Long-sleeve sport top",
          "ترينج رياضي شتوي · Winter sport tracksuit",
          "برا رياضي داعم · Sports bra"
        ]
      },
      {
        id: "w_h_galabeyas",
        nameAr: "جلاليب وفساتين بيتي",
        nameEn: "Galabeyas & Home Dresses",
        items: [
          "جلابية قطيفة شياكة · Velvet galabeya",
          "جلابية صوف ناعم · Wool galabeya",
          "عباية بيتي مبطنة · Home abaya",
          "قفطان بيتي أنيق · Kaftan",
          "فستان بيتي شتوي · Winter house dress"
        ]
      },
      {
        id: "w_h_prayer",
        nameAr: "لبس الصلاة",
        nameEn: "Prayer Wear",
        items: [
          "إسدال صلاة شتوي ناعم · Winter isdal",
          "إسدال قطعتين (جيبة وخمار) · Two-piece isdal",
          "خمار صلاة مبطن · Prayer khimar",
          "جيبة صلاة واسعة · Prayer skirt"
        ]
      },
      {
        id: "w_h_lingerie",
        nameAr: "لانجيري وملابس داخلية",
        nameEn: "Lingerie & Underwear",
        items: [
          "طقم لانجيري عرايس · Bridal lingerie set",
          "برا مبطنة · Padded bra",
          "فانلة حرارية (ثيرمال) · Thermal undershirt",
          "فانلة داخلي قطن ناعم · Cotton undershirt",
          "كلوت قطن يومي · Cotton panties",
          "كومبينيزون تحت اللبس · Slip / Underskirt",
          "بادي داخلي قطن · Cotton body",
          "مشد جسم مريح · Shapewear"
        ]
      },
      {
        id: "w_h_slippers",
        nameAr: "شباشب وشرابات بيتي",
        nameEn: "Home Shoes & Socks",
        items: [
          "شبشب فرو شياكة · Fur slippers",
          "سليبر مقفول دافئ · Closed slippers",
          "بوت بيتي فرو · Home slipper boots",
          "شراب صوف دافئ · Wool socks",
          "شراب قطيفة فرو · Fluffy socks",
          "شبشب حمام مريح · Bathroom slides"
        ]
      }
    ],
    outdoor: [
      {
        id: "w_o_tops",
        nameAr: "بلوزات وتوبات",
        nameEn: "Tops & Blouses",
        items: [
          "بلوزة خروج أنيقة · Elegant blouse",
          "قميص شتوي كلاسيك · Classic shirt",
          "تيشرت خروج كم طويل · Long-sleeve T-shirt",
          "بادي هاي كول شتوي · Turtleneck body",
          "بادي بيسك سادة · Basic body",
          "تونيك طويل شتوي · Long tunic",
          "سويتشيرت خروج كاجوال · Sweatshirt",
          "هودي خروج أوفر سايز · Oversized hoodie"
        ]
      },
      {
        id: "w_o_knitwear",
        nameAr: "تريكو وبلوفرات",
        nameEn: "Knitwear & Sweaters",
        items: [
          "بلوفر أوفر سايز · Oversized pullover",
          "كارديجان شتوي طويل · Long cardigan",
          "كارديجان قصير بأزرار · Buttoned cardigan",
          "بلوفر هاي كول صوف · Turtleneck sweater",
          "فيست تريكو شياكة · Knit vest",
          "طقم تريكو خروج · Knit co-ord set"
        ]
      },
      {
        id: "w_o_outerwear",
        nameAr: "جواكت وبالطوهات",
        nameEn: "Jackets & Outerwear",
        items: [
          "بالطو صوف جوخ كلاسيك · Classic wool coat",
          "ترينش كوت أنيق · Trench coat",
          "جاكيت بافر منفوخ دافئ · Puffer jacket",
          "جاكيت جلد كلاسيك · Leather jacket",
          "جاكيت جينز شتوي مبطن · Denim jacket",
          "بليزر خروج رسمي / كاجوال · Blazer",
          "جاكيت فرو ناعم · Fur / Teddy jacket",
          "باركا شتوية ضد المطر · Winter parka",
          "بونشو / كاب صوف · Poncho / Cape",
          "جيليه منفوخ بدون أكمام · Puffer gilet"
        ]
      },
      {
        id: "w_o_bottoms",
        nameAr: "بناطيل وجيب",
        nameEn: "Bottoms & Skirts",
        items: [
          "بنطلون جينز كحلي/أزرق · Blue jeans",
          "بنطلون جينز أسود · Black jeans",
          "بنطلون قماش وايد ليج واسع · Wide-leg trousers",
          "بنطلون قماش كلاسيك مستقيم · Straight trousers",
          "بنطلون كارجو كاجوال · Cargo pants",
          "جيبة بليسيه شتوية · Pleated skirt",
          "جيبة جينز ماكسي · Denim maxi skirt",
          "جيبة صوف / جوخ · Wool skirt",
          "جيبة جلد أنيقة · Leather skirt"
        ]
      },
      {
        id: "w_o_dresses",
        nameAr: "فساتين وجمبسوت",
        nameEn: "Dresses & Jumpsuits",
        items: [
          "فستان تريكو شتوي دافئ · Knit dress",
          "فستان ماكسي كم طويل · Long-sleeve maxi dress",
          "فستان قميص شتوي · Shirt dress",
          "فستان قطيفة للمناسبات · Velvet occasion dress",
          "فستان سواريه شتوي · Evening dress",
          "جمبسوت خروج أنيق · Jumpsuit",
          "سالوبيت جينز أو قماش · Salopette / Overall"
        ]
      },
      {
        id: "w_o_abayas",
        nameAr: "عبايات ولبس محجبات",
        nameEn: "Abayas & Modest Outerwear",
        items: [
          "عباية خروج سوداء شياكة · Black outdoor abaya",
          "عباية صوف / كريب ألوان · Wool / Crepe colored abaya",
          "تونيك طويل للمحجبات · Long modest tunic",
          "فستان عباية مودرن · Modern abaya dress",
          "بالطو تركي طويل للمحجبات · Long modest coat"
        ]
      },
      {
        id: "w_o_hijab",
        nameAr: "طرح وإيشاربات",
        nameEn: "Hijab & Scarves",
        items: [
          "طرحة شيفون كريب سادة · Chiffon crepe scarf",
          "شال صوف / كشمير شتوي دافئ · Cashmere / Wool shawl",
          "خمار خروج ناعم · Outdoor khimar",
          "بونيه قطن تثبيت · Underscarf cap",
          "توربان جاهز · Turban",
          "كوفية صوف للرقبة · Winter neck scarf"
        ]
      },
      {
        id: "w_o_sportswear",
        nameAr: "لبس رياضة خروج",
        nameEn: "Outdoor Sportswear",
        items: [
          "ترينج خروج رياضي دافئ · Winter active tracksuit",
          "هودي رياضي واسع · Sports hoodie",
          "بنطلون سويت بانتس قطن · Sweatpants",
          "كوتشي جري خروج مريح · Running sneakers"
        ]
      },
      {
        id: "w_o_shoes",
        nameAr: "أحذية وجزم",
        nameEn: "Shoes & Boots",
        items: [
          "هاف بوت كعب مريح · Ankle boots",
          "بوت طويل للركبة · Knee-high boots",
          "كوتشي أبيض بيسك · White sneakers",
          "كوتشي كاجوال ألوان · Casual sneakers",
          "حذاء لوفر أنيق · Loafers",
          "حذاء باليرينا فلات مريح · Ballerina flats",
          "حذاء كعب عالي مناسبات · High heels",
          "حذاء كلاسيك للمشاوير · Classic formal shoes"
        ]
      },
      {
        id: "w_o_bags",
        nameAr: "شنط ومحافظ",
        nameEn: "Bags & Wallets",
        items: [
          "شنطة يد شياكة متوسطة · Medium handbag",
          "شنطة كروس عملية يومية · Crossbody bag",
          "شنطة كتف تريند · Shoulder bag",
          "شنطة توت باج واسعة · Tote bag",
          "شنطة ضهر جلد أنيقة · Leather backpack",
          "شنطة سواريه / كلاتش · Clutch / Evening bag",
          "محفظة نقود وكروت أنيقة · Wallet / Cardholder"
        ]
      },
      {
        id: "w_o_accessories",
        nameAr: "إكسسوارات ومكملات",
        nameEn: "Accessories & Details",
        items: [
          "جوانتي جلد أو صوف ناعم · Gloves",
          "طاقية صوف (أيس كاب) · Beanie",
          "بيريه صوف شياكة · French beret",
          "حزام جلد كلاسيك أو تريند · Leather belt",
          "شراب كولون حراري أو خفيف · Tights",
          "طقم إكسسوار شياكة (سلسلة وحلق) · Jewelry set",
          "ساعة يد أنيقة · Watch",
          "نظارة شمس أصلية · Sunglasses"
        ]
      }
    ]
  },
  summer: {
    home: [
      {
        id: "s_h_pajamas",
        nameAr: "بيجامات صيفي",
        nameEn: "Summer Pajamas",
        items: [
          "بيجامة نص كم قطن · Short-sleeve cotton pajama",
          "بيجامة شورت خفيفة · Shorts pajama set",
          "بيجامة برمودا قطن · Bermuda pajama set",
          "بيجامة كت / حمالات ناعمة · Strap tank pajama",
          "بيجامة ستان حرير · Silk satin pajama",
          "بيجامة قطن بياقة قميص · Shirt-collar cotton pajama",
          "طقم هوت شورت صيفي · Hot-shorts set",
          "بيجامة كابري 3/4 · Capri pajama"
        ]
      },
      {
        id: "s_h_nightwear",
        nameAr: "قمصان نوم صيفي",
        nameEn: "Nightwear & Sleepwear",
        items: [
          "قميص نوم ستان قصير · Short satin nightgown",
          "قميص نوم ستان طويل ناعم · Long satin nightgown",
          "قميص نوم دانتيل شياكة · Lace nightgown",
          "بيبي دول أنيق · Babydoll",
          "فستان نوم قطن صيفي مريح · Cotton sleep dress",
          "طقم قميص نوم وروب ستان · Nightgown & satin robe set"
        ]
      },
      {
        id: "s_h_robes",
        nameAr: "أرواب صيفي",
        nameEn: "Summer Robes",
        items: [
          "روب ستان حرير شياكة · Silk satin robe",
          "روب دانتيل عرايس ناعم · Bridal lace robe",
          "روب كيمونو مشجر صيفي · Floral kimono robe",
          "روب قطن خفيف للصباح · Light cotton robe",
          "برنس حمام خفيف قطن · Light bathrobe"
        ]
      },
      {
        id: "s_h_loungewear",
        nameAr: "لبس بيت كاجوال خفيف",
        nameEn: "Summer Loungewear",
        items: [
          "تيشرت بيتي نص كم قطن · Short-sleeve T-shirt",
          "توب كت صيفي مريح · Tank top",
          "كروب توب بيتي · Crop top",
          "شورت قطن مريح · Cotton shorts",
          "بنطلون برمودا بيتي · Bermuda shorts",
          "بنطلون قطن خفيف واسع · Light cotton pants",
          "ليجن قصير (كابري) بيتي · Capri leggings",
          "طقم بيتي كاجوال صيفي · Summer lounge set"
        ]
      },
      {
        id: "s_h_sportswear",
        nameAr: "لبس رياضة بيتي خفيف",
        nameEn: "Home Sportswear",
        items: [
          "شورت رياضي مريح · Sports shorts",
          "توب رياضي كت خفيف · Sleeveless sport top",
          "برا رياضي قطني ناعم · Cotton sports bra",
          "ليجن رياضي خفيف · Light sports leggings"
        ]
      },
      {
        id: "s_h_galabeyas",
        nameAr: "جلاليب وفساتين بيتي",
        nameEn: "Galabeyas & Home Dresses",
        items: [
          "جلابية قطن صيفي باردة · Cool cotton galabeya",
          "فستان بيتي صيفي قصير · Short summer house dress",
          "فستان بيتي ماكسي قطن · Maxi summer house dress",
          "قفطان بيتي صيفي ملون · Colorful summer kaftan",
          "عباية بيتي ناعمة وخفيفة · Light home abaya"
        ]
      },
      {
        id: "s_h_prayer",
        nameAr: "لبس الصلاة صيفي",
        nameEn: "Prayer Wear",
        items: [
          "إسدال صلاة قطن خفيف بارد · Light cotton isdal",
          "إسدال فسكوز قطعتين ناعم · Viscose two-piece isdal",
          "خمار صلاة خفيف بارد · Light prayer khimar",
          "جيبة صلاة صيفية واسعة · Summer prayer skirt"
        ]
      },
      {
        id: "s_h_lingerie",
        nameAr: "لانجيري وملابس داخلية صيفي",
        nameEn: "Lingerie & Underwear",
        items: [
          "طقم لانجيري عرايس رقيق · Delicate bridal lingerie",
          "برا بدون حمالات (سترابلس) · Strapless bra",
          "برالت دانتيل مريحة · Lace bralette",
          "برا قطن صيفي بدون سلك · Wireless cotton bra",
          "كلوت سيملس بدون خياطة · Seamless panties",
          "شورت أمان قطن تحت الفساتين · Safety cotton shorts",
          "فانلة كت قطن صيفي ناعم · Cotton camisole",
          "بودي سوت لانجيري دانتيل · Lace lingerie bodysuit"
        ]
      },
      {
        id: "s_h_slippers",
        nameAr: "شباشب صيفي بيتي",
        nameEn: "Home Slides & Slippers",
        items: [
          "سليبر بيتي مريح شياكة · Soft home slides",
          "شبشب صباع قطني أو جلد · Flip-flops",
          "شبشب حمام مريح مانع للانزلاق · Anti-slip bathroom slides",
          "شراب قطن خفيف كاحل (أنكل) · Light ankle cotton socks"
        ]
      }
    ],
    outdoor: [
      {
        id: "s_o_tops",
        nameAr: "بلوزات وتوبات صيفي",
        nameEn: "Tops & Blouses",
        items: [
          "تيشرت قطن بيسك نص كم · Basic cotton T-shirt",
          "بلوزة شيفون / فسكوز خفيفة · Light chiffon blouse",
          "قميص كتان صيفي بارد · Linen summer shirt",
          "قميص أبيض كلاسيك أوفر سايز · White oversized shirt",
          "توب بيسك بدون أكمام · Basic sleeveless top",
          "كروب توب صيفي كاجوال · Casual crop top",
          "بادي نص كم قطن ناعم · Short-sleeve cotton body",
          "بودي سوت خروج ناعم · Casual bodysuit",
          "تونيك كتان طويل صيفي · Long linen tunic"
        ]
      },
      {
        id: "s_o_layers",
        nameAr: "طبقات خفيفة وكيمونو",
        nameEn: "Light Layers & Kimonos",
        items: [
          "كيمونو مشجر صيفي شياكة · Printed summer kimono",
          "كيمونو كتان أو شيفون سادة · Plain linen kimono",
          "كارديجان صيفي خفيف طويل · Light long cardigan",
          "بليزر كتان صيفي أنيق · Linen summer blazer",
          "جاكيت جينز صيفي خفيف · Light denim jacket",
          "أوفر شيرت قطن أو كتان · Cotton/Linen overshirt",
          "فيست كتان بدون أكمام · Linen waistcoat / vest",
          "بوليرو خفيف للتغطية · Light bolero shrug"
        ]
      },
      {
        id: "s_o_bottoms",
        nameAr: "بناطيل وجيب صيفي",
        nameEn: "Bottoms & Skirts",
        items: [
          "بنطلون كتان واسع مريح · Wide-leg linen trousers",
          "بنطلون جينز صيفي خفيف واسع · Light wide-leg jeans",
          "بنطلون قماش صيفي ستايلش · Casual summer trousers",
          "بنطلون كارجو خفيف كاجوال · Light cargo pants",
          "شورت كتان أو جينز للمصيف · Linen/Denim shorts",
          "جيبة ماكسي مشجرة صيفية · Floral maxi skirt",
          "جيبة بليسيه صيفية ناعمة · Summer pleated skirt",
          "جيبة كتان مستقيمة واسعة · Linen straight skirt",
          "جيبة جينز صيفية خفيفة · Light denim skirt"
        ]
      },
      {
        id: "s_o_dresses",
        nameAr: "فساتين وجمبسوت صيفي",
        nameEn: "Dresses & Jumpsuits",
        items: [
          "فستان ماكسي مشجر صيفي · Floral maxi dress",
          "فستان كتان صيفي بارد شياكة · Linen summer dress",
          "فستان قميص قطني للمشاوير · Cotton shirt dress",
          "فستان ستان سليب دريس رقيق · Satin slip dress",
          "فستان أبيض بوهيمي للمصيف · White bohemian resort dress",
          "فستان سواريه صيفي أنيق · Summer evening dress",
          "جمبسوت كتان أو قماش خفيف · Light summer jumpsuit",
          "بلاي سوت صيفي كاجوال · Casual summer playsuit",
          "طقم كامل متطابق (كو-أورد) · Summer co-ord set"
        ]
      },
      {
        id: "s_o_abayas",
        nameAr: "عبايات صيفية ومحتشمة",
        nameEn: "Summer Abayas & Modest Wear",
        items: [
          "عباية كتان صيفية باردة ألوان · Colored linen abaya",
          "عباية كريب صيفي ناعمة سادة · Light crepe abaya",
          "عباية كيمونو صيفية مفتوحة · Open kimono abaya",
          "تونيك طويل محتشم صيفي · Modest summer long tunic",
          "فستان عباية مودرن للمصيف · Modern resort abaya dress"
        ]
      },
      {
        id: "s_o_hijab",
        nameAr: "طرح وإيشاربات صيفي",
        nameEn: "Hijab & Scarves",
        items: [
          "طرحة شيفون كريب خفيفة · Light chiffon crepe scarf",
          "طرحة قطن كويتية باردة · Cool modal/cotton scarf",
          "طرحة جيرسيه صيفي مريحة · Jersey summer scarf",
          "بونيه قطن بارد مهوي · Breathable cotton underscarf",
          "توربان قطن صيفي خفيف · Light summer turban",
          "بندانة قطن صيفية · Cotton bandana"
        ]
      },
      {
        id: "s_o_beachwear",
        nameAr: "لبس بحر ومصيف",
        nameEn: "Swimwear & Beach Resort",
        items: [
          "بوركيني محتشم تريند وسريع الجفاف · Modest burkini",
          "كاش مايوه شياكة طويل · Long beach cover-up",
          "كاش مايوه كيمونو شفاف · Sheer kimono cover-up",
          "قفطان بحر قطن ملون · Colorful beach kaftan",
          "مايوه سباحة / بكيني · Swimsuit / Bikini",
          "برنيطة قش كبيرة للشمس · Straw sun hat",
          "شنطة بحر قش واسعة · Straw beach bag",
          "فوطة بحر قطن ناعمة · Beach towel"
        ]
      },
      {
        id: "s_o_sportswear",
        nameAr: "لبس رياضة صيفي خروج",
        nameEn: "Outdoor Sportswear",
        items: [
          "ترينج صيفي خفيف للمشاوير · Light summer active set",
          "توب رياضي مهوي · Breathable sport top",
          "ليجن رياضي صيفي مريح · Summer sports leggings",
          "كوتشي رياضي شبك صيفي خفيف · Breathable mesh sneakers"
        ]
      },
      {
        id: "s_o_shoes",
        nameAr: "صنادل وأحذية صيفية",
        nameEn: "Sandals & Summer Shoes",
        items: [
          "صندل فلات شياكة للمشاوير · Flat chic sandals",
          "صندل كعب عالي مناسبات صيفي · Heeled strap sandals",
          "سليبر خروج تريند شيك · Outdoor chic slides",
          "كوتشي أبيض صيفي خفيف · White light sneakers",
          "حذاء إسبادريل صيفي قش · Espadrilles",
          "حذاء ميول مفتوح من الخلف · Open-back mules",
          "صندل ويدج صيفي مريح · Wedges",
          "حذاء باليرينا صيفية فلات · Ballerina flats"
        ]
      },
      {
        id: "s_o_bags",
        nameAr: "شنط صيفية",
        nameEn: "Summer Bags",
        items: [
          "شنطة قش صيفية شياكة · Straw / Rattan summer bag",
          "شنطة توت باج قماش خفيفة · Canvas tote bag",
          "شنطة كروس صغيرة للمشاوير · Mini crossbody bag",
          "شنطة كتف ألوان صيفية مبهجة · Summer bright shoulder bag",
          "شنطة كلاتش صيفية للسهرة · Summer evening clutch",
          "محفظة صغيرة للمصيف · Compact summer wallet"
        ]
      },
      {
        id: "s_o_accessories",
        nameAr: "إكسسوارات ونظارات صيفية",
        nameEn: "Summer Accessories",
        items: [
          "نظارة شمسية كشخة لحماية العين · Designer sunglasses",
          "كاب قطن للحماية من الشمس · Cotton baseball cap",
          "طقم إكسسوارات صيفية (سلاسل وخواتم) · Summer jewelry set",
          "خلخال رقيق للقدم · Delicate anklet",
          "أسورة يد (غويشة) أنيقة · Elegant bracelet",
          "حزام جلد أو قش صيفي · Summer belt",
          "توك وبنس شعر مميزة · Hair accessories & clips",
          "دبابيس طرحة مغناطيسية شياكة · Magnetic scarf pins"
        ]
      }
    ]
  }
};

const presetColors = [
  { en: "Black", ar: "أسود", hex: "#000000" },
  { en: "White", ar: "أبيض", hex: "#FFFFFF" },
  { en: "Off-white", ar: "أوف وايت", hex: "#F5F0E1" },
  { en: "Beige", ar: "بيج", hex: "#D9C3A5" },
  { en: "Camel", ar: "جملي / كاميل", hex: "#C19A6B" },
  { en: "Brown", ar: "بني", hex: "#6F4E37" },
  { en: "Grey", ar: "رمادي (رصاصي)", hex: "#8E8E8E" },
  { en: "Navy", ar: "كحلي", hex: "#1F2A44" },
  { en: "Blue", ar: "أزرق زوهري", hex: "#1E5AA8" },
  { en: "Baby blue", ar: "لبني بيبي بلو", hex: "#A7C7E7" },
  { en: "Turquoise", ar: "تركواز", hex: "#30C5C0" },
  { en: "Petrol", ar: "بترولي", hex: "#134E5E" },
  { en: "Green", ar: "أخضر", hex: "#2E7D32" },
  { en: "Olive", ar: "زيتي", hex: "#708238" },
  { en: "Mint", ar: "منت جرين", hex: "#A8E6CF" },
  { en: "Red", ar: "أحمر", hex: "#C62828" },
  { en: "Burgundy", ar: "نبيتي / مارون", hex: "#800020" },
  { en: "Pink", ar: "بمبي بينك", hex: "#F4A6C1" },
  { en: "Dusty rose", ar: "كشمير / روز", hex: "#DCAE96" },
  { en: "Fuchsia", ar: "فوشيا", hex: "#D6338A" },
  { en: "Lilac", ar: "موف لافندر", hex: "#C8A2C8" },
  { en: "Purple", ar: "بنفسجي / باذنجاني", hex: "#6A1B9A" },
  { en: "Mustard", ar: "مسطردة", hex: "#D4A017" },
  { en: "Yellow", ar: "أصفر", hex: "#F9D648" },
  { en: "Orange", ar: "برتقالي / خوخي", hex: "#F57C00" },
  { en: "Gold", ar: "ذهبي", hex: "#D4AF37" },
  { en: "Silver", ar: "فضي", hex: "#C0C0C0" },
  { en: "Multicolor", ar: "مشجر / ملون", hex: "gradient" }
];

if (typeof window !== 'undefined') {
  window.defaultCategories = defaultCategories;
  window.presetColors = presetColors;
}
})();

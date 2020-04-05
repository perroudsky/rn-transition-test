const POSTS = [
  {
    id: "7",
    productName: "Pull vert Bohemian Rhapsody",
    brand: "& Other Stories",
    mainImage:
      "https://lp.stories.com/app005prod?set=source[01_0657545_045_3],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[201910301348]&call=url[file:/product/zoom]",
    otherImages: [
      "https://lp.stories.com/app005prod?set=source[01_0657545_045_4],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[201910301348]&call=url[file:/product/zoom]",
      "https://lp.stories.com/app005prod?set=source[02_0657545_045_1],type[PRODUCT],device[hdpi],quality[80],ImageVersion[201910101508]&call=url[file:/product/zoom]",
      "https://lp.stories.com/app005prod?set=source[01_0657545_045_2],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[201910301348]&call=url[file:/product/zoom]",
    ],
    price: "285 €",
    shop: null,
    link:
      "https://www.stories.com/en_eur/clothing/knitwear/sweaters/product.mock-neck-sweater-green.0657545045.html",
    description:
      "Straight fit knit sweater with a mock neck and off shoulder seams.",
  },
  {
    id: "8",
    productName: "Robe noire",
    brand: "& Other Stories",
    mainImage:
      "https://www.stories.com/content/dam/Stories/Images/201910/campaigns/1944-101/IM_19_44_021.jpg",
    otherImages: [
      "https://lp.stories.com/app005prod?set=source[01_0812474_001_001],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019102]&call=url[file:/product/zoom]",
      "https://lp.stories.com/app005prod?set=source[01_0812474_001_201],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019102]&call=url[file:/product/zoom]",
      "https://lp.stories.com/app005prod?set=source[01_0812474_001_209],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2019102]&call=url[file:/product/zoom]",
      "https://lp.stories.com/app005prod?set=source[02_0812474_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2019103]&call=url[file:/product/zoom]",
    ],
    price: "285 €",
    shop: null,
    link:
      "https://www.stories.com/en_eur/clothing/dresses/mini-dresses/product.velvet-floral-crystal-button-mini-dress-black.0828835001.html",
    description:
      "Mock neck velvet mini dress with gently gathered sleeves and straight '60s silhouette, adorned with crystal diamanté flower motif button closures.",
  },
  {
    id: "10",
    productName: "Emilie Zip-Up Collared Jacket",
    brand: "Usisi",
    mainImage:
      "https://cdn-images.farfetch-contents.com/usisi-emilie-zip-up-collared-jacket_14184353_22881296_800.jpg?c=2",
    otherImages: [
      "https://cdn-images.farfetch-contents.com/usisi-emilie-zip-up-collared-jacket_14184353_22881293_800.jpg?c=2",
      "https://cdn-images.farfetch-contents.com/usisi-emilie-zip-up-collared-jacket_14184353_22881301_800.jpg?c=2",
      "https://cdn-images.farfetch-contents.com/usisi-emilie-zip-up-collared-jacket_14184353_22881284_800.jpg?c=2",
      "https://cdn-images.farfetch-contents.com/usisi-emilie-zip-up-collared-jacket_14184353_22881289_800.jpg?c=2",
    ],
    price: "455 €",
    shop: "Browns Fashion",
    link:
      "https://www.brownsfashion.com/de/shopping/usisi-emilie-zip-up-collared-jacket-14184353",
    description:
      "This black USISI Emilie zip-up collared jacket has been crafted from a stretch cotton fabric and features long flared sleeves, a collar, zip front, waist tie fastening, belt loops, side pockets and fold over front pockets. We love a piece that can cinch like this USISI number, and thus, it would be a total waist of time for you not to invest in it.",
  },
  {
    id: "2",
    productName: "T-shirt rouge 'Paris'",
    brand: "Givenchy",
    mainImage:
      "https://img.ssensemedia.com/images/b_white/c_scale,h_820/f_auto,dpr_1.0/201278M213092_4/givenchy-t-shirt-rouge-paris.jpg",
    otherImages: [
      "https://img.ssensemedia.com/images/b_white/c_scale,h_820/f_auto,dpr_2.0/201278M213092_2/givenchy-t-shirt-rouge-paris.jpg",
      "https://img.ssensemedia.com/images/b_white/c_scale,h_820/f_auto,dpr_2.0/201278M213092_3/givenchy-t-shirt-rouge-paris.jpg",
      "https://img.ssensemedia.com/images/b_white/c_scale,h_820/f_auto,dpr_2.0/201278M213092_4/givenchy-t-shirt-rouge-paris.jpg",
      "https://img.ssensemedia.com/images/b_white/c_scale,h_820/f_auto,dpr_2.0/201278M213092_5/givenchy-t-shirt-rouge-paris.jpg",
    ],
    price: "320 €",
    shop: "Ssense",
    link:
      "https://www.ssense.com/fr-fr/hommes/produit/givenchy/t-shirt-rouge-paris/4513831",
    description:
      "T-shirt à manches courtes en jersey de coton rouge. Col ras du cou en maille côtelée. Logo noir imprimé à la poitrine.",
  },
  {
    id: "1",
    productName: "JIL SANDER STRIPED MOHAIR KNIT",
    brand: "Jil Sander",
    mainImage:
      "https://media.endclothing.com/media/catalog/product/2/1/21-08-2019_jilsander_stripedmohairknit_opengrey_jsmp752025-mpy19078075_bb_1.jpg",
    otherImages: [
      "https://media.endclothing.com/media/catalog/product/2/1/21-08-2019_jilsander_stripedmohairknit_opengrey_jsmp752025-mpy19078075_bb_2.jpg",
      "https://media.endclothing.com/media/catalog/product/2/1/21-08-2019_jilsander_stripedmohairknit_opengrey_jsmp752025-mpy19078075_bb_3.jpg",
      "https://media.endclothing.com/media/catalog/product/2/1/21-08-2019_jilsander_stripedmohairknit_opengrey_jsmp752025-mpy19078075_bb_m1.jpg",
      "https://media.endclothing.com/media/catalog/product/2/1/21-08-2019_jilsander_stripedmohairknit_opengrey_jsmp752025-mpy19078075_bb_m3.jpg",
    ],
    price: "770 €",
    shop: "End Clothing",
    link:
      "https://www.endclothing.com/gb/jil-sander-striped-mohair-knit-jsmp752025-mpy19078075.html",
    description: "",
  },
  {
    id: "12",
    productName: "Grey Kayano 5 360 Liteshow Sneaker",
    brand: "Asics",
    mainImage:
      "https://cdn-images.farfetch-contents.com/asics-grey-kayano-5-360-liteshow-sneakers_14570477_23001823_800.jpg?c=2",
    otherImages: [
      "https://cdn-images.farfetch-contents.com/asics-grey-kayano-5-360-liteshow-sneakers_14570477_23001819_800.jpg?c=2",
      "https://cdn-images.farfetch-contents.com/asics-grey-kayano-5-360-liteshow-sneakers_14570477_23001825_800.jpg?c=2",
      "https://cdn-images.farfetch-contents.com/asics-grey-kayano-5-360-liteshow-sneakers_14570477_23001826_800.jpg?c=2",
      "https://cdn-images.farfetch-contents.com/asics-grey-kayano-5-360-liteshow-sneakers_14570477_23001821_800.jpg?c=2",
    ],
    price: "187 €",
    shop: "Browns Fashion",
    link:
      "https://www.brownsfashion.com/de/shopping/asics-grey-kayano-5-360-liteshow-sneakers-14570477",
    description:
      "These grey Asics Kayano 5 360 Liteshow sneakers have been crafted with a lightweight mesh. Featuring green accents, this pair has a lace-up front fastening, embroidered logo on the tongue, sides and backs, rubber soles with gel bottoms and silver leather stripes on the side walls. We’re not ones to judge how your mates get their kicks, but you get yours from Asics.",
  },
  {
    id: "11",
    productName: "Baskets en cuir métallisé et en résille P-6000",
    brand: "Nike",
    mainImage:
      "https://cache.net-a-porter.com/images/products/1187353/1187353_in_pp.jpg",
    otherImages: [
      "https://cache.net-a-porter.com/images/products/1187353/1187353_fr_pp.jpg",
      "https://cache.net-a-porter.com/images/products/1187353/1187353_ou_pp.jpg",
      "https://cache.net-a-porter.com/images/products/1187353/1187353_bk_pp.jpg",
      "https://cache.net-a-porter.com/images/products/1187353/1187353_cu_pp.jpg",
    ],
    price: "110 €",
    shop: "Net-a-Porter",
    link:
      "https://www.net-a-porter.com/fr/fr/product/1187353/nike/baskets-en-cuir-metallise-et-en-resille-p-6000",
    description:
      "Les baskets P-6000 sont inspirées du modèle Pegasus iconique de Nike datant des années 80. Cette version est réalisée à partir d'empiècements de cuir métallisé et de résille respirante, et repose sur une semelle intercalaire rembourrée en mousse qui vous offrira un maintien léger. Portez votre paire avec tout, des pantalons slim aux robes fleuries.",
  },
  {
    id: "5",
    productName: "Manteau réversible vert bouteille",
    brand: "Acne",
    mainImage:
      "https://www.acnestudios.com/on/demandware.static/-/Sites-acne-product-catalog/default/dw51ebcbb8/images/B9/B90196-/1500x/B90196-AAZ_A.jpg",
    otherImages: [
      "https://www.acnestudios.com/on/demandware.static/-/Sites-acne-product-catalog/default/dw2d3ca067/images/B9/B90196-/1500x/B90196-AAZ_B.jpg",
      "https://www.acnestudios.com/on/demandware.static/-/Sites-acne-product-catalog/default/dwe83b9691/images/B9/B90196-/1500x/B90196-AAZ_C.jpg",
      "https://www.acnestudios.com/on/demandware.static/-/Sites-acne-product-catalog/default/dwc391fd64/images/B9/B90196-/1500x/B90196-AAZ_D.jpg",
      "https://www.acnestudios.com/on/demandware.static/-/Sites-acne-product-catalog/default/dwfa0053cb/images/B9/B90196-/1500x/B90196-AAZ_E.jpg",
    ],
    price: "415 €",
    shop: null,
    link:
      "https://www.acnestudios.com/fr/fr/double-face-coat-bottle-green/B90196-AAZ.html?categid=man-new-arrivals",
    description:
      "Manteau Acne Studios vert bouteille inspiré d’un imperméable, à construction réversible cousue main, col plus large et poches passepoilées.",
  },
  {
    id: "4",
    productName: "Chemise à carreaux",
    brand: "AMIRI",
    mainImage:
      "https://cdn-images.farfetch-contents.com/14/59/46/90/14594690_22532038_1000.jpg",
    otherImages: [
      "https://cdn-images.farfetch-contents.com/14/59/46/90/14594690_22532037_1000.jpg",
      "https://cdn-images.farfetch-contents.com/14/59/46/90/14594690_22532038_1000.jpg",
      "https://cdn-images.farfetch-contents.com/14/59/46/90/14594690_22532040_1000.jpg",
    ],
    price: "725 €",
    shop: "Farfetch",
    link:
      "https://www.farfetch.com/uk/shopping/men/amiri-distressed-check-shirt-item-14594690.aspx?storeid=9702",
    description:
      "Blue and black cotton distressed check shirt from AMIRI featuring a cutaway collar, a check print, a tonal gradient effect, long sleeves, two chest pockets and frayed edges.",
  },
  {
    id: "14",
    productName: "KIN PEAK LAPEL SUIT DRY ONYX",
    brand: "Conscious Creatures",
    mainImage:
      "https://cdn.shopify.com/s/files/1/0968/5636/products/0926-16106_cf8f873e-54ee-4ca0-9e54-e441d0e773b4_2048x2048.jpg?v=1571208892",
    otherImages: [
      "https://cdn.shopify.com/s/files/1/0968/5636/products/0926-16110_2048x2048.jpg?v=1571208892",
      "https://cdn.shopify.com/s/files/1/0968/5636/products/0926-16121_2048x2048.jpg?v=1571208892",
      "https://cdn.shopify.com/s/files/1/0968/5636/products/0926-16119_2048x2048.jpg?v=1571208892",
      "https://cdn.shopify.com/s/files/1/0968/5636/products/0926-16117_2048x2048.jpg?v=1571208892",
      "https://cdn.shopify.com/s/files/1/0968/5636/products/0926-16116_2048x2048.jpg?v=1571208892",
    ],
    price: "280 €",
    shop: "Ne.sense",
    link: "https://shop.ne-sense.com/products/kin-peak-lapel-suit-dry-onyx",
    description:
      "PEAK LAPEL COLLAR, ABOVE KNEE LENGTH ,SLIGHTLY ELONGATED SLEEVE WITH BUTTON CLOSURE, EXPOSE BRANDED BUTTON CLOSURE AT FRONT, ONE WELT CHEST POCKET,TWO FLAP WAIST POCKETS, REGULAR VENT AT BACK, FOUR BUTTONS CLOSURE AT CUFF, METAL PLATE LABEL IN INTERIOR, FULLY LINED, TONAL STITCHING THROUGHOU",
  },
  {
    id: "6",
    productName: "Twill Pant",
    brand: "Acne",
    mainImage:
      "https://eu.oki-ni.com/media/catalog/product/7/1/71acem2160nvy-acne-studios-pleated-cotton-twill-trousers-in-navy-bk0196-885_01.jpg?quality=80&fit=bounds&height=695&width=506",
    otherImages: [
      "https://oki-ni.com/media/catalog/product/7/1/71acem2160nvy-acne-studios-pleated-cotton-twill-trousers-in-navy-bk0196-885_02.jpg?quality=80&fit=bounds&height=695&width=506",
      "https://oki-ni.com/media/catalog/product/7/1/71acem2160nvy-acne-studios-pleated-cotton-twill-trousers-in-navy-bk0196-885_03.jpg?quality=80&fit=bounds&height=695&width=506",
      "https://oki-ni.com/media/catalog/product/7/1/71acem2160nvy-acne-studios-pleated-cotton-twill-trousers-in-navy-bk0196-885_04.jpg?quality=80&fit=bounds&height=695&width=506",
      "https://oki-ni.com/media/catalog/product/7/1/71acem2160nvy-acne-studios-pleated-cotton-twill-trousers-in-navy-bk0196-885_07.jpg?quality=80&fit=bounds&height=695&width=506",
    ],
    price: "250 €",
    shop: "Okini",
    link:
      "https://eu.oki-ni.com/71acem2160nvy-acne-studios-pleated-cotton-twill-trousers-in-navy-bk0196-885",
    description:
      "cotton-twill construction,wide leg, hook closure, pleated structure, pocketed,foldable waistband,relaxed fit",
  },
  {
    id: "12b",
    productName: "Robe Alwena",
    brand: "Sezane",
    mainImage:
      "https://media.sezane.com/image/upload/w_1080,h_1514,c_fill,q_auto:best/v1571061017/website/product/vpixgjbosu0kpb8jb65w.jpg",
    otherImages: [
      "https://media.sezane.com/image/upload/w_1080,h_1514,c_fill,q_auto:best/v1571061005/website/product/wifgqi8y6ia07h3svzaq.jpg",
      "https://media.sezane.com/image/upload/w_1080,h_1514,c_fill,q_auto:best/v1571061008/website/product/dng8iff1atrhc6hzudfo.jpg",
      "https://media.sezane.com/image/upload/w_1080,h_1514,c_fill,q_auto:best/v1571061015/website/product/pvnvro5zymcw0gj4bx8k.jpg",
    ],
    price: "250 €",
    shop: null,
    link:
      "https://www.sezane.com/fr/product/collection-automne/robe-alwena?cou_Id=3007",
    description:
      "Robe courte à manches courtes avec revers, Patte de boutonnage devant, Poches plaquées devant, Longueur : 88 cm (pour un 38)",
  },
  {
    productName: "BLACK CLASSIC RAGLAN HOODIE",
    brand: "SECOND/LAYER",
    mainImage:
      "https://cdn.shopify.com/s/files/1/2071/6975/products/1_e0b11df6-a270-4e90-8707-2b8e2802907f_2048x2048.jpg?v=1575918371",
    otherImages: [
      "https://cdn.shopify.com/s/files/1/2071/6975/products/3_8dcb2f2a-28d5-48c7-b933-e22c12b72b08_2048x2048.jpg?v=1575918371",
      "https://cdn.shopify.com/s/files/1/2071/6975/products/4_9a117348-e887-4449-85ae-adbac6adc1b2_2048x2048.jpg?v=1575918371",
      "https://cdn.shopify.com/s/files/1/2071/6975/products/2_a0129097-084e-49eb-9ab7-a50c0b3f0195_2048x2048.jpg?v=1575918371",
    ],
    category: "SWEAT",
    priceInt: 215,
    shop: null,
    link:
      "https://dpto.la/collections/new-arrivals/products/black-classic-raglan-hoodie",
    description:
      "Robe courte à manches courtes avec revers, Patte de boutonnage devant, Poches plaquées devant, Longueur : 88 cm (pour un 38)",
  },
];

export default POSTS;

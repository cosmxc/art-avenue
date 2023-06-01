let allProducts = [
	{
		id: 1,
		title: 'DIY Keychain',
		image: 'images/keychain.png',
		price: 35,
		count: 1,
		isInterest: false,
		category: 'Keychain',
		size: '3 inches x 5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 2,
		title: 'Keychain',
		image: 'images/custom_keychain.png',
		price: 45,
		count: 1,
		isInterest: false,
		category: 'Keychain',
		size: '3 inches x 5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 3,
		title: 'DIY Necklace',
		image: 'images/necklace.png',
		price: 30,
		count: 1,
		isInterest: false,
		category: 'Necklace',
		size: '1 inch x 2 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 4,
		title: 'Necklace',
		image: 'images/custom_necklace.png',
		price: 40,
		count: 1,
		isInterest: false,
		category: 'Necklace',
		size: '1 inch x 2 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 5,
		title: 'Ayato Sticker',
		image: 'images/genshin/1.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'Genshin',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 6,
		title: 'Diluc Sticker',
		image: 'images/genshin/2.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'Genshin',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 7,
		title: 'Ei Sticker',
		image: 'images/genshin/3.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'Genshin',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 8,
		title: 'Hutao Sticker',
		image: 'images/genshin/4.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'Genshin',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 9,
		title: 'Kazuha Sticker',
		image: 'images/genshin/5.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'Genshin',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 10,
		title: 'Klee Sticker',
		image: 'images/genshin/6.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'Genshin',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 11,
		title: 'Scaramouche Sticker',
		image: 'images/genshin/7.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'Genshin',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 12,
		title: 'Tighnari Sticker',
		image: 'images/genshin/8.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'Genshin',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 13,
		title: 'Xiao Sticker',
		image: 'images/genshin/9.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'Genshin',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 14,
		title: 'Yae Miko Sticker',
		image: 'images/genshin/10.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'Genshin',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 15,
		title: 'Hinata Sticker',
		image: 'images/haikyuu/1.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'Haikyuu',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 16,
		title: 'Kageyama Sticker',
		image: 'images/haikyuu/2.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'Haikyuu',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 17,
		title: 'Kenma Sticker',
		image: 'images/haikyuu/3.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'Haikyuu',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 18,
		title: 'Kuroo Sticker',
		image: 'images/haikyuu/4.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'Haikyuu',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 19,
		title: 'Iwaizumi Sticker',
		image: 'images/haikyuu/5.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'Haikyuu',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 20,
		title: 'Oikawa Sticker',
		image: 'images/haikyuu/6.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'Haikyuu',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 21,
		title: 'Chamber Sticker',
		image: 'images/valorant/1.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'Valorant',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 22,
		title: 'Gekko Sticker',
		image: 'images/valorant/2.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'Valorant',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 23,
		title: 'Jett Sticker',
		image: 'images/valorant/3.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'Valorant',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 24,
		title: 'Sage Sticker',
		image: 'images/valorant/4.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'Valorant',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 25,
		title: 'Viper Sticker',
		image: 'images/valorant/5.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'Valorant',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 26,
		title: 'Yoru Sticker',
		image: 'images/valorant/6.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'Valorant',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 27,
		title: 'Reyna Sticker',
		image: 'images/valorant/7.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'Valorant',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 28,
		title: 'Neon Sticker',
		image: 'images/valorant/8.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'Valorant',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 29,
		title: 'Omen Sticker',
		image: 'images/valorant/9.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'Valorant',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 30,
		title: 'Killjoy Sticker',
		image: 'images/valorant/10.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'Valorant',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 31,
		title: 'Jeon Jungkook Sticker',
		image: 'images/BTS/1.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'BTS',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 32,
		title: 'Jung Hoseok Sticker',
		image: 'images/BTS/2.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'BTS',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 33,
		title: 'Kim Namjoon Sticker',
		image: 'images/BTS/3.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'BTS',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 34,
		title: 'Kim Seok Jin Sticker',
		image: 'images/BTS/4.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'BTS',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 35,
		title: 'Kim Taehyung Sticker',
		image: 'images/BTS/5.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'BTS',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 36,
		title: 'Min Yoongi Sticker',
		image: 'images/BTS/6.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'BTS',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 37,
		title: 'Park Jimin Sticker',
		image: 'images/BTS/7.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'BTS',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},

	{
		id: 38,
		title: 'Anya Sticker',
		image: 'images/CAT/1.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: '',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 39,
		title: 'Cat Meme 1 Sticker',
		image: 'images/CAT/2.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'Cat',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 40,
		title: 'Cat Meme 2 Sticker',
		image: 'images/CAT/3.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'Cat',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 41,
		title: 'Cat Meme 3 Sticker',
		image: 'images/CAT/4.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'Cat',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},

	{
		id: 42,
		title: 'Im Hyun-Sik Sticker',
		image: 'images/BTOB/1.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'BTOB',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 43,
		title: 'Jung Ilhoon Sticker',
		image: 'images/BTOB/2.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'BTOB',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 44,
		title: 'Lee Chang-sub Sticker',
		image: 'images/BTOB/3.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'BTOB',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 45,
		title: 'Lee Minhyuk Sticker',
		image: 'images/BTOB/4.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'BTOB',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 46,
		title: 'Peniel Shin Sticker',
		image: 'images/BTOB/5.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'BTOB',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 47,
		title: 'Seo Eunkwang Sticker',
		image: 'images/BTOB/6.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'BTOB',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 48,
		title: 'Yook Sungjae Sticker',
		image: 'images/BTOB/7.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'BTOB',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},

	{
		id: 49,
		title: 'Among Us Black Sticker',
		image: 'images/AmongUs/1.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'AmongUs',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 50,
		title: 'Among Us Blue Sticker',
		image: 'images/AmongUs/2.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'AmongUs',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 51,
		title: 'Among Us Brown Sticker',
		image: 'images/AmongUs/3.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'AmongUs',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 52,
		title: 'Among Us Cyan Sticker',
		image: 'images/AmongUs/4.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'AmongUs',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 53,
		title: 'Among Us Green 2 Sticker',
		image: 'images/AmongUs/5.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'AmongUs',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 54,
		title: 'Among Us Green Sticker',
		image: 'images/AmongUs/6.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'AmongUs',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 55,
		title: 'Among Us Orange Sticker',
		image: 'images/AmongUs/7.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'AmongUs',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 56,
		title: 'Among Us Pink Sticker',
		image: 'images/AmongUs/8.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'AmongUs',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 57,
		title: 'Among Us RGB Sticker',
		image: 'images/AmongUs/9.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'AmongUs',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 58,
		title: 'Among Us Red Sticker',
		image: 'images/AmongUs/10.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'AmongUs',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 59,
		title: 'Among Us White Sticker',
		image: 'images/AmongUs/11.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'AmongUs',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 60,
		title: 'Among Us Yellow Sticker',
		image: 'images/AmongUs/12.png',
		price: 25,
		count: 1,
		isInterest: false,
		category: 'AmongUs',
		size: '2.5 inches x 3.5 inches',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
];

export default allProducts;

var profile_url = chrome.extension.getURL('images/Miniature_Schnauzer_puppy_blackandsilver.jpg'),
	images  = [
		{
			url   : chrome.extension.getURL('images/102975255.jpg'),
			width : 640,
			height: 480,
			ratio : 640 / 480,
			used  : 0
		}, {
			url   : chrome.extension.getURL('images/Dvergschnauzer.jpg'),
			width : 368,
			height: 282,
			ratio : 368 / 282,
			used  : 0
		}, {
			url   : chrome.extension.getURL('images/Emppumenossa.jpg'),
			width : 398,
			height: 299,
			ratio : 398 / 299,
			used  : 0
		}, {
			url: chrome.extension.getURL('images/Miniature_schnauzer.jpg'),
			width : 622,
			height: 356,
			ratio : 622 / 356,
			used  : 0
		}, {
			url   : chrome.extension.getURL('images/Miniature_Schnauzer_2.jpg'),
			width : 800,
			height: 653,
			ratio : 800 / 653,
			used  : 0
		}, {
			url   : chrome.extension.getURL('images/Miniature_Schnauzer_02.jpg'),
			width : 400,
			height: 279,
			ratio : 400 / 279,
			used  : 0
		}, {
			url   : chrome.extension.getURL('images/Miniature_schnauzer_blackandsilver.jpg'),
			width : 600,
			height: 450,
			ratio : 600 / 450,
			used  : 0
		}, {
			url   : chrome.extension.getURL('images/Miniature_Schnauzer_Jordy.jpg'),
			width : 682,
			height: 600,
			ratio : 682 / 600,
			used  : 0
		}, {
			url   : chrome.extension.getURL('images/Miniature_Schnauzer_portrait_Mattie.jpg'),
			width : 800,
			height: 948,
			ratio : 800 / 948,
			used  : 0
		}, {
			url   : chrome.extension.getURL('images/Miniature_Schnauzer_puppy_blackandsilver.jpg'),
			width : 428,
			height: 600,
			ratio : 428 / 600,
			used  : 0
		}, {
			url   : chrome.extension.getURL('images/Miniature_Schnauzer_R_02.JPG'),
			width : 760,
			height: 600,
			ratio : 760 / 600,
			used  : 0
		},{
			url   : chrome.extension.getURL('images/Miniature_Schnauzer_SP.jpg'),
			width : 800,
			height: 356,
			ratio : 800 / 356,
			used  : 0
		}, {
			url   : chrome.extension.getURL('images/Miniature_Schnauzer_Toy.jpg'),
			width : 800,
			height: 536,
			ratio : 800 / 536,
			used  : 0
		}, {
			url   : chrome.extension.getURL('images/Standard_Schnauzer01.jpg'),
			width : 467,
			height: 599,
			ratio : 467 / 599,
			used  : 0
		}, {
			url   : chrome.extension.getURL('images/Standard_Schnauzers.jpg'),
			width : 600,
			height: 450,
			ratio : 600 / 450,
			used  : 0
		}, {
			url   : chrome.extension.getURL('images/Stdschnauzersblkps.JPG'),
			width : 800,
			height: 600,
			ratio : 800 / 600,
			used  : 0
		}, {
			url   : chrome.extension.getURL('images/white.jpg'),
			width : 339,
			height: 254,
			ratio : 339 / 254,
			used  : 0
		}
	],
	known_src = [ // for famous israeli sites who are to awful to properly use alt and title atributes
		'http://yeshatid.org.il/wp-content/uploads/2012/11/y1.jpg',
		'http://yeshatid.org.il/wp-content/uploads/2014/03/0-300x199.png',
		'http://yeshatid.org.il/wp-content/uploads/2014/03/0.png',
		'http://yeshatid.org.il/wp-content/uploads/2014/06/MG_0855-300x199.jpg',
		'http://images1.ynet.co.il/PicServer4/2014/05/12/5324011/53239867511552183103no.jpg',
		'http://images1.ynet.co.il/PicServer3/2014/02/20/5168156/516811628682155183103no.jpg',
		'http://images1.ynet.co.il/PicServer3/2014/02/20/5168163/516811715841068183103no.jpg',
		'http://images1.ynet.co.il/PicServer3/2012/09/11/4156970/77777_m.jpg',
		'http://images1.ynet.co.il/PicServer3/2012/09/12/4161547/41615370100010012882.jpg',
		'http://images1.ynet.co.il/PicServer4/2014/06/18/5398929/539892436611637183103no.jpg',
		'http://images1.ynet.co.il/PicServer4/2014/06/02/5366695/536668918893999183103no.jpg',
		'http://images1.ynet.co.il/PicServer4/2014/05/27/5354855/535485060953160183103no.jpg',
		'http://images1.ynet.co.il/PicServer4/2014/05/12/5323992/532398422991176183103no.jpg',
		'http://images1.ynet.co.il/PicServer3/2013/08/03/4775912/47159200100084640360no.jpg',
		'http://msc.wcdn.co.il/archive/1642368-38.jpg',
		'http://yeshatid.org.il/wp-content/uploads/2014/04/1521613_10151946683056526_1055708458_n1-300x255.jpg',
		'http://yeshatid.org.il/wp-content/uploads/2014/02/iamge-300x200.jpg',
		'http://yeshatid.org.il/wp-content/uploads/2013/11/DSC_8310-300x199.jpg',
		'http://yeshatid.org.il/wp-content/uploads/2013/10/132674_10151094312131526_1447525326_o-300x199.jpg',
		'http://yeshatid.org.il/wp-content/uploads/2013/10/american_journey-300x203.png',
		'http://yeshatid.org.il/wp-content/themes/yair/images/photo_main.jpg',
		'/polopoly_fs/1.642098.1325168484!/image/4271621870.jpg_gen/derivatives/landscape_300/4271621870.jpg'
	];

function getImage(width, height) {
	var ratio    = width / height,
		minimum  = [Infinity, 0];
		scores   = images.map(function (obj, index){
			var score = 1000 * Math.abs(obj.ratio - ratio); //ratio is more important than size match
			score += Math.abs(obj.width - width);
			score += Math.abs(obj.height - height);
			score += 500 * obj.used; // we prefer not to take any used photos
			if ( score < minimum[0] ) {
				minimum[0] = score;
				minimum[1] = index;
			}
			return score;
		});

	images[minimum[1]].used += 1;
	return images[minimum[1]].url;
}

function replaceSrc(image, src) {
	if (image) {
		image.getAttribute('width') || image.setAttribute('width', image.clientWidth);
		image.getAttribute('height') || image.setAttribute('height', image.clientHeight);
		image.setAttribute('srcset', '');
		image.setAttribute('src', src);
	}
}

function meowify(image) {
	var possibleTone = '' + image.getAttribute('src') + image.getAttribute('alt') + image.getAttribute('title');
	if (image.parentElement.tagName == 'A' ) {
		possibleTone += image.parentElement.getAttribute('href');
	}
	if (possibleTone.match(/594053353986353_75415007/i)) {
		replaceSrc(image, profile_url);
	} else if (known_src.indexOf(image.getAttribute('src')) >= 0 || possibleTone.match(/lapid|לפיד|שר האוצר|%D7%9C%D7%A4%D7%99%D7%93|%D7%A9%D7%A8%20%D7%94%D7%90%D7%95%D7%A6%D7%A8|tags\/1.4482/i)) {
		replaceSrc(image, getImage(image.clientWidth, image.clientHeight));
	}
}

function initMeow() {
	var i, image, images = document.querySelectorAll('img');
	for (i = 0; i < images.length; i++){
		image = images[i];
		if (!image.getAttribute('data-meow')) {
			image.setAttribute('data-meow' ,true);
			if (image.complete) {
				meowify(image);
				continue;
			}
			image.addEventListener('load', meowify.bind(this, image));
		}
	}
}

var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);
			initMeow();
			setTimeout(initMeow, 2000); //we seem to have an issue with images added dynamically after load
			// don't wont to hog the cpu with mutation observers and 2 secs should be enough for them to load and do a  quick replace
	}
}, 10);
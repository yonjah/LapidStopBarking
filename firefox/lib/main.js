var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
	include: "*",
	contentScriptFile: data.url("meow.js"),
		contentScriptOptions: {
		"profile": data.url('images/Miniature_Schnauzer_puppy_blackandsilver.jpg'),
		"images" : [
			{
				url   : data.url('images/102975255.jpg'),
				width : 640,
				height: 480,
				ratio : 640 / 480,
				used  : 0
			}, {
				url   : data.url('images/Dvergschnauzer.jpg'),
				width : 368,
				height: 282,
				ratio : 368 / 282,
				used  : 0
			}, {
				url   : data.url('images/Emppumenossa.jpg'),
				width : 398,
				height: 299,
				ratio : 398 / 299,
				used  : 0
			}, {
				url: data.url('images/Miniature_schnauzer.jpg'),
				width : 622,
				height: 356,
				ratio : 622 / 356,
				used  : 0
			}, {
				url   : data.url('images/Miniature_Schnauzer_2.jpg'),
				width : 800,
				height: 653,
				ratio : 800 / 653,
				used  : 0
			}, {
				url   : data.url('images/Miniature_Schnauzer_02.jpg'),
				width : 400,
				height: 279,
				ratio : 400 / 279,
				used  : 0
			}, {
				url   : data.url('images/Miniature_schnauzer_blackandsilver.jpg'),
				width : 600,
				height: 450,
				ratio : 600 / 450,
				used  : 0
			}, {
				url   : data.url('images/Miniature_Schnauzer_Jordy.jpg'),
				width : 682,
				height: 600,
				ratio : 682 / 600,
				used  : 0
			}, {
				url   : data.url('images/Miniature_Schnauzer_portrait_Mattie.jpg'),
				width : 800,
				height: 948,
				ratio : 800 / 948,
				used  : 0
			}, {
				url   : data.url('images/Miniature_Schnauzer_puppy_blackandsilver.jpg'),
				width : 428,
				height: 600,
				ratio : 428 / 600,
				used  : 0
			}, {
				url   : data.url('images/Miniature_Schnauzer_R_02.JPG'),
				width : 760,
				height: 600,
				ratio : 760 / 600,
				used  : 0
			},{
				url   : data.url('images/Miniature_Schnauzer_SP.jpg'),
				width : 800,
				height: 356,
				ratio : 800 / 356,
				used  : 0
			}, {
				url   : data.url('images/Miniature_Schnauzer_Toy.jpg'),
				width : 800,
				height: 536,
				ratio : 800 / 536,
				used  : 0
			}, {
				url   : data.url('images/Standard_Schnauzer01.jpg'),
				width : 467,
				height: 599,
				ratio : 467 / 599,
				used  : 0
			}, {
				url   : data.url('images/Standard_Schnauzers.jpg'),
				width : 600,
				height: 450,
				ratio : 600 / 450,
				used  : 0
			}, {
				url   : data.url('images/Stdschnauzersblkps.JPG'),
				width : 800,
				height: 600,
				ratio : 800 / 600,
				used  : 0
			}, {
				url   : data.url('images/white.jpg'),
				width : 339,
				height: 254,
				ratio : 339 / 254,
				used  : 0
			}]
		}
});
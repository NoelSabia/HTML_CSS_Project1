var images = ['./images/picture_man2.jpeg', './images/picture_men.jpeg', './images/mainpic.jpeg'];
images.forEach(function(src) {
	var img = new Image();
	img.src = src;
});

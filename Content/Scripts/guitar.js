const WIKI = 'https://en.wikipedia.org/wiki/',
        AUDIO_ROOT = 'Content/Audios/Consonants/';

$(function () {

	var $container = $('<div />').attr('class', 'container'),
        $h2 = $('<h2>').text('IPA chart pulmonic consonants with audio'),
        $image = $('<img>').attr({ 'src': 'Content/Imgs/guitar.png', 'class': 'guitar' }),
        $frame = $('#frame')[0],
        ctx = $frame.getContext('2d'),
        canvas1 = $('#line_first')[0],
        canvas2 = $('#line_second')[0],
        canvas3 = $('#line_third')[0],
        canvas4 = $('#line_fourth')[0],
        ctx1 = canvas1.getContext('2d'),
        ctx2 = canvas2.getContext('2d'),
        ctx3 = canvas3.getContext('2d'),
        ctx4 = canvas4.getContext('2d'),

        width = canvas1.width,
        height = canvas1.height,
        size = 2048,
        xCenter = width / 2,
        maxHeight = width / 2 - 2,
        processed = false,
        step = height / size,
        audioEls,
        context = new AudioContext(),
        processor = null,
        loaded = 0,
        audios = [],
        sources = [],
        buffer1 = new Float32Array(size),
        buffer2 = new Float32Array(size),
        buffer3 = new Float32Array(size),
        buffer4 = new Float32Array(size),

        $a1 = $('<a>').text('Nasal').attr('href', WIKI + 'Nasal_consonant').css({ 'top': '205px', 'left': '25px' }),
        $a2 = $('<a>').text('Plosive').attr('href', WIKI + 'Stop_consonant').css({ 'top': '265px', 'left': '20px' }),
        $a3 = $('<a>').text('Fricative').attr('href', WIKI + 'Fricative_consonant').css({ 'top': '325px', 'left': '17px' }),
        $a4 = $('<a>').text('Approxima').attr('href', WIKI + 'Approximant_consonant').css({ 'top': '385px', 'left': '15px' }),
        $a5 = $('<a>').text('Trill').attr('href', WIKI + 'Trill_consonant').css({ 'top': '440px', 'left': '30px' }),
        $a6 = $('<a>').text('Flap or t').attr('href', WIKI + 'Flap_consonant').css({ 'top': '500px', 'left': '20px' }),
        $a7 = $('<a>').text('Lateral').attr('href', WIKI + 'Lateral_consonant').css({ 'top': '560px', 'left': '23px' }),
        $a8 = $('<a>').text('fricative').attr('href', WIKI + 'Lateral_consonant').css({ 'top': '575px', 'left': '20px' }),
        $a9 = $('<a>').text('Lateral').attr('href', WIKI + 'Lateral_consonant').css({ 'top': '610px', 'left': '23px' }),
        $a10 = $('<a>').text('approxime').attr('href', WIKI + 'Approximant_consonant').css({ 'top': '625px', 'left': '15px' }),
        $a11 = $('<a>').text('Lateral f').attr('href', WIKI + 'Lateral_flap').css({ 'top': '680px', 'left': '20px' }),
        $a12 = $('<a>').text('Place').attr('href', WIKI + 'Place_of_articulation').css({ 'top': '128px', 'left': '20px' }),
        $a13 = $('<a>').text('Manner').attr('href', WIKI + 'Manner_of_articulation').css({ 'top': '155px', 'left': '20px' }),
        $a14 = $('<a>').text('Labian').attr('href', WIKI + 'Labial_consonant').css({ 'top': '128px', 'left': '78px' }),
        $a15 = $('<a>').text('Bilabial').attr('href', WIKI + 'Bilabial_consonant').css({ 'top': '155px', 'left': '78px' }),
        $a16 = $('<a>').text('Labiodent').attr('href', WIKI + 'Labiodental_consonant').css({ 'top': '155px', 'left': '135px' }),
        $a17 = $('<a>').text('Coronal').attr('href', WIKI + 'Coronal_consonant').css({ 'top': '128px', 'left': '196px' }),
        $a18 = $('<a>').text('Dental').attr('href', WIKI + 'Labiodental_consonant').css({ 'top': '155px', 'left': '200px' }),
        $a19 = $('<a>').text('Alveolar').attr('href', WIKI + 'Alveolar_consonant').css({ 'top': '155px', 'left': '260px' }),
        $a20 = $('<a>').text('Palato-al').attr('href', WIKI + 'Palato-alveolar_consonant').css({ 'top': '155px', 'left': '320px' }),
        $a21 = $('<a>').text('Retroflex').attr('href', WIKI + 'Retroflex_consonant').css({ 'top': '155px', 'left': '380px' }),
        $a22 = $('<a>').text('Dorsal').attr('href', WIKI + 'Dorsal_consonant').css({ 'top': '128px', 'left': '445px' }),
        $a23 = $('<a>').text('Palatal').attr('href', WIKI + 'Palatal_consonant').css({ 'top': '155px', 'left': '445px' }),
        $a24 = $('<a>').text('Velar').attr('href', WIKI + 'Velar_consonant').css({ 'top': '155px', 'left': '505px' }),
        $a25 = $('<a>').text('Uvular').attr('href', WIKI + 'Uvular_consonant').css({ 'top': '155px', 'left': '565px' }),
        $a26 = $('<a>').text('Laryngeal').attr('href', WIKI + 'Laryngeal_consonant').css({ 'top': '128px', 'left': '615px' }),
        $a27 = $('<a>').text('Pharyngea').attr('href', WIKI + 'Pharyngeal_consonant').css({ 'top': '155px', 'left': '613px' }),
        $a28 = $('<a>').text('Glottal').attr('href', WIKI + 'Glottal_consonant').css({ 'top': '155px', 'left': '685px' });



	$('body').append($container);
	$container.append($h2);
	$container.append($image);
	$container.append($frame, canvas1, canvas2, canvas3, canvas4);
	$container.append($a1, $a2, $a3, $a4, $a5, $a6, $a7, $a8, $a9, $a10, $a11, $a12, $a13,
                        $a14, $a15, $a16, $a17, $a18, $a19, $a20, $a21, $a22, $a23, $a24, $a25, $a26, $a27, $a28);

	//canvas
	$frame.width = 720;
	$frame.height = 660;

	ctx.beginPath();
	ctx.strokeStyle = 'black';
	ctx.strokeRect(0, 0, 720, 660);

	for (var i = 120; i < 720; i += 60) {
		ctx.moveTo(0, i);
		ctx.lineTo(1000, i);
	}
	for (var i = 0; i < 210; i += 60) {
		ctx.moveTo(i, 120);
		ctx.lineTo(i, 660);
	}
	ctx.moveTo(240, 240);
	ctx.lineTo(240, 300);

	ctx.moveTo(300, 240);
	ctx.lineTo(300, 300);

	ctx.moveTo(360, 120);
	ctx.lineTo(360, 660);

	for (var i = 420; i < 720; i += 60) {
		ctx.moveTo(i, 120);
		ctx.lineTo(i, 660);
	}
	ctx.stroke();
	ctx.fillText('m', 100, 135);
	ctx.fillText('ɱ', 160, 135);
	ctx.fillText('n̪', 220, 135);
	ctx.fillText('n', 300, 135);
	ctx.fillText('ɳ', 400, 135);
	ctx.fillText('ɲ', 460, 135);
	ctx.fillText('ŋ', 520, 135);
	ctx.fillText('ɴ', 580, 135);

	ctx.fillText('p', 73, 195);
	ctx.fillText('b', 100, 195);
	ctx.fillText('p̪', 195, 195);
	ctx.fillText('b̪', 223, 195);
	ctx.fillText('t̪', 253, 195);
	ctx.fillText('d̪', 280, 195);
	ctx.fillText('t', 375, 195);
	ctx.fillText('d', 402, 195);
	ctx.fillText('ʈ', 433, 195);
	ctx.fillText('ɖ', 460, 195);
	ctx.fillText('c', 493, 195);
	ctx.fillText('ɟ', 520, 195);
	ctx.fillText('k', 553, 195);
	ctx.fillText('ɡ', 580, 195);
	ctx.fillText('q', 628, 195);
	ctx.fillText('ɢ', 673, 195);

	ctx.fillText('ʡ', 73, 253);
	ctx.fillText('ʔ', 100, 253);
	ctx.fillText('ɸ', 133, 253);
	ctx.fillText('β', 160, 253);
	ctx.fillText('f', 193, 253);
	ctx.fillText('v', 220, 253);
	ctx.fillText('θ', 253, 253);
	ctx.fillText('ð', 280, 253);
	ctx.fillText('s', 313, 253);
	ctx.fillText('z', 340, 253);
	ctx.fillText('ʃ', 373, 253);
	ctx.fillText('ʒ', 400, 253);
	ctx.fillText('ʂ', 433, 253);
	ctx.fillText('ʐ', 460, 253);
	ctx.fillText('ç', 493, 253);
	ctx.fillText('ʝ', 520, 253);
	ctx.fillText('x', 553, 253);
	ctx.fillText('ʁ', 580, 253);
	ctx.fillText('χ', 613, 253);
	ctx.fillText('ɣ', 640, 253);
	ctx.fillText('ħ', 673, 253);
	ctx.fillText('ʕ', 700, 253);

	ctx.fillText('ʋ', 160, 315);
	ctx.fillText('ɹ', 340, 315);
	ctx.fillText('ɻ', 400, 315);
	ctx.fillText('j', 460, 315);
	ctx.fillText('ɰ', 520, 315);

	ctx.fillText('ʙ', 100, 375);
	ctx.fillText('r', 280, 375);
	ctx.fillText('*', 400, 375);
	ctx.fillText('ʀ', 580, 375);
	ctx.fillText('ʜ', 613, 375);
	ctx.fillText('ʢ', 640, 375);

	ctx.fillText('ⱱ̟', 100, 435);
	ctx.fillText('ⱱ', 160, 435);
	ctx.fillText('ɾ', 280, 435);
	ctx.fillText('ɽ', 400, 435);
	ctx.fillText('ɢ̆ *', 580, 435);
	ctx.fillText('ʡ̯', 640, 435);

	ctx.fillText('ɬ', 253, 495);
	ctx.fillText('ɮ', 280, 495);
	ctx.fillText('ɭ˔̊', 373, 495);
	ctx.fillText('ʎ̥˔', 433, 495);
	ctx.fillText('ʟ̝̊', 493, 495);

	ctx.fillText('l', 280, 555);
	ctx.fillText('ɭ', 400, 555);
	ctx.fillText('ʎ', 460, 555);
	ctx.fillText('ʟ', 520, 555);

	ctx.fillText('ɺ', 280, 615);
	ctx.fillText('ɺ̢ *', 400, 615);
	ctx.fillText('ʎ̯', 460, 615);

	canvas1.width = 2;
	canvas1.height = 540;

	canvas2.width = 2;
	canvas2.height = 530;

	canvas3.width = 2;
	canvas3.height = 505;

	canvas4.width = 2;
	canvas4.height = 480;
	//audios
	(function setAudios() {
		var audioParams = [
            { id1: 'aud1', id2: 'img1', src: AUDIO_ROOT + '1_1.ogg', left: '100px', top: '195px' },
            { id1: 'aud2', id2: 'img2', src: AUDIO_ROOT + '1_2.ogg', left: '160px', top: '195px' },
            { id1: 'aud3', id2: 'img3', src: AUDIO_ROOT + '1_3.ogg', left: '300px', top: '195px' },
            { id1: 'aud4', id2: 'img4', src: AUDIO_ROOT + '1_4.ogg', left: '400px', top: '195px' },
            { id1: 'aud5', id2: 'img5', src: AUDIO_ROOT + '1_5.ogg', left: '460px', top: '195px' },
            { id1: 'aud6', id2: 'img6', src: AUDIO_ROOT + '1_6.ogg', left: '520px', top: '195px' },
            { id1: 'aud7', id2: 'img7', src: AUDIO_ROOT + '1_7.ogg', left: '580px', top: '195px' },

            { id1: 'aud8', id2: 'img8', src: AUDIO_ROOT + '2_1.ogg', left: '73px', top: '255px' },
            { id1: 'aud9', id2: 'img9', src: AUDIO_ROOT + '2_2.ogg', left: '100px', top: '255px' },
            { id1: 'aud10', id2: 'img10', src: AUDIO_ROOT + '2_3.ogg', left: '195px', top: '255px' },
            { id1: 'aud11', id2: 'img11', src: AUDIO_ROOT + '2_4.ogg', left: '223px', top: '255px' },
            { id1: 'aud12', id2: 'img12', src: AUDIO_ROOT + '2_5.ogg', left: '253px', top: '255px' },
            { id1: 'aud13', id2: 'img13', src: AUDIO_ROOT + '2_6.ogg', left: '280px', top: '255px' },
            { id1: 'aud14', id2: 'img14', src: AUDIO_ROOT + '2_7.oga', left: '375px', top: '255px' },
            { id1: 'aud15', id2: 'img15', src: AUDIO_ROOT + '2_8.oga', left: '402px', top: '255px' },
            { id1: 'aud16', id2: 'img16', src: AUDIO_ROOT + '2_9.ogg', left: '433px', top: '255px' },
            { id1: 'aud17', id2: 'img17', src: AUDIO_ROOT + '2_10.ogg', left: '460px', top: '255px' },
            { id1: 'aud18', id2: 'img18', src: AUDIO_ROOT + '2_11.ogg', left: '493px', top: '255px' },
            { id1: 'aud19', id2: 'img19', src: AUDIO_ROOT + '2_12.ogg', left: '520px', top: '255px' },
            { id1: 'aud20', id2: 'img20', src: AUDIO_ROOT + '2_13.ogg', left: '553px', top: '255px' },
            { id1: 'aud21', id2: 'img21', src: AUDIO_ROOT + '2_14.oga', left: '580px', top: '255px' },
            { id1: 'aud22', id2: 'img22', src: AUDIO_ROOT + '2_15.ogg', left: '628px', top: '255px' },
            { id1: 'aud23', id2: 'img23', src: AUDIO_ROOT + '2_16.ogg', left: '673px', top: '255px' },

            { id1: 'aud24', id2: 'img24', src: AUDIO_ROOT + '3_1.ogg', left: '73px', top: '313px' },
            { id1: 'aud25', id2: 'img25', src: AUDIO_ROOT + '3_2.ogg', left: '100px', top: '313px' },
            { id1: 'aud26', id2: 'img26', src: AUDIO_ROOT + '3_3.ogg', left: '133px', top: '313px' },
            { id1: 'aud27', id2: 'img27', src: AUDIO_ROOT + '3_4.ogg', left: '160px', top: '313px' },
            { id1: 'aud28', id2: 'img28', src: AUDIO_ROOT + '3_5.ogg', left: '193px', top: '313px' },
            { id1: 'aud29', id2: 'img29', src: AUDIO_ROOT + '3_6.ogg', left: '220px', top: '313px' },
            { id1: 'aud30', id2: 'img30', src: AUDIO_ROOT + '3_7.ogg', left: '253px', top: '313px' },
            { id1: 'aud31', id2: 'img31', src: AUDIO_ROOT + '3_8.ogg', left: '280px', top: '313px' },
            { id1: 'aud32', id2: 'img32', src: AUDIO_ROOT + '3_9.ogg', left: '313px', top: '313px' },
            { id1: 'aud33', id2: 'img33', src: AUDIO_ROOT + '3_10.ogg', left: '340px', top: '313px' },
            { id1: 'aud34', id2: 'img34', src: AUDIO_ROOT + '3_11.ogg', left: '373px', top: '313px' },
            { id1: 'aud35', id2: 'img35', src: AUDIO_ROOT + '3_12.ogg', left: '400px', top: '313px' },
            { id1: 'aud36', id2: 'img36', src: AUDIO_ROOT + '3_13.ogg', left: '433px', top: '313px' },
            { id1: 'aud37', id2: 'img37', src: AUDIO_ROOT + '3_14.ogg', left: '460px', top: '313px' },
            { id1: 'aud38', id2: 'img38', src: AUDIO_ROOT + '3_15.ogg', left: '493px', top: '313px' },
            { id1: 'aud39', id2: 'img39', src: AUDIO_ROOT + '3_16.ogg', left: '520px', top: '313px' },
            { id1: 'aud40', id2: 'img40', src: AUDIO_ROOT + '3_17.ogg', left: '553px', top: '313px' },
            { id1: 'aud41', id2: 'img41', src: AUDIO_ROOT + '3_18.ogg', left: '580px', top: '313px' },
            { id1: 'aud42', id2: 'img42', src: AUDIO_ROOT + '3_19.ogg', left: '613px', top: '313px' },
            { id1: 'aud43', id2: 'img43', src: AUDIO_ROOT + '3_20.ogg', left: '640px', top: '313px' },
            { id1: 'aud44', id2: 'img44', src: AUDIO_ROOT + '3_21.ogg', left: '673px', top: '313px' },
            { id1: 'aud45', id2: 'img45', src: AUDIO_ROOT + '3_22.ogg', left: '700px', top: '313px' },

            { id1: 'aud46', id2: 'img46', src: AUDIO_ROOT + '4_1.ogg', left: '160px', top: '375px' },
            { id1: 'aud47', id2: 'img47', src: AUDIO_ROOT + '4_2.ogg', left: '340px', top: '375px' },
            { id1: 'aud48', id2: 'img48', src: AUDIO_ROOT + '4_3.ogg', left: '400px', top: '375px' },
            { id1: 'aud49', id2: 'img49', src: AUDIO_ROOT + '4_4.ogg', left: '460px', top: '375px' },
            { id1: 'aud50', id2: 'img50', src: AUDIO_ROOT + '4_5.ogg', left: '520px', top: '375px' },

            { id1: 'aud51', id2: 'img51', src: AUDIO_ROOT + '5_1.ogg', left: '100px', top: '435px' },
            { id1: 'aud52', id2: 'img52', src: AUDIO_ROOT + '5_2.ogg', left: '280px', top: '435px' },
            { id1: 'aud53', id2: 'img53', src: AUDIO_ROOT + '5_3.ogg', left: '580px', top: '435px' },
            { id1: 'aud54', id2: 'img54', src: AUDIO_ROOT + '5_4.ogg', left: '613px', top: '435px' },
            { id1: 'aud55', id2: 'img55', src: AUDIO_ROOT + '5_5.ogg', left: '640px', top: '435px' },

            { id1: 'aud56', id2: 'img56', src: AUDIO_ROOT + '6_1.ogg', left: '160px', top: '495px' },
            { id1: 'aud57', id2: 'img57', src: AUDIO_ROOT + '6_2.ogg', left: '280px', top: '495px' },
            { id1: 'aud58', id2: 'img58', src: AUDIO_ROOT + '6_3.ogg', left: '400px', top: '495px' },

            { id1: 'aud59', id2: 'img59', src: AUDIO_ROOT + '7_1.ogg', left: '253px', top: '555px' },
            { id1: 'aud60', id2: 'img60', src: AUDIO_ROOT + '7_2.ogg', left: '280px', top: '555px' },
            { id1: 'aud61', id2: 'img61', src: AUDIO_ROOT + '7_3.ogg', left: '373px', top: '555px' },
            { id1: 'aud62', id2: 'img62', src: AUDIO_ROOT + '7_4.ogg', left: '433px', top: '555px' },
            { id1: 'aud63', id2: 'img63', src: AUDIO_ROOT + '7_5.ogg', left: '493px', top: '555px' },

            { id1: 'aud64', id2: 'img64', src: AUDIO_ROOT + '8_1.ogg', left: '280px', top: '615px' },
            { id1: 'aud65', id2: 'img65', src: AUDIO_ROOT + '8_2.ogg', left: '400px', top: '615px' },
            { id1: 'aud66', id2: 'img66', src: AUDIO_ROOT + '8_3.ogg', left: '460px', top: '615px' },
            { id1: 'aud67', id2: 'img67', src: AUDIO_ROOT + '8_4.ogg', left: '520px', top: '615px' },

            { id1: 'aud68', id2: 'img68', src: AUDIO_ROOT + '9_1.ogg', left: '280px', top: '675px' }
		];
		for (var i = 0; i < audioParams.length; ++i) {
			createAudio(audioParams[i]);
		}
		audioEls = document.querySelectorAll("audio");
	})();

	function createAudio(params) {

		var $audio = $('<audio>', {
			id: params.id1,
			src: params.src
		}),
        $img = $('<img>', {
        	id: params.id2,
        	src: 'Content/Imgs/Play.png'
        }).css({ top: params.top, left: params.left });

		$container.append($audio, $img);

		$img.on('click', function () {
			$audio[0].play();
			$img.attr('src', 'Content/Imgs/Pause.png');
		});

		$audio.on('pause', function () {
			$img.attr('src', 'Content/Imgs/Play.png')
		});
	}

	window.p = 0;
	window.d = 0;

	audios = [].map.call(audioEls, function (item) { item.onloadeddata = onLoad; return item; });
	processor = context.createScriptProcessor(size, 2, 2);
	processor.onaudioprocess = onAudioProcess;
	processor.connect(context.destination);

	function startProcessing() {
		audios.forEach(function (audio) {
			sources.push(context.createMediaElementSource(audio));
			sources.last.connect(processor);
		});
	}
	function onLoad() {
		++loaded;

		loaded === audios.length && startProcessing();
	}
	function onAudioProcess(e) {
		var i = null,
            inp = e.inputBuffer.getChannelData(0),
            out = e.outputBuffer.getChannelData(0);

		for (i in inp) {
			out[i] = buffer1[i] = inp[i];
		}

		inp = e.inputBuffer.getChannelData(1),
        out = e.outputBuffer.getChannelData(1);

		for (i in inp) {
			out[i] = buffer2[i] = inp[i];
		}

		for (i in inp) {
			out[i] = buffer3[i] = inp[i];
		}

		for (i in inp) {
			out[i] = buffer4[i] = inp[i];
		}

		processed = true;
	}

	(function draw() {
		var i = 0;
		if (processed) {
			processed = false;

			ctx1.clearRect(0, 0, width, height + 600);
			ctx1.beginPath();
			ctx1.moveTo(0, 600);

			for (i = 0; i < size; ++i) {
				ctx1.lineTo(0 + buffer1[i] * maxHeight, i * step);
			}
			ctx1.strokeStyle = '#9c928a';
			ctx1.stroke();

			ctx2.clearRect(0, 0, width, height + 600);
			ctx2.beginPath();
			ctx2.moveTo(0, 600);

			for (i = 0; i < size; ++i) {
				ctx2.lineTo(0 - buffer2[i] * maxHeight, i * step);
			}
			ctx2.strokeStyle = '#9c928a';
			ctx2.stroke();

			ctx3.clearRect(0, 0, width, height + 600);
			ctx3.beginPath();
			ctx3.moveTo(0, 600);

			for (i = 0; i < size; ++i) {
				ctx3.lineTo(0 - buffer3[i] * maxHeight, i * step);
			}

			ctx3.strokeStyle = '#9c928a';
			ctx3.lineWidth = 1;
			ctx3.stroke();


			ctx4.clearRect(0, 0, width, height + 600);
			ctx4.moveTo(0, 600);

			for (i = 0; i < size; ++i) {
				ctx4.lineTo(0 - buffer4[i] * maxHeight, i * step);
			}
			ctx4.strokeStyle = '#9c928a';
			ctx4.stroke();

		}
		requestAnimationFrame(draw);
	}());
	$('.guitar').click(function () {
		$('#canvas')[0].play();
	});
});


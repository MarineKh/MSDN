const   ROOT = "https://en.wikipedia.org/wiki/",
        VOWELS_ROOT = "Content/Audios/Vowels/Vowel";
$(function () {

    var $container = $('<div>', {
        class: 'container'
    }).appendTo('body');

    var $cont = $('<div>', {
        class: 'cont'
    }),

        $table = $('<div>', {
            class: 'table'
        }),

        $rows = [
            $('<div>', {
                class: 'row'
            }),
            $('<div>', {
                class: 'row'
            })
        ],

        $cells = [
        [
            $('<div>', {
                class: 'cell'
            }),
            $('<div>', {
                class: 'cell'
            })
        ],
        [
            $('<div>', {
                class: 'cell'
            }),
            $('<div>', {
                class: 'cell'
            })
        ]
        ],

        $a = [
        [
            $('<a>')
        ],
        [
            $('<a>', {
                text: 'Front',
                title: 'Front',
                href: ROOT + 'Front_vowel',
                class: 'a1'
            }),
            $('<a>', {
                text: 'Near-front',
                title: 'Near-front',
                href: ROOT + 'Near-front_vowel',
                class: 'a2'
            }),
            $('<a>', {
                text: 'Central',
                title: 'Central',
                href: ROOT + 'Central_vowel',
                class: 'a3'
            }),
            $('<a>', {
                text: 'Near-back',
                title: 'Near-back',
                href: ROOT + 'Near-back_vowel',
                class: 'a4'
            }),
            $('<a>', {
                text: 'Back',
                title: 'Back',
                href: ROOT + 'Back_vowel',
                class: 'a5'
            })
        ],
        [
            $('<a>', {
                text: 'Close',
                title: 'Close',
                href: ROOT + 'Close_vowel'
            }),
            $('<a>', {
                text: 'Near-close',
                title: 'Near-close',
                href: ROOT + 'Near-close_vowel'
            }),
            $('<a>', {
                text: 'Close-mid',
                title: 'Close-mid',
                href: ROOT + 'Close-mid_vowel'
            }),
            $('<a>', {
                text: 'Mid',
                title: 'Mid',
                href: ROOT + 'Mid_vowel'
            }),
            $('<a>', {
                text: 'Open-mid',
                title: 'Open-mid',
                href: ROOT + 'Open-mid_vowel'
            }),
            $('<a>', {
                text: 'Near-open',
                title: 'Near-open',
                href: ROOT + 'Near-open_vowel'
            }),
            $('<a>', {
                text: 'Open',
                title: 'Open',
                href: ROOT + 'Open_vowel'
            })
        ],
        [
            $('<a>')
        ],
        ];

    for (let i = 0; i < $rows.length; i++) {
        for (let j = 0; j < $cells[i].length; j++) {
            $rows[i].append($cells[i][j]);
        }
    };

    $container.append (
        $cont.append (
            $table.append (
                $rows )));

    $('.cell').each(function (i, elem) {
        for (var j = 0; j < $a[i].length; j++) {
            $(elem).append($a[i][j]);
        }
    });

    $('.cell').last().append($('<canvas id = "myCanvas" width = "745" height = "555"></canvas>'));
    drawCanvas();
    setAudioVowels();
});
function drawCanvas() {
    var canvas = document.getElementById('myCanvas'),
        context = canvas.getContext('2d');

        context.font = '18px Arial';
        context.fillStyle = '#6d8927';
        context.strokeStyle = '#686868';

        context.beginPath();
        context.moveTo(50, 50);
        context.lineTo(600, 50);
        context.lineTo(600, 530);
        context.lineTo(300, 530);
        context.closePath();
        context.stroke();

        context.beginPath();
        context.moveTo(330, 50);
        context.lineTo(450, 520);
        context.stroke();

        context.beginPath();
        context.moveTo(133, 210);
        context.lineTo(600, 210);
        context.stroke();

        context.beginPath();
        context.moveTo(210, 370);
        context.lineTo(600, 370);
        context.stroke();

        context.fillText(`\u0069`, 40, 20);
        context.fillText(`\u0079`, 80, 20);
        context.fillText(`\u0268`, 300, 20);
        context.fillText(`\u0289`, 345, 20);
        context.fillText(`\u026f`, 568, 20);
        context.fillText(`\u0075`, 620, 20);
        context.fillText(`\u026a`, 185, 90);
        context.fillText(`\u028f`, 230, 90);
        context.fillText(`\u026a\u0308`, 325, 90);
        context.fillText(`\u028a\u0308`, 370, 90);
        context.fillText(`\u028a`, 470, 90);
        context.fillText(`\u0065`, 100, 180);
        context.fillText(`\u00f8`, 150, 180);
        context.fillText(`\u0258`, 340, 180);
        context.fillText(`\u0275`, 390, 180);
        context.fillText(`\u0264`, 568, 180);
        context.fillText(`\u006f`, 620, 180);
        context.fillText(`\u0065\u031e`, 140, 260);
        context.fillText(`\u00f8\u031e`, 190, 260);
        context.fillText(`\u0259`, 390, 260);
        context.fillText(`\u0264\u031e`, 568, 260);
        context.fillText(`\u006f\u031e`, 620, 260);
        context.fillText(`\u025b`, 185, 340);
        context.fillText(`\u0153`, 230, 340);
        context.fillText(`\u025c`, 380, 340);
        context.fillText(`\u025e`, 430, 340);
        context.fillText(`\u028c`, 570, 340);
        context.fillText(`\u0542`, 620, 340);
        context.fillText(`\u00e6`, 215, 420);
        context.fillText(`\u0250`, 405, 420);
        context.fillText(`\u0061`, 265, 500);
        context.fillText(`\u0276`, 320, 500);
        context.fillText(`\u00e4`, 425, 500);
        context.fillText(`\u0251`, 568, 500);
        context.fillText(`\u0252`, 620, 500);
}
function setAudioVowels() {
    var audioParams = [
        { id1: 'aud1', id2: 'img1', src: VOWELS_ROOT + '01.ogg', top: '52px', left: '60px' },
        { id1: 'aud2', id2: 'img2', src: VOWELS_ROOT + '02.ogg', top: '52px', left: '100px' },
        { id1: 'aud3', id2: 'img3', src: VOWELS_ROOT + '03.ogg', top: '52px', left: '320px' },
        { id1: 'aud4', id2: 'img4', src: VOWELS_ROOT + '04.ogg', top: '52px', left: '370px' },
        { id1: 'aud5', id2: 'img5', src: VOWELS_ROOT + '05.ogg', top: '52px', left: '595px' },
        { id1: 'aud6', id2: 'img6', src: VOWELS_ROOT + '06.ogg', top: '52px', left: '640px' },
        { id1: 'aud7', id2: 'img7', src: VOWELS_ROOT + '07.ogg', top: '115px', left: '205px' },
        { id1: 'aud8', id2: 'img8', src: VOWELS_ROOT + '08.ogg', top: '115px', left: '250px' },
        { id1: 'aud9', id2: 'img9', src: VOWELS_ROOT + '09.ogg', top: '115px', left: '355px' },
        { id1: 'aud10', id2: 'img10', src: VOWELS_ROOT + '10.ogg', top: '115px', left: '490px' },
        { id1: 'aud11', id2: 'img11', src: VOWELS_ROOT + '11.ogg', top: '215px', left: '150px' },
        { id1: 'aud12', id2: 'img12', src: VOWELS_ROOT + '12.ogg', top: '215px', left: '190px' },
        { id1: 'aud13', id2: 'img13', src: VOWELS_ROOT + '13.ogg', top: '215px', left: '380px' },
        { id1: 'aud14', id2: 'img14', src: VOWELS_ROOT + '14.ogg', top: '215px', left: '420px' },
        { id1: 'aud15', id2: 'img15', src: VOWELS_ROOT + '15.ogg', top: '215px', left: '595px' },
        { id1: 'aud16', id2: 'img16', src: VOWELS_ROOT + '16.ogg', top: '215px', left: '640px' },
        { id1: 'aud17', id2: 'img17', src: VOWELS_ROOT + '17.ogg', top: '275px', left: '180px' },
        { id1: 'aud18', id2: 'img18', src: VOWELS_ROOT + '18.ogg', top: '275px', left: '615px' },
        { id1: 'aud19', id2: 'img19', src: VOWELS_ROOT + '19.ogg', top: '375px', left: '230px' },
        { id1: 'aud20', id2: 'img20', src: VOWELS_ROOT + '20.ogg', top: '375px', left: '280px' },
        { id1: 'aud21', id2: 'img21', src: VOWELS_ROOT + '21.ogg', top: '375px', left: '400px' },
        { id1: 'aud22', id2: 'img22', src: VOWELS_ROOT + '22.ogg', top: '375px', left: '445px' },
        { id1: 'aud23', id2: 'img23', src: VOWELS_ROOT + '23.ogg', top: '375px', left: '595px' },
        { id1: 'aud24', id2: 'img24', src: VOWELS_ROOT + '24.ogg', top: '375px', left: '640px' },
        { id1: 'aud25', id2: 'img25', src: VOWELS_ROOT + '25.ogg', top: '440px', left: '265px' },
        { id1: 'aud26', id2: 'img26', src: VOWELS_ROOT + '26.ogg', top: '440px', left: '440px' },
        { id1: 'aud27', id2: 'img27', src: VOWELS_ROOT + '27.ogg', top: '535px', left: '290px' },
        { id1: 'aud28', id2: 'img28', src: VOWELS_ROOT + '28.ogg', top: '535px', left: '340px' },
        { id1: 'aud29', id2: 'img29', src: VOWELS_ROOT + '29.ogg', top: '535px', left: '465px' },
        { id1: 'aud30', id2: 'img30', src: VOWELS_ROOT + '30.ogg', top: '535px', left: '595px' },
        { id1: 'aud31', id2: 'img31', src: VOWELS_ROOT + '31.ogg', top: '535px', left: '640px' }
    ];

    for (let i = 0; i < audioParams.length; i++) {
        createAudio(audioParams[i]);
    }
};
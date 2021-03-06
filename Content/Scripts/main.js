(function () {
    var canvas1 = $('#line_first')[0],
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
        audioEls = document.querySelectorAll("audio"),
        context = new AudioContext(),
        processor = null,
        loaded = 0,
        audios = [],
        sources = [],
        buffer1 = new Float32Array(size),
        buffer2 = new Float32Array(size),
        buffer3 = new Float32Array(size),
        buffer4 = new Float32Array(size),
        });
$(()=> {
    let $container = $('<div/>').attr('class', 'container'),
        $typesContent = $('<div/>').attr('class', 'types-content'),
        $scores = $('<div/>').attr('class', 'scores'),
        $progressBar = $('<div/>').attr('id', 'progressBarCont'),
        $caption = $('<div/>').attr('class', 'caption'),
        $tbl = $('<div/>').attr('class', 'table'),
        $captionP = $('<p/>').text('integrated built in types'),
        scoreBtnsContent = [{'type': 'button', 'text':'Start a new Game', 'id': 'start', 'title': 'New Game' },
                            {'type': 'button', 'text':'Submit Results', 'id': 'finish', 'title': 'finsh Game'}],
        $scoreBtns = [];

    $('body').append($container
                .append($typesContent
                    .append([$scores, $progressBar, $caption, $tbl])));
    $caption.append($captionP);

    for(let i = 0; i < scoresJson.length; ++i) {

        let $scoresDiv = $('<div/>').appendTo($scores);

        $scoresDiv.append($scoreTagname = $('<' + scoresJson[i].tagName + '> </'+ scoresJson[i].tagName + '>' ));
        $scoreTagname.text(scoresJson[i].text)
                        .attr({
                            'id': scoresJson[i].id, 'title': scoresJson[i].title
                        })
    }
    for(let i = 0; i < progBarJson.length; ++i) {
        $progressBar.append($tagname = $('<' + progBarJson[i].tagName + '> </'+ progBarJson[i].tagName + '>' ));
        $tagname.text(progBarJson[i].text)
                    .attr({
                        'id': progBarJson[i].id, 'title': progBarJson[i].title
                    })
    }
    for(let i = 0; i < tblJson.length; ++i) {
        let $tableRow = $('<div/>').attr('class', 'row').appendTo($tbl);

        for(let j = 0; j < tblJson[i].length; ++j) {
            let $tableColumn = $('<' + tblJson[i][j].tagName + '> </'+ tblJson[i][j].tagName + '>').appendTo($tableRow);
            if(tblJson[i][j].text) {
                $tableColumn.text(tblJson[i][j].text);
            }
           $tableColumn.attr({
                    'class': tblJson[i][j].class
           });

           if(tblJson[i][j].child){
                let child = tblJson[i][j].child;

                for(let k = 0; k < child.length; ++k) {
                    let $childDiv = $('<' + child[k].tagName + '> </'+ child[k].tagName + '>').appendTo($tableColumn);

                    if(child[k].child) {
                        for(let m = 0; m < child[k].child.length; ++m) {
                            let $childInput = $('<' + child[k].child[m].tagName + '> </'+ child[k].child[m].tagName + '>').appendTo($childDiv);
                            $childInput.attr({
                                    'type': child[k].child[m].type, 'id': child[k].child[m].id, 'name': child[k].child[m].name,
                                        'value': child[k].child[m].value, 'disabled': child[k].child[m].disabled,
                                'data-correct' : child[k].child[m]['data-correct'],
                            });
                        }
                    }
                }
           }
        } //j for
    }// i for

    for(let i = 0; i < scoreBtnsContent.length; ++i) {
        $($scores).append($scoreBtns[i] = $('<button>', scoreBtnsContent[i]));
    }

    let id,
        $input = $('input'),
        $start = $('#start'),
        $finish = $('#finish'),
        $outputCorrAnswers = $('#outputCorrAnswers'),
        $outputIncorrAnswers = $('#outputIncorrAnswers'),
        $correctInput = $('input[data-correct]');

    function progressLoading() {
        let $prg = $('#progressBar'),
            $percent = $('#lblProgress'),
            counter = 0,
            progress = 0;

        id = setInterval(frame, 1000);

        function frame() {
            if(counter == 100) {
                clearInterval(id);
                $input.attr('disabled', 'true');
                ckeckAnswers();
            } else {
                progress += 1;
                counter += 1;
                $prg.width(progress + 'px');
                $percent.text(counter + '%');
            }
        }
    }
    function stopProgressLoading() {
        clearInterval(id);
    }

    $start.click(function(){
        $input.removeAttr('disabled');
        $start.css('background-color', '#bbbaba');
        $finish.css('background-color', '#bcd184');
        $correctInput.css({'outline': 'none'});

        [$outputCorrAnswers, $outputIncorrAnswers].forEach(($item, i) => $item.empty());

        if($input.is(':checked')){
            $input.prop('checked',false)
        }

        progressLoading();
    });

    $finish.click(function() {
        $input.attr('disabled', 'true');
        $start.css('background-color', '#bcd184');
        $finish.css('background-color', '#bbbaba');
        $correctInput.css({'outline': '3px dotted #99c038', 'outline-offset': '3px'});

        stopProgressLoading();
        ckeckAnswers();

    });

    function ckeckAnswers() {
        let i = 0,
            j = 0;

        $outputCorrAnswers.html('Correct Answers: ' + i);
        $outputIncorrAnswers.html('Incorrect Answers: ' + j);

        $('input:checked').each(function(index, item) {
            let $item = $(item);
            if($item.data('correct')) {
                i++;
                $outputCorrAnswers.html('Correct Answers: ' + i);
            } else {
                j++;
                $outputIncorrAnswers.html('Incorrect Answers: ' + j);
            }
        });
    }
});
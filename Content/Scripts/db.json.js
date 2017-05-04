var scoresJson = [
    { tagName: 'p', title: 'Scores Total', text: 'Scores Total' },
    { tagName: 'output', id: 'outputCorrAnswers', title: 'Correct Answer Total' },
    { tagName: 'output', id: 'outputIncorrAnswers', title: 'Correct Answer Total' }
];
var progBarJson = [
    { tagName: 'progress', id: 'progressBar', value: '0', max: '100' },
    { tagName: 'span', id: 'lblProgress', text: '0%' }
];
var tblJson = [
    [
        {tagName: 'div', 'class': 'column'},
        {tagName: 'div', 'class': 'column', text: 'Type'},
        {tagName: 'div', 'class': 'column', text: 'C# Alias'},
        {tagName: 'div', 'class': 'column', text: 'IL'},
        {tagName: 'div', 'class': 'column', text: 'SQL'},
        {tagName: 'div', 'class': 'column', text: 'Integral'},
        {tagName: 'div', 'class': 'column', text: 'Built In'},
        {tagName: 'div', 'class': 'column', text: 'Integrated'},
        {tagName: 'div', 'class': 'column', text: 'Nullable'},
        {tagName: 'div', 'class': 'column', text: 'Positive'},
        {tagName: 'div', 'class': 'column', text: 'Negative'},
        {tagName: 'div', 'class': 'column', text: 'Stack'},
        {tagName: 'div', 'class': 'column', text: 'Heap'},
        {tagName: 'div', 'class': 'column', text: 'Struct'}
    ],
    [
        {tagName: 'div', 'class': 'cell', text: '1'},
        {tagName: 'div', 'class': 'cell', text: 'Object'},
        {tagName: 'div', 'class': 'cell', text: 'object'},
        {tagName: 'div', 'class': 'cell', text: 'object'},
        {tagName: 'div', 'class': 'cell', text: 'sql_variant'},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isObjIntegral', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isObjInteger', name : 'isObjIntegral', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isObjBuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isObjBuiltIn', name : 'isObjBuiltIn', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isObjIntegrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isObjIntegrated', name : 'isObjIntegrated', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isObjNull', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isObjNull', name : 'isObjNull', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isObjPos', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isObjPos', name : 'isObjPos', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isObjNeg', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isObjNeg', name : 'isObjNeg', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isObjStack', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isObjStack', name : 'isObjStack', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isObjHeap', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isObjHeap', name : 'isObjHeap', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isObjStruct', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isObjStruct', name : 'isObjStruct', value: '0'}
            ]}
        ]}

    ],
    [
        {tagName: 'div', 'class': 'cell', text: '2'},
        {tagName: 'div', 'class': 'cell', text: 'String'},
        {tagName: 'div', 'class': 'cell', text: 'string'},
        {tagName: 'div', 'class': 'cell', text: 'string'},
        {tagName: 'div', 'class': 'cell', text: 'char, nchar, varchar, nvarchar, text, ntext'},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isStrIntegral', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isStrIntegral', name : 'isStrIntegral', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isStrBuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isStrBuiltIn', name : 'isStrBuiltIn', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isStrIntegrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isStrIntegrated', name : 'isStrIntegrated', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isStrNull', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isStrNull', name : 'isStrNull', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isStrPos', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isStrPos', name : 'isStrPos', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isStrNeg', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isStrNeg', name : 'isStrNeg', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isStrStack', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isStrStack', name : 'isStrStack', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isStrHeap', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isStrHeap', name : 'isStrHeap', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isStrStruct', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isStrStruct', name : 'isStrStruct', value: '0'}
            ]}
        ]}
    ],
    [
        {tagName: 'div', 'class': 'cell', text: '3'},
        {tagName: 'div', 'class': 'cell', text: 'Void'},
        {tagName: 'div', 'class': 'cell', text: 'void'},
        {tagName: 'div', 'class': 'cell', text: 'void'},
        {tagName: 'div', 'class': 'cell', text: 'n/a'},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isVoidIntegral', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isVoidIntegral', name : 'isVoidIntegral', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isVoidBuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isVoidBuiltIn', name : 'isVoidBuiltIn', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isVoidIntegrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isVoidIntegrated', name : 'isVoidIntegrated', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isVoidNull', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isVoidNull', name : 'isVoidNull', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isVoidPos', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isVoidPos', name : 'isVoidPos', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isVoidNeg', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isVoidNeg', name : 'isVoidNeg', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isVoidStack', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isVoidStack', name : 'isVoidStack', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isVoidHeap', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isVoidHeap', name : 'isVoidHeap', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isVoidStruct', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isVoidStruct', name : 'isVoidStruct', value: '0'}
            ]}
        ]}

    ],
    [
        {tagName: 'div', 'class': 'cell', text: '4'},
        {tagName: 'div', 'class': 'cell', text: 'Char'},
        {tagName: 'div', 'class': 'cell', text: 'char'},
        {tagName: 'div', 'class': 'cell', text: 'char'},
        {tagName: 'div', 'class': 'cell', text: 'n/a'},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isCharIntegral', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isCharIntegral', name : 'isCharIntegral', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isCharBuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isCharBuiltIn', name : 'isCharBuiltIn', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isCharIntegrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isCharIntegrated', name : 'isCharIntegrated', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isCharNull', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isCharNull', name : 'isCharNull', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isCharPos', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isCharPos', name : 'isCharPos', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isCharNeg', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isCharNeg', name : 'isCharNeg', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isCharStack', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isCharStack', name : 'isCharStack', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isCharHeap', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isCharHeap', name : 'isCharHeap', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isCharStruct', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isCharStruct', name : 'isCharStruct', value: '0'}
            ]}
        ]}
    ],
    [
        {tagName: 'div', 'class': 'cell', text: '5'},
        {tagName: 'div', 'class': 'cell', text: 'Byte'},
        {tagName: 'div', 'class': 'cell', text: 'byte'},
        {tagName: 'div', 'class': 'cell', text: 'unsigned int8'},
        {tagName: 'div', 'class': 'cell', text: 'tinyint'},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isByteIntegral', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isByteIntegral', name : 'isByteIntegral', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isByteBuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isByteBuiltIn', name : 'isByteBuiltIn', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isByteIntegrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isByteIntegrated', name : 'isByteIntegrated', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isByteNull', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isByteNull', name : 'isByteNull', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isBytePos', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isBytePos', name : 'isBytePos', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isByteNeg', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isByteNeg', name : 'isByteNeg', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isByteStack', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isByteStack', name : 'isByteStack', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isByteHeap', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isByteHeap', name : 'isByteHeap', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isByteStruct', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isByteStruct', name : 'isByteStruct', value: '0'}
            ]}
        ]}
    ],
    [
        {tagName: 'div', 'class': 'cell', text: '6'},
        {tagName: 'div', 'class': 'cell', text: 'Sbyte'},
        {tagName: 'div', 'class': 'cell', text: 'sbyte'},
        {tagName: 'div', 'class': 'cell', text: 'int8'},
        {tagName: 'div', 'class': 'cell', text: 'n/a'},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isSByteIntegral', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isSByteIntegral', name : 'isSByteIntegral', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isSByteBuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isSByteBuiltIn', name : 'isSByteBuiltIn', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isSByteIntegrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isSByteIntegrated', name : 'isSByteIntegrated', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isSByteNull', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isSByteNull', name : 'isSByteNull', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isSBytePos', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isSBytePos', name : 'isSBytePos', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isSByteNeg', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isSByteNeg', name : 'isSByteNeg', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isSByteStack', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isSByteStack', name : 'isSByteStack', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isSByteHeap', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isSByteHeap', name : 'isSByteHeap', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isSByteStruct', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isSByteStruct', name : 'isSByteStruct', value: '0'}
            ]}
        ]}
    ],
    [
        {tagName: 'div', 'class': 'cell', text: '7'},
        {tagName: 'div', 'class': 'cell', text: 'Int16'},
        {tagName: 'div', 'class': 'cell', text: 'short'},
        {tagName: 'div', 'class': 'cell', text: 'int16'},
        {tagName: 'div', 'class': 'cell', text: 'smallint'},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isInt16Integral', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isInt16Integral', name : 'isInt16Integral', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isInt16BuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isInt16BuiltIn', name : 'isInt16BuiltIn', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isInt16Integrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isInt16Integrated', name : 'isInt16Integrated', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isInt16Null', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isInt16Null', name : 'isInt16Null', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isInt16Pos', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isInt16Pos', name : 'isInt16Pos', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isInt16Neg', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isInt16Neg', name : 'isInt16Neg', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isInt16Stack', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isInt16Stack', name : 'isInt16Stack', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isInt16Heap', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isInt16Heap', name : 'isInt16Heap', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isInt16Struct', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isInt16Struct', name : 'isInt16Struct', value: '0'}
            ]}
        ]}
    ],
    [
        {tagName: 'div', 'class': 'cell', text: '8'},
        {tagName: 'div', 'class': 'cell', text: 'UInt16'},
        {tagName: 'div', 'class': 'cell', text: 'ushort'},
        {tagName: 'div', 'class': 'cell', text: 'unsigned int16'},
        {tagName: 'div', 'class': 'cell', text: 'n/a'},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isUInt16Integral', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isUInt16Integral', name : 'isUInt16Integral', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isUInt16BuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isUInt16BuiltIn', name : 'isUInt16BuiltIn', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isUInt16Integrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isUInt16Integrated', name : 'isUInt16Integrated', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isUInt16Null', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isUInt16Null', name : 'isUInt16Null', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isUInt16Pos', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isUInt16Pos', name : 'isUInt16Pos', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isUInt16Neg', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isUInt16Neg', name : 'isUInt16Neg', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isUInt16Stack', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isUInt16Stack', name : 'isUInt16Stack', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isUInt16Heap', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isUInt16Heap', name : 'isUInt16Heap', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isUInt16Struct', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isUInt16Struct', name : 'isUInt16Struct', value: '0'}
            ]}
        ]}
    ],
    [
        {tagName: 'div', 'class': 'cell', text: '9'},
        {tagName: 'div', 'class': 'cell', text: 'Int32'},
        {tagName: 'div', 'class': 'cell', text: 'int'},
        {tagName: 'div', 'class': 'cell', text: 'int32'},
        {tagName: 'div', 'class': 'cell', text: 'int'},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isInt32Integral', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isInt32Integral', name : 'isInt32Integral', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isInt32BuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isInt32BuiltIn', name : 'isInt32BuiltIn', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isInt32Integrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isInt32Integrated', name : 'isInt32Integrated', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isInt32Null', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isInt32Null', name : 'isInt32Null', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isInt32Pos', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isInt32Pos', name : 'isInt32Pos', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isInt32Neg', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isInt32Neg', name : 'isInt32Neg', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isInt32Stack', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isInt32Stack', name : 'isInt32Stack', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isInt32Heap', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isInt32Heap', name : 'isInt32Heap', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isInt32Struct', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isInt32Struct', name : 'isInt32Struct', value: '0'}
            ]}
        ]}
    ],
    [
        {tagName: 'div', 'class': 'cell', text: '10'},
        {tagName: 'div', 'class': 'cell', text: 'UInt32'},
        {tagName: 'div', 'class': 'cell', text: 'uint'},
        {tagName: 'div', 'class': 'cell', text: 'insignedint32'},
        {tagName: 'div', 'class': 'cell', text: 'n/a'},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isUInt32Integral', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isUInt32Integral', name : 'isUInt32Integral', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isUInt32BuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isUInt32BuiltIn', name : 'isUInt32BuiltIn', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isUInt32Integrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isUInt32Integrated', name : 'isUInt32Integrated', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isUInt32Null', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isUInt32Null', name : 'isUInt32Null', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isUInt32Pos', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isUInt32Pos', name : 'isUInt32Pos', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isUInt32Neg', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isUInt32Neg', name : 'isUInt32Neg', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isUInt32Stack', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isUInt32Stack', name : 'isUInt32Stack', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isUInt32Heap', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isUInt32Heap', name : 'isUInt32Heap', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isUInt32Struct', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isUInt32Struct', name : 'isUInt32Struct', value: '0'}
            ]}
        ]}
    ],
    [
        {tagName: 'div', 'class': 'cell', text: '11'},
        {tagName: 'div', 'class': 'cell', text: 'Int64'},
        {tagName: 'div', 'class': 'cell', text: 'long'},
        {tagName: 'div', 'class': 'cell', text: 'int64'},
        {tagName: 'div', 'class': 'cell', text: 'bigint'},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isInt16Integral', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isInt16Integral', name : 'isInt16Integral', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isInt16BuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isInt16BuiltIn', name : 'isInt16BuiltIn', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isInt16Integrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isInt16Integrated', name : 'isInt16Integrated', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isInt16Null', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isInt16Null', name : 'isInt16Null', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isInt16Pos', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isInt16Pos', name : 'isInt16Pos', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isInt16Neg', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isInt16Neg', name : 'isInt16Neg', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isInt16Stack', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isInt16Stack', name : 'isInt16Stack', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isInt16Heap', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isInt16Heap', name : 'isInt16Heap', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isInt16Struct', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isInt16Struct', name : 'isInt16Struct', value: '0'}
            ]}
        ]}
    ],
    [
        {tagName: 'div', 'class': 'cell', text: '12'},
        {tagName: 'div', 'class': 'cell', text: 'UInt64'},
        {tagName: 'div', 'class': 'cell', text: 'ulong'},
        {tagName: 'div', 'class': 'cell', text: 'unsigned int64'},
        {tagName: 'div', 'class': 'cell', text: 'n/a'},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isUInt64Integral', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isUInt64Integral', name : 'isUInt64Integral', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isUInt64BuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isUInt64BuiltIn', name : 'isUInt64BuiltIn', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isUInt64Integrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isUInt64Integrated', name : 'isUInt64Integrated', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isUInt64Null', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isUInt64Null', name : 'isUInt64Null', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isUInt64Pos', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isUInt64Pos', name : 'isUInt64Pos', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isUInt64Neg', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isUInt64Neg', name : 'isUInt64Neg', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isUInt64Stack', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isUInt64Stack', name : 'isUInt64Stack', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isUInt64Heap', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isUInt64Heap', name : 'isUInt64Heap', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isUInt64Struct', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isUInt64Struct', name : 'isUInt64Struct', value: '0'}
            ]}
        ]}
    ],
    [
        {tagName: 'div', 'class': 'cell', text: '13'},
        {tagName: 'div', 'class': 'cell', text: 'Decimal'},
        {tagName: 'div', 'class': 'cell', text: 'decimal'},
        {tagName: 'div', 'class': 'cell', text: 'System.Decimal'},
        {tagName: 'div', 'class': 'cell', text: 'decimal, money, smallmoney, numeric'},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isDecIntegral', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isDecIntegral', name : 'isDecIntegral', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isDecBuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isDecBuiltIn', name : 'isDecBuiltIn', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isDecIntegrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isDecIntegrated', name : 'isDecIntegrated', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isDecNull', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isDecNull', name : 'isDecNull', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isDecPos', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isDecPos', name : 'isDecPos', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isDecNeg', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isDecNeg', name : 'isDecNeg', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isDecStack', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isDecStack', name : 'isDecStack', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isDecHeap', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isDecHeap', name : 'isDecHeap', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isDecStruct', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isDecStruct', name : 'isDecStruct', value: '0'}
            ]}
        ]}
    ],
    [
        {tagName: 'div', 'class': 'cell', text: '14'},
        {tagName: 'div', 'class': 'cell', text: 'Double'},
        {tagName: 'div', 'class': 'cell', text: 'double'},
        {tagName: 'div', 'class': 'cell', text: 'float64'},
        {tagName: 'div', 'class': 'cell', text: 'float'},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isDblIntegral', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isDblIntegral', name : 'isDblIntegral', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isDblBuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isDblBuiltIn', name : 'isDblBuiltIn', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isDblIntegrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isDblIntegrated', name : 'isDblIntegrated', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isDblNull', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isDblNull', name : 'isDblNull', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isDblPos', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isDblPos', name : 'isDblPos', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isDblNeg', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isDblNeg', name : 'isDblNeg', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isDblStack', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isDblStack', name : 'isDblStack', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isDblHeap', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isDblHeap', name : 'isDblHeap', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isDblStruct', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isDblStruct', name : 'isDblStruct', value: '0'}
            ]}
        ]}
    ],
    [
        {tagName: 'div', 'class': 'cell', text: '15'},
        {tagName: 'div', 'class': 'cell', text: 'Single'},
        {tagName: 'div', 'class': 'cell', text: 'float'},
        {tagName: 'div', 'class': 'cell', text: 'float32'},
        {tagName: 'div', 'class': 'cell', text: 'n/a'},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isSngIntegral', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isSngIntegral', name : 'isSngIntegral', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isSngBuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isSngBuiltIn', name : 'isSngBuiltIn', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isSngIntegrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isSngIntegrated', name : 'isSngIntegrated', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isSngNull', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isSngNull', name : 'isSngNull', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isSngPos', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isSngPos', name : 'isSngPos', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isSngNeg', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isSngNeg', name : 'isSngNeg', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isSngStack', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isSngStack', name : 'isSngStack', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isSngHeap', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isSngHeap', name : 'isSngHeap', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isSngStruct', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isSngStruct', name : 'isSngStruct', value: '0'}
            ]}
        ]}
    ],
    [
        {tagName: 'div', 'class': 'cell', text: '16'},
        {tagName: 'div', 'class': 'cell', text: 'Boolean'},
        {tagName: 'div', 'class': 'cell', text: 'bool'},
        {tagName: 'div', 'class': 'cell', text: 'bool'},
        {tagName: 'div', 'class': 'cell', text: 'bit'},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isBoolIntegral', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isBoolIntegral', name : 'isBoolIntegral', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isBoolBuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isBoolBuiltIn', name : 'isBoolBuiltIn', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isBoolIntegrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isBoolIntegrated', name : 'isBoolIntegrated', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isBoolNull', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isBoolNull', name : 'isBoolNull', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isBoolPos', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isBoolPos', name : 'isBoolPos', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isBoolNeg', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isBoolNeg', name : 'isBoolNeg', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isBoolStack', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isBoolStack', name : 'isBoolStack', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isBoolHeap', value: '1', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isBoolHeap', name : 'isBoolHeap', value: '0'}
            ]}
        ]},
        {tagName: 'div', 'class': 'cell', child:[
            {tagName: 'div', child: [
                {tagName: 'input', type: 'checkbox', name : 'isBoolStruct', value: '1', 'data-correct': 'true', disabled: 'disabled' },
                {tagName: 'input', type: 'hidden', id : 'isBoolStruct', name : 'isBoolStruct', value: '0'}
            ]}
        ]}
    ]
];
/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'memory',
                type: 'image',
                rect: ['-104px', '-1507px','1130px','3400px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"memory.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['191px', '33px','auto','auto','auto', 'auto'],
                text: "Each cell is 1 byte",
                font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'byte1',
                type: 'rect',
                rect: ['358px', '331px','18px','45px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [1,"rgba(0,0,0,1)","solid"]
            },
            {
                id: 'byte2',
                type: 'rect',
                rect: ['339px', '331px','18px','45px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [1,"rgba(0,0,0,1)","solid"]
            },
            {
                id: 'byte3',
                type: 'rect',
                rect: ['321px', '331px','18px','45px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [1,"rgba(0,0,0,1)","solid"]
            },
            {
                id: 'byte4',
                type: 'rect',
                rect: ['302px', '331px','18px','45px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [1,"rgba(0,0,0,1)","solid"]
            },
            {
                id: 'byte5',
                type: 'rect',
                rect: ['283px', '331px','18px','45px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [1,"rgba(0,0,0,1)","solid"]
            },
            {
                id: 'byte6',
                type: 'rect',
                rect: ['265px', '331px','18px','45px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [1,"rgba(0,0,0,1)","solid"]
            },
            {
                id: 'byte7',
                type: 'rect',
                rect: ['247px', '331px','18px','45px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [1,"rgba(0,0,0,1)","solid"]
            },
            {
                id: 'byte8',
                type: 'rect',
                rect: ['229px', '331px','18px','45px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [1,"rgba(0,0,0,1)","solid"]
            },
            {
                id: 'Text3',
                display: 'none',
                type: 'text',
                rect: ['366px', '314px','auto','auto','auto', 'auto'],
                overflow: 'visible',
                text: "1",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 12, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text3Copy',
                display: 'none',
                type: 'text',
                rect: ['348px', '314px','auto','auto','auto', 'auto'],
                overflow: 'visible',
                text: "2",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 12, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text3Copy2',
                display: 'none',
                type: 'text',
                rect: ['328px', '314px','auto','auto','auto', 'auto'],
                overflow: 'visible',
                text: "4",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 12, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text3Copy3',
                display: 'none',
                type: 'text',
                rect: ['308px', '314px','auto','auto','auto', 'auto'],
                overflow: 'visible',
                text: "8",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 12, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text3Copy4',
                display: 'none',
                type: 'text',
                rect: ['286px', '314px','auto','auto','auto', 'auto'],
                overflow: 'visible',
                text: "16",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 12, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text3Copy5',
                display: 'none',
                type: 'text',
                rect: ['270px', '314px','auto','auto','auto', 'auto'],
                overflow: 'visible',
                text: "32",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 12, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text3Copy6',
                display: 'none',
                type: 'text',
                rect: ['251px', '314px','auto','auto','auto', 'auto'],
                overflow: 'visible',
                text: "64",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 12, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text3Copy7',
                display: 'none',
                type: 'text',
                rect: ['228px', '314px','auto','auto','auto', 'auto'],
                overflow: 'visible',
                text: "128",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 12, "rgba(0,0,0,1)", "400", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_byte6}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '27px'],
                ["style", "left", '7px'],
                ["style", "height", '18px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '18px']
            ],
            "${_Text3Copy}": [
                ["style", "top", '314px'],
                ["style", "display", 'none'],
                ["style", "left", '348px'],
                ["style", "overflow", 'visible']
            ],
            "${_byte5}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '27px'],
                ["style", "left", '7px'],
                ["style", "height", '18px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '18px']
            ],
            "${_byte3}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '27px'],
                ["style", "left", '7px'],
                ["style", "height", '18px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '18px']
            ],
            "${_byte4}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '27px'],
                ["style", "border-width", '1px'],
                ["style", "height", '18px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '7px'],
                ["style", "width", '18px']
            ],
            "${_memory}": [
                ["style", "left", '-104px'],
                ["style", "top", '-1507px']
            ],
            "${_Text3Copy7}": [
                ["style", "top", '314px'],
                ["style", "display", 'none'],
                ["style", "left", '228px'],
                ["style", "overflow", 'visible']
            ],
            "${_byte7}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '27px'],
                ["style", "left", '7px'],
                ["style", "height", '18px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '18px']
            ],
            "${_Text3Copy5}": [
                ["style", "top", '314px'],
                ["style", "display", 'none'],
                ["style", "left", '270px'],
                ["style", "overflow", 'visible']
            ],
            "${_Text3Copy6}": [
                ["style", "top", '314px'],
                ["style", "display", 'none'],
                ["style", "left", '251px'],
                ["style", "overflow", 'visible']
            ],
            "${_Text3Copy2}": [
                ["style", "top", '314px'],
                ["style", "display", 'none'],
                ["style", "left", '328px'],
                ["style", "overflow", 'visible']
            ],
            "${_byte2}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '27px'],
                ["style", "left", '7px'],
                ["style", "height", '18px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '18px']
            ],
            "${_Text3Copy4}": [
                ["style", "top", '314px'],
                ["style", "display", 'none'],
                ["style", "left", '286px'],
                ["style", "overflow", 'visible']
            ],
            "${_Text}": [
                ["style", "left", '191px'],
                ["style", "top", '33px']
            ],
            "${_byte8}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '27px'],
                ["style", "left", '7px'],
                ["style", "height", '18px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '18px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '550px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text3Copy3}": [
                ["style", "top", '314px'],
                ["style", "display", 'none'],
                ["style", "left", '308px'],
                ["style", "overflow", 'visible']
            ],
            "${_Text3}": [
                ["style", "top", '314px'],
                ["style", "display", 'none'],
                ["style", "left", '366px'],
                ["style", "overflow", 'visible']
            ],
            "${_byte1}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "top", '27px'],
                ["style", "border-width", '1px'],
                ["style", "height", '18px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '7px'],
                ["style", "width", '18px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3065,
            autoPlay: true,
            timeline: [
                { id: "eid152", tween: [ "style", "${_byte5}", "top", '331px', { fromValue: '27px'}], position: 0, duration: 3065 },
                { id: "eid142", tween: [ "style", "${_byte3}", "top", '331px', { fromValue: '27px'}], position: 0, duration: 3065 },
                { id: "eid139", tween: [ "style", "${_byte7}", "left", '247px', { fromValue: '7px'}], position: 0, duration: 3065 },
                { id: "eid156", tween: [ "style", "${_Text3Copy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid164", tween: [ "style", "${_Text3Copy4}", "display", 'block', { fromValue: 'none'}], position: 3065, duration: 0 },
                { id: "eid138", tween: [ "style", "${_byte4}", "top", '331px', { fromValue: '27px'}], position: 0, duration: 3065 },
                { id: "eid137", tween: [ "style", "${_byte4}", "left", '302px', { fromValue: '7px'}], position: 0, duration: 3065 },
                { id: "eid151", tween: [ "style", "${_byte5}", "left", '283px', { fromValue: '7px'}], position: 0, duration: 3065 },
                { id: "eid159", tween: [ "style", "${_Text3Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid167", tween: [ "style", "${_Text3Copy}", "display", 'block', { fromValue: 'none'}], position: 3065, duration: 0 },
                { id: "eid148", tween: [ "style", "${_byte2}", "top", '331px', { fromValue: '27px'}], position: 0, duration: 3065 },
                { id: "eid143", tween: [ "style", "${_byte8}", "left", '229px', { fromValue: '7px'}], position: 0, duration: 3065 },
                { id: "eid144", tween: [ "style", "${_byte8}", "top", '331px', { fromValue: '27px'}], position: 0, duration: 3065 },
                { id: "eid146", tween: [ "style", "${_byte1}", "top", '331px', { fromValue: '27px'}], position: 0, duration: 3065 },
                { id: "eid160", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid168", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 3065, duration: 0 },
                { id: "eid149", tween: [ "style", "${_byte6}", "left", '265px', { fromValue: '7px'}], position: 0, duration: 3065 },
                { id: "eid145", tween: [ "style", "${_byte1}", "left", '358px', { fromValue: '7px'}], position: 0, duration: 3065 },
                { id: "eid141", tween: [ "style", "${_byte3}", "left", '321px', { fromValue: '7px'}], position: 0, duration: 3065 },
                { id: "eid140", tween: [ "style", "${_byte7}", "top", '331px', { fromValue: '27px'}], position: 0, duration: 3065 },
                { id: "eid158", tween: [ "style", "${_Text3Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid166", tween: [ "style", "${_Text3Copy2}", "display", 'block', { fromValue: 'none'}], position: 3065, duration: 0 },
                { id: "eid157", tween: [ "style", "${_Text3Copy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid165", tween: [ "style", "${_Text3Copy3}", "display", 'block', { fromValue: 'none'}], position: 3065, duration: 0 },
                { id: "eid155", tween: [ "style", "${_Text3Copy5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid163", tween: [ "style", "${_Text3Copy5}", "display", 'block', { fromValue: 'none'}], position: 3065, duration: 0 },
                { id: "eid153", tween: [ "style", "${_Text3Copy7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid161", tween: [ "style", "${_Text3Copy7}", "display", 'block', { fromValue: 'none'}], position: 3065, duration: 0 },
                { id: "eid154", tween: [ "style", "${_Text3Copy6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid162", tween: [ "style", "${_Text3Copy6}", "display", 'block', { fromValue: 'none'}], position: 3065, duration: 0 },
                { id: "eid150", tween: [ "style", "${_byte6}", "top", '331px', { fromValue: '27px'}], position: 0, duration: 3065 },
                { id: "eid147", tween: [ "style", "${_byte2}", "left", '339px', { fromValue: '7px'}], position: 0, duration: 3065 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-84694215");

/*!
 * Lorem Ipsum Context Menu
 *
 * Includes jQuery JavaScript Library v1.10.2
 * http://jquery.com/
 *
 */
(function() {
    var loremIpsum = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie, nibh vel pretium rutrum, neque eros pellentesque turpis, quis pharetra lorem urna ac tellus. Vestibulum aliquam ultrices tincidunt. Fusce molestie a enim in iaculis. Ut congue turpis vel volutpat eleifend. Cras neque eros, bibendum ac tellus blandit, pharetra fermentum mauris. In lacinia velit sed mi bibendum, nec accumsan dui mollis. Praesent id felis a massa blandit feugiat. Sed pretium viverra erat, at egestas quam aliquet id. Maecenas at turpis purus. Nunc egestas, elit at condimentum suscipit, nisl metus elementum mauris, sit amet feugiat massa tortor nec dui.',
        'Praesent sed sagittis felis. Nulla consequat vulputate interdum. Vestibulum vestibulum lorem sed nibh auctor gravida. Nunc vel ante vel mi eleifend vehicula vitae in justo. Aenean eget tempus ante. Aenean id diam imperdiet, pharetra ligula sit amet, bibendum mauris. Sed sit amet dui vel purus pharetra gravida eu ac ante. Pellentesque sit amet mattis massa. Proin porta placerat purus quis facilisis. Sed accumsan magna sapien, a porta sapien mollis eget. Donec enim arcu, semper nec neque eget, iaculis tincidunt purus. Integer feugiat vehicula venenatis. Aenean tincidunt ligula sed adipiscing facilisis. Proin at dictum leo.',
        'Nullam id augue gravida, aliquam est iaculis, malesuada dolor. Suspendisse potenti. Fusce a malesuada orci, eget consectetur est. Aenean ipsum libero, commodo vitae laoreet eleifend, aliquam sed leo. Vivamus eros erat, congue quis iaculis a, ornare eget leo. Proin tincidunt turpis ligula, id congue est placerat quis. Suspendisse in quam felis. Nunc semper nunc elit, ut molestie ante congue ac. Vivamus nec eros ac mauris vehicula congue. Suspendisse egestas risus eu eros pulvinar elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
        'Nunc lobortis justo risus, et tincidunt urna condimentum sit amet. Nullam a arcu ut quam rhoncus molestie. Nam quis condimentum elit, non rhoncus lorem. Nulla pellentesque fringilla commodo. Suspendisse molestie a lectus ac malesuada. Cras adipiscing sit amet enim non vestibulum. Morbi et diam ac tellus lacinia rhoncus. Ut justo nisi, vulputate ut neque ac, ultrices laoreet diam. Vivamus elementum, nulla eu sodales varius, magna risus consequat purus, quis mollis lorem velit eu est. Fusce eleifend urna eget ante vulputate, aliquam accumsan nibh mattis. Suspendisse id aliquet massa. Nullam feugiat neque pretium ornare ultricies. Quisque aliquet vitae justo quis mattis. Aenean tempus viverra ipsum, vel imperdiet ligula molestie sed.',
        'Vivamus condimentum, diam non lacinia congue, eros ante interdum enim, a vestibulum ipsum libero a purus. Etiam a condimentum libero. Sed urna ligula, vehicula ac iaculis in, euismod et dolor. Nullam tellus est, posuere sed eros at, congue vehicula ipsum. Mauris pulvinar pretium ligula, eu suscipit felis porttitor ac. Vivamus volutpat tempor orci, interdum cursus purus lobortis in. Sed mattis, leo consectetur tempus vehicula, justo ligula malesuada velit, nec sollicitudin ipsum libero quis odio. Maecenas at metus nec urna consectetur porta. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non urna gravida, sodales metus a, faucibus justo. Curabitur vulputate, ligula quis facilisis rutrum, mi elit lacinia felis, non mollis eros leo id est. Morbi lobortis dui tellus, ac vestibulum neque facilisis sed. Ut a turpis vitae odio facilisis dictum ut ac dolor.',
        'Etiam eleifend massa libero, eu hendrerit ligula gravida ut. Nam quis odio nec ipsum accumsan gravida. Cras dolor sapien, bibendum non massa nec, sagittis lobortis nunc. Mauris ultricies vel sapien ac auctor. Cras mollis sagittis enim, scelerisque eleifend dui vulputate non. Aliquam vitae felis sit amet nunc suscipit volutpat. Nulla vel metus aliquet magna blandit accumsan. Praesent dapibus pulvinar mattis. In pretium, nisi sed rutrum pretium, purus justo tempor erat, sit amet faucibus orci felis eu enim. Donec tortor augue, consectetur at placerat vitae, commodo ac tellus. Sed posuere nisl non massa interdum, sit amet faucibus nibh adipiscing. Nam nec vehicula nunc.',
        'Aenean sit amet orci id sapien adipiscing aliquam. Donec condimentum sed orci eget consequat. Cras eget placerat turpis. Sed bibendum ipsum massa, ornare convallis eros blandit vitae. Fusce sed rutrum urna. Aliquam quis auctor risus. Pellentesque a scelerisque dolor, in egestas metus. Cras posuere venenatis purus eu adipiscing. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas euismod molestie mauris quis ultricies. Praesent iaculis nunc vel nibh porttitor, eget consequat velit sodales. Pellentesque ut magna sit amet augue fringilla ullamcorper. Phasellus massa quam, gravida eu pharetra id, mattis pharetra augue.',
        'Suspendisse et tortor nunc. Mauris accumsan, ipsum pharetra viverra faucibus, felis nisi accumsan eros, ac tempus massa mauris vitae nunc. Sed consequat mi et est bibendum aliquet at ut mauris. Etiam felis justo, blandit vel viverra non, sollicitudin vitae magna. Maecenas leo diam, rhoncus sit amet felis in, egestas cursus mauris. Nullam et mi vel velit convallis convallis. Etiam justo felis, rhoncus quis euismod at, venenatis ut metus.',
        'Mauris feugiat commodo pretium. Fusce tincidunt nec eros dignissim euismod. Integer hendrerit at magna eget sagittis. Aliquam at vehicula libero, eget sollicitudin tellus. Duis luctus nisl id pellentesque adipiscing. Nullam ultrices a nisi feugiat varius. Praesent suscipit tortor felis, sit amet rhoncus leo posuere vitae. Nunc nisi nisl, pretium nec sagittis eget, fermentum non urna. Praesent hendrerit, massa nec volutpat vestibulum, tortor quam egestas dui, in blandit libero mi nec quam. Nullam semper, dolor ut aliquet fermentum, turpis arcu eleifend nisi, in gravida augue turpis vitae mauris. Quisque volutpat arcu nec nulla lobortis adipiscing. Vestibulum dignissim mollis facilisis.',
        'Vivamus bibendum id tellus sit amet dapibus. Nam varius tincidunt nisi vel rhoncus. Praesent a sem vel massa iaculis porttitor. Donec rhoncus dapibus metus ac semper. Integer fringilla, ligula a pharetra lobortis, urna nulla egestas purus, sed interdum felis nunc ac nulla. Nullam eu cursus ante. Maecenas tincidunt faucibus tempus. Aliquam tortor sapien, accumsan quis tortor et, dictum adipiscing est. Duis sit amet erat condimentum, faucibus nisl et, tincidunt mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc congue pulvinar turpis, ac porta felis feugiat eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras interdum accumsan mauris, id faucibus tortor tincidunt sed. Proin rutrum ut nulla sed consequat. Donec ut luctus turpis. Curabitur accumsan facilisis metus et vulputate.'
    ];

    var menu = [
    {
        "title":    "Insert paragraphs",
        "children": [
        {
            "title": "1",
            "callback": function (info, tab) {
                return getLorem(1, "p");
            }
        },
        {
            "title": "2",
            "callback": function (info, tab) {
                return getLorem(2, "p");
            }
        },
        {
            "title": "3",
            "callback": function (info, tab) {
                return getLorem(3, "p");
            }
        },
        {
            "title": "5",
            "callback": function (info, tab) {
                return getLorem(5, "p");
            }
        },
        {
            "title": "10",
            "callback": function (info, tab) {
                return getLorem(10, "p");
            }
        },
        {
            "title": "...",
            "callback": function (info, tab) {
                var cnt = prompt("Specify number of paragraphs to insert", "10");

                if(!isNaN(parseFloat(cnt)) && isFinite(cnt)) {
                    return getLorem(Math.floor(cnt), "p");
                }else{ alert(cnt + " is not valid number!");
                    return "";
                }
            }
        },
        {
            "title": "Surround each with <p></p>",
            "type": "checkbox",
            "callback": function (info, tab) {
                surroundParagraph = info.checked;
                return "";
            }
        }
        ]
    },
    {
        "title":    "Insert words",
        "children": [
        {
            "title": "1",
            "callback": function (info, tab) {
                return getLorem(1, "w");
            }
        },
        {
            "title": "2",
            "callback": function (info, tab) {
                return getLorem(2, "w");
            }
        },
        {
            "title": "3",
            "callback": function (info, tab) {
                return getLorem(3, "w");
            }
        },
        {
            "title": "5",
            "callback": function (info, tab) {
                return getLorem(5, "w");
            }
        },
        {
            "title": "10",
            "callback": function (info, tab) {
                return getLorem(10, "w");
            }
        },
        {
            "title":    "...",
            "callback": function (info, tab) {
                return getLorem(prompt("Specify number of words to insert", "10"), "w");
            }
        }
        ]
    },
    {
        "title":    "Insert chars",
        "children": [
        {
            "title": "...",
            "callback": function (info, tab) {
                return getLorem(prompt("Specify number of chars to insert", "10"), "c");
            }
        }
        ]
    }
    ];

    var functionsMap = {};

    var surroundParagraph = false;

    function getLorem(count, type) {

        function getRandomString() {
            return loremIpsum[Math.floor( Math.random() * loremIpsum.length )];
        }

        if(!isNaN(parseFloat(count)) && isFinite(count)) {
            count = Math.floor(count);

            var result = "";

            switch (type) {

                // paragraphs
                case "p":
                    for (var i = 0; i < count; i++) {
                        if(surroundParagraph) {
                            result += "<p>" + getRandomString() + "</p>\n\n";
                        }else{
                            result += getRandomString() + "\n\n";
                        }                        
                    };
                break;

                // words
                case "w":
                    var cnt = 0;

                    while(cnt < count) {
                        var sampleStringWords = getRandomString().split(" ");
                        for (var i = 0; i < sampleStringWords.length; i++) {
                            if(cnt >= count)
                                break;

                            result += sampleStringWords[i] + " ";
                            cnt++;
                        };
                    }
                break;

                // chars
                case "c":
                    while(result.length < count){
                        result += getRandomString();

                        if(result.length > count) {
                            result = result.substring(0, count);
                        }
                    }
                break;
            }

            console.log(result);
            return result;
        }else{
            alert("Invalid number!");
            return "";
        }
    };

    function onClickHandler(info, tab) {
        console.log('onClickHandler');
        var insertText = "";
        if(typeof(functionsMap[info.menuItemId]) != "undefined") {
            insertText = functionsMap[info.menuItemId](info, tab);

            if(insertText != "") {
                chrome.tabs.sendMessage(tab.id, { text: insertText });
            }
        }
    };

    function buildMenu(rootID, items) {
        for (var i = 0; i < items.length; i++) {
            var currentID = rootID + "-" + i;

            chrome.contextMenus.create({ "title": items[i]["title"], "id": currentID, "type": typeof(items[i]["type"]) == "undefined" ? "normal" : items[i]["type"], "parentId": rootID, "contexts": ["editable"] });

            if(typeof(items[i]["callback"]) !== "undefined") {
                functionsMap[currentID] = items[i]["callback"];
            }

            if((typeof(items[i]["children"]) !== "undefined") && (items[i]["children"].length != 0)) {
                buildMenu(currentID, items[i]["children"]);
            }
        };
    };

    chrome.runtime.onInstalled.addListener(function() {
        chrome.contextMenus.create({"title": "Insert Lorem Ipsum", "id": "root", "contexts": ["editable"]});
        buildMenu("root", menu);
    });

    chrome.contextMenus.onClicked.addListener(onClickHandler);
})();
console.log("加载汉化模块");

//1.汉化杂项
var cnItems = {
    _OTHER_: [],
    '-20%; Chip Multi': '-20%; 筹码加成',
    '(Change': '(改变',
    '(Change the order ': '(改变顺序',
    '(Space)': '(空格键)',
    '(Space) ': '(空格键) ',
    '[roll]': '[投掷]',
    '+1 max multiplier ': '+1 最大加成倍数 ',
    '+1 max multiplier dice': '+1 最大骰子加成倍数',
    '1st dice multiplier': '1号骰子加成',
    '1st dice multiplier ': '1号骰子加成 ',
    '2 BP': '2 BP',
    '2nd dice multiplier': '2号骰子加成',
    '2nd dice multiplier ': '2号骰子加成 ',
    '3rd dice multiplier': '3号骰子加成',
    '3rd dice multiplier ': '3号骰子加成 ',
    '4th dice multiplier': '4号骰子加成',
    '4th dice multiplier ': '4号骰子加成 ',
    '52 cards ': '52 纸牌 ',
    '5th dice multiplier': '5号骰子加成',
    '5th dice multiplier ': '5号骰子加成 ',
    'a': '一个',
    'Achievements': '成就',
    'Active Playtime': '有效的游戏时间',
    'afford': '承受',
    'after': '之后',
    'After': '之后',
    'After each convert ': '每次转换后',
    'After each convert luck upgrades will be bought automatically in a chosen order': '每次转换后，运气升级将按选定的顺序自动购买',
    'airhorn': '气笛',
    'all': '全部',
    'All': '全部',
    'All Combo ': '所有组合 ',
    'All Combo Multiplier': '所有组合加成',
    'All Combo multipliers': '所有组合加成',
    'All dice': '所有骰子',
    'all dice ': '所有骰子',
    'All dice x3 multiplier': '所有骰子加成 x3',
    'andre onate': '安德烈奥尼亚特',
    'Animation': '动画',
    'Animation duration ': '动画持续时间',
    'Animation duration -20%; Chip Multi': '动画持续时间 -20%；筹码加成',
    'ascend': '转生',
    'Ascend': '转生',
    'ascend a dice, you ': '提升一个骰子，你',
    'ascension': '转生',
    'ascension +4% ': '转生 +4%',
    'Auto Ascend:': '自动转生',
    'Auto Convert:': '自动转换',
    'Auto Draw': '自动抽取',
    'Auto Draw Card:': '自动抽取纸牌',
    'Auto Draw:': '自动抽取：',
    'Auto Gild Card:': '自动镀金纸牌：',
    'Auto Gild:': '自动镀金：',
    'Auto Invest:': '自动投资：',
    'Auto Luck': '自动幸运',
    'Auto Roll': '自动投掷',
    'Auto Roulette Focus:': '自动对焦轮盘：',
    'Auto Roulette Prestige:': '自动轮盘声望：',
    'Auto Roulette Upgrade:': '自动轮盘升级：',
    'Auto Slot Spin:': '自动插槽旋转：',
    'Auto Spend Luck:': '自动支出运气：',
    'Auto Spin:': '自动轮盘：',
    'Auto Upgrade Interval': '自动升级间隔',
    'Auto Upgrade:': '自动升级：',
    'automatically': '自动',
    'Automatically': '自动',
    'automatically ': '自动 ',
    'Automatically ': '自动 ',
    'automatically after a ': '在之后自动',
    'Automatically convert when having 52 cards': '当拥有52张纸牌时自动转换',
    'automatically if you ': '自动的如果你',
    'automatically in a ': '自动的 在',
    'Automatically invest ': '自动投资 ',
    'Automatically invest when you have 52 golden cards': '当拥有52张金色纸牌时自动投资',
    'Automatically prestige the roulette': '自动声望轮盘赌',
    'Automatically set ': '自动设置 ',
    'Automatically set the focus to card on prestige': '用声望自动设置焦点到卡片',
    'Automatically spin ': '自动轮盘',
    'Save': '保存',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    //原路返回
    '0/': '0/',
    '1 x': '1 x',
    '1.': '1.',
    '(D4)': '(D4)',
    '(D6)': '(D6)',
    '(P)': '(P)',
    '⇄': '⇄',
    '⇅': '⇅',
    '+': '+',
    '-20%;': '-20%;',
    '(1/17)': '(1/17)',
    '(10/17)': '(10/17)',
    '(11/17)': '(11/17)',
    '(14/17)': '(14/17)',
    '(16/17)': '(16/17)',
    '(2/17)': '(2/17)',
    '(4/17)': '(4/17)',
    '(5/17)': '(5/17)',
    '(6/17)': '(6/17)',
    '(8/17)': '(8/17)',
    '(B)': '(B)',
    '(B) ': '(B) ',


}

//需处理的前缀
var cnPrefix = {}

//需处理的后缀
var cnPostfix = {

}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^[x+\-]?\d+(\.\d+)?(e[+\-]?\d+)?(\%)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//2.采集新词
//20190320@JAR

var cnItem = function () {

    //传参是否非空字串
    if (!arguments[0]) return;

    //检验传参是否对象
    let text = arguments[0],
        s = '';
    if (typeof (text) != "string")
        return text;
    else
        s = arguments[0].charCodeAt();

    //检验传参是否英文
    // if (
    //     s < 65 || (s > 90 && s < 97) || (s > 122)
    //
    // ) return text;

    //处理前缀
    let text_prefix = "";
    for (let prefix in cnPrefix) {
        if (text.substr(0, prefix.length) === prefix) {
            text_prefix = cnPrefix[prefix];
            text = text.substr(prefix.length);
        }
    }
    //处理后缀
    let text_postfix = "";
    for (let postfix in cnPostfix) {
        if (text.substr(-postfix.length) === postfix) {
            text_postfix = cnPostfix[postfix];
            text = text.substr(0, text.length - postfix.length);
        }
    }
    //处理正则后缀
    let text_reg_exclude_postfix = "";
    for (let reg of cnExcludePostfix) {
        let result = text.match(reg);
        if (result) {
            text_reg_exclude_postfix = result[0];
            text = text.substr(0, text.length - text_reg_exclude_postfix.length);
        }
    }

    //检验字典是否可存
    if (!cnItems._OTHER_) cnItems._OTHER_ = [];

    //检查是否排除
    for (let reg of cnExcludeWhole) {
        if (reg.test(text)) {
            return text_prefix + text + text_reg_exclude_postfix + text_postfix;
        }
    }

    //遍历尝试匹配
    for (let i in cnItems) {
        //字典已有词汇或译文、且译文不为空，则返回译文
        if (
            text == i || text == cnItems[i] &&
            cnItems[i] != ''
        )
            return text_prefix + cnItems[i] + text_reg_exclude_postfix + text_postfix;
    }

    //调整收录的词条，0=收录原文，1=收录去除前后缀的文本
    let save_cfg = 1;
    let save_text = save_cfg ? text : arguments[0]
    //遍历生词表是否收录
    for (
        let i = 0; i < cnItems._OTHER_.length; i++
    ) {
        //已收录则直接返回
        if (save_text == cnItems._OTHER_[i])
            return arguments[0];
    }

    if (cnItems._OTHER_.length < 500) {
        //未收录则保存
        cnItems._OTHER_.push(save_text);
        cnItems._OTHER_.sort(
            function (a, b) {
                return a.localeCompare(b)
            }
        );
    }

    /*
        //开启生词打印
        //console.log(
            '有需要汉化的英文：', text
        );
    */

    //返回生词字串
    return arguments[0];
};

document.createElement = function (name, opt) {
    if (name == 'canvas') {
        let canvasElement = document.__proto__.createElement.bind(this)(name, opt);
        canvasElement.getContext('2d').fillText = function (text, x, y, max) {
            return this.__proto__.fillText.bind(this)(cnItem(text), x, y, max);
        }
        canvasElement.getContext('2d').strokeText = function (text, x, y, max) {
            return this.__proto__.strokeText.bind(this)(cnItem(text), x, y, max);
        }
        canvasElement.getContext('2d').measureText = function (text) {
            return this.__proto__.measureText.bind(this)(cnItem(text));
        }
        return canvasElement;
    } else
        return document.__proto__.createElement.bind(this)(name, opt);
}

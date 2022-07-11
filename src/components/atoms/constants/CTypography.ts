/*
https://material.io/design/typography/the-type-system.html#type-scale 
https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#common_weight_name_mapping
*/
import CFont from "./CFont";

const CTypography: any = {
    headline1: {
        fontFamily: CFont.PR,
        fontSize: CFont.s(96),
        letterSpacing: CFont.s(-1.5),
        fontWeight: "300"
    },
    headline2: {
        fontFamily: CFont.PR,
        fontSize: CFont.s(48),
        letterSpacing: CFont.s(-0.5),
        fontWeight: "300"
    },
    headline3: {
        fontFamily: CFont.PR,
        fontSize: CFont.s(46),
        letterSpacing: CFont.s(0),
    },
    headline4: {
        fontFamily: CFont.PR,
        fontSize: CFont.s(33),
        letterSpacing: CFont.s(0.25),
    },
    headline5: {
        fontFamily: CFont.PR,
        fontSize: CFont.s(23),
        letterSpacing: CFont.s(0),
    },
    headline6: {
        fontFamily: CFont.PM,
        fontSize: CFont.s(19),
        letterSpacing: CFont.s(0.15),
    },
    body1: {
        fontFamily: CFont.PR,
        fontSize: CFont.s(15),
        letterSpacing: CFont.s(0.5),
    },
    body2: {
        fontFamily: CFont.PR,
        fontSize: CFont.s(13),
        letterSpacing: CFont.s(0.25),
    },
    subtitle1: {
        fontFamily: CFont.PR,
        fontSize: CFont.s(15),
        letterSpacing: CFont.s(0.15),
    },
    subtitle2: {
        fontFamily: CFont.PM,
        fontSize: CFont.s(13),
        letterSpacing: CFont.s(0.1),
    },
    button: {
        fontFamily: CFont.PM,
        fontSize: CFont.s(13),
        letterSpacing: CFont.s(1.25),
    },
    overline: {
        fontFamily: CFont.PR,
        fontSize: CFont.s(10),
        letterSpacing: CFont.s(1.5),
    },
    caption: {
        fontFamily: CFont.PR,
        fontSize: CFont.s(12),
        letterSpacing: CFont.s(0.4),
    },
    labelsb22: {
        fontFamily: CFont.PSB,
        fontSize: CFont.s(22),
    },
    labelsb18: {
        fontFamily: CFont.PSB,
        fontSize: CFont.s(18),
    },
    labelsb16: {
        fontFamily: CFont.PSB,
        fontSize: CFont.s(16),
    },
    labelsb14: {
        fontFamily: CFont.PSB,
        fontSize: CFont.s(14),
    },
    labelsb13: {
        fontFamily: CFont.PSB,
        fontSize: CFont.s(13),
    },
    labelsb12: {
        fontFamily: CFont.PSB,
        fontSize: CFont.s(12),
    },
    labelsb11: {
        fontFamily: CFont.PSB,
        fontSize: CFont.s(11),
    },
    labelsb10: {
        fontFamily: CFont.PSB,
        fontSize: CFont.s(10),
    },
    labelsb9: {
        fontFamily: CFont.PSB,
        fontSize: CFont.s(9),
    },
    labelsb8: {
        fontFamily: CFont.PSB,
        fontSize: CFont.s(8),
    },
    labelm18: {
        fontFamily: CFont.PM,
        fontSize: CFont.s(18),
    },
    labelm16: {
        fontFamily: CFont.PM,
        fontSize: CFont.s(16),
    },
    labelm14: {
        fontFamily: CFont.PM,
        fontSize: CFont.s(14),
    },
    labelm12: {
        fontFamily: CFont.PM,
        fontSize: CFont.s(12),
    },
    labelm11: {
        fontFamily: CFont.PM,
        fontSize: CFont.s(11),
    },
    labelm10: {
        fontFamily: CFont.PM,
        fontSize: CFont.s(10),
    },
    labelm9: {
        fontFamily: CFont.PM,
        fontSize: CFont.s(9),
    },
    labelm8: {
        fontFamily: CFont.PM,
        fontSize: CFont.s(8),
    },
    labelr22: {
        fontFamily: CFont.PR,
        fontSize: CFont.s(22),
    },
    labelr18: {
        fontFamily: CFont.PR,
        fontSize: CFont.s(18),
    },
    labelr16: {
        fontFamily: CFont.PR,
        fontSize: CFont.s(16),
    },
    labelr14: {
        fontFamily: CFont.PR,
        fontSize: CFont.s(14),
    },
    labelr11: {
        fontFamily: CFont.PR,
        fontSize: CFont.s(11),
    },
    labelr10: {
        fontFamily: CFont.PR,
        fontSize: CFont.s(10),
    },
    labelr9: {
        fontFamily: CFont.PR,
        fontSize: CFont.s(9),
    },
    labelr8: {
        fontFamily: CFont.PR,
        fontSize: CFont.s(8),
    },
    labelb10: {
        fontFamily: CFont.PB,
        fontSize: CFont.s(10),
    }
}

export default CTypography;

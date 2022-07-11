import React from "react";
import { SvgXml } from "react-native-svg";
import { Dimensions, ImageBackground, PixelRatio, Platform } from 'react-native';
import CFont from "../constants/CFont";

//**png images **/
import memberImg from "../../../assets/images/member.png";

//** svg images **/
import headerBackWhiteSvg from "../../../assets/images/headerBackWhite.png";

//PNG
interface ImgProps {
    children?: any
}
const member = (props: ImgProps) => <ImageBackground style={{ width: CFont.s(46), height: CFont.s(46) }} resizeMode="cover" source={memberImg} />

// SVG
const headerBackWhite = React.memo(() => <SvgXml width={CFont.s(20)} height={CFont.s(20)} xml={headerBackWhiteSvg} />);
export default {
    headerBackWhite,
    member,
}
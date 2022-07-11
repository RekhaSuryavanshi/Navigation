import React from "react";
import { StyleSheet, Text } from "react-native";
import CColor from "../constants/CColor";
import CFont from "../constants/CFont";
import CTypography from "../constants/CTypography";


const styles = StyleSheet.create({

    //headerTitle: { ...CTypography.button, lineHeight: CFont.s(18), color: CColor.green, letterSpacing: 0 }
    headerTitle: { ...CTypography.labelm16, lineHeight: CFont.s(18), color: CColor.red }

})

const headerTitle = React.memo(({ children, ...otherProps }: any) => <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ ...styles.headerTitle, ...otherProps.style }}>{children}</Text>);

export default {

    headerTitle,
}
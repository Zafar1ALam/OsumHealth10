import React, { useState, useEffect, useRef } from 'react';

import {
    Image, View, ScrollView,
    TouchableOpacity, Alert, SafeAreaView, Dimensions, KeyboardAvoidingView
} from 'react-native';
import { TouchableRipple, Text, ActivityIndicator } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import Button1 from '../comp/Button1';

import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';


import TextInput2 from '../comp/TextInput2';

const LeftIconTextRightIcon = props => {
    return (
        <TouchableRipple style={{
            flexDirection: 'row',
            paddingVertical: '3%',
            alignItems: 'center',

        }} onPress={props.onPress}>
            <>
                <SvgXml xml={props.xml} />
                <View style={{
                    marginLeft: '5%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flex: 1
                }}>
                    <Text style={STYLES.fontSize12_grey898A8F_Poppins_Regular}>{props.text}</Text>
                    <SvgXml xml={Svgs.rightArrowSmallBlack} />
                </View>
            </>

        </TouchableRipple>
    );
};

LeftIconTextRightIcon.propTypes = {

};

export default LeftIconTextRightIcon;
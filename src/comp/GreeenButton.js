import React, { useState, useEffect } from 'react';

import { Image, View, TextInput, ScrollView } from 'react-native';
import { TouchableRipple, Text } from 'react-native-paper';

import { SvgXml } from 'react-native-svg';

import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
const GreeenButton = props => {
    return (
        <TouchableRipple style={{
            borderColor: COLORS.greyECECEC,
            borderWidth: 1,

            alignItems: 'center',
            paddingHorizontal: '5%',
            // paddingVertical: '4%',
            height: 50,
            borderRadius: 40,
            backgroundColor: COLORS.lightGreen00CE30,
            justifyContent: 'center'
        }} onPress={props.onPress}>
            <Text style={STYLES.fontSize14_whiteFFFFFF_Poppins_SemiBold}>
                {props.text}
            </Text>

        </TouchableRipple>
    );
};

GreeenButton.propTypes = {

};

export default GreeenButton;
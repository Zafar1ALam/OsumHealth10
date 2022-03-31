import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Dimensions } from "react-native";
import COLORS from './utilities/colors/Color';



const STYLES = StyleSheet.create({


    container: {
        flex: 1,


        paddingHorizontal: '5%',
        paddingVertical: '5%',
        //  height: '100%',
        backgroundColor: COLORS.black101010,
        // backgroundColor: 'red'
    },
    withoutpaddingcontainer: {
        flex: 1, //width: Dimensions.get('window').width,
        // height: Dimensions.get('window').height,
        backgroundColor: COLORS.black101010
    },

    fontSize20_grey333348_Poppins_SemiBold: {
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',

        color: COLORS.grey333348,

    },
    fontSize17_whiteFFFFFF_Poppins_Bold: {
        fontSize: 17,
        fontFamily: 'Poppins-Bold',

        color: COLORS.whiteFFFFFF,

    },
    fontSize14_whiteF5F5F5_Poppins_Regular: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',

        color: COLORS.whiteF5F5F5,

    },
    fontSize14_grey333348_Poppins_SemiBold: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',

        color: COLORS.grey333348,

    },
    fontSize14_grey333348_Poppins_Light: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',

        color: COLORS.grey333348,

    },
    fontSize14_lightGreen00CE30_Poppins_SemiBold: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',

        color: COLORS.lightGreen00CE30,

    },
    fontSize14_grey313450_Poppins_SemiBold: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',

        color: COLORS.grey313450,

    },
    fontSize14_lightGreen00CE30_Poppins_Regular: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',

        color: COLORS.lightGreen00CE30,

    },
    fontSize14_grey313450_Poppins_Regular: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',

        color: COLORS.grey313450,

    },

    fontSize14_whiteFFFFFF_Poppins_SemiBold: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',

        color: COLORS.whiteFFFFFF,

    },
    fontSize14_blue3F4079_Poppins_Medium: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',

        color: COLORS.blue3F4079,

    },
    fontSize14_grey313450_Poppins_Medium: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',

        color: COLORS.grey313450,

    },
    fontSize14_redFF6B6B_Poppins_Medium: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',

        color: COLORS.redFF6B6B,

    },
    fontSize14_grey404040_Poppins_SemiBold: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',

        color: COLORS.grey404040,

    },
    fontSize14_grey898A8F_Poppins_Regular: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',

        color: COLORS.grey898A8F,

    },
    fontSize14_grey404040_Poppins_Regular: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',

        color: COLORS.grey404040,

    },
    fontSize14_grey313450_Poppins_SemiBold: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',

        color: COLORS.grey313450,

    },
    fontSize12_blue3F4079_Poppins_SemiBold: {
        fontSize: 12,
        fontFamily: 'Poppins-SemiBold',

        color: COLORS.blue3F4079,

    },
    fontSize12_grey313450_Poppins_SemiBold: {
        fontSize: 12,
        fontFamily: 'Poppins-SemiBold',

        color: COLORS.grey313450,

    },//
    fontSize12_lightGreen00CE30_Poppins_SemiBold: {
        fontSize: 12,
        fontFamily: 'Poppins-SemiBold',

        color: COLORS.lightGreen00CE30,

    },

    fontSize12_lightGreen00CE30_Poppins_Medium: {
        fontSize: 12,
        fontFamily: 'Poppins-Medium',

        color: COLORS.lightGreen00CE30,

    },
    fontSize12_grey313450_Poppins_Medium: {
        fontSize: 12,
        fontFamily: 'Poppins-Medium',

        color: COLORS.grey313450,

    },
    fontSize12_grey898A8F_Poppins_Regular: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',

        color: COLORS.grey898A8F,

    },
    fontSize12_grey313450_Poppins_Regular: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',

        color: COLORS.grey313450,

    },
    fontSize12_grey898A8F_Poppins_Regular: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',

        color: COLORS.grey898A8F,

    },
    fontSize12_whiteFFFFFF_Poppins_Regular: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',

        color: COLORS.whiteFFFFFF,

    },
    fontSize12_whiteFFFFFF_Montserrat_Regular: {
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',

        color: COLORS.whiteFFFFFF,

    },//
    fontSize12_grey404040_Poppins_Regular: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',

        color: COLORS.grey404040,

    },
    fontSize12_grey313450_Poppins_Regular_50: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',

        color: COLORS.grey313450_50
    },
    fontSize12_green27AE60_Poppins_SemiBold: {
        fontSize: 12,
        fontFamily: 'Poppins-SemiBold',

        color: COLORS.green27AE60,

    },
    fontSize10_grey898A8F_Poppins_Regular: {
        fontSize: 10,
        fontFamily: 'Poppins-Regular',

        color: COLORS.grey898A8F,

    },
    fontSize10_lightGreen00CE30_Poppins_Regular: {
        fontSize: 10,
        fontFamily: 'Poppins-Regular',

        color: COLORS.lightGreen00CE30,

    },
    fontSize10_whiteF6F6F6_Poppins_SemiBold: {
        fontSize: 10,
        fontFamily: 'Poppins-SemiBold',

        color: COLORS.whiteF6F6F6,

    },
    fontSize10_grey313450_Poppins_SemiBold: {
        fontSize: 10,
        fontFamily: 'Poppins-SemiBold',

        color: COLORS.grey313450,

    },
    fontSize10_grey333348_Poppins_SemiBold: {
        fontSize: 10,
        fontFamily: 'Poppins-SemiBold',

        color: COLORS.grey333348,

    },
    fontSize10_grey898A8F_Poppins_SemiBold: {
        fontSize: 10,
        fontFamily: 'Poppins-SemiBold',

        color: COLORS.grey898A8F,

    },
    fontSize10_grey898A8F_Poppins_Regular: {
        fontSize: 10,
        fontFamily: 'Poppins-Regular',

        color: COLORS.grey898A8F,

    },
    fontSize10_redFF4D4D_Poppins_Regular: {
        fontSize: 10,
        fontFamily: 'Poppins-Regular',

        color: COLORS.redFF4D4D,

    },
    fontSize10_black000000_Poppins_Regular: {
        fontSize: 10,
        fontFamily: 'Poppins-Regular',

        color: COLORS.black000000,

    },
    fontSize10_grey313450_Poppins_Regular: {
        fontSize: 10,
        fontFamily: 'Poppins-Regular',

        color: COLORS.grey313450,

    },

    fontSize9_grey898A8F_Poppins_Regular: {
        fontSize: 9,
        fontFamily: 'Poppins-Regular',

        color: COLORS.grey898A8F,

    },
    fontSize9_whiteFFFFFF_Poppins_Medium: {
        fontSize: 9,
        fontFamily: 'Poppins-Medium',

        color: COLORS.whiteFFFFFF,

    },
    // fontSize29_whiteFFFFFF_MADE_TOMMY_Medium_PERSONAL_USE_Medium: {
    //     fontSize: 29,
    //     fontFamily: 'MADE TOMMY Medium_PERSONAL USE',

    //     color: COLORS.whiteFFFFFF,

    // },
    // fontSize25_000000_Roboto_Regular_38: {
    //     fontSize: 30,
    //     fontFamily: 'Roboto-Regular',
    //     //color: '#1C1A1A'
    //     // color: COLORS.black000000_38
    // },//



});

export default STYLES;
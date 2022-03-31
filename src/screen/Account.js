import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    SafeAreaView, Text, View, TouchableOpacity,
    Image, StyleSheet, FlatList, ScrollView
} from 'react-native';
import COLORS from '../utilities/colors/Color';
import { TouchableRipple, TextInput } from 'react-native-paper';

import LeftIconTextRightIcon from '../comp/LeftIconTextRightIcon'

import STYLES from '../STYLES';
import Svgs from '../utilities/svgs/Svgs';
import { SvgXml } from 'react-native-svg';


const Account = props => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.whiteF5F5F5 }}>
            <View style={{
                flex: 0.25, backgroundColor: COLORS.lightGreen00CE30,
                paddingHorizontal: '5%',
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20
            }}>
                <View style={{
                    flexDirection: 'row',
                    marginTop: '5%'
                    , justifyContent: 'space-between'
                }}>

                    <SvgXml xml={Svgs.accountWhite} />
                    <SvgXml xml={Svgs.accountWhite} />

                </View>

                <View style={{
                    height: '35%', width: '20%',
                    marginTop: '-2%', alignSelf: 'center'
                }}>

                    <Image
                        style={{ height: '100%', width: '100%', flex: 1 }}
                        source={require('../utilities/images/homeimage1.png')} />
                </View>

                <View style={{ alignItems: 'center', marginTop: '5%' }}>
                    <Text style={STYLES.fontSize14_whiteF5F5F5_Poppins_Regular}>Jitendra Raut</Text>
                    <Text style={STYLES.fontSize12_whiteFFFFFF_Poppins_Regular}>+91 97306270877</Text>
                </View>
            </View>
            <View style={{ flex: 0.75, }}>

                <View style={{ marginTop: '5%', paddingHorizontal: '5%' }}>
                    <LeftIconTextRightIcon xml={Svgs.myDoctorLogoAccount}
                        text="My Doctors"
                        onPress={() => {
                            // navigation.navigate("WatchHistory")
                        }} />
                </View>

                <View style={{ marginTop: '5%', paddingHorizontal: '5%' }}>
                    <LeftIconTextRightIcon xml={Svgs.appointmensLogoAccount}
                        text="Appoinments"
                        onPress={() => {
                            // navigation.navigate("WatchHistory")
                        }} />
                </View>

                <View style={{ marginTop: '5%', paddingHorizontal: '5%' }}>
                    <LeftIconTextRightIcon xml={Svgs.onlineConsultationLogoAccount}
                        text="Online consultation"
                        onPress={() => {
                            // navigation.navigate("WatchHistory")
                        }} />
                </View>

                <View style={{ marginTop: '5%', paddingHorizontal: '5%' }}>
                    <LeftIconTextRightIcon xml={Svgs.logoutLogoAccount}
                        text="Logout"
                        onPress={() => {
                            // navigation.navigate("WatchHistory")
                        }} />
                </View>
            </View>
        </SafeAreaView>
    );
};

Account.propTypes = {

};

export default Account;
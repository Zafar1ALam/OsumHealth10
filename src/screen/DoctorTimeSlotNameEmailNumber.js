import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    SafeAreaView, Text, View, TouchableOpacity,
    Image, StyleSheet, FlatList, ScrollView, Dimensions
} from 'react-native';
import COLORS from '../utilities/colors/Color';
import { TouchableRipple, TextInput } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import Svgs from '../utilities/svgs/Svgs';
import { SliderBox } from "react-native-image-slider-box";
import STYLES from '../STYLES';
import ColorPropType from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import Button1 from '../comp/Button1';
import GreeenButton from '../comp/GreeenButton';
import SimpleTextInput from '../comp/SimpleTextInput';

const DoctorTimeSlotNameEmailNumber = props => {

    return (
        <ScrollView>
            <SafeAreaView

                style={{
                    flex: 1,
                    width: Dimensions.get("window").width,
                    height: Dimensions.get("window").height,
                    backgroundColor: COLORS.whiteF5F5F5
                }} >

                <View style={{
                    flex: 0.22,
                    backgroundColor: COLORS.lightGreen00CE30,
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,

                }}>
                    <View style={{
                        flexDirection: 'row', marginHorizontal: '7%',
                        marginTop: '5%', justifyContent: 'space-between'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <TouchableRipple style={{}}>

                                <SvgXml xml={Svgs.leftArrowWhiteLong} />
                            </TouchableRipple>
                            <View style={{ marginLeft: '10%' }}>
                                <Text style={STYLES.fontSize17_whiteFFFFFF_Poppins_Bold}>Select a time slot</Text>
                            </View>
                        </View >
                        <View style={{
                            flexDirection: 'row', alignItems: 'center',

                            justifyContent: 'space-between', width: '18%',

                        }}>
                            <Text style={STYLES.fontSize10_whiteF6F6F6_Poppins_SemiBold}>Mumbai</Text>

                        </View>
                    </View>
                </View>


                <View style={{
                    flex: 0.60, backgroundColor: COLORS.whiteFFFFFF,
                    marginHorizontal: '5%',
                    marginTop: "-30%",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }}>

                    <View style={{
                        //  backgroundColor: 'red',
                        flexDirection: 'row',
                        marginVertical: '5%', marginHorizontal: '6%',
                        height: '20%', flexDirection: 'row', alignItems: "center"
                    }}>
                        <View style={{
                            width: '25%',
                            height: '70%'
                        }}>
                            <Image
                                style={{
                                    height: '100%', width: '100%',
                                    flex: 1
                                }}
                                source={require('../utilities/images/humanbeing1.png')} />
                        </View>
                        <View style={{ marginLeft: '5%' }}>
                            <Text style={STYLES.fontSize14_grey313450_Poppins_SemiBold}>Dr. Jitendra Raut</Text>
                            <Text style={STYLES.fontSize12_grey898A8F_Poppins_Regular}>B.Sc, MBBS, DDVL, MD- Dermitol...</Text>
                        </View>
                    </View>
                    <View style={{
                        borderWidth: 0.5,
                        borderColor: COLORS.greyECECEC
                    }}></View>
                    <View style={{ flexDirection: 'row', marginVertical: '2%' }}>
                        <View style={{
                            width: '45%', paddingLeft: '3%',
                            borderRightWidth: 0.5, borderColor: COLORS.greyD6D6D6
                        }}>
                            <Text style={STYLES.fontSize12_grey898A8F_Poppins_Regular}>DATE & TIME</Text>
                            <Text style={STYLES.fontSize14_grey313450_Poppins_Medium}>Tomorrow, 9 Dec</Text>
                            <Text style={STYLES.fontSize14_grey313450_Poppins_Medium}> 4.45PM</Text>
                        </View>
                        <View style={{ width: '45%', paddingLeft: '10%' }}>
                            <Text style={STYLES.fontSize12_grey898A8F_Poppins_Regular}>Consultation Fees</Text>
                            <Text style={STYLES.fontSize14_grey313450_Poppins_Medium}>$600</Text>

                        </View>
                    </View>

                    <View style={{
                        borderWidth: 0.5,
                        borderColor: COLORS.greyECECEC
                    }}></View>


                    <View style={{ marginTop: '10%', paddingHorizontal: '3%' }}>
                        <SimpleTextInput placeholder="Name" />
                    </View>
                    <View style={{ marginTop: '5%', paddingHorizontal: '3%' }}>
                        <SimpleTextInput placeholder="E-mail" />
                    </View>
                    <View style={{ marginTop: '5%', paddingHorizontal: '3%' }}>
                        <SimpleTextInput placeholder="Number" />
                    </View>

                    <View style={{ marginTop: '5%', paddingHorizontal: '2%' }}>
                        <Text style={STYLES.fontSize10_lightGreen00CE30_Poppins_Regular}>By booking this appointment you agree to the T&C</Text>
                    </View>
                </View>

                <View style={{
                    flex: 0.18,
                    justifyContent: 'flex-end', alignItems: 'center',
                }}>
                    <View style={{
                        marginBottom: '10%', width: '50%'

                    }}>
                        <GreeenButton text="Book" />
                    </View>
                </View>
            </SafeAreaView >
        </ScrollView >
    );
};

DoctorTimeSlotNameEmailNumber.propTypes = {

};

export default DoctorTimeSlotNameEmailNumber;



// import React from 'react';
// import PropTypes from 'prop-types';
// import { SafeAreaView } from 'react-native';


// const DoctorTimeSlotNameEmailNumber = props => {
//     return (
//         <SafeAreaView style={{ flex: 1 }}>

//         </SafeAreaView>
//     );
// };

// DoctorTimeSlotNameEmailNumber.propTypes = {

// };

// export default DoctorTimeSlotNameEmailNumber;
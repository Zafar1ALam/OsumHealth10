import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    SafeAreaView, Text, View, TouchableOpacity,
    Image, StyleSheet, FlatList, ScrollView
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

const DoctorData = props => {

    return (
        <SafeAreaView

            style={{ flex: 1, backgroundColor: COLORS.whiteF5F5F5 }} >
            <View style={{
                flex: 0.08, backgroundColor: COLORS.lightGreen00CE30,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,

            }}>
                <View style={{
                    flexDirection: 'row', marginHorizontal: '7%',
                    marginTop: '5%',
                }}>

                    <TouchableRipple style={{}}>

                        <SvgXml xml={Svgs.leftArrowWhiteLong} />
                    </TouchableRipple>
                    <View style={{ marginLeft: '10%' }}>
                        <Text style={STYLES.fontSize17_whiteFFFFFF_Poppins_Bold}>Medico</Text>
                    </View>


                </View>
            </View>


            <View style={{ flex: 0.92, }}>


                <View style={{
                    flex: 0.27,
                    marginTop: '17%',
                    backgroundColor: COLORS.whiteFFFFFF,
                    marginHorizontal: '5%',
                    borderRadius: 15
                }}>

                    <View style={{
                        flexDirection: 'row',// backgroundColor: 'red',
                        paddingHorizontal: '10%',

                        marginTop: '4%', justifyContent: 'space-between'
                    }}>

                        <View>
                            <Text style={STYLES.fontSize12_green27AE60_Poppins_SemiBold}>
                                Prime
                            </Text>
                        </View>



                        <View style={{
                            flexDirection: 'row', width: '18%',
                            justifyContent: 'space-between',
                            //backgroundColor: 'green', //alignSelf: 'flex-end',
                            alignItems: 'center'
                        }}>
                            <SvgXml xml={Svgs.star} style={{}} />
                            <Text style={STYLES.fontSize12_green27AE60_Poppins_SemiBold}>
                                4.2
                            </Text>
                        </View>
                    </View>

                    <View style={{
                        height: '57%', width: '28%',
                        //backgroundColor: 'red',
                        position: 'absolute',
                        alignSelf: 'center',
                        top: '-20%'

                    }}>
                        <Image
                            style={{
                                height: '100%',
                                borderRadius: 50, borderWidth: 4,
                                borderColor: COLORS.whiteFFFFFF,
                                width: '100%', flex: 1
                            }}
                            source={require('../utilities/images/homeimage2.png')} />
                    </View>

                    <View style={{ alignItems: 'center', marginTop: "10%" }}>
                        <Text style={STYLES.fontSize14_grey313450_Poppins_SemiBold}>Dr. Jitendra Raut</Text>
                        <Text style={STYLES.fontSize12_grey898A8F_Poppins_Regular}>B.Sc, MBBS, DDVL, MD- Dermitologist</Text>


                    </View>


                    <View style={{
                        marginTop: "5%", justifyContent: 'space-between',
                        flexDirection: 'row', paddingHorizontal: '10%'
                    }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={STYLES.fontSize12_grey313450_Poppins_Regular}>16</Text>
                            <Text style={STYLES.fontSize10_grey898A8F_Poppins_Regular}> yrs. Experience</Text>

                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={STYLES.fontSize12_grey313450_Poppins_Regular}>89%</Text>
                            <Text style={STYLES.fontSize10_grey898A8F_Poppins_Regular}>  (4384 votes)</Text>

                        </View>


                    </View>
                </View>


                <View style={{
                    flex: 0.73,
                    marginTop: '5%',
                    backgroundColor: COLORS.whiteFFFFFF,
                    marginHorizontal: '5%',
                    borderRadius: 15,

                }}>

                    <View style={{
                        flexDirection: 'row',
                        marginTop: '5%',
                        justifyContent: 'space-between',
                        paddingHorizontal: '5%'
                    }}>
                        <Text style={STYLES.fontSize10_redFF4D4D_Poppins_Regular}>CLOSED TODAY</Text>
                        <Text style={STYLES.fontSize10_grey313450_Poppins_Regular}>9:30AM - 08:00PM</Text>
                        <Text style={STYLES.fontSize12_lightGreen00CE30_Poppins_Medium}>All Timing</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        marginHorizontal: '5%',
                        marginTop: '10%',
                        alignItems: 'center'
                    }}>
                        <SvgXml xml={Svgs.cityLogoDoctorList}
                            style={{ marginRight: '3%' }} />
                        <Text
                            style={STYLES.fontSize10_grey898A8F_Poppins_Regular}>92/6, 3rd Floor, Outer Ring Road, Chandra Layout</Text>
                    </View>


                    <View style={{
                        paddingHorizontal: '5%',
                        height: '30%',
                        width: '100%',
                        marginTop: '4%'
                    }}>
                        <Image
                            style={{
                                borderRadius: 9,
                                height: '100%', width: '100%',
                                flex: 1
                            }}
                            source={require('../utilities/images/map.png')} />
                    </View>

                    <View style={{ marginHorizontal: '5%' }}>
                        <View style={{ marginTop: '5%' }}>
                            <Text style={STYLES.fontSize12_grey313450_Poppins_Regular_50}>FEEDBACK</Text>
                        </View>
                        <View style={{ marginTop: '2%' }}>
                            <Text style={STYLES.fontSize12_grey313450_Poppins_Regular}>Very good . courteous and efficient staff.</Text>
                        </View>
                        <View style={{ marginTop: '2%' }}>
                            <Text style={STYLES.fontSize10_grey898A8F_Poppins_Regular}>Jitu Raut . 2 years ago</Text>
                        </View>
                        <View style={{ marginTop: '2%' }}>
                            <Text style={STYLES.fontSize12_lightGreen00CE30_Poppins_SemiBold}>ALL FEEDBACK</Text>
                        </View>
                    </View>


                    <View style={{
                        flexDirection: 'row',
                        marginTop: '10%',
                        borderWidth: 1,
                        borderRadius: 25,
                        borderColor: COLORS.greyC7C7C7,
                    }}>
                        <TouchableRipple style={{

                            alignItems: 'center',
                            paddingHorizontal: '5%',
                            paddingVertical: '2%',

                            alignItems: 'center',
                            justifyContent: 'center'


                        }} onPress={props.onPress}>
                            <Text style={STYLES.fontSize14_grey313450_Poppins_Regular}>
                                Give Feedback
                            </Text>

                        </TouchableRipple>
                        <View style={{ flex: 1 }}>
                            <GreeenButton text="Book" />
                        </View>

                    </View>
                </View>
            </View>

        </SafeAreaView >
    );
};

DoctorData.propTypes = {

};

export default DoctorData;
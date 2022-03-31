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

const DoctorsList = props => {
    const [listDoctorsSpecialitiesClinics, setListDoctorsSpecialitiesClinics] = useState([
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',


        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',


        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',


        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b1',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f62',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d73',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b4',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d76',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b7',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f68',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d79',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b10',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f611',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d7212',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6811',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e298d7212',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
        },




    ])
    return (
        <SafeAreaView

            style={{ flex: 1, backgroundColor: COLORS.whiteF5F5F5 }} >
            <View style={{
                flex: 0.10, backgroundColor: COLORS.lightGreen00CE30,
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
                        <View style={{ marginLeft: '20%' }}>
                            <Text style={STYLES.fontSize17_whiteFFFFFF_Poppins_Bold}>Medico</Text>
                        </View>
                    </View >
                    <View style={{
                        flexDirection: 'row', alignItems: 'center',

                        justifyContent: 'space-between', width: '18%',

                    }}>
                        <Text style={STYLES.fontSize10_whiteF6F6F6_Poppins_SemiBold}>Mumbai</Text>
                        <SvgXml xml={Svgs.whiteDownArrow} />
                    </View>
                </View>
            </View>


            <View style={{ flex: 0.90, }}>
                <FlatList style={{
                    paddingHorizontal: '5%',
                    marginVertical: '8%'
                }}
                    showsVerticalScrollIndicator={false}
                    horizontal={false}

                    data={listDoctorsSpecialitiesClinics}
                    renderItem={({ item }) => {
                        return (

                            <View style={{

                                height: 260,
                                backgroundColor: COLORS.whiteFFFFFF,
                                marginBottom: '5%',
                                borderWidth: 1,
                                borderColor: COLORS.greyECECEC,
                                borderRadius: 20


                            }}>

                                <View style={{
                                    flexDirection: 'row',
                                    paddingHorizontal: '5%',
                                    paddingVertical: '3%',
                                    // backgroundColor: 'red',
                                    height: '45%'

                                }}>

                                    <View style={{
                                        width: '25%',
                                        height: '90%',
                                        // backgroundColor: 'green',
                                        alignItems: 'center'
                                    }}>
                                        <View style={{
                                            paddingTop: '4%',
                                            width: '85%',
                                            height: '75%',
                                            // backgroundColor: 'pink'
                                        }}>
                                            <Image
                                                style={{ width: '100%', height: '100%', flex: 1 }}
                                                source={require('../utilities/images/homeimage1.png')} />
                                        </View>
                                        <View style={{
                                            backgroundColor: COLORS.lightGreen00CE30,
                                            borderRadius: 100,
                                            alignSelf: 'flex-end',
                                            position: 'absolute',
                                            bottom: '20%',
                                            right: '5%',
                                            borderWidth: 1,
                                            paddingVertical: '2%',
                                            paddingHorizontal: '2%',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderColor: COLORS.whiteFFFFFF
                                        }}>
                                            <Text style={STYLES.fontSize9_whiteFFFFFF_Poppins_Medium}>87%</Text>
                                        </View>
                                    </View>




                                    <View style={{ marginLeft: '5%', flex: 1 }}>
                                        <Text style={STYLES.fontSize14_grey313450_Poppins_Medium}>Zean Ronen</Text>
                                        <View style={{
                                            marginTop: '2%',
                                            paddingHorizontal: '4%',
                                            paddingVertical: '3%',
                                            borderRadius: 4,
                                            borderWidth: 1,
                                            borderColor: COLORS.greyECECEC
                                        }}>
                                            <Text style={STYLES.fontSize10_grey898A8F_Poppins_Regular}>MBBS,DOMS,MS - Ophthalmology  Ophthalmology</Text>
                                            <Text style={STYLES.fontSize10_grey898A8F_Poppins_Regular}>26 years of experience</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    paddingHorizontal: '3%',// backgroundColor: 'red',
                                    width: '72%', alignSelf: 'flex-end'
                                }}>

                                    <View style={{ flexDirection: 'row', }}>
                                        <SvgXml xml={Svgs.cityLogoDoctorList} style={{ marginRight: '5%' }} />
                                        <Text style={STYLES.fontSize10_grey898A8F_Poppins_Regular}>1 Doctor</Text>

                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: '15%' }}>
                                        <SvgXml xml={Svgs.cityLogoDoctorList} style={{ marginRight: '5%' }} />
                                        <Text style={STYLES.fontSize10_grey898A8F_Poppins_Regular}>Andheri East</Text>

                                    </View>
                                </View>
                                <View style={{ marginTop: '-3%', marginHorizontal: '3%' }}>
                                    <Text style={STYLES.fontSize10_black000000_Poppins_Regular}>95 Feedback</Text>
                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    alignSelf: 'center'
                                }}>
                                    <SvgXml xml={Svgs.euroLogo}
                                        style={{ marginRight: '2%' }} />
                                    <Text style={STYLES.fontSize12_grey313450_Poppins_SemiBold}>500 onwards</Text>
                                </View>


                                <View style={{
                                    flexDirection: 'row',
                                    paddingHorizontal: '5%',
                                    justifyContent: 'space-between',
                                    marginTop: '3%'
                                }}>
                                    <TouchableRipple style={{
                                        borderRadius: 12,
                                        borderColor: COLORS.greyECECEC,
                                        borderWidth: 1,
                                        width: "32%",

                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text
                                            numberOfLines={1}
                                            style={STYLES.fontSize10_grey898A8F_Poppins_Regular}>LASIK Eye Surgury</Text>
                                    </TouchableRipple>

                                    <TouchableRipple style={{
                                        borderRadius: 12,
                                        borderColor: COLORS.greyECECEC,
                                        borderWidth: 1,
                                        width: "32%",

                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text
                                            numberOfLines={1}
                                            style={STYLES.fontSize10_grey898A8F_Poppins_Regular}>Anterior Surgury</Text>
                                    </TouchableRipple>


                                    <TouchableRipple style={{
                                        borderRadius: 12,
                                        borderColor: COLORS.greyECECEC,
                                        borderWidth: 1,
                                        width: "22%",

                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text
                                            numberOfLines={1}
                                            style={STYLES.fontSize10_grey898A8F_Poppins_Regular}>+2 More</Text>
                                    </TouchableRipple>

                                </View>


                                <TouchableRipple style={{
                                    backgroundColor:
                                        COLORS.lightGreen00CE30_28,
                                    borderRadius: 32,
                                    marginTop: "5%",
                                    alignSelf: 'center',
                                    paddingHorizontal: '3%',
                                    justifyContent: 'center',
                                    paddingVertical: '3%'
                                }}>
                                    <Text style={STYLES.fontSize12_lightGreen00CE30_Poppins_SemiBold}>Check Availbility</Text>
                                </TouchableRipple>
                            </View>


                        )
                    }}
                    keyExtractor={(item) => item.id}

                />
            </View>

        </SafeAreaView >
    );
};

DoctorsList.propTypes = {

};

export default DoctorsList;
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

const Chat = props => {
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
                flex: 0.16, backgroundColor: COLORS.lightGreen00CE30,
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

                            <SvgXml xml={Svgs.crossWhite} />
                        </TouchableRipple>
                        <View style={{ marginLeft: '10%' }}>
                            <Text style={STYLES.fontSize17_whiteFFFFFF_Poppins_Bold}>My Doctor</Text>
                        </View>
                    </View >

                </View>
            </View>


            <FlatList style={{
                flex: 0.84,
                paddingHorizontal: '8%',
                marginTop: '-10%'
            }}
                showsVerticalScrollIndicator={false}
                horizontal={false}

                data={listDoctorsSpecialitiesClinics}
                renderItem={({ item }) => {
                    return (

                        <View style={{

                            height: 155,
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
                                height: '65%'

                            }}>

                                <View style={{
                                    width: '25%',
                                    height: '100%',
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

                                </View>




                                <View style={{ marginLeft: '5%', flex: 1 }}>
                                    <Text style={STYLES.fontSize14_grey313450_Poppins_Medium}>Zean Ronen</Text>
                                    <View style={{
                                        marginTop: '2%',
                                        paddingHorizontal: '4%',
                                        paddingVertical: '3%',
                                        borderRadius: 4,
                                        borderWidth: 0.5,
                                        borderColor: COLORS.lightGreen00CE30
                                    }}>
                                        <Text style={STYLES.fontSize10_grey898A8F_Poppins_Regular}>MBBS,DOMS,MS - Ophthalmology  Ophthalmology</Text>
                                        <Text style={STYLES.fontSize10_grey898A8F_Poppins_Regular}>26 years of experience</Text>
                                    </View>
                                </View>
                            </View>





                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingHorizontal: '5%',
                                marginTop: '4%',
                                marginBottom: '5%'
                                // backgroundColor: 'green'
                            }}>
                                <Text style={STYLES.fontSize10_redFF4D4D_Poppins_Regular}>Closed Today </Text>
                                <Text style={STYLES.fontSize10_grey313450_Poppins_Regular}>9:30AM - 08:00PM </Text>

                                <SvgXml xml={Svgs.chatMyDoctorIcon} />

                            </View>






                        </View>


                    )
                }}
                keyExtractor={(item) => item.id}

            />





        </SafeAreaView >
    );
};

Chat.propTypes = {

};

export default Chat;
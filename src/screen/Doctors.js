import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    SafeAreaView, Text, View, TouchableOpacity,
    Image, StyleSheet, FlatList, ScrollView, TextInput
} from 'react-native';
import COLORS from '../utilities/colors/Color';
import { TouchableRipple } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import Svgs from '../utilities/svgs/Svgs';

import STYLES from '../STYLES';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
const Doctors = props => {
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
                backgroundColor: COLORS.lightGreen00CE30,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                height: 110
            }}>
                <View style={{
                    flexDirection: 'row', marginHorizontal: '7%',
                    marginTop: '5%', alignItems: 'center'
                }}>

                    <TouchableRipple style={{ marginRight: '7%' }}>
                        <SvgXml xml={Svgs.cross} />
                    </TouchableRipple>
                    <Text style={STYLES.fontSize17_whiteFFFFFF_Poppins_Bold}>Doctors</Text>

                </View>
            </View>



            <View style={{
                backgroundColor: COLORS.whiteF5F5F5,

                flex: 1

            }}>

                <View style={{
                    flexDirection: 'row',
                    backgroundColor: COLORS.whiteFFFFFF,
                    borderRadius: 30,
                    borderWidth: 1,
                    borderColor: COLORS.greyECECEC,
                    top: '-10%',
                    marginHorizontal: '5%',
                    alignItems: "center",
                    paddingHorizontal: '4%'
                }}>
                    <SvgXml xml={Svgs.searchIcon} />
                    <TextInput
                        placeholder='Doctors, specialities, clinics'
                        style={{
                            marginLeft: '5%',
                            flex: 1
                        }} />
                </View>


                <View style={{ marginLeft: '5%' }}>
                    <Text style={STYLES.fontSize14_grey313450_Poppins_SemiBold}>Top Specialities</Text>
                </View>
                <View style={{
                    marginVertical: '2%',
                    marginBottom: '5%',
                    backgroundColor: COLORS.whiteFFFFFF
                }}>
                    <FlatList style={{
                        paddingHorizontal: '10%',
                        marginVertical: '5%'
                    }}
                        showsVerticalScrollIndicator={false}
                        horizontal={false}

                        data={listDoctorsSpecialitiesClinics}
                        renderItem={({ item }) => {
                            return (

                                <View style={{

                                    height: 50,

                                    marginBottom: '5%',

                                }}>

                                    <Text style={STYLES.fontSize12_grey404040_Poppins_Regular}>Cardiologist</Text>


                                </View>


                            )
                        }}
                        keyExtractor={(item) => item.id}

                    />

                </View>

            </View>


        </SafeAreaView >
    );
};

Doctors.propTypes = {

};

export default Doctors;
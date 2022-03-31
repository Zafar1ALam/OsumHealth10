import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GetLocation from 'react-native-get-location'
import Geocoder from 'react-native-geocoding';
import {
    SafeAreaView, Text, View, TouchableOpacity,
    Image, StyleSheet, FlatList, ScrollView, TextInput
} from 'react-native';
import COLORS from '../utilities/colors/Color';
import { TouchableRipple } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import Svgs from '../utilities/svgs/Svgs';
import SplashScreen from 'react-native-splash-screen'

import STYLES from '../STYLES';

const SelectYourCity = props => {
    SplashScreen.hide();
    const [stateLong, setStateLong] = useState();
    const [stateLat, setStateLat] = useState();

    const [listDoctorsSpecialitiesClinics, setListDoctorsSpecialitiesClinics] = useState([
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',

            name: "Nagpur"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            name: "Mumbai"

        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            name: "Delhi NCR"

        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b1',

            thumbnail: 'https://baconmockup.com/300/200/',
            name: "Pune"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f62',

            thumbnail: 'https://baconmockup.com/300/200/',
            name: "Banglore"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d73',

            thumbnail: 'https://baconmockup.com/300/200/',
            name: "Hyderabad"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b4',

            thumbnail: 'https://baconmockup.com/300/200/',
            name: "Chennai"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',

            thumbnail: 'https://baconmockup.com/300/200/',
            name: "Gwaliar"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d76',

            thumbnail: 'https://baconmockup.com/300/200/',
            name: "Gwaliar"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b7',

            thumbnail: 'https://baconmockup.com/300/200/',
            name: "Nagpur"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f68',

            thumbnail: 'https://baconmockup.com/300/200/',
            name: "Nagpur"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d79',

            thumbnail: 'https://baconmockup.com/300/200/',
            name: "Nagpur"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b10',

            thumbnail: 'https://baconmockup.com/300/200/',
            name: "Nagpur"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f611',

            thumbnail: 'https://baconmockup.com/300/200/',
            name: "Nagpur"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d7212',

            thumbnail: 'https://baconmockup.com/300/200/',
            name: "Nagpur"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6811',

            thumbnail: 'https://baconmockup.com/300/200/',
            name: "Nagpur"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e298d7212',

            thumbnail: 'https://baconmockup.com/300/200/',
            name: "Nagpur"
        },




    ])

    useEffect(() => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then(location => {
                setStateLat(location.latitude)
                setStateLong(location.longitude)
                console.log(location)
                //     Geocoder.from(41.89, 12.49)
                //         .then(json => {
                //             var addressComponent = json.results[0].address_components[0];
                //             console.log(addressComponent);
                //         })
                //         .catch(error => console.warn(error));
            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })

    }, [])


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
                        <SvgXml xml={Svgs.crossWhite} />
                    </TouchableRipple>
                    <Text style={STYLES.fontSize17_whiteFFFFFF_Poppins_Bold}>Select your city </Text>

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
                        placeholder='Search here'
                        style={{
                            marginLeft: '5%',
                            flex: 1
                        }} />
                </View>

                <View style={{
                    flexDirection: 'row', marginLeft: "10%",
                    marginBottom: "10%", alignItems: 'center'
                }}>
                    <View style={{

                        height: 33, width: 33, borderRadius: 200,
                        alignItems: 'center', justifyContent: 'center',
                        backgroundColor: COLORS.whiteFFFFFF
                    }}>
                        <SvgXml xml={Svgs.useCurrentLocationLogo} />

                    </View>
                    <View style={{ marginLeft: '5%' }}>
                        <Text style={STYLES.fontSize14_grey404040_Poppins_Regular}>{stateLong + "   ,    " + stateLat}</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: COLORS.whiteFFFFFF }}>
                    <View style={{
                        flexDirection: 'row',
                        marginHorizontal: '12%',
                        height: 50,
                        backgroundColor: COLORS.whiteFFFFFF,
                        alignItems: 'center',
                        paddingLeft: '1%',
                        borderBottomWidth: 0.5,
                        borderColor: COLORS.greyECECEC

                    }}>
                        <View style={{

                        }}>
                            <SvgXml xml={Svgs.flagLogo} />

                        </View>
                        <View style={{ marginLeft: '5%' }}>
                            <Text style={STYLES.fontSize14_grey404040_Poppins_SemiBold}>India</Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    marginBottom: '2%',
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
                                    marginLeft: '5%',
                                    marginBottom: '5%',
                                    paddingLeft: '4%',
                                    borderBottomWidth: 0.5,
                                    borderColor: COLORS.greyECECEC

                                }}>

                                    <Text style={STYLES.fontSize14_grey898A8F_Poppins_Regular}>{item.name}</Text>


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

SelectYourCity.propTypes = {

};

export default SelectYourCity;
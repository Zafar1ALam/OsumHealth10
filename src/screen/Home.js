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

const Home = props => {
    const [stateImageSlider, setStateImageSlider] = useState({
        images: [

            require('../utilities/images/homeBigImage.png'),
            require('../utilities/images/homeBigImage.png'),
            require('../utilities/images/homeBigImage.png'),
            require('../utilities/images/homeBigImage.png'),          // Local image
        ]
    });


    const [listSpecialForYou, setListSpecialForYou] = useState([
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
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
        },])


    const [listDoctorsNearByYou, setListDoctorsNearByYou] = useState([
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',


        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',


        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
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
        },])

    return (
        <SafeAreaView

            style={{ flex: 1, backgroundColor: COLORS.whiteF5F5F5 }} >
            <View style={{
                flex: 0.13, backgroundColor: COLORS.lightGreen00CE30,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,

            }}>
                <View style={{
                    flexDirection: 'row', marginHorizontal: '7%',
                    marginTop: '5%', justifyContent: 'space-between'
                }}>
                    <Text style={STYLES.fontSize17_whiteFFFFFF_Poppins_Bold}>Medico</Text>
                    <View style={{
                        flexDirection: 'row', alignItems: 'center',

                        justifyContent: 'space-between', width: '18%',

                    }}>
                        <Text style={STYLES.fontSize10_whiteF6F6F6_Poppins_SemiBold}>Mumbai</Text>
                        <SvgXml xml={Svgs.whiteDownArrow} />
                    </View>
                </View>
            </View>


            <View style={{ flex: 0.87, }}>
                <ScrollView>
                    <View style={{ marginHorizontal: '5%', marginVertical: '5%' }}>
                        <SliderBox
                            ImageComponentStyle={{
                                borderRadius: 14,
                                //width: '100%',
                            }}
                            resizeMethod={'resize'}
                            images={stateImageSlider.images}
                            sliderBoxHeight={170}
                            // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                            dotColor={COLORS.radicalRed}
                            inactiveDotColor={COLORS.SilverBDBDBD}
                            dotStyle={{
                                width: 10,
                                height: 10,
                                borderRadius: 10,
                                marginHorizontal: -10,
                                padding: 0,
                                backgroundColor: 'green',
                                // marginTop: 30
                            }}
                        // paginationBoxStyle={{
                        //     position: "absolute",
                        //     bottom: '-20%',
                        //     padding: 0,

                        // }}
                        />
                        {/* <FlatList style={{
                            marginTop: '5%',
                        }}
                            horizontal={true}
                            data={listSpecialForYou}
                            renderItem={({ item }) => {
                                return (

                                    <View style={{
                                        width: 300,
                                        height: 150,
                                        marginRight: 15,
                                        alignItems: 'center'
                                    }}>

                                        <Image
                                            source={require('../utilities/images/homeBigImage.png')} style={{
                                                flex: 1, borderRadius: 16,
                                                borderWidth: 1,
                                                width: '100%', height: '100%'
                                            }} />


                                    </View>

                                )
                            }}
                            keyExtractor={(item) => item.id}

                        /> */}
                    </View>


                    <View style={{
                        marginHorizontal: '5%',
                        marginTop: '5%',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={STYLES.fontSize12_blue3F4079_Poppins_SemiBold}>Doctors nearby you</Text>

                        <TouchableRipple>
                            <Text style={STYLES.fontSize12_lightGreen00CE30_Poppins_SemiBold}>See All</Text>
                        </TouchableRipple>
                    </View>

                    <View style={{ marginHorizontal: '5%' }}>
                        <FlatList style={{
                            marginTop: '5%',
                        }}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={listDoctorsNearByYou}
                            renderItem={({ item }) => {
                                return (

                                    <View style={{
                                        width: 130,
                                        height: 190,
                                        marginRight: 15,
                                        borderRadius: 8,
                                        backgroundColor: COLORS.whiteFFFFFF,
                                        //  backgroundColor: 'green',
                                        alignItems: 'center',
                                        borderColor: COLORS.whiteFFFFFF,
                                        borderWidth: 1,
                                        //   paddingBottom: '10%'
                                        //justifyContent: 'center'
                                    }}>
                                        <View style={{
                                            marginTop: '15%',
                                            width: '70%',

                                            height: "50%"
                                        }}>

                                            < Image
                                                source={require('../utilities/images/homeimage3.png')} style={{
                                                    flex: 1, borderRadius: 16,
                                                    borderWidth: 1,
                                                    width: '100%', height: '100%'
                                                }} />
                                        </View>

                                        <View style={{ marginTop: "5%" }}>
                                            <Text style={STYLES.fontSize10_grey313450_Poppins_SemiBold}>Dr. Alina James</Text>
                                            <Text style={STYLES.fontSize9_grey898A8F_Poppins_Regular}>B.Sc, MBBS, DDVL, MD-
                                                Dermitologist</Text>
                                        </View>
                                        <View style={{
                                            flexDirection: 'row',
                                            alignSelf: 'flex-start',
                                            marginLeft: '10%',
                                            marginTop: '5%',
                                            justifyContent: 'space-between'
                                        }}>

                                            <SvgXml xml={Svgs.star} style={{ marginRight: '10%' }} />
                                            <Text>4.2</Text>
                                        </View>
                                    </View>

                                )
                            }}
                            keyExtractor={(item) => item.id}

                        />
                    </View>


                    <View style={{
                        marginHorizontal: '5%',
                        marginTop: '5%',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={STYLES.fontSize12_blue3F4079_Poppins_SemiBold}>Doctors by Profession</Text>

                        <TouchableRipple>
                            <Text style={STYLES.fontSize12_lightGreen00CE30_Poppins_SemiBold}>See All</Text>
                        </TouchableRipple>
                    </View>

                    <View style={{ marginHorizontal: '5%' }}>
                        <FlatList style={{
                            marginTop: '5%',
                        }}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={listDoctorsNearByYou}
                            renderItem={({ item }) => {
                                return (

                                    <View style={{
                                        width: 130,
                                        height: 190,
                                        marginRight: 15,
                                        borderRadius: 8,
                                        backgroundColor: COLORS.whiteFFFFFF,
                                        //  backgroundColor: 'green',
                                        alignItems: 'center',
                                        borderColor: COLORS.whiteFFFFFF,
                                        borderWidth: 1,
                                        //   paddingBottom: '10%'
                                        //justifyContent: 'center'
                                    }}>
                                        <View style={{
                                            marginTop: '15%',
                                            width: '70%',

                                            height: "50%"
                                        }}>

                                            < Image
                                                source={require('../utilities/images/homeimage3.png')} style={{
                                                    flex: 1, borderRadius: 16,
                                                    borderWidth: 1,
                                                    width: '100%', height: '100%'
                                                }} />
                                        </View>

                                        <View style={{ marginTop: "5%" }}>
                                            <Text style={STYLES.fontSize10_grey313450_Poppins_SemiBold}>Dr. Alina James</Text>
                                            <Text style={STYLES.fontSize9_grey898A8F_Poppins_Regular}>B.Sc, MBBS, DDVL, MD-
                                                Dermitologist</Text>
                                        </View>
                                        <View style={{
                                            flexDirection: 'row',
                                            alignSelf: 'flex-start',
                                            marginLeft: '10%',
                                            marginTop: '5%',
                                            justifyContent: 'space-between'
                                        }}>

                                            <SvgXml xml={Svgs.star} style={{ marginRight: '10%' }} />
                                            <Text>4.2</Text>
                                        </View>
                                    </View>

                                )
                            }}
                            keyExtractor={(item) => item.id}

                        />
                    </View>
                </ScrollView>
            </View>

        </SafeAreaView >
    );
};

Home.propTypes = {

};

export default Home;
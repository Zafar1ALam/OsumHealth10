import React, { useEffect, useState } from 'react';
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
import DatePicker from 'react-native-date-picker'
import { deepOrange100 } from 'react-native-paper/lib/typescript/styles/colors';


var date0 = new Date();
const DoctorTimeSlot = props => {
    const [stateDate, setStateDate] = useState();
    const [stateMonth, setStateMonth] = useState();
    const [stateMonthNumeric, setStateMonthNumeric] = useState();
    const [stateDayName, setStateName] = useState("Today")
    //var date0;

    //     var date1 = new Date()
    //     console.log(date1)
    // var date2=new Date()
    //     console.log(date1.getMonth())


    useEffect(() => {

        var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

        var monthName = months[date0.getMonth()];
        setStateMonthNumeric(date0.getMonth())
        // console.log(date0.getMonth())
        //   console.log(monthName)
        setStateMonth(monthName)
        // console.log(date0.getDate())
        setStateDate(date0.getDate())
    }, [])
    const [listMorning, setListMorning] = useState([
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "10:00"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "11:00"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e2944d72',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "12:00"
        },


    ])


    const [listAfternoon, setListAfternoon] = useState([
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "10:00"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "11:00"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e2944d72',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "12:00"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2778ba',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "10:00"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa90007f63',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "11:00"
        },

    ])


    const [listEveningAndNight, setListEveningAndNight] = useState([
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "05:00"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "06:00"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e2944d72',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "07:00"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2778ba',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "08:00"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa90007f63',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "09:00"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d44472',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "10:00"
        },
    ])


    const incrementeDate = (dias) => {
        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + dias);
        return tomorrow;
    }


    return (
        <SafeAreaView

            style={{ flex: 1, backgroundColor: COLORS.whiteF5F5F5 }} >
            <View style={{
                flex: 0.22, backgroundColor: COLORS.lightGreen00CE30,
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
                flex: 0.78, backgroundColor: COLORS.whiteFFFFFF,
                marginHorizontal: '5%',
                marginTop: "-22%",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
            }}>

                <View style={{
                    //backgroundColor: 'red', 
                    flexDirection: 'row',
                    marginVertical: '5%', marginHorizontal: '6%',
                    height: '16%', flexDirection: 'row', alignItems: "center"
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
                    flexDirection: 'row',

                    alignItems: 'center',
                    paddingHorizontal: '5%', justifyContent: 'space-between'
                }}>
                    <TouchableRipple style={{
                        backgroundColor: COLORS.whiteFFFFFF,
                        borderRadius: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 22, width: 22,
                        elevation: 2
                    }}
                        onPress={() => {

                            date0.setTime(date0.getTime() - (1000 * 60 * 60 * 24));
                            var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

                            var monthName = months[date0.getMonth()];
                            console.log(monthName)
                            //setStateMonthNumeric(date0.getMonth())
                            // console.log(date0.getMonth())
                            //   console.log(monthName)
                            setStateMonth(monthName)
                            // console.log(date0.getDate())
                            setStateDate(date0.getDate())
                            console.log(date0)
                            console.log(date0.getDate())


                        }}>
                        <SvgXml xml={Svgs.leftArrowSmallBlack} />
                    </TouchableRipple>
                    <Text style={STYLES.fontSize14_grey313450_Poppins_Regular}>{stateDayName}, {stateDate} {stateMonth}</Text>
                    <TouchableRipple style={{
                        backgroundColor: COLORS.whiteFFFFFF,
                        borderRadius: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 22, width: 22,
                        elevation: 2
                    }}
                        onPress={() => {
                            date0.setTime(date0.getTime() + 1000 * 60 * 60 * 24);
                            var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

                            var monthName = months[date0.getMonth()];
                            console.log(monthName)
                            //setStateMonthNumeric(date0.getMonth())
                            // console.log(date0.getMonth())
                            //   console.log(monthName)
                            setStateMonth(monthName)
                            // console.log(date0.getDate())
                            setStateDate(date0.getDate())
                            console.log(date0)
                            console.log(date0.getDate())
                            var d = new Date();

                            if (
                                date0.getDate() == (d.getDate() + 1)
                            ) {
                                setStateName("Tomorrow")
                            }
                            else if (
                                date0.getDate() == (d.getDate())
                            ) {
                                setStateName("Today")
                            }
                            if (
                                date0.getDate() > (d.getDate() + 1)
                            ) {
                                setStateName("")
                            }

                        }}>
                        <SvgXml xml={Svgs.rightArrowSmallBlack} />
                    </TouchableRipple>
                </View>

                <View style={{
                    backgroundColor: COLORS.whiteFBFBFB,
                    paddingHorizontal: '5%', marginTop: '8%',
                    borderWidth: 1,
                    paddingVertical: '3%',
                    borderColor: COLORS.greyD6D6D6,
                    marginHorizontal: '3%',
                    borderRadius: 10
                }}>
                    <FlatList style={{
                        marginTop: '5%',
                    }}

                        showsHorizontalScrollIndicator={false}
                        numColumns={5}
                        data={listMorning}
                        renderItem={({ item }) => {
                            return (

                                <View style={{
                                    height: 40,
                                    marginRight: '9%',

                                    justifyContent: 'space-between'

                                }}>
                                    <Text>{item.text}</Text>
                                </View>

                            )
                        }}
                        keyExtractor={(item) => item.id}

                    />

                    <TouchableRipple style={{
                        position: 'absolute',
                        top: '-15%',
                        left: '10%',
                        borderRadius: 11,
                        backgroundColor: COLORS.lightGreen00CE30,
                        paddingHorizontal: '5%',
                        alignItems: 'center',
                        width: '30%',
                    }}>
                        <Text style={STYLES.fontSize12_grey313450_Poppins_Medium}>Morning</Text>
                    </TouchableRipple>
                </View>


                <View style={{
                    backgroundColor: COLORS.whiteFBFBFB,
                    paddingHorizontal: '5%', marginTop: '8%',
                    borderWidth: 1,
                    paddingVertical: '3%',
                    borderColor: COLORS.greyD6D6D6,
                    marginHorizontal: '3%',
                    borderRadius: 10
                }}>
                    <FlatList style={{
                        marginTop: '5%',
                    }}

                        showsHorizontalScrollIndicator={false}
                        numColumns={5}
                        data={listAfternoon}
                        renderItem={({ item }) => {
                            return (

                                <View style={{
                                    height: 40,
                                    marginRight: '8%',

                                    justifyContent: 'space-between'

                                }}>
                                    <Text>{item.text}</Text>
                                </View>

                            )
                        }}
                        keyExtractor={(item) => item.id}

                    />

                    <TouchableRipple style={{
                        position: 'absolute',
                        top: '-15%',
                        left: '10%',
                        borderRadius: 11,
                        backgroundColor: COLORS.lightGreen00CE30,
                        paddingHorizontal: '5%',
                        alignItems: 'center',
                        width: '30%',
                    }}>
                        <Text style={STYLES.fontSize12_grey313450_Poppins_Medium}>Afternoon</Text>
                    </TouchableRipple>
                </View>

                <View style={{
                    backgroundColor: COLORS.whiteFBFBFB,
                    paddingHorizontal: '5%', marginTop: '8%',
                    borderWidth: 1,
                    paddingVertical: '3%',
                    borderColor: COLORS.greyD6D6D6,
                    marginHorizontal: '3%',
                    borderRadius: 10
                }}>
                    <FlatList style={{
                        marginTop: '5%',
                    }}

                        showsHorizontalScrollIndicator={false}
                        numColumns={5}
                        data={listEveningAndNight}
                        renderItem={({ item }) => {
                            return (

                                <View style={{
                                    height: 40,
                                    marginRight: '8%',

                                    justifyContent: 'space-between'

                                }}>
                                    <Text>{item.text}</Text>
                                </View>

                            )
                        }}
                        keyExtractor={(item) => item.id}

                    />

                    <TouchableRipple style={{
                        position: 'absolute',
                        top: '-15%',
                        left: '10%',
                        borderRadius: 11,
                        backgroundColor: COLORS.lightGreen00CE30,
                        paddingHorizontal: '5%',
                        alignItems: 'center',
                        width: '50%',
                    }}>
                        <Text style={STYLES.fontSize12_grey313450_Poppins_Medium}>Evening & Night</Text>
                    </TouchableRipple>
                </View>

                <View style={{
                    width: '50%',

                    alignSelf: 'center',
                    justifyContent: 'flex-end',
                    marginBottom: '10%',
                    flex: 1,
                }}>
                    <GreeenButton text="Next" />
                </View>
                {/* <View style={{}}>

                    <DatePicker date={date} onDateChange={setDate} />
                </View> */}
            </View>


        </SafeAreaView >
    );
};

DoctorTimeSlot.propTypes = {

};

export default DoctorTimeSlot;
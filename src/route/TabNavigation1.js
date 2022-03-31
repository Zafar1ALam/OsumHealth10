import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import STYLES from '../STYLES';
import { View, Text } from 'react-native';
import COLORS from '../utilities/colors/Color';
import { SvgXml } from 'react-native-svg';
import Svgs from '../utilities/svgs/Svgs';
import Home from '../screen/Home';
import Chat from '../screen/Chat';
import Account from '../screen/Account';

const Tab = createBottomTabNavigator();
const TabNavigation1 = () => {

    return (
        // <View style={{
        //     flex: 1,// backgroundColor: COLORS.black000000
        // }}>

        <Tab.Navigator
            //    initialRouteName='HomeHomeSearch'
            screenOptions={{
                headerShown: false,
                // tabBarBackground: COLORS.black000000
                tabBarStyle: {
                    backgroundColor: COLORS.whiteFFFFFF,
                    //backgroundColor: 'red'
                    height: 50,
                    //backgroundColor: 'red',
                    //     // paddingVertical: 25
                    paddingBottom: 5,
                    //     paddingHorizontal: '3%',
                    //     paddingTop: 10,
                    //     //    borderColor: COLORS.cylindricalFA4248,
                    //     borderTopWidth: 2,
                    //     borderTopColor: COLORS.cylindricalFA4248,
                    //     borderRightWidth: 2,
                    //     borderRightColor: COLORS.cylindricalFA4248,
                    //     borderLeftWidth: 2,
                    //     borderLeftColor: COLORS.cylindricalFA4248,
                    //     marginTop: 20

                },

            }}>
            <Tab.Screen name="Home" component={Home}
                options={{

                    tabBarLabel: ({ focused }) => {
                        if (focused) {
                            return (
                                <Text style={STYLES.fontSize10_grey333348_Poppins_SemiBold}>Home</Text>
                            )
                        } else {
                            return (
                                <Text style={STYLES.fontSize10_grey898A8F_Poppins_SemiBold}>Home</Text>
                            )
                        }
                    },

                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (
                                <SvgXml xml={Svgs.homeGreen} />
                            )
                        }
                        else {
                            return (
                                <SvgXml xml={Svgs.homeWhite}
                                />
                            )
                        }

                    }
                }} />

            <Tab.Screen name="Chat" component={Chat}
                options={{

                    tabBarLabel: ({ focused }) => {
                        if (focused) {
                            return (
                                <Text style={STYLES.fontSize10_grey333348_Poppins_SemiBold}>Chat</Text>
                            )
                        } else {
                            return (
                                <Text style={STYLES.fontSize10_grey898A8F_Poppins_SemiBold}>Chat</Text>
                            )
                        }
                    },

                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (
                                <SvgXml xml={Svgs.chatGreen} />
                            )
                        }
                        else {
                            return (
                                <SvgXml xml={Svgs.chatWhite}
                                />
                            )
                        }

                    }
                }} />


            <Tab.Screen name="Account" component={Account}
                options={{

                    tabBarLabel: ({ focused }) => {
                        if (focused) {
                            return (
                                <Text style={STYLES.fontSize10_grey333348_Poppins_SemiBold}>Chat</Text>
                            )
                        } else {
                            return (
                                <Text style={STYLES.fontSize10_grey898A8F_Poppins_SemiBold}>Chat</Text>
                            )
                        }
                    },

                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (
                                <SvgXml xml={Svgs.accountGreen} />
                            )
                        }
                        else {
                            return (
                                <SvgXml xml={Svgs.accountWhite}
                                />
                            )
                        }

                    }
                }} />





        </Tab.Navigator>
        // </View>

    );
};

export default TabNavigation1;
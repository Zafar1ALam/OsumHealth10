import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
    SafeAreaView, Text, View, TouchableOpacity,
    Image, StyleSheet, FlatList, ScrollView
} from 'react-native';
import COLORS from '../utilities/colors/Color';
import { TouchableRipple, TextInput } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import Svgs from '../utilities/svgs/Svgs';
import {
    Bubble, GiftedChat, InputToolbar,
    Send
} from 'react-native-gifted-chat'
import STYLES from '../STYLES';

const ChatTyping = props => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),

                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',

                },
            },
        ])
    }, [])
    console.log(messages)
    const onSend = useCallback((messages = []) => {
        console.log(messages)
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])
    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: COLORS.whiteF5F5F5 }} >
            <View style={{
                backgroundColor: COLORS.lightGreen00CE30,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                // paddingVertical: '5%',
                height: 70,


            }}>
                <View style={{
                    flexDirection: 'row',
                    marginHorizontal: '7%',
                    //  marginTop: '5%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '100%',
                    //  backgroundColor: 'pink'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        height: '100%'
                        //  backgroundColor: 'orange'
                    }}>
                        <TouchableRipple style={{}}>

                            <SvgXml xml={Svgs.crossWhite} />
                        </TouchableRipple>
                        <View style={{
                            marginLeft: '10%', flexDirection: 'row',
                            alignItems: 'center'
                            , //backgroundColor: 'blue',
                            height: '100%',


                        }}>
                            <View style={{
                                height: '60%', width: '25%',
                                marginRight: 10,
                                // backgroundColor: 'pink'
                            }}>
                                <Image
                                    style={{ height: '100%', width: '100%', flex: 1 }}
                                    source={require('../utilities/images/humanbeing1.png')} />

                                <View style={{
                                    height: 12, width: 12,
                                    borderRadius: 600,
                                    bottom: '-2%', right: '2%',
                                    borderWidth: 1,
                                    borderColor: COLORS.whiteFFFFFF,
                                    position: 'absolute',
                                    backgroundColor: COLORS.lightGreen00CE30
                                }}>

                                </View>
                            </View>
                            <View style={{}}>
                                <Text style={STYLES.fontSize17_whiteFFFFFF_Poppins_Bold}>Alina Frozen</Text>
                            </View>
                        </View>
                    </View >
                    <View style={{
                        //   backgroundColor: 'red',

                        // width: '18%',

                    }}>
                        <SvgXml xml={Svgs.vedioIconWhite} />

                    </View>
                </View>
            </View>

            <View style={{ flex: 1 }}>
                <GiftedChat
                    messages={messages}
                    // placeholder="Type Something"

                    // alwaysShowSend
                    onSend={messages => onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                    listViewProps={{ contentContainerStyle: { 'flexGrow': 1, 'justifyContent': 'flex-end' } }}
                    renderBubble={(props) => {
                        return (

                            <Bubble
                                {...props}
                                wrapperStyle={{

                                    right: {
                                        borderTopRightRadius: 9,
                                        borderTopLeftRadius: 9,
                                        borderBottomLeftRadius: 9,
                                        borderBottomRightRadius: 0,
                                        backgroundColor: COLORS.greyBDBDBD,
                                        marginBottom: "8%",
                                        marginRight: '3%',

                                    },
                                    left: {
                                        borderTopRightRadius: 9,
                                        borderTopLeftRadius: 9,
                                        borderBottomLeftRadius: 0,
                                        borderBottomRightRadius: 9,
                                        backgroundColor: COLORS.lightGreen00CE30,
                                        //  marginBottom: "8%",
                                        marginLeft: '3%'

                                    }
                                }}
                                containerToPreviousStyle={{
                                    right: {
                                        borderTopRightRadius: 9,
                                        borderTopLeftRadius: 9,
                                        borderBottomLeftRadius: 9,
                                        borderBottomRightRadius: 0,
                                    },
                                    left: {
                                        borderTopRightRadius: 9,
                                        borderTopLeftRadius: 9,
                                        borderBottomLeftRadius: 0,
                                        borderBottomRightRadius: 9,
                                    },
                                }}
                                containerToNextStyle={{
                                    right: {
                                        borderTopRightRadius: 9,
                                        borderTopLeftRadius: 9,
                                        borderBottomLeftRadius: 9,
                                        borderBottomRightRadius: 0,
                                    },
                                    left: {
                                        borderTopRightRadius: 9,
                                        borderTopLeftRadius: 9,
                                        borderBottomLeftRadius: 0,
                                        borderBottomRightRadius: 9,
                                    },
                                }}
                                containerStyle={{
                                    right: {
                                        borderTopRightRadius: 9,
                                        borderTopLeftRadius: 9,
                                        borderBottomLeftRadius: 9,
                                        borderBottomRightRadius: 0,
                                    },
                                    left: {
                                        borderTopRightRadius: 9,
                                        borderTopLeftRadius: 9,
                                        borderBottomLeftRadius: 0,
                                        borderBottomRightRadius: 9,
                                    },
                                }}
                                textStyle={{
                                    right: {
                                        color: COLORS.whiteFFFFFF,
                                        fontSize: 12,
                                        fontFamily: "Montserrat-Regular"

                                    },
                                    left: {
                                        color: COLORS.whiteFFFFFF,
                                        fontSize: 11,
                                        fontFamily: "Montserrat-Regular"

                                    }
                                }}



                            />


                        )
                    }}

                    scrollToBottom={true}
                    renderSend={(props) => {
                        return (
                            <Send
                                {...props}
                            >

                                {/* <Image style={{ height: 20, width: 30 }}
                                source={require('../utilities/images/Send.png')} /> */}
                                <View style={{
                                    //  backgroundColor: 'pink',
                                    alignSelf: 'center',
                                    marginRight: '5%',
                                    marginBottom: "20%",

                                }}>
                                    <SvgXml xml={Svgs.giftedChatSendMessageIcon} />
                                </View>
                            </Send>
                        )
                    }}


                    renderInputToolbar={(props) => {

                        return (

                            // <View style={{
                            //     height: 260,
                            //     flexDirection: 'row',
                            //     paddingHorizontal: '5%',
                            //     //paddingVertical: '5%',
                            //     backgroundColor: 'green'
                            // }}>
                            //     <SvgXml xml={Svgs.cameraGreenChatTyping} />
                            //     <View style={{ flexDirection: 'row', }}>
                            //         <TextInput
                            //             style={{ backgroundColor: 'red', width: '80%' }} />
                            //         <SvgXml xml={Svgs.giftedChatSendMessageIcon} />
                            //     </View>
                            // </View>

                            <InputToolbar

                                textInputStyle={STYLES.fontSize11_grey63697B_Arial_SemiBold}
                                placeholderTextColor={COLORS.grey63697B}
                                {...props}
                                placeholder="Type message here"

                                alwaysShowSend
                                containerStyle={{
                                    backgroundColor: COLORS.whiteF5F5F5,
                                    // width: "100%",
                                    borderTopWidth: 0


                                }}
                                renderActions={() => {
                                    return (
                                        <SvgXml xml={Svgs.cameraGreenChatTyping}
                                            style={{
                                                position: 'absolute',
                                                left: '-25%'
                                            }} />
                                    );
                                }}

                                primaryStyle={{
                                    backgroundColor: COLORS.whiteF5F5F5,
                                    width: "75%",
                                    //  backgroundColor: 'red',
                                    paddingVertical: '1%',
                                    borderRadius: 27,
                                    borderWidth: 1,
                                    marginTop: '2%',
                                    paddingHorizontal: '2%',
                                    alignSelf: 'flex-end',
                                    marginBottom: "2%",
                                    marginRight: '4%',
                                    borderColor: COLORS.grey979797,


                                }}
                            // accessoryStyle={{ backgroundColor: 'green' }}


                            />
                        );
                    }}


                />
            </View>

        </SafeAreaView >
    );
};

ChatTyping.propTypes = {

};

export default ChatTyping;
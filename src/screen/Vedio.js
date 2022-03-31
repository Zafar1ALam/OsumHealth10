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
import Video from 'react-native-video';

const Vedio = props => {
    const [stateVideo, setStateVedio] = useState({
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        thumbnail: 'https://baconmockup.com/300/200/',
        text: "by David Bowie"
    })
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.whiteF5F5F5,
            justifyContent: 'flex-end',
        }}>


            <Video
                source={{ uri: stateVideo.uri }}
                style={styles.backgroundVideo}
                muted={true}
                repeat={true}
                resizeMode={"cover"}
                rate={1.0}
            //controls={true}
            // style={{
            //     alignSelf: 'center',
            //     width: Dimensions.get('window').width - 30,
            //     height: Dimensions.get('window').width * (9 / 16),
            //     backgroundColor: 'black',
            // }}
            // ignoreSilentSwitch={"obey"}
            />

            <TouchableRipple style={{

                top: '5%',
                left: '10%',

                position: 'absolute'
            }}>
                <SvgXml xml={Svgs.crossGreen} />
            </TouchableRipple>
            <View style={{
                flexDirection: 'row',

                alignItems: 'flex-end',
                marginBottom: '7%',
                marginBottom: '15%',
                width: "80%",
                alignSelf: 'center',
                justifyContent: 'space-between'
            }}>


                <TouchableRipple style={{
                    paddingHorizontal: '4%',
                    paddingVertical: '4%',
                    borderRadius: 100,
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',

                    borderColor: COLORS.greyDDDDDD,
                    backgroundColor: COLORS.whiteFFFFFF
                }} //onPress={() => refRBSheetAddComment.current.open()}
                >
                    <SvgXml xml={Svgs.phoneGreen} />
                </TouchableRipple>
                <TouchableRipple style={{
                    paddingHorizontal: '5%',
                    paddingVertical: '4%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: COLORS.greyDDDDDD,
                    backgroundColor: COLORS.whiteFFFFFF
                }}
                //onPress={() => refRBSheetAddAmount.current.open()}
                >
                    <SvgXml xml={Svgs.mikeGreen} />
                </TouchableRipple>
                <TouchableRipple style={{

                    height: 63,
                    width: 63,
                    borderRadius: 100,
                    backgroundColor: COLORS.whiteFFFFFF
                }}
                >
                    <Image
                        style={{ width: '100%', height: '100%', flex: 1 }}
                        source={require('../utilities/images/humanBeing.png')} />
                </TouchableRipple>



            </View>

        </SafeAreaView>
    );
};

Vedio.propTypes = {

};

export default Vedio;



const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
    backgroundVideo: {
        // height: height,
        position: "absolute",
        marginHorizontal: '5%',
        marginVertical: '5%',
        top: 0,
        left: 0,
        alignItems: "stretch",
        bottom: 0,
        right: 0,
        borderRadius: 15

    }
});
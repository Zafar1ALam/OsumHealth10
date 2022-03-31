import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, Text, View, Image, ImageBackground } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Svgs from '../utilities/svgs/Svgs';
import COLORS from '../utilities/colors/Color';
import STYLES from '../STYLES';
import Button1 from '../comp/Button1';
import { TouchableRipple } from 'react-native-paper';

const GooglePhoneNumber = props => {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.whiteFFFFFF,

        }}>

            {/* <View style={{
                height: '50%', width: '100%',
                borderBottomRightRadius: 40,
                borderBottomLeftRadius: 40,
                backgroundColor: COLORS.lightGreen00CE30,

            }}>

                <Image
                    style={{


                        flex: 1, height: '100%', width: '100%',
                        borderBottomRightRadius: 40,
                        borderBottomLeftRadius: 40
                    }}
                    source={require('../utilities/images/googlePhoneNoImage.png')} />
            </View> */}
            <ImageBackground
                style={{
                    flex: 0.45,
                    width: '100%'
                }}
                imageStyle={{
                    borderBottomRightRadius: 40,
                    borderBottomLeftRadius: 40,
                }}
                source={require('../utilities/images/googlePhoneNoImage.png')}

            >
                <View style={{
                    borderBottomRightRadius: 40,
                    borderBottomLeftRadius: 40,
                    backgroundColor: 'rgba(0,206,48,0.5)',
                    flex: 1
                }}>

                </View>
            </ImageBackground>
            <View style={{
                flex: 0.55,
                paddingHorizontal: '10%'
            }}>

                <TouchableRipple style={{
                    borderColor: COLORS.greyECECEC,
                    borderWidth: 1,
                    paddingVertical: '5%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 25,
                    marginTop: '40%'
                }}>
                    <Text style={STYLES.fontSize14_blue3F4079_Poppins_Medium}>Mobile Number </Text>
                </TouchableRipple>

                <TouchableRipple style={{
                    borderColor: COLORS.greyECECEC,
                    borderWidth: 1,
                    marginTop: '10%',
                    paddingVertical: '5%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 25
                }}>
                    <Text style={STYLES.fontSize14_redFF6B6B_Poppins_Medium}>Google </Text>
                </TouchableRipple>

                <View style={{ marginTop: '12%', alignItems: 'center' }}>
                    <Text style={[STYLES.fontSize10_grey898A8F_Poppins_Regular,
                    ]}>
                        By continuing, you agree to Terms & Conditions
                    </Text>
                    <View style={{

                        position: 'absolute',
                        right: '-55%',
                        bottom: '-1300%'
                        // height: '100%',
                        // width: '100%',
                        // bottom: '-2%',
                        // right: '-70%'
                    }}>
                        <Image
                            //style={{ flex: 1, height: '100%', width: '100%' }}
                            source={require('../utilities/images/greencircle.png')} />
                    </View>
                </View>
            </View>


        </SafeAreaView>
    );
};

GooglePhoneNumber.propTypes = {

};

export default GooglePhoneNumber;
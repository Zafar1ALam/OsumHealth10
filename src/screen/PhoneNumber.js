import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, Text, View, TouchableOpacity, } from 'react-native';
import COLORS from '../utilities/colors/Color';
import { TouchableRipple, TextInput } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import Svgs from '../utilities/svgs/Svgs';
import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal'
import STYLES from '../STYLES';
import GreeenButton from '../comp/GreeenButton';

const PhoneNumber = props => {
    const [CountryPickerView, setCountryPickerView] = useState(false);
    const [countryCode, setCountryCode] = useState('92');
    const [statePhoneNo, setStatePhoneNo] = useState('');
    const [stateCombinePhoneNo, setStateCombinePhoneNo] = useState('');
    const [state_AS_UserId, setState_AS_UserId] = useState('');
    const [stateIsValidPhoneNo, setStateIsValidPhoneNo] = useState(true);
    const [stateIsValidCombinePhoneNo, setStateIsValidCombinePhoneNo] = useState(true);
    return (
        <SafeAreaView
            style={{
                flex: 1, backgroundColor: COLORS.whiteF6F6F6,
                paddingHorizontal: '5%', paddingVertical: '5%'
            }}
        >
            <TouchableRipple style={{}}>
                <SvgXml xml={Svgs.cross} />
            </TouchableRipple>

            <View style={{ marginTop: '15%', alignItems: 'center' }}>
                <SvgXml xml={Svgs.phoneNumberLogo} />
            </View>
            <View style={{ marginTop: '8%', width: '75%', alignSelf: 'center' }}>
                <Text style={[STYLES.fontSize12_grey898A8F_Poppins_Regular,
                { textAlign: 'center' }]}>
                    Enter your mobile number we will send
                    you the OTP to verify later
                </Text>
            </View>


            <View style={{
                backgroundColor: COLORS.whiteFFFFFF,
                marginVertical: '10%',
                paddingHorizontal: '5%',
                paddingVertical: '5%',
                borderRadius: 12,
                flex: 1
            }}>
                {CountryPickerView == true ? <CountryPicker
                    theme={DARK_THEME}
                    withFilter={true}
                    withCallingCode={true}
                    withModal={true}
                    withFlag={true}
                    withFlagButton={true}

                    onSelect={(e) => {
                        setCountryPickerView(false)
                        //setCountryFlag(JSON.parse(e.flag))
                        setCountryCode(JSON.parse(e.callingCode))
                    }}
                    onClose={(e) => {
                        setCountryPickerView(false)
                    }}
                    visible={CountryPickerView}
                /> :
                    <View></View>
                }
                <View style={{
                    flexDirection: 'row',


                    // , height: 40
                }}>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',

                            alignItems: 'center'
                        }}
                        onPress={() => {
                            setCountryPickerView(true)
                        }}>
                        <TextInput

                            editable={false}
                            selectTextOnFocus={false}
                            keyboardType='number-pad'
                            onChangeText={(e) => {
                                // setPhoneno(e)
                                console.log(e)
                                console.log('+' + countryCode + e)
                                //console.log('+' + countryFlag + e)
                            }}
                            value={'+' + countryCode}
                            style={[STYLES.fontSize14_grey313450_Poppins_SemiBold, {
                                borderWidth: 1,
                                borderRadius: 8,
                                borderColor: COLORS.greyECECEC,
                                backgroundColor: COLORS.whiteFFFFFF
                            }]}
                        //  placeholderTextColor={"black"}
                        />

                    </TouchableOpacity>
                    <TextInput
                        style={[STYLES.fontSize14_grey313450_Poppins_SemiBold, {
                            flex: 1, marginLeft: '10%',
                            backgroundColor: COLORS.whiteFFFFFF,
                            borderWidth: 1,
                            borderRadius: 8,
                            borderColor: COLORS.greyECECEC,
                        }]}
                        keyboardType='number-pad'
                        activeUnderlineColor={COLORS.whiteFFFFFF}
                        selectionColor={COLORS.black000000}
                        activeOutlineColor={COLORS.whiteFFFFFF}
                        onChangeText={(text) => {
                            setStateIsValidPhoneNo(true)
                            setStatePhoneNo(text)
                            setStateCombinePhoneNo("+" + countryCode + text)
                        }} />


                </View>
                {stateIsValidPhoneNo == false ? <Text style={{ color: 'red' }}>Enter Valid PhoneNo</Text> : null}



                <View style={{ marginTop: '15%', flex: 1, justifyContent: 'flex-end' }}>
                    <GreeenButton text="Submit" />
                </View>
            </View>
        </SafeAreaView>
    );
};

PhoneNumber.propTypes = {

};

export default PhoneNumber;
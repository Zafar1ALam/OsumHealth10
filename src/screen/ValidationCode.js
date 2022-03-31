import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    SafeAreaView, Text, View, TouchableOpacity,
    Image, StyleSheet,
} from 'react-native';
import COLORS from '../utilities/colors/Color';
import { TouchableRipple, TextInput } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import Svgs from '../utilities/svgs/Svgs';
import STYLES from '../STYLES';
import GreeenButton from '../comp/GreeenButton';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';


const CELL_COUNT = 6;


const ValidationCode = props => {
    const [value, setValue] = useState('');
    const [stateShowAlert, setStateShowAlert] = useState(false)
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const [stateIsValidOTPCode, setStateIsValidOTPCode] = useState(true)


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

            <View style={{
                alignItems: 'center', width: '90%',
                marginTop: '10%', alignSelf: 'center'
            }}>
                <Text style={STYLES.fontSize14_grey333348_Poppins_SemiBold}>Enter code</Text>

                <View style={{
                    //backgroundColor: 'green',
                    marginTop: '2%',
                    height: '20%', width: '50%'
                }}>
                    <Image
                        style={{ width: '100%', height: '100%', flex: 1 }}
                        source={require('../utilities/images/validationstarimages.png')} />
                </View>
                <View style={{ marginTop: '5%' }}>
                    <Text style={[STYLES.fontSize12_grey898A8F_Poppins_Regular,
                    { textAlign: 'center' }]}>We have sent you an SMS on +92 7020764458
                        with 6 digit verification code.</Text>
                </View>
            </View>


            <View style={{
                flex: 0.9,
                backgroundColor: COLORS.whiteFFFFFF,
                paddingHorizontal: '5%',
                paddingVertical: '5%'
            }}>
                <CodeField
                    ref={ref}
                    {...prop}
                    // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        value == '' ?

                            <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}>{console.log(index)}
                                {console.log('a')}
                                {console.log(symbol)}
                                {console.log(isFocused)}
                                {symbol || (isFocused ? <Cursor /> : null)}

                            </Text>
                            : <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}>{console.log(index)}
                                {console.log(symbol)}

                                {console.log(isFocused)}
                                {symbol || (isFocused ? <Cursor /> : null)}

                            </Text>

                    )}
                />


                {stateIsValidOTPCode == false ? <Text style={{
                    marginHorizontal: '15%',
                    marginTop: '5%', color: 'red'
                }}>Enter Valid OTP Code </Text> : null}


                <View style={{ marginTop: '15%', flex: 1, justifyContent: 'flex-end' }}>
                    <GreeenButton text="Submit" />
                </View>
            </View>

            <View style={{
                flexDirection: 'row', marginTop: '5%',



                justifyContent: 'space-between'
            }}>


                <Text style={STYLES.fontSize12_grey313450_Poppins_Regular}
                >Did not receive the code? </Text>
                <TouchableRipple onPress={() => { navigation.goBack() }}>
                    <Text style={STYLES.fontSize14_lightGreen00CE30_Poppins_Regular}>Re-send</Text>
                </TouchableRipple>
            </View>


        </SafeAreaView>
    );
};

ValidationCode.propTypes = {

};

export default ValidationCode;

const styles = StyleSheet.create({
    //   root: {flex: 1, padding: 20,backgroundColor:'green'},

    codeFieldRoot: {
        width: '100%', alignSelf: 'center',
        //backgroundColor: 'red'
        marginTop: '6%'
    },
    cell: {
        width: 35,

        height: 50,
        lineHeight: 48,
        fontSize: 20,
        borderBottomWidth: 2,
        color: COLORS.black000000,
        borderColor: COLORS.black000000_30,
        textAlign: 'center',
        marginTop: '6%',
        //backgroundColor:'orange'
    },
    focusCell: {
        borderColor: '#000',
    },
});
import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Svgs from '../utilities/svgs/Svgs';
import COLORS from '../utilities/colors/Color';
import STYLES from '../STYLES';
import Button1 from '../comp/Button1';

const BookAppointment = props => {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.whiteFFFFFF,
            paddingHorizontal: '5%',

        }}>

            <View style={{ alignItems: 'center' }}>
                <SvgXml xml={Svgs.bookAppointmentLogo} />
            </View>

            <View style={{
                marginTop: '15%', alignItems: 'center',
                width: '70%', alignSelf: 'center'
            }}>
                <Text style={STYLES.fontSize20_grey333348_Poppins_SemiBold}>
                    Book Appointment
                </Text>
                <View style={{ marginTop: '2%' }}>
                    <Text style={[STYLES.fontSize14_grey333348_Poppins_Light,
                    { textAlign: 'center' }]}>
                        Book an appointment with a
                        right doctor
                    </Text>
                </View>
            </View>

            <View style={{
                flex: 1,
                marginBottom: '20%',
                justifyContent: 'flex-end'
            }}>

                <Button1 text="Next" />
            </View>


        </SafeAreaView>
    );
};

BookAppointment.propTypes = {

};

export default BookAppointment;
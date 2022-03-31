import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Svgs from '../utilities/svgs/Svgs';
import COLORS from '../utilities/colors/Color';
import STYLES from '../STYLES';
import Button1 from '../comp/Button1';

const SearchDoctors = props => {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.whiteFFFFFF,
            paddingHorizontal: '5%',
            paddingVertical: '20%'
        }}>

            <View style={{ marginTop: '15%' }}>
                <SvgXml xml={Svgs.searchDoctorsLogo} />
            </View>

            <View style={{ marginTop: '15%', alignItems: 'center', }}>
                <Text style={STYLES.fontSize20_grey333348_Poppins_SemiBold}>
                    Search Doctors
                </Text>
                <View style={{ width: '50%', marginTop: '2%' }}>
                    <Text style={[STYLES.fontSize14_grey333348_Poppins_Light,
                    { textAlign: 'center' }]}>
                        Get list of best doctor
                        nearby you
                    </Text>
                </View>
            </View>

            <View style={{
                flex: 1,
                justifyContent: 'flex-end'
            }}>

                <Button1 text="Next" />
            </View>


        </SafeAreaView>
    );
};

SearchDoctors.propTypes = {

};

export default SearchDoctors;
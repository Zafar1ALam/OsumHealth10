import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import COLORS from '../utilities/colors/Color';
import { Colors } from 'react-native-paper';

const SimpleTextInput = props => {
    return (
        <TextInput
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}

            style={{
                width: '100%',
                borderWidth: 1,
                borderRadius: 9,
                paddingLeft: '4%',
                height: 50, backgroundColor: COLORS.whiteF6F6F6,
                borderColor: COLORS.greyD6D6D6
            }}
        />
    );
};

SimpleTextInput.propTypes = {

};

export default SimpleTextInput;
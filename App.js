
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  NavigationContainer, DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';

import {
  ActivityIndicator, StyleSheet, Text, View, useColorScheme,

} from "react-native";
import SearchDoctors from './src/screen/SearchDoctors';
import BookAppointment from './src/screen/BookAppointment';
import GooglePhoneNumber from './src/screen/GooglePhoneNumber';
import PhoneNumber from './src/screen/PhoneNumber';
import ValidationCode from './src/screen/ValidationCode';
import Home from './src/screen/Home';
import TabNavigation1 from './src/route/TabNavigation1';
import FindAndBook from './src/screen/FindAndBook';
import Doctors from './src/screen/Doctors';
import DoctorsList from './src/screen/DoctorsList';
import DoctorData from './src/screen/DoctorData';
import DoctorTimeSlot from './src/screen/DoctorTimeSlot';
import DoctorTimeSlotNameEmailNumber from './src/screen/DoctorTimeSlotNameEmailNumber';
import Chat from './src/screen/Chat';
import Account from './src/screen/Account';
import ChatTyping from './src/screen/ChatTyping';
import Vedio from './src/screen/Vedio';
import SelectYourCity from './src/screen/SelectYourCity';


const Stack = createNativeStackNavigator();
const App = props => {

  return (


    <NavigationContainer>
      <Stack.Navigator initialRouteName={'DoctorTimeSlot'}
      //  initialRouteName={'Account'}
      >
        <Stack.Screen name="SearchDoctors" component={SearchDoctors} options={{
          headerShown: false,
        }} />

        <Stack.Screen name="BookAppointment" component={BookAppointment} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Chat" component={Chat} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="SelectYourCity" component={SelectYourCity} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Vedio" component={Vedio} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Account" component={Account} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="ChatTyping" component={ChatTyping} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="DoctorsList" component={DoctorsList} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="DoctorTimeSlotNameEmailNumber" component={DoctorTimeSlotNameEmailNumber} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="DoctorTimeSlot" component={DoctorTimeSlot} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="DoctorData" component={DoctorData} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="FindAndBook" component={FindAndBook} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Doctors" component={Doctors} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Home" component={Home} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="TabNavigation1" component={TabNavigation1} options={{
          headerShown: false,
        }} />

        <Stack.Screen name="GooglePhoneNumber" component={GooglePhoneNumber} options={{
          headerShown: false,
        }} />


        <Stack.Screen name="PhoneNumber" component={PhoneNumber} options={{
          headerShown: false,
        }} />

        <Stack.Screen name="ValidationCode" component={ValidationCode} options={{
          headerShown: false,
        }} />



      </Stack.Navigator>
    </NavigationContainer >


  );
};

App.propTypes = {

};

export default App;
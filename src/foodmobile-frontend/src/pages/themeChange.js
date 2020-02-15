import React from 'react';

import { View } from 'react-native';

import { Button,Text } from 'react-native-paper';
import PreferencesContext from '../context/context';

import TestTab from '../navigation/test/TestTab'

//Simple page that adds a tab that allows to change theme
export default function ThemeChangePage(props) {
    return (
        <TestTab/>
    )
}
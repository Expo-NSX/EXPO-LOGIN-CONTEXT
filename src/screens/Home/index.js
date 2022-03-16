import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './style';

import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';

export default function Home(){
    const navigation = useNavigation();

    function handleList(){
        navigation.navigate('List');
    }

    const { data } = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <Text>BEM-VINDO { data.usuario }</Text>
            <TouchableOpacity style={styles.button} onPress={handleList}>
                <Text style={styles.textButton}>List</Text>
            </TouchableOpacity>
        </View>
    );
}
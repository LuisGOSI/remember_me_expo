import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import TopStroke from '../../components/TopStroke';

export default function contact() {
    return (
        <View style={styles.mainContainer}>
            <TopStroke style={styles.strokeContainer} />
            <View style={styles.container}>
                <Text>Contacto</Text>
                <StatusBar style="auto" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#B1D4FE',
    },

    container: {
        flex: 1,
        backgroundColor: '#B1D4FE',
        alignItems: 'center',
        justifyContent: 'center',
    },

    strokeContainer: {
        width: width,
    },

    camera: {
        flex: 1,
        width: '70%',
        height: '20%',
    },

    button: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
});

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions , StyleSheet} from 'react-native';
import { Camera } from 'expo-camera';
import TopStroke from '../../components/TopStroke';

const { width, height } = Dimensions.get('window');

export default function CameraNative() {
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    if (!permission) {
        return (
            <View style={styles.mainContainer}>
                <Text>Permission is not granted</Text>
                <TouchableOpacity style={styles.button} onPress={requestPermission}>
                    <Text style={styles.text}>Request Permission</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const handleCameraType = () => {
        setType(current => (current === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back));
    }

    return (
        <View style={styles.mainContainer}>
            <TopStroke style={styles.strokeContainer} />
            <Camera style={styles.camera} type={type} />
            <TouchableOpacity style={styles.button} onPress={handleCameraType}>
                <Text style={styles.text}>Voltear camara</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
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

    text: {
        color: 'black',
    },
});
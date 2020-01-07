import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

function Coordinates(props) {

    function _onPressButton() {
        alert(`Mi latitud es: ${props[0]}`)
    }

    return (
        <TouchableOpacity onPress={_onPressButton}>
            <View style={styles.container}>
                    <View style={styles.left}>
                        <Image
                            style={styles.cover}
                            source={require('../../../assets/coordonate.png')}
                        />
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.title}>Coordenadas en el punto: </Text>
                        <Text style={styles.coordinates}>Lat:{props[0]}    Long:{props[1]}   </Text>
                        <Text style={styles.author}>Powered by Marco</Text>
                    </View>

            </View>
        </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    gender: {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'black',
        paddingVertical: 5,
        paddingHorizontal: 7,
    },
    genderText:{
        color: 'white',
        fontSize: 11,
    },
    cover: {
        height: 150,
        width: 100,
        resizeMode: 'contain',
    },
    right: {
        paddingLeft: 10,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 18,
        color: '#44546b'
    },
    coordinates: {
        backgroundColor: '#70b124',
        paddingVertical: 4,
        paddingHorizontal: 6,
        color: 'white',
        fontSize: 16,
        borderRadius: 5,
        overflow: 'hidden',
        alignSelf: 'flex-start'
    },
    author: {
        color: '#6b6b6b',
        fontSize: 14,
        fontWeight: 'bold',
    }
})

export default Coordinates

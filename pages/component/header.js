import React from 'react'
import { Appbar, Avatar } from 'react-native-paper';
import { View, Image, Text, StyleSheet, TouchableOpacity, StatusBar, Alert} from 'react-native'

// svg
import BackIcons from '../../assets/icons/chevron-left.svg'

const header = (props) => {

    const back = (dataProps) => {
        if(dataProps.back) 
            return <TouchableOpacity style={styles.centerIcon} onPress={() => { dataProps.nav.goBack() }}><Image style={styles.iconLeft} source={require('../../assets/icons/left-arrow.png')} /></TouchableOpacity>;
        return null;
    }
    
    return (
        <View style={styles.headersTitle}>
            <View style={styles.titleApp}>
                { back(props) }
                <View>
                    <Text style={styles.titles}> Jastip </Text>
                    <View style={styles.borderBottomTitle}></View>
                </View>
            </View>
            <TouchableOpacity>
                <Avatar.Image size={45} source={{ uri: 'https://picsum.photos/200/300' }} />
            </TouchableOpacity>
            <StatusBar animated={true} style={styles.StatusBars} translucent={true} currentHeight="10" backgroundColor="#fff" barStyle="dark-content"/>
        </View>
    )
}

export default header;

const styles = StyleSheet.create({
    headersTitle: {
        marginTop: 60, 
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleApp: {
        display: 'flex',
        flexDirection: 'row',
    },
    titles: {
        fontSize: 33, 
        color: '#259A62',
        fontWeight: 'bold',
    },
    borderBottomTitle: {
        borderWidth: 1.5,
        borderColor: "#259A62",
        borderRadius: 10,
        width: 40,
        marginBottom: 20,
        marginLeft: 10,
    },
    centerIcon: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 15, 
    },
    iconLeft: {
        width: 25, height:25,
        marginHorizontal: 10, 
    }
})

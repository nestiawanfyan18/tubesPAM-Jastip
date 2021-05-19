import React from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Title, Caption } from 'react-native-paper';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

// components
import Header from './component/header'

const viewhistory = ({ navigation }) => {

    let [fontsLoad] = useFonts({
        'DM-Sans-Bold': require('.././assets/fonts/DMSans-Bold.ttf'),
        'DM-Sans-Regular': require('.././assets/fonts/DMSans-Regular.ttf'),
    })

    if(!fontsLoad){
        return (
            <AppLoading />
        )
    } else {
        return (
            <ScrollView style={styles.viewHistory} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <Header back="true" nav={navigation} name="Penitipan" />
                
                <View style={styles.headerHistory}>
                    <Image style={styles.imgCoverHistory} source={{ uri: 'https://picsum.photos/200/300' }} />
                    <Caption style={styles.tagHistory}>#Rumah</Caption>
                    <Text style={styles.titleHistory}> Rumah Pak Ruslan </Text>
                    <Text style={styles.duraion}>Durasi Penitipan : 1 Minggu</Text>
                    <Text style={styles.address}>jl. P. Tirtayasa, Sukabumi, Perum Nusantara Permai</Text>
                </View>
                <View style={styles.deskripsi}>
                    <Text style={styles.titleDeskripsi}> Deskripsi </Text>
                    <Text style={styles.deskripsiContent}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </Text>
                </View>

                <View style={styles.history}>
                    <Text style={styles.titleHistoryPenitipan}> History Penitipan </Text>

                    <View style={styles.listHistory}>
                        <View style={styles.budleHistory}>
                            <View style={styles.borderLefthostiry} />
                        </View>
                        <View>
                            <Text style={styles.durationHistoryP}> 12 May 2021 </Text>
                            <Text style={styles.messagehistory}> Melakukan pengecekan kondisi awal rumah </Text>
                        </View>
                    </View>

                    <View style={styles.listHistory}>
                        <View style={styles.budleHistory} />
                        <View>
                            <Text style={styles.messagehistory}> Selesai </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default viewhistory;

const styles = StyleSheet.create({
    viewHistory: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
    imgCoverHistory: {
        resizeMode: 'cover',
        height: 250, 
        borderRadius: 10,
    },
    tagHistory: {
        color: '#259A62',
        fontWeight: '700',
        fontSize: 14,
        marginTop: 15,
        marginLeft: 5, 
    },
    titleHistory: {
        marginBottom: 5,
        fontWeight: '700',
        fontSize: 24, 
        fontFamily: 'DM-Sans-Bold',
    },
    headerHistory: {
        marginTop: 20, 
    },
    duraion: {
        fontFamily: 'DM-Sans-Regular',
        marginLeft: 7, 
        fontSize: 14, 
    },
    address:{
        fontFamily: 'DM-Sans-Regular',
        marginLeft: 7, 
        fontSize: 14,
        marginTop: 5, 
    },
    deskripsi: {
        marginVertical: 25, 
    },
    titleDeskripsi: {
        fontFamily: 'DM-Sans-Bold',
        fontSize: 24,
        marginBottom: 10,
    },
    deskripsiContent: {
        marginLeft: 5, 
    },
    titleHistoryPenitipan: {
        fontSize: 24,
        fontWeight: '700',
        fontFamily: 'DM-Sans-Bold',
        marginBottom: 10, 
    },
    history:{
        marginBottom: 50, 
    },
    listHistory: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10, 
    },
    budleHistory: {
        width: 15, 
        height: 15, 
        borderRadius: 50, 
        backgroundColor: '#259A62',
        marginRight: 10, 
        marginLeft: 5,
        display: 'flex',
        flexDirection: 'column',
    },
    borderLefthostiry: {
        width: 4, 
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#259A62',
        marginLeft: 5,
        borderRadius: 5, 
    },
    durationHistoryP: {
        marginBottom: 5, 
        fontSize: 14, 
        fontFamily: 'DM-Sans-Regular',
        fontWeight: '600',
    },
    messagehistory: {
        fontSize: 16, 
        fontFamily: 'DM-Sans-Regular',
        fontWeight: '700',
    }
})
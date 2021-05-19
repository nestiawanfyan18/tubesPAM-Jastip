import React, {useState, useEffect} from 'react';

import { Platform, ScrollView, StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appbar, Avatar } from 'react-native-paper';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

// components
import Header from './component/header'

const homeScreen = ({ navigation }) => {

    const [nameSession, sessionNama] =  useState('');

    useEffect(() => {
        AsyncStorage.getItem('sessionNama').then((name) => {
            if(name){
                sessionNama(name);
            }
        });
    }, []);

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
            <ScrollView style={styles.home} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}> 
                <Header nav={navigation} />
                <View style={styles.HelloUser}>
                    <Text style={styles.textHi}>Hi, { nameSession }</Text>
                    <Text style={styles.textDoing}>Apa yang ingin kamu lakukan hari ini ?</Text>
                </View>
                <View style={styles.TitipHistory}>
                    <Text style={styles.textTitip}>Barang apa yang ingin kamu titipkan ?</Text>
                    <ScrollView style={styles.Titip} horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={styles.cardTitip} onPress={() => navigation.navigate('FromPenitipanRumah')}>
                            <Image style={styles.iconTitip} source={require('../assets/icon.png')} />
                            <Text>Rumah</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardTitip} onPress={() => navigation.navigate('FromPenitipanPerhiasan')}>
                            <Image style={styles.iconTitip} source={require('../assets/icon.png')} />
                            <Text>Perhiasan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardTitip} onPress={() => navigation.navigate('FromPenitipanKendaraan')}>
                            <Image style={styles.iconTitip} source={require('../assets/icon.png')} />
                            <Text>Kendaraan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardTitip} onPress={() => navigation.navigate('FromPenitipanBarang')}>
                            <Image style={styles.iconTitip} source={require('../assets/icon.png')} />
                            <Text>Barang</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <View style={styles.History}>
                        <Text style={styles.textTitip}>Riwayat Barang yang kamu titipkan</Text>
                        <View style={styles.history}>
                            <TouchableOpacity style={styles.cardHistory} onPress={() => { navigation.navigate('ViewHistory') }}>
                                <Image style={styles.imgHistory} source={{ uri: 'https://picsum.photos/200/300' }} />
                                <View style={styles.textCardHistory}>
                                    <Text style={styles.textHistoryTag}>#Rumah</Text>
                                    <Text style={styles.textHistoryTitle}>Rumah Pak Burhan</Text>
                                    <Text style={styles.textHistoryLocation}>Sukabumi, Bandar lampung</Text>
                                    <Text style={styles.textHistoryTime}>Durasi : 1 Minggu</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cardHistory}>
                                <Image style={styles.imgHistory} source={{ uri: 'https://picsum.photos/200/300' }} />
                                <View style={styles.textCardHistory}>
                                    <Text style={styles.textHistoryTag}>#Rumah</Text>
                                    <Text style={styles.textHistoryTitle}>Rumah Pak Burhan</Text>
                                    <Text style={styles.textHistoryLocation}>Sukabumi, Bandar lampung</Text>
                                    <Text style={styles.textHistoryTime}>Durasi : 1 Minggu</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cardHistory}>
                                <Image style={styles.imgHistory} source={{ uri: 'https://picsum.photos/200/300' }} />
                                <View style={styles.textCardHistory}>
                                    <Text style={styles.textHistoryTag}>#Rumah</Text>
                                    <Text style={styles.textHistoryTitle}>Rumah Pak Burhan</Text>
                                    <Text style={styles.textHistoryLocation}>Sukabumi, Bandar lampung</Text>
                                    <Text style={styles.textHistoryTime}>Durasi : 1 Minggu</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cardHistory}>
                                <Image style={styles.imgHistory} source={{ uri: 'https://picsum.photos/200/300' }} />
                                <View style={styles.textCardHistory}>
                                    <Text style={styles.textHistoryTag}>#Rumah</Text>
                                    <Text style={styles.textHistoryTitle}>Rumah Pak Burhan</Text>
                                    <Text style={styles.textHistoryLocation}>Sukabumi, Bandar lampung</Text>
                                    <Text style={styles.textHistoryTime}>Durasi : 1 Minggu</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default homeScreen;

const styles = StyleSheet.create({
    AppBar:{
        backgroundColor: '#fff'
    },
    home: {
        paddingLeft: 15, 
        paddingRight: 15,
        backgroundColor: '#fff'
    },
    HelloUser: {
        marginTop: 25,
        marginBottom: 30,
    },
    textHi: {
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'DM-Sans-Regular',
    },
    textDoing: {
        fontSize: 26,
        fontWeight: '700',
        fontFamily: 'DM-Sans-Bold'
    },
    textTitip: {
        fontSize: 18,
        fontWeight: '700',
        fontFamily: 'DM-Sans-Bold',
        marginBottom: 10, 
    },
    Titip: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 17, 
    },
    history: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 17, 
    },
    cardTitip: {
        display: 'flex',
        flexDirection: 'column',
        marginRight: 5,
        backgroundColor: '#f4f4f4',
        paddingVertical: 15, 
        paddingHorizontal: 20, 
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 10,
        fontSize: 11.5,
        elevation: 1.55,
        shadowColor: '#efefef',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        marginBottom: 5, 
    },
    iconTitip: {
        width: 50,
        height: 50,
        marginBottom: 10, 
        borderRadius: 10,
    },
    cardHistory: {
        width: 180, 
        height: 'auto',
        // backgroundColor: '#e8e8e8',
        borderRadius:10, 
        textAlign: 'left',
        marginRight: 10,
        marginTop: 10
    },
    imgHistory: {
        // width: 180,
        resizeMode: 'cover',
        height: 120, 
        borderRadius: 10, 
    },
    textHistory: {
        marginVertical: 6, 
        marginHorizontal: 3
    },
    textCardHistory: {
        marginVertical: 10,
    },
    textHistoryTag: {
        fontFamily: 'DM-Sans-Regular',
        fontSize: 13, 
        marginBottom: 5, 
        color: '#259A62'
    },
    textHistoryTitle: {
        fontWeight: '700',
        fontSize: 17, 
        fontFamily: 'DM-Sans-Bold',
    },
    textHistoryLocation: {
        fontWeight: '500',
        fontSize: 14,
        fontFamily: 'DM-Sans-Regular',
    },
    textHistoryTime: {
        marginTop: 10,
        fontFamily: 'DM-Sans-Regular',
    }
})
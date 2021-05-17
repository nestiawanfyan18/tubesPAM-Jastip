import React from 'react';
import { Caption } from 'react-native-paper';
import { Platform, ScrollView, StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

// components
import Header from '.././component/header'

const viewPengajuan = ({ navigation }) => {

    let [fontsLoad] = useFonts({
        'DM-Sans-Bold': require('../.././assets/fonts/DMSans-Bold.ttf'),
        'DM-Sans-Regular': require('../.././assets/fonts/DMSans-Regular.ttf'),
    })

    if(!fontsLoad){
        return (
            <AppLoading />
        )
    } else {
        return (
            <ScrollView style={styles.viewPengajuan} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <Header back="true" nav={navigation} name="Pengajuan" />
                
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

                <View style={styles.cardAcc}>
                    <Text style={styles.textAcc}> Apakah kamu ingin menerima permintaan ini ?  </Text>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.buttonTolak}>
                            <Text style={styles.textButton}> Tolak </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonTerima}>
                            <Text style={styles.textButton}> Terima </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default viewPengajuan;

const styles = StyleSheet.create({
    viewPengajuan: {
        backgroundColor: '#ffffff',
        paddingHorizontal: 10,
        position: 'relative',
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
    cardAcc: {
        backgroundColor: '#FFFFFF',
        marginVertical: 10, 
        padding: 10,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: '#F0F0F0',
        marginBottom: 40,
    },
    textAcc: {
        fontSize: 16,
        fontFamily: 'DM-Sans-Regular',
        marginBottom: 5,
    },
    button:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonTerima: {
        padding: 10, 
        margin: 10,
        backgroundColor: '#259A62',
        borderRadius: 7, 
        width: '35%'
    },
    buttonTolak: {
        padding: 10, 
        margin: 10,
        backgroundColor: '#A53939',
        borderRadius: 7, 
        width: '35%'
    },
    textButton: {
        textAlign: 'center',
        fontFamily: 'DM-Sans-Regular',
        fontWeight: '600',
        color: '#ffffff',
        fontSize: 15,
    }
})

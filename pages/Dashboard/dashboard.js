import React from 'react';
import { Platform, ScrollView, StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

// components
import Header from '.././component/header'

const dashboard = ({ navigation }) => {

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
            <ScrollView style={styles.dashboard} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <Header nav={navigation} name="Dashbord Admin" />

                <View style={styles.viewPengajuan}> 
                    <Text style={styles.textTitleCard}> Daftar Pengajuan Penitipan </Text>
                    
                    <View style={styles.viewCard}>
                        <View style={styles.textView}>
                            <Text style={styles.tagText} > Penitipan Barang </Text>
                            <Text style={styles.infoBarang} > Keyboaard K2 </Text>
                            <Text style={styles.namaPemilik} > Oleh : Nestiawan Ferdiyanto </Text>
                            <Text style={styles.lamaPenitipan} > Penitipan Selama 3 Hari </Text>
                        </View>
                        <View style={styles.viewButton}>
                            <TouchableOpacity style={styles.buttonTerima}>
                                <Text style={styles.textButton}> Terima </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonTolak}>
                                <Text style={styles.textButton}> Tolak </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonCheck} onPress={ () => { navigation.navigate('viewPengajuan') } }>
                                <Text style={styles.textButton}> Lihat </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.viewCard}>
                        <View style={styles.textView}>
                            <Text style={styles.tagText} > Penitipan Barang </Text>
                            <Text style={styles.infoBarang} > Keyboaard K2 </Text>
                            <Text style={styles.namaPemilik} > Oleh : Nestiawan Ferdiyanto </Text>
                            <Text style={styles.lamaPenitipan} > Penitipan Selama 3 Hari </Text>
                        </View>
                        <View style={styles.viewButton}>
                            <TouchableOpacity style={styles.buttonTerima}>
                                <Text style={styles.textButton}> Terima </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonTolak}>
                                <Text style={styles.textButton}> Tolak </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonCheck}>
                                <Text style={styles.textButton}> Lihat </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.viewCard}>
                        <View style={styles.textView}>
                            <Text style={styles.tagText} > Penitipan Barang </Text>
                            <Text style={styles.infoBarang} > Keyboaard K2 </Text>
                            <Text style={styles.namaPemilik} > Oleh : Nestiawan Ferdiyanto </Text>
                            <Text style={styles.lamaPenitipan} > Penitipan Selama 3 Hari </Text>
                        </View>
                        <View style={styles.viewButton}>
                            <TouchableOpacity style={styles.buttonTerima}>
                                <Text style={styles.textButton}> Terima </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonTolak}>
                                <Text style={styles.textButton}> Tolak </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonCheck}>
                                <Text style={styles.textButton}> Lihat </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.buttonSelengkapnya} onPress={ () => { navigation.navigate('dataPengajuan') }} >
                        <Text style={styles.textSelengkapnya}> Selengkapnya </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.viewRiwajatPenitipan}> 
                    <Text style={styles.textTitleCard}> Daftar Riwayat Penitipan </Text>
                    
                    <View style={styles.viewCard}>
                        <View style={styles.textView}>
                            <Text style={styles.tagText}> Penitipan Barang </Text>
                            <Text style={styles.infoBarang}> Keyboaard K2 </Text>
                            <Text style={styles.namaPemilik}> Oleh : Nestiawan Ferdiyanto </Text>
                            <Text style={styles.lamaPenitipan}> Penitipan Selama 3 Hari </Text>
                        </View>
                        <View style={styles.viewButton}>
                            <TouchableOpacity style={styles.buttonCheck}>
                                <Text style={styles.textButton}> Perbaharui </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.viewCard}>
                        <View style={styles.textView}>
                            <Text style={styles.tagText}> Penitipan Barang </Text>
                            <Text style={styles.infoBarang}> Keyboaard K2 </Text>
                            <Text style={styles.namaPemilik}> Oleh : Nestiawan Ferdiyanto </Text>
                            <Text style={styles.lamaPenitipan}> Penitipan Selama 3 Hari </Text>
                        </View>
                        <View style={styles.viewButton}>
                            <TouchableOpacity style={styles.buttonCheck}>
                                <Text style={styles.textButton}> Perbaharui </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.buttonSelengkapnya}>
                        <Text style={styles.textSelengkapnya}> Selengkapnya </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

export default dashboard;

const styles = StyleSheet.create({
    dashboard:{ 
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10,
    },
    viewPengajuan :{
        marginVertical: 10,
    },
    textTitleCard: {
        fontSize: 18,
        fontFamily: 'DM-Sans-Regular',
        fontWeight: '700',
        marginBottom: 10,
    },
    viewRiwajatPenitipan: {
        marginVertical: 10,
    },  
    viewCard: {
        backgroundColor: '#F3F3F3',
        borderRadius: 7,
        borderWidth: 1.5,
        borderColor: '#E6E6E6',
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    textView:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    tagText: {
        fontFamily: 'DM-Sans-Regular',
        fontSize: 12,
    },
    infoBarang: {
        fontSize: 18,
        fontFamily: 'DM-Sans-Bold',
        fontWeight: '600',
        marginVertical: 5,
    },
    namaPemilik: {
        fontSize: 12,
        fontFamily: 'DM-Sans-Regular',
        marginBottom: 3,
    },
    lamaPenitipan: {
        fontSize: 12,
        fontFamily: 'DM-Sans-Regular',
    },
    viewButton: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    textButton: {
        color: '#ffffff',
        fontFamily: 'DM-Sans-Regular',
        textAlign: 'center',
        fontSize: 12,
    },  
    buttonTerima: {
        padding: 7,
        backgroundColor: '#259A62',
        borderRadius: 6,
        marginVertical: 2,
    },
    buttonTolak: {
        padding: 7,
        backgroundColor: '#A53939',
        borderRadius: 6,
        marginVertical: 2,
    },
    buttonCheck: {
        padding: 7,
        backgroundColor: '#3B6DAE',
        borderRadius: 6,
        marginVertical: 2,
    },
    buttonSelengkapnya: {
        marginVertical: 10,
    },
    textSelengkapnya: {
        fontFamily: 'DM-Sans-Regular',
        color: '#3B6DAE',
    }
});

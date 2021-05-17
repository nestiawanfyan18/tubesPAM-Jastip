import React from 'react';
import { Platform, ScrollView, StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

// components
import Header from '.././component/header'

const daftarPengajuan = ({ navigation }) => {

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
            <ScrollView style={styles.dataPengajuan} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <Header back="true" name="Pengajuan" nav={navigation} />

                <View style={styles.History}>
                    <View style={styles.history}>
                        <TouchableOpacity style={styles.cardHistory} onPress={() => { navigation.navigate('viewPengajuan') }}>
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
            </ScrollView>
        )
    }
}

export default daftarPengajuan;

const styles = StyleSheet.create({
    dataPengajuan: {
        backgroundColor: '#ffffff',
        paddingHorizontal: 10,
    },
    history: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 17,
    },
    cardHistory: {
        width: '47.4%', 
        height: 'auto',
        borderRadius:10, 
        textAlign: 'left',
        marginHorizontal: 5,
        marginTop: 10
    },
    imgHistory: {
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

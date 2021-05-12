import React, { useState } from 'react'
import { ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import {  } from 'react-native-paper';

export default function login({ navigation }) {
    return (
        <ScrollView style={stylesLogin.login}> 
            <View style={stylesLogin.headersTitle}>
                <Text style={stylesLogin.titles}> Jastip </Text>
                <View style={stylesLogin.borderBottomTitle}></View>
            </View> 
            <View style={stylesLogin.contentLogin}>
                <View style={stylesLogin.textHeaderForm}>
                    <Text style={stylesLogin.textDaftar}>Masuk</Text>
                    <Text style={stylesLogin.textDaftarPraf}>Masuk untuk memulai penitipan barang</Text>
                </View>
                <View style={stylesLogin.contentForm}>
                    <TextInput style={stylesLogin.textInput} placeholder="Email" value="" />
                    <TextInput style={stylesLogin.textInput} placeholder="Password" value="" />
                    <TouchableOpacity style={stylesLogin.ButtonStart} onPress={() => navigation.replace('Home')}>
                        <Text style={stylesLogin.ButtonStartText}>Masuk</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={stylesLogin.footerLogin}>
                <Text>Belum punya akun ? 
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={stylesLogin.textMasukButtom}>Daftar</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </ScrollView>
    )
}

const stylesLogin = StyleSheet.create({
    login: {
        flex:1, 
        flexDirection: 'column',
    },
    headersTitle: {
        flex: 7,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
        marginTop: 50, 
    }, 
    borderBottomTitle: {
        borderWidth: 1.5,
        borderColor: "#259A62",
        borderRadius: 10,
        width: 40,
        marginBottom: 20,
    },  
    titles: {
        marginTop: 60,
        fontSize:45,
        color: "#259A62",
        fontWeight: "700",
    },
    borderBottomTitles: {
        borderWidth: 1.5,
        borderColor: "#259A62",
        borderRadius: 10,
        width: 40,
        marginBottom: 20,
    },
    textHeaderForm: {
        marginBottom: 20,
    },
    textMasukButtom:  {
        marginTop: 10,
        position: 'relative',
        top: 3, 
        marginLeft: 5, 
        color: '#259A62'
    },
    textDaftar: {
        fontSize: 26, 
        color: "#259A62",
        fontWeight: "700",
        marginBottom: 2,
    },
    footerLogin: {
        flex: 7,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentLogin: {
        flex: 5,
        padding: 20,
    },
    textInput: {
        marginTop: 5, 
        marginBottom: 5, 
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10, 
    },
    ButtonStart: {
        marginTop: 6,
    },
    ButtonStartText: {
        padding: 10,
        textAlign: 'center',
        fontSize: 18,
        backgroundColor: '#259A62',
        borderColor: '#259A62',
        borderWidth: 1,
        color: '#ffffff',
        borderRadius: 5, 
    }
})

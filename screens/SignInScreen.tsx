import { StyleSheet, SafeAreaView, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const SignInScreen = () => {
    return (
        <SafeAreaView style={styles.PageContainer}>
            <Text style={styles.PageTitle}>Sign In</Text>
            <View style={styles.InputContainer}>
                <TextInput style={styles.InputField} placeholder={'이메일을 입력해 주세요.'} />
                <TextInput style={styles.InputField} placeholder={'비밀번호를 입력해 주세요.'} secureTextEntry />
            </View>
            <View style={styles.ButtonContainer}>
                <TouchableOpacity style={styles.Button}>
                    <Text style={styles.ButtonText}>로그인</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SubButton}>
                    <Text style={styles.SubButtonText}>회원가입</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    PageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f8fa'
    },
    PageTitle: {
        fontSize: 40,
        fontWeight: '700',
        marginBottom: 30
    },
    InputContainer: {
        width: '80%'
    },
    InputField: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        borderRadius: 10,
        backgroundColor: 'white',
        fontSize: 15
    },
    ButtonContainer: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5
    },
    Button: {
        width: '100%',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#000000'
    },
    ButtonText: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: '500'
    },
    SubButton: {
        marginTop: 10
    },
    SubButtonText: {
        textDecorationLine: 'underline',
        fontSize: 14,
        fontWeight: '500'
    }
})

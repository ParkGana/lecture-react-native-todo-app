import { StyleSheet, SafeAreaView, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ErrorMessage } from '../error.message'
import Toast from 'react-native-toast-message'

type NavigationPage = {
    SignIn: undefined
}
const SignUpScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<NavigationPage>>()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = async () => {
        if (password !== confirmPassword) {
            Alert.alert(
                '회원가입 도중에 문제가 발생했습니다.',
                ErrorMessage('password-not-matched'),
                [{ text: '확인' }],
                {
                    cancelable: false
                }
            )
        } else {
            try {
                await createUserWithEmailAndPassword(auth, email, password)

                Toast.show({
                    type: 'success',
                    text1: '회원가입 성공',
                    text2: `${email}으로 가입되었습니다.`
                })

                navigation.replace('SignIn')
            } catch (error: any) {
                Alert.alert('회원가입 도중에 문제가 발생했습니다.', ErrorMessage(error.message), [{ text: '확인' }], {
                    cancelable: false
                })
            }
        }
    }

    return (
        <SafeAreaView style={styles.PageContainer}>
            <Text style={styles.PageTitle}>Sign Up</Text>
            <View style={styles.InputContainer}>
                <TextInput
                    style={styles.InputField}
                    placeholder={'이메일을 입력해 주세요.'}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.InputField}
                    placeholder={'비밀번호를 입력해 주세요.'}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                />
                <TextInput
                    style={styles.InputField}
                    placeholder={'비밀번호를 한 번 더 입력해 주세요.'}
                    onChangeText={(text) => setConfirmPassword(text)}
                    secureTextEntry
                />
            </View>
            <View style={styles.ButtonContainer}>
                <TouchableOpacity style={styles.Button} onPress={handleSubmit}>
                    <Text style={styles.ButtonText}>회원가입</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SubButton} onPress={() => navigation.replace('SignIn')}>
                    <Text style={styles.SubButtonText}>로그인</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default SignUpScreen

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

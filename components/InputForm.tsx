import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/slices/todoSlice'

const InputForm = () => {
    const dispatch = useDispatch()

    const [inputValue, setInputValue] = useState('')

    const handleSubmit = () => {
        if (inputValue) {
            dispatch(addTodo(inputValue))
            setInputValue('')
        }
    }

    return (
        <KeyboardAvoidingView style={styles.FormContainer} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TextInput
                style={styles.InputField}
                placeholder={'할 일을 작성해 주세요.'}
                value={inputValue}
                onChangeText={(text) => setInputValue(text)}
                onSubmitEditing={handleSubmit}
            />
            <Pressable style={styles.ButtonContainer} onPress={handleSubmit}>
                <Text style={styles.ButtonText}>등록</Text>
            </Pressable>
        </KeyboardAvoidingView>
    )
}

export default InputForm

const styles = StyleSheet.create({
    FormContainer: {
        flexDirection: 'row',
        marginVertical: 30
    },
    InputField: {
        flex: 1,
        paddingHorizontal: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        borderRadius: 4,
        fontSize: 15
    },
    ButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    ButtonText: {
        padding: 10,
        color: '#ffffff',
        fontSize: 15
    }
})

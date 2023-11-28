import {
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    StatusBar,
    FlatList,
    TouchableOpacity,
    Alert
} from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import InputForm from '../components/InputForm'
import TodoItem from '../components/TodoItem'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Logout from '../assets/logout.svg'
import { ErrorMessage } from '../error.message'

type NavigationPage = {
    SignIn: undefined
}

const MainScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<NavigationPage>>()

    const todos = useSelector((state: any) => state.todo.todos)
    const todoItems = todos.filter((item: any) => item.state === 'todo')
    const doneItems = todos.filter((item: any) => item.state === 'done')

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigation.replace('SignIn')
            }
        })
    }, [])

    const handleLogout = async () => {
        try {
            await signOut(auth)

            navigation.replace('SignIn')
        } catch (error: any) {
            Alert.alert('로그아웃 도중에 문제가 발생했습니다.', ErrorMessage('logout-failed'), [{ text: '닫기' }], {
                cancelable: false
            })
        }
    }

    return (
        <SafeAreaView style={styles.PageContainer}>
            <StatusBar />
            <View style={styles.HeaderContainer}>
                <Text style={styles.PageTitle}>TODO APP</Text>
                <TouchableOpacity style={styles.LogoutIcon} onPress={handleLogout}>
                    <Logout />
                </TouchableOpacity>
            </View>
            <View style={styles.ListContainer}>
                <Text style={styles.ListTitle}>해야할 일</Text>
                {todoItems.length > 0 ? (
                    <FlatList
                        data={todoItems}
                        renderItem={({ item }) => <TodoItem {...item} />}
                        keyExtractor={(item) => item.id}
                    />
                ) : (
                    <Text style={styles.ListEmptyText}>해야할 일이 없습니다.</Text>
                )}
            </View>
            <View style={styles.Separator} />
            <View style={styles.ListContainer}>
                <Text style={styles.ListTitle}>완료한 일</Text>
                {doneItems.length > 0 ? (
                    <FlatList
                        data={doneItems}
                        renderItem={({ item }) => <TodoItem {...item} />}
                        keyExtractor={(item) => item.id}
                    />
                ) : (
                    <Text style={styles.ListEmptyText}>완료한 일이 없습니다.</Text>
                )}
            </View>
            <InputForm />
        </SafeAreaView>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    PageContainer: {
        flex: 1,
        backgroundColor: '#f7f8fa',
        paddingHorizontal: 15,
        paddingTop: Platform.OS === 'android' ? 20 : 0
    },
    HeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30
    },
    PageTitle: {
        fontSize: 50,
        fontWeight: '700'
    },
    LogoutIcon: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    ListContainer: {
        flex: 1
    },
    ListTitle: {
        fontSize: 30,
        fontWeight: '500'
    },
    ListEmptyText: {
        paddingVertical: 15,
        fontSize: 15,
        color: '#737373'
    },
    Separator: {
        marginVertical: 30,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)'
    }
})

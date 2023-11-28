import { Platform, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import InputForm from '../components/InputForm'
import TodoItem from '../components/TodoItem'

const MainScreen = () => {
    return (
        <SafeAreaView style={styles.PageContainer}>
            <StatusBar />
            <Text style={styles.PageTitle}>TODO APP</Text>
            <View style={styles.ListContainer}>
                <Text style={styles.ListTitle}>해야할 일</Text>
                <TodoItem state={'todo'} />
                <Text style={styles.ListEmptyText}>해야할 일이 없습니다.</Text>
            </View>
            <View style={styles.Separator} />
            <View style={styles.ListContainer}>
                <Text style={styles.ListTitle}>완료한 일</Text>
                <TodoItem state={'done'} />
                <Text style={styles.ListEmptyText}>완료한 일이 없습니다.</Text>
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
    PageTitle: {
        marginBottom: 30,
        fontSize: 50,
        fontWeight: '700'
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

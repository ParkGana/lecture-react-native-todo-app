import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import CheckboxChecked from '../assets/checkbox-checked.svg'
import CheckboxUnchecked from '../assets/checkbox-unchecked.svg'
import Delete from '../assets/delete.svg'

interface TodoItemProps {
    id: number
    text: string
    state: string
}

const TodoItem = (props: TodoItemProps) => {
    return (
        <View style={styles.ItemContainer}>
            <Pressable hitSlop={10} style={styles.CheckboxContainer}>
                {props.state === 'todo' ? (
                    <CheckboxUnchecked />
                ) : (
                    <CheckboxChecked style={styles.CheckboxCheckedIcon} />
                )}
            </Pressable>
            <Text style={[styles.ItemText, props.state === 'done' && styles.ItemDoneText]}>{props.text}</Text>
            <Pressable hitSlop={10}>
                <Delete style={props.state === 'done' && styles.DeleteDoneIcon} />
            </Pressable>
        </View>
    )
}

export default TodoItem

const styles = StyleSheet.create({
    ItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    CheckboxContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    },
    CheckboxCheckedIcon: {
        opacity: 0.5
    },
    ItemText: {
        marginRight: 'auto',
        fontSize: 15,
        lineHeight: 18
    },
    ItemDoneText: {
        opacity: 0.5,
        textDecorationLine: 'line-through'
    },
    DeleteDoneIcon: {
        opacity: 0.5
    }
})

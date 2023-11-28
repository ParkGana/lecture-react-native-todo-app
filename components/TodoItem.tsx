import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import CheckboxChecked from '../assets/checkbox-checked.svg'
import CheckboxUnchecked from '../assets/checkbox-unchecked.svg'
import Delete from '../assets/delete.svg'

const TodoItem = ({ state }: { state: string }) => {
    return (
        <View style={styles.ItemContainer}>
            <Pressable hitSlop={10} style={styles.CheckboxContainer}>
                {state === 'todo' ? <CheckboxUnchecked /> : <CheckboxChecked style={styles.CheckboxCheckedIcon} />}
            </Pressable>
            <Text style={[styles.ItemText, state === 'done' && styles.ItemDoneText]}>TODO ITEM</Text>
            <Pressable hitSlop={10}>
                <Delete style={state === 'done' && styles.DeleteDoneIcon} />
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

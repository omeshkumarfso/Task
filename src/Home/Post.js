import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Post = ({ route }) => {

    const item = route.params.item

    console.log("first", item)

    return (
        <View style={styles.container}>
            <View style={styles.titleView}>
                <Text style={[styles.titleText, { fontWeight: 'bold' }]}>Title</Text>
                <Text style={styles.titleText}>{item.title}</Text>
            </View>
            <View style={styles.bodyView}>
                <Text style={[styles.titleText, { fontWeight: 'bold' }]}>Body</Text>
                <Text style={styles.titleText}>{item.body}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fledirection: 'column',
    },
    titleView: {
        flex: 2,
        borderWidth: 0.5,
        borderColor: 'green',
        marginBottom: 5,
        paddingHorizontal:10
    },
    titleText: {
        fontSize: 15,
        color: 'black',
        alignSelf: 'center'
    },
    bodyView: {
        flex: 8,
        borderWidth: 0.5,
        borderColor: 'green',
        paddingHorizontal:10
    }

})

export default Post
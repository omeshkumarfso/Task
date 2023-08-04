import { View, Text, StyleSheet, FlatList, RefreshControl, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../store/Home/HomeActions';

const Home = ({ navigation }) => {
    const dispatch = useDispatch();

    const data = useSelector(state => state.home.data)

    const [refreshing, setRefreshing] = useState(false);
    const [msg, setMsg] = useState('');


    const onRefresh = () => {
        setRefreshing(true);
        dispatch(fetchData())
            .then(result => {
                if (result.status === true) {
                    setRefreshing(false)
                    setMsg('')
                }
                else {
                    setMsg('API Failed!')
                    setRefreshing(false)
                }
            })
    };

    useEffect(() => {
        dispatch(fetchData())
            .then(result => {
                if (result.status === true) {
                    
                }
                else {
                    setMsg('API Failed!')
                }
            })


    }, [dispatch])

    return (
        <View style={styles.container}>
           {msg !== '' && <Text style={[styles.cardText, { fontWeight: 'bold' }]}>{msg}</Text>} 
            <FlatList
                data={data}
                renderItem={({ item, id }) => (
                    <TouchableOpacity id={id} onPress={() => navigation.navigate('post', { item })}>
                        <View style={styles.card}>
                            <Text style={[styles.cardText, { fontWeight: 'bold' }]}>Title</Text>
                            <Text style={styles.cardText}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>

                )}
                keyExtractor={item => item.id.toString()}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexdirection: 'column',
    },
    card: {
        width: '100%',
        borderColor: 'green',
        borderWidth: 0.5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 5
    },
    cardText: {
        color: 'black',
        fontSize: 18
    }
})

export default Home


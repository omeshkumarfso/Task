import { View, Text, StyleSheet, TextInput,ScrollView, TouchableOpacity,ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/Auth/AuthSlice'

const defaultAuth = { defaultEmail: 'omesh@gmail.com', defaultPassword: '12345' }

const Login = () => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState('omesh@gmail.com')
    const [password, setPassword] = useState('12345')
    const [msg, setMsg] = useState('')


    const submitHandler = () => {
        if (defaultAuth.defaultEmail === email && defaultAuth.defaultPassword === password) {
            ToastAndroid.show('Login Successfully!', ToastAndroid.SHORT);
            dispatch(authActions.ToggleIsAuthenticate())
        }
        else {
            setMsg('Invalid Creadentials!')
            ToastAndroid.show('Login Failed!', ToastAndroid.SHORT);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                    <View style={{ height: 700 }}>
                        <View style={styles.titleMainView}>
                            <View style={styles.titleView}>
                                <Text style={styles.titleText}>Sign In</Text>
                            </View>
                            <View style={styles.Underline}></View>

                        </View>

                        <View style={styles.inputMainView}>
                            <View style={styles.inputBox}>

                                <TextInput
                                    maxLength={90}
                                    style={styles.input}
                                    placeholder="Enter your email or phone no."
                                    placeholderTextColor="#808080"
                                    onChangeText={(e) => setEmail(e)}
                                    value={email}
                                />
                            </View>
                            <View style={[styles.inputBox, { marginTop: 47 }]}>
                                <TextInput
                                    maxLength={90}
                                    style={styles.input}
                                    placeholder="Enter your password"
                                    placeholderTextColor="#808080"
                                    onChangeText={(e) => setPassword(e)}
                                    value={password}
                                />
                            </View>

                        </View>


                        <View style={styles.signInMainView}>
                            <TouchableOpacity onPress={() => submitHandler()}>
                                <View style={styles.signButton}>
                                    <Text style={styles.signInText}>
                                        Sign In
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <View>
                                <Text style={{ color: "red", textAlign: 'center' }}>{msg}</Text>
                            </View>
                        </View>



                        <View style={styles.signUpTextMainView}>
                            <Text style={styles.signUpText}>Don’t have account? </Text>
                            <TouchableOpacity >
                                <Text style={[styles.signUpText, { color: '#FD954E' }]}>SIGN UP!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
        backgroundColor: '#fafafa',

    },
    innerContainer: {
        flex: 1,
        width: "90%",
        // backgroundColor:"red"
    },
    titleMainView: {
        flex: 2,
        width: '100%',
        alignItems: 'flex-start'
        // backgroundColor: 'red'
    },
    titleView: {
        marginBottom: 5
    },
    Underline: {
        width: 50,
        borderWidth: 3,
        borderColor: '#FF985E',
        borderRadius: 10

    },
    titleText: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 24,
        color: '#343434',

    },

    inputMainView: {
        flex: 4,
        // backgroundColor: 'blue',
        // marginTop: 91
    },
    inputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#5A5A5A',
        // marginTop: 47
        // backgroundColor:'green'
    },
    input: {
        marginLeft: 10,
        // backgroundColor:'red',
        color: 'black',
        width: "90%"
    },

    signInMainView: {
        flex: 2,
        // backgroundColor: 'black'
    },
    signButton: {
        width: '100%',
        height: 49,
        backgroundColor: '#3B7358',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 70
    },
    signInText: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontSize: 18,
        color: '#FFFFFF'
    },
   
    
    signUpTextMainView: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
    },
    signUpText: {
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        color: '#444444'
    }

})

export default Login;
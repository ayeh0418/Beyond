import React, {Component} from "react";
import { TextInput } from 'react-native-paper';
import { StyleSheet, View, Text, TouchableOpacity, Button } from "react-native";
import { firebase } from '../firebase/config';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "", pw: ""};
        this.textInput1 = React.createRef();
        this.textInput2 = React.createRef();
    }

    clearTextInput() {
        this.textInput1.current.clear();
        this.textInput2.current.clear();
    }

    onLoginPress() {
        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.pw)
            .then((res) => {
                const uid = res.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            alert("User does not exist anymore.")
                            return;
                        }
                        const user = firestoreDocument.data()
                        this.props.navigation.navigate('Help Listings')
                    })
                    .catch(error => {
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> [ Beyond Money ] </Text>
                <View style={styles.input}>
                    <TextInput 
                        ref={this.textInput1}
                        placeholder="Email"
                        mode='outlined'
                        onChangeText={(email) => this.setState({ email: email })}
                        autoCapitalize='none'
                    />
                </View>
                <View style={styles.input}>
                    <TextInput 
                        ref={this.textInput2}
                        placeholder="Password"
                        mode='outlined'
                        onChangeText={(pw) => this.setState({ pw: pw })}
                        secureTextEntry={true}
                        autoCapitalize='none'
                    />
                </View>
                <View style={styles.signin}>
                    <TouchableOpacity 
                        style={styles.signinBtn}
                        onPress={() => {
                            //if(this.state.email === 'test@ucsd.edu' && this.state.pw === 'test') 
                            //    this.props.navigation.navigate('Help Listings')

                            this.onLoginPress();

                            this.clearTextInput();
                            this.setState({ email: '' })
                            this.setState({ pw: '' })
                        }}>
                        <Text style={styles.signinText}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>
                <Text 
                    style={styles.signup}
                    onPress={() => {
                        this.props.navigation.navigate('Signup')
                    }}>SIGN UP</Text>
            </View>
        );   
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 170
    },
    title: {
        paddingBottom: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40
    },
    input: {
       margin: 15,
       height: 40
    },
    signup: {
        textAlign: 'center',
        paddingTop: 25,
        fontSize: 18,
        color: '#8800ff'
    },
    signin: {
        paddingTop: 35,
        alignItems: 'center'
    },
    signinBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#8800ff",
    },
    signinText: {
        fontSize: 20,
        color: 'white'
    }
 });
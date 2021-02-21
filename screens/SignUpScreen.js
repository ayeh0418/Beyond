import React, {Component} from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { firebase } from '../firebase/config';

export default class SignUpScreen extends Component {
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

    //firebase
    onRegisterPress = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.pw)
            .then((res) => {
                uid = res.user.uid
                data = {
                    id: uid,
                    email: this.state.email
                };
                usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        this.setState({ email: '' })
                        this.setState({ pw: '' })
                        this.props.navigation.navigate('Help Listings')
                    })
                    .catch((err) => {
                        this.props.navigation.navigate('Login');
                        //alert(err)
                    });
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> SIGN UP </Text>
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

                            this.onRegisterPress();

                            this.clearTextInput();
                            //this.setState({ email: '' })
                            //this.setState({ pw: '' })
                        }}>
                        <Text style={styles.signinText}>CREATE ACCOUNT</Text>
                    </TouchableOpacity>
                </View>
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
import React, { Component } from 'react';
import { View, Text, Image, Button, TextInput } from 'react-native';
import styles from './styles';
import SignUp from '../SignUp';

class SignIn extends Component{
    constructor(props){
        super(props)
        this.state = {
            username:null,
            password:null,
        }
    }
    
    authenticateUser(){
        let username = this.state.username;
        let password = this.state.password;

        if(username === 'dbads' && password === 'niceapp'){
            this.props.navigation.navigate('MainApp')
            alert('logged in')
        }else{
            alert('please try again')
            // this.props.navigation.navigate('SignUp')
        }
    }
    
    render(){
        return(
            <View style={{flex:1, backgroundColor:'#D8DCDE', justifyContent:'center', alignItems:"center"}}>
                <Text style={styles.restaurantHeading}> My Restaurant </Text>
                
                <TextInput
                    style={styles.email}
                    placeholder='Username'
                    onChangeText={(text)=>this.setState({username:text})}
                />
                <TextInput
                    // password={true}
                    secureTextEntry={true}
                    style={[styles.email]}
                    placeholder='Password'
                    onChangeText={(text)=>this.setState({password:text})}
                />

                <Text style={styles.forgotPassword}>Forgot Password</Text>

                <Button
                    style={[styles.signInButton,]}
                    title='SignIn'
                    onPress={()=> this.authenticateUser()}
                />
                
                <View style={{flex:.15}}/>
                <Button
                    style={[styles.signInButton,]}
                    title='SignUp'
                    onPress={()=> this.props.navigation.navigate('SignUp')}
                />
            </View>
        )
    }
}

export default SignIn;
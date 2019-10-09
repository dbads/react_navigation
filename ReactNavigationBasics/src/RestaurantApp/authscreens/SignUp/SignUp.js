import React, { Component } from 'react';
import { View, Text, Image, Button, TextInput } from 'react-native';
import styles from './styles';

class SignUp extends Component{
    constructor(props){
        super(props)
        this.state = {
            username:null,
            password:null,
        }
    }
    registerUser(){
        let username = this.state.username;
        let password = this.state.password;

        if(username != '' && password != ''){
            this.props.navigation.navigate('MainApp')
            alert('Successfully registered')
        }else{
            alert('please try again with apt info')
            // this.props.navigation.navigate('SignUp')
        }
    }
    render(){
        return(
            <View style={{flex:1, backgroundColor:'#D8DCDE', justifyContent:'center', alignItems:"center"}}>
                <Text style={styles.restaurantHeading}> Sign Up </Text>
                
                <TextInput
                    style={styles.email}
                    placeholder='Username'
                    onChangeText={(text)=>this.setState({username:text})}
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.email}
                    placeholder='Password'
                    onChangeText={(text)=>this.setState({username:text})}
                />
                
                <Button
                    style={styles.signInButton}
                    onPress={()=>this.props.navigation.navigate('SignUp')}
                    title='SignUp'
                    onPress={()=>this.registerUser()}
                />
            </View>
        )
    }
}

export default SignUp;
import React, { Component } from 'react';
import { View, Text, Image, Button, TextInput } from 'react-native';
import styles from './styles';

class SignIn extends Component{
    render(){
        return(
            <View style={{flex:1, backgroundColor:'#D8DCDE', justifyContent:'center', alignItems:"center"}}>
                <Text style={styles.restaurantHeading}> My Restaurant </Text>
                
                <TextInput
                    style={styles.email}
                    placeholder='Username'
                />
                <TextInput
                    style={styles.email}
                    placeholder='Password'
                />

                <Text style={styles.forgotPassword}>Forgot Password</Text>

                <Button
                    style={[styles.signInButton,]}
                    title='SignIn efrtre '
                />
                <View style={{flex:1}}/>
                <Button
                    style={styles.signInButton}
                    title='SignUp'
                    onPress={()=>this.props.navigation.navigate('SignUp')}
                />
            </View>
        )
    }
}

export default SignIn;
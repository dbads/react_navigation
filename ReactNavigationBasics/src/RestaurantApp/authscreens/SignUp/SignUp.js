import React, { Component } from 'react';
import { View, Text, Image, Button, TextInput } from 'react-native';
import styles from './styles';

class SignUp extends Component{
    render(){
        return(
            <View style={{flex:1, backgroundColor:'#D8DCDE', justifyContent:'center', alignItems:"center"}}>
                <Text style={styles.restaurantHeading}> Sign Up </Text>
                
                <TextInput
                    style={styles.email}
                    placeholder='Username'
                />
                <TextInput
                    style={styles.email}
                    placeholder='Password'
                />
                
                <Button
                    style={styles.signInButton}
                    onPress={()=>this.props.navigation.navigate('SignUp')}
                    title='SignUp'
                />
            </View>
        )
    }
}

export default SignUp;
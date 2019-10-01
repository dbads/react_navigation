import React, { Component } from 'react';
import { View, Text, Image, Button, TextInput } from 'react-native';
import styles from './styles';

class SignIn extends Component{
    render(){
        return(
            <View style={{flex:1, flexDirection:"row", backgroundColor:'#F5F7FA', justifyContent:'center', alignItems:"center"}}>
                <Text style={styles.restaurantHeading}> My Restaurant </Text>
                {/* <View style={{flex:1, justifyContent:"center",}}> */}
                {/* </View> */}
                <TextInput
                    style={styles.email}
                    placeholder='Email Address'
                />
            </View>
        )
    }
}

export default SignIn;
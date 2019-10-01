import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';

class SignIn extends Component{
    render(){
        return(
            <View style={{flex:1, backgroundColor:'#F5F7FA'}}>
                <Text style={{flex:1, justifyContent:"center", color:'#45AEFC'}}> My Restaurant </Text>
                {/* <View style={{flex:1, justifyContent:"center",}}> */}
                {/* </View> */}
            </View>
        )
    }
}

export default SignUp;
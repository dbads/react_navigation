import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


import SignIn from '../SignIn/index';
import SignUp from '../SignUp/index';


const AuthNavigator = createStackNavigator({
    SignIn:{
        screen: SignIn
    },
    SignUp:{
        screen: SignUp
    }
},
{
    initialRouteName: 'SignIn',
    defaultNavigationOptions: {
        headerTitle:'Authentication',
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTintColor: '#f4511e',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    }
  },
)


const AuthNavigatorContainer = createAppContainer(AuthNavigator)

class AuthNavigatorComponent extends Component{
    render(){
        return(
            <AuthNavigatorContainer />
        )
    }
}

export default AuthNavigatorComponent;
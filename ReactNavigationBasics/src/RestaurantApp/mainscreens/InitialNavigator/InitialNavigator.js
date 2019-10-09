import React, { Component } from 'react';
import { Button, View, Image, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createSwitchNavigator } from 'react-navigation';


import AuthNavigator from '../../authscreens/AuthNavigator/index'
import MainAppNavigator from '../../mainscreens/MainAppNavigator/index'

class SplashScreen extends Component{
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Authentication')
        }, 3000);
    }
    
    render(){
        return(
            <View style={{flex:1, backgroundColor:'orange', justifyContent:"center", alignItems:"center"}}>
                <Text>SplashScreen</Text>                
                <Image source={{uri:'https://media.glassdoor.com/sqll/985958/collegedunia-squarelogo-1445937777448.png'}}></Image> 
            </View>
        )
    }
}

const InitialNavigator = createSwitchNavigator(
    {
        Splash: SplashScreen,
        Authentication: AuthNavigator,
        MainApp: MainAppNavigator,
    },
    {
        initialRouteName: 'Splash',
        defaultNavigationOptions: {
            headerTitle:'Collegedunia',
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


const InitialNavigatorContainer = createAppContainer(InitialNavigator)

class InitialNavigatorComponent extends Component{
    render(){
        return(
            <InitialNavigatorContainer />
        )
    }
}

export default InitialNavigatorComponent;
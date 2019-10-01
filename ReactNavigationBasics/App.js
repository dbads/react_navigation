import React, {Component} from 'react';
import { View, Text, Button, Image } from 'react-native';
import { createAppContainer, NavigationEvents } from 'react-navigation';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation-stack';
import { green } from 'ansi-colors';

class LogoTitle extends Component{
  render(){
    return(
      <Image source={require('./assets/images/logo.png')} style={{width:30, height:30, left:15}} />
    )
  }
}

class HomeScreen extends Component {
  static navigationOptions = ({navigation})=>{
    return {
      headerTitle:<LogoTitle />,
      headerRight:<Button title='+1' onPress={navigation.getParam('count','0')} color='red' />
    }
  }
  componentDidMount(){
    this.props.navigation.setParams({count:this._increaseCount()})
  }
  state = {count:0}
  _increaseCount(){
    this.setState({count:this.state.count+1})
  }
  render() {
    const {navigation} = this.props
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title='GO to Details'
          onPress={() => navigation.navigate('Details',{id:45, name:'deepak'})}
        />
      </View>
    );
  }
}

class DetailsScreen extends Component {
  static navigationOptions = ({navigation})=>{
    return { 
              title : navigation.getParam('title','No Title available'),
              headerLeft: <Button title='<-' onPress={()=>navigation.goBack()} color='red' />
          }
  }
  render() {
    const {navigation} = this.props
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
        values  received are name : {JSON.stringify(navigation.getParam('name','no name'))}
        </Text>
        <Text>Detail Screen</Text>
        <Button
          title='GO to Home'
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          title='GO to Details'
          onPress={() => navigation.navigate('Details')}
        />
        <Button
          title='GO back'
          onPress={() => navigation.goBack()}
        />
        <Button
          title='GO to first screen'
          onPress={() => navigation.popToTop()}
        />
        <Button
          title='open the modal'
          onPress={() => navigation.navigate('Modal')}
        />
      </View>
    );
  }
}

class ModalDemo extends Component{
  render(){
    return(
      <View style={{flex:1, justifyContent:"center"}}>
        <Text style={{alignSelf:"center"}}>This is a modal bruh!</Text>
        <Button
          title='cancel'
          onPress={()=>this.props.navigation.goBack()}
        />
      </View>
    )
  }
}


const AppNavigator = createStackNavigator(
  {
    Home: {
            screen:HomeScreen,
            navigationOptions: () => ({
              title: 'Home',
              headerBackTitle: 'to Home',
              headerTruncatedBackTitle: 'home->'
            })
          },
    Details: {
      screen:DetailsScreen,
      navigationOptions: () => ({
        title: 'Detail',
        headerBackTitle: 'to Detail',
        headerTruncatedBackTitle: 'detail->'
      })
    },
    // Modal: {
    //   screen:ModalDemo,
    //   mode:'modal',
    //   headerMode:'none',
    //   navigationOptions: () => ({
    //     title: 'modal view',
    //     headerBackTitle: 'to modal',
    //     headerTruncatedBackTitle: 'modal->'
    //   })
    // },
    // Modal: ModalDemo
    // Profile:ProfileScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTitle:<LogoTitle />,
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#f4511e',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  },
);

const RootNavigator = createStackNavigator(
  {
    Main: AppNavigator,
    Modal: ModalDemo
  },
  {
    mode:'modal',
    headerMode:'none' 
  }
)

const AppContainer = createAppContainer(RootNavigator);
// const AppContainer = createAppContainer(AppNavigator);


class MainApp extends Component{
  render(){
    return(
      <AppContainer />
    )
  }
} 

App = MainApp;

export default App;
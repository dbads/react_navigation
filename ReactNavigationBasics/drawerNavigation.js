// import React from 'react';
// import { Button, Image, Text, View, StyleSheet } from 'react-native';
// // import Ionicons from 'react-native-vector-icons/Ionicons';
// import { createAppContainer } from 'react-navigation';
// import { createDrawerNavigator } from 'react-navigation-drawer';

// // import { createBottomTabNavigator } from 'react-navigation-tabs';
// // import { createStackNavigator } from 'react-navigation-stack';


// class MyHomeScreen extends React.Component {
//     static navigationOptions = {
//       drawerLabel: 'Home',
//       drawerIcon: ({ tintColor }) => (
//         <Image
//           source={require('./assets/images/logo.png')}
//           style={[styles.icon, { tintColor: tintColor }]}
//         />
//       ),
//     };
  
//     render() {
//       return (
//         <Button
//           onPress={() => this.props.navigation.navigate('Notifications')}
//           title="Go to notifications"
//         />
//       );
//     }
//   }
  
//   class MyNotificationsScreen extends React.Component {
//     static navigationOptions = {
//       drawerLabel: 'Notifications',
//       drawerIcon: ({ tintColor }) => (
//         <Image
//           source={require('./assets/images/logo.png')}
//           style={[styles.icon, { tintColor: tintColor }]}
//         />
//       ),
//     };
  
//     render() {
//       return (
//         <Button
//           onPress={() => this.props.navigation.goBack()}
//           title="Go back home"
//         />
//       );
//     }
//   }
  
//   const styles = StyleSheet.create({
//     icon: {
//       width: 24,
//       height: 24,
//     },
//   });
  
//   const MyDrawerNavigator = createDrawerNavigator({
//     Home: {
//       screen: MyHomeScreen,
//     },
//     Notifications: {
//       screen: MyNotificationsScreen,
//     },
//   });
  
//   const App = createAppContainer(MyDrawerNavigator);

// export default App;



//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { View, Image, TouchableOpacity } from 'react-native';
// import all basic components
 
//For React Navigation 3+
//import {
//  createStackNavigator,
//  createDrawerNavigator,
//  createAppContainer,
//} from 'react-navigation';


//For React Navigation 4+
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';
 
class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./assets/images/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
 
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 1',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 2',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 3',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Screen1: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Demo Screen 1',
    },
  },
  Screen2: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Demo Screen 2',
    },
  },
  Screen3: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Demo Screen 3',
    },
  },
});
 
export default createAppContainer(DrawerNavigatorExample);
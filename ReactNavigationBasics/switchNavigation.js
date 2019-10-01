import React from 'react';
import { Button, View } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return <MyNavigator />;
  }
}

class ScreenComponentOne extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          borderWidth: 25,
          borderColor: 'teal',
        }}>
        <Button
          title="Go to two"
          onPress={() => this.props.navigation.navigate('routeNameTwo')}
        />
      </View>
    );
  }
}

class ScreenComponentTwo extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          borderWidth: 25,
          borderColor: 'orange',
        }}>
        <Button
          title="Go to three"
          onPress={() =>
            this.props.navigation.navigate('routeNameThree', {
              greeting: 'Hallo',
            })
          }
        />
      </View>
    );
  }
}

class ScreenComponentThree extends React.Component {
  render() {
    let greeting = this.props.navigation.getParam('greeting', 'Hi');

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          borderWidth: 25,
          borderColor: 'purple',
        }}>
        <Button
          title={`${greeting}! Go to one`}
          onPress={() => this.props.navigation.navigate('routeNameOne')}
        />
      </View>
    );
  }
}


const MyNavigator = createSwitchNavigator({
  routeNameOne: ScreenComponentOne,
  routeNameTwo: ScreenComponentTwo,
  routeNameThree: ScreenComponentThree,
});
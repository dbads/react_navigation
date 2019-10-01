/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import App from './tabNavigation';
// import App from './drawerNavigation';
// import App from './switchNavigation';

import App from './src/RestaurantApp/index'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

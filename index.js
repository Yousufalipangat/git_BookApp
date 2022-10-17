/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {pageRoute } from './src/pageRoute'
AppRegistry.registerComponent(appName, () => pageRoute);

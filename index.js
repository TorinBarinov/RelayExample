/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// import relay from 'relay'

// const getTenantCount = () => {
//   const count = relay.getTenant().count
//   return count + 1
// }

// /**
//  *
//  */
// jest.mock('relay', () => ({
//   getTenant: () => {
//     const count = 2
//     return {
//       count
//     }
//   }
// }))

// test('gettenantcount', () => {
//   expect(getTenantCount()).toEqual(3)
// })

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile84026Navigator from '../features/UserProfile84026/navigator';
import Maps84007Navigator from '../features/Maps84007/navigator';
import Settings83985Navigator from '../features/Settings83985/navigator';
import Settings83970Navigator from '../features/Settings83970/navigator';
import NotificationList83969Navigator from '../features/NotificationList83969/navigator';
import Maps83968Navigator from '../features/Maps83968/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile84026: { screen: UserProfile84026Navigator },
Maps84007: { screen: Maps84007Navigator },
Settings83985: { screen: Settings83985Navigator },
Settings83970: { screen: Settings83970Navigator },
NotificationList83969: { screen: NotificationList83969Navigator },
Maps83968: { screen: Maps83968Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import {createAppContainer} from 'react-native';

const NativeStackNavigatorOptions = {
  headershown: false,
};
const AppNavigator = createNativeStackNavigator(
  {
    Home: {screen: Home},
    Detail: {screen: Detail},
  },
  {
    defaultNavigationOptions: NativeStackNavigatorOptions,
  },
);
export default createAppContainer(AppNavigator);

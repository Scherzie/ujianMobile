import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNav from './HomeNav';
import { Icon } from 'react-native-elements';
import ProfileDrawer from './ProfileDrawer';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color}) => {
                    let iconName;
                    if(route.name === 'Home'){
                        iconName = 'home'
                    } else {
                        iconName = 'user-circle'
                    }
                    return <Icon 
                        type="font-awesome"
                        name={iconName}
                        color={color}
                    />
                }
            })}
            tabBarOptions={{
                activeTintColor: '#3DDC84'
            }}
        >
            <Tab.Screen name="Home" component={HomeNav} />
            <Tab.Screen name="Profile" component={ProfileDrawer} />
        </Tab.Navigator>
    );
};

export default TabNavigation;
import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNav from './AuthNav';
import TabNavigation from './TabNavigation';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { keepLogin } from '../Redux/Actions/authAction';

const MainNavigation = () => {
    let username = useSelector(state => state.auth.username)
    let dispatch = useDispatch();
    useEffect(() => {
        AsyncStorage.getItem('username')
        .then(res => {
            dispatch(keepLogin(res))
        })
        .catch(err => {
            console.log(err)
        })
    }, [dispatch])

    return (
        <NavigationContainer>
            {
                username
                ?
                <TabNavigation />
                :
                <AuthNav />
            }
        </NavigationContainer>
    );
};

export default MainNavigation;
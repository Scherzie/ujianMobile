import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const getData = () => {
    return async dispatch => {
        try {
            let res = await Axios.get('https://api.thecatapi.com/v1/images/search?limit=15',
                {headers:{
                    "x-api-key" : "799c7cc8-f813-4a54-a403-67007467dc2d"
                }}
            )
            dispatch({
                type: 'GET_DATA',
                payload: res.data
            })
        } catch (error) {
            console.log(error)            
        }
    }
}

export const loginAction = (data) => {
    console.log(data)
    return async dispatch => {
        try {
            dispatch({
                type: 'LOGIN',
                payload: data
            })
            await AsyncStorage.setItem('username', JSON.stringify(data))
        } catch (error) {
            
        }
    }
}

export const keepLogin = () => {
    return async dispatch => {
        try {
            let data = await AsyncStorage.getItem('username')
            data = JSON.parse(data)
            dispatch({
                type: 'LOGIN',
                payload: data
            })
        } catch (error) {
            
        }
    }
}

export const imageAction = (data) => {
    return async dispatch => {
        try {
            dispatch({
                type: 'IMAGE',
                payload: data
            })
        } catch (error) {
            
        }
    }
}

export const logoutAction = () => {
    return async dispatch => {
        try {
            dispatch({
                type: 'LOGOUT'
            })
            await AsyncStorage.removeItem('username')
        } catch (error) {
            
        }
    }
}
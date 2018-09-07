/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Dimensions
} from 'react-native';
import Home from './js/scene/home/home';
import Music from './js/scene/music/Music';
import Book from './js/scene/book/Book';
import My from './js/scene/my/My';
import Details from "./js/scene/home/Details";
import Login from  './js/scene/login/Login';
import {createStackNavigator,createBottomTabNavigator} from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';
import color from './js/assets/Color'
import {Platforms} from "./js/utils/Platforms";


const Scene = {
    Details:Details,
}

const HomeStack = createStackNavigator({
    Home:Home,
    ...Scene
})

const MusicStack = createStackNavigator({
    Music:Music,
    ...Scene
})

const  BookStack = createStackNavigator({
    Book:Book,
    ...Scene
})

const MyStack = createStackNavigator({
    My:My,
    ...Scene
})

const Tab = createBottomTabNavigator({
    HomeTab: {
        screen: HomeStack,
        navigationOptions: {
            tabBarPosition: 'bottom',
            tabBarLabel: '首页',
            showLabel:false,
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={'md-home'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        }
    },
    MusicTab: {
        screen: MusicStack,
        navigationOptions: {
            tabBarPosition: 'bottom',
            tabBarLabel: '音乐',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={'ios-musical-notes'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        }
    },
    BookTab: {
        screen: BookStack,
        navigationOptions: {
            tabBarLabel: '图书',
            tabBarPosition: 'bottom',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={'ios-book'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        }
    },
    MyTab: {
        screen: MyStack,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarPosition: 'bottom',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={'ios-people'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        }
    },

}, {
    tabBarOptions: {
        activeTintColor: color.primary,
        inactiveTintColor: color.gray,
    },
    //是否可以滑动切换
    swipeEnabled: true,
    //切换是否有动画
    animationEnabled: true,
    //进入App的首页面
    initialRouteName: 'HomeTab',
    //对于导航的设置
    tabBarOptions: {
        //android特有下划线的颜色1
        indicatorStyle: {height: 0},
        //文字的样式
        labelStyle: {
            fontSize: 10
        },
        //对于导航的stytles
        style :{
            borderTopColor:'#ebebeb',
            borderTopWidth:1,
            backgroundColor:'white',
            height:Dimensions.get('window').height*0.08,
        }
    }
});

HomeStack.navigationOptions = ({ navigation }) => {//隐藏二级界面tabbar
    let tabBarVisible = true
    if (navigation.state.index > 0) {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
}

MusicStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true
    if (navigation.state.index > 0) {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
}

BookStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true
    if (navigation.state.index > 0) {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
}

MyStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true
    if (navigation.state.index > 0) {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
}


Tab.navigationOptions = ({ navigation }) => {
    let { routeName } = navigation.state.routes[navigation.state.index];
    if(routeName=='HomeTab'||routeName=='MusicTab'||routeName=='BookTab' || routeName==='MyTab'){
        return {
            header:null
        }
    }
}

const RootNav = createStackNavigator({
    tabStack:Tab,
    Login:Login
},{
    header:'none',
    mode: 'modal'
})

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (<RootNav/>);
    }


}

import React from 'react';
import BaseComponent from "../common/BaseComponent";
import {View, StyleSheet, ActivityIndicator, Button} from 'react-native';
import Color from '../../assets/Color';
import Utils from '../../utils/Utils';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import TopFilmList from './TopFilmList';
import HotFilmList from "./HotFilmList";

export default class Home extends BaseComponent {

    static navigationOptions = ({navigation}: any) => ({
        ...Utils.generateNavTitleOptions('home'),
    });

    constructor(props) {
        super(props)
    }

    _render() {
        return <View style={styles.container}>
                    <ScrollableTabView
                        tabBarActiveTextColor={Color.primary}
                        tabBarInactiveTextColor={Color.gray}
                        tabBarUnderlineStyle={{backgroundColor: Color.primary, height: 2,}}
                        tabBarTextStyle={{fontSize: 16}}
                        style={{flex: 1, marginTop: 10, backgroundColor: 'white'}}
                        renderTabBar={() => <DefaultTabBar style={{height: 30}}/>}
                    >
                        <TopFilmList tabLabel='Top250'/>
                        <HotFilmList tabLabel='正在热映'/>
                    </ScrollableTabView>
        </View>
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.backgroundColor,
    }
})
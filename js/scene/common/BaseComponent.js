
import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import Color from "../../assets/Color";
import Utils from "../../utils/Utils";
import NavigationBar from './NavigationBar'

export default class BaseComponent extends Component {

    static navigationOptions = ()=>({
        ...Utils.generateNavTitleOptions(''),
    })

    constructor(props) {
        super(props)
    }

    _render() {
        return
    }

    _renderNavigationBar(){
        return <NavigationBar/>

    }

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                {this._render()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white
    }
})
/**
 *  Created by cysu on 2018/6/6
 */

import React,  { Component } from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    SafeAreaView,
    Text,
    Image
} from 'react-native';
import Color from "../../assets/Color";
import PropTypes from 'prop-types'
import Utils from "../../utils/Utils";
import {ifIphoneX} from 'react-native-iphone-x-helper'
import ImageSourcePropType from 'ImageSourcePropType'
import {Icon} from 'antd-mobile-rn'
import NavigationIconButton from './NavigationIconButton'
import renderIf from 'render-if'
import {ifiOS} from "../../utils/Platforms";

export default class NavigationBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showTitle: true
            // backgroundColor: '',
        }
    }
    static defaultProps = {
        style: {},
        title: '',
        showBackButton: true,
    }

    static propTypes = {
        style: PropTypes.object,
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        leftItem: PropTypes.element,
        leftTitle: PropTypes.string,
        leftImage: ImageSourcePropType,
        rightImage: ImageSourcePropType,
        onLeftPress: PropTypes.func,
        onRightPress: PropTypes.func,
    }

    render(){
        return (
            <View style={[styles.container, this.props.style, {backgroundColor: this.state.backgroundColor}]}>
                <StatusBar
                    backgroundColor={Color.themeColor}
                    translucent={true}
                    animated={true}
                    hidden={false}
                    barStyle={'light-content'}
                />
                <View style={styles.bar}>
                    <View style={styles.leftContainer}>
                        {this._renderLeftElement()}
                    </View>
                    <View style={styles.titleContainer}>
                        {renderIf(this.state.showTitle)(
                            this._renderTitleElement()
                        )}
                    </View>
                    <View style={styles.rightContainer}>
                        {this._renderRightElement()}
                    </View>

                </View>
        </View>
        )
    }

    _renderLeftElement(){
        if (this.props.leftImage) {
            return (
                <NavigationIconButton onPress={this.props.onLeftPress} icon={this.props.leftImage}/>
            )
        }


        if (!this.props.showBackButton) {
            return null
        }
        return (
            <Icon type={'left'} color={'white'} onClick={()=>{
                Utils.goBack()
            }}/>
        )
    }

    _renderRightElement(){
        if (this.props.rightImage) {
            return (
                <NavigationIconButton  onPress={this.props.onRightPress} icon={this.props.rightImage}/>
            )
        }
        return null
    }

    _renderTitleElement(){
        if (typeof this.props.title === 'string') {
            return (
                <Text style={styles.title}>{this.props.title}</Text>
            )
        }
        return this.props.title
    }

    setNativeProps(opacity){
        let color = Utils.addAlpha(Theme.color, opacity)
        this.setState({
            backgroundColor: color,
            showTitle: opacity>=1
        })
    }

    setBackGroundColor(color){
        this.setState({
            backgroundColor: color,
        })
    }
}




const styles = StyleSheet.create({
    container: {
        paddingTop: ifiOS(ifIphoneX(44, 20), StatusBar.currentHeight),
        backgroundColor: Color.themeColor
    },
    bar: {
        height: 44,
        // backgroundColor: Color.themeColor,
        flexDirection: 'row'
    },
    titleContainer: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    leftContainer: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 8,
    },
    rightContainer: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'flex-end',
        paddingRight: 8,
    },

    title: {
        fontSize: 18,
        color: 'white'
    },
})
import React,{Component} from 'react'
import {View,ActivityIndicator,StyleSheet,Text} from 'react-native'
import PropTypes from 'prop-types'
import Color from "../../assets/Color";
import SeperateView from "./SeperateView";

export default class ListFooter extends Component{

    constructor(props){
        super(props)
    }

    static defaultProps = {
        status:'null'
    }

    static propTypes = {
        status:PropTypes.string
    }

    render(){
        if (this.props.status === 'null'){
            return null
        } else if (this.props.status === 'loading'){
            return this._renderLoading()
        }

        return this._renderNoMore()
    }

    _renderLoading(){
        return (
                <View style={styles.container}>
                    <ActivityIndicator size='small' color={Color.primary}/>
                </View>
                )


    }

    _renderNoMore(){
        return (
            <View style={styles.container}>
                <SeperateView style={styles.line}/>
                <Text style={styles.text}>没有更多</Text>
                <SeperateView style={styles.line}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Color.background,
        height: 50,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    line:{
        width:'18%'
    },
    text:{
        fontSize:18,
        color:Color.blackTextColor,
        marginLeft:10,
        marginRight:10
    }


})
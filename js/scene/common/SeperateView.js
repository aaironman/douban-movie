import React,{Component} from 'react'
import {View, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

export default class SeperateView extends Component{

    constructor(props){
        super(props)

    }

    static defaultProps = {
        height:2,
        backgroundColor:'transparent'
    }

    static propTypes = {
        height:PropTypes.number,
        backgroundColor:PropTypes.string
    }

    render(){
        let astyle = {}
        if (this.props.backgroundColor){
            astyle.backgroundColor = this.props.backgroundColor
        }
        if (this.props.height){
            astyle.height = this.props.height
        }


        return (
            <View style={[styles.container,this.props.style,astyle]}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
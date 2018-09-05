import React,  { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
} from 'react-native';
import PropTypes from 'prop-types'
import ImageSourcePropType from 'ImageSourcePropType'
import FastImage from 'react-native-fast-image'
import renderIf from 'render-if'

export default class PLImage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hidePlaceholder: false,
            onError: false
        }
    }
    static defaultProps = {
        style: {},
        // uri: '',
        placeholder: require('../../assets/images/hao_placeholder.png'),
    }

    static propTypes = {
        uri: PropTypes.string,
        style: PropTypes.object,
        placeholder: ImageSourcePropType,
    }

    render(){
        return <View style={this.props.style}>
            {renderIf(!this.state.hidePlaceholder)(
                <Image style={[{resizeMode: 'cover'}, styles.image]} hidden={this.state.hidePlaceholder} source={this.props.placeholder}/>
            )}
            {renderIf(this.props.uri && !this.state.onError)(
                <FastImage style={styles.image} onLoadEnd={(e)=>{
                    this.setState({
                        hidePlaceholder: true
                    })
                }} onError={()=>{
                    this.setState({
                        hidePlaceholder: false,
                        onError: true
                    })
                }} source = {{uri: this.props.uri, priority: FastImage.priority.normal,}}/>
            )}
        </View>
    }

}


const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: '100%',
        position: 'absolute',
        // resizeMode: FastImage.resizeMode.cover
    }
})
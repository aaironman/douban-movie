import React, {Component} from 'react';
import {View,FlatList, StyleSheet,ActivityIndicator} from 'react-native';
import Color from '../../assets/Color';
import FilmItem from './FilmItem';
import * as Constants from '../../constants/Constants'
import FetchUtil from '../../utils/FetchUtil'
import * as Url from '../../constants/Urls'
import renderIf from "render-if";
import ListFooter from "../common/ListFooter";



export default class TopFilmList extends Component {

    constructor(props) {
        super(props)
        this.state={
            loading:true,
            isRefresh:false,
            isLoadMore:false,
            dataLoaded:false,
            currentPage:1,
            totalPage:0,
            data:{

            }
        }

    }

    componentDidMount() {
        this._fetchData()
    }

    _fetchData(){
        let param = {
            start:(this.state.currentPage-1)*Constants.PAGE_15,
            count:Constants.PAGE_15
        }
        FetchUtil.post(Url.TOP_FILM_LIST,param,data=>{
            console.log('_fetchData--this.state.currentPage:' + this.state.currentPage)
            if (this.state.currentPage > 1){//加载更多
                let tempData = this.state.data
                tempData = tempData.concat(data.subjects)
                this.setState({
                    loading:false,
                    data:tempData,
                    isRefresh:false,
                    isLoadMore:false,
                    dataLoaded:true,
                    totalPage:Math.ceil(data.total/Constants.PAGE_15)
                })
            } else {
                this.setState({
                    loading:false,
                    data:data.subjects,
                    isRefresh:false,
                    isLoadMore:false,
                    dataLoaded:true,
                    totalPage:Math.ceil(data.total/Constants.PAGE_15)
                })
            }
        },err=>{
            this.setState({
                loading:false,
                isRefresh:false,
                isLoadMore:false,
                dataLoaded:true,
            })
        })
    }

    render() {
        return (<View style={styles.container}>
            {
                renderIf(this.state.loading)(
                    <ActivityIndicator size="large" color={Color.gray} style={{position:'absolute',width:'100%',height:'100%'}}/>
                )
            }
            {
                renderIf(!this.state.loading)(
                    <FlatList style={styles.listContainer}
                              scrollEnabled={this.state.dataLoaded}
                              numColumns ={3}
                              renderItem = {this._renderItem}
                              data={this.state.data}
                              keyExtractor={(item, index) => index}
                              refreshing={this.state.isRefresh}
                              onRefresh={()=>this._onRefresh()}
                              onEndReachedThreshold={0.1}
                              onEndReached={()=>this._loadMore()}
                              ListFooterComponent={this._renderFooter}
                              extraData={[this.state.isLoadMore, this.state.totalPage, this.state.currentPage]}
                    />
                )
            }
        </View>)
    }

    _onRefresh(){
        this.setState({
            isRefresh:true
        })
        this.state.currentPage = 1
        this._fetchData()
    }

    _renderItem(item){
        return <FilmItem item={item.item}/>
    }

    _renderFooter = ()=>{
        console.log('------renderFooter-------')
        let status = 'loading'
        if (this.state.currentPage > this.state.totalPage&& this.state.totalPage>=1){
            status = 'complete'
        }else {
            if (this.state.isLoadMore) {
                status = 'loading'
            }
        }
        return <ListFooter status={status}/>
    }

    _loadMore(){
        console.log('------loadMore-------')
        if (this.state.isRefresh || this.state.isLoadMore) {
            return
        }
        this.state.currentPage++
        if (this.state.currentPage > this.state.totalPage){
            return
        }
        this.state.isLoadMore = true
        this._fetchData()
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: Color.background,
    },
    listContainer:{
        flex: 1,
        backgroundColor: Color.background,
    }
})
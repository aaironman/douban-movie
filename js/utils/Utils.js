import {Platforms} from "./Platforms";
import Color from '../assets/Color'
import {navigate,goBack} from "./NavigationService";
import {
    StatusBar,
} from 'react-native'

const TITLE_OFFSET = Platforms.onIos === 'ios' ? 70 : 56;

export default class Utils{
    static generateNavTitleOptions(title) {
        if (Platforms.onAndroid) {
            return {
                title: title?title:'',
                headerBackTitle:null,
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontSize: 17,
                    fontWeight: undefined,
                    alignSelf:'center',
                    flex:1,
                    textAlign: 'center',
                },
                headerStyle: {
                    backgroundColor: Color.primary,
                    paddingTop: StatusBar.currentHeight,
                    height: StatusBar.currentHeight+44,
                    elevation: 0,
                },
                headerTitleContainerStyle:{//解决安卓标题不居中
                    left: TITLE_OFFSET,
                    right: TITLE_OFFSET,
                }

            }
        }
        return {
            title: title?title:'',
            headerBackTitle:null,
            headerTintColor: 'white',
            headerTitleStyle: {
                fontSize: 17,
                fontWeight: undefined
            },
            headerStyle: {
                backgroundColor: Color.primary,
            },
        }
    }

    static navigateTo(scene, params){
        navigate(scene, params)
    }

    static goBack(){
        goBack()
    }

}
import * as Urls from '../constants/Urls'


let header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}

/**
 * GET 请求时，拼接请求URL
 * @param url 请求URL
 * @param params 请求参数
 * @returns {*}
 */
const handleUrl = url => params => {
    if (params) {
        let paramsArray = []
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(params[key])))
        if (url.search(/\?/) === -1) {
            typeof (params) === 'object' ? url += '?' + paramsArray.join('&') : url
        } else {
            url += '&' + paramsArray.join('&')
        }
    }
    return url
}


/**
 * fetch 网络请求超时处理
 * @param original_promise 原始的fetch
 * @param timeout 超时时间 30s
 * @returns {Promise.<*>}
 */
const timeoutFetch = (original_fetch, timeout = 30000) => {
    let timeoutBlock = () => {}
    let timeout_promise = new Promise((resolve, reject) => {
        timeoutBlock = () => {
            // 请求超时处理
            reject('请求超时')
        }
    })

    // Promise.race(iterable)方法返回一个promise
    // 这个promise在iterable中的任意一个promise被解决或拒绝后，立刻以相同的解决值被解决或以相同的拒绝原因被拒绝。
    let abortable_promise = Promise.race([
        original_fetch,
        timeout_promise
    ])

    setTimeout(() => {
        timeoutBlock()
    }, timeout)

    return abortable_promise
}


export default class FetchUtil {


    static post(url,params={},success,error){
        let request = this._generateRequest('POST',url, params)

        return timeoutFetch(fetch(request)).then((response) => response.json()).then((jsonData)=>{
            console.log(JSON.stringify(jsonData))
            success(jsonData)
        }).catch(err =>{
            error(err.message)
        })
    }

    static get(url,params={},success,error){
        let request = this._generateRequest('GET',url, params)


        return timeoutFetch(fetch(request)).then((response) => response.json()).then((jsonData)=>{
            success(jsonData)
        }).catch(err =>{
            error(err.message)
        })
    }

    static _generateRequest(method,url,params){
        var postion = url.indexOf("http");
        if (postion == -1) {//非http开头
            url = Urls.BASE_URL + url
        }

        let request = null;
        if (method === 'POST') {//post请求
            console.log('POST-url:%s---params:%s',url, JSON.stringify(params))
             request = new Request(url, {
                method: 'POST',
                headers: header,
                body: JSON.stringify(params),
            });

        }else if (method === 'GET'){//get请求
            console.log('GET-url:%s',handleUrl(url)(params))
            request = new Request(handleUrl(url)(params), {
                method: 'GET',
                headers: header,
            });
        }
        return request;
    }




}
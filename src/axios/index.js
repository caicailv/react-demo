import JsonP from 'jsonp';
export default class Axios {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, function (err, response) {
                if (err === null) {
                    resolve(response)
                } else {
                    reject(err)
                }
            })
        })
    }
}

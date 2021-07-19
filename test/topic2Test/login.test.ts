
/*
const taro = require('@tarojs/taro')


console.log(taro, 'jjjjjjjj')
const mockLogin = () => 0
*/

import Taro from '@tarojs/taro'

 console.log(Taro)
test('hello', ()=>{
    console.log(Taro.request)
    console.log('xxxx')
    expect(1).toEqual(1)
})
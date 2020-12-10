// axios
import request from '@/utils/request'
import api from "./index";

// 获取平台轮播图
export function getBannerList(data) {
    return request({
        url: api.Uchome +'/slide/searchForH5',
        method: 'post',
        data
    })
}
export function getSearchForH5(data) {
    return request({
        url: api.Uchome +'/platform/searchForH5',
        method: 'post',
        data
    })
}
export function getCateGoryList(data) {
    return request({
        url: api.Product +'/productCategory/treeListByType?type=front',
        method: 'get',
        data
    })
}

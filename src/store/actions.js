import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORIES,
  RECEIVE_SHOPS
} from "./mutation-types"
import {
  reqAddress,
  reqFoodCategories,
  reqShops
} from "../api";


export default {
  //异步获取地址
  async getAddress({commit,state}){
    const geohash = state.latitude+","+state.longitude;
    const result = await reqAddress(geohash)
    if(result.code ===0 ){
      const address = result.data;
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  //食品
  async getCategories({commit}){
    const result = await reqFoodCategories()
    if(result.code ===0 ){
      const categories = result.data;
      commit(RECEIVE_CATEGORIES,{categories})
    }
  },
  //商家
  async getShops({commit,state}){
    const {longitude,latitude} = state;
    const result = await reqShops(longitude,latitude)
    if(result.code ===0 ){
      const shops = result.data;
      commit(RECEIVE_SHOPS,{shops})
    }
  }
}

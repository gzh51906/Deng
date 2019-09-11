import axios from 'axios';

export default {
    state: {
        cartlist: [],
    },
    getters: {

    },

    mutations: {
        getData(state, data) {
            state.cartlist = data;
        },
        // changeDot(state,{goodsid,isActive}) {
        //     console.log('state',goodsid,isActive)
        // }
    },
    actions: {
        getcart(context) {
            axios.get('http://localhost:2000/cart/').then(({ data }) => {
                context.commit('getData', data);
            })
        },
        changeDot(context,{goodsid,isActive}){ 
            console.log('changeQtyAsync:',goodsid,isActive);
            context.commit('changeDot',{goodsid,isActive})
            // 需要向服务器获取库存信息，再修改数量
            // axios.get('http://localhost:1906/goods/kucun').then(({data})=>{
            //     let kucun = data.data;
            //     // 库存不足
            //     if(qty>kucun){
            //         qty = kucun;
            //     }
            //     context.commit('changeQty',{id,qty})
            // })

            // return qty;
        }
    }
}
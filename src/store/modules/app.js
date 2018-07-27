import Cookies from 'js-cookie'

const app ={
    state:{
        formData:{
            name:'binning',
            age:25,
            sport:() =>{
                return console.log('篮球')
            }          
        },
        localCookie:Cookies.get('sidebarStatus')
    },
     mutations:{
        changeNum:state =>{
            Cookies.set('sidebarStatus', 1);
            state.formData.name = 'wangbin'
        }
    },
    actions:{
        toggleSideBar({ commit }) {
            commit('changeNum')
          }
    }
}

export default app
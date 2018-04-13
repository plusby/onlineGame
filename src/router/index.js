import Vue from 'vue'
import Router from 'vue-router'
import teamIndex from '../components/community/teamIndex/teamIndex'
import communityIndex from '../components/community/communityIndex/communityIndex'
import sendPost from "../components/community/sendPost/sendPost"
import tip from "../components/community/tip/tip"
import successTip from "../components/community/tip/successTip"
import wzsjIndex from '../components/wzsj/wzsjIndex/wzsjIndex'




Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/teamIndex',
      name: 'teamIndex',
      component:teamIndex
    },
    {
      path: '/communityIndex/:id',
      name: 'communityIndex',
      component: communityIndex
    },
    {
      path: '/sendPost',
      name: 'sendPost',
      component: sendPost
    },
     {
      path: '/tip',
      name: 'tip',
      component: tip
    },
    {
      path: '/successTip',
      name: 'successTip',
      component: successTip
    },
    {
    	path:'/',
    	name:'wzsjIndex',
    	component:wzsjIndex
    }
  ]
})

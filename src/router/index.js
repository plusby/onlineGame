import Vue from 'vue'
import Router from 'vue-router'
import teamIndex from '../components/community/teamIndex/teamIndex'
import communityIndex from '../components/community/communityIndex/communityIndex'
import sendPost from "../components/community/sendPost/sendPost"
import tip from "../components/community/tip/tip"
import successTip from "../components/community/tip/successTip"
import wzsjIndex from '../components/wzsj/wzsjIndex/wzsjIndex'
import login from '../components/login/login'
import person from '../components/person/person'
import registerTel from '../components/register/registerTel'
import registerValide from '../components/register/registerValide'
import registerIco from '../components/register/registerIco'

Vue.use(Router)


export default new Router({
  routes: [
  	{
    	path:'/wzsjIndex',
    	name:'wzsjIndex',
    	component:wzsjIndex,
    	children:[
    			{
    				path:'teamIndex',
    				component:teamIndex,
    				children:[
    					{
    						path: 'sendPost',
    						component: sendPost
    					},
    					{
    						path: 'communityIndex/:id',
    						name: '/wzsjIndex/teamIndex/communityIndex',
    						components: {community:communityIndex}
    					}
    				]
    			},
    			{
    				path:'login',
    				component:login,
    				children:[
    					{
    						path: 'registerTel',
    						component: registerTel,
    						children:[
		    					{
		    						path: 'registerValide',
		    						component: registerValide,
		    						children:[
				    					{
				    						path: 'registerIco',
				    						component: registerIco
				    					}
				    				]
		    					}
		    				]
    					}
    				]
    			},
    			{
    				path:'person',
    				component:person
    			}
    	]
   },
    {
      path: '/teamIndex',
      name: 'teamIndex',
      component:teamIndex
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
    { path:'/',
      redirect:'/wzsjIndex'
    },
	  { path:'*',
	  redirect:'/wzsjIndex'
	  }
  ]
})

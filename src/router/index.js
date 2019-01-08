import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import NotFound from '@/components/NotFound'
import Main from '@/components/temp/Main'
import BaseTable from "@/base/BaseTable"
import BaseRender from "@/base/BaseRender"
import BaseDropDown from "@/base/BaseDropDown"

Vue.use(Router)

export default new Router({
	mode:'history',
	routes: [
	  	{
		  path: '/login',
		  component: Login,
		  name: 'login',
		  leaf:false,
		  hidden: true
	    },
	    {
	      path: '/404',
	      component: NotFound,
	      name: '404',
	      leaf:true,
	      hidden: true
	    },
	    {
	      path: '/home',
	      component: Home,
	      name: '主页',
	      leaf:true,
	      hidden:true,
	      children: [
	        { path: 'main', component: Main , name: 'dsds',leaf:true,hidden:true,}
	      ]
	    }
	]
})

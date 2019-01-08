import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import NotFound from '@/components/NotFound'
import Main from '@/components/temp/Main'
import UserManager from '@/components/userManager/UserManager'

Vue.use(Router)

//const Foo = { template: '<div>foo</div>' }

/*axios.post('dev/userController/getUserList',{///modules/enterprise/businessEnterprise/GetEmployeeList          
            	    userId:"1111111",
            	    password:"aaaaaaaaaaaaaa"
            })          
            .then(function(res){            
            	console.log(res.data)                  //控制台打印请求成功时返回的数据               //bind(this)可以不用          
            })*/
export default new Router({
	model:'history',
	routes: [
	  	{
		  path: '/login',
		  component: Login,
		  name: 'login',
		  leaf:true,
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
	      leaf:false,
	      hidden:true,
	      children: [
	        { path: 'main', component: Main , name: 'dsds',leaf:true,hidden:true,}
	      ]
	    }
	]
})

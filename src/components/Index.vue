<template>
	<el-container >
	  <el-header>Header</el-header>
	  <el-container style="height:80%">
	    <el-aside width="14%">Aside</el-aside>
		    <el-container>
		      <el-main>
		      	
		      	<router-link to="/home/home1">home1</router-link>
    	<router-link to="/home/home2">Go to Bar</router-link>

		      	<router-view></router-view>
		      </el-main>
		      <el-footer>Footer</el-footer>
		    </el-container>
	  </el-container>
	</el-container>
</template>

<script>
	const Home1 = { template: '<div>Home1</div>' }
const Home2 = { template: '<div>Home2</div>' }
	export default{
		name:"Index",
		data(){
			return {}
		},
		methods:{
			
			initialization(){
				var routers = [
					{
					   	path:'/',
					   	name:'',
					   	component:Index
				   },
				   {
				   		path:'/',
				   		name:'ulogin',
				   		component:Ulogin
				   },{ 
				   		path: '/foo', 
				   		component: Foo 
				   },{ 
					   	path: '/bar', 
					   	component: Bar 
				   },{ 
					   	path: '/user/:id', 
					   	component: User 
				   },{ 
					   	path: '/home', 
					   	component: Home ,
					   	children:[
					   		{ 
							   	path: 'home1', 
							   	component: Home1 
							  },{ 
							   	path: 'home2', 
							   	component: Home2 
							  }
					   	]
				   }
				]
				router.addRoutes(routers)
			}
		}
	}
	
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    height: 120px !important;
  }
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    height: 40px !important;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  
  body{
    margin: 0px;
  }
</style>
<template>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">动态路由</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
      <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
    </el-form-item>
  </el-form>
</template>

<script>
  import MenuUtils from '@/utils/MenuUtils'
  var routers = []
  export default {
    data() {
      return {
        logining: false,
        ruleForm2: {
          account: 'admin',
          checkPass: 'admin'
        },
        rules2: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            //{ validator: validaePass }
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            //{ validator: validaePass2 }
          ]
        },
        checked: true
      };
    },
    methods: {
      handleReset2() {
        this.$refs.ruleForm2.resetFields();
      },
      login(data){
        window.sessionStorage.setItem('user',JSON.stringify(data))
        MenuUtils(routers,data)
      },
      handleSubmit2(ev) {
        var _this = this;
        var data = {
		    "menus":[
		    {
		      "path":"/menuOne",
		      "component":"Home",
		      "name":"导航1",
		      "iconCls":"el-icon-message",
		      "leaf":false,
		      "children":[
		        {
		          "path":"menuOneone",
		          "component":"Main",
		          "name":"导航1--1级菜单1",
		          "leaf":false,
		          "children":[
		            {
		              "path":"menuOneoneone",
		              "component":"Main",
		              "name":"导航1--2级菜单1",
		              "leaf":true
		            },
		            {
		              "path":"menuOneonetwo",
		              "component":"Main",
		              "name":"导航1--2级菜单2",
		              "leaf":false,
		              "children":[
		                {
		                  "path":"menuOneonetwoone",
		                  "component":"Main",
		                  "leaf":true,
		                  "name":"导航1--3级菜单1"
		                },
		                {
		                  "path":"menuOneonetwotwo",
		                  "component":"Main",
		                  "leaf":true,
		                  "name":"导航1--3级菜单2"
		                }
		              ]
		            }
		          ]
		        }
		      ]
		    },
		    {
		      "path":"/menuTwo",
		      "component":"Home",
		      "name":"导航2",
		      "iconCls":"el-icon-setting",
		      "leaf":false,
		      "children":[
		        {
		          "path":"menuTwoone",
		          "component":"Main",
		          "leaf":true,
		          "name":"导航2--1级菜单1"
		        },
		        {
		          "path":"menuTwotwo",
		          "component":"Main",
		          "leaf":true,
		          "hidden":true,
		          "name":"导航2--1级菜单2"
		        }
		      ]
		    },
		    {
		      "path":"/menuThree",
		      "component":"Home",
		      "name":"导航3",
		      "iconCls":"el-icon-menu",
		      "leaf":true
		    }
		  ]
		}
        this.login(data.menus)
        this.$router.addRoutes(routers)
        this.$router.push({ path: '/main' });
      }
    }
  }

</script>

<style lang="scss" scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin-bottom: 20px;
    background-color: #F9FAFC;
    margin: 180px auto;
    border: 2px solid #8492A6;
    width: 350px;
    padding: 35px 35px 15px 35px;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>
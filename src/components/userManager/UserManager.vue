<template>
  <div >
	<el-tabs tab-position="left" style="height: 500px;">
    <el-tab-pane label="用户管理">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
	</el-tabs>
  	
  	
  	
  <el-badge :value="200" :max="99" class="item">
	<el-button size="small">评论</el-button>
  </el-badge>
  <el-badge :value="null" :max="10" class="item">
	<el-button size="small">回复</el-button>
  </el-badge>
  <el-table
    :data="tableData"
    border
    height="600"
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="250">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="220">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="220">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="220">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>
<script src="./userManager.js"></script>
<style src="./userManager.css" type="text/css"></style>
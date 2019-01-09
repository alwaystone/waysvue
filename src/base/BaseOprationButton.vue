<template slot-scope="scope">
	<div>
	<!--<el-row trigger="click" @command="handleCommand">
			<el-button :command="item.func" v-text="item.label" v-for="(item,index) in oprationData.items" :key="index"></el-button>
	</el-row>-->
	
    	<el-button
    		type="primary"
    		size="small" round
            v-text="item.label" v-for="(item,index) in oprationData.items" :key="index"
            @click="handleCommand(item.func)">
        </el-button>
        
        
        <!--<el-button
              v-for="item in table.operation.data"
              :class="item.classname ? item.classname : ''"
              :key="item.id"
              :size="item.size"
              @click.stop="handleOperation(scope.$index, scope.row, item.id)">{{ item.label }}</el-button>-->

    </div>
</template>

<script>
export default {
	props: ["oprationData"],
	methods: {
		handleCommand(command) {
			console.log(command)
			this.$emit(command.func, command.uuid);
		}
	}
};
</script>

<style>

</style>
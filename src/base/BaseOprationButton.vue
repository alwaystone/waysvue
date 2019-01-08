<template>
	<div>
		<template trigger="click" @command="handleCommand">
			<el-button :command="item.func" v-text="item.label" v-for="(item,index) in oprationData.items" :key="index"></el-button>
	    </template>
	</div>
</template>

<script>
export default {
	props: ["oprationData"],
	methods: {
		handleCommand(command) {
			this.$emit(command.func, command.uuid);
		}
	}
};
</script>

<style>

</style>
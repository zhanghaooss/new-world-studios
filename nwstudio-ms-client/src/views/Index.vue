<template>
	<div>
		<div id="main" style="width: 400px; height: 280px"></div>
	</div>
</template>

<script>
	// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
	import * as echarts from 'echarts/core';
	// 引入柱状图图表，图表后缀都为 Chart
	import { BarChart } from 'echarts/charts';
	// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
	import {
		TitleComponent,
		TooltipComponent,
		GridComponent,
		DatasetComponent,
		TransformComponent,
	} from 'echarts/components';
	// 标签自动布局、全局过渡动画等特性
	import { LabelLayout, UniversalTransition } from 'echarts/features';
	// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
	import { CanvasRenderer } from 'echarts/renderers';

	export default {
		mounted() {
			// 注册必须的组件
			echarts.use([
				TitleComponent,
				TooltipComponent,
				GridComponent,
				DatasetComponent,
				TransformComponent,
				BarChart,
				LabelLayout,
				UniversalTransition,
				CanvasRenderer,
			]);
			// 接下来的使用就跟之前一样，初始化图表，设置配置项
			var myChart = echarts.init(document.getElementById('main'));
			myChart.setOption({
				title: {
					text: '影院流量',
				},
				tooltip: {},
				xAxis: {
					data: ['星期四', '星期五', '星期六', '星期日', '星期一', '星期二', '星期三'],
				},
				yAxis: {},
				series: [
					{
						name: '销量',
						type: 'bar',
						data: [45, 80, 96, 90, 100, 67, 88],
					},
				],
			});
		},
	};
</script>

<style lang="scss" scoped></style>

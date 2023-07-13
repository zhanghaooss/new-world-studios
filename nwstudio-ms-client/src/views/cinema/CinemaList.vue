<template>
	<div>
		<div id="mapContainer"></div>
		<el-divider content-position="left">电影院列表</el-divider>
		<el-table
			:data="cinemaData"
			style="width: 100%"
			:default-sort="{ prop: 'cinema_name', order: 'descending' }"
		>
			<el-table-column
				:sort-method="sortByName"
				sortable
				label="电影名称"
				width="260"
				prop="cinema_name"
			></el-table-column>
			<el-table-column label="影院地址" prop="address" width="340"></el-table-column>
			<el-table-column sortable label="影院位置" align="center">
				<template slot-scope="scope">
					{{ scope.row.province }}
					{{ scope.row.city }}
					{{ scope.row.district }}
				</template>
			</el-table-column>
			<el-table-column label="操作" align="center" width="200">
				<template slot-scope="scope">
					<el-button
						size="small"
						type="success"
						icon="el-icon-location-information"
						circle
						@click="moveToCenter(scope.row.longitude, scope.row.latitude)"
					></el-button>
					<!-- 查询该影院id对应的所有影厅 -->
					<el-button
						size="small"
						type="success"
						icon="el-icon-s-unfold"
						circle
						@click="$router.push('cinema-room-list/' + scope.row.id)"
					></el-button>
					<el-button
						size="small"
						type="warning"
						icon="el-icon-edit"
						circle
						@click="$router.push(`/home/cinema-update/${scope.row.id}`)"
					></el-button>
					<el-button
						size="small"
						type="danger"
						icon="el-icon-delete"
						circle
						@click="deleteMovie(scope.row.id)"
					></el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	import AMapLoader from '@amap/amap-jsapi-loader';
	import httpApi from '@/http';
	export default {
		data() {
			return {
				cinemaData: [],
			};
		},
		methods: {
			// 初始化地图
			initMap() {
				AMapLoader.load({
					key: 'cba88d9a52c127f2aac69158bb9c6e1b', // 申请好的Web端开发者Key，首次调用 load 时必填
					version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
					plugins: ['AMap.Geocoder'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
				})
					.then((AMap) => {
						this.map = new AMap.Map('mapContainer', {
							//设置地图容器id
							viewMode: '3D', //是否为3D地图模式
							zoom: 11, //初始化地图级别
							center: [116.397505, 39.907648], //初始化地图中心点位置
						});
						//添加电影院标记点

						this.getCinema();
					})
					.catch((e) => {
						console.log(e);
					});
			},
			/** 自定义排序规则  将会传入两个元素 需要返回数字 -1  0  1 */
			sortByName(a, b) {
				return b.length - a.length;
			},
			getCinema() {
				httpApi.cinemaApi.queryAllCinema().then((res) => {
					console.log(res.data.data);
					this.cinemaData = res.data.data;
					this.cinemaData.forEach((item) => {
						let lnglat = [item.longitude, item.latitude];
						let marker = new AMap.Marker({
							position: lnglat,
						});
						this.map.add(marker);
					});
				});
			},
			moveToCenter(lng, lat) {
				this.map.setZoomAndCenter(14, [lng, lat], false, 1000);
			},
		},

		mounted() {
			this.initMap();
		},
	};
</script>

<style lang="scss" scoped>
	#mapContainer {
		width: 100%;
		height: 260px;
		border: 1px solid #ccc;
		margin: 0;
		padding: 0;
	}
</style>

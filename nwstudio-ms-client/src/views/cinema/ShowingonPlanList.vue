<template>
  <div>
    <b style="color: #409eff">{{ roomInfo.cinema_name }}</b>的<b
      style="color: #409eff"
    >{{ roomInfo.cinema_room_name }}（{{ roomInfo.cinema_room_type }}）</b>的排片计划
    <el-divider></el-divider>
    <el-table :data="planList">
      <el-table-column
        label="电影名称"
        prop="title"
      ></el-table-column>
      <el-table-column
        label="放映日期"
        prop="showingon_date"
        width="110px"
      ></el-table-column>
      <el-table-column
        label="放映场次"
        prop="showingon_time"
        width="100px"
      ></el-table-column>
      <el-table-column
        label="票价"
        width="110px"
      >
        <template slot-scope="scope"> ￥{{ scope.row.price }}元 </template>
      </el-table-column>
      <el-table-column label="发布状态">
        <template slot-scope="scope">
          <el-switch
            @change="statusChange(scope.row.plan_id, $event)"
            active-text="已发布"
            inactive-text="暂未发布"
            :active-value="1"
            :inactive-value="0"
            v-model="scope.row.status"
          ></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="small"
            type="danger"
            @click="deletePlan(scope.row.plan_id)"
            icon="el-icon-delete"
            circle
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import httpApi from '@/http';
export default {
  data () {
    return {
      planList: [],
      roomId: this.$route.params.roomId, //保存放映厅ID
      roomInfo: {}, //保存放映厅基本信息
    };
  },
  methods: {
    getRoomPlanList () {
      httpApi.showingonPlanApi.queryByRoomId({ room_id: this.roomId }).then((res) => {
        console.log('放映厅排片计划表', res);
        this.planList = res.data.data;
      });
    },
    statusChange (pid, e) {
      //e是更新后的参数
      if (e) {
        httpApi.showingonPlanApi.publish({ id: pid }).then((res) => {
          console.log(res);
          if (res.data.code == 200) {
            this.$message({
              message: '发布成功',
              type: 'success',
            });
          }
        });
      } else {
        httpApi.showingonPlanApi.noPublish({ id: pid }).then((res) => {
          if (res.data.code == 200) {
            this.$message({
              message: '取消发布',
              type: 'warning',
            });
          }
        });
      }
    },
    deletePlan (id) {
      httpApi.showingonPlanApi.delete({ id }).then(res => {
        console.log('删除成功：', res)
        if (res.data.code == 200) {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
        }
        this.getRoomPlanList()
      })
    }
  },
  mounted () {
    this.getRoomPlanList();
    let params = { id: this.roomId };
    httpApi.cinemaRoomApi.queryById(params).then((res) => {
      console.log('放映厅信息', res);
      this.roomInfo = res.data.data;
    });
  },
};
</script>

<style lang="scss" scoped></style>

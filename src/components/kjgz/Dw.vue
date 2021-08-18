<template>
  <div
    class="dw">
    <el-container>
      <el-header style="font-size: large">单位投标委托书公证</el-header>

      <el-main style="margin-top: -10px">
        <div>
          <i @click="drawer = true" type="primary"
                     style="width: 100%;height: 100%;text-align: left;background-color: transparent;color: black;border: transparent;margin-left: -35px">
            请选择申请人类型:
            <span   style="display: inline-block">{{ checkedNames }}</span>
            <i class="el-icon-arrow-right" @click="drawer = true"></i>
          </i>
        </div>


        <el-drawer
          title="请选择申请人类型："
          :visible.sync="drawer"
          :direction="direction"
          >
          <input type="radio" id="sqr1" value="法人" v-model="checkedNames" v-show="false">
          <label for="sqr1" >法人</label><br>
          <input type="radio" id="sqr2" value="法定代表人、负责人" v-model="checkedNames" v-show="false">
          <label for="sqr2" >法定代表人、负责人</label><br>

        </el-drawer>

        <el-divider></el-divider>
      </el-main>
    </el-container>
    <!--    大家加油做项目，哈哈哈哈哈哈-->
    <component v-bind:is="who"></component>
  </div>
</template>

<script>



    export default {
        name: 'Dw',

        data() {
            return {
                drawer: false,
                direction: 'btt',
                msg: '',
                who:'你好',
                checkedNames:'请选择',
            };
        },

        watch:{
            checkedNames:function(newVal){
                if(newVal=="法人"){
                    this.who='嗨'
                }else if(newVal=="法定代表人、负责人"){
                    this.who='哈喽'
                }
            }
        },
        methods:{

        }

    }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index {
    margin: 0;
    padding: 0;

  }

  .el-header {
    background-color: #02A7F0;
    color: white;
    text-align: center;
    line-height: 60px;
  }

  .el-footer {
    background-color: #F2F2F2;
    color: black;
    text-align: center;
    line-height: 160px;
  }

  /*.el-main {*/
  /*  background-color: white;*/
  /*  color: #333;*/
  /*  text-align: center;*/
  /*  line-height: 50px;*/
  /*}*/

</style>

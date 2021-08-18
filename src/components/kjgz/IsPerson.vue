<!--本人/代理人办理-->
<template>
  <div>
    <div id="isPerson">

      <i @click="drawer = true" type="primary"
         style="width: 100%;height: 100%;text-align: left;background-color: transparent;color: black;border: transparent;font-family: '微软雅黑';font-style: normal;font-size: 20px">
        选择办理人的身份:
        <span style="display: inline-block">{{ drawerText }}</span>
        <i class="el-icon-arrow-right" @click="drawer = true"></i>
      </i>
      <el-drawer
        :visible.sync="drawer"
        :direction=direction
        :with-header="false">
        <div class="drawer-item" @click="drawer=false;drawerText='本人办理';showAuthorization=false">本人办理</div>
        <div class="drawer-item" @click="drawer=false;drawerText='代理人办理';showAuthorization=true">代理人办理</div>
      </el-drawer>
    </div>
    <div v-show="showAuthorization" style="background-color: antiquewhite">
      <hr id="hr"/>
      <h4>代理人身份证以及授权委托书</h4>
      <Upload/>
    </div>
  </div>
</template>

<script>
import Upload from "./Upload";
export default {
  name: "IsPerson",
  components: {Upload},
  data() {
    return {
      drawer: false,
      drawerText:'选择办理人的身份',
      readonly:true,
      direction:'btt',
      showAuthorization:false
    };
  },
  methods: {
    drawerJudge(){
      console.log(this.drawerText);
      if (this.drawerText=='代理人办理'){
        this.showAuthorization=true
      }else{
        this.showAuthorization=false
      }
    }
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#isPerson {
  display: flex;
  justify-content: left;
  padding-bottom: 10px;
}
.drawer-item{
  height: 50px;
  width: 100%;
  font-size: 20px;
  border-bottom: #aaaaaa 1px solid;
  text-align: center;
  line-height: 50px;
}
h4{
  text-align: left;
  padding-left: 10px;
}
</style>

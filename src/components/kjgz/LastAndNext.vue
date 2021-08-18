<!--上一步和下一步-->
<template>
  <div id="lastAndNext">
    <el-button type="primary" style="width: 130px;height: 40px" @click="lastPage">上一步</el-button>
    <el-button type="primary" style="width: 130px;height: 40px" @click="nextPage">下一步</el-button>
  </div>
</template>

<script>
export default {
  name: "LastAndNext",
  methods: {
    lastPage(){
      console.log("上一步");
    },
    nextPage(){
      console.log("下一步");
    },
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#lastAndNext{
  padding-top: 10px;
}
</style>

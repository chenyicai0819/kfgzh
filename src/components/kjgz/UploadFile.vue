<!--上传文件页面-->
<template>
  <div id="uploadFile">
    <h4>上级部门对开奖活动的批准文件</h4>
    <Upload/>
    <hr id="hr"/>
    <h4>举办开奖活动的依据</h4>
    <Upload/>
    <hr id="hr"/>
    <h4>开奖活动规则、方案</h4>
    <Upload/>
    <hr id="hr"/>
    <h4>开奖活动公告、广告</h4>
    <Upload/>
    <hr id="hr"/>
    <h4>奖品、奖金来源说明材料</h4>
    <Upload/>
    <hr id="hr"/>
    <h4>工商行政管理部门批准材料(如单项奖品价值超过50000元人民币)</h4>
    <Upload/>
    <hr id="hr"/>
    <h4>其他补充文件</h4>
    <Upload/>
    <hr id="hr"/>
  </div>
</template>

<script>
import Upload from "./Upload";
export default {
  name: "UploadFile",
  components: {Upload},
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
h4{
  text-align: left;
  padding-left: 10px;
}
#hr{
  color: 	#aaaaaa;
}
</style>

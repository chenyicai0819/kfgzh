<!--上传身份证明界面-->
<template>
  <div id="uploadIdentity">
    <h4>主办单位企业法人营业执照</h4>
    <Upload/>
    <hr id="hr"/>
    <h4>社会团体法人注册登记证书</h4>
    <Upload/>
    <hr id="hr"/>
    <h4>法定代表人身份</h4>
    <Upload/>
  </div>
</template>

<script>
import Upload from "./Upload";
export default {
  name: "UploadIdentity",
  components: {Upload},
  data(){
    return{

    }
  },
  method:{

  }
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

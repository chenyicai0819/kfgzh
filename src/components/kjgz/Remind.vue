<!--温馨提示界面-->
<template>
  <div>
    <p id="remind-title">温馨提示：</p>
    <p id="remind-text">所上传的材料最好为原图且内容清晰，手机拍摄最好将文件置于A4白色纸背景上</p>
  </div>
</template>

<script>
export default {
  name: "Remind"
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
#remind-title{
  color: red;
  font-size: 16px;
  text-align: left;
}
#remind-text{
  color: 	#aaaaaa;
  font-size: 16px;
  text-align: left;
}
</style>

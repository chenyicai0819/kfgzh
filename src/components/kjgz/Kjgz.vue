<template>
  <div id="kjgz">
    <Remind/>
    <hr id="hr"/>
    <UploadIdentity/>
    <hr id="hr"/>
    <IsPerson/>
    <hr id="hr"/>
    <UploadFile/>
    <LastAndNext/>
    <Trademark/>
  </div>
</template>

<script>
import Remind from "./Remind";
import UploadIdentity from "./UploadIdentity";
import IsPerson from "./IsPerson";
import UploadFile from "./UploadFile";
import LastAndNext from "./LastAndNext";
import Trademark from "./Trademark";


export default {
  name: "kjgz",
  components: {Trademark, LastAndNext, UploadFile, IsPerson, UploadIdentity, Remind}
}
</script>


<style scoped>
#kjgz{
  margin: 0 auto;
  width: 100%;
}
#hr{
  color: 	#aaaaaa;
}
</style>

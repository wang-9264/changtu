<template>
  <div>
  <mybanner></mybanner>
   <search></search>
   <!-- <entry></entry> -->
   <floorContents></floorContents>
    <myfooter></myfooter>

    <!-- <startcity></startcity> -->
    <!-- <tocity></tocity> -->
    <!-- <isday></isday> -->

  </div>

</template>
<script>
import floorContents from './index/FloorContents.vue'
// import startcity from './index/startcity.vue'
// import tocity from './index/tocity.vue'
import entry from './index/entry.vue'
import myfooter from './index/myfooter.vue'
import search from './index/search.vue'
import mybanner from './index/mybanner.vue'
// import isday from './index/isday.vue'

export default {
  components: {
    // startcity,
    // tocity,
    entry,
    floorContents,
    myfooter,
    search,
    mybanner
    // isday

  }
}
</script>
<style>
  * {
    margin: 0;
    padding: 0;
  }
  banner {
    margin-top: 20px;
  }
</style>

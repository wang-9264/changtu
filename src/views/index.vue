<template>
  <div>
<!--   <mybanner></mybanner>
   <search></search>
   <entry></entry>
   <floorContents></floorContents>
    <myfooter></myfooter> -->

    <!-- <add></add> -->
    <startcity></startcity>
    <!-- <tocity></tocity> -->
    <!-- <isday></isday> -->
 <!-- <b2b></b2b> -->

  </div>

</template>
<script>
import floorContents from './index/FloorContents.vue'
import add from './index/add.vue'
import startcity from './index/startcity.vue'
import tocity from './index/tocity.vue'
import entry from './index/entry.vue'
import myfooter from './index/myfooter.vue'
import search from './index/search.vue'
import mybanner from './index/mybanner.vue'
import isday from './index/isday.vue'

// import b2b from './index/b2b.vue'

export default {
  components: {
    add,
    startcity,
    tocity,
    entry,
    floorContents,
    myfooter,
    search,
    mybanner,
    isday

    // b2b
  }
}
</script>
<style>
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: #fff;
  }

  banner {
    margin-top: 20px;
  }
</style>

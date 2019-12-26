<template>
  <div class="mybody">
    <Calendar v-on:choseDay="clickDay" v-on:changeMonth="changeDate" @click="sora">

    </Calendar>
  </div>
</template>
<script>
import Calendar from 'vue-calendar-component'
export default {
  components: {
    Calendar
  },
  methods: {
    clickDay (data) {
      localStorage.setItem('time', data)
      this.$router.push('/index')
    },
    changeDate (data) {
      console.log(data)
    },
    clickToday (data) {
      console.log(data)
    }

  }
}
</script>
<style scoped>
.mybody{
  width: 100%;
}
</style>

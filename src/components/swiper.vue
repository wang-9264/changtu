<template>
  <div class="swiper-container guide">
      <div class="swiper-wrapper">
        <slot></slot>
      </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  data () {
    return {
      swipe: null
    }
  },
  mounted () {
    console.log(this.swipername)
    var defaultProps = {
      loop: true
    }
    this.swipe = new Swiper('.' + (this.swipername ? this.swipername : 'guide'), { ...defaultProps, ...this.options })
    this.$emit('swipes', this.swipe)
  },

  props: ['options', 'swipername']
}

</script>

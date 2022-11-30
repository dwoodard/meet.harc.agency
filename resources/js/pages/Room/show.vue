<template>
  <div>
    <WebRTC :room="room"/>
  </div>
</template>

<script>
  import WebRTC from '@/components/WebRTC.vue';

  export default {
    props: {
      room: Object
    },
    data() {
      return {
        //
      };
    },
    components: {
      WebRTC
    }
  };
</script>

<style lang="scss" scoped>

</style>

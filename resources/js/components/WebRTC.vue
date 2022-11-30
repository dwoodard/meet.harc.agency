<template>
  <div>
    {{ room }}
  </div>
</template>

<script>
  import {io} from 'socket.io-client';

  const SimpleSignalClient = require('simple-signal-client');

  export default {
    props: {
      room: Object
    },
    mounted() {
      const client = new SimpleSignalClient(io('http://localhost:3002'));
      console.log(client);
    }
  };

</script>

<style lang="scss" scoped>

</style>

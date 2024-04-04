<template>
  <div class="modal" v-if="show">
    <div class="modal-content">
      <audio ref="audio" src="../assets/song-timerEnd.mp3" loop></audio>
      <h2>Time's up! Your tea is ready.</h2>
      <button class="close" @click="close">&times;</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    open() {
      this.show = true;
      this.$nextTick(() => {
        this.$refs.audio.addEventListener('loadedmetadata', () => {
          this.$refs.audio.play();
        });
      });
    },
    close() {
      this.show = false;
    }
  }
};
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
}

.modal-content {
  width: 50vw;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
  text-align: center;
}

button {
  width: 100%;
  padding: 0.25em 1em;
  background-color: #FF7A45;
  color: white;
  font-weight: 600;
  font-size: 2em;
  border: none;
}
</style>
  
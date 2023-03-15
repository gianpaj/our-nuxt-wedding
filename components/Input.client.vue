<template>
  <input v-model="question" <!-- v-on:wheel="handleWheel" -->
  v-type="type">
</template>

<script>
export default {
  data() {
    return {
      type: 'text',
      question: '',
    }
  },
  watch: {
    // whenever question changes, this function will run
    question(question) {
      console.log('question', question);
    }
  },
  methods: {
    handleWheel() {
      // console.log('question', this.question);
      // this.question=1
    }
  },
  created() {
    // window.addEventListener('wheel', this.handleWheel);
  },
  destroyed() {
    // window.removeEventListener('wheel', this.handleWheel);
  },
}
</script>
<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Software Engineer
      <!-- <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>. -->
    </h3>
      <a href="" class="btn btn-contact">Contac me <fa icon="location-arrow" style="font-size: 18px; margin-left: .5rem;"/></a>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}
.btn{
    display: inline-block;
    background-color: hsla(160, 100%, 37%, 1);
    color: #fff;
    padding: 1rem;
    border-radius: .5rem;
    font-weight: 500;
}

.btn-contact{
    margin-top: 20px;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

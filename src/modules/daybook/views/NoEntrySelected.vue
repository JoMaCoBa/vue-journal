<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No hay nada selecionado</h1>
  </div>

  <FloatButton />
</template>

<script>
import { defineAsyncComponent } from 'vue'

    export default {
        components: {
            FloatButton: defineAsyncComponent (() => import('../components/FloatButton.vue'))
        }
    }

</script>

<style lang="scss" scoped>

div {
    height: 100%;
}

</style>
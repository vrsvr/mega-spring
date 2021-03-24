<script>
import Header from '../components/Header';
import Footer from '../components/Footer';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <div class="layout">
    <Header class="layout__header" />
    <Nuxt class="layout__main-content" />
    <Footer class="layout__footer" />
  </div>
</template>

<style lang="scss">
.layout {
  &__test {
    font-size: em(40px);
    margin-bottom: em(100px, 40px);
  }
}
</style>

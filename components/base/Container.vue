<script>
export default {
  name: 'Container',
};
</script>

<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss">
.container {
  position: relative;
  width: 100%;
  @include ifdesktop {
    max-width: em(1920px);
    margin: 0 auto;
    padding-left: em(20px);
    padding-right: em(20px);
  }
  @include ifmobile {
    padding-left: em(20px);
    padding-right: em(20px);
  }
}
</style>

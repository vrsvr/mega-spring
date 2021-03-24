<template>
  <button class="btn">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
};
</script>

<style lang="scss">
.btn {
  width: em(177px);
  height: em(44px);
  background: $color-blue;
  border: none;
  border-radius: em(22.5px);
  line-height: em(21px);
  color: #ffffff;
  font-weight: 500;
  outline: none;
}
</style>

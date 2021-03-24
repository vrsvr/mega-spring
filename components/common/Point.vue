<script>
export default {
  name: 'Point',
  props: ['point'],
};
</script>
<template>
  <div class="point">{{ point }}</div>
</template>

<style lang="scss">
.point {
  font-size: em($size-text-tiny);
  font-weight: 700;
  line-height: em(15px, $size-text-tiny);
  color: #000000;
  background: linear-gradient(90deg, #e59219 0%, #f5d854 100%);
  border-radius: em(17.5px);
  width: em(34px, $size-text-tiny);
  height: em(25px, $size-text-tiny);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

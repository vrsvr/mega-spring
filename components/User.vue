<script>
import Point from './common/Point';
export default {
  name: 'User',
  components: { Point },
  data() {
    return {
      point: 200,
    };
  },
};
</script>

<template>
  <div class="user">
    <div class="user__status">
      <img class="user__img" src="/image/status.svg" />
      <p class="user__repute">Мегамодник</p>
    </div>
    <Point v-bind:point="point" />
    <a class="user__link" href=""></a>
  </div>
</template>

<style lang="scss">
.user {
  display: flex;
  align-items: center;

  &__status {
    display: flex;
    align-items: center;
    font-size: em($size-text-tiny);
    font-weight: 700;
    line-height: em(15px, $size-text-tiny);
    color: $color-blue;
  }
  &__img {
    width: em(23px);
    height: em(25px);
  }
  &__repute {
    margin: 0 em(9px);
  }

  &__link {
    margin-left: em(9px);
    width: em(32px);
    height: em(32px);
    background-image: url('~static/image/user/avatar.jpg');
    background-size: cover;
  }
}
</style>

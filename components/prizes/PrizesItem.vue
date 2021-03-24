<script>
export default {
  name: 'PrizesItem',
  props: {
    image: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
};
</script>

<template>
  <div class="prize">
    <img class="prize__img" :src="this.image" alt="" />
    <div class="prize__texts">
      <p class="prize__title">{{ this.description }}</p>
      <p class="prize__brand">{{ this.title }}</p>
      <a class="prize__link" :href="this.link">Забрать в&nbsp;магазине</a>
    </div>
    <Point class="prize_point" :point="this.point2" />
  </div>
</template>

<style lang="scss">
.prize {
  display: flex;
  padding: em(26px) 0;
  border-bottom: 1px solid #e9e9e9;
  &__img {
    width: em(70px);
    height: em(70px);
    margin-right: em(20px);
    align-self: center;
  }
  &__texts {
    flex-grow: 1;
  }
  &__title {
    font-size: em($size-text-small-tablet);
    line-height: em(18px, $size-text-small-tablet);
  }
  &__brand {
    font-size: em($size-text-tiny);
    font-weight: 500;
    line-height: em(15px, $size-text-tiny);
    margin-top: em(3px, $size-text-tiny);
    text-transform: uppercase;
  }
  &__link {
    font-weight: 700;
    font-size: em($size-text-tiny);
    line-height: em(18px, $size-text-tiny);
    color: $color-blue;
    text-decoration-skip-ink: none;
  }
}
</style>

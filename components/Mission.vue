<script>
import Container from './base/Container';
import Point from './common/Point';
export default {
  components: { Point, Container },
  data() {
    return {
      point: +150,
    };
  },
};
</script>
<template>
  <section class="mission">
    <Container>
      <div class="mission__inner">
        <p class="mission__title">Сходи на&nbsp;тренировку в&nbsp;корнер Adidas!</p>
        <p class="mission__text mission__text_location">Мега Белая Дача</p>
        <p class="mission__text mission__text_date">18&nbsp;марта, 18:00</p>
        <Point class="mission__point" v-bind:point="point" />
      </div>
    </Container>
  </section>
</template>
<style lang="scss">
.mission {
  margin-top: $margin-top-25;
  &__inner {
    background-color: #f6e4e2;
    background-image: url('/image/mission/mission.jpg');
    background-size: contain;
    background-position: right bottom;
    background-repeat: no-repeat;
    border-radius: em(3px);
    padding: em(10px) em(16px) em(14px);
    position: relative;
  }
  &__title {
    font-weight: 500;
    line-height: em(22px);
    color: #000000;
    max-width: em(159px);
  }
  &__text {
    font-size: em($size-text-tiny);
    line-height: em(15px, $size-text-tiny);
    padding-left: em(21px, $size-text-tiny);
  }
  &__text_location {
    margin-top: em(14px, $size-text-tiny);
    position: relative;
    &::before {
      content: '';
      background: url('~static/image/mission/ic_location.svg');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center left;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
    }
  }
  &__text_date {
    margin-top: em(6px, $size-text-tiny);
    position: relative;
    &::before {
      content: '';
      background: url('~static/image/mission/ic_time.svg');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center left;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
    }
  }
  &__point {
    position: absolute;
    right: em(15px, $size-text-tiny);
    bottom: em(13px, $size-text-tiny);
  }
}
</style>

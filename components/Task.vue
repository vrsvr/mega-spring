<script>
import Container from './base/Container';
import Point from './common/Point';
import Button from './common/Button';
export default {
  components: { Button, Point, Container },
  data() {
    return {
      point: +150,
    };
  },
};
</script>
<template>
  <section class="task">
    <Container>
      <div class="task__inner">
        <Point class="task__point" v-bind:point="point" />
        <p class="task__text">
          Расскажи о&nbsp;своем участии в&nbsp;проекте: получи +150 баллов и&nbsp;первое достижение!
        </p>
        <Button class="task__btn">Поделиться!</Button>
      </div>
    </Container>
  </section>
</template>
<style lang="scss">
.task {
  padding: em(25px) 0 em(46px);
  background: #eaeef1;
  &__inner {
    margin: 0 auto;
    padding: 0 em(35px);
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ffffff;
    border: 2px solid $color-blue;
    box-shadow: 0px 11px 14px rgba(0, 0, 0, 0.0728034);
    border-radius: em(12px);
    position: relative;
  }
  &__point {
    position: absolute;
    top: em(-14px);
  }
  &__text {
    font-size: em($size-text-small);
    line-height: em(22px, $size-text-small);
    color: #000000;
    margin: em(15px, $size-text-small) 0 em(33px, $size-text-small);
    text-align: center;
  }
  &__btn {
    position: absolute;
    bottom: em(-22px, $size-text-small-mobile);
    font-size: em($size-text-small-mobile);
  }
}
</style>

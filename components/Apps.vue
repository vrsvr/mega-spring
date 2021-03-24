<script>
import Container from './base/Container';
export default {
  components: { Container },
};
</script>
<template>
  <section class="apps">
    <Container>
      <p class="apps__title">Больше баллов и&nbsp;призов&nbsp;&mdash; в&nbsp;приложении!</p>
      <div class="apps__images">
        <a href="#" class="apps__link apps__link_margin">
          <img class="apps__image" src="/image/apps/google.png" alt="" />
        </a>
        <a href="#" class="apps__link">
          <img class="apps__image" src="/image/apps/app.png" alt="" />
        </a>
      </div>
    </Container>
  </section>
</template>
<style lang="scss">
.apps {
  margin: 11px 0;
  &__title {
    font-size: em($size-text-small-tablet);
    font-weight: 500;
    line-height: em(21px, $size-text-small-tablet);
    margin-bottom: em(19px, $size-text-small-tablet);
    text-align: center;
  }
  &__images {
    display: flex;
    justify-content: space-between;
  }
  &__image {
    width: 100%;
    height: auto;
  }
  @include ifmobile {
    &__link_margin {
      margin-right: em(40px, $size-text-small-tablet);
    }
  }
}
</style>

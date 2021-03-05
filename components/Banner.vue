<template>
  <section class="banner">
    <div class="container">
      <div class="banner__inner">
        <p class="banner__title">Сходи на тренировку в корнер Adidas!</p>
        <p class="banner__text banner__text--location">Мега Белая Дача</p>
        <p class="banner__text banner__text--date">18 марта, 18:00</p>
        <p class="point banner__point">+150</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.banner {
  margin-top: 25px;
  &__inner {
    background-color: #f6e4e2;
    background-image: url('./assets/image/banner.jpg');
    background-size: contain;
    background-position: right;
    background-repeat: no-repeat;
    border-radius: 3px;
    padding: 10px 16px 14px;
    position: relative;
  }
  &__title {
    font-weight: 500;
    line-height: 22px;
    color: #000000;
    max-width: 157px;
  }
  &__text {
    font-size: 12px;
    line-height: 15px;
    padding-left: 21px;
  }
  &__text--location {
    margin-top: 14px;
    position: relative;
    &::before {
      content: url('./assets/image/ic_location.svg');
      position: absolute;
      left: 0;
    }
  }
  &__text--date {
    margin-top: 6px;
    position: relative;
    &::before {
      content: url('./assets/image/ic_time.svg');
      position: absolute;
      left: 0;
    }
  }
  &__point {
    position: absolute;
    right: 15px;
    bottom: 13px;
  }
}
</style>

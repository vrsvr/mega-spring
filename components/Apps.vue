<template>
  <section class="apps">
    <div class="container">
      <p class="apps__title">Больше баллов и призов — в приложении!</p>
      <div class="apps__images">
        <a href="#" class="apps__link">
          <img
            class="apps__image apps__image--margin"
            src="~/assets/image/google.png"
            alt=""
          />
        </a>
        <a href="#" class="apps__link">
          <img class="apps__image" src="~/assets/image/app.png" alt="" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.apps {
  margin: 11px 0;
  &__title {
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    margin-bottom: 19px;
    text-align: center;
  }
  &__images {
    display: flex;
    justify-content: space-around;
    max-width: 50%;
    margin: 0 auto;
  }
  &__image--margin {
    margin-right: 40px;
  }
}
</style>

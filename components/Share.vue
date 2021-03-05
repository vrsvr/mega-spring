<template>
  <section class="share">
    <div class="container">
      <div class="share__inner">
        <p class="point share__point">+150</p>
        <p class="share__text">
          Расскажи о своем участии в проекте: получи +150 баллов и первое
          достижение!
        </p>
        <button class="share__btn">Поделиться!</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.share {
  padding: 25px 0 46px;
  background: #eaeef1;
  &__inner {
    margin: 0 auto;
    padding: 0 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ffffff;
    border: 2px solid #5698c4;
    box-shadow: 0px 11px 14px rgba(0, 0, 0, 0.0728034);
    border-radius: 12px;
    position: relative;
  }
  &__point {
    position: absolute;
    top: -14px;
  }
  &__text {
    font-size: 15px;
    line-height: 22px;
    color: #000000;
    margin: 15px 0 33px;
    text-align: center;
  }
  &__btn {
    position: absolute;
    bottom: -22px;
    width: 177px;
    height: 44px;
    background: #5698c4;
    border: none;
    border-radius: 22.5px;
    line-height: 21px;
    color: #ffffff;
    font-weight: 500;
  }
}
</style>

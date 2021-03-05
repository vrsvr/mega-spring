<template>
  <section class="social">
    <div class="container">
      <div class="social__inner">
        <a href="#" class="social__link" target="_blank" rel="nofollow">
          <img src="~/assets/image/fb.png" alt="" class="social__logo" />
        </a>
        <a href="#" class="social__link" target="_blank" rel="nofollow">
          <img src="~/assets/image/vk.png" alt="" class="social__logo" />
        </a>
        <a href="#" class="social__link" target="_blank" rel="nofollow">
          <img src="~/assets/image/inst.png" alt="" class="social__logo" />
        </a>
        <a href="#" class="social__link" target="_blank" rel="nofollow">
          <img src="~/assets/image/youtube.png" alt="" class="social__logo" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.social {
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px 0;
    border-top: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
  }
  @media screen and (max-width: 576px) {
    .social__inner {
      justify-content: space-between;
    }
  }
}
</style>

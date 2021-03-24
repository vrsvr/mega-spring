<script>
import Container from './base/Container';
export default {
  components: { Container },
};
</script>
<template>
  <section class="social">
    <Container>
      <div class="social__inner">
        <a href="#" class="social__link" target="_blank" rel="nofollow">
          <img src="/image/social/fb.png" alt="" class="social__logo" />
        </a>
        <a href="#" class="social__link" target="_blank" rel="nofollow">
          <img src="/image/social/vk.png" alt="" class="social__logo" />
        </a>
        <a href="#" class="social__link" target="_blank" rel="nofollow">
          <img src="/image/social/inst.png" alt="" class="social__logo" />
        </a>
        <a href="#" class="social__link" target="_blank" rel="nofollow">
          <img src="/image/social/youtube.png" alt="" class="social__logo" />
        </a>
      </div>
    </Container>
  </section>
</template>
<style lang="scss">
.social {
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: em(20px) 0;
    border-top: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
  }
  &__logo {
    width: em(29px);
    height: em(29px);
  }
  @media screen and (max-width: 576px) {
    .social__inner {
      justify-content: space-between;
    }
  }
}
</style>

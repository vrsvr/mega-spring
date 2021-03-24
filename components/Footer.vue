<script>
import Container from './base/Container';
export default {
  components: { Container },
};
</script>
<template>
  <footer class="footer layout__footer">
    <Container>
      <div class="footer__inner">
        <a href="#" class="footer__link">Правила акции</a>
        <a href="#" class="footer__link">Юридическая информация</a>
      </div>
      <p class="footer__copyright">&copy; 2010&ndash;2017 &laquo;ИКЕА Сентерс Рус Менеджмент&raquo;</p>
    </Container>
  </footer>
</template>
<style lang="scss">
.footer {
  margin: 20px 0;
  &__inner {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #e9e9e9;
  }
  &__link {
    font-size: em($size-text-small-tablet);
    font-weight: 500;
    line-height: em(18px, $size-text-small-tablet);
    color: #000000;
    text-decoration: none;
    margin-bottom: em(14px, $size-text-small-tablet);
  }
  &__copyright {
    font-size: em($size-text-tiny);
    font-weight: 500;
    line-height: em(15px, $size-text-tiny);
    margin-top: em(20px, $size-text-tiny);
  }
}
</style>

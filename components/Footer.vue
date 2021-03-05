<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <a href="#" class="footer__link">Правила акции</a>
        <a href="#" class="footer__link">Юридическая информация</a>
      </div>
      <p class="footer__copyright">© 2010–2017 «ИКЕА Сентерс Рус Менеджмент»</p>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
.footer {
  margin: 20px 0;
  &__inner {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #e9e9e9;
  }
  &__link {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: #000000;
    text-decoration: none;
    margin-bottom: 14px;
  }
  &__copyright {
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    margin-top: 20px;
  }
}
</style>

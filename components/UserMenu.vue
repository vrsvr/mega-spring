<script>
export default {
  name: 'UserMenu',
};
</script>

<template>
  <div class="user-menu">
    <img class="user-menu__avatar" src="/image/user/avatar.jpg" />
    <div class="user-menu__info">
      <p class="user-menu__name">Южная Анастасия</p>
      <a href="tel:+79854353232" class="user-menu__phone">
        <nobr>+7 (985) 435-32-32</nobr>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.user-menu {
  display: flex;
  align-items: center;
  &__avatar {
    width: em(48px);
    height: em(48px);
    margin-right: em(16px);
    border-radius: 100%;
  }
  &__name {
    font-weight: 500;
  }
  &__phone {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
  }
}
</style>

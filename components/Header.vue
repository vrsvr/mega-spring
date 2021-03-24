<script>
/* eslint-disable */
import { mapState, mapMutations } from 'vuex'
import Menu from '../components/Menu'
import Container from './base/Container'
import User from './User'

export default {
  components: { User, Container, Menu },
  computed: {
    ...mapState('core', ['isNavOpen']),
  },
  watch: {
    isNavOpen(newVal, oldVal) {
      console.log(1, newVal, oldVal)
      newVal ? this.$scroll.disable() : this.$scroll.enable()
    },
  },
  methods: {
    ...mapMutations('core', ['setIsNavOpen']),
    openMenu() {
      this.setIsNavOpen(!this.isNavOpen)
    },
  },
}
</script>
<template>
  <div class="header">
    <Container class="header__container">
      <div class="header__inner">
        <button class="header__btn" @click="openMenu">
          <img class="header__icon" src="/image/menu/menu.svg"/>
        </button>
        <User />
      </div>
    </Container>
    <transition name="fade">
      <Menu v-if="isNavOpen" class="header__menu" />
    </transition>
  </div>
</template>
<style lang="scss">
.header {
  padding: em(12px) 0;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__btn {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    outline: none;
    width: em(24px);
    height: em(20px);
  }

}
.user {
  display: flex;
  align-items: center;

  &__status {
    display: flex;
    align-items: center;
    font-size: em($size-text-tiny);
    font-weight: 700;
    line-height: em(15px, $size-text-tiny);
    color: $color-blue;
  }

  &__repute {
    margin: 0 em(9px, $size-text-tiny);
  }

  &__link {
    margin-left: em(9px, $size-text-tiny);
    width: em(32px, $size-text-tiny);
    height: em(32px, $size-text-tiny);
    background-image: url('~static/image/user/avatar.jpg');
    background-size: cover;
  }
}
</style>

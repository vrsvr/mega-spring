<script>
import Container from './base/Container';
import UserMenu from './UserMenu';
export default {
  components: { UserMenu, Container },
  data() {
    return {
      menuItems: {
        task: {
          text: 'ЗАДАНИЯ',
          class: 'menu__text_task',
        },
        rating: {
          text: 'РЕЙТИНГ',
          class: 'menu__text_rating',
        },
        achievements: {
          text: 'ДОСТИЖЕНИЯ',
          class: 'menu__text_achievement',
        },
        prizes: {
          text: 'ПРИЗЫ',
          class: 'menu__text_prize',
        },
      },
    };
  },
};
</script>
<template>
  <div class="menu">
    <Container style="height: 100%">
      <div class="menu__inner">
        <UserMenu class="menu__user" />
        <div class="menu__list">
          <a v-for="(item, idx) of menuItems" :key="idx" class="menu__item" href="#">
            <p class="menu__text" :class="item.class">
              {{ item.text }}
            </p>
          </a>
        </div>
        <a class="menu__item menu__item_noborder" href="#">
          <p class="menu__text menu__text_support">Поддержка</p>
        </a>
      </div>
    </Container>
  </div>
</template>
<style lang="scss">
.menu {
  background: linear-gradient(270deg, #c9b0b9 0%, #95b7d8 100%);
  position: fixed;
  top: em(67px);
  width: 100%;
  height: calc(100vh - 68px);
  color: #fff;
  padding: em(23px) 0;
  z-index: 999;
  &__inner {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  &__list {
    flex-grow: 1;
    margin-top: em(27px);
  }
  &__item {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    border-bottom: 1px solid #e9e9e9;
    padding: em(17px) 0;
    &_noborder {
      border-bottom: none;
      padding: 0;
    }
  }
  &__text {
    font-weight: 500;
    padding-left: em(34px);
    position: relative;
    &_task:before {
      @include menu-icon();
      background-image: url('~/static/image/menu/ic_task.svg');
    }
    &_rating:before {
      @include menu-icon();
      background-image: url('~/static/image/menu/ic_star.svg');
    }
    &_achievement:before {
      @include menu-icon();
      background-image: url('~/static/image/menu/ic_badge.svg');
    }
    &_prize:before {
      @include menu-icon();
      background-image: url('~/static/image/menu/ic_prize.svg');
    }
    &_support:before {
      @include menu-icon();
      background-image: url('~/static/image/menu/ic_info.svg');
    }
  }
}
</style>

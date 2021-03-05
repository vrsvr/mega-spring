<template>
  <div class="menu">
    <div class="container" style="height: 100%">
      <div class="menu__inner">
        <div class="menu__user">
          <img class="menu__avatar" src="~/assets/image/avatar.png" />
          <div class="menu__info">
            <p class="menu__name">Южная Анастасия</p>
            <a href="tel:+79854353232" class="menu__phone"
              >+7 (985) 435-32-32</a
            >
          </div>
        </div>
        <div class="menu__items">
          <a
            v-for="(item, idx) of menuItems"
            :key="idx"
            class="menu__item menu__item_bordered"
            href="#"
          >
            <img class="menu__img" :src="item.img" alt="" />
            <p class="menu__text">{{ item.text }}</p>
          </a>
        </div>
        <div class="menu__support">
          <a class="menu__item" href="#">
            <img class="menu__img" src="~/assets/image/ic_info.svg" alt="" />
            <p class="menu__text">Поддержка</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: {
        task: {
          img: require('~/assets/image/ic_task.svg'),
          text: 'ЗАДАНИЯ',
        },
        rating: {
          img: require('~/assets/image/ic_star.svg'),
          text: 'РЕЙТИНГ',
        },
        achievements: {
          img: require('~/assets/image/ic_badge.svg'),
          text: 'ДОСТИЖЕНИЯ',
        },
        prizes: {
          img: require('~/assets/image/ic_prize.svg'),
          text: 'ПРИЗЫ',
        },
      },
    }
  },
}
</script>

<style lang="scss">
.menu {
  background: linear-gradient(270deg, #c9b0b9 0%, #95b7d8 100%);
  position: fixed;
  width: 100%;
  height: calc(100vh - 48px);
  color: #fff;
  padding: 23px 0;
  z-index: 999;
  &__inner {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  &__user {
    display: flex;
    align-items: center;
  }
  &__avatar {
    margin-right: 16px;
  }
  &__name {
    font-weight: 500;
  }
  &__phone {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
  }
  &__items {
    flex-grow: 1;
    margin-top: 27px;
  }
  &__item {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    &_bordered {
      border-bottom: 1px solid #e9e9e9;
      padding: 17px 0;
    }
  }
  &__img {
    margin-right: 10px;
  }
  &__text {
    font-weight: 500;
  }
}
</style>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <button class="header__menu" @click="openMenu">
          <svg
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="2" fill="black" />
            <rect y="9" width="14" height="2" fill="black" />
            <rect y="18" width="19" height="2" fill="black" />
          </svg>
        </button>
        <div class="header__info">
          <div class="header__status">
            <img class="header__img" src="~/assets/image/status.svg" />
            <p class="header__repute">Мегамодник</p>
          </div>
          <p class="point">200</p>
          <a class="header__user" href=""
            ><img class="header__avatar" src="~/assets/image/avatar.png"
          /></a>
        </div>
      </div>
    </div>
    <Menu v-if="menu" />
  </header>
</template>

<script>
import Menu from '../components/Menu'
export default {
  components: { Menu },
  data() {
    return { menu: false }
  },
  methods: {
    openMenu() {
      const body = document.querySelector('body')
      this.menu = !this.menu
      body.classList.toggle('overflow')
    },
  },
}
</script>

<style lang="scss">
.header {
  padding: 12px 0;
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__menu {
    border: none;
    background: none;
    cursor: pointer;
  }

  &__info {
    display: flex;
    align-items: center;
  }

  &__status {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    color: #5698c4;
  }

  &__repute {
    margin: 0 9px;
  }

  &__user {
    margin-left: 9px;
    .header__avatar {
      width: 32px;
      height: 32px;
    }
  }
}
</style>

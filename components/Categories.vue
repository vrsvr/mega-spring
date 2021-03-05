<template>
  <section class="categories">
    <div class="container">
      <p class="categories__title">
        Выбери категорию, чтобы перейти к заданиям
      </p>
      <div class="categories__links">
        <a
          v-for="(category, idx) of categoriesLinks"
          :key="idx"
          :style="`background: linear-gradient(${category.color})`"
          href="#"
          class="categories__link"
          >{{ category.text }}</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      categoriesLinks: {
        link1: {
          color: '270deg, #F6A997 0%, #CB5433 100%',
          text: 'НА СТИЛЕ',
        },
        link2: {
          color: '270deg, #F5D854 3.33%, #E97800 100%',
          text: 'ЖИТЬ АКТИВНЕЕ',
        },
        link3: {
          color: '90deg, #6BA860 0%, #80C5A1 100%',
          text: 'ПРОСТО И КРАСИВО',
        },
        link4: {
          color: '90deg, #5698C4 0%, #AAD2BF 98.78%',
          text: 'ХЮГГЕ',
        },
        link5: {
          color: '90deg, #475C6E 0.7%, #B6D1E8 96.67%',
          text: 'ВРЕМЯ — ДЕТЯМ',
        },
      },
    }
  },
}
</script>

<style lang="scss">
.categories {
  margin-top: 25px;
  &__title {
    font-weight: 500;
    line-height: 22px;
  }
  &__links {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
  }
  &__link {
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 22px;
    padding: 0 20px;
    height: 44px;
    color: #fff;
    line-height: 21px;
    font-weight: 500;
    text-decoration: none;
    margin-bottom: 2px;
    &:last-child {
      margin-bottom: 0;
    }
    &::after {
      content: url("data:image/svg+xml,%3Csvg width='8' height='12' viewBox='0 0 8 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.125 1L6.125 6' stroke='white' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M1.125 11L6.125 6' stroke='white' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E%0A");
      position: absolute;
      right: 16px;
    }
  }
}
</style>

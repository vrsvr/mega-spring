<script>
import Container from './base/Container';
export default {
  components: { Container },
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
    };
  },
};
</script>
<template>
  <section class="categories">
    <Container>
      <p class="categories__title">Выбери категорию, чтобы перейти к&nbsp;заданиям</p>
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
    </Container>
  </section>
</template>

<style lang="scss">
.categories {
  margin-top: em($margin-top-25);
  &__title {
    font-weight: 500;
    line-height: em(22px);
  }
  &__links {
    display: flex;
    flex-direction: column;
    margin-top: em($margin-top-25);
  }
  &__link {
    position: relative;
    display: flex;
    align-items: center;
    border-radius: em(22px);
    padding: 0 em(40px) 0 em(20px);
    height: em(44px);
    color: #fff;
    line-height: em(21px);
    font-weight: 500;
    text-decoration: none;
    margin-bottom: em(2px);
    &:last-child {
      margin-bottom: 0;
    }
    &::after {
      content: url("data:image/svg+xml,%3Csvg width='8' height='12' viewBox='0 0 8 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.125 1L6.125 6' stroke='white' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M1.125 11L6.125 6' stroke='white' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E%0A");
      position: absolute;
      right: em(16px);
    }
  }
}
</style>

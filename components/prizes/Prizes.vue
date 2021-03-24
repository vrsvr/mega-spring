<script>
/* eslint-disable */
import Container from '../base/Container';
import Point from '../common/Point';
import PrizesItem from "./PrizesItem";
export default {
  components: { PrizesItem, Point, Container },
  data() {
    return {
      activetab: '1',
      point1: '150',
      point2: '350',
      availablePrizes: [
        {
          id: 0,
          image: '/image/prizes/ic_lady_small.jpg',
          description: 'Аксессуар',
          title: 'LADY COLLECTION',
          link: '/lady-collection/'
        },
        {
          id: 1,
          image: '/image/prizes/ic_sb_small.jpg',
          description: 'Кроссовки',
          title: 'STREET BEAT',
          link: '/street-beat/'
        }
      ],
      reservedPrizes: []
    };
  },
};
</script>
<template>
  <section class="prizes">
    <Container>
      <h2 class="prizes__title">Меняй баллы на&nbsp;призы!</h2>
      <div class="prizes__tabs">
        <button class="prizes__tab" :class="[activetab === '1' ? 'prizes__tab_active' : '']" @click="activetab = '1'">
          Зарезервировано
        </button>
        <button class="prizes__tab" :class="[activetab === '2' ? 'prizes__tab_active' : '']" @click="activetab = '2'">
          Доступные призы
        </button>
      </div>
      <div v-if="activetab === '1'" class="prizes__content">
        <template v-if="reservedPrizes.length">
          <PrizesItem v-for="prize in reservedPrizes" :key="prize.id" :image="prize.image" :description="prize.description" :title="prize.title" :link="prize.link" />
        </template>
        <div class="prizes__empty" v-else>Зарезервированных призов нет</div>
      </div>
      <div v-if="activetab === '2'" class="prizes__content">
        <template v-if="availablePrizes.length">
          <PrizesItem v-if="availablePrizes" v-for="prize in availablePrizes" :key="prize.id" :image="prize.image" :description="prize.description" :title="prize.title" :link="prize.link" />
        </template>
        <div class="prizes__empty" v-else>Доступных призов нет</div>
      </div>
    </Container>
  </section>
</template>
<style lang="scss">
.prizes {
  margin-top: $margin-top-25;
  &__title {
    font-size: em($size-text-large);
    line-height: em(30px, $size-text-large);
    color: #000000;
    font-weight: 700;
    text-align: center;
  }
  &__tabs {
    display: flex;
    margin-top: $margin-top-25;
  }
  &__tab {
    background: none;
    border: none;
    font-size: em($size-text-small-tablet);
    font-weight: 500;
    line-height: em(22px, $size-text-small-tablet);
    color: #000000;
    padding: 0 0 em(16px, $size-text-small-tablet);
    width: 50%;
    border-bottom: 1px solid #e9e9e9;
    outline: none;
  }
  &__tab_active {
    border-bottom: 2px solid $color-blue;
    color: $color-blue;
  }
  &__empty {
    margin: em(15px) 0;
    text-align: center;
  }
}
</style>

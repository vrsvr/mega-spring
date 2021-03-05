<template>
  <section class="scores">
    <div class="container">
      <h2 class="scores__title">Меняй баллы на призы!</h2>
      <div class="scores__tabs">
        <button
          class="scores__tab"
          :class="[activetab === '1' ? 'scores__tab--active' : '']"
          @click="activetab = '1'"
        >
          Зарезервировано
        </button>
        <button
          class="scores__tab"
          :class="[activetab === '2' ? 'scores__tab--active' : '']"
          @click="activetab = '2'"
        >
          Доступные призы
        </button>
      </div>
      <div v-if="activetab === '1'" class="scores__content">
        <div class="scores__item">
          <img
            class="scores__item-img"
            src="~/assets/image/ic_sb_small.svg"
            alt=""
          />
          <div class="scores__item-texts">
            <p class="scores__item-title">Аксессуар</p>
            <p class="scores__item-brand">LADY COLLECTION</p>
            <a class="scores__item-link" href="#">Забрать в магазине</a>
          </div>
          <div class="point scores__point">350</div>
        </div>
        <div class="scores__item">
          <img
            class="scores__item-img"
            src="~/assets/image/ic_lady_small.svg"
            alt=""
          />
          <div class="scores__item-texts">
            <p class="scores__item-title">Аксессуар</p>
            <p class="scores__item-brand">LADY COLLECTION</p>
            <a class="scores__item-link" href="#">Забрать в магазине</a>
          </div>
          <div class="point scores__point">150</div>
        </div>
      </div>
      <div v-if="activetab === '2'" class="scores__content">
        <div class="scores__item">
          <img
            class="scores__item-img"
            src="~/assets/image/ic_lady_small.svg"
            alt=""
          />
          <div class="scores__item-texts">
            <p class="scores__item-title">Аксессуар</p>
            <p class="scores__item-brand">LADY COLLECTION</p>
            <a class="scores__item-link" href="#">Забрать в магазине</a>
          </div>
          <div class="point scores__point">150</div>
        </div>
        <div class="scores__item">
          <img
            class="scores__item-img"
            src="~/assets/image/ic_sb_small.svg"
            alt=""
          />
          <div class="scores__item-texts">
            <p class="scores__item-title">Аксессуар</p>
            <p class="scores__item-brand">LADY COLLECTION</p>
            <a class="scores__item-link" href="#">Забрать в магазине</a>
          </div>
          <div class="point scores__point">350</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return { activetab: '1' }
  },
}
</script>

<style lang="scss">
.scores {
  margin-top: 25px;
  &__title {
    font-size: 24px;
    line-height: 30px;
    color: #000000;
    font-weight: 700;
    text-align: center;
  }
  &__tabs {
    display: flex;
    margin-top: 25px;
  }
  &__tab {
    background: none;
    border: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    color: #000000;
    padding: 0;
    width: 50%;
    border-bottom: 1px solid #e9e9e9;
    padding-bottom: 16px;
  }
  &__tab--active {
    border-bottom: 2px solid #5697c3;
    color: #5697c3;
  }
  &__item {
    display: flex;
    padding: 26px 0;
    border-bottom: 1px solid #e9e9e9;
  }
  &__item-img {
    margin-right: 20px;
  }
  &__item-texts {
    flex-grow: 1;
  }
  &__item-title {
    font-size: 14px;
    line-height: 18px;
  }
  &__item-brand {
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    margin-top: 3px;
    text-transform: uppercase;
  }
  &__item-link {
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    color: #5697c3;
    text-decoration-skip-ink: none;
  }
}
</style>

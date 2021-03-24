<script>
import Task from '../components/Task';
import Mission from '../components/Mission';
import Categories from '../components/Categories';
import Prizes from '../components/prizes/Prizes';
import Apps from '../components/Apps';
import Social from '../components/Social';
export default {
  components: {
    Task,
    Mission,
    Categories,
    Prizes,
    Apps,
    Social,
  },
};
</script>

<template>
  <div class="page">
    <Task class="page__task" />
    <Mission class="page__mission" />
    <Categories class="page__categories" />
    <Prizes class="page__prizes" />
    <Apps class="page__apps" />
    <Social class="page__social" />
  </div>
</template>

<style lang="scss"></style>

<template>
  <div>
    <Header />
    <Share />
    <Banner />
    <Categories />
    <Scores />
    <Apps />
    <Social />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Share from '../components/Share'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Scores from '../components/Scores'
import Apps from '../components/Apps'
import Social from '../components/Social'
import Footer from '../components/Footer'
export default {
  components: {
    Header,
    Share,
    Banner,
    Categories,
    Scores,
    Apps,
    Social,
    Footer,
  },
}
</script>

<style></style>

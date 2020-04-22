<template>
    <div>
        <home-header></home-header>
        <home-table></home-table>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeTable from './components/Table'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeTable
  }
}
</script>

<style scoped>
</style>

<template>
  <div>
    <add-header></add-header>
    <add-table></add-table>
  </div>
</template>

<script>
import AddHeader from './components/Header'
import AddTable from './components/AddTable'
export default {
  name: 'Add',
  components: {
    AddHeader,
    AddTable
  }
}
</script>

<style lang='stylus' scoped>

</style>

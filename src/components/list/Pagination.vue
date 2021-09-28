<template>
  <a-pagination @change="changePage" :total="pagination.total" :pageSize="pagination.per_page" />
</template>
<script lang="ts">

export default ({
  props: {
    pagination: {
      type: Object,
      required: true
    },
  },
  data () {
    return {
    }
  },
  methods: {
    changePage (current_page, per_page) {
      this.$emit('changePage', current_page)
    }
  },
});
</script>

<style scoped>

</style>

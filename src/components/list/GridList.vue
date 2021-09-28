<template>
  <a-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: row }" :data-source="data.data" >
    <template #renderItem="{ item }">
      <a-list-item>
        <slot :item="item">
        </slot>
      </a-list-item>
    </template>
  </a-list>
  <a-pagination @change="paginate" :total="data.meta.pagination.total" :pageSize="data.meta.pagination.per_page" />
</template>
<script lang="ts">

export default ({
  props: {
    data: {
      type: Object,
      required: true
    },
    row: {
      type: Number,
      required: false,
      default: 2
    }
  },
  emits: ["paginate"],
  data () {
    return {
    }
  },
  methods: {
    paginate (current_page, per_page) {
      this.$emit('paginate', current_page, per_page)
    }
  },
});
</script>

<style scoped>

</style>

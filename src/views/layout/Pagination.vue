<template>
  <nav>
    <ul class="pagination">
      <li v-if="pagination.current_page > 1">
        <a href="#" aria-label="Previous" @click.prevent="$emit('changePage', pagination.current_page - 1)">
          <span aria-hidden="true">«</span>
        </a>
      </li>
      <li v-for="page in pagination.total_pages" :class="{'active': page === pagination.current_page}">
        <a href="#" @click.prevent="$emit('changePage', page)">{{ page }}</a>
      </li>
      <li v-if="pagination.current_page < pagination.total_pages">
        <a href="#" aria-label="Next" @click.prevent="$emit('changePage', pagination.current_page + 1)">
          <span aria-hidden="true">»</span>
        </a>
      </li>
    </ul>
  </nav>
<!--  <a-pagination :current="pagination.current_page" :total="11" @change="$emit('changePage', pagination.current_page)" />-->
</template>
<script>

export default{
  props: {
    pagination: {
      type: Object,
      required: true
    }
  },

  methods : {
  }
}
</script>

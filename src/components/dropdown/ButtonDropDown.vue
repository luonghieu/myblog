<template>
  <div class="demo-dropdown-wrap">
    <a-dropdown-button @click="handleButtonClick()">
      <slot name="title"></slot>
      <template #overlay>
        <a-menu>
          <a-menu-item
            v-for="(item, index) in data"
            :key="item.id"
            @click="$emit('select', item.id)" >
            <UserOutlined />
            {{ item.title }}
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown-button>
    <slot name="current"></slot>
  </div>
</template>
<script lang="ts">
import { UserOutlined } from '@ant-design/icons-vue';

export default {
  props: {
    data: {
      type: Object,
      required: true,
    }
  },
  components: {
    UserOutlined
  },
  data () {
    return {
    }
  },
  methods: {
    handleButtonClick (e) {
      //console.log('click left button', e);
    }
  }
}
</script>
<style scoped>
.demo-dropdown-wrap :deep(.ant-dropdown-button) {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>

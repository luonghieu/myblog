<template>
  <van-form @submit="onSubmit">
    <van-field
      v-model="client_id"
      name="client_id"
      label="Client id"
      placeholder="Client id"
      :rules="[{ required: true, message: 'Client id is required' }]"
    />
    <van-field
      v-model="client_secret"
      type="password"
      name="client_secret"
      label="Client secret"
      placeholder="Client secret"
      :rules="[{ required: true, message: 'Client secret is required' }]"
    />
    <van-field name="grant_type" label="Radio">
      <template #input>
        <van-radio-group v-model="grant_type" direction="horizontal">
          <van-radio name="client_credentials">Client credentials</van-radio>
          <van-radio name="password">Password</van-radio>
        </van-radio-group>
      </template>
    </van-field>
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">
        Submit
      </van-button>
    </div>
  </van-form>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  components: {
  },

  data() {
    return {
      client_id: '',
      client_secret: '',
      grant_type: 'client_credentials',
    }
  },
  methods: {
    async onSubmit(values) {
      await this.login(values)
      await this.$router.push({ name: 'top' })
    },

    ...mapActions({
      login: 'auth/login',
    })
  }
}
</script>

<style lang="scss">
.login-page {
  .term-container {
    border-radius: 10px;
    background-color: #fbfaff;
    color: #776677;
    a {
      color: inherit;
    }
    [checkbox-ui] {
      .van-checkbox__label {
        color: #776677;
      }
      .van-checkbox__icon {
        height: 46px;
      }
    }
  }
  .policy-container {
    color: #776677;
    a {
      color: inherit;
    }
  }
}
</style>

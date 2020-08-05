<template>
  <div id="login">
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名" 
        ref="username"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
      />
      <div style="margin: 16px;">
        <van-button :disabled="required" round block type="info" native-type="submit" @click="onSubmit">登录</van-button>
      </div>
    </van-form>
    <div class="footer">
        <van-button color="transparent" size="mini">注册</van-button>

        <van-button color="transparent" size="mini">第三方登陆</van-button>
        <!-- <a href="http://www.baidu.com" target="_blank">注册</a> -->
      </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      required: true,
    };
  },
  computed: {
    changeName() {
      if(this.username === "" || this.password === "") {
        this.required = true
      }
      else {
        this.required = false
      }
    }
  },
  watch: {
    changeName(){}
  },
  methods: {
    onSubmit(values) {
      
    },
  },
};
</script>

<style lang='scss' scoped>
#login {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  bottom: 0px;
  background-color: #4776e6; /* 浏览器不支持的时候显示 */
  background-image: linear-gradient(180deg, #4776e6 0%, #8e54e9 70%);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  ::v-deep .van-form {
    align-self: flex-end;
    .van-cell.van-field {
      background-color: transparent;
      span {
        color: #fefefe;
      }
      input {
        color: #fefefe;
      }
    }
  }
  .footer {
    float: left;
  }
}
</style>
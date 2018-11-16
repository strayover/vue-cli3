<template>
  <div class="loginBox">
    <div class="login-view" style="height:298px;">
        <p>
            <img src="../../assets/img/user_icon.png" alt="">
            <input type="text" placeholder="" id="user" value="">
            <span id="userWaring"></span>
        </p>
        <p>
            <img src="../../assets/img/key_icon.png" alt="">
            <input type="password" placeholder="请输入密码" id="key" value="">
            <span id="keyWaring"></span>
        </p>
        <label><input id="choose" type="checkbox" value="" /><span>记住密码</span></label>
        <button @click="login" id="loginBtn">登录</button>
    </div>  
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    login(){
      this.$router.push('/HomePage/MyClient')
    }
  },
  mounted(){

  }
}
</script>
<style scoped lang="less">
  .loginBox{
    width: 100%;
    height: calc(100vh - 16px);
    background-image: url("../../assets/img/login.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
      .login-view{
          position: absolute;
          right: 230px;
          top: 180px;
          width: 454px;
          height: 340px;
          background: #fff;
          &>.login-table{
              width: 100%;
              height: 54px;
              overflow: hidden;
              button{
                  width: 50%;
                  height: 100%;
                  outline: none;
                  float: left;
                  border: none;
                  background: #e5e9f2;
                  color: #47586c;
              }
          }
          &>p{
              width: 370px;
              height: 44px;
              background: #eff2f7;
              margin: 0 auto;
              margin-top: 40px;
              // overflow: hidden;
              position: relative;
              img{
                  float: left;
                  margin: 12px 0 0 14px;
              }
              input{
                  height: 14px;
                  padding: 15px 0;
                  width: 300px;
                  margin-left: 20px;
                  outline: none;
                  border: none;
                  background: #eff2f7;
                  line-height: 14px;
              }
              input::-webkit-input-placeholder{
                  color: #989fb9;
                  font-size: 14px;
              }
              span{
                  position: absolute;
                  color: red;
                  width: 100%;
                  height: 14px;
                  bottom: -20px;
                  left: 10px;
                  font-size: 14px;
                  display: none;
              }
          }
          &>label{
              display: block;
              width: 370px;
              height: 13px;
              margin: 0 auto;
              font-size: 13px;
              margin-top: 28px;
              input{
                  float: left;
              }
              span{
                  float: left;
                  margin-left: 8px;
                  color: #6b717d;
              }
          }
          &>button{
              display: block;
              width: 370px;
              height: 44px;
              background: #2c7bd7;
              color: #fff;
              margin: 0 auto;
              margin-top: 30px;
              outline: none;
              border: none;
          }
      }
  }
</style>



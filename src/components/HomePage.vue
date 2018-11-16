<template>
  <div id="navBox">
    <div id="nav">
      <router-link to="/HomePage/MyClient">我的客户</router-link> |
      <router-link to="/HomePage/Device">设备管理</router-link> |
      <router-link to="/HomePage/ReportForms">统计报表</router-link> |
      <router-link to="/HomePage/Analyze">分析统计</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data(){
    return{
      
    }
  },
  methods:{

  },
  mounted(){

  }
}
</script>
<style lang="less" scoped>
#navBox {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>


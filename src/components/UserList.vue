<template>
<div class="container">
  <div class="card" v-for="item in getUserList" :key="item.id">
    <img src="../assets/baby-duck.png" alt="Avatar" style="width:30%">
      <p><router-link to="/useritem">{{item.login}}</router-link> </p> 
  </div>
</div>
</template>

<script>
import {mapActions } from 'vuex';
import {mapGetters } from 'vuex';
export default {  
  data() {
    return {
      name:"aniket"
    }
  },
  created() {
    this.addUserList();
  },
  computed: {
    ...mapGetters(["getUserList"])
  },
  methods: {
    ...mapActions(["addUserList"])
  }
}
</script>

<style scoped>
.card{
  width: 20%;
  text-align: center;
  display: inline-block;
  padding-bottom: 30px;
  padding-top: 20px;
}
.card p {
  padding: 0px;
  margin: 5px;
}

.container {
  width: 100%;
}



</style>

<template>
<div class="card"> 
  <router-link to="/" style="text-decoration:none; text-decoration:none;font-size:x-large;margin:30px" >&larr;</router-link>  
  <img class="center" src="../assets/baby-duck.png" alt="Avatar" >
  <h4 style="text-align:center"><b>John Doe</b></h4>  
  <div class="row" v-for="item in getRepository" :key="item.id">
    <div class="usercard"><a :href="item.html_url">{{item.full_name}}</a></div>
    <div class="usercard">&#128065;{{item.stargazers_count}}</div>    
    <div class="usercard">&#9733;{{item.watchers_count}}</div>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {

    }
  },
  created() {
    this.addUserRepos();
  },
  computed: {
    ...mapGetters(["getRepository"])
  },
  methods: {
    ...mapActions(["addUserRepos"])
  }

}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 80%;
  margin-left: auto;
  margin-right: auto;  
  padding-top: 20px;
  padding-bottom: 10px;
  margin-top: 20px;
}
.usercard{
  width: 20%;
  text-align: center;
  display: inline-block;
  margin: 15px;
  padding: 15px;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}
</style>

<template>
  <header>
    <a class="active" href="#home"><img src="./assets/github_1.png" alt="github" width="40" height="40"></a><span class="git-title">Github Userboard</span>
    <input type="text" placeholder="Search..">    
  </header>

  <main>    
    <div style="padding-left:16px">
      <!-- <router-link to="/">home</router-link>
      <router-link to="/user">user</router-link> -->
      <!-- <UserList msg="Hello Aniket"></UserList> -->
    </div>
    <router-view></router-view>
  </main>

  <footer>
    <a class="active" href="#home"><img src="./assets/github_1.png" alt="github" width="40" height="40"></a>
    <p>&copy; All rights reserved, 2023</p>
  </footer>  
</template>

<script>
export default {
  data() {
    return{
      
    }
  }
}
</script>

<style scoped>
.git-title {
    display: inline-block;
    margin-top: 20px;
    font-weight: bold;
    color: white;
}
header {
  overflow: hidden;
  background-color: #24292f
}

header a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 8px 32px;
  text-decoration: none;
  font-size: 17px;
}

header a:hover {
  color: grey ;
}

header a.active {
  color: white;
}

header input[type=text] {
  float: right;
  padding: 10px;
  border: none;
  margin-top: 10px;
  margin-right: 40px;
  font-size: 17px;
  border-radius: 10px;
  text-decoration: none;
  outline: none;
}
footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color:#24292f;
   color: white;
   text-align: center;
   padding-top: 4px;
}
footer p {
  margin: 10px 10px;
  font-size: 0.6em;
}

</style>

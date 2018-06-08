<template>
  <div id="app">
      <div class="footer">
      	  <router-link to='/index' class="foot-item">index</router-link>
			    <router-link to='/classify' class="foot-item">classify</router-link>
			    <router-link to='/shopcart' class="foot-item">shopcart</router-link>
			    <router-link to='/mine' class="foot-item">mine</router-link>
      </div>
      <div class="main">
      	  <router-view></router-view>
      </div>
          
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.footer{
	position: absolute;
	bottom:0;
	border-top: 1px solid red;
	display: flex;
	width: 100%;
}
.foot-item{
	flex: 1;
justify-content: center;
}

</style>

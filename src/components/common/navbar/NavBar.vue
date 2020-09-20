<template>
  <div id="nav-bar">
    <!-- 一般将slot用div包起来，多个插槽需要每个插槽加个名字 -->
    <div class="nav-left"><slot name="left"></slot></div>
    <div class="nav-center"><slot name="center">标题</slot></div>
    <div class="nav-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
	export default {
		name: "NavBar"
	}
</script>

<style scoped>
  #nav-bar {
    position: relative;
    z-index: 10;

    /* flex布局 */
    display: flex;

    /* 导航栏一般是44px */
    height: 44px;
    /* line-height可以让文字居中 */
    line-height: 44px;
    text-align: center;

    /*border-bottom: 1px solid #eee;*/
    /* box-shadow: 0 1px 1px rgba(100,100,100,.08); */
  }


/* flex布局 */
  .nav-left {
    width: 60px;
  }

  .nav-center {
    flex: 1;
  }

  .nav-right {
    width: 60px;
  }
</style>

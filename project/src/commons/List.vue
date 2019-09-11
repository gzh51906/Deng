<template>
    <div class="list">
              <el-page-header @back="goBack" content="详情页面">
              </el-page-header>
    </div>
</template>

<script>
export default {
     data() {
         return {
             
         }
     },
     methods: {
      goBack() {
        console.log('go back');
      }
    }
}
</script>

<style>

</style>


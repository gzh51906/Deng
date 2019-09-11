<template>
    <div class="home">
       <Header></Header>
		<Banner></Banner>
        <Conent></Conent>
        <Goodslist></Goodslist>
        <!-- <Footer></Footer> -->
    </div>
    
</template>

<script>
import Header from '../commons/Header';
// import Footer from '../../commons/Footer';
import Banner from '../commons/Banner';
import Conent from '../commons/Conent';
// import Footer from '../commons/Footer';
import Goodslist from '../commons/Goodslist';
import axios from 'axios'
export default {
      data() {
          return {
              
          }
      },
      components:{
          Header,
          Banner,
          Conent,
          Goodslist,
        //   Footer,
        //   Goodslist
      }
}
</script>

<style>

</style>

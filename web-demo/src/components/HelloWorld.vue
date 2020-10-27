<template>
  <div class="box">
   <header>
     <div skeleton="0" v-for="(item,index) in menu" :key="index">{{item}}</div>
   </header>
   <div class="list">
     <div v-for="(item,index) in list" :key="index+10" class="list-item">
       <div skeleton="1" class="num">{{index+1}}</div>
       <div skeleton="2" class="info">
         <p skeleton="3">{{item.name}}</p>
         <p skeleton="3">{{item.time}}</p>
       </div>
       <div skeleton="4" class="price">{{item.price}}</div>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      menu: ['数码','图书','服装'],
      list:[
        {
          name: '华为mate40',
          time: '2020-10-30',
          price: '￥6299',
        },
        {
          name: '华为mate40 pro',
          time: '2020-10-30',
          price: '￥7299',
        },
        {
          name: 'iphone 12 64G',
          time: '2020-10-30',
          price: '￥6299',
        },{
          name: 'iphone 12 128G',
          time: '2020-10-30',
          price: '￥6899',
        },{
          name: 'iphone 12pro 128G',
          time: '2020-10-30',
          price: '￥6299',
        },{
          name: '小米至尊版',
          time: '2020-10-30',
          price: '￥5299',
        }
      ]
    }
  },
  mounted(){}
}
</script>

<style scoped>
.box{
  padding-left: 30px;
}
header{
  display: flex;
  padding: 15px;
  border-bottom: 1px solid #cccccc;
}
header div{
  width: 50px;
  height: 30px;
  margin-right: 10px;
}
header div:first-child {
  font-weight: 600;
}
.info{
  width: 150px;
}
.info p{
  height: 22px;
}
.info p:first-child{
  margin-bottom: 10px;
}
.list-item{
  display: flex;
  height: 60px;
  align-items: center;
}
.list-item div[skeleton="3"]{
  width: 200px;
}
.list-item .num{
  width: 60px;
  height: 40px;
  margin-right: 20px;
  line-height: 40px;
}
.list-item .price{
  margin-left: 20px;
  color: red;
  width: 40px;
  height: 24px;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

new Vue({
  el:"#vue-app",
  data:{
    name:"Boss Somdong ",
    job:"",
    age:23,
    status:false,
    count:0,
    website:'https://www.facebook.com/boss.zaa.980',
    foods:[],
    gender:''
  },
  methods:{
    getName:function(){
      return this.name
    },
    setName:function(n){
      return this.name=n
    },
    addAge:function(){
      this.age++;
      console.log(this.age);
    },
    SubtractAge:function(){
      this.age--;
      console.log(this.age);
    },
    addCount:function(){
      this.count++;
      console.log(this.count);
    }
  }
})

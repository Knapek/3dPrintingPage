console.log("siemanko");


//Navbar shadow event listener 
document.addEventListener('scroll', function(){
   var element = document.getElementsByTagName('nav');

   if(document.documentElement.scrollTop != 0){
      element[0].classList.add('navShadowScroll');
   }else{
      element[0].classList.remove('navShadowScroll'); 
   };
});



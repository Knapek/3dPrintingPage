console.log("siemanko");


//Navbar shadow event listener 
document.addEventListener('scroll', function(){
   var navNode = document.getElementsByTagName('nav');
   var logoImgNode = document.createElement('img');
   var navLogoContainerNode = document.getElementById('nav-logo-container-id');

   if(document.documentElement.scrollTop != 0){

      navNode[0].classList.add('navShadowScroll');

      if(document.getElementById('nav-logo-container-id').children.length == 0){
         logoImgNode.setAttribute('src', './img/logo.png');
         document.getElementById('nav-logo-container-id').append(logoImgNode);
      }
   }else{
      navNode[0].classList.remove('navShadowScroll'); 
      navLogoContainerNode.removeChild(navLogoContainerNode.firstChild);
      
   };
});




function fadeEffect() {
   var navNode = document.getElementsByTagName('nav');
   var navbarLogoContainerDivNode = document.getElementById('nav-logo-container-id');
   var navbarLogoContainerDivNodeStyle = window.getComputedStyle(navbarLogoContainerDivNode);
   var navbarLogoContainerDivNodeStyleOpacity = navbarLogoContainerDivNodeStyle.getPropertyValue('opacity');

   
   if(document.documentElement.scrollTop > 100) //ture if pahe has been scrolled 100 px from the top.
   {
      navNode[0].classList.add('shadow-lg'); //removing class navShadowScroll when page is at the top.  

      if(navbarLogoContainerDivNodeStyleOpacity == 0)
      {
         navbarLogoContainerDivNode.classList.toggle('fade'); //changing of the opacity
      }
   }
   else
   {
      navNode[0].classList.remove('shadow-lg'); //removing class navShadowScroll when page is at the top.
      
      if(navbarLogoContainerDivNodeStyleOpacity == 1)
      {
         navbarLogoContainerDivNode.classList.toggle('fade');// reverse change of the opacity
      }
   };
   return navbarLogoContainerDivNodeStyleOpacity;
}

//Navbar shadow event listener 
document.addEventListener('scroll',function(){
   fadeEffect();
});



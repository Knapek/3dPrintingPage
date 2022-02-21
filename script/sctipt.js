//Fade effect of logo and shadow appear at navigation bar
function fadeEffect() {
   var navNode = document.getElementsByTagName('div');
   var navbarLogoContainerDivNode = document.getElementById('nav-logo-container-id');
   var navbarLogoContainerDivNodeStyle = window.getComputedStyle(navbarLogoContainerDivNode);
   var navbarLogoContainerDivNodeStyleOpacity = navbarLogoContainerDivNodeStyle.getPropertyValue('opacity');

   
   if(document.documentElement.scrollTop > 100) //ture if pahe has been scrolled 100 px from the top.
   {
      navNode[0].classList.add('shadow-lg'); //adding class navShadowScroll when page is at the top.  

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
}

//Scroll triger of fade effects at naviation bar
document.addEventListener('scroll',function(){
   fadeEffect();
});



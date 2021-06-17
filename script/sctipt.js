//Navbar shadow event listener 
document.addEventListener('scroll', function()
{
   var navNode = document.getElementsByTagName('nav');
   var logoImgNode = document.createElement('img');
   var navbarLogoContainerDivNode = document.getElementById('nav-logo-container-id');
   var navbarLogoContainerDivNodeStyle = window.getComputedStyle(navbarLogoContainerDivNode);
   var navbarLogoContainerDivNodeStyleOpacity = navbarLogoContainerDivNodeStyle.getPropertyValue('opacity');

if(document.documentElement.scrollTop > 30) //ture if pahe has been scrolled 60 px from the top.
   {
      navNode[0].classList.add('shadow-lg'); //removing class navShadowScroll when page is at the top.   
      if(navbarLogoContainerDivNodeStyleOpacity == 0){
         navbarLogoContainerDivNode.classList.toggle('fade');
         
      }
   }
   else
   {
      navNode[0].classList.remove('shadow-lg'); //removing class navShadowScroll when page is at the top.
      // navbarLogoContainerDivNode.classList.toggle('fade');
      if(navbarLogoContainerDivNodeStyleOpacity == 1){
         navbarLogoContainerDivNode.classList.toggle('fade');
      }
   };



});

 


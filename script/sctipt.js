//Navbar shadow event listener 
document.addEventListener('scroll', function()
{
   var navNode = document.getElementsByTagName('nav');
   var logoImgNode = document.createElement('img');
   var navbarLogoContainerDivNode = document.getElementById('nav-logo-container-id');

if(document.documentElement.scrollTop > 30) //ture if pahe has been scrolled 60 px from the top.
   {

      navNode[0].classList.add('navShadowScroll'); //adding class navShadowScroll when page is scrolled down.

      if(document.getElementById('nav-logo-container-id').children.length == 0) //adding logo to navbar when page is scrolled down.
      {
         logoImgNode.setAttribute('src', './img/logo_navbar.png'); //setting atribute with link to logo at img node.
         document.getElementById('nav-logo-container-id').append(logoImgNode); //appending img node to dedicated div container.
      }
   }
   else
   {
      navNode[0].classList.remove('navShadowScroll'); //removing class navShadowScroll when page is at the top.
      navbarLogoContainerDivNode.removeChild(navbarLogoContainerDivNode.firstChild); //removing img node from dedicated div container when page is at the top.
   };
});



// Initialize your app
var iResignOS = new Framework7({
    animateNavBackIcon:true
});

myApp.onPageInit('home', function (page) {
    
    
    
}).trigger(); //And trigger it right away

// Export selectors engine
var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
    // Enable Dom Cache so we can use all inline pages
    domCache: true
});


 var isMobile = { 
  Android: function() { 
  return navigator.userAgent.match(/Android/i); 
  }, 
  BlackBerry: function() { 
  return navigator.userAgent.match(/BlackBerry/i); 
  }, 
  iOS: function() { 
  return navigator.userAgent.match(/iPhone|iPad|iPod/i); 
  }, 
  Opera: function() { 
  return navigator.userAgent.match(/Opera Mini/i); 
  }, 
  Windows: function() { 
  return navigator.userAgent.match(/IEMobile/i); 
  }, 
  any: function() { 
  return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); 
  } 
  }; 
  if ( isMobile.iOS() ) { if (window.navigator.standalone == true) { initialize(); }else{ document.location.href = 'test.html'; } } 

    if(!(isMobile.iOS())) {
        location.replace("test2.html");
      } 

      //- One group, title, three buttons
$$('.ac-2').on('click', function () {
    var buttons = [
        {
            text: 'Are you sure you want to reset iResignOS?',
            label: true
        },
        {
            text: 'Reset iResignOS',
            onClick: function () {
                javascript:window.location.reload(true);
            bold: true
        },
        {
            text: 'Cancel',
            color: 'red'
        },
    ];
    myApp.actions(buttons);
});
      
function CydiaAbout() {
  Cydia.alert('Sorry but this feature is not available yet!');
}

function error() {
  Cydia.alert('Please add a correct ID Number!');
}

function seefirst()
{
 
 if(form.password.value == "betaaccessisthebestthingyougetlol")
  {
    window.open('betaidaccess/accessfullmanlolisthisevenpossiblelol.html')
  }
 else
 {
   function error()
  }
}

$$('.demo-progressbar-infinite-multi-overlay').on('click', function () {
    var container = $$('body');
    if (container.children('.progressbar, .progressbar-infinite').length) return; //don't run all this if there is a current progressbar loading
    myApp.showProgressbar(container, 'multi');
    setTimeout(function () {
        myApp.hideProgressbar();
    }, 2600);
});

$$('.open-indicator').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
    }, 500);
});
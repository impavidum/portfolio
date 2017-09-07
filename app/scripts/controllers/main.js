'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('MainCtrl', function ($scope, $timeout, $location, $anchorScroll, $rootScope, $log) {

    $rootScope.ready = false;

    $timeout(function () {
      $rootScope.ready = true;
    }, 1);

    $rootScope.vidSource = '';

    $scope.gotoAnchor = function (x) {
      var newHash = x;
      if ($location.hash() !== newHash) {
        // set the $location.hash to `newHash` and
        // $anchorScroll will automatically scroll to it
        $location.hash(x);
      } else {
        // call $anchorScroll() explicitly,
        // since $location.hash hasn't changed
        $anchorScroll();
      }
    };

    $scope.playVid = function (src, poster) {
      $log.log(poster);
      $rootScope.vidSource = src;
      $rootScope.posterSrc = poster;
    };

    $rootScope.closeVid = function () {
      $rootScope.vidSource = '';
    };

    $scope.works = [{
      title: 'Fleetio Drive',
      roles: ['sole front end dev', 'code refactor'],
      description: 'At Fleetio, I led the development effort to launch their newest software offering, Fleetio Drive. Drive tracks driver behavior for compainies with large fleets of vehicles. The app was built on Ionic/Angular 2.',
      techs: [{
          icon: 'ion-ionic',
          name: 'Ionic',
          link: 'http://ionicframework.com/'
            }, {
          icon: 'ion-social-angular-outline',
          name: 'AngularJS',
          link: 'https://angularjs.org/'
            }, {
          icon: 'ion-social-javascript-outline',
          name: 'Javascript',
          link: 'https://www.typescriptlang.org/'
            }, {
          icon: 'ion-social-sass',
          name: 'Sass',
          link: 'http://sass-lang.com/'
            }, {
          icon: 'ion-social-html5-outline',
          name: 'Html5',
          link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
            }, {
          icon: 'ion-ios-pie-outline',
          name: 'eCharts 3',
          link: 'http://echarts.baidu.com/'
            },

        {
          icon: 'ion-social-css3-outline',
          name: 'Css3',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
            }],
      show: false,
      app_left: 'images/fleetio-dash.png',
      app_center: 'images/fleetio-map.png',
      app_right: 'images/fleetio-trip.png',
      video_path: 'videos/fleetio-demo.mp4',
      poster: 'images/fleetio-dash.png',
      buttons: []
        }, {
      title: 'Atlas Dashboard',
      roles: ['sole front end dev', 'ui design', 'user flows'],
      description: 'As the sole designer and developer on this project I had a lot of freedom to produce a product that, although complex, feels cohesive and natural to the user. The project spanned around 90 days from the first gulp build to the initial realease. The dashboard features a dynamic metrics grid, an advanced workout creator/editor with drag-and-drop and clone, searchable workout and exercise libraries, settable goals and measured progress, among many other features.',
      techs: [{
          icon: 'ion-social-javascript-outline',
          name: 'Javascript',
          link: 'https://www.javascript.com/'
            }, {
          icon: 'ion-social-angular-outline',
          name: 'AngularJS',
          link: 'https://angularjs.org/'
            }, {
          icon: 'ion-social-sass',
          name: 'Sass',
          link: 'http://sass-lang.com/'
            }, {
          icon: 'ion-social-html5-outline',
          name: 'Html5',
          link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
            }, {
          icon: 'ion-ios-pie-outline',
          name: 'eCharts 3',
          link: 'http://echarts.baidu.com/'
            },
        {
          icon: 'ion-social-css3-outline',
          name: 'Css3',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
            }],
      show: false,
      web_path: 'images/atlas-dash.png',
      mobile_path: '',
      video_path: 'videos/atlas-dash.mp4',
      poster: 'images/atlas-dash.png',
      link: 'https://dashboard.atlaswearables.com/#/',
      buttons: [{
        name: 'View Site',
        link: 'https://dashboard.atlaswearables.com/#/'
            }]
        }, {
      title: 'atlas app',
      roles: ['sole mobile dev', 'code refactor'],
      description: 'When I started working for Atlas, a line of front end devs had preceded me. The code base for this app was unmanageable. I completely rewrote the app in compliance with best practices and implemented all neglected feature tickets within a 90 day period.',
      techs: [{
          icon: 'ion-ionic',
          name: 'Ionic',
          link: 'http://ionicframework.com/'
            }, {
          icon: 'ion-social-angular-outline',
          name: 'AngularJS',
          link: 'https://angularjs.org/'
            }, {
          icon: 'ion-social-javascript-outline',
          name: 'Javascript',
          link: 'https://www.javascript.com/'
            }, {
          icon: 'ion-social-sass',
          name: 'Sass',
          link: 'http://sass-lang.com/'
            }, {
          icon: 'ion-social-html5-outline',
          name: 'Html5',
          link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
            }, {
          icon: 'ion-ios-pie-outline',
          name: 'eCharts 3',
          link: 'http://echarts.baidu.com/'
            },

        {
          icon: 'ion-social-css3-outline',
          name: 'Css3',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
            }],
      show: false,
      app_left: 'images/atlas-app-left.png',
      app_center: 'images/atlas-app-center.png',
      app_right: 'images/atlas-app-right.png',
      video_path: 'videos/atlas-app.mp4',
      poster: 'images/atlas-app-center.png',
      buttons: []
        }, {
      title: 'Atlas Web',
      roles: ['sole front end dev', 'ui design'],
      description: 'A complete redesign to the product website, cutting the site load time in half and reducing the codebase to 10% of the original size. On this project, I utilized a Sass mixin library and grid system called Bourbon and Neat by Thoughtbot instead of the typical heavy css framework. I used css transforms to animate the wristband on the home page and experience page. Check it out!',
      techs: [{
          icon: 'ion-social-javascript-outline',
          name: 'Javascript',
          link: 'https://www.javascript.com/'
            }, {
          icon: 'ion-social-sass',
          name: 'Sass',
          link: 'http://sass-lang.com/'
            }, {
          icon: 'ion-social-html5-outline',
          name: 'Html5',
          link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
            },
        {
          icon: 'ion-social-css3-outline',
          name: 'Css3',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
            }],
      web_path: 'images/atlas-web.png',
      mobile_path: 'images/atlas-mobile.png',
      show: false,
      video_path: '',
      link: 'https://www.atlaswearables.com/',
      buttons: [{
        name: 'View Site',
        link: 'https://www.atlaswearables.com/'
            }]
        },{
      title: 'Press Customer App',
      roles: ['first dev hire', 'reactjs conversion'],
      description: 'As the first dev hire at Press, an Austin based startup, I established the front end development and deployment environment and converted the jquery based prototype to a robust, error-free react app. I also created a front end React template for future projects that contained components that would be used in every Press app, like navigation, etc. ',
      techs: [{
          icon: 'ion-social-javascript-outline',
          name: 'Javascript',
          link: 'https://www.javascript.com/'
            }, {
          icon: 'ion-redux',
          name: 'Redux',
          link: 'http://redux.js.org/'
            }, {
              icon: 'ion-react',
              name: 'React',
              link: 'https://facebook.github.io/react/'
          }, {
          icon: 'ion-social-sass',
          name: 'Sass',
          link: 'http://sass-lang.com/'
            }, {
          icon: 'ion-social-html5-outline',
          name: 'Html5',
          link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
            }, 
        {
          icon: 'ion-social-css3-outline',
          name: 'Css3',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
            }],
      show: false,
      web_path: 'images/press-web.png',
      mobile_path: 'images/press-mobile.png',
      video_path: 'videos/customer-web.mp4',
      poster: 'images/press-web.png',
      link: 'https://www.presscleaners.com/',
      buttons: [{
        name: 'View Site',
        link: 'https://www.presscleaners.com/'
            }]
        },{
          title: 'Press Provider App',
          roles: ['first dev hire', 'reactjs conversion'],
          description: 'The Press Provider App allows laundry providers to login and view current jobs, invoices, future payouts, modify their availability calendar, etc. It is also a way for providers to communicate with customers. This was also a conversion from the jQuery based prototype to a stable react/redux app.',
          techs: [{
              icon: 'ion-social-javascript-outline',
              name: 'Javascript',
              link: 'https://www.javascript.com/'
                }, {
              icon: 'ion-redux',
              name: 'Redux',
              link: 'http://redux.js.org/'
                }, {
                  icon: 'ion-react',
                  name: 'React',
                  link: 'https://facebook.github.io/react/'
              }, {
              icon: 'ion-social-sass',
              name: 'Sass',
              link: 'http://sass-lang.com/'
                }, {
              icon: 'ion-social-html5-outline',
              name: 'Html5',
              link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
                }, 
            {
              icon: 'ion-social-css3-outline',
              name: 'Css3',
              link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
                }],
          show: false,
          web_path: 'images/provider-web.png',
          mobile_path: 'images/provider-mobile.png',
          video_path: 'videos/provider-web.mp4',
          poster: 'images/provider-web.png',
          link: 'https://www.presscleaners.com/',
          buttons: [{
            name: 'View Site',
            link: 'https://www.presscleaners.com/'
                }]
            },{
      title: 'Press Mobile App UI/UX',
      roles: ['ui design', 'user flows', 'user experience design'],
      description: 'This was the first project I did for Press. After multiple meetings with the CTO and other members of the Press team, we reimagined the Press mobile app. I then materialized this concept in the form of high fidelity mockups and user flows in Sketch.',
      techs: [{
          icon: 'fa fa-diamond',
          name: 'Sketch',
          link: 'https://www.sketchapp.com/'
            }],
      show: false,
      web_path: 'images/press-ux.png',
      mobile_path: '',
  
      buttons: [{
        name: 'More Info',
        link: 'impavidum.me/#!/#contact'
            }]
        }, {
      title: 'gotchosen social exchange',
      roles: ['senior front end dev'],
      description: 'The Social Exchange by GotChosen Inc. is a growing social network, based on maintaining the privacy of their users. I built out a variety of features for them, including a post composer, news feed, infinite scrolling, internationalization, among others.',
      techs: [{
          icon: 'ion-social-javascript-outline',
          name: 'Javascript',
          link: 'https://www.javascript.com/'
            }, {
          icon: 'ion-social-angular-outline',
          name: 'AngularJS',
          link: 'https://angularjs.org/'
            }, {
          icon: 'ion-social-sass',
          name: 'Sass',
          link: 'http://sass-lang.com/'
            }, {
          icon: 'ion-social-html5-outline',
          name: 'Html5',
          link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
            },
        {
          icon: 'ion-social-css3-outline',
          name: 'Css3',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
            }],
      show: false,
      web_path: 'images/gotchosen.png',
      mobile_path: 'images/gotchosen-mobile.png',
      video_path: '',
      link: 'https://www.gotchosen.com/trending',
      buttons: [{
        name: 'View Site',
        link: 'https://www.gotchosen.com/trending'
            }]
        }, {
      title: 'Kiosk for Rickys Beauty Co',
      roles: ['front end dev', 'api'],
      description: 'A beauty product app for a touch screen kiosk located at Rickys Beauty Supply in NYC. Design mockups were provided for this project so the resulting app is a pixel perfect representatin of specified design. Segment was implented to track what products shoppers viewed.',
      techs: [{
          icon: 'ion-social-javascript-outline',
          name: 'Javascript',
          link: 'https://www.javascript.com/'
            }, {
          icon: 'ion-social-angular-outline',
          name: 'AngularJS',
          link: 'https://angularjs.org/'
            }, {
          icon: 'ion-social-sass',
          name: 'Sass',
          link: 'http://sass-lang.com/'
            }, {
          icon: 'ion-social-html5-outline',
          name: 'Html5',
          link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
            },
        {
          icon: 'ion-social-css3-outline',
          name: 'Css3',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
            }],
      web_path: 'images/rickys.png',
      show: false,
      video_path: '',
      link: 'https://rickys-kiosk.firebaseapp.com/#/',
      buttons: [{
        name: 'View Client',
        link: 'http://www.rickysnyc.com/ustorelocator/location/map/'
            }, {
        name: 'View App',
        link: 'https://rickys-kiosk.firebaseapp.com/#/'
            }]
        }, {
      title: 'Northrop Grumman',
      roles: ['front end dev', 'systems engineering'],
      description: 'Northrop Grumman is the second largest Defense Contractors in the world. I worked at Northrop for nearly three years within systems engineering and software development. My primary role was in R&D and as a development lead.',
      techs: [{
          icon: 'ion-social-javascript-outline',
          name: 'Javascript',
          link: 'https://www.javascript.com/'
            }, {
          icon: 'ion-social-html5-outline',
          name: 'Html5',
          link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
            },
        {
          icon: 'ion-social-css3-outline',
          name: 'Css3',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
            }],
      web_path: 'images/ng.png',
      show: false,
      video_path: '',
      link: 'https://secure.dmon2.com/',

      buttons: [{
        name: 'View Site',
        link: 'https://secure.dmon2.com/'
            }]
        }];

    $scope.projects = [{
      title: 'MixinAid',
      roles: ['front end dev', 'concept', 'api'],
      description: 'MixinAid is a crowd-sourced mixin library concept that allows you to share and collect sass mixins. Future plans involve a download of all your saved mixins into a single sass file for import into every project you launch as well as a pinterest style feed to better handle mismatched card heights from comments.',
      techs: [{
          icon: 'ion-social-javascript-outline',
          name: 'Javascript',
          link: 'https://www.javascript.com/'
            }, {
          icon: 'ion-social-angular-outline',
          name: 'AngularJS',
          link: 'https://angularjs.org/'
            }, {
          icon: 'ion-social-sass',
          name: 'Sass',
          link: 'http://sass-lang.com/'
            }, {
          icon: 'ion-social-html5-outline',
          name: 'Html5',
          link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
            },
        {
          icon: 'ion-social-css3-outline',
          name: 'Css3',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
            }],
      show: false,
      web_path: 'images/mixin-web.png',
      mobile_path: 'images/mixin-mobile.png',
      link: 'https://mixinaid.firebaseapp.com/#/',

      video_path: '',
      buttons: [{
        name: 'View Project',
        link: 'https://mixinaid.firebaseapp.com/#/'
            }]
        }, {
      title: 'Web to Mobile',
      roles: ['front end dev', 'concept', 'ui design'],
      description: 'Demonstrates that web apps can feel native within a mobile browser. The app listens for specific mobile media queries, within which it fills the entire screen, providing a more native mobile experience',
      techs: [{
          icon: 'ion-social-javascript-outline',
          name: 'Javascript',
          link: 'https://www.javascript.com/'
            }, {
          icon: 'ion-social-angular-outline',
          name: 'AngularJS',
          link: 'https://angularjs.org/'
            }, {
          icon: 'ion-social-sass',
          name: 'Sass',
          link: 'http://sass-lang.com/'
            }, {
          icon: 'ion-social-html5-outline',
          name: 'Html5',
          link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
            },
        {
          icon: 'ion-social-css3-outline',
          name: 'Css3',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
            }],
      show: false,
      web_path: 'images/calc-web.png',
      mobile_path: 'images/calc-mobile.png',
      link: 'https://calculation.firebaseapp.com/#/',

      buttons: [{
        name: 'View Demo',
        link: 'https://calculation.firebaseapp.com/#/'
            }]
        }, {
      title: 'Vanilla Javascript Game',
      roles: ['front end dev', 'concept', 'ui design'],
      description: 'A fun game built in vanilla javascript. The objective is to click on the ghosts, and their prototypical children that spawn from them, while avoiding them using ASWD controls. The game fundamentally uses recursion and prototypical inheritance to clone smaller sized ghosts, moving in different directions.',
      techs: [{
          icon: 'ion-social-javascript-outline',
          name: 'Javascript',
          link: 'https://www.javascript.com/'
            }, {
          icon: 'ion-social-html5-outline',
          name: 'Html5',
          link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
            },
        {
          icon: 'ion-social-css3-outline',
          name: 'Css3',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
            }, ],
      web_path: 'images/mario-web.png',
      mobile_path: '',
      show: false,
      video_path: '',
      link: 'https://boobash-dac20.firebaseapp.com/',
      buttons: [{
        name: 'Play Game',
        link: 'https://boobash-dac20.firebaseapp.com/'
            }]
        }];



  });

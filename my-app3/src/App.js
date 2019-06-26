import React from 'react';

import $ from 'jquery';
import anime from 'animejs';
import waypoint from './libs/jquery.waypoints.js';

import './styles/fonts.scss';
import './styles/animations.scss';

import './styles/generic.scss';
import './styles/svgobj.scss';
import './styles/brand.scss';
import './styles/threesixty.scss';
import './App.scss';

import Section from './components/Section';

//import 'bootstrap/dist/css/bootstrap.css';


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
*/


class App extends React.Component {
   constructor(props) {
      super(props);
      
      /*
      this.state = {
         data: 0
      }
      */
      //this.setNewNumber = this.setNewNumber.bind(this)
   };
   setNewNumber() {
      //this.setState({data: this.state.data + 1})
   }
   componentDidMount() {
    console.log('Component DID MOUNT!!!!')

/*
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/jquery.reel/1.3/jquery.reel.js";
  script.async = true;
  script.onload = () => this.scriptLoaded();

  document.body.appendChild(script);
  */


      var app  = {
        init : function(){
          console.log("test");

          this.menuNav();
          this.svgShapeMorph();
          this.augmentedReality();
          this.brandAnimate();

          this.imageAnim();
        },
        imageAnim: function() {

            var waypointHandler = {
              init: function(){
                var animationArray = ['vision0', 'work3', 'work4', 'culture5', 'culture6', 'culture7']

                var that = this;
                animationArray.map((item, key) =>
                  that.process(item)
                );

              },
              process: function(elem){

                  var $el = $('.'+elem);
                  //var $win = $(window);

                  $el.waypoint(function(direction) {
                    if (direction == 'down') {
                      $el.addClass("js-"+elem+"-animate");
                    } else {
                      $el.removeClass("js-"+elem+"-animate");
                    }
                  }, {
                    offset: '50%'
                  });

              }
            }

            waypointHandler.init();

        },
        brandAnimate: function(){

          var $brandlogo = $('.brand-logo');
          $brandlogo.addClass("js-brand-logo-animate");

          var $plusbrandlogo = $('.brand-logo .plus');
          $plusbrandlogo.addClass("js-plus-animate");

          setTimeout(function(){ 

            var $smithbrandlogo = $('.brand-logo .smith');
            $smithbrandlogo.addClass("js-smith-animate");

            var $nephewbrandlogo = $('.brand-logo .nephew');
            $nephewbrandlogo.addClass("js-nephew-animate");

          }, 2000);
          
        },
        menuNav: function(){

          function scrollIt(element) {  
            window.scrollTo({
              'behavior': 'smooth',
              'left': 0,
              'top': element.offsetTop
            });
          }

          $('.js-btn').on("click", function(event, salutation, name) {
            //find nav type
            //console.log("this click", $(this).data("type"))
            $('.js-btn').removeClass("active");
            $(this).addClass("active");
            var type = $(this).data("type");
            var firstChild = $("."+type).eq(0)[0];
            scrollIt(firstChild);
          });

        },
        augmentedReality: function(){
          var reel = {
            init: function(el, startFrame, totalFrames, path){
              this.el = el;
              this.totalFrames = totalFrames;
              this.frame = startFrame;
              this.path = path;
            },
            setImage: function(frame){
              //add zeros for smaller or larger digits
              if(frame < 10){
                frame = "000"+frame;
              }
              if(frame >= 10){
                frame = "00"+frame;
              }
              if(frame > 99){
                frame = "0"+frame;
              }

              //get path of image
              let pathx = this.path.replace("####", frame);
              const images = require(`./img/${pathx}`);

              //replace path of element
              $(this.el).attr("src", images);
            },
            next: function(){
              this.frame++;

              if(this.frame > this.totalFrames){
                this.frame = 1;
              }

              reel.setImage(this.frame);
              //console.log("frame", this.frame);
            },  
            prev: function(){
              this.frame--;

              if(this.frame < 1){
                this.frame = this.totalFrames;
              }
              //console.log("frame", this.frame);
              reel.setImage(this.frame);
            }
          }

          reel.init($('.threesixty'), 0, 40, 'S&N_360_mobile_01/S&N_360_ipad_01_####.png')

        /*
        $('.threesixty').reel({
          //indicator:   5, // For no indicator just remove this line
          frames:      32,
          frame:       1,
          rows:       16,
          row:         1,
          brake:    0.23,
          wheelable: true,
          //speed:       0.3,
          images:      'S&N_360_mobile_01/S&N_360_ipad_01_####.png',
        });
        */

          /*
          var $three = $('.threesixty').threeSixty({
            dragDirection: 'horizontal'
          });

          console.log("$three", $three)

          */

          
          var position = $(window).scrollTop();
          // should start at 0

          //evaluate scroll direction and spin the object accordingly
          $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll > position) {
              reel.next();
              //find next frame
            } else {
              reel.prev();
              //find prev frame
            }
            position = scroll;
          });
        

          //scrolll reel
          /*
                  $('#image').reel({
                    //indicator:   5, // For no indicator just remove this line
                    frames:      32,
                    frame:       1,
                    rows:       16,
                    row:         1,
                    brake:    0.23,
                    wheelable: true,
                    //speed:       0.3,
                    images:      'S&N_360_mobile_01/S&N_360_ipad_01_####.png',
                  });
          */

          /*
              var container = document.querySelector('.threesixty');

              var images = [
                'S&N_360_mobile_01/S&N_360_ipad_01_0001.png',
                'S&N_360_mobile_01/S&N_360_ipad_01_0002.png'
              ]

             var slider = threesixty(container, images, {
                interactive: true,
                currentImage: 0
              });
              slider.init()
          */

          /*
          $('#image').reel({
            images:      'S&N_360_mobile_01_compact/S&N_360_ipad_01_####.png',
            speed: 0,
            frames: 40,
            cw: true,
            throwable: 1.2
          });
          */

          /*
          var position = $(window).scrollTop();
          // should start at 0

          $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll > position) {
              console.log('scrollDown');
              $('.threesixty')
                .trigger('next');
            } else {
              console.log('scrollUp');
              $('.threesixty')
                .trigger('previous');
            }
            position = scroll;
          });
          */
        },
        svgShapeMorph: function(){

            let shapes1 = [
                {
                    d: "m119.500005,386.437509c217,-104.817685 143.720992,-191.000009 232.499997,-262.000009c88.779005,-71 101.499998,-38.817676 189.499998,108.000009c88,146.817685 -30.720993,203.000008 -120.499998,203.000008c-89.779004,0 -518.499997,55.817676 -301.499997,-49.000008z"
                },
                {
                    d: "m250.500005,375.437509c63,-81.817685 116.720992,-64.000009 163.499997,-80.000009c46.779005,-16 55.499998,-88.817676 121.499998,3.000009c66,91.817685 -24.720993,138.000008 -114.499998,138.000008c-89.779004,0 -233.499997,20.817677 -170.499997,-61.000008z"
                }
            ]


            var morph1 = anime({
                targets: '.morph-path1',
                d: [
                    {value: shapes1[0].d},
                    {value: shapes1[1].d}
                ],
                duration: 5000,
                direction: 'alternate',
                autoplay: true,
                easing: 'linear',
                elasticity: 100,
                loop: true
            });


            let shapes2 = [
                {
                    d: "m-9.937731,63.466227c0,-138.30483 18.85851,-202.01065 78.62516,-202.01065c59.76666,0 34.33493,99.2947 108.17765,250.33176c73.84272,151.03706 106.59491,336.91966 -74.51755,311.16352c-181.11245,-25.75614 -112.28526,-221.17978 -112.28526,-359.48463z"
                },
                {
                    d: "m-9.237731,63.466227c0,-138.30483 18.85851,-202.01065 78.62516,-202.01065c59.76666,0 34.33493,99.2947 108.17765,20.33176c73.84272,151.03706 106.59491,336.91966 -74.51755,311.16352c-181.11245,-25.75614 -112.28526,-221.17978 -112.28526,-359.48463z"
                }
            ]

            var morph1 = anime({
                targets: '.morph-path2',
                d: [
                    {value: shapes2[0].d},
                    {value: shapes2[1].d}
                ],
                duration: 5000,
                direction: 'alternate',
                autoplay: true,
                easing: 'linear',
                elasticity: 100,
                loop: true
            });

        }
      }

      app.init();
   }
   render() {


      var data = [{
            "title" : "Smith+Nephew",
            "subtitle": "Reintroducing our brand and our business",
            "text": "",  
            "align" : "left",
            "type": "vision",
            "image": "GettyImages-901670186_RET.png",
            "svg": [
              {
                "path": "M1268.19789,665.536487 C1297.17425,495.311258 1390.7026,423.360867 1368.67406,229.415728 C1343.76415,10.0298238 1162.49344,0.262802463 1158.79878,0.100018773 C1051.90924,-4.92302079 993.329124,180.789914 816.543123,210.021214 C639.757122,239.252514 464.992727,185.905973 361.49577,137.094121 C257.998813,88.282269 200.81291,63.678677 140.187953,81.2825703 C79.5629952,98.8864636 23.8410143,159.139684 6.71545141,222.020697 C2.29700822,238.438901 0.0394440947,255.364172 0,272.367367 C1.23155337,329.713736 28.4419118,432.988359 188.47414,510.659434 C260.508394,538.797758 431.392233,628.793883 589.519039,887.038579 L590.216145,885.78282 C660.809713,996.754786 711.210454,1100.65729 738.932024,1176.79355 C791.633213,1321.41523 824.722496,1415.94604 901.334411,1452.85143 C941.836251,1472.36222 973.833402,1479.87352 1004.76166,1478.92008 C1095.94308,1480.05956 1404.06379,1453.54907 1339.16325,1035.14848 C1323.36219,918.990692 1245.98346,796.042497 1268.19789,665.536487 Z",
                "fill": "#78C3ED",
                "transform": "translate(215.404933, 100) scale(1, -1) rotate(-130.000000) translate(-215.404933, -100)",
                "name": "scapula"
              }
            ],
            "threesixty": "",
            "lazyloadgallery":[]
         },{
          "title" : "Life Unlimited",
          "subtitle": "",
          "text": "These two words are our guide. And our engine. They remind us our bodies should never hold us back from who we are or what we can do.",
          "align" : "center",
          "type": "vision",
          "image": "",
          "svg": [],
          "threesixty": "",
          "lazyloadgallery":[]
        },
        {
          "title" : "We invent technology",
          "subtitle": "",
          "text": "We set the pace of progress, by designing and making some of the world's most innovative medical technologies.",
          "align" : "left",
          "type": "work",
          "image": "",
          "svg": [
            {
              "path": "M327.143861,1513.94064 C261.052045,1087.09248 255.820424,651.199133 311.670221,222.944212 C315.694085,192.180974 319.508684,159.44228 317.200791,128.439593 C314.970626,98.4785104 307.036499,70.1217372 288.053189,46.679659 C255.061092,5.9254027 195.25918,-7.25029033 143.660449,4.53061103 C60.7556987,23.4530852 -3.32119519,74.7550795 0.355886991,157.951709 C3.0823089,219.561992 12.1703819,277.167487 19.5066093,338.975315 C25.7845545,391.827743 30.1253052,448.900464 35.4944431,501.381745 C65.2638613,792.486142 95.0751325,1084.96139 79.3862485,1377.13133 C76.4983937,1430.9655 72.1038321,1485.52999 83.2307425,1538.3046 C94.363632,1591.09118 123.672668,1643.00377 172.240047,1667.99029 C220.819385,1692.9828 289.625665,1682.28541 317.888376,1636.09566 C339.76552,1600.34589 333.529428,1555.19175 327.143861,1513.94064 M129.418482,1295.92812 C125.657694,1295.92812 124.886404,1292.58181 124.414063,1286.61953 C123.684626,1277.51447 111.338,938.801584 102.859785,760.579534 C97.8912393,656.532864 96.0676457,599.298515 88.8450192,496.616706 C84.4803526,434.563442 65.9873197,330.09175 82.0349435,302.130068 C95.6132421,278.454526 128.264536,273.545818 147.020645,298.879544 C161.017473,317.796032 160.927788,343.099828 160.270099,366.470072 C157.926332,449.966013 152.622963,547.481705 148.228402,651.660072 C146.123795,696.760332 136.2166,922.902157 139.176203,1121.41753 C138.219563,1217.47857 139.90564,1281.85449 139.90564,1285.18882 C139.90564,1292.58181 133.167312,1295.92812 129.418482,1295.92812",
              "fill": "#78C3ED",
              "transform": "translate(-0.051485, 0.435919)",
              "name": "fibula-tibia"
            },
            {
              "path": "M340.79789,2035.74287 C376.159129,2003.09803 392.565981,1937.95211 389.815596,1881.5514 C387.065211,1825.13872 370.067713,1770.76859 355.098699,1716.53023 C293.916059,1494.77892 242.219562,1267.30727 236.301163,1036.55915 C224.67318,583.322965 301.767483,300.301175 271.364096,129.511751 C262.564057,80.0652981 235.67472,20.6816362 175.392965,4.91028433 C80.4360756,-19.9357344 27.910287,51.8529673 9.58830865,167.236009 C-25.0808597,385.615024 44.6989704,747.990733 54.1970458,821.366753 C98.2211024,1161.74164 163.878338,1507.02822 116.555013,1851.49419 C106.341002,1925.86453 93.579455,2005.15855 155.131995,2061.1759 C216.672603,2117.19325 305.436651,2068.38771 340.79789,2035.74287",
              "fill": "#FFD934",
              "transform": "",
              "name": "femur"
            }
          ],
          "threesixty": "S&N_360_mobile_01/S&N_360_ipad_01_0001.png",
          "lazyloadgallery":[]
        },
        {
          "title" : "We reinvent medicine",
          "subtitle": "",
          "text": "Through robotics, entirelynew treatments and widening global access to care, we turn the impossible into the everyday",
          "align" : "right",
          "type": "work",
          "image": "GettyImages-91156559 (1).png",
          "svg" : [
            {
              "path": "M967.370148,638.07965 C1142.04783,438.590016 894.599887,197.678476 703.523106,163.922773 C631.392697,151.195193 545.922384,159.86006 456.123347,181.505606 C276.66063,224.751615 39.4915557,337.257547 -61.9395097,399.943264 C-86.1778451,414.926956 -147.509916,463.861997 -134.107286,518.994904 C-120.557947,574.398532 -1.52004986,600.998307 118.079632,617.864775 C154.573217,623.016214 401.619854,639.573638 429.235235,642.749278 C466.642361,647.122703 760.220504,710.395537 876.076392,684.007691 C916.311809,674.847439 948.029164,660.09104 967.347577,638.034531",
              "fill": "#F84C40",
              "transform": "translate(445.404933, 424.211119) scale(1, -1) rotate(-35.000000) translate(-445.404933, -424.211119)",
              "name": "deltoid"
            }
          ],
          "threesixty": "",
          "lazyloadgallery":[]
        },
        {
          "title" : "We reboot belief",
          "subtitle": "",
          "text": "When we restore the body, we restore the whole person. Then help them live stronger ever after.",
          "align" : "left",
          "type": "work",
          "image": "GettyImages-925542250 (2).png",
          "svg": [
            {
              "path": "M577.487195,319.496907 C570.93219,136.410408 553.014808,36.8629239 542.00635,-8.56834504 C540.889865,-13.8295792 539.646411,-19.0247735 538.275987,-24.1539279 C512.146527,-121.658635 473.155838,-200.543444 420.918202,-227.518287 C389.033287,-243.983451 351.108969,-217.391639 326.4546,-191.319768 C271.492733,-133.233282 258.293668,-96.3000188 145.70439,-89.2142966 C101.978925,-86.4959893 51.5475304,-67.0326697 49.8620688,-1.06182821 C49.218565,23.8791121 60.8552524,44.6436857 81.2976934,66.793429 C107.071621,94.7167296 149.40704,117.061357 196.218505,160.781026 C219.372897,182.366654 241.657271,215.028766 267.430964,244.567051 C318.627998,303.247544 373.326463,380.286551 425.004141,486.319541 C445.580779,528.565158 493.551595,562.13768 527.956124,538.669698 C556.905914,518.859078 573.675586,443.622738 577.574585,347.164932 C577.972025,338.053923 577.897186,328.851569 577.487195,319.496907 Z",
              "fill": "#FFDA35",
              "transform": "translate(313.836715, 156.899498) scale(-1, 1) rotate(-239.000000) translate(-313.836715, -156.899498)",
              "name": "rhomboid"
            }
          ],
          "threesixty": "",
          "lazyloadgallery":[]
        },
        {
          "title" : "Built on three pillars",
          "subtitle": "",
          "text": "",
          "align" : "right",
          "type": "culture",
          "image": "GettyImages-1062184520.png",
          "svg": [
            {
              "path": "M768.064913,-121.833433 C738.167339,-124.422437 705.847885,-96.6531549 684.335905,-50.8882355 C683.296051,-48.5316729 682.249224,-46.19951 681.195424,-43.8917467 C678.03398,-36.6756488 674.54467,-29.6721366 670.727494,-22.8812103 C619.153111,73.1988813 545.369834,116.116682 518.347743,129.276145 C424.146033,182.915846 150.27446,304.043122 81.3072132,402.489176 C45.3634358,453.819592 80.9716794,547.84754 203.55074,515.829596 C301.442354,490.298926 405.223496,479.303213 439.412454,476.422343 C535.94106,468.282585 664.324102,533.570191 715.41478,523.596672 C732.431053,520.268682 750.766635,511.941843 768.528798,489.173375 C837.421283,400.8815 758.174736,236.732487 838.520089,-21.8708372 C857.198234,-81.972476 817.793046,-117.532354 768.064913,-121.833433 Z",
              "fill": "#F78E82",
              "transform": "translate(455.623105, 201.318045) scale(-1, 1) rotate(20.000000) translate(-455.623105, -201.318045)",
              "name": "stern"
            }
          ],
          "threesixty": "",
          "lazyloadgallery":[]
        },
        {
          "title" : "Care",
          "subtitle": "",
          "text": "Because when we have empathy for each other, our customers and their patient, we don't just fix bodies we reinvent lives.",
          "align" : "left",
          "type": "culture",
          "image": "GettyImages-860697758.png",
          "svg" : [
            {
              "path": "M694.37564,207.78859 C684.611952,150.469097 635.87289,117.325819 566.225248,110.877773 C523.360275,106.917056 441.821571,121.967779 398.940723,124.613538 C365.728307,126.704797 329.658226,127.449411 299.525738,125.627482 C247.865508,120.36765 212.525719,92.0881324 201.777724,82.3922978 C150.704903,33.9131249 79.120399,-40.1205923 30.4924689,26.5937204 C-36.3610126,118.292234 23.8087083,236.812722 49.5435678,331.584752 C61.3711251,375.231851 79.9141948,430.840314 87.2806197,498.172498 C89.1381019,515.187737 91.932263,707.155756 62.5141911,844.038127 C52.2583494,891.756842 51.2899186,941.550973 57.6720367,989.792503 C62.8634612,1029.08281 72.4683903,1069.95741 92.4720442,1104.58992 C102.966025,1122.73 117.730626,1140.88592 140.957091,1138.8422 C149.131453,1137.97584 156.925406,1134.9457 163.532643,1130.06525 C174.645784,1122.14381 183.40929,1110.92706 189.839036,1098.98154 C193.127555,1092.86444 195.950832,1086.50941 198.285023,1079.9701 C200.634659,1073.427 203.047798,1066.85221 204.810024,1060.13483 C205.794331,1056.96626 206.752178,1053.73959 207.683565,1050.45484 C240.499083,936.972384 281.316063,822.998799 355.329582,730.571514 C392.22521,684.532142 613.980002,437.716118 649.39917,382.028441 C669.910854,349.899106 707.20338,283.026365 694.37564,207.78859 Z",
              "fill": "#FFDA35",
              "transform": "translate(348.500000, 569.500000) rotate(-180.000000) translate(-348.500000, -569.500000)",
              "name": "latissimus-dorsi"
            },
            {
              "path": "M218.123517,29.8621801 C-3.33142753,-49.4773294 26.8847516,195.600323 33.2938619,248.077345 C39.1730851,296.293682 54.8426026,369.872442 76.7067523,450.661593 C110.304116,578.167017 184.879412,824.618678 261.056986,883.549756 C282.794972,902.357279 319.798752,918.706714 358.12725,870.654249 C382.098332,839.140304 402.057411,794.90733 416.553608,743.337909 C427.39106,704.815262 433.459528,638.459498 436.083731,618.025856 C439.679393,590.003655 450.756556,522.097405 451.0215,474.082758 C451.866796,318.794639 390.500827,91.5916968 218.123517,29.8621801 Z",
              "fill": "#B4BC00",
              "transform": "translate(239.669076, 458.191094) scale(-1, 1) rotate(22.000000) translate(-239.669076, -458.191094)",
              "name": "back-leg"
            }
          ],
          "threesixty": "",
          "lazyloadgallery":[]
        },
        {
          "title" : "Courage",
          "subtitle": "",
          "text": "Because when we're brave enough to think big, but humble enough to challenge our own conventions - innovation happens.",
          "align" : "right",
          "type": "culture",
          "image": "GettyImages-594201133_CUTOUT_ch.png",
          "svg": [
            {
              "path": "M89.1042951,365.12192 C152.671544,393.492889 444.578102,446.072004 503.130593,386.77617 C586.393589,302.494663 555.38957,77.7007817 452.929251,23.9000478 C346.5106,-32.00321 111.922823,17.5415145 46.8007236,100.883875 C-8.10585952,171.121861 -36.9432591,308.857564 89.1042951,365.12192",
              "fill": "#FFCC33",
              "transform": "",
              "name": "spine-yellow"
            },
            {
              "path": "M1.78357694,386.013224 C-1.52133757,237.853209 -8.55756024,-7.66083057 182.728738,0.843444906 C269.381239,4.70426377 347.904611,-6.9611117 390.76081,59.5500034 C437.256635,131.719968 468.732635,274.388426 482.246257,349.584202 C508.870392,497.69912 440.13079,516.688996 308.661843,513.604996 C153.32504,509.963839 4.2851833,498.113715 1.78357694,386.013224",
              "fill": "#F6817E",
              "transform": "",
              "name": "spine-salmon"
            },
            {
              "path": "M302.29086,152.975962 C463.154299,340.553776 312.838064,503.076422 243.799831,497.878652 C97.342117,486.854843 -16.4237789,52.6825716 1.95116702,17.6579824 C6.84678281,8.32701178 32.8280678,-2.65462146 46.3918805,0.576896098 C71.7905275,6.62981062 104.965935,16.2618272 138.656978,34.2329624 C145.061626,37.6477253 151.660001,40.9403246 158.275856,44.317275 C166.773631,48.6555364 194.277058,63.1857308 204.79513,71.0405581 C226.68047,87.3872086 285.88523,133.847182 302.29086,152.975962",
              "fill": "#EDCFD4",
              "transform": "translate(-0.000000, 0.000000)",
              "name": "spine-pink"
            }
          ],
          "threesixty": "",
          "lazyloadgallery":[]
        },
        {
          "title" : "Collaboration",
          "subtitle": "",
          "text": "Because when we join forces - internally and externally - we do more, and become an unstoppable force in our industry.",
          "align" : "left",
          "type": "culture",
          "image": "",
          "svg": [],
          "threesixty": "",
          "lazyloadgallery": [
            {
              "path": "https://images-na.ssl-images-amazon.com/images/I/81xAlejkAcL._SY679_.jpg"
            },
            {
              "path": "https://s3.amazonaws.com/cgccomics-production/gallery/amazing%20spider%20man%23300-9.9.jpg"
            },
            {
              "path": "https://imgc.artprintimages.com/img/print/marvel-comics-retro-the-invincible-iron-man-comic-book-cover-no-126-suiting-up-for-battle-aged_u-l-q133vvn0.jpg?h=550&w=550"
            },
            {
              "path": "https://images-na.ssl-images-amazon.com/images/I/81xAlejkAcL._SY679_.jpg"
            },
            {
              "path": "https://s3.amazonaws.com/cgccomics-production/gallery/amazing%20spider%20man%23300-9.9.jpg"
            },
            {
              "path": "https://imgc.artprintimages.com/img/print/marvel-comics-retro-the-invincible-iron-man-comic-book-cover-no-126-suiting-up-for-battle-aged_u-l-q133vvn0.jpg?h=550&w=550"
            },
            {
              "path": "https://images-na.ssl-images-amazon.com/images/I/81xAlejkAcL._SY679_.jpg"
            },
            {
              "path": "https://s3.amazonaws.com/cgccomics-production/gallery/amazing%20spider%20man%23300-9.9.jpg"
            },
            {
              "path": "https://imgc.artprintimages.com/img/print/marvel-comics-retro-the-invincible-iron-man-comic-book-cover-no-126-suiting-up-for-battle-aged_u-l-q133vvn0.jpg?h=550&w=550"
            },
            {
              "path": "https://images-na.ssl-images-amazon.com/images/I/81xAlejkAcL._SY679_.jpg"
            },
            {
              "path": "https://s3.amazonaws.com/cgccomics-production/gallery/amazing%20spider%20man%23300-9.9.jpg"
            },
            {
              "path": "https://imgc.artprintimages.com/img/print/marvel-comics-retro-the-invincible-iron-man-comic-book-cover-no-126-suiting-up-for-battle-aged_u-l-q133vvn0.jpg?h=550&w=550"
            },
            {
              "path": "https://images-na.ssl-images-amazon.com/images/I/81xAlejkAcL._SY679_.jpg"
            },
            {
              "path": "https://s3.amazonaws.com/cgccomics-production/gallery/amazing%20spider%20man%23300-9.9.jpg"
            },
            {
              "path": "https://imgc.artprintimages.com/img/print/marvel-comics-retro-the-invincible-iron-man-comic-book-cover-no-126-suiting-up-for-battle-aged_u-l-q133vvn0.jpg?h=550&w=550"
            }
          ]
        },
        {
          "title" : "",
          "subtitle": "",
          "text": "",
          "align" : "center",
          "type": "brand",
          "image": "",
          "svg": [],
          "threesixty": "",
          "lazyloadgallery":[]
        }
      ]

    const items = data.map((item, key) =>
      <Section key={key} data={item} index={key} />
    );

      return (
         <div>
            <div className="btns">
              <button className="btn js-btn" data-type="vision">Our vision</button>
              <button className="btn js-btn" data-type="work">Our work</button>
              <button className="btn js-btn" data-type="culture">Our culture</button>
              <button className="btn js-btn" data-type="brand">Our brand</button>
            </div>

            {items}
         </div>
      );
   }
}

export default App;

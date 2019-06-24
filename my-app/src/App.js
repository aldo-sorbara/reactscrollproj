import React from 'react';

import $ from 'jquery';
import anime from 'animejs';

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
    console.log('Component DID MOUNT!')


      var app  = {
        init : function(){
          console.log("test");

          this.menuNav();
          //this.imageAnimations();
          this.svgShapeMorph();
          //this.threeSixty();
        },
        imageAnimations: function(){

          var $joint = $('.joint');
          var $win = $(window);

          $joint.waypoint(function(direction) {
            if (direction == 'down') {
              $joint.addClass("js-joint-animate");
            } else {
              $joint.removeClass("js-joint-animate");
            }
          }, {
            offset: '50%'
          });
            

                
          var $dipper = $('.dipper');
          var $win = $(window);

          $dipper.waypoint(function(direction) {
            if (direction == 'down') {
              $dipper.addClass("js-dipper-animate");
            } else {
              $dipper.removeClass("js-dipper-animate");
            }
          }, {
            offset: '50%'
          });
            
                
          var $women = $('.women');
          var $win = $(window);

          $women.waypoint(function(direction) {
            if (direction == 'down') {
              $women.addClass("js-women-animate");
            } else {
              $women.removeClass("js-women-animate");
            }
          }, {
            offset: '50%'
          });
        },
        menuNav: function(){

          function scrollIt(element) {  
            window.scrollTo({
              'behavior': 'smooth',
              'left': 0,
              'top': element.offsetTop
            });
          }

          $('.js-btn').on("click", function(event, salutation, name ) {
            //find nav type
            //console.log("this click", $(this).data("type"))
            var type = $(this).data("type");
            var firstChild = $("."+type).eq(0)[0];
            scrollIt(firstChild);
          });

        },
        threeSixty: function(){
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

          $('#image').reel({
            images:      'S&N_360_mobile_01_compact/S&N_360_ipad_01_####.png',
            speed: 0,
            frames: 40,
            cw: true,
            throwable: 1.2
          });


          var position = $(window).scrollTop();
          // should start at 0

          $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll > position) {
              console.log('scrollDown');
              $('#image')
                .trigger('stepRight');
            } else {
              console.log('scrollUp');
              $('#image')
                .trigger('stepLeft');
            }
            position = scroll;
          });

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
  "subtitle": "",
  "text": "",  
  "align" : "left",
  "type": "vision",
  "image": "GettyImages-901670186_RET.png",
  "svg" : "1"
  },{
  "title" : "Life Unlimited",
  "subtitle": "",
  "text": "These two words are our guide. And our engine. They remind us our bodies should never hold us back from who we are or what we can do.",
  "align" : "center",
  "type": "vision",
  "image": "",
  "svg" : ""
  },
  {
  "title" : "We invent technology",
  "subtitle": "",
  "text": "We set the pace of progress, by designing and making some of the world's most innovative medical technologies.",
  "align" : "left",
  "type": "work",
  "image": "",
  "svg" : "3"
  },
  {
  "title" : "We reinvent medicine",
  "subtitle": "",
  "text": "Through robotics, entirelynew treatments and widening global access to care, we turn the impossible into the everyday",
  "align" : "right",
  "type": "work",
  "image": "GettyImages-91156559 (1).png",
  "svg" : "4"
  },
  {
  "title" : "We reboot belief",
  "subtitle": "",
  "text": "When we restore the body, we restore the whole person. Then help them live stronger ever after.",
  "align" : "left",
  "type": "work",
  "image": "GettyImages-925542250 (2).png",
  "svg" : "5"
  },
  {
  "title" : "Built on three pillars",
  "subtitle": "",
  "text": "",
  "align" : "right",
  "type": "culture",
  "image": "GettyImages-1062184520.png",
  "svg" : "6"
  },
  {
  "title" : "Care",
  "subtitle": "",
  "text": "Because when we have empathy for each other, our customers and their patient, we don't just fix bodies we reinvent lives.",
  "align" : "left",
  "type": "culture",
  "image": "GettyImages-860697758.png",
  "svg" : "7"
  },
  {
  "title" : "Courage",
  "subtitle": "",
  "text": "Because when we're brave enough to think big, but humble enough to challenge our own conventions - innovation happens.",
  "align" : "right",
  "type": "culture",
  "image": "GettyImages-594201133_CUTOUT_ch.png",
  "svg" : "8"
  },
  {
  "title" : "Collaboration",
  "subtitle": "",
  "text": "Because when we join forces - internally and externally - we do more, and become an unstoppable force in our industry.",
  "align" : "left",
  "type": "culture",
  "image": "",
  "svg" : ""
  },
  {
  "title" : "Smith+Nephew",
  "subtitle": "",
  "text": "",
  "align" : "center",
  "type": "brand",
  "image": "",
  "svg" : ""
  }
]

    const items = data.map((item, key) =>
      <Section key={key} data={item} />
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

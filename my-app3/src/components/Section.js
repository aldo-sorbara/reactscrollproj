import React from 'react';
import $ from 'jquery';
import LazyLoad from 'react-lazy-load';

class Section extends React.Component {
   constructor(props) {
      super(props);
   };
   componentDidMount() {
    console.log('Section Component DID MOUNT!')
   }
   render() {
    console.log("this", this.props);

    let imageOrientation = 'left'

    if(this.props.data.align === 'left') {
      imageOrientation = 'right'
    }

    const svgs = this.props.data.svg.map((item, key) =>
        <div key={key} className={"svg-wrapper " + item.name}>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000">
            <g>
              <path className="morph-path3" 
                d={item.path}
                fill={item.fill}
                transform={item.transform}
              />
            </g>
          </svg>
        </div>
    );

    const lazyloadgallery = this.props.data.lazyloadgallery.map((item, key) =>
      <LazyLoad 
        height={400} 
        debounce={false}
        key={key}
        className="lazyload-wrapper"
      >
        <img src={item.path} />
      </LazyLoad>
    );
    
    return (
       <div className={"section js-section " + this.props.data.type + (this.props.data.lazyloadgallery.length > 0 ? ' growing' : ' limited')}>

        {/*
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              1 of 2
            </div>
            <div className="col-sm-12 col-md-6">
              2 of 2
            </div>
          </div>
        </div>          
        */}

          <div className={"text-obj " + this.props.data.align}>
            {this.props.data.title.length > 0 &&
              <h2>{this.props.data.title}</h2>
            }     

            {this.props.data.subtitle.length > 0 &&
              <h3>{this.props.data.subtitle}</h3>
            }              

            {this.props.data.text.length > 0 &&
              <p>{this.props.data.text}</p>
            }
          </div>

          <div className="img-obj">

            {this.props.data.svg.length > 0 &&
              <div className={"svg-obj " + imageOrientation + "-position"}>

                <div className="svg-wrapper snap-top">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 2500 2500">
                    <g>
                      <path className="morph-path1" d="m250.500005,375.437509c63,-81.817685 116.720992,-64.000009 163.499997,-80.000009c46.779005,-16 55.499998,-88.817676 121.499998,3.000009c66,91.817685 -24.720993,138.000008 -114.499998,138.000008c-89.779004,0 -233.499997,20.817677 -170.499997,-61.000008z" fill="#a3d5d3"/>
                    </g>
                  </svg>
                </div>

                {svgs}

              </div>
            }
          
            {this.props.data.image.length > 0 &&
              <img className={imageOrientation + "-position " + this.props.data.type + this.props.index} src={require(`img/${this.props.data.image}`)} width="900" />
            }

            {this.props.data.threesixty.length > 0 &&
              <img className={"threesixty " + imageOrientation + "-position"} src={require(`img/${this.props.data.threesixty}`)} data-count="61" />
            }

          </div>

          {this.props.data.lazyloadgallery.length > 0 &&
            <div className="lazyload-gallery">
              {lazyloadgallery}
            </div>
          }

          {this.props.data.type === 'brand' &&
            <div className="brand-logo">
              <img className="plus" src={require(`logo/S&N_Plus.svg`)}  />
              <img className="smith" src={require(`logo/S&N_Smith.svg`)}  />
              <img className="nephew" src={require(`logo/S&N_Nephew.svg`)}  />
            </div>
          }

        </div>
    );
   }
}

export default Section;

import React from 'react';


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

      return (
         <div className={"section js-section " + this.props.data.type}>

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

              <div className={"btn-group pull-right" + (if(this.props.align === 'left') { return 'right'; } else { return 'left'; }) } />
              <img className="right-position women" src="https://www.womensoutreach.ca/wp-content/uploads/2017/02/Women-Hugging.png" width="500px" />


                  <img src={require(`img/${this.props.data.image}`)} width="60" />

                  <img className={imageOrientation + "-position"} src={require('img/GettyImages-860697758.png')} width="900" />
              {this.props.data.image}



               {this.props.data.image.length > 0 &&
                <img className={imageOrientation + "-position"} src={require(`img/${this.props.data.image}`)} width="900" />
                   }


                   <img id="image" className={imageOrientation + "-position"} src={require(`img/${this.props.data.threesixty}`)} width="900" />
                
                              {this.props.data.threesixty.length > 0 &&
                <div className={"threesixty " + imageOrientation + "-position"} data-path={require(`img/${this.props.data.threesixty}`)} data-count="61"></div>
              }
              
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
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 500 500">
                    <g>
                      <path className="morph-path1" d="m250.500005,375.437509c63,-81.817685 116.720992,-64.000009 163.499997,-80.000009c46.779005,-16 55.499998,-88.817676 121.499998,3.000009c66,91.817685 -24.720993,138.000008 -114.499998,138.000008c-89.779004,0 -233.499997,20.817677 -170.499997,-61.000008z" fill="#a3d5d3"/>
                    </g>
                  </svg>
                </div>
              }

              
              {this.props.data.image.length > 0 &&
                <img className={imageOrientation + "-position"} src={require(`img/${this.props.data.image}`)} width="900" />
              }
 
              {this.props.data.threesixty.length > 0 &&
                <img className={"threesixty " + imageOrientation + "-position"} src={require(`img/${this.props.data.threesixty}`)} data-count="61" />
              }

            </div>
          </div>
      );
   }
}

export default Section;

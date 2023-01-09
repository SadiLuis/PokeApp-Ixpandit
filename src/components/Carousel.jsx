import { Carousel } from 'antd';
import React from 'react';
const contentStyle = {
  height: '160px',
  width:'100px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
//   background: '#364d79',
};

export const CarouselApp = () => (
  <Carousel autoplay>
    <div >
      <h3 style={contentStyle}>
        <img style={{width:"15vw"}} src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/f5/latest/20150621184738/Ampharos.png/1200px-Ampharos.png" alt="" srcset="" />
      </h3>
      </div>
    <div>
      <h3 style={contentStyle}>
      <img style={{width:"15vw"}} src="https://pokemon.originalstitch.com/img/pokemon/301.png" alt="" srcset="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img style={{width:"15vw"}} src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/c/c8/latest/20151017105732/Turtwig.png/1200px-Turtwig.png" alt="" srcset="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img style={{width:"15vw"}} src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/e/e4/latest/20141012193327/Celebi.png/1200px-Celebi.png" alt="" srcset="" />
      </h3>
    </div>
  </Carousel>
);


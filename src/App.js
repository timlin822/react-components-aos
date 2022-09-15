import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ImageCard from 'components/imageCard/ImageCard';

import IMAGES_DATA from 'data/ImagesData.js';

import './App.css';

function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1000
    });
  },[]);

  return (
    <>
      <section className="section-padding bg-height bg-color1">
        <div className="container container-padding">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas asperiores quaerat libero earum repellat rerum ad! Excepturi sunt quasi eum?
        </div>
      </section>
      <section className="section-padding bg-height bg-color2">
        <div className="container container-padding">
          {IMAGES_DATA.map(image=>(
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      </section>
      <section className="section-padding bg-height bg-color3">
        <div className="container container-padding">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas asperiores quaerat libero earum repellat rerum ad! Excepturi sunt quasi eum?
        </div>
      </section>
    </>
  );
}

export default App;
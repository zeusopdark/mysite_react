import React from 'react';
import Card from './Card.jsx';
import data from './Data.jsx';

function Service() {
  return (
    <>
    <div className='my-5'>
      <h1 className='tab-center'> 
        Our Services
      </h1>
    </div>
    <div className='container-fluid mb-5'>
        <div className='row'>
           <div className='col-10 mx-auto'>
            <div className='row gy-4'>
      {data.map((item) => (
        <Card key={item.img} img={item.img} quote={item.quote} />
      ))}
      </div></div></div></div>
    </>
  );
}

export default Service;

import Image from 'next/image'
import React from 'react'
import {Carousel} from 'react-bootstrap';
import img_1 from '../../../public/work.jpg'

export const Carousels = () => {
  return (
    <div>
         <Carousel>
      <Carousel.Item style={{alignSelf:'center'}}>
        <Image
          className="d-block w-100 img-fluid"
          height={800}
          width={2000}
          src={img_1}
          />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 img-fluid"
          height={800}
          width={2000}
          src={img_1}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 img-fluid"
          height={800}
          width={2000}
          src={img_1}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

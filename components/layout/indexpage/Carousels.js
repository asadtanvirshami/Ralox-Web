import Image from 'next/Image';
import React from 'react'
import {Carousel} from 'react-bootstrap';
import img_1 from '../../../public/image.jpeg'
import img_2 from '../../../public/worktwo.jpg'
import img_3 from '../../../public/imagethree.jpg'

export const Carousels = () => {
  return (
    <div>
         <Carousel>
      <Carousel.Item style={{alignSelf:'center'}}>
        <Image
          className="d-block w-100 "
          src={img_1}
          />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          height={700}
          src={img_2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={img_3}
          alt="Third slide"
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

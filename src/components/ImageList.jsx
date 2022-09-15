import React from 'react'
import "./ImageList.css"
import ImageCard from './ImageCard'

export default function ImageList({images}) {
    const imgs = images.map(image=>
        <ImageCard image={image} key={image.id}/>
        )
  return (
    <div className='image-list'>{imgs}</div>
  )
}

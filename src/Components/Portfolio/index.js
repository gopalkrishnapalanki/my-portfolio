import React from 'react'
import { Link } from 'react-router-dom'

export default function Portfolio() {
  return (
      <>
           <section className='my-hei'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <h2 className='pt-3'>
               Lorem ipsum dolero ipaum
              </h2>
              <p className='pt-2'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <Link to = '/about'>
                <button type="button" className="btn btn-primary"> Lets Connect</button>
                </Link>
            </div>
            <div className='col-6  pt-3'>
             <img src='https://res.cloudinary.com/dlxfoztlz/image/upload/v1648622719/about_usku2k.jpg' className='bordered-image img-fluid'/>
            </div>

          </div>
        </div>
      </section>
      </>
  )
}

import React from 'react'

export default function Skills() {
  return (
      <div className='my-hei'>
          
          <section className='my-hei' style={{backgroundColor:'#e8e8e8'}}>
        <div className='container'>
          <div className='row'>
           
            <div className='col-6 '>
             <img src='assets/img/skills.png' className='bordered-image img-fluid'/>
            </div>
            <div className='col-6'>
              <h2 className='pt-3'>
               Skills Learned
              </h2>
              <ul className='pt-4'>
                <li><i class="fa-solid fa-circle-check icon-color pe-2"></i>HTML</li>
                <li><i class="fa-solid fa-circle-check icon-color pe-2"></i>CSS</li>
                <li><i class="fa-solid fa-circle-check icon-color pe-2"></i>Boootstrap</li>
                <li><i class="fa-solid fa-circle-check icon-color pe-2"></i>JavaScript</li>
                <li><i class="fa-solid fa-circle-check icon-color pe-2"></i>React</li>
              </ul>
              <p>
              It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

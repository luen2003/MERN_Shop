import React from 'react'

const Carousel = () => {
  return (
    <div className='container'>
      <div
        id='carouselExampleCaptions'
        className='carousel slide'
        data-bs-ride='carousel'
      >
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to={0}
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          />
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to={1}
            aria-label='Slide 2'
          />
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to={2}
            aria-label='Slide 3'
          />
        </div>
        <div className='carousel-inner'>
          <div
            className='carousel-item active'
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1561715276-a2d087060f1d")',
            }}
          >
            <div className='carousel-caption'>
              <h5>THE SHOP</h5>
              <p>
                The Shop, but Online
              </p>
            </div>
          </div>
          <div
            className='carousel-item'
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1472851294608-062f824d29cc")',
            }}
          >
            <div className='carousel-caption'>
              <h5>React Frontend</h5>
              <p>
                Built on reactjs to make it perfect
              </p>
            </div>
          </div>
          <div
            className='carousel-item'
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1607082350899-7e105aa886ae")',
            }}
          >
            <div className='carousel-caption'>
              <h5>Express</h5>
              <p>
                MERN stacked at its best
              </p>
            </div>
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='prev'
        >
          <span className='carousel-control-prev-icon' aria-hidden='true' />
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='next'
        >
          <span className='carousel-control-next-icon' aria-hidden='true' />
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel

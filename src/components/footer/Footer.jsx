import React from 'react'
import footerImgs from '../../assets/footer'
import "./footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <h3>Đối tác âm nhạc</h3>
      <div className="footer__partner">
        <div className='footer__partner__item'>
          <figure>
            <img src={footerImgs.partner1} alt="" />
          </figure>
        </div>
        <div className='footer__partner__item'>
          <figure>
            <img src={footerImgs.partner2} alt="" />
          </figure>
        </div>
        <div className='footer__partner__item'>
          <figure>
            <img src={footerImgs.partner3} alt="" />
          </figure>
        </div>
        <div className='footer__partner__item'>
          <figure>
            <img src={footerImgs.partner4} alt="" />
          </figure>
        </div>
        <div className='footer__partner__item'>
          <figure>
            <img src={footerImgs.partner5} alt="" />
          </figure>
        </div>
        <div className='footer__partner__item'>
          <figure>
            <img src={footerImgs.partner6} alt="" />
          </figure>
        </div>
        <div className='footer__partner__item'>
          <figure>
            <img src={footerImgs.partner7} alt="" />
          </figure>
        </div>
        <div className='footer__partner__item'>
          <figure>
            <img src={footerImgs.partner8} alt="" />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Footer
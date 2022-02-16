import React from 'react'
import "./about.css"
import Award from '../../img/award.png'

const about = () => {
  return (
    <div className="a">
      <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
              <img src="https://images.pexels.com/photos/3888149/pexels-photo-3888149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="a-card-img" />
          </div>
      </div>
      
      <div className="a-right">
          <h1 className="a-right-title">About Me</h1>

          <p className="a-right-sub">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, obcaecati.</p>
          <p className="a-right-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fuga at qui perferendis ipsa esse necessitatibus. Impedit, temporibus sunt facilis itaque ex enim iusto quia, voluptates quis aliquid minus officia.</p>
          <div className="a-award">
              <img src={Award} alt="" className="a-award-img" />
              <div className="a-award-texts">
                  <h3 className="a-award-texts-title">Geek Brains</h3>
                  <p className="a-award-texts-desc">Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, vero.</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default about

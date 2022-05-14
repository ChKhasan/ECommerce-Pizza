import React from 'react'
import { Link } from 'react-router-dom'

const OrderIsAccepted = () => {
  return (
    <div className=' container-fluid c-color pt-30 pb-30 ' >
      <div className='order_accepted row'>
        <div className='col-12 d-flex justify-content-center align-items-center flex-column'>
          <div style={{width: "380px"}} className="d-flex align-items-center flex-column mt-5 mb-5">
          <img src="../Images/Group 767.png" alt="" />
          <h3>Заказ №310202 принят</h3>
          <p>Спасибо за заказ! 
Примерное время доставки 45 минут. Статус отследить можно нажав на кнопку ниже</p>

<Link to="" className="button_group_profile button_group_profile_active">Отследить заказ</Link>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default OrderIsAccepted
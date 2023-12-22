import React from 'react';

const Order = ({ item, onDelete }) => {
  return (
    <div className='order'>
      <table>
        <tbody>
          <tr>
            <td rowSpan="2">
              <a href="product.html">
                <img src={"./img/" + item.img} alt="" />
              </a>
            </td>
            <td className='td-title'>
              <a href="product.html">{item.title}</a>
            </td>
            <td rowSpan="2">
              <i
                className="bi bi-x-circle text-danger delete-button"
                onClick={() => onDelete(item.id)}
              ></i>
            </td>
          </tr>
          <tr>
            <td>
              <div className="price">
                <b>{item.price}</b>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <hr color='gray' />
    </div>
  );
};

export default Order;

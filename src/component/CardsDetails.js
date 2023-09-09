import React from 'react'
import Table from 'react-bootstrap/Table'
import './style.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { DLT ,ADD,REMOVE} from '../redux/actions/action'
import { useEffect, useState } from 'react'
const CardsDetails = () => {
  const [data, setData] = useState([]);
  // console.log(data)
  const { id } = useParams()
  // console.log(id)
  const history = useNavigate()
  const dispatch = useDispatch()
  const getdata = useSelector((state) => state.cartreducer.carts)
//  delete icon operation
  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id
    });
    setData(comparedata)
  }
  // add data
  const send =(e)=>{
    dispatch(ADD(e));

  }

  const dit =(id)=>{
    dispatch(DLT(id))
    history("/")
  }


  // remove on data using - button
  const remove =(item)=>{
    dispatch(REMOVE(item))
  }


  useEffect(() => {
    compare()
  }, [id])

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Details Page</h2>

        <section className="container mt-3">
          <div className="iteamsdetails">
            {
              data.map((ele) => {
                return (
                  <>
                    <div className="items_img">
                      <img src={ele.imgdata} alt="" />
                    </div>
                    <div className="details">
                      <Table>
                        <tr>
                          <td>
                            <p> <strong>Resturant</strong>:{ele.rname}</p>
                            <p> <strong>Price</strong>:<span>&#8358;</span>{ele.price}</p>
                            <p> <strong>Dishes</strong>:{ele.address}</p>
                            <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                              <span style={{fontSize:24}} onClick={ ele.qnty <=1 ? ()=>dit(ele.id) :()=>remove(ele)}>-</span>
                              <span style={{fontSize:22}}>{ele.qnty}</span>
                              <span style={{fontSize:24}} onClick={()=>send(ele)}>+</span>
                            </div>
                            <p> <strong>Total</strong>:<span>&#8358;</span>{ele.price * ele.qnty}</p>
                          </td>
                          <td>
                            <p><strong>Rating:</strong><span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{ele.rating} ★</span></p>
                            <p><strong>Order Review :</strong> <span > {ele.somedata}	</span></p>
                            <p><strong>Remove :</strong> <span ><i className='fas fa-trash' onClick={() => dit(ele.id)} style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i>	</span></p>
                          </td>
                        </tr>
                      </Table>
                    </div>
                  </>
          )
                })
              }
              </div>

        </section>
      </div>
    </>
  )
}

export default CardsDetails
import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {


  const [data,setData] = useState([
    {
      id:1,
      green : false,
      backId:0
    },
    {
      id:2,
      green : false,
      backId:0


    },
    {
      id:3,
      green : false,
      backId:0

    },
  ])
  const [data2,setData2] = useState([
    {
      id:4,
      green : false,
      backId:0,
      visible:true


    },
    {
      id:5,
      green : false,
      backId:0,
      visible : false


    },
    {
      id:6,
      green : false,
      backId:0,
      visible:false


    }
  ])
  const [data3,setData3] = useState([
    {
      id:7,
      green : false,
      backId:0

    },
    {
      id:8,
      green : false,
      backId:0

    },
    {
      id:9,
      green : false,
      backId:0


    },
  ])

  const [order,setOrder] = useState(0);

  let handleClick = (e,num,idx)=>{


    if(num === '1'){
      let arr = data;
      arr.forEach(element => {
        if(element.id === idx){
          if(element.green)return;
            element.green = true;
            element.backId = order +1;
            setOrder(order+1)
        }
      });
      setData([
        ...arr
      ]);
    }
    if(num === '2'){
      let arr = data2;
      arr.forEach(element => {
        if(element.id === idx){
          if(element.green)return;
            element.green = true;
            element.backId = order+1;
            setOrder(order+1) 
        }
      });
      setData2([
        ...arr
      ]);
    }
    if(num === '3'){
      let arr = data3;
      arr.forEach(element => {
        if(element.id === idx){
          if(element.green)return;

            element.green = true;
            element.backId = order+1;
            setOrder(order+1)

        }
      });
      setData3([
        ...arr
      ]);
    }
  }

  useEffect(()=>{
    let ans = true;
    for(let i=0;i<data.length;i++){
      if(!data[i].green){
        ans = false;
      }
    }
    for(let i=0;i<data3.length;i++){
      if(!data3[i].green){
        ans = false;
      }
    }
    if(!data2[0].green){
      ans = false;
    }

    if(ans){
      let arr1 = data;
      let arr2 = data2;
      let arr3 = data3;
      let idx = 7;
      if(idx===7){
        const id = setInterval(() => {
      let move = true;

            arr1.forEach(ele =>{
              if(ele.backId === idx && move){
                ele.green = false;
                idx--;
                setOrder(order-1);
                setData([
                  ...arr1
                ])
                move = false;
              }
            })
            
            arr2.forEach(ele =>{
              if(ele.backId === idx && move){
                ele.green = false;
                idx--;
                setOrder(order-1);
  
                setData2([
                  ...arr2
                ])
                move = false;

              }
            })
           
            arr3.forEach(ele =>{
              if(ele.backId === idx && move){
                ele.green = false;
                idx--;
                setOrder(order-1);
  
                setData3([
                  ...arr3
                ])
                move = false;

              }
            })
           console.log(idx)
          if(idx < 0){
            clearInterval(id)
            setOrder(0);
            arr1.forEach(ele =>{
              ele.backId = 0;
              setData([
                ...arr1
              ])
            })
            
            arr2.forEach(ele =>{
              ele.backId = 0;
              setData2([
                ...arr2
              ])
              
            })
           
            arr3.forEach(ele =>{
                ele.backId = 0;
                setData3([
                  ...arr3
                ])
              
            })
            console.log(data)
            console.log(data2)
            console.log(data3)
          }
          
        }, 1000);
      }
      
    }
  },[data,data2,data3])
  return (
    <React.Fragment>
        <div className='align-row'> 

      {
          data.map((product) =>{
            return(
              product.green === true  ?

              <div key={product.id} onClick={(e) =>handleClick(e,'1', product.id)} className='box bg-green'>
                </div>
                : 
                <div key={product.id} onClick={(e) =>handleClick(e,'1', product.id)} className='box '>
                </div>
            )
          })
      }
        </div>

      <br/>
      <div className='align-row'> 

      {
        data2.map((product) =>{
          return(
            product.green  && product.visible ?

            <div key={product.id} onClick={(e) =>handleClick(e,'2', product.id)} className='box bg-green'>
              </div>
              : ( product.visible ? 
              <div key={product.id} onClick={(e) =>handleClick(e,'2', product.id)} className='box '>
              </div> : 
              <div key={product.id} onClick={(e) =>handleClick(e,'2', product.id)} className='box pointer-none'>
              </div>
              )
          )
        })
      }
        </div>

      <br/>
      <div className='align-row'> 


      {
        data3.map((product) =>{
          return(
            product.green  ?

              <div key={product.id} onClick={(e) =>handleClick(e,'3', product.id)} className='box bg-green'>
                </div>
                : 
                <div key={product.id} onClick={(e) =>handleClick(e,'3', product.id)} className='box '>
                </div>
          )
        })
      }
        </div>

      </React.Fragment>

  );
}

export default App;

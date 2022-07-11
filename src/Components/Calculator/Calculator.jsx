import React from "react";
import { useState } from "react";
import {ToastContainer,toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./Calculator.css"

function Calculator(){  
    

    let [firstNum,SetFirstNum] = useState("")
    let [SecondNum,SetSecNum] = useState("")
    
    
    const handleInput = (evt)=>{ 
        if(evt.target.id === "fir"){
            firstNum = evt.target.value ; 
            var validfir = false
             
            
             


            for (var i = 0; i < firstNum.length; i++) {
               
                if((firstNum.charCodeAt(i)===45 && i===0 )|| (firstNum.charCodeAt(i)===46 && i!==0) || (firstNum.charCodeAt(i)>=48 && firstNum.charCodeAt(i)<=57)  ){
                    validfir = true 
                }
                else{
                    console.log(firstNum.charCodeAt(i))
                    validfir = false 
                    toast.error('Please Enter a valid Numbers', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                    SetFirstNum("") 
                    
                } 

               
    

              }
            if(validfir === true){
            SetFirstNum(firstNum);
            }
            else{
             SetFirstNum("")
            }
            
             
            
        }
        else if (evt.target.id === "sec"){
            SecondNum = evt.target.value ;  
            var valid = false 
            
             


            for (i = 0; i < SecondNum.length; i++) {
               
                if((SecondNum.charCodeAt(i)===45 && i===0 )|| (SecondNum.charCodeAt(i)===46 && i!==0) || (SecondNum.charCodeAt(i)>=48 && SecondNum.charCodeAt(i)<=57)  ){
                  valid = true 
                }
                else{
                    console.log(SecondNum.charCodeAt(i))
                    valid = false 
                   
                    SetSecNum("") 
                    
                } 

               
    

              }
            if(valid === true){
            SetSecNum(SecondNum);
            }
            else{
                toast.error('Please Enter a valid Numbers', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
             SetSecNum("")
            }
             
        }
        else if (evt.target.id === "formres"){  
            evt.preventDefault()
            
            firstNum = parseFloat(firstNum)
            SecondNum = parseFloat(SecondNum)
            let res = firstNum+SecondNum
            toast.success('The Sum of two number is '+res, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            
          SetFirstNum("")
          SetSecNum("")
             
        }
    }

    return (
        
    <main>
    <h3>Calculator Demo</h3>
    <div id="container"> 
    
      <form action="" onSubmit={handleInput} id="formres">
        <img src="https://images.unsplash.com/photo-1625225233840-695456021cde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FsY3VsYXRvcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="calculator logo"/> <br></br>
        <input type="text" value={firstNum}  id="fir" required placeholder="Enter Your First Number" onChange={handleInput}/><br></br>
        <input type="text" value={SecondNum} id="sec" required placeholder="Enter Your Second Number" onChange={handleInput} /><br></br>
        <input type="submit" value="Result" /> <br></br>
        <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover/> 
        
      </form>
    </div>
    </main>
    )

}

export default Calculator ; 
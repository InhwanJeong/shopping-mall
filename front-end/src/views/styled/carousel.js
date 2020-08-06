import styled from "styled-components";

export default styled.div`
body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}
.slider{    
    width: 100%;
    height: 500px;
    position:relative;
    z-index:0;
  }
  .slider__item{
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 48px;
    position:absolute;
    opacity:0;
    transition: all 1s ease-in-out;
  }
  img{
    width: inherit;
    height: inherit;
  }
  .slider__item:nth-child(odd){
    background-color:royalblue;
  }
  .slider__item:nth-child(even){
    background-color:blueviolet;
  }
  .showing{
    z-index:1;
    opacity:1;
  }


  .circle_slider{
    transform: translate(65%, 55%);                       
    width: 50%;
    height: 500px;            
    z-index: 2;            
    /* position: relative;*/
    position: absolute;         
}

.circle_slider_item{                       
    border-radius: 50px;       
    position: absolute;
    transition: all 1s ease-in-out;
}

.circle_slider_item:nth-child(1){    
    top: 0px;
    left: 0px;    
}

.circle_slider_item:nth-child(1)>img{
    border: 1px solid rgb(161, 156, 156);
    width: 50px;
    height: 50px;
    border-radius: 50px; 
    -moz-border-radius: 50px; 
    -khtml-border-radius: 50px; 
    -webkit-border-radius: 50px;
    opacity: 0;     
    transition: all 1s ease-in-out;
}

.circle_slider_item:nth-child(2){    
    top: 50px;
    left: 50px;    
}

.circle_slider_item:nth-child(2)>img{
    border: 1px solid rgb(161, 156, 156);
    width: 50px;
    height: 50px;    
    border-radius: 50px; 
    -moz-border-radius: 50px; 
    -khtml-border-radius: 50px; 
    -webkit-border-radius: 50px;    
    transition: all 1s ease-in-out;
}
.circle_slider_item:nth-child(3){    
    top: 90px;
    left: 120px;    
}
.circle_slider_item:nth-child(3)>img{
    width: 70px;
    height: 70px;    
    border-radius: 70px; 
    -moz-border-radius: 70px; 
    -khtml-border-radius: 70px; 
    -webkit-border-radius: 70px;
    transition: all 1s ease-in-out;
}

.circle_slider_item:nth-child(4){
    top: 120px;
    left: 200px;
}

.circle_slider_item:nth-child(4)>img{
    width: 100px;
    height: 100px;    
    border-radius: 100px; 
    -moz-border-radius: 100px; 
    -khtml-border-radius: 100px; 
    -webkit-border-radius: 100px;
    transition: all 1s ease-in-out;
}

.circle_slider_item:nth-child(5){
    top: 90px;
    left: 310px;
}

.circle_slider_item:nth-child(5)>img{
    width: 70px;
    height: 70px;    
    border-radius: 70px; 
    -moz-border-radius: 70px; 
    -khtml-border-radius: 70px; 
    -webkit-border-radius: 70px;   
    transition: all 1s ease-in-out;
}

.circle_slider_item:nth-child(6){
    top: 50px;
    left: 400px;
}

.circle_slider_item:nth-child(6)>img{
    border: 1px solid rgb(161, 156, 156);
    width: 50px;
    height: 50px;    
    border-radius: 50px; 
    -moz-border-radius: 50px; 
    -khtml-border-radius: 50px; 
    -webkit-border-radius: 50px;   
    transition: all 1s ease-in-out;
}

.circle_slider_item:nth-child(7){
    top: 0px;
    left: 450px;
}

.circle_slider_item:nth-child(7)>img{
    border: 1px solid rgb(161, 156, 156);
    width: 50px;
    height: 50px;    
    border-radius: 50px; 
    -moz-border-radius: 50px; 
    -khtml-border-radius: 50px; 
    -webkit-border-radius: 50px;   
    transition: all 1s ease-in-out;
    opacity: 0;
}`;
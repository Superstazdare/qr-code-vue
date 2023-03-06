<template>
    <div class="container">
        <div class="main">
            <div class="image">
                <img src="../assets/image/image-qr-code.png" alt="">
            </div>
         <h1>{{ title }}</h1>
         <p>{{ paragraph }}</p>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data(){
        return{
        title: "Improve your front-end skills by building projects",
        paragraph: "Scan the Qr code to visit Frontend Mentor and take your coding skills to the next level"    
        }
        
    }
  }
  </script>
  
  
  <style scoped>

.container{
    padding: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 16rem;
    height: 25rem;
    background-color: #ffffff;
    border-radius: 10px;
}
.image img{
    width: 100%;
    border-radius: 10px;
}

h1 {
    color: rgb(14, 9, 51);
    font-size: 20px;
}
p {
    color: gray;
    font-size: 15px;
}
  </style>
  
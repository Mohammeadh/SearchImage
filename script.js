const access_key="0VycPliKUAlhdypUg8NxANXKmGozOg-hkSgsos9z4l8";

let input=document.getElementById("inp");
let search_btn=document.getElementById("search");
let container=document.getElementById("container")
let form=document.querySelector('form')

let input_data=" ";
let page=1;

async function searchImage(){
    input_data=input.value;
    const url=`https://api.unsplash.com/search/photos?pages=${page}&query=${input_data}&client_id=${access_key}`;

    const response=await fetch(url)
    // console.log(response)
    const data=await response.json()
    console.log(data)
    if (data.total==0){
        container.innerHTML=`<div class="div-1">
        <img src="https://images.unsplash.com/photo-1687226014417-b22aaaa288e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="image">
        <div><label><a href="https://unsplash.com/" target="_blank">Mountain</a></label></div> 
    </div>

    <div class="div-1">
        <img src="https://images.unsplash.com/photo-1662010021854-e67c538ea7a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="image">
      <div><label><a href="https://unsplash.com/" target="_blank">CAR</a></label> </div> 
    </div>
    
    <div class="div-1">
        <img src="https://plus.unsplash.com/premium_photo-1672976129906-5982aa060951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="image">
       <div> <label><a href="https://unsplash.com/" target="_blank">Chineese Food</a></label></div>
    </div>

    <div class="div-1">
        <img src="https://images.unsplash.com/photo-1687447440725-0e48ce60f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="image">
       <div><label><a href="https://unsplash.com/" target="_blank">Mountain</a></label></div> 
    </div>

    <div class="div-1">
            <img src="https://images.unsplash.com/photo-1687447440725-0e48ce60f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="image">
         <div><label> <a href="https://unsplash.com/" target="_blank">Mountain</a></label> </div> 
        </div>  

        <div class="div-1">
            <img src="https://images.unsplash.com/photo-1662010021854-e67c538ea7a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="image">
          <div> <label><a href="https://unsplash.com/" target="_blank">CAR</a></label> </div>
        </div>

        <div class="div-1">
            <img src="https://plus.unsplash.com/premium_photo-1672976129906-5982aa060951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="image">
          <div> <label><a href="https://unsplash.com/" target="_blank">Chineese Food</a></label> </div>
        </div>
        <div class="div-1">
            <img src="https://images.unsplash.com/photo-1687447440725-0e48ce60f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="image">
           <div><label><a href="https://unsplash.com/" target="_blank">Mountain</a></label></div> 
        </div>
`
    }
    else{
        
    const results=data.results

    if(page===1){
        container.innerHTML=""; 
    }
    results.map((res)=>{
        const imageWrapper=document.createElement('div');
        imageWrapper.classList.add("div-1")
        const image=document.createElement('img');
        image.src=res.urls.small
        image.alt=res.alt_description
        const image_link=document.createElement('a')
        image_link.href=res.links.html;
        image_link.target="_blank";
        image_link.textContent=res.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(image_link);
        container.appendChild(imageWrapper)
    });
    
    // page=page+1;
    // if(page>1){
    //   more_btn.style.display="block";
    //   more_btn.style.marginLeft="35%";
    // }
}
    }

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log("invoked")
    page=1;
    searchImage()
})
  
  


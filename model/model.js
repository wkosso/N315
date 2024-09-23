const homePage =`<div class="home">
  
    <div class="home-section">
    <div class="homeing-box">
    <div class="home-text">Welcome To Fall Season.</div>

</div>

<div class="home-cont">

<div class="home-contimg1"></div>
<div class="home-conttext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet posuere metus. Ut vel nisl vitae lectus molestie auctor. Etiam ultrices pellentesque enim ac malesuada. Duis in purus eu tortor lacinia hendrerit. Vestibulum tristique sapien id purus sagittis, vel euismod velit mattis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tincidunt nibh lacinia risus facilisis porta. Duis convallis nec justo ut viverra. Quisque pulvinar velit lorem, eget finibus orci mattis at.</div>
</div>




<div class="home-cont">

<div class="home-contimg2"></div>
<div class="home-conttext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet posuere metus. Ut vel nisl vitae lectus molestie auctor. Etiam ultrices pellentesque enim ac malesuada. Duis in purus eu tortor lacinia hendrerit. Vestibulum tristique sapien id purus sagittis, vel euismod velit mattis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tincidunt nibh lacinia risus facilisis porta. Duis convallis nec justo ut viverra. Quisque pulvinar velit lorem, eget finibus orci mattis at.</div>
</div>

<div class="home-cont">

<div class="home-contimg3"></div>
<div class="home-conttext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet posuere metus. Ut vel nisl vitae lectus molestie auctor. Etiam ultrices pellentesque enim ac malesuada. Duis in purus eu tortor lacinia hendrerit. Vestibulum tristique sapien id purus sagittis, vel euismod velit mattis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tincidunt nibh lacinia risus facilisis porta. Duis convallis nec justo ut viverra. Quisque pulvinar velit lorem, eget finibus orci mattis at.</div>
</div>
    </div>






</div>`;

const aboutPage = ` <div class="about">
    <div class="about-section">
    
    <div class="about-img-box">
    <div class="about-text-box">
    <p class="about-text-box pone">About Us</p>
    Embrace the Beauty of Fall
    </div>
    
    
    
    
    </div>

    <div class="about-main">
    
        <div class="main-text">
        
        <div class="main-text1">
        Behind The Success.
        
        </div>
        
        <div class="main-text2">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        
        </div>
        
        
        </div>
        <div class="own"><div class="figure-headtitle">Chris Springer</div>
<div class="figure-headimg"></div></div>

        </div>
    </div>
    </div>`;

const productsPage = `<div class="products">
    <div class="products-section">
        
    <div class="prod-img-box">
    <div class="about-text-box">
    <p class="about-text-box pone">products</p>
    Colors of Fall: Leaf Varieties
    </div>
        </div>
        
       <div class="flex-prodbox">
<div class="prod-title">Fall Leaf Guide: Discover the Colors</div>
 <div class="prodwrap">
 
  <div class="prodwrap1">
    <div class="prod-mainimg"></div>
    <div class="prod-maintext">Maple Leaves</div>
  </div>
 
 <div class="prodwrap1">
    <div class="prod-mainimg2"></div>
    <div class="prod-maintext">Oak Leaves</div>
  </div>

  <div class="prodwrap1">
    <div class="prod-mainimg3"></div>
    <div class="prod-maintext">Birch Leaves</div>
  </div>

  <div class="prodwrap1">
    <div class="prod-mainimg4"></div>
    <div class="prod-maintext">Aspen Leaves</div>
  </div>

  <div class="prodwrap1">
    <div class="prod-mainimg5"></div>
    <div class="prod-maintext">Hickory Leaves</div>
  </div>

  <div class="prodwrap1">
    <div class="prod-mainimg6"></div>
    <div class="prod-maintext">Beech Leaves</div>
  </div>
 </div>
       



       
       </div> 




    </div>






    </div>`;

const contactPage = `<div class="products">
    <div class="products-section">
    <form class="form-section">
  <label for="fname">Name:</label><br>
  <input type="text" id="fname" name="fname" ><br>
  <label for="lname">Email:</label><br>
  <input type="text" id="fname" name="lname" "><br><br>

   <label for="lname">Phone:</label><br>
  <input type="text" id="fname" name="lname" "><br><br>
     <input type="submit" class="submit" value="Submit">
</form> 
    </div>


  </div>`;

export function changePage(pageName){
    let pageVarName= pageName + "Page";
console.log(pageVarName)
    $("#app").html(eval(pageVarName));
 }
 
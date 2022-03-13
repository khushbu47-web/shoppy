import React from 'react'




export default function Linkhome(){
    return(

       
    <>
    <div className="linking">
    <div className="container">
    <div className="menu_link">
        <ul className="menu">
            <li>
                
            <a href="/mobiles" target="_blank"><img src="image/mob1.jpg" alt="mobile"/>
                    <br/>
                    <span>Mobiles</span>
                    </a>
                
            </li>
            
            <li>
                
                <a href="/cloths" target="_blank"><img src="image/cloth_final.jpg" alt="cloth"/>
                    <br/>
                    <span>Cloths</span>
                    </a>
            </li>
            <li>
                <a href="/electronics" target="_blank">
                    <img src="image/electronic.jpg" alt="cloth"/>
                    <br/>
                    <span>Electronics</span>
                </a>
            </li>
            <li>
                <a href="/appliances" target="_blank">
                    <img src="image/washing2.jpg" alt="cloth"/>
                    <br/>
                    <span>Appliances</span>
                </a>
            </li> 
           <li>
                <a href="/cosmetics" target="_blank">
                    <img src="image/cosmetic.jpg" alt="cloth"/>
                    <br/>
                    <span>Cosmetic</span>
                </a>
            </li> 
        </ul>
      
    </div>
</div>
</div>

    </>
    )
}
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import './GalleryPage.css';
import train1 from "../assets/images/train1.jpeg"
import train2 from "../assets/images/train2.jpeg"
import train3 from "../assets/images/train3.jpeg"
import train4 from "../assets/images/train4.jpeg"
import train5 from "../assets/images/train5.jpeg"
import train6 from "../assets/images/train6.jpeg"
import train7 from "../assets/images/train7.jpeg"
import train8 from "../assets/images/train8.jpeg"
import train9 from "../assets/images/train9.jpeg"
import train10 from "../assets/images/train10.jpeg"
import train11 from "../assets/images/train11.jpeg"
import train12 from "../assets/images/train12.jpeg"
import train13 from "../assets/images/train13.jpeg"
import train14 from "../assets/images/train14.jpeg"
import train15 from "../assets/images/train15.jpeg"
import train16 from "../assets/images/train16.jpeg"
import train17 from "../assets/images/train17.jpeg"
import train18 from "../assets/images/train18.jpeg"
import train19 from "../assets/images/train19.jpeg"
import train20 from "../assets/images/train20.jpeg"
import train21 from "../assets/images/train21.jpeg"
import train22 from "../assets/images/train22.jpeg"
import train23 from "../assets/images/train23.jpeg"
import train24 from "../assets/images/train24.jpeg"
import train25 from "../assets/images/train25.jpeg"
import train26 from "../assets/images/train26.jpeg"
import train27 from "../assets/images/train27.jpeg"
import train28 from "../assets/images/train28.jpeg"
import Video1 from "../assets/Videos/training1.mp4"
import ReactPlayer from 'react-player';
// import ReactPlayer from 'react-player/youtube';

function GalleryPage() {

    useEffect(() => {
        const openModal = (src, alt) => {
            const modal = document.getElementById("myModal");
            const modalImg = document.getElementById("img01");
            const captionText = document.getElementById("caption");

            modal.style.display = "block";
            modalImg.src = src;
            captionText.innerHTML = alt;
        }

        const closeModal = () => {
            const modal = document.getElementById("myModal");
            modal.style.display = "none";
        }

        const images = document.querySelectorAll(".gallery img");
        images.forEach(img => {
            img.addEventListener("click", () => {
                openModal(img.src, img.alt);
            });
        });

        // const videos = document.querySelectorAll(".gallery ReactPlayer");
        // videos.forEach(video => {
        //     video.addEventListener("click", () => {
        //         openModal(ReactPlayer.src, ReactPlayer.alt);
        //     });
        // });

        const modal = document.getElementById("myModal");
        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });

        const span = document.getElementsByClassName("close")[0];
        span.addEventListener("click", closeModal);

    }, []);



    return (
        <div>

            <Navbar />

            <p id='headerbadge'>Training</p>
            <div style={{marginTop:"20px"}}>
           <div className='row' id='Trainingphotorow'>

                <div className="responsive">
                    <div className="gallery">
                        <img src={train1} alt="Training" style={{ width: "100%", maxWidth: "500px"}} />
                    </div>
                </div>
                 <div className="responsive">
                    <div className="gallery">
                        <img src={train2} alt="Training" style={{ width: "100%", maxWidth: "500px"}} />
                    </div>
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img src={train3} alt="Training" style={{ width: "100%", maxWidth: "500px"}} />
                    </div>
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img src={train4} alt="Training" style={{ width: "100%", maxWidth: "500px"}} />
                    </div>
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img src={train5} alt="Training" style={{ width: "100%", maxWidth: "500px"}} />
                    </div>
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img src={train6} alt="Training" style={{ width: "100%", maxWidth: "500px"}} />
                    </div>
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img src={train7} alt="Training" style={{ width: "100%", maxWidth: "500px"}} />
                    </div>
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img src={train8} alt="Training" style={{ width: "100%", maxWidth: "500px"}} />
                    </div>
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img src={train9} alt="Training" style={{ width: "100%", maxWidth: "500px"}} />
                    </div>
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img src={train10} alt="Training" style={{ width: "100%", maxWidth: "500px"}} />
                    </div>
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img src={train11} alt="Training" style={{ width: "100%", maxWidth: "500px"}} />
                    </div>
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img src={train12} alt="Training" style={{ width: "100%", maxWidth: "500px"}} />
                    </div>
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img src={train13} alt="Training" style={{ width: "100%", maxWidth: "500px"}} />
                    </div>
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img src={train14} alt="Training" style={{ width: "100%", maxWidth: "500px"}} />
                    </div>
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img src={train15} alt="Training" style={{ width: "100%", maxWidth: "500px"}} />
                    </div>
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img src={train16} alt="Training" style={{ width: "100%", maxWidth: "500px"}} />
                    </div>
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img src={train17} alt="Training" style={{ width: "100%", maxWidth: "500px"}} />
                    </div>
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img src={train18} alt="Training" style={{ width: "100%", maxWidth: "500px"}} />
                    </div>
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img src={train19} alt="Training" style={{ width: "100%", maxWidth: "500px"}} />
                    </div>
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img src={train20} alt="Training" style={{ width: "100%", maxWidth: "500px"}} />
                    </div>
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img src={train21} alt="Training" style={{ width: "100%", maxWidth: "500px"}} />
                    </div>
                </div>
                 <div className="responsive">
                    <div className="gallery">
                        <img src={train22} alt="Training" style={{ width: "100%", maxWidth: "500px"}} />
                    </div>
                </div> 
                <div className="responsive">
                    <div className="gallery">
                        <img src={train23} alt="Training" style={{ width: "100%", maxWidth: "500px"}} />
                    </div>
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img src={train24} alt="Training" style={{ width: "100%", maxWidth: "500px"}} />
                    </div>
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img src={train25} alt="Training" style={{ width: "100%", maxWidth: "500px"}} />
                    </div>
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img src={train26} alt="Training" style={{ width: "100%", maxWidth: "500px"}} />
                    </div>
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img src={train27} alt="Training" style={{ width: "100%", maxWidth: "500px"}} />
                    </div>
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img src={train28} alt="Training" style={{ width: "100%", maxWidth: "500px"}} />
                    </div>
                </div>



           </div>

           <div className='row' id='Trainingvideorow'>

           <div className="responsive">
                    <div className="gallery">
                        <ReactPlayer url={Video1} width="640" height="360" controls />
                    </div>
                </div>
                
                
           </div>
              
               

              




                <div id="myModal" className="modal">
                    <span className="close">&times;</span>
                    <img className="modal-content" alt="Training" id="img01" />
                    <div id="caption"></div>
                </div>

            </div>
        </div>

    );
}

export default GalleryPage;

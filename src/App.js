import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
     <div class="page">
        <Header></Header>
        <MainTitle></MainTitle>
        <MeinServises></MeinServises>
        <PortfolioList></PortfolioList>
        <OurExpirience></OurExpirience>
        <OurClients></OurClients>
        <Content></Content>
        <Footer></Footer>
    </div>
    </div>
  );
}

export default App;


const Header = () =>
  <div class="header">
      <div class="logo">
          <svg width="149" height="30" viewBox="0 0 149 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13.2912V29.3236H2.99051V16.2817H16.2817V13.2912H0ZM0 3.23972H19.0645V0.249209H0V3.23972ZM31.3588 0.249209H28.6175L17.6108 29.3236H20.9336L29.9882 5.02572L39.0013 29.3236H42.324L31.3588 0.249209ZM58.938 26.6654C52.3764 26.6654 47.682 21.3489 47.682 14.7864C47.682 8.26544 52.3764 2.94898 58.938 2.94898C62.9253 2.94898 66.2897 4.90112 68.2833 7.93228L70.9416 6.60405C68.4504 2.6167 64.0883 0 58.938 0C50.7565 0 44.6085 6.60405 44.6085 14.7864C44.6085 22.9688 50.7565 29.6144 58.938 29.6144C64.0883 29.6144 68.4504 26.9977 70.9416 22.9688L68.2833 21.6812C66.2897 24.7133 62.9253 26.6654 58.938 26.6654ZM73.0183 3.23972H94.0774V0.249209H73.0183V3.23972ZM82.0314 29.3236H85.0634V8.05777H82.0314V29.3236ZM108.822 0C100.639 0 94.7004 6.64558 94.7004 14.828C94.7004 23.0103 100.639 29.6559 108.822 29.6559C117.005 29.6559 122.903 23.0103 122.903 14.828C122.903 6.64558 117.005 0 108.822 0ZM108.822 26.7069C102.259 26.7069 97.7731 21.3905 97.7731 14.828C97.7731 8.26544 102.259 2.94898 108.822 2.94898C115.343 2.94898 119.829 8.26544 119.829 14.828C119.829 21.3905 115.343 26.7069 108.822 26.7069ZM148.197 29.3236L141.635 17.6939C145.124 16.4063 147.491 13.042 147.491 9.26228C147.491 4.31963 143.836 0.249209 138.354 0.249209C133.494 0.249209 127.471 0.249209 127.471 0.249209V3.23972H138.354C142.049 3.23972 144.376 5.98102 144.376 9.26228C144.376 12.502 142.049 15.2848 138.354 15.2848H127.471V29.3236H130.462V18.2753H138.354C138.436 18.2753 138.478 18.2753 138.52 18.2753L144.75 29.3236H148.197Z" fill="white"/>
              </svg>  
      </div>
      <div class="navigetion">
          <nav>
              <ul class="navi">
                  <li><a href="Services">Services</a></li>
                  <li><a href="Portfolio">Portfolio</a></li>
                  <li><a href="About">About</a></li>
                  <li><a href="Contact">Contact</a></li>
                  <li class="DYI"><a href="Discus Your Idea">Discus Your Idea</a></li>
              </ul>
          </nav>
      </div>
      <div class="mail">
          <a href="hello@digitfactor.com">hello@digitfactor.com</a>
      </div>
      <div class="menu">
          <a href="menu">Menu</a>
          <div class="burger"></div>
      </div>
  </div>


const MainTitle = () =>
  <div class="heading__title">
      <div class="heading">
          <div class="central_heading">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0H8L0 16H4L12 0ZM20 0H16L8 16H12L20 0Z" fill="#FFCA00"/>
                  </svg>
                  Welcome to Digit Factor 
          </div>
          <div class="big_heading">
              Creative Web Production from Ukraine
          </div>
          <div class="button_DYI">
              <div class="button_text">
                  Discus Your Idea
              </div>
              <div class="dott"></div>
          </div>
      </div>
      <div class="arrow_vs_chat">
          <div class="arrow">
              <svg width="8" height="48" viewBox="0 0 8 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.87969 44.2206C8.0401 44.063 8.0401 43.8006 7.87969 43.6375C7.72469 43.4798 7.46671 43.4798 7.31208 43.6375L4.40466 46.5945L4.40466 0.408252C4.4043 0.180792 4.22654 0 4.00289 0C3.77924 0 3.5957 0.180792 3.5957 0.408252L3.5957 46.5945L0.693704 43.6375C0.533285 43.4798 0.274952 43.4798 0.120314 43.6375C-0.0401049 43.8006 -0.0401049 44.0634 0.120314 44.2206L3.71601 47.8776C3.87101 48.0408 4.12899 48.0408 4.28362 47.8776L7.87969 44.2206Z" fill="#7E7E7E"/>
                  </svg> 
                  Scroll down               
          </div>
          <div class="chat">
              <svg width="34" height="26" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M29.3377 4.80738V11.9809C29.3377 14.636 27.1488 16.7883 24.4485 16.7883H12.015L6.38496 22.2345C6.18437 22.4285 5.91812 22.5314 5.64736 22.5314C5.51045 22.5314 5.37255 22.5052 5.24122 22.451C4.85052 22.29 4.5962 21.914 4.5962 21.4975V16.7789C2.03254 16.6299 0 14.5393 0 11.9809V4.80738C0 2.15234 2.18894 0 4.88912 0H24.4486C27.1487 0 29.3377 2.15234 29.3377 4.80738ZM31.4399 12.7387V12.3689C32.8857 12.5627 34.0001 13.7809 34 15.2555V19.6041C34 21.155 32.7679 22.4224 31.2137 22.5127V25.3732C31.2137 25.6257 31.0596 25.8536 30.8227 25.9513C30.7431 25.9839 30.6595 26 30.5764 26C30.4124 26 30.251 25.9375 30.1293 25.8199L26.7164 22.5184H19.1792C17.5424 22.5184 16.2154 21.2137 16.2154 19.6041V18.8428H25.2321C28.6551 18.8428 31.4399 16.1045 31.4399 12.7387Z" fill="#202020"/>
                  </svg> 
          </div>
      </div>
  </div>

const MeinServises = () =>
  <div class="services">
      <div class="services__title">
        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0H8L0 16H4L12 0ZM20 0H16L8 16H12L20 0Z" fill="#FFCA00"/>
          </svg>        
        Services
      </div>
      <div class="services-list">
        <div class="services-item">
          <div class="services-item__thumb">
            <img src="public/img/img1.png" width="130" height="130" alt=""/>
          </div>
          <div class="services-item__content">
            <div class="services-item__title">
              Engineering Service 
            </div>
            <div class="services-item__text">
              Software Development / Software Testing / Solutions Architecture / Business Analysis / Operations Support 
            </div>
            <a href="" class="services-item__link">
              Learn More
            </a>
          </div>
      </div>
        <div class="services-item">
          <div class="services-item__thumb">
            <img src="public/img/img1.png" width="130" height="130" alt=""/>
          </div>
          <div class="services-item__content">
            <div class="services-item__title">
              Internet of Things  
            </div>
            <div class="services-item__text">
              Intelligent Mobility / Predictive Maintenance / Smart Manufacturing  
            </div>
            <a href="" class="services-item__link">
              Learn More
            </a>
          </div>
        </div>
        <div class="services-item">
          <div class="services-item__thumb">
            <img src="public/img/img1.png" width="130" height="130" alt=""/>
          </div>
          <div class="services-item__content">
            <div class="services-item__title">
              Extended Reality XR 
            </div>
            <div class="services-item__text">
              VR / MR / AR 
            </div>
            <a href="" class="services-item__link">
              Learn More
            </a>
          </div>
        </div>
        <div class="services-item">
          <div class="services-item__thumb">
            <img src="public/img/img1.png" width="130" height="130" alt=""/>
          </div>
          <div class="services-item__content">
            <div class="services-item__title">
              AL & ML 
            </div>
            <div class="services-item__text">
              Artificial Intelligence / Intelligent Automation / Advanced Analytics 
            </div>
            <a href="" class="services-item__link">
              Learn More
            </a>
          </div>
        </div>
        <div class="services-item">
          <div class="services-item__thumb">
            <img src="public/img/img1.png" width="130" height="130" alt=""/>
          </div>
          <div class="services-item__content">
            <div class="services-item__title">
              Big data & Analytics   
            </div>
            <div class="services-item__text">
              BI & Augmented Analytics / Enterprise Data Platforms / Data Strategy and Governance 
            </div>
            <a href="" class="services-item__link">
              Learn More
            </a>
          </div>
        </div>
        <div class="services-item">
          <div class="services-item__thumb">
            <img src="public/img/img1.png" width="130" height="130" alt=""/>
          </div>
          <div class="services-item__content">
            <div class="services-item__title">
              Blockchain 
            </div>
            <div class="services-item__text">
              Создаем прибыльные интернет-магазины, маркетплейсы и агрегаторы 
            </div>
            <a href="" class="services-item__link">
              Learn More
            </a>
          </div>
        </div>
        <div class="services-item">
          <div class="services-item__thumb">
            <img src="public/img/img1.png" width="130" height="130" alt=""/>
          </div>
          <div class="services-item__content">
            <div class="services-item__title">
              Game Art Production 
            </div>
            <div class="services-item__text">
              Concept art, UI, illustration / 3D models and environments / VXT and animations  
            </div>
            <a href="" class="services-item__link">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>   
 
 
const PortfolioList = () =>
  <div class="portfolio">
    <div class="portfolio_titel">
        <div class="slash_portfoio">
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0H8L0 16H4L12 0ZM20 0H16L8 16H12L20 0Z" fill="#FFCA00"/>
                </svg>
                Portfolio                 
        </div>
        <div class="p_text">
            Здесь будет какой-то текст который расскажет о услугах
        </div>
    </div>
    <div class="project_items">
        <div class="project__item">
            <div class="project_foto_title">
                <div class="project__foto">
                    <img src="public/img/foto 1.jpg" width="310" height="396" alt=""/>
                    <div class="project_link">
                        <a href="#">Landing Page</a>
                    </div>
                    <div class="project__title">Project Name</div>
                </div>   
            </div>
            <div class="project_info_link">
                <div class="project_info">
                    <a href="#"><p>Создаем прибыльные интернет-магазины, маркетплейсы</p></a>
                </div>
                <div class="project__arrow">
                    <a href="#"><svg width="28" height="8" viewBox="0 0 28 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2206 7.87969C24.063 8.0401 23.8006 8.0401 23.6375 7.87969C23.4798 7.72469 23.4798 7.46671 23.6375 7.31208L26.5945 4.40466L0.408252 4.40466C0.180792 4.4043 0 4.22654 0 4.00289C0 3.77924 0.180792 3.5957 0.408252 3.5957L26.5945 3.5957L23.6375 0.693704C23.4798 0.533285 23.4798 0.274952 23.6375 0.120314C23.8006 -0.0401049 24.0634 -0.0401049 24.2206 0.120314L27.8776 3.71601C28.0408 3.87101 28.0408 4.12899 27.8776 4.28362L24.2206 7.87969Z" fill="#202020"/>
                        </svg>
                        </a>
                </div>
            </div>
        </div>
        <div class="project__item">
            <div class="project_foto_title">
                <div class="project__foto">
                    <img src="public/img/foto 1.jpg" width="310" height="396" alt=""/>
                    <div class="project_link">
                        <a href="#">Landing Page</a>
                    </div>
                    <div class="project__title">Project Name</div>
                </div>   
            </div>
            <div class="project_info_link">
                <div class="project_info">
                    <a href="#"><p>Создаем прибыльные интернет-магазины, маркетплейсы</p></a>
                </div>
                <div class="project__arrow">
                    <a href="#"><svg width="28" height="8" viewBox="0 0 28 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2206 7.87969C24.063 8.0401 23.8006 8.0401 23.6375 7.87969C23.4798 7.72469 23.4798 7.46671 23.6375 7.31208L26.5945 4.40466L0.408252 4.40466C0.180792 4.4043 0 4.22654 0 4.00289C0 3.77924 0.180792 3.5957 0.408252 3.5957L26.5945 3.5957L23.6375 0.693704C23.4798 0.533285 23.4798 0.274952 23.6375 0.120314C23.8006 -0.0401049 24.0634 -0.0401049 24.2206 0.120314L27.8776 3.71601C28.0408 3.87101 28.0408 4.12899 27.8776 4.28362L24.2206 7.87969Z" fill="#202020"/>
                        </svg>
                        </a>
                </div>
            </div>
        </div>
        <div class="project__item">
            <div class="project_foto_title">
                <div class="project__foto">
                    <img src="public/img/foto 1.jpg" width="310" height="396" alt=""/>
                    <div class="project_link">
                        <a href="#">Landing Page</a>
                    </div>
                    <div class="project__title">Project Name</div>
                </div>   
            </div>
            <div class="project_info_link">
                <div class="project_info">
                    <a href="#"><p>Создаем прибыльные интернет-магазины, маркетплейсы</p></a>
                </div>
                <div class="project__arrow">
                    <a href="#"><svg width="28" height="8" viewBox="0 0 28 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2206 7.87969C24.063 8.0401 23.8006 8.0401 23.6375 7.87969C23.4798 7.72469 23.4798 7.46671 23.6375 7.31208L26.5945 4.40466L0.408252 4.40466C0.180792 4.4043 0 4.22654 0 4.00289C0 3.77924 0.180792 3.5957 0.408252 3.5957L26.5945 3.5957L23.6375 0.693704C23.4798 0.533285 23.4798 0.274952 23.6375 0.120314C23.8006 -0.0401049 24.0634 -0.0401049 24.2206 0.120314L27.8776 3.71601C28.0408 3.87101 28.0408 4.12899 27.8776 4.28362L24.2206 7.87969Z" fill="#202020"/>
                        </svg>
                        </a>
                </div>
            </div>
        </div>
    </div>
    <div class="project_view">
        <div class="view_link">
            <a href="#">All progect</a>
        </div>
    </div>
</div>

const OurExpirience = () =>
<div class="experience">
  <div class="experience_items">
      <div class="experience_item">
          <div class="experience_quantity">2+</div>
          <div class="experience_title">
              <div class="experience_header">Years</div>
              <div class="experience_text">Создаем прибыльные интернет-магазины, маркетплейсы</div>
          </div>
      </div>
      <div class="experience_item">
          <div class="experience_quantity">40+</div>
          <div class="experience_title">
              <div class="experience_header">Progect</div>
              <div class="experience_text">Создаем прибыльные интернет-магазины, маркетплейсы</div>
          </div>
      </div>
      <div class="experience_item">
          <div class="experience_quantity">10+</div>
          <div class="experience_title">
              <div class="experience_header">Experts</div>
              <div class="experience_text">Создаем прибыльные интернет-магазины, маркетплейсы</div>
          </div>
      </div>
      <div class="experience_item">
          <div class="experience_quantity">40+</div>
          <div class="experience_title">
              <div class="experience_header">Progect</div>
              <div class="experience_text">Создаем прибыльные интернет-магазины, маркетплейсы</div>
          </div>
      </div>
  </div>
</div>

const OurClients = () =>
<div class="clients_info">
      <div class="clients">
          <div class="clients_title">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0H8L0 16H4L12 0ZM20 0H16L8 16H12L20 0Z" fill="#FFCA00"/>
                  </svg>
                  Clients                  
          </div>
          <div class="clients_about_text">
              Здесь будет какой-то текст который расскажет о услугах
          </div>
      </div>
      <div class="clients_items">
          <div class="client_item">
              <img src="public/img/client1.svg" width="91" height="57" viewBox="0 0 91 57" alt=""/>                  
          </div>
          <div class="client_item">
              <img src="public/img/client2.svg" width="143" height="33" viewBox="0 0 143 33" alt=""/>                    
          </div>
          <div class="client_item">
              <img src="public/img/client3.svg"  width="140" height="37" viewBox="0 0 140 37" alt=""/>               
          </div>
          <div class="client_item">
              <img src="public/img/client4.svg" width="89" height="78" viewBox="0 0 89 78" alt=""/>               
          </div>
      </div>
  </div>

const Content = () =>
  <div class="title_text">
    <div class="title_text_header">
        Seo text
    </div>
    <div class="title_text_text">
        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>
    <div class="title_text_link">
        <a href="#">Read more</a>
        <a href="#"><svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5019 3.31982L1.13488 0.135898C1.04239 0.0482287 0.918732 0 0.786878 0C0.654951 0 0.531366 0.0482287 0.438732 0.135898L0.143854 0.41489C0.0510732 0.502421 0 0.61943 0 0.744118C0 0.868807 0.0510732 0.985676 0.143854 1.07328L4.15259 4.86424C4.24551 4.95218 4.36968 5.00034 4.50168 5C4.63427 5.00034 4.75829 4.95225 4.85129 4.86424L8.85615 1.07681C8.94893 0.989205 9 0.872336 9 0.747578C9 0.62289 8.94893 0.50602 8.85615 0.41835L8.56127 0.139427C8.36934 -0.0420699 8.0569 -0.0420699 7.86505 0.139427L4.5019 3.31982Z" fill="#202020"/>
            </svg>
            </a>
    </div>
</div>

const Footer = () =>
<footer>
  <div class="footer_info">
      <div class="footer_main">
          <div class="logo_foot">
              <img src="public/img/Fill 5.svg" width="149" height="30" alt=""/>
          </div>
          <div class="license">
              © 2019 Creative Web Production from Ukraine.<br/>Digit Factor. All rights reserved
          </div>
      </div> 
      <div class="contact">
          <a href="#"><svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.72764 4.31536C1.95534 4.47441 2.6417 4.9468 3.78677 5.73229C4.93187 6.51777 5.80909 7.12257 6.41848 7.54673C6.48543 7.59322 6.62767 7.69429 6.84527 7.85007C7.0629 8.00596 7.24374 8.13192 7.38763 8.22801C7.53163 8.32406 7.70571 8.43182 7.91005 8.5511C8.11431 8.67028 8.30686 8.75992 8.48766 8.81927C8.6685 8.8791 8.83589 8.90874 8.98989 8.90874H8.99998H9.01011C9.16411 8.90874 9.33157 8.87906 9.51241 8.81927C9.69314 8.75992 9.88586 8.67017 10.09 8.5511C10.2941 8.43168 10.4682 8.32403 10.6122 8.22801C10.7562 8.13192 10.9369 8.00596 11.1546 7.85007C11.3722 7.69415 11.5146 7.59322 11.5816 7.54673C12.1975 7.12257 13.7646 6.04534 16.2824 4.31515C16.7712 3.97722 17.1796 3.56947 17.5077 3.09217C17.836 2.61508 18 2.11458 18 1.59096C18 1.15339 17.8408 0.778832 17.5227 0.467306C17.2046 0.155711 16.8279 0 16.3928 0H1.60707C1.09148 0 0.694701 0.172323 0.4168 0.516969C0.138933 0.861685 0 1.29256 0 1.80957C0 2.22718 0.184212 2.67972 0.552461 3.16691C0.920675 3.65413 1.31253 4.03699 1.72764 4.31536ZM16.9954 5.37918C14.7992 6.85065 13.1316 7.99422 11.9933 8.80965C11.6116 9.08795 11.302 9.3052 11.0642 9.46088C10.8264 9.61666 10.5102 9.77575 10.115 9.93808C9.71998 10.1006 9.35184 10.1817 9.01026 10.1817H9.00002H8.98992C8.64841 10.1817 8.28006 10.1006 7.88503 9.93808C7.49001 9.77575 7.17355 9.61666 6.93583 9.46088C6.69817 9.3052 6.38843 9.08795 6.00678 8.80965C5.10271 8.15345 3.43868 7.0098 1.01461 5.37918C0.632817 5.12745 0.294648 4.83891 0 4.51415V12.4089C0 12.8466 0.157298 13.221 0.47207 13.5326C0.786772 13.8442 1.16519 14 1.60718 14H16.3929C16.8348 14 17.2132 13.8442 17.5279 13.5326C17.8428 13.2209 18 12.8467 18 12.4089V4.51415C17.712 4.83219 17.3773 5.12073 16.9954 5.37918Z" fill="white"/>
              </svg>
              </a>
          <a class="email" href="#">contact@digitfactor.com</a>
      </div>
      <div class="network">
            <a href="#"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.05" fill-rule="evenodd" clip-rule="evenodd" d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M27.6611 16.0033L25.5024 16C23.0772 16 21.5099 17.5455 21.5099 19.9376V21.7531H19.3394C19.1519 21.7531 19 21.8993 19 22.0795V24.71C19 24.8903 19.1521 25.0363 19.3394 25.0363H21.5099V31.6738C21.5099 31.854 21.6618 32 21.8493 32H24.6812C24.8687 32 25.0206 31.8539 25.0206 31.6738V25.0363H27.5584C27.7459 25.0363 27.8978 24.8903 27.8978 24.71L27.8989 22.0795C27.8989 21.993 27.863 21.9101 27.7995 21.8488C27.7359 21.7876 27.6493 21.7531 27.5593 21.7531H25.0206V20.2141C25.0206 19.4744 25.204 19.0989 26.2065 19.0989L27.6607 19.0984C27.8481 19.0984 28 18.9522 28 18.7721V16.3296C28 16.1496 27.8483 16.0037 27.6611 16.0033Z" fill="white"/>
          </svg>
          </a>
          <a href="#"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.05" fill-rule="evenodd" clip-rule="evenodd" d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M33 25.8096V32H29.3563V26.2242C29.3563 24.7733 28.8293 23.783 27.5105 23.783C26.5037 23.783 25.9045 24.4504 25.6409 25.0959C25.5448 25.3267 25.5201 25.6479 25.5201 25.9709V32H21.8752C21.8752 32 21.9243 22.2177 21.8752 21.2041H25.5197V22.7344C25.5123 22.7459 25.5027 22.7582 25.4958 22.7693H25.5197V22.7344C26.0039 21.9999 26.8687 20.9505 28.8042 20.9505C31.2023 20.9505 33 22.4935 33 25.8096ZM18.0625 16C16.8156 16 16 16.8056 16 17.8649C16 18.9012 16.792 19.7312 18.0141 19.7312H18.0385C19.3095 19.7312 20.1 18.9013 20.1 17.8649C20.076 16.8056 19.3095 16 18.0625 16ZM16.2165 32H19.86V21.2041H16.2165V32Z" fill="white"/>
          </svg>
          </a>
      </div> 
  </div>
</footer>

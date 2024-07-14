import React from 'react'
import Posts from '../components/Posts'
import Pasillo from '../Recursos/pasillo.jpg';
import Cabello from '../Recursos/corte de cabello aulto mayor.jpg';
import Guitarra from '../Recursos/adulto mayor guitarrista.jpg';
import Manualidades from '../Recursos/Manualidades.jpg';
import Conapam from '../Recursos/Logos/CONAPAM.png';
import Fodesaf from '../Recursos/Logos/FODESAF.png';
import Jps from '../Recursos/Logos/JPS.jpeg';

const Home = () => {
  return (
    <main>
      {/* Hero */}
      <section className="section-hero">
        <div className="hero">
          <div>
            <h1 className="heading-primary heading-hero">
              Centro del Adulto Mayor Hatillo San Sebastian
            </h1>
            <p className="hero-description">
              Donde cada día es una celebración de la vida dorada: Bienestar,
              Compañía y Alegría.
            </p>

            <a href="#footer" className="btn_info btn--outline scroll-link"
              ><span>Información de contacto</span></a
            >
          </div>
        </div>
      </section>

      <section className="section-commitment" id="commitment">
        <div className="container">
          <span className="subheading section-heading">Nuestro Compromiso</span>
        </div>

        <div className="container grid grid--2-cols grid--center-v">
          {/* child 1 */}
          <div className="feature-text-box">
            <div className="feature-heading">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#4dabf7"
                viewBox="0 0 256 256"
              >
                <path
                  d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"
                ></path>
              </svg>
              <h3 className="heading-tertiary">Instalaciones</h3>
            </div>

            <p className="feature-description">
              Nuestras instalaciones están diseñadas para satisfacer las
              necesidades únicas de los adultos mayores, ofreciendo espacios
              accesibles, seguros y confortables que promueven la independencia
              y el bienestar.
            </p>
          </div>
          {/*child 2 */}
          <div className="feature-img-box">
            <img
              src={Pasillo}
              className="feature-img"
              alt="Hallway in the senior center"
            />
          </div>

          {/*child 3 */}
          <div className="feature-img-box">
            <img
              src= {Cabello}
              className="feature-img"
              alt="Una mujer dandole un corte de cabello a una adulta mayor"
            />
          </div>
          {/*child 4 */}
          <div className="feature-text-box">
            <div className="feature-heading">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#fab005"
                viewBox="0 0 256 256"
              >
                <path
                  d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                ></path>
              </svg>
              <h3 className="heading-tertiary">Atención y Servicios</h3>
            </div>

            <p className="feature-description">
              Tenemos actividades que promueven el bienestar integral. Además,
              organizamos actividades recreativas que estimulan la mente y
              fortalecen los lazos sociales.
            </p>
          </div>

          {/* child 5 */}  
          <div className="feature-text-box">
            <div className="feature-heading">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#74b816"
                viewBox="0 0 256 256"
              >
                <path
                  d="M111.49,52.63a15.8,15.8,0,0,0-26,5.77L33,202.78A15.83,15.83,0,0,0,47.76,224a16,16,0,0,0,5.46-1l144.37-52.5a15.8,15.8,0,0,0,5.78-26ZM65.14,161.13l19.2-52.79,63.32,63.32-52.8,19.2ZM160,72a37.8,37.8,0,0,1,3.84-15.58C169.14,45.83,179.14,40,192,40c6.7,0,11-2.29,13.65-7.21A22,22,0,0,0,208,23.94,8,8,0,0,1,224,24c0,12.86-8.52,32-32,32-6.7,0-11,2.29-13.65,7.21A22,22,0,0,0,176,72.06,8,8,0,0,1,160,72ZM136,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm101.66,82.34a8,8,0,1,1-11.32,11.31l-16-16a8,8,0,0,1,11.32-11.32Zm4.87-42.75-24,8a8,8,0,0,1-5.06-15.18l24-8a8,8,0,0,1,5.06,15.18Z"
                ></path>
              </svg>
              <h3 className="heading-tertiary">Celebraciones</h3>
            </div>

            <p className="feature-description">
              Celebramos días especiales como cumpleaños y fechas festivas para
              crear un ambiente alegre y comunitario. Tenemos un
              espacio acogedor y enriquecedor.
            </p>
          </div>
          {/*child 6 */}
          <div className="feature-img-box">
            <img
              src={Guitarra}
              className="feature-img"
              alt="Adulto mayor tocando guitarra"
            />
          </div>
          {/*child 7 */} 
          <div className="feature-img-box">
            <img
              src={Manualidades}
              className="feature-img"
              alt="Adulta mayor sentada junto a sus manualidades"
            />
          </div>
          {/* child 8*/} 
          <div className="feature-text-box">
            <div className="feature-heading">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#f03e3e"
                viewBox="0 0 256 256"
              >
                <path
                  d="M240,94c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,220.66,16,164,16,94A62.07,62.07,0,0,1,78,32c20.65,0,38.73,8.88,50,23.89C139.27,40.88,157.35,32,178,32A62.07,62.07,0,0,1,240,94Z"
                ></path>
              </svg>
              <h3 className="heading-tertiary">Donaciones</h3>
            </div>

            <p className="feature-description">
              El 100% de las donaciones son para los adultos mayores. Aceptamos
              varios tipos de donaciones como comida, ropa o dinero. Nuestro
              sinpe movil es <strong>+506 6193-5408.</strong>
            </p>
          </div>
        </div>
      </section>

      <Posts/>

      
    <section className="section-cta"  id="TCU">
      <div className="container">
        <div className="cta">
          <div className="cta-text-box">
            <h2 className="heading-secondary">Trabajo Comunal</h2>
            <p className="cta-text">
              Invitamos a todos a participar en proyectos de trabajo comunitario en nuestro centro para adultos mayores. 
              Tu contribución puede marcar una gran diferencia.
            </p>

            <form id="cta-form" className="cta-form" action="https://formsubmit.co/ajax/b9c1ce15ae1115855a616c5e82b5abb7" method="POST">
              <div>
                <label htmlFor="full-name">Nombre completo</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="John Smith"
                  name="Nombre Completo:"
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Correo electrónico</label>
                <input
                  id="email"
                  type="email"
                  placeholder="me@example.com"
                  name="Correo electrónico:"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone">Teléfono</label>
                <input
                  id="phone"
                  type="phone"
                  placeholder="88888888"
                  name="Telefono:"
                  required
                />
              </div>

              <div>
                <label htmlFor="select-where">Tipo de Trabajo Comunitario:</label>
                <select id="select-where"name="Tipo de Trabajo Comunitario:" required>
                  <option value="">Seleccione el tipo de TC</option>
                  <option value="Trabajo Comunal Universitario (TCU)">Trabajo Comunal Universitario (TCU)</option>
                  <option value="Trabajo Comunal Judicial (TCJ)">Trabajo Comunal Judicial (TCJ)</option>
                  <option value="Servicio Social Estudiantil (SSE)">Servicio Social Estudiantil (SSE)</option>
                  <option value="Voluntariado Comunitario (VC)">Voluntariado Comunitario (VC)</option>
                  <option value="Otros">Otros</option>
                </select>
              </div>

              <button type="submit" className="btn_from btn--form">Enviar</button>

            </form>
           
          </div>
          <div
            className="cta-img-box"
            role="img"
            aria-label="Woman enjoying food"
          ></div>
        </div>
      </div>
    </section>
    <section className="section-collaborators" id="collaborators">
        <div className="container">
          <h2 className="section-heading">Nuestros Colaboradores</h2>
          <div className="logos">
            <a href="https://conapam.go.cr/" target="_blank" rel="noopener noreferrer">
              <img src={Conapam} alt="CONAPAM logo" />
            </a>
            <a href="https://fodesaf.go.cr/" target="_blank" rel="noopener noreferrer">
              <img src={Fodesaf} alt="FODESAF logo" />
            </a>
            <a href="https://www.jps.go.cr/" target="_blank" rel="noopener noreferrer">
              <img
                src={Jps}
                alt="Junta de protección social logi"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home;
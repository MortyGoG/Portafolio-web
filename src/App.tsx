import './App.css'
import { useEffect, useRef } from 'react';

// Importando componentes
import NavBar from './components/NavBar'
import Footer from './components/Footer'

// Iconos
import { Code } from "lucide-react";
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
// import { Instagram } from 'lucide-react';
import { UserPen } from 'lucide-react';
import { SquareChevronRight } from 'lucide-react';
import { Link } from 'lucide-react';
import { Contact } from 'lucide-react';
import { Send } from 'lucide-react';
import { Dumbbell } from 'lucide-react';


function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const extraSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reproducir música cuando la sección "extra" esté visible
          audioRef.current?.play();
        } else {
          // Pausar música cuando la sección "extra" no esté visible
          audioRef.current?.pause();
        }
      },
      { threshold: 0.5 } // Detecta cuando el 50% de la sección está visible
    );

    if (extraSectionRef.current) {
      observer.observe(extraSectionRef.current);
    }

    return () => {
      if (extraSectionRef.current) {
        observer.unobserve(extraSectionRef.current);
      }
    };
  }, []);

  // const [activeIndex, setActiveIndex] = useState(0); // Índice de la imagen activa
  // const images = [
  //   'src/assets/yo-1.jpg',
  //   'src/assets/yo-sports.jpg',
  //   'src/assets/yo-2.jpg',
  //   'src/assets/yo-3.jpg',
  // ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 7000); // Cambia cada 3 segundos

  //   return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  // }, [images.length]);

  // const handleNext = () => {
  //   setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };

  // const handlePrev = () => {
  //   setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  // };

  // // Example usage of handlePrev
  // useEffect(() => {
  //   handlePrev(); // Call the function to demonstrate usage
  // }, []);

  return (

    <div className="font-sans inset-0 -z-10 h-full w-full items-center 
    [background:radial-gradient(120%_25%_at_50%_0%,#213a1d_0%,#000_100%)]">


      <header className="fixed top-0 left-0 w-full fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2">
        <NavBar />
      </header>

      <main className="px-4 container mx-auto">

        <section id="home" className="py-16 sm:spy-16 md:py-36 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="rounded-full ">
                <img
                  src={`${import.meta.env.BASE_URL}src/assets/portal.jpeg`}
                  className="w-30 rounded-full shadow-xl shadow-[#A6FF00]/30 mr-5"
                />
              </div>

              <a href="https://www.linkedin.com/in/marvin-lopez-santiago-27b172295/" rel="noopener" target="_blank"
                className="flex inline-flex items-center h-6.5 justify-center  text-white text-sm
                transition rounded-full  whitespace-nowrap 
                border-1 border-[#A6FF00] 
                text-[#6FC3DF] hover:text-[#FFD700]
                hover:bg- hover:scale-105 
                transform duration-500 ease-in-out 
                px-4">
                Disponible para trabajar
              </a>
            </div>
            <div className="text-left">
              <h1 className="text-white font-bold text-5xl mb-4">Brrp, Soy <strong className="text-[#FFD700]">Marvin Ls</strong></h1>
            </div>

            <p className="mt-6 text-xl text-gray-200">
              Hola! Soy <strong className="text-[#A6FF00]">Licenciado en Ciencias de la Computación</strong> con experiencia en desarrollo de
              software <strong className="text-[#A6FF00]">Full Stack</strong> de Puebla, México ᴹˣ.
              Especializado en el desarrollo de aplicaciones web
              y soluciones de hardware.
            </p>

            <nav className="flex pt-8 gap-4">
              <a href="https://github.com/MortyGoG" rel="noopener" target="_blank"
                className="flex inline-flex items-center h-6.5 justify-center  text-white text-sm
                transition rounded-full  whitespace-nowrap 
                border-1 border-[#A6FF00] 
                text-[#6FC3DF] hover:text-[#FFD700]
                hover:bg- hover:scale-105 
                transform duration-500 ease-in-out 
                px-4">
                <Github className="w-5 mr-3" /> Github</a>

              <a href="https://www.linkedin.com/in/marvin-lopez-santiago-27b172295/" rel="noopener" target="_blank"
                className="flex inline-flex items-center h-6.5 justify-center  text-white text-sm
                transition rounded-full  whitespace-nowrap 
                border-1 border-[#A6FF00] 
                text-[#6FC3DF] hover:text-[#FFD700]
                hover:bg- hover:scale-105 
                transform duration-500 ease-in-out 
                px-4">
                <Linkedin className="w-5 mr-3" /> Linkedin</a>
            </nav>

          </div>

        </section>

        <section id="exp" className="sm:spy-16 w-full scroll-m-20 mx-auto container lg:max-w-4xl md:max-w-2xl">
          <h2 className="items-center text-white font-bold text-3xl justify-center 
        section w-full mx-auto container">
            <span className="inline-block align-middle pr-4">
              <img
                src={`${import.meta.env.BASE_URL}src/assets/work.svg`}
                alt="Work Icon"
                className="w-10 h-10 pb-2"
              />
            </span>
            Experience</h2>


          <div className="ml-5 mt-15">
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 
                ring-7 ring-[#00B200] bg-[#A6FF00]">
                  <Code className="w-3.5 h-3.5 text-[#000]" />
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"> Full Stack Developer | Club Alpha
                  <span className="bg-[#222356] text-[#A6FF00] text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm ms-3">Latest</span>
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 6th, 2025</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Developed a platform for schedule management, allowing users to assign classes and technical
                  staff/supervisors. Implemented an authentication system with differentiated roles, enabling users to add, modify, or
                  delete schedules based on permissions.
                  Enhanced a Spring Boot API for data exchange with a PostgreSQL database, improving system
                  performance and security and designed an intuitive, functional, and secure website, ensuring proper platform usage.
                </p>
                {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                  <svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                  <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                </svg> Download ZIP</a> */}
              </li>

              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 
                ring-8 ring-[#6FC3DF] bg-[#FFCC99]">
                  <Code className="w-3.5 h-3.5 text-[#000]" />
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Physiology Laboratory (Social Service)</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 8h, 2024</time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Analyzed large data sets, processing up to 50,000 records in some cases, with an average dataset size
                  of around 100 entries. Identified data patterns, created graphical visualizations, and analyzed gene expression using Z-score
                  calculations within specific ranges.
                  Used Python (along with libraries like TensorFlow, Pandas, NumPy, and Scikit-learn) for data
                  cleaning and processing, including PDF data extraction, removal of special characters, deduplication,
                  and filtering of empty data. Applied various tools for detailed data analysis, complementing research with software such as
                  Orange, KEGG, GO, and connection networks to obtain more precise results.
                </p>
              </li>
            </ol>
          </div>

        </section>

        <section id="projects" className="py-20 sm:spy-16 w-full scroll-m-0 mx-auto container lg:max-w-4xl md:max-w-2xl">
          <h2 className="items-center text-white font-bold text-3xl justify-center 
        section w-full mx-auto container">
            <SquareChevronRight className="w-10 h-10 inline-block align-middle mb-1 mr-4" /> Projects
          </h2>


          <section className="bg-[#222356] rounded-xl shadow-xl mt-15">
            <div className="container px-6 py-10 mx-auto">

              <div className=" lg:flex lg:items-center">
                <img className="md:w-200 lg:w-110 mx-auto rounded-xl shadow-xl mr-5 hover:scale-105" src={`${import.meta.env.BASE_URL}src/assets/horarios-cap1.jpg`} alt="" />

                <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">

                  <h2 className="block mt-4 text-2xl font-semibold text-gray-800 dark:text-white">
                    Comprehensive Sports Management System
                  </h2>
                  <p className="text-gray-400">Sports Plaza | Club Alpha</p>

                  <p className="mt-3 text-sm text-justify text-gray-500 dark:text-gray-300 md:text-sm">
                    Sports Plaza is a robust and user-friendly sports management platform designed to streamline the scheduling,
                    organization, and administration of sports activities. The system includes features such as class scheduling,
                    activity and facility management, user role-based access control (e.g., admin, user), and real-time updates.
                    Built with modern web technologies,
                    the platform ensures seamless interaction for administrators and users, offering functionalities like
                    dynamic forms, role-based permissions, and intuitive interfaces for managing sports facilities, activities,
                    and technical staff.
                  </p>

                  <div className="items-center text-right mt-8">
                    <div className="mx-4">
                      <h1 className="text-sm text-gray-700 dark:text-gray-200">Marvin López Santiago</h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">January 06, 2025</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#222356] rounded-xl shadow-xl mt-15">
            <div className="container px-6 py-10 mx-auto">

              <div className="lg:flex lg:items-center">
                <img className="md:w-200 lg:w-110 mx-auto rounded-xl shadow-xl mr-5 hover:scale-105" src={`${import.meta.env.BASE_URL}src/assets/web-anim-cap1.png`} alt="" />

                <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">

                  <h2 className="block mt-4 text-2xl font-semibold text-gray-800 dark:text-white">
                    Interactive 3D Experience with Three.js & Blender
                  </h2>
                  <p className="text-gray-400">BUAP</p>

                  <p className="mt-5 text-sm text-justify text-gray-300 md:text-sm">
                    This project was developed using Three.js, Blender, and JavaScript. Each element
                    in the scene was meticulously modeled in Blender, ensuring a high level of detail
                    and realism. Afterward, various animations were created to bring different emotes
                    and movements to life.
                  </p>
                  <p className="text-gray-300">
                    Finally, the scene was assembled, integrating all objects, animations, music, and
                    environmental effects, including carefully designed lighting and ambiance to enhance
                    the overall experience.
                  </p>
                  <a href="https://gxvcxy.csb.app/" rel="noopener" target="_blank"
                    className="
                        flex inline-flex items-center h-11 justify-center  text-white text-sm
                        transition rounded-xl  whitespace-nowrap
                        border bg-gray-800 border-gray-600
                        text-[#FFF] hover:text-[#FFD700]
                        hover:bg- hover:scale-105 
                        transform duration-500 ease-in-out 
                        mt-4 px-4">
                    <Link className="w-5 mr-3" /> Demo
                  </a>


                  <div className="items-center text-right">
                    <div className="mx-4">
                      <h1 className="text-sm text-gray-700 dark:text-gray-200">Marvin López Santiago</h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">May 14, 2024</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#222356] rounded-xl shadow-xl mt-15">
            <div className="container px-6 py-10 mx-auto">

              <div className="lg:flex lg:items-center">
                <img className="md:w-200 lg:w-110 mx-auto rounded-xl shadow-xl mr-5 hover:scale-105" src={`${import.meta.env.BASE_URL}src/assets/pic-cap1.jpg`} alt="" />

                <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">

                  <h2 className="block mt-4 text-2xl font-semibold text-gray-800 dark:text-white">
                    Multifunction Clock with PIC18F4550
                  </h2>
                  <p className="text-gray-400">BUAP</p>

                  <p className="mt-5 mb-2 text-sm text-justify text-gray-300 md:text-sm">
                    This project implements a multifunction clock using the PIC18F4550 microcontroller. It features three main functionalities running in the background:
                  </p>
                  <p className="text-sm text-justify text-gray-300">Clock – Displays the real-time clock.</p>
                  <p className="text-sm text-justify text-gray-300">Stopwatch – Allows starting, pausing, and resetting the timer.</p>
                  <p className="text-sm text-justify text-gray-300">Timer – Sets a countdown with an alarm upon completion.</p>

                  <p className="mt-5 text-s text-justify text-gray-300">🛠 Technologies & Tools</p>

                  <p className="text-sm text-justify text-gray-300">⚡ Microcontroller: PIC18F4550</p>
                  <p className="text-sm text-justify text-gray-300">🔌 Programming Language: C (MPLAB X + XC8)</p>
                  <p className="text-sm text-justify text-gray-300">🔧 Compiler: XC8</p>
                  <p className="text-sm text-justify text-gray-300">🎛 Simulation: Proteus / MPLAB X</p>
                  <p className="text-sm text-justify text-gray-300">📟 Display: 16x2 LCD / 7-segment display</p>

                  <a href="https://github.com/MortyGoG/Reloj-Cronometro-Temporizador-PIC18f4550-Displays" rel="noopener" target="_blank"
                    className="
                        flex inline-flex items-center h-11 justify-center  text-white text-sm
                        transition rounded-xl  whitespace-nowrap
                        border bg-gray-800 border-gray-600
                        text-[#FFF] hover:text-[#FFD700]
                        hover:bg- hover:scale-105 
                        transform duration-500 ease-in-out 
                        mt-4 px-4">
                    <Github className="w-5 mr-3" /> Code
                  </a>


                  <div className="items-center text-right">
                    <div className="mx-4">
                      <h1 className="text-sm text-gray-700 dark:text-gray-200">Marvin López Santiago</h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">May 14, 2024</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

        </section>

        <section id="about" className="py-20 sm:spy-16 w-full scroll-m-0 mx-auto container lg:max-w-4xl md:max-w-2xl">
          <h2 className="items-center text-white font-bold text-3xl justify-center 
        section w-full mx-auto container">
            <UserPen className="w-10 h-10 inline-block align-middle mb-2 mr-4" /> About Me
          </h2>

          <article className="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row"> <div className="[&amp;>p]:mb-4 [&amp;>p>strong]:text-yellow-500 dark:[&amp;>p>strong]:text-yellow-100 [&amp;>p>strong]:font-normal [&amp;>p>strong]:font-mono text-pretty order-2 md:order-1">
            <p className="text-justify">
              Hola! Soy <strong>Marvin López Santiago</strong>,
              Full Stack software developer specializing in Java (Spring Boot) and PostgreSQL for backend, and Angular, Ionic, React, and
              Flask for frontend. I develop optimized APIs and web services, improving system efficiency and scalability. Currently, I am
              working on a website using Angular and Ionic, connected to endpoints. Additionally, I have completed various projects in
              different programming languages and libraries.
              See my GitHub for more details.
            </p> </div> <img width="200" height="200" src={`${import.meta.env.BASE_URL}src/assets/yo-sports.jpg`} alt="Marvin Lopez S" className="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20 " /> </article>
        </section>


        <section id="contact" className="py-20 sm:spy-16 w-full scroll-m-0 mx-auto container lg:max-w-4xl md:max-w-2xl">
          <h2 className="items-center text-white font-bold text-3xl justify-center 
        section w-full mx-auto container">
            <Contact className="w-10 h-10 inline-block align-middle mb-2 mr-4" /> Contact
          </h2>

          <form className="mt-10">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div className="">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                <input type="text" id="first_name" className="block p-2.5 w-full text-sm 
            text-white rounded-lg
            border bg-gray-800 border-gray-600
             focus:ring-blue-500 focus:border-blue-500" placeholder="Marvin" required />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                <input type="text" id="last_name" className="block p-2.5 w-full text-sm 
            text-white rounded-lg
            border bg-gray-800 border-gray-600
             focus:ring-blue-500 focus:border-blue-500" placeholder="Lopez" required />
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input type="text" id="last_name" className="block p-2.5 w-full text-sm 
            text-white rounded-lg
            border bg-gray-800 border-gray-600
             focus:ring-blue-500 focus:border-blue-500" placeholder="example@example.com" required />
            </div>

            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
            <textarea id="message" rows={6} className="block p-2.5 w-full text-sm 
            text-white rounded-lg
            border bg-gray-800 border-gray-600
             focus:ring-blue-500 focus:border-blue-500" placeholder="Your message..."></textarea>

            <div className="text-right">
              <button type="submit"
                className="
                        flex inline-flex items-center h-11 justify-center text-white text-sm
                        transition rounded-xl  whitespace-nowrap
                        border bg-gray-800 border-gray-600
                        text-[#FFF] hover:text-[#FFD700]
                        hover:bg- hover:scale-105 
                        transform duration-500 ease-in-out 
                        mt-8 px-4">
                <Send className="w-5 mr-3" /> Send
              </button>
            </div>

          </form>

        </section>

        <section id="extra" ref={extraSectionRef} className="py-20 sm:spy-16 w-full scroll-m-0 mx-auto container lg:max-w-4xl md:max-w-2xl">
          <h2 className="items-center text-white font-bold text-3xl justify-center section w-full mx-auto container">
            <Dumbbell className="w-10 h-10 inline-block align-middle mb-2 mr-4" /> Soon...
          </h2>

        </section>

        {/* <section id="extra" ref={extraSectionRef} className="py-20 sm:spy-16 w-full scroll-m-0 mx-auto container lg:max-w-4xl md:max-w-2xl">
          <h2 className="items-center text-white font-bold text-3xl justify-center section w-full mx-auto container">
            <Dumbbell className="w-10 h-10 inline-block align-middle mb-2 mr-4" /> Lifestyle
          </h2>

          <div id="custom-controls-gallery" className="mt-10 relative w-full">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  <img
                    src={src}
                    className="block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 absolute"
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              ))}
            </div>

            
            <div className="flex justify-center items-center pt-4">
              <button
                type="button"
                onClick={handlePrev}
                className="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none"
              >
                <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                  <svg
                    className="rtl:rotate-180 w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 5H1m0 0 4 4M1 5l4-4"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex justify-center items-center h-full cursor-pointer group focus:outline-none"
              >
                <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                  <svg
                    className="rtl:rotate-180 w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Reproductor de audio oculto */}
        <audio ref={audioRef} src={`${import.meta.env.BASE_URL}src/assets/song.mp3`} loop />

        <Footer />

      </main>
    </div >
  )
}

export default App

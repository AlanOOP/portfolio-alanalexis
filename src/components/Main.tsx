import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";

export const Main = () => {

    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const texts = [
        'Frontend Developer',
        'Backend Developer',
        'React.js',
        'Next.js',
        'Node.js',
        'React Native',
        'Tailwind CSS'
    ];

    const typewriter = (text: string, i: number = 0) => {
        if (i < text.length) {
            setText(text.slice(0, i + 1));  // Reiniciar el texto cada vez
            setTimeout(() => typewriter(text, i + 1), 100);
        } else {
            setTimeout(() => {
                setIndex((index + 1) % texts.length);
            }, 2000);
        }
    };

    useEffect(() => {
        setText(''); // Reiniciar el texto antes de comenzar a escribir
        typewriter(texts[index]);
    }, [index]);


    return (
        <main className="container mt-72 md:mt-48 max-w-7xl mx-auto">
            <section className="flex items-center justify-center gap-32 flex-col md:flex-row mx-2">
                <div className="flex items-center flex-col-reverse md:flex-row p-2 gap-4">
                    <div className="flex flex-row md:flex-col md:space-y-5 mt-10 mb-0">
                        <a href="#" className="text-2xl text-gray-600 mx-2 hover:text-indigo-600">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="text-2xl text-gray-600 mx-2 hover:text-indigo-600">
                            <FaGithub />
                        </a>
                        <a href="#" className="text-2xl text-gray-600 mx-2 hover:text-indigo-600">
                            <FaInstagramSquare />
                        </a>
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold uppercase text-gray-700">
                            Hola Soy,
                            <span className="text-6xl block bg-gradient-to-br from-purple-400 to-orange-500 bg-clip-text text-transparent">
                                Alan Alexis
                            </span>
                        </h1>

                        <h4 className="my-5 bg-gradient-to-bl from-green-400 to-sky-300 bg-clip-text text-transparent font-black text-4xl uppercase">
                            {text}
                        </h4>
                        <p className="mt-4 text-gray-700 flex-shrink-0">
                            Desarrollador Full Stack, apasionado por crear aplicaciones web utilizando React, Next.js y Tailwind CSS, así como React Native y Node.js. Especializado en HTML, CSS y JavaScript, con una pasión por desarrollar interfaces de usuario bellas y funcionales. Cuento con experiencia en el uso de frameworks como React, Next.js y Tailwind CSS, y en el manejo de bases de datos como MongoDB, MySQL y Firebase.
                        </p>
                        <button className="bg-indigo-600 px-5 py-3 text-white cursor-pointer rounded-full mt-10 font-bold text-sm shadow transition-all ease-in-out duration-300 hover:bg-indigo-700">
                            Descargar CV
                        </button>

                    </div>

                </div>
                <div>
                    <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg" alt="avatar" className="w-[55vw] rounded-full shadow-sm home-img" />
                </div>
            </section>
        </main>
    )
}

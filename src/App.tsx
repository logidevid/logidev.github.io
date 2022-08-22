import {
  AiOutlineGithub,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
import "./App.css";

function App() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col h-screen justify-center">
        <img className="w-[150px] ml-[6px]" src="/logidev-logo-white.svg" />

        <div className="mt-[30px]">
          <h1 className="main-title text-[72px] font-bold">Boom Shakalaka!</h1>
          <p className="text-[22px]">
            We're currently working on creating our website.
          </p>
        </div>

        <div className="flex gap-4 mt-[42px]">
          <a
            className="hover:text-gray-400"
            href="mailto:logidevid@gmail.com"
            target="_blank"
          >
            <AiOutlineMail size={32} />
          </a>

          <a
            className="hover:text-gray-400"
            href="https://github.com/logidevid"
            target="_blank"
          >
            <AiOutlineGithub size={32} />
          </a>

          <a
            className="hover:text-gray-400"
            href="https://wa.me/089606620616"
            target="_blank"
          >
            <AiOutlineWhatsApp size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default App;

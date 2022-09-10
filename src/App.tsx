import {
  AiOutlineGithub,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
import "./App.css";

function App() {
  return (
    <section className="container mx-auto sm:px-10 px-4">
      <div className="flex flex-col h-screen justify-center">
        <img
          className="sm:w-[150px] w-[120px] ml-[6px]"
          src="/logidev-logo-white.svg"
        />

        <div className="sm:mt-[30px] mt-[16px]">
          <h1 className="main-title leading-tight md:text-[72px] sm:text-[62px] text-[46px] font-bold">
            Boom Shakalaka!
          </h1>
          <p className="sm:text-[22px] text-[14px]">
            We're currently working on creating our beautiful website.
          </p>
        </div>

        <div className="flex gap-4 sm:mt-[42px] mt-[24px]">
          <a
            className="hover:text-gray-400"
            href="mailto:logidevid@gmail.com"
            target="_blank"
          >
            <AiOutlineMail size={30} />
          </a>

          <a
            className="hover:text-gray-400"
            href="https://github.com/logidevid"
            target="_blank"
          >
            <AiOutlineGithub size={30} />
          </a>

          <a
            className="hover:text-gray-400"
            href="https://wa.me/089606620616"
            target="_blank"
          >
            <AiOutlineWhatsApp size={30} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default App;

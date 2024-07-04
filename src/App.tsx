import "./App.css";
import ProfileImage from "./components/ProfileImage";
import Project from "./components/Project";
import Section from "./components/Section";
import { SVGS } from "./consts/svg";
import aniPage from "./images/aniPage.png";
import calculator from "./images/calculator.png";
import catImage from "./images/cat-image.png";
import productShowcase from "./images/product-showcase.png";
import remindApp from "./images/remind-app.png";
import ticTac from "./images/tic-tac-toe.png";
import userTable from "./images/user-table.png";
import sodaApi from "./images/soda-api.png";
import Experience from "./components/Experience";

function App() {
  return (
    <main>
      <Section>
        <div className="flex flex-row relative">
          <ProfileImage />
          <section className="flex flex-col absolute -translate-y-1/2 top-1/2 px-40">
            <h1 className="text-3xl font-bold text-left relative mb-2">Alejandro</h1>
            <section className="grid grid-cols-5 md:grid-cols-12 gap-x-10">
              {SVGS.Node} {SVGS.React} {SVGS.Tailwind} {SVGS.Html} {SVGS.JavaScript}
              {SVGS.TypeScript} {SVGS.MySQL} {SVGS.Express}
            </section>
          </section>
        </div>
        <section className="flex absolute right-2 bottom-2">
          <a
            href="https://paypal.me/satixx2022?country.x=MX&locale.x=es_XC"
            target="_blank"
            aria-label="Paypal-Button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="#00abfb"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 13l2.5 0c2.5 0 5 -2.5 5 -5c0 -3 -1.9 -5 -5 -5h-5.5c-.5 0 -1 .5 -1 1l-2 14c0 .5 .5 1 1 1h2.8l1.2 -5c.1 -.6 .4 -1 1 -1zm7.5 -5.8c1.7 1 2.5 2.8 2.5 4.8c0 2.5 -2.5 4.5 -5 4.5h-2.6l-.6 3.6a1 1 0 0 1 -1 .8l-2.7 0a.5 .5 0 0 1 -.5 -.6l.2 -1.4" />
            </svg>
          </a>
          <a href="https://github.com/SatiXXGG" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          </a>
          <a href="https://discord.com/users/573660632919048214" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="#6f32be"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
              <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
              <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
              <path d="M7 16.5c3.5 1 6.5 1 10 0" />
            </svg>
          </a>
        </section>
      </Section>
      <Section>
        <h1 className="text-3xl font-bold text-left mb-2 text-purple-700">
          About me
        </h1>
        <p className="text-left">
          My name is Alejandro, and I'm a passionate Full-Stack web developer from
          México. I love my work and strive to learn new things every day. Coding
          allows me to solve real-world problems and create seamless user experiences.
          I'm ready to growing and innovating in both front-end and back-end
          development.
        </p>
      </Section>
      <Section>
        <h1 className="text-3xl font-bold text-left mb-2 text-purple-700">
          Experience (Years)
        </h1>

        <section className="grid gap-x-3 gap-y-2  grid-cols-2 md:grid-cols-3 my-3 mx-auto">
          <Experience technology="Node" experience={0.5}></Experience>
          <Experience technology="React" experience={1}></Experience>
          <Experience technology="SQL/NoSQL" experience={0.3}></Experience>
          <Experience technology="Python" experience={2}></Experience>
          <Experience technology="LUAU" experience={4}></Experience>
          <Experience technology="UI Design" experience={4}></Experience>
        </section>

        <h3 className="text-2xl font-bold text-left mb-2 text-purple-900">Skills</h3>
        <section className="py-2 grid grid-cols-5 md:grid-cols-12 gap-x-10 mx-auto w-[20rem] ">
          {SVGS.Node} {SVGS.React} {SVGS.Tailwind} {SVGS.Html} {SVGS.JavaScript}
          {SVGS.TypeScript} {SVGS.MySQL} {SVGS.Express}
        </section>
      </Section>
      <Section>
        <h1 className="text-3xl font-bold text-left mb-2 text-purple-700">
          Projects
        </h1>

        <Project
          title="Soda API"
          link="https://sodapi-jax.onrender.com/sodas"
          desc="A REST, MVC API that allows you to get, post, patch data (MAY TAKE A WHILE TO LOAD)"
          techs={["Node", "Express", "MySQL"]}
          img={sodaApi}
        ></Project>

        <Project
          title="User table"
          link="https://user-table-ebon.vercel.app/"
          desc="A web app that allows you to order, search and delete users"
          techs={["React", "Tailwind", "TS"]}
          img={userTable}
        ></Project>

        <Project
          title="Anime page"
          desc="A web app that allows you to search for anime and learn more about them."
          techs={["React", "Tailwind", "TS"]}
          img={aniPage}
          link="https://ani-page.vercel.app/"
        ></Project>

        <Project
          title="Calculator"
          desc="A web app that allows you to do basic calculations."
          techs={["React", "Tailwind", "TS"]}
          img={calculator}
          link="https://satixxcalculator.vercel.app/"
        ></Project>

        <Project
          title="Cat image"
          desc="A web app that allows you to do generate a cat/dog image and a cat random fact"
          techs={["React", "Tailwind", "JS"]}
          img={catImage}
          link="https://cat-image-generator-nine.vercel.app/"
        ></Project>

        <Project
          title="Product Showcase"
          desc="A web app with multiple products and a shopping cart."
          techs={["React", "Tailwind", "JS"]}
          img={productShowcase}
          link="https://product-showcase-lemon.vercel.app/"
        ></Project>

        <Project
          title="Remind me app"
          desc="A web app with the options to create, set completed and delete reminders."
          techs={["React", "Tailwind", "JS"]}
          img={remindApp}
          link="https://remind-me-app-eight.vercel.app/"
        ></Project>

        <Project
          title="Tic-tac-toe"
          desc="A game that allows you to play with a friend"
          techs={["React", "Tailwind", "TS"]}
          img={ticTac}
          link="https://three-in-line.vercel.app/"
        ></Project>
      </Section>
    </main>
  );
}

export default App;

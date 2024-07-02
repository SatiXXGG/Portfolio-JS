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
      </Section>
      <Section>
        <h1 className="text-3xl font-bold text-left mb-2 text-purple-700">
          About me
        </h1>
        <p className="text-left">
          My name is Alejandro and I'm a programmer from méxico that loves his work,
          I'm a Full-Stack web developer and I try to learn new things every day.
        </p>
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

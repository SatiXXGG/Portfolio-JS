import { COLORS } from "../consts/colors";
import { SMALL_SVGS } from "../consts/svg";

export default function Project({
  img,
  techs,
  title,
  desc,
  link,
}: {
  img: string;
  techs: string[];
  title: string;
  desc: string;
  link?: string;
}) {
  return (
    <section className="px-2 py-3 bg-neutral-950 outline outline-neutral-800 outline-1 rounded-xl flex flex-row relative my-2 hover:scale-[101%] hover:outline-white transition-all duration-200">
      <img className="rounded-xl invisible h-0 md:visible md:h-32" src={img}></img>
      <div className="flex flex-col px-3">
        <h1 className="text-xl text-left">{title}</h1>
        <p className="text-sm text-left">{desc}</p>
        <div className="grid grid-cols-2 md:grid-cols-3 mt-1">
          {techs.map((tech) => {
            const color = COLORS[tech.toLowerCase()];
            return (
              <div
                className="flex flex-row text-white max-h-8 rounded-md px-2 bg-transparent mr-2 mb-2 md:mb-1"
                style={{ backgroundColor: color + "50" }}
                key={tech}
              >
                {SMALL_SVGS[tech]} <p className="px-1">{tech}</p>
              </div>
            );
          })}
        </div>
        <a
          target="_blank"
          href={link}
          className="px-2 py-1 bg-purple-800 right-2 bottom-2 absolute rounded-xl hover:scale-105 active:scale-110 transition-all duration-75"
        >
          🔗
        </a>
      </div>
    </section>
  );
}

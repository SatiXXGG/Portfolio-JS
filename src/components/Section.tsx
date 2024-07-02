function Section({ children }: { children?: React.ReactNode | React.ReactNode[] }) {
  return (
    <article className="py-3 px-5 bg-neutral-900 outline-neutral-800 outline-1 outline rounded-xl flex flex-col mx-auto my-6 w-[30rem]  md:w-[40rem] hover:outline-purple-700 transition-all duration-200">
      {children}
    </article>
  );
}

export default Section;

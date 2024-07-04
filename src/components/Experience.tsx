export default function Experience({
  experience,
  technology,
}: {
  experience: number;
  technology: string;
}) {
  return (
    <div className="bg-neutral-950 rounded-2xl outline-1 outline-neutral-800 h-full justify-center items-center px-4 outline py-5 hover:scale-105 transition-all">
      <h1 className="text-3xl my-3 text-fuchsia-500">{experience + "+"}</h1>
      <p className="text-md opacity-50 font-semibold">{technology}</p>
    </div>
  );
}

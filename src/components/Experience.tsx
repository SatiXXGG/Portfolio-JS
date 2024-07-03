export default function Experience({
  experience,
  technology,
}: {
  experience: number;
  technology: string;
}) {
  return (
    <div className="bg-neutral-800 rounded-md hover:rounded-xl outline-1 outline-neutral-800 w-36  py-5 hover:scale-105 transition-all">
      <h1 className="text-6xl my-3 text-fuchsia-500">{experience + "+"}</h1>
      <p className="text-xl opacity-50 font-semibold">{technology}</p>
    </div>
  );
}

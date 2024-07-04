export default function BlurEffect() {
  return (
    <main className="blur-3xl fixed -z-10 w-full h-auto -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 opacity-55">
      <div className="rounded-full w-[20vw] h-[20vw] bg-purple-800 absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"></div>
      <div className="rounded-full w-[20vw] h-[20vw] bg-orange-500 -translate-x-1/2 -translate-y-1/2 left-[40vw] top-1/3 absolute"></div>
      <div className="rounded-full w-[20vw] h-[20vw] bg-green-700 absolute -translate-x-1/2 left-[60vw]"></div>
    </main>
  );
}

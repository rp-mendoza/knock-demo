export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-4">Knock Example</h1>
      <a href={'/feed'}>OOTB components</a>
      <a href={'/custom-feed'}>Custom Feed using API</a>
    </main>
  );
}

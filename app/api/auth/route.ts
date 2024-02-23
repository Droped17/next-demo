export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  console.log(data);
  return Response.json(data);
}

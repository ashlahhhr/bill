export async function GET() {
  return Response.json({ message: "ini products", products: [] });
}
export async function POST() {
  return Response.json({ message: "post product", products: [] });
}

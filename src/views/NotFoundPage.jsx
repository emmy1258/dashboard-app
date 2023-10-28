import notFound from "../assets/notfound.svg"

export default function NotFoundPage() {
  return (
    <di className="w-screen h-screen overflow-hidden flex items-center justify-center">
        <img src={notFound} alt="" />
    </di>
  )
}

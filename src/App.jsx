import './App.css'
import { Button } from "@/components/ui/button"

function App() {

  return (
    <>
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <div className="flex flex-col gap-2 items-center justify-center w-full h-full">
          <h1 className="text-4xl font-bold">Find Your Nirmala</h1>
          <Button className="brutalism brutalism-active">Click me</Button>  
          {/* <button className='brutalism'>hello</button>       */}
        </div>
      
      
    </div>
    </>
  )
}

export default App

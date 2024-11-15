import Button, { Variant } from "./Button";
import { useState } from "react";
function App(): JSX.Element {

  const [count, setCount] = useState<number>(0)

  const handleIncrement = () => {
    return setCount((prevCount: number) => prevCount + 1);
  }

  const handleDecrement = () => {
    return setCount((prevCount: number) => prevCount - 1);
  }

  return (
    <>
    <main className="container">
      <Button variant={Variant.Primary} onClick={handleDecrement}>-1</Button>
      {count}
      <Button variant={Variant.Secondary} onClick={handleIncrement}>+1</Button>
    </main>
      
    </>
  )
}

export default App

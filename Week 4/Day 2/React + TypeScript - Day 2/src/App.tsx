import UserInformation from "./UserInformation";
import Button, { Variant } from "./Button";
function App() {

  const handleClick = () => {
    alert("Hello World")
  }

  return (
    <>
      <UserInformation name="Akmal" age={25} address="123 Main St" email="test@example.com" phone={1234567890}/>
      <Button onClick={handleClick}>Default</Button>
      <Button disabled={true} variant={Variant.Secondary}>Disabled</Button>
      <Button buttonType="submit">Submit</Button>
      <Button buttonType="reset">Reset</Button>
      <Button variant={Variant.Primary}>Primary</Button>
      <Button variant={Variant.Secondary}>Secondary</Button>
    </>
  )
}

export default App

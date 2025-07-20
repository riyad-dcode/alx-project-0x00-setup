import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Click Me" styles="small bg-blue-500 text-white rounded-sm" />
      <Button title="Submit" styles="large bg-green-500 text-white rounded-md" />
      <Button title="Cancel" styles="medium bg-red-500 text-white rounded-lg" />
      <Button title="Learn More" styles="bg-yellow-500 text-black rounded-full" />
    </div>
  )
}


export default Landing


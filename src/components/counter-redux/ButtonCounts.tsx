import { Button } from "../ui/button";

export default function ButtonCounts({handler , label}: {handler: ()=>void; label: string}) {
  return (
    <Button className={`${label === 'Decrement' && 'bg-warning hover:bg-warning'}`} onClick={handler}>{label}</Button>
  )
}

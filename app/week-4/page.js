import PageHeader from "../components/PageHeader";
const simpleArr = ["a", "b", "c"];

const cats = [
  {
    id: 324356753,
    name: "Thomas O'Malley",
    age: 8,
  },
  {
    id: 890654645,
    name: "Duchess",
    age: 7,
  },
  {
    id: 889989989,
    name: "Toulouse",
    age: 1,
  },
  {
    id: 889384389,
    name: "Marie",
    age: 1,
  },
  {
    id: 329983389,
    name: "Berloiz",
    age: 1,
  },
];
const numArrObj = [
  { id: 0, value: 4534563 },
  { id: 2, value: 35854398 },
  { id: 1, value: 8989 },
];
export default function Page(){

    return(
        <main>
            <PageHeader
            title="rendering list"
            description="Iterative logic in react"
            />
        </main>

    )
}
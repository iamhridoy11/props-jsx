import FirstComponent from './FirstComponent'
import NamedComponent from './NamedComponent'
import Tweet from './Tweet'
import Person from './Person'
import './App.css'


export default function App() {


  return (
    <>
    {/* Part 1 */}
      <FirstComponent/>
      <NamedComponent name="BloodLine" />

    {/* Part 2 */}
      <Tweet
        name="Matt Lane"
        username="mmmaaatttttt"
        date={new Date().toDateString()}
        message="This app will disrupt everything!!"
      />
      <Tweet
        name="Elie Schoppik"
        username="eschoppik"
        date={new Date().toDateString()}
        message="#Ilovehashtags"
      />
      <Tweet
        name="Tim Garcia"
        username="TimGarcia0"
        date={new Date().toDateString()}
        message="Follow me on Twitter!"
      />

    {/* Part 3 */}
      <Person
        name="HomerPatis"
        age={38}
        hobbies={["bowling", "watching tv", "drinking beer"]}
      />
      <Person 
        name="Marge" 
        age={34} 
        hobbies={["painting", "gambling"]} 
      />

      <Person
        name="Bart"
        age={10}
        hobbies={["skateboarding", "making prank calls"]}
      />
      <Person
        name="Lisa"
        age={8}
        hobbies={["reading", "saxophone", "eating vegetables"]}
      />




    </>
  )
}

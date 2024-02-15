import {useContext, useState} from "react";
import {CatsContext} from "./providers/catsProvider.tsx";
import {Button, CardItem} from "./components";
import './app.css'


function App() {
  const {items, getCats } = useContext(CatsContext)
  const [openedCard, setOpenedCard] = useState<number[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [moveCount, setMoveCount] =useState<number>(0)

  const doubleItems = [...items, ...items]

  const handleFlip = (idx: number) => {
    if(idx === selected[0] || openedCard.includes(idx) || openedCard.length === doubleItems.length) return;
    setMoveCount((s) => s + 1)

    if(!selected?.length) {
      setSelected([idx])
      return
    }

    if(doubleItems[selected[0]].url === doubleItems[idx].url) {
      setOpenedCard((s) => [...s, idx, selected[0]])
      setSelected([])
      return;
    }

    setSelected((s) => [...s, idx])

    setTimeout(() => {
      setSelected([])
    }, 300)
  }

  const handleRefresh = () => {
    setOpenedCard([])
    setSelected([])
    setMoveCount(0)
    getCats()
  }

  return (
    <div className="app">

      <div className="actions">
        <h1>Moves to solve: {moveCount}</h1>
        <Button onClick={handleRefresh}>Refresh</Button>
      </div>

      <div className="cards">
        {doubleItems.map((item, index) => {
          const flipCard = openedCard.includes(index) || selected.includes(index);

          return <CardItem item={item}  handleClick={handleFlip} index={index} open={flipCard} key={index} />
        })}
      </div>
    </div>
  )
}

export default App

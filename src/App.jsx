import Card from "./components/Card"
import './App.css'

let video = {
  thumbnail: "../100_1180.JPG",
  duration: "3:26",
  pfp: "../100_1126.JPG",
  title: "Weekly vlog 2",
  creator: "Cashtri",
  views: "2.1k views",
  posting: "2 months ago"
}
let video2 = {
  thumbnail: "../100_1204.JPG",
  duration: "4:03",
  pfp: "../100_1126.JPG",
  title: "Weekly vlog 1",
  creator: "Cashtri",
  views: "7.2k views",
  posting: "3 months ago"
}
let video3 = {
  thumbnail: "../100_1132.JPG",
  duration: "4:43",
  pfp: "../100_1126.JPG",
  title: "Weekly vlog 3",
  creator: "Cashtri",
  views: "3k views",
  posting: "1 months ago"
}

function App() {

  return (
    <>
      <Card {...video} />
      <Card {...video2} />
      <Card {...video3} />
    </>
  )
}

export default App

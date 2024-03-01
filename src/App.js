// import logo from './logo.svg';
import './App.css';
import Item from './Component/Item';
import ItemDate from './Component/ItemDate';
import Card from './Component/Card';

const response=[
  {
    itemName:"Dad",
    itemDate:"1",
    itemMonth:"June",
    itemYear:"1990"

  },
  {
    itemName:"Mom",
    itemDate:"18",
    itemMonth:"December",
    itemYear:"1995"

  },
  {
    itemName:"It's Me",
    itemDate:"8",
    itemMonth:"November",
    itemYear:"2002"

  },
  {
    itemName:"Bro",
    itemDate:"17",
    itemMonth:"August",
    itemYear:"2004"

  }
]
function App() {
  return (
    <card>
    <Item name={response[0].itemName}>It's Birthday</Item>
    
    <ItemDate date={response[0].itemDate} Month={response[0].itemMonth} Year={response[0].itemYear} ></ItemDate>

    <Item name={response[1].itemName}></Item>
    <ItemDate date={response[1].itemDate} Month={response[1].itemMonth} Year={response[1].itemYear}></ItemDate>

    <Item name={response[2].itemName}></Item>
    <ItemDate date={response[2].itemDate} Month={response[2].itemMonth} Year={response[2].itemYear}></ItemDate>

    <Item name={response[3].itemName}></Item>
    <ItemDate date={response[3].itemDate} Month={response[3].itemMonth} Year={response[3].itemYear}></ItemDate>
    <div className="App">Hello Jee</div>
    </card>
  );
}

export default App;

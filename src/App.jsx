
import { useEffect, useState } from "react"
import Loder from "./Loder"
import Swal from "sweetalert2"

export default function App() {
  
  const[modalindex,setModalindex]=useState(true)
const[load3erindex,setloaderindex]=useState(true)
const[pagination,setpagination]=useState({
  pageNo: 5,
  recordspagination:20,
  activpage:1
})
const [view,setview]=useState([])
const [data]=useState([
  {name:'iphone 1'},
  {name:'iphone 1'},
  {name:'iphone 1'},
  {name:'iphone 1'},
  {name:'iphone 1'},
  {name:'iphone 1'},
  {name:'iphone 1'},
  {name:'iphone 1'},
  {name:'iphone 1'},
  {name:'iphone 1'},
  {name:'iphone 1'},
  {name:'iphone 1'},
  {name:'iphone 1'},
  {name:'iphone 1'},
  {name:'iphone 1'},
  {name:'iphone 1'},
  {name:'iphone 1'},
  {name:'iphone 1'},
  {name:'iphone 1'},
  {name:'iphone 1'},
  {name:'iphone 1'},


])


useEffect(()=>{
  let noOfpage=Math.ceil(data.length / pagination.recordspagination) 

  let opage={...pagination}
  opage.pageNo=noOfpage
  setpagination(opage)

setview(data.slice(0,50))

  setTimeout(()=>setloaderindex(false),4000)
},[])
const makeArr =(no)=>{
  let final = [];
  for (let index = 0; index < no; index++) {
    final.push(index+1)
    
  }
  return final;
}

const changesPages=(event)=>{
  let newRapp=event.target.value
  let noOfpage=Math.ceil(data.length / newRapp) 
  let opage={...pagination}
  opage.recordspagination=newRapp
  opage.pageNo=noOfpage
  setpagination(opage)
  setview(data.slice(0,newRapp))
}
  return (
    <div className=" col-12 App container bg-danger">
      <ul>
      {
      view.map((el,index)=>{
          return <li key={index}>{el.name}</li>
        })
      }
      </ul>
      {load3erindex&&<Loder/>}
      <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
    {
       makeArr(pagination.pageNo).map((el,index)=>{
       return <li key={index} className="page-item"><a className="page-link" href="#">{el}</a></li>

      })
    }
  
  </ul>
</nav>
<select className="btn btn-info" onChange={changesPages} defaultValue={20}>
  <option value="1">1</option>
  <option value="10">10</option>
  <option value="20">20</option>
  <option value="30">30</option>
</select>
<i class="fa-solid fa-magnifying-glass">dsgf</i>
    </div>
   

  )
}



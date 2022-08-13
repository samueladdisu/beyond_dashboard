import axios from "axios"
let data = []
const getData = async () => {
  await axios.get("http://localhost:8080/register")
    .then(res => {
      // console.log(res.data);
      data = res.data
    })
}

getData()
export default data

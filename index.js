const express = require('express')
const app = express()

// hello_world()

let hello_world = (req, res) =>{
    return res.json({message:'Hello World'});
}
// function hello_world() {
//     return console.log('hello world');
// }



app.delete('/delele',hello_world)


app.listen(5000, () => {
    console.log(`Example app listening on port ${5000}`)
})
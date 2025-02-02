const ports=require("../ports/airports");
exports.searchRecomed=async(req,res)=>{
const {query}=req.query;
// let result = ports.includes(query);
console.log(typeof(query))
if(!query) return null;
let result = ports.filter((data) => {
    return data.state.toLowerCase().includes(query.toLowerCase())||data.name.toLowerCase().includes(query.toLowerCase());
});

res.send(result).status(200);
console.log(query)
} 
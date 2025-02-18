const express = require('express');

const app = express();

// =========== /abc, /ac not for /ab ===========
// app.get("/ab?c", (req, res) => {
//     res.send({firstName:'Madhura', lastName:'Dharmik'});
// });

// =========== /abc, /abbbbbc not for /ac ============
// app.get("/ab+c", (req, res) => {
//     res.send({firstName:'Madhura', lastName:'Dharmik'});
// });

// ========== /abcd, /abcbcbcd not for /ad, /abc ===========
// app.get("/a(bc)+d", (req, res) => {
//     res.send({firstName:'Madhura', lastName:'Dharmik'});
// });

// ========== /abc, /abbbbbbc, not for /abbb..., /ac =============
// app.get("/ab*c", (req, res) => {
//     res.send({firstName:'Madhura', lastName:'Dharmik'});
// });

// =========== /abc?userId:101 ==================
// app.get("/abc", (req, res) => {
//     console.log(req.query);
//     res.send({firstName:'Madhura', lastName:'Dharmik'});
// });

// =========== /abc/101/xyz ==================
app.get("/abc/:userId/:name", (req, res) => {
    console.log(req.params);
    res.send({firstName:'Madhura', lastName:'Dharmik'});
});



app.listen(7777, ()=> {
    console.log("Server is successfully listening on port 7777...");
});
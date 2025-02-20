const adminAuth =  (re, res, next)=> {
    console.log("Admin auth is getting checked!");
    const token = 'xyz';
    const isAdminAuthorized = token === "xyz";
    if(!isAdminAuthorized){
        res.status(401).send('unauthorized reuest');
    }else {
        next();
    }
}

const userAuth =  (req, res, next)=> {
    console.log("User auth is getting checked!");
    const token = 'abc';
    const isUserAuthorized = token === "abc";
    if(!isUserAuthorized){
        res.status(401).send('unauthorized reuest');
    }else {
        next();
    }
}

module.exports = {
    adminAuth,
    userAuth
}
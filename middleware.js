module.exports= reqfilter = (req, resp, next) => {  // middleware function takes three paramaters request,response,and next where is next is          function                            which help to proceed the website if its not call then are website not proceed and loading 
    if (!req.query.age) {
        resp.send("Please provide the age")
    }
    else {
        if (req.query.age < 18) {
            resp.send("You are not allow to access the website")
        }

        else {
            next()
        }

    }
}
const express = require('express');
const morgan =  require('morgan');

const tourRouter = require('./routes/tourRoutes')
const userRoutes = require('./routes/userRoutes')

const app = express();


// MIDDLEWARES
if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'));
}

app.use(express.json());

app.use((req,res,next)=>{
    req.requestedTime = new Date().toISOString();
    next();
})

app.use(express.static(`${__dirname}/public`))


//ROUTES
app.use('/api/v1/tours',tourRouter);
app.use('/api/v1/users',userRoutes);

// app.get('/api/v1/tours',getAllTours)

// app.get('/api/v1/tours/:id',getTour)

// app.post('/api/v1/tours',createTour)

// app.patch('/api/v1/tours/:id',updateTour);

// app.delete('/api/v1/tours/:id',deleteTour);


module.exports = app ;
// const express = require('express')
import express from 'express'
import { readFileSync } from 'fs';


const app = new express();

app.use(express.static("dist"))

app.get('/', async (req, res) => {
    const index = readFileSync(`public/index.html`, `utf-8`)
    res.send(index)
    // res.send(
    //     `<h1>REACT IS EXCELLENT</h1>`
    // )
})

app.listen(7777)
console.info("The server is listening");
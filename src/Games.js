import React from 'react'
import {aletters, awords, asubject} from "./Animals"
import {fletters, fwords, fsubject} from "./Foods"
import {dletters,dwords,dsubject} from "./Drinks"
const randArr = [{l:aletters,w:awords,s:asubject},
    {l:fletters,w:fwords,s:fsubject},
{l: dletters,w: dwords, s: dsubject}]
let random = Math.round(Math.random()*(randArr.length-1))
const rand = randArr[random]
let letters = rand["l"]
let words = rand["w"]
let subject = rand["s"]
export {letters,words,subject}

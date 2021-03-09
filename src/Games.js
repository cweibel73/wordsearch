import React from 'react'
import {aletters, awords, asubject} from "./Animals"
import {fletters, fwords, fsubject} from "./Foods"
import {dletters,dwords,dsubject} from "./Drinks"
import {cletters, cwords, csubject} from "./Colors"
const randArr = [{l:aletters,w:awords,s:asubject},
    {l:fletters,w:fwords,s:fsubject},
{l: dletters,w: dwords, s: dsubject},
{l: cletters, w: cwords, s: csubject}]
let random = Math.round(Math.random()*(randArr.length-1))
const rand = randArr[random]
let letters = rand["l"]
let words = rand["w"]
let subject = rand["s"]
export {letters,words,subject}

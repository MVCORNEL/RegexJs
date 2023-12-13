//g - global flag
//i - case insesitive
//m - multiline

// Match a special character (\.) -> backslash before dot for example
const t = `The fat cat ran down the street
It was searching for a mouse to eat`;

// Match an e character (e)
const t1 = t.replace(/e/g, "X");
//ThX fat cat ran down thX strXXt
//It was sXarching for a mousX to Xat

// Matching one or more of the preceeding character (+)
const t2 = t.replace(/e+/g, "X");
//ThX fat cat ran down thX strXt
//It was sXarching for a mousX to Xat

//Match 0 or 1 of the proceeding token (?)
const t3 = t.replace(/ea?/g, "X");
//ThX fat cat ran down thX strXXt
//It was sXrching for a mousX to Xt

//Match 0 or more of the proceeding token (*)
const t4 = t.replace(/re*/g, "X");
//The fat cat Xan down the stXt
//It was seaXching foX a mouse to eat

//Matches any character except line breaks (.)
const t5 = t.replace(/.at/g, "X");
//The X X ran down the street
//It was searching for a mouse to X

//Matches any word characters except line breaks (\w)
const t6 = t.replace(/\w/g, "X");
//XXX XXX XXX XXX XXXX XXX XXXXXX
//XX XXX XXXXXXXXX XXX X XXXXX XX XXX

//Matches any character that is not a word character  (\W)
const t7 = t.replace(/\W/g, "X");
//TheXfatXcatXranXdownXtheXstreetXXItXwasXsearchingXforXaXmouseXtoXeat

//Matches any whitespace character (space, line breaks, tabs )  (\s)
const t8 = t.replace(/\s/g, "X");
//TheXfatXcatXranXdownXtheXstreetXXItXwasXsearchingXforXaXmouseXtoXeat

//Matches any character that is not a whitespace (\S)
const t9 = t.replace(/\S/g, "X");
//XXX XXX XXX XXX XXXX XXX XXXXXX
//XX XXX XXXXXXXXX XXX X XXXXX XX XXX

//Matches 4 of the preceding token (\w{4})
const t10 = t.replace(/\w{4}/g, "X");
//The fat cat ran X the Xet
//It was XXg for a Xe to eat

//Matches 4 or more of proceding token (\w{4,})
const t11 = t.replace(/\w{4,}/g, "X");
//The fat cat ran X the X
//It was X for a X to eat

//Matches between 4 and 5 of the preceding token (\w{4,5})
const t12 = t.replace(/\w{4,}/g, "X");
//The fat cat ran X the X
//It was X for a X to eat

//Matches between 4 and 5 of the preceding token ([fc]at)
const t13 = t.replace(/[fc]at/g, "X");
//The X X ran down the street
//It was searching for a mouse to eat

//Matches all the characters in the range of a to c, A-Z and 0-9 ([a-z]at)
const t14 = t.replace(/[a-zA-Z0-9]at/g, "X");
//The X X ran down the street
//It was searching for a mouse to X

//Matches the expression before or after the | act like a boolean operator ((t|a))
const t15 = t.replace(/(t|a)/g, "X");
//The fXX cXX rXn down Xhe sXreeX
//IX wXs seXrching for X mouse Xo eXX

//Matches the expression before or after the | act like a boolean operator ((C|c)at)
const t16 = t.replace(/(C|c)at/g, "X");
//The fat X ran down the street
//It was searching for a mouse to eat

//Matches between 4 and 5 of the preceding token t e or r ((t|e|r){2,3})
const t17 = t.replace(/(t|e|r){2,3}/g, "X");
//The fat cat ran down the sXX
//It was searching for a mouse to eat

//Grouping ((re){23})
const t18 = "rere".replace(/(re){2,3}/g, "X"); // -> X

//Matches the begining of the strigng or the begining of a line if it is multiline(gm instaed of g for multiline) (^T)
const t19 = t.replace(/^T/gm, "X");
//Xhe fat cat ran down the street
//It was searching for a mouse to eat

//Matches the end of a string or the begining of a line if it is multiline (gm intead of g for multiline)
const t20 = t.replace(/t$/gm, "X");
//The fat cat ran down the streeX
//It was searching for a mouse to eaX

//LOOK BEHIND(POSITIVE) -> needs to be put inside of a group((?<=the).)
//Matches a group before the main expression without including it in the result. (.) any charcater not linebreak
const t21 = t.replace(/(?<=the)./g, "X");
//The fat cat ran down theXstreet
//It was searching for a mouse to eat

//LOOK BEHIND(NEGATIVE) -> needs to be put inside of a group((?<!the).)
//Matches anything that doesn't have The group before the main expression without including it in the result. -> (.) any charcater not linebreak
const t22 = t.replace(/(?<!the)./g, "X");
//XXXXXXXXXXXXXXXXXXXXXXXX XXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//LOOK AHEAD(POSITIVE) -> needs to be put inside of a group(.(?=at))
//Matches a group after the main expression without including it in the result. (.) any charcater not linebreak
const t23 = t.replace(/.(?=at)/g, "X");
//The Xat Xat ran down the street
//It was searching for a mouse to Xat

//Matches anything that doesn't have The group after the main expression without including it in the result. -> (.) any charcater not linebreak
//LOOK AHEAD(NEGATIVE) -> needs to be put inside of a group((?<!at).....)
const t24 = t.replace(/.(?!at)/g, "X");
//XXXXXXXXXXXXXXXXXXXX XXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

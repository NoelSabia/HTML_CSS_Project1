# Frontend
## Nice to know:
### Color impact:
Red->Love, Energy, Intensity
Yellow->Joy, Intellect, Attention
Green->Freshness, Safety, Growth
Blue->Stability, Trust, Serenity
Purple->Royalty, Wealth, Female 
https://colorhunt.co/palettes/popular

### Typography impact:
-look for open shapes
-look for bigger intercharacter spaces
-look for unambiguous forms
-look for varying proportions
Switch between serif and san serif makes it more interesting also weight can make it more interesting

### Manage Attention of the reader:
1. Different Colors different importance
2. Layout is also an important eyechatcher
3. Use around 60 characters per paragraph (easier to read)
4. Alignement looks professional
5. Spacing makes it look more valuable

### Good Practice
- Start with Webdev on phones and scale up
- First features than design
- Compress Pictures (https://tinypng.com/)
- Icon maker (https://crop-circle.imageonline.co/)


## Javascript:
js-cheatsheet in general: https://htmlcheatsheet.com/js/
DOM: https://www.codecademy.com/learn/fscp-building-interactive-websites-with-javascript/modules/fecp-javascript-and-the-dom/cheatsheet

### jQuery(Library for JS):
Where to find the CDN: https://developers.google.com/speed/libraries#jquery
Minify for speedgains: https://minifier.org/
Cheat Sheet: https://htmlcheatsheet.com/jquery/ and https://api.jquery.com/# Portfolio1_Hairdresser

# Backend
## How to start a local Server
1. mkdir ...
2. cd ... && touch index.js
3. npm init -y
4. npm i ejs && npm i express && npm i -g nodemon && npm install(<- if npm downloaded something new)
5. (Go into index.js and import express and make a get + add "type": "module",)
6. (Terminal) node index.js

## Node Documentation (runtime env for JS)
https://nodejs.org/docs/latest/api/

## npm (Node package manager)
https://www.npmjs.com/

## HTTPS
|Vocab|Does|
|-|-|
|.get|request resources|
|.post|sending resources|
|.put|replace resource (completely replace the website)|
|.patch|patch up a resource (only replace a part of a website)|
|.delete|delete resource|

## Middleware (bodyParser)
Usage: Middleware acts as a bridge or intermediary layer between the incoming HTTP request and the final route handler in a web application, enabling preprocessing, manipulation, and enhancement of the request or response.
Terminal:
npm i body-parser || npm i morgan
JS:
import bodyParser from "body-parser"; || import morgan from "morgan";
app.use(bodyParser.urlencoded({ extended: true })); || app.use(morgan("dev"));

## EJS Tags (Embedded JS)
|Tags|Task|
|-|-|
|<%= variable %>|JS Output|
|<% consol.log("hello") %>|JS Execute|
|<%- "<h1>Hello</h1>" %>|Render HTML|
|<%% %%>|Show <% or %>|
|<%# This is a comment %>|Stop Execution|
|<%- include("header.ejs") %>|Insert another EJS file|





## React (UI components)
- Material UI components -> https://mui.com/material-ui/all-components/
- Shadcn -> https://ui.shadcn.com/
- Headless UI -> https://headlessui.com/

# Own Ideas for Business
Leistungen:
WhatsApp-Business
Datenauswertung
Fotograph fuer 1 Stunde
Termine direkt in ein System einspeisen
Beratungsgespraech vor Ort (mit Beispielen etc pp)

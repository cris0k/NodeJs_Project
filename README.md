# NodeJs 'Nodepop' Project

## Description

This project is a webside simulation that uses an API to show adverts posted by people\
that are ether selling or looking for a certain product.

The website uses `Node.js` , `Express.js` , `MongoDB` and libraries like `i18n` , `Cote` , `jsonwebtoken` ,\
`bcrypt`, `Jimp` or `Multer`

## What will you need?

First, clone the project with:

```
git clone https://github.com/cris0k/NodeJs_Project
```
Then, you will need to have `NodeJs`, `MongoDB` and `ExpressJS` installed as we will be using them\
to run de website.

Here you can download `NodeJs`:

```
https://nodejs.org/en/download/
```
And here you can download `MongoDB`:

```
https://www.mongodb.com/try/download/community
```
Install  `ExpressJS` framework:
```
npm i express
```
Copy .env.example to .env

```
cp .env.example .env
```
and review your configuration.

## Instuctions to run the website

Run `MongoDB`.\
Depending on your OS, there are different commands to run it, choose the right one for you:

- `Windows`: net start MongoDB
- `Mac`: mongod
- `Linux`: sudo systemctl start mongod

Run the following command to load the initial data \
that is the website's and database's content:
```
node initDB
```
Run the app:
```
npm run dev
```
Open your browser and go to:\
http://localhost:3000/  to see the main page or\
http://localhost:3000/api/products to see the API's data but,
this data is protected with Json Web Token\
so in order to
see the content yo must log in first.

Here is what you can expect to see:
# ![alt text](https://github.com/cris0k/NodeJs_Project/blob/main/public/images/Screenshot-exmple-mainpage.png)
# ![alt text](https://github.com/cris0k/NodeJs_Project/blob/main/public/images/Screenshot_apidata.png)

## Functionality

The website has been translated, so you have the options to choose between `English` or `Spanish`.

There is a Login button which will lead you to a Login form.\
http://localhost:3000/login

The only credentials that are accepted are 
```
user : admin@example.com password : 1234
user : user@example.com password : 1234
```
As for now, the session is not being saved. This is a test function to be upgrated in the near future
### GET /api/login
A very easy way to log in and obtain the JWT Token to check out the API's content is\
using `Postman` or any other similar platforms.\
Here is an image with the creentials you can use to log in and the way the response must look.\
The token expires in 2 days.
# ![alt text](https://github.com/cris0k/NodeJs_Project/blob/main/public/images/Screenshot-example-login.png)

### Microservices

One of the challenges was to create a microservice which will create a thumbnail of every photo\
uploaded with the advert.\
First, open another terminal and move to the folder microservices
```
cd microservices
```
Run the microservice 
```
npx nodemon resizeService.js
```
Ones is running, every time an advert is uploaded, a copy of the image will be made, rezised to 100x100\
and added to the thumbnail folder that will be created in the /public folder the first time you upload an\
advert.

### POST /api/products

You can post your own 'advert' on the website.\
Remember to copy the token after logging in and paste it on the URL
```
/api/products?token=<token>
```

or adding `Authorization` to the petition's Headers and adding it as its value.

Here is how it looks like:
# ![alt text](https://github.com/cris0k/NodeJs_Project/blob/main/public/images/Screenshot-exmple-post.png)

### Filter

If you wish to filter the data there are several ways to do so.\
Here are some ways depending on what would you like to see. You can conbine them all\
by adding `&` between them.
- by name: http://localhost:3000//?name= `item, brand, catacters..` \
There is no need to write the full name or the first name.
- by tags: http://localhost:3000//?tags= `school, work, training or technology`\
These are the tags available.
- price: http://localhost:3000//?price= `amount`\
It will list the adverts that go from the amount entered to the cheapest.
- sale: http://localhost:3000//?sale= `true or false`\
There are items that people are looking for, not only selling.
- sort: http://localhost:3000//?sort= `by name, price..`\
This way you can sort ads so they are easier to find. If you want to sort them starting from the end you just can add `-` before ,for example: `-name or -price,etc.`
- limit: http://localhost:3000//?limit= `number`\
The amount of ads you wouldlike to see on the page.
- skip: http://localhost:3000//?skip= `number`\
The amount of ads you would like to skip and not see on the page.

A combination of some of them:
http://localhost:3000/?tag=school&sale=false&name=bottle&price=50&limit=2&sort=price

If you would like to see only the photo of a certain item just go to\
http://localhost:3000/images/ `image name taken from api photo:.jpg`

For example: http://localhost:3000/images/backpack_levels_jeans.jpg
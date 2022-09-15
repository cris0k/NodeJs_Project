# NodeJs 'Nodepop' Project

## Description

This project is a webside simulation that uses an API to show adverts posted by people\
that are ether selling or looking for a certain product.


## What will you need?

First, clone the project with:

```
git clone https://github.com/cris0k/NodeJs_Project
```
Then, you will need to have `NodeJs`, `MongoDB` and `ExpressJS` installed\
as we will be using them to run de website.

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
http://localhost:3000/ \
to see the main page or\
http://localhost:3000/api/products \
to see the API's data

Here is what you can expect to see:
# ![alt text](https://github.com/cris0k/NodeJs_Project/blob/main/public/images/Screenshot_main.png)
# ![alt text](https://github.com/cris0k/NodeJs_Project/blob/main/public/images/Screemshot_apidata.png)

## Functionality

### POST /api/products

You can post your own ad to the website.\
A very easy way to do so is throgh `Postman` or any other similar platforms.

Here is an example and what you should expect to see:
# ![alt text](https://github.com/cris0k/NodeJs_Project/blob/main/public/images/Screenshot_example-Postman.png)

### Filter

There are many ways you can filter the data. Here are some ways depending on\
what would you like to see. You can conbine them all by adding `&` between them.
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
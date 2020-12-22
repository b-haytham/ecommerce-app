# [eCommerce Project]

eCommerce backend  Project 

Using TypeScript with Node.js and Express

## Models

### Users

-   username
-   first_name
-   last_name
-   full_name
-   email
-   password
-   isVerified
-   shipping_address
-   role -> Role
-   address
-   phone
-   city
-   country
-   postal_code

### Products

-   name
-   description
-   brand
-   price
-   stock_count
-   pictures []
-   category -> Category

### Category

-   name
-   desciption
-   image

### Role

-   name ["SUPER_ADMIN", "ADMIN", "USER"]

### Order

-   user -> Users
-   Products -> []Product



### Env Variables

Create a .env file in then root and add the following

```
MONGO_URI=MONGO_URI=mongodb+srv://username:password@cluster0.xqhsk.mongodb.net/DBname
```

### Install Dependencies (frontend & backend)

```
npm install
```

### Run

```
# dev (:3000) 
npm run dev

```

## Build 

```
# Create backend prod build

npm run build
```

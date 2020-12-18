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

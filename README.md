<!-- # UBER

# Backend api documentation
HTTP Method -> POST request : /users/register [Endpoint] to create user

# Request Body
fullname(object):
    firstname: string, required (min 3 words)
    lastname: string, optional (min 3 words)
email: string, required : user's email
password: string, required : user's password (min 6 characters) -->






# UBER Backend API Documentation

This document provides details about the `POST /users/register` endpoint used for user registration in the Uber Backend API.

---

## **Endpoint**

### `POST /users/register`

This endpoint is used to create a new user account.

---

## **Request Body**

The request body must be a JSON object containing the following fields:

### **1. `fullname` (object)**  
- **`firstname`**:  
  - **Type**: `string`  
  - **Required**: Yes  
  - **Validation**: Must be at least **3 characters** long.  

- **`lastname`**:  
  - **Type**: `string`  
  - **Required**: No (optional)  
  - **Validation**: If provided, must be at least **3 characters** long.  

### **2. `email`**  
- **Type**: `string`  
- **Required**: Yes  
- **Validation**: Must be a valid email address format.  

### **3. `password`**  
- **Type**: `string`  
- **Required**: Yes  
- **Validation**: Must be at least **6 characters** long.

---

## **Example Request**

### **Valid Request**
```json
POST /users/register
Content-Type: application/json

Example
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "securepassword"
}

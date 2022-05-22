# API Spec

## Create User :
- Method : POST
- Endpoint : `/regis`
- Header : 
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json
{
    "code" : "number",
    "status" : "string",
    "data" : {
        "id_user" : "string, unique",
        "weightCurrent" : "int",
        "height" : "int",
        "gender" : "string",
        "allergy" : "string", 
        "age" : "int", 
        // "activities" : "string", 
        "weightGoal" : "int",
        "calories" : "int"
    }
}
```

- Response :

```json
{
    "code" : "number",
    "status" : "string",
    "data" : {
        "id_user" : "string, unique",
        "weightCurrent" : "int",
        "height" : "int",
        "gender" : "string",
        "allergy" : "string", 
        "age" : "int", 
        // "activities" : "string", 
        "weightGoal" : "int",
        "calories" : "int"
    }
}
```

## Login User :
- Method : POST
- Endpoint : `/login`
- Header : 
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json
{
    "code" : "number",
    "status" : "string",
    "data" : {
        "email" : "string",
        "password" : "string"
    }
}
```

- Response :

```json
{
    "status" : "string",
    "data" : {
        "email" : "string",
        "password" : "string",
        "createdAt" : "date",
    }
}
```

## Display Home Page :
- Method : GET
- Endpoint : `/home/{id_user}`
- Header : 
    - Accept: application/json
- Response :
```json
{
    "status" : "string",
    "data" : {
        "calories" : "int"
    }
}
```

## Adding Activities :
- Method : POST
- Endpoint : `/activities/{id_user}`
- Header : 
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json
{
    "activities" : "object" 
}
```

- Response :

```json
{
    "activities" : "object"
}
```

## Display Activities :
- Method : GET
- Endpoint : `/activities/{id_user}`
- Header : 
    - Accept: application/json
- Response :

```json
{
    "activities" : "object"
}
```

## Display Food List Recommendation :
- Method : GET
- Endpoint : `/foods/{id_user}`
- Header : 
    - Accept: application/json
- Response :

```json
{
    "foods" : "object"
}
```

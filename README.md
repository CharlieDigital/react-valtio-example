# (Magical) Experiments in React State with Valtio

This repo contains a sample application of working with application state management using valtio.

## Structure

The `api` directory contains a C# .NET 6 Web API application which provides a simple endpoint that returns a random salary amount.  It is not necessary to run this part if you don't want to use it; it only exists to understand how valtio works with remote service calls and how to update state after retrieving results from a service call.

The `web` directory contains a simple React + MUI + vite + valtio application which demonstrates how the application state management with valtio works.

## The Tour

The interesting stuff happens inside of the following files:

|File|Description|
|---|---|
|`web/src/store/AppState.ts`|This file contains the application state.|
|`web/src/model/Company.ts`|This file contains model class for a `Company`.|
|`web/src/model/Employee.ts`|This file contains model class for an `Employee`.|
|`web/src/components/CompanyGenerator.ts`|This file contains the component that displays the `Company` instances.|
|`web/src/components/EmployeeGenerator.ts`|This file contains the component that displays the `Employee` instances.|

## Running the Sample

To run the web API:

```
cd api
dotnet run
```

or

```
cd api
dotnet watch
```

To run the front-end:

```
cd web
yarn run dev
```

## DIY

To set up your own sandbox, follow these steps.

First, create the two root folders

```
mkdir api
mkdir web
```

### Initialize the API

```
cd api
dotnet new webapi
```

This will create the default weather forecast service.

To get the auto-generation of the TypeScript client, see my instructions on my other project [dotnet6-openapi](https://github.com/CharlieDigital/dotnet6-openapi).

When we build the project with `dotnet run`, this will generate an OpenAPI schema file and drop it into `web/src/services` and generate the TypeScript clients in `web/src/services/clients`.

### Initialize the Web App

```
cd web
yarn create vite . --template react-ts
yarn add @mui/material @emotion/react @emotion/styled @mui/icons-material valtio
```
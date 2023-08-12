# OptiSentry Application Client & Server

![OptiSentry Application](https://res.cloudinary.com/dgu9rv3om/image/upload/v1691673076/optisentry/report_light_desktop.png)

**OptiSentry** is an open-source application performance and security monitoring system. Currently, for any given web application, it generates a report consisting of two parts:

1. Performance analysis, which contains the web application's performance report generated against one of OptiSentry's diagnostic servers running on a cloud instance deployed at a specific location (e.g., Singapore, London, Oregon, N. Virginia). The performance analysis is conducted using Google's `lighthouse` tool running on a headless browser of the rendering engine (i.e. webkit, chromium or firefox) or viewports of your choice.
2. Security analysis (WIP)

This repository contains the **application client & server** for the OptiSentry system. It's a monorepo consisting of two workspaces:
1. The **application client** for displaying the projects owned by the users and the reports generated for different projects, a explore page consisting of public reports of various applications, the account & project settings, amongst other things. All things client, goes into the `web` sub-directory.
2. The **application server** which directs the diagnostic server to generate the performance & security report for an application on a cloud instance deployed, it connects to the database to store the information, amngst other things. All things server, goes into the `api` sub-directory.

## Setup

**Repos**

OptiSentry consists of three parts:
1. **Client**, which is a react client that allows users to generate and retrieve performance and security reports, authenticate users, amongst other things.
2. **Application Server**, which is the server that handles client requests for storing and accessing data, amongst other things, including communicating with the diagonostics server and replaying the information back to client.
3. **Diagonostics Server**, which is the server that generates performance and security reports.


**Prerequisites**

OptiSentry's client and application server is a Redwood.js application and follows the typical Redwood structure and setup requirements:

```
Redwood requires Node.js (>=18.x) and Yarn (>=1.15)
```

Start by installing dependencies:

```

yarn install
```

Then change into that directory and start the development server:

```
git clone https://github.com/n00bgineer/optisentry.git ./optisentry-main
cd optisentry-main
yarn install
yarn redwood dev
```

To successfully run the development server, you'll need some additional information:

1. You'll need an environment variable file (i.e. `.env`) with the PostgreSQL connection string which is stored in a key called `DATABASE_URL`:
```
DATABASE_URL=postgresql://db_name:db_password@db_url:db_port
```
2. You'll also need keys from Firebase for authentication. Just search for the key `apiKey` and replace the following variables:
```
{
  apiKey: 'AIzaSyA3aHw_Ci2dk0XvKiyEHhXe9xINzForu7g',
  authDomain: 'optisentry-dev.firebaseapp.com',
  projectId: 'optisentry-dev',
}
```

That's all you need to setup the development server, but there's more, you'll also need to setup the diagonostics server. Head over to `optisentry-diagonostics` repo for more info.


## Contributing

Contributions are welcome! If you find any issues or want to add new features, please open an issue or submit a pull request to the GitHub repository.

Before contributing, please read the contribution guidelines. If you have any questions or need assistance, please contact our support team at `n00bgineer@protonmail.com`.

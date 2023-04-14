# 📊 TypeScript-Express CRUD API

This is a TypeScript-based Express server project that performs CRUD operations on a MySQL database.

#### API is Live on : https://island-fuchsia-impala.glitch.me/

This is a free Glitch Server which takes 30s-50s to getting alive and then it ready to work.

#### You can also run on your local system by following instruction...

## 👇

## 🚀Getting Started

To get started, you'll need to install Node.js and npm on your machine. Then, clone this repository and install the dependencies:

```bash
git clone https://github.com/almightycoder4/CRUD-TypeScript-.git

```

You'll also need to set up credentials for MySQL Database, and update the .env file with your credentials:

Server will start on http://localhost:8080/

## API Routes

#### Get Students List:- http://localhost:8080/getData

#### Add a Student :- http://localhost:3035/addStd

#### Update Student Name by Student Id:- http://localhost:3035/updateData?type=stdName&std_id="{enter student_id}"&std_newName="{enter new name of student}"

#### Update Father Name by Student Id:- http://localhost:8080/updateData?type=fthName&std_id={Enter Student_id }&std_fthName={ Change Father Name}

#### Delete Student from Database by Student ID:-http://localhost:8080/delData?id={Enter Student_ID}

### You can use any API Platform, I used POSTMAN API

## 🙏 Acknowledgments

This project was made possible thanks to the following technologies:

- Node.js
- Express
- TypeScript
- Morgan
- CORS
- dotenv
  #### Thank you to the developers of these amazing tools and technologies!

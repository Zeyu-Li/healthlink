# Medical Consultation System

This project is part of my Software Engineering course's final project in my 3rd year. This is a website that enables patients to have a consultation with doctors remotely. The patient can choose a doctor to have a consultation by name and specialization and get the medical record that involve advisement or treatment from the doctor that have consult with because some of the case can be treat without going to the hospital. In the time of Covid 19 situation, hospital has become one of the most dangerous places. This website will be suitable for "New Normal" because it prevent oneself from having close contact with others.

## Functionality
  1. There are 3 user type, patient, doctor and staff. All registered user can login to the system and unregistered user can register as patient.
  2. The patient can select and search for the doctor that they want to consult with and be able to search by type of doctor specialization and by name.
  3. After the patient has selected the doctor to consult. They can request a video consultation to that doctor.
  4. During the consultation, the doctor can view their patient’s recent medical records and use them for diagnosis. Medical record is a document that explains all details about the patient's history.
  5. After the consultation, patient will get the medical record that involve advisement or treatment from the doctor that have consult with.
  6. The doctor can view, edit and delete past medical records for only the patient that they have consulted with. 
  7. All registered user can view and edit their profile.
  8. Staff role is to manage the doctor in the system.

## Technology
  1. React and TailwindCSS are use to build the client Frontend of the website. 
  2. Node.js and Express are use for the backend server and RESTful API
  3. Socket.io is use to implement an Online/Offline feature for doctor. Doctor that have login to the system and doesn't have a consultation at the moment will be consider as Online (available for patient). Doctor that have sign out, close the brower tab or in a current consultation will be consider as offline (not available for patient). These features are implement by socket.io room that use to manage the room for consultation. 
     They are 2 main socket.io room :
      1. General doctor room (Doctors that are in this room mean that the doctor is Online and available for patient)
      2. Individual doctor room (Room for consultation)

  4. WebRTC and PeerJS are use to create a video consultation feature. WebRTC is for video and media transfer and PeerJS is use for Peer-to-Peer connection.
  5. MongoDB is use for the NoSQL Database and use with Mongoose library.

## To run this project
  1. First you need to add config.env file that store the environment variables to use with the backend in the backend directory.
  ```
  NODE_ENV=development
  PORT=5000
  MONGO_URI= <Your MongoDB Url>
  API_URL = /api/v1
  secret = <Your secret code for JWT>
  ```
  2. Install dependencies for the Backend and Run the backend REST API by typing the following command.
  ```
  $ cd backend
  $ npm install
  $ npm start
  ```
  3. Install dependencies for the Frontend and Run the React frontend by typing the following command.
  ```
  $ cd ..
  $ cd frontend
  $ npm install
  $ npm start
  ```

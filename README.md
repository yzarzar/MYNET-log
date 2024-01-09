Hi! I'm Yar Zar (Junior Java Developer). It's nice to see you!

This project is called MYNET (movie website). But I just code logging process here. Would you wanna try it. Follow the steps by guiding bellow ! =>

>> For backend I used Spring, Java Framework. And then you have to build your schema (MySql)

   - mysql> creat database my_net_db;
   - mysql> use my_net_db;

   In [pplication.yml] file you have to modify => 
   
   datasource:
    url: jdbc:mysql://localhost:3306/my_net_db
    username: <your_user_name>
    password: <your_passsword>

>> And now you can run the application => ./mvnw spring-boot:run             Good job baby!

>> For the Front-end, I created this by using ==>
   - Reactjs one of the Javascript Framework,
   - Tailwindcss and other libraries and so on......
   To run this, make sure that you are in the right path/

   run in you command => - npm install
                         - npm run dev 
   Go to whatever browser which your prefer and [http://localhost:5173/]

   When you finished your registration click the sign button and inspect in the browser see in the console,
   if you sign in wrong username (or) passwrod, you will see 404 forbidden error

>> For Security, JWT Token, Spring Security was used.

I think, this cool, right? 

Thank you for your interest.

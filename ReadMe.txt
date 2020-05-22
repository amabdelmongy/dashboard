###  Description

A simple ticketing system. It consists of a frontend only.
Anonymous people can submit new tickets for the IT Support Team and logged in employees can view and edit committed tickets.  
  
The application have the following functionalities: 
  - **Submit new Ticket**  
    Anonymous users should be able to submit new tickets by filling out a form with the following fields:  
    - Name
    - Email
    - Subject
    - Type (*Bug Report*, *Feature Request*, *Other*)
    - Urgency (*Low*, *Mid*, *High*)
    - Message

  - **View, Edit status Tickets (login required)**  
    Logged in users should be able to see a list of all submitted tickets. 
    Each ticket must also have one of the following status:  
    - *Open*
    - *In Progress*
    - *Completed*
    - *Rejected*
    
### Solution Description

	- The application contains two main modules :-
		- first module contains Dashboard , open ticket and side menu
		- second module contains login view  
    - Using HttpInterceptor 
	    - to insert Authorization Bearer at any Http request header  
	    - Redirect to login page if the web api server throw 401 excepation 
   - live demo 
                 http://mongy.atwebpages.com/

### Technology   
 -  using Angular 5.1 , Angular cli , Type Script , Bootstrap , HTML, CSS and primeng 
 
 -  using free template and modify in the hierarchy  from https://www.creative-tim.com/product/material-dashboard-angular2 
 
-  Use Mocky to Get Http request Mock your HTTP responses to test your REST API https://www.mocky.io/

-  use https://requestb.in to Post Http request https://requestb.in/1b4fu2v1?inspect

###  How to run the code
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0 and angular 5.x.

1. Install NodeJs from [NodeJs Official Page](https://nodejs.org/en).
2. Open Terminal
3. Go to your file project
4. Make sure you have installed [Angular CLI](https://github.com/angular/angular-cli) already. If not, please install.
5. Run in terminal: ```npm install```
6. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
7. Build to productaion: ng build –prod –aot
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


### ToDo 
- Notification service add method for every type like Error and Info
- move all URLs to webconfig.json file to enable change all urls in production mode

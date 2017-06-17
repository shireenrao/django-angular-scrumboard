# Django Angularjs Scrumboard

### This is a proof of concept project showcasing how one can build an AngularJS app with Django Rest Framework.

Follow these instructions to get this project to work - 

+ Create a python virtual environment and activate it
  * Using python3 venv module:
    ```
    $ python3 -m venv ~/.virtualenvs/djangular
    $ source ~/.virtualenvs/djangular/bin/activate
    ```
  * If you have virtualenvwrapper installed, using mkvirtualenv:
    ```
    $ mkvirtualenv --python=python3 djangular
    ```

  * Using Anaconda:
     ```
     $ conda create -n djangular python=3.6
     # skip the source command on windows
     $ source activate djangular
     ```
+ Clone the repository
  ```
  (djangular) $ git clone git@github.com:shireenrao/django-angular-scrumboard.git
  (djangular) $ cd django-angular-scrumboard
  ```
+ Install dependent python packages from requirements.txt
  ```
  (djangular) $ pip install -r requirements.txt 
  ```
+ Make migrations and migrate to create your schema in sqlite
  ```
  (djangular) $ python manage.py makemigrations scrumboard
  (djangular) $ python manage.py migrate
  ```
+ Create superuser to login to django admin console to create your lists and some cards
  ``` 
  (djangular) $ python manage.py createsuperuser  
  ```
+ Start local django server 
  ```
  (djangular) $ python manage.py runserver
  ```
+ Go to the admin console at [http://127.0.0.1:8000/admin](http://127.0.0.1:8000/admin) and login with the account you created earlier.
+ Create the following 4 lists - TODO, WORKING, WAITING, DONE
+ Create a couple of cards. Try to create a card belonging to a list you created above. (You can choose the list from the drop down in the create card form). Now logout of the admin console.
+ Visit the link [http://127.0.0.1:8000/](http://127.0.0.1:8000/) to start the main app which has an angularjs front end and django rest framework backend.
+ Login with the user credentials created earlier and you should see the scrumboard.

Some of the features in the app: 
+ You can edit a card by clicking on it.
+ You can delete a card.
+ You can move a card to a different list by selecting the list and clicking on the Move button.
+ Click on Show Filters button to sort the card by card title, story points or business value. You can also Filter the cards by typing any word which maybe in the cards in the list you are trying to filter.




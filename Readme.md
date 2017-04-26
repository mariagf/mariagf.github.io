# mariagf.github.io
/**********************************
* DOSE Developer Coding Challenge *
***********************************/

/*********
* HOW TO *
**********/
1. Go to http://mariagf.github.io and the DOSE Digital Assistant would appear
2. Press the microphone button and say “DOSE, show me music” if you want to be redirected to DOSE music website or “DOSE, show me food” in case you want to be redirected to DOSE food webpage.
3. Press the stop red button to end the recording
4. What has been recorded would appear in a small rounded white box. In case it Is not what you wanted to say please try again. Take in consideration that some words have similar pronunciation.
(Additionally you can access to this web pages using the upper menu)

/*********
* TESTING *
**********/
1. Create a testing directory
$ mkdir testing
2. Move to the created directory
$ cd testing
3. Download Phyton bindings for Selenium
$ pip install selenium
4. Un zip the file and save it in usr/local/bin https://chromedriver.storage.googleapis.com/index.html?path=2.29/
5. Create a testing python file
$ touch test.py
6. Edit the file
$ vi test.py
7. Copy in the file this code: (Anyway you can find this file in the main folder > testing > test.py)
###########
# Imports #
###########

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import os
import time

###########################################################
# Select Chrome as the Web Criver and Charge the Web Page #
###########################################################

driver = webdriver.Chrome()
driver.get("http://mariagf.github.io")

###################################
# Check web page title and header #
###################################

pageTitle = driver.find_element_by_id("pageTitle")
assert pageTitle.text == "DOSE Voice Recognition"
title = driver.find_element_by_id("title")
assert title.text == "Digital Assistant"

#############################
# Voice Recognition - Music #
#############################

driver.find_element_by_id("rec").click()
time.sleep(4)
os.system("say 'DOSE, show me music'")
drive.find_element_by_id("rec").click()
time.sleep(4)

############################
# Voice Recognition - Food #
############################

driver.get("http://mariagf.github.io");
driver.find_element_by_id("rec").click()
time.sleep(1)
os.system("say 'DOSE, show me food'")
drive.find_element_by_id("rec").click()
time.sleep(4)
##################################
# Checking the Menu Funcionality #
#       1. Music                 #
#       2. Food                  #
#       3. Home                  #
##################################

driver.get("http://mariagf.github.io")
driver.find_element_by_id("music").click()
time.sleep(4)

driver.get("http://mariagf.github.io")
driver.find_element_by_id("food").click()
time.sleep(4)

driver.get("http://mariagf.github.io")
driver.find_element_by_id("home").click()

8. Save and exit the file pressing ESC :wq
9. Execute the test
$ python test.py

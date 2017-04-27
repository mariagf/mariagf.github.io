/*---------------------------------------------------------------------
   Name         : DOSE - Developer Coding Challenge Testing.py

   Version      :  2.0

   Author       :  Maria Garcia Fernandez

   Author URL   :  www.garciafdez.com

   Author Email : maria@garciafdez.com
----------------------------------------------------------------------*/
##################################
# Testing Python file - Selenium #
##################################

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

title = driver.find_element_by_id("title")
assert title.text == "Digital Assistant"

#############################
# Voice Recognition - Music #
#############################

driver.find_element_by_id("rec").click()
time.sleep(2) // to allow the use of the microphon
os.system("say 'DOSE, show me music'")
time.sleep(4)

############################
# Voice Recognition - Food #
############################

driver.get("http://mariagf.github.io");
driver.find_element_by_id("rec").click()
time.sleep(1)
os.system("say 'DOSE, show me food'")
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

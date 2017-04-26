from selenium import webdriver
from selenium.webdriver.common.keys import Keys

import os
import time

driver = webdriver.Chrome()
driver.get("http://mariagf.github.io")

microBtn = driver.find_element_by_id("rec").click()
time.sleep(4)
os.system("say 'DOSE, show me music'") 
time.sleep(4)


driver.get("http://mariagf.github.io");
microBtn = driver.find_element_by_id("rec").click()
time.sleep(1)
os.system("say 'DOSE, show me food'")
time.sleep(2)






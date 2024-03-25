from selenium import webdriver
from selenium.webdriver.common.keys import Keys 
from selenium.webdriver.common.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

import time

from datetime import datetime
import csv

chromedriver_path = 'C:/Users/user/Desktop/NEXT/HW/NEXT_HW_6/chromedriver-win64/chromedriver.exe'
user_data_dir = "C:/Users/user/Desktop/NEXT/HW/NEXT_HW_6/home"

chrome_options = Options()
chrome_options.add_argument(f"user-data-dir={user_data_dir}")

service = Service(executable_path=chromedriver_path)
driver = webdriver.Chrome(service=service, options=chrome_options)

driver.get('https://www.melon.com/chart/index.htm')



driver.find_element(By.TAG_NAME,'body').send_keys(Keys.PAGE_DOWN)

today=datetime.now().strftime('%Y%m%d')

file=open(f'{today}melon.csv',mode="w",newline='')
writer=csv.writer(file)
writer.writerow(["rank","album","like"])
    
infos=driver.find_elements(By.XPATH, '//*[@id="lst50"]')
for i, info in enumerate(infos, start=1):
    rank=i
    album=info.find_element(By.XPATH, f"/html/body/div/div[3]/div/div/div[3]/form/div/table/tbody/tr[{i}]/td[7]/div/div/div/a").text
    like=info.find_element(By.XPATH, f"/html/body/div/div[3]/div/div/div[3]/form/div/table/tbody/tr[{i}]/td[8]/div/button/span[2]").text
    
    writer.writerow([rank,album,like])
    
file.close()
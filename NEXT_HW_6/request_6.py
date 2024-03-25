from bs4 import BeautifulSoup as bs
import requests
from datetime import datetime
from openpyxl import Workbook

url = 'https://library.korea.ac.kr/datause/database/database-search-a/'

try:
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
    }
    response = requests.get(url, headers=headers)
    
    if response.status_code == 200:
        print("요청 성공")

        soup = bs(response.text, 'html.parser')
       
        
        pubs= soup.select(".item-pub")
        pubs= list(map(lambda x: x.text.strip(), pubs))
        print(pubs)

        types = soup.select(".item-type")
        types = list(map(lambda x: x.text.strip(), types))
        print(types)
    

        subjects = soup.select(".item-subject")
        subjects = list(map(lambda x: x.text.strip(), subjects))
        print(subjects)

        wb = Workbook()
        ws = wb.active

        ws.append(["제공사", "자료유형", "분야"])

        for pub, type_, subject in zip(pubs, types, subjects):
            ws.append([pub, type_, subject])  

        today = datetime.now().strftime('%Y%m%d')

        filename = f'lib_chart_{today}.xlsx'
        wb.save(filename)
        print(f"엑셀 파일 저장 완료: {filename}")

    else:
        print(f"Error: HTTP 요청 실패. 상태 코드:{response.status_code}")

except requests.exceptions.RequestException as e:
    print(f"Error: 요청 중 오류 발생. 오류 메세지: {e}")

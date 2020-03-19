import requests
import random
import time

while True:
    value = random.randint(0, 200)
    re = requests.get("https://api.thingspeak.com/update?api_key=DD739DMNORAFAGCZ&field1=" + str(value))
    re.encoding = 'utf8'
    print(re.text)
    if re.text == '10':
        break
    elif re.text == '0':
        time.sleep(5)
    
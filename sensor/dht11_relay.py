import RPi.GPIO as GPIO
import dht11  
import time

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
instance = dht11.DHT11(pin=4)
Relaypin = 18
GPIO.setup(Relaypin,GPIO.OUT)

def dht11_test():
    result = instance.read()
    if result.is_valid():
        temp = "%.1f" % result.temperature
        print(float(result.temperature))
        #humi = "%.1f" % result.humidity
        #message = temp, humi
        if result.temperature > 25:
            GPIO.output(Relaypin,GPIO.HIGH)
            # time.sleep(2)
            # GPIO.output(Relaypin,GPIO.LOW)
        else:
            GPIO.output(Relaypin,GPIO.LOW)
            
        # print(float(result.temperature))
    # time.sleep(1)

if __name__ == '__main__':
    dht11_test()
#dht11_test()
import RPi.GPIO as GPIO
import time
import sys

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
# number = int(sys.argv[1]) - 1
# number = 1
# SERVO_LIST = [17, 27, 22] 
# TCR_5000_LIST = [25, 8, 7]
# TRIG_LIST = [5, 6, 13]
# ECHO_LIST = [16, 20, 21]

# SERVO_PIN = SERVO_LIST[number]
# TCR_5000 = TCR_5000_LIST[number]
# TRIG = TRIG_LIST[number]
# ECHO = ECHO_LIST[number]

SERVO_PIN = 17
TCR_5000 = 25
TRIG = 5
ECHO = 16




GPIO.setup(SERVO_PIN, GPIO.OUT)
GPIO.setup(TCR_5000, GPIO.IN)
GPIO.setup(TRIG, GPIO.OUT)
GPIO.setup(ECHO, GPIO.IN)

GPIO.output(TRIG, False)

pwm = GPIO.PWM(SERVO_PIN, 50)
pwm.start(0)


#i = 100000

def ultra_sonic():    
    GPIO.output(TRIG, True)
    time.sleep(0.00001)    
    GPIO.output(TRIG, False)
       
    while GPIO.input(ECHO) == 0:
        start = time.time()
           
    while GPIO.input(ECHO) == 1:
        stop = time.time()
           
    check_time= stop - start
    distance = check_time*34300 / 2
    #percent = distance // 10 * 10
    print("%.1f"%distance)
    time.sleep(0.4)

i = 0

def ultra_servo_tcr():  

    global i
    try:
      
        while True: 
           
            if GPIO.input(TCR_5000) == 0:
                #print("detected hand")
                ultra_sonic()
                break
            else:
      
                if i == 1000000:
                    pwm.ChangeDutyCycle(9.5)
                elif i == 2000000:
                    pwm.ChangeDutyCycle(2.5)
            
                if i == 2000000:
                    i = 1
                else:
                    i+=1  
    finally:
        pwm.stop()
        GPIO.cleanup()

ultra_servo_tcr()


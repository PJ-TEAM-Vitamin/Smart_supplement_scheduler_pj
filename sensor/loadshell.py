import time
import sys

EMULATE_HX711=False

referenceUnit = 1

if not EMULATE_HX711:
    import RPi.GPIO as GPIO
    from hx711 import HX711
else:
    from emulated_hx711 import HX711

def cleanAndExit():
    

    if not EMULATE_HX711:
        GPIO.cleanup()
        
   
    sys.exit()

hx = HX711(24, 23)


hx.set_reading_format("MSB", "MSB")

hx.set_reference_unit(270)
#hx.set_reference_unit(referenceUnit) #보정 필요

hx.reset()

hx.tare()

val = 0

def loadshell():
    for i in range(0,10):
        val = hx.get_weight(5)
        #print(val)
        hx.power_down()
        hx.power_up()
        time.sleep(0.02)
    
    print(int(val))




if __name__ == '__main__':
   loadshell()
#loadshell()
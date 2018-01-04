extern "C"{
  #include <USBAPI.h>
  #include "reading.h"
}
void setup() {
  Serial.begin(9600);
  Serial.println("Good to go");
}

void loop() {
  Serial.println(readPot());
}

/*
 * Sketch for the Arduino IDE to read from the DHT22 Sensor
 *
 * - The .ino files runs in ardunio ide
 * - Add the library files - DHT.cpp and DHT.h to the User's arudino lib folder 
 *   Example: /Users/${user}/Documents/Arduino/libraries/
 * - You can then read the serial output of this program in a Processing or P5.js script
 * - Data is printed as "h,t" onto serial out by this program
 *
 */

#include "DHT.h"
#define DHTPIN 2     // what pin we're connected to
#define DHTTYPE DHT22   // DHT 22  (AM2302)

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  Serial.println("DHT Setup");
  dht.begin();
}

void loop() {
  // Reading temperature or humidity takes about 250 milliseconds!
  // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)
  float h = dht.readHumidity();
  float t = dht.readTemperature();

  // check if returns are valid, if they are NaN (not a number) then something went wrong!
  if (isnan(t) || isnan(h)) {
    Serial.println("Failed to read from DHT");
  } else {
    Serial.print(h);
    Serial.print(",");
    Serial.println(t);
  }
}

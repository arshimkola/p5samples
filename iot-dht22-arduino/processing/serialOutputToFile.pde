import processing.serial.*;
import java.util.Date;

Serial commPort;

float tempC = 0;
float tempF = 0;
float prevtempC = 0;
float prevRH = 0;

float RH;
float y, h, msbyte, lsbyte;

int yDist, xx=-15;

PFont font12;
PFont font24;
PFont font10;

String dataFile="data.csv";


void setup()
{
	font12 = createFont("Arial", 12);
	font10 = createFont("Arial",10);
	font24 = createFont("Arial",16);
	size(345, 330);
	commPort = new Serial(this, Serial.list()[1], 9600);
}

void draw()
{
	background(150);
	//Disegno termometro
	// Bulbo
	fill(200, 0, 0);
	smooth();
	stroke(0, 46, 200);
	strokeWeight(8);
	ellipse(250, 250, 58, 50);

	//Thermometer 
	noStroke();
	fill(0, 46, 200);
	arc(250, 30, 30, 20, PI, PI+PI);
	rect(235.2,30,30,200);

	// Mercury Level
	fill(250, 250, 250);
	rect(245,30,10,200);

	// Number markers on Thermometer
	stroke(245, 240, 220);
	strokeWeight(1);
	textAlign(RIGHT);
	fill(0,46,250);

	// Farenheit
	stroke(0);
	for (int i = 0; i < 5; i += 1) {
		line(222, 190-40*i, 232, 190-40*i);
		if(i < 4) line(225, 170-40*i, 230, 170-40*i);
		textFont(font12);
		text(str(40+20*i), 218, 195-40*i);
	}

	// Centigrade
	textAlign(LEFT);
	for (int i = 0; i < 6; i += 1) {
		line(268, 204-35*i, 278, 204-35*i);
		if(i < 5) line(268, 187-35*i, 273, 187-35*i);
		textFont(font12);
		text(str(0+10*i), 282, 210-35*i);
	}

	// Mercury level
	fill(200,0, 0);
	smooth();
	strokeWeight(0);
	y = -2.0*tempF + 268;
	h = 240-y;
	rect(245.2, y, 10, h);

	// Side Panels
	fill(120);
	stroke(0);
	strokeWeight(1);
	rect(10,10,180,140,7);
	rect(10,160, 180, 150, 7);
	fill(0,0,0);
	textFont(font24);
	textAlign(LEFT);
	text("Ambient Temp/Humidity", 20,35);
	text("°C", 70, 70);
	text(nfc(tempC, 1), 20, 70);
	text("°F", 70, 100);
	text(nfc(tempF, 1), 20, 100);
	text("% UR", 70, 130);
	text(nfc(RH, 0), 20, 130);

	textFont(font12);
	String s = ("DHT22 Temp and humidity");
	text(s, 20, 170, 150, 140);
}

/**
 * Update the global var values for Temp, Humidity, PrevTemp and PrevHumidity
 */
void serialEvent(Serial p) {
	// get message till line break (ASCII > 13)
	String message = p.readStringUntil(13);
	if (message != null) {
		// try catch function because of possible garbage in received data
		try {
			String[] elements = splitTokens(message,",");
			RH = float(elements[0]);
			tempC = float(elements[1]);
			tempF = (((tempC)*9)/5) + 32;
			writeToFile();
			prevtempC = tempC;
			prevRH = RH;
		}
		catch (Exception e) {
		}
	}
}

/**
 * Assumes the Data file exists 
 */
void writeToFile(){
	String output=""+new Date()+"|tempC="+tempC+"|humidity="+RH;
	println(output);
	// Only write to file IF there is a significant change 
	if( abs(tempC-prevtempC) > 0.1 || abs(RH-prevRH) > 0.1 ){
		saveStrings(dataFile, new String[]{output});
	}
}
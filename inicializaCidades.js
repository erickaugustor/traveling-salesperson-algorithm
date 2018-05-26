const AdicionaCidades = (graph) => {
  graph.addEdge('Albany', 'Boston', 170);
  graph.addEdge('Albany', 'Nova York', 150);
  graph.addEdge('Albany', 'Detroit', 650);

  graph.addEdge('Boston', 'Albany', 170);
  graph.addEdge('Boston', 'Nova York', 210);

  graph.addEdge('Nova York', 'Boston', 210);
  graph.addEdge('Nova York', 'Albany', 150);
  graph.addEdge('Nova York', 'Detroit', 640);
  graph.addEdge('Nova York', 'Washington', 240);

  graph.addEdge('Washington', 'Nova York', 240);
  graph.addEdge('Washington', 'Detroit', 530);
  graph.addEdge('Washington', 'Chicago', 700);
  graph.addEdge('Washington', 'Indianapolis', 590);
  graph.addEdge('Washington', 'Richmond', 200);

  graph.addEdge('Richmond', 'Washington', 200);
  graph.addEdge('Richmond', 'Nashville', 710);
  graph.addEdge('Richmond', 'Atlanta', 560);

  graph.addEdge('Indianapolis', 'Washington', 590);
  graph.addEdge('Indianapolis', 'Nashville', 290);
  graph.addEdge('Indianapolis', 'StLouis', 250);
  graph.addEdge('Indianapolis', 'Chicago', 180);

  graph.addEdge('Chicago', 'Milwaukee', 90);
  graph.addEdge('Chicago', 'Detroit', 280);
  graph.addEdge('Chicago', 'Washington', 700);
  graph.addEdge('Chicago', 'Indianapolis', 180);
  graph.addEdge('Chicago', 'StLouis', 300);
  graph.addEdge('Chicago', 'Omaha', 470);
  graph.addEdge('Chicago', 'Mineapolis', 430);

  graph.addEdge('Nashville', 'Indianapolis', 290);
  graph.addEdge('Nashville', 'Richmond', 710);
  graph.addEdge('Nashville', 'Atlanta', 240);
  graph.addEdge('Nashville', 'Memphis', 210);

  graph.addEdge('Milwaukee', 'Chicago', 90);
  graph.addEdge('Milwaukee', 'Mineapolis', 340);

  graph.addEdge('Atlanta', 'Nashville', 240);
  graph.addEdge('Atlanta', 'Richmond', 560);
  graph.addEdge('Atlanta', 'Orlando', 440);
  graph.addEdge('Atlanta', 'Nova Orleans', 470);
  graph.addEdge('Atlanta', 'Memphis', 390);
  graph.addEdge('Atlanta', 'Dallas', 790);

  graph.addEdge('Memphis', 'StLouis', 290);
  graph.addEdge('Memphis', 'Nashville', 210);
  graph.addEdge('Memphis', 'Atlanta', 390);
  graph.addEdge('Memphis', 'Little Rock', 140);

  graph.addEdge('StLouis', 'Chicago', 300);
  graph.addEdge('StLouis', 'Indianapolis', 250);
  graph.addEdge('StLouis', 'Memphis', 290);
  graph.addEdge('StLouis', 'Little Rock', 400);
  graph.addEdge('StLouis', 'Kansas City', 250);

  graph.addEdge('Kansas City', 'Omaha', 190);
  graph.addEdge('Kansas City', 'StLouis', 250);
  graph.addEdge('Kansas City', 'Dallas', 550);


  graph.addEdge('Mineapolis', 'Milwaukee', 340);
  graph.addEdge('Mineapolis', 'Chicago', 430);
  graph.addEdge('Mineapolis', 'Omaha', 380);
  graph.addEdge('Mineapolis', 'Yellowstone', 1340);

  graph.addEdge('Little Rock', 'StLouis', 400);
  graph.addEdge('Little Rock', 'Memphis', 140);
  graph.addEdge('Little Rock', 'Dallas', 320);

  graph.addEdge('Dallas', 'Little Rock', 320);
  graph.addEdge('Dallas', 'Kansas City', 550);
  graph.addEdge('Dallas', 'Atlanta', 790);
  graph.addEdge('Dallas', 'Houston', 250);
  graph.addEdge('Dallas', 'San Antonio', 280);
  graph.addEdge('Dallas', 'Phoenix', 1070);
  graph.addEdge('Dallas', 'Colorado Springs', 730);

  graph.addEdge('Omaha', 'Chicago', 470);
  graph.addEdge('Omaha', 'Kansas City', 250);
  graph.addEdge('Omaha', 'Denver', 250);
  graph.addEdge('Omaha', 'Mineapolis', 380);

  graph.addEdge('Colorado Springs', 'Denver', 120);
  graph.addEdge('Colorado Springs', 'Dallas', 730);
  graph.addEdge('Colorado Springs', 'Aspen', 180);

  graph.addEdge('Orlando', 'Atlanta', 440);
  graph.addEdge('Orlando', 'Fort Lauderdale', 180);
  graph.addEdge('Orlando', 'Miami', 230);
  graph.addEdge('Orlando', 'Nova Orleans', 640);

  graph.addEdge('Fort Lauderdale', 'Miami', 30);
  graph.addEdge('Fort Lauderdale', 'Orlando', 180);

  graph.addEdge('Miami', 'Fort Lauderdale', 30);
  graph.addEdge('Miami', 'Orlando', 230);
  graph.addEdge('Miami', 'Nova Orleans', 860);

  graph.addEdge('Nova Orleans', 'Atlanta', 470);
  graph.addEdge('Nova Orleans', 'Orlando', 640);
  graph.addEdge('Nova Orleans', 'Miami', 860);
  graph.addEdge('Nova Orleans', 'Houston', 530);

  graph.addEdge('Denver', 'Yellowstone', 930);
  graph.addEdge('Denver', 'Omaha', 540);
  graph.addEdge('Denver', 'Colorado Springs', 120);
  graph.addEdge('Denver', 'Aspen', 170);
  graph.addEdge('Denver', 'Vail', 160);
  graph.addEdge('Denver', 'Salt Lake City', 530);

  graph.addEdge('Aspen', 'Vail', 80);
  graph.addEdge('Aspen', 'Denver', 170);
  graph.addEdge('Aspen', 'Colorado Springs', 180);

  graph.addEdge('Vail', 'Denver', 160);
  graph.addEdge('Vail', 'Aspen', 80);

  graph.addEdge('Yellowstone', 'Mineapolis', 1340);
  graph.addEdge('Yellowstone', 'Boise', 670);
  graph.addEdge('Yellowstone', 'Denver', 930);

  graph.addEdge('Salt Lake City', 'Denver', 530);
  graph.addEdge('Salt Lake City', 'Phoenix', 660);
  graph.addEdge('Salt Lake City', 'Las Vegas', 420);
  graph.addEdge('Salt Lake City', 'Lake Tahoe', 520);

  graph.addEdge('Las Vegas', 'Salt Lake City', 420);
  graph.addEdge('Las Vegas', 'GrandCanyon', 470);
  graph.addEdge('Las Vegas', 'PalmSprings', 290);
  graph.addEdge('Las Vegas', 'LosAngeles', 270);

  graph.addEdge('GrandCanyon', 'Phoenix', 360);
  graph.addEdge('GrandCanyon', 'PalmSprings', 440);
  graph.addEdge('GrandCanyon', 'Las Vegas', 470);

  graph.addEdge('Boise', 'Yellowstone', 670);
  graph.addEdge('Boise', 'Lake Tahoe', 420);
  graph.addEdge('Boise', 'Portland', 420);
  graph.addEdge('Boise', 'Seatle', 500);

  graph.addEdge('PalmSprings', 'Las Vegas', 290);
  graph.addEdge('PalmSprings', 'GrandCanyon', 440);
  graph.addEdge('PalmSprings', 'SanDiego', 140);
  graph.addEdge('PalmSprings', 'LosAngeles', 160);

  graph.addEdge('Phoenix', 'Salt Lake City', 660);
  graph.addEdge('Phoenix', 'Dallas', 1070);
  graph.addEdge('Phoenix', 'San Antonio', 990);
  graph.addEdge('Phoenix', 'SanDiego', 350);
  graph.addEdge('Phoenix', 'GrandCanyon', 360);

  graph.addEdge('SanDiego', 'LosAngeles', 120);
  graph.addEdge('SanDiego', 'PalmSprings', 140);
  graph.addEdge('SanDiego', 'Phoenix', 350);

  graph.addEdge('LosAngeles', 'San Francisco', 380);
  graph.addEdge('LosAngeles', 'Las Vegas', 270);
  graph.addEdge('LosAngeles', 'PalmSprings', 160);
  graph.addEdge('LosAngeles', 'SanDiego', 120);

  graph.addEdge('Lake Tahoe', 'Portland', 580);
  graph.addEdge('Lake Tahoe', 'Boise', 420);
  graph.addEdge('Lake Tahoe', 'Salt Lake City', 520);
  graph.addEdge('Lake Tahoe', 'PalmSprings', 780);
  graph.addEdge('Lake Tahoe', 'San Francisco', 300);

  graph.addEdge('San Francisco', 'Portland', 640);
  graph.addEdge('San Francisco', 'Lake Tahoe', 300);
  graph.addEdge('San Francisco', 'LosAngeles', 380);

  graph.addEdge('Portland', 'Seatle', 170);
  graph.addEdge('Portland', 'Boise', 420);
  graph.addEdge('Portland', 'Lake Tahoe', 580);
  graph.addEdge('Portland', 'San Francisco', 640);

  graph.addEdge('Seatle', 'Boise', 500);
  graph.addEdge('Seatle', 'Portland', 170);

  graph.addEdge('Detroit', 'Albany', 650);
  graph.addEdge('Detroit', 'Nova York', 640);
  graph.addEdge('Detroit', 'Washington', 530);
  graph.addEdge('Detroit', 'Chicago', 280);

  graph.addEdge('San Antonio', 'Dallas', 280);
  graph.addEdge('San Antonio', 'Houston', 310);
  graph.addEdge('San Antonio', 'Phoenix', 990);

  graph.addEdge('Houston', 'Dallas', 250);
  graph.addEdge('Houston', 'Nova Orleans', 530);
  graph.addEdge('Houston', 'San Antonio', 310);
}

module.exports = AdicionaCidades;

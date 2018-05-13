const AdicionaCidades = (graph) => {
  graph.addEdge('Albany', 'Boston', 170);
  graph.addEdge('Albany', 'NovaYork', 150);
  graph.addEdge('Albany', 'Detroit', 650);

  graph.addEdge('Boston', 'Albany', 170);
  graph.addEdge('Boston', 'NovaYork', 210);

  graph.addEdge('NovaYork', 'Boston', 210);
  graph.addEdge('NovaYork', 'Albany', 150);
  graph.addEdge('NovaYork', 'Detroit', 640);
  graph.addEdge('NovaYork', 'Washington', 240);

  graph.addEdge('Washington', 'NovaYork', 240);
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
  graph.addEdge('Atlanta', 'NovaOrleans', 470);
  graph.addEdge('Atlanta', 'Memphis', 390);
  graph.addEdge('Atlanta', 'Dallas', 790);

  graph.addEdge('Memphis', 'StLouis', 290);
  graph.addEdge('Memphis', 'Nashville', 210);
  graph.addEdge('Memphis', 'Atlanta', 390);
  graph.addEdge('Memphis', 'LittleRock', 140);

  graph.addEdge('StLouis', 'Chicago', 300);
  graph.addEdge('StLouis', 'Indianapolis', 250);
  graph.addEdge('StLouis', 'Memphis', 290);
  graph.addEdge('StLouis', 'LittleRock', 400);
  graph.addEdge('StLouis', 'KansasCity', 250);

  graph.addEdge('KansasCity', 'Omaha', 190);
  graph.addEdge('KansasCity', 'StLouis', 250);
  graph.addEdge('KansasCity', 'Dallas', 550);


  graph.addEdge('Mineapolis', 'Milwaukee', 340);
  graph.addEdge('Mineapolis', 'Chicago', 430);
  graph.addEdge('Mineapolis', 'Omaha', 380);
  graph.addEdge('Mineapolis', 'Yellowstone', 1340);

  graph.addEdge('LittleRock', 'StLouis', 400);
  graph.addEdge('LittleRock', 'Memphis', 140);
  graph.addEdge('LittleRock', 'Dallas', 320);

  graph.addEdge('Dallas', 'LittleRock', 320);
  graph.addEdge('Dallas', 'KansasCity', 550);
  graph.addEdge('Dallas', 'Atlanta', 790);
  graph.addEdge('Dallas', 'Houston', 250);
  graph.addEdge('Dallas', 'SanAntonio', 280);
  graph.addEdge('Dallas', 'Phoenix', 1070);
  graph.addEdge('Dallas', 'ColoradoSprings', 730);

  graph.addEdge('Omaha', 'Chicago', 470);
  graph.addEdge('Omaha', 'KansasCity', 250);
  graph.addEdge('Omaha', 'Denver', 250);
  graph.addEdge('Omaha', 'Mineapolis', 380);

  graph.addEdge('ColoradoSprings', 'Denver', 120);
  graph.addEdge('ColoradoSprings', 'Dallas', 730);
  graph.addEdge('ColoradoSprings', 'Aspen', 180);

  graph.addEdge('Orlando', 'Atlanta', 440);
  graph.addEdge('Orlando', 'FortLauderdale', 180);
  graph.addEdge('Orlando', 'Miami', 230);
  graph.addEdge('Orlando', 'NovaOrleans', 640);

  graph.addEdge('FortLauderdale', 'Miami', 30);
  graph.addEdge('FortLauderdale', 'Orlando', 180);

  graph.addEdge('Miami', 'FortLauderdale', 30);
  graph.addEdge('Miami', 'Orlando', 230);
  graph.addEdge('Miami', 'NovaOrleans', 860);

  graph.addEdge('NovaOrleans', 'Atlanta', 470);
  graph.addEdge('NovaOrleans', 'Orlando', 640);
  graph.addEdge('NovaOrleans', 'Miami', 860);
  graph.addEdge('NovaOrleans', 'Houston', 530);

  graph.addEdge('Denver', 'Yellowstone', 930);
  graph.addEdge('Denver', 'Omaha', 540);
  graph.addEdge('Denver', 'ColoradoSprings', 120);
  graph.addEdge('Denver', 'Aspen', 170);
  graph.addEdge('Denver', 'Vail', 160);
  graph.addEdge('Denver', 'SaltLakeCity', 530);

  graph.addEdge('Aspen', 'Vail', 80);
  graph.addEdge('Aspen', 'Denver', 170);
  graph.addEdge('Aspen', 'ColoradoSprings', 180);

  graph.addEdge('Vail', 'Denver', 160);
  graph.addEdge('Vail', 'Aspen', 80);

  graph.addEdge('Yellowstone', 'Mineapolis', 1340);
  graph.addEdge('Yellowstone', 'Boise', 670);
  graph.addEdge('Yellowstone', 'Denver', 930);

  graph.addEdge('SaltLakeCity', 'Denver', 530);
  graph.addEdge('SaltLakeCity', 'Phoenix', 660);
  graph.addEdge('SaltLakeCity', 'LasVegas', 420);
  graph.addEdge('SaltLakeCity', 'LakeTahoe', 520);

  graph.addEdge('LasVegas', 'SaltLakeCity', 420);
  graph.addEdge('LasVegas', 'GrandCanyon', 470);
  graph.addEdge('LasVegas', 'PalmSprings', 290);
  graph.addEdge('LasVegas', 'LosAngeles', 270);

  graph.addEdge('GrandCanyon', 'Phoenix', 360);
  graph.addEdge('GrandCanyon', 'PalmSprings', 440);
  graph.addEdge('GrandCanyon', 'LasVegas', 470);

  graph.addEdge('Boise', 'Yellowstone', 670);
  graph.addEdge('Boise', 'LakeTahoe', 420);
  graph.addEdge('Boise', 'Portland', 420);
  graph.addEdge('Boise', 'Seatle', 500);

  graph.addEdge('PalmSprings', 'LasVegas', 290);
  graph.addEdge('PalmSprings', 'GrandCanyon', 440);
  graph.addEdge('PalmSprings', 'SanDiego', 140);
  graph.addEdge('PalmSprings', 'LosAngeles', 160);

  graph.addEdge('Phoenix', 'SaltLakeCity', 660);
  graph.addEdge('Phoenix', 'Dallas', 1070);
  graph.addEdge('Phoenix', 'SanAntonio', 990);
  graph.addEdge('Phoenix', 'SanDiego', 350);
  graph.addEdge('Phoenix', 'GrandCanyon', 360);

  graph.addEdge('SanDiego', 'LosAngeles', 120);
  graph.addEdge('SanDiego', 'PalmSprings', 140);
  graph.addEdge('SanDiego', 'Phoenix', 350);

  graph.addEdge('LosAngeles', 'SanFrancisco', 380);
  graph.addEdge('LosAngeles', 'LasVegas', 270);
  graph.addEdge('LosAngeles', 'PalmSprings', 160);
  graph.addEdge('LosAngeles', 'SanDiego', 120);

  graph.addEdge('LakeTahoe', 'Portland', 580);
  graph.addEdge('LakeTahoe', 'Boise', 420);
  graph.addEdge('LakeTahoe', 'SaltLakeCity', 520);
  graph.addEdge('LakeTahoe', 'PalmSprings', 780);
  graph.addEdge('LakeTahoe', 'SanFrancisco', 300);

  graph.addEdge('SanFrancisco', 'Portland', 640);
  graph.addEdge('SanFrancisco', 'LakeTahoe', 300);
  graph.addEdge('SanFrancisco', 'LosAngeles', 380);

  graph.addEdge('Portland', 'Seatle', 170);
  graph.addEdge('Portland', 'Boise', 420);
  graph.addEdge('Portland', 'LakeTahoe', 580);
  graph.addEdge('Portland', 'SanFrancisco', 640);

  graph.addEdge('Seatle', 'Boise', 500);
  graph.addEdge('Seatle', 'Portland', 170);

  graph.addEdge('Detroit', 'Albany', 650);
  graph.addEdge('Detroit', 'NovaYork', 640);
  graph.addEdge('Detroit', 'Washington', 530);
  graph.addEdge('Detroit', 'Chicago', 280);

  graph.addEdge('SanAntonio', 'Dallas', 280);
  graph.addEdge('SanAntonio', 'Houston', 310);
  graph.addEdge('SanAntonio', 'Phoenix', 990);

  graph.addEdge('Houston', 'Dallas', 250);
  graph.addEdge('Houston', 'NovaOrleans', 530);
  graph.addEdge('Houston', 'SanAntonio', 310);
}

module.exports = AdicionaCidades;

## Inspiration
This project was inspired by NMF earth's app that helps user track their carbon footprint day to day.

## What it does
MindFully provides integrations to monday.com users that can help them convert metrics such as distance travelled in car to number of hours of audio content streamed to carbon footprint in kgCO2e. Using monday.com's charting features, users can create dashboards that would help them visualize the major carbon footprint sources from their day to day life.

## How we built it
We built it by first starting with the quick integrations project helper provided by monday.com and modifying it to our needs. We take constant values for carbon footprint calculation for NMF earth's open source github repository: https://github.com/NMF-earth/carbon-footprint

## Challenges we ran into
The major challenge that we ran into was we wanted to create a synchronous API so that multiple integrations adding carbon footprint into one output column should wait before the write is finished from the previous API call.

## Accomplishments that we're proud of
We have integrated some major categories of carbon emission sources in this app that can help users track the major sources adding to their carbon footprint. 

## What we learned
While developing this project we became more aware about our own carbon footprint and got to know interesting facts like **1 KG of lamb food can lead to the same amount of CO2 emissions as 90 miles travelled in a car**. We hope to make monday users more aware of their own carbon footprint and impact on the world.

## What's next for MindFully
We would like to create a custom view for monday users so that instead of creating new integrations in their board for carbon footprint calculation they can open a view, fill a form and add sources of carbon emission along with pre made dashboards that can help them track down and reduce their footprint instead of users having to create their own analysis
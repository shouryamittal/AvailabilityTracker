Assumptions: 
1. Radius is 200m
2. Data is pushed every 60 sec.

Steps to run:
PORT 3000 node index.js

Approach:
- The data which is received in realtime, is saved in the noSQL db.
- The data is saved to the database periodically.
- Once a request is received to find all drivers within a radius, the user's coordinates are used to find the distance between driver's locations and user locations.


DB Schema: A db document looks something like this.
{
    location: {
        coordinates,
        type
    }
}


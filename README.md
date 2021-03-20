Coding Challenge!

When I saw the challenge I started thinking right away in the logic I needed to do to complete it.

I realized that I needed to a for loop inside another foor loop so I could read and save the child of each object if it was the case.
That said the structure started with a for loop, then a condition to check if the object had a child and then another for loop to read and save the value of the childs.

When I started writing the code I realized that I didn't really know the sintaxe of what I needed to implement so I started looking in the internet how I could write it. Probably this is why I took around 5h (in different days, for example 2h + 2h + 1h ) to complete this challenge.

Finally today all the sintaxe was correct and I started doing tests when I realized that if a child had another child the code wouldn't produce the expected result. In that moment I realized that I needed to implement an recursive function to avoid doing a for loop everytime a child of a child appear. I decided not to do this because in your example you only use a child of an object.

For this code you case use the following examples:

{
    "a": 1,
    "b": true,
    "c": {
        "d": 3,
        "e": "test"
    }
}

Result: 

{
  "a": 1,
  "b": true,
  "c.d": 3,
  "c.e": "test"
}

-----------------

{
    "a": 1,
    "b": true,
    "c": {
        "d": 3,
        "e": "test"
    },
    "f": {
        "g": 7,
        "h": "test2",
        "i": false
    }
}

Result:

{
  "a": 1,
  "b": true,
  "c.d": 3,
  "c.e": "test",
  "f.g": 7,
  "f.h": "test2",
  "f.i": false
}

To run the code you just need to have Nodejs installed in your local computer and run the following command in the terminal: node ./index.js

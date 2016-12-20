# USC Courses Slash Command for Mixmax

Sample slash command for Mixmax to list courses available in USC. It reads course data from a static json file.

## Running locally

1. Install using `npm install`
2. Run using `npm start`

To simulate locally how Mixmax calls the typeahead URL (to return a JSON list of typeahead results), run:

```
curl http://localhost:9000/typeahead
```

To simulate locally how Mixmax calls the resolver URL (to return HTML that goes into the email), run:

```
curl http://localhost:9000/resolver?text=CSCI%20103L
```

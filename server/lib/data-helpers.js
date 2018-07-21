"use strict";

const ObjectId = require("mongodb").ObjectId;

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // deletes a tweet
    deleteTweet: function (tweetId, callback) {
      db.collection("tweets").deleteOne({
        "_id": ObjectId(tweetId)
      }, callback);
    },

    // Saves a tweet to `db`
    saveTweet: function (newTweet, callback) {
      db.collection("tweets").insertOne(newTweet, callback);
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function (callback) {

      db.collection("tweets").find().toArray(function (err, tweets) {
        const sortNewestFirst = (a, b) => a.created_at - b.created_at;
        callback(null, tweets.sort(sortNewestFirst));
      });
    }
  };
}
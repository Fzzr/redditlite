// TEST RUNNER
// ============

import fetch from "node-fetch";
global.fetch = fetch;

import mocha from "mocha";
import { expect } from "chai";
import fetchMock from "fetch-mock";

import { emptyListing } from "../src/api/reddit";
import sampleListing from "./sample_listing.json";
import { getSubredditListing } from "../src/api/reddit";

const subreddit = "smashbros";
const matcher = `https://www.reddit.com/r/${subreddit}.json`;

describe("API", () => {
  describe("reddit", () => {
    describe("getSubredditListing", () => {
      afterEach(() => {
        fetchMock.reset()
      });

      it("should handle a successful response", () => {
        let result;
        
        fetchMock.get(matcher, sampleListing);
        
        getSubredditListing(subreddit)
          .then(response => {
            expect(response).to.deep.equal(sampleListing);
          });

        expect(fetchMock.called(matcher)).to.be.true;
      });

      it("should handle an empty subreddit", () => {
        fetchMock.mock("*", 200);

        getSubredditListing("");

        expect(fetchMock.called("*")).to.be.false;
      });

      it("should handle a missing subreddit", () => {
        fetchMock.mock("*", 200);

        getSubredditListing();

        expect(fetchMock.called("*")).to.be.false;
      });
    });
  });
});

// TEST RUNNER
// ============

import fetch from "node-fetch";
global.fetch = fetch;

import mocha from "mocha";
import { expect } from "chai";
import fetchMock from "fetch-mock";

import sampleListing from "./sample_listing.json";
import { getSubredditListing } from "../src/api/reddit";

describe("API", () => {
  describe("reddit", () => {
    describe("getSubredditListing", () => {
      afterEach(() => {
        fetchMock.reset()
      });

      it("should handle a successful response", () => {
        const subreddit = "smashbros";
        const matcher = `https://www.reddit.com/r/${subreddit}.json`;
        let result;
        
        fetchMock.get(matcher, sampleListing/*, {sendAsJson: true}*/);
        
        getSubredditListing(subreddit)
          .then(response => {
            expect(response).to.deep.equal(sampleListing);
          });

        expect(fetchMock.called(matcher)).to.be.true;
      });

      it("should handle an empty subreddit", () => {
        const subreddit = "";
        
        fetchMock.mock("*", 200);

        getSubredditListing();

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

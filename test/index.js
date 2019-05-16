// TEST RUNNER
// ============

import "regenerator-runtime/runtime";

import fetch from "node-fetch";
global.fetch = fetch;

import mocha from "mocha";
import { expect } from "chai";
import fetchMock from "fetch-mock";
import SagaTester from "redux-saga-tester";

import { emptyListing } from "../src/api/reddit";
import sampleListing from "./sample_listing.json";

import { getSubredditListing } from "../src/api/reddit";
import redditReducer from "../src/redux/reducers/reddit";
import rootReducer from "../src/redux/reducers";
import redditSagas from "../src/redux/sagas/reddit";
import { fetchListing, updateListing } from "../src/redux/actions/reddit";

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

describe("Redux", () => {
  describe("reducers", () => {
    describe("reddit", () => {
      it ("should return the initial state", () => {
        const reducer = redditReducer(undefined, {});

        expect(reducer).to.deep.equal({
          listing: emptyListing,
        });
      });

      it("should handle updating the listing", () => {
        const reducer = redditReducer(undefined, updateListing(sampleListing));

        expect(reducer).to.deep.equal({
          listing: sampleListing,
        });
      });
    });
  });

  describe("sagas", () => {
    describe("reddit", () => {
      afterEach(() => {
        fetchMock.reset();
      });

      const initialState = {
        reddit: {
          listing: emptyListing,
        },
      };

      it("should fetch and update a listing", async () => {
        const sagaTester = new SagaTester({
          initialState,
          reducers: rootReducer,
        });

        fetchMock.get(matcher, sampleListing);

        sagaTester.start(redditSagas.watchFetchListingSaga);

        sagaTester.dispatch(fetchListing(subreddit));
        await sagaTester.waitFor(updateListing.toString());

        const state = sagaTester.getState();

        expect(fetchMock.called(matcher)).to.be.true;
        expect(sagaTester.wasCalled(updateListing.toString())).to.be.true;
        expect(state.reddit.listing).to.deep.equal(sampleListing);
        // console.log(sagaTester.getCalledActions())
      });
    });
  })
});
